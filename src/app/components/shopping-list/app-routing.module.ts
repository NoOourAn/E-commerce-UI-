import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes } from '@angular/router';
import { SearchProductService } from './Services/search-product.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BgReviewComponent } from './bg-review/bg-review.component';
import { ShoppingListComponent } from 'src/app/components/shopping-list/shopping-list.component';
import { SliderBriefComponent } from 'src/app/components/slider-brief/slider-brief.component';

import { DetailsComponent } from 'src/app/details';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RatingEventsComponent } from './components/shopping-list/rating-events/rating-events.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './components/blog/blog.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { HomeComponent } from './components/home/home.component';
import { BuyNowComponent } from './components/buy-now/buy-now.component';

 const routes =[{path:'', component: ShoppingListComponent },
  { path:'register', component:RegistrationComponent },
  { path:'login', component:LoginComponent },
  { path:'receipt', component:OrderPageComponent },
  { path:'search', component:SearchBarComponent },
  { path: 'home', component: ShoppingListComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'readmore', component: ReadMoreComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'editproduct', component: EditProductComponent },
  { path: 'createproduct', component: CreateProductComponent},
  { path: 'buynow', component: BuyNowComponent },
  
];
// ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchBarComponent,
    ProductsComponent,
    RegistrationComponent,
    LoginComponent,
    BgReviewComponent,
    ShoppingListComponent,
    SliderBriefComponent,
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
    // RouterModule.forRoot(Routes)
  ],
  exports:[
    // RouterModule.forRoot
  ]
})
export class AppRoutingModule { }
