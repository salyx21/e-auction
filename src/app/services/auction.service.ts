import { Injectable, Output } from "@angular/core";
import { Product } from "../auction-page/product/product.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuctionService {
    private prods: Product[] = [];
    private prodsUpdate = new Subject<Product[]>(); 

    constructor(private http: HttpClient){}

    getProducts() {
        this.http.get<{message: string, menu: Product[]}>('http://localhost:3000/test').pipe(map((prodData) => {
            return prodData.menu.map(prod => {
                return {
                    id: prod.id,
                    name: prod.name,
                    description: prod.description,
                    detailedDesc: prod.detailedDesc,
                    category: prod.category,
                    startingPrice: prod.startingPrice,
                    endDate: prod.endDate,
                    img: prod.img,
                    bidHistory: prod.bidHistory
                };
            });
        })).subscribe((transformedData) => {
            this.prods = transformedData;
            this.prodsUpdate.next([...this.prods]);
        });
    }

    ProductUpdate() {
        return this.prodsUpdate.asObservable();
    }
    addProduct(prod: Product){
        this.http.post<{prodId: string, menu: Product[]}>('http://localhost:3000/test', prod).subscribe((resData) => {
            const Id = resData.prodId; 
            prod.id = Id; 
            this.prods.push(prod);
            this.prodsUpdate.next([...this.prods]);
        });     
    }
    deleteAuction(id: string){
        this.http.delete("http://localhost:3000/test/delete/" + id).subscribe(() => {
            const updatedProd = this.prods.filter(prod => { prod.id !== id});
            this.prods = updatedProd;
            this.prodsUpdate.next([...this.prods]); 
        });
    }  
}