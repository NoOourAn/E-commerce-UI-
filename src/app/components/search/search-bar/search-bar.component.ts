import { Component, OnInit } from '@angular/core';
import { SearchProductService } from 'src/app/Services/search-product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private searchProduct:SearchProductService,private ProductsService:ProductsService) { }

  sub 
  prod
   
  myForm = new FormGroup({
    searchby:new FormControl('',[Validators.required]),
    body:new FormControl('',[Validators.required])
  })

  ngOnInit(): void {

  }
  
  search(myForm){
    if(this.myForm.valid){
   if (myForm.searchby == "name")
   {
    let sub =  this.ProductsService.getProductsByName(this.myForm)
    .subscribe((response)=>{
 console.log(response)
 this.prod=response;
 this.ProductsService.products = this.prod;
 window.location.reload(); 
 
    },
    (err)=>{
 console.log(err)
    })

   }
   if (myForm.searchby == "category")
   {
    let sub =  this.ProductsService.getProductsByCategory(this.myForm)
    .subscribe((response)=>{
 console.log(response)
 this.prod=response;
 this.ProductsService.products = this.prod;
 window.location.reload(); 
 
    },
    (err)=>{
 console.log(err)
    })

     
   }
   if (myForm.searchby == "brand")
   {
    let sub =  this.ProductsService.getProductsByBrand(this.myForm)
    .subscribe((response)=>{
 console.log(response)
 this.prod=response;
 this.ProductsService.products = this.prod;
 window.location.reload(); 
 
    },
    (err)=>{
 console.log(err)
    })

     
   }
   if (myForm.searchby == "highPrice")
   {
    let sub =  this.ProductsService.getProductsBymaxPrice(this.myForm)
    .subscribe((response)=>{
 console.log(response)
 this.prod=response;
 this.ProductsService.products = this.prod;
 window.location.reload(); 
 
    },
    (err)=>{
 console.log(err)
    })

     
   }
   if (myForm.searchby == "LowPrice")
   {
    let sub =  this.ProductsService.getProductsByminPrice(this.myForm)
    .subscribe((response)=>{
 console.log(response)
 this.prod=response;
 this.ProductsService.products = this.prod;
 window.location.reload(); 
 
    },
    (err)=>{
 console.log(err)
    })

     
   }
   if (myForm.searchby == "NewDate")
   {
    let sub =  this.ProductsService.getProductsBylatestdate(this.myForm)
    .subscribe((response)=>{
 console.log(response)
 this.prod=response;
 this.ProductsService.products = this.prod;
 window.location.reload(); 
 
    },
    (err)=>{
 console.log(err)
    })

   }
   if (myForm.searchby == "OldDate")
   {
    let sub =  this.ProductsService.getProductsByoldestdate(this.myForm)
    .subscribe((response)=>{
 console.log(response)
 this.prod=response;
 this.ProductsService.products = this.prod;
 window.location.reload(); 
 
    },
    (err)=>{
 console.log(err)
    })

   }
  }
  }

}
