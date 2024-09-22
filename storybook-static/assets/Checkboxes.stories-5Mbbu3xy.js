import{k as _}from"./entry-preview-BcHUnPw7.js";import{s as D,g as t}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as E,H as S,h as o,a as U}from"./index-K5CyEtrH.js";import"./index-Zj3d2VI8.js";import"./index-DrFu-skq.js";import"./index-CJeS4kJa.js";import"./watch-ByvFYHv8.js";const H=":host{display:block}",$=class extends S{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.disabled=!1,this.checked=!1}render(){return o(U,{key:"1e37b920a8acb35c3f4eb24ee7fe4ea76bf190ac"},o("mdui-checkbox",{key:"a95fa9680c99552664f7cab622b849416ba70a28",checked:this.checked,disabled:this.disabled},o("slot",{key:"f9d2059701171044f74c9e2b3b789c990dea13b0"})))}static get style(){return H}};E($,[1,"ur-checkbox",{disabled:[4],checked:[4]}]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrCheckbox",tagName:"ur-checkbox",customElement:!0,members:[{kind:"field",name:"disabled",type:"boolean",description:"",default:"false"},{kind:"field",name:"checked",type:"boolean",description:"",default:"false"}],events:[]}],exports:[{kind:"js",name:"UrCheckbox",declaration:{name:"UrCheckbox",module:"src/components/ur-checkbox/ur-checkbox.tsx"}},{kind:"custom-element-definition",name:"ur-checkbox",declaration:{name:"UrCheckbox",module:"src/components/ur-checkbox/ur-checkbox.tsx"}}]}]};D({...t()||{},...d,modules:[...(t()||{}).modules||[],...d.modules]});const j=({text:c="Welcome",disabled:C=!1,checked:y=!1})=>_`
    <ur-checkbox checked=${y} disabled=${C}>${c}</ur-checkbox>
`,V={title:"Core/Checkboxes",render:c=>j(c),argTypes:{}},e={args:{disabled:!1}},s={args:{checked:!0}},a={args:{disabled:!0}},r={args:{checked:!0,disabled:!0}};var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    disabled: false
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,u,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,k,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(p=(k=a.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};var f,x,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const W=["Default","Checked","Disabled","CheckedAndDisabled"];export{s as Checked,r as CheckedAndDisabled,e as Default,a as Disabled,W as __namedExportsOrder,V as default};
