import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router){} 
  
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
  }

}
