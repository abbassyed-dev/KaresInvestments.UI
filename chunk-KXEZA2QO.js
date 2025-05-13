import {
  CookieService
} from "./chunk-4LQ7OEGE.js";
import {
  HttpClient,
  catchError,
  environment,
  of,
  switchMap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YYKS4PBP.js";

// src/app/login/login.service.ts
var LoginService = class _LoginService {
  constructor(http, cookieService) {
    this.http = http;
    this.cookieService = cookieService;
  }
  login(request) {
    return this.http.post(`${environment.apiBaseUrl}/api/auth/login`, {
      email: request.email,
      password: request.password
    });
  }
  // resetPassword(request: any): Observable<any> {
  //     return this.http.post<any>(`${environment.apiBaseUrl}/api/auth/reset-password`, request);
  // }
  resetPassword(email) {
    return this.http.post(`${environment.apiBaseUrl}/api/auth/reset-password`, JSON.stringify(email), {
      headers: { "Content-Type": "application/json" }
    });
  }
  refreshToken() {
    const refreshToken = this.cookieService.get("RefreshToken");
    return this.http.post(`${environment.apiBaseUrl}/api/auth/refresh-token`, { refreshToken }).pipe(switchMap((response) => {
      debugger;
      this.cookieService.set("Authorization", response.token);
      return of(response.refreshToken);
    }), catchError((error) => {
      return throwError(() => error);
    }));
  }
  static {
    this.\u0275fac = function LoginService_Factory(t) {
      return new (t || _LoginService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(CookieService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoginService, factory: _LoginService.\u0275fac, providedIn: "root" });
  }
};

export {
  LoginService
};
//# sourceMappingURL=chunk-KXEZA2QO.js.map
