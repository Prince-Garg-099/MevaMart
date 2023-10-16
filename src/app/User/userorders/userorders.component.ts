import { FormBuilder } from "@angular/forms";
import { UserserviceService } from "../services/userservice.service";
import { Component, OnInit } from "@angular/core";
@Component({
 selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.css'] })
 export class UserordersComponent implements OnInit {
  oneAtATime = true;
  isCollapsed = true;
  Orders: any;
  Totalorder: any;
  today: any;
  dd: any;
  constructor(public service: UserserviceService, private fb: FormBuilder) { }

  ngOnInit(): void {  

    this.getdelAdd();
  }

  delForm = this.fb.group({
    userId: localStorage.getItem('userId') || ""
  });

  getdelAdd() {
    this.service.getdelAddbyId(this.delForm.value).subscribe((res) => {

      this.Orders = res;
      console.log(res);
      this.Totalorder = this.Orders.length;
    });
  }

  cancelOrder(orderId:any){
    this.service.cancelOrder(orderId).subscribe((res) => {
      console.log("order cancelled by user");
    console.log(res);
    })
  }
}
