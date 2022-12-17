import { Component, OnInit } from '@angular/core';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {

  constructor(public auctionService: AuctionService) { }

  ngOnInit(): void {
  }
  // bidHistory = this.auctionService.getProducts


}
