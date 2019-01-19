import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/common/services/util.service';
import { ConfigService } from 'src/app/common/services/config.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  constructor(private loginService: LoginService, private authService: AuthService, private router: Router, private util: UtilService, private config: ConfigService) { }

  public isSigningIn: boolean = false;

  ngOnInit() {
  }

  onSignIn(f: NgForm) {
    this.isSigningIn = true;
    const username = f.value.username;
    const password = f.value.password;
    this.loginService.signIn(username, password, (err, data)=>{
      this.isSigningIn = false;
      if(err) {
        this.util.openSnackBar(err.error,err.statusText);
        return;
      }
      else {
        this.authService.doLogin(data.token, data.roles[0].role);
        if(this.config.roles.ADMIN == data.roles[0].role)
          this.router.navigate(["/productOwner"]);
      }
    })
  }

}
