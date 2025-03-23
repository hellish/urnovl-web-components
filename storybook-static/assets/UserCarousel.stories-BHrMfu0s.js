import{k as O}from"./entry-preview-BcHUnPw7.js";import"./ur-button-arrow-right-BeY2bVGB.js";import{U as a}from"./ur-user-CfssYesd.js";import{s as q,g as m}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as H,H as D,c as h,h as r,a as M}from"./index-BJvbtjhH.js";import"./index-DrFu-skq.js";import"./index-rXz1tEXk.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-DxLrUPRs.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-C8TuHONp.js";import"./form-DhDC-phE.js";import"./index-CXOzFcj5.js";import"./index-pqI9kxak.js";import"./ur-button-BJRNfVIe.js";import"./index-BRY6Z_ZR.js";const N=e=>e&&!!e.content&&typeof e.content=="function",T=":host{--swiper-slide-width:100%}:host{display:block;box-sizing:border-box;position:relative}:host .carousel{position:relative}:host swiper-slide{width:var(--swiper-slide-width)}:host ur-button-arrow-left,:host ur-button-arrow-right{position:absolute;top:calc(50% - 34px);left:-17px;z-index:2}:host ur-button-arrow-right{left:auto;right:-17px}@media (min-width: 0px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 321px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 640px){:host swiper-slide{width:calc(90% / 3)}}@media (min-width: 1150px){:host swiper-slide{width:calc(90% / 4)}}@media (min-width: 1770px){:host swiper-slide{width:calc(90% / 5)}}@media (min-width: 2140px){:host swiper-slide{width:calc(90% / 6)}}",$=class extends D{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.intersectionUpdated=h(this,"intersectionUpdated",7),this.prevClicked=h(this,"prevClicked",7),this.nextClicked=h(this,"nextClicked",7),this.users=[],this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0",this.navigation=!1,this.onIntersection=async e=>{this.intersectionUpdated.emit(e)},this.onSlideChange=()=>{var e,s,n,t,i,o;(e=this.leftArrow)===null||e===void 0||e.setAttribute("disabled",(n=(s=this.swiperContainer)===null||s===void 0?void 0:s.swiper)===null||n===void 0?void 0:n.isBeginning),(t=this.rightArrow)===null||t===void 0||t.setAttribute("disabled",(o=(i=this.swiperContainer)===null||i===void 0?void 0:i.swiper)===null||o===void 0?void 0:o.isEnd)},this.onLeftClick=()=>{var e,s;(s=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||s===void 0||s.slidePrev(),this.prevClicked.emit()},this.onRightClick=()=>{var e,s;(s=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||s===void 0||s.slideNext(),this.nextClicked.emit()}}componentDidLoad(){var e;this.swiperContainer=this.el.shadowRoot.querySelector("swiper-container"),this.navigation&&(this.leftArrow=this.el.shadowRoot.querySelector("ur-button-arrow-left"),this.rightArrow=this.el.shadowRoot.querySelector("ur-button-arrow-right"),this.leftArrow.setAttribute("disabled","true"),this.rightArrow.setAttribute("disabled",`${this.users.length===0}`),this.leftArrow.addEventListener("click",this.onLeftClick),this.rightArrow.addEventListener("click",this.onRightClick),(e=this.swiperContainer)===null||e===void 0||e.swiper.on("slideChange",this.onSlideChange));const s=this.el.shadowRoot.querySelectorAll("ur-user");this.observer=new IntersectionObserver(this.onIntersection),s.forEach(n=>{this.observer.observe(n)})}disconnectedCallback(){var e,s,n;(e=this.leftArrow)===null||e===void 0||e.removeEventListener("click",this.onLeftClick),(s=this.rightArrow)===null||s===void 0||s.removeEventListener("click",this.onRightClick),(n=this.swiperContainer)===null||n===void 0||n.swiper.destroy(!0,!0),this.observer.disconnect()}render(){return r(M,{key:"2d03fb8e2ebbe67278f11602c2a3abfcf2de994f"},r("div",{key:"d938d5694ff41c16935943e43c78f95781670d1a",class:"carousel"},this.navigation&&r("ur-button-arrow-left",{key:"4c3c06d587af4f6699a1e65fcb6207ee122d58b9",disabled:!0}),this.navigation&&r("ur-button-arrow-right",{key:"96fe542620ad64645605689b96a60aa982b9511c",disabled:!0}),r("swiper-container",{key:"491fff53c07adb06318ec3c449f6f2f1e2193bcd","breakpoint-base":"container",grid:this.grid,breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.users.map((e,s)=>N(e)?r("swiper-slide",null,r("div",{class:"custom",innerHTML:e.content(s)})):r("swiper-slide",null,r("ur-user",Object.assign({},e)))))))}get el(){return this}static get style(){return T}};H($,[1,"ur-user-carousel",{users:[8],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"],navigation:[4]}]);const g={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrUserCarousel",tagName:"ur-user-carousel",customElement:!0,members:[{kind:"field",name:"users",type:"any",description:"",default:"[]"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"},{kind:"field",name:"navigation",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"intersectionUpdated",description:""},{kind:"event",name:"prevClicked",description:""},{kind:"event",name:"nextClicked",description:""}]}],exports:[{kind:"js",name:"UrUserCarousel",declaration:{name:"UrUserCarousel",module:"src/components/ur-user-carousel/ur-user-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-user-carousel",declaration:{name:"UrUserCarousel",module:"src/components/ur-user-carousel/ur-user-carousel.tsx"}}]}]};q({...m()||{},...g,modules:[...(m()||{}).modules||[],...g.modules]});var f=Object.freeze,F=Object.defineProperty,G=(e,s)=>f(F(e,"raw",{value:f(e.slice())})),v;const w=({users:e,breakpoints:s,grid:n,slidesPerView:t,spaceBetween:i,navigation:o=!1,slideWidth:L="100%",containerWidth:j="100%",containerPadding:z="20px",containerBackgroundColor:I="#efefef"})=>O(v||(v=G([`
    <script>
        for (const item of document.getElementsByClassName('user-carousel')) {
            item.addEventListener('userClicked', (event) => {
                alert('user clicked with id ' + event.detail);
            })
        }
    <\/script>
    <style>
        ur-user-carousel {
            --swiper-slide-width: `,`;
        }
    </style>
    <div style="width: `,"; box-sizing:border-box; background: ",";margin: 0;padding: ",`;">
        <ur-user-carousel
            class="users-carousel"
            .users="`,`"
            .breakpoints="`,`"
            .grid="`,`"
            .navigation="`,`"
            slides-per-view="`,`"
            space-between="`,`"></ur-user-carousel>
    </div>
`])),L,j,I,z,e,s,n,o,t,i),we={title:"Urnovl/Business/UserCarousel",render:e=>w(e)},d={args:{users:a,breakpoints:{},grid:{},slidesPerView:6,spaceBetween:8,containerWidth:"100%",containerBackgroundColor:"transparent"}},l={args:{users:a.map((e,s)=>s===1||s===2?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:8,containerWidth:"700px",containerBackgroundColor:"transparent"}},c={render:e=>w(e),args:{users:a,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:4,containerWidth:"100%",containerBackgroundColor:"transparent"}},u={render:e=>w(e),args:{users:a,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}},p={render:e=>w(e),args:{users:a.map((e,s)=>s===2?{content:n=>`<div>[ custom content goes here for index ${n} ]</div>`}:e),breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}};var b,k,B;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    users: USERS,
    breakpoints: {},
    grid: {},
    slidesPerView: 6,
    spaceBetween: 8,
    // container styles
    containerWidth: '100%',
    containerBackgroundColor: 'transparent'
  }
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var C,P,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    users: USERS.map((user, index) => {
      if (index === 1 || index === 2) {
        return {
          ...user,
          borderRadius: '0'
        };
      }
      return {
        ...user
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
}`,...(V=(P=l.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var x,y,_;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => UserCarousel(args),
  args: {
    users: USERS,
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
}`,...(_=(y=c.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var U,S,E;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => UserCarousel(args),
  args: {
    users: USERS,
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
}`,...(E=(S=u.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var A,R,W;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => UserCarousel(args),
  args: {
    users: USERS.map((user, index) => {
      if (index === 2) {
        return {
          content: userIndex => {
            return \`<div>[ custom content goes here for index \${userIndex} ]</div>\`;
          }
        };
      }
      return user;
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
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const he=["Default","TwoRowsGrid","SneakPeek","FullWithArrows","CustomSlide"];export{p as CustomSlide,d as Default,u as FullWithArrows,c as SneakPeek,l as TwoRowsGrid,he as __namedExportsOrder,we as default};
