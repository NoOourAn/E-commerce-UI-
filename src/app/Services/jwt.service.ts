import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

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
   
  register(user) {
  return this.httpClient.post('http://localhost:3000/api/users/reg', user)
  }

  AllUsers(id,product){
    return  this.httpClient.get(`http://localhost:3000/api/users/getUsers`,product)
  }
  myProfile(id,product){
    return  this.httpClient.get(`http://localhost:3000/api/users/myProfile`,product)
  }
   updateUser(id,user){
    return  this.httpClient.patch(`http://localhost:3000/api/users/profileUpdate`,user)
  }
  
  deleteUser(id){
    return  this.httpClient.delete(`http://localhost:3000/api/users/profileDelete`)
  }


logout() {
  localStorage.removeItem('access_token');
}
public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}
public get admin(): boolean{
  return localStorage.getItem('admin') !==  null;
}
}

