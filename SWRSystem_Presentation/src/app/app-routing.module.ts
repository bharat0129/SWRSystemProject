import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component'


const routes: Routes = [ {path :'app-home-page', component: HomePageComponent},
                         {path : 'app-header', component: HeaderComponent},
                         {path : 'app-footer', component: FooterComponent},
                         {path : 'app-customer-registration', component: CustomerRegistrationComponent},
                         {path : 'app-vendor-registration', component: VendorRegistrationComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
