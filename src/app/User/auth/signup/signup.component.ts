import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userservice } from '../../services/user.service';

interface SignupForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  emailAddress: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(@Inject(Userservice) private userservice: Userservice, private fb: FormBuilder, private router: Router) { }
  submitted = false;
  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control'

  
  passwordRules = {
    minLength: false,
    upperCase: false,
    lowerCase: false,
    number: false,
    specialChar: false,
    noWhitespace: false
  };
  
  onPasswordInput(password: string) {
    this.passwordRules.minLength = password.length >= 8;
    this.passwordRules.upperCase = /[A-Z]/.test(password);
    this.passwordRules.lowerCase = /[a-z]/.test(password);
    this.passwordRules.number = /[0-9]/.test(password);
    this.passwordRules.specialChar = /[@$!%*#?&^_-]/.test(password);
    this.passwordRules.noWhitespace = !/\s/.test(password);
  }
  
  passwordMatchValidator(formGroup: AbstractControl) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
    return null;
  }

  userForm:FormGroup<SignupForm> = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailAddress: ['', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ]],
    password: ['', [
      Validators.required,
      Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)
    ]],
    confirmPassword: ['', Validators.required]
  }, { validator: this.passwordMatchValidator });
  

  otpSent: boolean = false;
  enteredOtp: string = '';
  showOtpInput: boolean = false;
  
  sendOtpToEmail() {
    const email = this.userForm.get('emailAddress')?.value;
    if (!email) return;
  
    this.userservice.sendOtp(email,"SIGNUP").subscribe((res: { success: any; }) => {
      if (res.success) {
        this.otpSent = true;
        this.showOtpInput = true;
        alert("OTP sent to email.");
      } else {
        alert("Failed to send OTP.");
      }
    });
  }
  
  verifyOtpAndSignup() {
    const email = this.userForm.get('emailAddress')?.value;
  
    this.userservice.verifyOtp(email, this.enteredOtp).subscribe((res: { success: any; }) => {
      if (res.success) {
        this.finalizeSignup();  // call your signup method here
      } else {
        alert("Invalid OTP.");
      }
    });
  }
  
  finalizeSignup() {
    this.userservice.usersignup(this.userForm.value).subscribe(res => {
      if (res.success) {
        alert(res.message);
        this.router.navigate(['/login']);
      } else {
        alert(res.error);
      }
    });
  }
  
  usersignup() {
    if (this.userForm.valid) {
      this.sendOtpToEmail();  // start with sending OTP
    } else {
      alert("Invalid form");
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
