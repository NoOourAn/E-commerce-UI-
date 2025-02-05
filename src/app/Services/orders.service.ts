import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  userOrder={};
 cartproducts =[];
//  userOrder=new BehaviorSubject<object>({});
//  cartproducts =new BehaviorSubject<[]>([]);  
  constructor(private myClient:HttpClient) { }

  setOrder(value){
    console.log("set order",value);
    this.userOrder=value
    
  }
   getOrder(){
    
    return this.userOrder
  }
   setCart(value){
      console.log("set cart",value);
    this.cartproducts=value
    
  }
  public getCart(){
   
     return this.cartproducts;
  }

  // setOrder(value){
  //   console.log("set order",value);
  //   this.userOrder.next(value);
    
  // }
  //  getOrder(){
    
  //   return this.userOrder.asObservable();
  // }
  //  setCart(value){
  //     console.log("set cart",value);
  //   this.cartproducts.next(value);
    
  // }
  // public getCart(){
   
  //    return this.cartproducts.asObservable();
  // }
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
