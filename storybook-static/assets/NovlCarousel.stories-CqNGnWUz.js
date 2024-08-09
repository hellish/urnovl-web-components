import{k as c}from"./lit-element-CsPioU85.js";import{d as i,H as d,h as s,a as m,N as v}from"./ur-novl-BYzHQyZz.js";import{s as p,g as r}from"./chunk-GKNNPQCW-BkHQSocK.js";const b=":host{display:block;box-sizing:border-box}",f=class extends d{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.novls=[]}render(){return s(m,{key:"bdf04826955fb9063dc7821ca4386e7e32b61d59"},s("swiper-container",{key:"c17b839c2bb24cc9e9209874cd1da258023b9361"},this.novls.map(e=>s("swiper-slide",null,s("ur-novl",Object.assign({},e))))))}static get style(){return b}};i(f,[1,"ur-novl-carousel",{novls:[8]}]);const t={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlCarousel",tagName:"ur-novl-carousel",customElement:!0,members:[{kind:"field",name:"novls",type:"any",description:"",default:"[]"}],events:[]}],exports:[{kind:"js",name:"UrNovlCarousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-novl-carousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}}]}]};p({...r()||{},...t,modules:[...(r()||{}).modules||[],...t.modules]});const h=({novls:e,width:u="100%"})=>c`
  <div style="width: ${u}; box-sizing:border-box;">
    <ur-novl-carousel .novls="${e}"></ur-novl-carousel>
  </div>
`,g={title:"Urnovl/NovlCarousel",render:e=>h(e)},o={args:{novls:v,width:"700px"}};var n,l,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    novls: NOVLS,
    width: '700px'
  }
}`,...(a=(l=o.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const k=["Default"];export{o as Default,k as __namedExportsOrder,g as default};
