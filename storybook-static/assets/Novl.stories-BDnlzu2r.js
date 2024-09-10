import{k as er}from"./lit-element-CPYlYYac.js";import{N as r}from"./ur-novl-B6fV75YP.js";import"./chunk-GKNNPQCW-BkHQSocK.js";import"./index-K5CyEtrH.js";const sr=({novlTitle:l,novlCover:A,likes:G,views:H,showStats:I,novlDescription:J,authorAvatar:K,authorName:M,published:Q,price:T,publisherName:X,publisherAvatar:Y,borderRadius:Z="16px 16px 0px 0px",width:rr="270px"})=>er`
    <style>
        ur-novl {
            --novl-width: ${rr};
            --novl-border-radius: ${Z};
        }
    </style>
    <ur-novl
        author-name="${M}"
        author-avatar="${K}"
        novl-description="${J}"
        novl-title="${l}"
        novl-cover="${A}"
        likes="${G}"
        views="${H}"
        show-stats="${I}"
        published="${Q}"
        price="${T}"
        publisher-name="${X}"
        publisher-avatar="${Y}"></ur-novl>
`,cr={title:"Urnovl/Novl",render:l=>sr(l)},e={args:r[0]},s={args:{...r[0],novlCover:null}},a={args:r[1]},o={args:r[2]},t={args:r[3]},n={args:r[4]},c={args:r[5]},i={args:{...r[6],width:"320px"}},p={args:{...r[7],width:"350px"}},d={args:{...r[7],novlCover:r[6].novlCover,width:"450px",borderRadius:"0"}};var u,m,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: NOVLS[0]
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,S,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...NOVLS[0],
    novlCover: null
  }
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var N,$,x;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: NOVLS[1]
}`,...(x=($=a.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var O,L,V;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: NOVLS[2]
}`,...(V=(L=o.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var W,w,b;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: NOVLS[3]
}`,...(b=(w=t.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var B,C,f;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: NOVLS[4]
}`,...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var k,D,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: NOVLS[5]
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var P,R,_;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...NOVLS[6],
    width: '320px'
  }
}`,...(_=(R=i.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var y,E,U;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...NOVLS[7],
    width: '350px'
  }
}`,...(U=(E=p.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var j,q,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...NOVLS[7],
    novlCover: NOVLS[6]['novlCover'],
    width: '450px',
    borderRadius: '0'
  }
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const ir=["Default","BrokenCover","NoStats","SmallDescription","WithPrice","WithPublisher","Full","BiggerWidth","FullWithBiggerWidth","NoBorderRadius"];export{i as BiggerWidth,s as BrokenCover,e as Default,c as Full,p as FullWithBiggerWidth,d as NoBorderRadius,a as NoStats,o as SmallDescription,t as WithPrice,n as WithPublisher,ir as __namedExportsOrder,cr as default};
