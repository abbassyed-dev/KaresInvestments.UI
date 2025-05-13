import {
  Subject,
  effect,
  signal,
  ɵɵdefineInjectable
} from "./chunk-YYKS4PBP.js";
import {
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// src/app/layout/service/app.layout.service.ts
var LayoutService = class _LayoutService {
  constructor() {
    this._config = {
      ripple: false,
      inputStyle: "outlined",
      menuMode: "static",
      colorScheme: "dark",
      theme: "bootstrap4-dark-blue",
      //'lara-light-indigo', 'light'
      scale: 14
    };
    this.config = signal(this._config);
    this.state = {
      staticMenuDesktopInactive: true,
      overlayMenuActive: true,
      profileSidebarVisible: false,
      configSidebarVisible: false,
      staticMenuMobileActive: true,
      menuHoverActive: false
    };
    this.configUpdate = new Subject();
    this.overlayOpen = new Subject();
    this.configUpdate$ = this.configUpdate.asObservable();
    this.overlayOpen$ = this.overlayOpen.asObservable();
    effect(() => {
      const config = this.config();
      if (this.updateStyle(config)) {
        this.changeTheme();
      }
      this.changeScale(config.scale);
      this.onConfigUpdate();
    });
  }
  updateStyle(config) {
    return config.theme !== this._config.theme || config.colorScheme !== this._config.colorScheme;
  }
  // onMenuToggle() {
  //     if (this.isOverlay()) {
  //         this.state.overlayMenuActive = !this.state.overlayMenuActive;
  //         if (this.state.overlayMenuActive) {
  //             this.overlayOpen.next(null);
  //         }
  //     }
  //     if (this.isDesktop()) {
  //         this.state.staticMenuDesktopInactive =
  //             !this.state.staticMenuDesktopInactive;
  //     } else {
  //         this.state.staticMenuMobileActive =
  //             !this.state.staticMenuMobileActive;
  //         if (this.state.staticMenuMobileActive) {
  //             this.overlayOpen.next(null);
  //         }
  //     }
  // }
  showProfileSidebar() {
    this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
    if (this.state.profileSidebarVisible) {
      this.overlayOpen.next(null);
    }
  }
  showConfigSidebar() {
    this.state.configSidebarVisible = true;
  }
  isOverlay() {
    return this.config().menuMode === "overlay";
  }
  isDesktop() {
    return window.innerWidth > 991;
  }
  isMobile() {
    return !this.isDesktop();
  }
  onConfigUpdate() {
    this._config = __spreadValues({}, this.config());
    this.configUpdate.next(this.config());
  }
  changeTheme() {
    const config = this.config();
    const themeLink = document.getElementById("theme-css");
    const themeLinkHref = themeLink.getAttribute("href");
    const newHref = themeLinkHref.split("/").map((el) => el == this._config.theme ? el = config.theme : el == `theme-${this._config.colorScheme}` ? el = `theme-${config.colorScheme}` : el).join("/");
    this.replaceThemeLink(newHref);
  }
  replaceThemeLink(href) {
    const id = "theme-css";
    const themeLink = document.getElementById(id);
    const cloneLinkElement = themeLink.cloneNode(true);
    cloneLinkElement.setAttribute("href", href);
    cloneLinkElement.setAttribute("id", id + "-clone");
    themeLink.parentNode.insertBefore(cloneLinkElement, themeLink.nextSibling);
    cloneLinkElement.addEventListener("load", () => {
      themeLink.remove();
      cloneLinkElement.setAttribute("id", id);
    });
  }
  changeScale(value) {
    document.documentElement.style.fontSize = `${value}px`;
  }
  static {
    this.\u0275fac = function LayoutService_Factory(t) {
      return new (t || _LayoutService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutService, factory: _LayoutService.\u0275fac, providedIn: "root" });
  }
};

export {
  LayoutService
};
//# sourceMappingURL=chunk-RJDWO5KX.js.map
