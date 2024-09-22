import{k as _}from"./entry-preview-BcHUnPw7.js";import{s as D,g as t}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as E,H as U,h as o,a as S}from"./index-K5CyEtrH.js";import"./index-Zj3d2VI8.js";import"./index-DrFu-skq.js";import"./index-CJeS4kJa.js";import"./watch-ByvFYHv8.js";const v=":host{display:block}",H=class extends U{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.disabled=!1,this.checked=!1}render(){return o(S,{key:"ca3888790d0d1e7f7df1b5ad3a8af7a486079c67"},o("mdui-checkbox",{key:"c1e6d6ab42f27bd86fd4fb693f6ea47454787107",checked:this.checked,disabled:this.disabled},o("slot",{key:"5bdfda82c0e0aa0a1ac9316d2914ae57c71288c8"})))}static get style(){return v}};E(H,[1,"ur-checkbox",{disabled:[4],checked:[4]}]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrCheckbox",tagName:"ur-checkbox",customElement:!0,members:[{kind:"field",name:"disabled",type:"boolean",description:"",default:"false"},{kind:"field",name:"checked",type:"boolean",description:"",default:"false"}],events:[]}],exports:[{kind:"js",name:"UrCheckbox",declaration:{name:"UrCheckbox",module:"src/components/ur-checkbox/ur-checkbox.tsx"}},{kind:"custom-element-definition",name:"ur-checkbox",declaration:{name:"UrCheckbox",module:"src/components/ur-checkbox/ur-checkbox.tsx"}}]}]};D({...t()||{},...d,modules:[...(t()||{}).modules||[],...d.modules]});const $=({text:c="Welcome",disabled:C=!1,checked:y=!1})=>_`
    <ur-checkbox checked=${y} disabled=${C}>${c}</ur-checkbox>
`,V={title:"Urnovl/Checkboxes",render:c=>$(c),argTypes:{}},e={args:{disabled:!1}},s={args:{checked:!0}},a={args:{disabled:!0}},r={args:{checked:!0,disabled:!0}};var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    disabled: false
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,u,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var k,b,p;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(p=(b=a.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var f,x,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const W=["Default","Checked","Disabled","CheckedAndDisabled"];export{s as Checked,r as CheckedAndDisabled,e as Default,a as Disabled,W as __namedExportsOrder,V as default};
