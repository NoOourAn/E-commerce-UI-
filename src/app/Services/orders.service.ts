import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

 userOrder=new BehaviorSubject<object>({});
 cartproducts =new BehaviorSubject<Array<object>>([]);  
  constructor(private myClient:HttpClient) { }

  setOrder(value){

    this.userOrder=value
    console.log(value);
    console.log("set user order",this.userOrder);
  }
   getOrder(){
     console.log("get user order",this.userOrder);
    // return this.userOrder.asObservable();
  }
   setCart(value){

    this.cartproducts=value
    console.log("set cart",this.cartproducts);
  }
  public getCart(){
    console.log("get cart",this.cartproducts);
    // return this.cartproducts.asObservable;
  }
  // user can get all orders
  getOrders(){
   const httpOption={
     headers:new HttpHeaders({
       'access_token':localStorage.getItem('access_token')
     })
   }
   return this.myClient.get(`http://localhost:3000/api/orders/`,httpOption);
 }


// user can create order
 createOrders(newProduct){
   const httpOption={
     headers:new HttpHeaders({
       'access_token':localStorage.getItem('access_token')
     })
   }
   return this.myClient.post(`http://localhost:3000/api/orders/`,newProduct,httpOption);
 }

 // admin can modify order status
 modifyOrderStatus(id,status){
   
   const httpOption={
     headers:new HttpHeaders({
       'access_token':localStorage.getItem('access_token')
     }),
     
   }
   return this.myClient.patch(`http://localhost:3000/api/orders/${id}`,{"status":status},httpOption);
 }
 // user can delete order if it is pending
 deleteOrder(id){
   
   const httpOption={
     headers:new HttpHeaders({
       'access_token':localStorage.getItem('access_token')
     }),
     
   }
   return this.myClient.delete(`http://localhost:3000/api/orders/${id}`,httpOption);
 }
}
