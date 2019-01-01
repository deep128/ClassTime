import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModuleModule } from 'src/app/common/common-module/common-module.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModuleModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
