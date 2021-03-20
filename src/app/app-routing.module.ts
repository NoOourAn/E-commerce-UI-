import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { RegistrationComponent } from 'src/app/components/shared/header/registration/registration.component';
import { SignInComponent } from 'src/app/components/shared/header/sign-in/sign-in.component';
import {receiptComponent} from 'src/app/components/orders page/receipt/receipt.component';
import { SearchBarComponent } from 'src/app/components/search/search-bar/search-bar.component';
import { BlogComponent } from 'src/app/components/shared/header/blog/blog.component';
import { ReadMoreComponent } from 'src/app/components/home/4thsectionreview/read-more/read-more.component';
import { OrdersComponent } from 'src/app/components/orders page/orders.page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BuyNowComponent } from 'src/app/components/home/1stsectionSlider/buy-nowBtn/buy-now.component';
import { AboutUsComponent } from 'src/app/components/shared/header/about-us/about-us.component';
import { SearchresultComponent } from 'src/app/components/search/search-bar/searchresult/searchresult.component';
import { CartComponent } from 'src/app/components/shared/header/cart/cart.component';
import { CreateProductComponent } from 'src/app/components/dashboard/create-product/create-product.component';
import { EditProductComponent } from 'src/app/components/dashboard/edit-product/edit-product.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';

const routes = [
  {path:'', component: HomeComponent },
  {path:'products',component:ProductsComponent,canActivate: [AuthGuard]},
  {path:'login',component:SignInComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'signin', component:SignInComponent},
  {path:'receipt', component:receiptComponent,canActivate: [AuthGuard] },
  { path:'search', component:SearchBarComponent },
  { path: 'home', component: HomeComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'readmore', component: ReadMoreComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'profile', component: ProfileComponent,canActivate: [AuthGuard]},//canActivate: [AuthGuard]
  { path: 'buynow', component: BuyNowComponent },
  { path: 'searchresult', component: SearchresultComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'products/:id', component:ProductdetailsComponent },

  ///Admin Components
  { path: 'editproduct', component: EditProductComponent ,canActivate: [AuthGuard,AdminGuard]},
  { path: 'createproduct', component: CreateProductComponent,canActivate: [AuthGuard,AdminGuard] },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard,AdminGuard] },
  { path: 'orders', component: CartComponent }, 
]
;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
