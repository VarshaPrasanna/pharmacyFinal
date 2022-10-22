import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ProductInfoComponent } from './product-list/product-info/product-info.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DiscussionBoardComponent } from './discussion-board/discussion-board.component';
import { AdminUsersComponent } from './admin-dashboard/admin-users/admin-users.component';
import { ViewProductsComponent } from './admin-dashboard/Manage-Products/view-products/view-products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from "./auth.guard";
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ManageQueryComponent } from './admin-dashboard/manage-query/manage-query.component';

import { AddProductsComponent } from './admin-dashboard/Manage-Products/add-products/add-products.component';
import { UpdateProductsComponent } from './admin-dashboard/Manage-Products/update-products/update-products.component';
import { AdminManageOrdersComponent } from './admin-dashboard/admin-manage-orders/admin-manage-orders.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';

import { UpdateOrderStatusComponent } from './admin-dashboard/update-order-status/update-order-status.component';
import { AyurvedaComponent } from './categories/ayurveda/ayurveda.component';
import { HomeopathyComponent } from './categories/homeopathy/homeopathy.component';
import { ClinicalComponent } from './categories/clinical/clinical.component';
import { CovidEssentialsComponent } from './categories/covid-essentials/covid-essentials.component';
import { HealthDevicesComponent } from './categories/health-devices/health-devices.component';
import { HomeCareComponent } from './categories/home-care/home-care.component';
import { NutrientsComponent } from './categories/nutrients/nutrients.component';
import { PersonalCareComponent } from './categories/personal-care/personal-care.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "product-info/:id", component: ProductInfoComponent },
  { path: "Manage-orders", component: AdminManageOrdersComponent },
  { path: 'update-status/:id', component: UpdateOrderStatusComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "cart", component: CartComponent },
  { path: "payment", component: PaymentComponent },
  { path: "admin", component: AdminDashboardComponent },
  { path: "discussion-board", component: DiscussionBoardComponent },
  { path: "add-products", component: AddProductsComponent },
  { path: "update-product/:id", component: UpdateProductsComponent },
  { path: "profile", component: UserProfileComponent },
  { path: "manage-users", component: AdminUsersComponent },
  { path: "Manage-Products", component: ViewProductsComponent },
  { path: 'profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'edit-user', component: EditUserComponent },
  { path: "log-out", component: HomeComponent },
  { path: "product-list", component: ProductListComponent },
  { path: "Ayurveda", component: AyurvedaComponent },
  { path: "Homeopathy", component: HomeopathyComponent },
  { path: "Clinical", component: ClinicalComponent },
  { path: "covid-essential", component: CovidEssentialsComponent },
  { path: "health-device", component: HealthDevicesComponent },
  { path: "home-care", component: HomeCareComponent },
  { path: "Nutrients", component: NutrientsComponent },
  { path: "personal-care", component: PersonalCareComponent },
  { path: "messageList", component: ManageQueryComponent },
  { path: "chat-bot", component: ChatBotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
