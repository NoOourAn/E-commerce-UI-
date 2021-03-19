import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class receiptComponent implements OnInit {

  cart
  order
  response
  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {
    // console.log(this.orderService.getCart());
    // console.log(this.orderService.getOrder());
    // this.orderService.getCart().subscribe(res=>{
    //     this.response=res;
    //   this.cart=this.response
    // })
    // this.orderService.getOrder().subscribe(res=>{
    //   this.response=res;
    // this.order=this.response
  // })

  }

}
