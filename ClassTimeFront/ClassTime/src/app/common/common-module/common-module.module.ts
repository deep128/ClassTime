import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ObserversModule } from '@angular/cdk/observers';
import { MatRippleModule, MatInput, MatFormField, MatButton, MatButtonModule, MatFormFieldModule, MatInputModule, MatSpinner, MatProgressSpinnerModule } from '@angular/material';
import { AuthInterceptor } from '../interceptors/auth-interceptor';
import { UtilService } from '../services/util.service';

@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    ObserversModule,
    MatRippleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ObserversModule,
    MatRippleModule,
    MatInput,
    MatFormField,
    MatButton,
    MatSpinner
  ]
})
export class CommonModuleModule {

  static forRoot():ModuleWithProviders {
    return {
        ngModule: CommonModuleModule,
        providers: [
          {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi:true
          },
          UtilService
        ]
    };
}

 }
