import{k as g}from"./entry-preview-BcHUnPw7.js";import"./ur-linear-progress-D9NraJXh.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-BJvbtjhH.js";const d=s=>g` <ur-linear-progress max="${s.max}" value="${s.value}"></ur-linear-progress> `,D={title:"Core/Linear Progress",render:d,argTypes:{max:{control:"number",description:"The maximum value for the progress bar"},value:{control:"number",description:"The current value for the progress bar. If omitted, the progress bar will be indeterminate."}}},r={args:{max:1},render:()=>g` <ur-linear-progress max="1"></ur-linear-progress> `},e={args:{max:1,value:.5}},a={args:{max:100,value:100}};var o,t,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    max: 1
  },
  render: () => html\` <ur-linear-progress max="1"></ur-linear-progress> \`
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var m,i,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    max: 1,
    value: 0.5 // 50% progress
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,u,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    max: 100,
    value: 100 // 100% progress
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const T=["IndeterminateNoValue","DeterminateHalf","DeterminateFull"];export{a as DeterminateFull,e as DeterminateHalf,r as IndeterminateNoValue,T as __namedExportsOrder,D as default};
