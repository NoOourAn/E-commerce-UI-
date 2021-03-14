import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './guards/auth.guard';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {OrderPageComponent} from 'src/app/components/order-page/order-page.component';
import {SearchComponent } from 'src/app/components/search/search.component';
import { ShoppingListComponent} from 'src/app/components/shopping-list/shopping-list.component';
import { BlogComponent } from './components/blog/blog.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { BuyNowComponent } from './components/buy-now/buy-now.component';
const routes = [
  {path:'', component: HomeComponent },
  {path:'products',component:ProductsComponent,canActivate: [AuthGuard]},
  {path:'login',component:SignInComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'signin', component:SignInComponent},
  {path:'receipt', component:OrderPageComponent },
  { path:'search', component:SearchComponent },
  { path: 'home', component: ShoppingListComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'readmore', component: ReadMoreComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'editproduct', component: EditProductComponent },
  { path: 'createproduct', component: CreateProductComponent },
  { path: 'buynow', component: BuyNowComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ]
})
export class AppRoutingModule { }
