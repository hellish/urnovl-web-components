import{k as g}from"./lit-element-CsPioU85.js";import{d as k,H as h,h as s,a as x,N as p}from"./ur-novl-N11V5Ap6.js";import{s as y,g as o}from"./chunk-GKNNPQCW-BkHQSocK.js";const N=":host{display:block;box-sizing:border-box}",C=class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.novls=[],this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0"}render(){return s(x,{key:"ac4cd079072f078f9a622229910b9ffcfd53227e"},s("swiper-container",{key:"3176021d7026f838018323105fbf163e4817ff3e",grid:this.grid,"breakpoint-base":"container",breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.novls.map(e=>s("swiper-slide",null,s("ur-novl",Object.assign({},e))))))}static get style(){return N}};k(C,[1,"ur-novl-carousel",{novls:[8],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"]}]);const t={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlCarousel",tagName:"ur-novl-carousel",customElement:!0,members:[{kind:"field",name:"novls",type:"any",description:"",default:"[]"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"}],events:[]}],exports:[{kind:"js",name:"UrNovlCarousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-novl-carousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}}]}]};y({...o()||{},...t,modules:[...(o()||{}).modules||[],...t.modules]});const V=({novls:e,breakpoints:m,grid:w,slidesPerView:f,spaceBetween:v,width:b="100%"})=>g`
  <div style="width: ${b}; box-sizing:border-box; background: #efefef;margin: 0;padding: 20px;">
    <ur-novl-carousel
        .novls="${e}"
        .breakpoints="${m}"
        .grid="${w}"
        slides-per-view="${f}"
        space-between="${v}"></ur-novl-carousel>
  </div>
`,E={title:"Urnovl/NovlCarousel",render:e=>V(e)},r={args:{novls:p,breakpoints:{},grid:{},slidesPerView:1,spaceBetween:10,width:"700px"}},n={args:{novls:p,breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:10,width:"700px"}};var a,i,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    novls: NOVLS,
    breakpoints: {},
    grid: {},
    slidesPerView: 1,
    spaceBetween: 10,
    width: '700px' // container width
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    novls: NOVLS,
    breakpoints: {},
    grid: {
      rows: 2,
      fill: 'row'
    },
    slidesPerView: 3,
    spaceBetween: 10,
    width: '700px' // container width
  }
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const S=["Default","TwoRowsGrid"];export{r as Default,n as TwoRowsGrid,S as __namedExportsOrder,E as default};
