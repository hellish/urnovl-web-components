import{k as I}from"./entry-preview-BcHUnPw7.js";import"./ur-button-arrow-right-BufzkJV2.js";import{N as r}from"./ur-novl-DiJ2jLMm.js";import{s as q,g as u}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as H,H as A,c as p,h as t,a as D}from"./index-Dnt4yWMo.js";import"./index-DrFu-skq.js";import"./index-CTeXfnxQ.js";import"./get-D9DBDJjp.js";import"./class-map-DirLTUPi.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-ETGWZztw.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-Bt_5eb2T.js";import"./form-D6WTgxde.js";import"./ripple-mixin-Baxn-44g.js";import"./index-BXDV2pmF.js";const M=e=>e&&!!e.content&&typeof e.content=="function",T=":host{--swiper-slide-width:100%}:host{display:block;box-sizing:border-box;position:relative}:host .carousel{position:relative}:host swiper-slide{width:var(--swiper-slide-width)}:host ur-button-arrow-left,:host ur-button-arrow-right{position:absolute;top:calc(50% - 34px);left:-17px;z-index:2}:host ur-button-arrow-right{left:auto;right:-17px}@media (min-width: 0px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 321px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 640px){:host swiper-slide{width:calc(90% / 3)}}@media (min-width: 1150px){:host swiper-slide{width:calc(90% / 4)}}@media (min-width: 1770px){:host swiper-slide{width:calc(90% / 5)}}@media (min-width: 2140px){:host swiper-slide{width:calc(90% / 6)}}",F=class extends A{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.intersectionUpdated=p(this,"intersectionUpdated",7),this.prevClicked=p(this,"prevClicked",7),this.nextClicked=p(this,"nextClicked",7),this.onIntersection=async e=>{this.intersectionUpdated.emit(e)},this.novls=[],this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0",this.navigation=!1}componentDidLoad(){const e=this.el.shadowRoot.querySelector("swiper-container");this.navigation&&(this.el.shadowRoot.querySelector("ur-button-arrow-left").addEventListener("click",()=>{var n;(n=e==null?void 0:e.swiper)===null||n===void 0||n.slidePrev(),this.prevClicked.emit()}),this.el.shadowRoot.querySelector("ur-button-arrow-right").addEventListener("click",()=>{var n;(n=e==null?void 0:e.swiper)===null||n===void 0||n.slideNext(),this.nextClicked.emit()}));const s=this.el.shadowRoot.querySelectorAll("ur-novl");this.observer=new IntersectionObserver(this.onIntersection),s.forEach(n=>{this.observer.observe(n)})}render(){return t(D,{key:"9a965ae6256ef9eb5df1b2aa095fff7a5c4e9c3f"},t("div",{key:"dc562e4edd532cdab2d20ce52b8a7a0257e71db0",class:"carousel"},this.navigation&&t("ur-button-arrow-left",{key:"1f97e85c4534511ff425e1c8a7361aba2c0b0d3c"}),this.navigation&&t("ur-button-arrow-right",{key:"5cdb1caec083ab1f1a1ebc5107f20a0db9ce746b"}),t("swiper-container",{key:"916497bccc1d1cb5839ccac3d7f17cff8367dbf5","breakpoint-base":"container",grid:this.grid,breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.novls.map((e,s)=>M(e)?t("swiper-slide",null,t("div",{class:"custom",innerHTML:e.content(s)})):t("swiper-slide",null,t("ur-novl",Object.assign({},e)))))))}get el(){return this}static get style(){return T}};H(F,[1,"ur-novl-carousel",{novls:[8],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"],navigation:[4]}]);const w={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlCarousel",tagName:"ur-novl-carousel",customElement:!0,members:[{kind:"field",name:"novls",type:"any",description:"",default:"[]"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"},{kind:"field",name:"navigation",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"intersectionUpdated",description:""},{kind:"event",name:"prevClicked",description:""},{kind:"event",name:"nextClicked",description:""}]}],exports:[{kind:"js",name:"UrNovlCarousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-novl-carousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}}]}]};q({...u()||{},...w,modules:[...(u()||{}).modules||[],...w.modules]});var m=Object.freeze,G=Object.defineProperty,$=(e,s)=>m(G(e,"raw",{value:m(e.slice())})),v;const c=({novls:e,breakpoints:s,grid:n,slidesPerView:E,spaceBetween:L,navigation:O=!1,slideWidth:U="100%",containerWidth:R="100%",containerPadding:j="20px",containerBackgroundColor:z="#efefef"})=>I(v||(v=$([`
    <script>
        for (const item of document.getElementsByClassName('novls-carousel')) {
            item.addEventListener('novlClicked', (event) => {
                alert('novl clicked with id ' + event.detail);
            })
        }
    <\/script>
    <style>
        ur-novl-carousel {
            --swiper-slide-width: `,`;
        }
    </style>
    <div style="width: `,"; box-sizing:border-box; background: ",";margin: 0;padding: ",`;">
        <ur-novl-carousel
            class="novls-carousel"
            .novls="`,`"
            .breakpoints="`,`"
            .grid="`,`"
            .navigation="`,`"
            slides-per-view="`,`"
            space-between="`,`"></ur-novl-carousel>
    </div>
`])),U,R,z,j,e,s,n,O,E,L),pe={title:"Urnovl/Business/NovlCarousel",render:e=>c(e)},i={args:{novls:r,breakpoints:{},grid:{},slidesPerView:6,spaceBetween:8,containerWidth:"100%",containerBackgroundColor:"transparent"}},o={args:{novls:r.map((e,s)=>s===1||s===6?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:8,containerWidth:"700px",containerBackgroundColor:"transparent"}},a={render:e=>c(e),args:{novls:r,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:4,containerWidth:"100%",containerBackgroundColor:"transparent"}},l={render:e=>c(e),args:{novls:r,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}},d={render:e=>c(e),args:{novls:r.map((e,s)=>s===2?{content:n=>`<div>[ custom content goes here for index ${n} ]</div>`}:e),breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}};var h,g,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var k,b,B;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(b=o.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var V,P,C;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(C=(P=a.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var x,y,N;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=(y=l.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var S,_,W;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => NovlCarousel(args),
  args: {
    novls: NOVLS.map((novl, index) => {
      if (index === 2) {
        return {
          content: novlIndex => {
            return \`<div>[ custom content goes here for index \${novlIndex} ]</div>\`;
          }
        };
      }
      return novl;
    }),
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
}`,...(W=(_=d.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};const ue=["Default","TwoRowsGrid","SneakPeek","FullWithArrows","CustomSlide"];export{d as CustomSlide,i as Default,l as FullWithArrows,a as SneakPeek,o as TwoRowsGrid,ue as __namedExportsOrder,pe as default};
