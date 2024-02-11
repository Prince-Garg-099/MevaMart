import { Component, OnInit } from '@angular/core';
import { Userservice } from '../services/user.service';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userservice: Userservice,private fb :FormBuilder,private router:Router) { }
  submitted = false;
  
  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control'



  userForm = this.fb.group({
    'firstName': new FormControl('', Validators.required,),
    'lastName': new FormControl('', Validators.required,),
    'emailAddress': ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    // 'contactno': new FormControl('',),
    'password': new FormControl(null, [
      (c: AbstractControl) => Validators.required(c),
      Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      ),
    ]),

  });


  usersignup() {
    if(this.userForm.valid){
      console.log(this.userForm);
      this.userservice.usersignup(this.userForm.value).subscribe(
        res => {
          if(res.success){
            alert(res.message);
            this.router.navigate(['/'])
          }else{
            alert(res.error);
          }
    
        },
      )
    }else{
      alert("invalid form");
    }
   
  }

  checkPasswords(pw: string, cpw: string) {
    this.isConfirmPasswordDirty = true;
    if (pw == cpw) {
      this.passwordsMatching = true;
      this.confirmPasswordClass = 'form-control is-valid';
    } else {
      this.passwordsMatching = false;
      this.confirmPasswordClass = 'form-control is-invalid';
    }
  }
  get f()
  {
      return this.userForm.controls;
  }
  ngOnInit(): void {
  }

}
