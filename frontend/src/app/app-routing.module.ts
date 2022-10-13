import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ProductInfoComponent } from './product-info/product-info.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DiscussionBoardComponent } from './discussion-board/discussion-board.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';




const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "product-info", component: ProductInfoComponent },

  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path:"cart", component: CartComponent},
  { path: "payment", component:PaymentComponent},
  { path: "admin", component: AdminDashboardComponent },
  { path: "discussion-board", component: DiscussionBoardComponent },
  { path: "manage-users", component: AdminUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
