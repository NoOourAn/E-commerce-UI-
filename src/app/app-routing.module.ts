import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './guards/auth.guard';

const routes = [

  {path:'products',component:ProductsComponent,canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ]
})
export class AppRoutingModule { }
