const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Avatar.stories-BLnNjdUY.js","./entry-preview-BcHUnPw7.js","./index-DrFu-skq.js","./ur-button-arrow-right-ixpGG1bE.js","./chunk-L4EGOTBX-2Jzo53v8.js","./index-DrtGFqrN.js","./index-Co_fSMZb.js","./index-BmT10YZK.js","./watch-ByvFYHv8.js","./template-yncBVCyc.js","./button-base-BJTZz6Hf.js","./form-kvNGPYeq.js","./publisher-ep4YdkGF.js","./Buttons.stories-CmFnzlNt.js","./ur-button-Bgq-IGaL.js","./index-CxM1Gbjs.js","./ButtonsIcon.stories-YaRxHuKt.js","./Checkboxes.stories-D33LLPB_.js","./index-VwdZWnVW.js","./live-CnXioO2s.js","./default-value-BL-PCohm.js","./svg-tag-I98LNdtY.js","./Chips.stories-DYr_gQCz.js","./check-DQc-giTO.js","./Loader.stories-Cs9m24DL.js","./Novl.stories-VhKtxqE8.js","./ur-novl-RNToX8UI.js","./NovlCarousel.stories-CiVDU6uu.js","./NovlFilters.stories-DlzF1R0N.js","./PageProfile.stories-DC1crS1l.js","./Profile.stories-BSb5Qvmr.js","./RadioButtons.stories-Bf_1OCSY.js","./Segments.stories-BHuf09zz.js","./uniqueId-DvEvAHcu.js","./Switch.stories-DmeUmXOO.js","./Tabs.stories-E2rj99sV.js","./observeResize-BKy39zJP.js","./TextFields.stories-6-wsglNn.js","./entry-preview-docs-wiFG_OCn.js","./index-7z4G-Two.js","./tiny-invariant-CopsF_GD.js","./preview-BhhEZcNS.js","./index-D-8MO0q_.js","./preview-D77C14du.js","./preview-DEMzn_yN.js","./preview-BWzBA1C2.js","./preview-D0N1Y6iQ.js","./v4-CQkTLCs1.js","./preview-eH-S6pG8.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const f="modulepreload",T=function(e,_){return new URL(e,_).href},d={},t=function(_,a,m){let r=Promise.resolve();if(a&&a.length>0){const i=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),O=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(a.map(n=>{if(n=T(n,m),n in d)return;d[n]=!0;const u=n.endsWith(".css"),R=u?'[rel="stylesheet"]':"";if(!!m)for(let l=i.length-1;l>=0;l--){const E=i[l];if(E.href===n&&(!u||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${R}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":f,u||(c.as="script"),c.crossOrigin="",c.href=n,O&&c.setAttribute("nonce",O),document.head.appendChild(c),u)return new Promise((l,E)=>{c.addEventListener("load",l),c.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${n}`)))})}))}function o(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return r.then(i=>{for(const s of i||[])s.status==="rejected"&&o(s.reason);return _().catch(o)})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,p=L({page:"preview"});P.setChannel(p);window.__STORYBOOK_ADDONS_CHANNEL__=p;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=p);const y={"./src/stories/Avatar.stories.tsx":async()=>t(()=>import("./Avatar.stories-BLnNjdUY.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url),"./src/stories/Buttons.stories.tsx":async()=>t(()=>import("./Buttons.stories-CmFnzlNt.js"),__vite__mapDeps([13,1,2,14,4,5,15,7,9,10,11,3,6,8]),import.meta.url),"./src/stories/ButtonsIcon.stories.tsx":async()=>t(()=>import("./ButtonsIcon.stories-YaRxHuKt.js"),__vite__mapDeps([16,1,2,4,5,6,7,8,9,10,11]),import.meta.url),"./src/stories/Checkboxes.stories.tsx":async()=>t(()=>import("./Checkboxes.stories-D33LLPB_.js"),__vite__mapDeps([17,1,2,4,5,18,7,11,19,20,8,21]),import.meta.url),"./src/stories/Chips.stories.tsx":async()=>t(()=>import("./Chips.stories-DYr_gQCz.js"),__vite__mapDeps([22,1,2,4,5,7,10,11,9,8,23,21]),import.meta.url),"./src/stories/Loader.stories.tsx":async()=>t(()=>import("./Loader.stories-Cs9m24DL.js"),__vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),"./src/stories/Novl.stories.tsx":async()=>t(()=>import("./Novl.stories-VhKtxqE8.js"),__vite__mapDeps([25,1,2,26,4,5]),import.meta.url),"./src/stories/NovlCarousel.stories.tsx":async()=>t(()=>import("./NovlCarousel.stories-CiVDU6uu.js"),__vite__mapDeps([27,1,2,3,4,5,6,7,8,9,10,11,26]),import.meta.url),"./src/stories/NovlFilters.stories.tsx":async()=>t(()=>import("./NovlFilters.stories-DlzF1R0N.js"),__vite__mapDeps([28,1,2,4,5,15,7,9,10,11,18,19,20,8,21]),import.meta.url),"./src/stories/PageProfile.stories.tsx":async()=>t(()=>import("./PageProfile.stories-DC1crS1l.js"),__vite__mapDeps([29,1,2,12,4,5,14,15,7,9,10,11]),import.meta.url),"./src/stories/Profile.stories.tsx":async()=>t(()=>import("./Profile.stories-BSb5Qvmr.js"),__vite__mapDeps([30,1,2,4,5,15,7,9,10,11]),import.meta.url),"./src/stories/RadioButtons.stories.tsx":async()=>t(()=>import("./RadioButtons.stories-Bf_1OCSY.js"),__vite__mapDeps([31,1,2,4,5,7,8,21]),import.meta.url),"./src/stories/Segments.stories.tsx":async()=>t(()=>import("./Segments.stories-BHuf09zz.js"),__vite__mapDeps([32,1,2,4,5,7,11,33,20,8,10,9,23,21]),import.meta.url),"./src/stories/Switch.stories.tsx":async()=>t(()=>import("./Switch.stories-DmeUmXOO.js"),__vite__mapDeps([34,1,2,4,5,7,11,19,20,8,9,23,21]),import.meta.url),"./src/stories/Tabs.stories.tsx":async()=>t(()=>import("./Tabs.stories-E2rj99sV.js"),__vite__mapDeps([35,1,2,4,5,7,8,36,33,9]),import.meta.url),"./src/stories/TextFields.stories.tsx":async()=>t(()=>import("./TextFields.stories-6-wsglNn.js"),__vite__mapDeps([37,1,2,4,5,7,11,19,33,20,8,36,9,21,6,10]),import.meta.url)};async function I(e){return y[e]()}const{composeConfigs:v,PreviewWeb:V,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,D=async(e=[])=>{const _=await Promise.all([e.at(0)??t(()=>import("./entry-preview-BcHUnPw7.js").then(a=>a.e),__vite__mapDeps([1,2]),import.meta.url),e.at(1)??t(()=>import("./entry-preview-docs-wiFG_OCn.js"),__vite__mapDeps([38,4,1,2,39,40]),import.meta.url),e.at(2)??t(()=>import("./preview-BhhEZcNS.js"),__vite__mapDeps([41,42]),import.meta.url),e.at(3)??t(()=>import("./preview-DxXEZddr.js"),[],import.meta.url),e.at(4)??t(()=>import("./preview-D77C14du.js"),__vite__mapDeps([43,2]),import.meta.url),e.at(5)??t(()=>import("./preview-DFmD0pui.js"),[],import.meta.url),e.at(6)??t(()=>import("./preview-DEMzn_yN.js"),__vite__mapDeps([44,40]),import.meta.url),e.at(7)??t(()=>import("./preview-BWzBA1C2.js"),__vite__mapDeps([45,2]),import.meta.url),e.at(8)??t(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url),e.at(9)??t(()=>import("./preview-D0N1Y6iQ.js"),__vite__mapDeps([46,47]),import.meta.url),e.at(10)??t(()=>import("./preview-eH-S6pG8.js"),__vite__mapDeps([48,47]),import.meta.url)]);return v(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new V(I,D);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};