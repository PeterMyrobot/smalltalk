const __vite__fileDeps=["../chunks/auth.DMDfIuwr.js","../chunks/firestore.BnDufHBz.js","../chunks/index.BwayPK1-.js","../chunks/scheduler.CJTF64ph.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as L}from"../chunks/preload-helper.D6kgxu3v.js";import{s as z,u as D,f,a as v,v as I,g as h,w as E,d as p,c as g,h as M,j as b,x as u,i as S,y as V,z as j,A as k}from"../chunks/scheduler.CJTF64ph.js";import{S as O,i as P,a as A,t as R}from"../chunks/index.DVmUhgqR.js";const q=!1,H=!0,N=async()=>({auth:await L(()=>import("../chunks/auth.DMDfIuwr.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),firestore:await L(()=>import("../chunks/firestore.BnDufHBz.js").then(n=>n.z),__vite__mapDeps([1,2,3]),import.meta.url)}),J=Object.freeze(Object.defineProperty({__proto__:null,load:N,prerender:H,ssr:q},Symbol.toStringTag,{value:"Module"}));function Y(n){let o,m=`Body,
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
		}`,c,e,a,T='<h1 class="pb-2 pt-4 text-2xl text-white">Small Talk</h1>',x,y,_,w,i,$="power by WTY",d;const C=n[1].default,s=D(C,n,n[0],null);return{c(){o=f("style"),o.textContent=m,c=v(),e=f("div"),a=f("div"),a.innerHTML=T,x=v(),s&&s.c(),y=v(),_=f("div"),w=v(),i=f("div"),i.textContent=$,this.h()},l(t){const l=I("svelte-1ekl1fu",document.head);o=h(l,"STYLE",{"data-svelte-h":!0}),E(o)!=="svelte-1nyooga"&&(o.textContent=m),l.forEach(p),c=g(t),e=h(t,"DIV",{class:!0});var r=M(e);a=h(r,"DIV",{class:!0,"data-svelte-h":!0}),E(a)!=="svelte-29ygqz"&&(a.innerHTML=T),x=g(r),s&&s.l(r),y=g(r),_=h(r,"DIV",{class:!0}),M(_).forEach(p),w=g(r),i=h(r,"DIV",{class:!0,"data-svelte-h":!0}),E(i)!=="svelte-bbhe25"&&(i.textContent=$),r.forEach(p),this.h()},h(){b(a,"class","flex border-b-4 mx-4 w-[300px] border-white justify-between"),b(_,"class","absolute h-[60px] flex top-0 right-0 items-center z-10"),b(i,"class","absolute top-0 right-0 text-vintageNavy text-xs px-2"),b(e,"class","flex flex-col h-full w-full bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] min-w-80")},m(t,l){u(document.head,o),S(t,c,l),S(t,e,l),u(e,a),u(e,x),s&&s.m(e,null),u(e,y),u(e,_),u(e,w),u(e,i),d=!0},p(t,[l]){s&&s.p&&(!d||l&1)&&V(s,C,t,t[0],d?k(C,t[0],l,null):j(t[0]),null)},i(t){d||(A(s,t),d=!0)},o(t){R(s,t),d=!1},d(t){t&&(p(c),p(e)),p(o),s&&s.d(t)}}}function B(n,o,m){let{$$slots:c={},$$scope:e}=o;return n.$$set=a=>{"$$scope"in a&&m(0,e=a.$$scope)},[e,c]}class K extends O{constructor(o){super(),P(this,o,B,Y,z,{})}}export{K as component,J as universal};
