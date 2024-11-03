import{k as _}from"./entry-preview-BcHUnPw7.js";import"./ur-button-arrow-right-B5ocP6NO.js";import{N as a}from"./ur-novl-DHelpo9A.js";import{s as E,g as d}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as L,H as O,h as s,a as R}from"./index-CLClakx-.js";import"./index-DrFu-skq.js";import"./index-Crv1S3Q_.js";import"./index-nIgcz_ss.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-BAH5M8si.js";import"./form-CmHWCLTt.js";const U=":host{--swiper-slide-width:100%}:host{display:block;box-sizing:border-box;position:relative}:host .carousel{position:relative}:host swiper-slide{width:var(--swiper-slide-width)}:host ur-button-arrow-left,:host ur-button-arrow-right{position:absolute;top:calc(50% - 34px);left:-17px;z-index:2}:host ur-button-arrow-right{left:auto;right:-17px}@media (min-width: 0px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 321px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 640px){:host swiper-slide{width:calc(90% / 3)}}@media (min-width: 1150px){:host swiper-slide{width:calc(90% / 4)}}@media (min-width: 1770px){:host swiper-slide{width:calc(90% / 5)}}@media (min-width: 2140px){:host swiper-slide{width:calc(90% / 6)}}",j=class extends O{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.novls=[],this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0",this.navigation=!1}componentDidLoad(){const e=this.el.shadowRoot.querySelector("swiper-container");this.navigation&&(this.el.shadowRoot.querySelector("ur-button-arrow-left").addEventListener("click",()=>{var n;(n=e==null?void 0:e.swiper)===null||n===void 0||n.slidePrev()}),this.el.shadowRoot.querySelector("ur-button-arrow-right").addEventListener("click",()=>{var n;(n=e==null?void 0:e.swiper)===null||n===void 0||n.slideNext()}))}render(){return s(R,{key:"557a09f59a7762e2f4d3d21eb59ce4b3c13a6d7f"},s("div",{key:"340610c2f34307e46c4f6474276245371e166d29",class:"carousel"},this.navigation&&s("ur-button-arrow-left",{key:"589a088b4e9208207a0aca5b04409e699cda60eb"}),this.navigation&&s("ur-button-arrow-right",{key:"fc181aaa622a41199751ac5c4e56c24575c3d444"}),s("swiper-container",{key:"c838885d1d9f560fd783ae8a9e50cbaba5c71108","breakpoint-base":"container",grid:this.grid,breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.novls.map(e=>s("swiper-slide",null,s("ur-novl",Object.assign({},e)))))))}get el(){return this}static get style(){return U}};L(j,[1,"ur-novl-carousel",{novls:[8],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"],navigation:[4]}]);const c={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlCarousel",tagName:"ur-novl-carousel",customElement:!0,members:[{kind:"field",name:"novls",type:"any",description:"",default:"[]"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"},{kind:"field",name:"navigation",type:"boolean",description:"",default:"false"}],events:[]}],exports:[{kind:"js",name:"UrNovlCarousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-novl-carousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}}]}]};E({...d()||{},...c,modules:[...(d()||{}).modules||[],...c.modules]});const l=({novls:e,breakpoints:n,grid:P,slidesPerView:y,spaceBetween:x,navigation:C=!1,slideWidth:N="100%",containerWidth:S="100%",containerPadding:W="20px",containerBackgroundColor:$="#efefef"})=>_`
    <style>
        ur-novl-carousel {
            --swiper-slide-width: ${N};
        }
    </style>
    <div style="width: ${S}; box-sizing:border-box; background: ${$};margin: 0;padding: ${W};">
        <ur-novl-carousel
            .novls="${e}"
            .breakpoints="${n}"
            .grid="${P}"
            .navigation="${C}"
            slides-per-view="${y}"
            space-between="${x}"></ur-novl-carousel>
    </div>
`,Q={title:"Urnovl/Business/NovlCarousel",render:e=>l(e)},r={args:{novls:a,breakpoints:{},grid:{},slidesPerView:6,spaceBetween:8,containerWidth:"100%",containerBackgroundColor:"transparent"}},t={args:{novls:a.map((e,n)=>n===1||n===6?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:8,containerWidth:"700px",containerBackgroundColor:"transparent"}},i={render:e=>l(e),args:{novls:a,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:4,containerWidth:"100%",containerBackgroundColor:"transparent"}},o={render:e=>l(e),args:{novls:a,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}};var u,p,w;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    novls: NOVLS,
    breakpoints: {},
    grid: {},
    slidesPerView: 6,
    spaceBetween: 8,
    // container styles
    containerWidth: '100%',
    containerBackgroundColor: 'transparent'
  }
}`,...(w=(p=r.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var m,h,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    spaceBetween: 8,
    // container styles
    containerWidth: '700px',
    containerBackgroundColor: 'transparent'
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,f,k;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => NovlCarousel(args),
  args: {
    novls: NOVLS,
    breakpoints: {
      2075: {
        slidesPerView: 'auto',
        spaceBetween: 8
      },
      1700: {
        slidesPerView: 'auto',
        spaceBetween: 8
      },
      1420: {
        slidesPerView: 'auto',
        spaceBetween: 8
      },
      1090: {
        slidesPerView: 'auto',
        spaceBetween: 8
      },
      321: {
        slidesPerView: 'auto',
        spaceBetween: 4
      },
      0: {
        slidesPerView: 'auto',
        spaceBetween: 4
      }
    },
    grid: {
      rows: 1,
      fill: 'row'
    },
    slidesPerView: 'auto',
    spaceBetween: 4,
    // container styles
    //slideWidth: '80%',
    containerWidth: '100%',
    containerBackgroundColor: 'transparent'
  }
}`,...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,B,V;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => NovlCarousel(args),
  args: {
    novls: NOVLS,
    breakpoints: {
      2075: {
        slidesPerView: 'auto',
        spaceBetween: 8
      },
      1700: {
        slidesPerView: 'auto',
        spaceBetween: 8
      },
      1420: {
        slidesPerView: 'auto',
        spaceBetween: 8
      },
      1090: {
        slidesPerView: 'auto',
        spaceBetween: 8
      },
      321: {
        slidesPerView: 'auto',
        spaceBetween: 4
      },
      0: {
        slidesPerView: 'auto',
        spaceBetween: 4
      }
    },
    grid: {
      rows: 1,
      fill: 'row'
    },
    //slidesPerView: 'auto',
    //spaceBetween: 8,
    navigation: true,
    // container styles
    containerWidth: '100%',
    containerBackgroundColor: 'transparent'
  }
}`,...(V=(B=o.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const X=["Default","TwoRowsGrid","SneakPeek","FullWithArrows"];export{r as Default,o as FullWithArrows,i as SneakPeek,t as TwoRowsGrid,X as __namedExportsOrder,Q as default};
