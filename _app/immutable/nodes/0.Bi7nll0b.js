const __vite__fileDeps=["../chunks/auth.CQ50IQID.js","../chunks/firestore.CrEOeY0z.js","../chunks/index.bs6_erC4.js","../chunks/scheduler.DrQ3Y8r4.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as T}from"../chunks/preload-helper.D6kgxu3v.js";import{s as j,c as E,u as L,g as M,d as D}from"../chunks/scheduler.DrQ3Y8r4.js";import{S as I,i as V,g as f,s as b,x as k,h,y as x,f as d,c as w,j as O,k as y,z as _,a as $,d as P,t as z}from"../chunks/index.AIXbFlbz.js";const N=!1,R=!0,Y=async()=>({auth:await T(()=>import("../chunks/auth.CQ50IQID.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),firestore:await T(()=>import("../chunks/firestore.CrEOeY0z.js").then(a=>a.x),__vite__mapDeps([1,2,3]),import.meta.url)}),W=Object.freeze(Object.defineProperty({__proto__:null,load:Y,prerender:R,ssr:N},Symbol.toStringTag,{value:"Module"}));function q(a){let s,p=`Body,html{
            margin:0;
            overflow:hidden;
            height: 100vh;
            width: 100vw;
            position: relative;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            background-repeat: no-repeat;
            background-size: 100% auto;
        }
        input {
            outline: none;
        }`,i,e,o,C='<h1 class="pb-2 pt-4 text-2xl text-white">Small Talk</h1>',m,v,r,S="power by WTY",u;const g=a[1].default,n=E(g,a,a[0],null);return{c(){s=f("style"),s.textContent=p,i=b(),e=f("div"),o=f("div"),o.innerHTML=C,m=b(),n&&n.c(),v=b(),r=f("div"),r.textContent=S,this.h()},l(t){const l=k("svelte-16u6xrj",document.head);s=h(l,"STYLE",{"data-svelte-h":!0}),x(s)!=="svelte-fj0ggq"&&(s.textContent=p),l.forEach(d),i=w(t),e=h(t,"DIV",{class:!0});var c=O(e);o=h(c,"DIV",{class:!0,"data-svelte-h":!0}),x(o)!=="svelte-825jvi"&&(o.innerHTML=C),m=w(c),n&&n.l(c),v=w(c),r=h(c,"DIV",{class:!0,"data-svelte-h":!0}),x(r)!=="svelte-bbhe25"&&(r.textContent=S),c.forEach(d),this.h()},h(){y(o,"class","border-b-4 mx-4 w-[300px] border-white"),y(r,"class","absolute top-0 right-0 text-vintageNavy text-xs px-2"),y(e,"class",'flex flex-col h-full w-full bg-no-repeat bg-cover bg-[url("https://triptins.com/wp-content/uploads/2023/06/NYC-Sunset-Spots-728x546.jpeg.webp")] min-w-80 ')},m(t,l){_(document.head,s),$(t,i,l),$(t,e,l),_(e,o),_(e,m),n&&n.m(e,null),_(e,v),_(e,r),u=!0},p(t,[l]){n&&n.p&&(!u||l&1)&&L(n,g,t,t[0],u?D(g,t[0],l,null):M(t[0]),null)},i(t){u||(P(n,t),u=!0)},o(t){z(n,t),u=!1},d(t){t&&(d(i),d(e)),d(s),n&&n.d(t)}}}function A(a,s,p){let{$$slots:i={},$$scope:e}=s;return a.$$set=o=>{"$$scope"in o&&p(0,e=o.$$scope)},[e,i]}class G extends I{constructor(s){super(),V(this,s,A,q,j,{})}}export{G as component,W as universal};
