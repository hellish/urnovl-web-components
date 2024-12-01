import{k as F}from"./entry-preview-BcHUnPw7.js";import"./ur-button-sZmQUBPt.js";import{s as V,g}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as q,H as K,c as Q,h as o,a as X}from"./index-Dnt4yWMo.js";import"./index-DrFu-skq.js";import"./index-s090kVPT.js";import"./get-D9DBDJjp.js";import"./class-map-DirLTUPi.js";import"./template-yncBVCyc.js";import"./index-BXDV2pmF.js";import"./button-base-ETGWZztw.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-Bt_5eb2T.js";import"./form-D6WTgxde.js";import"./ripple-mixin-Baxn-44g.js";const Z=":host{display:block;width:100%;height:calc(100vw / 3);min-height:200px;position:relative;max-height:300px;border-radius:12px;overflow:hidden;container-type:inline-size;container-name:hero-container;}:host .hero-container{height:100%;width:100%;display:flex;align-items:center;justify-content:center;background-size:cover;background-repeat:no-repeat;background-size:auto 100%}:host .overlay{position:absolute;inset:0;background:var(--ur-hero-overlay-color, rgba(0, 0, 0, 0.5));display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;text-align:center;color:white}:host .hero-title{font-size:34px;line-height:1rem;margin:0.5rem 0}:host .hero-subtitle{font-size:18px;line-height:1rem;margin:0.5rem 0}:host(.small-hero) .hero-title{font-size:1.25rem}:host(.small-hero) .hero-subtitle{font-size:0.75rem}:host(.medium-hero) .hero-title{font-size:1.5rem}:host(.medium-hero) .hero-subtitle{font-size:0.875rem}:host(.large-hero) .hero-title{font-size:2rem}:host(.large-hero) .hero-subtitle{font-size:1rem}:host .cta-button{display:flex;align-items:center;justify-content:center;padding:0.5rem 1rem;font-size:1rem;color:white;background:var(--ur-button-background, #007bff);border:none;border-radius:5px;cursor:pointer}:host .cta-button mat-icon{margin-right:0.5rem}:host .layout-left .overlay{align-items:flex-start;text-align:left}:host .layout-right .overlay{align-items:flex-end;text-align:right}:host .layout-center .overlay{align-items:center;text-align:center}:host .background-top{background-position:top}:host .background-center{background-position:center}:host .background-bottom{background-position:bottom}:host .align-left{background-position-x:left}:host .align-center{background-position-x:center}:host .align-right{background-position-x:right}",ee=class extends K{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.ctaClicked=Q(this,"ctaClicked",7),this.handleCtaClick=()=>{this.ctaClicked.emit()},this.heroTitle=void 0,this.heroSubtitle=void 0,this.ctaText=void 0,this.backgroundImage=void 0,this.backgroundColor="rgba(0, 0, 0, 0.5)",this.layout="center",this.backgroundJustification="center",this.backgroundAlignment="center",this.heroTitleColor="#ffffff",this.heroSubtitleColor="#cccccc",this.widthClass="large-hero"}updateWidthClass(e){e<=480?this.widthClass="small-hero":e<=768?this.widthClass="medium-hero":this.widthClass="large-hero"}observeResize(){new ResizeObserver(G=>{for(const P of G){const Y=P.contentRect.width;this.updateWidthClass(Y)}}).observe(this.containerElement)}componentDidLoad(){this.observeResize()}render(){return o(X,{key:"dbc672bf178df76b70a3048360ae29b6a639e281",ref:e=>this.containerElement=e,class:this.widthClass},o("div",{key:"a3036605bbbe97b6d93135bfd7c0d6a4545b702d",class:{"hero-container":!0,[`layout-${this.layout}`]:!0,[`background-${this.backgroundJustification}`]:!0,[`align-${this.backgroundAlignment}`]:!0},style:{backgroundImage:`url(${this.backgroundImage})`,backgroundColor:this.backgroundColor}},o("div",{key:"023b334806faae214b05b0a54b56161bec850287",class:"overlay"},o("h2",{key:"f62f24e92d7cc7d0469a0528c3326768dcfb9a57",class:"hero-title",style:{color:this.heroTitleColor}},this.heroTitle),o("p",{key:"001d4628459a2c390d61c0b87f1de04d4f3ce382",class:"hero-subtitle",style:{color:this.heroSubtitleColor}},this.heroSubtitle),o("ur-button",{key:"57522b2200173265eb1f8fad8abb6535c23d747a",variant:"filled","full-width":!1,disabled:!1,onClick:this.handleCtaClick},this.ctaText))))}static get style(){return Z}};q(ee,[1,"ur-hero",{heroTitle:[1,"hero-title"],heroSubtitle:[1,"hero-subtitle"],ctaText:[1,"cta-text"],backgroundImage:[1,"background-image"],backgroundColor:[1,"background-color"],layout:[1],backgroundJustification:[1,"background-justification"],backgroundAlignment:[1,"background-alignment"],heroTitleColor:[1,"hero-title-color"],heroSubtitleColor:[1,"hero-subtitle-color"],widthClass:[32]}]);const h={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrHero",tagName:"ur-hero",customElement:!0,members:[{kind:"field",name:"heroTitle",type:"string",description:"Hero title"},{kind:"field",name:"heroSubtitle",type:"string",description:"Hero subtitle"},{kind:"field",name:"ctaText",type:"string",description:"Call to action button text"},{kind:"field",name:"backgroundImage",type:"string",description:"Background image URL"},{kind:"field",name:"backgroundColor",type:"string",description:"Background color overlay",default:"'rgba(0, 0, 0, 0.5)'"},{kind:"field",name:"layout",type:"string",description:"Layout variant: left, right, or center",default:"'center'"},{kind:"field",name:"backgroundJustification",type:"string",description:"Background vertical justification: top, center, or bottom",default:"'center'"},{kind:"field",name:"backgroundAlignment",type:"string",description:"Background horizontal alignment: left, center, or right",default:"'center'"},{kind:"field",name:"heroTitleColor",type:"string",description:"Hero title color",default:"'#ffffff'"},{kind:"field",name:"heroSubtitleColor",type:"string",description:"Hero subtitle color",default:"'#cccccc'"}],events:[{kind:"event",name:"ctaClicked",description:"Event emitted when CTA button is clicked"}]}],exports:[{kind:"js",name:"UrHero",declaration:{name:"UrHero",module:"src/components/ur-hero/ur-hero.tsx"}},{kind:"custom-element-definition",name:"ur-hero",declaration:{name:"UrHero",module:"src/components/ur-hero/ur-hero.tsx"}}]}]};V({...g()||{},...h,modules:[...(g()||{}).modules||[],...h.modules]});const te=e=>F`
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
`,pe={title:"urnovl/Business/Hero",render:te,argTypes:{heroTitle:{control:"text",description:"Title displayed in the hero section"},heroSubtitle:{control:"text",description:"Subtitle displayed in the hero section"},ctaText:{control:"text",description:"Text for the call-to-action button"},backgroundImage:{control:"text",description:"URL for the background image"},backgroundColor:{control:"color",description:"Overlay color for the hero background"},layout:{control:"select",options:["left","right","center"],description:"Layout alignment for hero content"},backgroundJustification:{control:"select",options:["top","center","bottom"],description:"Vertical alignment for the background image"},backgroundAlignment:{control:"select",options:["left","center","right"],description:"Horizontal alignment for the background image"},heroTitleColor:{control:"color",description:"Color for the hero title text"},heroSubtitleColor:{control:"color",description:"Color for the hero subtitle text"}}},t={args:{heroTitle:"Are you a writer?",heroSubtitle:"Do what you love most, upload Free Stories or become a Partner and get rewarded",ctaText:"Learn how",backgroundImage:"https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png",backgroundColor:"rgb(25 26 31)",layout:"center",backgroundJustification:"center",heroTitleColor:"#ffffff",heroSubtitleColor:"#cccccc"}},r={args:{...t.args,layout:"left"}},n={args:{...t.args,layout:"right"}},a={args:{...t.args,backgroundImage:"https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png",backgroundJustification:"top"}},i={args:{...t.args,backgroundImage:"https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png",backgroundJustification:"bottom"}},s={args:{...t.args,backgroundImage:"https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png",backgroundAlignment:"left",layout:"right",heroTitle:"Welcome Writers!",heroSubtitle:"Place your stories in the spotlight.",ctaText:"Join Now"}},c={args:{...t.args,backgroundImage:"https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png",backgroundAlignment:"right",layout:"left",heroTitle:"Your Story, Your Way",heroSubtitle:"Let your creativity shine with us.",ctaText:"Get Started"}},l={args:{...t.args,backgroundImage:"",backgroundColor:"rgba(255, 0, 0, 0.5)"}},u={args:{...t.args,backgroundImage:"https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png",heroTitle:"Welcome to Urnovl!",heroSubtitle:"Explore the world of stories, novels, and creative writing.",ctaText:"Get Started"}},d={args:{...t.args,backgroundImage:"https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png",heroTitleColor:"#ff5733",heroSubtitleColor:"#33b5e5"}};var m,b,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var p,k,w;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: 'left'
  }
}`,...(w=(k=r.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var y,v,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: 'right'
  }
}`,...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var x,T,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(A=i.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var z,B,R;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(R=(B=s.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var H,U,D;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(D=(U=c.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var J,$,E;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    backgroundImage: '',
    backgroundColor: 'rgba(255, 0, 0, 0.5)' // Red overlay for testing
  }
}`,...(E=($=l.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var W,j,M;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png',
    // Move URL here
    heroTitle: 'Welcome to Urnovl!',
    heroSubtitle: 'Explore the world of stories, novels, and creative writing.',
    ctaText: 'Get Started'
  }
}`,...(M=(j=u.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var _,O,N;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png',
    // Move URL here
    heroTitleColor: '#ff5733',
    // Orange title
    heroSubtitleColor: '#33b5e5' // Blue subtitle
  }
}`,...(N=(O=d.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};const ke=["Default","LeftAligned","RightAligned","TopBackground","BottomBackground","LeftAlignedBackground","RightAlignedBackground","NoBackgroundImage","LightTheme","CustomColors"];export{i as BottomBackground,d as CustomColors,t as Default,r as LeftAligned,s as LeftAlignedBackground,u as LightTheme,l as NoBackgroundImage,n as RightAligned,c as RightAlignedBackground,a as TopBackground,ke as __namedExportsOrder,pe as default};
