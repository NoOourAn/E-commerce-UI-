import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
providedIn: 'root'
})

export class JwtService {
    constructor(private httpClient: HttpClient) { }
    
    login(user) {
      console.log(user.username,user.password);
      let username=user.username;
      let password=user.password;
      return this.httpClient.post('http://localhost:3000/api/users/login', {username,password});
 
  }
   
  register(user:User) {

console.log(user); 
  return this.httpClient.post('http://localhost:3000/api/users/reg', user)
  }
  


logout() {
  localStorage.removeItem('access_token');
}
public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}

}

