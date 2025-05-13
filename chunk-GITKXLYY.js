import {
  ButtonDirective,
  CommonModule,
  DefaultValueAccessor,
  Dialog,
  EmailValidator,
  FormsModule,
  HttpClient,
  InputText,
  InputTextarea,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgIf,
  NgModel,
  PatternValidator,
  PrimeNgModule,
  PrimeTemplate,
  RequiredValidator,
  Router,
  RouterLink,
  RouterModule,
  ToastrService,
  environment,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YYKS4PBP.js";
import "./chunk-ASLTLD6L.js";

// src/app/register/register.service.ts
var RegisterService = class _RegisterService {
  constructor(http) {
    this.http = http;
  }
  saveUserInterest(data) {
    return this.http.post(`${environment.apiBaseUrl}/api/UserInterest`, data);
  }
  static {
    this.\u0275fac = function RegisterService_Factory(t) {
      return new (t || _RegisterService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RegisterService, factory: _RegisterService.\u0275fac, providedIn: "root" });
  }
};

// src/app/register/register.component.ts
var _c0 = () => ["/login"];
function RegisterComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "small");
    \u0275\u0275text(2, "First Name is required and must be at least 2 characters.");
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "small");
    \u0275\u0275text(2, "Last Name is required and must be at least 2 characters.");
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "small");
    \u0275\u0275text(2, "Mobile number is required and must be a valid 10-digit number.");
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "small");
    \u0275\u0275text(2, "Email is required and must be a valid email address.");
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function RegisterComponent_ng_template_63_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.regDialogClose());
    });
    \u0275\u0275elementEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(dataService, router, toastr) {
    this.dataService = dataService;
    this.router = router;
    this.toastr = toastr;
    this.registrationConfirmation = false;
    this.model = {
      firstName: "",
      lastName: "",
      email: "",
      mobileNum: "",
      remarks: ""
    };
  }
  onSubmit(form) {
    if (form.valid) {
      console.log("Form Submitted:", form.value);
      this.dataService.saveUserInterest(this.model).subscribe({
        next: (response) => {
          this.registrationConfirmation = true;
        }
      });
    } else {
      this.toastr.error("Something went wrong. Please try again later.");
    }
  }
  regDialogClose() {
    this.registrationConfirmation = false;
    this.router.navigateByUrl("/");
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)(\u0275\u0275directiveInject(RegisterService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 64, vars: 16, consts: [["registerForm", "ngForm"], ["fName", "ngModel"], ["lName", "ngModel"], ["mob", "ngModel"], ["emailId", "ngModel"], ["remarks", "ngModel"], [1, "register-container"], [1, "register-wrapper"], [1, "register-card-wrapper"], [1, "register-card"], [1, "card-title"], [1, "instruction-text"], [1, "register-form", 3, "ngSubmit"], [1, "form-group"], ["for", "firstName", 1, "form-label"], [1, "input-container"], [1, "pi", "pi-user", "input-icon"], ["id", "firstName", "name", "firstName", "required", "", "minlength", "2", "type", "text", "placeholder", "Enter your first name", "pInputText", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "validation-message", 4, "ngIf"], ["for", "lastName", 1, "form-label"], ["id", "lastName", "name", "lastName", "required", "", "minlength", "2", "type", "text", "placeholder", "Enter your last name", "pInputText", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "mobileNum", 1, "form-label"], [1, "pi", "pi-mobile", "input-icon"], ["id", "mobileNum", "name", "mobileNum", "required", "", "type", "text", "placeholder", "Enter your 10-digit mobile number", "pInputText", "", "pattern", "^\\d{10}$", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "email", 1, "form-label"], [1, "pi", "pi-envelope", "input-icon"], ["id", "email", "name", "email", "required", "", "type", "text", "email", "", "placeholder", "Enter your email address", "pInputText", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "remarks", 1, "form-label"], [1, "input-container", "textarea-container"], [1, "pi", "pi-comment", "input-icon", "textarea-icon"], ["id", "remarks", "name", "remarks", "placeholder", "Share your comments or questions with us", "pInputTextarea", "", "rows", "4", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["pButton", "", "type", "submit", "label", "Submit", 1, "submit-button", 3, "disabled"], [1, "login-section"], [1, "login-link", 3, "routerLink"], ["header", "Confirmation", 3, "visibleChange", "visible", "modal", "closable", "styleClass"], [1, "confirmation-content"], [1, "confirmation-icon"], [1, "pi", "pi-check-circle"], [1, "confirmation-title"], [1, "confirmation-message"], ["pTemplate", "footer"], [1, "validation-message"], ["pButton", "", "label", "OK", 1, "dialog-button", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "h2", 10);
        \u0275\u0275text(5, "Let's Connect");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 11);
        \u0275\u0275text(7, " Please fill out the form below to get in touch with us. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "form", 12, 0);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() {
          \u0275\u0275restoreView(_r1);
          const registerForm_r2 = \u0275\u0275reference(9);
          return \u0275\u0275resetView(ctx.onSubmit(registerForm_r2));
        });
        \u0275\u0275elementStart(10, "div", 13)(11, "label", 14);
        \u0275\u0275text(12, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 15);
        \u0275\u0275element(14, "i", 16);
        \u0275\u0275elementStart(15, "input", 17, 1);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.firstName, $event) || (ctx.model.firstName = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, RegisterComponent_div_17_Template, 3, 0, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 13)(19, "label", 19);
        \u0275\u0275text(20, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 15);
        \u0275\u0275element(22, "i", 16);
        \u0275\u0275elementStart(23, "input", 20, 2);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.lastName, $event) || (ctx.model.lastName = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, RegisterComponent_div_25_Template, 3, 0, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 13)(27, "label", 21);
        \u0275\u0275text(28, "Mobile Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 15);
        \u0275\u0275element(30, "i", 22);
        \u0275\u0275elementStart(31, "input", 23, 3);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_31_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.mobileNum, $event) || (ctx.model.mobileNum = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(33, RegisterComponent_div_33_Template, 3, 0, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 13)(35, "label", 24);
        \u0275\u0275text(36, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 15);
        \u0275\u0275element(38, "i", 25);
        \u0275\u0275elementStart(39, "input", 26, 4);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_39_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.email, $event) || (ctx.model.email = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, RegisterComponent_div_41_Template, 3, 0, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 13)(43, "label", 27);
        \u0275\u0275text(44, "Comments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 28);
        \u0275\u0275element(46, "i", 29);
        \u0275\u0275elementStart(47, "textarea", 30, 5);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_textarea_ngModelChange_47_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.remarks, $event) || (ctx.model.remarks = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(49, "button", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 32)(51, "span");
        \u0275\u0275text(52, "Already have an account?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "a", 33);
        \u0275\u0275text(54, "Sign In");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(55, "p-dialog", 34);
        \u0275\u0275twoWayListener("visibleChange", function RegisterComponent_Template_p_dialog_visibleChange_55_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.registrationConfirmation, $event) || (ctx.registrationConfirmation = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(56, "div", 35)(57, "div", 36);
        \u0275\u0275element(58, "i", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "h3", 38);
        \u0275\u0275text(60, "Thank You!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p", 39);
        \u0275\u0275text(62, "Our team will contact you soon.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(63, RegisterComponent_ng_template_63_Template, 1, 0, "ng-template", 40);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const registerForm_r2 = \u0275\u0275reference(9);
        const fName_r5 = \u0275\u0275reference(16);
        const lName_r6 = \u0275\u0275reference(24);
        const mob_r7 = \u0275\u0275reference(32);
        const emailId_r8 = \u0275\u0275reference(40);
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.firstName);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", fName_r5.invalid && fName_r5.touched);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.lastName);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", lName_r6.invalid && lName_r6.touched);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.mobileNum);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", mob_r7.invalid && mob_r7.touched);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.email);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", emailId_r8.invalid && emailId_r8.touched);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.remarks);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", registerForm_r2.invalid);
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("visible", ctx.registrationConfirmation);
        \u0275\u0275property("modal", true)("closable", false)("styleClass", "confirmation-dialog");
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, PatternValidator, EmailValidator, NgModel, NgForm, ButtonDirective, PrimeTemplate, InputTextarea, InputText, Dialog], styles: ['\n\n.register-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #e4e8eb 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  margin-top: 60px;\n}\n.register-container[_ngcontent-%COMP%]   .register-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  justify-content: center;\n}\n.register-container[_ngcontent-%COMP%]   .register-card-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 580px;\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);\n  border-radius: 16px;\n  overflow: hidden;\n  position: relative;\n  margin-bottom: 2rem;\n}\n.register-container[_ngcontent-%COMP%]   .register-card-wrapper[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-color) 0%,\n      var(--primary-color-dark, #0d47a1) 100%);\n}\n.register-container[_ngcontent-%COMP%]   .register-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 2rem;\n  border-radius: 16px;\n  width: 100%;\n}\n.register-container[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  justify-content: center;\n}\n.register-container[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .logo-placeholder[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: var(--primary-color);\n  border-radius: 8px;\n  margin-right: 12px;\n}\n.register-container[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin: 0;\n}\n.register-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--text-color-secondary);\n  margin-bottom: 0.5rem;\n  text-align: center;\n}\n.register-container[_ngcontent-%COMP%]   .instruction-text[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 1rem;\n  margin-bottom: 1.5rem;\n  text-align: center;\n  opacity: 0.8;\n}\n.register-container[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.register-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.register-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: var(--text-color);\n  font-size: 0.95rem;\n}\n.register-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.register-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-color-secondary);\n  opacity: 0.7;\n}\n.register-container[_ngcontent-%COMP%]   .input-container.textarea-container[_ngcontent-%COMP%]   .textarea-icon[_ngcontent-%COMP%] {\n  top: 1.25rem;\n  transform: none;\n}\n.register-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], .register-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 0.75rem 0.75rem 2.5rem;\n  border-radius: 8px;\n  border: 1px solid var(--surface-border, #ced4da);\n  background-color: #ffffff;\n  color: var(--text-color, #333333);\n  transition: all 0.3s ease;\n  font-size: 0.95rem;\n}\n.register-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, .register-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);\n  background-color: #ffffff;\n}\n.register-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder, .register-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-color-secondary, #6c757d);\n  opacity: 0.6;\n}\n.register-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  background-color: #ffffff;\n}\n.register-container[_ngcontent-%COMP%]   .validation-message[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  color: var(--error-color, #f44336);\n  font-size: 0.85rem;\n}\n.register-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  font-size: 1rem;\n  font-weight: 600;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-color) 0%,\n      var(--primary-color-dark, #0d47a1) 100%);\n  border: none;\n  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);\n  transition: all 0.3s ease;\n  margin-top: 0.5rem;\n}\n.register-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 6px 16px rgba(33, 150, 243, 0.4);\n  transform: translateY(-1px);\n}\n.register-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.register-container[_ngcontent-%COMP%]   .login-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.95rem;\n  color: var(--text-color-secondary);\n}\n.register-container[_ngcontent-%COMP%]   .login-section[_ngcontent-%COMP%]   .login-link[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n  margin-left: 0.5rem;\n  text-decoration: none;\n}\n.register-container[_ngcontent-%COMP%]   .login-section[_ngcontent-%COMP%]   .login-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media screen and (max-width: 768px) {\n  .register-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .register-container[_ngcontent-%COMP%]   .register-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n[_nghost-%COMP%]     .p-inputtext, [_nghost-%COMP%]     .p-password-input, [_nghost-%COMP%]     .p-inputtextarea {\n  background-color: #ffffff !important;\n  color: var(--text-color, #333333) !important;\n}\n[_nghost-%COMP%]     .p-dropdown-panel, [_nghost-%COMP%]     .p-multiselect-panel, [_nghost-%COMP%]     .p-calendar-panel {\n  background-color: #ffffff !important;\n  color: var(--text-color, #333333) !important;\n}\n[_nghost-%COMP%]     .confirmation-dialog {\n  border-radius: 16px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .confirmation-dialog .p-dialog-header {\n  background: var(--primary-color);\n  color: white;\n  padding: 1rem;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n}\n[_nghost-%COMP%]     .confirmation-dialog .p-dialog-content {\n  padding: 1.5rem;\n  background-color: #ffffff;\n  color: var(--text-color, #333333);\n}\n[_nghost-%COMP%]     .confirmation-dialog .p-dialog-footer {\n  padding: 1rem;\n  border-top: 1px solid #f0f0f0;\n  display: flex;\n  justify-content: center;\n  background-color: #ffffff;\n}\n.confirmation-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 1rem 0;\n}\n.confirmation-content[_ngcontent-%COMP%]   .confirmation-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--primary-color);\n  margin-bottom: 1rem;\n}\n.confirmation-content[_ngcontent-%COMP%]   .confirmation-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: var(--text-color);\n}\n.confirmation-content[_ngcontent-%COMP%]   .confirmation-message[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-color-secondary);\n}\n.dialog-button[_ngcontent-%COMP%] {\n  min-width: 100px;\n  background: var(--primary-color);\n  border-color: var(--primary-color);\n  border-radius: 8px;\n}\n.dialog-button[_ngcontent-%COMP%]:hover {\n  background: var(--primary-color-dark, #0d47a1);\n  border-color: var(--primary-color-dark, #0d47a1);\n}\n/*# sourceMappingURL=register.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\register\\register.component.ts", lineNumber: 12 });
})();

// src/app/register/register-routing.module.ts
var RegisterRoutingModule = class _RegisterRoutingModule {
  static {
    this.\u0275fac = function RegisterRoutingModule_Factory(t) {
      return new (t || _RegisterRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RegisterRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild([
      { path: "", component: RegisterComponent }
    ]), RouterModule] });
  }
};

// src/app/register/register.module.ts
var RegisterModule = class _RegisterModule {
  static {
    this.\u0275fac = function RegisterModule_Factory(t) {
      return new (t || _RegisterModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RegisterModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [RegisterService], imports: [
      CommonModule,
      RegisterRoutingModule,
      FormsModule,
      PrimeNgModule
    ] });
  }
};
export {
  RegisterModule
};
//# sourceMappingURL=chunk-GITKXLYY.js.map
