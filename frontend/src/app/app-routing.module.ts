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
import { ViewProductsComponent } from './admin-dashboard/Manage-Products/view-products/view-products.component';
import { AddProductsComponent } from './admin-dashboard/Manage-Products/add-products/add-products.component';
import { UpdateProductsComponent } from './admin-dashboard/Manage-Products/update-products/update-products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from "./auth.guard";
import { EditUserComponent } from './edit-user/edit-user.component';



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "product-info", component: ProductInfoComponent },

  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "cart", component: CartComponent },
  { path: "payment", component: PaymentComponent },
  { path: "admin", component: AdminDashboardComponent },
  { path: "discussion-board", component: DiscussionBoardComponent },
  { path: "Manage-Products", component: ViewProductsComponent },
  {path: "add-products", component: AddProductsComponent},
  {path: "update-product", component: UpdateProductsComponent},
  { path: "profile", component: UserProfileComponent },
  { path: "cart", component: CartComponent },
  { path: "payment", component: PaymentComponent },
  { path: "admin", component: AdminDashboardComponent },
  { path: "discussion-board", component: DiscussionBoardComponent },
  { path: "manage-users", component: AdminUsersComponent },
  { path: "Manage-Products", component: ViewProductsComponent },
  { path: 'profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'edit-user', component: EditUserComponent },
  { path: "log-out", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
