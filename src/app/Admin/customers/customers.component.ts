import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  Users: any;
  Totaluser: any;
 
  constructor(private service:AdminService) { }
  ngOnInit(): void {
    this.getuserData();

  }

  getuserData(){
    this.service.getuserData().subscribe((res)=>{
      console.log(res);
      this.Totaluser = res.length;
    this.Users = res; 
    });
  }
}
