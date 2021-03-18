import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  cart
  
  products
  products2
  subscriber
  subscriber1
  subscriberByID
  productsArray =[]
  lowPriceProducts = [];


  constructor(private route:Router,private cartService:CartService,private productSercice:ProductsService,private authService: AuthService) { }
  
  details(){
		this.route.navigate(['/details']);
	}
  ngOnInit()  {
  this.cart=this.cartService.getcart();
    console.log(this.cart);
    this.getnewProducts();
    this.getlowpriceProducts();

  }

  addTocart(id){
    this.cartService.addTocart(id)
  }



  getnewProducts(){
    this.subscriber =  this.productSercice.getProductsBylatestdate()
   .subscribe((response)=>{
 console.log(response);
 this.products = response
 if (this.products.length<3)
 {
  for(let i=0;i<this.products.length;i++){
    this.productsArray.push(this.products[i])
  }
 }
 else
 {
  for(let i=0;i<4;i++){
    this.productsArray.push(this.products[i])
  }
 }

 console.log( this.productsArray  );

  this.subscriber.unsubscribe();
   },
   (err)=>{
 console.log(err)
   })
  }


  getlowpriceProducts(){
    this.subscriber1 =  this.productSercice.getProductsByminPrice()
   .subscribe((response)=>{
 console.log(response);
 this.products2 = response
 if (this.products2.length<3)
 {
  for(let i=0;i<this.products2.length;i++){
    this.lowPriceProducts.push(this.products2[i])
  }
 }
 else
 {
  for(let i=0;i<4;i++){
    this.lowPriceProducts.push(this.products2[i])
  }
 }

 console.log( this.lowPriceProducts  );

  this.subscriber1.unsubscribe();
   },
   (err)=>{
 console.log(err)
   })
  }

}
