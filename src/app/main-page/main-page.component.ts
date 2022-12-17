import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../auction-page/product/product.model';
import { AuctionService } from '../services/auction.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  menu: Product[] = [];
  private prodSub: Subscription = new Subscription; 
  name: string =''; desc: string =''; detailedDesc: string = ''; category: string = '';price: number = 0;endDate: string = ''; img: string = '';
  @Output() selectProd = new EventEmitter<Product>(); 

  constructor(public auctionService: AuctionService){}

  ngOnInit(): void {
    this.auctionService.getProducts(); 
    this.prodSub = this.auctionService.ProductUpdate().subscribe((prods: Product[]) => {
      this.menu = prods;
    });
  }
  ngOnDestroy() {
    this.prodSub.unsubscribe(); 
  }
  
  addAuction() {
    var newProd = new Product("null",this.name,this.desc,this.detailedDesc, this.category, this.price, this.endDate,this.img, []); 
    this.auctionService.addProduct(newProd);
  }

  onDelete(id: string) {
    this.auctionService.deleteAuction(id);
  }
  showProduct(prod: Product){
    this.selectProd.emit(prod)
  }
}
