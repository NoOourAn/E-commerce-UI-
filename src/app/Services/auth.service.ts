import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { User } from '../models/user';
import {HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { JwtService } from './jwt.service';



@Injectable(
  {
    providedIn: 'root',
   }
)
export class AuthService {
  
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(
    private router: Router,private httpClient: HttpClient, private jwtService:JwtService
  ) {}

 

  login(){

    // this.jwtService.login(user.username,user.password);
    if (this.jwtService.loggedIn ) { // {3}
      this.loggedIn.next(true);
      this.router.navigate(['/products']);
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
 
