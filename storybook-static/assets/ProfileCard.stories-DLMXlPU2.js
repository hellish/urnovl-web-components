import{k as j}from"./entry-preview-BcHUnPw7.js";import"./ur-profile-card-CA1rNUmg.js";import"./index-DrFu-skq.js";import"./ur-avatar-CLS7Vju6.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-B9J0OpMa.js";import"./ur-button-CUrM10zk.js";import"./index-BRY6Z_ZR.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./template-yncBVCyc.js";import"./index-CXOzFcj5.js";import"./button-base-DxLrUPRs.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-C8TuHONp.js";import"./form-DhDC-phE.js";import"./index-pqI9kxak.js";import"./ur-tooltip-Bsceriph.js";import"./ur-button-icon-CFJMshoh.js";import"./index-rXz1tEXk.js";import"./watch-ByvFYHv8.js";const q=e=>j`
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
        .showMemberActions=${e.showMemberActions}
        .showPageActions=${e.showPageActions}
    ></ur-profile-card>
`,ge={title:"urnovl/Business/Profile Card",render:q,argTypes:{avatarSrc:{control:"text",description:"Source URL for the avatar image"},avatarAlt:{control:"text",description:"Alt text for the avatar image"},avatarSize:{control:"text",description:"Size of the avatar"},name:{control:"text",description:"Name or title of the user/page"},description:{control:"text",description:"Description of the user/page"},followButtonText:{control:"text",description:"Text for the follow button"},unfollowButtonText:{control:"text",description:"Text for the unfollow button"},isOwner:{control:"boolean",description:"Whether the profile belongs to the current user"},profileType:{control:"select",options:["user","page"],description:"Type of profile (user or page)"},showDescription:{control:"boolean",description:"Whether to show the description"},showMemberActions:{control:"boolean",description:"Whether to show the member actions"},showPageActions:{control:"boolean",description:"Whether to show the page actions"}}},r={args:{avatarSrc:"https://picsum.photos/200",avatarSize:"32px",avatarAlt:"User Avatar",name:"John Doe",description:"John is a best-selling author and a lover of penguins.",followButtonText:"Follow",unfollowButtonText:"Following",isOwner:!1,profileType:"user",showDescription:!0}},t={args:{...r.args,showDescription:!1}},a={args:{...r.args,isOwner:!0}},o={args:{avatarSrc:"https://picsum.photos/200",avatarAlt:"Page Avatar",name:"Penguin Publishing",description:"World-renowned publisher of classic and contemporary literature.",followButtonText:"Follow",unfollowButtonText:"Unfollow",isOwner:!1,profileType:"page",showDescription:!0}},s={args:{...o.args,showDescription:!1}},n={args:{...o.args,isOwner:!0}},i={args:{...r.args,avatarSrc:""}},l={args:{...r.args,name:"Dr. Elizabeth Margaret Halsey, PhD",description:"Dr. Halsey is a renowned scientist and the creator of the SPARTAN-II program. Her work has revolutionized human augmentation and artificial intelligence."}},c={args:{...r.args,followButtonText:"Subscribe",unfollowButtonText:"Unsubscribe"}},p={args:{...r.args,profileType:"user",showMemberActions:!0}},u={args:{...o.args,profileType:"page",showPageActions:!0}};var m,f,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,d,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...DefaultUserProfile.args,
    showDescription: false
  }
}`,...(w=(d=t.parameters)==null?void 0:d.docs)==null?void 0:w.source}}};var P,T,v;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...DefaultUserProfile.args,
    isOwner: true
  }
}`,...(v=(T=a.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var x,A,D;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(D=(A=o.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var b,S,U;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...PageProfile.args,
    showDescription: false
  }
}`,...(U=(S=s.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};var y,B,O;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...PageProfile.args,
    isOwner: true
  }
}`,...(O=(B=n.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var W,$,M;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...DefaultUserProfile.args,
    avatarSrc: ''
  }
}`,...(M=($=i.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var z,F,H;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...DefaultUserProfile.args,
    name: 'Dr. Elizabeth Margaret Halsey, PhD',
    description: 'Dr. Halsey is a renowned scientist and the creator of the SPARTAN-II program. Her work has revolutionized human augmentation and artificial intelligence.'
  }
}`,...(H=(F=l.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var N,k,C;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...DefaultUserProfile.args,
    followButtonText: 'Subscribe',
    unfollowButtonText: 'Unsubscribe'
  }
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var I,J,E;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...DefaultUserProfile.args,
    profileType: 'user',
    showMemberActions: true
  }
}`,...(E=(J=p.parameters)==null?void 0:J.docs)==null?void 0:E.source}}};var L,R,_;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...PageProfile.args,
    profileType: 'page',
    showPageActions: true
  }
}`,...(_=(R=u.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const he=["DefaultUserProfile","UserProfileWithoutDescription","UserProfileOwner","PageProfile","PageProfileWithoutDescription","PageProfileOwner","MissingAvatar","LongNameAndDescription","CustomFollowText","UserProfileWithMemberActions","PageProfileWithPageActions"];export{c as CustomFollowText,r as DefaultUserProfile,l as LongNameAndDescription,i as MissingAvatar,o as PageProfile,n as PageProfileOwner,u as PageProfileWithPageActions,s as PageProfileWithoutDescription,a as UserProfileOwner,p as UserProfileWithMemberActions,t as UserProfileWithoutDescription,he as __namedExportsOrder,ge as default};
