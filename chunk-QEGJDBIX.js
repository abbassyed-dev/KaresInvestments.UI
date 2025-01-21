import{a as j}from"./chunk-RNLOHHO3.js";import{a as L,b as I}from"./chunk-5HWZULZQ.js";import{Aa as b,Ca as x,E as c,F as n,La as _,N as C,Oa as w,S as a,Sb as D,T as s,Y as u,ea as p,eb as k,gb as E,ia as f,ja as g,ka as h,kb as P,lb as T,mb as N,n as v,o as m,pb as B,q as M,s as S,t as d,vb as F,wb as W,xb as A}from"./chunk-NML6KXAP.js";var R=(()=>{class e{constructor(i){this.http=i}login(i){return this.http.post(`${P.apiBaseUrl}/api/auth/login`,{email:i.email,password:i.password})}static{this.\u0275fac=function(t){return new(t||e)(M(x))}}static{this.\u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var O=(()=>{class e{constructor(i,t,o,l,r,z){this.layoutService=i,this.loginService=t,this.cookieService=o,this.router=l,this.toastr=r,this.authStateService=z,this.email="",this.password="",this.isSubmitting=!1}login(){let i={email:this.email,password:this.password};this.loginService.login(i).subscribe({next:t=>{this.cookieService.set("Authorization",`Bearer ${t.token}`,void 0,"/",void 0,!0,"Strict"),console.log(t),this.authStateService.setUser(t),t.isAdmin?this.router.navigate(["/dashboard/admin"]):this.router.navigate(["/dashboard/user"])},error:t=>{t?.message?this.toastr.error(t.message):this.toastr.error("An unexpected error occurred.","Error")}})}static{this.\u0275fac=function(t){return new(t||e)(n(j),n(R),n(L),n(_),n(k),n(I))}}static{this.\u0275cmp=S({type:e,selectors:[["app-login"]],decls:15,vars:3,consts:[[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],[2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"w-full","surface-card","py-8","px-5","sm:px-8",2,"border-radius","53px"],["for","email1",1,"block","text-900","text-xl","font-medium","mb-2"],["id","email1","type","text","placeholder","Email address","pInputText","",1,"w-full","md:w-30rem","mb-5",2,"padding","1rem",3,"ngModelChange","ngModel"],["for","password1",1,"block","text-900","font-medium","text-xl","mb-2"],["id","password1","placeholder","Password","styleClass","mb-5","inputStyleClass","w-full p-3 md:w-30rem",3,"ngModelChange","keydown.enter","ngModel","toggleMask"],[1,"flex","align-items-center","justify-content-between","mb-5","gap-5"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer",2,"color","var(--primary-color)"],["pButton","","label","Sign In",1,"w-full","p-3","text-xl",3,"click"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"label",4),p(6,"Email"),s(),a(7,"input",5),h("ngModelChange",function(r){return g(o.email,r)||(o.email=r),r}),s(),a(8,"label",6),p(9,"Password"),s(),a(10,"p-password",7),h("ngModelChange",function(r){return g(o.password,r)||(o.password=r),r}),u("keydown.enter",function(){return o.login()}),s(),a(11,"div",8)(12,"a",9),p(13,"Forgot password?"),s()(),a(14,"button",10),u("click",function(){return o.login()}),s()()()()()()),t&2&&(c(7),f("ngModel",o.email),c(3),f("ngModel",o.password),C("toggleMask",!0))},dependencies:[T,N,B,E,W,A],styles:["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}"]})}}return e})();var U=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=m({imports:[w.forChild([{path:"",component:O}]),w]})}}return e})();var pe=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=m({imports:[b,U,F,D]})}}return e})();export{pe as LoginModule};
