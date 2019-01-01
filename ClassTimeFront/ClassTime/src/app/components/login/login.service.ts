import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/common/services/config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  public signIn(username: string, password: string, callback) {
    this.http.post(this.config.apiBaseUrl + "api/signin",{username, password}).subscribe(data=> {
      callback(null,data);
    },
    err=>{
      callback(err, null);
    });
  }
}
