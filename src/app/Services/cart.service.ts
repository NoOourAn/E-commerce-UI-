import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Array<object>=[];

  constructor() { }

  addToCArt(productDetails){
 
    this.cart.push(productDetails);
  }
  getCart(){

    return this.cart;
  }


}
