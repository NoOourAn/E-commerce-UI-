import { Component, Input, OnInit } from '@angular/core';
//import {Router} from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-ordereditem',
  templateUrl: './ordereditem.component.html',
  styleUrls: ['./ordereditem.component.css']
})
export class OrdereditemComponent implements OnInit {
  
  // cart:any;
  @Input() productsArray =[];
  // response
  // totalPrice=0
  // order={"totalPrice":this.totalPrice,"products":[{"productName":"this product name from reciet","quantity":"10"}]}
  constructor(private cartService:CartService,private productSercice:ProductsService,) { }

  ngOnInit(): void {
   console.log(this.productsArray);
    
  }


}