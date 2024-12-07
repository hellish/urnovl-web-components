import{k as z}from"./entry-preview-BcHUnPw7.js";import"./ur-button-arrow-right-ZWdZDzMU.js";import{N as a}from"./ur-novl-DJze7fAa.js";import{s as I,g as h}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as q,H,c as v,h as s,a as D}from"./index-Dnt4yWMo.js";import"./index-DrFu-skq.js";import"./index-CTeXfnxQ.js";import"./get-D9DBDJjp.js";import"./class-map-DirLTUPi.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-ETGWZztw.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-Bt_5eb2T.js";import"./form-D6WTgxde.js";import"./ripple-mixin-Baxn-44g.js";import"./index-BXDV2pmF.js";const M=e=>e&&!!e.content&&typeof e.content=="function",T=":host{--swiper-slide-width:100%}:host{display:block;box-sizing:border-box;position:relative}:host .carousel{position:relative}:host swiper-slide{width:var(--swiper-slide-width)}:host ur-button-arrow-left,:host ur-button-arrow-right{position:absolute;top:calc(50% - 34px);left:-17px;z-index:2}:host ur-button-arrow-right{left:auto;right:-17px}@media (min-width: 0px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 321px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 640px){:host swiper-slide{width:calc(90% / 3)}}@media (min-width: 1150px){:host swiper-slide{width:calc(90% / 4)}}@media (min-width: 1770px){:host swiper-slide{width:calc(90% / 5)}}@media (min-width: 2140px){:host swiper-slide{width:calc(90% / 6)}}",$=class extends H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.intersectionUpdated=v(this,"intersectionUpdated",7),this.prevClicked=v(this,"prevClicked",7),this.nextClicked=v(this,"nextClicked",7),this.onIntersection=async e=>{this.intersectionUpdated.emit(e)},this.onSlideChange=()=>{var e,n,t,i,r,o;(e=this.leftArrow)===null||e===void 0||e.setAttribute("disabled",(t=(n=this.swiperContainer)===null||n===void 0?void 0:n.swiper)===null||t===void 0?void 0:t.isBeginning),(i=this.rightArrow)===null||i===void 0||i.setAttribute("disabled",(o=(r=this.swiperContainer)===null||r===void 0?void 0:r.swiper)===null||o===void 0?void 0:o.isEnd)},this.onLeftClick=()=>{var e,n;(n=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||n===void 0||n.slidePrev(),this.prevClicked.emit()},this.onRightClick=()=>{var e,n;(n=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||n===void 0||n.slideNext(),this.nextClicked.emit()},this.novls=[],this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0",this.navigation=!1}componentDidLoad(){var e;this.swiperContainer=this.el.shadowRoot.querySelector("swiper-container"),this.navigation&&(this.leftArrow=this.el.shadowRoot.querySelector("ur-button-arrow-left"),this.rightArrow=this.el.shadowRoot.querySelector("ur-button-arrow-right"),this.leftArrow.setAttribute("disabled","true"),this.rightArrow.setAttribute("disabled",`${this.novls.length===0}`),this.leftArrow.addEventListener("click",this.onLeftClick),this.rightArrow.addEventListener("click",this.onRightClick),(e=this.swiperContainer)===null||e===void 0||e.swiper.on("slideChange",this.onSlideChange));const n=this.el.shadowRoot.querySelectorAll("ur-novl");this.observer=new IntersectionObserver(this.onIntersection),n.forEach(t=>{this.observer.observe(t)})}disconnectedCallback(){var e,n,t;(e=this.leftArrow)===null||e===void 0||e.removeEventListener("click",this.onLeftClick),(n=this.rightArrow)===null||n===void 0||n.removeEventListener("click",this.onRightClick),(t=this.swiperContainer)===null||t===void 0||t.swiper.destroy(!0,!0),this.observer.disconnect()}render(){return s(D,{key:"5470d15f5b5f083508888101fcfbf65de8d58731"},s("div",{key:"fc9c697a9689aee96d68993b6a23a43e6a0e1de4",class:"carousel"},this.navigation&&s("ur-button-arrow-left",{key:"e1f3044cd26f526e68d7a44532d05c741120b6e3",disabled:!0}),this.navigation&&s("ur-button-arrow-right",{key:"b51ecc3d874d65095e6abff8e5f209922a73045c",disabled:!0}),s("swiper-container",{key:"35d2691be64e2ba47aa61d57b402495f58293c64","breakpoint-base":"container",grid:this.grid,breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.novls.map((e,n)=>M(e)?s("swiper-slide",null,s("div",{class:"custom",innerHTML:e.content(n)})):s("swiper-slide",null,s("ur-novl",Object.assign({},e)))))))}get el(){return this}static get style(){return T}};q($,[1,"ur-novl-carousel",{novls:[8],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"],navigation:[4]}]);const m={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlCarousel",tagName:"ur-novl-carousel",customElement:!0,members:[{kind:"field",name:"novls",type:"any",description:"",default:"[]"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"},{kind:"field",name:"navigation",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"intersectionUpdated",description:""},{kind:"event",name:"prevClicked",description:""},{kind:"event",name:"nextClicked",description:""}]}],exports:[{kind:"js",name:"UrNovlCarousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-novl-carousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}}]}]};I({...h()||{},...m,modules:[...(h()||{}).modules||[],...m.modules]});var g=Object.freeze,F=Object.defineProperty,G=(e,n)=>g(F(e,"raw",{value:g(e.slice())})),f;const w=({novls:e,breakpoints:n,grid:t,slidesPerView:i,spaceBetween:r,navigation:o=!1,slideWidth:O="100%",containerWidth:R="100%",containerPadding:U="20px",containerBackgroundColor:j="#efefef"})=>z(f||(f=G([`
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
`])),O,R,j,U,e,n,t,o,i,r),ue={title:"Urnovl/Business/NovlCarousel",render:e=>w(e)},l={args:{novls:a,breakpoints:{},grid:{},slidesPerView:6,spaceBetween:8,containerWidth:"100%",containerBackgroundColor:"transparent"}},d={args:{novls:a.map((e,n)=>n===1||n===2?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:8,containerWidth:"700px",containerBackgroundColor:"transparent"}},c={render:e=>w(e),args:{novls:a,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:4,containerWidth:"100%",containerBackgroundColor:"transparent"}},u={render:e=>w(e),args:{novls:a,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}},p={render:e=>w(e),args:{novls:a.map((e,n)=>n===2?{content:t=>`<div>[ custom content goes here for index ${t} ]</div>`}:e),breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}};var b,k,B;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(k=l.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var C,V,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(V=d.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var x,y,_;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(_=(y=c.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var N,S,A;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(A=(S=u.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var L,E,W;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(E=p.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const pe=["Default","TwoRowsGrid","SneakPeek","FullWithArrows","CustomSlide"];export{p as CustomSlide,l as Default,u as FullWithArrows,c as SneakPeek,d as TwoRowsGrid,pe as __namedExportsOrder,ue as default};
