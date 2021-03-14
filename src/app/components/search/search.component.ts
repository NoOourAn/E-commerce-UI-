import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute ) { 
    
  }

  ngOnInit(): void {
  }

}
// // Fake API URL
// url: string = 'https://jsonplaceholder.typicode.com/users';
// usersArray: Array = [];

// constructor(private http: Http) {
//   this.http.get(this.url).subscribe(data => {
//     // Populating usersArray with names from API
//     data.json().forEach(element => {
//       this.usersArray.push(element.name);
//     });
//   });
// }