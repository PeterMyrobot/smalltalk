import{s as R,n as N,e as A,a as W,b as Y,r as q}from"../chunks/scheduler.DrQ3Y8r4.js";import{S as X,i as G,e as C,a as U,f as w,g as I,m as F,s as T,h as y,j as E,n as L,c as S,k as p,z as b,o as j,t as M,b as J,d as D,p as K,y as Q,A as B,B as V,C as Z,D as $,r as ee,u as te,v as se,w as le}from"../chunks/index.AIXbFlbz.js";import{c as ne}from"../chunks/firestore.-PTaoD_l.js";import{authState as ae}from"../chunks/auth.BD1w0dmA.js";function H(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function P(l){let t,e,s=l[0].userName+"",n,r,a,f,o=l[0].content+"",c,v;return{c(){t=I("div"),e=I("div"),n=F(s),a=T(),f=I("div"),c=F(o),this.h()},l(g){t=y(g,"DIV",{class:!0});var d=E(t);e=y(d,"DIV",{class:!0});var i=E(e);n=L(i,s),i.forEach(w),a=S(d),f=y(d,"DIV",{class:!0});var _=E(f);c=L(_,o),_.forEach(w),d.forEach(w),this.h()},h(){p(e,"class",r="text-white "+(l[0].userid===l[1].uid?" ml-auto":"")),p(f,"class",v="max-w-md px-4 py-2 rounded-2xl my-2 "+(l[0].userid===l[1].uid?"bg-vintageBeige ml-auto":"bg-white")),p(t,"class","flex flex-col items-start whitespace-break-spaces")},m(g,d){U(g,t,d),b(t,e),b(e,n),b(t,a),b(t,f),b(f,c)},p(g,d){d&1&&s!==(s=g[0].userName+"")&&j(n,s),d&3&&r!==(r="text-white "+(g[0].userid===g[1].uid?" ml-auto":""))&&p(e,"class",r),d&1&&o!==(o=g[0].content+"")&&j(c,o),d&3&&v!==(v="max-w-md px-4 py-2 rounded-2xl my-2 "+(g[0].userid===g[1].uid?"bg-vintageBeige ml-auto":"bg-white"))&&p(f,"class",v)},d(g){g&&w(t)}}}function re(l){let t,e=l[1]!==null&&P(l);return{c(){e&&e.c(),t=C()},l(s){e&&e.l(s),t=C()},m(s,n){e&&e.m(s,n),U(s,t,n)},p(s,[n]){s[1]!==null?e?e.p(s,n):(e=P(s),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:N,o:N,d(s){s&&w(t),e&&e.d(s)}}}function ie(l,t,e){let s;A(l,ne,r=>e(1,s=r));let{message:n}=t;return l.$$set=r=>{"message"in r&&e(0,n=r.message)},[n,s]}class oe extends X{constructor(t){super(),G(this,t,ie,re,R,{message:0})}}function O(l,t,e){const s=l.slice();return s[18]=t[e],s}function ue(l){let t,e,s,n,r,a,f,o="Send",c,v,g,d=H(l[1].reverse()),i=[];for(let u=0;u<d.length;u+=1)i[u]=z(O(l,d,u));const _=u=>M(i[u],1,1,()=>{i[u]=null});return{c(){t=I("main"),e=I("div");for(let u=0;u<i.length;u+=1)i[u].c();s=T(),n=I("form"),r=I("textarea"),a=T(),f=I("button"),f.textContent=o,this.h()},l(u){t=y(u,"MAIN",{class:!0});var m=E(t);e=y(m,"DIV",{class:!0});var h=E(e);for(let k=0;k<i.length;k+=1)i[k].l(h);h.forEach(w),s=S(m),n=y(m,"FORM",{class:!0});var x=E(n);r=y(x,"TEXTAREA",{class:!0}),E(r).forEach(w),a=S(x),f=y(x,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),Q(f)!=="svelte-1sb5fs5"&&(f.textContent=o),x.forEach(w),m.forEach(w),this.h()},h(){p(e,"class","flex-auto overflow-scroll "),p(r,"class","flex-1 resize-none"),p(f,"type","submit"),p(f,"class","ml-4 bg-vintageBeige rounded-md p-3"),p(n,"class","bg-vintageNavy p-3 flex "),p(t,"class","flex flex-1 flex-col overflow-scroll")},m(u,m){U(u,t,m),b(t,e);for(let h=0;h<i.length;h+=1)i[h]&&i[h].m(e,null);l[14](e),b(t,s),b(t,n),b(n,r),B(r,l[4]),b(n,a),b(n,f),c=!0,v||(g=[V(r,"input",l[15]),V(n,"submit",Z(l[10]))],v=!0)},p(u,m){if(m&2){d=H(u[1].reverse());let h;for(h=0;h<d.length;h+=1){const x=O(u,d,h);i[h]?(i[h].p(x,m),D(i[h],1)):(i[h]=z(x),i[h].c(),D(i[h],1),i[h].m(e,null))}for(K(),h=d.length;h<i.length;h+=1)_(h);J()}m&16&&B(r,u[4])},i(u){if(!c){for(let m=0;m<d.length;m+=1)D(i[m]);c=!0}},o(u){i=i.filter(Boolean);for(let m=0;m<i.length;m+=1)M(i[m]);c=!1},d(u){u&&w(t),$(i,u),l[14](null),v=!1,q(g)}}}function ce(l){let t,e="<span>Loading User Data...</span>";return{c(){t=I("main"),t.innerHTML=e,this.h()},l(s){t=y(s,"MAIN",{class:!0,"data-svelte-h":!0}),Q(t)!=="svelte-esg4ym"&&(t.innerHTML=e),this.h()},h(){p(t,"class","center")},m(s,n){U(s,t,n)},p:N,i:N,o:N,d(s){s&&w(t)}}}function fe(l){let t,e,s,n,r,a,f,o,c,v,g,d;return{c(){t=I("main"),e=I("div"),s=I("div"),n=I("input"),r=T(),a=I("input"),f=T(),o=I("div"),c=I("button"),v=F("LogIn"),this.h()},l(i){t=y(i,"MAIN",{class:!0});var _=E(t);e=y(_,"DIV",{class:!0});var u=E(e);s=y(u,"DIV",{class:!0});var m=E(s);n=y(m,"INPUT",{class:!0,type:!0,placeholder:!0}),r=S(m),a=y(m,"INPUT",{class:!0,type:!0,placeholder:!0}),m.forEach(w),f=S(u),o=y(u,"DIV",{class:!0});var h=E(o);c=y(h,"BUTTON",{class:!0});var x=E(c);v=L(x,"LogIn"),x.forEach(w),h.forEach(w),u.forEach(w),_.forEach(w),this.h()},h(){p(n,"class","px-2 box-border rounded-md h-8 border-2 border-vintageBeige border-solid"),p(n,"type","email"),p(n,"placeholder","Email"),p(a,"class","px-2 box-border rounded-md h-8 border-2 border-vintageBeige border-solid"),p(a,"type","password"),p(a,"placeholder","Password"),p(s,"class","flex flex-col space-y-4"),p(c,"class","p-2 rounded-md hover:text-vintageBeige active:opacity-80 text-white"),c.disabled=he,p(o,"class","flex space-x-4 justify-end"),p(e,"class","flex flex-col p-4 backdrop-blur-lg w-1/3 h-1/3 min-w-80 justify-between shadow-lg"),p(t,"class","flex justify-center items-center h-full w-full ")},m(i,_){U(i,t,_),b(t,e),b(e,s),b(s,n),B(n,l[2]),b(s,r),b(s,a),B(a,l[3]),b(e,f),b(e,o),b(o,c),b(c,v),g||(d=[V(n,"input",l[12]),V(a,"input",l[13]),V(c,"click",l[9])],g=!0)},p(i,_){_&4&&n.value!==i[2]&&B(n,i[2]),_&8&&a.value!==i[3]&&B(a,i[3])},i:N,o:N,d(i){i&&w(t),g=!1,q(d)}}}function z(l){let t,e,s,n;return e=new oe({props:{message:l[18]}}),{c(){t=I("div"),ee(e.$$.fragment),s=T(),this.h()},l(r){t=y(r,"DIV",{class:!0});var a=E(t);te(e.$$.fragment,a),s=S(a),a.forEach(w),this.h()},h(){p(t,"class","px-4")},m(r,a){U(r,t,a),se(e,t,null),b(t,s),n=!0},p(r,a){const f={};a&2&&(f.message=r[18]),e.$set(f)},i(r){n||(D(e.$$.fragment,r),n=!0)},o(r){M(e.$$.fragment,r),n=!1},d(r){r&&w(t),le(e)}}}function de(l){let t,e,s,n;const r=[fe,ce,ue],a=[];function f(o,c){return o[5]==null?0:o[6]===null?1:2}return t=f(l),e=a[t]=r[t](l),{c(){e.c(),s=C()},l(o){e.l(o),s=C()},m(o,c){a[t].m(o,c),U(o,s,c),n=!0},p(o,[c]){let v=t;t=f(o),t===v?a[t].p(o,c):(K(),M(a[v],1,1,()=>{a[v]=null}),J(),e=a[t],e?e.p(o,c):(e=a[t]=r[t](o),e.c()),D(e,1),e.m(s.parentNode,s))},i(o){n||(D(e),n=!0)},o(o){M(e),n=!1},d(o){o&&w(s),a[t].d(o)}}}let he=!1;function me(l,t,e){let s,n,r;A(l,ae,k=>e(5,n=k));let{data:a}=t;a.auth.authState;let f=a.firestore.currentFirestoreUser;A(l,f,k=>e(6,r=k));let o=a.firestore.messagesState;A(l,o,k=>e(1,s=k));let c="",v="";async function g(){await a.auth.signIn(c,v)}let d="";function i(){d!==""&&(a.firestore.sendMessage(d),e(4,d=""))}let _;W(()=>{_!=null&&_.scroll({top:_.scrollHeight,behavior:"smooth"})});function u(){c=this.value,e(2,c)}function m(){v=this.value,e(3,v)}function h(k){Y[k?"unshift":"push"](()=>{_=k,e(0,_)})}function x(){d=this.value,e(4,d)}return l.$$set=k=>{"data"in k&&e(11,a=k.data)},l.$$.update=()=>{l.$$.dirty&3&&s&&_!=null&&(console.log(_),_.scroll({top:_.scrollHeight,behavior:"smooth"}))},[_,s,c,v,d,n,r,f,o,g,i,a,u,m,h,x]}class be extends X{constructor(t){super(),G(this,t,me,de,R,{data:11})}}export{be as component};
