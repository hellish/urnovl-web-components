import{k as ue}from"./entry-preview-BcHUnPw7.js";import{U as o}from"./ur-user-DVfVWeOB.js";import"./index-DrFu-skq.js";import"./ur-button-DD2i9WoV.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-DddAbXmr.js";import"./index-B-mBYDoO.js";import"./class-map-CDMw4-pN.js";import"./get-7S0C3xNv.js";import"./template-yncBVCyc.js";import"./index-BriiHZyV.js";import"./button-base-CWeRpzKK.js";import"./if-defined-CL77Dv0Z.js";import"./anchor--mD29Q5y.js";import"./form-B80GgqR6.js";import"./index-DsS9OQyQ.js";const oe="0123456789ABCDEFGHJKMNPQRSTVWXYZ",c=32,le=16,se=10,R=0xffffffffffff;var n;(function(e){e.Base32IncorrectEncoding="B32_ENC_INVALID",e.DecodeTimeInvalidCharacter="DEC_TIME_CHAR",e.DecodeTimeValueMalformed="DEC_TIME_MALFORMED",e.EncodeTimeNegative="ENC_TIME_NEG",e.EncodeTimeSizeExceeded="ENC_TIME_SIZE_EXCEED",e.EncodeTimeValueMalformed="ENC_TIME_MALFORMED",e.PRNGDetectFailure="PRNG_DETECT",e.ULIDInvalid="ULID_INVALID",e.Unexpected="UNEXPECTED",e.UUIDInvalid="UUID_INVALID"})(n||(n={}));class i extends Error{constructor(t,r){super(`${r} (${t})`),this.name="ULIDError",this.code=t}}function me(e){let t=Math.floor(e()*c);return t===c&&(t=c-1),oe.charAt(t)}function pe(e){const t=fe(),r=t&&(t.crypto||t.msCrypto)||null;if(typeof(r==null?void 0:r.getRandomValues)=="function")return()=>{const s=new Uint8Array(1);return r.getRandomValues(s),s[0]/255};if(typeof(r==null?void 0:r.randomBytes)=="function")return()=>r.randomBytes(1).readUInt8()/255;throw new i(n.PRNGDetectFailure,"Failed to find a reliable PRNG")}function fe(){return Se()?self:typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:null}function ge(e,t){let r="";for(;e>0;e--)r=me(t)+r;return r}function Ee(e,t=se){if(isNaN(e))throw new i(n.EncodeTimeValueMalformed,`Time must be a number: ${e}`);if(e>R)throw new i(n.EncodeTimeSizeExceeded,`Cannot encode a time larger than ${R}: ${e}`);if(e<0)throw new i(n.EncodeTimeNegative,`Time must be positive: ${e}`);if(Number.isInteger(e)===!1)throw new i(n.EncodeTimeValueMalformed,`Time must be an integer: ${e}`);let r,s="";for(let d=t;d>0;d--)r=e%c,s=oe.charAt(r)+s,e=(e-r)/c;return s}function Se(){return typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope}function he(e,t){const r=pe(),s=Date.now();return Ee(s,se)+ge(le,r)}var _=Object.freeze,Ne=Object.defineProperty,we=(e,t)=>_(Ne(e,"raw",{value:_(e.slice())})),T;const Re=({userId:e,followed:t,userTitle:r,userCover:s,followers:d,showStats:ne,userDescription:ae,borderRadius:ie="8px",width:ce,loading:de=!1})=>{const a=he();return ue(T||(T=we([`
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
                        el.setAttribute('followed', followed);
                    });
                })(t`,`[i], i)


            }
        <\/script>
    `])),ce,ie,a,e,ae,r,s,d,ne,de,t,a,a,a,a)},Pe={title:"Urnovl/Business/User",render:e=>Re(e)},u={args:o[0]},l={args:o[0],followed:!0},m={args:{...o[0],userCover:null}},p={args:o[1]},f={args:o[0]},g={args:o[2]},E={args:{...o[0],width:"250px"}},S={args:{...o[0],width:"650px"}},h={args:{...o[2],width:"650px"}},N={args:{...o[0],userCover:o[0].userCover,width:"100%",borderRadius:"0"}},w={args:{...o[2],loading:!0,width:"300px"}};var D,v,U;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: USERS[0]
}`,...(U=(v=u.parameters)==null?void 0:v.docs)==null?void 0:U.source}}};var I,x,B;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: USERS[0],
  followed: true
}`,...(B=(x=l.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var M,b,C;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    userCover: null
  }
}`,...(C=(b=m.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var A,W,y;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: USERS[1]
}`,...(y=(W=p.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var G,F,P;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: USERS[0]
}`,...(P=(F=f.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var V,k,L;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: USERS[2]
}`,...(L=(k=g.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var O,$,z;E.parameters={...E.parameters,docs:{...(O=E.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    width: '250px'
  }
}`,...(z=($=E.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var X,j,H;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    width: '650px'
  }
}`,...(H=(j=S.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var Z,J,K;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...USERS[2],
    width: '650px'
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,q;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    userCover: USERS[0]['userCover'],
    width: '100%',
    borderRadius: '0'
  }
}`,...(q=(Y=N.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var ee,re,te;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...USERS[2],
    loading: true,
    width: '300px'
  }
}`,...(te=(re=w.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const Ve=["Default","Followed","BrokenCover","NoStats","SmallDescription","BigDescription","SmallerWidth","BiggerWidth","BigDescriptionWithBiggerWidth","NoBorderRadius","LoadingData"];export{g as BigDescription,h as BigDescriptionWithBiggerWidth,S as BiggerWidth,m as BrokenCover,u as Default,l as Followed,w as LoadingData,N as NoBorderRadius,p as NoStats,f as SmallDescription,E as SmallerWidth,Ve as __namedExportsOrder,Pe as default};
