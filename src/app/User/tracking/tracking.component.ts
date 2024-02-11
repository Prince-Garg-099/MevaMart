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
import { Userservice } from '../services/user.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
  getOrderId: any;
  getParamorderid: any;
  Orders: any;

  constructor(private service: Userservice, private router: ActivatedRoute) { }

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
