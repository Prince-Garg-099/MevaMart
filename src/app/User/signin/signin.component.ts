import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserserviceService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private loginservice: UserserviceService,private fb :FormBuilder,private router:Router) { }
  submitted = false;
    
  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control'

 loginForm = this.fb.group({

    'email': ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],

    'password': new FormControl(null, [
      (c: AbstractControl) => Validators.required(c),
      Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      ),
    ]),

  });



  loginUser() {
    {
    if(this.loginForm.valid){
      this.loginservice.finduser(this.loginForm.value).subscribe(

        (        res: any) =>{

          localStorage.setItem('userId',res._id)
          localStorage.setItem('useremail',res.email)
          localStorage.setItem('username',res.name)
          this.router.navigate(['/'])
          console.log(" Login Successfully ")

        },
        (        err: any)=>{
            alert(err.message)
        }
      );
    }
  
     }}
  ngOnInit(): void {
  }
  get f()
  {
      return this.loginForm.controls;
  }
}
