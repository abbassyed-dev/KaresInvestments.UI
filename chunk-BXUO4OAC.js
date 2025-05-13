import {
  DatePipe,
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YYKS4PBP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// src/app/admin/users/users.service.ts
var UsersService = class _UsersService {
  constructor(http, datePipe) {
    this.http = http;
    this.datePipe = datePipe;
  }
  getAllUsers(fetchAdmin) {
    return this.http.get(`${environment.apiBaseUrl}/api/User/${fetchAdmin}`);
  }
  saveUser(user) {
    const payload = __spreadProps(__spreadValues({}, user), {
      dateOfBirth: this.getFormattedDate(user.dateOfBirth)
    });
    return this.http.post(`${environment.apiBaseUrl}/api/User`, payload);
  }
  updateUser(id, user) {
    const payload = __spreadProps(__spreadValues({}, user), {
      dateOfBirth: this.getFormattedDate(user.dateOfBirth)
    });
    return this.http.put(`${environment.apiBaseUrl}/api/User/${id}`, payload);
  }
  changePassword(payload) {
    return this.http.post(`${environment.apiBaseUrl}/api/User/changePassword`, payload);
  }
  getUserById(userId) {
    return this.http.get(`${environment.apiBaseUrl}/api/User/${userId}`);
  }
  // Function to convert date to UTC and format it in 'yyyy-MM-dd' format
  getFormattedDate(date) {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    console.log(utcDate);
    return this.datePipe.transform(utcDate, "yyyy-MM-dd");
  }
  deleteUser(id) {
    return this.http.delete(`${environment.apiBaseUrl}/api/User/${id}`);
  }
  getLookup() {
    return this.http.get(`${environment.apiBaseUrl}/api/UserPortfolio/Lookup`);
  }
  checkEmailExists(email) {
    debugger;
    return this.http.get(`${environment.apiBaseUrl}/api/User/check-email?email=${email}`);
  }
  static {
    this.\u0275fac = function UsersService_Factory(t) {
      return new (t || _UsersService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(DatePipe));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsersService, factory: _UsersService.\u0275fac });
  }
};

export {
  UsersService
};
//# sourceMappingURL=chunk-BXUO4OAC.js.map
