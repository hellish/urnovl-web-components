import{k as R}from"./lit-element-CPYlYYac.js";import"./ur-button-arrow-right-5H5bQlun.js";import{N as s}from"./ur-novl-B6fV75YP.js";import{s as U,g as c}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as j,H as q,h as n,a as z}from"./index-K5CyEtrH.js";import"./index-BPhljN7E.js";import"./directive-helpers-B6MS0CSf.js";import"./watch-ByvFYHv8.js";const D=":host{--swiper-slide-width:100%}:host{display:block;box-sizing:border-box;position:relative}:host .carousel{position:relative}:host swiper-slide{width:var(--swiper-slide-width)}:host ur-button-arrow-left,:host ur-button-arrow-right{position:absolute;top:calc(50% - 34px);left:-17px;z-index:2}:host ur-button-arrow-right{left:auto;right:-17px}",H=class extends q{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.novls=[],this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0",this.navigation=!1}componentDidLoad(){const e=this.el.shadowRoot.querySelector("swiper-container");this.navigation&&(this.el.shadowRoot.querySelector("ur-button-arrow-left").addEventListener("click",()=>{var r;(r=e==null?void 0:e.swiper)===null||r===void 0||r.slidePrev()}),this.el.shadowRoot.querySelector("ur-button-arrow-right").addEventListener("click",()=>{var r;(r=e==null?void 0:e.swiper)===null||r===void 0||r.slideNext()}))}render(){return n(z,{key:"6451c6dc32df14fba15f4ff95cd765ae67f0379a"},n("div",{key:"246d054c61b9080c2830dd7197ad9c04bda948ea",class:"carousel"},this.navigation&&n("ur-button-arrow-left",{key:"772c00818491a652826fbf64fa30b19b036ff9e1"}),this.navigation&&n("ur-button-arrow-right",{key:"444785c98dffb2b46d036777874433e83a9f7a24"}),n("swiper-container",{key:"8f692ba66d7a0799b5f5b6211b55db3903ce8331","breakpoint-base":"container",grid:this.grid,breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.novls.map(e=>n("swiper-slide",null,n("ur-novl",Object.assign({},e)))))))}get el(){return this}static get style(){return D}};j(H,[1,"ur-novl-carousel",{novls:[8],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"],navigation:[4]}]);const p={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlCarousel",tagName:"ur-novl-carousel",customElement:!0,members:[{kind:"field",name:"novls",type:"any",description:"",default:"[]"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"},{kind:"field",name:"navigation",type:"boolean",description:"",default:"false"}],events:[]}],exports:[{kind:"js",name:"UrNovlCarousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-novl-carousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}}]}]};U({...c()||{},...p,modules:[...(c()||{}).modules||[],...p.modules]});const d=({novls:e,breakpoints:r,grid:W,slidesPerView:C,spaceBetween:B,navigation:$=!1,slideWidth:L="100%",containerWidth:_="100%",containerPadding:E="20px",containerBackgroundColor:O="#efefef"})=>R`
    <style>
        ur-novl-carousel {
            --swiper-slide-width: ${L};
        }
    </style>
    <div style="width: ${_}; box-sizing:border-box; background: ${O};margin: 0;padding: ${E};">
        <ur-novl-carousel
            .novls="${e}"
            .breakpoints="${r}"
            .grid="${W}"
            .navigation="${$}"
            slides-per-view="${C}"
            space-between="${B}"></ur-novl-carousel>
    </div>
`,Q={title:"Urnovl/NovlCarousel",render:e=>d(e)},o={args:{novls:s,breakpoints:{},grid:{},slidesPerView:1,spaceBetween:10,containerWidth:"700px"}},t={args:{novls:s.map((e,r)=>r===1||r===6?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:10,containerWidth:"700px"}},i={render:e=>d(e),args:{novls:s,breakpoints:{},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:10,slideWidth:"80%",containerWidth:"700px"}},a={render:e=>d(e),args:{novls:s,breakpoints:{},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:10,slideWidth:"250px",containerWidth:"700px"}},l={render:e=>d(e),args:{novls:s,breakpoints:{},grid:{rows:1,fill:"row"},slidesPerView:"3",spaceBetween:18,navigation:!0,slideWidth:"336px",containerWidth:"1044px",containerPadding:"30px",containerBackgroundColor:"transparent"}};var u,w,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    novls: NOVLS,
    breakpoints: {},
    grid: {},
    slidesPerView: 1,
    spaceBetween: 10,
    // container styles
    containerWidth: '700px'
  }
}`,...(m=(w=o.parameters)==null?void 0:w.docs)==null?void 0:m.source}}};var v,g,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,b,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(b=i.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var x,y,N;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    slideWidth: '250px',
    containerWidth: '700px'
  }
}`,...(N=(y=a.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var P,S,V;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => NovlCarousel(args),
  args: {
    novls: NOVLS,
    breakpoints: {},
    grid: {
      rows: 1,
      fill: 'row'
    },
    slidesPerView: '3',
    spaceBetween: 18,
    navigation: true,
    // container styles
    slideWidth: '336px',
    containerWidth: '1044px',
    containerPadding: '30px',
    containerBackgroundColor: 'transparent'
  }
}`,...(V=(S=l.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const X=["Default","TwoRowsGrid","SneakPeek","SneakPeekWithSmallerNovl","FullWithArrows"];export{o as Default,l as FullWithArrows,i as SneakPeek,a as SneakPeekWithSmallerNovl,t as TwoRowsGrid,X as __namedExportsOrder,Q as default};