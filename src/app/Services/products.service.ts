import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products=[
    {title:"title1",image:"image1",price:"price1",details:"details1"},
    {title:"title2",image:"image2",price:"price2",details:"details2"},
    {title:"title3",image:"image3",price:"price3",details:"details3"},
  ]

  constructor(private myClient:HttpClient) { }
  getProducts(){
    // return this.products;
    return this.myClient.get("https://jsonplaceholder.typicode.com/posts/",);
   
  }
  getProductsByID(id){
    // return this.products;
    return this.myClient.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
   
  }
  addProduct(product){
    return this.myClient.post(`https://jsonplaceholder.typicode.com/posts/`,product);
  }
  updateProduct(id,product){
    return this.myClient.put(`https://jsonplaceholder.typicode.com/posts/${id}`,product)
  }
  
  editProduct(id,edit){
    return this.myClient.patch(`https://jsonplaceholder.typicode.com/posts/${id}`,edit)
  }
  deleteProduct(id){
    return this.myClient.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
