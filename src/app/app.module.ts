import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsService } from './Services/products.service';
import{HttpClientModule} from "@angular/common/http";
import { SearchProductService } from './Services/search-product.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BgReviewComponent } from './bg-review/bg-review.component';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { HeaderComponent } from 'src/app/components/shared/header/header.component';
import { ShoppingListComponent } from 'src/app/components/shopping-list/shopping-list.component';
import { SliderBriefComponent } from 'src/app/components/slider-brief/slider-brief.component';
import { ReviewComponent } from './review/review.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DetailsComponent } from './details/details.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { shoppingListService } from 'src/app/components/shopping-list/shopping-list.service';
import { RatingEventsComponent } from './components/shopping-list/rating-events/rating-events.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './components/blog/blog.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import {Router,RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuyNowComponent } from './components/buy-now/buy-now.component';
import { AuthService } from 'src/app/services/auth.service';
 import { JwtService } from 'src/app/services/jwt.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 //import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ProductsComponent,
    RegistrationComponent,
    LoginComponent,
    AppComponent,
    BgReviewComponent,
    FooterComponent,
    HeaderComponent,
    ShoppingListComponent,
    SliderBriefComponent,
    ReviewComponent,
    SignInComponent,
    DetailsComponent,
    CreateProductComponent,
    ProfileComponent,
    OrderPageComponent,
    EditProductComponent,
    RatingEventsComponent,
    DetailsComponent,
    BlogComponent,
    ReadMoreComponent,
    HomeComponent,
    BuyNowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  //  NgbPaginationModule,
    // NgbAlertModule,
    RouterModule.forRoot([
      {path:'', component: ShoppingListComponent },
      { path:'register', component:RegistrationComponent },
      { path:'login', component:SignInComponent },
      { path:'receipt', component:OrderPageComponent },
      { path:'search', component:SearchBarComponent },
      { path: 'home', component: ShoppingListComponent},
      { path: 'blog', component: BlogComponent },
      { path: 'signin', component: SignInComponent },
      { path: 'readmore', component: ReadMoreComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'editproduct', component: EditProductComponent },
      { path: 'createproduct', component: CreateProductComponent},
      { path: 'buynow', component: BuyNowComponent },
      
    ]),
    MDBBootstrapModule.forRoot(),
    NgbModule
  //  NgbModule
  ],
  providers: [
    ProductsService,
    SearchProductService,
    shoppingListService,JwtService,AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
