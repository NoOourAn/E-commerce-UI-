import { Component, OnInit } from '@angular/core';
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
  constructor(private productSercice:ProductsService, private searchProduct:SearchProductService){
    this.searchProduct.searchEvent.subscribe(response=>{
      this.products=response
    },error=>console.log(error))
  }
  ngOnInit(): void {
    // this.products=this.productSercice.getProducts();
    this.getProducts();
    // this.products=this.searchProduct.getSelectedProducts();
   
    console.log("start")

    }
    getProducts(){
      this.subscriber=this.productSercice.getProducts().subscribe(
        (response)=>{
          console.log(response);
          this.products=response;
        },(error)=>{
          console.log(error);
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
