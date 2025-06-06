import{x as C}from"./entry-preview-CxXhOGqP.js";import"./ur-locale-filter-button-9okrf-WT.js";import"./index-DrFu-skq.js";import"./ur-button-icon-BR1VQfom.js";import"./chunk-L4EGOTBX-BPj2F1fn.js";import"./index-Bdp-Mrn6.js";import"./index-CFISRIGu.js";import"./class-map-CvfWHz58.js";import"./get-DCsNyb8P.js";import"./watch-ByvFYHv8.js";import"./template-DbMQw6l-.js";import"./button-base--7WXG1Vh.js";import"./if-defined-D52-l-pg.js";import"./anchor-BJ52fAYX.js";import"./form-CWZnyZ12.js";import"./index-rsUJIYwf.js";import"./index-pr7ns5cs.js";import"./index-CtpJcEdY.js";import"./index-_7_SoGGi.js";import"./live-DwPmnOYN.js";import"./default-value-dSVzt9o_.js";import"./svg-tag-B1kmCZ6g.js";const r=[{label:"English",value:"en",checked:!1},{label:"German",value:"de",checked:!1},{label:"Greek",value:"el",checked:!1},{label:"Russian",value:"eu",checked:!1},{label:"Spanish",value:"es",checked:!1},{label:"Italian",value:"it",checked:!1},{label:"French",value:"fr",checked:!1},{label:"Turkish",value:"tr",checked:!1},{label:"Hindi",value:"hi",checked:!1}],x=({count:e=0})=>C`<ur-locale-filter-button count="${e}"></ur-locale-filter-button>`,a=({showHeader:e=!0,showFooter:W=!0,locales:$=[]})=>C`
        <ur-locale-filter-panel
            show-header="${e}"
            show-footer="${W}"
            .locales="${$}"
        >
        </ur-locale-filter-panel>
    `,oe={title:"Urnovl/Business/NovlFilters"},o={render:()=>x({count:0})},l={render:()=>x({count:5})},s={render:()=>a({locales:r})},t={render:()=>a({showHeader:!1,locales:r})},n={render:()=>a({showFooter:!1,locales:r})},c={render:()=>a({showHeader:!1,showFooter:!1,locales:r})},u={render:()=>a({locales:r.map(e=>e.value==="en"||e.value==="de"?{...e,checked:!0}:e)})};var d,i,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(A=(O=u.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const le=["DefaultButton","ButtonWithSelectedFilters","LocalePanel","LocalePanelNoHeader","LocalePanelNoFooter","LocalePanelNoHeaderNoFooter","LocalePanelWithPreselectedLanguages"];export{l as ButtonWithSelectedFilters,o as DefaultButton,s as LocalePanel,n as LocalePanelNoFooter,t as LocalePanelNoHeader,c as LocalePanelNoHeaderNoFooter,u as LocalePanelWithPreselectedLanguages,le as __namedExportsOrder,oe as default};
