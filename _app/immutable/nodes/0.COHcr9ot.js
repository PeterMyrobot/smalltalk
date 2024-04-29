const __vite__fileDeps=["../chunks/auth.fkv4ZrZy.js","../chunks/firestore.GgQuWzsN.js","../chunks/index.bs6_erC4.js","../chunks/scheduler.DrQ3Y8r4.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as T}from"../chunks/preload-helper.D6kgxu3v.js";import{s as E,c as L,u as M,g as k,d as D}from"../chunks/scheduler.DrQ3Y8r4.js";import{S as I,i as V,g as f,s as b,x as j,h,y as x,f as d,c as w,j as O,k as y,z as _,a as $,d as P,t as z}from"../chunks/index.AIXbFlbz.js";const N=!1,R=!0,Y=async()=>({auth:await T(()=>import("../chunks/auth.fkv4ZrZy.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),firestore:await T(()=>import("../chunks/firestore.GgQuWzsN.js").then(a=>a.x),__vite__mapDeps([1,2,3]),import.meta.url)}),W=Object.freeze(Object.defineProperty({__proto__:null,load:Y,prerender:R,ssr:N},Symbol.toStringTag,{value:"Module"}));function A(a){let o,p=`Body,
		html {
			margin: 0;
			overflow: hidden;
			height: 100dvh;
			width: 100vw;
			position: relative;
			font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
				'Courier New', monospace;
			background-repeat: no-repeat;
			background-size: 100% auto;
		}
		input {
			outline: none;
		}`,i,e,s,C='<h1 class="pb-2 pt-4 text-2xl text-white">Small Talk</h1>',m,v,r,S="power by WTY",u;const g=a[1].default,n=L(g,a,a[0],null);return{c(){o=f("style"),o.textContent=p,i=b(),e=f("div"),s=f("div"),s.innerHTML=C,m=b(),n&&n.c(),v=b(),r=f("div"),r.textContent=S,this.h()},l(t){const l=j("svelte-1ekl1fu",document.head);o=h(l,"STYLE",{"data-svelte-h":!0}),x(o)!=="svelte-1nyooga"&&(o.textContent=p),l.forEach(d),i=w(t),e=h(t,"DIV",{class:!0});var c=O(e);s=h(c,"DIV",{class:!0,"data-svelte-h":!0}),x(s)!=="svelte-gx2wld"&&(s.innerHTML=C),m=w(c),n&&n.l(c),v=w(c),r=h(c,"DIV",{class:!0,"data-svelte-h":!0}),x(r)!=="svelte-bbhe25"&&(r.textContent=S),c.forEach(d),this.h()},h(){y(s,"class","border-b-4 mx-4 w-[300px] border-white"),y(r,"class","absolute top-0 right-0 text-vintageNavy text-xs px-2"),y(e,"class","flex flex-col h-full w-full bg-no-repeat bg-cover bg-[url('https://triptins.com/wp-content/uploads/2023/06/NYC-Sunset-Spots-728x546.jpeg.webp')] min-w-80")},m(t,l){_(document.head,o),$(t,i,l),$(t,e,l),_(e,s),_(e,m),n&&n.m(e,null),_(e,v),_(e,r),u=!0},p(t,[l]){n&&n.p&&(!u||l&1)&&M(n,g,t,t[0],u?D(g,t[0],l,null):k(t[0]),null)},i(t){u||(P(n,t),u=!0)},o(t){z(n,t),u=!1},d(t){t&&(d(i),d(e)),d(o),n&&n.d(t)}}}function H(a,o,p){let{$$slots:i={},$$scope:e}=o;return a.$$set=s=>{"$$scope"in s&&p(0,e=s.$$scope)},[e,i]}class G extends I{constructor(o){super(),V(this,o,H,A,E,{})}}export{G as component,W as universal};
