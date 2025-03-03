import{k as G}from"./entry-preview-BcHUnPw7.js";import{P as o}from"./ur-page-D526aH1J.js";import"./ur-button-arrow-right-BZM1K0s6.js";import{s as H,g as b}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as I,H as M,c as m,f as v,h as n,a as j}from"./index-B9J0OpMa.js";import"./index-DrFu-skq.js";import"./ur-button-CnezuNVm.js";import"./index-BRY6Z_ZR.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./template-yncBVCyc.js";import"./index-CXOzFcj5.js";import"./button-base-DxLrUPRs.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-C8TuHONp.js";import"./form-DhDC-phE.js";import"./index-pqI9kxak.js";import"./index-rXz1tEXk.js";import"./watch-ByvFYHv8.js";const q=e=>e&&!!e.content&&typeof e.content=="function",z=":host{--swiper-slide-width:100%}:host{display:block;box-sizing:border-box;position:relative}:host .carousel{position:relative}:host swiper-slide{width:var(--swiper-slide-width)}:host ur-button-arrow-left,:host ur-button-arrow-right{position:absolute;top:calc(50% - 34px);left:-17px;z-index:2}:host ur-button-arrow-right{left:auto;right:-17px}@media (min-width: 0px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 321px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 640px){:host swiper-slide{width:calc(90% / 3)}}@media (min-width: 1150px){:host swiper-slide{width:calc(90% / 4)}}@media (min-width: 1770px){:host swiper-slide{width:calc(90% / 5)}}@media (min-width: 2140px){:host swiper-slide{width:calc(90% / 6)}}",D=class extends M{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.prevClicked=m(this,"prevClicked",7),this.nextClicked=m(this,"nextClicked",7),this.progressUpdated=m(this,"progressUpdated",7),this.onSlideChange=()=>{var e,s,i,t,r,a;(e=this.leftArrow)===null||e===void 0||e.setAttribute("disabled",(i=(s=this.swiperContainer)===null||s===void 0?void 0:s.swiper)===null||i===void 0?void 0:i.isBeginning),(t=this.rightArrow)===null||t===void 0||t.setAttribute("disabled",(a=(r=this.swiperContainer)===null||r===void 0?void 0:r.swiper)===null||a===void 0?void 0:a.isEnd)},this.onLeftClick=()=>{var e,s;this.disabledPrev||((s=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||s===void 0||s.slidePrev(),this.prevClicked.emit())},this.onRightClick=()=>{var e,s;this.disabledNext||((s=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||s===void 0||s.slideNext(),this.nextClicked.emit())},this.pages=[],this.loading=!1,this.disabledPrev=!0,this.disabledNext=!1,this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0",this.navigation=!1,this.destroyListeners=!0,this.debug=!1}async addPages(e){this.pages=this.pages.concat(...e),v(this)}async updateNovlsByIndex(e){this.pages=this.pages.map((s,i)=>e.has(i)?e.get(i):s),v(this)}async reset(){const e=this.swiperContainer.getElementsByClassName("swiper-slide-visible").length;this.progressUpdated.emit([0,e])}componentDidLoad(){var e,s,i,t;this.swiperContainer=this.el.shadowRoot.querySelector("swiper-container"),this.navigation&&(this.leftArrow=this.el.shadowRoot.querySelector("ur-button-arrow-left"),this.rightArrow=this.el.shadowRoot.querySelector("ur-button-arrow-right"),this.leftArrow.addEventListener("click",this.onLeftClick),this.rightArrow.addEventListener("click",this.onRightClick),(e=this.swiperContainer)===null||e===void 0||e.swiper.on("slideChange",this.onSlideChange)),(s=this.swiperContainer)===null||s===void 0||s.swiper.on("reachBeginning",()=>{this.disabledPrev=!0}),(i=this.swiperContainer)===null||i===void 0||i.swiper.on("reachEnd",()=>{this.disabledNext=!0}),(t=this.swiperContainer)===null||t===void 0||t.swiper.on("progress",(r,a)=>{const g=parseInt(Math.round(a*100).toFixed(0),10),h=r.slidesEl.getElementsByClassName("swiper-slide-visible").length;this.progressUpdated.emit([g,h])})}disconnectedCallback(){var e,s,i;this.destroyListeners&&((e=this.leftArrow)===null||e===void 0||e.removeEventListener("click",this.onLeftClick),(s=this.rightArrow)===null||s===void 0||s.removeEventListener("click",this.onRightClick),(i=this.swiperContainer)===null||i===void 0||i.swiper.destroy(!0,!0))}renderPage(e,s){return q(e)?n("swiper-slide",null,this.debug&&n("span",{class:"index"},s+1),n("div",{class:"custom",innerHTML:e.content(s)})):n("swiper-slide",null,this.debug&&n("span",{class:"index"},s+1),n("ur-page",Object.assign({},e)))}render(){return n(j,{key:"ce23424980bf87752aa09254453768cf35dc4886"},n("div",{key:"0a36cbafcf4714bb128c8c3e6469b1e8dfcf14b7",class:"carousel"},this.navigation&&n("ur-button-arrow-left",{key:"e215949a65275cc1a5485a4bbf651febd2eb9c5c",disabled:this.disabledPrev}),this.navigation&&n("ur-button-arrow-right",{key:"db226cb02e54cd8f86b1ac23f387f54c082cc19b",disabled:this.loading||this.disabledNext}),n("swiper-container",{key:"3115c749926194764396949b3ab6188b08e52cdc",init:!0,observer:!0,"observe-slide-children":!0,"slides-per-group-auto":!0,"watch-slides-progress":!0,"breakpoint-base":"container",grid:this.grid,breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.pages.map((e,s)=>this.renderPage(e,s)))))}get el(){return this}static get style(){return z}};I(D,[1,"ur-page-carousel",{pages:[8],loading:[32],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"],navigation:[4],destroyListeners:[4,"destroy-listeners"],debug:[4],disabledPrev:[32],disabledNext:[32],addPages:[64],updateNovlsByIndex:[64],reset:[64]}]);const f={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrPageCarousel",tagName:"ur-page-carousel",customElement:!0,members:[{kind:"field",name:"pages",type:"any",description:"",default:"[]"},{kind:"field",name:"loading",type:"boolean",description:"",default:"false"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"},{kind:"field",name:"navigation",type:"boolean",description:"",default:"false"},{kind:"field",name:"destroyListeners",type:"boolean",description:"",default:"true"},{kind:"field",name:"debug",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"prevClicked",description:""},{kind:"event",name:"nextClicked",description:""},{kind:"event",name:"progressUpdated",description:""}]}],exports:[{kind:"js",name:"UrPageCarousel",declaration:{name:"UrPageCarousel",module:"src/components/ur-page-carousel/ur-page-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-page-carousel",declaration:{name:"UrPageCarousel",module:"src/components/ur-page-carousel/ur-page-carousel.tsx"}}]}]};H({...b()||{},...f,modules:[...(b()||{}).modules||[],...f.modules]});const w=({pages:e,breakpoints:s,grid:i,slidesPerView:t,spaceBetween:r,navigation:a=!1,slideWidth:g="100%",containerWidth:h="100%",containerPadding:N="20px",containerBackgroundColor:R="#efefef"})=>G`
    <style>
        ur-page-carousel {
            --swiper-slide-width: ${g};
        }
    </style>
    <div style="width: ${h}; box-sizing:border-box; background: ${R};margin: 0;padding: ${N};">
        <ur-page-carousel
            class="pages-carousel"
            .pages="${e}"
            .breakpoints="${s}"
            .grid="${i}"
            .navigation="${a}"
            slides-per-view="${t}"
            space-between="${r}"></ur-page-carousel>
        <button id="reset-carousel" onclick="reset()">reset</button>
    </div>
`,ce={title:"Urnovl/Business/PageCarousel",render:e=>w(e)},d={args:{pages:o,breakpoints:{},grid:{},slidesPerView:6,spaceBetween:8,containerWidth:"100%",containerBackgroundColor:"transparent"}},l={args:{pages:o.map((e,s)=>s===1||s===2?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:8,containerWidth:"700px",containerBackgroundColor:"transparent"}},c={render:e=>w(e),args:{pages:o,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:4,containerWidth:"100%",containerBackgroundColor:"transparent"}},p={render:e=>w(e),args:{pages:o,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}},u={render:e=>w(e),args:{pages:o.map((e,s)=>s===2?{content:i=>`<div>[ custom content goes here for index ${i} ]</div>`}:e),breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}};var P,k,B;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var C,V,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(V=l.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var x,_,E;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(_=c.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var S,A,L;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var W,U,$;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(U=u.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const pe=["Default","TwoRowsGrid","SneakPeek","FullWithArrows","CustomSlide"];export{u as CustomSlide,d as Default,p as FullWithArrows,c as SneakPeek,l as TwoRowsGrid,pe as __namedExportsOrder,ce as default};
