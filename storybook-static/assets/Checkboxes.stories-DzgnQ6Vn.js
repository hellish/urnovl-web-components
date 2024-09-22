import{k as _}from"./entry-preview-BcHUnPw7.js";import{s as D,g as t}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as E,H as U,h as o,a as S}from"./index-K5CyEtrH.js";import"./index-Zj3d2VI8.js";import"./index-DrFu-skq.js";import"./index-CJeS4kJa.js";import"./watch-ByvFYHv8.js";const v=":host{display:block}",H=class extends U{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.disabled=!1,this.checked=!1}render(){return o(S,{key:"b07093d9e300fe2bb85dc1feed4b05b4b7270d35"},o("mdui-checkbox",{key:"5402bbc0bba741476c4deb006e1e90cf9460cc88",checked:this.checked,disabled:this.disabled},o("slot",{key:"a5c476a478ae821b85d70ab6b79f16bf0d96dcbe"})))}static get style(){return v}};E(H,[1,"ur-checkbox",{disabled:[4],checked:[4]}]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrCheckbox",tagName:"ur-checkbox",customElement:!0,members:[{kind:"field",name:"disabled",type:"boolean",description:"",default:"false"},{kind:"field",name:"checked",type:"boolean",description:"",default:"false"}],events:[]}],exports:[{kind:"js",name:"UrCheckbox",declaration:{name:"UrCheckbox",module:"src/components/ur-checkbox/ur-checkbox.tsx"}},{kind:"custom-element-definition",name:"ur-checkbox",declaration:{name:"UrCheckbox",module:"src/components/ur-checkbox/ur-checkbox.tsx"}}]}]};D({...t()||{},...d,modules:[...(t()||{}).modules||[],...d.modules]});const $=({text:c="Welcome",disabled:C=!1,checked:y=!1})=>_`
    <ur-checkbox checked=${y} disabled=${C}>${c}</ur-checkbox>
`,V={title:"Urnovl/Checkboxes",render:c=>$(c),argTypes:{}},e={args:{disabled:!1}},s={args:{checked:!0}},r={args:{disabled:!0}},a={args:{checked:!0,disabled:!0}};var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    disabled: false
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,b,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var h,k,p;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(p=(k=r.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};var f,x,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const W=["Default","Checked","Disabled","CheckedAndDisabled"];export{s as Checked,a as CheckedAndDisabled,e as Default,r as Disabled,W as __namedExportsOrder,V as default};
