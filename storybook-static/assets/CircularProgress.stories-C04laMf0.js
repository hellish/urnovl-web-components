import{k as C}from"./entry-preview-BcHUnPw7.js";import{s as k,g as o}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as P,H as y,h as n,a as _}from"./index-DddAbXmr.js";import"./index-DsS9OQyQ.js";import"./index-DrFu-skq.js";import"./class-map-CDMw4-pN.js";const D=":host{display:block}",E=class extends y{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.max=1}render(){return n(_,{key:"c409d754494d0910ebf15c11eb1eb6f376e53236"},n("mdui-circular-progress",{key:"2389b8c0ee51dbe04cbab72056ebb390465d3190",max:this.max,value:this.value!==void 0?this.value:void 0}))}static get style(){return D}};P(E,[1,"ur-circular-progress",{max:[514],value:[514]}]);const i={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrCircularProgress",tagName:"ur-circular-progress",customElement:!0,members:[{kind:"field",name:"max",type:"number",description:`The maximum value of the progress indicator.
Defaults to 1.`,default:"1"},{kind:"field",name:"value",type:"number",description:`The current value of the progress indicator.
If not specified, the progress indicator will be in an indeterminate state.`}],events:[]}],exports:[{kind:"js",name:"UrCircularProgress",declaration:{name:"UrCircularProgress",module:"src/components/ur-circular-progress/ur-circular-progress.tsx"}},{kind:"custom-element-definition",name:"ur-circular-progress",declaration:{name:"UrCircularProgress",module:"src/components/ur-circular-progress/ur-circular-progress.tsx"}}]}]};k({...o()||{},...i,modules:[...(o()||{}).modules||[],...i.modules]});const T=t=>C` 
  <ur-circular-progress 
    .max=${t.max} 
    .value=${t.value}
  ></ur-circular-progress> 
`,j={title:"Urnovl/Basic/Circular Progress",render:T,argTypes:{max:{control:"number",description:"The maximum value for the progress indicator. Defaults to 1."},value:{control:"number",description:"The current value for the progress indicator. If not specified, the progress will be indeterminate."}}},e={args:{max:1}},r={args:{max:1,value:.5}},s={args:{max:1,value:1}},a={args:{max:100,value:75}};var c,m,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    max: 1
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    max: 1,
    value: 0.5
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    max: 1,
    value: 1
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,h,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    max: 100,
    value: 75
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const F=["Indeterminate","DeterminateHalf","DeterminateFull","CustomMax"];export{a as CustomMax,s as DeterminateFull,r as DeterminateHalf,e as Indeterminate,F as __namedExportsOrder,j as default};
