import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';
import { CustomerProfileView1Component } from './customer-profile-view1/customer-profile-view1.component';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './auth-guard.service';
import { VendorProfileView1Component } from './vendor-profile-view1/vendor-profile-view1.component';
import { CustomerProfileView2Component } from './customer-profile-view2/customer-profile-view2.component';
import { ParentUpdateComponent } from './parent-update/parent-update.component'
import { CustomerUpdateComponent } from './customer-update/customer-update.component'
import { AdminComponent } from './admin/admin.component'
import { AdminCustomerComponent } from './admin-customer/admin-customer.component'
import { AdminVendorComponent } from './admin-vendor/admin-vendor.component'
import { ResetPasswordComponent } from './reset-password/reset-password.component'



const routes: Routes = [ {path :'app-home-page', component: HomePageComponent },
                         {path : 'app-header', component: HeaderComponent},
                         {path : 'app-footer', component: FooterComponent},
                         {path : 'app-customer-registration', component: CustomerRegistrationComponent},
                         {path : 'app-vendor-registration', component: VendorRegistrationComponent},
                         {path : 'app-customer-profile-view1', component: CustomerProfileView1Component},
                         {path : 'app-customer-profile-view2', component: CustomerProfileView2Component},
                         {path : 'app-vendor-profile-view1', component: VendorProfileView1Component},
                         {path : 'app-register-page', component: RegisterPageComponent },
                         {path : 'app-contact-us', component: ContactUsComponent },
                         {path : 'app-about', component: AboutComponent },
                         {path : 'app-login', component: LoginComponent },               
                         {path : 'app- forgotten-password', component: ForgottenPasswordComponent},
                         {path: 'app-logout', component: LogoutComponent, canActivate:[AuthGaurdService]},           
                         {path : 'app-parent-update', component: ParentUpdateComponent},
                         {path :'app-customer-update', component:CustomerUpdateComponent },
                         {path :'app-admin', component:AdminComponent },
                         {path :'app-admin-customer', component:AdminCustomerComponent },
                         {path :'app-admin-vendor', component:AdminVendorComponent },
                         {path :'app-reset-password', component:ResetPasswordComponent }
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
