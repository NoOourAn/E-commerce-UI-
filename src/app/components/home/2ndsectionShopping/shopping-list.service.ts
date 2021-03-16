import {productDetails} from 'src/app/models/shopping-list.model';
import { EventEmitter} from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class shoppingListService
{
  productListChanged = new EventEmitter<productDetails[]>();
    private productList: productDetails[] = [
        new productDetails(1,'https://cdn11.bigcommerce.com/s-1xt05gm9ao/images/stencil/320w/products/167/622/1__61047.1567528027.jpg?c=2','Bohhh','Emilia-Romagna Region, Italy','$12.99','$36.99'),
        new productDetails(2,'https://cdn11.bigcommerce.com/s-1xt05gm9ao/images/stencil/320w/products/167/622/1__61047.1567528027.jpg?c=2','Bojjhh','Emilia-Romagna Region, Italy','$12.99','$36.99'),
       
    ];
    constructor(private myClient:HttpClient) { }
    getProductList() {
      return this.myClient.get("https://jsonplaceholder.typicode.com/posts/");
      // return this.productList.slice();
    }

    getProductsByID(id){
      // return this.products;
      return this.myClient.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
     
    }

    addProductDetails(productDetails: productDetails) {
      this.productList.push(productDetails);
      this.productListChanged.emit(this.productList.slice());
    }
  
    addproductList(productList: productDetails[]) {
     for (let productDetails of productList) {
         this.addProductDetails(productDetails);
      }
      this.productList.push(...productList);
      this.productListChanged.emit(this.productList.slice());
    }
 
}
// getProducts(){
//   return this.myClient.get("https://jsonplaceholder.typicode.com/posts/",);
// }
