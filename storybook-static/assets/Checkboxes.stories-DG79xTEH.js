import{k as _}from"./entry-preview-BcHUnPw7.js";import{s as D,g as t}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as E,H as S,h as o,a as U}from"./index-K5CyEtrH.js";import"./index-Ct6ahnLD.js";import"./index-DrFu-skq.js";import"./index-C7OuiOrh.js";import"./svg-tag-BmaNgmJN.js";import"./watch-ByvFYHv8.js";const H=":host{display:block}",$=class extends S{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.disabled=!1,this.checked=!1}render(){return o(U,{key:"5ab7c597ccded1e90e8fce5e2555725e5d9bdde8"},o("mdui-checkbox",{key:"472b1c62a6b912ee735b26ed2090467c0f3fd086",checked:this.checked,disabled:this.disabled},o("slot",{key:"cfc9351cb832dae10e3e52696cd514d39982d429"})))}static get style(){return H}};E($,[1,"ur-checkbox",{disabled:[4],checked:[4]}]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrCheckbox",tagName:"ur-checkbox",customElement:!0,members:[{kind:"field",name:"disabled",type:"boolean",description:"",default:"false"},{kind:"field",name:"checked",type:"boolean",description:"",default:"false"}],events:[]}],exports:[{kind:"js",name:"UrCheckbox",declaration:{name:"UrCheckbox",module:"src/components/ur-checkbox/ur-checkbox.tsx"}},{kind:"custom-element-definition",name:"ur-checkbox",declaration:{name:"UrCheckbox",module:"src/components/ur-checkbox/ur-checkbox.tsx"}}]}]};D({...t()||{},...d,modules:[...(t()||{}).modules||[],...d.modules]});const j=({text:a="Welcome",disabled:C=!1,checked:y=!1})=>_`
    <ur-checkbox checked=${y} disabled=${C}>${a}</ur-checkbox>
`,W={title:"Core/Checkboxes",render:a=>j(a),argTypes:{}},e={args:{disabled:!1}},s={args:{checked:!0}},r={args:{disabled:!0}},c={args:{checked:!0,disabled:!0}};var n,i,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    disabled: false
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,u,b;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,k,p;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(p=(k=r.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};var f,x,g;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(g=(x=c.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const q=["Default","Checked","Disabled","CheckedAndDisabled"];export{s as Checked,c as CheckedAndDisabled,e as Default,r as Disabled,q as __namedExportsOrder,W as default};
