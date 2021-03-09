import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsService } from './Services/products.service';
import{HttpClientModule} from "@angular/common/http"
import { SearchProductService } from './Services/search-product.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ProductsComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductsService,
    SearchProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
