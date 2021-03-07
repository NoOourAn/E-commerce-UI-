import { Component, OnInit } from '@angular/core';
import { SearchProductService } from 'src/app/Services/search-product.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private searchProduct:SearchProductService) { }

  ngOnInit(): void {

  }
  search(e){
    console.log(e.target.value);
    this.searchProduct.setProductName(e.target.value)
  }

}
