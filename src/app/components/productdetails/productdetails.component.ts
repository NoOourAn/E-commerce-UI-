import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor( public productSercice:ProductsService, private myActivatedRoute:ActivatedRoute ,) { }

  ngOnInit(): void {
this.getSpecificProductById(this.myActivatedRoute.snapshot.params.id)  }

  
  Pid
  getSpecificProductById(id){
    let sub =  this.productSercice.getProductsByID2(id)
    .subscribe((response)=>{
  console.log(response)
  this.Pid=response;
  this.productSercice.productDetail  = this.Pid;
    },
    (err)=>{
  console.log(err)
    })
  }
  
}
