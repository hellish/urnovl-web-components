import{k as U}from"./entry-preview-BcHUnPw7.js";import"./ur-button-arrow-right-kIN2HosT.js";import{N as l}from"./ur-novl-CkR2rjYT.js";import{s as L,g as c}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as R,H as j,c as z,h as r,a as q}from"./index-CLClakx-.js";import"./index-DrFu-skq.js";import"./index-Crv1S3Q_.js";import"./index-nIgcz_ss.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-BAH5M8si.js";import"./form-CmHWCLTt.js";const A=":host{--swiper-slide-width:100%}:host{display:block;box-sizing:border-box;position:relative}:host .carousel{position:relative}:host swiper-slide{width:var(--swiper-slide-width)}:host ur-button-arrow-left,:host ur-button-arrow-right{position:absolute;top:calc(50% - 34px);left:-17px;z-index:2}:host ur-button-arrow-right{left:auto;right:-17px}@media (min-width: 0px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 321px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 640px){:host swiper-slide{width:calc(90% / 3)}}@media (min-width: 1150px){:host swiper-slide{width:calc(90% / 4)}}@media (min-width: 1770px){:host swiper-slide{width:calc(90% / 5)}}@media (min-width: 2140px){:host swiper-slide{width:calc(90% / 6)}}",D=class extends j{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.intersectionUpdated=z(this,"intersectionUpdated",7),this.onIntersection=async e=>{this.intersectionUpdated.emit(e)},this.novls=[],this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0",this.navigation=!1}componentDidLoad(){const e=this.el.shadowRoot.querySelector("swiper-container");this.navigation&&(this.el.shadowRoot.querySelector("ur-button-arrow-left").addEventListener("click",()=>{var n;(n=e==null?void 0:e.swiper)===null||n===void 0||n.slidePrev()}),this.el.shadowRoot.querySelector("ur-button-arrow-right").addEventListener("click",()=>{var n;(n=e==null?void 0:e.swiper)===null||n===void 0||n.slideNext()}));const s=this.el.shadowRoot.querySelectorAll("ur-novl");this.observer=new IntersectionObserver(this.onIntersection),s.forEach(n=>{this.observer.observe(n)})}render(){return r(q,{key:"c9ab14334c124bdfba0b4697467c79f30070da7c"},r("div",{key:"954c4b9389218cc0952d580419e87bd65b1937d9",class:"carousel"},this.navigation&&r("ur-button-arrow-left",{key:"e1755e5c10a1156df10fee6741fe386dc86efbf1"}),this.navigation&&r("ur-button-arrow-right",{key:"5da36791653f723462a5c5c93dc8778dbbdc4f7a"}),r("swiper-container",{key:"a75d5b91decde52f6ace4f6f76795c9ca97cb2aa","breakpoint-base":"container",grid:this.grid,breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.novls.map(e=>r("swiper-slide",null,r("ur-novl",Object.assign({},e)))))))}get el(){return this}static get style(){return A}};R(D,[1,"ur-novl-carousel",{novls:[8],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"],navigation:[4]}]);const p={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlCarousel",tagName:"ur-novl-carousel",customElement:!0,members:[{kind:"field",name:"novls",type:"any",description:"",default:"[]"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"},{kind:"field",name:"navigation",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"intersectionUpdated",description:""}]}],exports:[{kind:"js",name:"UrNovlCarousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-novl-carousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}}]}]};L({...c()||{},...p,modules:[...(c()||{}).modules||[],...p.modules]});var u=Object.freeze,H=Object.defineProperty,I=(e,s)=>u(H(e,"raw",{value:u(e.slice())})),w;const d=({novls:e,breakpoints:s,grid:n,slidesPerView:C,spaceBetween:N,navigation:S=!1,slideWidth:_="100%",containerWidth:E="100%",containerPadding:W="20px",containerBackgroundColor:O="#efefef"})=>U(w||(w=I([`
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
`])),_,E,O,W,e,s,n,S,C,N),ne={title:"Urnovl/Business/NovlCarousel",render:e=>d(e)},t={args:{novls:l,breakpoints:{},grid:{},slidesPerView:6,spaceBetween:8,containerWidth:"100%",containerBackgroundColor:"transparent"}},i={args:{novls:l.map((e,s)=>s===1||s===6?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:8,containerWidth:"700px",containerBackgroundColor:"transparent"}},o={render:e=>d(e),args:{novls:l,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:4,containerWidth:"100%",containerBackgroundColor:"transparent"}},a={render:e=>d(e),args:{novls:l,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}};var m,v,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,g,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,B,V;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(V=(B=o.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var P,y,x;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const se=["Default","TwoRowsGrid","SneakPeek","FullWithArrows"];export{t as Default,a as FullWithArrows,o as SneakPeek,i as TwoRowsGrid,se as __namedExportsOrder,ne as default};
