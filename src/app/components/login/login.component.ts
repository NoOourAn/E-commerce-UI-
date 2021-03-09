import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JwtService } from 'src/app/Services/jwt.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  token                    // {1}
  private formSubmitAttempt: boolean; // {2}

  constructor(
    private fb: FormBuilder,         // {3}
    private authService: AuthService,
    private jwtService:JwtService
    // {4}
  ) {}

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      // this.authService.login(this.form.value); // {7}
      
      this.jwtService.login(this.form.value).subscribe((res => {
            this.token=res
            console.log(this.token.token);
            localStorage.setItem('access_token', this.token.token);
            this.authService.login();
        }))
    }
    this.formSubmitAttempt = true;             // {8}
  }

}
