import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   products

  constructor(private myClient:HttpClient) { }

  private GetProducts:string = "http://localhost:3000/api/products/";
  private GetCategories:string = "http://localhost:3000/api/products/getCategory";
  private GetBrand:string = "http://localhost:3000/api/products/getBrand";
  private AddProduct:string = "http://localhost:3000/api/products/";
  private UpdateProduct:string = "http://localhost:3000/api/products/";
  private DeleteProduct:string = "http://localhost:3000/api/products/";

  getProducts(){
    return this.myClient.get(this.GetProducts)
  }
  getProductsByName(name)
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          name:name.body
        }
      })
  }
  getProductsByCategory(category)
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          category:category.body
        }
      })
  }
  getProductsByBrand(brand)
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          brand:brand.body
        }
      })
  }
  getProductsBymaxPrice(maxPrice)
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          maxPrice:maxPrice.body
        }
      })
  }
  getProductsByminPrice(minPrice)
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          minPrice:minPrice.body
        }
      })
  }
  getProductsBylatestdate(latestdate)
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          latestdate:latestdate.body
        }
      })
  }
  getProductsByoldestdate(oldestdate)
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          oldestdate:oldestdate.body
        }
      })
  }
  getProductsByID(id)
  {
    return this.myClient.get(this.GetProducts,{
        params:{
          id:id
        }
      })
  }

  getCategories()
  {
    return this.myClient.get(this.GetCategories)
  }

  getBrands()
  {
    return this.myClient.get(this.GetBrand)
  }

  addProduct(product){
    return this.myClient.post(this.AddProduct,product);
  }
  updateProduct(id,product){
    return this.myClient.patch(`${this.UpdateProduct}/${id}`,product)
  }
  
  deleteProduct(id){
    return this.myClient.delete(`${this.DeleteProduct}/${id}`)
  }

  
}
