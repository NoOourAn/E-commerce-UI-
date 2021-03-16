import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './orders.page.component.html',
  styleUrls: ['./orders.page.component.css']
})

export class OrdersComponent implements OnInit {

  constructor(private route:Router){} 

  ngOnInit(): void {
  }
  receipt(){
		this.route.navigate(['/receipt']);
  }
}
