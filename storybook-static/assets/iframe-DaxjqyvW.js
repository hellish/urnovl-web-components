const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Avatar.stories-Cm_pIInU.js","./entry-preview-BcHUnPw7.js","./index-DrFu-skq.js","./ur-button-arrow-right-CPZpCILd.js","./chunk-L4EGOTBX-2Jzo53v8.js","./index-CXMOPRVH.js","./index-DJNny1By.js","./index-CtULszVu.js","./watch-ByvFYHv8.js","./template-yncBVCyc.js","./button-base-DCiXq4ub.js","./form-CYSikw0H.js","./publisher-DIqiyQS-.js","./Buttons.stories-BfH2SGZz.js","./ur-button-BhcBEFnR.js","./index-DgJ_IeSW.js","./ButtonsIcon.stories-nQXSIack.js","./Checkboxes.stories-jpna6kMw.js","./index-S3KKWdI2.js","./live-DYTPoJZU.js","./default-value-D_2XsDCq.js","./svg-tag-CIxfFmRK.js","./Chips.stories-Cwn9vl4M.js","./index-hdWRirZg.js","./check-DQx3WUEt.js","./Loader.stories-CSN4WZ00.js","./Novl.stories-DXCCVVhe.js","./ur-novl-C5fL0daY.js","./NovlCarousel.stories-CzgrUn0a.js","./NovlFilters.stories-Cx9avppK.js","./Page.stories-COP1ISZD.js","./PageProfile.stories-BVFeyrlA.js","./Profile.stories-BsCC9bbY.js","./RadioButtons.stories-CPBJoDX3.js","./Segments.stories-CvhgveZA.js","./array-BxBpEZy1.js","./uniqueId-DvEvAHcu.js","./Select.stories-rvSQ_e7w.js","./index-kDtAQZs3.js","./observeResize-otS7uxSF.js","./query-assigned-elements-BInJlOXT.js","./Switch.stories-DdY2e4-Z.js","./Tabs.stories-DfPY9Q3X.js","./TextFields.stories-v8B6w3vo.js","./User.stories-DeVs4By0.js","./entry-preview-docs-wiFG_OCn.js","./index-7z4G-Two.js","./tiny-invariant-CopsF_GD.js","./preview-BhhEZcNS.js","./index-D-8MO0q_.js","./preview-D77C14du.js","./preview-DEMzn_yN.js","./preview-BWzBA1C2.js","./preview-D0N1Y6iQ.js","./v4-CQkTLCs1.js","./preview-eH-S6pG8.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const f="modulepreload",T=function(e,_){return new URL(e,_).href},d={},t=function(_,a,m){let r=Promise.resolve();if(a&&a.length>0){const i=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),O=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(a.map(n=>{if(n=T(n,m),n in d)return;d[n]=!0;const u=n.endsWith(".css"),R=u?'[rel="stylesheet"]':"";if(!!m)for(let l=i.length-1;l>=0;l--){const E=i[l];if(E.href===n&&(!u||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${R}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":f,u||(c.as="script"),c.crossOrigin="",c.href=n,O&&c.setAttribute("nonce",O),document.head.appendChild(c),u)return new Promise((l,E)=>{c.addEventListener("load",l),c.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${n}`)))})}))}function o(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return r.then(i=>{for(const s of i||[])s.status==="rejected"&&o(s.reason);return _().catch(o)})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,p=L({page:"preview"});P.setChannel(p);window.__STORYBOOK_ADDONS_CHANNEL__=p;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=p);const y={"./src/stories/Avatar.stories.tsx":async()=>t(()=>import("./Avatar.stories-Cm_pIInU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url),"./src/stories/Buttons.stories.tsx":async()=>t(()=>import("./Buttons.stories-BfH2SGZz.js"),__vite__mapDeps([13,1,2,14,4,5,15,7,9,10,11,3,6,8]),import.meta.url),"./src/stories/ButtonsIcon.stories.tsx":async()=>t(()=>import("./ButtonsIcon.stories-nQXSIack.js"),__vite__mapDeps([16,1,2,4,5,6,7,8,9,10,11]),import.meta.url),"./src/stories/Checkboxes.stories.tsx":async()=>t(()=>import("./Checkboxes.stories-jpna6kMw.js"),__vite__mapDeps([17,1,2,4,5,18,7,11,19,20,8,21]),import.meta.url),"./src/stories/Chips.stories.tsx":async()=>t(()=>import("./Chips.stories-Cwn9vl4M.js"),__vite__mapDeps([22,1,2,4,5,23,7,10,11,9,8,24,21]),import.meta.url),"./src/stories/Loader.stories.tsx":async()=>t(()=>import("./Loader.stories-CSN4WZ00.js"),__vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),"./src/stories/Novl.stories.tsx":async()=>t(()=>import("./Novl.stories-DXCCVVhe.js"),__vite__mapDeps([26,1,2,27,4,5]),import.meta.url),"./src/stories/NovlCarousel.stories.tsx":async()=>t(()=>import("./NovlCarousel.stories-CzgrUn0a.js"),__vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11,27]),import.meta.url),"./src/stories/NovlFilters.stories.tsx":async()=>t(()=>import("./NovlFilters.stories-Cx9avppK.js"),__vite__mapDeps([29,1,2,4,5,15,7,9,10,11,18,19,20,8,21]),import.meta.url),"./src/stories/Page.stories.tsx":async()=>t(()=>import("./Page.stories-COP1ISZD.js"),__vite__mapDeps([30,1,2,14,4,5,15,7,9,10,11]),import.meta.url),"./src/stories/PageProfile.stories.tsx":async()=>t(()=>import("./PageProfile.stories-BVFeyrlA.js"),__vite__mapDeps([31,1,2,12,4,5,14,15,7,9,10,11]),import.meta.url),"./src/stories/Profile.stories.tsx":async()=>t(()=>import("./Profile.stories-BsCC9bbY.js"),__vite__mapDeps([32,1,2,4,5,15,7,9,10,11]),import.meta.url),"./src/stories/RadioButtons.stories.tsx":async()=>t(()=>import("./RadioButtons.stories-CPBJoDX3.js"),__vite__mapDeps([33,1,2,4,5,7,8,21]),import.meta.url),"./src/stories/Segments.stories.tsx":async()=>t(()=>import("./Segments.stories-CvhgveZA.js"),__vite__mapDeps([34,1,2,4,5,7,11,35,36,20,8,10,9,24,21]),import.meta.url),"./src/stories/Select.stories.tsx":async()=>t(()=>import("./Select.stories-rvSQ_e7w.js"),__vite__mapDeps([37,1,2,4,5,7,36,10,11,9,8,38,19,20,39,21,6,24,40,35,23]),import.meta.url),"./src/stories/Switch.stories.tsx":async()=>t(()=>import("./Switch.stories-DdY2e4-Z.js"),__vite__mapDeps([41,1,2,4,5,7,11,19,20,8,9,24,21]),import.meta.url),"./src/stories/Tabs.stories.tsx":async()=>t(()=>import("./Tabs.stories-DfPY9Q3X.js"),__vite__mapDeps([42,1,2,4,5,7,40,8,39,36,9]),import.meta.url),"./src/stories/TextFields.stories.tsx":async()=>t(()=>import("./TextFields.stories-v8B6w3vo.js"),__vite__mapDeps([43,1,2,4,5,38,7,11,19,36,20,8,39,9,21,6,10]),import.meta.url),"./src/stories/User.stories.tsx":async()=>t(()=>import("./User.stories-DeVs4By0.js"),__vite__mapDeps([44,1,2,14,4,5,15,7,9,10,11]),import.meta.url)};async function I(e){return y[e]()}const{composeConfigs:v,PreviewWeb:V,ClientApi:x}=__STORYBOOK_MODULE_PREVIEW_API__,D=async(e=[])=>{const _=await Promise.all([e.at(0)??t(()=>import("./entry-preview-BcHUnPw7.js").then(a=>a.e),__vite__mapDeps([1,2]),import.meta.url),e.at(1)??t(()=>import("./entry-preview-docs-wiFG_OCn.js"),__vite__mapDeps([45,4,1,2,46,47]),import.meta.url),e.at(2)??t(()=>import("./preview-BhhEZcNS.js"),__vite__mapDeps([48,49]),import.meta.url),e.at(3)??t(()=>import("./preview-CTlCw1YO.js"),[],import.meta.url),e.at(4)??t(()=>import("./preview-D77C14du.js"),__vite__mapDeps([50,2]),import.meta.url),e.at(5)??t(()=>import("./preview-DFmD0pui.js"),[],import.meta.url),e.at(6)??t(()=>import("./preview-DEMzn_yN.js"),__vite__mapDeps([51,47]),import.meta.url),e.at(7)??t(()=>import("./preview-BWzBA1C2.js"),__vite__mapDeps([52,2]),import.meta.url),e.at(8)??t(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url),e.at(9)??t(()=>import("./preview-D0N1Y6iQ.js"),__vite__mapDeps([53,54]),import.meta.url),e.at(10)??t(()=>import("./preview-eH-S6pG8.js"),__vite__mapDeps([55,54]),import.meta.url)]);return v(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new V(I,D);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};