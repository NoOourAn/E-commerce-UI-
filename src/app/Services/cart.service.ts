import { Injectable } from '@angular/core';
import {productDetails} from 'src/app/models/shopping-list.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Array<object>=[];

  constructor() { }

  addToCArt(productDetails:productDetails){
 
    this.cart.push(productDetails);
  }
  getCart(){

    return this.cart;
  }


}
