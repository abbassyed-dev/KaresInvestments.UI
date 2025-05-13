import {
  LoginService
} from "./chunk-KXEZA2QO.js";
import {
  UsersService
} from "./chunk-BXUO4OAC.js";
import {
  LayoutService
} from "./chunk-RJDWO5KX.js";
import {
  LucideAngularComponent,
  SharedModule
} from "./chunk-TOGNVH2H.js";
import {
  AuthStateService,
  CookieService
} from "./chunk-4LQ7OEGE.js";
import {
  ANIMATION_MODULE_TYPE,
  AUTO_STYLE,
  AnimationGroupPlayer,
  AnimationMetadataType,
  BehaviorSubject,
  BrowserModule,
  ButtonDirective,
  ButtonModule,
  Calendar,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DOCUMENT,
  DatePipe,
  DefaultValueAccessor,
  Dialog,
  DomRendererFactory2,
  DomSanitizer,
  ElementRef,
  EmailValidator,
  EventEmitter,
  FormsModule,
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  InputNumber,
  InputSwitch,
  InputSwitchModule,
  InputText,
  Menu,
  MessageService,
  MinLengthValidator,
  NavigationEnd,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NgModule,
  NgSelectOption,
  NgZone,
  NoopAnimationPlayer,
  Optional,
  Password,
  PatternValidator,
  Pipe,
  PreloadAllModules,
  PrimeNGConfig,
  PrimeNgModule,
  PrimeTemplate,
  RadioButton,
  RadioButtonModule,
  Renderer2,
  RendererFactory2,
  RequiredValidator,
  Ripple,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  SelectControlValueAccessor,
  Sidebar,
  SidebarModule,
  Subject,
  ToastrModule,
  ToastrService,
  ViewChild,
  animate,
  catchError,
  debounceTime,
  enableProdMode,
  environment,
  filter,
  finalize,
  fromEvent,
  inject,
  merge,
  platformBrowser,
  sequence,
  setClassMetadata,
  state,
  style,
  switchMap,
  take,
  takeUntil,
  throwError,
  timer,
  transition,
  trigger,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵPRE_STYLE,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YYKS4PBP.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// src/app/layout/app.menu.service.ts
var MenuService = class _MenuService {
  constructor() {
    this.menuSource = new Subject();
    this.resetSource = new Subject();
    this.menuSource$ = this.menuSource.asObservable();
    this.resetSource$ = this.resetSource.asObservable();
  }
  onMenuStateChange(event) {
    this.menuSource.next(event);
  }
  reset() {
    this.resetSource.next(true);
  }
  static {
    this.\u0275fac = function MenuService_Factory(t) {
      return new (t || _MenuService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuService, factory: _MenuService.\u0275fac, providedIn: "root" });
  }
};

// src/app/layout/app.menuitem.component.ts
var _c0 = ["app-menuitem", ""];
var _c1 = () => ({ paths: "exact", queryParams: "ignored", matrixParams: "ignored", fragment: "ignored" });
function AppMenuitemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item.label);
  }
}
function AppMenuitemComponent_a_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function AppMenuitemComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function AppMenuitemComponent_a_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppMenuitemComponent_a_2_i_4_Template, 1, 0, "i", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.class);
    \u0275\u0275attribute("href", ctx_r0.item.url, \u0275\u0275sanitizeUrl)("target", ctx_r0.item.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitemComponent_a_3_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function AppMenuitemComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275listener("click", function AppMenuitemComponent_a_3_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppMenuitemComponent_a_3_i_4_Template, 1, 0, "i", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.class)("routerLink", ctx_r0.item.routerLink)("routerLinkActiveOptions", ctx_r0.item.routerLinkActiveOptions || \u0275\u0275pureFunction0(14, _c1))("fragment", ctx_r0.item.fragment)("queryParamsHandling", ctx_r0.item.queryParamsHandling)("preserveFragment", ctx_r0.item.preserveFragment)("skipLocationChange", ctx_r0.item.skipLocationChange)("replaceUrl", ctx_r0.item.replaceUrl)("state", ctx_r0.item.state)("queryParams", ctx_r0.item.queryParams);
    \u0275\u0275attribute("target", ctx_r0.item.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitemComponent_ul_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 12);
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(child_r4.badgeClass);
    \u0275\u0275property("item", child_r4)("index", i_r5)("parentKey", ctx_r0.key);
  }
}
function AppMenuitemComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, AppMenuitemComponent_ul_4_ng_template_1_Template, 1, 5, "ng-template", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("@children", ctx_r0.submenuAnimation);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.item.items);
  }
}
var AppMenuitemComponent = class _AppMenuitemComponent {
  constructor(layoutService, cd, router, menuService) {
    this.layoutService = layoutService;
    this.cd = cd;
    this.router = router;
    this.menuService = menuService;
    this.active = false;
    this.key = "";
    this.menuSourceSubscription = this.menuService.menuSource$.subscribe((value) => {
      Promise.resolve(null).then(() => {
        if (value.routeEvent) {
          this.active = value.key === this.key || value.key.startsWith(this.key + "-") ? true : false;
        } else {
          if (value.key !== this.key && !value.key.startsWith(this.key + "-")) {
            this.active = false;
          }
        }
      });
    });
    this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
      this.active = false;
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((params) => {
      if (this.item.routerLink) {
        this.updateActiveStateFromRoute();
      }
    });
  }
  ngOnInit() {
    this.key = this.parentKey ? this.parentKey + "-" + this.index : String(this.index);
    if (this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  updateActiveStateFromRoute() {
    const activeRoute = this.router.isActive(this.item.routerLink[0], { paths: "exact", queryParams: "ignored", matrixParams: "ignored", fragment: "ignored" });
    if (activeRoute) {
      this.menuService.onMenuStateChange({ key: this.key, routeEvent: true });
    }
  }
  itemClick(event) {
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }
    if (this.item.items) {
      this.active = !this.active;
    }
    this.menuService.onMenuStateChange({ key: this.key });
  }
  get submenuAnimation() {
    return this.root ? "expanded" : this.active ? "expanded" : "collapsed";
  }
  get activeClass() {
    return this.active && !this.root;
  }
  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }
    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
  static {
    this.\u0275fac = function AppMenuitemComponent_Factory(t) {
      return new (t || _AppMenuitemComponent)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MenuService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenuitemComponent, selectors: [["", "app-menuitem", ""]], hostVars: 4, hostBindings: function AppMenuitemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("layout-root-menuitem", ctx.root)("active-menuitem", ctx.activeClass);
      }
    }, inputs: { item: "item", index: "index", root: "root", parentKey: "parentKey" }, attrs: _c0, decls: 5, vars: 4, consts: [["class", "layout-menuitem-root-text", 4, "ngIf"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "click", 4, "ngIf"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "click", 4, "ngIf"], [4, "ngIf"], [1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "click", "ngClass"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], ["class", "pi pi-fw pi-angle-down layout-submenu-toggler", 4, "ngIf"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "click", "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", 3, "item", "index", "parentKey"]], template: function AppMenuitemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainerStart(0);
        \u0275\u0275template(1, AppMenuitemComponent_div_1_Template, 2, 1, "div", 0)(2, AppMenuitemComponent_a_2_Template, 5, 6, "a", 1)(3, AppMenuitemComponent_a_3_Template, 5, 15, "a", 2)(4, AppMenuitemComponent_ul_4_Template, 2, 2, "ul", 3);
        \u0275\u0275elementContainerEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.root && ctx.item.visible !== false);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.item.items && ctx.item.visible !== false);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, RouterLink, RouterLinkActive, Ripple, _AppMenuitemComponent], encapsulation: 2, data: { animation: [
      trigger("children", [
        state("collapsed", style({
          height: "0"
        })),
        state("expanded", style({
          height: "*"
        })),
        transition("collapsed <=> expanded", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)"))
      ])
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenuitemComponent, { className: "AppMenuitemComponent", filePath: "src\\app\\layout\\app.menuitem.component.ts", lineNumber: 50 });
})();

// src/app/layout/app.menu.component.ts
function AppMenuComponent_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const item_r2 = ctx_r0.$implicit;
    const i_r3 = ctx_r0.index;
    \u0275\u0275property("item", item_r2)("index", i_r3)("root", true);
  }
}
function AppMenuComponent_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 5);
  }
}
function AppMenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppMenuComponent_ng_container_1_li_1_Template, 1, 3, "li", 2)(2, AppMenuComponent_ng_container_1_li_2_Template, 1, 0, "li", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r2.separator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.separator);
  }
}
var AppMenuComponent = class _AppMenuComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.model = [];
  }
  ngOnInit() {
    this.model = [
      {
        label: "Home",
        items: [
          { label: "Dashboard", icon: "pi pi-fw pi-home", routerLink: ["/"] }
        ]
      }
      // {
      //     label: 'UI Components',
      //     items: [
      //         { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
      //         { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
      //         { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
      //         { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
      //         { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
      //         { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
      //         { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
      //         { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
      //         { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
      //         { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
      //         { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
      //         { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
      //         { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
      //         { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
      //         { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
      //         { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
      //     ]
      // },
      // {
      //     label: 'Prime Blocks',
      //     items: [
      //         { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
      //         { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
      //     ]
      // },
      // {
      //     label: 'Utilities',
      //     items: [
      //         { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
      //         { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
      //     ]
      // },
      // {
      //     label: 'Pages',
      //     icon: 'pi pi-fw pi-briefcase',
      //     items: [
      //         {
      //             label: 'Landing',
      //             icon: 'pi pi-fw pi-globe',
      //             routerLink: ['/landing']
      //         },
      //         {
      //             label: 'Auth',
      //             icon: 'pi pi-fw pi-user',
      //             items: [
      //                 {
      //                     label: 'Login',
      //                     icon: 'pi pi-fw pi-sign-in',
      //                     routerLink: ['/auth/login']
      //                 },
      //                 {
      //                     label: 'Error',
      //                     icon: 'pi pi-fw pi-times-circle',
      //                     routerLink: ['/auth/error']
      //                 },
      //                 {
      //                     label: 'Access Denied',
      //                     icon: 'pi pi-fw pi-lock',
      //                     routerLink: ['/auth/access']
      //                 }
      //             ]
      //         },
      //         {
      //             label: 'Crud',
      //             icon: 'pi pi-fw pi-pencil',
      //             routerLink: ['/pages/crud']
      //         },
      //         {
      //             label: 'Timeline',
      //             icon: 'pi pi-fw pi-calendar',
      //             routerLink: ['/pages/timeline']
      //         },
      //         {
      //             label: 'Not Found',
      //             icon: 'pi pi-fw pi-exclamation-circle',
      //             routerLink: ['/notfound']
      //         },
      //         {
      //             label: 'Empty',
      //             icon: 'pi pi-fw pi-circle-off',
      //             routerLink: ['/pages/empty']
      //         },
      //     ]
      // },
      // {
      //     label: 'Hierarchy',
      //     items: [
      //         {
      //             label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
      //             items: [
      //                 {
      //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
      //                     items: [
      //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
      //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
      //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
      //                     ]
      //                 },
      //                 {
      //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
      //                     items: [
      //                         { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
      //                     ]
      //                 },
      //             ]
      //         },
      //         {
      //             label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
      //             items: [
      //                 {
      //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
      //                     items: [
      //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
      //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
      //                     ]
      //                 },
      //                 {
      //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
      //                     items: [
      //                         { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
      //                     ]
      //                 },
      //             ]
      //         }
      //     ]
      // },
      // {
      //     label: 'Get Started',
      //     items: [
      //         {
      //             label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
      //         },
      //         {
      //             label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
      //         }
      //     ]
      // }
    ];
  }
  static {
    this.\u0275fac = function AppMenuComponent_Factory(t) {
      return new (t || _AppMenuComponent)(\u0275\u0275directiveInject(LayoutService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenuComponent, selectors: [["app-menu"]], decls: 2, vars: 1, consts: [[1, "layout-menu"], [4, "ngFor", "ngForOf"], ["app-menuitem", "", 3, "item", "index", "root", 4, "ngIf"], ["class", "menu-separator", 4, "ngIf"], ["app-menuitem", "", 3, "item", "index", "root"], [1, "menu-separator"]], template: function AppMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ul", 0);
        \u0275\u0275template(1, AppMenuComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.model);
      }
    }, dependencies: [NgForOf, NgIf, AppMenuitemComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenuComponent, { className: "AppMenuComponent", filePath: "src\\app\\layout\\app.menu.component.ts", lineNumber: 9 });
})();

// src/app/layout/app.sidebar.component.ts
var AppSidebarComponent = class _AppSidebarComponent {
  constructor(layoutService, el) {
    this.layoutService = layoutService;
    this.el = el;
  }
  static {
    this.\u0275fac = function AppSidebarComponent_Factory(t) {
      return new (t || _AppSidebarComponent)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppSidebarComponent, selectors: [["app-sidebar"]], decls: 1, vars: 0, template: function AppSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-menu");
      }
    }, dependencies: [AppMenuComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppSidebarComponent, { className: "AppSidebarComponent", filePath: "src\\app\\layout\\app.sidebar.component.ts", lineNumber: 8 });
})();

// src/app/layout/app.topbar.component.ts
var _c02 = ["menubutton"];
var _c12 = ["topbarmenubutton"];
var _c2 = ["topbarmenu"];
var _c3 = (a0) => ({ "layout-topbar-menu-mobile-active": a0 });
var AppTopBarComponent = class _AppTopBarComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.action = new EventEmitter();
  }
  logOut() {
    this.action.emit("logOut");
  }
  showProfile() {
    this.action.emit("showProfile");
  }
  changePassword() {
    this.action.emit("changePassword");
  }
  ngOnInit() {
    this.items = [{
      items: [
        {
          label: "My Profile",
          icon: "pi pi-user",
          command: () => {
            this.showProfile();
          }
        },
        {
          label: "Change Password",
          icon: "pi pi-key",
          command: () => {
            this.changePassword();
          }
        },
        {
          label: "Logout",
          icon: "pi pi-sign-out",
          command: () => {
            this.logOut();
          }
        }
      ]
    }];
  }
  static {
    this.\u0275fac = function AppTopBarComponent_Factory(t) {
      return new (t || _AppTopBarComponent)(\u0275\u0275directiveInject(LayoutService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppTopBarComponent, selectors: [["app-topbar"]], viewQuery: function AppTopBarComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c12, 5);
        \u0275\u0275viewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menuButton = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.topbarMenuButton = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menu = _t.first);
      }
    }, inputs: { userName: "userName" }, outputs: { action: "action" }, decls: 18, vars: 6, consts: [["topbarmenubutton", ""], ["topbarmenu", ""], ["menu", ""], [1, "layout-topbar"], [1, "layout-topbar-logo"], ["src", "assets/layout/images/kares-logo2.png", "alt", "Kares Logo", "height", "50", 1, "mr-0", "lg:mr-2"], [1, "p-link", "layout-topbar-menu-button", "layout-topbar-button", 3, "click"], [1, "pi", "pi-ellipsis-v"], [1, "layout-topbar-menu", 3, "ngClass"], [1, "welcome-label"], [1, "p-link", "layout-topbar-button", 3, "click"], [1, "pi", "pi-user"], ["appendTo", "body", 3, "popup", "model"]], template: function AppTopBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "a", 4);
        \u0275\u0275element(2, "img", 5);
        \u0275\u0275elementStart(3, "span");
        \u0275\u0275text(4, "Kares Investments");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "button", 6, 0);
        \u0275\u0275listener("click", function AppTopBarComponent_Template_button_click_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.layoutService.showProfileSidebar());
        });
        \u0275\u0275element(7, "i", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 8, 1)(10, "label", 9);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 10);
        \u0275\u0275listener("click", function AppTopBarComponent_Template_button_click_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          const menu_r2 = \u0275\u0275reference(17);
          return \u0275\u0275resetView(menu_r2.toggle($event));
        });
        \u0275\u0275element(13, "i", 11);
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15, "Profile");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(16, "p-menu", 12, 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c3, ctx.layoutService.state.profileSidebarVisible));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Welcome, ", ctx.userName, "");
        \u0275\u0275advance(5);
        \u0275\u0275property("popup", true)("model", ctx.items);
      }
    }, dependencies: [NgClass, Menu], styles: ["\n\n[_nghost-%COMP%]     ul {\n  padding-left: 0rem;\n}\n.welcome-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.p-menu-list[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n  padding-left: 0rem !important;\n}\n/*# sourceMappingURL=app.toolbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppTopBarComponent, { className: "AppTopBarComponent", filePath: "src\\app\\layout\\app.topbar.component.ts", lineNumber: 10 });
})();

// node_modules/ngx-spinner/fesm2022/ngx-spinner.mjs
var _c03 = ["overlay"];
var _c13 = ["*"];
function NgxSpinnerComponent_div_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function NgxSpinnerComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, NgxSpinnerComponent_div_0_div_2_div_1_Template, 1, 0, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.spinner.class);
    \u0275\u0275styleProp("color", ctx_r0.spinner.color);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.spinner.divArray);
  }
}
function NgxSpinnerComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.template), \u0275\u0275sanitizeHtml);
  }
}
function NgxSpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 0);
    \u0275\u0275template(2, NgxSpinnerComponent_div_0_div_2_Template, 2, 5, "div", 3)(3, NgxSpinnerComponent_div_0_div_3_Template, 2, 3, "div", 4);
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275projection(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r0.spinner.bdColor)("z-index", ctx_r0.spinner.zIndex)("position", ctx_r0.spinner.fullScreen ? "fixed" : "absolute");
    \u0275\u0275property("@.disabled", ctx_r0.disableAnimation)("@fadeIn", "in");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.template);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.template);
    \u0275\u0275advance();
    \u0275\u0275styleProp("z-index", ctx_r0.spinner.zIndex);
  }
}
var LOADERS = {
  "ball-8bits": 16,
  "ball-atom": 4,
  "ball-beat": 3,
  "ball-circus": 5,
  "ball-climbing-dot": 4,
  "ball-clip-rotate": 1,
  "ball-clip-rotate-multiple": 2,
  "ball-clip-rotate-pulse": 2,
  "ball-elastic-dots": 5,
  "ball-fall": 3,
  "ball-fussion": 4,
  "ball-grid-beat": 9,
  "ball-grid-pulse": 9,
  "ball-newton-cradle": 4,
  "ball-pulse": 3,
  "ball-pulse-rise": 5,
  "ball-pulse-sync": 3,
  "ball-rotate": 1,
  "ball-running-dots": 5,
  "ball-scale": 1,
  "ball-scale-multiple": 3,
  "ball-scale-pulse": 2,
  "ball-scale-ripple": 1,
  "ball-scale-ripple-multiple": 3,
  "ball-spin": 8,
  "ball-spin-clockwise": 8,
  "ball-spin-clockwise-fade": 8,
  "ball-spin-clockwise-fade-rotating": 8,
  "ball-spin-fade": 8,
  "ball-spin-fade-rotating": 8,
  "ball-spin-rotate": 2,
  "ball-square-clockwise-spin": 8,
  "ball-square-spin": 8,
  "ball-triangle-path": 3,
  "ball-zig-zag": 2,
  "ball-zig-zag-deflect": 2,
  cog: 1,
  "cube-transition": 2,
  fire: 3,
  "line-scale": 5,
  "line-scale-party": 5,
  "line-scale-pulse-out": 5,
  "line-scale-pulse-out-rapid": 5,
  "line-spin-clockwise-fade": 8,
  "line-spin-clockwise-fade-rotating": 8,
  "line-spin-fade": 8,
  "line-spin-fade-rotating": 8,
  pacman: 6,
  "square-jelly-box": 2,
  "square-loader": 1,
  "square-spin": 1,
  timer: 1,
  "triangle-skew-spin": 1
};
var DEFAULTS = {
  BD_COLOR: "rgba(51,51,51,0.8)",
  SPINNER_COLOR: "#fff",
  Z_INDEX: 99999
};
var PRIMARY_SPINNER = "primary";
var NgxSpinner = class _NgxSpinner {
  constructor(init) {
    Object.assign(this, init);
  }
  static create(init) {
    if (!init?.template && !init?.type) {
      console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`);
    }
    return new _NgxSpinner(init);
  }
};
var NgxSpinnerService = class _NgxSpinnerService {
  /**
   * Creates an instance of NgxSpinnerService.
   * @memberof NgxSpinnerService
   */
  constructor() {
    this.spinnerObservable = new BehaviorSubject(null);
  }
  /**
   * Get subscription of desired spinner
   * @memberof NgxSpinnerService
   **/
  getSpinner(name) {
    return this.spinnerObservable.asObservable().pipe(filter((x) => x && x.name === name));
  }
  /**
   * To show spinner
   *
   * @memberof NgxSpinnerService
   */
  show(name = PRIMARY_SPINNER, spinner) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (spinner && Object.keys(spinner).length) {
          spinner["name"] = name;
          this.spinnerObservable.next(new NgxSpinner(__spreadProps(__spreadValues({}, spinner), {
            show: true
          })));
          resolve(true);
        } else {
          this.spinnerObservable.next(new NgxSpinner({
            name,
            show: true
          }));
          resolve(true);
        }
      }, 10);
    });
  }
  /**
   * To hide spinner
   *
   * @memberof NgxSpinnerService
   */
  hide(name = PRIMARY_SPINNER, debounce = 10) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        this.spinnerObservable.next(new NgxSpinner({
          name,
          show: false
        }));
        resolve(true);
      }, debounce);
    });
  }
  static {
    this.\u0275fac = function NgxSpinnerService_Factory(t) {
      return new (t || _NgxSpinnerService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgxSpinnerService,
      factory: _NgxSpinnerService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NGX_SPINNER_CONFIG = new InjectionToken("NGX_SPINNER_CONFIG");
var SafeHtmlPipe = class _SafeHtmlPipe {
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
  }
  transform(v) {
    if (v) {
      return this._sanitizer.bypassSecurityTrustHtml(v);
    }
  }
  static {
    this.\u0275fac = function SafeHtmlPipe_Factory(t) {
      return new (t || _SafeHtmlPipe)(\u0275\u0275directiveInject(DomSanitizer, 16));
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
      name: "safeHtml",
      type: _SafeHtmlPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "safeHtml",
      standalone: true
    }]
  }], () => [{
    type: DomSanitizer
  }], null);
})();
var NgxSpinnerComponent = class _NgxSpinnerComponent {
  // TODO: https://github.com/Napster2210/ngx-spinner/issues/259
  // @HostListener("document:keydown", ["$event"])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   if (this.spinnerDOM && this.spinnerDOM.nativeElement) {
  //     if (
  //       this.fullScreen ||
  //       (!this.fullScreen && this.isSpinnerZone(event.target))
  //     ) {
  //       event.returnValue = false;
  //       event.preventDefault();
  //     }
  //   }
  // }
  /**
   * Creates an instance of NgxSpinnerComponent.
   *
   * @memberof NgxSpinnerComponent
   */
  constructor(spinnerService, changeDetector, elementRef, globalConfig) {
    this.spinnerService = spinnerService;
    this.changeDetector = changeDetector;
    this.elementRef = elementRef;
    this.globalConfig = globalConfig;
    this.disableAnimation = false;
    this.spinner = new NgxSpinner();
    this.ngUnsubscribe = new Subject();
    this.setDefaultOptions = () => {
      const {
        type
      } = this.globalConfig ?? {};
      this.spinner = NgxSpinner.create({
        name: this.name,
        bdColor: this.bdColor,
        size: this.size,
        color: this.color,
        type: this.type ?? type,
        fullScreen: this.fullScreen,
        divArray: this.divArray,
        divCount: this.divCount,
        show: this.show,
        zIndex: this.zIndex,
        template: this.template,
        showSpinner: this.showSpinner
      });
    };
    this.bdColor = DEFAULTS.BD_COLOR;
    this.zIndex = DEFAULTS.Z_INDEX;
    this.color = DEFAULTS.SPINNER_COLOR;
    this.size = "large";
    this.fullScreen = true;
    this.name = PRIMARY_SPINNER;
    this.template = null;
    this.showSpinner = false;
    this.divArray = [];
    this.divCount = 0;
    this.show = false;
  }
  initObservable() {
    this.spinnerService.getSpinner(this.name).pipe(takeUntil(this.ngUnsubscribe)).subscribe((spinner) => {
      this.setDefaultOptions();
      Object.assign(this.spinner, spinner);
      if (spinner.show) {
        this.onInputChange();
      }
      this.changeDetector.detectChanges();
    });
  }
  /**
   * Initialization method
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnInit() {
    this.setDefaultOptions();
    this.initObservable();
  }
  /**
   * To check event triggers inside the Spinner Zone
   *
   * @param {*} element
   * @returns {boolean}
   * @memberof NgxSpinnerComponent
   */
  isSpinnerZone(element) {
    if (element === this.elementRef.nativeElement.parentElement) {
      return true;
    }
    return element.parentNode && this.isSpinnerZone(element.parentNode);
  }
  /**
   * On changes event for input variables
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnChanges(changes) {
    for (const propName in changes) {
      if (propName) {
        const changedProp = changes[propName];
        if (changedProp.isFirstChange()) {
          return;
        } else if (typeof changedProp.currentValue !== "undefined" && changedProp.currentValue !== changedProp.previousValue) {
          if (changedProp.currentValue !== "") {
            this.spinner[propName] = changedProp.currentValue;
            if (propName === "showSpinner") {
              if (changedProp.currentValue) {
                this.spinnerService.show(this.spinner.name, this.spinner);
              } else {
                this.spinnerService.hide(this.spinner.name);
              }
            }
            if (propName === "name") {
              this.initObservable();
            }
          }
        }
      }
    }
  }
  /**
   * To get class for spinner
   *
   * @memberof NgxSpinnerComponent
   */
  getClass(type, size) {
    this.spinner.divCount = LOADERS[type];
    this.spinner.divArray = Array(this.spinner.divCount).fill(0).map((_, i) => i);
    let sizeClass = "";
    switch (size.toLowerCase()) {
      case "small":
        sizeClass = "la-sm";
        break;
      case "medium":
        sizeClass = "la-2x";
        break;
      case "large":
        sizeClass = "la-3x";
        break;
      default:
        break;
    }
    return "la-" + type + " " + sizeClass;
  }
  /**
   * Check if input variables have changed
   *
   * @memberof NgxSpinnerComponent
   */
  onInputChange() {
    this.spinner.class = this.getClass(this.spinner.type, this.spinner.size);
  }
  /**
   * Component destroy event
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static {
    this.\u0275fac = function NgxSpinnerComponent_Factory(t) {
      return new (t || _NgxSpinnerComponent)(\u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NGX_SPINNER_CONFIG, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxSpinnerComponent,
      selectors: [["ngx-spinner"]],
      viewQuery: function NgxSpinnerComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c03, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.spinnerDOM = _t.first);
        }
      },
      inputs: {
        bdColor: "bdColor",
        size: "size",
        color: "color",
        type: "type",
        fullScreen: "fullScreen",
        name: "name",
        zIndex: "zIndex",
        template: "template",
        showSpinner: "showSpinner",
        disableAnimation: "disableAnimation"
      },
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c13,
      decls: 1,
      vars: 1,
      consts: [["overlay", ""], ["class", "ngx-spinner-overlay", 3, "background-color", "z-index", "position", 4, "ngIf"], [1, "ngx-spinner-overlay"], [3, "class", "color", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [1, "loading-text"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]],
      template: function NgxSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275template(0, NgxSpinnerComponent_div_0_Template, 6, 12, "div", 1);
        }
        if (rf & 2) {
          \u0275\u0275property("ngIf", ctx.spinner.show);
        }
      },
      dependencies: [SafeHtmlPipe, NgIf, NgForOf],
      styles: [".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],
      data: {
        animation: [trigger("fadeIn", [state("in", style({
          opacity: 1
        })), transition(":enter", [style({
          opacity: 0
        }), animate(300)]), transition(":leave", animate(200, style({
          opacity: 0
        })))])]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerComponent, [{
    type: Component,
    args: [{
      imports: [SafeHtmlPipe, NgIf, NgForOf],
      standalone: true,
      selector: "ngx-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("fadeIn", [state("in", style({
        opacity: 1
      })), transition(":enter", [style({
        opacity: 0
      }), animate(300)]), transition(":leave", animate(200, style({
        opacity: 0
      })))])],
      template: `<div
  [@.disabled]="disableAnimation"
  [@fadeIn]="'in'"
  *ngIf="spinner.show"
  class="ngx-spinner-overlay"
  [style.background-color]="spinner.bdColor"
  [style.z-index]="spinner.zIndex"
  [style.position]="spinner.fullScreen ? 'fixed' : 'absolute'"
  #overlay
>
  <div *ngIf="!template" [class]="spinner.class" [style.color]="spinner.color">
    <div *ngFor="let index of spinner.divArray"></div>
  </div>
  <div *ngIf="template" [innerHTML]="template | safeHtml"></div>
  <div class="loading-text" [style.z-index]="spinner.zIndex">
    <ng-content></ng-content>
  </div>
</div>
`,
      styles: [".ngx-spinner-overlay{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}\n"]
    }]
  }], () => [{
    type: NgxSpinnerService
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_SPINNER_CONFIG]
    }]
  }], {
    bdColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    fullScreen: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    zIndex: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    showSpinner: [{
      type: Input
    }],
    disableAnimation: [{
      type: Input
    }],
    spinnerDOM: [{
      type: ViewChild,
      args: ["overlay"]
    }]
  });
})();
var NgxSpinnerModule = class _NgxSpinnerModule {
  static forRoot(config) {
    return {
      ngModule: _NgxSpinnerModule,
      providers: [{
        provide: NGX_SPINNER_CONFIG,
        useValue: config
      }]
    };
  }
  static {
    this.\u0275fac = function NgxSpinnerModule_Factory(t) {
      return new (t || _NgxSpinnerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgxSpinnerModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, NgxSpinnerComponent, SafeHtmlPipe],
      exports: [NgxSpinnerComponent]
    }]
  }], null, null);
})();

// src/app/layout/app.footer.component.ts
var AppFooterComponent = class _AppFooterComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.appTitle = "Kares Investments";
  }
  static {
    this.\u0275fac = function AppFooterComponent_Factory(t) {
      return new (t || _AppFooterComponent)(\u0275\u0275directiveInject(LayoutService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppFooterComponent, selectors: [["app-footer"]], decls: 3, vars: 2, consts: [[1, "layout-footer"], [1, "font-medium", "ml-2"]], template: function AppFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("\xA9 ", ctx.currentYear, " ", ctx.appTitle, ", Inc. All rights reserved.");
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppFooterComponent, { className: "AppFooterComponent", filePath: "src\\app\\layout\\app.footer.component.ts", lineNumber: 8 });
})();

// src/app/shared/change-password/change-password.component.ts
var _c04 = (a0) => ({ "invalid": a0 });
function ChangePasswordComponent_small_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required.");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_small_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password must be at least 8 characters.");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 14);
    \u0275\u0275template(1, ChangePasswordComponent_small_7_span_1_Template, 2, 0, "span", 15)(2, ChangePasswordComponent_small_7_span_2_Template, 2, 0, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const oldPasswordField_r2 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", oldPasswordField_r2.errors == null ? null : oldPasswordField_r2.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", oldPasswordField_r2.errors == null ? null : oldPasswordField_r2.errors["minlength"]);
  }
}
function ChangePasswordComponent_small_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required.");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_small_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password must be at least 8 characters.");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_small_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 14);
    \u0275\u0275template(1, ChangePasswordComponent_small_13_span_1_Template, 2, 0, "span", 15)(2, ChangePasswordComponent_small_13_span_2_Template, 2, 0, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const passwordField_r3 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordField_r3.errors == null ? null : passwordField_r3.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordField_r3.errors == null ? null : passwordField_r3.errors["minlength"]);
  }
}
function ChangePasswordComponent_small_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Passwords do not match.");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_small_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 14);
    \u0275\u0275template(1, ChangePasswordComponent_small_19_span_1_Template, 2, 0, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.passwordMismatch);
  }
}
var ChangePasswordComponent = class _ChangePasswordComponent {
  constructor(authStateService, userService, toastr) {
    this.authStateService = authStateService;
    this.userService = userService;
    this.toastr = toastr;
    this.password = "";
    this.oldPassword = "";
    this.confirmPassword = "";
    this.passwordMismatch = false;
    this.closeChangePasswordDialog = new EventEmitter();
    this.user = this.authStateService.getUser();
  }
  onSubmit() {
    if (this.password === this.confirmPassword) {
      const payload = {
        email: this.user?.email,
        currentPassword: this.oldPassword,
        newPassword: this.password
      };
      this.userService.changePassword(payload).subscribe({
        next: (response) => {
          console.log(response);
          this.toastr.success(response.message);
          this.closeChangePasswordDialog.emit(true);
        },
        error: (err) => {
          console.error("Password Change failed", err.error.errors["passwordChgError"][0]);
          this.toastr.error(err.error.errors["passwordChgError"][0]);
        }
      });
    } else {
      this.passwordMismatch = true;
    }
  }
  checkPasswordMatch() {
    this.passwordMismatch = this.password !== this.confirmPassword;
  }
  static {
    this.\u0275fac = function ChangePasswordComponent_Factory(t) {
      return new (t || _ChangePasswordComponent)(\u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePasswordComponent, selectors: [["app-password"]], outputs: { closeChangePasswordDialog: "closeChangePasswordDialog" }, decls: 21, vars: 13, consts: [["passwordForm", "ngForm"], ["oldPasswordField", "ngModel"], ["passwordField", "ngModel"], ["confirmPasswordField", "ngModel"], [3, "ngSubmit"], [1, "field"], ["for", "oldPassword"], ["id", "oldPassword", "name", "oldPassword", "required", "", "minlength", "8", 3, "ngModelChange", "ngModel", "feedback"], ["class", "text-danger", 4, "ngIf"], ["for", "password"], ["id", "password", "name", "password", "required", "", "minlength", "8", "toggleMask", "", 3, "ngModelChange", "ngModel", "feedback"], ["for", "confirmPassword"], ["id", "confirmPassword", "name", "confirmPassword", "required", "", "toggleMask", "", 3, "ngModelChange", "ngModel", "ngClass", "feedback"], ["pButton", "", "type", "submit", "label", "Submit", 3, "disabled"], [1, "text-danger"], [4, "ngIf"]], template: function ChangePasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "form", 4, 0);
        \u0275\u0275listener("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(2, "div", 5)(3, "label", 6);
        \u0275\u0275text(4, "Old Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p-password", 7, 1);
        \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordComponent_Template_p_password_ngModelChange_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.oldPassword, $event) || (ctx.oldPassword = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, ChangePasswordComponent_small_7_Template, 3, 2, "small", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5)(9, "label", 9);
        \u0275\u0275text(10, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p-password", 10, 2);
        \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordComponent_Template_p_password_ngModelChange_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function ChangePasswordComponent_Template_p_password_ngModelChange_11_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.checkPasswordMatch());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, ChangePasswordComponent_small_13_Template, 3, 2, "small", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 5)(15, "label", 11);
        \u0275\u0275text(16, "Confirm Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p-password", 12, 3);
        \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordComponent_Template_p_password_ngModelChange_17_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function ChangePasswordComponent_Template_p_password_ngModelChange_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.checkPasswordMatch());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, ChangePasswordComponent_small_19_Template, 2, 1, "small", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "button", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const passwordForm_r5 = \u0275\u0275reference(1);
        const oldPasswordField_r2 = \u0275\u0275reference(6);
        const passwordField_r3 = \u0275\u0275reference(12);
        const confirmPasswordField_r6 = \u0275\u0275reference(18);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.oldPassword);
        \u0275\u0275property("feedback", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", oldPasswordField_r2.invalid && oldPasswordField_r2.touched);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275property("feedback", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", passwordField_r3.invalid && passwordField_r3.touched);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.confirmPassword);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c04, ctx.passwordMismatch))("feedback", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", confirmPasswordField_r6.touched);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", passwordForm_r5.invalid || ctx.passwordMismatch);
      }
    }, dependencies: [NgClass, NgIf, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm, ButtonDirective, Password] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePasswordComponent, { className: "ChangePasswordComponent", filePath: "src\\app\\shared\\change-password\\change-password.component.ts", lineNumber: 14 });
})();

// src/app/shared/user-profile/user-profile.component.ts
function UserProfileComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "small");
    \u0275\u0275text(2, "First Name is required.");
    \u0275\u0275elementEnd()();
  }
}
function UserProfileComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "small");
    \u0275\u0275text(2, "Last Name is required.");
    \u0275\u0275elementEnd()();
  }
}
function UserProfileComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "small");
    \u0275\u0275text(2, "Date Of Birth is required.");
    \u0275\u0275elementEnd()();
  }
}
function UserProfileComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "small");
    \u0275\u0275text(2, "Mobile # is required and must be 10-digit number.");
    \u0275\u0275elementEnd()();
  }
}
function UserProfileComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "small");
    \u0275\u0275text(2, "Email is required & must be valid");
    \u0275\u0275elementEnd()();
  }
}
var UserProfileComponent = class _UserProfileComponent {
  constructor(authStateService, userService, toastr) {
    this.authStateService = authStateService;
    this.userService = userService;
    this.toastr = toastr;
    this.closeUserProfileDialog = new EventEmitter();
    this.userFromState = this.authStateService.getUser();
    this.isAdmin = false;
  }
  ngOnInit() {
    this.userService.getUserById(this.userFromState?.userId).subscribe({
      next: (response) => {
        this.userProfile = response;
        this.isAdmin = this.userProfile.isAdmin;
        this.userProfile.dateOfBirth = new Date(response.dateOfBirth);
      }
    });
  }
  // onSubmit(form: any) {
  //     if (this.password === this.confirmPassword) {
  //         console.log('Form Submitted:', form.value);
  //         let payload = {
  //             email: this.user?.email,
  //             password: this.password
  //         }
  //         this.userService.changePassword(payload).subscribe({
  //             next: (response) => {
  //                 console.log(response);
  //                 this.toastr.success(response.message);
  //                 this.showChangePasswordDialog.emit(false);
  //             },
  //             error: (err: HttpErrorResponse) => {
  //                 // Handle login error
  //                 console.error('Password Change failed', err.error.errors["passwordChgError"][0]);
  //                 // Show an error message to the user
  //                 this.toastr.error(err.error.errors["passwordChgError"][0]);
  //             }
  //         });
  //     } else {
  //         this.passwordMismatch = true;
  //     }
  // }
  updateDetails() {
    if (this.userFromState?.userId) {
      console.log("********Updating User***********", this.userProfile);
      this.userProfile.zipCode = this.userProfile.zipCode.toString();
      this.userProfile.createdBy = this.authStateService.getLoggedInUserEmailId() || "Admin";
      this.userProfile.isAdmin = this.userFromState.isAdmin;
      this.userProfile.remarks = this.userProfile.createdBy + " updated his profile.";
      this.userService.updateUser(this.userFromState.userId, this.userProfile).subscribe({
        next: (response) => {
          console.log(response);
          this.authStateService.updateUserName(response.firstName, response.lastName);
          this.toastr.success("Profile Updated");
          this.closeUserProfileDialog.emit(true);
        },
        error: (err) => {
          if (err.error.status == 404) {
            this.toastr.error("User not found. Please try after logout");
          } else {
            this.toastr.error("Something wrong. Please try again.");
          }
        }
      });
    }
  }
  closeProfileDialog() {
    this.closeUserProfileDialog.emit(true);
  }
  static {
    this.\u0275fac = function UserProfileComponent_Factory(t) {
      return new (t || _UserProfileComponent)(\u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfileComponent, selectors: [["app-user-profile"]], outputs: { closeUserProfileDialog: "closeUserProfileDialog" }, decls: 71, vars: 26, consts: [["userProfileForm", "ngForm"], ["fName", "ngModel"], ["lName", "ngModel"], ["dateOfBirth", "ngModel"], ["phoneNo", "ngModel"], ["email", "ngModel"], [3, "ngSubmit"], [1, "formgrid", "grid", "mb-2"], [1, "field", "col"], ["for", "firstName"], ["type", "text", "pInputText", "", "id", "firstName", "name", "firstName", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["class", "text-danger", 4, "ngIf"], ["for", "lastName"], ["type", "text", "pInputText", "", "id", "lastName", "name", "lastName", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["for", "dateOfBirth"], ["id", "dateOfBirth", "name", "dateOfBirth", "inputId", "buttondisplay", "required", "", "dateFormat", "dd/mm/yy", 3, "ngModelChange", "ngModel", "showIcon", "showOnFocus", "showTime", "disabled"], ["for", "phoneNo"], ["type", "text", "pInputText", "", "id", "phoneNo", "name", "phoneNo", "required", "", "pattern", "^\\d{10}$", 3, "ngModelChange", "ngModel"], ["for", "email"], ["type", "text", "email", "", "pInputText", "", "id", "email", "name", "email", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["for", "userName"], ["type", "text", "pInputText", "", "name", "userName", 3, "ngModel", "disabled"], ["for", "addressLine1"], ["type", "text", "pInputText", "", "id", "addressLine1", "name", "addressLine1", 3, "ngModelChange", "ngModel"], ["for", "addressLine2"], ["type", "text", "pInputText", "", "id", "addressLine2", "name", "addressLine2", 3, "ngModelChange", "ngModel"], ["for", "city"], ["type", "text", "pInputText", "", "id", "city", "name", "city", 3, "ngModelChange", "ngModel"], ["for", "state"], ["type", "text", "pInputText", "", "id", "state", "name", "state", 3, "ngModelChange", "ngModel"], ["for", "country"], ["type", "text", "pInputText", "", "id", "country", "name", "country", 3, "ngModelChange", "ngModel"], ["for", "zipCode"], ["id", "zipCode", "name", "zipCode", 3, "ngModelChange", "useGrouping", "ngModel"], ["pButton", "", "type", "submit", "label", "Update Profile"], ["pButton", "", "label", "Close", 1, "secondary", 3, "click"], [1, "text-danger"]], template: function UserProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "form", 6, 0);
        \u0275\u0275listener("ngSubmit", function UserProfileComponent_Template_form_ngSubmit_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateDetails());
        });
        \u0275\u0275elementStart(2, "div", 7)(3, "div", 8)(4, "label", 9);
        \u0275\u0275text(5, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "input", 10, 1);
        \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userProfile.firstName, $event) || (ctx.userProfile.firstName = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, UserProfileComponent_div_8_Template, 3, 0, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8)(10, "label", 12);
        \u0275\u0275text(11, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 13, 2);
        \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userProfile.lastName, $event) || (ctx.userProfile.lastName = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, UserProfileComponent_div_14_Template, 3, 0, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "label", 14);
        \u0275\u0275text(18, "Date Of Birth");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p-calendar", 15, 3);
        \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_p_calendar_ngModelChange_19_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userProfile.dateOfBirth, $event) || (ctx.userProfile.dateOfBirth = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, UserProfileComponent_div_21_Template, 3, 0, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 8)(23, "label", 16);
        \u0275\u0275text(24, "Mobile #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "input", 17, 4);
        \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userProfile.phoneNo, $event) || (ctx.userProfile.phoneNo = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, UserProfileComponent_div_27_Template, 3, 0, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 7)(29, "div", 8)(30, "label", 18);
        \u0275\u0275text(31, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "input", 19, 5);
        \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_32_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userProfile.email, $event) || (ctx.userProfile.email = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(34, UserProfileComponent_div_34_Template, 3, 0, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 8)(36, "label", 20);
        \u0275\u0275text(37, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "input", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 7)(40, "div", 8)(41, "label", 22);
        \u0275\u0275text(42, "Address Line 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "input", 23);
        \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_43_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userProfile.addressLine1, $event) || (ctx.userProfile.addressLine1 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 8)(45, "label", 24);
        \u0275\u0275text(46, "Address Line 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "input", 25);
        \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_47_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userProfile.addressLine2, $event) || (ctx.userProfile.addressLine2 = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 7)(49, "div", 8)(50, "label", 26);
        \u0275\u0275text(51, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "input", 27);
        \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_52_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userProfile.city, $event) || (ctx.userProfile.city = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 8)(54, "label", 28);
        \u0275\u0275text(55, "State");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "input", 29);
        \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_56_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userProfile.state, $event) || (ctx.userProfile.state = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "div", 7)(58, "div", 8)(59, "label", 30);
        \u0275\u0275text(60, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "input", 31);
        \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_61_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userProfile.country, $event) || (ctx.userProfile.country = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 8)(63, "label", 32);
        \u0275\u0275text(64, "Zip Code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "p-inputNumber", 33);
        \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_p_inputNumber_ngModelChange_65_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userProfile.zipCode, $event) || (ctx.userProfile.zipCode = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "div", 7)(67, "div", 8);
        \u0275\u0275element(68, "button", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div", 8)(70, "button", 35);
        \u0275\u0275listener("click", function UserProfileComponent_Template_button_click_70_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeProfileDialog());
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const fName_r2 = \u0275\u0275reference(7);
        const lName_r3 = \u0275\u0275reference(13);
        const dateOfBirth_r4 = \u0275\u0275reference(20);
        const phoneNo_r5 = \u0275\u0275reference(26);
        const email_r6 = \u0275\u0275reference(33);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.userProfile.firstName);
        \u0275\u0275property("disabled", !ctx.isAdmin);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", fName_r2.invalid && fName_r2.touched);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.userProfile.lastName);
        \u0275\u0275property("disabled", !ctx.isAdmin);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", lName_r3.invalid && lName_r3.touched);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.userProfile.dateOfBirth);
        \u0275\u0275property("showIcon", true)("showOnFocus", true)("showTime", false)("disabled", !ctx.isAdmin);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", dateOfBirth_r4.invalid && dateOfBirth_r4.touched);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.userProfile.phoneNo);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", phoneNo_r5.invalid && phoneNo_r5.touched);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.userProfile.email);
        \u0275\u0275property("disabled", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", email_r6.invalid && email_r6.touched);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.userProfile.userName)("disabled", true);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.userProfile.addressLine1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.userProfile.addressLine2);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.userProfile.city);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.userProfile.state);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.userProfile.country);
        \u0275\u0275advance(4);
        \u0275\u0275property("useGrouping", false);
        \u0275\u0275twoWayProperty("ngModel", ctx.userProfile.zipCode);
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, PatternValidator, EmailValidator, NgModel, NgForm, Calendar, ButtonDirective, InputNumber, InputText] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfileComponent, { className: "UserProfileComponent", filePath: "src\\app\\shared\\user-profile\\user-profile.component.ts", lineNumber: 14 });
})();

// src/app/layout/app.layout.component.ts
var _c05 = () => ({ width: "550px" });
function AppLayoutComponent_ng_template_8_small_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 12)(1, "p", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.passwordNote);
  }
}
function AppLayoutComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, AppLayoutComponent_ng_template_8_small_0_Template, 3, 1, "small", 10);
    \u0275\u0275elementStart(1, "app-password", 11);
    \u0275\u0275listener("closeChangePasswordDialog", function AppLayoutComponent_ng_template_8_Template_app_password_closeChangePasswordDialog_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeChangePasswordDialogHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !(ctx_r1.user == null ? null : ctx_r1.user.defaultPasswordChanged));
  }
}
function AppLayoutComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-user-profile", 14);
    \u0275\u0275listener("closeUserProfileDialog", function AppLayoutComponent_ng_template_10_Template_app_user_profile_closeUserProfileDialog_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserProfileDialogHandler($event));
    });
    \u0275\u0275elementEnd();
  }
}
var AppLayoutComponent = class _AppLayoutComponent {
  constructor(layoutService, renderer, router, toastr, authStateService) {
    this.layoutService = layoutService;
    this.renderer = renderer;
    this.router = router;
    this.toastr = toastr;
    this.authStateService = authStateService;
    this.user = this.authStateService.getUser();
    this.showChangePasswordDialog = false;
    this.showUserProfileDialog = false;
    this.passwordNote = "Note: Your default password is currently in use. We recommend changing it immediately.";
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen("document", "click", (event) => {
          const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target) || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));
          if (isOutsideClicked) {
            this.hideMenu();
          }
        });
      }
      if (!this.profileMenuOutsideClickListener) {
        this.profileMenuOutsideClickListener = this.renderer.listen("document", "click", (event) => {
          const isOutsideClicked = !(this.appTopbar.menu.nativeElement.isSameNode(event.target) || this.appTopbar.menu.nativeElement.contains(event.target) || this.appTopbar.topbarMenuButton.nativeElement.isSameNode(event.target) || this.appTopbar.topbarMenuButton.nativeElement.contains(event.target));
          if (isOutsideClicked) {
            this.hideProfileMenu();
          }
        });
      }
      if (this.layoutService.state.staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.hideMenu();
      this.hideProfileMenu();
    });
    this.loggedInUserName = this.user?.lastName + " " + this.user?.firstName;
    if (!this.user?.defaultPasswordChanged) {
      this.showChangePasswordDialog = true;
    }
  }
  hideMenu() {
    this.layoutService.state.overlayMenuActive = false;
    this.layoutService.state.staticMenuMobileActive = false;
    this.layoutService.state.menuHoverActive = false;
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }
  hideProfileMenu() {
    this.layoutService.state.profileSidebarVisible = false;
    if (this.profileMenuOutsideClickListener) {
      this.profileMenuOutsideClickListener();
      this.profileMenuOutsideClickListener = null;
    }
  }
  blockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.add("blocked-scroll");
    } else {
      document.body.className += " blocked-scroll";
    }
  }
  unblockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.remove("blocked-scroll");
    } else {
      document.body.className = document.body.className.replace(new RegExp("(^|\\b)" + "blocked-scroll".split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  get containerClass() {
    return {
      "layout-theme-light": this.layoutService.config().colorScheme === "light",
      "layout-theme-dark": this.layoutService.config().colorScheme === "dark",
      "layout-overlay": this.layoutService.config().menuMode === "overlay",
      "layout-static": this.layoutService.config().menuMode === "static",
      "layout-static-inactive": this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config().menuMode === "static",
      "layout-overlay-active": this.layoutService.state.overlayMenuActive,
      "layout-mobile-active": this.layoutService.state.staticMenuMobileActive,
      "p-input-filled": this.layoutService.config().inputStyle === "filled",
      "p-ripple-disabled": !this.layoutService.config().ripple
    };
  }
  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
  topMenuActionListener(action) {
    if (action === "logOut") {
      this.toastr.success("Logout Success");
      this.authStateService.logout();
      this.router.navigate(["/"]);
    } else if (action === "changePassword") {
      this.showChangePasswordDialog = true;
    } else if (action === "showProfile") {
      this.showUserProfileDialog = true;
    }
  }
  closeChangePasswordDialogHandler(evt) {
    this.showChangePasswordDialog = !evt;
  }
  closeUserProfileDialogHandler(evt) {
    this.showUserProfileDialog = !evt;
  }
  static {
    this.\u0275fac = function AppLayoutComponent_Factory(t) {
      return new (t || _AppLayoutComponent)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(AuthStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppLayoutComponent, selectors: [["app-layout"]], viewQuery: function AppLayoutComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(AppSidebarComponent, 5);
        \u0275\u0275viewQuery(AppTopBarComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appSidebar = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appTopbar = _t.first);
      }
    }, decls: 14, vars: 13, consts: [[1, "layout-wrapper", 3, "ngClass"], [3, "action", "userName"], [1, "layout-main-container"], [1, "layout-main"], [1, "layout-mask"], ["header", "Change Password", "styleClass", "p-fluid", 3, "visibleChange", "visible", "modal"], ["pTemplate", "content"], ["header", "My Profile", "styleClass", "p-fluid", 3, "visibleChange", "visible", "modal"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "timer", 3, "fullScreen"], [2, "color", "white"], ["id", "username-help", 4, "ngIf"], [3, "closeChangePasswordDialog"], ["id", "username-help"], [1, "password-note"], [3, "closeUserProfileDialog"]], template: function AppLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "app-topbar", 1);
        \u0275\u0275listener("action", function AppLayoutComponent_Template_app_topbar_action_1_listener($event) {
          return ctx.topMenuActionListener($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "app-footer");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 4);
        \u0275\u0275elementStart(7, "p-dialog", 5);
        \u0275\u0275twoWayListener("visibleChange", function AppLayoutComponent_Template_p_dialog_visibleChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.showChangePasswordDialog, $event) || (ctx.showChangePasswordDialog = $event);
          return $event;
        });
        \u0275\u0275template(8, AppLayoutComponent_ng_template_8_Template, 2, 1, "ng-template", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p-dialog", 7);
        \u0275\u0275twoWayListener("visibleChange", function AppLayoutComponent_Template_p_dialog_visibleChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.showUserProfileDialog, $event) || (ctx.showUserProfileDialog = $event);
          return $event;
        });
        \u0275\u0275template(10, AppLayoutComponent_ng_template_10_Template, 1, 0, "ng-template", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "ngx-spinner", 8)(12, "p", 9);
        \u0275\u0275text(13, " Loading... ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.containerClass);
        \u0275\u0275advance();
        \u0275\u0275property("userName", ctx.loggedInUserName);
        \u0275\u0275advance(6);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(11, _c05));
        \u0275\u0275twoWayProperty("visible", ctx.showChangePasswordDialog);
        \u0275\u0275property("modal", true);
        \u0275\u0275advance(2);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(12, _c05));
        \u0275\u0275twoWayProperty("visible", ctx.showUserProfileDialog);
        \u0275\u0275property("modal", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("fullScreen", true);
      }
    }, dependencies: [NgClass, NgIf, RouterOutlet, PrimeTemplate, Dialog, NgxSpinnerComponent, AppTopBarComponent, AppFooterComponent, ChangePasswordComponent, UserProfileComponent], styles: ["\n\n.password-note[_ngcontent-%COMP%] {\n  color: cornflowerblue;\n  margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=app.layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppLayoutComponent, { className: "AppLayoutComponent", filePath: "src\\app\\layout\\app.layout.component.ts", lineNumber: 16 });
})();

// node_modules/jwt-decode/build/esm/index.js
var InvalidTokenError = class extends Error {
};
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
    let code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = "0" + code;
    }
    return "%" + code;
  }));
}
function base64UrlDecode(str) {
  let output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
}
function jwtDecode(token, options) {
  if (typeof token !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  options || (options = {});
  const pos = options.header === true ? 0 : 1;
  const part = token.split(".")[pos];
  if (typeof part !== "string") {
    throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
  }
  let decoded;
  try {
    decoded = base64UrlDecode(part);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
  }
  try {
    return JSON.parse(decoded);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
  }
}

// src/app/guards/auth-guard.ts
var authGuard = (route, state2) => {
  const router = inject(Router);
  const cookieService = inject(CookieService);
  const authStateService = inject(AuthStateService);
  const user = authStateService.getUser();
  let token = cookieService.get("Authorization");
  if (token && user) {
    token = token.replace("Bearer ", "");
    const decodedToken = jwtDecode(token);
    if (!decodedToken || isTokenExpired(decodedToken.exp)) {
      router.createUrlTree(["/login"]);
      return false;
    } else {
      if (user.isAdmin && state2.url !== "/dashboard/admin") {
        router.navigate(["/dashboard/admin"]);
        return false;
      } else if (!user.isAdmin && state2.url !== "/dashboard/user") {
        router.navigate(["/dashboard/user"]);
        return false;
      }
    }
    return true;
  } else {
    authStateService.logout();
    router.createUrlTree(["/login"]);
    return false;
  }
};
function isTokenExpired(expiration) {
  const currentTime = Math.floor(Date.now() / 1e3);
  return expiration < currentTime;
}

// src/app/forgot-password/forgot-password.component.ts
var _c06 = () => ["/login"];
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(loginService, router, toastr) {
    this.loginService = loginService;
    this.router = router;
    this.toastr = toastr;
    this.email = "";
  }
  resetPassword() {
    if (this.email) {
      this.loginService.resetPassword(this.email).subscribe({
        next: (response) => {
          console.log(response);
          this.toastr.success("Please check your email", "Password Reset Success");
          this.router.navigate(["/login"]);
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
  }
  static {
    this.\u0275fac = function ForgotPasswordComponent_Factory(t) {
      return new (t || _ForgotPasswordComponent)(\u0275\u0275directiveInject(LoginService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 19, vars: 3, consts: [[1, "forgot-password-container"], [1, "forgot-password-wrapper"], [1, "forgot-password-card-wrapper"], [1, "forgot-password-card"], [1, "card-title"], [1, "instruction-text"], [1, "form-group"], ["for", "email1", 1, "form-label"], [1, "input-container"], [1, "pi", "pi-envelope", "input-icon"], ["id", "email1", "type", "email", "placeholder", "Enter your email", "pInputText", "", 3, "ngModelChange", "ngModel"], ["pButton", "", "label", "Send Reset Link", 1, "reset-button", 3, "click"], [1, "back-to-login"], [1, "pi", "pi-arrow-left", "back-icon"], [1, "back-link", 3, "routerLink"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        \u0275\u0275text(5, "Reset Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, " Enter your email address and we'll send you instructions to reset your password. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "label", 7);
        \u0275\u0275text(10, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275element(12, "i", 9);
        \u0275\u0275elementStart(13, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "button", 11);
        \u0275\u0275listener("click", function ForgotPasswordComponent_Template_button_click_14_listener() {
          return ctx.resetPassword();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 12);
        \u0275\u0275element(16, "i", 13);
        \u0275\u0275elementStart(17, "a", 14);
        \u0275\u0275text(18, "Back to Sign In");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c06));
      }
    }, dependencies: [RouterLink, DefaultValueAccessor, NgControlStatus, NgModel, ButtonDirective, InputText], styles: ['\n\n.forgot-password-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #e4e8eb 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .forgot-password-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  justify-content: center;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .forgot-password-card-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);\n  border-radius: 16px;\n  overflow: hidden;\n  position: relative;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .forgot-password-card-wrapper[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-color) 0%,\n      var(--primary-color-dark, #0d47a1) 100%);\n}\n.forgot-password-container[_ngcontent-%COMP%]   .forgot-password-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 2.5rem;\n  border-radius: 16px;\n  width: 100%;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 2rem;\n  justify-content: center;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .logo-placeholder[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: var(--primary-color);\n  border-radius: 8px;\n  margin-right: 12px;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--text-color);\n  margin: 0;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--text-color-secondary);\n  margin-bottom: 0.75rem;\n  text-align: center;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .instruction-text[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 1rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  opacity: 0.8;\n  line-height: 1.5;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: var(--text-color);\n  font-size: 0.95rem;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-color-secondary);\n  opacity: 0.7;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1rem 1rem 2.75rem;\n  border-radius: 8px;\n  border: 1px solid var(--surface-border, #ced4da);\n  background-color: #ffffff;\n  color: var(--text-color, #333333);\n  transition: all 0.3s ease;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);\n  background-color: #ffffff;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-color-secondary, #6c757d);\n  opacity: 0.6;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .reset-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  font-size: 1rem;\n  font-weight: 600;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-color) 0%,\n      var(--primary-color-dark, #0d47a1) 100%);\n  border: none;\n  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);\n  transition: all 0.3s ease;\n  margin-bottom: 1.5rem;\n  color: #ffffff;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .reset-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 16px rgba(33, 150, 243, 0.4);\n  transform: translateY(-1px);\n}\n.forgot-password-container[_ngcontent-%COMP%]   .back-to-login[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .back-to-login[_ngcontent-%COMP%]   .back-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin-right: 0.5rem;\n  color: var(--primary-color);\n}\n.forgot-password-container[_ngcontent-%COMP%]   .back-to-login[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 500;\n  text-decoration: none;\n  font-size: 0.95rem;\n  transition: all 0.2s;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .back-to-login[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media screen and (max-width: 576px) {\n  .forgot-password-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .forgot-password-container[_ngcontent-%COMP%]   .forgot-password-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=forgot-password.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src\\app\\forgot-password\\forgot-password.component.ts", lineNumber: 12 });
})();

// src/app/landing2/landing2.component.ts
var _c07 = () => ({ exact: true });
var Landing2Component = class _Landing2Component {
  static {
    this.\u0275fac = function Landing2Component_Factory(t) {
      return new (t || _Landing2Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Landing2Component, selectors: [["app-main-layout"]], decls: 38, vars: 2, consts: [[1, "app-container", "d-flex", "flex-column", "min-vh-100"], [1, "navbar", "navbar-expand-lg", "navbar-premium"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["src", "assets/layout/images/kares-logo2.png", "alt", "KARES Investments Logo", 1, "navbar-logo"], [1, "brand-text"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "pi", "pi-bars"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link"], [1, "navbar-auth-buttons"], ["pButton", "", "pRipple", "", "type", "button", "routerLink", "/login", 1, "p-button-outlined", "p-button-secondary", "signin-btn"], [1, "pi", "pi-sign-in", "me-2"], ["pButton", "", "pRipple", "", "type", "button", "routerLink", "/register", 1, "p-button-raised", "p-button-secondary", "ms-2", "register-btn"], [1, "pi", "pi-user-plus", "me-2"], [1, "flex-grow-1"], [1, "footer-premium"], [1, "footer-bottom"], [1, "d-flex", "flex-column", "flex-md-row", "justify-content-between", "align-items-center"], [1, "mb-2", "mb-md-0"]], template: function Landing2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementStart(5, "span", 5);
        \u0275\u0275text(6, "KARES Investments");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 6);
        \u0275\u0275element(8, "i", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8)(10, "ul", 9)(11, "li", 10)(12, "a", 11)(13, "span");
        \u0275\u0275text(14, "Home");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "li", 10)(16, "a", 12)(17, "span");
        \u0275\u0275text(18, "About Us");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "li", 10)(20, "a", 13)(21, "span");
        \u0275\u0275text(22, "Contact");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 14)(24, "button", 15);
        \u0275\u0275element(25, "i", 16);
        \u0275\u0275text(26, "Sign In ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 17);
        \u0275\u0275element(28, "i", 18);
        \u0275\u0275text(29, "Register ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(30, "div", 19);
        \u0275\u0275element(31, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "footer", 20)(33, "div", 21)(34, "div", 2)(35, "div", 22)(36, "p", 23);
        \u0275\u0275text(37, " \xA9 2025 KARES Investments. All rights reserved. ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(1, _c07));
      }
    }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive, ButtonDirective, Ripple], styles: [`@charset "UTF-8";



[_ngcontent-%COMP%]:root {
  --navbar-height: 80px;
  --primary-color: rgb(41, 98, 255);
  --primary-dark: rgb(25, 70, 200);
  --secondary-color: rgb(255, 136, 77);
  --secondary-dark: rgb(230, 110, 50);
  --text-color: #2c3e50;
  --text-color-secondary: #677284;
  --surface-overlay: #ffffff;
  --surface-section: #f8f9fa;
}
.navbar-premium[_ngcontent-%COMP%] {
  height: var(--navbar-height);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 0.65rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}
.navbar-premium.navbar-scrolled[_ngcontent-%COMP%] {
  height: 70px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
}
.navbar-premium[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 0;
}
.navbar-premium[_ngcontent-%COMP%]   .navbar-logo[_ngcontent-%COMP%] {
  height: 40px;
  margin-right: 12px;
  transition: all 0.3s ease;
}
.navbar-premium[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  background:
    linear-gradient(
      135deg,
      var(--primary-dark),
      var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.navbar-premium[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: rgba(var(--primary-color), 0.1);
}
.navbar-premium[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {
  box-shadow: none;
  outline: none;
}
.navbar-premium[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  color: var(--primary-color);
}
.navbar-premium[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {
  transition: all 0.3s ease;
}
.navbar-premium[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {
  margin-left: 1.5rem;
}
.navbar-premium[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {
  position: relative;
  margin: 0 0.25rem;
}
.navbar-premium[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {
  font-weight: 500;
  padding: 0.75rem 1rem;
  position: relative;
  transition: all 0.3s ease;
}
.navbar-premium[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  position: relative;
}
.navbar-premium[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background:
    linear-gradient(
      90deg,
      var(--primary-color),
      var(--primary-dark));
  transition: width 0.3s ease;
  border-radius: 2px;
}
.navbar-premium[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar-premium[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {
  color: var(--primary-color);
}
.navbar-premium[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::after, .navbar-premium[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {
  width: 100%;
}
.navbar-premium[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
  border: none;
  border-radius: 12px;
  background: white;
  padding: 0.75rem 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  min-width: 220px;
}
.navbar-premium[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {
  padding: 0.6rem 1.5rem;
  font-weight: 500;
  color: var(--text-color);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
}
.navbar-premium[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, .navbar-premium[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus {
  background-color: rgba(41, 98, 255, 0.07);
  color: var(--primary-color);
}
.navbar-premium[_ngcontent-%COMP%]   .dropdown-divider[_ngcontent-%COMP%] {
  margin: 0.5rem 0;
  opacity: 0.15;
}
.navbar-premium[_ngcontent-%COMP%]   .navbar-auth-buttons[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
.navbar-premium[_ngcontent-%COMP%]   .signin-btn[_ngcontent-%COMP%] {
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 8px;
  font-weight: 600;
}
.navbar-premium[_ngcontent-%COMP%]   .signin-btn[_ngcontent-%COMP%]:hover {
  background-color: rgba(41, 98, 255, 0.1);
}
.navbar-premium[_ngcontent-%COMP%]   .register-btn[_ngcontent-%COMP%] {
  border-radius: 8px;
  background:
    linear-gradient(
      90deg,
      var(--primary-color),
      var(--primary-dark));
  border: none;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(41, 98, 255, 0.3);
  transition: all 0.3s ease;
}
.navbar-premium[_ngcontent-%COMP%]   .register-btn[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(41, 98, 255, 0.4);
}
.footer-premium[_ngcontent-%COMP%] {
  background-color: #f8f9fa;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      var(--surface-overlay) 0%,
      var(--surface-section) 100%);
  padding: 5rem 0 3rem;
  box-shadow: 0 -5px 30px rgba(0, 0, 0, 0.05);
  position: relative;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 1;
  z-index: 0;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {
  height: 45px;
  margin-right: 1rem;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-weight: 700;
  margin: 0;
  color: var(--text-color);
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-description[_ngcontent-%COMP%] {
  font-size: 1rem;
  color: var(--text-color-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  max-width: 350px;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #f8f9fa;
  color: var(--text-color-secondary);
  transition: all 0.3s ease;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]:hover {
  background:
    linear-gradient(
      135deg,
      var(--primary-color) 0%,
      var(--primary-dark) 100%);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(var(--primary-color-rgb), 0.3);
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-heading[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  position: relative;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-heading[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 3px;
  bottom: 0;
  left: 0;
  background:
    linear-gradient(
      90deg,
      var(--primary-color) 0%,
      var(--primary-dark) 100%);
  border-radius: 3px;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  margin-bottom: 0.75rem;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: var(--text-color-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;
  position: relative;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {
  content: "\\2192";
  position: absolute;
  left: -20px;
  opacity: 0;
  transition: all 0.2s ease;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: var(--primary-color);
  transform: translateX(20px);
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {
  opacity: 1;
  left: -15px;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-newsletter-text[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  color: var(--text-color-secondary);
  margin-bottom: 1rem;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   .p-inputgroup[_ngcontent-%COMP%] {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   .p-inputgroup[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {
  border-radius: 8px 0 0 8px;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  flex: 1;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   .p-inputgroup[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {
  border-radius: 0 8px 8px 0 !important;
  background:
    linear-gradient(
      90deg,
      var(--primary-color) 0%,
      var(--primary-dark) 100%);
  border: none;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-certifications[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-certifications[_ngcontent-%COMP%]   .certification-badge[_ngcontent-%COMP%] {
  height: 40px;
  opacity: 0.8;
  transition: all 0.3s ease;
}
.footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%]   .footer-certifications[_ngcontent-%COMP%]   .certification-badge[_ngcontent-%COMP%]:hover {
  opacity: 1;
  transform: scale(1.05);
}
.footer-premium[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {
  background-color: var(--surface-overlay);
  padding: 1.5rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
.footer-premium[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--text-color-secondary);
  font-size: 0.9rem;
}
.footer-premium[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-bottom-links[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
.footer-premium[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: var(--text-color-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}
.footer-premium[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: var(--primary-color);
}
.footer-premium[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-bottom-links[_ngcontent-%COMP%]   .footer-divider[_ngcontent-%COMP%] {
  color: rgba(0, 0, 0, 0.15);
  margin: 0 0.75rem;
}
@media (max-width: 992px) {
  .navbar-premium[_ngcontent-%COMP%] {
    height: auto;
    padding: 1rem 0;
  }
  .navbar-premium[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .navbar-logo[_ngcontent-%COMP%] {
    height: 36px;
  }
  .navbar-premium[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {
    font-size: 1.3rem;
  }
  .navbar-premium[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {
    margin-left: 0;
    padding: 1rem 0;
  }
  .navbar-premium[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {
    margin: 0;
  }
  .navbar-premium[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {
    padding: 0.75rem 0;
  }
  .navbar-premium[_ngcontent-%COMP%]   .navbar-auth-buttons[_ngcontent-%COMP%] {
    flex-wrap: wrap;
    width: 100%;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 0.5rem;
  }
  .navbar-premium[_ngcontent-%COMP%]   .navbar-auth-buttons[_ngcontent-%COMP%]   .signin-btn[_ngcontent-%COMP%], .navbar-premium[_ngcontent-%COMP%]   .navbar-auth-buttons[_ngcontent-%COMP%]   .register-btn[_ngcontent-%COMP%] {
    width: 100%;
    margin: 0.5rem 0;
  }
  .navbar-premium[_ngcontent-%COMP%]   .navbar-auth-buttons[_ngcontent-%COMP%]   .register-btn[_ngcontent-%COMP%] {
    margin-left: 0 !important;
  }
  .footer-premium[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%] {
    padding: 3rem 0 2rem;
  }
  .footer-premium[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
  .footer-premium[_ngcontent-%COMP%]   .footer-heading[_ngcontent-%COMP%] {
    margin-top: 2rem;
  }
}
@media (max-width: 768px) {
  .navbar-premium[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {
    font-size: 1.2rem;
  }
  .footer-premium[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {
    text-align: center;
  }
  .footer-premium[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
  .footer-premium[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-bottom-links[_ngcontent-%COMP%] {
    justify-content: center;
  }
}
@media (max-width: 576px) {
  .navbar-premium[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .navbar-logo[_ngcontent-%COMP%] {
    height: 32px;
  }
  .navbar-premium[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {
    font-size: 1.1rem;
  }
}
/*# sourceMappingURL=landing2.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Landing2Component, { className: "Landing2Component", filePath: "src\\app\\landing2\\landing2.component.ts", lineNumber: 8 });
})();

// src/app/layout/service/theme.service.ts
var ThemeService = class _ThemeService {
  constructor(rendererFactory) {
    this.darkMode = new BehaviorSubject(this.getInitialThemePreference());
    this.isDarkMode$ = this.darkMode.asObservable();
    this.currentThemeLink = null;
    this.renderer = rendererFactory.createRenderer(null, null);
    this.applyTheme(this.darkMode.value);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("theme-preference")) {
        const isDark = e.matches;
        this.darkMode.next(isDark);
        this.applyTheme(isDark);
      }
    });
  }
  getInitialThemePreference() {
    const savedPreference = localStorage.getItem("theme-preference");
    if (savedPreference) {
      return savedPreference === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  toggleTheme() {
    const newValue = !this.darkMode.value;
    this.darkMode.next(newValue);
    localStorage.setItem("theme-preference", newValue ? "dark" : "light");
    this.applyTheme(newValue);
  }
  applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.remove("light-theme");
      this.switchPrimeNGTheme("bootstrap4-dark-blue");
    } else {
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark-theme");
      this.switchPrimeNGTheme("lara-light-indigo");
    }
  }
  switchPrimeNGTheme(newTheme) {
    if (this.currentThemeLink) {
      this.renderer.removeChild(document.head, this.currentThemeLink);
      this.currentThemeLink = null;
    }
    const themeLink = this.renderer.createElement("link");
    this.renderer.setAttribute(themeLink, "rel", "stylesheet");
    this.renderer.setAttribute(themeLink, "type", "text/css");
    this.renderer.setAttribute(themeLink, "href", `node_modules/primeng/resources/themes/${newTheme}/theme.css`);
    this.renderer.appendChild(document.head, themeLink);
    this.currentThemeLink = themeLink;
  }
  static {
    this.\u0275fac = function ThemeService_Factory(t) {
      return new (t || _ThemeService)(\u0275\u0275inject(RendererFactory2));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};

// src/app/landing2/home2/home2.component.ts
var Home2Component = class _Home2Component {
  constructor(themeService) {
    this.themeService = themeService;
    this.isDarkMode = false;
    this.features = [
      {
        icon: "handshake",
        title: "Personalized Service",
        description: "At KARES Investments, we take the time to understand your financial aspirations, risk tolerance, and personal circumstances. Our expert advisors craft personalized strategies tailored to your unique financial journey, ensuring that every decision aligns with your long-term goals.",
        animation: "fade-right"
      },
      {
        icon: "trophy",
        title: "Commitment to Excellence",
        description: "We are dedicated to providing top-tier financial services that deliver consistent results. Our commitment to excellence drives us to continuously refine our strategies, ensuring that you receive the best investment opportunities and wealth management solutions.",
        animation: "fade-up"
      },
      {
        icon: "users",
        title: "Client-Centric Approach",
        description: "Your success is our top priority. We foster long-term relationships built on trust, transparency, and proactive financial planning, ensuring that your financial strategies evolve alongside your life\u2019s changing needs.",
        animation: "fade-up"
      },
      {
        icon: "rocket",
        title: "Innovative Solutions",
        description: "We leverage cutting-edge financial tools and industry insights to provide innovative solutions that maximize returns while minimizing risk. Our forward-thinking approach ensures that your investments stay ahead in an ever-changing financial landscape.",
        animation: "fade-left"
      }
    ];
    this.stats = [
      { value: "95%", label: "Client Satisfaction" },
      { value: "$2.5B+", label: "Assets Managed" },
      { value: "15+", label: "Years Experience" },
      { value: "24/7", label: "Support Available" }
    ];
  }
  ngOnInit() {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }
  static {
    this.\u0275fac = function Home2Component_Factory(t) {
      return new (t || _Home2Component)(\u0275\u0275directiveInject(ThemeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home2Component, selectors: [["app-home"]], decls: 42, vars: 3, consts: [[1, "hero-section"], [1, "hero-content"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "hero-text"], ["pAnimateOnScroll", "", "animateClass", "animate__fadeInDown", 1, "badge-container"], [1, "hero-badge"], ["pAnimateOnScroll", "", "animateClass", "animate__fadeInLeft", 1, "hero-title"], ["pAnimateOnScroll", "", "animateClass", "animate__fadeInLeft", 1, "hero-subtitle"], ["pAnimateOnScroll", "", "animateClass", "animate__fadeInUp", 1, "hero-features"], [1, "hero-feature"], [1, "feature-icon"], ["name", "shield-check", 3, "size"], ["name", "trending-up", 3, "size"], ["name", "users", 3, "size"], ["pAnimateOnScroll", "", "animateClass", "animate__fadeInUp", 1, "hero-buttons"], ["pButton", "", "pRipple", "", "label", "Begin Your Journey", "icon", "pi pi-arrow-right", "iconPos", "right", "routerLink", "/register", 1, "p-button-lg", "p-button-raised"], ["pButton", "", "pRipple", "", "label", "Learn More", "routerLink", "/about", 1, "p-button-outlined", "p-button-lg"], ["pAnimateOnScroll", "", "animateClass", "animate__fadeInRight", 1, "col-lg-6", "hero-image-container"], [1, "hero-dashboard"], ["src", "../../../assets/layout/images/KARES_PIC1.png", "alt", "About Kares Investments", 1, "img-fluid", "about-main-image"], [1, "secure-section"], ["pAnimateOnScroll", "", "animateClass", "animate__zoomIn", 1, "secure-content", "text-center"], ["pButton", "", "pRipple", "", "label", "SCHEDULE A FREE CONSULTATION", "routerLink", "/register", 1, "p-button-lg", "mt-3", "p", "get-started"]], template: function Home2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6);
        \u0275\u0275text(7, "Trusted by 10,000+ Investors");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "h1", 7);
        \u0275\u0275text(9, " Invest in Your Future with Confidence ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275text(11, " Secure, seamless, and innovative financial solutions tailored to your goals. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "span", 11);
        \u0275\u0275element(15, "lucide-icon", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span");
        \u0275\u0275text(17, "Security Guaranteed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 10)(19, "span", 11);
        \u0275\u0275element(20, "lucide-icon", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span");
        \u0275\u0275text(22, "High Return Potential");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 10)(24, "span", 11);
        \u0275\u0275element(25, "lucide-icon", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span");
        \u0275\u0275text(27, "Expert Advisory");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 15);
        \u0275\u0275element(29, "button", 16)(30, "button", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 18)(32, "div", 19);
        \u0275\u0275element(33, "img", 20);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(34, "section", 21)(35, "div", 2)(36, "div", 22)(37, "h2");
        \u0275\u0275text(38, "Secure Your Financial Future with Personalized Strategies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p");
        \u0275\u0275text(40, " KARES Investments: Your premier partner in financial services, dedicated to generating regular income and achieving your unique goals through tailored advice. ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "button", 23);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275property("size", 16);
        \u0275\u0275advance(5);
        \u0275\u0275property("size", 16);
        \u0275\u0275advance(5);
        \u0275\u0275property("size", 16);
      }
    }, dependencies: [RouterLink, ButtonDirective, Ripple, LucideAngularComponent], styles: [`

.hero-section[_ngcontent-%COMP%] {
  position: relative;
  background:
    linear-gradient(
      135deg,
      #1e293b 0%,
      #334155 100%);
  color: white;
  padding: 7rem 0 7rem;
  overflow: hidden;
  margin-top: 60px;
}
.hero-section[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.1;
}
.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
}
.hero-section[_ngcontent-%COMP%]   .animate__fadeInLeft.hero-subtitle[_ngcontent-%COMP%] {
  animation-delay: 0.2s;
}
.hero-section[_ngcontent-%COMP%]   .hero-features.animate__fadeInUp[_ngcontent-%COMP%] {
  animation-delay: 0.3s;
}
.hero-section[_ngcontent-%COMP%]   .hero-buttons.animate__fadeInUp[_ngcontent-%COMP%] {
  animation-delay: 0.4s;
}
.hero-section[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
}
.hero-section[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-block;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
.hero-section[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background:
    linear-gradient(
      to right,
      #ffffff,
      #cbd5e1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-section[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 540px;
  line-height: 1.6;
}
.hero-section[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}
.hero-section[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .hero-feature[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
}
.hero-section[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%]   .hero-feature[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  height: 28px;
  width: 28px;
}
.hero-section[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
}
.hero-section[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .p-button-raised[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #f59e0b,
      #d97706);
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
}
.hero-section[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .p-button-raised[_ngcontent-%COMP%]:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}
.hero-section[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .p-button-outlined[_ngcontent-%COMP%] {
  border: 2px solid rgba(255, 255, 255, 0.5);
  transition: background-color 0.3s ease;
  border-radius: 8px;
}
.hero-section[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .p-button-outlined[_ngcontent-%COMP%]:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.hero-section[_ngcontent-%COMP%]   .hero-image-container[_ngcontent-%COMP%] {
  position: relative;
}
.hero-section[_ngcontent-%COMP%]   .hero-dashboard[_ngcontent-%COMP%] {
  position: relative;
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  color: #334155;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 2;
}
.hero-section[_ngcontent-%COMP%]   .about-main-image[_ngcontent-%COMP%] {
  border-radius: 1rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}
.hero-section[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.hero-section[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
}
.hero-section[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: #334155;
}
.hero-section[_ngcontent-%COMP%]   .dashboard-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
}
.hero-section[_ngcontent-%COMP%]   .dashboard-actions[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  cursor: pointer;
  color: #64748b;
  transition: color 0.2s ease;
}
.hero-section[_ngcontent-%COMP%]   .dashboard-actions[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {
  color: #334155;
}
.hero-section[_ngcontent-%COMP%]   .portfolio-summary[_ngcontent-%COMP%] {
  display: flex;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.hero-section[_ngcontent-%COMP%]   .portfolio-value[_ngcontent-%COMP%] {
  flex: 1;
}
.hero-section[_ngcontent-%COMP%]   .portfolio-value[_ngcontent-%COMP%]   .value-label[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 0.5rem;
}
.hero-section[_ngcontent-%COMP%]   .portfolio-value[_ngcontent-%COMP%]   .value-amount[_ngcontent-%COMP%] {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.hero-section[_ngcontent-%COMP%]   .portfolio-value[_ngcontent-%COMP%]   .value-change[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.9rem;
}
.hero-section[_ngcontent-%COMP%]   .portfolio-value[_ngcontent-%COMP%]   .value-change.positive[_ngcontent-%COMP%] {
  color: #10b981;
}
.hero-section[_ngcontent-%COMP%]   .portfolio-value[_ngcontent-%COMP%]   .value-change.negative[_ngcontent-%COMP%] {
  color: #ef4444;
}
.hero-section[_ngcontent-%COMP%]   .portfolio-chart[_ngcontent-%COMP%] {
  flex: 1;
  height: 100px;
  display: flex;
  align-items: flex-end;
}
.hero-section[_ngcontent-%COMP%]   .chart-bars[_ngcontent-%COMP%] {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  gap: 8px;
}
.hero-section[_ngcontent-%COMP%]   .chart-bar[_ngcontent-%COMP%] {
  flex: 1;
  background: rgba(51, 65, 85, 0.15);
  border-radius: 4px 4px 0 0;
  transition: all 0.3s ease;
}
.hero-section[_ngcontent-%COMP%]   .chart-bar[_ngcontent-%COMP%]:hover, .hero-section[_ngcontent-%COMP%]   .chart-bar.active[_ngcontent-%COMP%] {
  background: #f59e0b;
}
.hero-section[_ngcontent-%COMP%]   .portfolio-assets[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.hero-section[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background: rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease;
}
.hero-section[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]:hover {
  background: rgba(0, 0, 0, 0.05);
}
.hero-section[_ngcontent-%COMP%]   .asset-icon[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  margin-right: 1rem;
}
.hero-section[_ngcontent-%COMP%]   .asset-icon.stock[_ngcontent-%COMP%] {
  background: rgba(245, 158, 11, 0.15);
  color: #d97706;
}
.hero-section[_ngcontent-%COMP%]   .asset-icon.bond[_ngcontent-%COMP%] {
  background: rgba(79, 70, 229, 0.15);
  color: #4f46e5;
}
.hero-section[_ngcontent-%COMP%]   .asset-icon.real-estate[_ngcontent-%COMP%] {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
}
.hero-section[_ngcontent-%COMP%]   .asset-info[_ngcontent-%COMP%] {
  flex: 1;
}
.hero-section[_ngcontent-%COMP%]   .asset-info[_ngcontent-%COMP%]   .asset-name[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 0.95rem;
}
.hero-section[_ngcontent-%COMP%]   .asset-info[_ngcontent-%COMP%]   .asset-allocation[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: #64748b;
}
.hero-section[_ngcontent-%COMP%]   .asset-value[_ngcontent-%COMP%] {
  text-align: right;
}
.hero-section[_ngcontent-%COMP%]   .asset-value[_ngcontent-%COMP%]   .value-amount[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 0.95rem;
}
.hero-section[_ngcontent-%COMP%]   .asset-value[_ngcontent-%COMP%]   .value-change[_ngcontent-%COMP%] {
  font-size: 0.85rem;
}
.hero-section[_ngcontent-%COMP%]   .asset-value[_ngcontent-%COMP%]   .value-change.positive[_ngcontent-%COMP%] {
  color: #10b981;
}
.hero-section[_ngcontent-%COMP%]   .asset-value[_ngcontent-%COMP%]   .value-change.negative[_ngcontent-%COMP%] {
  color: #ef4444;
}
.hero-section[_ngcontent-%COMP%]   .float-card[_ngcontent-%COMP%] {
  position: absolute;
  z-index: 3;
  background: rgba(255, 255, 255, 0.9);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
.hero-section[_ngcontent-%COMP%]   .float-card.float-card-1[_ngcontent-%COMP%] {
  top: -2rem;
  right: 1rem;
  animation: _ngcontent-%COMP%_float 4s ease-in-out infinite;
}
.hero-section[_ngcontent-%COMP%]   .float-card.float-card-2[_ngcontent-%COMP%] {
  bottom: -1rem;
  left: 4rem;
  animation: _ngcontent-%COMP%_float 4s ease-in-out infinite 1s;
}
.hero-section[_ngcontent-%COMP%]   .float-card[_ngcontent-%COMP%]   .float-card-icon[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f59e0b;
  color: white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.hero-section[_ngcontent-%COMP%]   .float-card[_ngcontent-%COMP%]   .float-card-content[_ngcontent-%COMP%]   .float-card-label[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 0.25rem;
  margin-top: 0;
}
.hero-section[_ngcontent-%COMP%]   .float-card[_ngcontent-%COMP%]   .float-card-content[_ngcontent-%COMP%]   .float-card-value[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 700;
  color: #334155;
  margin: 0;
}
@keyframes _ngcontent-%COMP%_float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
@media (max-width: 1199px) {
  .hero-section[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {
    font-size: 3rem;
  }
  .hero-section[_ngcontent-%COMP%]   .float-card.float-card-1[_ngcontent-%COMP%] {
    right: 0;
  }
}
@media (max-width: 992px) {
  .hero-section[_ngcontent-%COMP%] {
    padding: 5rem 0 8rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {
    font-size: 2.5rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-dashboard[_ngcontent-%COMP%] {
    margin-top: 3rem;
    margin-left: 0;
  }
  .hero-section[_ngcontent-%COMP%]   .float-card[_ngcontent-%COMP%] {
    transform: scale(0.9);
  }
  .hero-section[_ngcontent-%COMP%]   .float-card.float-card-1[_ngcontent-%COMP%] {
    top: -1rem;
    right: 0;
  }
  .hero-section[_ngcontent-%COMP%]   .float-card.float-card-2[_ngcontent-%COMP%] {
    bottom: -1rem;
    left: 2rem;
  }
}
@media (max-width: 768px) {
  .hero-section[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {
    font-size: 2.25rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {
    font-size: 1.1rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 1rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%] {
    flex-direction: column;
    width: 100%;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
    width: 100%;
  }
  .hero-section[_ngcontent-%COMP%]   .portfolio-summary[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 1.5rem;
  }
  .hero-section[_ngcontent-%COMP%]   .portfolio-chart[_ngcontent-%COMP%] {
    height: 80px;
  }
  .hero-section[_ngcontent-%COMP%]   .float-card[_ngcontent-%COMP%] {
    position: relative;
    margin-top: 1rem;
    display: inline-flex;
  }
  .hero-section[_ngcontent-%COMP%]   .float-card.float-card-1[_ngcontent-%COMP%], .hero-section[_ngcontent-%COMP%]   .float-card.float-card-2[_ngcontent-%COMP%] {
    position: static;
    margin: 1rem 0.5rem 0 0;
    animation: none;
  }
}
@keyframes _ngcontent-%COMP%_float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
.trust-partners-section[_ngcontent-%COMP%] {
  padding: 3rem 0;
  background-color: var(--surface-card);
  position: relative;
}
.trust-partners-section[_ngcontent-%COMP%]   .trust-partners-content[_ngcontent-%COMP%] {
  text-align: center;
}
.trust-partners-section[_ngcontent-%COMP%]   .trust-title[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;
}
.trust-partners-section[_ngcontent-%COMP%]   .trust-title[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background:
    linear-gradient(
      90deg,
      var(--primary-color),
      var(--primary-dark));
  border-radius: 3px;
}
.trust-partners-section[_ngcontent-%COMP%]   .trust-logos[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 0 auto;
  max-width: 1000px;
}
.trust-partners-section[_ngcontent-%COMP%]   .trust-logo-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 140px;
  transition: transform 0.3s ease;
}
.trust-partners-section[_ngcontent-%COMP%]   .trust-logo-item[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
}
.trust-partners-section[_ngcontent-%COMP%]   .trust-logo-item[_ngcontent-%COMP%]:hover   .trust-icon-wrapper[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      var(--primary-color),
      var(--primary-dark));
  color: white;
  box-shadow: 0 8px 20px rgba(var(--primary-color-rgb), 0.3);
}
.trust-partners-section[_ngcontent-%COMP%]   .trust-logo-item[_ngcontent-%COMP%]:hover   .trust-name[_ngcontent-%COMP%] {
  color: var(--primary-color);
}
.trust-partners-section[_ngcontent-%COMP%]   .trust-logo-item[_ngcontent-%COMP%]   .trust-icon-wrapper[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--surface-overlay);
  color: var(--text-color-secondary);
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}
.trust-partners-section[_ngcontent-%COMP%]   .trust-logo-item[_ngcontent-%COMP%]   .trust-name[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-color-secondary);
  transition: color 0.3s ease;
}
@media (max-width: 1199px) {
  .hero-section[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {
    font-size: 3rem;
  }
  .hero-section[_ngcontent-%COMP%]   .float-card.float-card-1[_ngcontent-%COMP%] {
    right: -1rem;
  }
}
@media (max-width: 992px) {
  .hero-section[_ngcontent-%COMP%] {
    padding: 5rem 0 8rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {
    font-size: 2.5rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-image-wrapper[_ngcontent-%COMP%] {
    margin-top: 3rem;
    margin-left: 0;
  }
  .hero-section[_ngcontent-%COMP%]   .float-card[_ngcontent-%COMP%] {
    transform: scale(0.9);
  }
  .hero-section[_ngcontent-%COMP%]   .float-card.float-card-1[_ngcontent-%COMP%] {
    top: 5%;
    right: 0;
  }
  .hero-section[_ngcontent-%COMP%]   .float-card.float-card-2[_ngcontent-%COMP%] {
    bottom: 10%;
    left: 10%;
  }
  .trust-partners-section[_ngcontent-%COMP%] {
    padding: 2.5rem 0;
  }
  .trust-partners-section[_ngcontent-%COMP%]   .trust-logos[_ngcontent-%COMP%] {
    gap: 2rem;
  }
  .trust-partners-section[_ngcontent-%COMP%]   .trust-logo-item[_ngcontent-%COMP%] {
    width: 120px;
  }
  .trust-partners-section[_ngcontent-%COMP%]   .trust-logo-item[_ngcontent-%COMP%]   .trust-icon-wrapper[_ngcontent-%COMP%] {
    width: 60px;
    height: 60px;
  }
}
@media (max-width: 768px) {
  .hero-section[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {
    font-size: 2.25rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {
    font-size: 1.1rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-features[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 1rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%] {
    flex-direction: column;
    width: 100%;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
    width: 100%;
  }
  .hero-section[_ngcontent-%COMP%]   .float-card[_ngcontent-%COMP%] {
    position: relative;
    margin-top: 1rem;
    display: inline-flex;
  }
  .hero-section[_ngcontent-%COMP%]   .float-card.float-card-1[_ngcontent-%COMP%], .hero-section[_ngcontent-%COMP%]   .float-card.float-card-2[_ngcontent-%COMP%] {
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
  }
  .hero-section[_ngcontent-%COMP%]   .float-card.float-card-1[_ngcontent-%COMP%] {
    margin-right: 1rem;
  }
  .hero-section[_ngcontent-%COMP%]   .hero-image-wrapper[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
  }
  .trust-partners-section[_ngcontent-%COMP%] {
    padding: 2rem 0;
  }
  .trust-partners-section[_ngcontent-%COMP%]   .trust-title[_ngcontent-%COMP%] {
    font-size: 1.3rem;
  }
  .trust-partners-section[_ngcontent-%COMP%]   .trust-logos[_ngcontent-%COMP%] {
    gap: 1.5rem;
  }
  .trust-partners-section[_ngcontent-%COMP%]   .trust-logo-item[_ngcontent-%COMP%] {
    width: 100px;
  }
  .trust-partners-section[_ngcontent-%COMP%]   .trust-logo-item[_ngcontent-%COMP%]   .trust-icon-wrapper[_ngcontent-%COMP%] {
    width: 50px;
    height: 50px;
  }
  .trust-partners-section[_ngcontent-%COMP%]   .trust-logo-item[_ngcontent-%COMP%]   .trust-name[_ngcontent-%COMP%] {
    font-size: 0.8rem;
  }
}
.features-section[_ngcontent-%COMP%] {
  padding: 6rem 0;
  position: relative;
  background:
    linear-gradient(
      135deg,
      #1e293b 0%,
      #334155 100%);
  color: white;
}
.features-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {
  margin-bottom: 3rem;
}
.features-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}
.features-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  color: white;
  max-width: 600px;
  margin: 0 auto;
}
.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {
  padding: 2.5rem 1.5rem;
  border-radius: 1rem;
  background-color: var(--surface-overlay);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  height: 100%;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}
.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      var(--primary-color),
      var(--primary-dark));
  color: white;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 20px rgba(var(--primary-color-rgb), 0.3);
}
.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-title[_ngcontent-%COMP%] {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-color);
}
.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-description[_ngcontent-%COMP%] {
  font-size: 1rem;
  color: var(--text-color-secondary);
  line-height: 1.6;
}
.stats-section[_ngcontent-%COMP%] {
  padding: 5rem 0;
  background: white;
  position: relative;
  overflow: hidden;
}
.stats-section[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.1;
}
.stats-section[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {
  padding: 2rem 1rem;
  color: var(--text-color-secondary);
}
.stats-section[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background:
    linear-gradient(
      to right,
      #000,
      #e0e0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stats-section[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 500;
}
.secure-section[_ngcontent-%COMP%] {
  padding: 2rem 0;
  position: relative;
  background: white;
}
.secure-section[_ngcontent-%COMP%]   .secure-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-color-secondary);
}
.secure-section[_ngcontent-%COMP%]   .secure-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  color: var(--text-color-secondary);
  margin-bottom: 2rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}
.secure-section[_ngcontent-%COMP%]   .secure-content[_ngcontent-%COMP%]   .p-button-lg[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #f59e0b,
      #d97706);
  border: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem 2.5rem;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.secure-section[_ngcontent-%COMP%]   .secure-content[_ngcontent-%COMP%]   .p-button-lg[_ngcontent-%COMP%]:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
}
@media (max-width: 992px) {
  .features-section[_ngcontent-%COMP%] {
    padding: 4rem 0;
  }
  .features-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 2.2rem;
  }
  .stats-section[_ngcontent-%COMP%] {
    padding: 4rem 0;
  }
  .stats-section[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {
    font-size: 2.5rem;
  }
  .secure-section[_ngcontent-%COMP%]   .secure-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 2.2rem;
  }
}
@media (max-width: 768px) {
  .features-section[_ngcontent-%COMP%] {
    padding: 3rem 0;
  }
  .features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {
    padding: 2rem 1.5rem;
  }
  .features-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  .stats-section[_ngcontent-%COMP%] {
    padding: 3rem 0;
  }
  .cta-section[_ngcontent-%COMP%] {
    padding: 3rem 0;
  }
  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {
    padding: 2rem;
  }
  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 1.8rem;
  }
  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-size: 1.1rem;
  }
}
/*# sourceMappingURL=home2.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home2Component, { className: "Home2Component", filePath: "src\\app\\landing2\\home2\\home2.component.ts", lineNumber: 18 });
})();

// src/app/landing2/about2/about2.component.ts
var About2Component = class _About2Component {
  static {
    this.\u0275fac = function About2Component_Factory(t) {
      return new (t || _About2Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _About2Component, selectors: [["app-about-us"]], decls: 88, vars: 7, consts: [[1, "our-story-section"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "about-text"], ["pAnimateOnScroll", "", "animateClass", "animate__fadeInDown", 1, "badge-container"], [1, "about-badge"], ["pAnimateOnScroll", "", "animateClass", "animate__fadeInLeft", 1, "about-title"], ["pAnimateOnScroll", "", "animateClass", "animate__fadeInLeft", 1, "about-subtitle"], ["pAnimateOnScroll", "", "animateClass", "animate__fadeInRight", 1, "col-lg-6", "about-image-container"], [1, "about-image-wrapper"], ["src", "../../../assets/layout/images/KARES_PIC1.png", "alt", "About Kares Investments", 1, "img-fluid", "about-main-image"], [1, "mission-section"], [1, "col-lg-6"], ["pAnimateOnScroll", "", "animateClass", "animate__fadeInLeft", 1, "section-header"], [1, "badge-container"], [1, "section-badge"], [1, "section-subtitle"], ["pAnimateOnScroll", "", "animateClass", "animate__fadeInRight", 1, "mission-content"], [1, "mission-features"], [1, "mission-feature"], [1, "feature-icon"], ["name", "shield", 3, "size"], ["name", "trending-up", 3, "size"], ["name", "users", 3, "size"], [1, "services-section"], ["pAnimateOnScroll", "", "animateClass", "animate__fadeInUp", 1, "section-header", "text-center"], [1, "row", "g-4"], ["pAnimateOnScroll", "", "animateClass", "animate__fadeInUp", 1, "col-md-6", "col-lg-3"], [1, "service-card"], [1, "service-icon"], ["name", "award", 3, "size"], [1, "service-title"], [1, "service-description"], ["name", "user-check", 3, "size"], ["name", "heart-handshake", 3, "size"], ["name", "lightbulb", 3, "size"]], template: function About2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6, "Our Story");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 6);
        \u0275\u0275text(8, " Empowering Your Financial Journey ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10, " Creating tailored investment strategies for a secure and prosperous future. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8)(12, "div", 9);
        \u0275\u0275element(13, "img", 10);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(14, "section", 11)(15, "div", 1)(16, "div", 2)(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "span", 15);
        \u0275\u0275text(21, "Our Focus");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "h2");
        \u0275\u0275text(23, "Our Mission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p", 16);
        \u0275\u0275text(25, " Building lasting financial relationships through trust and expertise ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 12)(27, "div", 17)(28, "p");
        \u0275\u0275text(29, " Our team of skilled advisors takes the time to understand your unique financial aspirations, risk tolerance, and personal circumstances. This deep understanding allows us to tailor every recommendation specifically to you. Whether you're planning for retirement, aiming to grow your wealth, or seeking to protect your assets, we offer solutions that align with your values and objectives. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p");
        \u0275\u0275text(31, " We believe that your financial well-being extends beyond just investments. That's why we take a holistic approach to financial planning, integrating all aspects of your financial life into a cohesive plan. Through ongoing communication, regular reviews, and proactive adjustments, we ensure that your financial strategies evolve with you over time. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 18)(33, "div", 19)(34, "span", 20);
        \u0275\u0275element(35, "lucide-icon", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span");
        \u0275\u0275text(37, "Security First");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 19)(39, "span", 20);
        \u0275\u0275element(40, "lucide-icon", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "span");
        \u0275\u0275text(42, "Growth Focused");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 19)(44, "span", 20);
        \u0275\u0275element(45, "lucide-icon", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span");
        \u0275\u0275text(47, "Client Partnership");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(48, "section", 24)(49, "div", 1)(50, "div", 25)(51, "h2");
        \u0275\u0275text(52, "Our Services");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p", 16);
        \u0275\u0275text(54, " Tailored financial solutions designed for your success ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 26)(56, "div", 27)(57, "div", 28)(58, "div", 29);
        \u0275\u0275element(59, "lucide-icon", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "h3", 31);
        \u0275\u0275text(61, "Commitment to Excellence");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "p", 32);
        \u0275\u0275text(63, " We are committed to providing exceptional service and delivering results that help our clients achieve financial independence and peace of mind. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "div", 27)(65, "div", 28)(66, "div", 29);
        \u0275\u0275element(67, "lucide-icon", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "h3", 31);
        \u0275\u0275text(69, "Personalized Service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "p", 32);
        \u0275\u0275text(71, " We recognize that every client is unique. Our individualized approach ensures that your financial plan is designed specifically to meet your needs and goals. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "div", 27)(73, "div", 28)(74, "div", 29);
        \u0275\u0275element(75, "lucide-icon", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "h3", 31);
        \u0275\u0275text(77, "Client-Centric Approach");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "p", 32);
        \u0275\u0275text(79, " Your success is our top priority. We take the time to listen, understand, and craft a plan that supports your vision for the future. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "div", 27)(81, "div", 28)(82, "div", 29);
        \u0275\u0275element(83, "lucide-icon", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "h3", 31);
        \u0275\u0275text(85, "Innovative Solutions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "p", 32);
        \u0275\u0275text(87, " We utilize advanced financial technologies to create solutions that drive efficiency and unlock opportunities for sustainable growth in your financial journey. ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(35);
        \u0275\u0275property("size", 20);
        \u0275\u0275advance(5);
        \u0275\u0275property("size", 20);
        \u0275\u0275advance(5);
        \u0275\u0275property("size", 20);
        \u0275\u0275advance(14);
        \u0275\u0275property("size", 48);
        \u0275\u0275advance(8);
        \u0275\u0275property("size", 48);
        \u0275\u0275advance(8);
        \u0275\u0275property("size", 48);
        \u0275\u0275advance(8);
        \u0275\u0275property("size", 48);
      }
    }, dependencies: [LucideAngularComponent], styles: ["\n\n.our-story-section[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  padding: 6rem 0;\n}\n.our-story-section[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.our-story-section[_ngcontent-%COMP%]   .animate__fadeInLeft.about-subtitle[_ngcontent-%COMP%] {\n  animation-delay: 0.2s;\n}\n.our-story-section[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.our-story-section[_ngcontent-%COMP%]   .about-badge[_ngcontent-%COMP%] {\n  background-color: var(--primary-100);\n  color: var(--primary-700);\n  border-radius: 2rem;\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  display: inline-block;\n}\n.our-story-section[_ngcontent-%COMP%]   .about-title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 800;\n  margin-bottom: 1.5rem;\n  line-height: 1.1;\n  color: white;\n}\n.our-story-section[_ngcontent-%COMP%]   .about-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 2rem;\n  max-width: 540px;\n  line-height: 1.6;\n  color: white;\n}\n.our-story-section[_ngcontent-%COMP%]   .about-image-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.our-story-section[_ngcontent-%COMP%]   .about-image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 2rem;\n}\n.our-story-section[_ngcontent-%COMP%]   .about-main-image[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 2;\n}\n.mission-section[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n  position: relative;\n  background-color: var(--surface-ground);\n}\n.mission-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.mission-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.mission-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-badge[_ngcontent-%COMP%] {\n  background-color: var(--primary-100);\n  color: var(--primary-700);\n  border-radius: 2rem;\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  display: inline-block;\n}\n.mission-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.mission-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-color-secondary);\n  max-width: 600px;\n  line-height: 1.6;\n}\n.mission-section[_ngcontent-%COMP%]   .mission-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 1.8;\n  color: var(--text-color-secondary);\n  margin-bottom: 1.5rem;\n}\n.mission-section[_ngcontent-%COMP%]   .mission-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 2rem;\n}\n.mission-section[_ngcontent-%COMP%]   .mission-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin-top: 2rem;\n}\n.mission-section[_ngcontent-%COMP%]   .mission-features[_ngcontent-%COMP%]   .mission-feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.mission-section[_ngcontent-%COMP%]   .mission-features[_ngcontent-%COMP%]   .mission-feature[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--primary-dark));\n  color: white;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  box-shadow: 0 5px 15px rgba(var(--primary-color-rgb), 0.3);\n}\n.mission-section[_ngcontent-%COMP%]   .mission-features[_ngcontent-%COMP%]   .mission-feature[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-color);\n  font-size: 1.1rem;\n}\n.services-section[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  position: relative;\n}\n.services-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.services-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  color: white;\n}\n.services-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: white;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.services-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%] {\n  padding: 2.5rem 1.5rem;\n  border-radius: 1rem;\n  background-color: var(--surface-overlay);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n  height: 100%;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.services-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);\n}\n.services-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--primary-dark));\n  color: white;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 10px 20px rgba(var(--primary-color-rgb), 0.3);\n}\n.services-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .service-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n}\n.services-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .service-description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-color-secondary);\n  line-height: 1.6;\n}\n@media (max-width: 1199px) {\n  .our-story-section[_ngcontent-%COMP%]   .about-title[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n@media (max-width: 992px) {\n  .our-story-section[_ngcontent-%COMP%] {\n    padding: 5rem 0;\n  }\n  .our-story-section[_ngcontent-%COMP%]   .about-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .our-story-section[_ngcontent-%COMP%]   .about-image-wrapper[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n    margin-left: 0;\n  }\n  .mission-section[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n  }\n  .mission-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n  .mission-section[_ngcontent-%COMP%]   .mission-content[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n  .mission-section[_ngcontent-%COMP%]   .mission-features[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .services-section[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n  }\n}\n@media (max-width: 768px) {\n  .our-story-section[_ngcontent-%COMP%]   .about-title[_ngcontent-%COMP%] {\n    font-size: 2.25rem;\n  }\n  .our-story-section[_ngcontent-%COMP%]   .about-subtitle[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .mission-section[_ngcontent-%COMP%], .services-section[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  .mission-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .services-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .mission-card[_ngcontent-%COMP%]   .mission-features[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=about2.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(About2Component, { className: "About2Component", filePath: "src\\app\\landing2\\about2\\about2.component.ts", lineNumber: 8 });
})();

// src/app/landing2/contact/contact.service.ts
var ContactService = class _ContactService {
  constructor(http) {
    this.http = http;
  }
  saveUserInterest(data) {
    return this.http.post(`${environment.apiBaseUrl}/api/UserInterest`, data);
  }
  static {
    this.\u0275fac = function ContactService_Factory(t) {
      return new (t || _ContactService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContactService, factory: _ContactService.\u0275fac, providedIn: "root" });
  }
};

// src/app/landing2/contact/contact.component.ts
function ContactComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "small");
    \u0275\u0275text(2, "Name is required.");
    \u0275\u0275elementEnd()();
  }
}
function ContactComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "small");
    \u0275\u0275text(2, "A valid email is required.");
    \u0275\u0275elementEnd()();
  }
}
function ContactComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "small");
    \u0275\u0275text(2, "Phone number is required.");
    \u0275\u0275elementEnd()();
  }
}
function ContactComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "small");
    \u0275\u0275text(2, "Please select an investment interest.");
    \u0275\u0275elementEnd()();
  }
}
function ContactComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "small");
    \u0275\u0275text(2, "Additional information is required.");
    \u0275\u0275elementEnd()();
  }
}
function ContactComponent_ng_template_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ContactComponent_ng_template_99_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.regDialogClose());
    });
    \u0275\u0275elementEnd();
  }
}
var ContactComponent = class _ContactComponent {
  constructor(dataService, toastr, router) {
    this.dataService = dataService;
    this.toastr = toastr;
    this.router = router;
    this.registrationConfirmation = false;
    this.phoneNo = "1234567890";
    this.email = "Khurram@KaresInvestments.com";
    this.model = {
      firstName: "",
      lastName: "",
      email: "",
      mobileNum: "",
      remarks: "",
      investmentInterest: ""
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
    this.\u0275fac = function ContactComponent_Factory(t) {
      return new (t || _ContactComponent)(\u0275\u0275directiveInject(ContactService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], decls: 100, vars: 15, consts: [["contactForm", "ngForm"], ["firstNameCtrl", "ngModel"], ["emailCtrl", "ngModel"], ["mobileCtrl", "ngModel"], ["interestCtrl", "ngModel"], ["messageCtrl", "ngModel"], [1, "contact-container"], [1, "contact-header"], [1, "lead-text"], [1, "contact-content"], [1, "contact-info"], [1, "representative"], [1, "representative-image"], ["alt", "Representative", "src", "assets/layout/images/kares-logo2.png"], [1, "info-item"], [1, "info-icon"], [1, "pi", "pi-envelope"], [1, "info-details"], [1, "pi", "pi-clock"], [1, "contact-form-wrapper"], [1, "form-header"], [1, "contact-form", 3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["for", "firstName"], [1, "input-container"], [1, "pi", "pi-user", "input-icon"], ["id", "firstName", "name", "firstName", "required", "", "type", "text", "placeholder", "Your name", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "validation-message", 4, "ngIf"], ["for", "email"], [1, "pi", "pi-envelope", "input-icon"], ["id", "email", "name", "email", "required", "", "email", "", "type", "email", "placeholder", "your@email.com", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "mobileNum"], [1, "pi", "pi-mobile", "input-icon"], ["id", "mobileNum", "name", "mobile", "required", "", "type", "text", "placeholder", "Your phone number", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "investmentInterest"], [1, "pi", "pi-chart-line", "input-icon"], ["id", "investmentInterest", "name", "investmentInterest", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", "", "selected", ""], ["value", "retirement"], ["value", "wealth"], ["value", "estate"], ["value", "tax"], ["value", "other"], ["for", "remarks"], [1, "input-container", "textarea-container"], [1, "pi", "pi-comment", "input-icon", "textarea-icon"], ["id", "remarks", "name", "message", "required", "", "placeholder", "Please provide any specific questions or details about your investment goals...", "rows", "3", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "submit-button", 3, "disabled"], [1, "pi", "pi-send", "button-icon"], ["header", "Confirmation", 3, "visibleChange", "visible", "modal", "closable", "styleClass"], [1, "confirmation-content"], [1, "confirmation-icon"], [1, "pi", "pi-check-circle"], [1, "confirmation-title"], [1, "confirmation-message"], ["pTemplate", "footer"], [1, "validation-message"], ["pButton", "", "label", "OK", 1, "dialog-button", 3, "click"]], template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "h1");
        \u0275\u0275text(3, "Get in Touch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 8);
        \u0275\u0275text(5, " Have questions about your investment options? Our financial advisors are here to help. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 9)(7, "div", 10)(8, "div", 11)(9, "div", 12);
        \u0275\u0275element(10, "img", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 14)(12, "div", 15);
        \u0275\u0275element(13, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 17)(15, "h3");
        \u0275\u0275text(16, "Email Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p");
        \u0275\u0275text(18, "support@KaresInvestments.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 14)(20, "div", 15);
        \u0275\u0275element(21, "i", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 17)(23, "h3");
        \u0275\u0275text(24, "Response Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, "24 - 48 hours");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "div", 19)(28, "div", 20)(29, "h2");
        \u0275\u0275text(30, "Schedule a Consultation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, " Fill out the form below and one of our investment advisors will contact you promptly. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "form", 21, 0);
        \u0275\u0275listener("ngSubmit", function ContactComponent_Template_form_ngSubmit_33_listener() {
          \u0275\u0275restoreView(_r1);
          const contactForm_r2 = \u0275\u0275reference(34);
          return \u0275\u0275resetView(ctx.onSubmit(contactForm_r2));
        });
        \u0275\u0275elementStart(35, "div", 22)(36, "div", 23)(37, "label", 24);
        \u0275\u0275text(38, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 25);
        \u0275\u0275element(40, "i", 26);
        \u0275\u0275elementStart(41, "input", 27, 1);
        \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_41_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.firstName, $event) || (ctx.model.firstName = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(43, ContactComponent_div_43_Template, 3, 0, "div", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 23)(45, "label", 29);
        \u0275\u0275text(46, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 25);
        \u0275\u0275element(48, "i", 30);
        \u0275\u0275elementStart(49, "input", 31, 2);
        \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_49_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.email, $event) || (ctx.model.email = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(51, ContactComponent_div_51_Template, 3, 0, "div", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 23)(53, "label", 32);
        \u0275\u0275text(54, "Phone Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 25);
        \u0275\u0275element(56, "i", 33);
        \u0275\u0275elementStart(57, "input", 34, 3);
        \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_57_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.mobileNum, $event) || (ctx.model.mobileNum = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(59, ContactComponent_div_59_Template, 3, 0, "div", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 23)(61, "label", 35);
        \u0275\u0275text(62, "Investment Interest");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 25);
        \u0275\u0275element(64, "i", 36);
        \u0275\u0275elementStart(65, "select", 37, 4);
        \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_select_ngModelChange_65_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.investmentInterest, $event) || (ctx.model.investmentInterest = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(67, "option", 38);
        \u0275\u0275text(68, " Select your investment interest ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "option", 39);
        \u0275\u0275text(70, "Retirement Planning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "option", 40);
        \u0275\u0275text(72, "Wealth Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "option", 41);
        \u0275\u0275text(74, "Estate Planning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "option", 42);
        \u0275\u0275text(76, "Tax Planning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "option", 43);
        \u0275\u0275text(78, "Other Financial Services");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(79, ContactComponent_div_79_Template, 3, 0, "div", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 23)(81, "label", 44);
        \u0275\u0275text(82, "Additional Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 45);
        \u0275\u0275element(84, "i", 46);
        \u0275\u0275elementStart(85, "textarea", 47, 5);
        \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_85_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.remarks, $event) || (ctx.model.remarks = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(87, ContactComponent_div_87_Template, 3, 0, "div", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "button", 48);
        \u0275\u0275element(89, "i", 49);
        \u0275\u0275text(90, " Submit Request ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(91, "p-dialog", 50);
        \u0275\u0275twoWayListener("visibleChange", function ContactComponent_Template_p_dialog_visibleChange_91_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.registrationConfirmation, $event) || (ctx.registrationConfirmation = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(92, "div", 51)(93, "div", 52);
        \u0275\u0275element(94, "i", 53);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "h3", 54);
        \u0275\u0275text(96, "Thank You!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "p", 55);
        \u0275\u0275text(98, " A financial advisor from our team will contact you shortly. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(99, ContactComponent_ng_template_99_Template, 1, 0, "ng-template", 56);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const contactForm_r2 = \u0275\u0275reference(34);
        const firstNameCtrl_r5 = \u0275\u0275reference(42);
        const emailCtrl_r6 = \u0275\u0275reference(50);
        const mobileCtrl_r7 = \u0275\u0275reference(58);
        const interestCtrl_r8 = \u0275\u0275reference(66);
        const messageCtrl_r9 = \u0275\u0275reference(86);
        \u0275\u0275advance(41);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.firstName);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", firstNameCtrl_r5.touched && firstNameCtrl_r5.invalid);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.email);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", emailCtrl_r6.touched && emailCtrl_r6.invalid);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.mobileNum);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", mobileCtrl_r7.touched && mobileCtrl_r7.invalid);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.investmentInterest);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", interestCtrl_r8.touched && interestCtrl_r8.invalid);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.remarks);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", messageCtrl_r9.touched && messageCtrl_r9.invalid);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", contactForm_r2.invalid);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("visible", ctx.registrationConfirmation);
        \u0275\u0275property("modal", true)("closable", false)("styleClass", "confirmation-dialog");
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, EmailValidator, NgModel, NgForm, ButtonDirective, PrimeTemplate, Dialog], styles: [`

.contact-container[_ngcontent-%COMP%] {
  min-height: 100vh;
  background:
    linear-gradient(
      135deg,
      #1e293b 0%,
      #334155 100%);
  padding: 2rem 2rem;
  margin-top: 50px;
}
.contact-container[_ngcontent-%COMP%]   .contact-header[_ngcontent-%COMP%] {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 1.5rem;
}
.contact-container[_ngcontent-%COMP%]   .contact-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}
.contact-container[_ngcontent-%COMP%]   .contact-header[_ngcontent-%COMP%]   .lead-text[_ngcontent-%COMP%] {
  font-size: 1.15rem;
  color: white;
  opacity: 0.85;
}
.contact-container[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%] {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;
}
@media (max-width: 992px) {
  .contact-container[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%] {
    flex-direction: column;
  }
}
.contact-container[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.contact-container[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  background: white;
  border-left: 4px solid #1e293b;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.contact-container[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}
.contact-container[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {
  width: 50px;
  height: 50px;
  background: #1e293b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}
.contact-container[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: white;
  font-size: 1.3rem;
}
.contact-container[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.25rem;
}
.contact-container[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--text-color-secondary);
  font-size: 0.95rem;
  margin: 0;
}
.contact-container[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-details[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {
  display: inline-block;
  background: #1e293b;
  color: white;
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  margin-top: 0.5rem;
}
.contact-container[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .representative[_ngcontent-%COMP%] {
  padding: 2rem;
  background: white;
  border-radius: 12px;
  color: black;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
.contact-container[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .representative[_ngcontent-%COMP%]   .representative-image[_ngcontent-%COMP%] {
  width: 120px;
  height: 120px;
  margin: 0 auto 1.25rem;
}
.contact-container[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .representative[_ngcontent-%COMP%]   .representative-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
.contact-container[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .representative[_ngcontent-%COMP%]   .rep-name[_ngcontent-%COMP%] {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: black;
}
.contact-container[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .representative[_ngcontent-%COMP%]   .rep-title[_ngcontent-%COMP%] {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 0;
  color: black;
}
.contact-container[_ngcontent-%COMP%]   .contact-form-wrapper[_ngcontent-%COMP%] {
  flex: 1.3;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}
.contact-container[_ngcontent-%COMP%]   .contact-form-wrapper[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}
.contact-container[_ngcontent-%COMP%]   .contact-form-wrapper[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.75rem;
}
.contact-container[_ngcontent-%COMP%]   .contact-form-wrapper[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--text-color-secondary);
  font-size: 1rem;
  opacity: 0.75;
  margin: 0;
}
.contact-container[_ngcontent-%COMP%]   .contact-form-wrapper[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.contact-container[_ngcontent-%COMP%]   .contact-form-wrapper[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}
.contact-container[_ngcontent-%COMP%]   .contact-form-wrapper[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
}
.contact-container[_ngcontent-%COMP%]   .contact-form-wrapper[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {
  flex: 1;
}
@media (max-width: 576px) {
  .contact-container[_ngcontent-%COMP%]   .contact-form-wrapper[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {
    flex-direction: column;
  }
}
.contact-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {
  margin-bottom: 0.5rem;
}
.contact-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {
  position: relative;
}
.contact-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primary-color);
  opacity: 0.8;
}
.contact-container[_ngcontent-%COMP%]   .input-container.textarea-container[_ngcontent-%COMP%]   .textarea-icon[_ngcontent-%COMP%] {
  top: 1.25rem;
  transform: none;
}
.contact-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], .contact-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.85rem 0.85rem 0.85rem 2.75rem;
  border-radius: 8px;
  border: 1px solid var(--surface-border, #ced4da);
  background-color: #ffffff;
  color: var(--text-color, #333333);
  transition: all 0.3s ease;
  font-size: 0.95rem;
}
.contact-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, .contact-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.15);
  outline: none;
}
.contact-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder, .contact-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]::placeholder {
  color: var(--text-color-secondary, #6c757d);
  opacity: 0.6;
}
.contact-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select.form-input[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
}
.contact-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   select.form-input[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  color: var(--text-color);
}
.contact-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {
  resize: vertical;
}
.contact-container[_ngcontent-%COMP%]   .validation-message[_ngcontent-%COMP%] {
  margin-top: 0.25rem;
  color: var(--error-color, #f44336);
  font-size: 0.85rem;
}
.contact-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.9rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  background:
    linear-gradient(
      90deg,
      var(--primary-color) 0%,
      var(--primary-color-dark, #0d47a1) 100%);
  border: none;
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
  transition: all 0.3s ease;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
}
.contact-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.contact-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]:hover:not(:disabled) {
  box-shadow: 0 6px 16px rgba(33, 150, 243, 0.4);
  transform: translateY(-2px);
}
.contact-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.contact-container   [_nghost-%COMP%]     .confirmation-dialog {
  border-radius: 16px;
  overflow: hidden;
}
.contact-container   [_nghost-%COMP%]     .confirmation-dialog .p-dialog-header {
  background: var(--primary-color);
  color: white;
  padding: 1.25rem;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.contact-container   [_nghost-%COMP%]     .confirmation-dialog .p-dialog-content {
  padding: 1.75rem;
  background-color: #ffffff;
  color: var(--text-color, #333333);
}
.contact-container   [_nghost-%COMP%]     .confirmation-dialog .p-dialog-footer {
  padding: 1.25rem;
  border-top: 1px solid #f0f0f0;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
}
.contact-container[_ngcontent-%COMP%]   .confirmation-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
}
.contact-container[_ngcontent-%COMP%]   .confirmation-content[_ngcontent-%COMP%]   .confirmation-icon[_ngcontent-%COMP%] {
  font-size: 3.5rem;
  color: var(--primary-color);
  margin-bottom: 1.25rem;
}
.contact-container[_ngcontent-%COMP%]   .confirmation-content[_ngcontent-%COMP%]   .confirmation-title[_ngcontent-%COMP%] {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-color);
}
.contact-container[_ngcontent-%COMP%]   .confirmation-content[_ngcontent-%COMP%]   .confirmation-message[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  color: var(--text-color-secondary);
}
.contact-container[_ngcontent-%COMP%]   .dialog-button[_ngcontent-%COMP%] {
  min-width: 120px;
  background: var(--primary-color);
  border-color: var(--primary-color);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
}
.contact-container[_ngcontent-%COMP%]   .dialog-button[_ngcontent-%COMP%]:hover {
  background: var(--primary-color-dark, #0d47a1);
  border-color: var(--primary-color-dark, #0d47a1);
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
}
/*# sourceMappingURL=contact.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src\\app\\landing2\\contact\\contact.component.ts", lineNumber: 13 });
})();

// src/app/app-routing.module.ts
var AppRoutingModule = class _AppRoutingModule {
  static {
    this.\u0275fac = function AppRoutingModule_Factory(t) {
      return new (t || _AppRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot([
      {
        path: "",
        component: Landing2Component,
        children: [
          { path: "", component: Home2Component },
          { path: "about", component: About2Component },
          { path: "contact", component: ContactComponent },
          { path: "login", loadChildren: () => import("./chunk-OZQOSJPT.js").then((m) => m.LoginModule) },
          { path: "register", loadChildren: () => import("./chunk-GITKXLYY.js").then((m) => m.RegisterModule) },
          { path: "forgotpassword", component: ForgotPasswordComponent }
        ]
      },
      {
        path: "dashboard",
        component: AppLayoutComponent,
        canActivate: [authGuard],
        children: [
          { path: "admin", loadChildren: () => import("./chunk-YVI3KE7T.js").then((m) => m.AdminDashboardModule) },
          { path: "user", loadChildren: () => import("./chunk-XKTUNDAW.js").then((m) => m.UserDashboardModule) }
        ]
      }
    ], { scrollPositionRestoration: "enabled", anchorScrolling: "enabled", onSameUrlNavigation: "reload", preloadingStrategy: PreloadAllModules }), RouterModule] });
  }
};

// node_modules/@angular/animations/fesm2022/browser.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map, key, defaultValue) {
  let value = map.get(key);
  if (!value) {
    map.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   * @deprecated unused
   */
  matchesElement(_element, _selector) {
    return false;
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay);
  }
  static {
    this.\u0275fac = function NoopAnimationDriver_Factory(t) {
      return new (t || _NoopAnimationDriver)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NoopAnimationDriver,
      factory: _NoopAnimationDriver.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  static {
    this.NOOP = new NoopAnimationDriver();
  }
};
var AnimationStyleNormalizer = class {
};
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number")
    return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2)
    return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ""
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay,
    easing
  };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1)
      return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  (typeof ngDevMode === "undefined" || ngDevMode) && console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  (typeof ngDevMode === "undefined" || ngDevMode) && console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition2 = this.visitTransition(def, context);
        queryCount += transition2.queryCount;
        depCount += transition2.depCount;
        transitions.push(transition2);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string")
        return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  constructor(errors) {
    this.errors = errors;
    this.queryCount = 0;
    this.depCount = 0;
    this.currentTransition = null;
    this.currentQuery = null;
    this.currentQuerySelector = null;
    this.currentAnimateTimings = null;
    this.currentTime = 0;
    this.collectedStyles = /* @__PURE__ */ new Map();
    this.options = null;
    this.unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string")
    return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  constructor() {
    this._map = /* @__PURE__ */ new Map();
  }
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay = maxTime - delay;
        break;
      case "full":
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.parentContext = null;
    this.currentAnimateTimings = null;
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.subContextCount = 0;
    this.options = {};
    this.currentQueryIndex = 0;
    this.currentQueryTotal = 0;
    this.currentStaggerTime = 0;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options)
      return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    this.duration = 0;
    this.easing = null;
    this._previousKeyframe = /* @__PURE__ */ new Map();
    this._currentKeyframe = /* @__PURE__ */ new Map();
    this._keyframes = /* @__PURE__ */ new Map();
    this._styleSummary = /* @__PURE__ */ new Map();
    this._localTimelineStyles = /* @__PURE__ */ new Map();
    this._pendingStyles = /* @__PURE__ */ new Map();
    this._backFill = /* @__PURE__ */ new Map();
    this._currentEmptyStepKeyframe = null;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0)
      return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    this.transitionFactories = [];
    this.states = /* @__PURE__ */ new Map();
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states, this._normalizer);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition2 = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition2, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = new ElementInstructionMap();
var TimelineAnimationEngine = class {
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._animations = /* @__PURE__ */ new Map();
    this._playersById = /* @__PURE__ */ new Map();
    this.players = [];
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (warnings.length) {
        warnRegister(warnings);
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this.players = [];
    this._triggers = /* @__PURE__ */ new Map();
    this._queue = [];
    this._elementListeners = /* @__PURE__ */ new Map();
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger2 = this._triggers.get(name);
    if (!trigger2) {
      throw unregisteredTrigger(name);
    }
    return trigger2;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger2 = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger2.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger2.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition2 = trigger2.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition2) {
      if (!defaultToFallback)
        return;
      transition2 = trigger2.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition: transition2,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG])
        return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state2, triggerName) => {
        previousTriggersValues.set(triggerName, state2.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName))
          return;
        visitedTriggers.add(triggerName);
        const trigger2 = this._triggers.get(triggerName);
        const transition2 = trigger2.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition: transition2,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true))
      return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed)
        return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer, scheduler) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
    this.scheduler = scheduler;
    this.players = [];
    this.newHostElements = /* @__PURE__ */ new Map();
    this.playersByElement = /* @__PURE__ */ new Map();
    this.playersByQueriedElement = /* @__PURE__ */ new Map();
    this.statesByElement = /* @__PURE__ */ new Map();
    this.disabledNodes = /* @__PURE__ */ new Set();
    this.totalAnimations = 0;
    this.totalQueuedPlayers = 0;
    this._namespaceLookup = {};
    this._namespaceList = [];
    this._flushFns = [];
    this._whenQuietFns = [];
    this.namespacesByHostElement = /* @__PURE__ */ new Map();
    this.collectedEnterElements = [];
    this.collectedLeaveElements = [];
    this.onRemovalComplete = (element, context) => {
    };
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger2) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger2)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId)
      return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element))
      return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      this.scheduler?.notify();
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0)
      return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state2 = triggersWithStates.get(entry.triggerName);
                state2.value = previousValue;
                triggersWithStates.set(entry.triggerName, state2);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation)
        continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued)
            return;
          if (!isRemovalAnimation && player.triggerName != triggerName)
            return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId)
          return false;
        if (triggerName && triggerName != player.triggerName)
          return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried)
        return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
    this._player = new NoopAnimationPlayer();
    this._containsRealPlayer = false;
    this._queuedCallbacks = /* @__PURE__ */ new Map();
    this.destroyed = false;
    this.parentPlayer = null;
    this.markedForDestroy = false;
    this.disabled = false;
    this.queued = true;
    this.totalTime = 0;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer)
      return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map, key, value) {
  let currentValues = map.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0)
    return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node)
      return NULL_NODE;
    let root = localRootMap.get(node);
    if (root)
      return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length)
    return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop])
      return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry)
    return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  constructor(doc, _driver, _normalizer, scheduler) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._triggerCache = {};
    this.onRemovalComplete = (element, context) => {
    };
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer, scheduler);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger2 = this._triggerCache[cacheKey];
    if (!trigger2) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (warnings.length) {
        warnTriggerBuild(name, warnings);
      }
      trigger2 = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger2;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger2);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  static {
    this.initialStylesByElement = /* @__PURE__ */ new WeakMap();
  }
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    this._state = 0;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._onDoneFns = [];
    this._onStartFns = [];
    this._onDestroyFns = [];
    this._initialized = false;
    this._finished = false;
    this._started = false;
    this._destroyed = false;
    this._originalOnDoneFns = [];
    this._originalOnStartFns = [];
    this.time = 0;
    this.parentPlayer = null;
    this.currentSnapshot = /* @__PURE__ */ new Map();
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized)
      return;
    this._initialized = true;
    const keyframes = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    this.domPlayer.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      this.domPlayer.removeEventListener("finish", onFinish);
    });
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes, options) {
    return element.animate(this._convertKeyframesToObject(keyframes), options);
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (this.domPlayer === void 0) {
      this.init();
    }
    this.domPlayer.currentTime = p * this.time;
  }
  getPosition() {
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  matchesElement(_element, _selector) {
    return false;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
    this.\u0275type = 0;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    return this.delegate.listen(target, eventName, callback);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger2 = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger2, phase];
}
var AnimationRendererFactory = class {
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    this._currentId = 0;
    this._microtaskId = 1;
    this._animationCallbacksBuffer = [];
    this._rendererCache = /* @__PURE__ */ new Map();
    this._cdRecurDepth = 0;
    engine.onRemovalComplete = (element, delegate2) => {
      const parentNode = delegate2?.parentNode(element);
      if (parentNode) {
        delegate2.removeChild(parentNode, element);
      }
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger2) => {
      if (Array.isArray(trigger2)) {
        trigger2.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger2.name, trigger2);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer, inject(ChangeDetectionScheduler, {
      optional: true
    }));
  }
  ngOnDestroy() {
    this.flush();
  }
  static {
    this.\u0275fac = function InjectableAnimationEngine_Factory(t) {
      return new (t || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _InjectableAnimationEngine,
      factory: _InjectableAnimationEngine.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static {
    this.\u0275fac = function BrowserAnimationsModule_Factory(t) {
      return new (t || _BrowserAnimationsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _BrowserAnimationsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: BROWSER_ANIMATIONS_PROVIDERS,
      imports: [BrowserModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
var NoopAnimationsModule = class _NoopAnimationsModule {
  static {
    this.\u0275fac = function NoopAnimationsModule_Factory(t) {
      return new (t || _NoopAnimationsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NoopAnimationsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
      imports: [BrowserModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// src/app/layout/config/app.config.component.ts
var _c08 = (a0) => ({ "text-primary-500": a0 });
function AppConfigComponent_i_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 44);
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c08, s_r1 === ctx_r1.scale));
  }
}
function AppConfigComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h5");
    \u0275\u0275text(2, "Menu Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45)(4, "p-radioButton", 46);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_10_Template_p_radioButton_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.menuMode, $event) || (ctx_r1.menuMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 47);
    \u0275\u0275text(6, "Static");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 45)(8, "p-radioButton", 48);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_10_Template_p_radioButton_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.menuMode, $event) || (ctx_r1.menuMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 49);
    \u0275\u0275text(10, "Overlay");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.menuMode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.menuMode);
  }
}
function AppConfigComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h5");
    \u0275\u0275text(2, "Input Style");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50)(4, "div", 51)(5, "p-radioButton", 52);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_11_Template_p_radioButton_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inputStyle, $event) || (ctx_r1.inputStyle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 53);
    \u0275\u0275text(7, "Outlined");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 51)(9, "p-radioButton", 54);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_11_Template_p_radioButton_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inputStyle, $event) || (ctx_r1.inputStyle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 55);
    \u0275\u0275text(11, "Filled");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "h5");
    \u0275\u0275text(13, "Ripple Effect");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-inputSwitch", 56);
    \u0275\u0275twoWayListener("ngModelChange", function AppConfigComponent_ng_container_11_Template_p_inputSwitch_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.ripple, $event) || (ctx_r1.ripple = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inputStyle);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inputStyle);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.ripple);
  }
}
var AppConfigComponent = class _AppConfigComponent {
  constructor(layoutService, menuService) {
    this.layoutService = layoutService;
    this.menuService = menuService;
    this.minimal = false;
    this.scales = [12, 13, 14, 15, 16];
  }
  get visible() {
    return this.layoutService.state.configSidebarVisible;
  }
  set visible(_val) {
    this.layoutService.state.configSidebarVisible = _val;
  }
  get scale() {
    return this.layoutService.config().scale;
  }
  set scale(_val) {
    this.layoutService.config.update((config) => __spreadProps(__spreadValues({}, config), {
      scale: _val
    }));
  }
  get menuMode() {
    return this.layoutService.config().menuMode;
  }
  set menuMode(_val) {
    this.layoutService.config.update((config) => __spreadProps(__spreadValues({}, config), {
      menuMode: _val
    }));
  }
  get inputStyle() {
    return this.layoutService.config().inputStyle;
  }
  set inputStyle(_val) {
    this.layoutService.config().inputStyle = _val;
  }
  get ripple() {
    return this.layoutService.config().ripple;
  }
  set ripple(_val) {
    this.layoutService.config.update((config) => __spreadProps(__spreadValues({}, config), {
      ripple: _val
    }));
  }
  set theme(val) {
    this.layoutService.config.update((config) => __spreadProps(__spreadValues({}, config), {
      theme: val
    }));
  }
  get theme() {
    return this.layoutService.config().theme;
  }
  set colorScheme(val) {
    this.layoutService.config.update((config) => __spreadProps(__spreadValues({}, config), {
      colorScheme: val
    }));
  }
  get colorScheme() {
    return this.layoutService.config().colorScheme;
  }
  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }
  changeTheme(theme, colorScheme) {
    this.theme = theme;
    this.colorScheme = colorScheme;
  }
  decrementScale() {
    this.scale--;
  }
  incrementScale() {
    this.scale++;
  }
  static {
    this.\u0275fac = function AppConfigComponent_Factory(t) {
      return new (t || _AppConfigComponent)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(MenuService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppConfigComponent, selectors: [["app-config"]], inputs: { minimal: "minimal" }, decls: 135, vars: 7, consts: [["type", "button", 1, "layout-config-button", "p-link", 3, "click"], [1, "pi", "pi-cog"], ["position", "right", "styleClass", "layout-config-sidebar w-20rem", 3, "visibleChange", "visible", "transitionOptions"], [1, "flex", "align-items-center"], ["icon", "pi pi-minus", "type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "w-2rem", "h-2rem", "mr-2", 3, "click", "disabled"], [1, "flex", "gap-2", "align-items-center"], ["class", "pi pi-circle-fill text-300", 3, "ngClass", 4, "ngFor", "ngForOf"], ["icon", "pi pi-plus", "type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "w-2rem", "h-2rem", "ml-2", 3, "click", "disabled"], [4, "ngIf"], [1, "grid"], [1, "col-3"], [1, "p-link", "w-2rem", "h-2rem", 3, "click"], ["src", "assets/layout/images/themes/bootstrap4-light-blue.svg", "alt", "Bootstrap Light Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/bootstrap4-light-purple.svg", "alt", "Bootstrap Light Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/bootstrap4-dark-blue.svg", "alt", "Bootstrap Dark Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/bootstrap4-dark-purple.svg", "alt", "Bootstrap Dark Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-light-indigo.svg", "alt", "Material Light Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-light-deeppurple.svg", "alt", "Material Light DeepPurple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-dark-indigo.svg", "alt", "Material Dark Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-dark-deeppurple.svg", "alt", "Material Dark DeepPurple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-light-deeppurple.svg", "alt", "Material Light Deep Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-dark-deeppurple.svg", "alt", "Material Dark Deep Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/tailwind-light.png", "alt", "Tailwind Light", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/fluent-light.png", "alt", "Fluent Light", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-indigo.png", "alt", "Lara Light Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-blue.png", "alt", "Lara Light Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-purple.png", "alt", "Lara Light Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-teal.png", "alt", "Lara Light Teal", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-indigo.png", "alt", "Lara Dark Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-blue.png", "alt", "Lara Dark Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-purple.png", "alt", "Lara Dark Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-teal.png", "alt", "Lara Dark Teal", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-blue.png", "alt", "Saga Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-green.png", "alt", "Saga Green", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-orange.png", "alt", "Saga Orange", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-purple.png", "alt", "Saga Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-blue.png", "alt", "Vela Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-green.png", "alt", "Vela Green", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-orange.png", "alt", "Vela Orange", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-purple.png", "alt", "Vela Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-blue.png", "alt", "Arya Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-green.png", "alt", "Arya Green", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-orange.png", "alt", "Arya Orange", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-purple.png", "alt", "Arya Purple", 1, "w-2rem", "h-2rem"], [1, "pi", "pi-circle-fill", "text-300", 3, "ngClass"], [1, "field-radiobutton"], ["name", "menuMode", "value", "static", "inputId", "mode1", 3, "ngModelChange", "ngModel"], ["for", "mode1"], ["name", "menuMode", "value", "overlay", "inputId", "mode2", 3, "ngModelChange", "ngModel"], ["for", "mode2"], [1, "flex"], [1, "field-radiobutton", "flex-1"], ["name", "inputStyle", "value", "outlined", "inputId", "outlined_input", 3, "ngModelChange", "ngModel"], ["for", "outlined_input"], ["name", "inputStyle", "value", "filled", "inputId", "filled_input", 3, "ngModelChange", "ngModel"], ["for", "filled_input"], [3, "ngModelChange", "ngModel"]], template: function AppConfigComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_0_listener() {
          return ctx.onConfigButtonClick();
        });
        \u0275\u0275element(1, "i", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "p-sidebar", 2);
        \u0275\u0275twoWayListener("visibleChange", function AppConfigComponent_Template_p_sidebar_visibleChange_2_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.visible, $event) || (ctx.visible = $event);
          return $event;
        });
        \u0275\u0275elementStart(3, "h5");
        \u0275\u0275text(4, "Scale");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_6_listener() {
          return ctx.decrementScale();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275template(8, AppConfigComponent_i_8_Template, 1, 3, "i", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 7);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_9_listener() {
          return ctx.incrementScale();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, AppConfigComponent_ng_container_10_Template, 11, 2, "ng-container", 8)(11, AppConfigComponent_ng_container_11_Template, 15, 3, "ng-container", 8);
        \u0275\u0275elementStart(12, "h5");
        \u0275\u0275text(13, "Bootstrap");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_16_listener() {
          return ctx.changeTheme("bootstrap4-light-blue", "light");
        });
        \u0275\u0275element(17, "img", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 10)(19, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_19_listener() {
          return ctx.changeTheme("bootstrap4-light-purple", "light");
        });
        \u0275\u0275element(20, "img", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 10)(22, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_22_listener() {
          return ctx.changeTheme("bootstrap4-dark-blue", "dark");
        });
        \u0275\u0275element(23, "img", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_25_listener() {
          return ctx.changeTheme("bootstrap4-dark-purple", "dark");
        });
        \u0275\u0275element(26, "img", 15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "h5");
        \u0275\u0275text(28, "Material Design");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 9)(30, "div", 10)(31, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_31_listener() {
          return ctx.changeTheme("md-light-indigo", "light");
        });
        \u0275\u0275element(32, "img", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 10)(34, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_34_listener() {
          return ctx.changeTheme("md-light-deeppurple", "light");
        });
        \u0275\u0275element(35, "img", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 10)(37, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_37_listener() {
          return ctx.changeTheme("md-dark-indigo", "dark");
        });
        \u0275\u0275element(38, "img", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 10)(40, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_40_listener() {
          return ctx.changeTheme("md-dark-deeppurple", "dark");
        });
        \u0275\u0275element(41, "img", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "h5");
        \u0275\u0275text(43, "Material Design Compact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 9)(45, "div", 10)(46, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_46_listener() {
          return ctx.changeTheme("mdc-light-indigo", "light");
        });
        \u0275\u0275element(47, "img", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 10)(49, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_49_listener() {
          return ctx.changeTheme("mdc-light-deeppurple", "light");
        });
        \u0275\u0275element(50, "img", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 10)(52, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_52_listener() {
          return ctx.changeTheme("mdc-dark-indigo", "dark");
        });
        \u0275\u0275element(53, "img", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 10)(55, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_55_listener() {
          return ctx.changeTheme("mdc-dark-deeppurple", "dark");
        });
        \u0275\u0275element(56, "img", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "h5");
        \u0275\u0275text(58, "Tailwind");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 9)(60, "div", 10)(61, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_61_listener() {
          return ctx.changeTheme("tailwind-light", "light");
        });
        \u0275\u0275element(62, "img", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "h5");
        \u0275\u0275text(64, "Fluent UI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 9)(66, "div", 10)(67, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_67_listener() {
          return ctx.changeTheme("fluent-light", "light");
        });
        \u0275\u0275element(68, "img", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "h5");
        \u0275\u0275text(70, "PrimeOne Design - 2022");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 9)(72, "div", 10)(73, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_73_listener() {
          return ctx.changeTheme("lara-light-indigo", "light");
        });
        \u0275\u0275element(74, "img", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "div", 10)(76, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_76_listener() {
          return ctx.changeTheme("lara-light-blue", "light");
        });
        \u0275\u0275element(77, "img", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 10)(79, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_79_listener() {
          return ctx.changeTheme("lara-light-purple", "light");
        });
        \u0275\u0275element(80, "img", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 10)(82, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_82_listener() {
          return ctx.changeTheme("lara-light-teal", "light");
        });
        \u0275\u0275element(83, "img", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 10)(85, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_85_listener() {
          return ctx.changeTheme("lara-dark-indigo", "dark");
        });
        \u0275\u0275element(86, "img", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "div", 10)(88, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_88_listener() {
          return ctx.changeTheme("lara-dark-blue", "dark");
        });
        \u0275\u0275element(89, "img", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 10)(91, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_91_listener() {
          return ctx.changeTheme("lara-dark-purple", "dark");
        });
        \u0275\u0275element(92, "img", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 10)(94, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_94_listener() {
          return ctx.changeTheme("lara-dark-teal", "dark");
        });
        \u0275\u0275element(95, "img", 31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(96, "h5");
        \u0275\u0275text(97, "PrimeOne Design - 2021");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 9)(99, "div", 10)(100, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_100_listener() {
          return ctx.changeTheme("saga-blue", "light");
        });
        \u0275\u0275element(101, "img", 32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "div", 10)(103, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_103_listener() {
          return ctx.changeTheme("saga-green", "light");
        });
        \u0275\u0275element(104, "img", 33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "div", 10)(106, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_106_listener() {
          return ctx.changeTheme("saga-orange", "light");
        });
        \u0275\u0275element(107, "img", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "div", 10)(109, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_109_listener() {
          return ctx.changeTheme("saga-purple", "light");
        });
        \u0275\u0275element(110, "img", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "div", 10)(112, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_112_listener() {
          return ctx.changeTheme("vela-blue", "dark");
        });
        \u0275\u0275element(113, "img", 36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "div", 10)(115, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_115_listener() {
          return ctx.changeTheme("vela-green", "dark");
        });
        \u0275\u0275element(116, "img", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(117, "div", 10)(118, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_118_listener() {
          return ctx.changeTheme("vela-orange", "dark");
        });
        \u0275\u0275element(119, "img", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(120, "div", 10)(121, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_121_listener() {
          return ctx.changeTheme("vela-purple", "dark");
        });
        \u0275\u0275element(122, "img", 39);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "div", 10)(124, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_124_listener() {
          return ctx.changeTheme("arya-blue", "dark");
        });
        \u0275\u0275element(125, "img", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "div", 10)(127, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_127_listener() {
          return ctx.changeTheme("arya-green", "dark");
        });
        \u0275\u0275element(128, "img", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "div", 10)(130, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_130_listener() {
          return ctx.changeTheme("arya-orange", "dark");
        });
        \u0275\u0275element(131, "img", 42);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "div", 10)(133, "button", 11);
        \u0275\u0275listener("click", function AppConfigComponent_Template_button_click_133_listener() {
          return ctx.changeTheme("arya-purple", "dark");
        });
        \u0275\u0275element(134, "img", 43);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("visible", ctx.visible);
        \u0275\u0275property("transitionOptions", ".3s cubic-bezier(0, 0, 0.2, 1)");
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.scale === ctx.scales[0]);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.scales);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.scale === ctx.scales[ctx.scales.length - 1]);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.minimal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.minimal);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, NgControlStatus, NgModel, Sidebar, RadioButton, ButtonDirective, InputSwitch], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppConfigComponent, { className: "AppConfigComponent", filePath: "src\\app\\layout\\config\\app.config.component.ts", lineNumber: 9 });
})();

// src/app/layout/config/config.module.ts
var AppConfigModule = class _AppConfigModule {
  static {
    this.\u0275fac = function AppConfigModule_Factory(t) {
      return new (t || _AppConfigModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppConfigModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      SidebarModule,
      RadioButtonModule,
      ButtonModule,
      InputSwitchModule
    ] });
  }
};

// src/app/layout/app.layout.module.ts
var AppLayoutModule = class _AppLayoutModule {
  static {
    this.\u0275fac = function AppLayoutModule_Factory(t) {
      return new (t || _AppLayoutModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppLayoutModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [MessageService, UsersService], imports: [
      BrowserModule,
      FormsModule.withConfig({
        callSetDisabledState: "always"
      }),
      HttpClientModule,
      BrowserAnimationsModule,
      RouterModule,
      AppConfigModule,
      PrimeNgModule,
      NgxSpinnerModule.forRoot({ type: "timer" })
    ] });
  }
};

// src/app/shared/services/spinner.service.ts
var SpinnerService = class _SpinnerService {
  constructor(spinner) {
    this.spinner = spinner;
  }
  show() {
    this.spinner.show();
  }
  hide() {
    this.spinner.hide();
  }
  static {
    this.\u0275fac = function SpinnerService_Factory(t) {
      return new (t || _SpinnerService)(\u0275\u0275inject(NgxSpinnerService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SpinnerService, factory: _SpinnerService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/interceptor/api-interceptor.ts
var ApiInterceptor = class _ApiInterceptor {
  constructor(spinnerService, toastr, cookieService, router, authStateService, loginService) {
    this.spinnerService = spinnerService;
    this.toastr = toastr;
    this.cookieService = cookieService;
    this.router = router;
    this.authStateService = authStateService;
    this.loginService = loginService;
    this.isRefreshing = false;
    this.refreshTokenSubject = new BehaviorSubject(null);
  }
  intercept(request, next) {
    this.spinnerService.show();
    if (this.shouldInterceptRequest(request)) {
      return next.handle(request).pipe(finalize(() => this.spinnerService.hide()));
    }
    request = this.addAuthToken(request);
    return next.handle(request).pipe(catchError((error) => {
      if (error.status === 401) {
        return this.handle401Error(request, next);
      }
      return this.handleError(error);
    }), finalize(() => this.spinnerService.hide()));
  }
  addAuthToken(request) {
    const token = this.cookieService.get("Authorization");
    return request.clone({
      setHeaders: { Authorization: token }
    });
  }
  handle401Error(request, next) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      return this.loginService.refreshToken().pipe(switchMap((newToken) => {
        this.isRefreshing = false;
        this.refreshTokenSubject.next(newToken);
        this.cookieService.set("Authorization", newToken);
        return next.handle(this.addAuthToken(request));
      }), catchError((err) => {
        this.isRefreshing = false;
        this.authStateService.logout();
        this.router.navigate(["/login"]);
        this.toastr.error("Session expired. Please log in again.", "Session Expired");
        return throwError(() => err);
      }));
    } else {
      return this.refreshTokenSubject.pipe(filter((token) => token !== null), take(1), switchMap((token) => next.handle(this.addAuthToken(request))));
    }
  }
  shouldInterceptRequest(request) {
    const isLoginRequest = request.url.includes("/login");
    const isUserInterestRequest = request.url.includes("/api/UserInterest") && request.method === "POST";
    return isLoginRequest || isUserInterestRequest;
  }
  handleError(error) {
    let errorMessage = "An unexpected error occurred.";
    if (error.status === 0) {
      errorMessage = "API Server is Down/Not running. Please try again later.";
      this.toastr.error(errorMessage, "Unable to Connect");
    } else if (error.status === 401) {
      errorMessage = "Unauthorized access. Please log in again.";
      this.authStateService.logout();
      this.router.navigate(["/login"]);
    } else if (error.error && error.error.message) {
      errorMessage = error.error.message;
    } else {
      this.toastr.error(error.error || "An error occurred", "Error");
    }
    return throwError(() => ({
      message: errorMessage,
      status: error.status,
      statusText: error.statusText,
      code: error.error?.code || "UNKNOWN_ERROR"
    }));
  }
  static {
    this.\u0275fac = function ApiInterceptor_Factory(t) {
      return new (t || _ApiInterceptor)(\u0275\u0275inject(SpinnerService), \u0275\u0275inject(ToastrService), \u0275\u0275inject(CookieService), \u0275\u0275inject(Router), \u0275\u0275inject(AuthStateService), \u0275\u0275inject(LoginService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiInterceptor, factory: _ApiInterceptor.\u0275fac });
  }
};

// src/app/shared/services/idle-timeout.service.ts
var IdleTimeoutService = class _IdleTimeoutService {
  constructor(router, ngZone, authState, toastr) {
    this.router = router;
    this.ngZone = ngZone;
    this.authState = authState;
    this.toastr = toastr;
    this.idleTimeout = 5 * 60 * 1e3;
  }
  startWatching() {
    this.ngZone.runOutsideAngular(() => {
      const activityEvents = merge(fromEvent(document, "mousemove"), fromEvent(document, "keydown"), fromEvent(document, "click"), fromEvent(document, "scroll"), fromEvent(document, "touchstart"));
      if (this.activitySubscription) {
        this.activitySubscription.unsubscribe();
      }
      this.activitySubscription = activityEvents.pipe(debounceTime(500), switchMap(() => timer(this.idleTimeout))).subscribe(() => {
        this.ngZone.run(() => {
          this.authState.logout();
          this.toastr.error("Redirecting to Home", "You were Inactive.");
          this.router.navigate(["/"]);
        });
      });
    });
  }
  stopWatching() {
    if (this.activitySubscription) {
      this.activitySubscription.unsubscribe();
    }
  }
  static {
    this.\u0275fac = function IdleTimeoutService_Factory(t) {
      return new (t || _IdleTimeoutService)(\u0275\u0275inject(Router), \u0275\u0275inject(NgZone), \u0275\u0275inject(AuthStateService), \u0275\u0275inject(ToastrService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IdleTimeoutService, factory: _IdleTimeoutService.\u0275fac, providedIn: "root" });
  }
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor(primengConfig, idleService) {
    this.primengConfig = primengConfig;
    this.idleService = idleService;
    this.title = "KaresInvestments.UI";
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.idleService.startWatching();
  }
  ngOnDestroy() {
    this.idleService.stopWatching();
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)(\u0275\u0275directiveInject(PrimeNGConfig), \u0275\u0275directiveInject(IdleTimeoutService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "timer", 3, "fullScreen"], [2, "color", "white"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
        \u0275\u0275elementStart(1, "ngx-spinner", 0)(2, "p", 1);
        \u0275\u0275text(3, " Loading... ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("fullScreen", true);
      }
    }, dependencies: [RouterOutlet, NgxSpinnerComponent], styles: ["\n\n.navbar-custom[_ngcontent-%COMP%] {\n  transition: background-color 0.3s ease, color 0.3s ease;\n}\n.navbar-custom.navbar-dark[_ngcontent-%COMP%] {\n  background-color: var(--surface-overlay);\n}\n.navbar-custom.navbar-light[_ngcontent-%COMP%] {\n  background-color: var(--surface-card);\n}\napp-theme-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.dark-theme[_nghost-%COMP%]   .navbar-custom[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .navbar-custom[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .navbar-custom[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .navbar-custom[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.light-theme[_nghost-%COMP%]   .navbar-custom[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .navbar-custom[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], .light-theme[_nghost-%COMP%]   .navbar-custom[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .navbar-custom[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 10 });
})();

// src/app/app.module.ts
var AppModule = class _AppModule {
  static {
    this.\u0275fac = function AppModule_Factory(t) {
      return new (t || _AppModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
      CookieService,
      DatePipe,
      { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
    ], imports: [
      BrowserModule,
      AppRoutingModule,
      AppLayoutModule,
      BrowserAnimationsModule,
      FormsModule,
      PrimeNgModule,
      SharedModule,
      ToastrModule.forRoot({
        timeOut: 1e4,
        positionClass: "toast-bottom-center"
      }),
      NgxSpinnerModule.forRoot({ type: "timer" })
    ] });
  }
};

// src/main.ts
if (environment.production) {
  enableProdMode();
}
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));
/*! Bundled license information:

@angular/animations/fesm2022/browser.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
