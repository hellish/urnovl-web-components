import{$ as R,e as W,l as X,a as Y,_ as s,t as g,m as G,F as J,d as Q,H as Z,j as x,K as E,k as ee,n,r as b,f,M as te}from"./index-CtULszVu.js";import{D as ie,h as z,i as se,k as h}from"./entry-preview-BcHUnPw7.js";import{F as oe,f as B,t as c}from"./form-CYSikw0H.js";import{F as D}from"./live-DYTPoJZU.js";import{n as $}from"./uniqueId-DvEvAHcu.js";import{d as re}from"./default-value-D_2XsDCq.js";import{w}from"./watch-ByvFYHv8.js";import{o as ae}from"./observeResize-otS7uxSF.js";import{n as C}from"./template-yncBVCyc.js";import{s as I,a as A}from"./svg-tag-CIxfFmRK.js";import"./index-DJNny1By.js";const ne=(a,e)=>{const t=`--mdui-motion-easing-${e}`;return R(a).css(t).trim()},le=(a,e)=>{const t=`--mdui-motion-duration-${e}`,i=R(a).css(t).trim().toLowerCase();return i.endsWith("ms")?parseFloat(i):parseFloat(i)*1e3};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=a=>typeof a!="string"&&"strTag"in a,ce=(a,e,t)=>{let i=a[0];for(let r=1;r<a.length;r++)i+=e[r-1],i+=a[r];return i};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=a=>de(a)?ce(a.strings,a.values):a;let pe=ue;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fe{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let a=0;a<256;a++)(a>>4&15).toString(16)+(a&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let me=new fe;me.resolve();const ve=new WeakMap;let H=0;const V=new Map,L=new WeakSet,j=()=>new Promise(a=>requestAnimationFrame(a)),K=(a,e)=>{const t=a-e;return t===0?void 0:t},_=(a,e)=>{const t=a/e;return t===1?void 0:t},F={left:(a,e)=>{const t=K(a,e);return{value:t,transform:t==null||isNaN(t)?void 0:`translateX(${t}px)`}},top:(a,e)=>{const t=K(a,e);return{value:t,transform:t==null||isNaN(t)?void 0:`translateY(${t}px)`}},width:(a,e)=>{let t;e===0&&(e=1,t={width:"1px"});const i=_(a,e);return{value:i,overrideFrom:t,transform:i==null||isNaN(i)?void 0:`scaleX(${i})`}},height:(a,e)=>{let t;e===0&&(e=1,t={height:"1px"});const i=_(a,e);return{value:i,overrideFrom:t,transform:i==null||isNaN(i)?void 0:`scaleY(${i})`}}},ye={duration:333,easing:"ease-in-out"},ge=["left","top","width","height","opacity","color","background"],U=new WeakMap;class be extends X{constructor(e){if(super(e),this.t=!1,this.i=null,this.o=null,this.h=!0,this.shouldLog=!1,e.type===Y.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){var e;(e=this.resolveFinished)==null||e.call(this),this.finished=new Promise(t=>{this.l=t})}async resolveFinished(){var e;(e=this.l)==null||e.call(this),this.l=void 0}render(e){return ie}getController(){return ve.get(this.u)}isDisabled(){var e;return this.options.disabled||((e=this.getController())==null?void 0:e.disabled)}update(e,[t]){var r;const i=this.u===void 0;return i&&(this.u=(r=e.options)==null?void 0:r.host,this.u.addController(this),this.u.updateComplete.then(l=>this.t=!0),this.element=e.element,U.set(this.element,this)),this.optionsOrCallback=t,(i||typeof t!="function")&&this.p(t),this.render(t)}p(e){e=e??{};const t=this.getController();t!==void 0&&((e={...t.defaultOptions,...e}).keyframeOptions={...t.defaultOptions.keyframeOptions,...e.keyframeOptions}),e.properties??(e.properties=ge),this.options=e}m(){const e={},t=this.element.getBoundingClientRect(),i=getComputedStyle(this.element);return this.options.properties.forEach(r=>{const l=t[r]??(F[r]?void 0:i[r]),d=Number(l);e[r]=isNaN(d)?l+"":d}),e}v(){let e,t=!0;return this.options.guard&&(e=this.options.guard(),t=((i,r)=>{if(Array.isArray(i)){if(Array.isArray(r)&&r.length===i.length&&i.every((l,d)=>l===r[d]))return!1}else if(r===i)return!1;return!0})(e,this._)),this.h=this.t&&!this.isDisabled()&&!this.isAnimating()&&t&&this.element.isConnected,this.h&&(this._=Array.isArray(e)?Array.from(e):e),this.h}hostUpdate(){typeof this.optionsOrCallback=="function"&&this.p(this.optionsOrCallback()),this.v()&&(this.A=this.m(),this.i=this.i??this.element.parentNode,this.o=this.element.nextSibling)}async hostUpdated(){if(!this.h||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let e;this.prepare(),await j;const t=this.O(),i=this.j(this.options.keyframeOptions,t),r=this.m();if(this.A!==void 0){const{from:l,to:d}=this.N(this.A,r,t);this.log("measured",[this.A,r,l,d]),e=this.calculateKeyframes(l,d)}else{const l=V.get(this.options.inId);if(l){V.delete(this.options.inId);const{from:d,to:u}=this.N(l,r,t);e=this.calculateKeyframes(d,u),e=this.options.in?[{...this.options.in[0],...e[0]},...this.options.in.slice(1),e[1]]:e,H++,e.forEach(p=>p.zIndex=H)}else this.options.in&&(e=[...this.options.in,{}])}this.animate(e,i)}resetStyles(){this.P!==void 0&&(this.element.setAttribute("style",this.P??""),this.P=void 0)}commitStyles(){var e,t;this.P=this.element.getAttribute("style"),(e=this.webAnimation)==null||e.commitStyles(),(t=this.webAnimation)==null||t.cancel()}reconnected(){}async disconnected(){var t;if(!this.h||(this.options.id!==void 0&&V.set(this.options.id,this.A),this.options.out===void 0))return;if(this.prepare(),await j(),(t=this.i)==null?void 0:t.isConnected){const i=this.o&&this.o.parentNode===this.i?this.o:null;if(this.i.insertBefore(this.element,i),this.options.stabilizeOut){const r=this.m();this.log("stabilizing out");const l=this.A.left-r.left,d=this.A.top-r.top;getComputedStyle(this.element).position!=="static"||l===0&&d===0||(this.element.style.position="relative"),l!==0&&(this.element.style.left=l+"px"),d!==0&&(this.element.style.top=d+"px")}}const e=this.j(this.options.keyframeOptions);await this.animate(this.options.out,e),this.element.remove()}prepare(){this.createFinished()}start(){var e,t;(t=(e=this.options).onStart)==null||t.call(e,this)}didFinish(e){var t,i;e&&((i=(t=this.options).onComplete)==null||i.call(t,this)),this.A=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}O(){const e=[];for(let t=this.element.parentNode;t;t=t==null?void 0:t.parentNode){const i=U.get(t);i&&!i.isDisabled()&&i&&e.push(i)}return e}get isHostRendered(){const e=L.has(this.u);return e||this.u.updateComplete.then(()=>{L.add(this.u)}),e}j(e,t=this.O()){const i={...ye};return t.forEach(r=>Object.assign(i,r.options.keyframeOptions)),Object.assign(i,e),i}N(e,t,i){e={...e},t={...t};const r=i.map(u=>u.animatingProperties).filter(u=>u!==void 0);let l=1,d=1;return r.length>0&&(r.forEach(u=>{u.width&&(l/=u.width),u.height&&(d/=u.height)}),e.left!==void 0&&t.left!==void 0&&(e.left=l*e.left,t.left=l*t.left),e.top!==void 0&&t.top!==void 0&&(e.top=d*e.top,t.top=d*t.top)),{from:e,to:t}}calculateKeyframes(e,t,i=!1){const r={},l={};let d=!1;const u={};for(const p in t){const m=e[p],v=t[p];if(p in F){const S=F[p];if(m===void 0||v===void 0)continue;const y=S(m,v);y.transform!==void 0&&(u[p]=y.value,d=!0,r.transform=`${r.transform??""} ${y.transform}`,y.overrideFrom!==void 0&&Object.assign(r,y.overrideFrom))}else m!==v&&m!==void 0&&v!==void 0&&(d=!0,r[p]=m,l[p]=v)}return r.transformOrigin=l.transformOrigin=i?"center center":"top left",this.animatingProperties=u,d?[r,l]:void 0}async animate(e,t=this.options.keyframeOptions){this.start(),this.frames=e;let i=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=e=this.options.onFrames(this),this.log("modified frames",e)),e!==void 0)){this.log("animate",[e,t]),i=!0,this.webAnimation=this.element.animate(e,t);const r=this.getController();r==null||r.add(this);try{await this.webAnimation.finished}catch{}r==null||r.remove(this)}return this.didFinish(i),i}isAnimating(){var e,t;return((e=this.webAnimation)==null?void 0:e.playState)==="running"||((t=this.webAnimation)==null?void 0:t.pending)}log(e,t){this.shouldLog&&!this.isDisabled()&&console.log(e,this.options.id,t)}}const we=W(be);let N=class extends z{render(){return A('<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"/>')}};N.styles=I;N=s([g("mdui-icon-cancel--outlined")],N);let T=class extends z{render(){return A('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>')}};T.styles=I;T=s([g("mdui-icon-error")],T);let O=class extends z{render(){return A('<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>')}};O.styles=I;O=s([g("mdui-icon-visibility-off")],O);let M=class extends z{render(){return A('<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>')}};M.styles=I;M=s([g("mdui-icon-visibility")],M);let q=!1;const k=new Map,xe=(a,e)=>{q||(q=!0,G().addEventListener(he,r=>{r.detail.status==="ready"&&k.forEach(l=>{l.forEach(d=>d())})}));const t=k.get(a)||[];t.push(e),k.set(a,t)},P=a=>{k.delete(a)},$e=se`:host{display:inline-block;width:100%}:host([disabled]){pointer-events:none}:host([type=hidden]){display:none}.container{position:relative;display:flex;align-items:center;height:100%;transition:box-shadow var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard);padding:0 1rem}.container.has-icon{padding-left:.75rem}.container.has-end-icon,.container.has-error-icon{padding-right:.75rem}:host([variant=filled]) .container{box-shadow:inset 0 -.0625rem 0 0 rgb(var(--mdui-color-on-surface-variant));background-color:rgb(var(--mdui-color-surface-container-highest));border-radius:var(--mdui-shape-corner-extra-small) var(--mdui-shape-corner-extra-small) 0 0}:host([variant=filled]) .container.invalid,:host([variant=filled]) .container.invalid-style{box-shadow:inset 0 -.0625rem 0 0 rgb(var(--mdui-color-error))}:host([variant=filled]:hover) .container{box-shadow:inset 0 -.0625rem 0 0 rgb(var(--mdui-color-on-surface))}:host([variant=filled]:hover) .container.invalid,:host([variant=filled]:hover) .container.invalid-style{box-shadow:inset 0 -.0625rem 0 0 rgb(var(--mdui-color-on-error-container))}:host([variant=filled][focused-style]) .container,:host([variant=filled][focused]) .container{box-shadow:inset 0 -.125rem 0 0 rgb(var(--mdui-color-primary))}:host([variant=filled][focused-style]) .container.invalid,:host([variant=filled][focused-style]) .container.invalid-style,:host([variant=filled][focused]) .container.invalid,:host([variant=filled][focused]) .container.invalid-style{box-shadow:inset 0 -.125rem 0 0 rgb(var(--mdui-color-error))}:host([variant=filled][disabled]) .container{box-shadow:inset 0 -.0625rem 0 0 rgba(var(--mdui-color-on-surface),38%);background-color:rgba(var(--mdui-color-on-surface),4%)}:host([variant=outlined]) .container{box-shadow:inset 0 0 0 .0625rem rgb(var(--mdui-color-outline));border-radius:var(--mdui-shape-corner-extra-small)}:host([variant=outlined]) .container.invalid,:host([variant=outlined]) .container.invalid-style{box-shadow:inset 0 0 0 .0625rem rgb(var(--mdui-color-error))}:host([variant=outlined]:hover) .container{box-shadow:inset 0 0 0 .0625rem rgb(var(--mdui-color-on-surface))}:host([variant=outlined]:hover) .container.invalid,:host([variant=outlined]:hover) .container.invalid-style{box-shadow:inset 0 0 0 .0625rem rgb(var(--mdui-color-on-error-container))}:host([variant=outlined][focused-style]) .container,:host([variant=outlined][focused]) .container{box-shadow:inset 0 0 0 .125rem rgb(var(--mdui-color-primary))}:host([variant=outlined][focused-style]) .container.invalid,:host([variant=outlined][focused-style]) .container.invalid-style,:host([variant=outlined][focused]) .container.invalid,:host([variant=outlined][focused]) .container.invalid-style{box-shadow:inset 0 0 0 .125rem rgb(var(--mdui-color-error))}:host([variant=outlined][disabled]) .container{box-shadow:inset 0 0 0 .125rem rgba(var(--mdui-color-on-surface),12%)}.icon,.prefix,.right-icon,.suffix{display:flex;-webkit-user-select:none;user-select:none;color:rgb(var(--mdui-color-on-surface-variant))}:host([disabled]) .icon,:host([disabled]) .prefix,:host([disabled]) .right-icon,:host([disabled]) .suffix{color:rgba(var(--mdui-color-on-surface),38%)}.invalid .right-icon,.invalid .suffix,.invalid-style .right-icon,.invalid-style .suffix{color:rgb(var(--mdui-color-error))}:host(:hover) .invalid .right-icon,:host(:hover) .invalid .suffix,:host(:hover) .invalid-style .right-icon,:host(:hover) .invalid-style .suffix{color:rgb(var(--mdui-color-on-error-container))}:host([focused-style]) .invalid .right-icon,:host([focused-style]) .invalid .suffix,:host([focused-style]) .invalid-style .right-icon,:host([focused-style]) .invalid-style .suffix,:host([focused]) .invalid .right-icon,:host([focused]) .invalid .suffix,:host([focused]) .invalid-style .right-icon,:host([focused]) .invalid-style .suffix{color:rgb(var(--mdui-color-error))}.icon,.right-icon{font-size:1.5rem}.icon mdui-button-icon,.right-icon mdui-button-icon,::slotted(mdui-button-icon[slot]){margin-left:-.5rem;margin-right:-.5rem}.icon .i,.right-icon .i,::slotted([slot$=icon]){font-size:inherit}.has-icon .icon{margin-right:1rem}.has-end-icon .end-icon,.right-icon:not(.end-icon){margin-left:1rem}.prefix,.suffix{display:none;font-size:var(--mdui-typescale-body-large-size);font-weight:var(--mdui-typescale-body-large-weight);letter-spacing:var(--mdui-typescale-body-large-tracking);line-height:var(--mdui-typescale-body-large-line-height)}:host([variant=filled][label]) .prefix,:host([variant=filled][label]) .suffix{padding-top:1rem}.has-value .prefix,.has-value .suffix,:host([focused-style]) .prefix,:host([focused-style]) .suffix,:host([focused]) .prefix,:host([focused]) .suffix{display:flex}.has-prefix .prefix{padding-right:.125rem}.has-suffix .suffix{padding-left:.125rem}.input-container{width:100%;height:100%}.label{position:absolute;pointer-events:none;max-width:calc(100% - 1rem);display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:1;top:1rem;color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-body-large-size);font-weight:var(--mdui-typescale-body-large-weight);letter-spacing:var(--mdui-typescale-body-large-tracking);line-height:var(--mdui-typescale-body-large-line-height)}.invalid .label,.invalid-style .label{color:rgb(var(--mdui-color-error))}:host([variant=outlined]) .label{padding:0 .25rem;margin:0 -.25rem}:host([variant=outlined]:hover) .label{color:rgb(var(--mdui-color-on-surface))}:host([variant=filled]:hover) .invalid .label,:host([variant=filled]:hover) .invalid-style .label,:host([variant=outlined]:hover) .invalid .label,:host([variant=outlined]:hover) .invalid-style .label{color:rgb(var(--mdui-color-on-error-container))}:host([variant=filled][focused-style]) .label,:host([variant=filled][focused]) .label,:host([variant=outlined][focused-style]) .label,:host([variant=outlined][focused]) .label{color:rgb(var(--mdui-color-primary))}:host([variant=filled]) .has-value .label,:host([variant=filled][focused-style]) .label,:host([variant=filled][focused]) .label,:host([variant=filled][type=date]) .label,:host([variant=filled][type=datetime-local]) .label,:host([variant=filled][type=month]) .label,:host([variant=filled][type=time]) .label,:host([variant=filled][type=week]) .label{font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height);top:.25rem}:host([variant=outlined]) .has-value .label,:host([variant=outlined][focused-style]) .label,:host([variant=outlined][focused]) .label,:host([variant=outlined][type=date]) .label,:host([variant=outlined][type=datetime-local]) .label,:host([variant=outlined][type=month]) .label,:host([variant=outlined][type=time]) .label,:host([variant=outlined][type=week]) .label{font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height);top:-.5rem;left:.75rem;background-color:rgb(var(--mdui-color-background))}:host([variant=filled][focused-style]) .invalid .label,:host([variant=filled][focused-style]) .invalid-style .label,:host([variant=filled][focused]) .invalid .label,:host([variant=filled][focused]) .invalid-style .label,:host([variant=outlined][focused-style]) .invalid .label,:host([variant=outlined][focused-style]) .invalid-style .label,:host([variant=outlined][focused]) .invalid .label,:host([variant=outlined][focused]) .invalid-style .label{color:rgb(var(--mdui-color-error))}:host([variant=filled][disabled]) .label,:host([variant=outlined][disabled]) .label{color:rgba(var(--mdui-color-on-surface),38%)}.input{display:flex;flex-wrap:wrap;width:100%;height:100%;min-height:100%;border:none;outline:0;background:0 0;appearance:none;resize:none;cursor:inherit;font-family:inherit;padding:1rem 0;font-size:var(--mdui-typescale-body-large-size);font-weight:var(--mdui-typescale-body-large-weight);letter-spacing:var(--mdui-typescale-body-large-tracking);line-height:var(--mdui-typescale-body-large-line-height);color:rgb(var(--mdui-color-on-surface));caret-color:rgb(var(--mdui-color-primary))}.input.hide-input{opacity:0;height:0;min-height:0;padding:0!important;overflow:hidden}.input::placeholder{color:rgb(var(--mdui-color-on-surface-variant))}.invalid .input,.invalid-style .input{caret-color:rgb(var(--mdui-color-error))}:host([disabled]) .input{color:rgba(var(--mdui-color-on-surface),38%)}:host([end-aligned]) .input{text-align:right}:host([variant=filled]) .label+.input{padding:1.5rem 0 .5rem 0}.supporting{display:flex;justify-content:space-between;padding:.25rem 1rem;color:rgb(var(--mdui-color-on-surface-variant))}.supporting.invalid,.supporting.invalid-style{color:rgb(var(--mdui-color-error))}.helper{display:block;opacity:1;transition:opacity var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear);font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height)}:host([disabled]) .helper{color:rgba(var(--mdui-color-on-surface),38%)}:host([helper-on-focus]) .helper{opacity:0}:host([helper-on-focus][focused-style]) .helper,:host([helper-on-focus][focused]) .helper{opacity:1}.error{font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height)}.counter{flex-wrap:nowrap;padding-left:1rem;font-size:var(--mdui-typescale-body-small-size);font-weight:var(--mdui-typescale-body-small-weight);letter-spacing:var(--mdui-typescale-body-small-tracking);line-height:var(--mdui-typescale-body-small-line-height)}::-ms-reveal{display:none}.is-firefox .input[type=date],.is-firefox .input[type=datetime-local],.is-firefox .input[type=time]{clip-path:inset(0 2em 0 0)}.input[type=number]::-webkit-inner-spin-button,.input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;display:none}.input[type=number]{-moz-appearance:textfield}.input[type=search]::-webkit-search-cancel-button{-webkit-appearance:none}`;let o=class extends J(te){constructor(){super(...arguments),this.variant="filled",this.type="text",this.name="",this.value="",this.defaultValue="",this.helperOnFocus=!1,this.clearable=!1,this.endAligned=!1,this.readonly=!1,this.disabled=!1,this.required=!1,this.autosize=!1,this.counter=!1,this.togglePassword=!1,this.spellcheck=!1,this.invalid=!1,this.invalidStyle=!1,this.focusedStyle=!1,this.isPasswordVisible=!1,this.hasValue=!1,this.error="",this.inputRef=Q(),this.formController=new oe(this),this.hasSlotController=new Z(this,"icon","end-icon","helper","input"),this.readonlyButClearable=!1}get validity(){return this.inputRef.value.validity}get validationMessage(){return this.inputRef.value.validationMessage}get valueAsNumber(){var e;return((e=this.inputRef.value)==null?void 0:e.valueAsNumber)??parseFloat(this.value)}set valueAsNumber(e){const t=document.createElement("input");t.type="number",t.valueAsNumber=e,this.value=t.value}get focusElement(){return this.inputRef.value}get focusDisabled(){return this.disabled}get isFocusedStyle(){return this.focused||this.focusedStyle}get isTextarea(){return this.rows&&this.rows>1||this.autosize}onDisabledChange(){this.inputRef.value.disabled=this.disabled,this.invalid=!this.inputRef.value.checkValidity()}async onValueChange(){var e;if(this.hasValue=!["",null].includes(this.value),this.hasUpdated){await this.updateComplete;const t=this.formController.getForm();t&&((e=B.get(t))!=null&&e.has(this))?(this.invalid=!1,B.get(t).delete(this)):this.invalid=!this.inputRef.value.checkValidity()}}onRowsChange(){this.setTextareaHeight()}async onMaxRowsChange(){if(!this.autosize)return;this.hasUpdated||await this.updateComplete;const e=R(this.inputRef.value);e.css("max-height",parseFloat(e.css("line-height"))*(this.maxRows??1)+parseFloat(e.css("padding-top"))+parseFloat(e.css("padding-bottom")))}async onMinRowsChange(){if(!this.autosize)return;this.hasUpdated||await this.updateComplete;const e=R(this.inputRef.value);e.css("min-height",parseFloat(e.css("line-height"))*(this.minRows??1)+parseFloat(e.css("padding-top"))+parseFloat(e.css("padding-bottom")))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.observeResize)==null||e.unobserve(),P(this)}select(){this.inputRef.value.select()}setSelectionRange(e,t,i="none"){this.inputRef.value.setSelectionRange(e,t,i)}setRangeText(e,t,i,r="preserve"){this.inputRef.value.setRangeText(e,t,i,r),this.value!==this.inputRef.value.value&&(this.value=this.inputRef.value.value,this.setTextareaHeight(),this.emit("input"),this.emit("change"))}checkValidity(){const e=this.inputRef.value.checkValidity();return e||this.emit("invalid",{bubbles:!1,cancelable:!0,composed:!1}),e}reportValidity(){return this.invalid=!this.inputRef.value.reportValidity(),this.invalid&&(this.emit("invalid",{bubbles:!1,cancelable:!0,composed:!1}),this.focus()),!this.invalid}setCustomValidity(e){this.setCustomValidityInternal(e),P(this)}firstUpdated(e){super.firstUpdated(e),this.setTextareaHeight(),this.observeResize=ae(this.inputRef.value,()=>this.setTextareaHeight())}render(){const e=!!this.icon||this.hasSlotController.test("icon"),t=!!this.endIcon||this.hasSlotController.test("end-icon"),i=this.invalid||this.invalidStyle,r=!!this.prefix||this.hasSlotController.test("prefix"),l=!!this.suffix||this.hasSlotController.test("suffix"),d=!!this.helper||this.hasSlotController.test("helper"),u=i&&!!(this.error||this.inputRef.value.validationMessage),p=this.counter&&!!this.maxlength,m=this.hasSlotController.test("input"),v={invalid:this.invalid,"invalid-style":this.invalidStyle},S=x({container:!0,"has-value":this.hasValue,"has-icon":e,"has-end-icon":t,"has-error-icon":i,"has-prefix":r,"has-suffix":l,"is-firefox":navigator.userAgent.includes("Firefox"),...v});return h`<div part="container" class="${S}">${this.renderPrefix()}<div class="input-container">${this.renderLabel()} ${this.isTextarea?this.renderTextArea(m):this.renderInput(m)} ${$(m,()=>h`<slot name="input" class="input"></slot>`)}</div>${this.renderClearButton()}${this.renderTogglePasswordButton()} ${this.renderSuffix(i)}</div>${$(u||d||p,()=>h`<div part="supporting" class="${x({supporting:!0,...v})}">${this.renderHelper(u,d)} ${this.renderCounter(p)}</div>`)}`}setCustomValidityInternal(e){this.inputRef.value.setCustomValidity(e),this.invalid=!this.inputRef.value.checkValidity(),this.requestUpdate()}onChange(){this.value=this.inputRef.value.value,this.isTextarea&&this.setTextareaHeight(),this.emit("change")}onClear(e){this.value="",this.emit("clear"),this.emit("input"),this.emit("change"),this.focus(),e.stopPropagation()}onInput(){this.value=this.inputRef.value.value,this.isTextarea&&this.setTextareaHeight(),this.emit("input")}onInvalid(e){e.preventDefault()}onKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{e.defaultPrevented||this.formController.submit()})}onTextAreaKeyUp(){if(this.pattern){const e=new RegExp(this.pattern);this.value&&!this.value.match(e)?(this.setCustomValidityInternal(this.getPatternErrorMsg()),xe(this,()=>{this.setCustomValidityInternal(this.getPatternErrorMsg())})):(this.setCustomValidityInternal(""),P(this))}}onTogglePassword(){this.isPasswordVisible=!this.isPasswordVisible}getPatternErrorMsg(){return pe("Please match the requested format.")}setTextareaHeight(){this.autosize?(this.inputRef.value.style.height="auto",this.inputRef.value.style.height=`${this.inputRef.value.scrollHeight}px`):this.inputRef.value.style.height=void 0}renderLabel(){return this.label?h`<label part="label" class="label" ${we({keyframeOptions:{duration:le(this,"short4"),easing:ne(this,"standard")}})}>${this.label}</label>`:C}renderPrefix(){return h`<slot name="icon" part="icon" class="icon">${this.icon?h`<mdui-icon name="${this.icon}" class="i"></mdui-icon>`:C}</slot><slot name="prefix" part="prefix" class="prefix">${this.prefix}</slot>`}renderSuffix(e){return h`<slot name="suffix" part="suffix" class="suffix">${this.suffix}</slot>${e?h`<slot name="error-icon" part="error-icon" class="right-icon">${this.errorIcon?h`<mdui-icon name="${this.errorIcon}" class="i"></mdui-icon>`:h`<mdui-icon-error class="i"></mdui-icon-error>`}</slot>`:h`<slot name="end-icon" part="end-icon" class="end-icon right-icon">${this.endIcon?h`<mdui-icon name="${this.endIcon}" class="i"></mdui-icon>`:C}</slot>`}`}renderClearButton(){const e=this.clearable&&!this.disabled&&(!this.readonly||this.readonlyButClearable)&&(typeof this.value=="number"||this.value.length>0);return $(e,()=>h`<slot name="clear-button" part="clear-button" class="right-icon" @click="${this.onClear}"><mdui-button-icon tabindex="-1"><slot name="clear-icon" part="clear-icon">${this.clearIcon?h`<mdui-icon name="${this.clearIcon}" class="i"></mdui-icon>`:h`<mdui-icon-cancel--outlined class="i"></mdui-icon-cancel--outlined>`}</slot></mdui-button-icon></slot>`)}renderTogglePasswordButton(){const e=this.type==="password"&&this.togglePassword&&!this.disabled;return $(e,()=>h`<slot name="toggle-password-button" part="toggle-password-button" class="right-icon" @click="${this.onTogglePassword}"><mdui-button-icon tabindex="-1">${this.isPasswordVisible?h`<slot name="show-password-icon" part="show-password-icon">${this.showPasswordIcon?h`<mdui-icon name="${this.showPasswordIcon}" class="i"></mdui-icon>`:h`<mdui-icon-visibility-off class="i"></mdui-icon-visibility-off>`}</slot>`:h`<slot name="hide-password-icon" part="hide-password-icon">${this.hidePasswordIcon?h`<mdui-icon name="${this.hidePasswordIcon}" class="i"></mdui-icon>`:h`<mdui-icon-visibility class="i"></mdui-icon-visibility>`}</slot>`}</mdui-button-icon></slot>`)}renderInput(e){return h`<input ${E(this.inputRef)} part="input" class="input ${x({"hide-input":e})}" type="${this.type==="password"&&this.isPasswordVisible?"text":this.type}" name="${c(this.name)}" .value="${D(this.value)}" placeholder="${c(!this.label||this.isFocusedStyle||this.hasValue?this.placeholder:void 0)}" ?readonly="${this.readonly}" ?disabled="${this.disabled}" ?required="${this.required}" minlength="${c(this.minlength)}" maxlength="${c(this.maxlength)}" min="${c(this.min)}" max="${c(this.max)}" step="${c(this.step)}" autocapitalize="${c(this.type==="password"?"off":this.autocapitalize)}" autocomplete="${c(this.type==="password"?"off":this.autocomplete)}" autocorrect="${c(this.type==="password"?"off":this.autocorrect)}" spellcheck="${c(this.spellcheck)}" pattern="${c(this.pattern)}" enterkeyhint="${c(this.enterkeyhint)}" inputmode="${c(this.inputmode)}" @change="${this.onChange}" @input="${this.onInput}" @invalid="${this.onInvalid}" @keydown="${this.onKeyDown}">`}renderTextArea(e){return h`<textarea ${E(this.inputRef)} part="input" class="input ${x({"hide-input":e})}" name="${c(this.name)}" .value="${D(this.value)}" placeholder="${c(!this.label||this.isFocusedStyle||this.hasValue?this.placeholder:void 0)}" ?readonly="${this.readonly}" ?disabled="${this.disabled}" ?required="${this.required}" minlength="${c(this.minlength)}" maxlength="${c(this.maxlength)}" rows="${this.rows??1}" autocapitalize="${c(this.autocapitalize)}" autocorrect="${c(this.autocorrect)}" spellcheck="${c(this.spellcheck)}" enterkeyhint="${c(this.enterkeyhint)}" inputmode="${c(this.inputmode)}" @change="${this.onChange}" @input="${this.onInput}" @invalid="${this.onInvalid}" @keydown="${this.onKeyDown}" @keyup="${this.onTextAreaKeyUp}"></textarea>`}renderHelper(e,t){return e?h`<div part="error" class="error">${this.error||this.inputRef.value.validationMessage}</div>`:t?h`<slot name="helper" part="helper" class="helper">${this.helper}</slot>`:h`<span></span>`}renderCounter(e){return e?h`<div part="counter" class="counter">${this.value.length}/${this.maxlength}</div>`:C}};o.styles=[ee,$e];s([n({reflect:!0})],o.prototype,"variant",void 0);s([n({reflect:!0})],o.prototype,"type",void 0);s([n({reflect:!0})],o.prototype,"name",void 0);s([n()],o.prototype,"value",void 0);s([re()],o.prototype,"defaultValue",void 0);s([n({reflect:!0})],o.prototype,"label",void 0);s([n({reflect:!0})],o.prototype,"placeholder",void 0);s([n({reflect:!0})],o.prototype,"helper",void 0);s([n({type:Boolean,reflect:!0,converter:f,attribute:"helper-on-focus"})],o.prototype,"helperOnFocus",void 0);s([n({type:Boolean,reflect:!0,converter:f})],o.prototype,"clearable",void 0);s([n({reflect:!0,attribute:"clear-icon"})],o.prototype,"clearIcon",void 0);s([n({type:Boolean,reflect:!0,converter:f,attribute:"end-aligned"})],o.prototype,"endAligned",void 0);s([n({reflect:!0})],o.prototype,"prefix",void 0);s([n({reflect:!0})],o.prototype,"suffix",void 0);s([n({reflect:!0})],o.prototype,"icon",void 0);s([n({reflect:!0,attribute:"end-icon"})],o.prototype,"endIcon",void 0);s([n({reflect:!0,attribute:"error-icon"})],o.prototype,"errorIcon",void 0);s([n({reflect:!0})],o.prototype,"form",void 0);s([n({type:Boolean,reflect:!0,converter:f})],o.prototype,"readonly",void 0);s([n({type:Boolean,reflect:!0,converter:f})],o.prototype,"disabled",void 0);s([n({type:Boolean,reflect:!0,converter:f})],o.prototype,"required",void 0);s([n({type:Number,reflect:!0})],o.prototype,"rows",void 0);s([n({type:Boolean,reflect:!0,converter:f})],o.prototype,"autosize",void 0);s([n({type:Number,reflect:!0,attribute:"min-rows"})],o.prototype,"minRows",void 0);s([n({type:Number,reflect:!0,attribute:"max-rows"})],o.prototype,"maxRows",void 0);s([n({type:Number,reflect:!0})],o.prototype,"minlength",void 0);s([n({type:Number,reflect:!0})],o.prototype,"maxlength",void 0);s([n({type:Boolean,reflect:!0,converter:f})],o.prototype,"counter",void 0);s([n({type:Number,reflect:!0})],o.prototype,"min",void 0);s([n({type:Number,reflect:!0})],o.prototype,"max",void 0);s([n({type:Number,reflect:!0})],o.prototype,"step",void 0);s([n({reflect:!0})],o.prototype,"pattern",void 0);s([n({type:Boolean,reflect:!0,converter:f,attribute:"toggle-password"})],o.prototype,"togglePassword",void 0);s([n({reflect:!0,attribute:"show-password-icon"})],o.prototype,"showPasswordIcon",void 0);s([n({reflect:!0,attribute:"hide-password-icon"})],o.prototype,"hidePasswordIcon",void 0);s([n({reflect:!0})],o.prototype,"autocapitalize",void 0);s([n({reflect:!0})],o.prototype,"autocorrect",void 0);s([n({reflect:!0})],o.prototype,"autocomplete",void 0);s([n({reflect:!0})],o.prototype,"enterkeyhint",void 0);s([n({type:Boolean,reflect:!0,converter:f})],o.prototype,"spellcheck",void 0);s([n({reflect:!0})],o.prototype,"inputmode",void 0);s([b()],o.prototype,"invalid",void 0);s([b()],o.prototype,"invalidStyle",void 0);s([n({type:Boolean,reflect:!0,converter:f,attribute:"focused-style"})],o.prototype,"focusedStyle",void 0);s([b()],o.prototype,"isPasswordVisible",void 0);s([b()],o.prototype,"hasValue",void 0);s([b()],o.prototype,"error",void 0);s([w("disabled",!0)],o.prototype,"onDisabledChange",null);s([w("value")],o.prototype,"onValueChange",null);s([w("rows",!0)],o.prototype,"onRowsChange",null);s([w("maxRows")],o.prototype,"onMaxRowsChange",null);s([w("minRows")],o.prototype,"onMinRowsChange",null);o=s([g("mdui-text-field")],o);export{le as a,ne as g};