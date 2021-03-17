import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-controls',
  templateUrl: './admin-controls.component.html',
  styleUrls: ['./admin-controls.component.css']
})
export class AdminControlsComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }
  showProducts(){
    // this.adminService.flag = 0;
  }
  showOrders(){
    // this.adminService.flag = 1;
  }
  showUsers(){
    // this.adminService.flag = 2;
  }
}
