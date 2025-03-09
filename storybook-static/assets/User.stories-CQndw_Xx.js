import{k as V}from"./entry-preview-BcHUnPw7.js";import{U as r}from"./ur-user-BrtsH597.js";import"./index-DrFu-skq.js";import"./ur-button-BRTSQpVH.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-BJvbtjhH.js";import"./index-BRY6Z_ZR.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./template-yncBVCyc.js";import"./index-CXOzFcj5.js";import"./button-base-DxLrUPRs.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-C8TuHONp.js";import"./form-DhDC-phE.js";import"./index-pqI9kxak.js";const X=({userId:m,userTitle:H,userCover:I,followers:J,showStats:K,userDescription:M,borderRadius:P="8px",width:Q,loading:T=!1})=>V`
    <style>
        ur-user {
            --user-width: ${Q};
            --user-border-radius: ${P};
        }
    </style>
    <ur-user
        user-id="${m}"
        user-description="${M}"
        user-title="${H}"
        user-cover="${I}"
        followers="${J}"
        show-stats="${K}"
        loading=${T}
    </ur-user>
`,Sr={title:"Urnovl/Business/User",render:m=>X(m)},e={args:r[0]},s={args:{...r[0],userCover:null}},o={args:r[1]},a={args:r[0]},t={args:r[2]},i={args:{...r[0],width:"250px"}},n={args:{...r[0],width:"650px"}},c={args:{...r[2],width:"650px"}},p={args:{...r[0],userCover:r[0].userCover,width:"100%",borderRadius:"0"}},d={args:{...r[2],loading:!0,width:"300px"}};var u,g,S;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: USERS[0]
}`,...(S=(g=e.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var l,h,U;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    userCover: null
  }
}`,...(U=(h=s.parameters)==null?void 0:h.docs)==null?void 0:U.source}}};var R,w,B;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: USERS[1]
}`,...(B=(w=o.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var E,x,v;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: USERS[0]
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var D,$,C;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: USERS[2]
}`,...(C=($=t.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var W,f,k;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    width: '250px'
  }
}`,...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var N,b,_;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    width: '650px'
  }
}`,...(_=(b=n.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var y,L,O;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...USERS[2],
    width: '650px'
  }
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var j,q,z;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    userCover: USERS[0]['userCover'],
    width: '100%',
    borderRadius: '0'
  }
}`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var A,F,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...USERS[2],
    loading: true,
    width: '300px'
  }
}`,...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const lr=["Default","BrokenCover","NoStats","SmallDescription","BigDescription","SmallerWidth","BiggerWidth","BigDescriptionWithBiggerWidth","NoBorderRadius","LoadingData"];export{t as BigDescription,c as BigDescriptionWithBiggerWidth,n as BiggerWidth,s as BrokenCover,e as Default,d as LoadingData,p as NoBorderRadius,o as NoStats,a as SmallDescription,i as SmallerWidth,lr as __namedExportsOrder,Sr as default};
