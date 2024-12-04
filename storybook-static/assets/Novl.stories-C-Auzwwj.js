import{k as cr}from"./entry-preview-BcHUnPw7.js";import{N as r}from"./ur-novl-DJze7fAa.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-Dnt4yWMo.js";const ir=({novlId:u,novlTitle:J,novlCover:K,likes:M,views:Q,showStats:T,novlDescription:X,authorAvatar:Y,authorName:Z,published:rr,price:er,publisherName:sr,publisherAvatar:ar,borderRadius:or="8px",width:tr,loading:nr=!1})=>cr`
    <style>
        ur-novl {
            --novl-width: ${tr};
            --novl-border-radius: ${or};
        }
    </style>
    <ur-novl
        novl-id="${u}"
        author-name="${Z}"
        author-avatar="${Y}"
        novl-description="${X}"
        novl-title="${J}"
        novl-cover="${K}"
        likes="${M}"
        views="${Q}"
        show-stats="${T}"
        published="${rr}"
        price="${er}"
        publisher-name="${sr}"
        publisher-avatar="${ar}"
        loading=${nr}></ur-novl>`,gr={title:"Urnovl/Business/Novl",render:u=>ir(u)},e={args:r[0]},s={args:{...r[0],novlCover:null}},a={args:r[1]},o={args:r[2]},t={args:r[3]},n={args:r[4]},c={args:r[5]},i={args:{...r[6],width:"320px"}},d={args:{...r[7],width:"350px"}},p={args:{...r[7],novlCover:r[6].novlCover,width:"100%",borderRadius:"0"}},l={args:{...r[2],loading:!0,showStats:!0,width:"300px"}};var m,g,v;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: NOVLS[0]
}`,...(v=(g=e.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,h,N;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...NOVLS[0],
    novlCover: null
  }
}`,...(N=(h=s.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var $,L,O;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: NOVLS[1]
}`,...(O=(L=a.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var w,V,W;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: NOVLS[2]
}`,...(W=(V=o.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var x,B,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: NOVLS[3]
}`,...(b=(B=t.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var C,f,D;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: NOVLS[4]
}`,...(D=(f=n.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var k,F,P;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: NOVLS[5]
}`,...(P=(F=c.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var R,_,y;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...NOVLS[6],
    width: '320px'
  }
}`,...(y=(_=i.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var E,U,j;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...NOVLS[7],
    width: '350px'
  }
}`,...(j=(U=d.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var q,z,A;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...NOVLS[7],
    novlCover: NOVLS[6]['novlCover'],
    width: '100%',
    borderRadius: '0'
  }
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var G,H,I;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...NOVLS[2],
    loading: true,
    showStats: true,
    width: '300px'
  }
}`,...(I=(H=l.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const vr=["Default","BrokenCover","NoStats","SmallDescription","WithPrice","WithPublisher","Full","BiggerWidth","FullWithBiggerWidth","NoBorderRadius","LoadingData"];export{i as BiggerWidth,s as BrokenCover,e as Default,c as Full,d as FullWithBiggerWidth,l as LoadingData,p as NoBorderRadius,a as NoStats,o as SmallDescription,t as WithPrice,n as WithPublisher,vr as __namedExportsOrder,gr as default};
