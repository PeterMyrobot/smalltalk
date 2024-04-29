const __vite__fileDeps=["../chunks/auth.fkv4ZrZy.js","../chunks/firestore.GgQuWzsN.js","../chunks/index.bs6_erC4.js","../chunks/scheduler.DrQ3Y8r4.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as $}from"../chunks/preload-helper.D6kgxu3v.js";import{s as L,c as M,u as S,g as k,d as D}from"../chunks/scheduler.DrQ3Y8r4.js";import{S as I,i as V,g as f,s as x,x as j,h,y as b,f as d,c as y,j as O,k as w,z as _,a as E,d as P,t as z}from"../chunks/index.AIXbFlbz.js";const R=!1,A=!0,H=async()=>({auth:await $(()=>import("../chunks/auth.fkv4ZrZy.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),firestore:await $(()=>import("../chunks/firestore.GgQuWzsN.js").then(n=>n.x),__vite__mapDeps([1,2,3]),import.meta.url)}),W=Object.freeze(Object.defineProperty({__proto__:null,load:H,prerender:A,ssr:R},Symbol.toStringTag,{value:"Module"}));function N(n){let s,p=`Body,
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
		}`,i,e,a,C='<h1 class="pb-2 pt-4 text-2xl text-white">Small Talk</h1>',m,v,r,T="power by WTY",u;const g=n[1].default,o=M(g,n,n[0],null);return{c(){s=f("style"),s.textContent=p,i=x(),e=f("div"),a=f("div"),a.innerHTML=C,m=x(),o&&o.c(),v=x(),r=f("div"),r.textContent=T,this.h()},l(t){const l=j("svelte-1ekl1fu",document.head);s=h(l,"STYLE",{"data-svelte-h":!0}),b(s)!=="svelte-1nyooga"&&(s.textContent=p),l.forEach(d),i=y(t),e=h(t,"DIV",{class:!0});var c=O(e);a=h(c,"DIV",{class:!0,"data-svelte-h":!0}),b(a)!=="svelte-gx2wld"&&(a.innerHTML=C),m=y(c),o&&o.l(c),v=y(c),r=h(c,"DIV",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-bbhe25"&&(r.textContent=T),c.forEach(d),this.h()},h(){w(a,"class","border-b-4 mx-4 w-[300px] border-white"),w(r,"class","absolute top-0 right-0 text-vintageNavy text-xs px-2"),w(e,"class","flex flex-col h-full w-full bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] min-w-80")},m(t,l){_(document.head,s),E(t,i,l),E(t,e,l),_(e,a),_(e,m),o&&o.m(e,null),_(e,v),_(e,r),u=!0},p(t,[l]){o&&o.p&&(!u||l&1)&&S(o,g,t,t[0],u?D(g,t[0],l,null):k(t[0]),null)},i(t){u||(P(o,t),u=!0)},o(t){z(o,t),u=!1},d(t){t&&(d(i),d(e)),d(s),o&&o.d(t)}}}function Y(n,s,p){let{$$slots:i={},$$scope:e}=s;return n.$$set=a=>{"$$scope"in a&&p(0,e=a.$$scope)},[e,i]}class G extends I{constructor(s){super(),V(this,s,Y,N,L,{})}}export{G as component,W as universal};
