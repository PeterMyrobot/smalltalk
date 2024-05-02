import{w as Ii}from"./index.BwayPK1-.js";import{a3 as _l}from"./scheduler.CJTF64ph.js";var gl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(n,e){if(!n)throw fn(e)},fn=function(n){return new Error("Firebase Database ("+oh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},jf=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[h],t[u],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ah(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):jf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new Wf;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),u!==64){const m=c<<6&192|u;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Wf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lh=function(n){const e=ah(n);return xo.encodeByteArray(e,!0)},Ys=function(n){return lh(n).replace(/\./g,"")},Lr=function(n){try{return xo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n){return ch(void 0,n)}function ch(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!zf(t)||(n[t]=ch(n[t],e[t]));return n}function zf(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=()=>Gf().__FIREBASE_DEFAULTS__,Kf=()=>{if(typeof process>"u"||typeof gl>"u")return;const n=gl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Lr(n[1]);return e&&JSON.parse(e)},Ci=()=>{try{return Hf()||Kf()||Qf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yf=n=>{var e,t;return(t=(e=Ci())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},hh=n=>{const e=Yf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},uh=()=>{var n;return(n=Ci())===null||n===void 0?void 0:n.config},eI=n=>{var e;return(e=Ci())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ys(JSON.stringify(t)),Ys(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jt())}function Xf(){var n;const e=(n=Ci())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Jf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nI(){const n=Jt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ph(){return oh.NODE_ADMIN===!0}function Zf(){return!Xf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _h(){try{return typeof indexedDB=="object"}catch{return!1}}function ep(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="FirebaseError";class pn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=tp,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gh.prototype.create)}}class gh{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?np(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pn(i,a,s)}}function np(n,e){return n.replace(sp,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const sp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n){return JSON.parse(n)}function te(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Hn(Lr(r[0])||""),t=Hn(Lr(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},ip=function(n){const e=mh(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},rp=function(n){const e=mh(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Zt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ml(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xs(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Fr(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(yl(r)&&yl(o)){if(!Fr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function yl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function sI(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function iI(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(i<<5|i>>>27)+c+l+h+s[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function rI(n,e){const t=new lp(n,e);return t.subscribe.bind(t)}class lp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");cp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=dr),i.error===void 0&&(i.error=dr),i.complete===void 0&&(i.complete=dr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function dr(){}function Ai(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,_(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Si=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n){return n&&n._delegate?n._delegate:n}class en{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new gs;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fp(e))try{this.getOrInitializeService({instanceIdentifier:mt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mt){return this.instances.has(e)}getOptions(e=mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dp(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=mt){return this.component?this.component.multipleInstances?e:mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dp(n){return n===mt?void 0:n}function fp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new up(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(k||(k={}));const _p={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},gp=k.INFO,mp={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},yp=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=mp[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vo{constructor(e){this.name=e,this._logLevel=gp,this._logHandler=yp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_p[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}const vp=(n,e)=>e.some(t=>n instanceof t);let vl,El;function Ep(){return vl||(vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tp(){return El||(El=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yh=new WeakMap,Ur=new WeakMap,vh=new WeakMap,fr=new WeakMap,Oo=new WeakMap;function wp(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(tt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&yh.set(t,n)}).catch(()=>{}),Oo.set(e,n),e}function Ip(n){if(Ur.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ur.set(n,e)}let Br={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ur.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return tt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Cp(n){Br=n(Br)}function Ap(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(pr(this),e,...t);return vh.set(s,e.sort?e.sort():[e]),tt(s)}:Tp().includes(n)?function(...e){return n.apply(pr(this),e),tt(yh.get(this))}:function(...e){return tt(n.apply(pr(this),e))}}function Sp(n){return typeof n=="function"?Ap(n):(n instanceof IDBTransaction&&Ip(n),vp(n,Ep())?new Proxy(n,Br):n)}function tt(n){if(n instanceof IDBRequest)return wp(n);if(fr.has(n))return fr.get(n);const e=Sp(n);return e!==n&&(fr.set(n,e),Oo.set(e,n)),e}const pr=n=>Oo.get(n);function Rp(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=tt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(tt(o.result),l.oldVersion,l.newVersion,tt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Pp=["get","getKey","getAll","getAllKeys","count"],bp=["put","add","delete","clear"],_r=new Map;function Tl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(_r.get(e))return _r.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=bp.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Pp.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return _r.set(e,r),r}Cp(n=>({...n,get:(e,t,s)=>Tl(e,t)||n.get(e,t,s),has:(e,t)=>!!Tl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Dp(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Dp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qr="@firebase/app",wl="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new Vo("@firebase/app"),kp="@firebase/app-compat",xp="@firebase/analytics-compat",Vp="@firebase/analytics",Op="@firebase/app-check-compat",Mp="@firebase/app-check",Lp="@firebase/auth",Fp="@firebase/auth-compat",Up="@firebase/database",Bp="@firebase/database-compat",qp="@firebase/functions",jp="@firebase/functions-compat",Wp="@firebase/installations",$p="@firebase/installations-compat",zp="@firebase/messaging",Gp="@firebase/messaging-compat",Hp="@firebase/performance",Kp="@firebase/performance-compat",Qp="@firebase/remote-config",Yp="@firebase/remote-config-compat",Xp="@firebase/storage",Jp="@firebase/storage-compat",Zp="@firebase/firestore",e_="@firebase/firestore-compat",t_="firebase",n_="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="[DEFAULT]",s_={[qr]:"fire-core",[kp]:"fire-core-compat",[Vp]:"fire-analytics",[xp]:"fire-analytics-compat",[Mp]:"fire-app-check",[Op]:"fire-app-check-compat",[Lp]:"fire-auth",[Fp]:"fire-auth-compat",[Up]:"fire-rtdb",[Bp]:"fire-rtdb-compat",[qp]:"fire-fn",[jp]:"fire-fn-compat",[Wp]:"fire-iid",[$p]:"fire-iid-compat",[zp]:"fire-fcm",[Gp]:"fire-fcm-compat",[Hp]:"fire-perf",[Kp]:"fire-perf-compat",[Qp]:"fire-rc",[Yp]:"fire-rc-compat",[Xp]:"fire-gcs",[Jp]:"fire-gcs-compat",[Zp]:"fire-fst",[e_]:"fire-fst-compat","fire-js":"fire-js",[t_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new Map,i_=new Map,Wr=new Map;function Il(n,e){try{n.container.addComponent(e)}catch(t){Rt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kn(n){const e=n.name;if(Wr.has(e))return Rt.debug(`There were multiple attempts to register component ${e}.`),!1;Wr.set(e,n);for(const t of Js.values())Il(t,n);for(const t of i_.values())Il(t,n);return!0}function Eh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function oI(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nt=new gh("app","Firebase",r_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=n_;function wh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:jr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw nt.create("bad-app-name",{appName:String(i)});if(t||(t=uh()),!t)throw nt.create("no-options");const r=Js.get(i);if(r){if(Fr(t,r.options)&&Fr(s,r.config))return r;throw nt.create("duplicate-app",{appName:i})}const o=new pp(i);for(const l of Wr.values())o.addComponent(l);const a=new o_(t,s,o);return Js.set(i,a),a}function Ih(n=jr){const e=Js.get(n);if(!e&&n===jr&&uh())return wh();if(!e)throw nt.create("no-app",{appName:n});return e}function st(n,e,t){var s;let i=(s=s_[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rt.warn(a.join(" "));return}Kn(new en(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="firebase-heartbeat-database",l_=1,Qn="firebase-heartbeat-store";let gr=null;function Ch(){return gr||(gr=Rp(a_,l_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qn)}catch(t){console.warn(t)}}}}).catch(n=>{throw nt.create("idb-open",{originalErrorMessage:n.message})})),gr}async function c_(n){try{const t=(await Ch()).transaction(Qn),s=await t.objectStore(Qn).get(Ah(n));return await t.done,s}catch(e){if(e instanceof pn)Rt.warn(e.message);else{const t=nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rt.warn(t.message)}}}async function Cl(n,e){try{const s=(await Ch()).transaction(Qn,"readwrite");await s.objectStore(Qn).put(e,Ah(n)),await s.done}catch(t){if(t instanceof pn)Rt.warn(t.message);else{const s=nt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rt.warn(s.message)}}}function Ah(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=1024,u_=30*24*60*60*1e3;class d_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new p_(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Al();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=u_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Al(),{heartbeatsToSend:s,unsentEntries:i}=f_(this._heartbeatsCache.heartbeats),r=Ys(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Al(){return new Date().toISOString().substring(0,10)}function f_(n,e=h_){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Sl(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Sl(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class p_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _h()?ep().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await c_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sl(n){return Ys(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n){Kn(new en("platform-logger",e=>new Np(e),"PRIVATE")),Kn(new en("heartbeat",e=>new d_(e),"PRIVATE")),st(qr,wl,n),st(qr,wl,"esm2017"),st("fire-js","")}__("");var g_="firebase",m_="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st(g_,m_,"app");var Rl={};const Pl="@firebase/database",bl="1.0.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sh="";function y_(n){Sh=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),te(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Hn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return We(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new v_(e)}}catch{}return new E_},Et=Rh("localStorage"),T_=Rh("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new Vo("@firebase/database"),w_=function(){let n=1;return function(){return n++}}(),Ph=function(n){const e=hp(n),t=new ap;t.update(e);const s=t.digest();return xo.encodeByteArray(s)},ms=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ms.apply(null,s):typeof s=="object"?e+=te(s):e+=s,e+=" "}return e};let Mn=null,Nl=!0;const I_=function(n,e){_(!e,"Can't turn on custom loggers persistently."),Gt.logLevel=k.VERBOSE,Mn=Gt.log.bind(Gt)},re=function(...n){if(Nl===!0&&(Nl=!1,Mn===null&&T_.get("logging_enabled")===!0&&I_()),Mn){const e=ms.apply(null,n);Mn(e)}},ys=function(n){return function(...e){re(n,...e)}},$r=function(...n){const e="FIREBASE INTERNAL ERROR: "+ms(...n);Gt.error(e)},Ke=function(...n){const e=`FIREBASE FATAL ERROR: ${ms(...n)}`;throw Gt.error(e),new Error(e)},ve=function(...n){const e="FIREBASE WARNING: "+ms(...n);Gt.warn(e)},C_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Mo=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},A_=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},at="[MIN_NAME]",lt="[MAX_NAME]",Vt=function(n,e){if(n===e)return 0;if(n===at||e===lt)return-1;if(e===at||n===lt)return 1;{const t=Dl(n),s=Dl(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},S_=function(n,e){return n===e?0:n<e?-1:1},Cn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+te(e))},Lo=function(n){if(typeof n!="object"||n===null)return te(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=te(e[s]),t+=":",t+=Lo(n[e[s]]);return t+="}",t},bh=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ce(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Nh=function(n){_(!Mo(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},R_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},P_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function b_(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const N_=new RegExp("^-?(0*)\\d{1,10}$"),D_=-2147483648,k_=2147483647,Dl=function(n){if(N_.test(n)){const e=Number(n);if(e>=D_&&e<=k_)return e}return null},_n=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ve("Exception was thrown by user callback.",t),e},Math.floor(0))}},x_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ln=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ve(e)}}class Gs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="5",Dh="v",kh="s",xh="r",Vh="f",Oh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Mh="ls",Lh="p",zr="ac",Fh="websocket",Uh="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Et.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Et.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function M_(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function qh(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let s;if(e===Fh)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Uh)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);M_(n)&&(t.ns=n.namespace);const i=[];return ce(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.counters_={}}incrementCounter(e,t=1){We(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return $f(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr={},yr={};function Uo(n){const e=n.toString();return mr[e]||(mr[e]=new L_),mr[e]}function F_(n,e){const t=n.toString();return yr[t]||(yr[t]=e()),yr[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&_n(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="start",B_="close",q_="pLPCommand",j_="pRTLPCB",jh="id",Wh="pw",$h="ser",W_="cb",$_="seg",z_="ts",G_="d",H_="dframe",zh=1870,Gh=30,K_=zh-Gh,Q_=25e3,Y_=3e4;class $t{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ys(e),this.stats_=Uo(t),this.urlFn=l=>(this.appCheckToken&&(l[zr]=this.appCheckToken),qh(t,Uh,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new U_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Y_)),A_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bo((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===kl)this.id=a,this.password=l;else if(o===B_)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[kl]="t",s[$h]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[W_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Dh]=Fo,this.transportSessionId&&(s[kh]=this.transportSessionId),this.lastSessionId&&(s[Mh]=this.lastSessionId),this.applicationId&&(s[Lh]=this.applicationId),this.appCheckToken&&(s[zr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Oh.test(location.hostname)&&(s[xh]=Vh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$t.forceAllow_=!0}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){return $t.forceAllow_?!0:!$t.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!R_()&&!P_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=te(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=lh(t),i=bh(s,K_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[H_]="t",s[jh]=e,s[Wh]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=te(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Bo{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=w_(),window[q_+this.uniqueCallbackIdentifier]=e,window[j_+this.uniqueCallbackIdentifier]=t,this.myIFrame=Bo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){re("frame writing exception"),a.stack&&re(a.stack),re(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||re("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jh]=this.myID,e[Wh]=this.myPW,e[$h]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gh+s.length<=zh;){const o=this.pendingSegs.shift();s=s+"&"+$_+i+"="+o.seg+"&"+z_+i+"="+o.ts+"&"+G_+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Q_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=16384,J_=45e3;let Zs=null;typeof MozWebSocket<"u"?Zs=MozWebSocket:typeof WebSocket<"u"&&(Zs=WebSocket);class Pe{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ys(this.connId),this.stats_=Uo(t),this.connURL=Pe.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Dh]=Fo,typeof location<"u"&&location.hostname&&Oh.test(location.hostname)&&(o[xh]=Vh),t&&(o[kh]=t),s&&(o[Mh]=s),i&&(o[zr]=i),r&&(o[Lh]=r),qh(e,Fh,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Et.set("previous_websocket_failure",!0);try{let s;ph(),this.mySock=new Zs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Pe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Zs!==null&&!Pe.forceDisallow_}static previouslyFailed(){return Et.isInMemoryStorage||Et.get("previous_websocket_failure")===!0}markConnectionHealthy(){Et.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Hn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=te(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=bh(t,X_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(J_))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pe.responsesRequiredToBeHealthy=2;Pe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$t,Pe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Pe&&Pe.isAvailable();let s=t&&!Pe.previouslyFailed();if(e.webSocketOnly&&(t||ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Pe];else{const i=this.transports_=[];for(const r of Yn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Yn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=6e4,eg=5e3,tg=10*1024,ng=100*1024,vr="t",xl="d",sg="s",Vl="r",ig="e",Ol="o",Ml="a",Ll="n",Fl="p",rg="h";class og{constructor(e,t,s,i,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ys("c:"+this.id+":"),this.transportManager_=new Yn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ln(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ng?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vr in e){const t=e[vr];t===Ml?this.upgradeIfSecondaryHealthy_():t===Vl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ol&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Cn("t",e),s=Cn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ml,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ll,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Cn("t",e),s=Cn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Cn(vr,e);if(xl in e){const s=e[xl];if(t===rg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Ll){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===sg?this.onConnectionShutdown_(s):t===Vl?this.onReset_(s):t===ig?$r("Server Error: "+s):t===Ol?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$r("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Fo!==s&&ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ln(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Z_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ln(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Et.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Kh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ei}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=32,Bl=768;class L{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function O(){return new L("")}function P(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ct(n){return n.pieces_.length-n.pieceNum_}function B(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new L(n.pieces_,e)}function qo(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function ag(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Xn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Qh(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new L(e,0)}function $(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof L)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new L(t,0)}function b(n){return n.pieceNum_>=n.pieces_.length}function Te(n,e){const t=P(n),s=P(e);if(t===null)return e;if(t===s)return Te(B(n),B(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function lg(n,e){const t=Xn(n,0),s=Xn(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=Vt(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function jo(n,e){if(ct(n)!==ct(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Se(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ct(n)>ct(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class cg{constructor(e,t){this.errorPrefix_=t,this.parts_=Xn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Si(this.parts_[s]);Yh(this)}}function hg(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Si(e),Yh(n)}function ug(n){const e=n.parts_.pop();n.byteLength_-=Si(e),n.parts_.length>0&&(n.byteLength_-=1)}function Yh(n){if(n.byteLength_>Bl)throw new Error(n.errorPrefix_+"has a key path longer than "+Bl+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ul)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ul+") or object contains a cycle "+yt(n))}function yt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends Kh{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Wo}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=1e3,dg=60*5*1e3,ql=30*1e3,fg=1.3,pg=3e4,_g="server_kill",jl=3;class Ge extends Hh{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ge.nextPersistentConnectionId_++,this.log_=ys("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=An,this.maxReconnectDelay_=dg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ph())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ei.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(te(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new gs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ge.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&We(e,"w")){const s=Zt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ql)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ip(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+te(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):$r("Unrecognized action received from server: "+te(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=An,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=An,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pg&&(this.reconnectDelay_=An),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ge.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(u){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?re("getToken() completed but was canceled"):(re("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new og(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{ve(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(_g)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ve(u),l())}}}interrupt(e){re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ml(this.interruptReasons_)&&(this.reconnectDelay_=An,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Lo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new L(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){re("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jl&&(this.reconnectDelay_=ql,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){re("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Sh.replace(/\./g,"-")]=1,fh()?e["framework.cordova"]=1:Jf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ei.getInstance().currentlyOnline();return ml(this.interruptReasons_)&&e}}Ge.nextPersistentConnectionId_=0;Ge.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new N(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new N(at,e),i=new N(at,t);return this.compare(s,i)!==0}minPost(){return N.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms;class Xh extends Ri{static get __EMPTY_NODE(){return Ms}static set __EMPTY_NODE(e){Ms=e}compare(e,t){return Vt(e.name,t.name)}isDefinedOn(e){throw fn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return N.MIN}maxPost(){return new N(lt,Ms)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new N(e,Ms)}toString(){return".key"}}const He=new Xh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls=class{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Ie=class Dn{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Dn.RED,this.left=i??Oe.EMPTY_NODE,this.right=r??Oe.EMPTY_NODE}copy(e,t,s,i,r){return new Dn(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Dn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Dn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Ie.RED=!0;Ie.BLACK=!1;class gg{copy(e,t,s,i,r){return this}insert(e,t,s){return new Ie(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Oe=class Hs{constructor(e,t=Hs.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Hs(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new Hs(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ls(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ls(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ls(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ls(this.root_,null,this.comparator_,!0,e)}};Oe.EMPTY_NODE=new gg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(n,e){return Vt(n.name,e.name)}function $o(n,e){return Vt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr;function yg(n){Gr=n}const Jh=function(n){return typeof n=="number"?"number:"+Nh(n):"string:"+n},Zh=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&We(e,".sv"),"Priority must be a string or number.")}else _(n===Gr||n.isEmpty(),"priority of unexpected type.");_(n===Gr||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl;class J{constructor(e,t=J.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zh(this.priorityNode_)}static set __childrenNodeConstructor(e){Wl=e}static get __childrenNodeConstructor(){return Wl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new J(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return b(e)?this:P(e)===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:J.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=P(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(_(s!==".priority"||ct(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,J.__childrenNodeConstructor.EMPTY_NODE.updateChild(B(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jh(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Nh(this.value_):e+=this.value_,this.lazyHash_=Ph(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===J.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof J.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=J.VALUE_TYPE_ORDER.indexOf(t),r=J.VALUE_TYPE_ORDER.indexOf(s);return _(i>=0,"Unknown leaf type: "+t),_(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}J.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu,tu;function vg(n){eu=n}function Eg(n){tu=n}class Tg extends Ri{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Vt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return N.MIN}maxPost(){return new N(lt,new J("[PRIORITY-POST]",tu))}makePost(e,t){const s=eu(e);return new N(t,new J("[PRIORITY-POST]",s))}toString(){return".priority"}}const W=new Tg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=Math.log(2);class Ig{constructor(e){const t=r=>parseInt(Math.log(r)/wg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ti=function(n,e,t,s){n.sort(e);const i=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=n[l],d=t?t(u):u,new Ie(d,u.node,Ie.BLACK,null,null);{const f=parseInt(h/2,10)+l,m=i(l,f),T=i(f+1,c);return u=n[f],d=t?t(u):u,new Ie(d,u.node,Ie.BLACK,m,T)}},r=function(l){let c=null,h=null,u=n.length;const d=function(m,T){const w=u-m,G=u;u-=m;const he=i(w+1,G),we=n[w],Re=t?t(we):we;f(new Ie(Re,we.node,T,null,he))},f=function(m){c?(c.left=m,c=m):(h=m,c=m)};for(let m=0;m<l.count;++m){const T=l.nextBitIsOne(),w=Math.pow(2,l.count-(m+1));T?d(w,Ie.BLACK):(d(w,Ie.BLACK),d(w,Ie.RED))}return h},o=new Ig(n.length),a=r(o);return new Oe(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er;const Ut={};class $e{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return _(Ut&&W,"ChildrenNode.ts has not been loaded"),Er=Er||new $e({".priority":Ut},{".priority":W}),Er}get(e){const t=Zt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Oe?t:null}hasIndex(e){return We(this.indexSet_,e.toString())}addIndex(e,t){_(e!==He,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(N.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ti(s,e.getCompare()):a=Ut;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new $e(h,c)}addToIndexes(e,t){const s=Xs(this.indexes_,(i,r)=>{const o=Zt(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),i===Ut)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(N.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ti(a,o.getCompare())}else return Ut;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new N(e.name,a))),l.insert(e,e.node)}});return new $e(s,this.indexSet_)}removeFromIndexes(e,t){const s=Xs(this.indexes_,i=>{if(i===Ut)return i;{const r=t.get(e.name);return r?i.remove(new N(e.name,r)):i}});return new $e(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sn;class C{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Zh(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Sn||(Sn=new C(new Oe($o),null,$e.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Sn}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Sn:t}}getChild(e){const t=P(e);return t===null?this:this.getImmediateChild(t).getChild(B(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new N(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Sn:this.priorityNode_;return new C(i,o,r)}}updateChild(e,t){const s=P(e);if(s===null)return t;{_(P(e)!==".priority"||ct(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(B(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(W,(o,a)=>{t[o]=a.val(e),s++,r&&C.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jh(this.getPriority().val())+":"),this.forEachChild(W,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Ph(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new N(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new N(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new N(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,N.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,N.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vs?-1:0}withIndex(e){if(e===He||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===He||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(W),i=t.getIterator(W);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===He?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cg extends C{constructor(){super(new Oe($o),C.EMPTY_NODE,$e.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const vs=new Cg;Object.defineProperties(N,{MIN:{value:new N(at,C.EMPTY_NODE)},MAX:{value:new N(lt,vs)}});Xh.__EMPTY_NODE=C.EMPTY_NODE;J.__childrenNodeConstructor=C;yg(vs);Eg(vs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=!0;function ee(n,e=null){if(n===null)return C.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new J(t,ee(e))}if(!(n instanceof Array)&&Ag){const t=[];let s=!1;if(ce(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ee(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new N(o,l)))}}),t.length===0)return C.EMPTY_NODE;const r=ti(t,mg,o=>o.name,$o);if(s){const o=ti(t,W.getCompare());return new C(r,ee(e),new $e({".priority":o},{".priority":W}))}else return new C(r,ee(e),$e.Default)}else{let t=C.EMPTY_NODE;return ce(n,(s,i)=>{if(We(n,s)&&s.substring(0,1)!=="."){const r=ee(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(ee(e))}}vg(ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends Ri{constructor(e){super(),this.indexPath_=e,_(!b(e)&&P(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Vt(e.name,t.name):r}makePost(e,t){const s=ee(e),i=C.EMPTY_NODE.updateChild(this.indexPath_,s);return new N(t,i)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,vs);return new N(lt,e)}toString(){return Xn(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg extends Ri{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Vt(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return N.MIN}maxPost(){return N.MAX}makePost(e,t){const s=ee(e);return new N(t,s)}toString(){return".value"}}const nu=new Sg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(n){return{type:"value",snapshotNode:n}}function tn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Jn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Zn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Rg(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Jn(t,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(tn(t,s)):o.trackChildChange(Zn(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(W,(i,r)=>{t.hasChild(i)||s.trackChildChange(Jn(i,r))}),t.isLeafNode()||t.forEachChild(W,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Zn(i,r,o))}else s.trackChildChange(tn(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?C.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.indexedFilter_=new Go(e.getIndex()),this.index_=e.getIndex(),this.startPost_=es.getStartPost_(e),this.endPost_=es.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new N(t,s))||(s=C.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=C.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(C.EMPTY_NODE);const r=this;return t.forEachChild(W,(o,a)=>{r.matches(new N(o,a))||(i=i.updateImmediateChild(o,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new es(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new N(t,s))||(s=C.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=C.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(C.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const l=new N(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(h&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Zn(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Jn(t,u));const T=a.updateImmediateChild(t,C.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(tn(d.name,d.node)),T.updateImmediateChild(d.name,d.node)):T}}else return s.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Jn(c.name,c.node)),r.trackChildChange(tn(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,C.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=W}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:at}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:lt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===W}copy(){const e=new Ho;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bg(n){return n.loadsAllData()?new Go(n.getIndex()):n.hasLimit()?new Pg(n):new es(n)}function Ng(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function Dg(n,e,t){const s=n.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,t!=null?(s.startNameSet_=!0,s.indexStartName_=t):(s.startNameSet_=!1,s.indexStartName_=""),s}function Hr(n,e,t){const s=n.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,t!==void 0?(s.endNameSet_=!0,s.indexEndName_=t):(s.endNameSet_=!1,s.indexEndName_=""),s}function kg(n,e,t){let s;return n.index_===He||t?s=Hr(n,e,t):s=Hr(n,e,at),s.endBeforeSet_=!0,s}function iu(n,e){const t=n.copy();return t.index_=e,t}function $l(n){const e={};if(n.isDefault())return e;let t;if(n.index_===W?t="$priority":n.index_===nu?t="$value":n.index_===He?t="$key":(_(n.index_ instanceof zo,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=te(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=te(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+te(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=te(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+te(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function zl(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==W&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Hh{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ys("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ni.getListenId_(e,s),a={};this.listens_[o]=a;const l=$l(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),Zt(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=ni.getListenId_(e,t);delete this.listens_[s]}get(e){const t=$l(e._queryParams),s=e._path.toString(),i=new gs;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+op(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Hn(a.responseText)}catch{ve("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ve("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){return{value:null,children:new Map}}function ru(n,e,t){if(b(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=P(e);n.children.has(s)||n.children.set(s,si());const i=n.children.get(s);e=B(e),ru(i,e,t)}}function Kr(n,e,t){n.value!==null?t(e,n.value):Vg(n,(s,i)=>{const r=new L(e.toString()+"/"+s);Kr(i,r,t)})}function Vg(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ce(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=10*1e3,Mg=30*1e3,Lg=5*60*1e3;class Fg{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Og(e);const s=Gl+(Mg-Gl)*Math.random();Ln(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ce(e,(i,r)=>{r>0&&We(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Ln(this.reportStats_.bind(this),Math.floor(Math.random()*2*Lg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(be||(be={}));function Ko(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yo(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=be.ACK_USER_WRITE,this.source=Ko()}operationForChild(e){if(b(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new L(e));return new ii(O(),t,this.revert)}}else return _(P(this.path)===e,"operationForChild called for unrelated child."),new ii(B(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.source=e,this.path=t,this.type=be.LISTEN_COMPLETE}operationForChild(e){return b(this.path)?new ts(this.source,O()):new ts(this.source,B(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=be.OVERWRITE}operationForChild(e){return b(this.path)?new Pt(this.source,O(),this.snap.getImmediateChild(e)):new Pt(this.source,B(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=be.MERGE}operationForChild(e){if(b(this.path)){const t=this.children.subtree(new L(e));return t.isEmpty()?null:t.value?new Pt(this.source,O(),t.value):new nn(this.source,O(),t)}else return _(P(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new nn(this.source,B(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(b(e))return this.isFullyInitialized()&&!this.filtered_;const t=P(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Bg(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Rg(o.childName,o.snapshotNode))}),Rn(n,i,"child_removed",e,s,t),Rn(n,i,"child_added",e,s,t),Rn(n,i,"child_moved",r,s,t),Rn(n,i,"child_changed",e,s,t),Rn(n,i,"value",e,s,t),i}function Rn(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>jg(n,a,l)),o.forEach(a=>{const l=qg(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function qg(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function jg(n,e,t){if(e.childName==null||t.childName==null)throw fn("Should only compare child_ events.");const s=new N(e.childName,e.snapshotNode),i=new N(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(n,e){return{eventCache:n,serverCache:e}}function Fn(n,e,t,s){return Pi(new bt(e,t,s),n.serverCache)}function ou(n,e,t,s){return Pi(n.eventCache,new bt(e,t,s))}function Qr(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Nt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr;const Wg=()=>(Tr||(Tr=new Oe(S_)),Tr);class U{constructor(e,t=Wg()){this.value=e,this.children=t}static fromObject(e){let t=new U(null);return ce(e,(s,i)=>{t=t.set(new L(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:O(),value:this.value};if(b(e))return null;{const s=P(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(B(e),t);return r!=null?{path:$(new L(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(b(e))return this;{const t=P(e),s=this.children.get(t);return s!==null?s.subtree(B(e)):new U(null)}}set(e,t){if(b(e))return new U(t,this.children);{const s=P(e),r=(this.children.get(s)||new U(null)).set(B(e),t),o=this.children.insert(s,r);return new U(this.value,o)}}remove(e){if(b(e))return this.children.isEmpty()?new U(null):new U(null,this.children);{const t=P(e),s=this.children.get(t);if(s){const i=s.remove(B(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new U(null):new U(this.value,r)}else return this}}get(e){if(b(e))return this.value;{const t=P(e),s=this.children.get(t);return s?s.get(B(e)):null}}setTree(e,t){if(b(e))return t;{const s=P(e),r=(this.children.get(s)||new U(null)).setTree(B(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new U(this.value,o)}}fold(e){return this.fold_(O(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_($(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,O(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(b(e))return null;{const r=P(e),o=this.children.get(r);return o?o.findOnPath_(B(e),$(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,O(),t)}foreachOnPath_(e,t,s){if(b(e))return this;{this.value&&s(t,this.value);const i=P(e),r=this.children.get(i);return r?r.foreachOnPath_(B(e),$(t,i),s):new U(null)}}foreach(e){this.foreach_(O(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_($(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.writeTree_=e}static empty(){return new Ne(new U(null))}}function Un(n,e,t){if(b(e))return new Ne(new U(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Te(i,e);return r=r.updateChild(o,t),new Ne(n.writeTree_.set(i,r))}else{const i=new U(t),r=n.writeTree_.setTree(e,i);return new Ne(r)}}}function Yr(n,e,t){let s=n;return ce(t,(i,r)=>{s=Un(s,$(e,i),r)}),s}function Hl(n,e){if(b(e))return Ne.empty();{const t=n.writeTree_.setTree(e,new U(null));return new Ne(t)}}function Xr(n,e){return Ot(n,e)!=null}function Ot(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Te(t.path,e)):null}function Kl(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(W,(s,i)=>{e.push(new N(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new N(s,i.value))}),e}function it(n,e){if(b(e))return n;{const t=Ot(n,e);return t!=null?new Ne(new U(t)):new Ne(n.writeTree_.subtree(e))}}function Jr(n){return n.writeTree_.isEmpty()}function sn(n,e){return au(O(),n.writeTree_,e)}function au(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=au($(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild($(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n,e){return uu(e,n)}function $g(n,e,t,s,i){_(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Un(n.visibleWrites,e,t)),n.lastWriteId=s}function zg(n,e,t,s){_(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Yr(n.visibleWrites,e,t),n.lastWriteId=s}function Gg(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Hg(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Kg(a,s.path)?i=!1:Se(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Qg(n),!0;if(s.snap)n.visibleWrites=Hl(n.visibleWrites,s.path);else{const a=s.children;ce(a,l=>{n.visibleWrites=Hl(n.visibleWrites,$(s.path,l))})}return!0}else return!1}function Kg(n,e){if(n.snap)return Se(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Se($(n.path,t),e))return!0;return!1}function Qg(n){n.visibleWrites=lu(n.allWrites,Yg,O()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Yg(n){return n.visible}function lu(n,e,t){let s=Ne.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)Se(t,o)?(a=Te(t,o),s=Un(s,a,r.snap)):Se(o,t)&&(a=Te(o,t),s=Un(s,O(),r.snap.getChild(a)));else if(r.children){if(Se(t,o))a=Te(t,o),s=Yr(s,a,r.children);else if(Se(o,t))if(a=Te(o,t),b(a))s=Yr(s,O(),r.children);else{const l=Zt(r.children,P(a));if(l){const c=l.getChild(B(a));s=Un(s,O(),c)}}}else throw fn("WriteRecord should have .snap or .children")}}return s}function cu(n,e,t,s,i){if(!s&&!i){const r=Ot(n.visibleWrites,e);if(r!=null)return r;{const o=it(n.visibleWrites,e);if(Jr(o))return t;if(t==null&&!Xr(o,O()))return null;{const a=t||C.EMPTY_NODE;return sn(o,a)}}}else{const r=it(n.visibleWrites,e);if(!i&&Jr(r))return t;if(!i&&t==null&&!Xr(r,O()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Se(c.path,e)||Se(e,c.path))},a=lu(n.allWrites,o,e),l=t||C.EMPTY_NODE;return sn(a,l)}}}function Xg(n,e,t){let s=C.EMPTY_NODE;const i=Ot(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(W,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=it(n.visibleWrites,e);return t.forEachChild(W,(o,a)=>{const l=sn(it(r,new L(o)),a);s=s.updateImmediateChild(o,l)}),Kl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=it(n.visibleWrites,e);return Kl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Jg(n,e,t,s,i){_(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=$(e,t);if(Xr(n.visibleWrites,r))return null;{const o=it(n.visibleWrites,r);return Jr(o)?i.getChild(t):sn(o,i.getChild(t))}}function Zg(n,e,t,s){const i=$(e,t),r=Ot(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=it(n.visibleWrites,i);return sn(o,s.getNode().getImmediateChild(t))}else return null}function em(n,e){return Ot(n.visibleWrites,e)}function tm(n,e,t,s,i,r,o){let a;const l=it(n.visibleWrites,e),c=Ot(l,O());if(c!=null)a=c;else if(t!=null)a=sn(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&h.length<i;)u(f,s)!==0&&h.push(f),f=d.getNext();return h}else return[]}function nm(){return{visibleWrites:Ne.empty(),allWrites:[],lastWriteId:-1}}function ri(n,e,t,s){return cu(n.writeTree,n.treePath,e,t,s)}function Jo(n,e){return Xg(n.writeTree,n.treePath,e)}function Ql(n,e,t,s){return Jg(n.writeTree,n.treePath,e,t,s)}function oi(n,e){return em(n.writeTree,$(n.treePath,e))}function sm(n,e,t,s,i,r){return tm(n.writeTree,n.treePath,e,t,s,i,r)}function Zo(n,e,t){return Zg(n.writeTree,n.treePath,e,t)}function hu(n,e){return uu($(n.treePath,e),n.writeTree)}function uu(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Zn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Jn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,tn(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Zn(s,e.snapshotNode,i.oldSnap));else throw fn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const du=new rm;class ea{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new bt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zo(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nt(this.viewCache_),r=sm(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(n){return{filter:n}}function am(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function lm(n,e,t,s,i){const r=new im;let o,a;if(t.type===be.OVERWRITE){const c=t;c.source.fromUser?o=Zr(n,e,c.path,c.snap,s,i,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!b(c.path),o=ai(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===be.MERGE){const c=t;c.source.fromUser?o=hm(n,e,c.path,c.children,s,i,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=eo(n,e,c.path,c.children,s,i,a,r))}else if(t.type===be.ACK_USER_WRITE){const c=t;c.revert?o=fm(n,e,c.path,s,i,r):o=um(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===be.LISTEN_COMPLETE)o=dm(n,e,t.path,s,r);else throw fn("Unknown operation type: "+t.type);const l=r.getChanges();return cm(e,o,l),{viewCache:o,changes:l}}function cm(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Qr(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(su(Qr(e)))}}function fu(n,e,t,s,i,r){const o=e.eventCache;if(oi(s,t)!=null)return e;{let a,l;if(b(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Nt(e),h=c instanceof C?c:C.EMPTY_NODE,u=Jo(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=ri(s,Nt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=P(t);if(c===".priority"){_(ct(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=Ql(s,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=B(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Ql(s,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Zo(s,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,i,r):a=o.getNode()}}return Fn(e,a,o.isFullyInitialized()||b(t),n.filter.filtersNodes())}}function ai(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(b(t))c=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=h.updateFullNode(l.getNode(),f,null)}else{const f=P(t);if(!l.isCompleteForPath(t)&&ct(t)>1)return e;const m=B(t),w=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=h.updatePriority(l.getNode(),w):c=h.updateChild(l.getNode(),f,w,m,du,null)}const u=ou(e,c,l.isFullyInitialized()||b(t),h.filtersNodes()),d=new ea(i,u,r);return fu(n,u,t,i,d,a)}function Zr(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const h=new ea(i,e,r);if(b(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Fn(e,c,!0,n.filter.filtersNodes());else{const u=P(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=Fn(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=B(t),f=a.getNode().getImmediateChild(u);let m;if(b(d))m=s;else{const T=h.getCompleteChild(u);T!=null?qo(d)===".priority"&&T.getChild(Qh(d)).isEmpty()?m=T:m=T.updateChild(d,s):m=C.EMPTY_NODE}if(f.equals(m))l=e;else{const T=n.filter.updateChild(a.getNode(),u,m,d,h,o);l=Fn(e,T,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Yl(n,e){return n.eventCache.isCompleteForChild(e)}function hm(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const h=$(t,l);Yl(e,P(h))&&(a=Zr(n,a,h,c,i,r,o))}),s.foreach((l,c)=>{const h=$(t,l);Yl(e,P(h))||(a=Zr(n,a,h,c,i,r,o))}),a}function Xl(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function eo(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;b(t)?c=s:c=new U(null).setTree(t,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),m=Xl(n,f,d);l=ai(n,l,new L(u),m,i,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const m=e.serverCache.getNode().getImmediateChild(u),T=Xl(n,m,d);l=ai(n,l,new L(u),T,i,r,o,a)}}),l}function um(n,e,t,s,i,r,o){if(oi(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(b(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return ai(n,e,t,l.getNode().getChild(t),i,r,a,o);if(b(t)){let c=new U(null);return l.getNode().forEachChild(He,(h,u)=>{c=c.set(new L(h),u)}),eo(n,e,t,c,i,r,a,o)}else return e}else{let c=new U(null);return s.foreach((h,u)=>{const d=$(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),eo(n,e,t,c,i,r,a,o)}}function dm(n,e,t,s,i){const r=e.serverCache,o=ou(e,r.getNode(),r.isFullyInitialized()||b(t),r.isFiltered());return fu(n,o,t,s,du,i)}function fm(n,e,t,s,i,r){let o;if(oi(s,t)!=null)return e;{const a=new ea(s,e,i),l=e.eventCache.getNode();let c;if(b(t)||P(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ri(s,Nt(e));else{const u=e.serverCache.getNode();_(u instanceof C,"serverChildren would be complete if leaf node"),h=Jo(s,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=P(t);let u=Zo(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,B(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,C.EMPTY_NODE,B(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ri(s,Nt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||oi(s,O())!=null,Fn(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Go(s.getIndex()),r=bg(s);this.processor_=om(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(C.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(C.EMPTY_NODE,a.getNode(),null),h=new bt(l,o.isFullyInitialized(),i.filtersNodes()),u=new bt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Pi(u,h),this.eventGenerator_=new Ug(this.query_)}get query(){return this.query_}}function _m(n){return n.viewCache_.serverCache.getNode()}function gm(n,e){const t=Nt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!b(e)&&!t.getImmediateChild(P(e)).isEmpty())?t.getChild(e):null}function Jl(n){return n.eventRegistrations_.length===0}function mm(n,e){n.eventRegistrations_.push(e)}function Zl(n,e,t){const s=[];if(t){_(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function ec(n,e,t,s){e.type===be.MERGE&&e.source.queryId!==null&&(_(Nt(n.viewCache_),"We should always have a full cache before handling merges"),_(Qr(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=lm(n.processor_,i,e,t,s);return am(n.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,pu(n,r.changes,r.viewCache.eventCache.getNode(),null)}function ym(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(W,(r,o)=>{s.push(tn(r,o))}),t.isFullyInitialized()&&s.push(su(t.getNode())),pu(n,s,t.getNode(),e)}function pu(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Bg(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;class vm{constructor(){this.views=new Map}}function Em(n){_(!li,"__referenceConstructor has already been defined"),li=n}function Tm(){return _(li,"Reference.ts has not been loaded"),li}function wm(n){return n.views.size===0}function ta(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return _(r!=null,"SyncTree gave us an op for an invalid query."),ec(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(ec(o,e,t,s));return r}}function Im(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=ri(t,i?s:null),l=!1;a?l=!0:s instanceof C?(a=Jo(t,s),l=!1):(a=C.EMPTY_NODE,l=!1);const c=Pi(new bt(a,l,!1),new bt(s,i,!1));return new pm(e,c)}return o}function Cm(n,e,t,s,i,r){const o=Im(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),mm(o,t),ym(o,t)}function Am(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=ht(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Zl(c,t,s)),Jl(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Zl(l,t,s)),Jl(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ht(n)&&r.push(new(Tm())(e._repo,e._path)),{removed:r,events:o}}function _u(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ht(n,e){let t=null;for(const s of n.views.values())t=t||gm(s,e);return t}function gu(n,e){if(e._queryParams.loadsAllData())return bi(n);{const s=e._queryIdentifier;return n.views.get(s)}}function mu(n,e){return gu(n,e)!=null}function ht(n){return bi(n)!=null}function bi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci;function Sm(n){_(!ci,"__referenceConstructor has already been defined"),ci=n}function Rm(){return _(ci,"Reference.ts has not been loaded"),ci}let Pm=1;class tc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new U(null),this.pendingWriteTree_=nm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yu(n,e,t,s,i){return $g(n.pendingWriteTree_,e,t,s,i),i?gn(n,new Pt(Ko(),e,t)):[]}function bm(n,e,t,s){zg(n.pendingWriteTree_,e,t,s);const i=U.fromObject(t);return gn(n,new nn(Ko(),e,i))}function Je(n,e,t=!1){const s=Gg(n.pendingWriteTree_,e);if(Hg(n.pendingWriteTree_,e)){let r=new U(null);return s.snap!=null?r=r.set(O(),!0):ce(s.children,o=>{r=r.set(new L(o),!0)}),gn(n,new ii(s.path,r,t))}else return[]}function Ni(n,e,t){return gn(n,new Pt(Qo(),e,t))}function Nm(n,e,t){const s=U.fromObject(t);return gn(n,new nn(Qo(),e,s))}function Dm(n,e){return gn(n,new ts(Qo(),e))}function km(n,e,t){const s=sa(n,t);if(s){const i=ia(s),r=i.path,o=i.queryId,a=Te(r,e),l=new ts(Yo(o),a);return ra(n,r,l)}else return[]}function to(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||mu(o,e))){const l=Am(o,e,t,s);wm(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,f)=>ht(f));if(h&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Om(d);for(let m=0;m<f.length;++m){const T=f[m],w=T.query,G=Tu(n,T);n.listenProvider_.startListening(Bn(w),hi(n,w),G.hashFn,G.onComplete)}}}!u&&c.length>0&&!s&&(h?n.listenProvider_.stopListening(Bn(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(Di(d));n.listenProvider_.stopListening(Bn(d),f)}))}Mm(n,c)}return a}function xm(n,e,t,s){const i=sa(n,s);if(i!=null){const r=ia(i),o=r.path,a=r.queryId,l=Te(o,e),c=new Pt(Yo(a),l,t);return ra(n,o,c)}else return[]}function Vm(n,e,t,s){const i=sa(n,s);if(i){const r=ia(i),o=r.path,a=r.queryId,l=Te(o,e),c=U.fromObject(t),h=new nn(Yo(a),l,c);return ra(n,o,h)}else return[]}function nc(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const m=Te(d,i);r=r||Ht(f,m),o=o||ht(f)});let a=n.syncPointTree_.get(i);a?(o=o||ht(a),r=r||Ht(a,O())):(a=new vm,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=C.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,m)=>{const T=Ht(m,O());T&&(r=r.updateImmediateChild(f,T))}));const c=mu(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Di(e);_(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Lm();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const h=Xo(n.pendingWriteTree_,i);let u=Cm(a,e,t,h,r,l);if(!c&&!o&&!s){const d=gu(a,e);u=u.concat(Fm(n,e,d))}return u}function na(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Te(o,e),c=Ht(a,l);if(c)return c});return cu(i,e,r,t,!0)}function gn(n,e){return vu(e,n.syncPointTree_,null,Xo(n.pendingWriteTree_,O()))}function vu(n,e,t,s){if(b(n.path))return Eu(n,e,t,s);{const i=e.get(O());i!=null&&(t=Ht(i,O()));let r=[];const o=P(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const h=hu(s,o);r=r.concat(vu(a,l,null,h))}return i&&(r=r.concat(ta(i,n,s,t))),r}}function Eu(n,e,t,s){const i=e.get(O());i!=null&&(t=Ht(i,O()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=hu(s,o),h=n.operationForChild(o);h&&(r=r.concat(Eu(h,a,null,c)))}),i&&(r=r.concat(ta(i,n,s,t))),r}function Tu(n,e){const t=e.query,s=hi(n,t);return{hashFn:()=>(_m(e)||C.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?km(n,t._path,s):Dm(n,t._path);{const r=b_(i,t);return to(n,t,null,r)}}}}function hi(n,e){const t=Di(e);return n.queryToTagMap.get(t)}function Di(n){return n._path.toString()+"$"+n._queryIdentifier}function sa(n,e){return n.tagToQueryMap.get(e)}function ia(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new L(n.substr(0,e))}}function ra(n,e,t){const s=n.syncPointTree_.get(e);_(s,"Missing sync point for query tag that we're tracking");const i=Xo(n.pendingWriteTree_,e);return ta(s,t,i,null)}function Om(n){return n.fold((e,t,s)=>{if(t&&ht(t))return[bi(t)];{let i=[];return t&&(i=_u(t)),ce(s,(r,o)=>{i=i.concat(o)}),i}})}function Bn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Rm())(n._repo,n._path):n}function Mm(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Di(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Lm(){return Pm++}function Fm(n,e,t){const s=e._path,i=hi(n,e),r=Tu(n,t),o=n.listenProvider_.startListening(Bn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)_(!ht(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!b(c)&&h&&ht(h))return[bi(h).query];{let d=[];return h&&(d=d.concat(_u(h).map(f=>f.query))),ce(u,(f,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(Bn(h),hi(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new oa(t)}node(){return this.node_}}class aa{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=$(this.path_,e);return new aa(this.syncTree_,t)}node(){return na(this.syncTree_,this.path_)}}const Um=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},sc=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Bm(n[".sv"],e,t);if(typeof n[".sv"]=="object")return qm(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Bm=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},qm=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&_(!1,"Unexpected increment value: "+s);const i=e.node();if(_(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},wu=function(n,e,t,s){return la(e,new aa(t,n),s)},Iu=function(n,e,t){return la(n,new oa(e),t)};function la(n,e,t){const s=n.getPriority().val(),i=sc(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=sc(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new J(a,ee(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new J(i))),o.forEachChild(W,(a,l)=>{const c=la(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ha(n,e){let t=e instanceof L?e:new L(e),s=n,i=P(t);for(;i!==null;){const r=Zt(s.node.children,i)||{children:{},childCount:0};s=new ca(i,s,r),t=B(t),i=P(t)}return s}function mn(n){return n.node.value}function Cu(n,e){n.node.value=e,no(n)}function Au(n){return n.node.childCount>0}function jm(n){return mn(n)===void 0&&!Au(n)}function ki(n,e){ce(n.node.children,(t,s)=>{e(new ca(t,n,s))})}function Su(n,e,t,s){t&&!s&&e(n),ki(n,i=>{Su(i,e,!0,s)}),t&&s&&e(n)}function Wm(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Es(n){return new L(n.parent===null?n.name:Es(n.parent)+"/"+n.name)}function no(n){n.parent!==null&&$m(n.parent,n.name,n)}function $m(n,e,t){const s=jm(t),i=We(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,no(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,no(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=/[\[\].#$\/\u0000-\u001F\u007F]/,Gm=/[\[\].#$\u0000-\u001F\u007F]/,wr=10*1024*1024,ua=function(n){return typeof n=="string"&&n.length!==0&&!zm.test(n)},Ru=function(n){return typeof n=="string"&&n.length!==0&&!Gm.test(n)},Hm=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ru(n)},so=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Mo(n)||n&&typeof n=="object"&&We(n,".sv")},yn=function(n,e,t,s){s&&e===void 0||xi(Ai(n,"value"),e,t)},xi=function(n,e,t){const s=t instanceof L?new cg(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+yt(s));if(typeof e=="function")throw new Error(n+"contains a function "+yt(s)+" with contents = "+e.toString());if(Mo(e))throw new Error(n+"contains "+e.toString()+" "+yt(s));if(typeof e=="string"&&e.length>wr/3&&Si(e)>wr)throw new Error(n+"contains a string greater than "+wr+" utf8 bytes "+yt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ce(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ua(o)))throw new Error(n+" contains an invalid key ("+o+") "+yt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hg(s,o),xi(n,a,s),ug(s)}),i&&r)throw new Error(n+' contains ".value" child '+yt(s)+" in addition to actual children.")}},Km=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Xn(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ua(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(lg);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&Se(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Qm=function(n,e,t,s){const i=Ai(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];ce(e,(o,a)=>{const l=new L(o);if(xi(i,a,$(t,l)),qo(l)===".priority"&&!so(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Km(i,r)},Pu=function(n,e,t,s){},da=function(n,e,t,s){if(!Ru(t))throw new Error(Ai(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ym=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),da(n,e,t)},bu=function(n,e){if(P(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Xm=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ua(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Hm(t))throw new Error(Ai(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vi(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!jo(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Nu(n,e,t){Vi(n,t),Du(n,s=>jo(s,e))}function De(n,e,t){Vi(n,t),Du(n,s=>Se(s,e)||Se(e,s))}function Du(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Zm(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Zm(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Mn&&re("event: "+t.toString()),_n(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="repo_interrupt",ty=25;class ny{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=si(),this.transactionQueueTree_=new ca,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sy(n,e,t){if(n.stats_=Uo(n.repoInfo_),n.forceRestClient_||x_())n.server_=new ni(n.repoInfo_,(s,i,r,o)=>{ic(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>rc(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{te(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ge(n.repoInfo_,e,(s,i,r,o)=>{ic(n,s,i,r,o)},s=>{rc(n,s)},s=>{iy(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=F_(n.repoInfo_,()=>new Fg(n.stats_,n.server_)),n.infoData_=new xg,n.infoSyncTree_=new tc({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=Ni(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fa(n,"connected",!1),n.serverSyncTree_=new tc({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);De(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function ku(n){const t=n.infoData_.getNode(new L(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Oi(n){return Um({timestamp:ku(n)})}function ic(n,e,t,s,i){n.dataUpdateCount++;const r=new L(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=Xs(t,c=>ee(c));o=Vm(n.serverSyncTree_,r,l,i)}else{const l=ee(t);o=xm(n.serverSyncTree_,r,l,i)}else if(s){const l=Xs(t,c=>ee(c));o=Nm(n.serverSyncTree_,r,l)}else{const l=ee(t);o=Ni(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=rn(n,r)),De(n.eventQueue_,a,o)}function rc(n,e){fa(n,"connected",e),e===!1&&ay(n)}function iy(n,e){ce(e,(t,s)=>{fa(n,t,s)})}function fa(n,e,t){const s=new L("/.info/"+e),i=ee(t);n.infoData_.updateSnapshot(s,i);const r=Ni(n.infoSyncTree_,s,i);De(n.eventQueue_,s,r)}function pa(n){return n.nextWriteId_++}function ry(n,e,t,s,i){Mi(n,"set",{path:e.toString(),value:t,priority:s});const r=Oi(n),o=ee(t,s),a=na(n.serverSyncTree_,e),l=Iu(o,a,r),c=pa(n),h=yu(n.serverSyncTree_,e,l,c,!0);Vi(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const m=d==="ok";m||ve("set at "+e+" failed: "+d);const T=Je(n.serverSyncTree_,c,!m);De(n.eventQueue_,e,T),io(n,i,d,f)});const u=ga(n,e);rn(n,u),De(n.eventQueue_,u,[])}function oy(n,e,t,s){Mi(n,"update",{path:e.toString(),value:t});let i=!0;const r=Oi(n),o={};if(ce(t,(a,l)=>{i=!1,o[a]=wu($(e,a),ee(l),n.serverSyncTree_,r)}),i)re("update() called with empty data.  Don't do anything."),io(n,s,"ok",void 0);else{const a=pa(n),l=bm(n.serverSyncTree_,e,o,a);Vi(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,h)=>{const u=c==="ok";u||ve("update at "+e+" failed: "+c);const d=Je(n.serverSyncTree_,a,!u),f=d.length>0?rn(n,e):e;De(n.eventQueue_,f,d),io(n,s,c,h)}),ce(t,c=>{const h=ga(n,$(e,c));rn(n,h)}),De(n.eventQueue_,e,[])}}function ay(n){Mi(n,"onDisconnectEvents");const e=Oi(n),t=si();Kr(n.onDisconnect_,O(),(i,r)=>{const o=wu(i,r,n.serverSyncTree_,e);ru(t,i,o)});let s=[];Kr(t,O(),(i,r)=>{s=s.concat(Ni(n.serverSyncTree_,i,r));const o=ga(n,i);rn(n,o)}),n.onDisconnect_=si(),De(n.eventQueue_,O(),s)}function ly(n,e,t){let s;P(e._path)===".info"?s=nc(n.infoSyncTree_,e,t):s=nc(n.serverSyncTree_,e,t),Nu(n.eventQueue_,e._path,s)}function oc(n,e,t){let s;P(e._path)===".info"?s=to(n.infoSyncTree_,e,t):s=to(n.serverSyncTree_,e,t),Nu(n.eventQueue_,e._path,s)}function cy(n){n.persistentConnection_&&n.persistentConnection_.interrupt(ey)}function Mi(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),re(t,...e)}function io(n,e,t,s){e&&_n(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function xu(n,e,t){return na(n.serverSyncTree_,e,t)||C.EMPTY_NODE}function _a(n,e=n.transactionQueueTree_){if(e||Li(n,e),mn(e)){const t=Ou(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&hy(n,Es(e),t)}else Au(e)&&ki(e,t=>{_a(n,t)})}function hy(n,e,t){const s=t.map(c=>c.currentWriteId),i=xu(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];_(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=Te(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Mi(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(Je(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Li(n,ha(n.transactionQueueTree_,e)),_a(n,n.transactionQueueTree_),De(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)_n(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ve("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}rn(n,e)}},o)}function rn(n,e){const t=Vu(n,e),s=Es(t),i=Ou(n,t);return uy(n,i,s),s}function uy(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Te(t,l.path);let h=!1,u;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,i=i.concat(Je(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ty)h=!0,u="maxretry",i=i.concat(Je(n.serverSyncTree_,l.currentWriteId,!0));else{const d=xu(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){xi("transaction failed: Data returned ",f,l.path);let m=ee(f);typeof f=="object"&&f!=null&&We(f,".priority")||(m=m.updatePriority(d.getPriority()));const w=l.currentWriteId,G=Oi(n),he=Iu(m,d,G);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=he,l.currentWriteId=pa(n),o.splice(o.indexOf(w),1),i=i.concat(yu(n.serverSyncTree_,l.path,he,l.currentWriteId,l.applyLocally)),i=i.concat(Je(n.serverSyncTree_,w,!0))}else h=!0,u="nodata",i=i.concat(Je(n.serverSyncTree_,l.currentWriteId,!0))}De(n.eventQueue_,t,i),i=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}Li(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)_n(s[a]);_a(n,n.transactionQueueTree_)}function Vu(n,e){let t,s=n.transactionQueueTree_;for(t=P(e);t!==null&&mn(s)===void 0;)s=ha(s,t),e=B(e),t=P(e);return s}function Ou(n,e){const t=[];return Mu(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Mu(n,e,t){const s=mn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);ki(e,i=>{Mu(n,i,t)})}function Li(n,e){const t=mn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Cu(e,t.length>0?t:void 0)}ki(e,s=>{Li(n,s)})}function ga(n,e){const t=Es(Vu(n,e)),s=ha(n.transactionQueueTree_,e);return Wm(s,i=>{Ir(n,i)}),Ir(n,s),Su(s,i=>{Ir(n,i)}),t}function Ir(n,e){const t=mn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Je(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Cu(e,void 0):t.length=r+1,De(n.eventQueue_,Es(e),i);for(let o=0;o<s.length;o++)_n(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function fy(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ve(`Invalid query segment '${t}' in query '${n}'`)}return e}const ac=function(n,e){const t=py(n),s=t.namespace;t.domain==="firebase.com"&&Ke(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ke("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||C_();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Bh(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new L(t.pathString)}},py=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(i=dy(n.substring(h,u)));const d=fy(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",_y=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=lc.charAt(t%64),t=Math.floor(t/64);_(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=lc.charAt(e[i]);return _(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+te(this.snapshot.exportVal())}}class my{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return b(this._path)?null:qo(this._path)}get ref(){return new pt(this._repo,this._path)}get _queryIdentifier(){const e=zl(this._queryParams),t=Lo(e);return t==="{}"?"default":t}get _queryObject(){return zl(this._queryParams)}isEqual(e){if(e=Ye(e),!(e instanceof Xe))return!1;const t=this._repo===e._repo,s=jo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ag(this._path)}}function Lu(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Ts(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===He){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==at)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==lt)throw new Error(s);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===W){if(e!=null&&!so(e)||t!=null&&!so(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(_(n.getIndex()instanceof zo||n.getIndex()===nu,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function ma(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class pt extends Xe{constructor(e,t){super(e,t,new Ho,!1)}get parent(){const e=Qh(this._path);return e===null?null:new pt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ui{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new L(e),s=ns(this.ref,e);return new ui(this._node.getChild(t),s,W)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ui(i,ns(this.ref,s),W)))}hasChild(e){const t=new L(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ws(n,e){return n=Ye(n),n._checkNotDeleted("ref"),e!==void 0?ns(n._root,e):n._root}function ns(n,e){return n=Ye(n),P(n._path)===null?Ym("child","path",e):da("child","path",e),new pt(n._repo,$(n._path,e))}function vy(n,e){n=Ye(n),bu("push",n._path),yn("push",e,n._path,!0);const t=ku(n._repo),s=_y(t),i=ns(n,s),r=ns(n,s);let o;return e!=null?o=Ey(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Ey(n,e){n=Ye(n),bu("set",n._path),yn("set",e,n._path,!1);const t=new gs;return ry(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Ty(n,e){Qm("update",e,n._path);const t=new gs;return oy(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class ya{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new gy("value",this,new ui(e.snapshotNode,new pt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new my(this,e,t):null}matches(e){return e instanceof ya?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function wy(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(h,u)=>{oc(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new yy(t,r||void 0),a=new ya(o);return ly(n._repo,n,a),()=>oc(n._repo,n,a)}function va(n,e,t,s){return wy(n,"value",e,t,s)}class Mt{}class Iy extends Mt{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){yn("endAt",this._value,e._path,!0);const t=Hr(e._queryParams,this._value,this._key);if(ma(t),Ts(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Xe(e._repo,e._path,t,e._orderByCalled)}}class Cy extends Mt{constructor(e,t){super(),this._value=e,this._key=t,this.type="endBefore"}_apply(e){yn("endBefore",this._value,e._path,!1);const t=kg(e._queryParams,this._value,this._key);if(ma(t),Ts(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Xe(e._repo,e._path,t,e._orderByCalled)}}function Ay(n,e){return Pu(),new Cy(n,e)}class Sy extends Mt{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){yn("startAt",this._value,e._path,!0);const t=Dg(e._queryParams,this._value,this._key);if(ma(t),Ts(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Xe(e._repo,e._path,t,e._orderByCalled)}}class Ry extends Mt{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Xe(e._repo,e._path,Ng(e._queryParams,this._limit),e._orderByCalled)}}function Py(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Ry(n)}class by extends Mt{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Lu(e,"orderByChild");const t=new L(this._path);if(b(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new zo(t),i=iu(e._queryParams,s);return Ts(i),new Xe(e._repo,e._path,i,!0)}}function Ny(n){return da("orderByChild","path",n),new by(n)}class Dy extends Mt{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){Lu(e,"orderByKey");const t=iu(e._queryParams,He);return Ts(t),new Xe(e._repo,e._path,t,!0)}}function ky(){return new Dy}class xy extends Mt{constructor(e,t){super(),this._value=e,this._key=t,this.type="equalTo"}_apply(e){if(yn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Iy(this._value,this._key)._apply(new Sy(this._value,this._key)._apply(e))}}function Vy(n,e){return Pu(),new xy(n,e)}function Fu(n,...e){let t=Ye(n);for(const s of e)t=s._apply(t);return t}Em(pt);Sm(pt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="FIREBASE_DATABASE_EMULATOR_HOST",ro={};let My=!1;function Ly(n,e,t,s){n.repoInfo_=new Bh(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Fy(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Ke("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),re("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ac(r,i),a=o.repoInfo,l;typeof process<"u"&&Rl&&(l=Rl[Oy]),l?(r=`http://${l}?ns=${a.namespace}`,o=ac(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new O_(n.name,n.options,e);Xm("Invalid Firebase Database URL",o),b(o.path)||Ke("Database URL must point to the root of a Firebase Database (not including a child path).");const h=By(a,n,c,new V_(n.name,t));return new qy(h,n)}function Uy(n,e){const t=ro[e];(!t||t[n.key]!==n)&&Ke(`Database ${e}(${n.repoInfo_}) has already been deleted.`),cy(n),delete t[n.key]}function By(n,e,t,s){let i=ro[e.name];i||(i={},ro[e.name]=i);let r=i[n.toURLString()];return r&&Ke("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ny(n,My,t,s),i[n.toURLString()]=r,r}class qy{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new pt(this._repo,O())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Uy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ke("Cannot call "+e+" on a deleted database.")}}function Uu(n=Ih(),e){const t=Eh(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=hh("database");s&&jy(t,...s)}return t}function jy(n,e,t,s={}){n=Ye(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ke("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ke('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Gs(Gs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:dh(s.mockUserToken,n.app.options.projectId);r=new Gs(o)}Ly(i,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(n){y_(Th),Kn(new en("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Fy(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),st(Pl,bl,n),st(Pl,bl,"esm2017")}Ge.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ge.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Wy();const $y={apiKey:"AIzaSyDVmky0ufR3BagE9T_AfhhEUY2SAsekG-U",authDomain:"svelte-small-talk.firebaseapp.com",projectId:"svelte-small-talk",storageBucket:"svelte-small-talk.appspot.com",messagingSenderId:"103160807017",appId:"1:103160807017:web:5cbd5d348b703b8c24acf8",databaseURL:"https://svelte-small-talk-default-rtdb.asia-southeast1.firebasedatabase.app/"},Ea=wh($y);Uu(Ea);var zy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,Ta=Ta||{},A=zy||self;function Fi(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Ui(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Gy(n){return Object.prototype.hasOwnProperty.call(n,Cr)&&n[Cr]||(n[Cr]=++Hy)}var Cr="closure_uid_"+(1e9*Math.random()>>>0),Hy=0;function Ky(n,e,t){return n.call.apply(n.bind,arguments)}function Qy(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function pe(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pe=Ky:pe=Qy,pe.apply(null,arguments)}function Fs(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function se(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function _t(){this.s=this.s,this.o=this.o}var Yy=0;_t.prototype.s=!1;_t.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Yy!=0)&&Gy(this)};_t.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bu=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function wa(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function cc(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(Fi(s)){const i=n.length||0,r=s.length||0;n.length=i+r;for(let o=0;o<r;o++)n[i+o]=s[o]}else n.push(s)}}function _e(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var Xy=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const t=()=>{};A.addEventListener("test",t,e),A.removeEventListener("test",t,e)}catch{}return n}();function ss(n){return/^[\s\xa0]*$/.test(n)}function Bi(){var n=A.navigator;return n&&(n=n.userAgent)?n:""}function xe(n){return Bi().indexOf(n)!=-1}function Ia(n){return Ia[" "](n),n}Ia[" "]=function(){};function Jy(n,e){var t=zv;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var Zy=xe("Opera"),on=xe("Trident")||xe("MSIE"),qu=xe("Edge"),oo=qu||on,ju=xe("Gecko")&&!(Bi().toLowerCase().indexOf("webkit")!=-1&&!xe("Edge"))&&!(xe("Trident")||xe("MSIE"))&&!xe("Edge"),ev=Bi().toLowerCase().indexOf("webkit")!=-1&&!xe("Edge");function Wu(){var n=A.document;return n?n.documentMode:void 0}var ao;e:{var Ar="",Sr=function(){var n=Bi();if(ju)return/rv:([^\);]+)(\)|;)/.exec(n);if(qu)return/Edge\/([\d\.]+)/.exec(n);if(on)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(ev)return/WebKit\/(\S+)/.exec(n);if(Zy)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Sr&&(Ar=Sr?Sr[1]:""),on){var Rr=Wu();if(Rr!=null&&Rr>parseFloat(Ar)){ao=String(Rr);break e}}ao=Ar}var lo;if(A.document&&on){var hc=Wu();lo=hc||parseInt(ao,10)||void 0}else lo=void 0;var tv=lo;function is(n,e){if(_e.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(ju){e:{try{Ia(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:nv[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&is.$.h.call(this)}}se(is,_e);var nv={2:"touch",3:"pen",4:"mouse"};is.prototype.h=function(){is.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var qi="closure_listenable_"+(1e6*Math.random()|0),sv=0;function iv(n,e,t,s,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.la=i,this.key=++sv,this.fa=this.ia=!1}function ji(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Ca(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function rv(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function $u(n){const e={};for(const t in n)e[t]=n[t];return e}const uc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zu(n,e){let t,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(t in s)n[t]=s[t];for(let r=0;r<uc.length;r++)t=uc[r],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function Wi(n){this.src=n,this.g={},this.h=0}Wi.prototype.add=function(n,e,t,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=ho(n,e,s,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new iv(e,this.src,r,!!s,i),e.ia=t,n.push(e)),e};function co(n,e){var t=e.type;if(t in n.g){var s=n.g[t],i=Bu(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ji(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ho(n,e,t,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.fa&&r.listener==e&&r.capture==!!t&&r.la==s)return i}return-1}var Aa="closure_lm_"+(1e6*Math.random()|0),Pr={};function Gu(n,e,t,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Gu(n,e[r],t,s,i);return null}return t=Qu(t),n&&n[qi]?n.O(e,t,Ui(s)?!!s.capture:!!s,i):ov(n,e,t,!1,s,i)}function ov(n,e,t,s,i,r){if(!e)throw Error("Invalid event type");var o=Ui(i)?!!i.capture:!!i,a=Ra(n);if(a||(n[Aa]=a=new Wi(n)),t=a.add(e,t,s,o,r),t.proxy)return t;if(s=av(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)Xy||(i=o),n.addEventListener(e.toString(),s,i);else if(n.attachEvent)n.attachEvent(Ku(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function av(){function n(t){return e.call(n.src,n.listener,t)}const e=lv;return n}function Hu(n,e,t,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Hu(n,e[r],t,s,i);else s=Ui(s)?!!s.capture:!!s,t=Qu(t),n&&n[qi]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=ho(r,t,s,i),-1<t&&(ji(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=Ra(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ho(e,t,s,i)),(t=-1<n?e[n]:null)&&Sa(t))}function Sa(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[qi])co(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(Ku(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=Ra(e))?(co(t,n),t.h==0&&(t.src=null,e[Aa]=null)):ji(n)}}}function Ku(n){return n in Pr?Pr[n]:Pr[n]="on"+n}function lv(n,e){if(n.fa)n=!0;else{e=new is(e,this);var t=n.listener,s=n.la||n.src;n.ia&&Sa(n),n=t.call(s,e)}return n}function Ra(n){return n=n[Aa],n instanceof Wi?n:null}var br="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qu(n){return typeof n=="function"?n:(n[br]||(n[br]=function(e){return n.handleEvent(e)}),n[br])}function ne(){_t.call(this),this.i=new Wi(this),this.S=this,this.J=null}se(ne,_t);ne.prototype[qi]=!0;ne.prototype.removeEventListener=function(n,e,t,s){Hu(this,n,e,t,s)};function ae(n,e){var t,s=n.J;if(s)for(t=[];s;s=s.J)t.push(s);if(n=n.S,s=e.type||e,typeof e=="string")e=new _e(e,n);else if(e instanceof _e)e.target=e.target||n;else{var i=e;e=new _e(s,n),zu(e,i)}if(i=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];i=Us(o,s,!0,e)&&i}if(o=e.g=n,i=Us(o,s,!0,e)&&i,i=Us(o,s,!1,e)&&i,t)for(r=0;r<t.length;r++)o=e.g=t[r],i=Us(o,s,!1,e)&&i}ne.prototype.N=function(){if(ne.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)ji(t[s]);delete n.g[e],n.h--}}this.J=null};ne.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};ne.prototype.P=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function Us(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==t){var a=o.listener,l=o.la||o.src;o.ia&&co(n.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Pa=A.JSON.stringify;class cv{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function hv(){var n=ba;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class uv{constructor(){this.h=this.g=null}add(e,t){const s=Yu.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var Yu=new cv(()=>new dv,n=>n.reset());class dv{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function fv(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function pv(n){A.setTimeout(()=>{throw n},0)}let rs,os=!1,ba=new uv,Xu=()=>{const n=A.Promise.resolve(void 0);rs=()=>{n.then(_v)}};var _v=()=>{for(var n;n=hv();){try{n.h.call(n.g)}catch(t){pv(t)}var e=Yu;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}os=!1};function $i(n,e){ne.call(this),this.h=n||1,this.g=e||A,this.j=pe(this.qb,this),this.l=Date.now()}se($i,ne);y=$i.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ae(this,"tick"),this.ga&&(Na(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Na(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}y.N=function(){$i.$.N.call(this),Na(this),delete this.g};function Da(n,e,t){if(typeof n=="function")t&&(n=pe(n,t));else if(n&&typeof n.handleEvent=="function")n=pe(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:A.setTimeout(n,e||0)}function Ju(n){n.g=Da(()=>{n.g=null,n.i&&(n.i=!1,Ju(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class gv extends _t{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ju(this)}N(){super.N(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function as(n){_t.call(this),this.h=n,this.g={}}se(as,_t);var dc=[];function Zu(n,e,t,s){Array.isArray(t)||(t&&(dc[0]=t.toString()),t=dc);for(var i=0;i<t.length;i++){var r=Gu(e,t[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function ed(n){Ca(n.g,function(e,t){this.g.hasOwnProperty(t)&&Sa(e)},n),n.g={}}as.prototype.N=function(){as.$.N.call(this),ed(this)};as.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function zi(){this.g=!0}zi.prototype.Ea=function(){this.g=!1};function mv(n,e,t,s,i,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&u[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function yv(n,e,t,s,i,r,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+t+`
`+r+" "+o})}function zt(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ev(n,t)+(s?" "+s:"")})}function vv(n,e){n.info(function(){return"TIMEOUT: "+e})}zi.prototype.info=function(){};function Ev(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Pa(t)}catch{return e}}var Lt={},fc=null;function Gi(){return fc=fc||new ne}Lt.Ta="serverreachability";function td(n){_e.call(this,Lt.Ta,n)}se(td,_e);function ls(n){const e=Gi();ae(e,new td(e))}Lt.STAT_EVENT="statevent";function nd(n,e){_e.call(this,Lt.STAT_EVENT,n),this.stat=e}se(nd,_e);function ye(n){const e=Gi();ae(e,new nd(e,n))}Lt.Ua="timingevent";function sd(n,e){_e.call(this,Lt.Ua,n),this.size=e}se(sd,_e);function Is(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){n()},e)}var Hi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},id={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ka(){}ka.prototype.h=null;function pc(n){return n.h||(n.h=n.i())}function rd(){}var Cs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xa(){_e.call(this,"d")}se(xa,_e);function Va(){_e.call(this,"c")}se(Va,_e);var uo;function Ki(){}se(Ki,ka);Ki.prototype.g=function(){return new XMLHttpRequest};Ki.prototype.i=function(){return{}};uo=new Ki;function As(n,e,t,s){this.l=n,this.j=e,this.m=t,this.W=s||1,this.U=new as(this),this.P=Tv,n=oo?125:void 0,this.V=new $i(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new od}function od(){this.i=null,this.g="",this.h=!1}var Tv=45e3,ad={},fo={};y=As.prototype;y.setTimeout=function(n){this.P=n};function po(n,e,t){n.L=1,n.A=Yi(Qe(e)),n.u=t,n.S=!0,ld(n,null)}function ld(n,e){n.G=Date.now(),Ss(n),n.B=Qe(n.A);var t=n.B,s=n.W;Array.isArray(s)||(s=[String(s)]),gd(t.i,"t",s),n.o=0,t=n.l.J,n.h=new od,n.g=Ld(n.l,t?e:null,!n.u),0<n.O&&(n.M=new gv(pe(n.Pa,n,n.g),n.O)),Zu(n.U,n.g,"readystatechange",n.nb),e=n.I?$u(n.I):{},n.u?(n.v||(n.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,e)):(n.v="GET",n.g.ha(n.B,n.v,null,e)),ls(),mv(n.j,n.v,n.B,n.m,n.W,n.u)}y.nb=function(n){n=n.target;const e=this.M;e&&Me(n)==3?e.l():this.Pa(n)};y.Pa=function(n){try{if(n==this.g)e:{const h=Me(this.g);var e=this.g.Ia();const u=this.g.da();if(!(3>h)&&(h!=3||oo||this.g&&(this.h.h||this.g.ja()||yc(this.g)))){this.J||h!=4||e==7||(e==8||0>=u?ls(3):ls(2)),Qi(this);var t=this.g.da();this.ca=t;t:if(cd(this)){var s=yc(this.g);n="";var i=s.length,r=Me(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tt(this),qn(this);var o="";break t}this.h.i=new A.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,yv(this.j,this.v,this.B,this.m,this.W,h,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ss(a)){var c=a;break t}}c=null}if(t=c)zt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_o(this,t);else{this.i=!1,this.s=3,ye(12),Tt(this),qn(this);break e}}this.S?(hd(this,h,o),oo&&this.i&&h==3&&(Zu(this.U,this.V,"tick",this.mb),this.V.start())):(zt(this.j,this.m,o,null),_o(this,o)),h==4&&Tt(this),this.i&&!this.J&&(h==4?xd(this.l,this):(this.i=!1,Ss(this)))}else jv(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.s=3,ye(12)):(this.s=0,ye(13)),Tt(this),qn(this)}}}catch{}finally{}};function cd(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function hd(n,e,t){let s=!0,i;for(;!n.J&&n.o<t.length;)if(i=wv(n,t),i==fo){e==4&&(n.s=4,ye(14),s=!1),zt(n.j,n.m,null,"[Incomplete Response]");break}else if(i==ad){n.s=4,ye(15),zt(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else zt(n.j,n.m,i,null),_o(n,i);cd(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),e!=4||t.length!=0||n.h.h||(n.s=1,ye(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Ba(e),e.M=!0,ye(11))):(zt(n.j,n.m,t,"[Invalid Chunked Response]"),Tt(n),qn(n))}y.mb=function(){if(this.g){var n=Me(this.g),e=this.g.ja();this.o<e.length&&(Qi(this),hd(this,n,e),this.i&&n!=4&&Ss(this))}};function wv(n,e){var t=n.o,s=e.indexOf(`
`,t);return s==-1?fo:(t=Number(e.substring(t,s)),isNaN(t)?ad:(s+=1,s+t>e.length?fo:(e=e.slice(s,s+t),n.o=s+t,e)))}y.cancel=function(){this.J=!0,Tt(this)};function Ss(n){n.Y=Date.now()+n.P,ud(n,n.P)}function ud(n,e){if(n.C!=null)throw Error("WatchDog timer not null");n.C=Is(pe(n.lb,n),e)}function Qi(n){n.C&&(A.clearTimeout(n.C),n.C=null)}y.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(vv(this.j,this.B),this.L!=2&&(ls(),ye(17)),Tt(this),this.s=2,qn(this)):ud(this,this.Y-n)};function qn(n){n.l.H==0||n.J||xd(n.l,n)}function Tt(n){Qi(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,Na(n.V),ed(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function _o(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||go(t.i,n))){if(!n.K&&go(t.i,n)&&t.H==3){try{var s=t.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)pi(t),er(t);else break e;Ua(t),ye(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Is(pe(t.ib,t),6e3));if(1>=vd(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else wt(t,11)}else if((n.K||t.g==n)&&pi(t),!ss(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(t.V=c[0],c=c[1],t.H==2)if(c[0]=="c"){t.K=c[1],t.pa=c[2];const h=c[3];h!=null&&(t.ra=h,t.l.info("VER="+t.ra));const u=c[4];u!=null&&(t.Ga=u,t.l.info("SVER="+t.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.L=s,t.l.info("backChannelRequestTimeoutMs_="+s)),s=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.i;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Oa(r,r.h),r.h=null))}if(s.F){const T=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.Da=T,q(s.I,s.F,T))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),s=t;var o=n;if(s.wa=Md(s,s.J?s.pa:null,s.Y),o.K){Ed(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.C&&(Qi(a),Ss(a)),s.g=o}else Dd(s);0<t.j.length&&tr(t)}else c[0]!="stop"&&c[0]!="close"||wt(t,7);else t.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?wt(t,7):Fa(t):c[0]!="noop"&&t.h&&t.h.Aa(c),t.A=0)}}ls(4)}catch{}}function Iv(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Fi(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function Cv(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Fi(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function dd(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Fi(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Cv(n),s=Iv(n),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],t&&t[r],n)}var fd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Av(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),i=null;if(0<=s){var r=n[t].substring(0,s);i=n[t].substring(s+1)}else r=n[t];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function At(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof At){this.h=n.h,di(this,n.j),this.s=n.s,this.g=n.g,fi(this,n.m),this.l=n.l;var e=n.i,t=new cs;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),_c(this,t),this.o=n.o}else n&&(e=String(n).match(fd))?(this.h=!1,di(this,e[1]||"",!0),this.s=kn(e[2]||""),this.g=kn(e[3]||"",!0),fi(this,e[4]),this.l=kn(e[5]||"",!0),_c(this,e[6]||"",!0),this.o=kn(e[7]||"")):(this.h=!1,this.i=new cs(null,this.h))}At.prototype.toString=function(){var n=[],e=this.j;e&&n.push(xn(e,gc,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(xn(e,gc,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(xn(t,t.charAt(0)=="/"?Pv:Rv,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",xn(t,Nv)),n.join("")};function Qe(n){return new At(n)}function di(n,e,t){n.j=t?kn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function fi(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function _c(n,e,t){e instanceof cs?(n.i=e,Dv(n.i,n.h)):(t||(e=xn(e,bv)),n.i=new cs(e,n.h))}function q(n,e,t){n.i.set(e,t)}function Yi(n){return q(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function kn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function xn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Sv),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Sv(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var gc=/[#\/\?@]/g,Rv=/[#\?:]/g,Pv=/[#\?]/g,bv=/[#\?@]/g,Nv=/#/g;function cs(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function gt(n){n.g||(n.g=new Map,n.h=0,n.i&&Av(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}y=cs.prototype;y.add=function(n,e){gt(this),this.i=null,n=vn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function pd(n,e){gt(n),e=vn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function _d(n,e){return gt(n),e=vn(n,e),n.g.has(e)}y.forEach=function(n,e){gt(this),this.g.forEach(function(t,s){t.forEach(function(i){n.call(e,i,s,this)},this)},this)};y.ta=function(){gt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const i=n[s];for(let r=0;r<i.length;r++)t.push(e[s])}return t};y.Z=function(n){gt(this);let e=[];if(typeof n=="string")_d(this,n)&&(e=e.concat(this.g.get(vn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};y.set=function(n,e){return gt(this),this.i=null,n=vn(this,n),_d(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};y.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function gd(n,e,t){pd(n,e),0<t.length&&(n.i=null,n.g.set(vn(n,e),wa(t)),n.h+=t.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),n.push(i)}}return this.i=n.join("&")};function vn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Dv(n,e){e&&!n.j&&(gt(n),n.i=null,n.g.forEach(function(t,s){var i=s.toLowerCase();s!=i&&(pd(this,s),gd(this,i,t))},n)),n.j=e}var kv=class{constructor(n,e){this.g=n,this.map=e}};function md(n){this.l=n||xv,A.PerformanceNavigationTiming?(n=A.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(A.g&&A.g.Ka&&A.g.Ka()&&A.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xv=10;function yd(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function vd(n){return n.h?1:n.g?n.g.size:0}function go(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Oa(n,e){n.g?n.g.add(e):n.h=e}function Ed(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}md.prototype.cancel=function(){if(this.i=Td(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Td(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return wa(n.i)}var Vv=class{stringify(n){return A.JSON.stringify(n,void 0)}parse(n){return A.JSON.parse(n,void 0)}};function Ov(){this.g=new Vv}function Mv(n,e,t){const s=t||"";try{dd(n,function(i,r){let o=i;Ui(i)&&(o=Pa(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Lv(n,e){const t=new zi;if(A.Image){const s=new Image;s.onload=Fs(Bs,t,s,"TestLoadImage: loaded",!0,e),s.onerror=Fs(Bs,t,s,"TestLoadImage: error",!1,e),s.onabort=Fs(Bs,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=Fs(Bs,t,s,"TestLoadImage: timeout",!1,e),A.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function Bs(n,e,t,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Xi(n){this.l=n.ec||null,this.j=n.ob||!1}se(Xi,ka);Xi.prototype.g=function(){return new Ji(this.l,this.j)};Xi.prototype.i=function(n){return function(){return n}}({});function Ji(n,e){ne.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Ma,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}se(Ji,ne);var Ma=0;y=Ji.prototype;y.open=function(n,e){if(this.readyState!=Ma)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,hs(this)};y.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||A).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=Ma};y.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,hs(this)),this.g&&(this.readyState=3,hs(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wd(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function wd(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}y.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Rs(this):hs(this),this.readyState==3&&wd(this)}};y.Za=function(n){this.g&&(this.response=this.responseText=n,Rs(this))};y.Ya=function(n){this.g&&(this.response=n,Rs(this))};y.ka=function(){this.g&&Rs(this)};function Rs(n){n.readyState=4,n.l=null,n.j=null,n.A=null,hs(n)}y.setRequestHeader=function(n,e){this.v.append(n,e)};y.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function hs(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Fv=A.JSON.parse;function z(n){ne.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Id,this.L=this.M=!1}se(z,ne);var Id="",Uv=/^https?$/i,Bv=["POST","PUT"];y=z.prototype;y.Oa=function(n){this.M=n};y.ha=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():uo.g(),this.C=this.u?pc(this.u):pc(uo),this.g.onreadystatechange=pe(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(r){mc(this,r);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)t.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())t.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),i=A.FormData&&n instanceof A.FormData,!(0<=Bu(Bv,e))||s||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Sd(this),0<this.B&&((this.L=qv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pe(this.ua,this)):this.A=Da(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){mc(this,r)}};function qv(n){return on&&typeof n.timeout=="number"&&n.ontimeout!==void 0}y.ua=function(){typeof Ta<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ae(this,"timeout"),this.abort(8))};function mc(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Cd(n),Zi(n)}function Cd(n){n.F||(n.F=!0,ae(n,"complete"),ae(n,"error"))}y.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ae(this,"complete"),ae(this,"abort"),Zi(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zi(this,!0)),z.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?Ad(this):this.kb())};y.kb=function(){Ad(this)};function Ad(n){if(n.h&&typeof Ta<"u"&&(!n.C[1]||Me(n)!=4||n.da()!=2)){if(n.v&&Me(n)==4)Da(n.La,0,n);else if(ae(n,"readystatechange"),Me(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=o===0){var i=String(n.I).match(fd)[1]||null;!i&&A.self&&A.self.location&&(i=A.self.location.protocol.slice(0,-1)),s=!Uv.test(i?i.toLowerCase():"")}t=s}if(t)ae(n,"complete"),ae(n,"success");else{n.m=6;try{var r=2<Me(n)?n.g.statusText:""}catch{r=""}n.j=r+" ["+n.da()+"]",Cd(n)}}finally{Zi(n)}}}}function Zi(n,e){if(n.g){Sd(n);const t=n.g,s=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||ae(n,"ready");try{t.onreadystatechange=s}catch{}}}function Sd(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(A.clearTimeout(n.A),n.A=null)}y.isActive=function(){return!!this.g};function Me(n){return n.g?n.g.readyState:0}y.da=function(){try{return 2<Me(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Fv(e)}};function yc(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Id:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function jv(n){const e={};n=(n.g&&2<=Me(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<n.length;s++){if(ss(n[s]))continue;var t=fv(n[s]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const r=e[i]||[];e[i]=r,r.push(t)}rv(e,function(s){return s.join(", ")})}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Rd(n){let e="";return Ca(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function La(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=Rd(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):q(n,e,t))}function Pn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Pd(n){this.Ga=0,this.j=[],this.l=new zi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Pn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Pn("baseRetryDelayMs",5e3,n),this.hb=Pn("retryDelaySeedMs",1e4,n),this.eb=Pn("forwardChannelMaxRetries",2,n),this.xa=Pn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new md(n&&n.concurrentRequestLimit),this.Ja=new Ov,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}y=Pd.prototype;y.ra=8;y.H=1;function Fa(n){if(bd(n),n.H==3){var e=n.W++,t=Qe(n.I);if(q(t,"SID",n.K),q(t,"RID",e),q(t,"TYPE","terminate"),Ps(n,t),e=new As(n,n.l,e),e.L=2,e.A=Yi(Qe(t)),t=!1,A.navigator&&A.navigator.sendBeacon)try{t=A.navigator.sendBeacon(e.A.toString(),"")}catch{}!t&&A.Image&&(new Image().src=e.A,t=!0),t||(e.g=Ld(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ss(e)}Od(n)}function er(n){n.g&&(Ba(n),n.g.cancel(),n.g=null)}function bd(n){er(n),n.u&&(A.clearTimeout(n.u),n.u=null),pi(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&A.clearTimeout(n.m),n.m=null)}function tr(n){if(!yd(n.i)&&!n.m){n.m=!0;var e=n.Na;rs||Xu(),os||(rs(),os=!0),ba.add(e,n),n.C=0}}function Wv(n,e){return vd(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Is(pe(n.Na,n,e),Vd(n,n.C)),n.C++,!0)}y.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new As(this,this.l,n);let r=this.s;if(this.U&&(r?(r=$u(r),zu(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var s=this.j[t];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Nd(this,i,e),t=Qe(this.I),q(t,"RID",n),q(t,"CVER",22),this.F&&q(t,"X-HTTP-Session-Id",this.F),Ps(this,t),r&&(this.O?e="headers="+encodeURIComponent(String(Rd(r)))+"&"+e:this.o&&La(t,this.o,r)),Oa(this.i,i),this.bb&&q(t,"TYPE","init"),this.P?(q(t,"$req",e),q(t,"SID","null"),i.aa=!0,po(i,t,null)):po(i,t,e),this.H=2}}else this.H==3&&(n?vc(this,n):this.j.length==0||yd(this.i)||vc(this))};function vc(n,e){var t;e?t=e.m:t=n.W++;const s=Qe(n.I);q(s,"SID",n.K),q(s,"RID",t),q(s,"AID",n.V),Ps(n,s),n.o&&n.s&&La(s,n.o,n.s),t=new As(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Nd(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Oa(n.i,t),po(t,s,e)}function Ps(n,e){n.na&&Ca(n.na,function(t,s){q(e,s,t)}),n.h&&dd({},function(t,s){q(e,s,t)})}function Nd(n,e,t){t=Math.min(n.j.length,t);var s=n.h?pe(n.h.Va,n.h,n):null;e:{var i=n.j;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<t;l++){let c=i[l].g;const h=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{Mv(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,s}function Dd(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;rs||Xu(),os||(rs(),os=!0),ba.add(e,n),n.A=0}}function Ua(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Is(pe(n.Ma,n),Vd(n,n.A)),n.A++,!0)}y.Ma=function(){if(this.u=null,kd(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Is(pe(this.jb,this),n)}};y.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ye(10),er(this),kd(this))};function Ba(n){n.B!=null&&(A.clearTimeout(n.B),n.B=null)}function kd(n){n.g=new As(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Qe(n.wa);q(e,"RID","rpc"),q(e,"SID",n.K),q(e,"AID",n.V),q(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&q(e,"TO",n.qa),q(e,"TYPE","xmlhttp"),Ps(n,e),n.o&&n.s&&La(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.A=Yi(Qe(e)),t.u=null,t.S=!0,ld(t,n)}y.ib=function(){this.v!=null&&(this.v=null,er(this),Ua(this),ye(19))};function pi(n){n.v!=null&&(A.clearTimeout(n.v),n.v=null)}function xd(n,e){var t=null;if(n.g==e){pi(n),Ba(n),n.g=null;var s=2}else if(go(n.i,e))t=e.F,Ed(n.i,e),s=1;else return;if(n.H!=0){if(e.i)if(s==1){t=e.u?e.u.length:0,e=Date.now()-e.G;var i=n.C;s=Gi(),ae(s,new sd(s,t)),tr(n)}else Dd(n);else if(i=e.s,i==3||i==0&&0<e.ca||!(s==1&&Wv(n,e)||s==2&&Ua(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:wt(n,5);break;case 4:wt(n,10);break;case 3:wt(n,6);break;default:wt(n,2)}}}function Vd(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function wt(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var s=pe(n.pb,n);t||(t=new At("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||di(t,"https"),Yi(t)),Lv(t.toString(),s)}else ye(2);n.H=0,n.h&&n.h.za(e),Od(n),bd(n)}y.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ye(2)):(this.l.info("Failed to ping google.com"),ye(1))};function Od(n){if(n.H=0,n.ma=[],n.h){const e=Td(n.i);(e.length!=0||n.j.length!=0)&&(cc(n.ma,e),cc(n.ma,n.j),n.i.i.length=0,wa(n.j),n.j.length=0),n.h.ya()}}function Md(n,e,t){var s=t instanceof At?Qe(t):new At(t);if(s.g!="")e&&(s.g=e+"."+s.g),fi(s,s.m);else{var i=A.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new At(null);s&&di(r,s),e&&(r.g=e),i&&fi(r,i),t&&(r.l=t),s=r}return t=n.F,e=n.Da,t&&e&&q(s,t,e),q(s,"VER",n.ra),Ps(n,s),s}function Ld(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n.Ha&&!n.va?new z(new Xi({ob:t})):new z(n.va),e.Oa(n.J),e}y.isActive=function(){return!!this.h&&this.h.isActive(this)};function Fd(){}y=Fd.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.isActive=function(){return!0};y.Va=function(){};function _i(){if(on&&!(10<=Number(tv)))throw Error("Environmental error: no available transport.")}_i.prototype.g=function(n,e){return new Ce(n,e)};function Ce(n,e){ne.call(this),this.g=new Pd(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!ss(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ss(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new En(this)}se(Ce,ne);Ce.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;ye(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Md(n,null,n.Y),tr(n)};Ce.prototype.close=function(){Fa(this.g)};Ce.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Pa(n),n=t);e.j.push(new kv(e.fb++,n)),e.H==3&&tr(e)};Ce.prototype.N=function(){this.g.h=null,delete this.j,Fa(this.g),delete this.g,Ce.$.N.call(this)};function Ud(n){xa.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}se(Ud,xa);function Bd(){Va.call(this),this.status=1}se(Bd,Va);function En(n){this.g=n}se(En,Fd);En.prototype.Ba=function(){ae(this.g,"a")};En.prototype.Aa=function(n){ae(this.g,new Ud(n))};En.prototype.za=function(n){ae(this.g,new Bd)};En.prototype.ya=function(){ae(this.g,"b")};function $v(){this.blockSize=-1}function ke(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}se(ke,$v);ke.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Nr(n,e,t){t||(t=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)s[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var r=n.g[3],o=e+(r^t&(i^r))+s[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(r^t&(i^r))+s[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(r^t&(i^r))+s[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(r^t&(i^r))+s[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(t^i))+s[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(t^i))+s[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(t^i))+s[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(t^i))+s[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^r)+s[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^r)+s[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^r)+s[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^r)+s[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~r))+s[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~r))+s[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~r))+s[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~r))+s[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+r&4294967295}ke.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=t;)Nr(this,n,r),r+=this.blockSize;if(typeof n=="string"){for(;r<e;)if(s[i++]=n.charCodeAt(r++),i==this.blockSize){Nr(this,s),i=0;break}}else for(;r<e;)if(s[i++]=n[r++],i==this.blockSize){Nr(this,s),i=0;break}}this.h=i,this.i+=e};ke.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var s=0;32>s;s+=8)n[t++]=this.g[e]>>>s&255;return n};function F(n,e){this.h=e;for(var t=[],s=!0,i=n.length-1;0<=i;i--){var r=n[i]|0;s&&r==e||(t[i]=r,s=!1)}this.g=t}var zv={};function qa(n){return-128<=n&&128>n?Jy(n,function(e){return new F([e|0],0>e?-1:0)}):new F([n|0],0>n?-1:0)}function Le(n){if(isNaN(n)||!isFinite(n))return Kt;if(0>n)return oe(Le(-n));for(var e=[],t=1,s=0;n>=t;s++)e[s]=n/t|0,t*=mo;return new F(e,0)}function qd(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return oe(qd(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Le(Math.pow(e,8)),s=Kt,i=0;i<n.length;i+=8){var r=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+r),e);8>r?(r=Le(Math.pow(e,r)),s=s.R(r).add(Le(o))):(s=s.R(t),s=s.add(Le(o)))}return s}var mo=4294967296,Kt=qa(0),yo=qa(1),Ec=qa(16777216);y=F.prototype;y.ea=function(){if(Ae(this))return-oe(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var s=this.D(t);n+=(0<=s?s:mo+s)*e,e*=mo}return n};y.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(ze(this))return"0";if(Ae(this))return"-"+oe(this).toString(n);for(var e=Le(Math.pow(n,6)),t=this,s="";;){var i=mi(t,e).g;t=gi(t,i.R(e));var r=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,ze(t))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};y.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function ze(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Ae(n){return n.h==-1}y.X=function(n){return n=gi(this,n),Ae(n)?-1:ze(n)?0:1};function oe(n){for(var e=n.g.length,t=[],s=0;s<e;s++)t[s]=~n.g[s];return new F(t,~n.h).add(yo)}y.abs=function(){return Ae(this)?oe(this):this};y.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(n.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,t[i]=o<<16|r}return new F(t,t[t.length-1]&-2147483648?-1:0)};function gi(n,e){return n.add(oe(e))}y.R=function(n){if(ze(this)||ze(n))return Kt;if(Ae(this))return Ae(n)?oe(this).R(oe(n)):oe(oe(this).R(n));if(Ae(n))return oe(this.R(oe(n)));if(0>this.X(Ec)&&0>n.X(Ec))return Le(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],s=0;s<2*e;s++)t[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<n.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=n.D(i)>>>16,l=n.D(i)&65535;t[2*s+2*i]+=o*l,qs(t,2*s+2*i),t[2*s+2*i+1]+=r*l,qs(t,2*s+2*i+1),t[2*s+2*i+1]+=o*a,qs(t,2*s+2*i+1),t[2*s+2*i+2]+=r*a,qs(t,2*s+2*i+2)}for(s=0;s<e;s++)t[s]=t[2*s+1]<<16|t[2*s];for(s=e;s<2*e;s++)t[s]=0;return new F(t,0)};function qs(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function bn(n,e){this.g=n,this.h=e}function mi(n,e){if(ze(e))throw Error("division by zero");if(ze(n))return new bn(Kt,Kt);if(Ae(n))return e=mi(oe(n),e),new bn(oe(e.g),oe(e.h));if(Ae(e))return e=mi(n,oe(e)),new bn(oe(e.g),e.h);if(30<n.g.length){if(Ae(n)||Ae(e))throw Error("slowDivide_ only works with positive integers.");for(var t=yo,s=e;0>=s.X(n);)t=Tc(t),s=Tc(s);var i=Bt(t,1),r=Bt(s,1);for(s=Bt(s,2),t=Bt(t,2);!ze(s);){var o=r.add(s);0>=o.X(n)&&(i=i.add(t),r=o),s=Bt(s,1),t=Bt(t,1)}return e=gi(n,i.R(e)),new bn(i,e)}for(i=Kt;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),s=Math.ceil(Math.log(t)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Le(t),o=r.R(e);Ae(o)||0<o.X(n);)t-=s,r=Le(t),o=r.R(e);ze(r)&&(r=yo),i=i.add(r),n=gi(n,o)}return new bn(i,n)}y.gb=function(n){return mi(this,n).h};y.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0;s<e;s++)t[s]=this.D(s)&n.D(s);return new F(t,this.h&n.h)};y.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0;s<e;s++)t[s]=this.D(s)|n.D(s);return new F(t,this.h|n.h)};y.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0;s<e;s++)t[s]=this.D(s)^n.D(s);return new F(t,this.h^n.h)};function Tc(n){for(var e=n.g.length+1,t=[],s=0;s<e;s++)t[s]=n.D(s)<<1|n.D(s-1)>>>31;return new F(t,n.h)}function Bt(n,e){var t=e>>5;e%=32;for(var s=n.g.length-t,i=[],r=0;r<s;r++)i[r]=0<e?n.D(r+t)>>>e|n.D(r+t+1)<<32-e:n.D(r+t);return new F(i,n.h)}_i.prototype.createWebChannel=_i.prototype.g;Ce.prototype.send=Ce.prototype.u;Ce.prototype.open=Ce.prototype.m;Ce.prototype.close=Ce.prototype.close;Hi.NO_ERROR=0;Hi.TIMEOUT=8;Hi.HTTP_ERROR=6;id.COMPLETE="complete";rd.EventType=Cs;Cs.OPEN="a";Cs.CLOSE="b";Cs.ERROR="c";Cs.MESSAGE="d";ne.prototype.listen=ne.prototype.O;z.prototype.listenOnce=z.prototype.P;z.prototype.getLastError=z.prototype.Sa;z.prototype.getLastErrorCode=z.prototype.Ia;z.prototype.getStatus=z.prototype.da;z.prototype.getResponseJson=z.prototype.Wa;z.prototype.getResponseText=z.prototype.ja;z.prototype.send=z.prototype.ha;z.prototype.setWithCredentials=z.prototype.Oa;ke.prototype.digest=ke.prototype.l;ke.prototype.reset=ke.prototype.reset;ke.prototype.update=ke.prototype.j;F.prototype.add=F.prototype.add;F.prototype.multiply=F.prototype.R;F.prototype.modulo=F.prototype.gb;F.prototype.compare=F.prototype.X;F.prototype.toNumber=F.prototype.ea;F.prototype.toString=F.prototype.toString;F.prototype.getBits=F.prototype.D;F.fromNumber=Le;F.fromString=qd;var Gv=function(){return new _i},Hv=function(){return Gi()},Dr=Hi,Kv=id,Qv=Lt,wc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},js=rd,Yv=z,Xv=ke,Qt=F;const Ic="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}de.UNAUTHENTICATED=new de(null),de.GOOGLE_CREDENTIALS=new de("google-credentials-uid"),de.FIRST_PARTY=new de("first-party-uid"),de.MOCK_USER=new de("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn="10.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Vo("@firebase/firestore");function Nn(){return Dt.logLevel}function v(n,...e){if(Dt.logLevel<=k.DEBUG){const t=e.map(ja);Dt.debug(`Firestore (${Tn}): ${n}`,...t)}}function Be(n,...e){if(Dt.logLevel<=k.ERROR){const t=e.map(ja);Dt.error(`Firestore (${Tn}): ${n}`,...t)}}function an(n,...e){if(Dt.logLevel<=k.WARN){const t=e.map(ja);Dt.warn(`Firestore (${Tn}): ${n}`,...t)}}function ja(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(n="Unexpected state"){const e=`FIRESTORE (${Tn}) INTERNAL ASSERTION FAILED: `+n;throw Be(e),new Error(e)}function Y(n,e){n||R()}function V(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends pn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(de.UNAUTHENTICATED))}shutdown(){}}class Zv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class eE{constructor(e){this.t=e,this.currentUser=de.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=l=>this.i!==s?(s=this.i,t(l)):Promise.resolve();let r=new rt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new rt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new rt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Y(typeof s.accessToken=="string"),new jd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new de(e)}}class tE{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=de.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nE{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new tE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(de.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const s=r=>{r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Y(typeof t.token=="string"),this.R=t.token,new sE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=rE(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function M(n,e){return n<e?-1:n>e?1:0}function ln(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new Ee(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?M(this.nanoseconds,e.nanoseconds):M(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.timestamp=e}static fromTimestamp(e){return new S(e)}static min(){return new S(new Ee(0,0))}static max(){return new S(new Ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t,s){t===void 0?t=0:t>e.length&&R(),s===void 0?s=e.length-t:s>e.length-t&&R(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return us.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof us?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class j extends us{construct(e,t,s){return new j(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new E(g.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new j(t)}static emptyPath(){return new j([])}}const oE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends us{construct(e,t,s){return new me(e,t,s)}static isValidIdentifier(e){return oE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new me(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new E(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new E(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new E(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new E(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(t)}static emptyPath(){return new me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(j.fromString(e))}static fromName(e){return new I(j.fromString(e).popFirst(5))}static empty(){return new I(j.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&j.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return j.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new j(e.slice()))}}function aE(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=S.fromTimestamp(s===1e9?new Ee(t+1,0):new Ee(t,s));return new ut(i,I.empty(),e)}function lE(n){return new ut(n.readTime,n.key,-1)}class ut{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ut(S.min(),I.empty(),-1)}static max(){return new ut(S.max(),I.empty(),-1)}}function cE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=I.comparator(n.documentKey,e.documentKey),t!==0?t:M(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==hE)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new p((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof p?t:p.resolve(t)}catch(t){return p.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):p.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):p.reject(t)}static resolve(e){return new p((t,s)=>{t(e)})}static reject(e){return new p((t,s)=>{s(e)})}static waitFor(e){return new p((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},l=>s(l))}),o=!0,r===i&&t()})}static or(e){let t=p.resolve(!1);for(const s of e)t=t.next(i=>i?p.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new p((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;t(e[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,t){return new p((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new rt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new jn(e,t.error)):this.V.resolve()},this.transaction.onerror=s=>{const i=za(s.target.error);this.V.reject(new jn(e,i))}}static open(e,t,s,i){try{return new $a(t,e.transaction(i,s))}catch(r){throw new jn(t,r)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(v("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new fE(t)}}class It{constructor(e,t,s){this.name=e,this.version=t,this.p=s,It.S(Jt())===12.2&&Be("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return v("SimpleDb","Removing database:",e),vt(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!_h())return!1;if(It.C())return!0;const e=Jt(),t=It.S(e),s=0<t&&t<10,i=It.v(e),r=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||r)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static v(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async O(e){return this.db||(v("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=r=>{const o=r.target.result;t(o)},i.onblocked=()=>{s(new jn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=r=>{const o=r.target.error;o.name==="VersionError"?s(new E(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new E(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new jn(e,o))},i.onupgradeneeded=r=>{v("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);const o=r.target.result;this.p.N(o,i.transaction,r.oldVersion,this.version).next(()=>{v("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,i){const r=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=$a.open(this.db,e,r?"readonly":"readwrite",s),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),p.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(v("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class dE{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return vt(this.k.delete())}}class jn extends E{constructor(e,t){super(g.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function bs(n){return n.name==="IndexedDbTransactionError"}class fE{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(v("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(v("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),vt(s)}add(e){return v("SimpleDb","ADD",this.store.name,e,e),vt(this.store.add(e))}get(e){return vt(this.store.get(e)).next(t=>(t===void 0&&(t=null),v("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return v("SimpleDb","DELETE",this.store.name,e),vt(this.store.delete(e))}count(){return v("SimpleDb","COUNT",this.store.name),vt(this.store.count())}W(e,t){const s=this.options(e,t),i=s.index?this.store.index(s.index):this.store;if(typeof i.getAll=="function"){const r=i.getAll(s.range);return new p((o,a)=>{r.onerror=l=>{a(l.target.error)},r.onsuccess=l=>{o(l.target.result)}})}{const r=this.cursor(s),o=[];return this.G(r,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,t){const s=this.store.getAll(e,t===null?void 0:t);return new p((i,r)=>{s.onerror=o=>{r(o.target.error)},s.onsuccess=o=>{i(o.target.result)}})}H(e,t){v("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.J=!1;const i=this.cursor(s);return this.G(i,(r,o,a)=>a.delete())}Y(e,t){let s;t?s=e:(s={},t=e);const i=this.cursor(s);return this.G(i,t)}Z(e){const t=this.cursor({});return new p((s,i)=>{t.onerror=r=>{const o=za(r.target.error);i(o)},t.onsuccess=r=>{const o=r.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}G(e,t){const s=[];return new p((i,r)=>{e.onerror=o=>{r(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new dE(a),c=t(a.primaryKey,a.value,l);if(c instanceof p){const h=c.catch(u=>(l.done(),p.reject(u)));s.push(h)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>p.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.J?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function vt(n){return new p((e,t)=>{n.onsuccess=s=>{const i=s.target.result;e(i)},n.onerror=s=>{const i=za(s.target.error);t(i)}})}let Cc=!1;function za(n){const e=It.S(Jt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Cc||(Cc=!0,setTimeout(()=>{throw s},0)),s}}return n}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.se(s),this.oe=s=>t.writeSequenceNumber(s))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Ga._e=-1;function nr(n){return n==null}function vo(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function sr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function pE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t){this.comparator=e,this.root=t||ie.EMPTY}insert(e,t){return new H(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ie.BLACK,null,null))}remove(e){return new H(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ie.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ws(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ws(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ws(this.root,e,this.comparator,!0)}}class Ws{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ie{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ie.RED,this.left=i??ie.EMPTY,this.right=r??ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new ie(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ie.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}}ie.EMPTY=null,ie.RED=!0,ie.BLACK=!1;ie.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(e,t,s,i,r){return this}insert(e,t,s){return new ie(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.comparator=e,this.data=new H(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Sc(this.data.getIterator())}getIteratorFrom(e){return new Sc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new le(this.comparator);return t.data=e,t}}class Sc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new Ze([])}unionWith(e){let t=new le(me.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ln(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new $d("Invalid base64 string: "+r):r}}(e);return new ge(t)}static fromUint8Array(e){const t=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return M(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ge.EMPTY_BYTE_STRING=new ge("");const _E=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dt(n){if(Y(!!n),typeof n=="string"){let e=0;const t=_E.exec(n);if(Y(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Q(n.seconds),nanos:Q(n.nanos)}}function Q(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function kt(n){return typeof n=="string"?ge.fromBase64String(n):ge.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ka(n){const e=n.mapValue.fields.__previous_value__;return Ha(e)?Ka(e):e}function ds(n){const e=dt(n.mapValue.fields.__local_write_time__.timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,t,s,i,r,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class fs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new fs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ha(n)?4:mE(n)?9007199254740991:10:R()}function qe(n,e){if(n===e)return!0;const t=xt(n);if(t!==xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ds(n).isEqual(ds(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=dt(i.timestampValue),a=dt(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,r){return kt(i.bytesValue).isEqual(kt(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,r){return Q(i.geoPointValue.latitude)===Q(r.geoPointValue.latitude)&&Q(i.geoPointValue.longitude)===Q(r.geoPointValue.longitude)}(n,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Q(i.integerValue)===Q(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Q(i.doubleValue),a=Q(r.doubleValue);return o===a?vo(o)===vo(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return ln(n.arrayValue.values||[],e.arrayValue.values||[],qe);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(Ac(o)!==Ac(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!qe(o[l],a[l])))return!1;return!0}(n,e);default:return R()}}function ps(n,e){return(n.values||[]).find(t=>qe(t,e))!==void 0}function cn(n,e){if(n===e)return 0;const t=xt(n),s=xt(e);if(t!==s)return M(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return M(n.booleanValue,e.booleanValue);case 2:return function(r,o){const a=Q(r.integerValue||r.doubleValue),l=Q(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return Rc(n.timestampValue,e.timestampValue);case 4:return Rc(ds(n),ds(e));case 5:return M(n.stringValue,e.stringValue);case 6:return function(r,o){const a=kt(r),l=kt(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=M(a[c],l[c]);if(h!==0)return h}return M(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){const a=M(Q(r.latitude),Q(o.latitude));return a!==0?a:M(Q(r.longitude),Q(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const h=cn(a[c],l[c]);if(h)return h}return M(a.length,l.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===$s.mapValue&&o===$s.mapValue)return 0;if(r===$s.mapValue)return 1;if(o===$s.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let u=0;u<l.length&&u<h.length;++u){const d=M(l[u],h[u]);if(d!==0)return d;const f=cn(a[l[u]],c[h[u]]);if(f!==0)return f}return M(l.length,h.length)}(n.mapValue,e.mapValue);default:throw R()}}function Rc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return M(n,e);const t=dt(n),s=dt(e),i=M(t.seconds,s.seconds);return i!==0?i:M(t.nanos,s.nanos)}function hn(n){return Eo(n)}function Eo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=dt(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return kt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return I.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=Eo(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Eo(t.fields[o])}`;return i+"}"}(n.mapValue):R()}function To(n){return!!n&&"integerValue"in n}function Qa(n){return!!n&&"arrayValue"in n}function Pc(n){return!!n&&"nullValue"in n}function bc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function kr(n){return!!n&&"mapValue"in n}function Wn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return sr(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Wn(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function mE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.value=e}static empty(){return new Ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!kr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wn(t)}setAll(e){let t=me.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=Wn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());kr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];kr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){sr(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ve(Wn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t,s,i,r,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new fe(e,0,S.min(),S.min(),S.min(),Ve.empty(),0)}static newFoundDocument(e,t,s,i){return new fe(e,1,t,S.min(),s,i,0)}static newNoDocument(e,t){return new fe(e,2,t,S.min(),S.min(),Ve.empty(),0)}static newUnknownDocument(e,t){return new fe(e,3,t,S.min(),S.min(),Ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this.position=e,this.inclusive=t}}function Nc(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=I.comparator(I.fromName(o.referenceValue),t.key):s=cn(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Dc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qe(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t="asc"){this.field=e,this.dir=t}}function yE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{}class X extends zd{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new EE(e,t,s):t==="array-contains"?new IE(e,s):t==="in"?new CE(e,s):t==="not-in"?new AE(e,s):t==="array-contains-any"?new SE(e,s):new X(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new TE(e,s):new wE(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(cn(t,this.value)):t!==null&&xt(this.value)===xt(t)&&this.matchesComparison(cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class je extends zd{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new je(e,t)}matches(e){return Gd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Gd(n){return n.op==="and"}function Hd(n){return vE(n)&&Gd(n)}function vE(n){for(const e of n.filters)if(e instanceof je)return!1;return!0}function wo(n){if(n instanceof X)return n.field.canonicalString()+n.op.toString()+hn(n.value);if(Hd(n))return n.filters.map(e=>wo(e)).join(",");{const e=n.filters.map(t=>wo(t)).join(",");return`${n.op}(${e})`}}function Kd(n,e){return n instanceof X?function(s,i){return i instanceof X&&s.op===i.op&&s.field.isEqual(i.field)&&qe(s.value,i.value)}(n,e):n instanceof je?function(s,i){return i instanceof je&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&Kd(o,i.filters[a]),!0):!1}(n,e):void R()}function Qd(n){return n instanceof X?function(t){return`${t.field.canonicalString()} ${t.op} ${hn(t.value)}`}(n):n instanceof je?function(t){return t.op.toString()+" {"+t.getFilters().map(Qd).join(" ,")+"}"}(n):"Filter"}class EE extends X{constructor(e,t,s){super(e,t,s),this.key=I.fromName(s.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.matchesComparison(t)}}class TE extends X{constructor(e,t){super(e,"in",t),this.keys=Yd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class wE extends X{constructor(e,t){super(e,"not-in",t),this.keys=Yd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Yd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>I.fromName(s.referenceValue))}class IE extends X{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qa(t)&&ps(t.arrayValue,this.value)}}class CE extends X{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ps(this.value.arrayValue,t)}}class AE extends X{constructor(e,t){super(e,"not-in",t)}matches(e){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ps(this.value.arrayValue,t)}}class SE extends X{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ps(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function kc(n,e=null,t=[],s=[],i=null,r=null,o=null){return new RE(n,e,t,s,i,r,o)}function Ya(n){const e=V(n);if(e.ce===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>wo(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),nr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>hn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>hn(s)).join(",")),e.ce=t}return e.ce}function Xa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!yE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Kd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Dc(n.startAt,e.startAt)&&Dc(n.endAt,e.endAt)}function Io(n){return I.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function PE(n,e,t,s,i,r,o,a){return new ir(n,e,t,s,i,r,o,a)}function Ja(n){return new ir(n)}function xc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bE(n){return n.collectionGroup!==null}function $n(n){const e=V(n);if(e.le===null){e.le=[];const t=new Set;for(const r of e.explicitOrderBy)e.le.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new le(me.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.le.push(new vi(r,s))}),t.has(me.keyField().canonicalString())||e.le.push(new vi(me.keyField(),s))}return e.le}function Fe(n){const e=V(n);return e.he||(e.he=NE(e,$n(n))),e.he}function NE(n,e){if(n.limitType==="F")return kc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new vi(i.field,r)});const t=n.endAt?new yi(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new yi(n.startAt.position,n.startAt.inclusive):null;return kc(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Co(n,e,t){return new ir(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function rr(n,e){return Xa(Fe(n),Fe(e))&&n.limitType===e.limitType}function Xd(n){return`${Ya(Fe(n))}|lt:${n.limitType}`}function qt(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(i=>Qd(i)).join(", ")}]`),nr(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(i=>hn(i)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(i=>hn(i)).join(",")),`Target(${s})`}(Fe(n))}; limitType=${n.limitType})`}function or(n,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):I.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,e)&&function(s,i){for(const r of $n(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=Nc(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,$n(s),i)||s.endAt&&!function(o,a,l){const c=Nc(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,$n(s),i))}(n,e)}function DE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jd(n){return(e,t)=>{let s=!1;for(const i of $n(n)){const r=kE(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function kE(n,e,t){const s=n.field.isKeyField()?I.comparator(e.key,t.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?cn(l,c):R()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return R()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){sr(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return pE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=new H(I.comparator);function ft(){return xE}const Zd=new H(I.comparator);function Vn(...n){let e=Zd;for(const t of n)e=e.insert(t.key,t);return e}function VE(n){let e=Zd;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Ct(){return zn()}function ef(){return zn()}function zn(){return new wn(n=>n.toString(),(n,e)=>n.isEqual(e))}const OE=new le(I.comparator);function x(...n){let e=OE;for(const t of n)e=e.add(t);return e}const ME=new le(M);function LE(){return ME}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vo(e)?"-0":e}}function UE(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this._=void 0}}function BE(n,e,t){return n instanceof Ao?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Ha(r)&&(r=Ka(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(t,e):n instanceof Ei?tf(n,e):n instanceof Ti?nf(n,e):function(i,r){const o=jE(i,r),a=Vc(o)+Vc(i.Ie);return To(o)&&To(i.Ie)?UE(a):FE(i.serializer,a)}(n,e)}function qE(n,e,t){return n instanceof Ei?tf(n,e):n instanceof Ti?nf(n,e):t}function jE(n,e){return n instanceof So?function(s){return To(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Ao extends ar{}class Ei extends ar{constructor(e){super(),this.elements=e}}function tf(n,e){const t=sf(e);for(const s of n.elements)t.some(i=>qe(i,s))||t.push(s);return{arrayValue:{values:t}}}class Ti extends ar{constructor(e){super(),this.elements=e}}function nf(n,e){let t=sf(e);for(const s of n.elements)t=t.filter(i=>!qe(i,s));return{arrayValue:{values:t}}}class So extends ar{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Vc(n){return Q(n.integerValue||n.doubleValue)}function sf(n){return Qa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function WE(n,e){return n.field.isEqual(e.field)&&function(s,i){return s instanceof Ei&&i instanceof Ei||s instanceof Ti&&i instanceof Ti?ln(s.elements,i.elements,qe):s instanceof So&&i instanceof So?qe(s.Ie,i.Ie):s instanceof Ao&&i instanceof Ao}(n.transform,e.transform)}class St{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new St}static exists(e){return new St(void 0,e)}static updateTime(e){return new St(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ks(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Za{}function rf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zE(n.key,St.none()):new el(n.key,n.data,St.none());{const t=n.data,s=Ve.empty();let i=new le(me.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new lr(n.key,s,new Ze(i.toArray()),St.none())}}function $E(n,e,t){n instanceof el?function(i,r,o){const a=i.value.clone(),l=Mc(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof lr?function(i,r,o){if(!Ks(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Mc(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(of(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Gn(n,e,t,s){return n instanceof el?function(r,o,a,l){if(!Ks(r.precondition,o))return a;const c=r.value.clone(),h=Lc(r.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof lr?function(r,o,a,l){if(!Ks(r.precondition,o))return a;const c=Lc(r.fieldTransforms,l,o),h=o.data;return h.setAll(of(r)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(n,e,t,s):function(r,o,a){return Ks(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function Oc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&ln(s,i,(r,o)=>WE(r,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class el extends Za{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class lr extends Za{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function of(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Mc(n,e,t){const s=new Map;Y(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,qE(o,a,t[i]))}return s}function Lc(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,BE(r,o,e))}return s}class zE extends Za{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&$E(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Gn(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Gn(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ef();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const l=rf(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),x())}isEqual(e){return this.batchId===e.batchId&&ln(this.mutations,e.mutations,(t,s)=>Oc(t,s))&&ln(this.baseMutations,e.baseMutations,(t,s)=>Oc(t,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K,D;function af(n){if(n===void 0)return Be("GRPC error has no .code"),g.UNKNOWN;switch(n){case K.OK:return g.OK;case K.CANCELLED:return g.CANCELLED;case K.UNKNOWN:return g.UNKNOWN;case K.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case K.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case K.INTERNAL:return g.INTERNAL;case K.UNAVAILABLE:return g.UNAVAILABLE;case K.UNAUTHENTICATED:return g.UNAUTHENTICATED;case K.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case K.NOT_FOUND:return g.NOT_FOUND;case K.ALREADY_EXISTS:return g.ALREADY_EXISTS;case K.PERMISSION_DENIED:return g.PERMISSION_DENIED;case K.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case K.ABORTED:return g.ABORTED;case K.OUT_OF_RANGE:return g.OUT_OF_RANGE;case K.UNIMPLEMENTED:return g.UNIMPLEMENTED;case K.DATA_LOSS:return g.DATA_LOSS;default:return R()}}(D=K||(K={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=new Qt([4294967295,4294967295],0);function Fc(n){const e=QE().encode(n),t=new Xv;return t.update(e),new Uint8Array(t.digest())}function Uc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Qt([t,s],0),new Qt([i,r],0)]}class tl{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new On(`Invalid padding: ${t}`);if(s<0)throw new On(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new On(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new On(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=Qt.fromNumber(this.Te)}de(e,t,s){let i=e.add(t.multiply(Qt.fromNumber(s)));return i.compare(YE)===1&&(i=new Qt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Fc(e),[s,i]=Uc(t);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);if(!this.Ae(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new tl(r,i,t);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=Fc(e),[s,i]=Uc(t);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);this.Re(o)}}Re(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class On extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,Ns.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new cr(S.min(),i,new H(M),ft(),x())}}class Ns{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ns(s,t,x(),x(),x())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t,s,i){this.Ve=e,this.removedTargetIds=t,this.key=s,this.me=i}}class lf{constructor(e,t){this.targetId=e,this.fe=t}}class cf{constructor(e,t,s=ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Bc{constructor(){this.ge=0,this.pe=jc(),this.ye=ge.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=x(),t=x(),s=x();return this.pe.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:R()}}),new Ns(this.ye,this.we,e,t,s)}Fe(){this.Se=!1,this.pe=jc()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Y(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class XE{constructor(e){this.Be=e,this.ke=new Map,this.qe=ft(),this.Qe=qc(),this.Ke=new H(M)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.Ce(e.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(e.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(t);break;case 3:this.je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.Ce(e.resumeToken));break;default:R()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((s,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,s=e.fe.count,i=this.Ye(t);if(i){const r=i.target;if(Io(r))if(s===0){const o=new I(r.path);this.We(t,o,fe.newNoDocument(o,S.min()))}else Y(s===1);else{const o=this.Ze(t);if(o!==s){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(t);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,c)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let o,a;try{o=kt(s).toUint8Array()}catch(l){if(l instanceof $d)return an("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new tl(o,i,r)}catch(l){return an(l instanceof On?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,t,s){return t.fe.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Be.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(t,r,null),i++)}),i}it(e){const t=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&Io(a.target)){const l=new I(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,fe.newNoDocument(l,e))}r.De&&(t.set(o,r.ve()),r.Fe())}});let s=x();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const i=new cr(e,t,this.Ke,this.qe,s);return this.qe=ft(),this.Qe=qc(),this.Ke=new H(M),i}Ue(e,t){if(!this.je(e))return;const s=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,s),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const i=this.ze(e);this.st(e,t)?i.Me(t,1):i.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),s&&(this.qe=this.qe.insert(t,s))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new Bc,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new le(M),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Be._t(e)}He(e){this.ke.set(e,new Bc),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function qc(){return new H(I.comparator)}function jc(){return new H(I.comparator)}const JE={asc:"ASCENDING",desc:"DESCENDING"},ZE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eT={and:"AND",or:"OR"};class tT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ro(n,e){return n.useProto3Json||nr(e)?e:{value:e}}function nT(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Yt(n){return Y(!!n),S.fromTimestamp(function(t){const s=dt(t);return new Ee(s.seconds,s.nanos)}(n))}function iT(n,e){return Po(n,e).canonicalString()}function Po(n,e){const t=function(i){return new j(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function hf(n){const e=j.fromString(n);return Y(_f(e)),e}function xr(n,e){const t=hf(e);if(t.get(1)!==n.databaseId.projectId)throw new E(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new E(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I(df(t))}function uf(n,e){return iT(n.databaseId,e)}function rT(n){const e=hf(n);return e.length===4?j.emptyPath():df(e)}function Wc(n){return new j(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function df(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function oT(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:R()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,h){return c.useProto3Json?(Y(h===void 0||typeof h=="string"),ge.fromBase64String(h||"")):(Y(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ge.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?g.UNKNOWN:af(c.code);return new E(h,c.message||"")}(o);t=new cf(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=xr(n,s.document.name),r=Yt(s.document.updateTime),o=s.document.createTime?Yt(s.document.createTime):S.min(),a=new Ve({mapValue:{fields:s.document.fields}}),l=fe.newFoundDocument(i,r,o,a),c=s.targetIds||[],h=s.removedTargetIds||[];t=new Qs(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=xr(n,s.document),r=s.readTime?Yt(s.readTime):S.min(),o=fe.newNoDocument(i,r),a=s.removedTargetIds||[];t=new Qs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=xr(n,s.document),r=s.removedTargetIds||[];t=new Qs([],r,i,null)}else{if(!("filter"in e))return R();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new KE(i,r),a=s.targetId;t=new lf(a,o)}}return t}function aT(n,e){return{documents:[uf(n,e.path)]}}function lT(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=uf(n,i);const r=function(c){if(c.length!==0)return pf(je.create(c,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const o=function(c){if(c.length!==0)return c.map(h=>function(d){return{field:jt(d.field),direction:uT(d.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Ro(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ut:t,parent:i}}function cT(n){let e=rT(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){Y(s===1);const h=t.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];t.where&&(r=function(u){const d=ff(u);return d instanceof je&&Hd(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(u){return u.map(d=>function(m){return new vi(Wt(m.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,nr(d)?null:d}(t.limit));let l=null;t.startAt&&(l=function(u){const d=!!u.before,f=u.values||[];return new yi(f,d)}(t.startAt));let c=null;return t.endAt&&(c=function(u){const d=!u.before,f=u.values||[];return new yi(f,d)}(t.endAt)),PE(e,i,o,r,a,"F",l,c)}function hT(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ff(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Wt(t.unaryFilter.field);return X.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Wt(t.unaryFilter.field);return X.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Wt(t.unaryFilter.field);return X.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wt(t.unaryFilter.field);return X.create(o,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(n):n.fieldFilter!==void 0?function(t){return X.create(Wt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return je.create(t.compositeFilter.filters.map(s=>ff(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return R()}}(t.compositeFilter.op))}(n):R()}function uT(n){return JE[n]}function dT(n){return ZE[n]}function fT(n){return eT[n]}function jt(n){return{fieldPath:n.canonicalString()}}function Wt(n){return me.fromServerFormat(n.fieldPath)}function pf(n){return n instanceof X?function(t){if(t.op==="=="){if(bc(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NAN"}};if(Pc(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bc(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NOT_NAN"}};if(Pc(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jt(t.field),op:dT(t.op),value:t.value}}}(n):n instanceof je?function(t){const s=t.getFilters().map(i=>pf(i));return s.length===1?s[0]:{compositeFilter:{op:fT(t.op),filters:s}}}(n):R()}function _f(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t,s,i,r=S.min(),o=S.min(),a=ge.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new et(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this.ct=e}}function _T(n){const e=cT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Co(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(){this._n=new mT}addToCollectionParentIndex(e,t){return this._n.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}deleteAllFieldIndexes(e){return p.resolve()}createTargetIndexes(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t){return p.resolve(null)}getIndexType(e,t){return p.resolve(0)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,t){return p.resolve(ut.min())}getMinOffsetFromCollectionGroup(e,t){return p.resolve(ut.min())}updateCollectionGroup(e,t,s){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class mT{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new le(j.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new le(j.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new un(0)}static Ln(){return new un(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(){this.changes=new wn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?p.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&Gn(s.mutation,i,Ze.empty(),Ee.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,x()).next(()=>s))}getLocalViewOfDocuments(e,t,s=x()){const i=Ct();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=Vn();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=Ct();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,x()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=ft();const o=zn(),a=function(){return zn()}();return t.forEach((l,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof lr)?r=r.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Gn(h.mutation,c,h.mutation.getFieldMask(),Ee.now())):o.set(c.key,Ze.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>{var u;return a.set(c,new vT(h,(u=o.get(c))!==null&&u!==void 0?u:null))}),a))}recalculateAndSaveOverlays(e,t){const s=zn();let i=new H((o,a)=>o-a),r=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=t.get(l);if(c===null)return;let h=s.get(l)||Ze.empty();h=a.applyToLocalView(c,h),s.set(l,h);const u=(i.get(a.batchId)||x()).add(l);i=i.insert(a.batchId,u)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,u=ef();h.forEach(d=>{if(!r.has(d)){const f=rf(t.get(d),s.get(d));f!==null&&u.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,u))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,i){return function(o){return I.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):p.resolve(Ct());let a=-1,l=r;return o.next(c=>p.forEach(c,(h,u)=>(a<u.largestBatchId&&(a=u.largestBatchId),r.get(h)?p.resolve():this.remoteDocumentCache.getEntry(e,h).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,x())).next(h=>({batchId:a,changes:VE(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new I(t)).next(s=>{let i=Vn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let o=Vn();return this.indexManager.getCollectionParents(e,r).next(a=>p.forEach(a,l=>{const c=function(u,d){return new ir(d,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s,i).next(h=>{h.forEach((u,d)=>{o=o.insert(u,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i))).next(o=>{r.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,fe.newInvalidDocument(h)))});let a=Vn();return o.forEach((l,c)=>{const h=r.get(l);h!==void 0&&Gn(h.mutation,c,Ze.empty(),Ee.now()),or(t,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return p.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Yt(i.createTime)}}(t)),p.resolve()}getNamedQuery(e,t){return p.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:_T(i.bundledQuery),readTime:Yt(i.readTime)}}(t)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(){this.overlays=new H(I.comparator),this.hr=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ct();return p.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.ht(e,t,r)}),p.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.hr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.hr.delete(s)),p.resolve()}getOverlaysForCollection(e,t,s){const i=Ct(),r=t.length+1,o=new I(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return p.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new H((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=Ct(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ct(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return p.resolve(a)}ht(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(s.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new HE(t,s));let r=this.hr.get(t);r===void 0&&(r=x(),this.hr.set(t,r)),this.hr.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.Pr=new le(Z.Ir),this.Tr=new le(Z.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const s=new Z(e,t);this.Pr=this.Pr.add(s),this.Tr=this.Tr.add(s)}dr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Ar(new Z(e,t))}Rr(e,t){e.forEach(s=>this.removeReference(s,t))}Vr(e){const t=new I(new j([])),s=new Z(t,e),i=new Z(t,e+1),r=[];return this.Tr.forEachInRange([s,i],o=>{this.Ar(o),r.push(o.key)}),r}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new I(new j([])),s=new Z(t,e),i=new Z(t,e+1);let r=x();return this.Tr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new Z(e,0),s=this.Pr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Z{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return I.comparator(e.key,t.key)||M(e.pr,t.pr)}static Er(e,t){return M(e.pr,t.pr)||I.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new le(Z.Ir)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new GE(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Z(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,t){return p.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.br(s),r=i<0?0:i;return p.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Z(t,0),i=new Z(t,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([s,i],o=>{const a=this.Sr(o.pr);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new le(M);return t.forEach(i=>{const r=new Z(i,0),o=new Z(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([r,o],a=>{s=s.add(a.pr)})}),p.resolve(this.Dr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;I.isDocumentKey(r)||(r=r.child(""));const o=new Z(new I(r),0);let a=new le(M);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),p.resolve(this.Dr(a))}Dr(e){const t=[];return e.forEach(s=>{const i=this.Sr(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Y(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.wr;return p.forEach(t.mutations,i=>{const r=new Z(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=s})}Mn(e){}containsKey(e,t){const s=new Z(t,0),i=this.wr.firstAfterOrEqual(s);return p.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.vr=e,this.docs=function(){return new H(I.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.vr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return p.resolve(s?s.document.mutableCopy():fe.newInvalidDocument(t))}getEntries(e,t){let s=ft();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():fe.newInvalidDocument(i))}),p.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=ft();const o=t.path,a=new I(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||cE(lE(h),s)<=0||(i.has(h.key)||or(t,h))&&(r=r.insert(h.key,h.mutableCopy()))}return p.resolve(r)}getAllFromCollectionGroup(e,t,s,i){R()}Fr(e,t){return p.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new AT(this)}getSize(e){return p.resolve(this.size)}}class AT extends yT{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(s)}),p.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.persistence=e,this.Mr=new wn(t=>Ya(t),Xa),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Or=0,this.Nr=new nl,this.targetCount=0,this.Lr=un.Nn()}forEachTarget(e,t){return this.Mr.forEach((s,i)=>t(i)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Or&&(this.Or=t),p.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new un(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.qn(t),p.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Mr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),p.waitFor(r).next(()=>i)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const s=this.Mr.get(t)||null;return p.resolve(s)}addMatchingKeys(e,t,s){return this.Nr.dr(t,s),p.resolve()}removeMatchingKeys(e,t,s){this.Nr.Rr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),p.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Nr.gr(t);return p.resolve(s)}containsKey(e,t){return p.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,t){this.Br={},this.overlays={},this.kr=new Ga(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new ST(this),this.indexManager=new gT,this.remoteDocumentCache=function(i){return new CT(i)}(s=>this.referenceDelegate.Kr(s)),this.serializer=new pT(t),this.$r=new TT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Br[e.toKey()];return s||(s=new IT(t,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,s){v("MemoryPersistence","Starting transaction:",e);const i=new PT(this.kr.next());return this.referenceDelegate.Ur(),s(i).next(r=>this.referenceDelegate.Wr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gr(e,t){return p.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,t)))}}class PT extends uE{constructor(e){super(),this.currentSequenceNumber=e}}class sl{constructor(e){this.persistence=e,this.zr=new nl,this.jr=null}static Hr(e){return new sl(e)}get Jr(){if(this.jr)return this.jr;throw R()}addReference(e,t,s){return this.zr.addReference(s,t),this.Jr.delete(s.toString()),p.resolve()}removeReference(e,t,s){return this.zr.removeReference(s,t),this.Jr.add(s.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),p.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Jr.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Jr,s=>{const i=I.fromPath(s);return this.Yr(e,i).next(r=>{r||t.removeEntry(i,S.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(s=>{s?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return p.or([()=>p.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.qi=s,this.Qi=i}static Ki(e,t){let s=x(),i=x();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new il(e,t.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Zf()?8:It.v(Jt())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.ji(e,t).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Hi(e,t,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new bT;return this.Ji(e,t,o).next(a=>{if(r.result=a,this.Ui)return this.Yi(e,t,o,a.size)})}).next(()=>r.result)}Yi(e,t,s,i){return s.documentReadCount<this.Wi?(Nn()<=k.DEBUG&&v("QueryEngine","SDK will not create cache indexes for query:",qt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),p.resolve()):(Nn()<=k.DEBUG&&v("QueryEngine","Query:",qt(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Gi*i?(Nn()<=k.DEBUG&&v("QueryEngine","The SDK decides to create cache indexes for query:",qt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fe(t))):p.resolve())}ji(e,t){if(xc(t))return p.resolve(null);let s=Fe(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Co(t,null,"F"),s=Fe(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=x(...r);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Zi(t,a);return this.Xi(t,c,o,l.readTime)?this.ji(e,Co(t,null,"F")):this.es(e,c,t,l)}))})))}Hi(e,t,s,i){return xc(t)||i.isEqual(S.min())?p.resolve(null):this.zi.getDocuments(e,s).next(r=>{const o=this.Zi(t,r);return this.Xi(t,o,s,i)?p.resolve(null):(Nn()<=k.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qt(t)),this.es(e,o,t,aE(i,-1)).next(a=>a))})}Zi(e,t){let s=new le(Jd(e));return t.forEach((i,r)=>{or(e,r)&&(s=s.add(r))}),s}Xi(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ji(e,t,s){return Nn()<=k.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",qt(t)),this.zi.getDocumentsMatchingQuery(e,t,ut.min(),s)}es(e,t,s,i){return this.zi.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,t,s,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new H(M),this.rs=new wn(r=>Ya(r),Xa),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(s)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ET(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function kT(n,e,t,s){return new DT(n,e,t,s)}async function gf(n,e){const t=V(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t._s(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=x();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(s,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function mf(n){const e=V(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function xT(n,e){const t=V(n),s=e.snapshotVersion;let i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;const a=[];e.targetChanges.forEach((h,u)=>{const d=i.get(u);if(!d)return;a.push(t.Qr.removeMatchingKeys(r,h.removedDocuments,u).next(()=>t.Qr.addMatchingKeys(r,h.addedDocuments,u)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(u)!==null?f=f.withResumeToken(ge.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):h.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(h.resumeToken,s)),i=i.insert(u,f),function(T,w,G){return T.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(d,f,h)&&a.push(t.Qr.updateTargetData(r,f))});let l=ft(),c=x();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(VT(r,o,e.documentUpdates).next(h=>{l=h.cs,c=h.ls})),!s.isEqual(S.min())){const h=t.Qr.getLastRemoteSnapshotVersion(r).next(u=>t.Qr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(t.ns=i,r))}function VT(n,e,t){let s=x(),i=x();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=ft();return t.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(S.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function OT(n,e){const t=V(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Qr.getTargetData(s,e).next(r=>r?(i=r,p.resolve(i)):t.Qr.allocateTargetId(s).next(o=>(i=new et(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Qr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.ns.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(s.targetId,s),t.rs.set(e,s.targetId)),s})}async function bo(n,e,t){const s=V(n),i=s.ns.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!bs(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ns=s.ns.remove(e),s.rs.delete(i.target)}function $c(n,e,t){const s=V(n);let i=S.min(),r=x();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const u=V(l),d=u.rs.get(h);return d!==void 0?p.resolve(u.ns.get(d)):u.Qr.getTargetData(c,h)}(s,o,Fe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.ts.getDocumentsMatchingQuery(o,e,t?i:S.min(),t?r:x())).next(a=>(MT(s,DE(e),a),{documents:a,hs:r})))}function MT(n,e,t){let s=n.ss.get(e)||S.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.ss.set(e,s)}class zc{constructor(){this.activeTargetIds=LE()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LT{constructor(){this.no=new zc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,s){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new zc,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs=null;function Vr(){return zs===null?zs=function(){return 268435456+Math.round(2147483648*Math.random())}():zs++,"0x"+zs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="WebChannelConnection";class qT extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=s+"://"+t.host,this.po=`projects/${i}/databases/${r}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get wo(){return!1}So(t,s,i,r,o){const a=Vr(),l=this.bo(t,s.toUriEncodedString());v("RestConnection",`Sending RPC '${t}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,r,o),this.Co(t,l,c,i).then(h=>(v("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw an("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}vo(t,s,i,r,o,a){return this.So(t,s,i,r,o)}Do(t,s,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Tn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>t[o]=r),i&&i.headers.forEach((r,o)=>t[o]=r)}bo(t,s){const i=UT[t];return`${this.fo}/v1/${s}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,s,i){const r=Vr();return new Promise((o,a)=>{const l=new Yv;l.setWithCredentials(!0),l.listenOnce(Kv.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Dr.NO_ERROR:const h=l.getResponseJson();v(ue,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(h)),o(h);break;case Dr.TIMEOUT:v(ue,`RPC '${e}' ${r} timed out`),a(new E(g.DEADLINE_EXCEEDED,"Request time out"));break;case Dr.HTTP_ERROR:const u=l.getStatus();if(v(ue,`RPC '${e}' ${r} failed with status:`,u,"response text:",l.getResponseText()),u>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(w){const G=w.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(G)>=0?G:g.UNKNOWN}(f.status);a(new E(m,f.message))}else a(new E(g.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new E(g.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{v(ue,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);v(ue,`RPC '${e}' ${r} sending request:`,i),l.send(t,"POST",c,s,15)})}Fo(e,t,s){const i=Vr(),r=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Gv(),a=Hv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const h=r.join("");v(ue,`Creating RPC '${e}' stream ${i}: ${h}`,l);const u=o.createWebChannel(h,l);let d=!1,f=!1;const m=new BT({lo:w=>{f?v(ue,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(v(ue,`Opening RPC '${e}' stream ${i} transport.`),u.open(),d=!0),v(ue,`RPC '${e}' stream ${i} sending:`,w),u.send(w))},ho:()=>u.close()}),T=(w,G,he)=>{w.listen(G,we=>{try{he(we)}catch(Re){setTimeout(()=>{throw Re},0)}})};return T(u,js.EventType.OPEN,()=>{f||v(ue,`RPC '${e}' stream ${i} transport opened.`)}),T(u,js.EventType.CLOSE,()=>{f||(f=!0,v(ue,`RPC '${e}' stream ${i} transport closed`),m.Vo())}),T(u,js.EventType.ERROR,w=>{f||(f=!0,an(ue,`RPC '${e}' stream ${i} transport errored:`,w),m.Vo(new E(g.UNAVAILABLE,"The operation could not be completed")))}),T(u,js.EventType.MESSAGE,w=>{var G;if(!f){const he=w.data[0];Y(!!he);const we=he,Re=we.error||((G=we[0])===null||G===void 0?void 0:G.error);if(Re){v(ue,`RPC '${e}' stream ${i} received error:`,Re);const Vs=Re.status;let Ft=function(qf){const pl=K[qf];if(pl!==void 0)return af(pl)}(Vs),Os=Re.message;Ft===void 0&&(Ft=g.INTERNAL,Os="Unknown error status: "+Vs+" with message "+Re.message),f=!0,m.Vo(new E(Ft,Os)),u.close()}else v(ue,`RPC '${e}' stream ${i} received:`,he),m.mo(he)}}),T(a,Qv.STAT_EVENT,w=>{w.stat===wc.PROXY?v(ue,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===wc.NOPROXY&&v(ue,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Ro()},0),m}}function Or(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(n){return new tT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t,s=1e3,i=1.5,r=6e4){this.oi=e,this.timerId=t,this.Mo=s,this.xo=i,this.Oo=r,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const t=Math.floor(this.No+this.Qo()),s=Math.max(0,Date.now()-this.Bo),i=Math.max(0,t-s);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,t,s,i,r,o,a,l){this.oi=e,this.$o=s,this.Uo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new vf(e,t)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():t&&t.code===g.RESOURCE_EXHAUSTED?(Be(t.toString()),Be("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Wo===t&&this.o_(s,i)},s=>{e(()=>{const i=new E(g.UNKNOWN,"Fetching auth token failed: "+s.message);return this.__(i)})})}o_(e,t){const s=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po(()=>{s(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{s(()=>this.__(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget(()=>this.Wo===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WT extends jT{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();const t=oT(this.serializer,e),s=function(r){if(!("targetChange"in r))return S.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?S.min():o.readTime?Yt(o.readTime):S.min()}(e);return this.listener.u_(t,s)}c_(e){const t={};t.database=Wc(this.serializer),t.addTarget=function(r,o){let a;const l=o.target;if(a=Io(l)?{documents:aT(r,l)}:{query:lT(r,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=sT(r,o.resumeToken);const c=Ro(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(S.min())>0){a.readTime=nT(r,o.snapshotVersion.toTimestamp());const c=Ro(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=hT(this.serializer,e);s&&(t.labels=s),this.t_(t)}l_(e){const t={};t.database=Wc(this.serializer),t.removeTarget=e,this.t_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new E(g.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.So(e,Po(t,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new E(g.UNKNOWN,r.toString())})}vo(e,t,s,i,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Po(t,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new E(g.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class zT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Be(t),this.g_=!1):v("OnlineStateTracker",t)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=r,this.M_.io(o=>{s.enqueueAndForget(async()=>{ks(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=V(l);c.v_.add(4),await Ds(c),c.x_.set("Unknown"),c.v_.delete(4),await hr(c)}(this))})}),this.x_=new zT(s,i)}}async function hr(n){if(ks(n))for(const e of n.F_)await e(!0)}async function Ds(n){for(const e of n.F_)await e(!1)}function Ef(n,e){const t=V(n);t.C_.has(e.targetId)||(t.C_.set(e.targetId,e),ll(t)?al(t):In(t).Jo()&&ol(t,e))}function rl(n,e){const t=V(n),s=In(t);t.C_.delete(e),s.Jo()&&Tf(t,e),t.C_.size===0&&(s.Jo()?s.Xo():ks(t)&&t.x_.set("Unknown"))}function ol(n,e){if(n.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(S.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}In(n).c_(e)}function Tf(n,e){n.O_.Oe(e),In(n).l_(e)}function al(n){n.O_=new XE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>n.C_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),In(n).start(),n.x_.p_()}function ll(n){return ks(n)&&!In(n).Ho()&&n.C_.size>0}function ks(n){return V(n).v_.size===0}function wf(n){n.O_=void 0}async function HT(n){n.C_.forEach((e,t)=>{ol(n,e)})}async function KT(n,e){wf(n),ll(n)?(n.x_.S_(e),al(n)):n.x_.set("Unknown")}async function QT(n,e,t){if(n.x_.set("Online"),e instanceof cf&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(n,e)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Hc(n,s)}else if(e instanceof Qs?n.O_.$e(e):e instanceof lf?n.O_.Je(e):n.O_.Ge(e),!t.isEqual(S.min()))try{const s=await mf(n.localStore);t.compareTo(s)>=0&&await function(r,o){const a=r.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=r.C_.get(c);h&&r.C_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=r.C_.get(l);if(!h)return;r.C_.set(l,h.withResumeToken(ge.EMPTY_BYTE_STRING,h.snapshotVersion)),Tf(r,l);const u=new et(h.target,l,c,h.sequenceNumber);ol(r,u)}),r.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await Hc(n,s)}}async function Hc(n,e,t){if(!bs(e))throw e;n.v_.add(1),await Ds(n),n.x_.set("Offline"),t||(t=()=>mf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n.v_.delete(1),await hr(n)})}async function Kc(n,e){const t=V(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=ks(t);t.v_.add(3),await Ds(t),s&&t.x_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.v_.delete(3),await hr(t)}async function YT(n,e){const t=V(n);e?(t.v_.delete(2),await hr(t)):e||(t.v_.add(2),await Ds(t),t.x_.set("Unknown"))}function In(n){return n.N_||(n.N_=function(t,s,i){const r=V(t);return r.R_(),new WT(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Po:HT.bind(null,n),To:KT.bind(null,n),u_:QT.bind(null,n)}),n.F_.push(async e=>{e?(n.N_.Zo(),ll(n)?al(n):n.x_.set("Unknown")):(await n.N_.stop(),wf(n))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new cl(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function If(n,e){if(Be("AsyncQueue",`${e}: ${n}`),bs(n))return new E(g.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.comparator=e?(t,s)=>e(t,s)||I.comparator(t.key,s.key):(t,s)=>I.comparator(t.key,s.key),this.keyedMap=Vn(),this.sortedSet=new H(this.comparator)}static emptySet(e){return new Xt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Xt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.B_=new H(I.comparator)}track(e){const t=e.doc.key,s=this.B_.get(t);s?e.type!==0&&s.type===3?this.B_=this.B_.insert(t,e):e.type===3&&s.type!==1?this.B_=this.B_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.B_=this.B_.remove(t):e.type===1&&s.type===2?this.B_=this.B_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):R():this.B_=this.B_.insert(t,e)}k_(){const e=[];return this.B_.inorderTraversal((t,s)=>{e.push(s)}),e}}class dn{constructor(e,t,s,i,r,o,a,l,c){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new dn(e,t,Xt.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class JT{constructor(){this.queries=new wn(e=>Xd(e),rr),this.onlineState="Unknown",this.W_=new Set}}async function ZT(n,e){const t=V(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.K_()&&e.U_()&&(s=2):(r=new XT,s=e.U_()?0:1);try{switch(s){case 0:r.q_=await t.onListen(i,!0);break;case 1:r.q_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=If(o,`Initialization of query '${qt(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,r),r.Q_.push(e),e.G_(t.onlineState),r.q_&&e.z_(r.q_)&&hl(t)}async function ew(n,e){const t=V(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const o=r.Q_.indexOf(e);o>=0&&(r.Q_.splice(o,1),r.Q_.length===0?i=e.U_()?0:1:!r.K_()&&e.U_()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function tw(n,e){const t=V(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.Q_)a.z_(i)&&(s=!0);o.q_=i}}s&&hl(t)}function nw(n,e,t){const s=V(n),i=s.queries.get(e);if(i)for(const r of i.Q_)r.onError(t);s.queries.delete(e)}function hl(n){n.W_.forEach(e=>{e.next()})}var No,Yc;(Yc=No||(No={})).j_="default",Yc.Cache="cache";class sw{constructor(e,t,s){this.query=e,this.H_=t,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=s||{}}z_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new dn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),t=!0):this.X_(e,this.onlineState)&&(this.ea(e),t=!0),this.Y_=e,t}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let t=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),t=!0),t}X_(e,t){if(!e.fromCache||!this.U_())return!0;const s=t!=="Offline";return(!this.options.ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const t=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ea(e){e=dn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==No.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e){this.key=e}}class Af{constructor(e){this.key=e}}class iw{constructor(e,t){this.query=e,this.ua=t,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=x(),this.mutatedKeys=x(),this.ha=Jd(e),this.Pa=new Xt(this.ha)}get Ia(){return this.ua}Ta(e,t){const s=t?t.Ea:new Qc,i=t?t.Pa:this.Pa;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,u)=>{const d=i.get(h),f=or(this.query,u)?u:null,m=!!d&&this.mutatedKeys.has(d.key),T=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?m!==T&&(s.track({type:3,doc:f}),w=!0):this.da(d,f)||(s.track({type:2,doc:f}),w=!0,(l&&this.ha(f,l)>0||c&&this.ha(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),w=!0):d&&!f&&(s.track({type:1,doc:d}),w=!0,(l||c)&&(a=!0)),w&&(f?(o=o.add(f),r=T?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Pa:o,Ea:s,Xi:a,mutatedKeys:r}}da(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((h,u)=>function(f,m){const T=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return T(f)-T(m)}(h.type,u.type)||this.ha(h.doc,u.doc)),this.Aa(s),i=i!=null&&i;const a=t&&!i?this.Ra():[],l=this.la.size===0&&this.current&&!i?1:0,c=l!==this.ca;return this.ca=l,o.length!==0||c?{snapshot:new dn(this.query,e.Pa,r,o,e.mutatedKeys,l===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Qc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(t=>this.ua=this.ua.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.ua=this.ua.delete(t)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=x(),this.Pa.forEach(s=>{this.ma(s.key)&&(this.la=this.la.add(s.key))});const t=[];return e.forEach(s=>{this.la.has(s)||t.push(new Af(s))}),this.la.forEach(s=>{e.has(s)||t.push(new Cf(s))}),t}fa(e){this.ua=e.hs,this.la=x();const t=this.Ta(e.documents);return this.applyChanges(t,!0)}ga(){return dn.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class rw{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class ow{constructor(e){this.key=e,this.pa=!1}}class aw{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new wn(a=>Xd(a),rr),this.Sa=new Map,this.ba=new Set,this.Da=new H(I.comparator),this.Ca=new Map,this.va=new nl,this.Fa={},this.Ma=new Map,this.xa=un.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function lw(n,e,t=!0){const s=Nf(n);let i;const r=s.wa.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.ga()):i=await Sf(s,e,t,!0),i}async function cw(n,e){const t=Nf(n);await Sf(t,e,!0,!1)}async function Sf(n,e,t,s){const i=await OT(n.localStore,Fe(e)),r=i.targetId,o=t?n.sharedClientState.addLocalQueryTarget(r):"not-current";let a;return s&&(a=await hw(n,e,r,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Ef(n.remoteStore,i),a}async function hw(n,e,t,s,i){n.Na=(u,d,f)=>async function(T,w,G,he){let we=w.view.Ta(G);we.Xi&&(we=await $c(T.localStore,w.query,!1).then(({documents:Os})=>w.view.Ta(Os,we)));const Re=he&&he.targetChanges.get(w.targetId),Vs=he&&he.targetMismatches.get(w.targetId)!=null,Ft=w.view.applyChanges(we,T.isPrimaryClient,Re,Vs);return Jc(T,w.targetId,Ft.Va),Ft.snapshot}(n,u,d,f);const r=await $c(n.localStore,e,!0),o=new iw(e,r.hs),a=o.Ta(r.documents),l=Ns.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,l);Jc(n,t,c.Va);const h=new rw(e,t,o);return n.wa.set(e,h),n.Sa.has(t)?n.Sa.get(t).push(e):n.Sa.set(t,[e]),c.snapshot}async function uw(n,e,t){const s=V(n),i=s.wa.get(e),r=s.Sa.get(i.targetId);if(r.length>1)return s.Sa.set(i.targetId,r.filter(o=>!rr(o,e))),void s.wa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await bo(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),t&&rl(s.remoteStore,i.targetId),Do(s,i.targetId)}).catch(Wa)):(Do(s,i.targetId),await bo(s.localStore,i.targetId,!0))}async function dw(n,e){const t=V(n),s=t.wa.get(e),i=t.Sa.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),rl(t.remoteStore,s.targetId))}async function Rf(n,e){const t=V(n);try{const s=await xT(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.Ca.get(r);o&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?Y(o.pa):i.removedDocuments.size>0&&(Y(o.pa),o.pa=!1))}),await bf(t,s,e)}catch(s){await Wa(s)}}function Xc(n,e,t){const s=V(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.wa.forEach((r,o)=>{const a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=V(o);l.onlineState=a;let c=!1;l.queries.forEach((h,u)=>{for(const d of u.Q_)d.G_(a)&&(c=!0)}),c&&hl(l)}(s.eventManager,e),i.length&&s.ya.u_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function fw(n,e,t){const s=V(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Ca.get(e),r=i&&i.key;if(r){let o=new H(I.comparator);o=o.insert(r,fe.newNoDocument(r,S.min()));const a=x().add(r),l=new cr(S.min(),new Map,new H(M),o,a);await Rf(s,l),s.Da=s.Da.remove(r),s.Ca.delete(e),ul(s)}else await bo(s.localStore,e,!1).then(()=>Do(s,e,t)).catch(Wa)}function Do(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Sa.get(e))n.wa.delete(s),t&&n.ya.La(s,t);n.Sa.delete(e),n.isPrimaryClient&&n.va.Vr(e).forEach(s=>{n.va.containsKey(s)||Pf(n,s)})}function Pf(n,e){n.ba.delete(e.path.canonicalString());const t=n.Da.get(e);t!==null&&(rl(n.remoteStore,t),n.Da=n.Da.remove(e),n.Ca.delete(t),ul(n))}function Jc(n,e,t){for(const s of t)s instanceof Cf?(n.va.addReference(s.key,e),pw(n,s)):s instanceof Af?(v("SyncEngine","Document no longer in limbo: "+s.key),n.va.removeReference(s.key,e),n.va.containsKey(s.key)||Pf(n,s.key)):R()}function pw(n,e){const t=e.key,s=t.path.canonicalString();n.Da.get(t)||n.ba.has(s)||(v("SyncEngine","New document in limbo: "+t),n.ba.add(s),ul(n))}function ul(n){for(;n.ba.size>0&&n.Da.size<n.maxConcurrentLimboResolutions;){const e=n.ba.values().next().value;n.ba.delete(e);const t=new I(j.fromString(e)),s=n.xa.next();n.Ca.set(s,new ow(t)),n.Da=n.Da.insert(t,s),Ef(n.remoteStore,new et(Fe(Ja(t.path)),s,"TargetPurposeLimboResolution",Ga._e))}}async function bf(n,e,t){const s=V(n),i=[],r=[],o=[];s.wa.isEmpty()||(s.wa.forEach((a,l)=>{o.push(s.Na(l,e,t).then(c=>{if((c||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=il.Ki(l.targetId,c);r.push(h)}}))}),await Promise.all(o),s.ya.u_(i),await async function(l,c){const h=V(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>p.forEach(c,d=>p.forEach(d.qi,f=>h.persistence.referenceDelegate.addReference(u,d.targetId,f)).next(()=>p.forEach(d.Qi,f=>h.persistence.referenceDelegate.removeReference(u,d.targetId,f)))))}catch(u){if(!bs(u))throw u;v("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const d=u.targetId;if(!u.fromCache){const f=h.ns.get(d),m=f.snapshotVersion,T=f.withLastLimboFreeSnapshotVersion(m);h.ns=h.ns.insert(d,T)}}}(s.localStore,r))}async function _w(n,e){const t=V(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const s=await gf(t.localStore,e);t.currentUser=e,function(r,o){r.Ma.forEach(a=>{a.forEach(l=>{l.reject(new E(g.CANCELLED,o))})}),r.Ma.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await bf(t,s.us)}}function gw(n,e){const t=V(n),s=t.Ca.get(e);if(s&&s.pa)return x().add(s.key);{let i=x();const r=t.Sa.get(e);if(!r)return i;for(const o of r){const a=t.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function Nf(n){const e=V(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fw.bind(null,e),e.ya.u_=tw.bind(null,e.eventManager),e.ya.La=nw.bind(null,e.eventManager),e}class Zc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=yf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return kT(this.persistence,new NT,e.initialUser,this.serializer)}createPersistence(e){return new RT(sl.Hr,this.serializer)}createSharedClientState(e){return new LT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mw{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=_w.bind(null,this.syncEngine),await YT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JT}()}createDatastore(e){const t=yf(e.databaseInfo.databaseId),s=function(r){return new qT(r)}(e.databaseInfo);return function(r,o,a,l){return new $T(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,i,r,o,a){return new GT(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Xc(this.syncEngine,t,0),function(){return Gc.D()?new Gc:new FT}())}createSyncEngine(e,t){return function(i,r,o,a,l,c,h){const u=new aw(i,r,o,a,l,c);return h&&(u.Oa=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(s){const i=V(s);v("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Ds(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):Be("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=de.UNAUTHENTICATED,this.clientId=Wd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(v("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=If(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Mr(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await gf(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function eh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Tw(n);v("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Kc(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Kc(e.remoteStore,i)),n._onlineComponents=e}function Ew(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Tw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){v("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Ew(t))throw t;an("Error using user provided cache. Falling back to memory cache: "+t),await Mr(n,new Zc)}}else v("FirestoreClient","Using default OfflineComponentProvider"),await Mr(n,new Zc);return n._offlineComponents}async function ww(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(v("FirestoreClient","Using user provided OnlineComponentProvider"),await eh(n,n._uninitializedComponentsProvider._online)):(v("FirestoreClient","Using default OnlineComponentProvider"),await eh(n,new mw))),n._onlineComponents}async function Iw(n){const e=await ww(n),t=e.eventManager;return t.onListen=lw.bind(null,e.syncEngine),t.onUnlisten=uw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=cw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=dw.bind(null,e.syncEngine),t}function Cw(n,e,t={}){const s=new rt;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const h=new yw({next:d=>{o.enqueueAndForget(()=>ew(r,u));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new E(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new E(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),u=new sw(Ja(a.path),h,{includeMetadataChanges:!0,ta:!0});return ZT(r,u)}(await Iw(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(n,e,t){if(!t)throw new E(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Aw(n,e,t,s){if(e===!0&&s===!0)throw new E(g.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function nh(n){if(!I.isDocumentKey(n))throw new E(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sh(n){if(I.isDocumentKey(n))throw new E(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Sw(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":R()}function ko(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new E(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Sw(n);throw new E(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new E(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new E(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Aw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Df((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new E(g.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new E(g.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new E(g.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ur{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ih({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new E(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ih(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Jv;switch(s.type){case"firstParty":return new nE(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new E(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=th.get(t);s&&(v("ComponentProvider","Removing Datastore"),th.delete(t),s.terminate())}(this),Promise.resolve()}}function Rw(n,e,t,s={}){var i;const r=(n=ko(n,ur))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&an("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=de.MOCK_USER;else{a=dh(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new E(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new de(c)}n._authCredentials=new Zv(new jd(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new dl(this.firestore,e,this._query)}}class Ue{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ot(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}}class ot extends dl{constructor(e,t,s){super(e,t,Ja(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new I(e))}withConverter(e){return new ot(this.firestore,e,this._path)}}function Pw(n,e,...t){if(n=Ye(n),kf("collection","path",e),n instanceof ur){const s=j.fromString(e,...t);return sh(s),new ot(n,null,s)}{if(!(n instanceof Ue||n instanceof ot))throw new E(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(j.fromString(e,...t));return sh(s),new ot(n.firestore,null,s)}}function bw(n,e,...t){if(n=Ye(n),arguments.length===1&&(e=Wd.newId()),kf("doc","path",e),n instanceof ur){const s=j.fromString(e,...t);return nh(s),new Ue(n,null,new I(s))}{if(!(n instanceof Ue||n instanceof ot))throw new E(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(j.fromString(e,...t));return nh(s),new Ue(n.firestore,n instanceof ot?n.converter:null,new I(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new vf(this,"async_queue_retry"),this.cu=()=>{const t=Or();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.jo.Ko()};const e=Or();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const t=Or();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const t=new rt;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!bs(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const t=this.nu.then(()=>(this._u=!0,e().catch(s=>{this.ou=s,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Be("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this._u=!1,s))));return this.nu=t,t}enqueueAfterDelay(e,t,s){this.lu(),this.uu.indexOf(e)>-1&&(t=0);const i=cl.createAndSchedule(this,e,t,s,r=>this.Iu(r));return this.su.push(i),i}lu(){this.ou&&R()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const t of this.su)if(t.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.su)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const t=this.su.indexOf(e);this.su.splice(t,1)}}class xf extends ur{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=function(){return new Nw}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vf(this),this._firestoreClient.terminate()}}function Dw(n,e){const t=typeof n=="object"?n:Ih(),s=typeof n=="string"?n:"(default)",i=Eh(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=hh("firestore");r&&Rw(i,...r)}return i}function kw(n){return n._firestoreClient||Vf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Vf(n){var e,t,s;const i=n._freezeSettings(),r=function(a,l,c,h){return new gE(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Df(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new vw(n._authCredentials,n._appCheckCredentials,n._queue,r),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wi(ge.fromBase64String(e))}catch(t){throw new E(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wi(ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new E(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return M(this._lat,e._lat)||M(this._long,e._long)}}const Vw=new RegExp("[~\\*/\\[\\]]");function Ow(n,e,t){if(e.search(Vw)>=0)throw rh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Of(...e.split("."))._internalPath}catch{throw rh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function rh(n,e,t,s,i){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new E(g.INVALID_ARGUMENT,r+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Mw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Lf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Mw extends Mf{data(){return super.data()}}function Lf(n,e){return typeof e=="string"?Ow(n,e):e instanceof Of?e._internalPath:e._delegate._internalPath}class Lw{convertValue(e,t="none"){switch(xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Q(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(kt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw R()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return sr(e,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new xw(Q(e.latitude),Q(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ka(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ds(e));default:return null}}convertTimestamp(e){const t=dt(e);return new Ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=j.fromString(e);Y(_f(s));const i=new fs(s.get(1),s.get(3)),r=new I(s.popFirst(5));return i.isEqual(t)||Be(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ff extends Mf{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Uw(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Lf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Uw extends Ff{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(n){n=ko(n,Ue);const e=ko(n.firestore,xf);return Cw(kw(e),n._key).then(t=>jw(e,n,t))}class qw extends Lw{constructor(e){super(),this.firestore=e}convertBytes(e){return new wi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,t)}}function jw(n,e,t){const s=t.docs.get(e._key),i=new qw(n);return new Ff(n,i,e._key,s,new Fw(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Tn=i})(Th),Kn(new en("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new xf(new eE(s.getProvider("auth-internal")),new iE(s.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new E(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fs(c.options.projectId,h)}(o,i),o);return r=Object.assign({useFetchStreams:t},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),st(Ic,"4.6.0",e),st(Ic,"4.6.0","esm2017")})();const Uf=Dw(Ea),Ww=Ii([]),_s=Ii(null),$w=Pw(Uf,"users");async function zw(n){if(n===null){_s.set(null);return}const e={email:n.email||"Unknown",uid:n.uid};_s.set(e);const t=ws(xs,"messages/");va(t,s=>{const i=s.val();fl.set(Object.entries(i).map(([r,o])=>({uid:r,...o})).reverse())})}const xs=Uu(Ea);async function Gw(n){var s,i;let e=(s=_l(_s))==null?void 0:s.uid,t=(i=_l(_s))==null?void 0:i.email;e!==null&&vy(ws(xs,"messages/"),{content:n,date:Ee.now(),userName:t,userid:e})}const fl=Ii([]),Bf=Ii([]);async function Hw(n){const e=bw($w,n);return(await Bw(e)).data()}async function Kw(){const n=await Fu(ws(xs,"messages"),Ny("isMark"),Vy(!0));va(n,e=>{const t=e.val();Bf.set(Object.entries(t).map(([s,i])=>({uid:s,...i})).reverse())},{onlyOnce:!0})}async function Qw(n,e){console.log(n,e);const t=await Fu(ws(xs,"messages"),ky(),Ay(n),Py(e));va(t,s=>{const i=s.val(),r=Object.entries(i).map(([o,a])=>({uid:o,...a})).reverse();fl.update(o=>[...r,...o])},{onlyOnce:!0})}async function Yw(n){return Ty(ws(xs),{["messages/"+n.uid]:n})}const uI=Object.freeze(Object.defineProperty({__proto__:null,currentFirestoreUser:_s,firestore:Uf,getMarkedMessages:Kw,getMessagesByLastKey:Qw,getUserData:Hw,markedMessageState:Bf,messages:Ww,messagesState:fl,sendMessage:Gw,updateMessage:Yw,userChanges:zw},Symbol.toStringTag,{value:"Module"}));export{en as C,gh as E,pn as F,Vo as L,Th as S,Kn as _,Jf as a,Ye as b,Eh as c,Yf as d,Ih as e,tI as f,eI as g,oI as h,fh as i,rI as j,Fr as k,k as l,Jt as m,Lr as n,nI as o,iI as p,sI as q,st as r,op as s,ml as t,zw as u,Ea as v,_s as w,Yw as x,Kw as y,uI as z};
