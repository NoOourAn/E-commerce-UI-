import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsService } from './Services/products.service';
import{HttpClientModule} from "@angular/common/http"
import { SearchProductService } from './Services/search-product.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProductsService,
    SearchProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
