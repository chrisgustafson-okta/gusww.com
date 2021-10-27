import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { StaffComponent } from './staff/staff.component';
import { AuthGuard } from './auth.guard';
import { OktaAuthGuard } from '@okta/okta-angular';
import { OktaCallbackComponent } from '@okta/okta-angular';

const routes: Routes = [  
  { path: 'login-callback', component: OktaCallbackComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'influencer', component: InfluencerComponent, canActivate: [OktaAuthGuard]},
  { path: 'staff', component: StaffComponent, canActivate: [OktaAuthGuard]},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
