import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';
import { CustomerProfileView1Component } from './customer-profile-view1/customer-profile-view1.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { LogoutComponent } from './logout/logout.component';
import { VendorProfileView1Component } from './vendor-profile-view1/vendor-profile-view1.component';
import { CustomerProfileView2Component } from './customer-profile-view2/customer-profile-view2.component';
import { ParentUpdateComponent } from './parent-update/parent-update.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { VendorUpdateComponent } from './vendor-update/vendor-update.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { AdminVendorComponent } from './admin-vendor/admin-vendor.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    CustomerRegistrationComponent,
    VendorRegistrationComponent,
    CustomerProfileView1Component,
    AboutComponent,
    ContactUsComponent,
    LoginComponent,
    RegisterPageComponent,
    ForgottenPasswordComponent,
    LogoutComponent,
    VendorProfileView1Component,
    CustomerProfileView2Component,
    ParentUpdateComponent,
    CustomerUpdateComponent,
    VendorUpdateComponent,
    AdminComponent,
    AdminCustomerComponent,
    AdminVendorComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
