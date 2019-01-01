import { Component } from '@angular/core';
import { AuthService } from './common/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ClassTime';

  public isLogin: boolean;
  
  constructor(private authService: AuthService) {
    this.isLogin = authService.getLoginStatus();
    this.authService.getLoginEvent().subscribe((loginStatus:boolean)=>{
      this.isLogin = loginStatus;
    })
  }
  
}
