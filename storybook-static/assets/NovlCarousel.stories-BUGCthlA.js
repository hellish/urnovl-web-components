import{x as O}from"./entry-preview-CxXhOGqP.js";import{N as r}from"./ur-novl-BTc8NAtu.js";import"./ur-button-arrow-right-BsUqGCsT.js";import{s as z,g}from"./chunk-L4EGOTBX-BPj2F1fn.js";import{d as j,H,c as m,f,h as i,a as I}from"./index-Bdp-Mrn6.js";import"./index-DrFu-skq.js";import"./index-CFISRIGu.js";import"./class-map-CvfWHz58.js";import"./get-DCsNyb8P.js";import"./watch-ByvFYHv8.js";import"./template-DbMQw6l-.js";import"./button-base--7WXG1Vh.js";import"./if-defined-D52-l-pg.js";import"./anchor-BJ52fAYX.js";import"./form-CWZnyZ12.js";import"./index-rsUJIYwf.js";import"./index-pr7ns5cs.js";const M=e=>e&&!!e.content&&typeof e.content=="function",q=":host{--swiper-slide-width:100%}:host{display:block;box-sizing:border-box;position:relative}:host .carousel{position:relative}:host .carousel swiper-slide{position:relative}:host .carousel .index{position:absolute;top:0;left:0;color:#fff;font-size:26px;background:red;border-radius:50%;width:50px;height:50px;display:flex;align-items:center;justify-content:center;z-index:5}:host swiper-slide{width:var(--swiper-slide-width)}:host ur-button-arrow-left,:host ur-button-arrow-right{position:absolute;top:calc(50% - 34px);left:-17px;z-index:2}:host ur-button-arrow-right{left:auto;right:-17px}@media (min-width: 0px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 321px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 640px){:host swiper-slide{width:calc(90% / 3)}}@media (min-width: 1150px){:host swiper-slide{width:calc(90% / 4)}}@media (min-width: 1770px){:host swiper-slide{width:calc(90% / 5)}}@media (min-width: 2140px){:host swiper-slide{width:calc(90% / 6)}}",D=class extends H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.prevClicked=m(this,"prevClicked",7),this.nextClicked=m(this,"nextClicked",7),this.progressUpdated=m(this,"progressUpdated",7),this.novls=[],this.loading=!1,this.disabledPrev=!0,this.disabledNext=!1,this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0",this.navigation=!1,this.destroyListeners=!0,this.debug=!1,this.onSlideChange=()=>{var e,s,n,t;this.disabledPrev=(s=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||s===void 0?void 0:s.isBeginning,this.disabledNext=(t=(n=this.swiperContainer)===null||n===void 0?void 0:n.swiper)===null||t===void 0?void 0:t.isEnd},this.onLeftClick=()=>{var e,s;this.disabledPrev||((s=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||s===void 0||s.slidePrev(),this.prevClicked.emit())},this.onRightClick=()=>{var e,s;this.disabledNext||((s=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||s===void 0||s.slideNext(),this.nextClicked.emit())}}async addNovls(e){this.novls=this.novls.concat(...e),f(this)}async updateNovlsByIndex(e){this.novls=this.novls.map((s,n)=>e.has(n)?e.get(n):s),f(this)}async reset(){const e=this.swiperContainer.getElementsByClassName("swiper-slide-visible").length;this.progressUpdated.emit([0,e])}componentDidLoad(){var e,s,n,t;this.swiperContainer=this.el.shadowRoot.querySelector("swiper-container"),this.navigation&&(this.leftArrow=this.el.shadowRoot.querySelector("ur-button-arrow-left"),this.rightArrow=this.el.shadowRoot.querySelector("ur-button-arrow-right"),this.leftArrow.addEventListener("click",this.onLeftClick),this.rightArrow.addEventListener("click",this.onRightClick),(e=this.swiperContainer)===null||e===void 0||e.swiper.on("slideChange",this.onSlideChange)),(s=this.swiperContainer)===null||s===void 0||s.swiper.on("reachBeginning",()=>{this.disabledPrev=!0}),(n=this.swiperContainer)===null||n===void 0||n.swiper.on("reachEnd",()=>{this.disabledNext=!0}),(t=this.swiperContainer)===null||t===void 0||t.swiper.on("progress",(u,w)=>{const h=parseInt(Math.round(w*100).toFixed(0),10),v=u.slidesEl.getElementsByClassName("swiper-slide-visible").length;this.progressUpdated.emit([h,v])})}disconnectedCallback(){var e,s,n;this.destroyListeners&&((e=this.leftArrow)===null||e===void 0||e.removeEventListener("click",this.onLeftClick),(s=this.rightArrow)===null||s===void 0||s.removeEventListener("click",this.onRightClick),(n=this.swiperContainer)===null||n===void 0||n.swiper.destroy(!0,!0))}renderNovl(e,s){return M(e)?i("swiper-slide",null,this.debug&&i("span",{class:"index"},s+1),i("div",{class:"custom",innerHTML:e.content(s)})):i("swiper-slide",null,this.debug&&i("span",{class:"index"},s+1),i("ur-novl",Object.assign({},e)))}render(){return i(I,{key:"c9b18f3573650b0ba48f9463dd05dfdb7225a95d"},i("div",{key:"c5f561428fcb17c991eeb7cd0750c049b87971cf",class:"carousel"},this.navigation&&i("ur-button-arrow-left",{key:"6838977461eb5abc876add3961058f482084fefa",disabled:this.disabledPrev}),this.navigation&&i("ur-button-arrow-right",{key:"0af65a7cfb1806fa56ae0ab949507a370b7fe9f0",disabled:this.loading||this.disabledNext}),i("swiper-container",{key:"d743135f18d2c6774dd49ca667da3c095c977829",init:!0,observer:!0,"observe-slide-children":!0,"slides-per-group-auto":!0,"watch-slides-progress":!0,"breakpoint-base":"container",grid:this.grid,breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.novls.map((e,s)=>this.renderNovl(e,s)))))}get el(){return this}static get style(){return q}};j(D,[1,"ur-novl-carousel",{novls:[8],loading:[32],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"],navigation:[4],destroyListeners:[4,"destroy-listeners"],debug:[4],disabledPrev:[32],disabledNext:[32],addNovls:[64],updateNovlsByIndex:[64],reset:[64]}]);const b={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlCarousel",tagName:"ur-novl-carousel",customElement:!0,members:[{kind:"field",name:"novls",type:"any",description:"",default:"[]"},{kind:"field",name:"loading",type:"boolean",description:"",default:"false"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"},{kind:"field",name:"navigation",type:"boolean",description:"",default:"false"},{kind:"field",name:"destroyListeners",type:"boolean",description:"",default:"true"},{kind:"field",name:"debug",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"prevClicked",description:""},{kind:"event",name:"nextClicked",description:""},{kind:"event",name:"progressUpdated",description:""}]}],exports:[{kind:"js",name:"UrNovlCarousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-novl-carousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}}]}]};z({...g()||{},...b,modules:[...(g()||{}).modules||[],...b.modules]});const p=({novls:e,breakpoints:s,grid:n,slidesPerView:t,spaceBetween:u,navigation:w=!1,slideWidth:h="100%",containerWidth:v="100%",containerPadding:R="20px",containerBackgroundColor:A="#efefef"})=>O`
    <style>
        ur-novl-carousel {
            --swiper-slide-width: ${h};
        }
    </style>
    <div style="width: ${v}; box-sizing:border-box; background: ${A};margin: 0;padding: ${R};">
        <ur-novl-carousel
            class="novls-carousel"
            .novls="${e}"
            .breakpoints="${s}"
            .grid="${n}"
            .navigation="${w}"
            slides-per-view="${t}"
            space-between="${u}"></ur-novl-carousel>
    </div>
`,de={title:"Urnovl/Business/NovlCarousel",render:e=>p(e)},o={args:{novls:r,breakpoints:{},grid:{},slidesPerView:6,spaceBetween:8,containerWidth:"100%",containerBackgroundColor:"transparent"}},a={args:{novls:r.map((e,s)=>s===1||s===2?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:8,containerWidth:"700px",containerBackgroundColor:"transparent"}},d={render:e=>p(e),args:{novls:r,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:4,containerWidth:"100%",containerBackgroundColor:"transparent"}},l={render:e=>p(e),args:{navigation:!0,novls:r,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},containerWidth:"100%",containerBackgroundColor:"transparent"}},c={render:e=>p(e),args:{novls:r.map((e,s)=>s===2?{content:n=>`<div>[ custom content goes here for index ${n} ]</div>`}:e),breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}};var k,B,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(C=(B=o.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var P,V,x;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    novls: NOVLS.map((novl, index) => {
      if (index === 1 || index === 2) {
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
}`,...(x=(V=a.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var y,N,_;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(_=(N=d.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var S,L,E;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => NovlCarousel(args),
  args: {
    navigation: true,
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
    // container styles
    containerWidth: '100%',
    containerBackgroundColor: 'transparent'
  }
}`,...(E=(L=l.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var W,U,$;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(U=c.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const le=["Default","TwoRowsGrid","SneakPeek","FullWithArrows","CustomSlide"];export{c as CustomSlide,o as Default,l as FullWithArrows,d as SneakPeek,a as TwoRowsGrid,le as __namedExportsOrder,de as default};
