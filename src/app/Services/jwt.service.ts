import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
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
   user
   err
   succ
  register(user) {
  return this.httpClient.post('http://localhost:3000/api/users/reg', user)
  }

  AllUsers(){
    return  this.httpClient.get(`http://localhost:3000/api/users/getUsers`)
  }
  myProfile(){
    let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("access_token"))
    return  this.httpClient.get(`http://localhost:3000/api/users/myProfile`,{headers:headers})
  }
   updateUser(user){
    let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("access_token"))
    return  this.httpClient.patch(`http://localhost:3000/api/users/profileUpdate`,user,{headers:headers})
  }
  
  deleteUser(){
    let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("access_token"))
    return  this.httpClient.delete(`http://localhost:3000/api/users/profileDelete`,{headers:headers})
  }


logout() {
  localStorage.removeItem('access_token');
}
public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}

}

