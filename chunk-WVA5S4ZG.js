import{a as K,c as Q}from"./chunk-F4V6GCAZ.js";import{b as A}from"./chunk-VW3QOYMC.js";import{$b as Y,C as M,D as P,Fb as G,Ga as f,Gb as V,Ha as R,Ia as $,K as a,Ka as B,L as c,R as g,Rb as W,T as w,Xa as I,Y as i,Z as r,_ as v,ac as q,ba as F,bc as z,ca as N,da as x,dc as J,e as U,ga as j,ka as S,kb as H,la as n,ma as s,na as b,ob as k,t as D,ta as O,u as p,ub as C,va as u,w as _,wa as y,xa as L,y as E,z as d}from"./chunk-6R4ETBS4.js";var X=U(K());var h=(()=>{class e{constructor(t){this.http=t}getUserTransactions(t){return this.http.get(`${C.apiBaseUrl}/api/UserTransaction/${t}`)}getUserDashboardStats(t){return this.http.get(`${C.apiBaseUrl}/api/User/user-stats?userId=${t}`)}static{this.\u0275fac=function(o){return new(o||e)(_(B))}}static{this.\u0275prov=D({token:e,factory:e.\u0275fac})}}return e})();var nt=()=>["amount","portfolioName"];function at(e,m){if(e&1&&(i(0,"div",12)(1,"label",13),n(2,"Total Investment:"),r(),i(3,"span"),n(4),u(5,"currency"),r()(),i(6,"div",12)(7,"label",13),n(8,"No of Dividends Paid:"),r(),i(9,"span"),n(10),r()(),i(11,"div",12)(12,"label",13),n(13,"Dividends total:"),r(),i(14,"span"),n(15),u(16,"currency"),r()(),i(17,"div",12)(18,"label",13),n(19,"Return on Investment:"),r(),i(20,"span"),n(21),r()(),i(22,"div",12)(23,"label",13),n(24,"Return of Capital:"),r(),i(25,"span"),n(26),r()()),e&2){let t=x();a(4),s(y(5,5,t.userStats.totalInvestment||0)),a(6),s(t.userStats.numberOfDividendsPaid||0),a(5),s(y(16,7,t.userStats.totalDividendsPaid||0)),a(6),b("",t.userStats.returnOnInvestment,"%"),a(5),b("",t.userStats.returnOfCapital,"%")}}function ot(e,m){if(e&1){let t=F();i(0,"div",14),n(1," Your Transactions "),i(2,"p-iconField",15)(3,"p-inputIcon"),v(4,"i",16),r(),i(5,"input",17,1),N("input",function(){M(t);let l=S(6);x();let it=S(8);return P(it.filterGlobal(l.value,"contains"))}),r()()()}}function st(e,m){e&1&&(i(0,"tr")(1,"th"),n(2,"Portfolio"),r(),i(3,"th"),n(4,"Transaction Type"),r(),i(5,"th"),n(6,"Transaction Category"),r(),i(7,"th"),n(8,"Amount"),r(),i(9,"th"),n(10,"Transaction Date"),r(),i(11,"th"),n(12,"Payment Mode"),r()())}function lt(e,m){if(e&1&&(i(0,"tr")(1,"td"),n(2),r(),i(3,"td"),n(4),r(),i(5,"td"),n(6),r(),i(7,"td"),n(8),r(),i(9,"td"),n(10),u(11,"date"),r(),i(12,"td"),n(13),r()()),e&2){let t=m.$implicit;a(2),s(t.portfolioName),a(2),s(t.transactionType),a(2),s(t.transactionCategory),a(2),s(t.amount),a(2),s(L(11,6,t.transactionDate,"MM/dd/yyyy")),a(3),s(t.paymentMode)}}var Z=(()=>{class e{constructor(t,o,l){this.authStateService=t,this.toastr=o,this.dataService=l,this.Highcharts=X.default,this.updatePieChartFlag=!1,this.userName="",this.userId="",this.userStats={},this.pieChartOptions={chart:{type:"pie"},title:{text:"Investment Distribution By Portfolio"},tooltip:{pointFormat:"<b>{point.name}</b>: {point.y} ({point.percentage:.1f}%)"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1,format:"{point.name}: {point.y}"}}},series:[{type:"pie",name:"Investments",data:[10,20,30]}]}}ngOnInit(){this.userName=`${this.authStateService.getLoggedInUserProperty("lastName")} ${this.authStateService.getLoggedInUserProperty("firstName")}`,this.userId=this.authStateService.getLoggedInUserProperty("userId"),this.userId&&(this.getUserTransactions(),this.getUserStats())}getUserStats(){this.userId&&this.dataService.getUserDashboardStats(this.userId).subscribe({next:t=>{this.userStats=t,console.log("Return of Capital Data:",t)},error:t=>{console.error("Error fetching Return of Capital:",t)}})}getUserTransactions(){this.userId&&this.dataService.getUserTransactions(this.userId).subscribe(t=>{this.userTransactions=t})}static{this.\u0275fac=function(o){return new(o||e)(c(A),c(k),c(h))}}static{this.\u0275cmp=E({type:e,selectors:[["app-user-dashboard"]],decls:12,vars:7,consts:[["userTransactionsGrid",""],["searchInput",""],[1,"grid"],[1,"col-3"],["styleClass","p-shadow-4",3,"header"],["pTemplate","content"],[1,"col-12"],[1,"card"],["responsiveLayout","scroll",3,"value","paginator","rows","globalFilterFields"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"form-row"],[1,"form-label"],[1,"flex","align-items-center","justify-content-between"],["iconPosition","left",1,"ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",3,"input"]],template:function(o,l){o&1&&(i(0,"div",2)(1,"div",3)(2,"p-card",4),g(3,at,27,9,"ng-template",5),r()(),v(4,"div",3),i(5,"div",6)(6,"div",7)(7,"p-table",8,0),g(9,ot,7,0,"ng-template",9)(10,st,13,0,"ng-template",10)(11,lt,14,9,"ng-template",11),r()()()()),o&2&&(a(2),j("header","Welcome, ",l.userName,""),a(5),w("value",l.userTransactions)("paginator",!0)("rows",10)("globalFilterFields",O(6,nt)))},dependencies:[H,z,Y,q,V,W,R,f],styles:[".form-row[_ngcontent-%COMP%]{display:flex;gap:10px;margin-bottom:8px}.form-label[_ngcontent-%COMP%]{font-weight:700;text-align:right}"]})}}return e})();var tt=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=p({imports:[I.forChild([{path:"",component:Z}]),I]})}}return e})();var et=U(K());et.setOptions({chart:{backgroundColor:"#2a323d"},title:{style:{color:"#ffffff"}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.7)",style:{color:"#fff"}},xAxis:{gridLineColor:"#555",labels:{style:{color:"#aaa"}}},yAxis:{gridLineColor:"#555",labels:{style:{color:"#aaa"}}},legend:{itemStyle:{color:"#ffffff"}}});var Ft=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=p({providers:[h,f],imports:[$,G,J,tt,Q]})}}return e})();export{Ft as UserDashboardModule};
