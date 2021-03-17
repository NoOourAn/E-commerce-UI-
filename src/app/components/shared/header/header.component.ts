import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    noOfcartItem
  constructor(private route:Router,private CartService:CartService){} 
  
  	search(){
		this.route.navigate(['/search']); 
  }
  home(){
		this.route.navigate(['/']);
	}

  receipt(){
		this.route.navigate(['/receipt']);
  }
  
  blog(){
		this.route.navigate(['/blog']);
  }
  
  login(){
		this.route.navigate(['/login']);
  }
  
  register(){
		this.route.navigate(['/register']);
	}
  ngOnInit(): void {
    this.CartService.getNumberOfItemINcart.subscribe(res=>{
      this.noOfcartItem=res;
      console.log("from cart",res);
    })
    }

}
