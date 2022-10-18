import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SignupComponent } from './signup/signup.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

import { PaymentComponent } from './payment/payment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DiscussionBoardComponent } from './discussion-board/discussion-board.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { ManageProductsComponent } from './admin-dashboard/Manage-Products/manage-products/manage-products.component';
//import { AddProductsComponent } from './admin-dashboard/Manage-Products/add-products/add-products.component';
//import { UpdateProductsComponent } from './admin-dashboard/Manage-Products/update-products/update-products.component';
import { ViewProductsComponent } from './admin-dashboard/Manage-Products/view-products/view-products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthInterceptor } from './auth.interceptor';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ValueArrayPipe } from './pipes/value-array.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    ProductInfoComponent,
    LoginComponent,
    CartComponent,
    PaymentComponent,
    AdminDashboardComponent,
    DiscussionBoardComponent,
    AdminUsersComponent,
    ManageProductsComponent,
    // AddProductsComponent,
    // UpdateProductsComponent,
    ViewProductsComponent,
    UserProfileComponent,
    EditUserComponent,
    ValueArrayPipe




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
