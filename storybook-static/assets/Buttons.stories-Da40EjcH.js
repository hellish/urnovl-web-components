import{k as c}from"./entry-preview-BcHUnPw7.js";import{s as V,g as l}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as j,H as D,h as d,a as F}from"./index-K5CyEtrH.js";import"./index-CxM1Gbjs.js";import"./ur-button-arrow-right-DYPbSp4q.js";import"./index-DrFu-skq.js";import"./index-BmT10YZK.js";import"./template-yncBVCyc.js";import"./button-base-BJTZz6Hf.js";import"./form-kvNGPYeq.js";import"./index-Co_fSMZb.js";import"./watch-ByvFYHv8.js";const M=":host{display:block}:host mdui-button{border-radius:var(--mdui-shape-corner-small)}",N=class extends D{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.disabled=!1,this.variant="filled",this.icon=null,this.endIcon=null}render(){return d(F,{key:"205c466cfeb2e831a9c7eed4bed7985bfbf9382a"},d("mdui-button",{key:"fdac928f520016189adc4d6fea35e3aadc98aa01",icon:this.icon?this.icon:!1,"end-icon":this.endIcon?this.endIcon:!1,variant:this.variant,disabled:this.disabled},d("slot",{key:"7fd4784f3b4592b5d9a01db89aab3ae9c4e3f346"})))}static get style(){return M}};j(N,[1,"ur-button",{disabled:[4],variant:[1],icon:[8],endIcon:[8,"end-icon"]}]);const u={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrButton",tagName:"ur-button",customElement:!0,members:[{kind:"field",name:"disabled",type:"boolean",description:"",default:"false"},{kind:"field",name:"variant",type:"string",description:"",default:"'filled'"},{kind:"field",name:"icon",type:"any",description:"",default:"null"},{kind:"field",name:"endIcon",type:"any",description:"",default:"null"}],events:[]}],exports:[{kind:"js",name:"UrButton",declaration:{name:"UrButton",module:"src/components/ur-button/ur-button.tsx"}},{kind:"custom-element-definition",name:"ur-button",declaration:{name:"UrButton",module:"src/components/ur-button/ur-button.tsx"}}]}]};V({...l()||{},...u,modules:[...(l()||{}).modules||[],...u.modules]});const O=()=>c`
    <ur-button-arrow-left></ur-button-arrow-left>
`,q=()=>c`
    <ur-button-arrow-right></ur-button-arrow-right>
`,z=({text:i="Welcome",disabled:L=!1,variant:R="filled",icon:H=null,endIcon:T=null})=>c`
    <ur-button icon=${H} end-icon=${T} variant=${R} disabled=${L}>${i}</ur-button>
`,ne={title:"Core/Buttons",render:i=>z(i),argTypes:{variant:{control:"select",options:["elevated","filled","tonal","outlined","text"]}}},e={render:()=>O()},t={render:()=>q()},r={args:{}},o={args:{disabled:!0}},n={args:{variant:"outlined"},argTypes:{variant:{control:"select",options:["elevated","filled","tonal","outlined","text"]}}},a={args:{icon:"search",endIcon:"arrow_forward"}},s={args:{icon:"search",endIcon:"arrow_forward",variant:"outlined",disabled:!1}};var m,p,f;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ButtonArrowLeft()
}`,...(f=(p=e.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var b,h,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ButtonArrowRight()
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var w,v,B;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {}
}`,...(B=(v=r.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var k,y,I;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(I=(y=o.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var _,x,A;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'filled', 'tonal', 'outlined', 'text']
    }
  }
}`,...(A=(x=n.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var S,E,C;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    endIcon: 'arrow_forward'
  }
}`,...(C=(E=a.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var U,W,$;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    endIcon: 'arrow_forward',
    variant: 'outlined',
    disabled: false
  }
}`,...($=(W=s.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};const ae=["ArrowLeft","ArrowRight","Basic","Disabled","WithVariant","WithIcons","Full"];export{e as ArrowLeft,t as ArrowRight,r as Basic,o as Disabled,s as Full,a as WithIcons,n as WithVariant,ae as __namedExportsOrder,ne as default};
