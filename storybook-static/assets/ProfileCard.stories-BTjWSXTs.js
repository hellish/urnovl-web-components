import{k as C}from"./entry-preview-BcHUnPw7.js";import"./ur-profile-card-B5a0OLGr.js";import"./index-DrFu-skq.js";import"./ur-avatar-aCUBm1LO.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-B9J0OpMa.js";import"./ur-button-BX5if3Xa.js";import"./index-BRY6Z_ZR.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./template-yncBVCyc.js";import"./index-CXOzFcj5.js";import"./button-base-DxLrUPRs.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-C8TuHONp.js";import"./form-DhDC-phE.js";import"./index-pqI9kxak.js";const I=e=>C`
    <ur-profile-card
        .avatarSrc=${e.avatarSrc}
        .avatarAlt=${e.avatarAlt}
        .avatarSize=${e.avatarSize}
        .name=${e.name}
        .description=${e.description}
        .followButtonText=${e.followButtonText}
        .unfollowButtonText=${e.unfollowButtonText}
        .isOwner=${e.isOwner}
        .profileType=${e.profileType}
        .showDescription=${e.showDescription}
    ></ur-profile-card>
`,oe={title:"urnovl/Business/Profile Card",render:I,argTypes:{avatarSrc:{control:"text",description:"Source URL for the avatar image"},avatarAlt:{control:"text",description:"Alt text for the avatar image"},avatarSize:{control:"text",description:"Size of the avatar"},name:{control:"text",description:"Name or title of the user/page"},description:{control:"text",description:"Description of the user/page"},followButtonText:{control:"text",description:"Text for the follow button"},unfollowButtonText:{control:"text",description:"Text for the unfollow button"},isOwner:{control:"boolean",description:"Whether the profile belongs to the current user"},profileType:{control:"select",options:["user","page"],description:"Type of profile (user or page)"},showDescription:{control:"boolean",description:"Whether to show the description"}}},r={args:{avatarSrc:"https://picsum.photos/200",avatarSize:"32px",avatarAlt:"User Avatar",name:"John Doe",description:"John is a best-selling author and a lover of penguins.",followButtonText:"Follow",unfollowButtonText:"Following",isOwner:!1,profileType:"user",showDescription:!0}},t={args:{...r.args,showDescription:!1}},a={args:{...r.args,isOwner:!0}},o={args:{avatarSrc:"https://picsum.photos/200",avatarAlt:"Page Avatar",name:"Penguin Publishing",description:"World-renowned publisher of classic and contemporary literature.",followButtonText:"Follow",unfollowButtonText:"Unfollow",isOwner:!1,profileType:"page",showDescription:!0}},s={args:{...o.args,showDescription:!1}},n={args:{...o.args,isOwner:!0}},i={args:{...r.args,avatarSrc:""}},l={args:{...r.args,name:"Dr. Elizabeth Margaret Halsey, PhD",description:"Dr. Halsey is a renowned scientist and the creator of the SPARTAN-II program. Her work has revolutionized human augmentation and artificial intelligence."}},c={args:{...r.args,followButtonText:"Subscribe",unfollowButtonText:"Unsubscribe"}};var p,u,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://picsum.photos/200',
    avatarSize: '32px',
    avatarAlt: 'User Avatar',
    name: 'John Doe',
    description: 'John is a best-selling author and a lover of penguins.',
    followButtonText: 'Follow',
    unfollowButtonText: 'Following',
    isOwner: false,
    profileType: 'user',
    showDescription: true
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var m,g,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...DefaultUserProfile.args,
    showDescription: false
  }
}`,...(d=(g=t.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var w,h,P;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...DefaultUserProfile.args,
    isOwner: true
  }
}`,...(P=(h=a.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var v,x,T;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://picsum.photos/200',
    avatarAlt: 'Page Avatar',
    name: 'Penguin Publishing',
    description: 'World-renowned publisher of classic and contemporary literature.',
    followButtonText: 'Follow',
    unfollowButtonText: 'Unfollow',
    isOwner: false,
    profileType: 'page',
    showDescription: true
  }
}`,...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var D,S,b;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...PageProfile.args,
    showDescription: false
  }
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var A,B,U;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...PageProfile.args,
    isOwner: true
  }
}`,...(U=(B=n.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var O,y,z;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...DefaultUserProfile.args,
    avatarSrc: ''
  }
}`,...(z=(y=i.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var $,F,W;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...DefaultUserProfile.args,
    name: 'Dr. Elizabeth Margaret Halsey, PhD',
    description: 'Dr. Halsey is a renowned scientist and the creator of the SPARTAN-II program. Her work has revolutionized human augmentation and artificial intelligence.'
  }
}`,...(W=(F=l.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var H,N,k;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...DefaultUserProfile.args,
    followButtonText: 'Subscribe',
    unfollowButtonText: 'Unsubscribe'
  }
}`,...(k=(N=c.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const te=["DefaultUserProfile","UserProfileWithoutDescription","UserProfileOwner","PageProfile","PageProfileWithoutDescription","PageProfileOwner","MissingAvatar","LongNameAndDescription","CustomFollowText"];export{c as CustomFollowText,r as DefaultUserProfile,l as LongNameAndDescription,i as MissingAvatar,o as PageProfile,n as PageProfileOwner,s as PageProfileWithoutDescription,a as UserProfileOwner,t as UserProfileWithoutDescription,te as __namedExportsOrder,oe as default};
