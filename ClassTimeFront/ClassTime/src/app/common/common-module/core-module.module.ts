import { NgModule, Optional, SkipSelf, ModuleWithProviders } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AuthInterceptor } from "../interceptors/auth-interceptor";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      [],
      {enableTracing: true}
    ),
  ],
  declarations: [],
  providers: [DatePipe]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
      ]
    };
  }
}