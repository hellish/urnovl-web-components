const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-CFRXHY34-THmkIqBh.js","./iframe-CKCeLZ_M.js","./index-BiL3ubqk.js","./index-D-8MO0q_.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-CKCeLZ_M.js";import"../sb-preview/runtime.js";var i=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-THmkIqBh.js").then(r=>r.am),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>i[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};