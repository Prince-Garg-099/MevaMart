import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductviewComponent } from './User/productview/productview.component';
import { CartComponent } from './User/cart/cart.component';
import { CheckoutComponent } from './User/checkout/checkout.component';
import { HomeComponent } from './User/home/home.component';
import { PaymentComponent } from './User/payment/payment.component';
import { UserprofileComponent } from './User/userprofile/userprofile.component';
import { UserordersComponent } from './User/userorders/userorders.component';
import { WishlistComponent } from './User/wishlist/wishlist.component';
import { TrackingComponent } from './User/tracking/tracking.component';
import { SigninComponent } from './User/auth/signin/signin.component';
import { SignupComponent } from './User/auth/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent,  },
  { path: 'view', component: ProductviewComponent,  },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'myprofile', component: UserprofileComponent },
  { path: 'myorders', component: UserordersComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'tracking/:orderid', component: TrackingComponent },
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
