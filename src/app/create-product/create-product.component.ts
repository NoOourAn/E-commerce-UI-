import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private myClient:HttpClient) { }
  
  addProduct(product){
    return this.myClient.post(`https://jsonplaceholder.typicode.com/posts/`,product);
  }

  ngOnInit(): void {
  }

}
