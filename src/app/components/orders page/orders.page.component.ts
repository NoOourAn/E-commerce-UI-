import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { OrdersService } from 'src/app/Services/orders.service';


@Component({
  selector: 'app-details',
  templateUrl: './orders.page.component.html',
  styleUrls: ['./orders.page.component.css']
})

export class OrdersComponent implements OnInit {

mycart={"totalPrice":"10","products":[{"productName":"this product name from reciet","quantity":"10"}]}

  constructor(private route:Router,private orderService:OrdersService){} 

  ngOnInit(): void {
  }
  receipt(){
    this.orderService.createOrders(this.mycart).subscribe(res=>{
      console.log(res);
    })
  // this..createOrders(this.mycart).subscribe(res=>{
  //     console.log(res);
  //   });
		// this.route.navigate(['/receipt']);
  }
}
