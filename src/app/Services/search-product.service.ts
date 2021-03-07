import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {
  private products;
  private productName;
  private selectedProducts;
  searchEvent=new EventEmitter<[]>();
  constructor( private productsServive:ProductsService)
   { 
      // get products from products services
    console.log("search service")
    this.productsServive.getProducts().subscribe(response=>{
      console.log(response);
      this.products=response;
      this.selectedProducts=this.products
      console.log(this.selectedProducts)
    },error=>console.log(error));
   }
 
  setProductName(_productname){
    // get product name from search-bar
    this.productName=_productname.toLowerCase();
    this.selectedProducts=[];
    this.selectedProducts =this.products.filter((item)=>item.title.toLowerCase().indexOf(this.productName)>-1);
    console.log(this.productName);
    console.log(this.selectedProducts);
    this.searchEvent.emit(this.selectedProducts)
  }
// getSelectedProducts(){
//   console.log(this.selectedProducts)
//   return this.selectedProducts;
// }
        

  }

