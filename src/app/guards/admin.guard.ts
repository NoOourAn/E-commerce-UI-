import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.isAdmin.pipe(
        take(1),                             
        map((isAdmin: boolean) => {  
          // console.log("login",isLoggedIn);      
          if (!isAdmin){
            this.router.navigate(['/login']); 
            return false;
          }
          return true;
        })
      )
     
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
}
