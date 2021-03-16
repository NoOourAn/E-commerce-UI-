import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  constructor(private route:Router,private cartService:CartService) { }
  
  details(){
		this.route.navigate(['/details']);
	}
  ngOnInit()  {
  
  }

  addtocart(productDetails:any){
    this.cartService.addToCArt(productDetails);
  }

}
