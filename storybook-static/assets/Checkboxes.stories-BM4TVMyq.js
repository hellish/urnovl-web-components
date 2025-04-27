import{x as W}from"./entry-preview-CxXhOGqP.js";import"./ur-checkbox-DHsAH4i0.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-BPj2F1fn.js";import"./index-Bdp-Mrn6.js";import"./index-_7_SoGGi.js";import"./class-map-CvfWHz58.js";import"./get-DCsNyb8P.js";import"./if-defined-D52-l-pg.js";import"./live-DwPmnOYN.js";import"./form-CWZnyZ12.js";import"./default-value-dSVzt9o_.js";import"./watch-ByvFYHv8.js";import"./svg-tag-B1kmCZ6g.js";import"./index-rsUJIYwf.js";const $=({text:s="Welcome",disabled:v=!1,checked:D=!1,value:S="",name:V="example-group"})=>W`
    <ur-checkbox checked=${D} disabled=${v} value=${S} name=${V}> ${s} </ur-checkbox>
`,I={title:"Core/Checkboxes",render:s=>$(s),argTypes:{text:{control:"text",description:"Label text for the checkbox"},disabled:{control:"boolean",description:"Disable the checkbox"},checked:{control:"boolean",description:"Checked state of the checkbox"},value:{control:"text",description:"Value of the checkbox"},name:{control:"text",description:"Group name of the checkbox"}}},e={args:{text:"Welcome",disabled:!1,checked:!1,value:"default-value",name:"example-group"}},a={args:{text:"Checked Checkbox",checked:!0,disabled:!1,value:"checked-value",name:"example-group"}},r={args:{text:"Disabled Checkbox",checked:!1,disabled:!0,value:"disabled-value",name:"example-group"}},o={args:{text:"Checked and Disabled Checkbox",checked:!0,disabled:!0,value:"checked-disabled-value",name:"example-group"}},c={args:{text:"Checkbox with Value",checked:!1,disabled:!1,value:"custom-value",name:"custom-group"}};var t,l,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var b,x,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'Checked and Disabled Checkbox',
    checked: true,
    disabled: true,
    value: 'checked-disabled-value',
    name: 'example-group'
  }
}`,...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var g,f,C;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: 'Checkbox with Value',
    checked: false,
    disabled: false,
    value: 'custom-value',
    name: 'custom-group'
  }
}`,...(C=(f=c.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const J=["Default","Checked","Disabled","CheckedAndDisabled","WithCustomValue"];export{a as Checked,o as CheckedAndDisabled,e as Default,r as Disabled,c as WithCustomValue,J as __namedExportsOrder,I as default};
