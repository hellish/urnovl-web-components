import{k as N}from"./entry-preview-BcHUnPw7.js";import"./ur-thumbs-rating-ClVJ1f0k.js";import"./index-DrFu-skq.js";import"./ur-button-icon-CpyodfmA.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-BJvbtjhH.js";import"./index-rXz1tEXk.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-DxLrUPRs.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-C8TuHONp.js";import"./form-DhDC-phE.js";import"./index-CXOzFcj5.js";import"./index-pqI9kxak.js";const _=o=>{let s=o.isLiked,t=o.isDisliked,r=o.likesCount;const S=()=>{t&&(t=!1),s=!s,r=s?r+1:r-1;const e=document.querySelector("ur-thumbs-rating");e&&(e.isLiked=s,e.isDisliked=t,e.likesCount=r)},$=()=>{s&&(s=!1,r--),t=!t;const e=document.querySelector("ur-thumbs-rating");e&&(e.isLiked=s,e.isDisliked=t,e.likesCount=r)};return N`
        <ur-thumbs-rating
            likes-count="${r}"
            dislike-text="${o.dislikeText}"
            is-liked="${s}"
            is-disliked="${t}"
            @thumbsUp="${S}"
            @thumbsDown="${$}"
        ></ur-thumbs-rating>
    `},J={title:"urnovl/Business/ThumbsRating",render:_,argTypes:{likesCount:{control:"number",description:"Number of likes to display"},dislikeText:{control:"text",description:"Text to display for dislike button"},isLiked:{control:"boolean",description:"Whether the content is liked"},isDisliked:{control:"boolean",description:"Whether the content is disliked"}}},i={args:{likesCount:42,dislikeText:"Dislike",isLiked:!1,isDisliked:!1}},n={args:{...i.args,isLiked:!0,likesCount:43}},a={args:{...i.args,isDisliked:!0}},l={args:{...i.args,likesCount:9999}},d={args:{...i.args,dislikeText:"No thanks"}};var u,c,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    likesCount: 42,
    dislikeText: 'Dislike',
    isLiked: false,
    isDisliked: false
  }
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var k,p,g;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isLiked: true,
    likesCount: 43
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var D,f,h;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isDisliked: true
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,T,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    likesCount: 9999
  }
}`,...(x=(T=l.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var C,L,y;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dislikeText: 'No thanks'
  }
}`,...(y=(L=d.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};const K=["Default","Liked","Disliked","ManyLikes","CustomDislikeText"];export{d as CustomDislikeText,i as Default,a as Disliked,n as Liked,l as ManyLikes,K as __namedExportsOrder,J as default};
