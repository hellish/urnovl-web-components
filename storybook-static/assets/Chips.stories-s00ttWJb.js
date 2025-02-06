import{k as j}from"./entry-preview-BcHUnPw7.js";import"./ur-chip-Cyy2q_2n.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-B9J0OpMa.js";import"./index-CubFVPVs.js";import"./get-w4emotEH.js";import"./anchor-ClLaGEwM.js";import"./if-defined-CL77Dv0Z.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./check-ZIEdMJI8.js";import"./svg-tag-DDFZdwWr.js";import"./index-D2jzjD89.js";import"./button-base-DwUGB6N2.js";import"./form-BeuMnVCp.js";const q=({label:i="Chip",loading:S=!1,disabled:y=!1,clickable:_=!0,border:v="0",radius:z="8px",size:E="32px",backColor:O="rgb(var(--mdui-color-secondary-container))",fontColor:T="rgb(var(--mdui-color-on-secondary-container))"})=>j`
    <ur-chip 
        label=${i} 
        disabled=${y} 
        loading=${S}
        clickable=${_}
        border=${v}
        radius=${z}
        size=${E}
        backColor=${O}
        fontColor=${T}
    ></ur-chip>
`,X={title:"Core/Chips",render:i=>q(i),argTypes:{label:{control:"text"},border:{control:"text"},radius:{control:"text"},size:{control:"text"},backColor:{control:"color"},fontColor:{control:"color"},disabled:{control:"boolean"},loading:{control:"boolean"},clickable:{control:"boolean"}}},e={args:{label:"Default Chip"}},a={args:{label:"Disabled Chip",disabled:!0}},r={args:{label:"Loading Chip",loading:!0}},o={args:{label:"Non-Clickable Chip",clickable:!1}},l={args:{label:"Non-Clickable Disabled Chip",clickable:!1,disabled:!0}},s={args:{label:"Non-Clickable Loading Chip",clickable:!1,loading:!0}};var n,c,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Default Chip'
  }
}`,...(t=(c=e.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};var d,p,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Chip',
    disabled: true
  }
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Loading Chip',
    loading: true
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var C,k,h;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Non-Clickable Chip',
    clickable: false
  }
}`,...(h=(k=o.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var f,D,N;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Non-Clickable Disabled Chip',
    clickable: false,
    disabled: true
  }
}`,...(N=(D=l.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var $,x,L;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Non-Clickable Loading Chip',
    clickable: false,
    loading: true
  }
}`,...(L=(x=s.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};const Y=["Default","Disabled","Loading","NonClickable","NonClickableDisabled","NonClickableLoading"];export{e as Default,a as Disabled,r as Loading,o as NonClickable,l as NonClickableDisabled,s as NonClickableLoading,Y as __namedExportsOrder,X as default};
