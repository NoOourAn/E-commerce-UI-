import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { JwtService } from './jwt.service';


@Injectable(
  {
    providedIn: 'root',
   }
)
export class AuthService{
  
  private loggedIn = new BehaviorSubject<boolean>(false); 
  private admin = new BehaviorSubject<boolean>(false); 
  get isLoggedIn() {

    return this.loggedIn.asObservable(); 
  }

  get isAdmin() {

    return this.admin.asObservable(); 
  }

  constructor(
    private router: Router,private httpClient: HttpClient, private jwtService:JwtService,
) {}
  
  login(){
    if (this.jwtService.loggedIn ) {
      this.loggedIn.next(true);
      
    }
  }

  loginAsAdmin(){
    if (this.jwtService.admin ) {
      this.loggedIn.next(true);
      
    }
  }

  register(user){
   return this.jwtService.register(user)
  }


  logout() {       
                         // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
 
