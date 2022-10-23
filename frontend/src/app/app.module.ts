import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SignupComponent } from './signup/signup.component';
import { ProductInfoComponent } from './product-list/product-info/product-info.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DiscussionBoardComponent } from './discussion-board/discussion-board.component';
import { AdminUsersComponent } from './admin-dashboard/admin-users/admin-users.component';
import { AdminManageOrdersComponent } from './admin-dashboard/admin-manage-orders/admin-manage-orders.component';
import { ManageProductsComponent } from './admin-dashboard/Manage-Products/manage-products/manage-products.component';
//import { AddProductsComponent } from './admin-dashboard/Manage-Products/add-products/add-products.component';
//import { UpdateProductsComponent } from './admin-dashboard/Manage-Products/update-products/update-products.component';

import { AddProductsComponent } from './admin-dashboard/Manage-Products/add-products/add-products.component';
import { UpdateProductsComponent } from './admin-dashboard/Manage-Products/update-products/update-products.component';
import { ViewProductsComponent } from './admin-dashboard/Manage-Products/view-products/view-products.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthInterceptor } from './auth.interceptor';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ValueArrayPipe } from './pipes/value-array.pipe';

import { ProductListComponent } from './product-list/product-list.component';
import { ManageQueryComponent } from './admin-dashboard/manage-query/manage-query.component';

import { GenderImagePipe } from './pipes/gender-image.pipe';
import { AdminSidenavComponent } from './admin-dashboard/admin-sidenav/admin-sidenav.component';

import { UpdateOrderStatusComponent } from './admin-dashboard/update-order-status/update-order-status.component';
import { AyurvedaComponent } from './categories/ayurveda/ayurveda.component';
import { HomeopathyComponent } from './categories/homeopathy/homeopathy.component';
import { HealthDevicesComponent } from './categories/health-devices/health-devices.component';
import { CovidEssentialsComponent } from './categories/covid-essentials/covid-essentials.component';
import { NutrientsComponent } from './categories/nutrients/nutrients.component';
import { ClinicalComponent } from './categories/clinical/clinical.component';
import { PersonalCareComponent } from './categories/personal-care/personal-care.component';
import { HomeCareComponent } from './categories/home-care/home-care.component';
import { ChartModule } from 'angular2-chartjs';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SortPipe } from './pipes/sort.pipe';


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
    AdminManageOrdersComponent,
    DiscussionBoardComponent,
    AdminUsersComponent,
    ManageProductsComponent,
    // //AddProductsComponent,
    // // UpdateProductsComponent,
    ViewProductsComponent,
    UserProfileComponent,
    ValueArrayPipe,


    ProductListComponent,
    ManageQueryComponent,




    AddProductsComponent,
    UpdateProductsComponent,
    ViewProductsComponent,
    UserProfileComponent,
    EditUserComponent,
    ValueArrayPipe,

    GenderImagePipe,
    UpdateOrderStatusComponent,
    AdminSidenavComponent,
    AyurvedaComponent,
    HomeopathyComponent,
    HealthDevicesComponent,
    CovidEssentialsComponent,
    NutrientsComponent,
    ClinicalComponent,
    PersonalCareComponent,
    HomeCareComponent,
    MyOrdersComponent,
    ProductCardComponent,
    SortPipe,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule,
    NgxPaginationModule


  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NgxPaginationModule
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,

    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
