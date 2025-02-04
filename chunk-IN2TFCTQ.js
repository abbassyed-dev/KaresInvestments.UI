import{a as W}from"./chunk-53Z52N7H.js";import{a as b}from"./chunk-NOY35YRT.js";import{a as k,b as L}from"./chunk-VO7ZOAGY.js";import{Bb as T,Cb as N,Db as F,Ea as S,G as p,H as n,P as u,Pa as C,Qa as _,Ta as y,U as a,V as s,_ as g,_b as A,ha as c,kb as x,la as f,ma as h,mb as j,na as w,pa as M,q as m,rb as I,sb as E,u as v,v as d,vb as P}from"./chunk-ROPZCFEG.js";var z=()=>["/kares/forgotpassword"],R=(()=>{class t{constructor(r,e,i,l,o,O){this.layoutService=r,this.loginService=e,this.cookieService=i,this.router=l,this.toastr=o,this.authStateService=O,this.email="",this.password=""}login(){let r={email:this.email,password:this.password};this.loginService.login(r).subscribe({next:e=>{this.cookieService.set("Authorization",`Bearer ${e.token}`,void 0,"/",void 0,!0,"Strict"),console.log(e),this.authStateService.setUser(e),e.isAdmin?this.router.navigate(["/dashboard/admin"]):this.router.navigate(["/dashboard/user"])},error:e=>{e?.message?this.toastr.error(e.message):this.toastr.error("An unexpected error occurred.","Error")}})}static{this.\u0275fac=function(e){return new(e||t)(n(b),n(W),n(k),n(C),n(x),n(L))}}static{this.\u0275cmp=v({type:t,selectors:[["app-login"]],decls:15,vars:5,consts:[[1,"surface-ground","flex","align-items-center","justify-content-center","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],[2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"w-full","surface-card","py-8","px-5","sm:px-8",2,"border-radius","53px"],["for","email1",1,"block","text-900","text-xl","font-medium","mb-2"],["id","email1","type","text","placeholder","Email address","pInputText","",1,"w-full","md:w-30rem","mb-5",2,"padding","1rem",3,"ngModelChange","ngModel"],["for","password1",1,"block","text-900","font-medium","text-xl","mb-2"],["id","password1","placeholder","Password","styleClass","mb-5","inputStyleClass","w-full p-3 md:w-30rem",3,"ngModelChange","keydown.enter","ngModel","toggleMask"],[1,"flex","align-items-center","justify-content-between","mb-5","gap-5"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer",2,"color","var(--primary-color)",3,"routerLink"],["pButton","","label","Sign In",1,"w-full","p-3","text-xl",3,"click"]],template:function(e,i){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"label",4),c(6,"Email"),s(),a(7,"input",5),w("ngModelChange",function(o){return h(i.email,o)||(i.email=o),o}),s(),a(8,"label",6),c(9,"Password"),s(),a(10,"p-password",7),w("ngModelChange",function(o){return h(i.password,o)||(i.password=o),o}),g("keydown.enter",function(){return i.login()}),s(),a(11,"div",8)(12,"a",9),c(13,"Forgot password?"),s()(),a(14,"button",10),g("click",function(){return i.login()}),s()()()()()()),e&2&&(p(7),f("ngModel",i.email),p(3),f("ngModel",i.password),u("toggleMask",!0),p(2),u("routerLink",M(4,z)))},dependencies:[_,I,E,P,j,N,F],styles:["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}"]})}}return t})();var D=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=d({type:t})}static{this.\u0275inj=m({imports:[y.forChild([{path:"",component:R}]),y]})}}return t})();var le=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=d({type:t})}static{this.\u0275inj=m({imports:[S,D,T,A]})}}return t})();export{le as LoginModule};
