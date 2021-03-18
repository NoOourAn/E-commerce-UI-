import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  cart
  
  productsArray =[]

  constructor(private route:Router,private cartService:CartService,private productSercice:ProductsService,CartService:CartService) { }
  
  details(){
		this.route.navigate(['/details']);
	}
  ngOnInit()  {
  this.cart=this.cartService.getcart();
    console.log(this.cart);
  }

  addTocart(id){
    this.cartService.addTocart(id)
  }

}
