import{x as N}from"./entry-preview-CxXhOGqP.js";import"./ur-thumbs-rating-5v_XyKKU.js";import"./index-DrFu-skq.js";import"./ur-button-icon-BR1VQfom.js";import"./chunk-L4EGOTBX-BPj2F1fn.js";import"./index-Bdp-Mrn6.js";import"./index-CFISRIGu.js";import"./class-map-CvfWHz58.js";import"./get-DCsNyb8P.js";import"./watch-ByvFYHv8.js";import"./template-DbMQw6l-.js";import"./button-base--7WXG1Vh.js";import"./if-defined-D52-l-pg.js";import"./anchor-BJ52fAYX.js";import"./form-CWZnyZ12.js";import"./index-rsUJIYwf.js";import"./index-pr7ns5cs.js";const _=o=>{let s=o.isLiked,t=o.isDisliked,r=o.likesCount;const S=()=>{t&&(t=!1),s=!s,r=s?r+1:r-1;const e=document.querySelector("ur-thumbs-rating");e&&(e.isLiked=s,e.isDisliked=t,e.likesCount=r)},$=()=>{s&&(s=!1,r--),t=!t;const e=document.querySelector("ur-thumbs-rating");e&&(e.isLiked=s,e.isDisliked=t,e.likesCount=r)};return N`
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
