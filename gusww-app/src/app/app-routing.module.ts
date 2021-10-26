import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { StaffComponent } from './staff/staff.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [  
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'influencer', component: InfluencerComponent, canActivate: [AuthGuard]},
  { path: 'staff', component: StaffComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
