// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-tracking',
//   templateUrl: './tracking.component.html',
//   styleUrls: ['./tracking.component.css']
// })
// export class TrackingComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/Admin/services/admin.service';
import { UserserviceService } from '../services/user.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
  getOrderId: any;
  getParamorderid: any;
  Orders: any;

  constructor(public adminservice: AdminService, private service: UserserviceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParamorderid = this.router.snapshot.paramMap.get('orderid');
    if (this.getParamorderid) {
      console.log(this.getParamorderid);
      this.service.getSingleData(this.getParamorderid).subscribe((res) => {
        console.log(res);
        this.Orders = res;
      });
    }
  }

}
