import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-display',
  templateUrl: './admin-display.component.html',
  styleUrls: ['./admin-display.component.css']
})
export class AdminDisplayComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }
  products=[]
  users
  orders
  ///
  subscriber
  ///
  flag = -1;

  getFlag(){
    this.subscriber = this.adminService.flagObservable
    .subscribe((value)=>{
      console.log(value);
      
      // if( value == 0 ){
      //   this.products;
      // }
      // else if(value == 1 ){
      //   this.products == 
      // }
      // else if(value == 2 ){
      //   this.products == 
      // }
    },
    (err)=>{
      console.error(err.message)
    })
  }


}
