import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

const config = {
  issuer: 'https://auth.gusww-demo.com/oauth2/default',
  clientId: '0oa4we06joofEMUTx696',
  redirectUri: 'http://localhost:4200/login-callback',
  scopes: ['openid', 'profile', 'email'],
  useInteractionCodeFlow: true
}
const oktaAuth = new OktaAuth(config);
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { StaffComponent } from './staff/staff.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/modules/material/material.module';
import { ProfileComponent } from './profile/profile.component';
import { UserDataService } from './shared/services/user-data.service';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    AboutComponent,
    InfluencerComponent,
    StaffComponent,
    ProfileComponent    
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,   
    OktaAuthModule,
    HttpClientModule,
    MaterialModule    
  ],
  providers: [AuthService, { 
    provide: OKTA_CONFIG, 
    useValue: { oktaAuth },    
  },
  UserDataService,
  { provide: APP_BASE_HREF, useValue: environment.appBaseHref },],
  bootstrap: [AppComponent]
})
export class AppModule { }
