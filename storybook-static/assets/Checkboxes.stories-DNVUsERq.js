import{k as _}from"./entry-preview-BcHUnPw7.js";import{s as D,g as t}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as E,H as S,h as o,a as U}from"./index-CLClakx-.js";import"./index-B7c1-EX-.js";import"./index-DrFu-skq.js";import"./index-nIgcz_ss.js";import"./form-CmHWCLTt.js";import"./live-4duplxCY.js";import"./default-value-IYznoHSX.js";import"./watch-ByvFYHv8.js";import"./svg-tag-DGZUHUmn.js";const H=":host{display:block}",$=class extends S{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.disabled=!1,this.checked=!1}render(){return o(U,{key:"7a64944be1f4e7bf3112dffae3ab9b60890dff0b"},o("mdui-checkbox",{key:"5decb81d95a66abc2c1fe54f01834bcb00ff1174",part:"check",checked:this.checked,disabled:this.disabled},o("slot",{key:"8028284e237bbd4255222a5ebd430acc4ccb8e97"})))}static get style(){return H}};E($,[1,"ur-checkbox",{disabled:[4],checked:[4]}]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrCheckbox",tagName:"ur-checkbox",customElement:!0,members:[{kind:"field",name:"disabled",type:"boolean",description:"",default:"false"},{kind:"field",name:"checked",type:"boolean",description:"",default:"false"}],events:[]}],exports:[{kind:"js",name:"UrCheckbox",declaration:{name:"UrCheckbox",module:"src/components/ur-checkbox/ur-checkbox.tsx"}},{kind:"custom-element-definition",name:"ur-checkbox",declaration:{name:"UrCheckbox",module:"src/components/ur-checkbox/ur-checkbox.tsx"}}]}]};D({...t()||{},...d,modules:[...(t()||{}).modules||[],...d.modules]});const j=({text:c="Welcome",disabled:C=!1,checked:y=!1})=>_`
    <ur-checkbox checked=${y} disabled=${C}>${c}</ur-checkbox>
`,B={title:"Core/Checkboxes",render:c=>j(c),argTypes:{}},e={args:{disabled:!1}},s={args:{checked:!0}},r={args:{disabled:!0}},a={args:{checked:!0,disabled:!0}};var n,i,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(k=r.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};var f,x,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const F=["Default","Checked","Disabled","CheckedAndDisabled"];export{s as Checked,a as CheckedAndDisabled,e as Default,r as Disabled,F as __namedExportsOrder,B as default};