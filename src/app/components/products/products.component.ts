import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products
  subscriber
  subscriberByID
  productsArray =[]

  // authorization
  isLoggedIn: Observable<boolean>;

  constructor(private productSercice:ProductsService,private authService: AuthService){
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
   for(let i=0;i<this.products.length;i++){
     this.productsArray.push(this.products[i])
   }
   console.log( this.productsArray  );

    this.subscriber.unsubscribe();
     },
     (err)=>{
   console.log(err)
     })
    }


 

}
