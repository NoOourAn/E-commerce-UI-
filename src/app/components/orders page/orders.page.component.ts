import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/Services/orders.service';
import { ProductsService } from 'src/app/Services/products.service';


@Component({
  selector: 'app-details',
  templateUrl: './orders.page.component.html',
  styleUrls: ['./orders.page.component.css']
})

export class OrdersComponent implements OnInit {

  cart:any;
  productsArray =[];
  response;
  totalPrice=0;
  orderProducts=[];  

mycart={"totalPrice":"10","products":[{"productName":"this product name from reciet","quantity":"10"}]}

  constructor(private route:Router,private orderService:OrdersService,private cartService:CartService,private productSercice:ProductsService){} 
  ngOnInit(): void {
    this.fillCartArray()
    this.getProductsInCart();
  }
  getProductsInCart() {
    if(this.cart.length!=0){
      this.cart.forEach(id=> {
      this.productSercice.getProductsByID(id).subscribe(res=>{
        this.response=res;
        console.log(this.response[0].price);
        this.totalPrice+=this.response[0].price;
        console.log(this.totalPrice);
        this.productsArray.push(this.response[0]);
      })
    });
    console.log("total price",this.totalPrice);
    console.log(this.productsArray);
  }
  }
  fillCartArray() {
    if(localStorage.getItem("card")){
      this.cart=this.cartService.getcart();
      console.log(this.cart);
    }
  }
  receipt(){
    let item;
    this.productsArray.forEach(product=>{
         item={"productName":product.name,"quantity":"1"}
        this.orderProducts.push(item);
      })
      console.log(this.orderProducts);

    this.orderService.createOrders({totalPrice:this.totalPrice,"products":this.orderProducts}).subscribe(res=>{
      console.log(res);
    })
  }
  
    // order={"totalPrice":this.totalPrice,"products":[{"productName":"this product name from reciet","quantity":"10"}]}

  

  // this..createOrders(this.mycart).subscribe(res=>{
  //     console.log(res);
  //   });
		// this.route.navigate(['/receipt']);
  // }
}


