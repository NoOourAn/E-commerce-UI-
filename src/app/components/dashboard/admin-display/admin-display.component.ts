import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-admin-display',
  templateUrl: './admin-display.component.html',
  styleUrls: ['./admin-display.component.css']
})
export class AdminDisplayComponent implements OnInit {

  constructor(private adminService:AdminService,private productService:ProductsService) { }

  ngOnInit(): void {
    this.getFlag();
  }
  products=[]
  users=[]
  orders=[]
  ///
  subscriber
  res
  ///
  flag = -1;

  getFlag(){
    this.subscriber = this.adminService.flagObservable
    .subscribe((value)=>{
      this.res = value
      this.flag = this.res;
      if( this.flag == 0 ){
        this.products;
      }
      if( this.flag == 1 ){
        this.products;
      }
      if( this.flag == 2 ){
        this.products;
      }
      
    },
    (err)=>{
      console.error(err.message)
    })
  }
/////get products
  getProducts(){
    this.subscriber =  this.productService.getProducts()
   .subscribe((response)=>{
    console.log(response);
    this.res = response
    for(let i=0;i<this.res.length;i++){
      this.products.push(this.products[i])
    }
    this.subscriber.unsubscribe();
   },
   (err)=>{
 console.log(err)
   })
  }


}
