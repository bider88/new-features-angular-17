import{a as k}from"./chunk-TKNYFYCL.js";import{d as I}from"./chunk-BSR2PGJ4.js";import{a as R}from"./chunk-LCIAXDXK.js";import{$a as a,Bb as m,Ea as f,Ja as C,L as g,O as x,Ta as b,V as u,Va as j,_ as w,_a as c,ab as h,cb as D,ga as S,ib as d,jb as y,ma as p,nb as _,wa as l}from"./chunk-K3I3FMIH.js";function v(n,e){let s=!e?.manualCleanup;s&&!e?.injector&&S(v);let i=s?e?.injector?.get(p)??u(p):null,t;e?.requireSync?t=f({kind:0}):t=f({kind:1,value:e?.initialValue});let r=n.subscribe({next:o=>t.set({kind:1,value:o}),error:o=>{if(e?.rejectErrors)throw o;t.set({kind:2,error:o})}});return i?.onDestroy(r.unsubscribe.bind(r)),m(()=>{let o=t();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new x(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}function O(n,e){if(n&1&&(h(0,"img",2),c(1,"h3",3),d(2),a(),c(3,"p"),d(4),a()),n&2){let s,i,t,r=D();b("alt",(s=r.user())==null?null:s.first_name)("srcset",(i=r.user())==null?null:i.avatar),l(2),y(r.fullName()),l(2),y((t=r.user())==null?null:t.email)}}function U(n,e){n&1&&(c(0,"p",3),d(1,"Loading..."),a())}var K=(()=>{let e=class e{constructor(){this.route=u(I),this.userService=u(k),this.user=v(this.route.params.pipe(g(({id:i})=>this.userService.getUserById(i)))),this.fullName=m(()=>this.user()?`${this.user()?.first_name} ${this.user()?.last_name}`:"")}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=w({type:e,selectors:[["ng-component"]],standalone:!0,features:[_],decls:4,vars:2,consts:[[3,"title"],[1,"rounded","shadow-xl","p-5","w-full","flex","justify-center","items-center","flex-col"],[1,"rounded-full","mb-3",3,"alt","srcset"],[1,"font-bold"]],template:function(t,r){t&1&&(h(0,"app-title",0),c(1,"section",1),C(2,O,5,4)(3,U,2,0),a()),t&2&&(b("title","User info: "+r.fullName()),l(2),j(2,r.user()?2:3))},dependencies:[R],encapsulation:2});let n=e;return n})();export{K as default};