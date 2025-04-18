import{k as A}from"./entry-preview-BcHUnPw7.js";import"./ur-chip-Sd3JwAVH.js";import"./ur-button-1ayYntj9.js";import{s as P,g as c}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as D,H as I,c as i,h as e,a as $}from"./index-DddAbXmr.js";import"./ur-time-ago-BQvV6XqK.js";import"./ur-long-description-BNFQEKpo.js";import"./ur-profile-card-OTKCUY1T.js";import"./index-DrFu-skq.js";import"./index-D1Vud5Wt.js";import"./class-map-CDMw4-pN.js";import"./get-7S0C3xNv.js";import"./anchor--mD29Q5y.js";import"./if-defined-CL77Dv0Z.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./check-CYfW0qAL.js";import"./svg-tag-Dv8So2Bi.js";import"./index-BriiHZyV.js";import"./button-base-CWeRpzKK.js";import"./form-B80GgqR6.js";import"./index-DsS9OQyQ.js";import"./index-B-mBYDoO.js";import"./ur-avatar-LWOBhbU6.js";import"./ur-tooltip-DuFJ5Hb5.js";import"./ur-button-icon-DioUusdT.js";import"./index-CIbCn1or.js";const M=`:host{--ur-color-background:var(--mdui-color-background);--ur-color-on-background:var(--mdui-color-on-background);--ur-color-on-complete-surface:#1A5100;--ur-color-complete-surface:red;--ur-color-primary:var(--mdui-color-primary);--ur-color-primary-container:var(--mdui-color-primary-container);--ur-color-on-surface-lite:var(--mdui-color-on-surface-lite);--ur-color-surface-container-high:var(--mdui-color-surface-container-high);display:block;color:rgb(var(--ur-color-on-background-rgb));background:rgb(var(--ur-color-complete-surface))}:host .cover-image{height:100%;width:100%;object-fit:cover}:host .cover{height:calc( 100vw / 3);width:100%;max-height:210px;position:relative}:host .status{display:flex;position:absolute;top:0;left:24px;transform:translate(0, -50%)}:host .novl-content{display:flex;position:relative;padding:24px;gap:16px;flex-direction:column}:host .title-text{margin:0;font-size:22px;font-style:normal;font-weight:700;line-height:24px;letter-spacing:-0.262px}:host .story-stats{margin-top:8px;display:flex}:host .story-stat{font-size:12px;display:flex;align-items:center}:host .story-stat-label{font-weight:700;line-height:12px}:host .story-stat-value{font-weight:400;line-height:12px;margin-right:4px}:host .story-stat-separator{margin:0 4px}:host .novl-details{display:flex;flex-wrap:wrap;gap:8px}:host .actions-holder{overflow:auto;display:flex;gap:8px}:host .summary-action{flex:1}:host .owner-holder{display:flex;flex-direction:column;gap:8px}@keyframes placeholderAnimate{0%{background-position:-650px 0}100%{background-position:650px 0}}:host .title-text.loading{height:24px;margin:8px 0;border-radius:4px;animation-duration:1.7s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:placeholderAnimate;background:linear-gradient(
        to right,
        rgba(var(--ur-color-on-background), 0.04) 2%,
        rgba(var(--ur-color-on-background), 0.12) 18%,
        rgba(var(--ur-color-on-background), 0.04) 33%
    );background-size:1000px}`,B=class extends I{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.readStoryEvent=i(this,"readStoryEvent",7),this.learnMoreEvent=i(this,"learnMoreEvent",7),this.writeStoryEvent=i(this,"writeStoryEvent",7),this.buyStoryEvent=i(this,"buyStoryEvent",7),this.toggleLibraryEvent=i(this,"toggleLibraryEvent",7),this.novlTitle="This is long story title",this.completeText="Complete",this.ongoingText="Ongoing",this.likesText="Likes",this.viewsText="Views",this.readingDuration="1min",this.readingDurationText="Reading Duration",this.description="Description",this.languages="English",this.genres="Action, Adventure",this.literatureTypes="Novel",this.showLessText="Show less",this.showMoreText="Show more...",this.readStoryText="Read story",this.learnMoreText="Learn more",this.writeStoryText="Start writing",this.buyStoryText="Buy for",this.addToLibraryText="Add to Library",this.removeFromLibraryText="Remove from Library",this.novlPurchasedAt="",this.novlIsOwn=!1,this.expanded=!1}onToggleLibrary(){this.toggleLibraryEvent.emit()}onReadStory(){this.readStoryEvent.emit()}onLearnMore(){this.learnMoreEvent.emit()}onWriteStory(){this.writeStoryEvent.emit()}onBuyStory(){this.buyStoryEvent.emit()}async reset(){this.expanded=!1}render(){return e($,{key:"394f5fdae161df6b0d89aa1a203efd58f45d79a7"},e("div",{key:"08cdb71745eccc48a71aebb50b89c98abff27381",class:"cover"},e("img",{key:"7253c307179904ffe183475cf603cb4583afb646",class:"cover-image",src:this.coverImage,alt:"Novl Cover"})),e("div",{key:"bcd1bc0aca47c59059986394b242e04dcf512174",class:"novl-content"},e("div",{key:"4eaa7eccaf4f9aedda34a48caac50af3c419f6d2",class:"status"},this.storyCompleteStatus?e("ur-chip",{fontColor:"#1A5100",backColor:"#C6F4D0",radius:"50px",border:"2px",size:"32px",class:"status-chip",clickable:!1,label:this.completeText}):e("ur-chip",{fontColor:"rgb(var(--ur-color-primary))",backColor:"rgb(var(--ur-color-primary-container))",size:"32px",class:"status-chip",border:"2px",radius:"50px",clickable:!1,label:this.ongoingText})),e("div",{key:"9b78b3ae2e8f28c918dc2d50f365efde95579c15",class:"main-content"},e("h1",{key:"d210ecb167835b2ffd320c8d11b452e35769cef5",class:"title-text"},this.novlTitle),e("span",{key:"ae5d0290b0af3ea83effcf429e3ad0a0037d4626",class:"story-stats"},this.likes>0&&e("span",{key:"e575c6c1b314fd21be91b1863e290ffdb449ade3",class:"story-stat"},e("span",{key:"2c3140f7d1fee68ee9178aaf3a24eda685df9c84",class:"story-stat-value"},this.likes),e("span",{key:"583ca3c1ec7963ea8d73ba158e6cec11395fcc0d",class:"story-stat-label"},this.likesText)),this.likes>0&&e("span",{key:"990037e2132271059f0eb91894d81cdd4fa4131b",class:"story-stat-separator"},"·"),this.views>0&&e("span",{key:"42e47559d5ae01cbd780730db72c9e9f9c847763",class:"story-stat"},e("span",{key:"2e6460f55068dacc1741fa491a0012488c8a313b",class:"story-stat-value"},this.views),e("span",{key:"c78332b7e015a6e2cbc17e72155e69bfbac9c778",class:"story-stat-label"},this.viewsText)),this.views>0&&e("span",{key:"b9a15f68b1869cdfaace0f49376fa3db5ad1f655",class:"story-stat-separator"},"·"),e("span",{key:"cf9b6fc2928ce77b6fe5caa29016d26888309084",class:"story-stat"},e("span",{key:"5a0ca6be928c39b117fd5931b3d00c9861d199da",class:"story-stat-value"},this.readingDuration==="-1"?"N/A":this.readingDuration),e("span",{key:"a0692d1c233eb5c1a2a0c1ff37194e7cd926820c",class:"story-stat-label"},this.readingDurationText)))),e("div",{key:"23321926809b1815d889e881ff679b521e8b7421",class:"novl-details"},this.languages.split(",").map(t=>e("ur-chip",{fontColor:"rgb(var(--ur-color-on-surface-lite))",backColor:"rgb(var(--ur-color-surface-container-high))",size:"28px",class:"info-chip",clickable:!1,label:t})),this.literatureTypes.split(",").map(t=>e("ur-chip",{fontColor:"rgb(var(--ur-color-on-surface-lite))",backColor:"rgb(var(--ur-color-surface-container-high))",size:"28px",class:"info-chip",clickable:!1,label:t})),this.genres.split(",").map(t=>e("ur-chip",{fontColor:"rgb(var(--ur-color-on-surface-lite))",backColor:"rgb(var(--ur-color-surface-container-high))",size:"28px",class:"info-chip",clickable:!1,label:t}))),e("div",{key:"6dfdb15297be5bff8d8bb655c83230dd441d8d50",class:"description"},e("slot",{key:"7e93ab6662be851189dfd20154e66ee7f8156009",name:"description"})),e("div",{key:"03240ba6378d76cad8b3ebc93a83f716f5a00ed0",class:"actions-holder"},this.hasBranches&&e("ur-button",{key:"cea9e6acb2eaed3e23611a427f940636f0ac3d48",class:"summary-action",variant:"filled","full-width":!0,onClick:()=>this.onReadStory()},this.readStoryText),this.writeEnabled&&!this.hasBranches&&e("ur-button",{key:"a45306242a1f8f47dc16af54ce882717dc163b14",class:"summary-action",variant:"filled","full-width":!0,onClick:()=>this.onWriteStory()},this.writeStoryText),this.novlPaid&&(this.novlPurchasedAt?e("ur-button",{class:"summary-action",variant:"filled",fullWidth:!0,onClick:()=>this.onReadStory()},this.readStoryText):e("ur-button",{class:"summary-action",variant:"filled",fullWidth:!0,onClick:()=>this.onBuyStory()},this.buyStoryText," ",e("span",{class:"buy-price"},this.novlPrice))),e("ur-button",{key:"afe33c2d7eea887dd7c1d3e41d7923419a09b606",class:"summary-action",variant:"outlined",fullWidth:!0,onClick:()=>this.onLearnMore()},this.learnMoreText),this.isUserLoggedIn&&e("ur-button",{key:"a64706c080dab8e229f7eda90be2ee86c47f68dc",class:"summary-action",icon:this.isNovlLibrary?"bookmark_added":"bookmark_add--outlined",variant:"text",onClick:()=>this.onToggleLibrary()},this.isNovlLibrary?this.removeFromLibraryText:this.addToLibraryText)),e("div",{key:"48fc1a1f6f340dd06baf354041e8f668d17374ec",class:"owner-holder"},e("slot",{key:"7912d0e3f4c750e7c364c33754b042394548ebf6",name:"owner"}),e("slot",{key:"db333b090aa9d8e44d1e7d037b5888923759557c",name:"owner-page"}))))}static get style(){return M}};D(B,[1,"ur-novl-summary",{novlTitle:[1,"novl-title"],coverImage:[1,"cover-image"],completeText:[1,"complete-text"],ongoingText:[1,"ongoing-text"],storyCompleteStatus:[4,"story-complete-status"],likes:[2],likesText:[1,"likes-text"],views:[2],viewsText:[1,"views-text"],readingDuration:[1,"reading-duration"],readingDurationText:[1,"reading-duration-text"],description:[1],languages:[1],genres:[1],literatureTypes:[1,"literature-types"],showLessText:[1,"show-less-text"],showMoreText:[1,"show-more-text"],readStoryText:[1,"read-story-text"],learnMoreText:[1,"learn-more-text"],writeStoryText:[1,"write-story-text"],buyStoryText:[1,"buy-story-text"],addToLibraryText:[1,"add-to-library-text"],removeFromLibraryText:[1,"remove-from-library-text"],novlPrice:[1,"novl-price"],hasBranches:[4,"has-branches"],writeEnabled:[4,"write-enabled"],novlPaid:[4,"novl-paid"],novlPurchasedAt:[1,"novl-purchased-at"],ownerAvatar:[1,"owner-avatar"],ownerName:[1,"owner-name"],isUserLoggedIn:[4,"is-user-logged-in"],isNovlLibrary:[4,"is-novl-library"],novlIsOwn:[4,"novl-is-own"],expanded:[4],reset:[64]}]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlSummary",tagName:"ur-novl-summary",customElement:!0,members:[{kind:"field",name:"novlTitle",type:"string",description:"",default:"'This is long story title'"},{kind:"field",name:"coverImage",type:"string",description:""},{kind:"field",name:"completeText",type:"string",description:"",default:"'Complete'"},{kind:"field",name:"ongoingText",type:"string",description:"",default:"'Ongoing'"},{kind:"field",name:"storyCompleteStatus",type:"boolean",description:""},{kind:"field",name:"likes",type:"number",description:""},{kind:"field",name:"likesText",type:"string",description:"",default:"'Likes'"},{kind:"field",name:"views",type:"number",description:""},{kind:"field",name:"viewsText",type:"string",description:"",default:"'Views'"},{kind:"field",name:"readingDuration",type:"string",description:"",default:"'1min'"},{kind:"field",name:"readingDurationText",type:"string",description:"",default:"'Reading Duration'"},{kind:"field",name:"description",type:"string",description:"",default:"'Description'"},{kind:"field",name:"languages",type:"string",description:"",default:"'English'"},{kind:"field",name:"genres",type:"string",description:"",default:"'Action, Adventure'"},{kind:"field",name:"literatureTypes",type:"string",description:"",default:"'Novel'"},{kind:"field",name:"showLessText",type:"string",description:"",default:"'Show less'"},{kind:"field",name:"showMoreText",type:"string",description:"",default:"'Show more...'"},{kind:"field",name:"readStoryText",type:"string",description:"",default:"'Read story'"},{kind:"field",name:"learnMoreText",type:"string",description:"",default:"'Learn more'"},{kind:"field",name:"writeStoryText",type:"string",description:"",default:"'Start writing'"},{kind:"field",name:"buyStoryText",type:"string",description:"",default:"'Buy for'"},{kind:"field",name:"addToLibraryText",type:"string",description:"",default:"'Add to Library'"},{kind:"field",name:"removeFromLibraryText",type:"string",description:"",default:"'Remove from Library'"},{kind:"field",name:"novlPrice",type:"string",description:""},{kind:"field",name:"hasBranches",type:"boolean",description:""},{kind:"field",name:"writeEnabled",type:"boolean",description:""},{kind:"field",name:"novlPaid",type:"boolean",description:""},{kind:"field",name:"novlPurchasedAt",type:"string",description:"",default:"''"},{kind:"field",name:"ownerAvatar",type:"string",description:""},{kind:"field",name:"ownerName",type:"string",description:""},{kind:"field",name:"isUserLoggedIn",type:"boolean",description:""},{kind:"field",name:"isNovlLibrary",type:"boolean",description:""},{kind:"field",name:"novlIsOwn",type:"boolean",description:"",default:"false"},{kind:"field",name:"expanded",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"readStoryEvent",description:""},{kind:"event",name:"learnMoreEvent",description:""},{kind:"event",name:"writeStoryEvent",description:""},{kind:"event",name:"buyStoryEvent",description:""},{kind:"event",name:"toggleLibraryEvent",description:""}]}],exports:[{kind:"js",name:"UrNovlSummary",declaration:{name:"UrNovlSummary",module:"src/components/ur-novl-summary/ur-novl-summary.tsx"}},{kind:"custom-element-definition",name:"ur-novl-summary",declaration:{name:"UrNovlSummary",module:"src/components/ur-novl-summary/ur-novl-summary.tsx"}}]}]};P({...c()||{},...d,modules:[...(c()||{}).modules||[],...d.modules]});const U=t=>A`
    <ur-novl-summary
        .novlTitle=${t.novlTitle}
        .storyCompleteStatus=${t.storyCompleteStatus}
        .writeEnabled=${t.writeEnabled}
        .novlPaid=${t.novlPaid}
        .novlPurchasedAt=${t.novlPurchasedAt}
        .novlPrice=${t.novlPrice}
        .likes=${t.likes}
        .views=${t.views}
        .readingDuration=${t.readingDuration}
        .languages=${t.languages}
        .genres=${t.genres}
        .literatureTypes=${t.literatureTypes}
        .coverImage=${t.coverImage}
        .hasBranches=${t.hasBranches}
        .ownerAvatar=${t.ownerAvatar}
        .ownerName=${t.ownerName}
        .isUserLoggedIn=${t.isUserLoggedIn}
        .isNovlLibrary=${t.isNovlLibrary}
    >
        <ur-long-description slot="description" .description=${t.longDescription}></ur-long-description>
        <ur-profile-card 
            slot="owner"
            type="user"
            .avatarSrc=${t.ownerAvatar}
            avatarSize="32px"
            name="Tasos Tsipidis"
            profileType="user"
            .showDescription=${!1}
        ></ur-profile-card>
        <ur-profile-card 
            slot="owner-page"
            type="page"
            .avatarSrc=${t.ownerAvatar}
            avatarSize="32px"
            name="Penguin Publishing"
            profileType="page"
            .showDescription=${!1}
        ></ur-profile-card>
    </ur-novl-summary>
`,de={title:"urnovl/Business/Novl Summary",render:U,argTypes:{novlTitle:{control:"text",description:"The title of the novel"},storyCompleteStatus:{control:"boolean",description:"Whether the story is complete"},writeEnabled:{control:"boolean",description:"Whether the user can write a chapter"},novlPaid:{control:"boolean",description:"Whether the story is paid"},novlPurchasedAt:{control:"date",description:"Date when the story was purchased"},ownerAvatar:{control:"text",description:"Avatar of the owner"},ownerName:{control:"text",description:"Name of the owner"},novlPrice:{control:"text",description:"Price of the novel"},longDescription:{control:"text",description:"Long description of the novel"},likes:{control:"number",description:"Number of likes"},views:{control:"number",description:"Number of views"},readingDuration:{control:"text",description:"Estimated reading duration"},languages:{control:"text",description:"Languages the novel is available in"},genres:{control:"text",description:"Genres of the novel"},literatureTypes:{control:"text",description:"Type of literature"},coverImage:{control:"text",description:"URL of the cover image"},hasBranches:{control:"boolean",description:"Whether the novel has branches"},isUserLoggedIn:{control:"boolean",description:"Whether the user is logged in"},isNovlLibrary:{control:"boolean",description:"Whether the novel is in the user's library"}}},r={args:{novlTitle:"My First Novel",storyCompleteStatus:!1,writeEnabled:!1,novlPaid:!1,novlPurchasedAt:"",novlPrice:"50€",longDescription:"This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.",likes:0,views:0,readingDuration:"1min",languages:"English",genres:"Action, Adventure",literatureTypes:"Novel",coverImage:"https://picsum.photos/200/300",hasBranches:!0,isUserLoggedIn:!0,isNovlLibrary:!1}},o={args:{...r.args,likes:100,views:100,readingDuration:"1min",languages:"English",genres:"Action, Adventure",literatureTypes:"Novel",writeEnabled:!0,hasBranches:!1,isUserLoggedIn:!0,isNovlLibrary:!0}},a={args:{...r.args,novlTitle:"My First Novel",likes:7,views:100,readingDuration:"-1",languages:"English",genres:"Action, Adventure",literatureTypes:"Novel",writeEnabled:!1,hasBranches:!1}},n={args:{...r.args,likes:4,views:1750,readingDuration:"3hours 5min",novlTitle:"Interstellar",storyCompleteStatus:!0}},s={args:{...r.args,likes:1293,views:1293,readingDuration:"4 hours",storyCompleteStatus:!0,novlTitle:"The lord of the rings",novlPaid:!0,novlPurchasedAt:""}},l={args:{...r.args,storyCompleteStatus:!0,novlTitle:"The fellowship of the ring",novlPaid:!0,novlPurchasedAt:new Date().toISOString()}};var p,u,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    novlTitle: 'My First Novel',
    storyCompleteStatus: false,
    writeEnabled: false,
    novlPaid: false,
    novlPurchasedAt: '',
    novlPrice: '50€',
    longDescription: 'This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.',
    likes: 0,
    views: 0,
    readingDuration: '1min',
    languages: 'English',
    genres: 'Action, Adventure',
    literatureTypes: 'Novel',
    coverImage: 'https://picsum.photos/200/300',
    hasBranches: true,
    isUserLoggedIn: true,
    isNovlLibrary: false
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var m,g,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    likes: 100,
    views: 100,
    readingDuration: '1min',
    languages: 'English',
    genres: 'Action, Adventure',
    literatureTypes: 'Novel',
    writeEnabled: true,
    hasBranches: false,
    isUserLoggedIn: true,
    isNovlLibrary: true
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,y,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    novlTitle: 'My First Novel',
    likes: 7,
    views: 100,
    readingDuration: '-1',
    languages: 'English',
    genres: 'Action, Adventure',
    literatureTypes: 'Novel',
    writeEnabled: false,
    hasBranches: false
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,k,x;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    likes: 4,
    views: 1750,
    readingDuration: '3hours 5min',
    novlTitle: 'Interstellar',
    storyCompleteStatus: true
  }
}`,...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var T,S,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    likes: 1293,
    views: 1293,
    readingDuration: '4 hours',
    storyCompleteStatus: true,
    novlTitle: 'The lord of the rings',
    novlPaid: true,
    novlPurchasedAt: ''
  }
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var L,E,N;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    storyCompleteStatus: true,
    novlTitle: 'The fellowship of the ring',
    novlPaid: true,
    novlPurchasedAt: new Date().toISOString()
  }
}`,...(N=(E=l.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const pe=["Default","OwnerWritingChapter","NotOwnerNoContent","StoryComplete","PaidStoryNotPurchased","PaidStoryPurchased"];export{r as Default,a as NotOwnerNoContent,o as OwnerWritingChapter,s as PaidStoryNotPurchased,l as PaidStoryPurchased,n as StoryComplete,pe as __namedExportsOrder,de as default};
