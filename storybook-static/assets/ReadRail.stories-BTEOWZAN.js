import{k as G}from"./entry-preview-BcHUnPw7.js";import"./ur-read-rail-ByAA2GHF.js";import"./index-DrFu-skq.js";import"./ur-tooltip-C-x-Hmqf.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-B9J0OpMa.js";import"./ur-button-icon-BnHHZydI.js";import"./index-CbvShPku.js";import"./get-16ZjOD6f.js";import"./class-map-c_lXebLN.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-D5rkyElT.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-DFAJu5AH.js";import"./form-DYv8CV48.js";import"./ripple-mixin-CQ5hE0DF.js";import"./index-BxWH4IIK.js";import"./ur-avatar-CzANX-TQ.js";const K=e=>G`
  <div style="display: flex; justify-content: center;">
    <ur-read-rail
      avatar-src="${e.avatarSrc}"
      avatar-name="${e.avatarName}"
      likes="${e.likes}"
      dislike="${e.dislike}"
      comments="${e.comments}"
      mode="${e.mode}"
      donate="${e.donate}"
      share="${e.share}"
      ?is-followed="${e.isFollowed}"
      ?is-own-chapter="${e.isOwnChapter}"
      ?is-chapter-purchased="${e.isChapterPurchased}"
      ?is-novl-deleted="${e.isNovlDeleted}"
      ?is-author-followed="${e.isAuthorFollowed}"
      ?is-paid-chapter="${e.isPaidChapter}"
      ?is-author-pro="${e.isAuthorPro}"
      ?is-donations-enabled="${e.isDonationsEnabled}"
      ?is-host-small="${e.isHostSmall}"
    ></ur-read-rail>
  </div>
`,ve={title:"urnovl/Business/Read Rail",render:K,argTypes:{avatarSrc:{control:"text",description:"URL for the avatar image"},avatarName:{control:"text",description:"Name displayed in the avatar"},likes:{control:"number",description:"Number of likes displayed"},dislike:{control:"text",description:"Text for the dislike action"},comments:{control:"number",description:"Number of comments displayed"},donate:{control:"text",description:"Text for the donate action"},share:{control:"text",description:"Text for the share action"},isFollowed:{control:"boolean",description:"Indicates if the author is already followed"},isOwnChapter:{control:"boolean",description:"Indicates if this is the user's own chapter"},isChapterPurchased:{control:"boolean",description:"Indicates if the chapter has been purchased"},isNovlDeleted:{control:"boolean",description:"Indicates if the novel has been deleted"},isAuthorFollowed:{control:"boolean",description:"Indicates if the author is being followed"},isPaidChapter:{control:"boolean",description:"Indicates if this is a paid chapter"},isAuthorPro:{control:"boolean",description:"Indicates if the author has pro status"},isDonationsEnabled:{control:"boolean",description:"Indicates if donations are enabled"},isHostSmall:{control:"boolean",description:"Indicates if the host container is small"},mode:{control:"radio",options:["desktop","ionic"],description:"Display mode (desktop or ionic native share)",defaultValue:"desktop"}}},a={args:{avatarSrc:"https://i.pravatar.cc/150?img=3",avatarName:"Jane Doe",likes:1500,dislike:"Dislike",comments:15,mode:"desktop",donate:"Donate",share:"Share",isFollowed:!1}},r={args:{avatarSrc:"https://i.pravatar.cc/150?img=5",avatarName:"John Smith",likes:1e4,dislike:"Dislike",comments:150,mode:"desktop",donate:"Donate",share:"Share",isFollowed:!1}},o={args:{avatarSrc:"https://i.pravatar.cc/150?img=7",avatarName:"Anonymous",likes:0,dislike:"Dislike",mode:"desktop",comments:0,donate:"Donate",share:"Share",isFollowed:!1}},t={args:{avatarSrc:"",avatarName:"",likes:500,dislike:"Dislike",comments:10,mode:"desktop",donate:"Donate",share:"Share",isFollowed:!1}},s={args:{avatarSrc:"https://i.pravatar.cc/150?img=6",avatarName:"Followed Author",likes:2500,dislike:"Dislike",comments:50,donate:"Donate",mode:"desktop",share:"Share",isFollowed:!0}},n={args:{avatarSrc:"https://i.pravatar.cc/150?img=8",avatarName:"Pro Author",likes:5e3,dislike:"Dislike",comments:75,mode:"desktop",donate:"Donate",share:"Share",isFollowed:!1,isAuthorPro:!0,isDonationsEnabled:!0,isPaidChapter:!1,isOwnChapter:!1}},i={args:{avatarSrc:"https://i.pravatar.cc/150?img=9",avatarName:"Premium Author",likes:3200,dislike:"Dislike",comments:45,donate:"Donate",mode:"desktop",share:"Share",isFollowed:!1,isPaidChapter:!0,isChapterPurchased:!1,isAuthorPro:!0,isDonationsEnabled:!0}},l={args:{avatarSrc:"https://i.pravatar.cc/150?img=10",avatarName:"You",likes:120,dislike:"Dislike",mode:"desktop",comments:8,donate:"Donate",share:"Share",isOwnChapter:!0,isAuthorPro:!1}},d={args:{avatarSrc:"https://i.pravatar.cc/150?img=12",avatarName:"Compact View",likes:1200,dislike:"Dislike",comments:25,mode:"desktop",donate:"Donate",share:"Share",isHostSmall:!0,isAuthorPro:!0,isDonationsEnabled:!0}},c={args:{avatarSrc:"https://i.pravatar.cc/150?img=13",avatarName:"Regular Author",mode:"desktop",likes:800,dislike:"Dislike",comments:15,donate:"Donate",share:"Share",isAuthorPro:!1,isDonationsEnabled:!1}},m={args:{avatarSrc:"https://i.pravatar.cc/150?img=14",mode:"desktop",avatarName:"No Donations",likes:4500,dislike:"Dislike",comments:67,donate:"Donate",share:"Share",isAuthorPro:!0,isDonationsEnabled:!1}},p={args:{mode:"ionic",avatarSrc:"https://i.pravatar.cc/150?img=15",avatarName:"Mobile User",likes:2300,dislike:"Dislike",comments:42,donate:"Donate",share:"Share",isAuthorPro:!0,isDonationsEnabled:!0,isHostSmall:!0}};var h,u,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=3',
    avatarName: 'Jane Doe',
    likes: 1500,
    // Changed from '1.5k'
    dislike: 'Dislike',
    comments: 15,
    mode: 'desktop',
    donate: 'Donate',
    share: 'Share',
    isFollowed: false
  }
}`,...(k=(u=a.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var v,D,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=5',
    avatarName: 'John Smith',
    likes: 10000,
    // Changed from '10k'
    dislike: 'Dislike',
    comments: 150,
    mode: 'desktop',
    donate: 'Donate',
    share: 'Share',
    isFollowed: false
  }
}`,...(S=(D=r.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var f,g,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=7',
    avatarName: 'Anonymous',
    likes: 0,
    // Changed from '0'
    dislike: 'Dislike',
    mode: 'desktop',
    comments: 0,
    donate: 'Donate',
    share: 'Share',
    isFollowed: false
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var N,w,A;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    avatarSrc: '',
    avatarName: '',
    likes: 500,
    // Changed from '500'
    dislike: 'Dislike',
    comments: 10,
    mode: 'desktop',
    donate: 'Donate',
    share: 'Share',
    isFollowed: false
  }
}`,...(A=(w=t.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var P,C,F;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=6',
    avatarName: 'Followed Author',
    likes: 2500,
    // Changed from '2.5k'
    dislike: 'Dislike',
    comments: 50,
    donate: 'Donate',
    mode: 'desktop',
    share: 'Share',
    isFollowed: true
  }
}`,...(F=(C=s.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var E,$,y;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=8',
    avatarName: 'Pro Author',
    likes: 5000,
    // Changed from '5k'
    dislike: 'Dislike',
    comments: 75,
    mode: 'desktop',
    donate: 'Donate',
    share: 'Share',
    isFollowed: false,
    isAuthorPro: true,
    isDonationsEnabled: true,
    isPaidChapter: false,
    isOwnChapter: false
  }
}`,...(y=($=n.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var I,x,H;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=9',
    avatarName: 'Premium Author',
    likes: 3200,
    // Changed from '3.2k'
    dislike: 'Dislike',
    comments: 45,
    donate: 'Donate',
    mode: 'desktop',
    share: 'Share',
    isFollowed: false,
    isPaidChapter: true,
    isChapterPurchased: false,
    isAuthorPro: true,
    isDonationsEnabled: true
  }
}`,...(H=(x=i.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var O,R,T;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=10',
    avatarName: 'You',
    likes: 120,
    // Was already a number
    dislike: 'Dislike',
    mode: 'desktop',
    comments: 8,
    donate: 'Donate',
    share: 'Share',
    isOwnChapter: true,
    isAuthorPro: false
  }
}`,...(T=(R=l.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var J,M,U;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=12',
    avatarName: 'Compact View',
    likes: 1200,
    // Changed from '1.2k'
    dislike: 'Dislike',
    comments: 25,
    mode: 'desktop',
    donate: 'Donate',
    share: 'Share',
    isHostSmall: true,
    isAuthorPro: true,
    isDonationsEnabled: true
  }
}`,...(U=(M=d.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var W,V,_;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=13',
    avatarName: 'Regular Author',
    mode: 'desktop',
    likes: 800,
    // Was already a number
    dislike: 'Dislike',
    comments: 15,
    donate: 'Donate',
    share: 'Share',
    isAuthorPro: false,
    isDonationsEnabled: false
  }
}`,...(_=(V=c.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var Y,j,B;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=14',
    mode: 'desktop',
    avatarName: 'No Donations',
    likes: 4500,
    // Changed from '4.5k'
    dislike: 'Dislike',
    comments: 67,
    donate: 'Donate',
    share: 'Share',
    isAuthorPro: true,
    isDonationsEnabled: false
  }
}`,...(B=(j=m.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var L,q,z;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    mode: 'ionic',
    avatarSrc: 'https://i.pravatar.cc/150?img=15',
    avatarName: 'Mobile User',
    likes: 2300,
    dislike: 'Dislike',
    comments: 42,
    donate: 'Donate',
    share: 'Share',
    isAuthorPro: true,
    isDonationsEnabled: true,
    isHostSmall: true // Usually true for mobile
  }
}`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const De=["Default","HighEngagement","MinimalInteraction","NoAvatar","AlreadyFollowed","ProAuthorWithDonations","PaidChapter","OwnChapter","SmallHostContainer","NonProAuthor","DonationsDisabled","IonicNativeShare"];export{s as AlreadyFollowed,a as Default,m as DonationsDisabled,r as HighEngagement,p as IonicNativeShare,o as MinimalInteraction,t as NoAvatar,c as NonProAuthor,l as OwnChapter,i as PaidChapter,n as ProAuthorWithDonations,d as SmallHostContainer,De as __namedExportsOrder,ve as default};
