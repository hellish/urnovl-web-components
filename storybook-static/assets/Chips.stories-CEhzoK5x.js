import{k as C}from"./entry-preview-BcHUnPw7.js";import{s as k,g as a}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as y,H as x,h as o,a as D}from"./index-CLClakx-.js";import"./index-J3i1Vu8m.js";import"./index-DrFu-skq.js";import"./index-DK0M9p_p.js";import"./button-base-BY1_dNA6.js";import"./form-BmFFEJ5e.js";import"./template-yncBVCyc.js";import"./watch-ByvFYHv8.js";import"./check-DFXvsp4q.js";import"./svg-tag-XPJir7-D.js";const v=":host{display:block}",E=class extends x{constructor(){super(),this.__registerHost(),this.label="Chip",this.border="0",this.radius="8px",this.size="32px",this.backColor="rgb(var(--mdui-color-secondary-container))",this.fontColor="rgb(var(--mdui-color-on-secondary-container))",this.loading=!1,this.disabled=!1}render(){return o(D,{key:"a72cc30447fb48be63965ad1c89b511d9dc0458f"},o("mdui-chip",{key:"678643e19f5dc72b2c2c25420c1b05233a8565fd",disabled:this.disabled,loading:this.loading,style:{color:this.fontColor,background:this.backColor,borderRadius:this.radius,height:this.size,borderWidth:this.border}},this.label))}static get style(){return v}};y(E,[0,"ur-chip",{label:[1],border:[1],radius:[1],size:[1],backColor:[1,"back-color"],fontColor:[1,"font-color"],loading:[4],disabled:[4]}]);const t={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrChip",tagName:"ur-chip",customElement:!0,members:[{kind:"field",name:"label",type:"string",description:"",default:"'Chip'"},{kind:"field",name:"border",type:"string",description:"",default:"'0'"},{kind:"field",name:"radius",type:"string",description:"",default:"'8px'"},{kind:"field",name:"size",type:"string",description:"",default:"'32px'"},{kind:"field",name:"backColor",type:"string",description:"",default:"'rgb(var(--mdui-color-secondary-container))'"},{kind:"field",name:"fontColor",type:"string",description:"",default:"'rgb(var(--mdui-color-on-secondary-container))'"},{kind:"field",name:"loading",type:"boolean",description:"",default:"false"},{kind:"field",name:"disabled",type:"boolean",description:"",default:"false"}],events:[]}],exports:[{kind:"js",name:"UrChip",declaration:{name:"UrChip",module:"src/components/ur-chip/ur-chip.tsx"}},{kind:"custom-element-definition",name:"ur-chip",declaration:{name:"UrChip",module:"src/components/ur-chip/ur-chip.tsx"}}]}]};k({...a()||{},...t,modules:[...(a()||{}).modules||[],...t.modules]});const U=({label:i="Chip",loading:f=!1,disabled:g=!1})=>C`
    <ur-chip label=${i} disabled=${g} loading=${f}></ur-chip>
`,V={title:"Core/Chips",render:i=>U(i),argTypes:{label:{control:"text"}}},e={args:{label:"Default Chip"}},r={args:{label:"Disabled Chip",disabled:!0}},s={args:{label:"Loading Chip",disabled:!1,loading:!0}};var d,n,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Default Chip'
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Chip',
    disabled: true
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Loading Chip',
    disabled: false,
    loading: true
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const W=["Default","Disabled","Loading"];export{e as Default,r as Disabled,s as Loading,W as __namedExportsOrder,V as default};
