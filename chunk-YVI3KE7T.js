import {
  UsersService
} from "./chunk-BXUO4OAC.js";
import {
  LayoutService
} from "./chunk-RJDWO5KX.js";
import {
  HighchartsChartComponent,
  HighchartsChartModule,
  require_highcharts
} from "./chunk-H4RPOOCP.js";
import {
  CurrencyFormatPipe,
  LucideAngularComponent,
  PhoneFormatPipe,
  SharedModule
} from "./chunk-TOGNVH2H.js";
import {
  AuthStateService
} from "./chunk-4LQ7OEGE.js";
import {
  Button,
  ButtonDirective,
  Calendar,
  CancelEditableRow,
  CellEditor,
  CommonModule,
  ConfirmDialog,
  ConfirmationService,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  DefaultValueAccessor,
  Dialog,
  Dropdown,
  EditableRow,
  EmailValidator,
  EventEmitter,
  Footer,
  FormsModule,
  HttpClient,
  IconField,
  InitEditableRow,
  InputMask,
  InputNumber,
  InputSwitch,
  InputText,
  InputTextarea,
  MessageService,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  PatternValidator,
  PrimeNgModule,
  PrimeTemplate,
  RadioButton,
  RequiredValidator,
  Ripple,
  RouterModule,
  SaveEditableRow,
  SelectableRow,
  Subject,
  TabPanel,
  TabView,
  Table,
  ToastrService,
  Tooltip,
  debounceTime,
  environment,
  mergeMap,
  switchMap,
  tap,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YYKS4PBP.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-ASLTLD6L.js";

// src/app/admin/users/users.component.ts
var _c0 = () => ["firstName", "lastName", "email", "phoneNo"];
var _c1 = () => ({ width: "550px" });
function UsersComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "p-button", 19);
    \u0275\u0275listener("onClick", function UsersComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addUser());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconField", 20);
    \u0275\u0275element(3, "lucide-icon", 21);
    \u0275\u0275elementStart(4, "input", 22, 2);
    \u0275\u0275listener("input", function UsersComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r2);
      const searchInput_r4 = \u0275\u0275reference(5);
      \u0275\u0275nextContext();
      const usersGrid_r5 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(usersGrid_r5.filterGlobal(searchInput_r4.value, "contains"));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 16);
  }
}
function UsersComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Phone No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "User Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "View");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_ng_template_6_p_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 26);
    \u0275\u0275listener("onClick", function UsersComponent_ng_template_6_p_button_21_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r8);
      const user_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewTransactions(user_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function UsersComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "phoneFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "p-button", 23);
    \u0275\u0275listener("onClick", function UsersComponent_ng_template_6_Template_p_button_onClick_20_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editUser(user_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, UsersComponent_ng_template_6_p_button_21_Template, 1, 2, "p-button", 24);
    \u0275\u0275elementStart(22, "button", 25);
    \u0275\u0275listener("click", function UsersComponent_ng_template_6_Template_button_click_22_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showConfirmation(user_r7));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.firstName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 11, user_r7.dateOfBirth, "MM/dd/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, user_r7.phoneNo));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.userName);
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true)("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.fetchAdmins === "N");
  }
}
function UsersComponent_ng_template_10_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "small");
    \u0275\u0275text(2, "First Name is required.");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_ng_template_10_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "small");
    \u0275\u0275text(2, "Last Name is required.");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_ng_template_10_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "small");
    \u0275\u0275text(2, "Mobile # is required and must be 10-digit number.");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_ng_template_10_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "small");
    \u0275\u0275text(2, "Email is required & must be valid");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_ng_template_10_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "small");
    \u0275\u0275text(2, "Email already exists");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "label", 29);
    \u0275\u0275text(3, "First Name");
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5, "\xA0*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "input", 31, 3);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_ng_template_10_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.firstName, $event) || (ctx_r2.user.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, UsersComponent_ng_template_10_div_8_Template, 3, 0, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 28)(10, "label", 33);
    \u0275\u0275text(11, "Last Name");
    \u0275\u0275elementStart(12, "span", 30);
    \u0275\u0275text(13, "\xA0*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 34, 4);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_ng_template_10_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.lastName, $event) || (ctx_r2.user.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, UsersComponent_ng_template_10_div_16_Template, 3, 0, "div", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 27)(18, "div", 28)(19, "label", 35);
    \u0275\u0275text(20, "Date Of Birth");
    \u0275\u0275elementStart(21, "span", 30);
    \u0275\u0275text(22, "\xA0*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p-calendar", 36, 5);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_ng_template_10_Template_p_calendar_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.dateOfBirth, $event) || (ctx_r2.user.dateOfBirth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 28)(26, "label", 37);
    \u0275\u0275text(27, "Mobile # ");
    \u0275\u0275elementStart(28, "span", 30);
    \u0275\u0275text(29, "\xA0*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "p-inputMask", 38, 6);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_ng_template_10_Template_p_inputMask_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.phoneNo, $event) || (ctx_r2.user.phoneNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, UsersComponent_ng_template_10_div_32_Template, 3, 0, "div", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 27)(34, "div", 28)(35, "label", 39);
    \u0275\u0275text(36, "Email ");
    \u0275\u0275elementStart(37, "span", 30);
    \u0275\u0275text(38, "\xA0*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "input", 40, 7);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_ng_template_10_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.email, $event) || (ctx_r2.user.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UsersComponent_ng_template_10_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEmailChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, UsersComponent_ng_template_10_div_41_Template, 3, 0, "div", 32)(42, UsersComponent_ng_template_10_div_42_Template, 3, 0, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 28)(44, "label", 41);
    \u0275\u0275text(45, "Default Portfolio ");
    \u0275\u0275elementStart(46, "span", 30);
    \u0275\u0275text(47, "\xA0*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "p-dropdown", 42);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_ng_template_10_Template_p_dropdown_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.portfolioId, $event) || (ctx_r2.user.portfolioId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 27)(50, "div", 28)(51, "label", 43);
    \u0275\u0275text(52, "Address Line 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_ng_template_10_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.addressLine1, $event) || (ctx_r2.user.addressLine1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 28)(55, "label", 45);
    \u0275\u0275text(56, "Address Line 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_ng_template_10_Template_input_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.addressLine2, $event) || (ctx_r2.user.addressLine2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 27)(59, "div", 28)(60, "label", 47);
    \u0275\u0275text(61, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_ng_template_10_Template_input_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.city, $event) || (ctx_r2.user.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 28)(64, "label", 49);
    \u0275\u0275text(65, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_ng_template_10_Template_input_ngModelChange_66_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.state, $event) || (ctx_r2.user.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 27)(68, "div", 28)(69, "label", 51);
    \u0275\u0275text(70, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_ng_template_10_Template_input_ngModelChange_71_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.country, $event) || (ctx_r2.user.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 28)(73, "label", 53);
    \u0275\u0275text(74, "Zip Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "p-inputNumber", 54);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_ng_template_10_Template_p_inputNumber_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.zipCode, $event) || (ctx_r2.user.zipCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 55)(77, "label", 56);
    \u0275\u0275text(78, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "textarea", 57);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_ng_template_10_Template_textarea_ngModelChange_79_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.remarks, $event) || (ctx_r2.user.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(80, "        ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fName_r11 = \u0275\u0275reference(7);
    const lName_r12 = \u0275\u0275reference(15);
    const phoneNo_r13 = \u0275\u0275reference(31);
    const email_r14 = \u0275\u0275reference(40);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.firstName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", fName_r11.invalid && fName_r11.touched);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", lName_r12.invalid && lName_r12.touched);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.dateOfBirth);
    \u0275\u0275property("showIcon", true)("showOnFocus", true)("showTime", false)("dataType", "date");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.phoneNo);
    \u0275\u0275property("unmask", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", phoneNo_r13.invalid && phoneNo_r13.touched);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", email_r14.invalid && email_r14.touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.emailExists);
    \u0275\u0275advance(6);
    \u0275\u0275property("options", ctx_r2.lookupData.portfolios);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.portfolioId);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.addressLine1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.addressLine2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.state);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.country);
    \u0275\u0275advance(4);
    \u0275\u0275property("useGrouping", false);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.zipCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.remarks);
  }
}
function UsersComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 58);
    \u0275\u0275listener("onClick", function UsersComponent_ng_template_11_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 59);
    \u0275\u0275listener("onClick", function UsersComponent_ng_template_11_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      const userForm_r9 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(ctx_r2.saveUser(userForm_r9));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const userForm_r9 = \u0275\u0275reference(8);
    \u0275\u0275property("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", userForm_r9.invalid || ctx_r2.emailExists);
  }
}
var UsersComponent = class _UsersComponent {
  constructor(dataService, toastr, authStateService, confirmationService) {
    this.dataService = dataService;
    this.toastr = toastr;
    this.authStateService = authStateService;
    this.confirmationService = confirmationService;
    this.user = {};
    this.userDialog = false;
    this.submitted = false;
    this.userNameDisabled = false;
    this.emailExists = false;
    this.emailCheckSubject = new Subject();
    this.userContextFromUserTab = new EventEmitter();
    this.fetchAdmins = "N";
    this.emailCheckSubject.pipe(
      debounceTime(500),
      // Waits 500ms after last input
      switchMap((email) => this.dataService.checkEmailExists(email))
      // Calls the API
    ).subscribe((exists) => {
      this.emailExists = exists;
    });
  }
  ngOnInit() {
    this.getLovs();
    this.getAllUsers();
  }
  getAllUsers() {
    this.dataService.getAllUsers(this.fetchAdmins).subscribe((res) => {
      console.log(res);
      this.users = res;
    });
  }
  addUser() {
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }
  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }
  editUser(user) {
    this.user = __spreadValues({}, user);
    this.user.dateOfBirth = new Date(user.dateOfBirth);
    this.userDialog = true;
  }
  saveUser(form) {
    if (this.user.userId) {
      console.log("********Updating User***********", this.user);
      this.user.isAdmin = this.fetchAdmins === "Y";
      this.user.userName = this.user.email;
      this.user.zipCode = this.user.zipCode.toString();
      this.user.createdBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
      this.dataService.updateUser(this.user.userId, this.user).subscribe((res) => {
        this.getAllUsers();
        this.toastr.success("User Details Updated Successfully");
      });
    } else {
      this.user.isAdmin = this.fetchAdmins === "Y";
      this.user.userName = this.user.email;
      this.user.zipCode = this.user.zipCode?.toString();
      this.user.createdBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
      console.log("********Inserting User***********", this.user);
      this.dataService.saveUser(this.user).subscribe((res) => {
        this.getAllUsers();
        this.toastr.success("User Details Added Successfully");
      });
    }
    this.userDialog = false;
    this.user = {};
  }
  viewTransactions(user) {
    this.userContextFromUserTab.emit(user);
  }
  deleteUser(user) {
    if (user.userId) {
      this.dataService.deleteUser(user.userId).subscribe((res) => {
        this.getAllUsers();
        this.toastr.success("User Details deleted Successfully");
      }, (err) => {
        console.error("Error Deleting User", err);
      });
    }
  }
  getLovs() {
    this.dataService.getLookup().subscribe((res) => {
      console.log(res);
      this.lookupData = res;
    });
  }
  onEmailChange(event) {
    this.emailCheckSubject.next(event);
  }
  showConfirmation(user) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete this User ?",
      header: "Delete Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptButtonStyleClass: "p-button-danger",
      rejectButtonStyleClass: "p-button-text p-button-text",
      accept: () => {
        this.deleteUser(user);
      }
    });
  }
  static {
    this.\u0275fac = function UsersComponent_Factory(t) {
      return new (t || _UsersComponent)(\u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(ConfirmationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], inputs: { fetchAdmins: "fetchAdmins" }, outputs: { userContextFromUserTab: "userContextFromUserTab" }, decls: 13, vars: 10, consts: [["usersGrid", ""], ["userForm", "ngForm"], ["searchInput", ""], ["fName", "ngModel"], ["lName", "ngModel"], ["dateOfBirth", "ngModel"], ["phoneNo", "ngModel"], ["email", "ngModel"], [1, "col-12"], [1, ""], ["responsiveLayout", "scroll", 3, "value", "paginator", "rows", "globalFilterFields"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "ngSubmit"], ["header", "Add User", "styleClass", "p-fluid", 3, "visibleChange", "visible", "modal"], ["pTemplate", "content"], ["pTemplate", "footer"], [1, "flex"], ["severity", "success", "label", "Add User", "icon", "pi pi-user-plus", 1, "mr-2", 3, "onClick"], ["iconPosition", "left", 1, "ml-auto", "search-container"], ["name", "search", 1, "search-icon", 3, "size"], ["pInputText", "", "type", "text", "placeholder", "Search keyword", 1, "search-input", 3, "input"], ["icon", "pi pi-user-edit", "severity", "success", 1, "mr-2", 3, "onClick", "rounded", "outlined"], ["icon", "pi pi-list-check", "class", "mr-2", "pTooltip", "View Transactions", "severity", "success", 3, "rounded", "outlined", "onClick", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", "pTooltip", "Delete", 1, "p-button-rounded", "p-button-text", "p-button-danger", 3, "click"], ["icon", "pi pi-list-check", "pTooltip", "View Transactions", "severity", "success", 1, "mr-2", 3, "onClick", "rounded", "outlined"], [1, "formgrid", "grid", "mb-2"], [1, "field", "col"], ["for", "firstName"], [1, "text-danger"], ["type", "text", "pInputText", "", "id", "firstName", "name", "firstName", "required", "", 3, "ngModelChange", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "lastName"], ["type", "text", "pInputText", "", "id", "lastName", "name", "lastName", "required", "", 3, "ngModelChange", "ngModel"], ["for", "dateOfBirth"], ["id", "dateOfBirth", "name", "dateOfBirth", "inputId", "buttondisplay", "dateFormat", "mm/dd/yy", 3, "ngModelChange", "ngModel", "showIcon", "showOnFocus", "showTime", "dataType"], ["for", "phoneNo"], ["id", "phoneNo", "mask", "(999) 999-9999", "name", "phoneNo", "placeholder", "(999) 999-9999", 3, "ngModelChange", "ngModel", "unmask"], ["for", "email"], ["type", "text", "email", "", "pInputText", "", "id", "email", "name", "email", "required", "", 3, "ngModelChange", "ngModel"], ["for", "portfolio"], ["name", "portfolioId", "optionLabel", "portfolioName", "optionValue", "portfolioId", "placeholder", "Select Portfolio", "appendTo", "body", "required", "", 3, "ngModelChange", "options", "ngModel"], ["for", "addressLine1"], ["type", "text", "pInputText", "", "id", "addressLine1", "name", "addressLine1", 3, "ngModelChange", "ngModel"], ["for", "addressLine2"], ["type", "text", "pInputText", "", "id", "addressLine2", "name", "addressLine2", 3, "ngModelChange", "ngModel"], ["for", "city"], ["type", "text", "pInputText", "", "id", "city", "name", "city", 3, "ngModelChange", "ngModel"], ["for", "state"], ["type", "text", "pInputText", "", "id", "state", "name", "state", 3, "ngModelChange", "ngModel"], ["for", "country"], ["type", "text", "pInputText", "", "id", "country", "name", "country", 3, "ngModelChange", "ngModel"], ["for", "zipCode"], ["id", "zipCode", "name", "zipCode", 3, "ngModelChange", "useGrouping", "ngModel"], [1, "field"], ["for", "remarks"], ["id", "remarks", "name", "remarks", "pInputTextarea", "", "rows", "3", "cols", "20", 3, "ngModelChange", "ngModel"], ["label", "Cancel", "icon", "pi pi-times", 3, "onClick", "text"], ["label", "Save", "icon", "pi pi-check", 3, "onClick", "disabled"]], template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "p-table", 10, 0);
        \u0275\u0275template(4, UsersComponent_ng_template_4_Template, 6, 1, "ng-template", 11)(5, UsersComponent_ng_template_5_Template, 19, 0, "ng-template", 12)(6, UsersComponent_ng_template_6_Template, 23, 16, "ng-template", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "form", 14, 1);
        \u0275\u0275listener("ngSubmit", function UsersComponent_Template_form_ngSubmit_7_listener() {
          \u0275\u0275restoreView(_r1);
          const userForm_r9 = \u0275\u0275reference(8);
          return \u0275\u0275resetView(ctx.saveUser(userForm_r9));
        });
        \u0275\u0275elementStart(9, "p-dialog", 15);
        \u0275\u0275twoWayListener("visibleChange", function UsersComponent_Template_p_dialog_visibleChange_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userDialog, $event) || (ctx.userDialog = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275template(10, UsersComponent_ng_template_10_Template, 81, 25, "ng-template", 16)(11, UsersComponent_ng_template_11_Template, 2, 2, "ng-template", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(12, "p-confirmDialog");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.users)("paginator", true)("rows", 10)("globalFilterFields", \u0275\u0275pureFunction0(8, _c0));
        \u0275\u0275advance(7);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(9, _c1));
        \u0275\u0275twoWayProperty("visible", ctx.userDialog);
        \u0275\u0275property("modal", true);
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, EmailValidator, NgModel, NgForm, Calendar, ButtonDirective, Button, PrimeTemplate, ConfirmDialog, IconField, InputTextarea, InputNumber, Dropdown, InputText, Tooltip, Ripple, Table, Dialog, InputMask, LucideAngularComponent, DatePipe, PhoneFormatPipe], styles: ['\n\n[_nghost-%COMP%] {\n  --card-border-radius: 12px;\n  --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  --card-shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.1);\n  --header-icon-bg: rgba(41, 98, 255, 0.1);\n  --header-icon-color: var(--primary-color);\n  --progress-bar-height: 8px;\n  --progress-bar-radius: 10px;\n  --transition-speed: 0.25s;\n  --primary-color: #2962ff;\n  --secondary-color: #ff884d;\n  --positive-color: #4caf50;\n  --negative-color: #ef4444;\n  --dividend-color: #ff884d;\n  --text-color: #333;\n  --text-color-secondary: #666;\n  --surface-overlay: #fff;\n  --surface-section: #f5f7fa;\n  --border-color: #e0e0e0;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: var(--surface-overlay);\n  border-radius: var(--card-border-radius);\n  box-shadow: var(--card-shadow);\n  padding: 1.5rem;\n  transition: box-shadow var(--transition-speed);\n  margin-bottom: 1.5rem;\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--card-shadow-hover);\n}\n  .p-datatable .p-datatable-header {\n  background-color: var(--surface-overlay);\n  border: none;\n  padding: 1rem 0 1.5rem;\n}\n  .p-datatable .p-datatable-header .flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n  .p-datatable .p-datatable-thead > tr > th {\n  background-color: var(--surface-section);\n  color: var(--text-color);\n  font-weight: 600;\n  padding: 1rem !important;\n  border-color: var(--border-color);\n  transition: background-color var(--transition-speed);\n}\n  .p-datatable .p-datatable-thead > tr > th:hover {\n  background-color: rgba(41, 98, 255, 0.05);\n}\n  .p-datatable .p-datatable-tbody > tr {\n  transition: background-color var(--transition-speed);\n  background-color: #fff;\n}\n  .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem;\n  border-color: var(--border-color);\n  color: var(--text-color);\n  padding: 1rem !important;\n}\n  .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: rgba(41, 98, 255, 0.02);\n}\n  .p-datatable .p-paginator {\n  padding: 1rem;\n  border: none;\n  background-color: var(--surface-overlay);\n}\n  .p-datatable .p-paginator .p-paginator-element {\n  border-radius: 50%;\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0 0.2rem;\n}\n  .p-datatable .p-paginator .p-paginator-element.p-highlight {\n  background-color: var(--primary-color);\n  color: white;\n}\n  .p-datatable .p-datatable-emptymessage {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\n  .p-button {\n  border-radius: 8px;\n  transition: background-color var(--transition-speed), transform var(--transition-speed);\n}\n  .p-button.p-button-success {\n  border-color: var(--positive-color);\n}\n  .p-button.p-button-success:hover {\n  background-color: #449d48;\n  border-color: #449d48;\n  transform: translateY(-2px);\n}\n  .p-button.p-button-rounded {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n  .p-button.p-button-rounded:hover {\n  transform: translateY(-2px);\n}\n  .p-button.p-button-danger:hover {\n  background-color: rgba(239, 68, 68, 0.1);\n}\n  .search-container {\n  position: relative;\n}\n  .search-container .search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-color-secondary);\n}\n  .search-input {\n  padding: 10px 12px 10px 40px;\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n  background-color: #ffffff;\n  color: var(--text-color);\n  width: 280px;\n  font-size: 14px;\n  transition: all var(--transition-speed);\n}\n  .search-input:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(41, 98, 255, 0.1);\n}\n  .search-input::placeholder {\n  color: var(--text-color-secondary);\n  opacity: 0.7;\n}\n  .p-dialog {\n  border-radius: var(--card-border-radius);\n  box-shadow: var(--card-shadow-hover);\n  overflow: hidden;\n}\n  .p-dialog .p-dialog-header {\n  background-color: var(--surface-overlay);\n  padding: 1.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n  .p-dialog .p-dialog-header .p-dialog-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n  .p-dialog .p-dialog-header .p-dialog-header-icon {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  transition: background-color var(--transition-speed);\n}\n  .p-dialog .p-dialog-header .p-dialog-header-icon:hover {\n  background-color: var(--surface-section);\n}\n  .p-dialog .p-dialog-content {\n  background-color: var(--surface-overlay);\n  padding: 1.5rem;\n}\n  .p-dialog .p-dialog-footer {\n  background-color: var(--surface-overlay);\n  padding: 1rem 1.5rem;\n  border-top: 1px solid var(--border-color);\n}\n  .formgrid.grid {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n}\n  .formgrid.grid .field.col {\n  flex: 1 1 0%;\n  padding: 0 0.5rem;\n  margin-bottom: 1rem;\n}\n  .formgrid.grid .field.col label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n  .formgrid.grid .field.col label .text-danger {\n  color: var(--negative-color);\n}\n  .text-danger {\n  color: var(--negative-color);\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: block;\n}\n  .p-calendar {\n  width: 100%;\n}\n  .p-calendar .p-inputtext {\n  width: 100%;\n}\n  .p-calendar .p-button {\n  background-color: var(--surface-section);\n  border-color: var(--border-color);\n  color: var(--text-color);\n}\n  .p-calendar .p-button:hover {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n  color: white;\n}\n  .p-dropdown {\n  width: 100%;\n  border-radius: 8px;\n}\n  .p-dropdown .p-dropdown-label {\n  padding: 0.75rem 1rem;\n}\n  .p-dropdown .p-dropdown-trigger {\n  width: 3rem;\n}\n  .p-dropdown.p-focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(41, 98, 255, 0.2);\n}\n  .p-dropdown-panel {\n  border-radius: 8px;\n  box-shadow: var(--card-shadow-hover);\n}\n  .p-dropdown-panel .p-dropdown-items {\n  padding: 0.5rem 0;\n}\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item {\n  padding: 0.75rem 1rem;\n  color: var(--text-color);\n  transition: background-color var(--transition-speed);\n}\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover {\n  background-color: rgba(41, 98, 255, 0.05);\n}\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {\n  background-color: rgba(41, 98, 255, 0.1);\n  color: var(--primary-color);\n}\n  .p-inputnumber {\n  width: 100%;\n}\n  .p-inputnumber .p-inputtext {\n  width: 100%;\n}\n  .p-inputtextarea {\n  width: 100%;\n  border-radius: 8px;\n}\n  .p-inputtextarea:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(41, 98, 255, 0.2);\n}\n  .p-confirm-dialog .p-dialog-content {\n  display: flex;\n  align-items: center;\n  padding: 2rem 1.5rem;\n}\n  .p-confirm-dialog .p-dialog-content .p-confirm-dialog-icon {\n  font-size: 2rem;\n  color: var(--negative-color);\n  margin-right: 1rem;\n}\n  .p-confirm-dialog .p-dialog-content .p-confirm-dialog-message {\n  font-size: 1.1rem;\n  color: var(--text-color);\n}\n  .p-inputmask {\n  width: 100%;\n}\n  .p-tooltip .p-tooltip-text {\n  background-color: var(--text-color);\n  color: white;\n  padding: 0.5rem 0.75rem;\n  border-radius: 4px;\n  font-size: 0.875rem;\n}\n  .p-tooltip .p-tooltip-arrow {\n  border-top-color: var(--text-color);\n}\n.p-button[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.p-button[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  transition: width 0.4s, height 0.4s;\n  z-index: 0;\n}\n.p-button[_ngcontent-%COMP%]:active::after {\n  width: 200%;\n  height: 200%;\n}\n.p-button[_ngcontent-%COMP%]   .p-button-label[_ngcontent-%COMP%], .p-button[_ngcontent-%COMP%]   .p-button-icon[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 992px) {\n  .formgrid.grid[_ngcontent-%COMP%]   .field.col[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n  }\n}\n.card[_ngcontent-%COMP%], .p-dialog[_ngcontent-%COMP%], .p-dropdown-panel[_ngcontent-%COMP%] {\n  transition: transform var(--transition-speed), box-shadow var(--transition-speed);\n}\n.p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  transition: transform var(--transition-speed), background-color var(--transition-speed);\n}\n.p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.field[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n/*# sourceMappingURL=users.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src\\app\\admin\\users\\users.component.ts", lineNumber: 15 });
})();

// src/app/admin/user-interests/user-interests.service.ts
var UserInterestService = class _UserInterestService {
  constructor(http, datePipe) {
    this.http = http;
    this.datePipe = datePipe;
  }
  getAllUserInterests() {
    return this.http.get(`${environment.apiBaseUrl}/api/UserInterest`);
  }
  updateUserInterest(id, user) {
    const payload = __spreadValues({}, user);
    return this.http.put(`${environment.apiBaseUrl}/api/UserInterest/${id}`, payload);
  }
  deleteUserInterest(id) {
    return this.http.delete(`${environment.apiBaseUrl}/api/UserInterest/${id}`);
  }
  saveUser(user) {
    const payload = __spreadProps(__spreadValues({}, user), {
      dateOfBirth: this.getFormattedDate(user.dateOfBirth)
    });
    return this.http.post(`${environment.apiBaseUrl}/api/User`, payload);
  }
  // Function to convert date to UTC and format it in 'yyyy-MM-dd' format
  getFormattedDate(date) {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    console.log(utcDate);
    return this.datePipe.transform(utcDate, "yyyy-MM-dd");
  }
  static {
    this.\u0275fac = function UserInterestService_Factory(t) {
      return new (t || _UserInterestService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(DatePipe));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserInterestService, factory: _UserInterestService.\u0275fac });
  }
};

// src/app/admin/user-interests/user-interests.component.ts
var _c02 = () => ({ width: "550px" });
function UserInterestsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Phone No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Req Submitted On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Action");
    \u0275\u0275elementEnd()();
  }
}
function UserInterestsComponent_ng_template_2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function UserInterestsComponent_ng_template_2_ng_template_16_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const userInterest_r3 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(userInterest_r3.action, $event) || (userInterest_r3.action = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const userInterest_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", userInterest_r3.action);
  }
}
function UserInterestsComponent_ng_template_2_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const userInterest_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", userInterest_r3.action, " ");
  }
}
function UserInterestsComponent_ng_template_2_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function UserInterestsComponent_ng_template_2_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const userInterest_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onRowEditInit(userInterest_r3));
    });
    \u0275\u0275elementEnd();
  }
}
function UserInterestsComponent_ng_template_2_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function UserInterestsComponent_ng_template_2_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const userInterest_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.addNewUser(userInterest_r3));
    });
    \u0275\u0275elementEnd();
  }
}
function UserInterestsComponent_ng_template_2_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function UserInterestsComponent_ng_template_2_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const userInterest_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.showConfirmation(userInterest_r3));
    });
    \u0275\u0275elementEnd();
  }
}
function UserInterestsComponent_ng_template_2_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function UserInterestsComponent_ng_template_2_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const userInterest_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onRowEditSave(userInterest_r3));
    });
    \u0275\u0275elementEnd();
  }
}
function UserInterestsComponent_ng_template_2_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function UserInterestsComponent_ng_template_2_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r9 = \u0275\u0275nextContext();
      const userInterest_r3 = ctx_r9.$implicit;
      const ri_r11 = ctx_r9.rowIndex;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onRowEditCancel(userInterest_r3, ri_r11));
    });
    \u0275\u0275elementEnd();
  }
}
function UserInterestsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 13)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "p-cellEditor");
    \u0275\u0275template(16, UserInterestsComponent_ng_template_2_ng_template_16_Template, 1, 1, "ng-template", 14)(17, UserInterestsComponent_ng_template_2_ng_template_17_Template, 1, 1, "ng-template", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 16);
    \u0275\u0275template(20, UserInterestsComponent_ng_template_2_button_20_Template, 1, 0, "button", 17)(21, UserInterestsComponent_ng_template_2_button_21_Template, 1, 0, "button", 18)(22, UserInterestsComponent_ng_template_2_button_22_Template, 1, 0, "button", 19)(23, UserInterestsComponent_ng_template_2_button_23_Template, 1, 0, "button", 20)(24, UserInterestsComponent_ng_template_2_button_24_Template, 1, 0, "button", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const userInterest_r3 = ctx.$implicit;
    const editing_r12 = ctx.editing;
    \u0275\u0275property("pEditableRow", userInterest_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(userInterest_r3.firstName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(userInterest_r3.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(userInterest_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(userInterest_r3.mobileNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(userInterest_r3.remarks);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 12, userInterest_r3.reqSubmittedOn, "MM/dd/yyyy"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !editing_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !editing_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !editing_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", editing_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", editing_r12);
  }
}
function UserInterestsComponent_ng_template_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "small");
    \u0275\u0275text(2, "First Name is required.");
    \u0275\u0275elementEnd()();
  }
}
function UserInterestsComponent_ng_template_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "small");
    \u0275\u0275text(2, "Last Name is required.");
    \u0275\u0275elementEnd()();
  }
}
function UserInterestsComponent_ng_template_6_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "small");
    \u0275\u0275text(2, "Date Of Birth is required.");
    \u0275\u0275elementEnd()();
  }
}
function UserInterestsComponent_ng_template_6_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "small");
    \u0275\u0275text(2, "Mobile # is required and must be 10-digit number.");
    \u0275\u0275elementEnd()();
  }
}
function UserInterestsComponent_ng_template_6_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "small");
    \u0275\u0275text(2, "Email is required & must be valid");
    \u0275\u0275elementEnd()();
  }
}
function UserInterestsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "label", 30);
    \u0275\u0275text(3, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 31, 1);
    \u0275\u0275twoWayListener("ngModelChange", function UserInterestsComponent_ng_template_6_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.newUser.firstName, $event) || (ctx_r4.newUser.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UserInterestsComponent_ng_template_6_div_6_Template, 3, 0, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 29)(8, "label", 33);
    \u0275\u0275text(9, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 34, 2);
    \u0275\u0275twoWayListener("ngModelChange", function UserInterestsComponent_ng_template_6_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.newUser.lastName, $event) || (ctx_r4.newUser.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, UserInterestsComponent_ng_template_6_div_12_Template, 3, 0, "div", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 28)(14, "div", 29)(15, "label", 35);
    \u0275\u0275text(16, "Date Of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p-calendar", 36, 3);
    \u0275\u0275twoWayListener("ngModelChange", function UserInterestsComponent_ng_template_6_Template_p_calendar_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.newUser.dateOfBirth, $event) || (ctx_r4.newUser.dateOfBirth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, UserInterestsComponent_ng_template_6_div_19_Template, 3, 0, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 29)(21, "label", 37);
    \u0275\u0275text(22, "Mobile #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 38, 4);
    \u0275\u0275twoWayListener("ngModelChange", function UserInterestsComponent_ng_template_6_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.newUser.phoneNo, $event) || (ctx_r4.newUser.phoneNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, UserInterestsComponent_ng_template_6_div_25_Template, 3, 0, "div", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 28)(27, "div", 29)(28, "label", 39);
    \u0275\u0275text(29, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 40, 5);
    \u0275\u0275twoWayListener("ngModelChange", function UserInterestsComponent_ng_template_6_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.newUser.email, $event) || (ctx_r4.newUser.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, UserInterestsComponent_ng_template_6_div_32_Template, 3, 0, "div", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 28)(34, "div", 29)(35, "label", 41);
    \u0275\u0275text(36, "Address Line 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function UserInterestsComponent_ng_template_6_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.newUser.addressLine1, $event) || (ctx_r4.newUser.addressLine1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 29)(39, "label", 43);
    \u0275\u0275text(40, "Address Line 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function UserInterestsComponent_ng_template_6_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.newUser.addressLine2, $event) || (ctx_r4.newUser.addressLine2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 28)(43, "div", 29)(44, "label", 45);
    \u0275\u0275text(45, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function UserInterestsComponent_ng_template_6_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.newUser.city, $event) || (ctx_r4.newUser.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 29)(48, "label", 47);
    \u0275\u0275text(49, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function UserInterestsComponent_ng_template_6_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.newUser.state, $event) || (ctx_r4.newUser.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 28)(52, "div", 29)(53, "label", 49);
    \u0275\u0275text(54, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function UserInterestsComponent_ng_template_6_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.newUser.country, $event) || (ctx_r4.newUser.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 29)(57, "label", 51);
    \u0275\u0275text(58, "Zip Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p-inputNumber", 52);
    \u0275\u0275twoWayListener("ngModelChange", function UserInterestsComponent_ng_template_6_Template_p_inputNumber_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.newUser.zipCode, $event) || (ctx_r4.newUser.zipCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 53)(61, "label", 54);
    \u0275\u0275text(62, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "textarea", 55);
    \u0275\u0275twoWayListener("ngModelChange", function UserInterestsComponent_ng_template_6_Template_textarea_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.newUser.remarks, $event) || (ctx_r4.newUser.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(64, "                ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fName_r15 = \u0275\u0275reference(5);
    const lName_r16 = \u0275\u0275reference(11);
    const dateOfBirth_r17 = \u0275\u0275reference(18);
    const phoneNo_r18 = \u0275\u0275reference(24);
    const email_r19 = \u0275\u0275reference(31);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.newUser.firstName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", fName_r15.invalid && fName_r15.touched);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.newUser.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", lName_r16.invalid && lName_r16.touched);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.newUser.dateOfBirth);
    \u0275\u0275property("showIcon", true)("showOnFocus", true)("showTime", false)("dataType", "date");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", dateOfBirth_r17.invalid && dateOfBirth_r17.touched);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.newUser.phoneNo);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", phoneNo_r18.invalid && phoneNo_r18.touched);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.newUser.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", email_r19.invalid && email_r19.touched);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.newUser.addressLine1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.newUser.addressLine2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.newUser.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.newUser.state);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.newUser.country);
    \u0275\u0275advance(4);
    \u0275\u0275property("useGrouping", false);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.newUser.zipCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.newUser.remarks);
  }
}
function UserInterestsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 57);
    \u0275\u0275listener("onClick", function UserInterestsComponent_ng_template_7_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.closeNewUserDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 58);
    \u0275\u0275listener("onClick", function UserInterestsComponent_ng_template_7_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r4 = \u0275\u0275nextContext();
      const userForm_r13 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(ctx_r4.saveUser(userForm_r13));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const userForm_r13 = \u0275\u0275reference(4);
    \u0275\u0275property("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", userForm_r13.invalid);
  }
}
var UserInterestsComponent = class _UserInterestsComponent {
  constructor(dataService, toastr, authStateService, confirmationService) {
    this.dataService = dataService;
    this.toastr = toastr;
    this.authStateService = authStateService;
    this.confirmationService = confirmationService;
    this.clonedUserInterest = {};
    this.savingUserInterest = {};
    this.newUser = {};
    this.userDialog = false;
  }
  ngOnInit() {
    this.getAllUserInterests();
  }
  getAllUserInterests() {
    this.dataService.getAllUserInterests().subscribe((res) => {
      console.log(res);
      this.userInterests = res;
    });
  }
  onRowEditInit(userInterest) {
    this.clonedUserInterest[userInterest.userRequestId] = __spreadValues({}, userInterest);
  }
  onRowEditSave(userInterest) {
    if (userInterest.action) {
      delete this.clonedUserInterest[userInterest.userRequestId];
      console.log(userInterest);
      this.dataService.updateUserInterest(userInterest.userRequestId, userInterest).subscribe((res) => {
        console.log(res);
        this.toastr.success("User Interest updated.");
      });
    }
  }
  onRowEditCancel(userInterest, index) {
    this.userInterests[index] = this.clonedUserInterest[userInterest.userRequestId];
    delete this.clonedUserInterest[userInterest.userRequestId];
  }
  deleteUserInterest(userInterest) {
    if (userInterest.userRequestId) {
      this.dataService.deleteUserInterest(userInterest.userRequestId).subscribe((res) => {
        console.log(res);
        this.toastr.success("User Interest deleted.");
        this.getAllUserInterests();
        this.savingUserInterest = {};
      });
    }
  }
  addNewUser(userInterest) {
    if (userInterest) {
      this.savingUserInterest = userInterest;
      this.newUser.firstName = userInterest.firstName;
      this.newUser.lastName = userInterest.lastName;
      this.newUser.email = userInterest.email;
      this.newUser.phoneNo = userInterest.mobileNum;
      this.userDialog = true;
    }
  }
  saveUser(form) {
    this.newUser.isAdmin = false;
    this.newUser.userName = this.newUser.email;
    this.newUser.zipCode = this.newUser.zipCode.toString();
    this.newUser.createdBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
    console.log("********Inserting User***********", this.newUser);
    this.dataService.saveUser(this.newUser).subscribe((res) => {
      this.toastr.success("User Details Added Successfully");
      this.userDialog = false;
      this.deleteUserInterest(this.savingUserInterest);
    });
  }
  closeNewUserDialog() {
    this.userDialog = false;
  }
  showConfirmation(userInterest) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete this Transaction ?",
      header: "Delete Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptButtonStyleClass: "p-button-danger",
      rejectButtonStyleClass: "p-button-text p-button-text",
      accept: () => {
        this.deleteUserInterest(userInterest);
      }
    });
  }
  static {
    this.\u0275fac = function UserInterestsComponent_Factory(t) {
      return new (t || _UserInterestsComponent)(\u0275\u0275directiveInject(UserInterestService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(ConfirmationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserInterestsComponent, selectors: [["app-user-interests"]], decls: 9, vars: 6, consts: [["userForm", "ngForm"], ["fName", "ngModel"], ["lName", "ngModel"], ["dateOfBirth", "ngModel"], ["phoneNo", "ngModel"], ["email", "ngModel"], ["dataKey", "userRequestId", "editMode", "row", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "ngSubmit"], ["header", "Add User", "styleClass", "p-fluid", 3, "visibleChange", "visible", "modal"], ["pTemplate", "content"], ["pTemplate", "footer"], [3, "pEditableRow"], ["pTemplate", "input"], ["pTemplate", "output"], [1, "flex", "align-items-center", "justify-content-center", "gap-2"], ["pButton", "", "pRipple", "", "type", "button", "pInitEditableRow", "", "icon", "pi pi-pencil", "class", "p-button-rounded p-button-text", "pTooltip", "Edit", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-user-plus", "pTooltip", "Create User", "class", "p-button-rounded p-button-text p-button-success", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", "pTooltip", "Delete", "class", "p-button-rounded p-button-text p-button-danger", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "pSaveEditableRow", "", "icon", "pi pi-check", "pTooltip", "Save", "class", "p-button-rounded p-button-text p-button-success mr-2", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "pCancelEditableRow", "", "icon", "pi pi-times", "pTooltip", "Cancel", "class", "p-button-rounded p-button-text p-button-danger", 3, "click", 4, "ngIf"], ["pInputText", "", "type", "text", "required", "", 3, "ngModelChange", "ngModel"], ["pButton", "", "pRipple", "", "type", "button", "pInitEditableRow", "", "icon", "pi pi-pencil", "pTooltip", "Edit", 1, "p-button-rounded", "p-button-text", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-user-plus", "pTooltip", "Create User", 1, "p-button-rounded", "p-button-text", "p-button-success", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", "pTooltip", "Delete", 1, "p-button-rounded", "p-button-text", "p-button-danger", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "pSaveEditableRow", "", "icon", "pi pi-check", "pTooltip", "Save", 1, "p-button-rounded", "p-button-text", "p-button-success", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "pCancelEditableRow", "", "icon", "pi pi-times", "pTooltip", "Cancel", 1, "p-button-rounded", "p-button-text", "p-button-danger", 3, "click"], [1, "formgrid", "grid", "mb-2"], [1, "field", "col"], ["for", "firstName"], ["type", "text", "pInputText", "", "id", "firstName", "name", "firstName", "required", "", 3, "ngModelChange", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "lastName"], ["type", "text", "pInputText", "", "id", "lastName", "name", "lastName", "required", "", 3, "ngModelChange", "ngModel"], ["for", "dateOfBirth"], ["id", "dateOfBirth", "name", "dateOfBirth", "inputId", "buttondisplay", "required", "", "dateFormat", "mm/dd/yy", 3, "ngModelChange", "ngModel", "showIcon", "showOnFocus", "showTime", "dataType"], ["for", "phoneNo"], ["type", "text", "pInputText", "", "id", "phoneNo", "name", "phoneNo", "required", "", "pattern", "^\\d{10}$", 3, "ngModelChange", "ngModel"], ["for", "email"], ["type", "text", "email", "", "pInputText", "", "id", "email", "name", "email", "required", "", 3, "ngModelChange", "ngModel"], ["for", "addressLine1"], ["type", "text", "pInputText", "", "id", "addressLine1", "name", "addressLine1", 3, "ngModelChange", "ngModel"], ["for", "addressLine2"], ["type", "text", "pInputText", "", "id", "addressLine2", "name", "addressLine2", 3, "ngModelChange", "ngModel"], ["for", "city"], ["type", "text", "pInputText", "", "id", "city", "name", "city", 3, "ngModelChange", "ngModel"], ["for", "state"], ["type", "text", "pInputText", "", "id", "state", "name", "state", 3, "ngModelChange", "ngModel"], ["for", "country"], ["type", "text", "pInputText", "", "id", "country", "name", "country", 3, "ngModelChange", "ngModel"], ["for", "zipCode"], ["id", "zipCode", "name", "zipCode", 3, "ngModelChange", "useGrouping", "ngModel"], [1, "field"], ["for", "remarks"], ["id", "remarks", "name", "remarks", "pInputTextarea", "", "required", "", "rows", "3", "cols", "20", 3, "ngModelChange", "ngModel"], [1, "text-danger"], ["label", "Cancel", "icon", "pi pi-times", 3, "onClick", "text"], ["label", "Save", "icon", "pi pi-check", 3, "onClick", "disabled"]], template: function UserInterestsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "p-table", 6);
        \u0275\u0275template(1, UserInterestsComponent_ng_template_1_Template, 15, 0, "ng-template", 7)(2, UserInterestsComponent_ng_template_2_Template, 25, 15, "ng-template", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "form", 9, 0);
        \u0275\u0275listener("ngSubmit", function UserInterestsComponent_Template_form_ngSubmit_3_listener() {
          \u0275\u0275restoreView(_r1);
          const userForm_r13 = \u0275\u0275reference(4);
          return \u0275\u0275resetView(ctx.saveUser(userForm_r13));
        });
        \u0275\u0275elementStart(5, "p-dialog", 10);
        \u0275\u0275twoWayListener("visibleChange", function UserInterestsComponent_Template_p_dialog_visibleChange_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userDialog, $event) || (ctx.userDialog = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275template(6, UserInterestsComponent_ng_template_6_Template, 65, 22, "ng-template", 11)(7, UserInterestsComponent_ng_template_7_Template, 2, 2, "ng-template", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(8, "p-confirmDialog");
      }
      if (rf & 2) {
        \u0275\u0275property("value", ctx.userInterests);
        \u0275\u0275advance(5);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c02));
        \u0275\u0275twoWayProperty("visible", ctx.userDialog);
        \u0275\u0275property("modal", true);
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, PatternValidator, EmailValidator, NgModel, NgForm, Calendar, ButtonDirective, Button, PrimeTemplate, ConfirmDialog, InputTextarea, InputNumber, InputText, Tooltip, Ripple, Table, CellEditor, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, Dialog, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  --card-border-radius: 12px;\n  --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  --card-shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.1);\n  --header-icon-bg: rgba(41, 98, 255, 0.1);\n  --header-icon-color: var(--primary-color);\n  --progress-bar-height: 8px;\n  --progress-bar-radius: 10px;\n  --transition-speed: 0.25s;\n  --primary-color: #2962ff;\n  --secondary-color: #ff884d;\n  --positive-color: #4caf50;\n  --negative-color: #ef4444;\n  --dividend-color: #ff884d;\n  --text-color: #333;\n  --text-color-secondary: #666;\n  --surface-overlay: #fff;\n  --surface-section: #f5f7fa;\n  --border-color: #e0e0e0;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: var(--surface-overlay);\n  border-radius: var(--card-border-radius);\n  box-shadow: var(--card-shadow);\n  padding: 1.5rem;\n  transition: box-shadow var(--transition-speed);\n  margin-bottom: 1.5rem;\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--card-shadow-hover);\n}\n  .p-datatable .p-datatable-header {\n  background-color: var(--surface-overlay);\n  border: none;\n  padding: 1rem 0 1.5rem;\n}\n  .p-datatable .p-datatable-header .flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n  .p-datatable .p-datatable-thead > tr > th {\n  background-color: var(--surface-section);\n  color: var(--text-color);\n  font-weight: 600;\n  padding: 1rem !important;\n  border-color: var(--border-color);\n  transition: background-color var(--transition-speed);\n}\n  .p-datatable .p-datatable-thead > tr > th:hover {\n  background-color: rgba(41, 98, 255, 0.05);\n}\n  .p-datatable .p-datatable-tbody > tr {\n  transition: background-color var(--transition-speed);\n  background-color: #fff;\n}\n  .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem;\n  border-color: var(--border-color);\n  color: var(--text-color);\n  padding: 1rem !important;\n}\n  .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: rgba(41, 98, 255, 0.02);\n}\n  .p-datatable .p-paginator {\n  padding: 1rem;\n  border: none;\n  background-color: var(--surface-overlay);\n}\n  .p-datatable .p-paginator .p-paginator-element {\n  border-radius: 50%;\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0 0.2rem;\n}\n  .p-datatable .p-paginator .p-paginator-element.p-highlight {\n  background-color: var(--primary-color);\n  color: white;\n}\n  .p-datatable .p-datatable-emptymessage {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\n  .p-button {\n  border-radius: 8px;\n  transition: background-color var(--transition-speed), transform var(--transition-speed);\n}\n  .p-button.p-button-success {\n  border-color: var(--positive-color);\n}\n  .p-button.p-button-success:hover {\n  background-color: #449d48;\n  border-color: #449d48;\n  transform: translateY(-2px);\n}\n  .p-button.p-button-rounded {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n  .p-button.p-button-rounded:hover {\n  transform: translateY(-2px);\n}\n  .p-button.p-button-danger:hover {\n  background-color: rgba(239, 68, 68, 0.1);\n}\n  .search-container {\n  position: relative;\n}\n  .search-container .search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-color-secondary);\n}\n  .search-input {\n  padding: 10px 12px 10px 40px;\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n  background-color: #ffffff;\n  color: var(--text-color);\n  width: 280px;\n  font-size: 14px;\n  transition: all var(--transition-speed);\n}\n  .search-input:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(41, 98, 255, 0.1);\n}\n  .search-input::placeholder {\n  color: var(--text-color-secondary);\n  opacity: 0.7;\n}\n.input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-color-secondary);\n  opacity: 0.7;\n}\n  .p-dialog {\n  border-radius: var(--card-border-radius);\n  box-shadow: var(--card-shadow-hover);\n  overflow: hidden;\n}\n  .p-dialog .p-dialog-header {\n  background-color: var(--surface-overlay);\n  padding: 1.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n  .p-dialog .p-dialog-header .p-dialog-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n  .p-dialog .p-dialog-header .p-dialog-header-icon {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  transition: background-color var(--transition-speed);\n}\n  .p-dialog .p-dialog-header .p-dialog-header-icon:hover {\n  background-color: var(--surface-section);\n}\n  .p-dialog .p-dialog-content {\n  background-color: var(--surface-overlay);\n  padding: 1.5rem;\n}\n  .p-dialog .p-dialog-footer {\n  background-color: var(--surface-overlay);\n  padding: 1rem 1.5rem;\n  border-top: 1px solid var(--border-color);\n}\n  .formgrid.grid {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n}\n  .formgrid.grid .field.col {\n  flex: 1 1 0%;\n  padding: 0 0.5rem;\n  margin-bottom: 1rem;\n}\n  .formgrid.grid .field.col label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n  .formgrid.grid .field.col label .text-danger {\n  color: var(--negative-color);\n}\n  .text-danger {\n  color: var(--negative-color);\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: block;\n}\n  .p-calendar {\n  width: 100%;\n}\n  .p-calendar .p-inputtext {\n  width: 100%;\n}\n  .p-calendar .p-button {\n  background-color: var(--surface-section);\n  border-color: var(--border-color);\n  color: var(--text-color);\n}\n  .p-calendar .p-button:hover {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n  color: white;\n}\n  .p-dropdown {\n  width: 100%;\n  border-radius: 8px;\n}\n  .p-dropdown .p-dropdown-label {\n  padding: 0.75rem 1rem;\n}\n  .p-dropdown .p-dropdown-trigger {\n  width: 3rem;\n}\n  .p-dropdown.p-focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(41, 98, 255, 0.2);\n}\n  .p-dropdown-panel {\n  border-radius: 8px;\n  box-shadow: var(--card-shadow-hover);\n}\n  .p-dropdown-panel .p-dropdown-items {\n  padding: 0.5rem 0;\n}\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item {\n  padding: 0.75rem 1rem;\n  color: var(--text-color);\n  transition: background-color var(--transition-speed);\n}\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover {\n  background-color: rgba(41, 98, 255, 0.05);\n}\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {\n  background-color: rgba(41, 98, 255, 0.1);\n  color: var(--primary-color);\n}\n  .p-inputnumber {\n  width: 100%;\n}\n  .p-inputnumber .p-inputtext {\n  width: 100%;\n}\n  .p-inputtextarea {\n  width: 100%;\n  border-radius: 8px;\n}\n  .p-inputtextarea:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(41, 98, 255, 0.2);\n}\n  .p-confirm-dialog .p-dialog-content {\n  display: flex;\n  align-items: center;\n  padding: 2rem 1.5rem;\n}\n  .p-confirm-dialog .p-dialog-content .p-confirm-dialog-icon {\n  font-size: 2rem;\n  color: var(--negative-color);\n  margin-right: 1rem;\n}\n  .p-confirm-dialog .p-dialog-content .p-confirm-dialog-message {\n  font-size: 1.1rem;\n  color: var(--text-color);\n}\n  .p-inputmask {\n  width: 100%;\n}\n  .p-tooltip .p-tooltip-text {\n  background-color: var(--text-color);\n  color: white;\n  padding: 0.5rem 0.75rem;\n  border-radius: 4px;\n  font-size: 0.875rem;\n}\n  .p-tooltip .p-tooltip-arrow {\n  border-top-color: var(--text-color);\n}\n.p-button[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.p-button[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  transition: width 0.4s, height 0.4s;\n  z-index: 0;\n}\n.p-button[_ngcontent-%COMP%]:active::after {\n  width: 200%;\n  height: 200%;\n}\n.p-button[_ngcontent-%COMP%]   .p-button-label[_ngcontent-%COMP%], .p-button[_ngcontent-%COMP%]   .p-button-icon[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 992px) {\n  .formgrid.grid[_ngcontent-%COMP%]   .field.col[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n  }\n}\n.card[_ngcontent-%COMP%], .p-dialog[_ngcontent-%COMP%], .p-dropdown-panel[_ngcontent-%COMP%] {\n  transition: transform var(--transition-speed), box-shadow var(--transition-speed);\n}\n.p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  transition: transform var(--transition-speed), background-color var(--transition-speed);\n}\n.p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {\n  background-color: var(--primary-color) !important;\n}\n.radio-button-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-weight: bold;\n}\n.radio-button-group[_ngcontent-%COMP%], .radio-button-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n  .radio-button-list label {\n  color: var(--text-color);\n}\n  .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {\n  background-color: var(--primary-color);\n}\n  .p-radiobutton .p-radiobutton-box {\n  background-color: #8dd0ff;\n}\n/*# sourceMappingURL=user-interests.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserInterestsComponent, { className: "UserInterestsComponent", filePath: "src\\app\\admin\\user-interests\\user-interests.component.ts", lineNumber: 14 });
})();

// src/app/admin/user-portfolios/user-portfolios.service.ts
var UserPortfolioService = class _UserPortfolioService {
  constructor(http) {
    this.http = http;
  }
  getAllUserPortfolios() {
    return this.http.get(`${environment.apiBaseUrl}/api/UserPortfolio`);
  }
  saveUserPortfolio(userPortfolio) {
    return this.http.post(`${environment.apiBaseUrl}/api/UserPortfolio`, userPortfolio);
  }
  updateUserPortfolio(id, userPortfolio) {
    return this.http.put(`${environment.apiBaseUrl}/api/UserPortfolio/${id}`, userPortfolio);
  }
  getLookup() {
    return this.http.get(`${environment.apiBaseUrl}/api/UserPortfolio/Lookup`);
  }
  static {
    this.\u0275fac = function UserPortfolioService_Factory(t) {
      return new (t || _UserPortfolioService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserPortfolioService, factory: _UserPortfolioService.\u0275fac });
  }
};

// src/app/shared/user-dropdown/user-dropdown.component.ts
var _c03 = () => ({ width: "45vw" });
function UserDropdownComponent_div_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Phone");
    \u0275\u0275elementEnd()();
  }
}
function UserDropdownComponent_div_8_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 13)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    \u0275\u0275property("pSelectableRow", user_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.firstName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.phoneNo);
  }
}
function UserDropdownComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p-table", 10);
    \u0275\u0275twoWayListener("selectionChange", function UserDropdownComponent_div_8_Template_p_table_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedUserObj, $event) || (ctx_r2.selectedUserObj = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onRowSelect", function UserDropdownComponent_div_8_Template_p_table_onRowSelect_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUserSelected($event));
    });
    \u0275\u0275template(2, UserDropdownComponent_div_8_ng_template_2_Template, 9, 0, "ng-template", 11)(3, UserDropdownComponent_div_8_ng_template_3_Template, 9, 5, "ng-template", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.filteredUsers);
    \u0275\u0275twoWayProperty("selection", ctx_r2.selectedUserObj);
    \u0275\u0275property("paginator", true)("rows", 10);
  }
}
function UserDropdownComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No users found");
    \u0275\u0275elementEnd();
  }
}
var UserDropdownComponent = class _UserDropdownComponent {
  constructor(http) {
    this.http = http;
    this.users = [];
    this.filteredUsers = [];
    this.searchQuery = "";
    this.selectedUserObj = null;
    this.isUserDialogVisible = false;
    this.selectedUser = {};
    this.emitSelectedUser = new EventEmitter();
    this.userIdFromContext = "";
  }
  ngOnInit() {
    this.fetchUsers();
  }
  // Fetch users from the API
  //'https://localhost:7109/api/User/lov' 
  fetchUsers() {
    console.log("From dropdown", this.userIdFromContext);
    const apiUrl = environment.apiBaseUrl + "/api/User/lov";
    this.http.get(apiUrl).subscribe((data) => {
      this.users = data;
      this.filteredUsers = [...this.users];
      console.log(this.users);
      if (this.userIdFromContext) {
        const userContextSearch = this.users.filter((user) => user.userId === this.userIdFromContext);
        this.selectedUserObj = userContextSearch.length > 0 ? userContextSearch[0] : null;
        this.onUserSelected(null);
      }
    }, (error) => {
      console.error("Error fetching users:", error);
    });
  }
  openUserDialog() {
    this.isUserDialogVisible = true;
  }
  filterUsers() {
    const searchQuery = this.searchQuery.trim().toLowerCase();
    this.filteredUsers = this.users.filter((user) => user.firstName?.toLowerCase().includes(searchQuery) || user.lastName?.toLowerCase().includes(searchQuery) || user.email?.toLowerCase().includes(searchQuery) || user.phoneNo?.includes(searchQuery));
  }
  clear() {
    this.selectedUser = {};
    console.log(this.selectedUser);
    this.emitSelectedUser.emit(null);
  }
  onUserSelected(event) {
    if (this.selectedUserObj) {
      this.selectedUser = {
        "userName": this.selectedUserObj.firstName + ", " + this.selectedUserObj.lastName,
        "userId": this.selectedUserObj.userId,
        "email": this.selectedUserObj.email
      };
      console.log(this.selectedUser);
      this.emitSelectedUser.emit(this.selectedUser);
    }
    this.isUserDialogVisible = false;
  }
  static {
    this.\u0275fac = function UserDropdownComponent_Factory(t) {
      return new (t || _UserDropdownComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDropdownComponent, selectors: [["app-user-dropdown"]], inputs: { userIdFromContext: "userIdFromContext" }, outputs: { emitSelectedUser: "emitSelectedUser" }, decls: 13, vars: 9, consts: [["noData", ""], [1, "custom-dropdown"], ["type", "text", "id", "selectedUser", "readonly", "", "placeholder", "Select a user", 3, "ngModelChange", "click", "ngModel"], ["pButton", "", "type", "button", "icon", "pi pi-search", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-times", 3, "click"], ["header", "Select User", "appendTo", "body", 3, "visibleChange", "visible", "modal"], [2, "margin-bottom", "10px"], ["type", "text", "placeholder", "Search by name", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [4, "ngIf", "ngIfElse"], ["pButton", "", "type", "button", "label", "Close", "icon", "pi pi-times", 3, "click"], ["selectionMode", "single", "responsiveLayout", "scroll", 3, "selectionChange", "onRowSelect", "value", "selection", "paginator", "rows"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "pSelectableRow"]], template: function UserDropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "input", 2);
        \u0275\u0275twoWayListener("ngModelChange", function UserDropdownComponent_Template_input_ngModelChange_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedUser.userName, $event) || (ctx.selectedUser.userName = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("click", function UserDropdownComponent_Template_input_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openUserDialog());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "button", 3);
        \u0275\u0275listener("click", function UserDropdownComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openUserDialog());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 4);
        \u0275\u0275listener("click", function UserDropdownComponent_Template_button_click_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.clear());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "p-dialog", 5);
        \u0275\u0275twoWayListener("visibleChange", function UserDropdownComponent_Template_p_dialog_visibleChange_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isUserDialogVisible, $event) || (ctx.isUserDialogVisible = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(5, "div")(6, "div", 6)(7, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function UserDropdownComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("input", function UserDropdownComponent_Template_input_input_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterUsers());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, UserDropdownComponent_div_8_Template, 4, 4, "div", 8)(9, UserDropdownComponent_ng_template_9_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p-footer")(12, "button", 9);
        \u0275\u0275listener("click", function UserDropdownComponent_Template_button_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.isUserDialogVisible = false);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const noData_r5 = \u0275\u0275reference(10);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedUser.userName);
        \u0275\u0275advance(3);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(8, _c03));
        \u0275\u0275twoWayProperty("visible", ctx.isUserDialogVisible);
        \u0275\u0275property("modal", true);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredUsers.length > 0)("ngIfElse", noData_r5);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, ButtonDirective, Footer, PrimeTemplate, Table, SelectableRow, Dialog], styles: ["\n\n.custom-dropdown[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 5px;\n  width: 250px;\n}\n.custom-dropdown[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  cursor: pointer;\n  background: none !important;\n}\n.custom-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--primary-color);\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background: none;\n}\n.user-dropdown[_ngcontent-%COMP%]   .p-dialog[_ngcontent-%COMP%] {\n  width: 40vw !important;\n}\n#selectedUser[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-color-secondary);\n  opacity: 0.7;\n}\n/*# sourceMappingURL=user-dropdown.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDropdownComponent, { className: "UserDropdownComponent", filePath: "src\\app\\shared\\user-dropdown\\user-dropdown.component.ts", lineNumber: 11 });
})();

// src/app/admin/user-portfolios/user-portfolios.component.ts
var _c04 = () => ["userName", "email", "portfolioName"];
var _c12 = () => ({ width: "30vw" });
function UserPortfoliosComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "p-button", 14);
    \u0275\u0275listener("onClick", function UserPortfoliosComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addUserPortfolio());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconField", 15);
    \u0275\u0275element(3, "lucide-icon", 16);
    \u0275\u0275elementStart(4, "input", 17, 2);
    \u0275\u0275listener("input", function UserPortfoliosComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r2);
      const searchInput_r4 = \u0275\u0275reference(5);
      \u0275\u0275nextContext();
      const userPortfolioGrid_r5 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(userPortfolioGrid_r5.filterGlobal(searchInput_r4.value, "contains"));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 16);
  }
}
function UserPortfoliosComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Portfolio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "View");
    \u0275\u0275elementEnd()();
  }
}
function UserPortfoliosComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "p-inputSwitch", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "p-button", 19);
    \u0275\u0275listener("onClick", function UserPortfoliosComponent_ng_template_6_Template_p_button_onClick_10_listener() {
      const userPortfolio_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editUserPortfolio(userPortfolio_r7));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const userPortfolio_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(userPortfolio_r7.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(userPortfolio_r7.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(userPortfolio_r7.portfolioName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", userPortfolio_r7.isActive)("disabled", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function UserPortfoliosComponent_ng_template_10_app_user_dropdown_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-user-dropdown", 27);
    \u0275\u0275listener("emitSelectedUser", function UserPortfoliosComponent_ng_template_10_app_user_dropdown_3_Template_app_user_dropdown_emitSelectedUser_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setUserDetails($event));
    });
    \u0275\u0275elementEnd();
  }
}
function UserPortfoliosComponent_ng_template_10_input_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 28);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r2.userPortfolio.userName);
  }
}
function UserPortfoliosComponent_ng_template_10_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "label", 30);
    \u0275\u0275text(2, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputSwitch", 31);
    \u0275\u0275twoWayListener("ngModelChange", function UserPortfoliosComponent_ng_template_10_div_9_Template_p_inputSwitch_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.userPortfolio.isActive, $event) || (ctx_r2.userPortfolio.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.userPortfolio.isActive);
  }
}
function UserPortfoliosComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 21);
    \u0275\u0275text(2, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserPortfoliosComponent_ng_template_10_app_user_dropdown_3_Template, 1, 0, "app-user-dropdown", 22)(4, UserPortfoliosComponent_ng_template_10_input_4_Template, 1, 1, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20)(6, "label", 24);
    \u0275\u0275text(7, "Portfolio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-dropdown", 25);
    \u0275\u0275twoWayListener("ngModelChange", function UserPortfoliosComponent_ng_template_10_Template_p_dropdown_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.userPortfolio.portfolioId, $event) || (ctx_r2.userPortfolio.portfolioId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, UserPortfoliosComponent_ng_template_10_div_9_Template, 4, 1, "div", 26);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isEditMode);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r2.lookupData.portfolios);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.userPortfolio.portfolioId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.userPortfolio.userPortfolioId);
  }
}
function UserPortfoliosComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 32);
    \u0275\u0275listener("onClick", function UserPortfoliosComponent_ng_template_11_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 33);
    \u0275\u0275listener("onClick", function UserPortfoliosComponent_ng_template_11_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      const userPortfolioForm_r8 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(ctx_r2.saveUserPortfolio(userPortfolioForm_r8));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const userPortfolioForm_r8 = \u0275\u0275reference(8);
    \u0275\u0275property("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", userPortfolioForm_r8.invalid);
  }
}
var UserPortfoliosComponent = class _UserPortfoliosComponent {
  constructor(dataService, authStateService) {
    this.dataService = dataService;
    this.authStateService = authStateService;
    this.userPortfolio = {};
    this.userPortfolioDialog = false;
    this.submitted = false;
    this.isEditMode = false;
  }
  ngOnInit() {
    this.getLovs();
    this.getAllUserPortfolios();
  }
  getLovs() {
    this.dataService.getLookup().subscribe((res) => {
      console.log(res);
      this.lookupData = res;
    });
  }
  getAllUserPortfolios() {
    this.dataService.getAllUserPortfolios().subscribe((res) => {
      console.log(res);
      this.userPortfolios = res;
    });
  }
  addUserPortfolio() {
    this.userPortfolio = {};
    this.submitted = false;
    this.userPortfolioDialog = true;
  }
  hideDialog() {
    this.userPortfolioDialog = false;
    this.submitted = false;
    this.isEditMode = false;
  }
  editUserPortfolio(userPortfolio) {
    this.userPortfolio = __spreadValues({}, userPortfolio);
    this.userPortfolioDialog = true;
    this.isEditMode = true;
  }
  saveUserPortfolio(form) {
    if (this.userPortfolio.userPortfolioId) {
      console.log("********Updating UserPortfolio***********", this.userPortfolio);
      this.dataService.updateUserPortfolio(this.userPortfolio.userPortfolioId, this.userPortfolio).subscribe((res) => {
        this.userPortfolio.ModifiedBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
        this.getAllUserPortfolios();
      });
    } else {
      console.log("********Inserting User***********", this.userPortfolio);
      this.userPortfolio.isActive = true;
      this.userPortfolio.createdBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
      this.dataService.saveUserPortfolio(this.userPortfolio).subscribe((res) => {
        this.getAllUserPortfolios();
      });
    }
    this.userPortfolioDialog = false;
    this.userPortfolio = {};
  }
  setUserDetails(evt) {
    this.userPortfolio.userId = evt.userId;
  }
  static {
    this.\u0275fac = function UserPortfoliosComponent_Factory(t) {
      return new (t || _UserPortfoliosComponent)(\u0275\u0275directiveInject(UserPortfolioService), \u0275\u0275directiveInject(AuthStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserPortfoliosComponent, selectors: [["app-user-portfolios"]], decls: 12, vars: 10, consts: [["userPortfolioGrid", ""], ["userPortfolioForm", "ngForm"], ["searchInput", ""], [1, "col-12"], [1, ""], ["responsiveLayout", "scroll", 3, "value", "paginator", "rows", "globalFilterFields"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "ngSubmit"], ["header", "Add/Edit User Portfolio", "styleClass", "p-fluid", 3, "visibleChange", "visible", "modal"], ["pTemplate", "content"], ["pTemplate", "footer"], [1, "flex"], ["severity", "success", "label", "Add User Portfolio", "icon", "pi pi-plus", 1, "mr-2", 3, "onClick"], ["iconPosition", "left", 1, "ml-auto", "search-container"], ["name", "search", 1, "search-icon", 3, "size"], ["pInputText", "", "type", "text", "placeholder", "Search keyword", 1, "search-input", 3, "input"], ["id", "isActive", "name", "isActive", 3, "ngModel", "disabled"], ["icon", "pi pi-pencil", "severity", "success", 1, "mr-2", 3, "onClick", "rounded", "outlined"], [1, "field"], ["for", "user"], ["id", "user", "name", "user", 3, "emitSelectedUser", 4, "ngIf"], ["type", "text", "pInputText", "", "id", "user", "name", "user", "disabled", "", 3, "ngModel", 4, "ngIf"], ["for", "portfolio"], ["name", "portfolioId", "optionLabel", "portfolioName", "optionValue", "portfolioId", "placeholder", "Select Portfolio", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], ["class", "field", "style", "display: flex; align-items: center; gap: 10px", 4, "ngIf"], ["id", "user", "name", "user", 3, "emitSelectedUser"], ["type", "text", "pInputText", "", "id", "user", "name", "user", "disabled", "", 3, "ngModel"], [1, "field", 2, "display", "flex", "align-items", "center", "gap", "10px"], ["for", "isActive", 2, "margin-right", "10px"], ["id", "isActive", "name", "isActive", 3, "ngModelChange", "ngModel"], ["label", "Cancel", "icon", "pi pi-times", 3, "onClick", "text"], ["label", "Save", "icon", "pi pi-check", 3, "onClick", "disabled"]], template: function UserPortfoliosComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "p-table", 5, 0);
        \u0275\u0275template(4, UserPortfoliosComponent_ng_template_4_Template, 6, 1, "ng-template", 6)(5, UserPortfoliosComponent_ng_template_5_Template, 11, 0, "ng-template", 7)(6, UserPortfoliosComponent_ng_template_6_Template, 11, 7, "ng-template", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "form", 9, 1);
        \u0275\u0275listener("ngSubmit", function UserPortfoliosComponent_Template_form_ngSubmit_7_listener() {
          \u0275\u0275restoreView(_r1);
          const userPortfolioForm_r8 = \u0275\u0275reference(8);
          return \u0275\u0275resetView(ctx.saveUserPortfolio(userPortfolioForm_r8));
        });
        \u0275\u0275elementStart(9, "p-dialog", 10);
        \u0275\u0275twoWayListener("visibleChange", function UserPortfoliosComponent_Template_p_dialog_visibleChange_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userPortfolioDialog, $event) || (ctx.userPortfolioDialog = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275template(10, UserPortfoliosComponent_ng_template_10_Template, 10, 5, "ng-template", 11)(11, UserPortfoliosComponent_ng_template_11_Template, 2, 2, "ng-template", 12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.userPortfolios)("paginator", true)("rows", 10)("globalFilterFields", \u0275\u0275pureFunction0(8, _c04));
        \u0275\u0275advance(7);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(9, _c12));
        \u0275\u0275twoWayProperty("visible", ctx.userPortfolioDialog);
        \u0275\u0275property("modal", true);
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, Button, PrimeTemplate, IconField, Dropdown, InputText, InputSwitch, Table, Dialog, LucideAngularComponent, UserDropdownComponent], styles: ['\n\n[_nghost-%COMP%] {\n  --card-border-radius: 12px;\n  --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  --card-shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.1);\n  --header-icon-bg: rgba(41, 98, 255, 0.1);\n  --header-icon-color: var(--primary-color);\n  --progress-bar-height: 8px;\n  --progress-bar-radius: 10px;\n  --transition-speed: 0.25s;\n  --primary-color: #2962ff;\n  --secondary-color: #ff884d;\n  --positive-color: #4caf50;\n  --negative-color: #ef4444;\n  --dividend-color: #ff884d;\n  --text-color: #333;\n  --text-color-secondary: #666;\n  --surface-overlay: #fff;\n  --surface-section: #f5f7fa;\n  --border-color: #e0e0e0;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: var(--surface-overlay);\n  border-radius: var(--card-border-radius);\n  box-shadow: var(--card-shadow);\n  padding: 1.5rem;\n  transition: box-shadow var(--transition-speed);\n  margin-bottom: 1.5rem;\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--card-shadow-hover);\n}\n  .p-datatable .p-datatable-header {\n  background-color: var(--surface-overlay);\n  border: none;\n  padding: 1rem 0 1.5rem;\n}\n  .p-datatable .p-datatable-header .flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n  .p-datatable .p-datatable-thead > tr > th {\n  background-color: var(--surface-section);\n  color: var(--text-color);\n  font-weight: 600;\n  padding: 1rem !important;\n  border-color: var(--border-color);\n  transition: background-color var(--transition-speed);\n}\n  .p-datatable .p-datatable-thead > tr > th:hover {\n  background-color: rgba(41, 98, 255, 0.05);\n}\n  .p-datatable .p-datatable-tbody > tr {\n  transition: background-color var(--transition-speed);\n  background-color: #fff;\n}\n  .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem;\n  border-color: var(--border-color);\n  color: var(--text-color);\n  padding: 1rem !important;\n}\n  .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: rgba(41, 98, 255, 0.02);\n}\n  .p-datatable .p-paginator {\n  padding: 1rem;\n  border: none;\n  background-color: var(--surface-overlay);\n}\n  .p-datatable .p-paginator .p-paginator-element {\n  border-radius: 50%;\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0 0.2rem;\n}\n  .p-datatable .p-paginator .p-paginator-element.p-highlight {\n  background-color: var(--primary-color);\n  color: white;\n}\n  .p-datatable .p-datatable-emptymessage {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\n  .p-button {\n  border-radius: 8px;\n  transition: background-color var(--transition-speed), transform var(--transition-speed);\n}\n  .p-button.p-button-success {\n  border-color: var(--positive-color);\n}\n  .p-button.p-button-success:hover {\n  background-color: #449d48;\n  border-color: #449d48;\n  transform: translateY(-2px);\n}\n  .p-button.p-button-rounded {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n  .p-button.p-button-rounded:hover {\n  transform: translateY(-2px);\n}\n  .p-button.p-button-danger:hover {\n  background-color: rgba(239, 68, 68, 0.1);\n}\n  .search-container {\n  position: relative;\n}\n  .search-container .search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-color-secondary);\n}\n  .search-input {\n  padding: 10px 12px 10px 40px;\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n  background-color: #ffffff;\n  color: var(--text-color);\n  width: 280px;\n  font-size: 14px;\n  transition: all var(--transition-speed);\n}\n  .search-input:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(41, 98, 255, 0.1);\n}\n  .search-input::placeholder {\n  color: var(--text-color-secondary);\n  opacity: 0.7;\n}\n  .p-dialog {\n  border-radius: var(--card-border-radius);\n  box-shadow: var(--card-shadow-hover);\n  overflow: hidden;\n}\n  .p-dialog .p-dialog-header {\n  background-color: var(--surface-overlay);\n  padding: 1.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n  .p-dialog .p-dialog-header .p-dialog-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n  .p-dialog .p-dialog-header .p-dialog-header-icon {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  transition: background-color var(--transition-speed);\n}\n  .p-dialog .p-dialog-header .p-dialog-header-icon:hover {\n  background-color: var(--surface-section);\n}\n  .p-dialog .p-dialog-content {\n  background-color: var(--surface-overlay);\n  padding: 1.5rem;\n}\n  .p-dialog .p-dialog-footer {\n  background-color: var(--surface-overlay);\n  padding: 1rem 1.5rem;\n  border-top: 1px solid var(--border-color);\n}\n  .formgrid.grid {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n}\n  .formgrid.grid .field.col {\n  flex: 1 1 0%;\n  padding: 0 0.5rem;\n  margin-bottom: 1rem;\n}\n  .formgrid.grid .field.col label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n  .formgrid.grid .field.col label .text-danger {\n  color: var(--negative-color);\n}\n  .text-danger {\n  color: var(--negative-color);\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: block;\n}\n  .p-calendar {\n  width: 100%;\n}\n  .p-calendar .p-inputtext {\n  width: 100%;\n}\n  .p-calendar .p-button {\n  background-color: var(--surface-section);\n  border-color: var(--border-color);\n  color: var(--text-color);\n}\n  .p-calendar .p-button:hover {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n  color: white;\n}\n  .p-dropdown {\n  width: 100%;\n  border-radius: 8px;\n}\n  .p-dropdown .p-dropdown-label {\n  padding: 0.75rem 1rem;\n}\n  .p-dropdown .p-dropdown-trigger {\n  width: 3rem;\n}\n  .p-dropdown.p-focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(41, 98, 255, 0.2);\n}\n  .p-dropdown-panel {\n  border-radius: 8px;\n  box-shadow: var(--card-shadow-hover);\n}\n  .p-dropdown-panel .p-dropdown-items {\n  padding: 0.5rem 0;\n}\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item {\n  padding: 0.75rem 1rem;\n  color: var(--text-color);\n  transition: background-color var(--transition-speed);\n}\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover {\n  background-color: rgba(41, 98, 255, 0.05);\n}\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {\n  background-color: rgba(41, 98, 255, 0.1);\n  color: var(--primary-color);\n}\n  .p-inputnumber {\n  width: 100%;\n}\n  .p-inputnumber .p-inputtext {\n  width: 100%;\n}\n  .p-inputtextarea {\n  width: 100%;\n  border-radius: 8px;\n}\n  .p-inputtextarea:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(41, 98, 255, 0.2);\n}\n  .p-confirm-dialog .p-dialog-content {\n  display: flex;\n  align-items: center;\n  padding: 2rem 1.5rem;\n}\n  .p-confirm-dialog .p-dialog-content .p-confirm-dialog-icon {\n  font-size: 2rem;\n  color: var(--negative-color);\n  margin-right: 1rem;\n}\n  .p-confirm-dialog .p-dialog-content .p-confirm-dialog-message {\n  font-size: 1.1rem;\n  color: var(--text-color);\n}\n  .p-inputmask {\n  width: 100%;\n}\n  .p-tooltip .p-tooltip-text {\n  background-color: var(--text-color);\n  color: white;\n  padding: 0.5rem 0.75rem;\n  border-radius: 4px;\n  font-size: 0.875rem;\n}\n  .p-tooltip .p-tooltip-arrow {\n  border-top-color: var(--text-color);\n}\n.p-button[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.p-button[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  transition: width 0.4s, height 0.4s;\n  z-index: 0;\n}\n.p-button[_ngcontent-%COMP%]:active::after {\n  width: 200%;\n  height: 200%;\n}\n.p-button[_ngcontent-%COMP%]   .p-button-label[_ngcontent-%COMP%], .p-button[_ngcontent-%COMP%]   .p-button-icon[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 992px) {\n  .formgrid.grid[_ngcontent-%COMP%]   .field.col[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n  }\n}\n.card[_ngcontent-%COMP%], .p-dialog[_ngcontent-%COMP%], .p-dropdown-panel[_ngcontent-%COMP%] {\n  transition: transform var(--transition-speed), box-shadow var(--transition-speed);\n}\n.p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  transition: transform var(--transition-speed), background-color var(--transition-speed);\n}\n.p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {\n  background-color: var(--primary-color) !important;\n}\n/*# sourceMappingURL=user-portfolios.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserPortfoliosComponent, { className: "UserPortfoliosComponent", filePath: "src\\app\\admin\\user-portfolios\\user-portfolios.component.ts", lineNumber: 12 });
})();

// src/app/admin/admin-home/admin-home.component.ts
var Highcharts = __toESM(require_highcharts());

// src/app/admin/admin-home/admin-home.service.ts
var AdminHomeService = class _AdminHomeService {
  constructor(http) {
    this.http = http;
  }
  getAdminDashboardStats() {
    return this.http.get(`${environment.apiBaseUrl}/api/AdminDashboard/dashboard-stats`);
  }
  getAdminDashboardGraphData() {
    return this.http.get(`${environment.apiBaseUrl}/api/AdminDashboard/user-transactions-graph`);
  }
  getAdminDashboardPieChartData() {
    return this.http.get(`${environment.apiBaseUrl}/api/AdminDashboard/inv-port-dist`);
  }
  getOverAllInvestmentStats(userId = null) {
    return this.http.get(`${environment.apiBaseUrl}/api/User/user-stats`, {
      params: userId ? { userId } : {}
      // If userId is null, send an empty params object
    });
  }
  static {
    this.\u0275fac = function AdminHomeService_Factory(t) {
      return new (t || _AdminHomeService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminHomeService, factory: _AdminHomeService.\u0275fac });
  }
};

// src/app/admin/admin-home/admin-home.component.ts
function AdminHomeComponent_i_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 42);
  }
}
function AdminHomeComponent_i_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 43);
  }
}
var AdminHomeComponent = class _AdminHomeComponent {
  constructor(authStateService, dataService) {
    this.authStateService = authStateService;
    this.dataService = dataService;
    this.Highcharts = Highcharts;
    this.updateColumnChartFlag = false;
    this.dashboardStats = {};
    this.errorMessage = null;
    this.transactionsGraphData = [];
    this.usersGraphData = [];
    this.userStats = {};
    this.userName = `${this.authStateService.getLoggedInUserProperty("lastName")} ${this.authStateService.getLoggedInUserProperty("firstName")}`;
  }
  ngOnInit() {
    this.loadDashboardDataSequentially();
    this.chartOptions = {
      chart: {
        type: "column",
        style: {
          fontFamily: "inherit"
        },
        spacing: [10, 10, 15, 10]
      },
      title: {
        text: null
      },
      xAxis: {
        categories: ["Jan", "Feb", "Mar"],
        lineColor: "var(--border-color)",
        tickColor: "var(--border-color)"
      },
      yAxis: {
        min: 0,
        title: {
          text: null
        },
        gridLineColor: "var(--border-color)",
        gridLineDashStyle: "Dash"
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
        backgroundColor: "var(--surface-overlay)",
        borderColor: "var(--border-color)",
        borderRadius: 8,
        style: {
          color: "var(--text-color)"
        }
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
          borderRadius: 4
        },
        series: {
          color: "var(--primary-color)"
        }
      },
      series: [
        {
          name: "Transactions",
          type: "column",
          data: [5, 10, 15]
        }
      ]
    };
  }
  loadDashboardDataSequentially() {
    this.dataService.getAdminDashboardStats().pipe(tap((data) => this.handleDashboardStats(data)), mergeMap(() => this.dataService.getAdminDashboardGraphData().pipe(tap((data) => this.handleGraphData(data)))), mergeMap(() => this.dataService.getOverAllInvestmentStats(null).pipe(tap((data) => this.showOverAllInvestmentStats(data))))).subscribe({
      next: () => console.log("All dashboard data loaded successfully"),
      error: (error) => {
        console.error("Error during dashboard data loading:", error);
      }
    });
  }
  handleDashboardStats(data) {
    this.dashboardStats = data;
    this.errorMessage = null;
  }
  handleGraphData(data) {
    const categories = data.transactionsGraphData.map((item) => item.xAxis);
    const transactionsData = data.transactionsGraphData.map((item) => item.yAxisValue);
    this.chartOptions.xAxis.categories = categories;
    this.chartOptions.series[0].data = transactionsData;
    this.updateColumnChartFlag = true;
  }
  showOverAllInvestmentStats(data) {
    if (data)
      this.userStats = data;
  }
  // Helper method to calculate progress bar width
  getProgressWidth(part, total) {
    if (!part || !total)
      return 0;
    const percentage = part / total * 100;
    return Math.min(percentage, 100);
  }
  static {
    this.\u0275fac = function AdminHomeComponent_Factory(t) {
      return new (t || _AdminHomeComponent)(\u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(AdminHomeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminHomeComponent, selectors: [["app-admin-home"]], decls: 124, vars: 43, consts: [[1, "dashboard-content"], [1, "welcome-section"], [1, "welcome-title"], [1, "welcome-subtitle"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-card-content"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value"], [1, "stat-trend", "positive"], [1, "pi", "pi-arrow-up"], [1, "trend-period"], [1, "stat-icon", "users-icon"], [1, "pi", "pi-users"], [1, "stat-progress"], [1, "stat-icon", "investment-icon"], [1, "pi", "pi-dollar"], [1, "stat-icon", "transactions-icon"], [1, "pi", "pi-list"], [1, "stat-trend", 3, "ngClass"], ["class", "pi pi-clock", 4, "ngIf"], ["class", "pi pi-check", 4, "ngIf"], [1, "stat-icon", "interests-icon"], [1, "pi", "pi-comment"], [1, "charts-section"], [1, "chart-card", "investment-summary"], [1, "chart-card-header"], [1, "chart-title"], [1, "chart-actions"], [1, "chart-action-btn"], [1, "pi", "pi-refresh"], [1, "investment-stats"], [1, "stat-row"], [1, "stat-value", "highlight"], [1, "stat-value", "dividend"], [1, "stat-value", 3, "ngClass"], [1, "chart-card", "transactions-chart"], [1, "pi", "pi-calendar"], [1, "pi", "pi-download"], [1, "chart-container"], [2, "width", "100%", "height", "300px", "display", "block", 3, "updateChange", "Highcharts", "options", "update"], [1, "pi", "pi-clock"], [1, "pi", "pi-check"]], template: function AdminHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Welcome to your Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, " Here's what's happening with your investments today ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "span", 8);
        \u0275\u0275text(11, "Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 10);
        \u0275\u0275element(16, "i", 11);
        \u0275\u0275elementStart(17, "span");
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 12);
        \u0275\u0275text(20, "since this month");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 13);
        \u0275\u0275element(22, "i", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 5)(25, "div", 6)(26, "div", 7)(27, "span", 8);
        \u0275\u0275text(28, "Investment Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 9);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "currencyFormat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 10);
        \u0275\u0275element(33, "i", 11);
        \u0275\u0275elementStart(34, "span");
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "currencyFormat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 12);
        \u0275\u0275text(38, "since this month");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 16);
        \u0275\u0275element(40, "i", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(41, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 5)(43, "div", 6)(44, "div", 7)(45, "span", 8);
        \u0275\u0275text(46, "User Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 9);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 10);
        \u0275\u0275element(51, "i", 11);
        \u0275\u0275elementStart(52, "span");
        \u0275\u0275text(53);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "span", 12);
        \u0275\u0275text(55, "since this month");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 18);
        \u0275\u0275element(57, "i", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(58, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 5)(60, "div", 6)(61, "div", 7)(62, "span", 8);
        \u0275\u0275text(63, "User Interests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 9);
        \u0275\u0275text(65);
        \u0275\u0275pipe(66, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 20);
        \u0275\u0275template(68, AdminHomeComponent_i_68_Template, 1, 0, "i", 21)(69, AdminHomeComponent_i_69_Template, 1, 0, "i", 22);
        \u0275\u0275elementStart(70, "span");
        \u0275\u0275text(71);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "span", 12);
        \u0275\u0275text(73, "pending");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "div", 23);
        \u0275\u0275element(75, "i", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(76, "div", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 25)(78, "div", 26)(79, "div", 27)(80, "h2", 28);
        \u0275\u0275text(81, "Investment Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "div", 29)(83, "button", 30);
        \u0275\u0275element(84, "i", 31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(85, "div", 32)(86, "div", 33)(87, "div", 8);
        \u0275\u0275text(88, "Total Investment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 34);
        \u0275\u0275text(90);
        \u0275\u0275pipe(91, "currencyFormat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "div", 33)(93, "div", 8);
        \u0275\u0275text(94, "No of Dividends Paid");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 9);
        \u0275\u0275text(96);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "div", 33)(98, "div", 8);
        \u0275\u0275text(99, "Dividends Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 35);
        \u0275\u0275text(101);
        \u0275\u0275pipe(102, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "div", 33)(104, "div", 8);
        \u0275\u0275text(105, "Return on Investment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "div", 36);
        \u0275\u0275text(107);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "div", 33)(109, "div", 8);
        \u0275\u0275text(110, "Return of Capital");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 36);
        \u0275\u0275text(112);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(113, "div", 37)(114, "div", 27)(115, "h2", 28);
        \u0275\u0275text(116, "Transactions Trend");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 29)(118, "button", 30);
        \u0275\u0275element(119, "i", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "button", 30);
        \u0275\u0275element(121, "i", 39);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(122, "div", 40)(123, "highcharts-chart", 41);
        \u0275\u0275twoWayListener("updateChange", function AdminHomeComponent_Template_highcharts_chart_updateChange_123_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.updateColumnChartFlag, $event) || (ctx.updateColumnChartFlag = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 29, ctx.dashboardStats.activeUsers), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.dashboardStats.usersJoinedThisMonth, " new");
        \u0275\u0275advance(5);
        \u0275\u0275styleProp("width", ctx.getProgressWidth(ctx.dashboardStats.usersJoinedThisMonth, ctx.dashboardStats.activeUsers), "%");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 31, ctx.dashboardStats.totalInvestedAmount), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 33, ctx.dashboardStats.totalInvestedAmountThisMonth));
        \u0275\u0275advance(6);
        \u0275\u0275styleProp("width", ctx.getProgressWidth(ctx.dashboardStats.totalInvestedAmountThisMonth, ctx.dashboardStats.totalInvestedAmount), "%");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 35, ctx.dashboardStats.totalTransactions), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.dashboardStats.transactionsThisMonth, " new");
        \u0275\u0275advance(5);
        \u0275\u0275styleProp("width", ctx.getProgressWidth(ctx.dashboardStats.transactionsThisMonth, ctx.dashboardStats.totalTransactions), "%");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(66, 37, ctx.dashboardStats.totalInterests), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.dashboardStats.pendingInterests > 0 ? "neutral" : "positive");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dashboardStats.pendingInterests > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dashboardStats.pendingInterests === 0);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.dashboardStats.pendingInterests);
        \u0275\u0275advance(5);
        \u0275\u0275styleProp("width", ctx.getProgressWidth(ctx.dashboardStats.pendingInterests, ctx.dashboardStats.totalInterests), "%");
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(91, 39, ctx.userStats.totalInvestment || 0), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.userStats.numberOfDividendsPaid || 0, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(102, 41, ctx.userStats.totalDividendsPaid || 0), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", ctx.userStats.returnOnInvestment > 0 ? "positive" : "negative");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.userStats.returnOnInvestment, "% ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", ctx.userStats.returnOfCapital > 0 ? "positive" : "negative");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.userStats.returnOfCapital, "% ");
        \u0275\u0275advance(11);
        \u0275\u0275property("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
        \u0275\u0275twoWayProperty("update", ctx.updateColumnChartFlag);
      }
    }, dependencies: [NgClass, NgIf, HighchartsChartComponent, DecimalPipe, CurrencyPipe, CurrencyFormatPipe], styles: ["\n\n[_nghost-%COMP%] {\n  --card-border-radius: 12px;\n  --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  --card-shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.1);\n  --header-icon-bg: rgba(41, 98, 255, 0.1);\n  --header-icon-color: var(--primary-color);\n  --progress-bar-height: 8px;\n  --progress-bar-radius: 10px;\n  --transition-speed: 0.25s;\n  --primary-color: #2962ff;\n  --secondary-color: #ff884d;\n  --positive-color: #4caf50;\n  --negative-color: #ef4444;\n  --dividend-color: #ff884d;\n  --text-color: #333;\n  --text-color-secondary: #666;\n  --surface-overlay: #fff;\n  --surface-section: #f5f7fa;\n  --border-color: #e0e0e0;\n}\n.dashboard-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.welcome-section[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.welcome-section[_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin-bottom: 0.5rem;\n}\n.welcome-section[_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-color-secondary);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 1.25rem;\n}\n@media (min-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1200px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  background-color: var(--surface-overlay);\n  border-radius: var(--card-border-radius);\n  box-shadow: var(--card-shadow);\n  padding: 1.5rem;\n  position: relative;\n  overflow: hidden;\n  transition: transform var(--transition-speed), box-shadow var(--transition-speed);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--card-shadow-hover);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-color-secondary);\n  margin-bottom: 0.5rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 0.75rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-trend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.875rem;\n  font-weight: 500;\n  gap: 0.25rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-trend.positive[_ngcontent-%COMP%] {\n  color: var(--positive-color);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-trend.negative[_ngcontent-%COMP%] {\n  color: var(--negative-color);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-trend.neutral[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-trend[_ngcontent-%COMP%]   .trend-period[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-weight: 400;\n  margin-left: 0.25rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon.users-icon[_ngcontent-%COMP%] {\n  background-color: rgba(41, 98, 255, 0.1);\n  color: var(--primary-color);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon.investment-icon[_ngcontent-%COMP%] {\n  background-color: rgba(255, 136, 77, 0.1);\n  color: var(--secondary-color);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon.transactions-icon[_ngcontent-%COMP%] {\n  background-color: rgba(0, 200, 200, 0.1);\n  color: #00c8c8;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon.interests-icon[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.1);\n  color: #9c27b0;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-progress[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: var(--progress-bar-height);\n  background-color: var(--primary-color);\n  border-radius: 0 var(--progress-bar-radius) var(--progress-bar-radius) 0;\n  transition: width 1s ease-in-out;\n}\n.charts-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.5rem;\n}\n@media (min-width: 992px) {\n  .charts-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 2fr;\n  }\n}\n.chart-card[_ngcontent-%COMP%] {\n  background-color: var(--surface-overlay);\n  border-radius: var(--card-border-radius);\n  box-shadow: var(--card-shadow);\n  padding: 1.5rem;\n  transition: box-shadow var(--transition-speed);\n}\n.chart-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--card-shadow-hover);\n}\n.chart-card[_ngcontent-%COMP%]   .chart-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin: 0;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background-color: var(--surface-section);\n  border: none;\n  color: var(--text-color-secondary);\n  cursor: pointer;\n  transition: background-color var(--transition-speed), color var(--transition-speed);\n}\n.chart-card[_ngcontent-%COMP%]   .chart-action-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color);\n  color: white;\n}\n.investment-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.investment-stats[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid var(--border-color);\n}\n.investment-stats[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.investment-stats[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-color-secondary);\n}\n.investment-stats[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n.investment-stats[_ngcontent-%COMP%]   .stat-value.highlight[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--primary-color);\n}\n.investment-stats[_ngcontent-%COMP%]   .stat-value.positive[_ngcontent-%COMP%] {\n  color: var(--positive-color);\n}\n.investment-stats[_ngcontent-%COMP%]   .stat-value.negative[_ngcontent-%COMP%] {\n  color: var(--negative-color);\n}\n.investment-stats[_ngcontent-%COMP%]   .stat-value.dividend[_ngcontent-%COMP%] {\n  color: var(--dividend-color);\n}\n.chart-container[_ngcontent-%COMP%] {\n  height: 300px;\n}\n  .highcharts-container {\n  border-radius: var(--card-border-radius);\n}\n  .highcharts-background {\n  fill: transparent;\n}\n  .highcharts-title {\n  font-weight: 600 !important;\n  fill: var(--text-color) !important;\n}\n  .highcharts-axis-labels {\n  fill: var(--text-color-secondary) !important;\n}\n  .highcharts-grid-line {\n  stroke: var(--border-color);\n  stroke-width: 1px;\n}\n  .highcharts-point {\n  stroke: transparent;\n}\n  .highcharts-column-series .highcharts-point {\n  fill: var(--primary-color);\n  stroke-width: 0;\n  transition: opacity 0.2s;\n}\n  .highcharts-column-series .highcharts-point:hover {\n  fill: var(--primary-color);\n  opacity: 0.8;\n}\n/*# sourceMappingURL=admin-home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminHomeComponent, { className: "AdminHomeComponent", filePath: "src\\app\\admin\\admin-home\\admin-home.component.ts", lineNumber: 15 });
})();

// src/app/admin/user-transactions/user-transactions.service.ts
var UserTransactionsService = class _UserTransactionsService {
  constructor(http, datePipe) {
    this.http = http;
    this.datePipe = datePipe;
  }
  getAllTransactions() {
    return this.http.get(`${environment.apiBaseUrl}/api/UserTransaction`);
  }
  saveTransaction(userTransaction) {
    const payload = __spreadProps(__spreadValues({}, userTransaction), {
      transactionDate: this.getFormattedDate(userTransaction.transactionDate)
    });
    return this.http.post(`${environment.apiBaseUrl}/api/UserTransaction`, payload);
  }
  updateTransaction(id, userTransaction) {
    const payload = __spreadProps(__spreadValues({}, userTransaction), {
      transactionDate: this.getFormattedDate(userTransaction.transactionDate)
    });
    return this.http.put(`${environment.apiBaseUrl}/api/UserTransaction/${id}`, payload);
  }
  getLookup() {
    return this.http.get(`${environment.apiBaseUrl}/api/UserTransaction/Lookup`);
  }
  getUserPortfolios(userId) {
    return this.http.get(`${environment.apiBaseUrl}/api/UserPortfolio/${userId}`);
  }
  getAllTransactionsByUser(userId, selectedPortfolio) {
    return this.http.get(`${environment.apiBaseUrl}/api/UserTransaction/${userId}/${selectedPortfolio}`);
  }
  deleteTransaction(id) {
    return this.http.delete(`${environment.apiBaseUrl}/api/UserTransaction/${id}`);
  }
  getFormattedDate(date) {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    console.log(utcDate);
    return this.datePipe.transform(utcDate, "yyyy-MM-dd");
  }
  static {
    this.\u0275fac = function UserTransactionsService_Factory(t) {
      return new (t || _UserTransactionsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(DatePipe));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserTransactionsService, factory: _UserTransactionsService.\u0275fac });
  }
};

// src/app/admin/user-transactions/user-transactions.component.ts
var _c05 = () => ["userName", "email"];
var _c13 = () => ({ width: "40vw" });
function UserTransactionsComponent_div_4_p_radioButton_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-radioButton", 23);
    \u0275\u0275twoWayListener("ngModelChange", function UserTransactionsComponent_div_4_p_radioButton_6_Template_p_radioButton_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedPortfolio, $event) || (ctx_r2.selectedPortfolio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onClick", function UserTransactionsComponent_div_4_p_radioButton_6_Template_p_radioButton_onClick_0_listener() {
      const portfolio_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.fetchUserTransactions(portfolio_r5.portfolioId));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const portfolio_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", portfolio_r5.portfolioId);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedPortfolio);
    \u0275\u0275property("label", portfolio_r5.portfolioName);
  }
}
function UserTransactionsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "label", 21);
    \u0275\u0275text(3, "Portfolios:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "p-radioButton", 23);
    \u0275\u0275twoWayListener("ngModelChange", function UserTransactionsComponent_div_4_Template_p_radioButton_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedPortfolio, $event) || (ctx_r2.selectedPortfolio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onClick", function UserTransactionsComponent_div_4_Template_p_radioButton_onClick_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.fetchUserTransactions(0));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UserTransactionsComponent_div_4_p_radioButton_6_Template, 1, 3, "p-radioButton", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("value", 0);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedPortfolio);
    \u0275\u0275property("label", "ALL");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.userPortfolios);
  }
}
function UserTransactionsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "p-button", 26);
    \u0275\u0275listener("onClick", function UserTransactionsComponent_ng_template_9_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addTransaction());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconField", 27);
    \u0275\u0275element(3, "lucide-icon", 28);
    \u0275\u0275elementStart(4, "input", 29, 2);
    \u0275\u0275listener("input", function UserTransactionsComponent_ng_template_9_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r6);
      const searchInput_r7 = \u0275\u0275reference(5);
      \u0275\u0275nextContext();
      const userTransactionsGrid_r8 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(userTransactionsGrid_r8.filterGlobal(searchInput_r7.value, "contains"));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 16);
  }
}
function UserTransactionsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "User Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Portfolio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Transaction Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Transaction Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Transaction Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Payment Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Action");
    \u0275\u0275elementEnd()();
  }
}
function UserTransactionsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currencyFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "p-button", 30);
    \u0275\u0275listener("onClick", function UserTransactionsComponent_ng_template_11_Template_p_button_onClick_20_listener() {
      const transaction_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editTransaction(transaction_r10));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 31);
    \u0275\u0275listener("click", function UserTransactionsComponent_ng_template_11_Template_button_click_21_listener() {
      const transaction_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showConfirmation(transaction_r10));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const transaction_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transaction_r10.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transaction_r10.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 10, transaction_r10.amount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(transaction_r10.portfolioName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 12, transaction_r10.transactionDate, "MM/dd/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(transaction_r10.transactionType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transaction_r10.transactionCategory);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transaction_r10.paymentMode);
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function UserTransactionsComponent_ng_template_15_app_user_dropdown_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-user-dropdown", 53);
    \u0275\u0275listener("emitSelectedUser", function UserTransactionsComponent_ng_template_15_app_user_dropdown_4_Template_app_user_dropdown_emitSelectedUser_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setUserDetails($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("userIdFromContext", ctx_r2.userFromContext.userId);
  }
}
function UserTransactionsComponent_ng_template_15_input_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 54);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r2.userTransaction.userName);
  }
}
function UserTransactionsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "label", 34);
    \u0275\u0275text(3, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, UserTransactionsComponent_ng_template_15_app_user_dropdown_4_Template, 1, 1, "app-user-dropdown", 35)(5, UserTransactionsComponent_ng_template_15_input_5_Template, 1, 1, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 33)(7, "label", 37);
    \u0275\u0275text(8, "Transaction Date");
    \u0275\u0275elementStart(9, "span", 38);
    \u0275\u0275text(10, "\xA0*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p-calendar", 39, 3);
    \u0275\u0275twoWayListener("ngModelChange", function UserTransactionsComponent_ng_template_15_Template_p_calendar_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.userTransaction.transactionDate, $event) || (ctx_r2.userTransaction.transactionDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 32)(14, "div", 33)(15, "label", 40);
    \u0275\u0275text(16, "Transaction Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p-dropdown", 41);
    \u0275\u0275twoWayListener("ngModelChange", function UserTransactionsComponent_ng_template_15_Template_p_dropdown_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.userTransaction.transactionTypeId, $event) || (ctx_r2.userTransaction.transactionTypeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function UserTransactionsComponent_ng_template_15_Template_p_dropdown_onChange_17_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterCategories());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 33)(19, "label", 42);
    \u0275\u0275text(20, "Transaction Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p-dropdown", 43);
    \u0275\u0275twoWayListener("ngModelChange", function UserTransactionsComponent_ng_template_15_Template_p_dropdown_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.userTransaction.transactionCategoryId, $event) || (ctx_r2.userTransaction.transactionCategoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 32)(23, "div", 33)(24, "label", 44);
    \u0275\u0275text(25, "User Portfolios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p-dropdown", 45);
    \u0275\u0275twoWayListener("ngModelChange", function UserTransactionsComponent_ng_template_15_Template_p_dropdown_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.userTransaction.portfolioId, $event) || (ctx_r2.userTransaction.portfolioId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 32)(29, "div", 33)(30, "label", 46);
    \u0275\u0275text(31, "Payment Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p-dropdown", 47);
    \u0275\u0275twoWayListener("ngModelChange", function UserTransactionsComponent_ng_template_15_Template_p_dropdown_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.userTransaction.paymentModeId, $event) || (ctx_r2.userTransaction.paymentModeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 33)(34, "label", 48);
    \u0275\u0275text(35, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p-inputNumber", 49);
    \u0275\u0275twoWayListener("ngModelChange", function UserTransactionsComponent_ng_template_15_Template_p_inputNumber_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.userTransaction.amount, $event) || (ctx_r2.userTransaction.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 50)(38, "label", 51);
    \u0275\u0275text(39, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "textarea", 52);
    \u0275\u0275twoWayListener("ngModelChange", function UserTransactionsComponent_ng_template_15_Template_textarea_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.userTransaction.remarks, $event) || (ctx_r2.userTransaction.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(41, "        ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r2.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isEditMode);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.userTransaction.transactionDate);
    \u0275\u0275property("showIcon", true)("showOnFocus", true)("showTime", false)("dataType", "date");
    \u0275\u0275advance(6);
    \u0275\u0275property("options", ctx_r2.lookupData.transactionTypes);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.userTransaction.transactionTypeId);
    \u0275\u0275property("showClear", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r2.filteredCategories);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.userTransaction.transactionCategoryId);
    \u0275\u0275advance(5);
    \u0275\u0275property("options", ctx_r2.lookupData.userPortfolios);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.userTransaction.portfolioId);
    \u0275\u0275advance(6);
    \u0275\u0275property("options", ctx_r2.lookupData.paymentMethods);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.userTransaction.paymentModeId);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.userTransaction.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.userTransaction.remarks);
  }
}
function UserTransactionsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 55);
    \u0275\u0275listener("onClick", function UserTransactionsComponent_ng_template_16_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 56);
    \u0275\u0275listener("onClick", function UserTransactionsComponent_ng_template_16_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      const transactionForm_r11 = \u0275\u0275reference(13);
      return \u0275\u0275resetView(ctx_r2.saveTransaction(transactionForm_r11));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const transactionForm_r11 = \u0275\u0275reference(13);
    \u0275\u0275property("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", transactionForm_r11.invalid);
  }
}
var UserTransactionsComponent = class _UserTransactionsComponent {
  constructor(authStateService, toastr, confirmationService, dataService) {
    this.authStateService = authStateService;
    this.toastr = toastr;
    this.confirmationService = confirmationService;
    this.dataService = dataService;
    this.userTransaction = {};
    this.userTransactionDialog = false;
    this.submitted = false;
    this.isEditMode = false;
    this.userFromContext = {};
    this.userPortfolios = [];
    this.filteredCategories = [];
    this.selectedPortfolio = 0;
  }
  ngOnInit() {
    console.log("From T:", this.userFromContext.firstName, this.userFromContext.userId);
    this.getLovs();
    if (!this.userFromContext.userId) {
      this.getAllTransactions();
    } else {
      this.getAllTransactionByUser();
    }
  }
  getLovs() {
    this.dataService.getLookup().subscribe((res) => {
      console.log(res);
      this.lookupData = res;
    });
  }
  filterCategories() {
    if (!this.userTransaction.transactionTypeId) {
      this.filteredCategories = [];
      return;
    }
    this.filteredCategories = this.lookupData.transactionCategories.filter((cat) => cat.transactionTypeId === this.userTransaction.transactionTypeId);
  }
  setUserDetails(evt) {
    if (evt) {
      this.userTransaction.userId = evt.userId;
      this.userFromContext.userId = evt.userId;
      this.userTransaction.email = evt.email;
      this.fetchUserPortfolios(this.userTransaction.userId, false);
      this.getAllTransactionByUser();
    } else {
      this.getAllTransactions();
      this.userFromContext = {};
    }
  }
  fetchUserPortfolios(userId, editMode) {
    if (userId) {
      this.dataService.getUserPortfolios(userId).subscribe((res) => {
        console.log(res.portfolios);
        this.userPortfolios = res.portfolios;
        this.lookupData["userPortfolios"] = res.portfolios;
        if (editMode) {
          this.userTransactionDialog = true;
          this.isEditMode = true;
        }
      });
    }
  }
  fetchUserTransactions(portfolioId) {
    this.getAllTransactionByUser();
  }
  getAllTransactions() {
    this.dataService.getAllTransactions().subscribe((res) => {
      console.log(res);
      this.userTransactions = res;
    });
  }
  addTransaction() {
    this.userTransaction = {};
    if (this.userFromContext.userId) {
      this.userTransaction.userId = this.userFromContext.userId;
    }
    this.submitted = false;
    this.userTransactionDialog = true;
  }
  hideDialog() {
    this.userTransactionDialog = false;
    this.submitted = false;
    this.isEditMode = false;
  }
  editTransaction(userTransaction) {
    this.userTransaction = __spreadValues({}, userTransaction);
    this.userTransaction.transactionDate = new Date(userTransaction.transactionDate);
    if (this.userTransaction.userId) {
      this.fetchUserPortfolios(this.userTransaction.userId, true);
    }
  }
  saveTransaction(form) {
    if (this.userTransaction.userTransactionId) {
      console.log("********Updating User Transaction***********", this.userTransaction);
      this.dataService.updateTransaction(this.userTransaction.userTransactionId, this.userTransaction).subscribe((res) => {
        this.userTransaction.ModifiedBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
        this.getAllTransactions();
      });
    } else {
      console.log("********Inserting User***********", this.userTransaction);
      this.userTransaction.createdBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
      this.dataService.saveTransaction(this.userTransaction).subscribe((res) => {
        if (!this.userFromContext.userId) {
          this.getAllTransactions();
        } else {
          this.getAllTransactionByUser();
        }
      });
    }
    this.userTransactionDialog = false;
    this.userTransaction = {};
  }
  getAllTransactionByUser() {
    if (this.userFromContext.userId) {
      console.log(this.userFromContext.userId);
      this.dataService.getAllTransactionsByUser(this.userFromContext.userId, this.selectedPortfolio).subscribe((res) => {
        console.log(res);
        this.userTransactions = res;
      });
    }
  }
  deleteTransaction(transaction) {
    if (transaction.userTransactionId) {
      this.dataService.deleteTransaction(transaction.userTransactionId).subscribe((res) => {
        if (!this.userFromContext.userId) {
          this.getAllTransactions();
        } else {
          this.getAllTransactionByUser();
        }
        this.toastr.success("User Details deleted Successfully");
      }, (err) => {
        console.error("Error Deleting User", err);
        this.toastr.error("Not able to Delete. Try Again");
      });
    }
  }
  showConfirmation(userTransaction) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete this Transaction ?",
      header: "Delete Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptButtonStyleClass: "p-button-danger",
      rejectButtonStyleClass: "p-button-text p-button-text",
      accept: () => {
        this.deleteTransaction(userTransaction);
      }
    });
  }
  static {
    this.\u0275fac = function UserTransactionsComponent_Factory(t) {
      return new (t || _UserTransactionsComponent)(\u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(UserTransactionsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserTransactionsComponent, selectors: [["app-user-transactions"]], inputs: { userFromContext: "userFromContext" }, decls: 18, vars: 13, consts: [["userTransactionsGrid", ""], ["transactionForm", "ngForm"], ["searchInput", ""], ["dateOfBirth", "ngModel"], [1, "row"], [1, "col-3"], [1, "input-group"], ["id", "userContext", "name", "userContext", 3, "emitSelectedUser", "userIdFromContext"], ["class", "col-9", 4, "ngIf"], [1, "col-12"], [1, ""], ["responsiveLayout", "scroll", 3, "value", "paginator", "rows", "globalFilterFields"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "ngSubmit"], ["header", "Add/Edit User Transaction", "styleClass", "p-fluid", 3, "visibleChange", "visible", "modal", "focusOnShow"], ["pTemplate", "content"], ["pTemplate", "footer"], [1, "col-9"], [1, "radio-button-group"], [1, "group-label"], [1, "radio-button-list"], ["name", "category", 3, "ngModelChange", "onClick", "value", "ngModel", "label"], ["name", "category", 3, "value", "ngModel", "label", "ngModelChange", "onClick", 4, "ngFor", "ngForOf"], [1, "flex"], ["severity", "success", "label", "New Transaction", "icon", "pi pi-plus", 1, "mr-2", 3, "onClick"], ["iconPosition", "left", 1, "ml-auto", "search-container"], ["name", "search", 1, "search-icon", 3, "size"], ["pInputText", "", "type", "text", "placeholder", "Search keyword", 1, "search-input", 3, "input"], ["icon", "pi pi-pencil", "severity", "success", 1, "mr-2", 3, "onClick", "rounded", "outlined"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", "pTooltip", "Delete", 1, "p-button-rounded", "p-button-text", "p-button-danger", 3, "click"], [1, "formgrid", "grid", "mb-2"], [1, "field", "col"], ["for", "user"], ["id", "user", "name", "user", 3, "userIdFromContext", "emitSelectedUser", 4, "ngIf"], ["type", "text", "pInputText", "", "id", "user", "name", "user", "disabled", "", "class", "input", 3, "ngModel", 4, "ngIf"], ["for", "transactionDate"], [1, "text-danger"], ["id", "transactionDate", "name", "transactionDate", "inputId", "buttondisplay", "dateFormat", "mm/dd/yy", 3, "ngModelChange", "ngModel", "showIcon", "showOnFocus", "showTime", "dataType"], ["for", "transactionTypeId"], ["name", "transactionTypeId", "optionLabel", "transactionTypeName", "optionValue", "transactionTypeId", "placeholder", "Select Transaction Type", "appendTo", "body", 3, "ngModelChange", "onChange", "options", "ngModel", "showClear"], ["for", "transactionCategoryId"], ["name", "transactionCategoryId", "optionLabel", "transactionCatgName", "optionValue", "transactionCatgId", "placeholder", "Select Category", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], ["for", "userPortfolioId"], ["name", "userPortfolioId", "optionLabel", "portfolioName", "optionValue", "portfolioId", "placeholder", "Select Portfolio", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], ["for", "paymentModeId"], ["name", "paymentModeId", "optionLabel", "paymentModeName", "optionValue", "paymentModeId", "placeholder", "Payment Type", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], ["for", "amount"], ["inputId", "amount", "name", "amount", "prefix", "$", 3, "ngModelChange", "ngModel"], [1, "field"], ["for", "remarks"], ["id", "remarks", "name", "remarks", "pInputTextarea", "", "rows", "3", "cols", "20", 3, "ngModelChange", "ngModel"], ["id", "user", "name", "user", 3, "emitSelectedUser", "userIdFromContext"], ["type", "text", "pInputText", "", "id", "user", "name", "user", "disabled", "", 1, "input", 3, "ngModel"], ["label", "Cancel", "icon", "pi pi-times", 3, "onClick", "text"], ["label", "Save", "icon", "pi pi-check", 3, "onClick", "disabled"]], template: function UserTransactionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "app-user-dropdown", 7);
        \u0275\u0275listener("emitSelectedUser", function UserTransactionsComponent_Template_app_user_dropdown_emitSelectedUser_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setUserDetails($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(4, UserTransactionsComponent_div_4_Template, 7, 4, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "p-table", 11, 0);
        \u0275\u0275template(9, UserTransactionsComponent_ng_template_9_Template, 6, 1, "ng-template", 12)(10, UserTransactionsComponent_ng_template_10_Template, 19, 0, "ng-template", 13)(11, UserTransactionsComponent_ng_template_11_Template, 22, 15, "ng-template", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "form", 15, 1);
        \u0275\u0275listener("ngSubmit", function UserTransactionsComponent_Template_form_ngSubmit_12_listener() {
          \u0275\u0275restoreView(_r1);
          const transactionForm_r11 = \u0275\u0275reference(13);
          return \u0275\u0275resetView(ctx.saveTransaction(transactionForm_r11));
        });
        \u0275\u0275elementStart(14, "p-dialog", 16);
        \u0275\u0275twoWayListener("visibleChange", function UserTransactionsComponent_Template_p_dialog_visibleChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userTransactionDialog, $event) || (ctx.userTransactionDialog = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275template(15, UserTransactionsComponent_ng_template_15_Template, 42, 18, "ng-template", 17)(16, UserTransactionsComponent_ng_template_16_Template, 2, 2, "ng-template", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(17, "p-confirmDialog");
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("userIdFromContext", ctx.userFromContext.userId);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.userFromContext.userId);
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.userTransactions)("paginator", true)("rows", 10)("globalFilterFields", \u0275\u0275pureFunction0(11, _c05));
        \u0275\u0275advance(7);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(12, _c13));
        \u0275\u0275twoWayProperty("visible", ctx.userTransactionDialog);
        \u0275\u0275property("modal", true)("focusOnShow", false);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, Calendar, ButtonDirective, Button, PrimeTemplate, ConfirmDialog, IconField, InputTextarea, InputNumber, Dropdown, InputText, Tooltip, RadioButton, Ripple, Table, Dialog, LucideAngularComponent, UserDropdownComponent, DatePipe, CurrencyFormatPipe], styles: ['\n\n[_nghost-%COMP%] {\n  --card-border-radius: 12px;\n  --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  --card-shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.1);\n  --header-icon-bg: rgba(41, 98, 255, 0.1);\n  --header-icon-color: var(--primary-color);\n  --progress-bar-height: 8px;\n  --progress-bar-radius: 10px;\n  --transition-speed: 0.25s;\n  --primary-color: #2962ff;\n  --secondary-color: #ff884d;\n  --positive-color: #4caf50;\n  --negative-color: #ef4444;\n  --dividend-color: #ff884d;\n  --text-color: #333;\n  --text-color-secondary: #666;\n  --surface-overlay: #fff;\n  --surface-section: #f5f7fa;\n  --border-color: #e0e0e0;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: var(--surface-overlay);\n  border-radius: var(--card-border-radius);\n  box-shadow: var(--card-shadow);\n  padding: 1.5rem;\n  transition: box-shadow var(--transition-speed);\n  margin-bottom: 1.5rem;\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--card-shadow-hover);\n}\n  .p-datatable .p-datatable-header {\n  background-color: var(--surface-overlay);\n  border: none;\n  padding: 1rem 0 1.5rem;\n}\n  .p-datatable .p-datatable-header .flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n  .p-datatable .p-datatable-thead > tr > th {\n  background-color: var(--surface-section);\n  color: var(--text-color);\n  font-weight: 600;\n  padding: 1rem !important;\n  border-color: var(--border-color);\n  transition: background-color var(--transition-speed);\n}\n  .p-datatable .p-datatable-thead > tr > th:hover {\n  background-color: rgba(41, 98, 255, 0.05);\n}\n  .p-datatable .p-datatable-tbody > tr {\n  transition: background-color var(--transition-speed);\n  background-color: #fff;\n}\n  .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem;\n  border-color: var(--border-color);\n  color: var(--text-color);\n  padding: 1rem !important;\n}\n  .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: rgba(41, 98, 255, 0.02);\n}\n  .p-datatable .p-paginator {\n  padding: 1rem;\n  border: none;\n  background-color: var(--surface-overlay);\n}\n  .p-datatable .p-paginator .p-paginator-element {\n  border-radius: 50%;\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0 0.2rem;\n}\n  .p-datatable .p-paginator .p-paginator-element.p-highlight {\n  background-color: var(--primary-color);\n  color: white;\n}\n  .p-datatable .p-datatable-emptymessage {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\n  .p-button {\n  border-radius: 8px;\n  transition: background-color var(--transition-speed), transform var(--transition-speed);\n}\n  .p-button.p-button-success {\n  border-color: var(--positive-color);\n}\n  .p-button.p-button-success:hover {\n  background-color: #449d48;\n  border-color: #449d48;\n  transform: translateY(-2px);\n}\n  .p-button.p-button-rounded {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n  .p-button.p-button-rounded:hover {\n  transform: translateY(-2px);\n}\n  .p-button.p-button-danger:hover {\n  background-color: rgba(239, 68, 68, 0.1);\n}\n  .search-container {\n  position: relative;\n}\n  .search-container .search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-color-secondary);\n}\n  .search-input {\n  padding: 10px 12px 10px 40px;\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n  background-color: #ffffff;\n  color: var(--text-color);\n  width: 280px;\n  font-size: 14px;\n  transition: all var(--transition-speed);\n}\n  .search-input:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(41, 98, 255, 0.1);\n}\n  .search-input::placeholder {\n  color: var(--text-color-secondary);\n  opacity: 0.7;\n}\n.input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-color-secondary);\n  opacity: 0.7;\n}\n  .p-dialog {\n  border-radius: var(--card-border-radius);\n  box-shadow: var(--card-shadow-hover);\n  overflow: hidden;\n}\n  .p-dialog .p-dialog-header {\n  background-color: var(--surface-overlay);\n  padding: 1.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n  .p-dialog .p-dialog-header .p-dialog-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n  .p-dialog .p-dialog-header .p-dialog-header-icon {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  transition: background-color var(--transition-speed);\n}\n  .p-dialog .p-dialog-header .p-dialog-header-icon:hover {\n  background-color: var(--surface-section);\n}\n  .p-dialog .p-dialog-content {\n  background-color: var(--surface-overlay);\n  padding: 1.5rem;\n}\n  .p-dialog .p-dialog-footer {\n  background-color: var(--surface-overlay);\n  padding: 1rem 1.5rem;\n  border-top: 1px solid var(--border-color);\n}\n  .formgrid.grid {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n}\n  .formgrid.grid .field.col {\n  flex: 1 1 0%;\n  padding: 0 0.5rem;\n  margin-bottom: 1rem;\n}\n  .formgrid.grid .field.col label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n  .formgrid.grid .field.col label .text-danger {\n  color: var(--negative-color);\n}\n  .text-danger {\n  color: var(--negative-color);\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: block;\n}\n  .p-calendar {\n  width: 100%;\n}\n  .p-calendar .p-inputtext {\n  width: 100%;\n}\n  .p-calendar .p-button {\n  background-color: var(--surface-section);\n  border-color: var(--border-color);\n  color: var(--text-color);\n}\n  .p-calendar .p-button:hover {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n  color: white;\n}\n  .p-dropdown {\n  width: 100%;\n  border-radius: 8px;\n}\n  .p-dropdown .p-dropdown-label {\n  padding: 0.75rem 1rem;\n}\n  .p-dropdown .p-dropdown-trigger {\n  width: 3rem;\n}\n  .p-dropdown.p-focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(41, 98, 255, 0.2);\n}\n  .p-dropdown-panel {\n  border-radius: 8px;\n  box-shadow: var(--card-shadow-hover);\n}\n  .p-dropdown-panel .p-dropdown-items {\n  padding: 0.5rem 0;\n}\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item {\n  padding: 0.75rem 1rem;\n  color: var(--text-color);\n  transition: background-color var(--transition-speed);\n}\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover {\n  background-color: rgba(41, 98, 255, 0.05);\n}\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {\n  background-color: rgba(41, 98, 255, 0.1);\n  color: var(--primary-color);\n}\n  .p-inputnumber {\n  width: 100%;\n}\n  .p-inputnumber .p-inputtext {\n  width: 100%;\n}\n  .p-inputtextarea {\n  width: 100%;\n  border-radius: 8px;\n}\n  .p-inputtextarea:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(41, 98, 255, 0.2);\n}\n  .p-confirm-dialog .p-dialog-content {\n  display: flex;\n  align-items: center;\n  padding: 2rem 1.5rem;\n}\n  .p-confirm-dialog .p-dialog-content .p-confirm-dialog-icon {\n  font-size: 2rem;\n  color: var(--negative-color);\n  margin-right: 1rem;\n}\n  .p-confirm-dialog .p-dialog-content .p-confirm-dialog-message {\n  font-size: 1.1rem;\n  color: var(--text-color);\n}\n  .p-inputmask {\n  width: 100%;\n}\n  .p-tooltip .p-tooltip-text {\n  background-color: var(--text-color);\n  color: white;\n  padding: 0.5rem 0.75rem;\n  border-radius: 4px;\n  font-size: 0.875rem;\n}\n  .p-tooltip .p-tooltip-arrow {\n  border-top-color: var(--text-color);\n}\n.p-button[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.p-button[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  transition: width 0.4s, height 0.4s;\n  z-index: 0;\n}\n.p-button[_ngcontent-%COMP%]:active::after {\n  width: 200%;\n  height: 200%;\n}\n.p-button[_ngcontent-%COMP%]   .p-button-label[_ngcontent-%COMP%], .p-button[_ngcontent-%COMP%]   .p-button-icon[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 992px) {\n  .formgrid.grid[_ngcontent-%COMP%]   .field.col[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n  }\n}\n.card[_ngcontent-%COMP%], .p-dialog[_ngcontent-%COMP%], .p-dropdown-panel[_ngcontent-%COMP%] {\n  transition: transform var(--transition-speed), box-shadow var(--transition-speed);\n}\n.p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  transition: transform var(--transition-speed), background-color var(--transition-speed);\n}\n.p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {\n  background-color: var(--primary-color) !important;\n}\n.radio-button-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-weight: bold;\n}\n.radio-button-group[_ngcontent-%COMP%], .radio-button-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n  .radio-button-list label {\n  color: var(--text-color);\n}\n  .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {\n  background-color: var(--primary-color);\n}\n  .p-radiobutton .p-radiobutton-box {\n  background-color: #8dd0ff;\n}\n/*# sourceMappingURL=user-transactions.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserTransactionsComponent, { className: "UserTransactionsComponent", filePath: "src\\app\\admin\\user-transactions\\user-transactions.component.ts", lineNumber: 14 });
})();

// src/app/admin/admin-dashboard.component.ts
function AdminDashboardComponent_app_admin_home_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-admin-home");
  }
}
function AdminDashboardComponent_app_users_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-users", 12);
    \u0275\u0275listener("userContextFromUserTab", function AdminDashboardComponent_app_users_5_Template_app_users_userContextFromUserTab_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateUserContext($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("fetchAdmins", "N");
  }
}
function AdminDashboardComponent_app_user_portfolios_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-user-portfolios");
  }
}
function AdminDashboardComponent_app_user_transactions_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-user-transactions", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("userFromContext", ctx_r1.userContext);
  }
}
function AdminDashboardComponent_app_user_interests_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-user-interests");
  }
}
function AdminDashboardComponent_app_users_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-users", 14);
  }
  if (rf & 2) {
    \u0275\u0275property("fetchAdmins", "Y");
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.activeTabIndex = 0;
    this.userContext = {};
  }
  ngOnInit() {
    console.log("Admin Dashboard");
  }
  updateUserContext(user) {
    if (user) {
      this.userContext = user;
      console.log(this.userContext.userId, this.userContext.firstName);
      this.activeTabIndex = 3;
    }
  }
  handleChange(e) {
    console.log("Index is :", e.index);
    this.userContext = {};
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(t) {
      return new (t || _AdminDashboardComponent)(\u0275\u0275directiveInject(LayoutService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["ng-component"]], decls: 14, vars: 7, consts: [[1, "dashboard-container"], ["styleClass", "premium-tabs", 3, "activeIndexChange", "onChange", "activeIndex"], ["header", "Home"], [4, "ngIf"], ["header", "Users"], [3, "fetchAdmins", "userContextFromUserTab", 4, "ngIf"], ["header", "User Portfolios"], ["header", "User Transactions"], [3, "userFromContext", 4, "ngIf"], ["header", "User Interests"], ["header", "App Admins"], [3, "fetchAdmins", 4, "ngIf"], [3, "userContextFromUserTab", "fetchAdmins"], [3, "userFromContext"], [3, "fetchAdmins"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "p-tabView", 1);
        \u0275\u0275twoWayListener("activeIndexChange", function AdminDashboardComponent_Template_p_tabView_activeIndexChange_1_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.activeTabIndex, $event) || (ctx.activeTabIndex = $event);
          return $event;
        });
        \u0275\u0275listener("onChange", function AdminDashboardComponent_Template_p_tabView_onChange_1_listener($event) {
          return ctx.handleChange($event);
        });
        \u0275\u0275elementStart(2, "p-tabPanel", 2);
        \u0275\u0275template(3, AdminDashboardComponent_app_admin_home_3_Template, 1, 0, "app-admin-home", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p-tabPanel", 4);
        \u0275\u0275template(5, AdminDashboardComponent_app_users_5_Template, 1, 1, "app-users", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p-tabPanel", 6);
        \u0275\u0275template(7, AdminDashboardComponent_app_user_portfolios_7_Template, 1, 0, "app-user-portfolios", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p-tabPanel", 7);
        \u0275\u0275template(9, AdminDashboardComponent_app_user_transactions_9_Template, 1, 1, "app-user-transactions", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p-tabPanel", 9);
        \u0275\u0275template(11, AdminDashboardComponent_app_user_interests_11_Template, 1, 0, "app-user-interests", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p-tabPanel", 10);
        \u0275\u0275template(13, AdminDashboardComponent_app_users_13_Template, 1, 1, "app-users", 11);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("activeIndex", ctx.activeTabIndex);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeTabIndex === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeTabIndex === 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeTabIndex === 2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeTabIndex === 3);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeTabIndex === 4);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeTabIndex === 5);
      }
    }, dependencies: [NgIf, TabView, TabPanel, UsersComponent, UserInterestsComponent, UserPortfoliosComponent, AdminHomeComponent, UserTransactionsComponent], styles: ['\n\n[_nghost-%COMP%] {\n  --card-border-radius: 12px;\n  --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  --card-shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.1);\n  --header-icon-bg: rgba(41, 98, 255, 0.1);\n  --header-icon-color: var(--primary-color);\n  --progress-bar-height: 8px;\n  --progress-bar-radius: 10px;\n  --transition-speed: 0.25s;\n  --primary-color: #2962ff;\n  --secondary-color: #ff884d;\n  --positive-color: #4caf50;\n  --negative-color: #ef4444;\n  --dividend-color: #ff884d;\n  --text-color: #333;\n  --text-color-secondary: #666;\n  --surface-overlay: #fff;\n  --surface-section: #f5f7fa;\n  --border-color: #e0e0e0;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background-color: var(--surface-section);\n  min-height: calc(100vh - 60px);\n}\n[_nghost-%COMP%]     .premium-tabs .p-tabview-nav {\n  border-bottom: 1px solid var(--border-color);\n  background-color: var(--surface-overlay);\n  border-radius: var(--card-border-radius) var(--card-border-radius) 0 0;\n  padding: 0 1rem;\n}\n[_nghost-%COMP%]     .premium-tabs .p-tabview-nav li {\n  margin-right: 0.5rem;\n}\n[_nghost-%COMP%]     .premium-tabs .p-tabview-nav li .p-tabview-nav-link {\n  padding: 1rem 1.25rem;\n  color: var(--text-color);\n  font-weight: 500;\n  border: none;\n  border-radius: 0;\n  transition: all var(--transition-speed) ease;\n  position: relative;\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .premium-tabs .p-tabview-nav li .p-tabview-nav-link:hover {\n  color: var(--primary-color);\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .premium-tabs .p-tabview-nav li .p-tabview-nav-link:focus {\n  box-shadow: none;\n}\n[_nghost-%COMP%]     .premium-tabs .p-tabview-nav li.p-highlight .p-tabview-nav-link {\n  color: var(--primary-color);\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .premium-tabs .p-tabview-nav li.p-highlight .p-tabview-nav-link:after {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: var(--primary-color);\n  border-radius: var(--progress-bar-radius) var(--progress-bar-radius) 0 0;\n}\n[_nghost-%COMP%]     .premium-tabs .p-tabview-panels {\n  background-color: var(--surface-overlay);\n  border-radius: 0 0 var(--card-border-radius) var(--card-border-radius);\n  padding: 1.5rem;\n  box-shadow: var(--card-shadow);\n}\n[_ngcontent-%COMP%]:root {\n  --card-border-radius: 12px;\n  --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  --card-shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.1);\n  --header-icon-bg: rgba(41, 98, 255, 0.1);\n  --header-icon-color: var(--primary-color);\n  --progress-bar-height: 8px;\n  --progress-bar-radius: 10px;\n  --transition-speed: 0.25s;\n  --primary-color: #2962ff;\n  --secondary-color: #ff884d;\n  --positive-color: #4caf50;\n  --negative-color: #ef4444;\n  --dividend-color: #ff884d;\n  --text-color: #333;\n  --text-color-secondary: #666;\n  --surface-overlay: #fff;\n  --surface-section: #f5f7fa;\n  --border-color: #e0e0e0;\n  --input-bg: #fff;\n  --input-border: #ced4da;\n  --input-focus-border: var(--primary-color);\n  --input-focus-shadow: 0 0 0 0.2rem rgba(41, 98, 255, 0.25);\n  --button-border-radius: 6px;\n  --table-header-bg: var(--surface-section);\n  --table-row-hover: rgba(41, 98, 255, 0.05);\n  --table-border: var(--border-color);\n  --dialog-header-bg: var(--surface-section);\n  --dialog-content-bg: var(--surface-overlay);\n}\n.card[_ngcontent-%COMP%] {\n  background-color: var(--surface-overlay);\n  border-radius: var(--card-border-radius);\n  box-shadow: var(--card-shadow);\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n  transition: box-shadow var(--transition-speed);\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--card-shadow-hover);\n}\n[_ngcontent-%COMP%]:deep(.p-datatable)   .p-datatable-header[_ngcontent-%COMP%] {\n  background-color: var(--surface-overlay);\n  border: none;\n  padding: 1rem 1.5rem;\n}\n[_ngcontent-%COMP%]:deep(.p-datatable)   .p-datatable-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: var(--table-header-bg);\n  color: var(--text-color);\n  font-weight: 600;\n  padding: 1rem;\n  border-color: var(--table-border);\n  transition: background-color var(--transition-speed);\n}\n[_ngcontent-%COMP%]:deep(.p-datatable)   .p-datatable-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:hover {\n  background-color: #ebeff5;\n}\n[_ngcontent-%COMP%]:deep(.p-datatable)   .p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  transition: background-color var(--transition-speed);\n}\n[_ngcontent-%COMP%]:deep(.p-datatable)   .p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-color: var(--table-border);\n}\n[_ngcontent-%COMP%]:deep(.p-datatable)   .p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover {\n  background-color: var(--table-row-hover);\n}\n[_ngcontent-%COMP%]:deep(.p-datatable)   .p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n[_ngcontent-%COMP%]:deep(.p-datatable)   .p-paginator[_ngcontent-%COMP%] {\n  background-color: var(--surface-overlay);\n  border-color: var(--table-border);\n  padding: 0.75rem 1rem;\n}\n[_ngcontent-%COMP%]:deep(.p-datatable)   .p-paginator[_ngcontent-%COMP%]   .p-paginator-element[_ngcontent-%COMP%] {\n  border-radius: var(--button-border-radius);\n  min-width: 2.5rem;\n  height: 2.5rem;\n  margin: 0 0.125rem;\n}\n[_ngcontent-%COMP%]:deep(.p-datatable)   .p-paginator[_ngcontent-%COMP%]   .p-paginator-element.p-highlight[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: white;\n}\n[_ngcontent-%COMP%]:deep(.p-datatable)   .p-datatable-emptymessage[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\n[_ngcontent-%COMP%]:deep(.p-dialog) {\n  border-radius: var(--card-border-radius);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n[_ngcontent-%COMP%]:deep(.p-dialog)   .p-dialog-header[_ngcontent-%COMP%] {\n  background-color: var(--dialog-header-bg);\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n[_ngcontent-%COMP%]:deep(.p-dialog)   .p-dialog-header[_ngcontent-%COMP%]   .p-dialog-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n[_ngcontent-%COMP%]:deep(.p-dialog)   .p-dialog-header[_ngcontent-%COMP%]   .p-dialog-header-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  transition: background-color var(--transition-speed);\n}\n[_ngcontent-%COMP%]:deep(.p-dialog)   .p-dialog-header[_ngcontent-%COMP%]   .p-dialog-header-icon[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n[_ngcontent-%COMP%]:deep(.p-dialog)   .p-dialog-content[_ngcontent-%COMP%] {\n  background-color: var(--dialog-content-bg);\n  padding: 1.5rem;\n}\n[_ngcontent-%COMP%]:deep(.p-dialog)   .p-dialog-footer[_ngcontent-%COMP%] {\n  background-color: var(--dialog-content-bg);\n  padding: 1rem 1.5rem;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n[_ngcontent-%COMP%]:deep(.p-confirm-dialog)   .p-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.5rem;\n}\n[_ngcontent-%COMP%]:deep(.p-confirm-dialog)   .p-dialog-content[_ngcontent-%COMP%]   .p-confirm-dialog-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--primary-color);\n}\n[_ngcontent-%COMP%]:deep(.p-confirm-dialog)   .p-dialog-content[_ngcontent-%COMP%]   .p-confirm-dialog-message[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-color);\n  margin: 0;\n}\n.formgrid.grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -0.5rem;\n}\n.formgrid.grid[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n  margin-bottom: 1.25rem;\n}\n.formgrid.grid[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n.formgrid.grid[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: var(--negative-color);\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n[_ngcontent-%COMP%]:deep(.p-inputtext), [_ngcontent-%COMP%]:deep(.p-password   input)[_ngcontent-%COMP%], [_ngcontent-%COMP%]:deep(.p-inputnumber   input)[_ngcontent-%COMP%], [_ngcontent-%COMP%]:deep(.p-inputmask   input)[_ngcontent-%COMP%], [_ngcontent-%COMP%]:deep(textarea.p-inputtextarea) {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n  border: 1px solid var(--input-border);\n  border-radius: var(--button-border-radius);\n  background-color: var(--input-bg);\n  transition: border-color var(--transition-speed), box-shadow var(--transition-speed);\n}\n[_ngcontent-%COMP%]:deep(.p-inputtext):hover, [_ngcontent-%COMP%]:deep(.p-password   input)[_ngcontent-%COMP%]:hover, [_ngcontent-%COMP%]:deep(.p-inputnumber   input)[_ngcontent-%COMP%]:hover, [_ngcontent-%COMP%]:deep(.p-inputmask   input)[_ngcontent-%COMP%]:hover, [_ngcontent-%COMP%]:deep(textarea.p-inputtextarea):hover {\n  border-color: #b1bbc4;\n}\n[_ngcontent-%COMP%]:deep(.p-inputtext):focus, [_ngcontent-%COMP%]:deep(.p-password   input)[_ngcontent-%COMP%]:focus, [_ngcontent-%COMP%]:deep(.p-inputnumber   input)[_ngcontent-%COMP%]:focus, [_ngcontent-%COMP%]:deep(.p-inputmask   input)[_ngcontent-%COMP%]:focus, [_ngcontent-%COMP%]:deep(textarea.p-inputtextarea):focus {\n  outline: none;\n  border-color: var(--input-focus-border);\n  box-shadow: var(--input-focus-shadow);\n}\n[_ngcontent-%COMP%]:deep(.p-inputtext).ng-invalid.ng-touched, [_ngcontent-%COMP%]:deep(.p-password   input).ng-invalid.ng-touched[_ngcontent-%COMP%], [_ngcontent-%COMP%]:deep(.p-inputnumber   input).ng-invalid.ng-touched[_ngcontent-%COMP%], [_ngcontent-%COMP%]:deep(.p-inputmask   input).ng-invalid.ng-touched[_ngcontent-%COMP%], [_ngcontent-%COMP%]:deep(textarea.p-inputtextarea).ng-invalid.ng-touched {\n  border-color: var(--negative-color);\n}\n[_ngcontent-%COMP%]:deep(.p-dropdown) {\n  width: 100%;\n}\n[_ngcontent-%COMP%]:deep(.p-dropdown)   .p-dropdown-label[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n}\n[_ngcontent-%COMP%]:deep(.p-dropdown)   .p-dropdown-trigger[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n[_ngcontent-%COMP%]:deep(.p-dropdown).p-focus {\n  border-color: var(--input-focus-border);\n  box-shadow: var(--input-focus-shadow);\n}\n[_ngcontent-%COMP%]:deep(.p-dropdown-panel) {\n  border-radius: var(--button-border-radius);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\n[_ngcontent-%COMP%]:deep(.p-dropdown-panel)   .p-dropdown-items[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n[_ngcontent-%COMP%]:deep(.p-dropdown-panel)   .p-dropdown-items[_ngcontent-%COMP%]   .p-dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  color: var(--text-color);\n  transition: background-color var(--transition-speed);\n}\n[_ngcontent-%COMP%]:deep(.p-dropdown-panel)   .p-dropdown-items[_ngcontent-%COMP%]   .p-dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--table-row-hover);\n}\n[_ngcontent-%COMP%]:deep(.p-dropdown-panel)   .p-dropdown-items[_ngcontent-%COMP%]   .p-dropdown-item.p-highlight[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: white;\n}\n[_ngcontent-%COMP%]:deep(.p-calendar) {\n  width: 100%;\n}\n[_ngcontent-%COMP%]:deep(.p-calendar)   .p-inputtext[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_ngcontent-%COMP%]:deep(.p-calendar)   .p-button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  color: var(--text-color-secondary);\n}\n[_ngcontent-%COMP%]:deep(.p-calendar)   .p-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n  color: var(--text-color);\n}\n[_ngcontent-%COMP%]:deep(.p-datepicker) {\n  border-radius: var(--button-border-radius);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  padding: 0.5rem;\n}\n[_ngcontent-%COMP%]:deep(.p-datepicker)   .p-datepicker-header[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n[_ngcontent-%COMP%]:deep(.p-datepicker)   .p-datepicker-header[_ngcontent-%COMP%]   .p-datepicker-title[_ngcontent-%COMP%]   .p-datepicker-month[_ngcontent-%COMP%], [_ngcontent-%COMP%]:deep(.p-datepicker)   .p-datepicker-header[_ngcontent-%COMP%]   .p-datepicker-title[_ngcontent-%COMP%]   .p-datepicker-year[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-color);\n}\n[_ngcontent-%COMP%]:deep(.p-datepicker)   .p-datepicker-header[_ngcontent-%COMP%]   .p-datepicker-prev[_ngcontent-%COMP%], [_ngcontent-%COMP%]:deep(.p-datepicker)   .p-datepicker-header[_ngcontent-%COMP%]   .p-datepicker-next[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n}\n[_ngcontent-%COMP%]:deep(.p-datepicker)   .p-datepicker-header[_ngcontent-%COMP%]   .p-datepicker-prev[_ngcontent-%COMP%]:hover, [_ngcontent-%COMP%]:deep(.p-datepicker)   .p-datepicker-header[_ngcontent-%COMP%]   .p-datepicker-next[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n[_ngcontent-%COMP%]:deep(.p-datepicker)   .p-datepicker-calendar[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n[_ngcontent-%COMP%]:deep(.p-datepicker)   .p-datepicker-calendar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n}\n[_ngcontent-%COMP%]:deep(.p-datepicker)   .p-datepicker-calendar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  transition: background-color var(--transition-speed);\n}\n[_ngcontent-%COMP%]:deep(.p-datepicker)   .p-datepicker-calendar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n[_ngcontent-%COMP%]:deep(.p-datepicker)   .p-datepicker-calendar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    > span.p-highlight[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: white;\n}\n[_ngcontent-%COMP%]:deep(.p-button) {\n  border-radius: var(--button-border-radius);\n  padding: 0.75rem 1.25rem;\n  font-weight: 500;\n  transition:\n    background-color var(--transition-speed),\n    border-color var(--transition-speed),\n    transform var(--transition-speed);\n}\n[_ngcontent-%COMP%]:deep(.p-button):not(.p-button-text):not(.p-button-link):hover {\n  transform: translateY(-2px);\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-sm {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-lg {\n  padding: 1rem 1.5rem;\n  font-size: 1.125rem;\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-icon-only {\n  width: 2.75rem;\n  height: 2.75rem;\n  padding: 0;\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-icon-only.p-button-rounded {\n  border-radius: 50%;\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-success {\n  background-color: var(--positive-color);\n  border-color: var(--positive-color);\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-success:hover {\n  background-color: #449d48;\n  border-color: #449d48;\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-success.p-button-outlined {\n  background-color: transparent;\n  color: var(--positive-color);\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-success.p-button-outlined:hover {\n  background-color: rgba(76, 175, 80, 0.1);\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-danger {\n  background-color: var(--negative-color);\n  border-color: var(--negative-color);\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-danger:hover {\n  background-color: #ed2d2d;\n  border-color: #ed2d2d;\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-danger.p-button-outlined {\n  background-color: transparent;\n  color: var(--negative-color);\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-danger.p-button-outlined:hover {\n  background-color: rgba(239, 68, 68, 0.1);\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-text {\n  background-color: transparent;\n  border: none;\n  color: var(--primary-color);\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-text:hover {\n  background-color: rgba(41, 98, 255, 0.05);\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-outlined {\n  background-color: transparent;\n}\n[_ngcontent-%COMP%]:deep(.p-button).p-button-outlined:hover {\n  background-color: rgba(41, 98, 255, 0.05);\n}\n[_ngcontent-%COMP%]:deep(.p-iconfield) {\n  position: relative;\n}\n[_ngcontent-%COMP%]:deep(.p-iconfield)   .p-inputtext[_ngcontent-%COMP%] {\n  padding-left: 2.5rem;\n}\n[_ngcontent-%COMP%]:deep(.p-iconfield)   .p-inputicon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0.75rem;\n  color: var(--text-color-secondary);\n}\n[_ngcontent-%COMP%]:deep(.p-tooltip)   .p-tooltip-text[_ngcontent-%COMP%] {\n  background-color: var(--text-color);\n  color: white;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--button-border-radius);\n  font-size: 0.75rem;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n}\n[_ngcontent-%COMP%]:deep(.p-tooltip)   .p-tooltip-arrow[_ngcontent-%COMP%] {\n  border-top-color: var(--text-color);\n}\n@media (max-width: 768px) {\n  .formgrid.grid[_ngcontent-%COMP%]   .field.col[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n  }\n  [_ngcontent-%COMP%]:deep(.p-datatable)   .p-datatable-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], [_ngcontent-%COMP%]:deep(.p-datatable)   .p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n  }\n  [_ngcontent-%COMP%]:deep(.p-dialog) {\n    width: 95% !important;\n    max-width: 550px;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src\\app\\admin\\admin-dashboard.component.ts", lineNumber: 9 });
})();

// src/app/admin/admin-dashboard-routing.module.ts
var AdminDashboardsRoutingModule = class _AdminDashboardsRoutingModule {
  static {
    this.\u0275fac = function AdminDashboardsRoutingModule_Factory(t) {
      return new (t || _AdminDashboardsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminDashboardsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild([
      { path: "", component: AdminDashboardComponent }
    ]), RouterModule] });
  }
};

// src/app/admin/admin-dashboard.service.ts
var AdminDashboardService = class _AdminDashboardService {
  constructor(http) {
    this.http = http;
  }
  static {
    this.\u0275fac = function AdminDashboardService_Factory(t) {
      return new (t || _AdminDashboardService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminDashboardService, factory: _AdminDashboardService.\u0275fac });
  }
};

// src/app/admin/admin-dashboard.module.ts
var Highcharts2 = __toESM(require_highcharts());

// src/app/admin/configuration/configuration.service.ts
var ConfigurationService = class _ConfigurationService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "https://your-api.com/api/lookup";
  }
  getTableData(tableName) {
    return this.http.get(`${this.apiUrl}/${tableName}`);
  }
  addRecord(tableName, record) {
    return this.http.post(`${this.apiUrl}/${tableName}`, record);
  }
  updateRecord(tableName, record) {
    return this.http.put(`${this.apiUrl}/${tableName}/${record.id}`, record);
  }
  deleteRecord(tableName, id) {
    return this.http.delete(`${this.apiUrl}/${tableName}/${id}`);
  }
  static {
    this.\u0275fac = function ConfigurationService_Factory(t) {
      return new (t || _ConfigurationService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfigurationService, factory: _ConfigurationService.\u0275fac, providedIn: "root" });
  }
};

// src/app/admin/configuration/configuration.component.ts
function ConfigurationComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function ConfigurationComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "button", 15);
    \u0275\u0275listener("click", function ConfigurationComponent_ng_template_7_Template_button_click_6_listener() {
      const record_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editRecord(record_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 16);
    \u0275\u0275listener("click", function ConfigurationComponent_ng_template_7_Template_button_click_7_listener() {
      const record_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete(record_r2));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const record_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.name);
  }
}
var ConfigurationComponent = class _ConfigurationComponent {
  constructor(dataService, confirmationService, messageService) {
    this.dataService = dataService;
    this.confirmationService = confirmationService;
    this.messageService = messageService;
    this.tables = ["countries", "cities", "departments"];
    this.selectedTable = "";
    this.records = [];
    this.record = { id: null, name: "" };
    this.showDialog = false;
    this.isEdit = false;
  }
  ngOnInit() {
    this.loadTableData();
  }
  loadTableData() {
    if (this.selectedTable) {
      this.dataService.getTableData(this.selectedTable).subscribe((data) => {
        this.records = data;
      });
    }
  }
  openNew() {
    this.record = { id: null, name: "" };
    this.showDialog = true;
    this.isEdit = false;
  }
  editRecord(record) {
    this.record = __spreadValues({}, record);
    this.showDialog = true;
    this.isEdit = true;
  }
  saveRecord() {
    if (this.isEdit) {
      this.dataService.updateRecord(this.selectedTable, this.record).subscribe(() => {
        this.loadTableData();
        this.showDialog = false;
        this.messageService.add({ severity: "success", summary: "Updated", detail: "Record updated successfully" });
      });
    } else {
      this.dataService.addRecord(this.selectedTable, this.record).subscribe(() => {
        this.loadTableData();
        this.showDialog = false;
        this.messageService.add({ severity: "success", summary: "Added", detail: "Record added successfully" });
      });
    }
  }
  confirmDelete(record) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete this record?",
      accept: () => {
        this.dataService.deleteRecord(this.selectedTable, record.id).subscribe(() => {
          this.loadTableData();
          this.messageService.add({ severity: "warn", summary: "Deleted", detail: "Record deleted" });
        });
      }
    });
  }
  static {
    this.\u0275fac = function ConfigurationComponent_Factory(t) {
      return new (t || _ConfigurationComponent)(\u0275\u0275directiveInject(ConfigurationService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigurationComponent, selectors: [["app-configuration"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService])], decls: 18, vars: 8, consts: [[1, "p-grid"], [1, "p-col-12", "p-md-6"], ["for", "userContext", 1, "input-label"], ["placeholder", "Select a Table", 3, "ngModelChange", "onChange", "options", "ngModel"], ["responsiveLayout", "scroll", 3, "value", "paginator", "rows"], ["pTemplate", "header"], ["pTemplate", "body"], ["pButton", "", "label", "Add New", "icon", "pi pi-plus", 3, "click"], ["header", "Manage Record", 3, "visibleChange", "visible", "modal"], [1, "p-fluid"], [1, "p-field"], ["for", "name"], ["id", "name", "type", "text", "pInputText", "", 3, "ngModelChange", "ngModel"], ["pButton", "", "label", "Cancel", "icon", "pi pi-times", 3, "click"], ["pButton", "", "label", "Save", "icon", "pi pi-check", 1, "p-button-success", 3, "click"], ["pButton", "", "icon", "pi pi-pencil", 1, "p-button-sm", "p-button-text", 3, "click"], ["pButton", "", "icon", "pi pi-trash", 1, "p-button-sm", "p-button-danger", 3, "click"]], template: function ConfigurationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "label", 2);
        \u0275\u0275text(3, "Select a Table:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p-dropdown", 3);
        \u0275\u0275twoWayListener("ngModelChange", function ConfigurationComponent_Template_p_dropdown_ngModelChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedTable, $event) || (ctx.selectedTable = $event);
          return $event;
        });
        \u0275\u0275listener("onChange", function ConfigurationComponent_Template_p_dropdown_onChange_4_listener() {
          return ctx.loadTableData();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "p-table", 4);
        \u0275\u0275template(6, ConfigurationComponent_ng_template_6_Template, 7, 0, "ng-template", 5)(7, ConfigurationComponent_ng_template_7_Template, 8, 2, "ng-template", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 7);
        \u0275\u0275listener("click", function ConfigurationComponent_Template_button_click_8_listener() {
          return ctx.openNew();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p-dialog", 8);
        \u0275\u0275twoWayListener("visibleChange", function ConfigurationComponent_Template_p_dialog_visibleChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.showDialog, $event) || (ctx.showDialog = $event);
          return $event;
        });
        \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "label", 11);
        \u0275\u0275text(13, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function ConfigurationComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.record.name, $event) || (ctx.record.name = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "p-footer")(16, "button", 13);
        \u0275\u0275listener("click", function ConfigurationComponent_Template_button_click_16_listener() {
          return ctx.showDialog = false;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 14);
        \u0275\u0275listener("click", function ConfigurationComponent_Template_button_click_17_listener() {
          return ctx.saveRecord();
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("options", ctx.tables);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedTable);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.records)("paginator", true)("rows", 5);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("visible", ctx.showDialog);
        \u0275\u0275property("modal", true);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.record.name);
      }
    }, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, ButtonDirective, Footer, PrimeTemplate, Dropdown, InputText, Table, Dialog], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigurationComponent, { className: "ConfigurationComponent", filePath: "src\\app\\admin\\configuration\\configuration.component.ts", lineNumber: 10 });
})();

// src/app/admin/admin-dashboard.module.ts
Highcharts2.setOptions({
  chart: {
    backgroundColor: "#2a323d"
    // Dark background color
  },
  title: {
    style: {
      color: "#ffffff"
      // White color for title
    }
  },
  tooltip: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    // Dark tooltip background
    style: {
      color: "#fff"
      // Tooltip text color in white
    }
  },
  xAxis: {
    gridLineColor: "#555",
    // Darker grid lines
    labels: {
      style: {
        color: "#aaa"
        // Lighter color for axis labels
      }
    }
  },
  yAxis: {
    gridLineColor: "#555",
    // Darker grid lines
    labels: {
      style: {
        color: "#aaa"
        // Lighter color for axis labels
      }
    }
  },
  legend: {
    itemStyle: {
      color: "#ffffff"
      // White color for legend items
    }
  }
});
var AdminDashboardModule = class _AdminDashboardModule {
  static {
    this.\u0275fac = function AdminDashboardModule_Factory(t) {
      return new (t || _AdminDashboardModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminDashboardModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
      AdminDashboardService,
      UsersService,
      UserInterestService,
      UserPortfolioService,
      DatePipe,
      UserTransactionsService,
      AdminDashboardService,
      AdminHomeService,
      ConfigurationService
    ], imports: [
      CommonModule,
      FormsModule,
      PrimeNgModule,
      AdminDashboardsRoutingModule,
      HighchartsChartModule,
      SharedModule
    ] });
  }
};
export {
  AdminDashboardModule
};
//# sourceMappingURL=chunk-YVI3KE7T.js.map
