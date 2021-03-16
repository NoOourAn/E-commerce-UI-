import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsService } from './Services/products.service';
import{HttpClientModule} from "@angular/common/http";
import { SearchProductService } from './Services/search-product.service';
import { SearchBarComponent } from 'src/app/components/search/search-bar/search-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { RegistrationComponent } from 'src/app/components/shared/header/registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BgReviewComponent } from 'src/app/components/home/3rdsectionBackground/bg-review.component';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { HeaderComponent } from 'src/app/components/shared/header/header.component';
import { ShoppingListComponent } from 'src/app/components/home/2ndsectionShopping/shopping-list.component';
import { SliderBriefComponent } from 'src/app/components/home/1stsectionSlider/slider-brief.component';
import { ReviewComponent } from 'src/app/components/home/4thsectionreview/review.component';
import { SignInComponent } from 'src/app/components/shared/header/sign-in/sign-in.component';
import { OrdersComponent } from 'src/app/components/orders page/orders.page.component';
import { CreateProductComponent } from 'src/app/components/dashboard/create-product/create-product.component';
import { ProfileComponent } from './components/profile/profile.component';
import { receiptComponent } from './components/orders page/receipt/receipt.component';
import { EditProductComponent } from 'src/app/components/dashboard/edit-product/edit-product.component';
import { shoppingListService } from 'src/app/components/home/2ndsectionShopping/shopping-list.service';
import { RatingEventsComponent } from 'src/app/components/home/2ndsectionShopping/rating-events/rating-events.component';
import { BlogComponent } from 'src/app/components/shared/header/blog/blog.component';
import { ReadMoreComponent } from 'src/app/components/home/4thsectionreview/read-more/read-more.component';
import {Router,RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuyNowComponent } from 'src/app/components/home/1stsectionSlider/buy-nowBtn/buy-now.component';
import { AuthService } from 'src/app/services/auth.service';
 import { JwtService } from 'src/app/services/jwt.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from 'src/app/components/shared/header/about-us/about-us.component';
import { SearchresultComponent } from 'src/app/components/search/search-bar/searchresult/searchresult.component';
import { OrdereditemComponent } from './components/orders page/ordereditem/ordereditem.component';
import { CartComponent } from 'src/app/components/shared/header/cart/cart.component';
import { CartService } from './services/cart.service';
 //import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ProductsComponent,
    RegistrationComponent,
    AppComponent,
    BgReviewComponent,
    FooterComponent,
    HeaderComponent,
    ShoppingListComponent,
    SliderBriefComponent,
    ReviewComponent,
    SignInComponent,
    CreateProductComponent,
    ProfileComponent,
    receiptComponent,
    EditProductComponent,
    RatingEventsComponent,
    OrdersComponent,
    BlogComponent,
    ReadMoreComponent,
    HomeComponent,
    BuyNowComponent,
    AboutUsComponent,
    SearchresultComponent,
    OrdereditemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component: ShoppingListComponent },
      { path:'register', component:RegistrationComponent },
      { path:'login', component:SignInComponent },
      { path:'receipt', component:receiptComponent },
      { path:'search', component:SearchBarComponent },
      { path: 'home', component: ShoppingListComponent},
      { path: 'blog', component: BlogComponent },
      { path: 'signin', component: SignInComponent },
      { path: 'readmore', component: ReadMoreComponent },
      { path: 'details', component: OrdersComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'editproduct', component: EditProductComponent },
      { path: 'createproduct', component: CreateProductComponent},
      { path: 'buynow', component: BuyNowComponent },
      { path: 'searchresult', component: SearchresultComponent },
      { path: 'aboutus', component: AboutUsComponent }
    ]),
    MDBBootstrapModule.forRoot(),
    NgbModule
  //  NgbModule
  ],
  providers: [
    ProductsService,
    SearchProductService,
    shoppingListService,JwtService,AuthService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
