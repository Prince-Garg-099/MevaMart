import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../services/user.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  formSubmited = false;
  getCartDetails: any;
  dd: any;
  mm: any;
  orderId: any;
  today: any;
  rzp1: any;
  options: any;
  total: any;

  constructor(private service:UserserviceService,private fb: FormBuilder,private auth:UserserviceService) { }
  isCollapsed = true;
  id:any
  ngOnInit(): void {
    this.isCollapsed = this.isCollapsed
    this.getProducts();
    this.total = JSON.parse(localStorage.getItem('localCart')||"").reduce(function(acc:any,val:any){
      return acc  + ((val.mrp - val.discount*val.mrp/100)* val.qnt);
     },0)
    this.today = new Date();
    this.dd = this.today.getDate();
    
    var mm = this.today.getMonth()+1; 
    var yyyy = this.today.getFullYear();
    if(this.dd<10) 
    {
        this.dd='0'+this.dd;
    } 
    
    if(mm<10) 
    {
        this.mm='0'+mm;
    } 
    
    
    this.today = this.dd+'-'+mm+'-'+yyyy;


  this.options = {
      "key": "rzp_test_P0CB7CNFjjNN9F", // Enter the Key ID generated from the Dashboard
      "amount": this.total*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "NITeCart",
      "description": "test Transaction",
      "image": "https://cdn-icons-png.flaticon.com/512/263/263142.png",
            "callback_url": "",
      "prefill": {
          "name": "",
          "email": "",
          "contact": ""
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#0038E2"
      }
  };
  }

  delForm = this.fb.group({
    'name': new FormControl('', Validators.required),
    'phoneno': new FormControl('', Validators.required),
    'pincode': new FormControl('', Validators.required),
    'locality': new FormControl('', Validators.required),
    'address': new FormControl('', Validators.required),
    'city': new FormControl('', Validators.required),
    'state': new FormControl('', Validators.required),
    'products': [JSON.parse(localStorage.getItem('localCart')||"")],
    'userid': localStorage.getItem('userId')||"",
    'usergid': localStorage.getItem('usergId')||"",
    'usergemail': localStorage.getItem('usergemail')||"",
    'usergname': localStorage.getItem('usergName')||"",
    'username': localStorage.getItem('userName')||"",
    'ordertime': Date(),
  });
 
getProducts(){
  this.getCartDetails = JSON.parse(localStorage.getItem('localCart')||"")
}


onSave(){
  
  if(!this.delForm.valid){
    alert("All fields required !");
  }
  if (this.delForm.valid) {
    this.isCollapsed = !this.isCollapsed

    if(this.delForm.value)
 
    alert("Address saved  successfully");
  }

 
  
}

pay(){
  console.log(this.delForm.value);
  this.rzp1 = new this.auth.nativeWindow.Razorpay(this.options);
  this.rzp1.open();
//  this.rzp1.open();
  this.service.addorderData(this.delForm.value).subscribe((res:any) => {
    console.log(res, 'res==>');

    alert("Order Placed successfully");
    localStorage.removeItem('localCart')

    this.orderId = res.Orderdetails.insertedId
    console.log(this.orderId)
    localStorage.setItem('OrderId',JSON.stringify(this.orderId))

    

    console.log(this.today);
  });

}

cod(){
  console.log(this.delForm.value);

 alert("Order Placed successfully");
  this.service.addorderData(this.delForm.value).subscribe((res:any) => {

    console.log(this.delForm.value);
    console.log(res, 'res==>');
      console.log(this.orderId)
    localStorage.setItem('OrderId',JSON.stringify(this.orderId))
    localStorage.removeItem('localCart')


    

    console.log(this.today);
  });
}

 
  }



