import{k as U}from"./entry-preview-BcHUnPw7.js";import"./ur-button-arrow-right-CNS5xeYn.js";import{N as l}from"./ur-novl-Cz3YobxX.js";import{s as $,g as c}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as _,H as L,c as O,h as s,a as R}from"./index-CLClakx-.js";import"./index-DrFu-skq.js";import"./index-Crv1S3Q_.js";import"./index-nIgcz_ss.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-BAH5M8si.js";import"./form-CmHWCLTt.js";const q=":host{--swiper-slide-width:100%}:host{display:block;box-sizing:border-box;position:relative}:host .carousel{position:relative}:host swiper-slide{width:var(--swiper-slide-width)}:host ur-button-arrow-left,:host ur-button-arrow-right{position:absolute;top:calc(50% - 34px);left:-17px;z-index:2}:host ur-button-arrow-right{left:auto;right:-17px}@media (min-width: 0px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 321px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 640px){:host swiper-slide{width:calc(90% / 3)}}@media (min-width: 1150px){:host swiper-slide{width:calc(90% / 4)}}@media (min-width: 1770px){:host swiper-slide{width:calc(90% / 5)}}@media (min-width: 2140px){:host swiper-slide{width:calc(90% / 6)}}",j=class extends L{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.intersectionUpdated=O(this,"intersectionUpdated",7),this.onIntersection=async e=>{this.intersectionUpdated.emit(e)},this.novls=[],this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0",this.navigation=!1}componentDidLoad(){const e=this.el.shadowRoot.querySelector("swiper-container");this.navigation&&(this.el.shadowRoot.querySelector("ur-button-arrow-left").addEventListener("click",()=>{var n;(n=e==null?void 0:e.swiper)===null||n===void 0||n.slidePrev()}),this.el.shadowRoot.querySelector("ur-button-arrow-right").addEventListener("click",()=>{var n;(n=e==null?void 0:e.swiper)===null||n===void 0||n.slideNext()}));const r=this.el.shadowRoot.querySelectorAll("ur-novl");this.observer=new IntersectionObserver(this.onIntersection),r.forEach(n=>{this.observer.observe(n)})}render(){return s(R,{key:"b3975322168078ef291ff7a3504d24dadd69e2ee"},s("div",{key:"c9bdea13ee58184a17c7b26ade5b04ff29fd12a3",class:"carousel"},this.navigation&&s("ur-button-arrow-left",{key:"0cf5e36539430cf2ed95b8f11fe8668f7ac10580"}),this.navigation&&s("ur-button-arrow-right",{key:"91e25df71b863535beba9ebb3288cf86a25ec278"}),s("swiper-container",{key:"89fc4b89c5d795cb47d9920f53dc2b22bc4c223f","breakpoint-base":"container",grid:this.grid,breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.novls.map(e=>s("swiper-slide",null,s("ur-novl",Object.assign({},e)))))))}get el(){return this}static get style(){return q}};_(j,[1,"ur-novl-carousel",{novls:[8],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"],navigation:[4]}]);const p={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlCarousel",tagName:"ur-novl-carousel",customElement:!0,members:[{kind:"field",name:"novls",type:"any",description:"",default:"[]"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"},{kind:"field",name:"navigation",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"intersectionUpdated",description:""}]}],exports:[{kind:"js",name:"UrNovlCarousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-novl-carousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}}]}]};$({...c()||{},...p,modules:[...(c()||{}).modules||[],...p.modules]});const d=({novls:e,breakpoints:r,grid:n,slidesPerView:y,spaceBetween:x,navigation:C=!1,slideWidth:N="100%",containerWidth:S="100%",containerPadding:W="20px",containerBackgroundColor:E="#efefef"})=>U`
    <style>
        ur-novl-carousel {
            --swiper-slide-width: ${N};
        }
    </style>
    <div style="width: ${S}; box-sizing:border-box; background: ${E};margin: 0;padding: ${W};">
        <ur-novl-carousel
            .novls="${e}"
            .breakpoints="${r}"
            .grid="${n}"
            .navigation="${C}"
            slides-per-view="${y}"
            space-between="${x}"></ur-novl-carousel>
    </div>
`,X={title:"Urnovl/Business/NovlCarousel",render:e=>d(e)},t={args:{novls:l,breakpoints:{},grid:{},slidesPerView:6,spaceBetween:8,containerWidth:"100%",containerBackgroundColor:"transparent"}},i={args:{novls:l.map((e,r)=>r===1||r===6?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:8,containerWidth:"700px",containerBackgroundColor:"transparent"}},o={render:e=>d(e),args:{novls:l,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:4,containerWidth:"100%",containerBackgroundColor:"transparent"}},a={render:e=>d(e),args:{novls:l,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}};var u,w,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(w=t.parameters)==null?void 0:w.docs)==null?void 0:m.source}}};var h,v,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,b,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var B,V,P;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(P=(V=a.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};const Y=["Default","TwoRowsGrid","SneakPeek","FullWithArrows"];export{t as Default,a as FullWithArrows,o as SneakPeek,i as TwoRowsGrid,Y as __namedExportsOrder,X as default};
