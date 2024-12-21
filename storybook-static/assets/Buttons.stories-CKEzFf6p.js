import{k as l}from"./entry-preview-BcHUnPw7.js";import"./ur-button-D8kISLsZ.js";import"./ur-button-arrow-right-D6VZyeep.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-B9J0OpMa.js";import"./index-s090kVPT.js";import"./get-D9DBDJjp.js";import"./class-map-DirLTUPi.js";import"./template-yncBVCyc.js";import"./index-BXDV2pmF.js";import"./button-base-ETGWZztw.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-Bt_5eb2T.js";import"./form-D6WTgxde.js";import"./ripple-mixin-Baxn-44g.js";import"./index-CTeXfnxQ.js";import"./watch-ByvFYHv8.js";const O=({disabled:r=!1})=>l`
    <ur-button-arrow-left disabled=${r}></ur-button-arrow-left>
`,j=({disabled:r=!1})=>l`
    <ur-button-arrow-right disabled=${r}></ur-button-arrow-right>
`,J=({text:r="Welcome",disabled:q=!1,variant:z="filled",icon:G=null,endIcon:H=null})=>l`
    <ur-button icon=${G} end-icon=${H} variant=${z} disabled=${q}>${r}</ur-button>
`,dr={title:"Core/Buttons",render:r=>J(r),argTypes:{variant:{control:"select",options:["elevated","filled","tonal","outlined","text"]}}},e={render:()=>O({})},o={render:()=>O({disabled:!0})},t={render:()=>j({})},a={render:()=>j({disabled:!0})},s={args:{}},n={args:{disabled:!0}},i={args:{variant:"outlined"},argTypes:{variant:{control:"select",options:["elevated","filled","tonal","outlined","text"]}}},c={args:{icon:"search",endIcon:"arrow_forward"}},d={args:{icon:"search",endIcon:"arrow_forward",variant:"outlined",disabled:!1}};var u,p,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(_=(R=s.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var $,D,I;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(I=(D=n.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var x,W,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'filled', 'tonal', 'outlined', 'text']
    }
  }
}`,...(y=(W=i.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var T,k,F;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    endIcon: 'arrow_forward'
  }
}`,...(F=(k=c.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var V,C,E;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    endIcon: 'arrow_forward',
    variant: 'outlined',
    disabled: false
  }
}`,...(E=(C=d.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const lr=["ArrowLeft","DisabledArrowLeft","ArrowRight","DisbledArrowRight","Basic","Disabled","WithVariant","WithIcons","Full"];export{e as ArrowLeft,t as ArrowRight,s as Basic,n as Disabled,o as DisabledArrowLeft,a as DisbledArrowRight,d as Full,c as WithIcons,i as WithVariant,lr as __namedExportsOrder,dr as default};
