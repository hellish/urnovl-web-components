import{x as ar}from"./entry-preview-CxXhOGqP.js";import{u as tr}from"./index-DNfkk2nW.js";import{U as r}from"./ur-user-DPwWq0CV.js";import"./index-DrFu-skq.js";import"./ur-button-BaOF-btP.js";import"./chunk-L4EGOTBX-BPj2F1fn.js";import"./index-Bdp-Mrn6.js";import"./index-CtpJcEdY.js";import"./class-map-CvfWHz58.js";import"./get-DCsNyb8P.js";import"./template-DbMQw6l-.js";import"./index-rsUJIYwf.js";import"./button-base--7WXG1Vh.js";import"./if-defined-D52-l-pg.js";import"./anchor-BJ52fAYX.js";import"./form-CWZnyZ12.js";import"./index-pr7ns5cs.js";var S=Object.freeze,nr=Object.defineProperty,ir=(e,g)=>S(nr(e,"raw",{value:S(e.slice())})),w;const cr=({userId:e,userTitle:g,userCover:X,followers:Y,showStats:Z,userDescription:$,borderRadius:rr="8px",width:er,loading:sr=!1,followed:or=!1})=>{const s=tr();return ar(w||(w=ir([`
        <style>
            ur-user {
                --user-width: `,`;
                --user-border-radius: `,`;
            }
        </style>
        <ur-user
            id="`,`
            user-id="`,`"
            user-description="`,`"
            user-title="`,`"
            user-cover="`,`"
            followers="`,`"
            show-stats="`,`"
            loading=`,`
            followed=`,`
        </ur-user>
        <script>
            let t`,` = document.getElementsByTagName('ur-user')
            for (var i = 0; i < t`,`.length; i++) {
                (function(el, index) {
                    el.addEventListener('userFollowClicked', function(e) {
                        const [id, followed] = e.detail
                        console.log('userFollowClicked', index, id, followed, "t`,`")
                        el.setAttribute('followed', !followed);
                    });
                })(t`,`[i], i)
            }
        <\/script>
    `])),er,rr,s,e,$,g,X,Y,Z,sr,or,s,s,s,s)},Dr={title:"Urnovl/Business/User",render:e=>cr(e)},o={args:r[0]},a={args:{...r[0],followed:!0}},t={args:{...r[0],userCover:null}},n={args:r[1]},i={args:r[0]},c={args:r[2]},d={args:{...r[0],width:"250px"}},p={args:{...r[0],width:"650px"}},u={args:{...r[2],width:"650px"}},l={args:{...r[0],userCover:r[0].userCover,width:"100%",borderRadius:"0"}},m={args:{...r[2],loading:!0,width:"300px"}};var f,h,U;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: USERS[0]
}`,...(U=(h=o.parameters)==null?void 0:h.docs)==null?void 0:U.source}}};var v,R,E;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    followed: true
  }
}`,...(E=(R=a.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var x,B,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    userCover: null
  }
}`,...(C=(B=t.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var D,_,W;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: USERS[1]
}`,...(W=(_=n.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var b,N,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: USERS[0]
}`,...(y=(N=i.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var F,k,L;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: USERS[2]
}`,...(L=(k=c.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var O,j,z;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    width: '250px'
  }
}`,...(z=(j=d.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var P,A,T;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    width: '650px'
  }
}`,...(T=(A=p.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var q,G,H;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...USERS[2],
    width: '650px'
  }
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    userCover: USERS[0]['userCover'],
    width: '100%',
    borderRadius: '0'
  }
}`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,V;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...USERS[2],
    loading: true,
    width: '300px'
  }
}`,...(V=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const _r=["Default","Followed","BrokenCover","NoStats","SmallDescription","BigDescription","SmallerWidth","BiggerWidth","BigDescriptionWithBiggerWidth","NoBorderRadius","LoadingData"];export{c as BigDescription,u as BigDescriptionWithBiggerWidth,p as BiggerWidth,t as BrokenCover,o as Default,a as Followed,m as LoadingData,l as NoBorderRadius,n as NoStats,i as SmallDescription,d as SmallerWidth,_r as __namedExportsOrder,Dr as default};
