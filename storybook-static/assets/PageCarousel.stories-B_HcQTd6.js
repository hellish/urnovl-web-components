import{k as I}from"./entry-preview-BcHUnPw7.js";import"./ur-button-arrow-right-DKWZuEHg.js";import{P as o}from"./ur-page-DZesG7pX.js";import{s as O,g as h}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as q,H,c as g,h as s,a as D}from"./index-B9J0OpMa.js";import"./index-DrFu-skq.js";import"./index-kIIll_V8.js";import"./get-w4emotEH.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-DwUGB6N2.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-ClLaGEwM.js";import"./form-BeuMnVCp.js";import"./index-D2jzjD89.js";import"./ur-button-DsNiBBkf.js";import"./index-CGUw5SK0.js";const M=e=>e&&!!e.content&&typeof e.content=="function",N=":host{--swiper-slide-width:100%}:host{display:block;box-sizing:border-box;position:relative}:host .carousel{position:relative}:host swiper-slide{width:var(--swiper-slide-width)}:host ur-button-arrow-left,:host ur-button-arrow-right{position:absolute;top:calc(50% - 34px);left:-17px;z-index:2}:host ur-button-arrow-right{left:auto;right:-17px}@media (min-width: 0px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 321px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 640px){:host swiper-slide{width:calc(90% / 3)}}@media (min-width: 1150px){:host swiper-slide{width:calc(90% / 4)}}@media (min-width: 1770px){:host swiper-slide{width:calc(90% / 5)}}@media (min-width: 2140px){:host swiper-slide{width:calc(90% / 6)}}",T=class extends H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.intersectionUpdated=g(this,"intersectionUpdated",7),this.prevClicked=g(this,"prevClicked",7),this.nextClicked=g(this,"nextClicked",7),this.onIntersection=async e=>{this.intersectionUpdated.emit(e)},this.onSlideChange=()=>{var e,n,t,i,r,a;(e=this.leftArrow)===null||e===void 0||e.setAttribute("disabled",(t=(n=this.swiperContainer)===null||n===void 0?void 0:n.swiper)===null||t===void 0?void 0:t.isBeginning),(i=this.rightArrow)===null||i===void 0||i.setAttribute("disabled",(a=(r=this.swiperContainer)===null||r===void 0?void 0:r.swiper)===null||a===void 0?void 0:a.isEnd)},this.onLeftClick=()=>{var e,n;(n=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||n===void 0||n.slidePrev(),this.prevClicked.emit()},this.onRightClick=()=>{var e,n;(n=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||n===void 0||n.slideNext(),this.nextClicked.emit()},this.pages=[],this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0",this.navigation=!1}componentDidLoad(){var e;this.swiperContainer=this.el.shadowRoot.querySelector("swiper-container"),this.navigation&&(this.leftArrow=this.el.shadowRoot.querySelector("ur-button-arrow-left"),this.rightArrow=this.el.shadowRoot.querySelector("ur-button-arrow-right"),this.leftArrow.setAttribute("disabled","true"),this.rightArrow.setAttribute("disabled",`${this.pages.length===0}`),this.leftArrow.addEventListener("click",this.onLeftClick),this.rightArrow.addEventListener("click",this.onRightClick),(e=this.swiperContainer)===null||e===void 0||e.swiper.on("slideChange",this.onSlideChange));const n=this.el.shadowRoot.querySelectorAll("ur-page");this.observer=new IntersectionObserver(this.onIntersection),n.forEach(t=>{this.observer.observe(t)})}disconnectedCallback(){var e,n,t;(e=this.leftArrow)===null||e===void 0||e.removeEventListener("click",this.onLeftClick),(n=this.rightArrow)===null||n===void 0||n.removeEventListener("click",this.onRightClick),(t=this.swiperContainer)===null||t===void 0||t.swiper.destroy(!0,!0),this.observer.disconnect()}render(){return s(D,{key:"684c2dcaf0e2e8001d74507a5260986716ebcb98"},s("div",{key:"bde07f3241e80e908d303882064eecbc3ea01980",class:"carousel"},this.navigation&&s("ur-button-arrow-left",{key:"92c65f2cc91523fe4095ec14c6908c30938521c8",disabled:!0}),this.navigation&&s("ur-button-arrow-right",{key:"fb1b27d078516ddfe7fc28022a2d3a9cb0d89993",disabled:!0}),s("swiper-container",{key:"e9ff9e55d1c4eb5c276cbd0b9d2fa49e197990c2","breakpoint-base":"container",grid:this.grid,breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.pages.map((e,n)=>M(e)?s("swiper-slide",null,s("div",{class:"custom",innerHTML:e.content(n)})):s("swiper-slide",null,s("ur-page",Object.assign({},e)))))))}get el(){return this}static get style(){return N}};q(T,[1,"ur-page-carousel",{pages:[8],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"],navigation:[4]}]);const m={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrPageCarousel",tagName:"ur-page-carousel",customElement:!0,members:[{kind:"field",name:"pages",type:"any",description:"",default:"[]"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"},{kind:"field",name:"navigation",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"intersectionUpdated",description:""},{kind:"event",name:"prevClicked",description:""},{kind:"event",name:"nextClicked",description:""}]}],exports:[{kind:"js",name:"UrPageCarousel",declaration:{name:"UrPageCarousel",module:"src/components/ur-page-carousel/ur-page-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-page-carousel",declaration:{name:"UrPageCarousel",module:"src/components/ur-page-carousel/ur-page-carousel.tsx"}}]}]};O({...h()||{},...m,modules:[...(h()||{}).modules||[],...m.modules]});var v=Object.freeze,$=Object.defineProperty,F=(e,n)=>v($(e,"raw",{value:v(e.slice())})),f;const w=({pages:e,breakpoints:n,grid:t,slidesPerView:i,spaceBetween:r,navigation:a=!1,slideWidth:U="100%",containerWidth:G="100%",containerPadding:j="20px",containerBackgroundColor:z="#efefef"})=>I(f||(f=F([`
    <script>
        for (const item of document.getElementsByClassName('page-carousel')) {
            item.addEventListener('pageClicked', (event) => {
                alert('page clicked with id ' + event.detail);
            })
        }
    <\/script>
    <style>
        ur-page-carousel {
            --swiper-slide-width: `,`;
        }
    </style>
    <div style="width: `,"; box-sizing:border-box; background: ",";margin: 0;padding: ",`;">
        <ur-page-carousel
            class="pages-carousel"
            .pages="`,`"
            .breakpoints="`,`"
            .grid="`,`"
            .navigation="`,`"
            slides-per-view="`,`"
            space-between="`,`"></ur-page-carousel>
    </div>
`])),U,G,z,j,e,n,t,a,i,r),pe={title:"Urnovl/Business/PageCarousel",render:e=>w(e)},d={args:{pages:o,breakpoints:{},grid:{},slidesPerView:6,spaceBetween:8,containerWidth:"100%",containerBackgroundColor:"transparent"}},l={args:{pages:o.map((e,n)=>n===1||n===2?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:8,containerWidth:"700px",containerBackgroundColor:"transparent"}},c={render:e=>w(e),args:{pages:o,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:4,containerWidth:"100%",containerBackgroundColor:"transparent"}},p={render:e=>w(e),args:{pages:o,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}},u={render:e=>w(e),args:{pages:o.map((e,n)=>n===2?{content:t=>`<div>[ custom content goes here for index ${t} ]</div>`}:e),breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}};var b,k,P;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    pages: PAGES,
    breakpoints: {},
    grid: {},
    slidesPerView: 6,
    spaceBetween: 8,
    // container styles
    containerWidth: '100%',
    containerBackgroundColor: 'transparent'
  }
}`,...(P=(k=d.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var B,C,V;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    pages: PAGES.map((page, index) => {
      if (index === 1 || index === 2) {
        return {
          ...page,
          borderRadius: '0'
        };
      }
      return {
        ...page
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
}`,...(V=(C=l.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var x,y,_;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => PageCarousel(args),
  args: {
    pages: PAGES,
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
}`,...(_=(y=c.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var A,S,E;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => PageCarousel(args),
  args: {
    pages: PAGES,
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
}`,...(E=(S=p.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var W,R,L;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => PageCarousel(args),
  args: {
    pages: PAGES.map((page, index) => {
      if (index === 2) {
        return {
          content: pageIndex => {
            return \`<div>[ custom content goes here for index \${pageIndex} ]</div>\`;
          }
        };
      }
      return page;
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
}`,...(L=(R=u.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const ue=["Default","TwoRowsGrid","SneakPeek","FullWithArrows","CustomSlide"];export{u as CustomSlide,d as Default,p as FullWithArrows,c as SneakPeek,l as TwoRowsGrid,ue as __namedExportsOrder,pe as default};
