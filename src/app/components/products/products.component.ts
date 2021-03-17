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
    this.getProducts();
    
    this.isLoggedIn = this.authService.isLoggedIn;
    console.log("start")

    }
    onLogout(){
      this.authService.logout();                      // {3}
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
    addProduct(){
      // console.log("test")
      this.productSercice.addProduct({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }).subscribe(
        (response)=>{
          console.log(response);
          // this.getProductbyId(101)
         
        },(error)=>{
          console.log(error);
        }
      )

    }
    getProductbyId(id){
      this.subscriberByID=this.productSercice.getProductsByID(id).subscribe(
        (response)=>{
          console.log(response);
          
        },(error)=>{
          console.log(error);
        })
    }
    updateProductByID(id){
      this.productSercice.updateProduct(id,{
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }).subscribe(
        response=>console.log(response),
        error=>console.log(error)
        )
    }
    editProductByID(id){
      this.productSercice.updateProduct(id,{
        title: 'ahmed'
      }).subscribe(
        response=>console.log(response),
        error=>console.log(error)
        )
    }
    deleteProductByID(id){
      this.productSercice.deleteProduct(id).subscribe(
        response=>console.log(response),
        error=>console.log(error)
        )
    }

    ngOnDestroy(): void {
     this.subscriber.unsubscribe()
     this.subscriberByID.unsubscribe()
    }

}
