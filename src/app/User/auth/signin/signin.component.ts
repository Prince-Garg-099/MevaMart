import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Userservice } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userService: Userservice, private fb: FormBuilder, private router: Router) { }
  submitted = false;

  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control'

  loginForm = this.fb.group({

    'emailAddress': ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],

    'password': new FormControl(null, [
      (c: AbstractControl) => Validators.required(c),
      Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      ),
    ]),

  });



  loginUser() {
    {
      if (this.loginForm.valid) {
        this.userService.finduser(this.loginForm.value).subscribe(

          (res: any) => {
            if (res.success) {
              console.log(res.message)
              this.router.navigate(['/'])
              localStorage.setItem('userId', res.user._id)
              localStorage.setItem('token', res.token)
              localStorage.setItem('useremail', res.user.emailAddress)
              localStorage.setItem('username', res.user.firstName)
            } else {
              alert(res.error)
            }
          },
        );
      }

    }
  }
  ngOnInit(): void {
  }
  get f() {
    return this.loginForm.controls;
  }
}
