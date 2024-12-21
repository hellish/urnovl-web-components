import{k as q}from"./entry-preview-BcHUnPw7.js";import{N as r}from"./ur-novl-DsMtTWEL.js";import"./ur-button-arrow-right-De6x6O-D.js";import{s as z,g}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as M,H as D,c as m,f,h as i,a as F}from"./index-B9J0OpMa.js";import"./index-DrFu-skq.js";import"./index-CTeXfnxQ.js";import"./get-D9DBDJjp.js";import"./class-map-DirLTUPi.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-ETGWZztw.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-Bt_5eb2T.js";import"./form-D6WTgxde.js";import"./ripple-mixin-Baxn-44g.js";import"./index-BXDV2pmF.js";const H=e=>e&&!!e.content&&typeof e.content=="function",T=":host{--swiper-slide-width:100%}:host{display:block;box-sizing:border-box;position:relative}:host .carousel{position:relative}:host .carousel swiper-slide{position:relative}:host .carousel .index{position:absolute;top:0;left:0;color:#fff;font-size:26px;background:red;border-radius:50%;width:50px;height:50px;display:flex;align-items:center;justify-content:center;z-index:5}:host swiper-slide{width:var(--swiper-slide-width)}:host ur-button-arrow-left,:host ur-button-arrow-right{position:absolute;top:calc(50% - 34px);left:-17px;z-index:2}:host ur-button-arrow-right{left:auto;right:-17px}@media (min-width: 0px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 321px){:host swiper-slide{width:calc(90% / 2)}}@media (min-width: 640px){:host swiper-slide{width:calc(90% / 3)}}@media (min-width: 1150px){:host swiper-slide{width:calc(90% / 4)}}@media (min-width: 1770px){:host swiper-slide{width:calc(90% / 5)}}@media (min-width: 2140px){:host swiper-slide{width:calc(90% / 6)}}",G=class extends D{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.prevClicked=m(this,"prevClicked",7),this.nextClicked=m(this,"nextClicked",7),this.progressUpdated=m(this,"progressUpdated",7),this.onSlideChange=()=>{var e,n,s,t;this.disabledPrev=(n=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||n===void 0?void 0:n.isBeginning,this.disabledNext=(t=(s=this.swiperContainer)===null||s===void 0?void 0:s.swiper)===null||t===void 0?void 0:t.isEnd},this.onLeftClick=()=>{var e,n;this.disabledPrev||((n=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||n===void 0||n.slidePrev(),this.prevClicked.emit())},this.onRightClick=()=>{var e,n;this.disabledNext||((n=(e=this.swiperContainer)===null||e===void 0?void 0:e.swiper)===null||n===void 0||n.slideNext(),this.nextClicked.emit())},this.novls=[],this.loading=!1,this.disabledPrev=!0,this.disabledNext=!1,this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0",this.navigation=!1}async addNovls(e){console.log(">> add novls",e),this.novls=this.novls.concat(...e),f(this)}async updateNovlsByIndex(e){console.log(">> update novls",e),this.novls=this.novls.map((n,s)=>e.has(s)?e.get(s):n),f(this)}componentDidLoad(){var e,n,s,t;this.swiperContainer=this.el.shadowRoot.querySelector("swiper-container"),this.navigation&&(this.leftArrow=this.el.shadowRoot.querySelector("ur-button-arrow-left"),this.rightArrow=this.el.shadowRoot.querySelector("ur-button-arrow-right"),this.leftArrow.addEventListener("click",this.onLeftClick),this.rightArrow.addEventListener("click",this.onRightClick),(e=this.swiperContainer)===null||e===void 0||e.swiper.on("slideChange",this.onSlideChange)),(n=this.swiperContainer)===null||n===void 0||n.swiper.on("reachBeginning",()=>{this.disabledPrev=!0}),(s=this.swiperContainer)===null||s===void 0||s.swiper.on("reachEnd",()=>{this.disabledNext=!0}),(t=this.swiperContainer)===null||t===void 0||t.swiper.on("progress",(p,w)=>{const v=parseInt(Math.round(w*100).toFixed(0),10),h=p.slidesEl.getElementsByClassName("swiper-slide-visible").length;this.progressUpdated.emit([v,h])})}disconnectedCallback(){var e,n,s;(e=this.leftArrow)===null||e===void 0||e.removeEventListener("click",this.onLeftClick),(n=this.rightArrow)===null||n===void 0||n.removeEventListener("click",this.onRightClick),(s=this.swiperContainer)===null||s===void 0||s.swiper.destroy(!0,!0)}renderNovl(e,n){return H(e)?i("swiper-slide",null,i("span",{class:"index"},n+1),i("div",{class:"custom",innerHTML:e.content(n)})):i("swiper-slide",null,i("span",{class:"index"},n+1),i("ur-novl",Object.assign({},e)))}render(){return i(F,{key:"b397417e45dc9bd1035633059d0db7e0309e2ab1"},i("div",{key:"09b1ec325f5cdcd308baad555668f32b94f8ff65",class:"carousel"},this.navigation&&i("ur-button-arrow-left",{key:"4d046e3b51f4cf8321c3dcf558e365cb90889886",disabled:this.disabledPrev}),this.navigation&&i("ur-button-arrow-right",{key:"0159c0f1c2defb34202e2a7e380547a667d1b4a6",disabled:this.loading||this.disabledNext}),i("swiper-container",{key:"109e8454765fa458cb7cc0b46d54642be807ebee",init:!0,observer:!0,"observe-slide-children":!0,"slides-per-group-auto":!0,"watch-slides-progress":!0,"breakpoint-base":"container",grid:this.grid,breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.novls.map((e,n)=>this.renderNovl(e,n)))))}get el(){return this}static get style(){return T}};M(G,[1,"ur-novl-carousel",{novls:[8],loading:[32],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"],navigation:[4],disabledPrev:[32],disabledNext:[32],addNovls:[64],updateNovlsByIndex:[64]}]);const b={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlCarousel",tagName:"ur-novl-carousel",customElement:!0,members:[{kind:"field",name:"novls",type:"any",description:"",default:"[]"},{kind:"field",name:"loading",type:"boolean",description:"",default:"false"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"},{kind:"field",name:"navigation",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"prevClicked",description:""},{kind:"event",name:"nextClicked",description:""},{kind:"event",name:"progressUpdated",description:""}]}],exports:[{kind:"js",name:"UrNovlCarousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-novl-carousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}}]}]};z({...g()||{},...b,modules:[...(g()||{}).modules||[],...b.modules]});var _=Object.freeze,$=Object.defineProperty,J=(e,n)=>_($(e,"raw",{value:_(e.slice())})),k;const u=({novls:e,breakpoints:n,grid:s,slidesPerView:t,spaceBetween:p,navigation:w=!1,slideWidth:v="100%",containerWidth:h="100%",containerPadding:j="20px",containerBackgroundColor:A="#efefef"})=>q(k||(k=J([`
    <script>
        let _novls_ = `,`;

        function uniq(arr, n) {
            if (n > arr.length) {
                throw new Error("The number of elements to select cannot exceed the array length.");
            }

            // Shuffle the array using the Fisher-Yates shuffle algorithm
            let shuffled = arr.slice(); // Create a copy of the array
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
            }

            // Return the first n elements from the shuffled array
            return shuffled.slice(0, n);
        }

        for (const item of document.getElementsByClassName('novls-carousel')) {
            item.once = false;

            item.addEventListener('progressUpdated', (event) => {
                if (item.once) {
                    return;
                }

                const [progress, slides] = event.detail;

                console.log('progress:updated', progress, slides);

                if (progress > 80) {
                    item.once = true;
                    const newNovls = uniq(_novls_, slides).map(_novl_ => {
                        let uuid = crypto.randomUUID();
                        return { ..._novl_, novlId: uuid };
                    });
                    item.addNovls( newNovls );
                    console.log('new novls added', newNovls);
                }
            })

            item.addEventListener('snapIndexChange', (event) => {
                // console.log('snapIndexChange', event);
            })

            item.addEventListener('slideChange', (event) => {
                // const [beg, end, viewportNovlCount] = event.detail;
                // console.log('slideChange', beg, end, viewportNovlCount, uniq(_novls_, viewportNovlCount));
            })

            item.addEventListener('novlClicked', (event) => {
                console.log('novl clicked', event.detail);
                const _novl_index_ = _novls_.findIndex(_novl_ => _novl_.novlId === event.detail);
                const _novl_ = _novls_[_novl_index_];
                if (_novl_.loading) {
                    while(true) {
                        let _new_novl_ = uniq(_novls_, 1).pop();
                        if (!_new_novl_.loading) {
                            item.updateNovlsByIndex( new Map( [ [_novl_index_, _new_novl_] ] ) );
                            _novls_[_novl_index_] = _new_novl_;
                            break;
                        }
                    }
                }
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
`])),JSON.stringify(r),v,h,A,j,e,n,s,w,t,p),pe={title:"Urnovl/Business/NovlCarousel",render:e=>u(e)},o={args:{novls:r,breakpoints:{},grid:{},slidesPerView:6,spaceBetween:8,containerWidth:"100%",containerBackgroundColor:"transparent"}},a={args:{novls:r.map((e,n)=>n===1||n===2?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:8,containerWidth:"700px",containerBackgroundColor:"transparent"}},l={render:e=>u(e),args:{novls:r,breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:4,containerWidth:"100%",containerBackgroundColor:"transparent"}},d={render:e=>u(e),args:{navigation:!0,novls:r.slice(0,7),breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},containerWidth:"100%",containerBackgroundColor:"transparent"}},c={render:e=>u(e),args:{novls:r.map((e,n)=>n===2?{content:s=>`<div>[ custom content goes here for index ${s} ]</div>`}:e),breakpoints:{2075:{slidesPerView:"auto",spaceBetween:8},1700:{slidesPerView:"auto",spaceBetween:8},1420:{slidesPerView:"auto",spaceBetween:8},1090:{slidesPerView:"auto",spaceBetween:8},321:{slidesPerView:"auto",spaceBetween:4},0:{slidesPerView:"auto",spaceBetween:4}},grid:{rows:1,fill:"row"},navigation:!0,containerWidth:"100%",containerBackgroundColor:"transparent"}};var C,B,x;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(B=o.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var P,V,y;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(y=(V=a.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var N,S,E;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(E=(S=l.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var L,U,W;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => NovlCarousel(args),
  args: {
    navigation: true,
    novls: NOVLS.slice(0, 7),
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
}`,...(W=(U=d.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var R,I,O;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const we=["Default","TwoRowsGrid","SneakPeek","FullWithArrows","CustomSlide"];export{c as CustomSlide,o as Default,d as FullWithArrows,l as SneakPeek,a as TwoRowsGrid,we as __namedExportsOrder,pe as default};
