import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {JwtService} from 'src/app/services/jwt.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  constructor(public JwtService:JwtService,   private modalService: NgbModal,
    private route: Router) { }
    title = 'appBootstrap';
    closeResult: string;

    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        console.log(content)
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    err

    myForm = new FormGroup({
      username:new FormControl(``,[Validators.required,Validators.minLength(3),Validators.maxLength(100)]),
      email:new FormControl('',[Validators.required,Validators.email]),
    
    })
    user
  ngOnInit(): void {
    console.log(localStorage.getItem("access_token"))
    this.getMyProfile();
  }
 
    editprofile(){
      this.route.navigate(['/buynow']);
    }
 

  getMyProfile(){
    let sub =  this.JwtService.myProfile()
    .subscribe((response)=>{
 console.log(response)
 this.user=response;
 this.JwtService.user  = this.user; 
 console.log(this.user)

    },
    (err)=>{
 console.log(err)
    })
  }

  updateMyProfile(){
    console.log(this.myForm.value)
    let sub =  this.JwtService.updateUser(this.myForm.value)
    .subscribe((response)=>{
 console.log(response)
 this.user=response;
 if(this.user.message)
 {
  this.getMyProfile();
   this.JwtService.err=this.user.message
   this.JwtService.succ=""
//   window.location.reload(); 

 }
 else{
  this.getMyProfile();
  this.JwtService.user  = this.user; 
  this.JwtService.succ = "your information has been updated Succ";
  this.JwtService.err=""

 // window.location.reload();
 }
    },
    (err)=>{
 console.log(err)
    })
console.log(this.user)
  }

  setDefault() {
    let userDetails = {
      username:this.JwtService.user.username,
      email:this.JwtService.user.email
    };
    this.myForm.patchValue(userDetails)
  }

  deleteUser(){
    let sub =  this.JwtService.deleteUser()
 .subscribe((response)=>{
console.log(response)
this.user="";
this.JwtService.user=""
localStorage.clear;
this.route.navigate(['/home'])
},
 (err)=>{
console.log(err)
 })
  }


}
