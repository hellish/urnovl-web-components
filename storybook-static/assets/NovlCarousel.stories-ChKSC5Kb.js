import{k as W}from"./lit-element-CsPioU85.js";import{d as B,H as O,h as r,a as _,N as a}from"./ur-novl-D7_qNNys.js";import{s as $,g as d}from"./chunk-GKNNPQCW-BkHQSocK.js";const E=":host{--swiper-slide-width:100%}:host{display:block;box-sizing:border-box}:host swiper-slide{width:var(--swiper-slide-width)}",U=class extends O{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.novls=[],this.breakpoints={},this.grid={rows:1,fill:"row"},this.slidesPerView="auto",this.spaceBetween="0"}render(){return r(_,{key:"ac4cd079072f078f9a622229910b9ffcfd53227e"},r("swiper-container",{key:"3176021d7026f838018323105fbf163e4817ff3e",grid:this.grid,"breakpoint-base":"container",breakpoints:this.breakpoints,"slides-per-view":this.slidesPerView,"space-between":this.spaceBetween},this.novls.map(e=>r("swiper-slide",null,r("ur-novl",Object.assign({},e))))))}static get style(){return E}};B(U,[1,"ur-novl-carousel",{novls:[8],breakpoints:[8],grid:[8],slidesPerView:[8,"slides-per-view"],spaceBetween:[8,"space-between"]}]);const c={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlCarousel",tagName:"ur-novl-carousel",customElement:!0,members:[{kind:"field",name:"novls",type:"any",description:"",default:"[]"},{kind:"field",name:"breakpoints",type:"any",description:"",default:`{
        // add default
    }`},{kind:"field",name:"grid",type:"any",description:"",default:`{
        rows: 1,
        fill: 'row'
    }`},{kind:"field",name:"slidesPerView",type:"any",description:"",default:"'auto'"},{kind:"field",name:"spaceBetween",type:"any",description:"",default:"'0'"}],events:[]}],exports:[{kind:"js",name:"UrNovlCarousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}},{kind:"custom-element-definition",name:"ur-novl-carousel",declaration:{name:"UrNovlCarousel",module:"src/components/ur-novl-carousel/ur-novl-carousel.tsx"}}]}]};$({...d()||{},...c,modules:[...(d()||{}).modules||[],...c.modules]});const l=({novls:e,breakpoints:s,grid:N,slidesPerView:V,spaceBetween:P,slideWidth:S="100%",containerWidth:C="100%"})=>W`
    <style>
        ur-novl-carousel {
            --swiper-slide-width: ${S};
        }
    </style>
    <div style="width: ${C}; box-sizing:border-box; background: #efefef;margin: 0;padding: 20px;">
        <ur-novl-carousel
            .novls="${e}"
            .breakpoints="${s}"
            .grid="${N}"
            slides-per-view="${V}"
            space-between="${P}"></ur-novl-carousel>
    </div>
`,H={title:"Urnovl/NovlCarousel",render:e=>l(e)},n={args:{novls:a,breakpoints:{},grid:{},slidesPerView:1,spaceBetween:10,containerWidth:"700px"}},o={args:{novls:a.map((e,s)=>s===1||s===6?{...e,borderRadius:"0"}:{...e}),breakpoints:{},grid:{rows:2,fill:"row"},slidesPerView:3,spaceBetween:10,containerWidth:"700px"}},i={render:e=>l(e),args:{novls:a,breakpoints:{},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:10,slideWidth:"80%",containerWidth:"700px"}},t={render:e=>l(e),args:{novls:a,breakpoints:{},grid:{rows:1,fill:"row"},slidesPerView:"auto",spaceBetween:10,slideWidth:"250px",containerWidth:"700px"}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    novls: NOVLS,
    breakpoints: {},
    grid: {},
    slidesPerView: 1,
    spaceBetween: 10,
    // container styles
    containerWidth: '700px'
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var w,v,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    spaceBetween: 10,
    // container styles
    containerWidth: '700px'
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var g,h,k;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => NovlCarousel(args),
  args: {
    novls: NOVLS,
    breakpoints: {},
    grid: {
      rows: 1,
      fill: 'row'
    },
    slidesPerView: 'auto',
    spaceBetween: 10,
    // container styles
    slideWidth: '80%',
    containerWidth: '700px'
  }
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var b,x,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => NovlCarousel(args),
  args: {
    novls: NOVLS,
    breakpoints: {},
    grid: {
      rows: 1,
      fill: 'row'
    },
    slidesPerView: 'auto',
    spaceBetween: 10,
    // container styles
    slideWidth: '250px',
    containerWidth: '700px'
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const z=["Default","TwoRowsGrid","SneakPeek","SneakPeekWithSmallerNovl"];export{n as Default,i as SneakPeek,t as SneakPeekWithSmallerNovl,o as TwoRowsGrid,z as __namedExportsOrder,H as default};
