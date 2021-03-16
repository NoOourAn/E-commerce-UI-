import { Component, OnInit } from '@angular/core';
import { productDetails } from 'src/app/models/shopping-list.model';
//import { product } from 'src/app/models/product';
import { shoppingListService } from './shopping-list.service';
import {Router} from '@angular/router';
//import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  productList: productDetails[]=[];

  constructor(private slService: shoppingListService,private route:Router,private cartService:CartService) { }
  
  details(){
		this.route.navigate(['/details']);
	}
  ngOnInit()  {
   // this.productList=this.slService.getProductList();
    this.slService.productListChanged
    .subscribe(
      (productList: productDetails[]) => {
        this.productList = productList;
      }
    );
  }

  addtocart(productDetails:any){
    this.cartService.addToCArt(productDetails);
  }

}
