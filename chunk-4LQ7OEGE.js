import {
  BehaviorSubject,
  DOCUMENT,
  Inject,
  Injectable,
  PLATFORM_ID,
  isPlatformBrowser,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YYKS4PBP.js";

// node_modules/ngx-cookie-service/fesm2022/ngx-cookie-service.mjs
var CookieService = class _CookieService {
  constructor(document, platformId) {
    this.document = document;
    this.platformId = platformId;
    this.documentIsAccessible = isPlatformBrowser(this.platformId);
  }
  /**
   * Get cookie Regular Expression
   *
   * @param name Cookie name
   * @returns property RegExp
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  static getCookieRegExp(name) {
    const escapedName = name.replace(/([\[\]{}()|=;+?,.*^$])/gi, "\\$1");
    return new RegExp("(?:^" + escapedName + "|;\\s*" + escapedName + ")=(.*?)(?:;|$)", "g");
  }
  /**
   * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
   *
   * @param encodedURIComponent A value representing an encoded URI component.
   *
   * @returns The unencoded version of an encoded component of a Uniform Resource Identifier (URI).
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  static safeDecodeURIComponent(encodedURIComponent) {
    try {
      return decodeURIComponent(encodedURIComponent);
    } catch {
      return encodedURIComponent;
    }
  }
  /**
   * Return `true` if {@link Document} is accessible, otherwise return `false`
   *
   * @param name Cookie name
   * @returns boolean - whether cookie with specified name exists
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  check(name) {
    if (!this.documentIsAccessible) {
      return false;
    }
    name = encodeURIComponent(name);
    const regExp = _CookieService.getCookieRegExp(name);
    return regExp.test(this.document.cookie);
  }
  /**
   * Get cookies by name
   *
   * @param name Cookie name
   * @returns property value
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  get(name) {
    if (this.documentIsAccessible && this.check(name)) {
      name = encodeURIComponent(name);
      const regExp = _CookieService.getCookieRegExp(name);
      const result = regExp.exec(this.document.cookie);
      return result[1] ? _CookieService.safeDecodeURIComponent(result[1]) : "";
    } else {
      return "";
    }
  }
  /**
   * Get all cookies in JSON format
   *
   * @returns all the cookies in json
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  getAll() {
    if (!this.documentIsAccessible) {
      return {};
    }
    const cookies = {};
    const document = this.document;
    if (document.cookie && document.cookie !== "") {
      document.cookie.split(";").forEach((currentCookie) => {
        const [cookieName, cookieValue] = currentCookie.split("=");
        cookies[_CookieService.safeDecodeURIComponent(cookieName.replace(/^ /, ""))] = _CookieService.safeDecodeURIComponent(cookieValue);
      });
    }
    return cookies;
  }
  set(name, value, expiresOrOptions, path, domain, secure, sameSite, partitioned) {
    if (!this.documentIsAccessible) {
      return;
    }
    if (typeof expiresOrOptions === "number" || expiresOrOptions instanceof Date || path || domain || secure || sameSite) {
      const optionsBody = {
        expires: expiresOrOptions,
        path,
        domain,
        secure,
        sameSite: sameSite ? sameSite : "Lax",
        partitioned
      };
      this.set(name, value, optionsBody);
      return;
    }
    let cookieString = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";";
    const options = expiresOrOptions ? expiresOrOptions : {};
    if (options.expires) {
      if (typeof options.expires === "number") {
        const dateExpires = new Date((/* @__PURE__ */ new Date()).getTime() + options.expires * 1e3 * 60 * 60 * 24);
        cookieString += "expires=" + dateExpires.toUTCString() + ";";
      } else {
        cookieString += "expires=" + options.expires.toUTCString() + ";";
      }
    }
    if (options.path) {
      cookieString += "path=" + options.path + ";";
    }
    if (options.domain) {
      cookieString += "domain=" + options.domain + ";";
    }
    if (options.secure === false && options.sameSite === "None") {
      options.secure = true;
      console.warn(`[ngx-cookie-service] Cookie ${name} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`);
    }
    if (options.secure) {
      cookieString += "secure;";
    }
    if (!options.sameSite) {
      options.sameSite = "Lax";
    }
    cookieString += "sameSite=" + options.sameSite + ";";
    if (options.partitioned) {
      cookieString += "Partitioned;";
    }
    this.document.cookie = cookieString;
  }
  /**
   * Delete cookie by name
   *
   * @param name   Cookie name
   * @param path   Cookie path
   * @param domain Cookie domain
   * @param secure Cookie secure flag
   * @param sameSite Cookie sameSite flag - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  delete(name, path, domain, secure, sameSite = "Lax") {
    if (!this.documentIsAccessible) {
      return;
    }
    const expiresDate = /* @__PURE__ */ new Date("Thu, 01 Jan 1970 00:00:01 GMT");
    this.set(name, "", {
      expires: expiresDate,
      path,
      domain,
      secure,
      sameSite
    });
  }
  /**
   * Delete all cookies
   *
   * @param path   Cookie path
   * @param domain Cookie domain
   * @param secure Is the Cookie secure
   * @param sameSite Is the cookie same site
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  deleteAll(path, domain, secure, sameSite = "Lax") {
    if (!this.documentIsAccessible) {
      return;
    }
    const cookies = this.getAll();
    for (const cookieName in cookies) {
      if (cookies.hasOwnProperty(cookieName)) {
        this.delete(cookieName, path, domain, secure, sameSite);
      }
    }
  }
  static {
    this.\u0275fac = function CookieService_Factory(t) {
      return new (t || _CookieService)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _CookieService,
      factory: _CookieService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CookieService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();

// src/app/shared/services/auth-state.service.ts
var AuthStateService = class _AuthStateService {
  constructor(cookieService) {
    this.cookieService = cookieService;
    this.$user = new BehaviorSubject(void 0);
  }
  setUser(user) {
    this.$user.next(user);
    localStorage.setItem("userDetails", JSON.stringify(user));
  }
  user() {
    return this.$user.asObservable();
  }
  getUser() {
    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      const user = JSON.parse(userDetails);
      return user;
    }
    return void 0;
  }
  logout() {
    localStorage.clear();
    this.cookieService.delete("Authorization", "/");
    this.$user.next(void 0);
  }
  getLoggedInUserEmailId() {
    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      const user = JSON.parse(userDetails);
      return user.email;
    }
    return void 0;
  }
  getLoggedInUserFullName() {
    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      const user = JSON.parse(userDetails);
      return user.lastName + " " + user.firstName;
    }
    return void 0;
  }
  getLoggedInUserUserId() {
    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      const user = JSON.parse(userDetails);
      return user.userId;
    }
    return void 0;
  }
  getLoggedInUserProperty(property) {
    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      const user = JSON.parse(userDetails);
      return user[property];
    }
    return void 0;
  }
  updateUserName(firstName, lastName) {
    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      const user = JSON.parse(userDetails);
      user.firstName = firstName;
      user.lastName = lastName;
      this.setUser(user);
      console.log("Updated");
    }
  }
  static {
    this.\u0275fac = function AuthStateService_Factory(t) {
      return new (t || _AuthStateService)(\u0275\u0275inject(CookieService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthStateService, factory: _AuthStateService.\u0275fac, providedIn: "root" });
  }
};

export {
  CookieService,
  AuthStateService
};
//# sourceMappingURL=chunk-4LQ7OEGE.js.map
