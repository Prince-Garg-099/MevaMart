import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Userservice } from '../services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public userservice: Userservice, private route: Router) { }
  user_id = (localStorage.getItem('userId') || "");
  user_name = (localStorage.getItem('username') || "");

  space = this.user_name.indexOf(" ");
  firstName = this.user_name.substring(0, this.space);
  lastName = this.user_name.substring(this.space + 1);



  cartitem = 0;
  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    location.reload();
  }


  ngOnInit(): void {
    console.log(this.userservice.cartCount);
  }
  @Output() searchInput = new EventEmitter<string>();

  onSearchInput(term: KeyboardEvent): void {
    const element = term.target as HTMLInputElement;
    this.searchInput.emit(element.value);
  }

}
