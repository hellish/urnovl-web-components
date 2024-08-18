import{k as V}from"./lit-element-CsPioU85.js";import{d as C,H as P,h as r,a as B,N as i}from"./ur-novl-CRZR0OaX.js";import{s as S,g as a}from"./chunk-GKNNPQCW-BkHQSocK.js";const W=":host{--swiper-slide-width:100%}:host{display:block;box-sizing:border-box}:host swiper-slide{width:var(--swiper-slide-width)}",_=class extends P{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.novls=[],this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0"}render(){return r(B,{key:"4d842259790096a65cf47002d83e341fe8457e0e"},r("swiper-container",{key:"64363cfeeb7f3f460212c5a9c7bc5dbd52902c48",grid:this.grid,"breakpoint-base":"container",breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.novls.map(e=>r("swiper-slide",null,r("ur-novl",Object.assign({},e))))))}static get style(){return W}};C(_,[1,"ur-novl-carousel",{novls:[8],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"]}]);const l={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlCarousel",tagName:"ur-novl-carousel",customElement:!0,members:[{kind:"field",name:"novls",type:"any",description:"",default:"[]"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"}],events:[]}],exports:[{kind:"js",name:"UrNovlCarousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-novl-carousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}}]}]};S({...a()||{},...l,modules:[...(a()||{}).modules||[],...l.modules]});const h=({novls:e,breakpoints:s,grid:b,slidesPerView:k,spaceBetween:y,slideWidth:x="100%",containerWidth:N="100%"})=>V`
    <style>
        ur-novl-carousel {
            --swiper-slide-width: ${x};
        }
    </style>
    <div style="width: ${N}; box-sizing:border-box; background: #efefef;margin: 0;padding: 20px;">
        <ur-novl-carousel
            .novls="${e}"
            .breakpoints="${s}"
            .grid="${b}"
            slides-per-view="${k}"
            space-between="${y}"></ur-novl-carousel>
    </div>
`,U={title:"Urnovl/NovlCarousel",render:e=>h(e)},n={args:{novls:i,breakpoints:{},grid:{},slidesPerView:1,spaceBetween:10,containerWidth:"700px"}},o={args:{novls:i.map((e,s)=>s===1||s===6?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:10,containerWidth:"700px"}},t={render:e=>h(e),args:{novls:i,breakpoints:{},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:10,slideWidth:"80%",containerWidth:"700px"}};var d,c,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    novls: NOVLS,
    breakpoints: {},
    grid: {},
    slidesPerView: 1,
    spaceBetween: 10,
    // container styles
    containerWidth: '700px'
  }
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,w;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    // container styles
    containerWidth: '700px'
  }
}`,...(w=(m=o.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var v,f,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => NovlCarousel(args),
  args: {
    novls: NOVLS,
    breakpoints: {},
    grid: {
      rows: 1,
      fill: 'row'
    },
    slidesPerView: 'auto',
    spaceBetween: 10,
    // container styles
    slideWidth: '80%',
    containerWidth: '700px'
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const L=["Default","TwoRowsGrid","SneakPeek"];export{n as Default,t as SneakPeek,o as TwoRowsGrid,L as __namedExportsOrder,U as default};
