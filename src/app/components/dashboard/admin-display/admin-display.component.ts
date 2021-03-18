import { Component, OnInit,OnDestroy } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-admin-display',
  templateUrl: './admin-display.component.html',
  styleUrls: ['./admin-display.component.css']
})
export class AdminDisplayComponent implements OnInit,OnDestroy {

  constructor(private adminService:AdminService,private productService:ProductsService) { }

  products=[]
  users=[]
  orders=[]
  ///
  subscriber
  res
  ///
  flag = -1;

  ngOnInit(): void {
    this.getFlag();
  }

  getFlag(){
    console.log(this.flag)
    this.subscriber = this.adminService.flagObservable
    .subscribe((value)=>{
      this.res = value
      this.flag = this.res;
      if( this.flag == 0 ){
        this.getProducts();        
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
    this.products = this.res
   },
   (err)=>{
 console.log(err)
   })
  }

  ngOnDestroy(): void {
    if(this.subscriber)
      this.subscriber.unsubscribe();
  }

}
