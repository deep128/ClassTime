import { Injectable, EventEmitter } from '@angular/core';
import { ResolveStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogin: boolean;
  private token: string;
  private role: string;
  private readonly tokenName = "token";
  private loginEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.initLoginToken();
  }

  public getLoginEvent(): EventEmitter<boolean> {
    return this.loginEvent;
  }

  public getLoginStatus(): boolean {
    return this.isLogin;
  }

  public getToken(): string {
    return this.token;
  }

  public getRole(): string {
    return this.role;
  }

  public doLogin(token: string, role: any) {
    this.isLogin = true;
    this.token = token;
    this.role = role;
    document.cookie = this.tokenName + "=" + token + ";";
    document.cookie = 'role=' + role + ";";
    this.loginEvent.emit(true);
  }

  private initLoginToken() {
    let matchToken = document.cookie.match(new RegExp(this.tokenName + '=[^;]+'));
    let matchRole = document.cookie.match(new RegExp('role=[^;]+'));
    if(matchToken && matchRole) {
      this.token = matchToken[0].split("=")[1];
      this.role = matchRole[0].split("=")[1];
      this.isLogin = true;
    }
    else {
      this.isLogin = false;
    }
  }

  public logOut() {
    document.cookie = this.tokenName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    this.token = null;
    this.isLogin = false;
    this.loginEvent.emit(false);
  }
}
