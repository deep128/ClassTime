import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
        if(this.authService.getLoginStatus()) {
            let reqClone = req.clone({headers: req.headers.set('x-auth',this.authService.getToken())});
            return handler.handle(reqClone);
        }

        return handler.handle(req);
    }
}
