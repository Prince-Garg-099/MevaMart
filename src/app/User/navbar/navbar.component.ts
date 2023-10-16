import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UserserviceService } from '../services/userservice.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchResult:undefined;
  constructor(private router:Router,public userservice:UserserviceService,private route :Router) { }
    user_id =  (localStorage.getItem('userId')||"");
    user_name =  (localStorage.getItem('username')||"");

    space = this.user_name.indexOf(" ");
     firstName = this.user_name.substring(0, this.space);
     lastName = this.user_name.substring( this.space + 1);



  cartitem = 0;
    logout(){
      localStorage.removeItem('userId');
      localStorage.removeItem('username');
      location.reload();
    }


  ngOnInit(): void {
    console.log(this.userservice.cartCount);
  }
  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      console.log(element.value);
 this.userservice.searchProduct(element.value).subscribe((res) => {

  

});
    }

  }

  hideSearch(){
this.searchResult = undefined;
  }

  submitSearch(val:string){
console.warn(val);
    this.route.navigate([`search/${val}`]);
  }

  
}
