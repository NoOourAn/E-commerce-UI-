import { Component, OnInit } from '@angular/core';
import { productDetails } from '../shared/shopping-list.model';
//import { product } from 'src/app/models/product';
import { shoppingListService } from './shopping-list.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent  {

  // productList: productDetails[]=[];
  

  // constructor(private slService: shoppingListService,private route:Router) { }

  // details(){
	// 	this.route.navigate(['/details']);
	// }
  // ngOnInit()  {
  //   this.productList =this.slService.getProductList().subscribe(res=>{

  //   });
  //   this.slService.productListChanged
  //   .subscribe(
  //     (productList: productDetails[]) => {
  //       this.productList = productList;
  //     }
  //   );
  // }

}
