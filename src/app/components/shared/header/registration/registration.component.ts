import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { JwtService } from 'src/app/Services/jwt.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  userForm
  response
  constructor(private formBuilder: FormBuilder,private authService:AuthService,private jwtService:JwtService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      username: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      password: ['',[Validators.required]],
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
        if(!this.response.success){
          //failed
        }else{
          // success
        }
        // this.login(user.username, user.password)
      })
    // alert('User form is valid!!')

  } else {
    // alert('User form is not valid!!')
    console.log(this.userForm)
  }
}
}