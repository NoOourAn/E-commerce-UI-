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
  constructor(private cartService:CartService,private productSercice:ProductsService,) { }

  ngOnInit(): void {
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
      
      // for(let i=0;i<this.cart.length;i++){

      // }

      this.cart.forEach(id=> {
        this.productSercice.getProductsByID(id).subscribe(res=>{
          this.response=res;
          this.productsArray.push(this.response);
        })
      });

    }
    console.log(this.productsArray);

  }

}

//   getProducts(){
//     this.subscriber =  this.productSercice.getProducts()
//    .subscribe((response)=>{
//  console.log(response);
//  this.products = response
//  for(let i=0;i<this.products.length;i++){
//    this.productsArray.push(this.products[i])
//  }
//  console.log( this.productsArray  );

//   this.subscriber.unsubscribe();
//    },
//    (err)=>{
//  console.log(err)
//    })
//   }


