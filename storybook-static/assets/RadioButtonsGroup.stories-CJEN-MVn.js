import{k as a}from"./entry-preview-BcHUnPw7.js";import"./ur-radio-group-DYKF82Tg.js";import"./ur-radio-button-CrnYaD1P.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-BJvbtjhH.js";import"./class-map-CDMw4-pN.js";import"./get-7S0C3xNv.js";import"./if-defined-CL77Dv0Z.js";import"./index-BriiHZyV.js";import"./form-B80GgqR6.js";import"./default-value-C0GKHYBG.js";import"./watch-ByvFYHv8.js";import"./svg-tag-Dv8So2Bi.js";const G=({name:o="example-group",value:s="",options:f=["Option 1","Option 2","Option 3"],disabledOptions:k=[]})=>a`
  <ur-radio-group name=${o} value=${s}>
    ${f.map((y,i)=>a`<ur-radio-button
          value="option${i+1}"
          name=${o}
          ?checked=${s===`option${i+1}`}
          ?disabled=${k.includes(`option${i+1}`)}
        >
          ${y}
        </ur-radio-button>`)}
  </ur-radio-group>
`,H={title:"Urnovl/Basic/RadioGroups",render:o=>G(o),argTypes:{name:{control:"text"},value:{control:"text"},options:{control:"array"},disabledOptions:{control:"array"}}},e={args:{name:"example-group",value:"",options:["Option 1","Option 2","Option 3"],disabledOptions:[]}},t={args:{name:"example-group",value:"option2",options:["Option 1","Option 2","Option 3"],disabledOptions:[]}},n={args:{name:"custom-group",value:"option3",options:["First Option","Second Option","Third Option"],disabledOptions:[]}},p={args:{name:"example-group",value:"",options:["Option 1","Option 2","Option 3"],disabledOptions:["option2"]}},r={args:{name:"example-group",value:"option2",options:["Option 1","Option 2","Option 3"],disabledOptions:["option1","option2","option3"]}};var l,d,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'example-group',
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabledOptions: []
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,c,O;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'example-group',
    value: 'option2',
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabledOptions: []
  }
}`,...(O=(c=t.parameters)==null?void 0:c.docs)==null?void 0:O.source}}};var g,b,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'custom-group',
    value: 'option3',
    options: ['First Option', 'Second Option', 'Third Option'],
    disabledOptions: []
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,$,D;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'example-group',
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabledOptions: ['option2'] // Disable the second option
  }
}`,...(D=($=p.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var h,S,P;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'example-group',
    value: 'option2',
    // Preselect the second option
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabledOptions: ['option1', 'option2', 'option3'] // Disable all options
  }
}`,...(P=(S=r.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const I=["Default","Preselected","CustomOptions","OneDisabled","AllDisabledWithPreselected"];export{r as AllDisabledWithPreselected,n as CustomOptions,e as Default,p as OneDisabled,t as Preselected,I as __namedExportsOrder,H as default};
