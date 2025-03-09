import{k as Y}from"./entry-preview-BcHUnPw7.js";import"./ur-button-CKpOEDy7.js";import{s as F,g}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as V,H as q,c as K,h as o,a as Q}from"./index-BJvbtjhH.js";import"./index-DrFu-skq.js";import"./index-BRY6Z_ZR.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./template-yncBVCyc.js";import"./index-CXOzFcj5.js";import"./button-base-DxLrUPRs.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-C8TuHONp.js";import"./form-DhDC-phE.js";import"./index-pqI9kxak.js";const X=":host{display:block;width:100%;height:calc(100vw / 3);min-height:200px;position:relative;max-height:300px;border-radius:12px;overflow:hidden;container-type:inline-size;container-name:hero-container;}:host .hero-container{height:100%;width:100%;display:flex;align-items:center;justify-content:center;background-size:cover;background-repeat:no-repeat;background-size:auto 100%}:host .overlay{position:absolute;inset:0;background:var(--ur-hero-overlay-color, rgba(0, 0, 0, 0.5));display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;text-align:center;color:white}:host .hero-title{font-size:34px;margin:0.5rem 0}:host .hero-subtitle{font-size:18px;line-height:1rem;margin:0.5rem 0}:host(.small-hero) .hero-title{font-size:1.25rem}:host(.small-hero) .hero-subtitle{font-size:0.75rem}:host(.medium-hero) .hero-title{font-size:1.5rem}:host(.medium-hero) .hero-subtitle{font-size:0.875rem}:host(.large-hero) .hero-title{font-size:2rem}:host(.large-hero) .hero-subtitle{font-size:1rem}:host .cta-button{display:flex;align-items:center;justify-content:center;padding:0.5rem 1rem;font-size:1rem;color:white;background:var(--ur-button-background, #007bff);border:none;border-radius:5px;cursor:pointer}:host .cta-button mat-icon{margin-right:0.5rem}:host .layout-left .overlay{align-items:flex-start;text-align:left}:host .layout-right .overlay{align-items:flex-end;text-align:right}:host .layout-center .overlay{align-items:center;text-align:center}:host .background-top{background-position:top}:host .background-center{background-position:center}:host .background-bottom{background-position:bottom}:host .align-left{background-position-x:left}:host .align-center{background-position-x:center}:host .align-right{background-position-x:right}",Z=class extends q{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.ctaClicked=K(this,"ctaClicked",7),this.backgroundColor="rgba(0, 0, 0, 0.5)",this.layout="center",this.backgroundJustification="center",this.backgroundAlignment="center",this.heroTitleColor="#fff",this.heroSubtitleColor="#ccc",this.widthClass="large-hero",this.handleCtaClick=()=>{this.ctaClicked.emit()}}updateWidthClass(e){e<=480?this.widthClass="small-hero":e<=768?this.widthClass="medium-hero":this.widthClass="large-hero"}componentDidLoad(){this.resizeObserver=new ResizeObserver(e=>{for(const G of e){const P=G.contentRect.width;this.updateWidthClass(P)}}),this.resizeObserver.observe(this.el)}disconnectedCallback(){this.resizeObserver.disconnect()}render(){return o(Q,{key:"5b32a631c00b757a0e058b99959815fe200a5b6e",class:this.widthClass},o("div",{key:"73348c917c0fcbade4f708365eda3f539c75ddd2",class:{"hero-container":!0,[`layout-${this.layout}`]:!0,[`background-${this.backgroundJustification}`]:!0,[`align-${this.backgroundAlignment}`]:!0},style:{backgroundImage:`url(${this.backgroundImage})`,backgroundColor:this.backgroundColor}},o("div",{key:"5b2f319655bb3b2549f51d6735698a130c234cda",class:"overlay"},o("h2",{key:"ac6e686ddf6b7b6c389934733b992bd992c3fc26",class:"hero-title",style:{color:this.heroTitleColor}},this.heroTitle),o("p",{key:"302f7a8bb4622c397de7a3595455423a08ec3ea5",class:"hero-subtitle",style:{color:this.heroSubtitleColor}},this.heroSubtitle),o("ur-button",{key:"1ca405f4fc0c17230d511368ca2612816e12adf4",variant:"filled","full-width":!1,disabled:!1,onClick:this.handleCtaClick},this.ctaText))))}get el(){return this}static get style(){return X}};V(Z,[1,"ur-hero",{heroTitle:[1,"hero-title"],heroSubtitle:[1,"hero-subtitle"],ctaText:[1,"cta-text"],backgroundImage:[1,"background-image"],backgroundColor:[1,"background-color"],layout:[1],backgroundJustification:[1,"background-justification"],backgroundAlignment:[1,"background-alignment"],heroTitleColor:[1,"hero-title-color"],heroSubtitleColor:[1,"hero-subtitle-color"],widthClass:[32]}]);const h={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrHero",tagName:"ur-hero",customElement:!0,members:[{kind:"field",name:"heroTitle",type:"string",description:""},{kind:"field",name:"heroSubtitle",type:"string",description:""},{kind:"field",name:"ctaText",type:"string",description:""},{kind:"field",name:"backgroundImage",type:"string",description:""},{kind:"field",name:"backgroundColor",type:"string",description:"",default:"'rgba(0, 0, 0, 0.5)'"},{kind:"field",name:"layout",type:"string",description:"",default:"'center'"},{kind:"field",name:"backgroundJustification",type:"string",description:"",default:"'center'"},{kind:"field",name:"backgroundAlignment",type:"string",description:"",default:"'center'"},{kind:"field",name:"heroTitleColor",type:"string",description:"",default:"'#fff'"},{kind:"field",name:"heroSubtitleColor",type:"string",description:"",default:"'#ccc'"}],events:[{kind:"event",name:"ctaClicked",description:""}]}],exports:[{kind:"js",name:"UrHero",declaration:{name:"UrHero",module:"src/components/ur-hero/ur-hero.tsx"}},{kind:"custom-element-definition",name:"ur-hero",declaration:{name:"UrHero",module:"src/components/ur-hero/ur-hero.tsx"}}]}]};F({...g()||{},...h,modules:[...(g()||{}).modules||[],...h.modules]});const ee=e=>Y`
  <ur-hero
    hero-title="${e.heroTitle}"
    hero-subtitle="${e.heroSubtitle}"
    cta-text="${e.ctaText}"
    background-image="${e.backgroundImage}"
    background-color="${e.backgroundColor}"
    layout="${e.layout}"
    background-justification="${e.backgroundJustification}"
    background-alignment="${e.backgroundAlignment}"
    hero-title-color="${e.heroTitleColor}"
    hero-subtitle-color="${e.heroSubtitleColor}"
    onCtaClicked="handleCtaClick"
  ></ur-hero>
`,be={title:"urnovl/Business/Hero",render:ee,argTypes:{heroTitle:{control:"text",description:"Title displayed in the hero section"},heroSubtitle:{control:"text",description:"Subtitle displayed in the hero section"},ctaText:{control:"text",description:"Text for the call-to-action button"},backgroundImage:{control:"text",description:"URL for the background image"},backgroundColor:{control:"color",description:"Overlay color for the hero background"},layout:{control:"select",options:["left","right","center"],description:"Layout alignment for hero content"},backgroundJustification:{control:"select",options:["top","center","bottom"],description:"Vertical alignment for the background image"},backgroundAlignment:{control:"select",options:["left","center","right"],description:"Horizontal alignment for the background image"},heroTitleColor:{control:"color",description:"Color for the hero title text"},heroSubtitleColor:{control:"color",description:"Color for the hero subtitle text"}}},t={args:{heroTitle:"Are you a writer?",heroSubtitle:"Do what you love most, upload Free Stories or become a Partner and get rewarded",ctaText:"Learn how",backgroundImage:"https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png",backgroundColor:"rgb(25 26 31)",layout:"center",backgroundJustification:"center",heroTitleColor:"#ffffff",heroSubtitleColor:"#cccccc"}},r={args:{...t.args,layout:"left"}},n={args:{...t.args,layout:"right"}},a={args:{...t.args,backgroundImage:"https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png",backgroundJustification:"top"}},i={args:{...t.args,backgroundImage:"https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png",backgroundJustification:"bottom"}},s={args:{...t.args,backgroundImage:"https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png",backgroundAlignment:"left",layout:"right",heroTitle:"Welcome Writers!",heroSubtitle:"Place your stories in the spotlight.",ctaText:"Join Now"}},c={args:{...t.args,backgroundImage:"https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png",backgroundAlignment:"right",layout:"left",heroTitle:"Your Story, Your Way",heroSubtitle:"Let your creativity shine with us.",ctaText:"Get Started"}},l={args:{...t.args,backgroundImage:"",backgroundColor:"rgba(255, 0, 0, 0.5)"}},u={args:{...t.args,backgroundImage:"https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png",heroTitle:"Welcome to Urnovl!",heroSubtitle:"Explore the world of stories, novels, and creative writing.",ctaText:"Get Started"}},d={args:{...t.args,backgroundImage:"https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png",heroTitleColor:"#ff5733",heroSubtitleColor:"#33b5e5"}};var m,p,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    heroTitle: 'Are you a writer?',
    heroSubtitle: 'Do what you love most, upload Free Stories or become a Partner and get rewarded',
    ctaText: 'Learn how',
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png',
    backgroundColor: 'rgb(25 26 31)',
    layout: 'center',
    backgroundJustification: 'center',
    heroTitleColor: '#ffffff',
    heroSubtitleColor: '#cccccc'
  }
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var f,k,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: 'left'
  }
}`,...(w=(k=r.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var y,C,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: 'right'
  }
}`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var x,T,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png',
    // Move URL here
    backgroundJustification: 'top'
  }
}`,...(S=(T=a.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var I,A,L;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png',
    // Move URL here
    backgroundJustification: 'bottom'
  }
}`,...(L=(A=i.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var z,B,D;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png',
    // Move URL here
    backgroundAlignment: 'left',
    layout: 'right',
    heroTitle: 'Welcome Writers!',
    heroSubtitle: 'Place your stories in the spotlight.',
    ctaText: 'Join Now'
  }
}`,...(D=(B=s.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var J,R,U;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png',
    // Move URL here
    backgroundAlignment: 'right',
    layout: 'left',
    heroTitle: 'Your Story, Your Way',
    heroSubtitle: 'Let your creativity shine with us.',
    ctaText: 'Get Started'
  }
}`,...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var $,H,W;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    backgroundImage: '',
    backgroundColor: 'rgba(255, 0, 0, 0.5)' // Red overlay for testing
  }
}`,...(W=(H=l.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var E,M,j;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png',
    // Move URL here
    heroTitle: 'Welcome to Urnovl!',
    heroSubtitle: 'Explore the world of stories, novels, and creative writing.',
    ctaText: 'Get Started'
  }
}`,...(j=(M=u.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var O,_,N;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png',
    // Move URL here
    heroTitleColor: '#ff5733',
    // Orange title
    heroSubtitleColor: '#33b5e5' // Blue subtitle
  }
}`,...(N=(_=d.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const fe=["Default","LeftAligned","RightAligned","TopBackground","BottomBackground","LeftAlignedBackground","RightAlignedBackground","NoBackgroundImage","LightTheme","CustomColors"];export{i as BottomBackground,d as CustomColors,t as Default,r as LeftAligned,s as LeftAlignedBackground,u as LightTheme,l as NoBackgroundImage,n as RightAligned,c as RightAlignedBackground,a as TopBackground,fe as __namedExportsOrder,be as default};
