import{Ga as a,p as o,qb as r,s as e}from"./chunk-ROPZCFEG.js";var l=(()=>{class i{constructor(t){this.http=t}login(t){return this.http.post(`${r.apiBaseUrl}/api/auth/login`,{email:t.email,password:t.password})}resetPassword(t){return this.http.post(`${r.apiBaseUrl}/api/auth/reset-password`,JSON.stringify(t),{headers:{"Content-Type":"application/json"}})}static{this.\u0275fac=function(s){return new(s||i)(e(a))}}static{this.\u0275prov=o({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{l as a};
