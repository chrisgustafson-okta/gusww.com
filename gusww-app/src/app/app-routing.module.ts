import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { StaffComponent } from './staff/staff.component';
import { AuthGuard } from './auth.guard';
import { OktaAuthGuard } from '@okta/okta-angular';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { ProfileComponent } from './profile/profile.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [   
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login-callback', component: OktaCallbackComponent },
  { path: 'about', component: AboutComponent },
  { path: 'influencer', component: InfluencerComponent, canActivate: [OktaAuthGuard]},
  { path: 'staff', component: StaffComponent, canActivate: [OktaAuthGuard]},  
  { path: 'profile', component: ProfileComponent, canActivate: [OktaAuthGuard]},  
  { path: 'catalog', component: CatalogComponent, canActivate: [OktaAuthGuard]},  
  { path: 'supplier', component: SupplierComponent, canActivate: [OktaAuthGuard]},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
