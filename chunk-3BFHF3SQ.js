import{ab as o,l as s,o as r}from"./chunk-TECJYZDJ.js";var d=(()=>{class e{constructor(t){this.http=t}getProductsSmall(){return this.http.get("assets/demo/data/products-small.json").toPromise().then(t=>t.data).then(t=>t)}getProducts(){return this.http.get("assets/demo/data/products.json").toPromise().then(t=>t.data).then(t=>t)}getProductsMixed(){return this.http.get("assets/demo/data/products-mixed.json").toPromise().then(t=>t.data).then(t=>t)}getProductsWithOrdersSmall(){return this.http.get("assets/demo/data/products-orders-small.json").toPromise().then(t=>t.data).then(t=>t)}static{this.\u0275fac=function(a){return new(a||e)(r(o))}}static{this.\u0275prov=s({token:e,factory:e.\u0275fac})}}return e})();export{d as a};