import{k as G}from"./entry-preview-BcHUnPw7.js";import{P as r}from"./ur-page-BuvO7nRN.js";import"./ur-button-arrow-right-ep5BYjpr.js";import{s as H,g as v}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as I,H as M,c as m,f as b,h as i,a as j}from"./index-BJvbtjhH.js";import"./index-DrFu-skq.js";import"./ur-button-DqQeyvWy.js";import"./index-BRY6Z_ZR.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./template-yncBVCyc.js";import"./index-CXOzFcj5.js";import"./button-base-DxLrUPRs.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-C8TuHONp.js";import"./form-DhDC-phE.js";import"./index-pqI9kxak.js";import"./index-rXz1tEXk.js";import"./watch-ByvFYHv8.js";const q=e=>e&&!!e.content&&typeof e.content=="function",z=":host{--swiper-slide-width:100%}:host{display:block;box-sizing:border-box;position:relative}:host .carousel{position:relative}:host swiper-slide{width:var(--swiper-slide-width)}:host ur-button-arrow-left,:host ur-button-arrow-right{position:absolute;top:calc(50% - 34px);left:-17px;z-index:2}:host ur-button-arrow-right{left:auto;right:-17px}@media (min-width: 0px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 321px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 640px){:host swiper-slide{width:calc(90% / 3)}}@media (min-width: 1150px){:host swiper-slide{width:calc(90% / 4)}}@media (min-width: 1770px){:host swiper-slide{width:calc(90% / 5)}}@media (min-width: 2140px){:host swiper-slide{width:calc(90% / 6)}}",D=class extends M{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.prevClicked=m(this,"prevClicked",7),this.nextClicked=m(this,"nextClicked",7),this.progressUpdated=m(this,"progressUpdated",7),this.pages=[],this.loading=!1,this.disabledPrev=!0,this.disabledNext=!1,this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0",this.navigation=!1,this.destroyListeners=!0,this.debug=!1,this.onSlideChange=()=>{var e,s,n,t;this.disabledPrev=(s=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||s===void 0?void 0:s.isBeginning,this.disabledNext=(t=(n=this.swiperContainer)===null||n===void 0?void 0:n.swiper)===null||t===void 0?void 0:t.isEnd},this.onLeftClick=()=>{var e,s;this.disabledPrev||((s=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||s===void 0||s.slidePrev(),this.prevClicked.emit())},this.onRightClick=()=>{var e,s;this.disabledNext||((s=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||s===void 0||s.slideNext(),this.nextClicked.emit())}}async addPages(e){this.pages=this.pages.concat(...e),b(this)}async updateNovlsByIndex(e){this.pages=this.pages.map((s,n)=>e.has(n)?e.get(n):s),b(this)}async reset(){const e=this.swiperContainer.getElementsByClassName("swiper-slide-visible").length;this.progressUpdated.emit([0,e])}componentDidLoad(){var e,s,n,t;this.swiperContainer=this.el.shadowRoot.querySelector("swiper-container"),this.navigation&&(this.leftArrow=this.el.shadowRoot.querySelector("ur-button-arrow-left"),this.rightArrow=this.el.shadowRoot.querySelector("ur-button-arrow-right"),this.leftArrow.addEventListener("click",this.onLeftClick),this.rightArrow.addEventListener("click",this.onRightClick),(e=this.swiperContainer)===null||e===void 0||e.swiper.on("slideChange",this.onSlideChange)),(s=this.swiperContainer)===null||s===void 0||s.swiper.on("reachBeginning",()=>{this.disabledPrev=!0}),(n=this.swiperContainer)===null||n===void 0||n.swiper.on("reachEnd",()=>{this.disabledNext=!0}),(t=this.swiperContainer)===null||t===void 0||t.swiper.on("progress",(u,w)=>{const g=parseInt(Math.round(w*100).toFixed(0),10),h=u.slidesEl.getElementsByClassName("swiper-slide-visible").length;this.progressUpdated.emit([g,h])})}disconnectedCallback(){var e,s,n;this.destroyListeners&&((e=this.leftArrow)===null||e===void 0||e.removeEventListener("click",this.onLeftClick),(s=this.rightArrow)===null||s===void 0||s.removeEventListener("click",this.onRightClick),(n=this.swiperContainer)===null||n===void 0||n.swiper.destroy(!0,!0))}renderPage(e,s){return q(e)?i("swiper-slide",null,this.debug&&i("span",{class:"index"},s+1),i("div",{class:"custom",innerHTML:e.content(s)})):i("swiper-slide",null,this.debug&&i("span",{class:"index"},s+1),i("ur-page",Object.assign({},e)))}render(){return i(j,{key:"1cef66a2f993b29787923647fb1d6bd40a585c73"},i("div",{key:"8657ca1c5a081142a513c070e230abfe713afc3e",class:"carousel"},this.navigation&&i("ur-button-arrow-left",{key:"a30e6351426824d776f2556e249c775a309e6114",disabled:this.disabledPrev}),this.navigation&&i("ur-button-arrow-right",{key:"73bc9e72240d14aeb4113e6cae01f57b57a1dbe1",disabled:this.loading||this.disabledNext}),i("swiper-container",{key:"2e957bb5917c29863d6cef87ccde4bf57fbe721d",init:!0,observer:!0,"observe-slide-children":!0,"slides-per-group-auto":!0,"watch-slides-progress":!0,"breakpoint-base":"container",grid:this.grid,breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.pages.map((e,s)=>this.renderPage(e,s)))))}get el(){return this}static get style(){return z}};I(D,[1,"ur-page-carousel",{pages:[8],loading:[32],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"],navigation:[4],destroyListeners:[4,"destroy-listeners"],debug:[4],disabledPrev:[32],disabledNext:[32],addPages:[64],updateNovlsByIndex:[64],reset:[64]}]);const f={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrPageCarousel",tagName:"ur-page-carousel",customElement:!0,members:[{kind:"field",name:"pages",type:"any",description:"",default:"[]"},{kind:"field",name:"loading",type:"boolean",description:"",default:"false"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"},{kind:"field",name:"navigation",type:"boolean",description:"",default:"false"},{kind:"field",name:"destroyListeners",type:"boolean",description:"",default:"true"},{kind:"field",name:"debug",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"prevClicked",description:""},{kind:"event",name:"nextClicked",description:""},{kind:"event",name:"progressUpdated",description:""}]}],exports:[{kind:"js",name:"UrPageCarousel",declaration:{name:"UrPageCarousel",module:"src/components/ur-page-carousel/ur-page-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-page-carousel",declaration:{name:"UrPageCarousel",module:"src/components/ur-page-carousel/ur-page-carousel.tsx"}}]}]};H({...v()||{},...f,modules:[...(v()||{}).modules||[],...f.modules]});const p=({pages:e,breakpoints:s,grid:n,slidesPerView:t,spaceBetween:u,navigation:w=!1,slideWidth:g="100%",containerWidth:h="100%",containerPadding:$="20px",containerBackgroundColor:R="#efefef"})=>G`
    <style>
        ur-page-carousel {
            --swiper-slide-width: ${g};
        }
    </style>
    <div style="width: ${h}; box-sizing:border-box; background: ${R};margin: 0;padding: ${$};">
        <ur-page-carousel
            class="pages-carousel"
            .pages="${e}"
            .breakpoints="${s}"
            .grid="${n}"
            .navigation="${w}"
            slides-per-view="${t}"
            space-between="${u}"></ur-page-carousel>
        <button id="reset-carousel" onclick="reset()">reset</button>
    </div>
`,ce={title:"Urnovl/Business/PageCarousel",render:e=>p(e)},a={args:{pages:r,breakpoints:{},grid:{},slidesPerView:6,spaceBetween:8,containerWidth:"100%",containerBackgroundColor:"transparent"}},o={args:{pages:r.map((e,s)=>s===1||s===2?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:8,containerWidth:"700px",containerBackgroundColor:"transparent"}},d={render:e=>p(e),args:{pages:r,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:4,containerWidth:"100%",containerBackgroundColor:"transparent"}},l={render:e=>p(e),args:{pages:r,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}},c={render:e=>p(e),args:{pages:r.map((e,s)=>s===2?{content:n=>`<div>[ custom content goes here for index ${n} ]</div>`}:e),breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}};var P,k,B;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(B=(k=a.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var C,V,y;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(V=o.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var x,E,_;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(_=(E=d.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var S,A,L;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(A=l.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var W,N,U;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(U=(N=c.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const pe=["Default","TwoRowsGrid","SneakPeek","FullWithArrows","CustomSlide"];export{c as CustomSlide,a as Default,l as FullWithArrows,d as SneakPeek,o as TwoRowsGrid,pe as __namedExportsOrder,ce as default};
