import { Component, OnInit } from '@angular/core';
//import {Router} from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-ordereditem',
  templateUrl: './ordereditem.component.html',
  styleUrls: ['./ordereditem.component.css']
})
export class OrdereditemComponent implements OnInit {
  
  cart:any;
  productsArray =[];
  response
  totalPrice
  constructor(private cartService:CartService,private productSercice:ProductsService,) { }

  ngOnInit(): void {
    this.totalPrice=0;
    this.fillCartArray();
    this.getProductsInCart();
   
  }

  fillCartArray(){
    if(localStorage.getItem("card")){
      this.cart=this.cartService.getcart();
      console.log(this.cart);
    }

  }

  getProductsInCart(){

    if(this.cart.length!=0){
  
      this.cart.forEach(id=> {
        this.productSercice.getProductsByID(id).subscribe(res=>{
          this.response=res;
          console.log(this.response[0]);
          this.totalPrice+=this.response;

          this.productsArray.push(this.response[0]);
        })
      });

    }
    console.log("total price",this.totalPrice);
    console.log(this.productsArray);

  }





}




