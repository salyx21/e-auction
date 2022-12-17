import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product/product.model';


@Component({
  selector: 'app-auction-page',
  templateUrl: './auction-page.component.html',
  styleUrls: ['./auction-page.component.css']
})
export class AuctionPageComponent implements OnInit {
  product: Product[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  display(prod: Product) {
    this.product.push(prod);
    console.log(prod)
  }
}
