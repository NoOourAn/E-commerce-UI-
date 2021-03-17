import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  //zero indicates products
  //one indicates orders
  //two indicates users
  private flag = new Subject<object>();
  flagObservable = this.flag.asObservable();

  getFlag(value){
    this.flag.next(value)
  }
}
