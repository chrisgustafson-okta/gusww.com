import { Injectable } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { JwtHelperService } from '@auth0/angular-jwt';

interface Claim {
  claim: string;
  value: string;
}

interface UserObject {
  userName: string  
}
@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  user:UserObject = {userName:''};
  claims:Claim[] = []
  idToken:object = {};
  accessToken:object = {};

  constructor(public authStateService: OktaAuthStateService, private oktaAuth : OktaAuth) {
    this.authStateService.authState$.subscribe( res=>{this.load()}, err=>{});
  }

  private async load() {
    if (await this.isAuthenticated()) {
       this.user.userName = await this.loadUserName() as string;
       this.claims = await this.loadClaims() as Claim[];
       const helper = new JwtHelperService();

       this.accessToken = helper.decodeToken(await this.loadAccessToken() as string);
       this.idToken = helper.decodeToken(await this.loadIdToken() as string);
  
    }
  }
  private async isAuthenticated() {
    return await this.oktaAuth.isAuthenticated();
  }

  private async loadUserName(): Promise<string> {
    if (await this.isAuthenticated()) {
      const userClaims = await this.oktaAuth.getUser();
      return  userClaims.name as string;
    }
    return '';
  }
  private async loadClaims():Promise<Claim[]> {
    if (await this.isAuthenticated()) {
      const userClaims = await this.oktaAuth.getUser();
      return  Object.entries(userClaims).map(entry => ({ claim: entry[0], value: entry[1] }));
    }
    return [];
  }
  private async loadIdToken():Promise<string> {
    if (await this.isAuthenticated()) {
      return this.oktaAuth.getIdToken() as string;
    }
    return '';
  }
  private async loadAccessToken():Promise<string> {
    if (await this.isAuthenticated()) {
      return this.oktaAuth.getAccessToken() as string;
    }
    return '';
  }

  public getUser() {
    return this.user;
  }
  public getClaims() {
    return this.claims;
  }
  public getIdToken() {
    return this.idToken;
  }
  public getAccessToken() {
    return this.accessToken;
  }
}
