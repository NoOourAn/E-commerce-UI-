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
  //      this.httpClient.post('http://localhost:3000/api/users/login', {username, password}).subscribe((res => {
  //     console.log(res);
  //     // localStorage.setItem('access_token', res.access_token);
  // }))
  }
   
  register(user:User) {

  //   console.log(user.username,user.password,user.email);
  //    this.httpClient.post('http://localhost:3000/api/users/reg', user).subscribe(res => {
  //   console.log(res);
    
  //   // this.login(user.username, user.password)
  // })
  return this.httpClient.post('http://localhost:3000/api/users/reg', user)
  }
  
// register(userName:string, password:string) {
//   return this.httpClient.post<{access_token: string}>('http://www.your-server.com/auth/register', {userName, password}).pipe(tap(res => {
//   this.login(userName, password)
// }))
// }

logout() {
  localStorage.removeItem('access_token');
}
public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}

}

