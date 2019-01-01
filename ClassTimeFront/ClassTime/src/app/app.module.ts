import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthService } from './common/services/auth.service';
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './common/interceptors/auth-interceptor';
import { DialogBoxComponent } from './common/components/dialog-box/dialog-box.component';
import { MatSnackBar, MatSnackBarContainer, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { TopMenuComponent } from './common/components/top-menu/top-menu.component';
import { LoginLayoutComponent } from './common/components/login-layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent,
    TopMenuComponent,
    LoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    MatSnackBar,
    Overlay,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent],
  entryComponents:[ MatSnackBarContainer ]
})
export class AppModule { }
