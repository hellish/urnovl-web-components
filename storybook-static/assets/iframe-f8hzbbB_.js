const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Avatar.stories-D-Uk59de.js","./entry-preview-BcHUnPw7.js","./index-DrFu-skq.js","./ur-button-arrow-right-Du86Nlc6.js","./chunk-L4EGOTBX-2Jzo53v8.js","./index-K5CyEtrH.js","./index-CQ55_KlS.js","./watch-ByvFYHv8.js","./Buttons.stories-D-tt1ELV.js","./Loader.stories-CPhcRzMB.js","./Novl.stories-CA_Dglca.js","./ur-novl-kINwjm23.js","./NovlCarousel.stories-hco0pp-b.js","./NovlFilters.stories-DZxut7qt.js","./index-DzXXPJpj.js","./Profile.stories-CtRh81DC.js","./entry-preview-docs-DXwgTEb9.js","./index-7z4G-Two.js","./tiny-invariant-BxWVcicq.js","./preview-BhhEZcNS.js","./index-D-8MO0q_.js","./preview-D77C14du.js","./preview-D9Wl1eX-.js","./preview-BWzBA1C2.js","./preview-D0N1Y6iQ.js","./v4-CQkTLCs1.js","./preview-eH-S6pG8.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const _ of o.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&a(_)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const f="modulepreload",R=function(r,i){return new URL(r,i).href},p={},e=function(i,c,a){let t=Promise.resolve();if(c&&c.length>0){const o=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),O=(_==null?void 0:_.nonce)||(_==null?void 0:_.getAttribute("nonce"));t=Promise.all(c.map(s=>{if(s=R(s,a),s in p)return;p[s]=!0;const l=s.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(!!a)for(let u=o.length-1;u>=0;u--){const m=o[u];if(m.href===s&&(!l||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${d}`))return;const n=document.createElement("link");if(n.rel=l?"stylesheet":f,l||(n.as="script",n.crossOrigin=""),n.href=s,O&&n.setAttribute("nonce",O),document.head.appendChild(n),l)return new Promise((u,m)=>{n.addEventListener("load",u),n.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}return t.then(()=>i()).catch(o=>{const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=o,window.dispatchEvent(_),!_.defaultPrevented)throw o})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,E=L({page:"preview"});T.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const P={"./src/stories/Avatar.stories.tsx":async()=>e(()=>import("./Avatar.stories-D-Uk59de.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),"./src/stories/Buttons.stories.tsx":async()=>e(()=>import("./Buttons.stories-D-tt1ELV.js"),__vite__mapDeps([8,1,2,3,4,5,6,7]),import.meta.url),"./src/stories/Loader.stories.tsx":async()=>e(()=>import("./Loader.stories-CPhcRzMB.js"),__vite__mapDeps([9,1,2,3,4,5,6,7]),import.meta.url),"./src/stories/Novl.stories.tsx":async()=>e(()=>import("./Novl.stories-CA_Dglca.js"),__vite__mapDeps([10,1,2,11,4,5]),import.meta.url),"./src/stories/NovlCarousel.stories.tsx":async()=>e(()=>import("./NovlCarousel.stories-hco0pp-b.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,11]),import.meta.url),"./src/stories/NovlFilters.stories.tsx":async()=>e(()=>import("./NovlFilters.stories-DZxut7qt.js"),__vite__mapDeps([13,1,2,4,5,14,6,7]),import.meta.url),"./src/stories/Profile.stories.tsx":async()=>e(()=>import("./Profile.stories-CtRh81DC.js"),__vite__mapDeps([15,1,2,4,5,14,6]),import.meta.url)};async function y(r){return P[r]()}const{composeConfigs:I,PreviewWeb:v,ClientApi:A}=__STORYBOOK_MODULE_PREVIEW_API__,V=async(r=[])=>{const i=await Promise.all([r.at(0)??e(()=>import("./entry-preview-BcHUnPw7.js").then(c=>c.e),__vite__mapDeps([1,2]),import.meta.url),r.at(1)??e(()=>import("./entry-preview-docs-DXwgTEb9.js"),__vite__mapDeps([16,4,1,2,17,18]),import.meta.url),r.at(2)??e(()=>import("./preview-BhhEZcNS.js"),__vite__mapDeps([19,20]),import.meta.url),r.at(3)??e(()=>import("./preview-xUJSXMC_.js"),[],import.meta.url),r.at(4)??e(()=>import("./preview-D77C14du.js"),__vite__mapDeps([21,2]),import.meta.url),r.at(5)??e(()=>import("./preview-DFmD0pui.js"),[],import.meta.url),r.at(6)??e(()=>import("./preview-D9Wl1eX-.js"),__vite__mapDeps([22,18]),import.meta.url),r.at(7)??e(()=>import("./preview-BWzBA1C2.js"),__vite__mapDeps([23,2]),import.meta.url),r.at(8)??e(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url),r.at(9)??e(()=>import("./preview-D0N1Y6iQ.js"),__vite__mapDeps([24,25]),import.meta.url),r.at(10)??e(()=>import("./preview-eH-S6pG8.js"),__vite__mapDeps([26,25]),import.meta.url)]);return I(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new v(y,V);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{e as _};