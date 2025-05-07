import{x as l}from"./entry-preview-CxXhOGqP.js";import"./ur-button-DHluMf_C.js";import"./ur-button-arrow-right-BsUqGCsT.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-BPj2F1fn.js";import"./index-Bdp-Mrn6.js";import"./index-CtpJcEdY.js";import"./class-map-CvfWHz58.js";import"./get-DCsNyb8P.js";import"./template-DbMQw6l-.js";import"./index-rsUJIYwf.js";import"./button-base--7WXG1Vh.js";import"./if-defined-D52-l-pg.js";import"./anchor-BJ52fAYX.js";import"./form-CWZnyZ12.js";import"./index-pr7ns5cs.js";import"./index-CFISRIGu.js";import"./watch-ByvFYHv8.js";const j=({disabled:r=!1})=>l`
    <ur-button-arrow-left disabled=${r}></ur-button-arrow-left>
`,k=({disabled:r=!1})=>l`
    <ur-button-arrow-right disabled=${r}></ur-button-arrow-right>
`,J=({text:r="Welcome",disabled:q=!1,variant:z="filled",icon:G=null,endIcon:H=null})=>l`
    <ur-button icon=${G} end-icon=${H} variant=${z} disabled=${q}>${r}</ur-button>
`,dr={title:"Core/Buttons",render:r=>J(r),argTypes:{variant:{control:"select",options:["elevated","filled","tonal","outlined","text"]}}},e={render:()=>j({})},o={render:()=>j({disabled:!0})},t={render:()=>k({})},a={render:()=>k({disabled:!0})},s={args:{}},n={args:{disabled:!0}},i={args:{variant:"outlined"},argTypes:{variant:{control:"select",options:["elevated","filled","tonal","outlined","text"]}}},c={args:{icon:"search",endIcon:"arrow_forward"}},d={args:{icon:"search",endIcon:"arrow_forward",variant:"outlined",disabled:!1}};var u,p,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ButtonArrowLeft({})
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,w,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ButtonArrowLeft({
    disabled: true
  })
}`,...(f=(w=o.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var b,h,A;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ButtonArrowRight({})
}`,...(A=(h=t.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var v,B,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ButtonArrowRight({
    disabled: true
  })
}`,...(S=(B=a.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var L,R,_;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {}
}`,...(_=(R=s.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var $,x,D;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(D=(x=n.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var I,W,y;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'filled', 'tonal', 'outlined', 'text']
    }
  }
}`,...(y=(W=i.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var T,F,V;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    endIcon: 'arrow_forward'
  }
}`,...(V=(F=c.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var C,E,O;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    endIcon: 'arrow_forward',
    variant: 'outlined',
    disabled: false
  }
}`,...(O=(E=d.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const lr=["ArrowLeft","DisabledArrowLeft","ArrowRight","DisbledArrowRight","Basic","Disabled","WithVariant","WithIcons","Full"];export{e as ArrowLeft,t as ArrowRight,s as Basic,n as Disabled,o as DisabledArrowLeft,a as DisbledArrowRight,d as Full,c as WithIcons,i as WithVariant,lr as __namedExportsOrder,dr as default};
