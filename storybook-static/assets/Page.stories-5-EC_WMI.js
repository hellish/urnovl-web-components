import{x as sr}from"./entry-preview-CxXhOGqP.js";import{u as tr}from"./index-DNfkk2nW.js";import{P as r}from"./ur-page-Dj8VRpv9.js";import"./index-DrFu-skq.js";import"./ur-button-BaOF-btP.js";import"./chunk-L4EGOTBX-BPj2F1fn.js";import"./index-Bdp-Mrn6.js";import"./index-CtpJcEdY.js";import"./class-map-CvfWHz58.js";import"./get-DCsNyb8P.js";import"./template-DbMQw6l-.js";import"./index-rsUJIYwf.js";import"./button-base--7WXG1Vh.js";import"./if-defined-D52-l-pg.js";import"./anchor-BJ52fAYX.js";import"./form-CWZnyZ12.js";import"./index-pr7ns5cs.js";var S=Object.freeze,nr=Object.defineProperty,ir=(e,u)=>S(nr(e,"raw",{value:S(e.slice())})),w;const pr=({pageId:e,pageTitle:u,pageCover:X,followers:Y,showStats:Z,pageDescription:$,borderRadius:rr="8px",width:er,loading:ar=!1,followed:or=!1})=>{const a=tr();return sr(w||(w=ir([`
        <style>
            ur-page {
                --page-width: `,`;
                --page-border-radius: `,`;
            }
        </style>
        <ur-page
            id="`,`"
            page-id="`,`"
            page-description="`,`"
            page-title="`,`"
            page-cover="`,`"
            followers="`,`"
            show-stats="`,`"
            loading=`,`
            followed=`,`
        </ur-page>
        <script>
            let t`,` = document.getElementsByTagName('ur-page')
            for (var i = 0; i < t`,`.length; i++) {
                (function(el, index) {
                    el.addEventListener('pageFollowClicked', function(e) {
                        const [id, followed] = e.detail
                        console.log('pageFollowClicked', index, id, followed, "t`,`")
                        el.setAttribute('followed', !followed);
                    });
                })(t`,`[i], i)
            }
        <\/script>
    `])),er,rr,a,e,$,u,X,Y,Z,ar,or,a,a,a,a)},Cr={title:"Urnovl/Business/Page",render:e=>pr(e)},o={args:r[0]},s={args:{...r[0],followed:!0}},t={args:{...r[0],pageCover:null}},n={args:r[1]},i={args:r[0]},p={args:r[2]},c={args:{...r[0],width:"250px"}},d={args:{...r[0],width:"650px"}},g={args:{...r[2],width:"650px"}},l={args:{...r[0],pageCover:r[0].pageCover,width:"100%",borderRadius:"0"}},m={args:{...r[2],loading:!0,width:"300px"}};var f,h,P;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: PAGES[0]
}`,...(P=(h=o.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var v,E,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...PAGES[0],
    followed: true
  }
}`,...(x=(E=s.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var A,B,G;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...PAGES[0],
    pageCover: null
  }
}`,...(G=(B=t.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var C,D,_;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: PAGES[1]
}`,...(_=(D=n.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var W,b,N;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: PAGES[0]
}`,...(N=(b=i.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var y,F,R;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: PAGES[2]
}`,...(R=(F=p.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var k,L,O;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...PAGES[0],
    width: '250px'
  }
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var j,z,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...PAGES[0],
    width: '650px'
  }
}`,...(T=(z=d.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var U,q,H;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...PAGES[2],
    width: '650px'
  }
}`,...(H=(q=g.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var I,J,K;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...PAGES[0],
    pageCover: PAGES[0]['pageCover'],
    width: '100%',
    borderRadius: '0'
  }
}`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,V;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...PAGES[2],
    loading: true,
    width: '300px'
  }
}`,...(V=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const Dr=["Default","Followed","BrokenCover","NoStats","SmallDescription","BigDescription","SmallerWidth","BiggerWidth","BigDescriptionWithBiggerWidth","NoBorderRadius","LoadingData"];export{p as BigDescription,g as BigDescriptionWithBiggerWidth,d as BiggerWidth,t as BrokenCover,o as Default,s as Followed,m as LoadingData,l as NoBorderRadius,n as NoStats,i as SmallDescription,c as SmallerWidth,Dr as __namedExportsOrder,Cr as default};
