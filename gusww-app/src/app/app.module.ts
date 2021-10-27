import { NgModule } from '@angular/core';
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
  issuer: 'https://auth.gusww-demo.com',
  clientId: '0oa4we06joofEMUTx696',
  redirectUri: '/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true  
}
const oktaAuth = new OktaAuth(config);
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { StaffComponent } from './staff/staff.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    AboutComponent,
    InfluencerComponent,
    StaffComponent
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
    OktaAuthModule 
  ],
  providers: [AuthService, { 
    provide: OKTA_CONFIG, 
    useValue: { oktaAuth } 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
