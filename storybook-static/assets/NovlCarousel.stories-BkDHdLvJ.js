import{k as L}from"./entry-preview-BcHUnPw7.js";import"./ur-button-arrow-right-LY11H5hf.js";import{N as l}from"./ur-novl-BkhBaZo9.js";import{s as R,g as p}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as j,H as z,c as d,h as t,a as q}from"./index-Dnt4yWMo.js";import"./index-DrFu-skq.js";import"./index-CTeXfnxQ.js";import"./get-D9DBDJjp.js";import"./class-map-DirLTUPi.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-ETGWZztw.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-Bt_5eb2T.js";import"./form-D6WTgxde.js";import"./ripple-mixin-Baxn-44g.js";import"./index-BXDV2pmF.js";const A=":host{--swiper-slide-width:100%}:host{display:block;box-sizing:border-box;position:relative}:host .carousel{position:relative}:host swiper-slide{width:var(--swiper-slide-width)}:host ur-button-arrow-left,:host ur-button-arrow-right{position:absolute;top:calc(50% - 34px);left:-17px;z-index:2}:host ur-button-arrow-right{left:auto;right:-17px}@media (min-width: 0px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 321px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 640px){:host swiper-slide{width:calc(90% / 3)}}@media (min-width: 1150px){:host swiper-slide{width:calc(90% / 4)}}@media (min-width: 1770px){:host swiper-slide{width:calc(90% / 5)}}@media (min-width: 2140px){:host swiper-slide{width:calc(90% / 6)}}",D=class extends z{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.intersectionUpdated=d(this,"intersectionUpdated",7),this.prevClicked=d(this,"prevClicked",7),this.nextClicked=d(this,"nextClicked",7),this.onIntersection=async e=>{this.intersectionUpdated.emit(e)},this.novls=[],this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0",this.navigation=!1}componentDidLoad(){const e=this.el.shadowRoot.querySelector("swiper-container");this.navigation&&(this.el.shadowRoot.querySelector("ur-button-arrow-left").addEventListener("click",()=>{var n;(n=e==null?void 0:e.swiper)===null||n===void 0||n.slidePrev(),this.prevClicked.emit()}),this.el.shadowRoot.querySelector("ur-button-arrow-right").addEventListener("click",()=>{var n;(n=e==null?void 0:e.swiper)===null||n===void 0||n.slideNext(),this.nextClicked.emit()}));const s=this.el.shadowRoot.querySelectorAll("ur-novl");this.observer=new IntersectionObserver(this.onIntersection),s.forEach(n=>{this.observer.observe(n)})}render(){return t(q,{key:"5b56e6de59893effb83c67c6eaf4a6dc55c9ac76"},t("div",{key:"6429048d740da64235d6b60183ffa5e37db6330b",class:"carousel"},this.navigation&&t("ur-button-arrow-left",{key:"c6b701656e5266d9b2133dd1bf4ffbcd959dcf39"}),this.navigation&&t("ur-button-arrow-right",{key:"9ca337ce2cb27acfbc9969da5f7a1e503bb0e60e"}),t("swiper-container",{key:"83fd07d91395ac2692e6ebc19bfa75974feb776a","breakpoint-base":"container",grid:this.grid,breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.novls.map(e=>t("swiper-slide",null,t("ur-novl",Object.assign({},e)))))))}get el(){return this}static get style(){return A}};j(D,[1,"ur-novl-carousel",{novls:[8],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"],navigation:[4]}]);const u={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlCarousel",tagName:"ur-novl-carousel",customElement:!0,members:[{kind:"field",name:"novls",type:"any",description:"",default:"[]"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"},{kind:"field",name:"navigation",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"intersectionUpdated",description:""},{kind:"event",name:"prevClicked",description:""},{kind:"event",name:"nextClicked",description:""}]}],exports:[{kind:"js",name:"UrNovlCarousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-novl-carousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}}]}]};R({...p()||{},...u,modules:[...(p()||{}).modules||[],...u.modules]});var w=Object.freeze,H=Object.defineProperty,I=(e,s)=>w(H(e,"raw",{value:w(e.slice())})),m;const c=({novls:e,breakpoints:s,grid:n,slidesPerView:N,spaceBetween:S,navigation:_=!1,slideWidth:E="100%",containerWidth:W="100%",containerPadding:O="20px",containerBackgroundColor:U="#efefef"})=>L(m||(m=I([`
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
`])),E,W,U,O,e,s,n,_,N,S),oe={title:"Urnovl/Business/NovlCarousel",render:e=>c(e)},r={args:{novls:l,breakpoints:{},grid:{},slidesPerView:6,spaceBetween:8,containerWidth:"100%",containerBackgroundColor:"transparent"}},i={args:{novls:l.map((e,s)=>s===1||s===6?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:8,containerWidth:"700px",containerBackgroundColor:"transparent"}},o={render:e=>c(e),args:{novls:l,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:4,containerWidth:"100%",containerBackgroundColor:"transparent"}},a={render:e=>c(e),args:{novls:l,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}};var v,h,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,b,k;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(k=(b=i.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var B,V,P;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(P=(V=o.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var C,y,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const ae=["Default","TwoRowsGrid","SneakPeek","FullWithArrows"];export{r as Default,a as FullWithArrows,o as SneakPeek,i as TwoRowsGrid,ae as __namedExportsOrder,oe as default};
