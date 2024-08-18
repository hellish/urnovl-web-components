import{k as g}from"./lit-element-CsPioU85.js";import{d as k,H as h,h as r,a as x,N as m}from"./ur-novl-CgEBzAyK.js";import{s as y,g as t}from"./chunk-GKNNPQCW-BkHQSocK.js";const N=":host{display:block;box-sizing:border-box}",C=class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.novls=[],this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0"}render(){return r(x,{key:"ac4cd079072f078f9a622229910b9ffcfd53227e"},r("swiper-container",{key:"3176021d7026f838018323105fbf163e4817ff3e",grid:this.grid,"breakpoint-base":"container",breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.novls.map(e=>r("swiper-slide",null,r("ur-novl",Object.assign({},e))))))}static get style(){return N}};k(C,[1,"ur-novl-carousel",{novls:[8],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"]}]);const i={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlCarousel",tagName:"ur-novl-carousel",customElement:!0,members:[{kind:"field",name:"novls",type:"any",description:"",default:"[]"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"}],events:[]}],exports:[{kind:"js",name:"UrNovlCarousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-novl-carousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}}]}]};y({...t()||{},...i,modules:[...(t()||{}).modules||[],...i.modules]});const V=({novls:e,breakpoints:s,grid:w,slidesPerView:f,spaceBetween:v,width:b="100%"})=>g`
  <div style="width: ${b}; box-sizing:border-box; background: #efefef;margin: 0;padding: 20px;">
    <ur-novl-carousel
        .novls="${e}"
        .breakpoints="${s}"
        .grid="${w}"
        slides-per-view="${f}"
        space-between="${v}"></ur-novl-carousel>
  </div>
`,E={title:"Urnovl/NovlCarousel",render:e=>V(e)},n={args:{novls:m,breakpoints:{},grid:{},slidesPerView:1,spaceBetween:10,width:"700px"}},o={args:{novls:m.map((e,s)=>s===1||s===6?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:10,width:"700px"}};var a,l,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    novls: NOVLS,
    breakpoints: {},
    grid: {},
    slidesPerView: 1,
    spaceBetween: 10,
    width: '700px' // container width
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    novls: NOVLS.map((novl, index) => {
      if (index === 1 || index === 6) {
        return {
          ...novl,
          borderRadius: '0'
        };
      }
      return {
        ...novl
      };
    }),
    breakpoints: {},
    grid: {
      rows: 2,
      fill: 'row'
    },
    slidesPerView: 3,
    spaceBetween: 10,
    width: '700px' // container width
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const S=["Default","TwoRowsGrid"];export{n as Default,o as TwoRowsGrid,S as __namedExportsOrder,E as default};
