import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private route:Router){} 
  
  	search(){
		this.route.navigate(['/blog']); // navigate to other page
	}

  ngOnInit(): void {
  }

}
