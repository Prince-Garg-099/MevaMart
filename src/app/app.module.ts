import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductviewComponent } from './User/productview/productview.component';


import { CartComponent } from './User/cart/cart.component';
import { CheckoutComponent } from './User/checkout/checkout.component';
import { HomeComponent } from './User/home/home.component';
import { FooterComponent } from './User/footer/footer.component';
import { NavbarComponent } from './User/navbar/navbar.component';
import { PaymentComponent } from './User/payment/payment.component';
import { UserprofileComponent } from './User/userprofile/userprofile.component';
import { UserordersComponent } from './User/userorders/userorders.component';
import { WishlistComponent } from './User/wishlist/wishlist.component';
import { TrackingComponent } from './User/tracking/tracking.component';
import { SignupComponent } from './User/signup/signup.component';
import { SigninComponent } from './User/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsModalService, ModalModule, } from 'ngx-modal-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@Injectable({
  providedIn:'root'
})
@NgModule({
  declarations: [
    AppComponent,
    ProductviewComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    PaymentComponent,
    UserprofileComponent,
    UserordersComponent,
    WishlistComponent,
    TrackingComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    CollapseModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,


    
    
  ],
  providers: [BsModalService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
