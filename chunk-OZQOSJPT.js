import {
  LoginService
} from "./chunk-KXEZA2QO.js";
import {
  LayoutService
} from "./chunk-RJDWO5KX.js";
import {
  AuthStateService,
  CookieService
} from "./chunk-4LQ7OEGE.js";
import {
  ButtonDirective,
  CommonModule,
  DefaultValueAccessor,
  FormsModule,
  InputText,
  NgControlStatus,
  NgModel,
  Password,
  PrimeNgModule,
  Router,
  RouterLink,
  RouterModule,
  ToastrService,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YYKS4PBP.js";
import "./chunk-ASLTLD6L.js";

// src/app/login/login.component.ts
var _c0 = () => ["/forgotpassword"];
var _c1 = () => ["/register"];
var LoginComponent = class _LoginComponent {
  constructor(layoutService, loginService, cookieService, router, toastr, authStateService) {
    this.layoutService = layoutService;
    this.loginService = loginService;
    this.cookieService = cookieService;
    this.router = router;
    this.toastr = toastr;
    this.authStateService = authStateService;
    this.email = "";
    this.password = "";
    this.rememberMe = false;
  }
  login() {
    const payload = {
      email: this.email,
      password: this.password
    };
    this.loginService.login(payload).subscribe({
      next: (response) => {
        this.cookieService.set("Authorization", `Bearer ${response.token}`, void 0, "/", void 0, true, "Strict");
        this.cookieService.set("RefreshToken", response.refreshToken);
        console.log(response);
        this.authStateService.setUser(response);
        if (response.isAdmin) {
          this.router.navigate(["/dashboard/admin"]);
        } else {
          this.router.navigate(["/dashboard/user"]);
        }
      },
      error: (err) => {
        if (err?.message) {
          this.toastr.error(err.message);
        } else {
          this.toastr.error("An unexpected error occurred.", "Error");
        }
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(LoginService), \u0275\u0275directiveInject(CookieService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AuthStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 29, vars: 7, consts: [[1, "login-container"], [1, "login-wrapper"], [1, "login-card-wrapper"], [1, "login-card"], [1, "card-title"], [1, "welcome-text"], [1, "form-group"], ["for", "email1", 1, "form-label"], [1, "input-container"], [1, "pi", "pi-envelope", "input-icon"], ["id", "email1", "type", "email", "placeholder", "Enter your email", "pInputText", "", 3, "ngModelChange", "ngModel"], ["for", "password1", 1, "form-label"], [1, "pi", "pi-lock", "input-icon"], ["id", "password1", "placeholder", "Enter your password", "styleClass", "password-input", "inputStyleClass", "p-password-input", 3, "ngModelChange", "keydown.enter", "ngModel", "toggleMask"], [1, "login-options"], [1, "forgot-link", 3, "routerLink"], ["pButton", "", "label", "Sign In", 1, "sign-in-button", 3, "click"], [1, "sign-up-section"], [1, "sign-up-link", 3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        \u0275\u0275text(5, "Sign In");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "Welcome back! Please enter your credentials");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "label", 7);
        \u0275\u0275text(10, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275element(12, "i", 9);
        \u0275\u0275elementStart(13, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 6)(15, "label", 11);
        \u0275\u0275text(16, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 8);
        \u0275\u0275element(18, "i", 12);
        \u0275\u0275elementStart(19, "p-password", 13);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_p_password_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275listener("keydown.enter", function LoginComponent_Template_p_password_keydown_enter_19_listener() {
          return ctx.login();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 14)(21, "a", 15);
        \u0275\u0275text(22, "Forgot password?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "button", 16);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_23_listener() {
          return ctx.login();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 17)(25, "span");
        \u0275\u0275text(26, "Don't have an account?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "a", 18);
        \u0275\u0275text(28, "Sign Up");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275property("toggleMask", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c1));
      }
    }, dependencies: [RouterLink, DefaultValueAccessor, NgControlStatus, NgModel, ButtonDirective, InputText, Password], styles: ['\n\n.login-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #e4e8eb 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  justify-content: center;\n}\n.login-container[_ngcontent-%COMP%]   .login-card-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);\n  border-radius: 16px;\n  overflow: hidden;\n  position: relative;\n}\n.login-container[_ngcontent-%COMP%]   .login-card-wrapper[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-color) 0%,\n      var(--primary-color-dark, #0d47a1) 100%);\n}\n.login-container[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 2.5rem;\n  border-radius: 16px;\n  width: 100%;\n}\n.login-container[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 2rem;\n  justify-content: center;\n}\n.login-container[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .logo-placeholder[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: var(--primary-color);\n  border-radius: 8px;\n  margin-right: 12px;\n}\n.login-container[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin: 0;\n}\n.login-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--text-color-secondary);\n  margin-bottom: 0.75rem;\n  text-align: center;\n}\n.login-container[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 1rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  opacity: 0.8;\n}\n.login-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.login-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: var(--text-color);\n  font-size: 0.95rem;\n}\n.login-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.login-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-color-secondary);\n  opacity: 0.7;\n}\n.login-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1rem 1rem 2.75rem;\n  border-radius: 8px;\n  border: 1px solid var(--surface-border, #ced4da);\n  background-color: #ffffff;\n  color: var(--text-color, #333333);\n  transition: all 0.3s ease;\n}\n.login-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);\n  background-color: #ffffff;\n}\n.login-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-color-secondary, #6c757d);\n  opacity: 0.6;\n}\n.login-container[_ngcontent-%COMP%]     .password-input {\n  width: 100%;\n}\n.login-container[_ngcontent-%COMP%]     .password-input   .p-password-input {\n  width: 100%;\n  padding: 1rem 1rem 1rem 2.75rem;\n  border-radius: 8px;\n  background-color: #ffffff;\n  color: var(--text-color, #333333);\n}\n.login-container[_ngcontent-%COMP%]     .password-input   .p-password-input::placeholder {\n  color: var(--text-color-secondary, #6c757d);\n  opacity: 0.6;\n}\n.login-container[_ngcontent-%COMP%]     .password-input   .p-password-panel {\n  background-color: #ffffff;\n  border-color: var(--surface-border, #ced4da);\n}\n.login-container[_ngcontent-%COMP%]   .login-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.login-container[_ngcontent-%COMP%]   .login-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.login-container[_ngcontent-%COMP%]   .login-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  font-size: 0.9rem;\n  color: var(--text-color-secondary);\n}\n.login-container[_ngcontent-%COMP%]   .login-options[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--primary-color);\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.login-container[_ngcontent-%COMP%]   .login-options[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color-dark, #0d47a1);\n  text-decoration: underline;\n}\n.login-container[_ngcontent-%COMP%]   .sign-in-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  font-size: 1rem;\n  font-weight: 600;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-color) 0%,\n      var(--primary-color-dark, #0d47a1) 100%);\n  border: none;\n  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);\n  transition: all 0.3s ease;\n  color: #ffffff;\n}\n.login-container[_ngcontent-%COMP%]   .sign-in-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 16px rgba(33, 150, 243, 0.4);\n  transform: translateY(-1px);\n}\n.login-container[_ngcontent-%COMP%]   .sign-up-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n  font-size: 0.95rem;\n  color: var(--text-color-secondary);\n}\n.login-container[_ngcontent-%COMP%]   .sign-up-section[_ngcontent-%COMP%]   .sign-up-link[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n  margin-left: 0.5rem;\n  text-decoration: none;\n}\n.login-container[_ngcontent-%COMP%]   .sign-up-section[_ngcontent-%COMP%]   .sign-up-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media screen and (max-width: 576px) {\n  .login-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\login\\login.component.ts", lineNumber: 16 });
})();

// src/app/login/login-routing.module.ts
var LoginRoutingModule = class _LoginRoutingModule {
  static {
    this.\u0275fac = function LoginRoutingModule_Factory(t) {
      return new (t || _LoginRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LoginRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild([
      { path: "", component: LoginComponent }
    ]), RouterModule] });
  }
};

// src/app/login/login.module.ts
var LoginModule = class _LoginModule {
  static {
    this.\u0275fac = function LoginModule_Factory(t) {
      return new (t || _LoginModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LoginModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      LoginRoutingModule,
      FormsModule,
      PrimeNgModule
    ] });
  }
};
export {
  LoginModule
};
//# sourceMappingURL=chunk-OZQOSJPT.js.map
