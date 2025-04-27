import{x as O}from"./entry-preview-CxXhOGqP.js";import"./ur-time-ago-DDan2G4j.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-BPj2F1fn.js";import"./index-Bdp-Mrn6.js";const _=a=>O`
  <ur-time-ago
    date=${a.date}
    locale=${a.locale}
  ></ur-time-ago>
`,B={title:"urnovl/Basic/TimeAgo",render:_,argTypes:{date:{control:"text",description:"ISO date string to format"}}},e=a=>{const l=new Date;return l.setMinutes(l.getMinutes()-a),l.toISOString()},t={args:{date:e(0),locale:"en"}},o={args:{date:e(5),locale:"en"}},r={args:{date:e(120),locale:"en"}},s={args:{date:e(1440),locale:"en"}},n={args:{date:e(4320),locale:"en"}},i={render:()=>O`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div>Just now: <ur-time-ago date=${e(0)} locale="en"></ur-time-ago></div>
      <div>5 minutes ago: <ur-time-ago date=${e(5)} locale="en"></ur-time-ago></div>
      <div>2 hours ago: <ur-time-ago date=${e(120)} locale="en"></ur-time-ago></div>
      <div>Yesterday: <ur-time-ago date=${e(1440)} locale="en"></ur-time-ago></div>
      <div>3 days ago: <ur-time-ago date=${e(4320)} locale="en"></ur-time-ago></div>
    </div>
  `},d={args:{date:"2024-02-08T10:30:00Z",locale:"en"}};var c,g,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    date: getRelativeDate(0),
    locale: 'en'
  }
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,p,v;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    date: getRelativeDate(5),
    locale: 'en'
  }
}`,...(v=(p=o.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var D,y,x;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    date: getRelativeDate(120),
    // 2 hours ago
    locale: 'en'
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var $,R,S;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    date: getRelativeDate(1440),
    // 24 hours ago
    locale: 'en'
  }
}`,...(S=(R=s.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var A,f,M;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    date: getRelativeDate(4320),
    // 3 days ago
    locale: 'en'
  }
}`,...(M=(f=n.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var T,h,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div>Just now: <ur-time-ago date=\${getRelativeDate(0)} locale="en"></ur-time-ago></div>
      <div>5 minutes ago: <ur-time-ago date=\${getRelativeDate(5)} locale="en"></ur-time-ago></div>
      <div>2 hours ago: <ur-time-ago date=\${getRelativeDate(120)} locale="en"></ur-time-ago></div>
      <div>Yesterday: <ur-time-ago date=\${getRelativeDate(1440)} locale="en"></ur-time-ago></div>
      <div>3 days ago: <ur-time-ago date=\${getRelativeDate(4320)} locale="en"></ur-time-ago></div>
    </div>
  \`
}`,...(w=(h=i.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var J,Y,E;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    date: '2024-02-08T10:30:00Z',
    locale: 'en'
  }
}`,...(E=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:E.source}}};const U=["JustNow","MinutesAgo","HoursAgo","Yesterday","DaysAgo","MultipleExamples","CustomDate"];export{d as CustomDate,n as DaysAgo,r as HoursAgo,t as JustNow,o as MinutesAgo,i as MultipleExamples,s as Yesterday,U as __namedExportsOrder,B as default};
