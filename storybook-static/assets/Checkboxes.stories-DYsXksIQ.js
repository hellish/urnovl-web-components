import{k as W}from"./entry-preview-BcHUnPw7.js";import"./ur-checkbox-D3rdyIbS.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-B9J0OpMa.js";import"./index-Bmm03Yvq.js";import"./get-16ZjOD6f.js";import"./class-map-c_lXebLN.js";import"./if-defined-CL77Dv0Z.js";import"./live-B52-oj_Y.js";import"./form-DYv8CV48.js";import"./default-value-Cjt0J7Mq.js";import"./watch-ByvFYHv8.js";import"./svg-tag-Bx7YH7wk.js";import"./index-BxWH4IIK.js";import"./ripple-mixin-CQ5hE0DF.js";const $=({text:c="Welcome",disabled:v=!1,checked:D=!1,value:S="",name:V="example-group"})=>W`
    <ur-checkbox checked=${D} disabled=${v} value=${S} name=${V}> ${c} </ur-checkbox>
`,J={title:"Core/Checkboxes",render:c=>$(c),argTypes:{text:{control:"text",description:"Label text for the checkbox"},disabled:{control:"boolean",description:"Disable the checkbox"},checked:{control:"boolean",description:"Checked state of the checkbox"},value:{control:"text",description:"Value of the checkbox"},name:{control:"text",description:"Group name of the checkbox"}}},e={args:{text:"Welcome",disabled:!1,checked:!1,value:"default-value",name:"example-group"}},a={args:{text:"Checked Checkbox",checked:!0,disabled:!1,value:"checked-value",name:"example-group"}},r={args:{text:"Disabled Checkbox",checked:!1,disabled:!0,value:"disabled-value",name:"example-group"}},o={args:{text:"Checked and Disabled Checkbox",checked:!0,disabled:!0,value:"checked-disabled-value",name:"example-group"}},s={args:{text:"Checkbox with Value",checked:!1,disabled:!1,value:"custom-value",name:"custom-group"}};var t,l,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: 'Welcome',
    disabled: false,
    checked: false,
    value: 'default-value',
    name: 'example-group'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var n,u,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: 'Checked Checkbox',
    checked: true,
    disabled: false,
    value: 'checked-value',
    name: 'example-group'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var i,p,h;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: 'Disabled Checkbox',
    checked: false,
    disabled: true,
    value: 'disabled-value',
    name: 'example-group'
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var b,k,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'Checked and Disabled Checkbox',
    checked: true,
    disabled: true,
    value: 'checked-disabled-value',
    name: 'example-group'
  }
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var g,f,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: 'Checkbox with Value',
    checked: false,
    disabled: false,
    value: 'custom-value',
    name: 'custom-group'
  }
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const K=["Default","Checked","Disabled","CheckedAndDisabled","WithCustomValue"];export{a as Checked,o as CheckedAndDisabled,e as Default,r as Disabled,s as WithCustomValue,K as __namedExportsOrder,J as default};