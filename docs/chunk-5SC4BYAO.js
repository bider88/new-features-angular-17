import{a as C}from"./chunk-TKNYFYCL.js";import{f as _,k as g}from"./chunk-BSR2PGJ4.js";import{a as x}from"./chunk-LCIAXDXK.js";import{$a as s,Pb as S,Ta as a,V as c,Ya as l,Za as u,_ as p,_a as o,ab as m,ib as d,lb as f,nb as v,ob as y,wa as n}from"./chunk-K3I3FMIH.js";var F=(t,e)=>e.id,L=t=>["/dashboard/user",t];function M(t,e){if(t&1&&(o(0,"a",1),m(1,"img",2),o(2,"span",3),d(3),s()()),t&2){let r=e.$implicit;a("routerLink",y(5,L,r.id)),n(),a("srcset",r.avatar)("alt",r.first_name),n(2),f(" ",r.first_name," ",r.last_name," ")}}var j=(()=>{let e=class e{constructor(){this.usersService=c(C)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["ng-component"]],standalone:!0,features:[v],decls:4,vars:0,consts:[["title","Users List"],[1,"flex","items-center","my-2","cursor-pointer","hover:bg-gray-200","rounded","p-5",3,"routerLink"],[1,"rounded-full","w-14",3,"srcset","alt"],[1,"mx-5"]],template:function(i,k){i&1&&(m(0,"app-title",0),o(1,"ul"),l(2,M,4,7,"a",1,F),s()),i&2&&(n(2),u(k.usersService.users()))},dependencies:[S,g,_,x]});let t=e;return t})();export{j as default};