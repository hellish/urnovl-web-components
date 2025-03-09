import{k as Z}from"./entry-preview-BcHUnPw7.js";import"./ur-read-rail-DXjrB3nw.js";import"./ur-thumbs-rating-D8fbcV4L.js";import"./index-DrFu-skq.js";import"./ur-tooltip-Dmobz621.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-BJvbtjhH.js";import"./ur-button-icon-ChzhEZbz.js";import"./index-rXz1tEXk.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-DxLrUPRs.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-C8TuHONp.js";import"./form-DhDC-phE.js";import"./index-CXOzFcj5.js";import"./index-pqI9kxak.js";import"./ur-avatar-B9hKaEot.js";const{useState:ee}=__STORYBOOK_MODULE_PREVIEW_API__,ae=e=>{const[a,u]=ee({isLiked:e.isLiked||!1,isDisliked:e.isDisliked||!1,likesCount:e.likes}),Q=()=>{u({isLiked:!a.isLiked,isDisliked:!1,likesCount:a.isLiked?a.likesCount-1:a.likesCount+1}),console.log("Thumbs up clicked",a)},X=()=>{u({isLiked:!1,isDisliked:!a.isDisliked,likesCount:a.isLiked?a.likesCount-1:a.likesCount}),console.log("Thumbs down clicked",a)};return Z`
        <div style="display: flex; justify-content: center;">
            <ur-read-rail
                avatar-src="${e.avatarSrc}"
                avatar-name="${e.avatarName}"
                likes="${a.likesCount}"
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
            >
                <ur-thumbs-rating
                    slot="thumbs-rating"
                    .likesCount="${a.likesCount}"
                    .dislikeText="${e.dislike}"
                    ?is-liked="${a.isLiked}"
                    ?is-disliked="${a.isDisliked}"
                    @thumbsUp="${Q}"
                    @thumbsDown="${X}"
                ></ur-thumbs-rating>
            </ur-read-rail>
        </div>
    `},Ce={title:"urnovl/Business/Read Rail",render:ae,argTypes:{avatarSrc:{control:"text",description:"URL for the avatar image"},avatarName:{control:"text",description:"Name displayed in the avatar"},likes:{control:"number",description:"Number of likes displayed"},dislike:{control:"text",description:"Text for the dislike action"},comments:{control:"number",description:"Number of comments displayed"},donate:{control:"text",description:"Text for the donate action"},share:{control:"text",description:"Text for the share action"},isFollowed:{control:"boolean",description:"Indicates if the author is already followed"},isOwnChapter:{control:"boolean",description:"Indicates if this is the user's own chapter"},isChapterPurchased:{control:"boolean",description:"Indicates if the chapter has been purchased"},isNovlDeleted:{control:"boolean",description:"Indicates if the novel has been deleted"},isAuthorFollowed:{control:"boolean",description:"Indicates if the author is being followed"},isPaidChapter:{control:"boolean",description:"Indicates if this is a paid chapter"},isAuthorPro:{control:"boolean",description:"Indicates if the author has pro status"},isDonationsEnabled:{control:"boolean",description:"Indicates if donations are enabled"},isHostSmall:{control:"boolean",description:"Indicates if the host container is small"},mode:{control:"radio",options:["desktop","ionic"],description:"Display mode (desktop or ionic native share)",defaultValue:"desktop"},isLiked:{control:"boolean",description:"Whether the content is liked",defaultValue:!1},isDisliked:{control:"boolean",description:"Whether the content is disliked",defaultValue:!1}}},s={args:{avatarSrc:"https://i.pravatar.cc/150?img=3",avatarName:"Jane Doe",likes:1500,dislike:"Dislike",comments:15,mode:"desktop",donate:"Donate",share:"Share",isFollowed:!1,isLiked:!1,isDisliked:!1}},t={args:{avatarSrc:"https://i.pravatar.cc/150?img=5",avatarName:"John Smith",likes:1e4,dislike:"Dislike",comments:150,mode:"desktop",donate:"Donate",share:"Share",isFollowed:!1,isLiked:!0,isDisliked:!1}},o={args:{avatarSrc:"https://i.pravatar.cc/150?img=7",avatarName:"Anonymous",likes:0,dislike:"Dislike",mode:"desktop",comments:0,donate:"Donate",share:"Share",isFollowed:!1,isLiked:!1,isDisliked:!0}},r={args:{avatarSrc:"",avatarName:"",likes:500,dislike:"Dislike",comments:10,mode:"desktop",donate:"Donate",share:"Share",isFollowed:!1}},i={args:{avatarSrc:"https://i.pravatar.cc/150?img=6",avatarName:"Followed Author",likes:2500,dislike:"Dislike",comments:50,donate:"Donate",mode:"desktop",share:"Share",isFollowed:!0}},n={args:{avatarSrc:"https://i.pravatar.cc/150?img=8",avatarName:"Pro Author",likes:5e3,dislike:"Dislike",comments:75,mode:"desktop",donate:"Donate",share:"Share",isFollowed:!1,isAuthorPro:!0,isDonationsEnabled:!0,isPaidChapter:!1,isOwnChapter:!1}},l={args:{avatarSrc:"https://i.pravatar.cc/150?img=9",avatarName:"Premium Author",likes:3200,dislike:"Dislike",comments:45,donate:"Donate",mode:"desktop",share:"Share",isFollowed:!1,isPaidChapter:!0,isChapterPurchased:!1,isAuthorPro:!0,isDonationsEnabled:!0}},d={args:{avatarSrc:"https://i.pravatar.cc/150?img=10",avatarName:"You",likes:120,dislike:"Dislike",mode:"desktop",comments:8,donate:"Donate",share:"Share",isOwnChapter:!0,isAuthorPro:!1}},c={args:{avatarSrc:"https://i.pravatar.cc/150?img=12",avatarName:"Compact View",likes:1200,dislike:"Dislike",comments:25,mode:"desktop",donate:"Donate",share:"Share",isHostSmall:!0,isAuthorPro:!0,isDonationsEnabled:!0}},m={args:{avatarSrc:"https://i.pravatar.cc/150?img=13",avatarName:"Regular Author",mode:"desktop",likes:800,dislike:"Dislike",comments:15,donate:"Donate",share:"Share",isAuthorPro:!1,isDonationsEnabled:!1}},p={args:{avatarSrc:"https://i.pravatar.cc/150?img=14",mode:"desktop",avatarName:"No Donations",likes:4500,dislike:"Dislike",comments:67,donate:"Donate",share:"Share",isAuthorPro:!0,isDonationsEnabled:!1}},h={args:{mode:"ionic",avatarSrc:"https://i.pravatar.cc/150?img=15",avatarName:"Mobile User",likes:2300,dislike:"Dislike",comments:42,donate:"Donate",share:"Share",isAuthorPro:!0,isDonationsEnabled:!0,isHostSmall:!0}};var k,D,v;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    isFollowed: false,
    isLiked: false,
    isDisliked: false
  }
}`,...(v=(D=s.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var f,S,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    isFollowed: false,
    isLiked: true,
    // Example of a pre-liked state
    isDisliked: false
  }
}`,...(g=(S=t.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var b,C,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    isFollowed: false,
    isLiked: false,
    // Example of a pre-liked state
    isDisliked: true
  }
}`,...(w=(C=o.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var N,P,A;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(A=(P=r.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var $,E,F;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(F=(E=i.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var L,y,I;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(I=(y=n.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var x,O,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(O=l.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var H,_,R;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(R=(_=d.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var U,W,V;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(V=(W=c.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var M,J,Y;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(Y=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var B,j,K;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(K=(j=p.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var q,z,G;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(z=h.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const we=["Default","HighEngagement","MinimalInteraction","NoAvatar","AlreadyFollowed","ProAuthorWithDonations","PaidChapter","OwnChapter","SmallHostContainer","NonProAuthor","DonationsDisabled","IonicNativeShare"];export{i as AlreadyFollowed,s as Default,p as DonationsDisabled,t as HighEngagement,h as IonicNativeShare,o as MinimalInteraction,r as NoAvatar,m as NonProAuthor,d as OwnChapter,l as PaidChapter,n as ProAuthorWithDonations,c as SmallHostContainer,we as __namedExportsOrder,Ce as default};
