import{k as C}from"./entry-preview-BcHUnPw7.js";import"./ur-locale-filter-button-B9mkM7QB.js";import"./index-DrFu-skq.js";import"./ur-button-icon-HHRV7FQV.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-B9J0OpMa.js";import"./index-CTeXfnxQ.js";import"./get-D9DBDJjp.js";import"./class-map-DirLTUPi.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-ETGWZztw.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-Bt_5eb2T.js";import"./form-D6WTgxde.js";import"./ripple-mixin-Baxn-44g.js";import"./index-BXDV2pmF.js";import"./utils-C7udwElL.js";import"./index-s090kVPT.js";import"./index-Ce28mpJG.js";import"./live-BrcR7EIG.js";import"./default-value-4Lb4bBXQ.js";import"./svg-tag-vg7NTGHU.js";const r=[{label:"English",value:"en",checked:!1},{label:"German",value:"de",checked:!1},{label:"Greek",value:"el",checked:!1},{label:"Russian",value:"eu",checked:!1},{label:"Spanish",value:"es",checked:!1},{label:"Italian",value:"it",checked:!1},{label:"French",value:"fr",checked:!1},{label:"Turkish",value:"tr",checked:!1},{label:"Hindi",value:"hi",checked:!1}],W=({count:e=0})=>C`<ur-locale-filter-button count="${e}"></ur-locale-filter-button>`,a=({showHeader:e=!0,showFooter:$=!0,locales:x=[]})=>C`
        <ur-locale-filter-panel
            show-header="${e}"
            show-footer="${$}"
            .locales="${x}"
        >
        </ur-locale-filter-panel>
    `,le={title:"Urnovl/Business/NovlFilters"},o={render:()=>W({count:0})},l={render:()=>W({count:5})},s={render:()=>a({locales:r})},t={render:()=>a({showHeader:!1,locales:r})},n={render:()=>a({showFooter:!1,locales:r})},c={render:()=>a({showHeader:!1,showFooter:!1,locales:r})},u={render:()=>a({locales:r.map(e=>e.value==="en"||e.value==="de"?{...e,checked:!0}:e)})};var d,i,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => Button({
    count: 0
  })
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,h,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => Button({
    count: 5
  }) // Example count for selected filters
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var L,P,v;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => Panel({
    locales: LOCALES
  })
}`,...(v=(P=s.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var S,k,F;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => Panel({
    showHeader: false,
    locales: LOCALES
  })
}`,...(F=(k=t.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var g,b,w;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => Panel({
    showFooter: false,
    locales: LOCALES
  })
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var N,E,H;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => Panel({
    showHeader: false,
    showFooter: false,
    locales: LOCALES
  })
}`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var B,O,A;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => Panel({
    locales: LOCALES.map(locale => locale.value === 'en' || locale.value === 'de' ? {
      ...locale,
      checked: true
    } : locale)
  })
}`,...(A=(O=u.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const se=["DefaultButton","ButtonWithSelectedFilters","LocalePanel","LocalePanelNoHeader","LocalePanelNoFooter","LocalePanelNoHeaderNoFooter","LocalePanelWithPreselectedLanguages"];export{l as ButtonWithSelectedFilters,o as DefaultButton,s as LocalePanel,n as LocalePanelNoFooter,t as LocalePanelNoHeader,c as LocalePanelNoHeaderNoFooter,u as LocalePanelWithPreselectedLanguages,se as __namedExportsOrder,le as default};
