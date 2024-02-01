import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/user.service';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private userservice: UserserviceService,private fb :FormBuilder,private router:Router) { }

  username :any="";
  useremail :any="";
  usercontactno :any="";


  userprofileForm = this.fb.group({
    '_id' : (localStorage.getItem('userId')||""),
    'name': new FormControl(this.username, Validators.required,),
    'email': [this.useremail, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    'contactno': [this.usercontactno, [ Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],  
  });

  
  updateuserinfo() {
    if(this.userprofileForm.status == 'VALID'){



      this.userservice.updatebyid(this.userprofileForm.value).subscribe(
        res => {
          this.router.navigate(['/'])
    
        },
        err => alert(err.message)
      )
    }else{
      alert("invalid form");
    }
   
  }

  ngOnInit(): void {
    const id = (localStorage.getItem('userId')||"");
      console.log(id);
    this.userservice.finduserdata(id).subscribe(
      (        res: any) =>{
          this.username = res.name;
          this.useremail = res.email;
          this.usercontactno = res.contactno;
          localStorage.setItem('username',res.name)


          
      },
      (        err: any)=>{
          alert(err.message)
      })

  }
  get f()
  {
      return this.userprofileForm.controls;
  }

}
