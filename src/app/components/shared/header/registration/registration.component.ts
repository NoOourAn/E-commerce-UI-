import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { JwtService } from 'src/app/Services/jwt.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  userForm
  response
  constructor(private formBuilder: FormBuilder,private authService:AuthService,private jwtService:JwtService,private route:Router ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(2)]],
      lastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(2)]],
      username: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9]+$'),Validators.minLength(3),Validators.maxLength(30)]],
      password: ['',[Validators.required,Validators.minLength(7)]],
      gender: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    
    });
}
submit(){
  console.log(this.userForm)
  if(this.userForm.valid){
    console.log(this.userForm.value)
     this.jwtService.register(this.userForm.value)
     .subscribe(res => {
        console.log(res);
        this.response=res
        if(this.response.success){
          alert("you register successfully");
         this.route.navigate(['/home']);

        }else{
          alert(this.response.message);
        }
      
      })
    

  } else {
     alert('User form is not valid!!')
    console.log(this.userForm)
  }
}
}