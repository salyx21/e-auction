import { Component, OnInit , Input} from '@angular/core';
import { AuctionService } from 'src/app/services/auction.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product | undefined;
  constructor(public auctionService: AuctionService) {}

  ngOnInit(): void {
  }
  display(prod: Product) {
    this.product = prod;
  }
}
