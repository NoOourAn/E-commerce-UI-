import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductsService } from 'src/app/Services/products.service';
import { SearchProductService } from 'src/app/Services/search-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products
  subscriber
  subscriberByID

  // authorization
  isLoggedIn: Observable<boolean>;

  constructor(private productSercice:ProductsService,
     private searchProduct:SearchProductService,private authService: AuthService){
    this.searchProduct.searchEvent.subscribe(response=>{
      this.products=response
    },error=>console.log(error))
  }
  ngOnInit(): void {

    this.isLoggedIn = this.authService.isLoggedIn;
    console.log("start")
    this.getProducts();
    }
    onLogout(){
      this.authService.logout();                      
    }
    getProducts(){
      this.subscriber =  this.productSercice.getProducts()
     .subscribe((response)=>{
   console.log(response);
   this.products = response
    this.subscriber.unsubscribe();
     },
     (err)=>{
   console.log(err)
     })
    }


 

}
