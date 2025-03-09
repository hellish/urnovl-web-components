import{k as A}from"./entry-preview-BcHUnPw7.js";import"./ur-chip-5GIadAKj.js";import"./ur-button-BRTSQpVH.js";import{s as N,g as c}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as I,H as $,c as n,h as e,a as M}from"./index-BJvbtjhH.js";import"./ur-time-ago-Be8GH5Ce.js";import"./ur-long-description-nZmAUnQr.js";import"./ur-profile-card-Dn7aCaZL.js";import"./index-DrFu-skq.js";import"./index-DnUXnuGK.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./anchor-C8TuHONp.js";import"./if-defined-CL77Dv0Z.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./check-Bc-_4cuB.js";import"./svg-tag-C3ctfYVB.js";import"./index-CXOzFcj5.js";import"./button-base-DxLrUPRs.js";import"./form-DhDC-phE.js";import"./index-pqI9kxak.js";import"./index-BRY6Z_ZR.js";import"./ur-avatar-B9hKaEot.js";import"./ur-tooltip-Dmobz621.js";import"./ur-button-icon-BwpYUWjp.js";import"./index-rXz1tEXk.js";const B=`:host{--ur-color-background:var(--mdui-color-background);--ur-color-on-background:var(--mdui-color-on-background);--ur-color-on-complete-surface:#1A5100;--ur-color-complete-surface:red;--ur-color-primary:var(--mdui-color-primary);--ur-color-primary-container:var(--mdui-color-primary-container);--ur-color-on-surface-lite:var(--mdui-color-on-surface-lite);--ur-color-surface-container-high:var(--mdui-color-surface-container-high);display:block;color:rgb(var(--ur-color-on-background-rgb));background:rgb(var(--ur-color-complete-surface))}:host .cover-image{height:100%;width:100%;object-fit:cover}:host .cover{height:calc( 100vw / 3);width:100%;max-height:210px;position:relative}:host .status{display:flex;position:absolute;top:0;left:24px;transform:translate(0, -50%)}:host .novl-content{display:flex;position:relative;padding:24px;gap:16px;flex-direction:column}:host .title-text{margin:0;font-size:22px;font-style:normal;font-weight:700;line-height:24px;letter-spacing:-0.262px}:host .story-stats{margin-top:8px;display:flex}:host .story-stat{font-size:12px;display:flex;align-items:center}:host .story-stat-label{font-weight:700;line-height:12px}:host .story-stat-value{font-weight:400;line-height:12px;margin-right:4px}:host .story-stat-separator{margin:0 4px}:host .novl-details{display:flex;flex-wrap:wrap;gap:8px}:host .actions-holder{display:flex;gap:8px}:host .summary-action{flex:1}:host .owner-holder{display:flex;flex-direction:column;gap:8px}@keyframes placeholderAnimate{0%{background-position:-650px 0}100%{background-position:650px 0}}:host .title-text.loading{height:24px;margin:8px 0;border-radius:4px;animation-duration:1.7s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:placeholderAnimate;background:linear-gradient(
        to right,
        rgba(var(--ur-color-on-background), 0.04) 2%,
        rgba(var(--ur-color-on-background), 0.12) 18%,
        rgba(var(--ur-color-on-background), 0.04) 33%
    );background-size:1000px}`,O=class extends ${constructor(){super(),this.__registerHost(),this.__attachShadow(),this.readStoryEvent=n(this,"readStoryEvent",7),this.learnMoreEvent=n(this,"learnMoreEvent",7),this.writeStoryEvent=n(this,"writeStoryEvent",7),this.buyStoryEvent=n(this,"buyStoryEvent",7),this.novlTitle="This is long story title",this.completeText="Complete",this.ongoingText="Ongoing",this.likesText="Likes",this.viewsText="Views",this.readingDuration="1min",this.readingDurationText="Reading Duration",this.description="Description",this.languages="English",this.genres="Action, Adventure",this.literatureTypes="Novel",this.showLessText="Show less",this.showMoreText="Show more...",this.readStoryText="Read story",this.learnMoreText="Learn more",this.writeStoryText="Start writing",this.buyStoryText="Buy for",this.novlPurchasedAt="",this.novlIsOwn=!1,this.expanded=!1}onReadStory(){this.readStoryEvent.emit()}onLearnMore(){this.learnMoreEvent.emit()}onWriteStory(){this.writeStoryEvent.emit()}onBuyStory(){this.buyStoryEvent.emit()}async reset(){this.expanded=!1}render(){return e(M,{key:"4e70b76daa89b794fbcad53caef71299886f8c9b"},e("div",{key:"0283696eb5ef3689fbd7192ac56059beba2c5b8e",class:"cover"},e("img",{key:"3567d217d8440862d3257e7bb6f299361fe145e6",class:"cover-image",src:this.coverImage,alt:"Novl Cover"})),e("div",{key:"949f81754d58da277e8a0632c699a78621a0c32e",class:"novl-content"},e("div",{key:"fd451d87b27d0d286c1c82a7d9520d30f95284d9",class:"status"},this.storyCompleteStatus?e("ur-chip",{fontColor:"#1A5100",backColor:"#C6F4D0",radius:"50px",border:"2px",size:"32px",class:"status-chip",clickable:!1,label:this.completeText}):e("ur-chip",{fontColor:"rgb(var(--ur-color-primary))",backColor:"rgb(var(--ur-color-primary-container))",size:"32px",class:"status-chip",border:"2px",radius:"50px",clickable:!1,label:this.ongoingText})),e("div",{key:"e9d9b44fc241bb6e8cd5015321c836eb2dcb9926",class:"main-content"},e("h1",{key:"fe4f611f5d0991bcd07dddb4b450e03b6910e981",class:"title-text"},this.novlTitle),e("span",{key:"5e2e150c061227354cd8258d0f47ed0aa42efca6",class:"story-stats"},this.likes>0&&e("span",{key:"2ca1edf38fb8642898d90b05110688d34ea950be",class:"story-stat"},e("span",{key:"fffc5bec1afffbdc1f0c53e325b897259bd77cea",class:"story-stat-value"},this.likes),e("span",{key:"2d0b183fcc87cf1ab360471419f7c55f5e2d9854",class:"story-stat-label"},this.likesText)),this.likes>0&&e("span",{key:"2aed5c562a231e508f4969e271d648069ed67906",class:"story-stat-separator"},"·"),this.views>0&&e("span",{key:"afbe5081aec21bbdb68266e277aab8fc93b275a2",class:"story-stat"},e("span",{key:"7726430295b137be08e160eed0e941652e0ea2f4",class:"story-stat-value"},this.views),e("span",{key:"eb1572fc127ccd6ae0d0b4eb2b3a61896e2d9afa",class:"story-stat-label"},this.viewsText)),this.views>0&&e("span",{key:"1276d267f51fda05ebeca61b47b4b8c8cd08d64c",class:"story-stat-separator"},"·"),e("span",{key:"c30c987a24771ca02011fed0b77a7fce0bc61cbc",class:"story-stat"},e("span",{key:"f967acbbdddac29e68e4d3fd5ef2d57f8dc83a2c",class:"story-stat-value"},this.readingDuration==="-1"?"N/A":this.readingDuration),e("span",{key:"a6d4f3c0225b6a4f51030526d8577875cdbe6b2e",class:"story-stat-label"},this.readingDurationText)))),e("div",{key:"a663cf7184338cd7ca8aa9cacfecc0cbbc25550a",class:"novl-details"},this.languages.split(",").map(t=>e("ur-chip",{fontColor:"rgb(var(--ur-color-on-surface-lite))",backColor:"rgb(var(--ur-color-surface-container-high))",size:"28px",class:"info-chip",clickable:!1,label:t})),this.literatureTypes.split(",").map(t=>e("ur-chip",{fontColor:"rgb(var(--ur-color-on-surface-lite))",backColor:"rgb(var(--ur-color-surface-container-high))",size:"28px",class:"info-chip",clickable:!1,label:t})),this.genres.split(",").map(t=>e("ur-chip",{fontColor:"rgb(var(--ur-color-on-surface-lite))",backColor:"rgb(var(--ur-color-surface-container-high))",size:"28px",class:"info-chip",clickable:!1,label:t}))),e("div",{key:"e9a094a191083915baf3ad225c818f41163c7a02",class:"description"},e("slot",{key:"b6d9725f6a57fb7710624dcdbb691e2ab66b6618",name:"description"})),e("div",{key:"98370407248fbd2c0732a9f2b5fa39a0f440144f",class:"actions-holder"},this.hasBranches&&e("ur-button",{key:"796a44de3819e55573bd07e35afb63095071e5b3",class:"summary-action",variant:"filled","full-width":!0,onClick:()=>this.onReadStory()},this.readStoryText),this.writeEnabled&&!this.hasBranches&&e("ur-button",{key:"f17d7bff8865041e7bf1b3ed2dddcd01cdacac3e",class:"summary-action",variant:"filled","full-width":!0,onClick:()=>this.onWriteStory()},this.writeStoryText),this.novlPaid&&(this.novlPurchasedAt?e("ur-button",{class:"summary-action",variant:"filled",fullWidth:!0,onClick:()=>this.onReadStory()},this.readStoryText):e("ur-button",{class:"summary-action",variant:"filled",fullWidth:!0,onClick:()=>this.onBuyStory()},this.buyStoryText," ",e("span",{class:"buy-price"},this.novlPrice))),this.novlIsOwn&&e("ur-button",{key:"4350d800d7ac61a00b6b074fd0cf01e9ee609b1b",class:"summary-action",variant:"outlined",fullWidth:!0,onClick:()=>this.onLearnMore()},this.learnMoreText)),e("div",{key:"c3f709ccd03ebbadd45c07e359f571cfc72bfedb",class:"owner-holder"},e("slot",{key:"35be2d1ae6e9f391aa9e486050b872fe7a8c38ec",name:"owner"}),e("slot",{key:"1b2aaf5fe7293d45880e378408738e51a7179a33",name:"owner-page"}))))}static get style(){return B}};I(O,[1,"ur-novl-summary",{novlTitle:[1,"novl-title"],coverImage:[1,"cover-image"],completeText:[1,"complete-text"],ongoingText:[1,"ongoing-text"],storyCompleteStatus:[4,"story-complete-status"],likes:[2],likesText:[1,"likes-text"],views:[2],viewsText:[1,"views-text"],readingDuration:[1,"reading-duration"],readingDurationText:[1,"reading-duration-text"],description:[1],languages:[1],genres:[1],literatureTypes:[1,"literature-types"],showLessText:[1,"show-less-text"],showMoreText:[1,"show-more-text"],readStoryText:[1,"read-story-text"],learnMoreText:[1,"learn-more-text"],writeStoryText:[1,"write-story-text"],buyStoryText:[1,"buy-story-text"],novlPrice:[1,"novl-price"],hasBranches:[4,"has-branches"],writeEnabled:[4,"write-enabled"],novlPaid:[4,"novl-paid"],novlPurchasedAt:[1,"novl-purchased-at"],ownerAvatar:[1,"owner-avatar"],ownerName:[1,"owner-name"],novlIsOwn:[4,"novl-is-own"],expanded:[4],reset:[64]}]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlSummary",tagName:"ur-novl-summary",customElement:!0,members:[{kind:"field",name:"novlTitle",type:"string",description:"",default:"'This is long story title'"},{kind:"field",name:"coverImage",type:"string",description:""},{kind:"field",name:"completeText",type:"string",description:"",default:"'Complete'"},{kind:"field",name:"ongoingText",type:"string",description:"",default:"'Ongoing'"},{kind:"field",name:"storyCompleteStatus",type:"boolean",description:""},{kind:"field",name:"likes",type:"number",description:""},{kind:"field",name:"likesText",type:"string",description:"",default:"'Likes'"},{kind:"field",name:"views",type:"number",description:""},{kind:"field",name:"viewsText",type:"string",description:"",default:"'Views'"},{kind:"field",name:"readingDuration",type:"string",description:"",default:"'1min'"},{kind:"field",name:"readingDurationText",type:"string",description:"",default:"'Reading Duration'"},{kind:"field",name:"description",type:"string",description:"",default:"'Description'"},{kind:"field",name:"languages",type:"string",description:"",default:"'English'"},{kind:"field",name:"genres",type:"string",description:"",default:"'Action, Adventure'"},{kind:"field",name:"literatureTypes",type:"string",description:"",default:"'Novel'"},{kind:"field",name:"showLessText",type:"string",description:"",default:"'Show less'"},{kind:"field",name:"showMoreText",type:"string",description:"",default:"'Show more...'"},{kind:"field",name:"readStoryText",type:"string",description:"",default:"'Read story'"},{kind:"field",name:"learnMoreText",type:"string",description:"",default:"'Learn more'"},{kind:"field",name:"writeStoryText",type:"string",description:"",default:"'Start writing'"},{kind:"field",name:"buyStoryText",type:"string",description:"",default:"'Buy for'"},{kind:"field",name:"novlPrice",type:"string",description:""},{kind:"field",name:"hasBranches",type:"boolean",description:""},{kind:"field",name:"writeEnabled",type:"boolean",description:""},{kind:"field",name:"novlPaid",type:"boolean",description:""},{kind:"field",name:"novlPurchasedAt",type:"string",description:"",default:"''"},{kind:"field",name:"ownerAvatar",type:"string",description:""},{kind:"field",name:"ownerName",type:"string",description:""},{kind:"field",name:"novlIsOwn",type:"boolean",description:"",default:"false"},{kind:"field",name:"expanded",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"readStoryEvent",description:""},{kind:"event",name:"learnMoreEvent",description:""},{kind:"event",name:"writeStoryEvent",description:""},{kind:"event",name:"buyStoryEvent",description:""}]}],exports:[{kind:"js",name:"UrNovlSummary",declaration:{name:"UrNovlSummary",module:"src/components/ur-novl-summary/ur-novl-summary.tsx"}},{kind:"custom-element-definition",name:"ur-novl-summary",declaration:{name:"UrNovlSummary",module:"src/components/ur-novl-summary/ur-novl-summary.tsx"}}]}]};N({...c()||{},...d,modules:[...(c()||{}).modules||[],...d.modules]});const L=t=>A`
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
`,de={title:"urnovl/Business/Novl Summary",render:L,argTypes:{novlTitle:{control:"text",description:"The title of the novel"},storyCompleteStatus:{control:"boolean",description:"Whether the story is complete"},writeEnabled:{control:"boolean",description:"Whether the user can write a chapter"},novlPaid:{control:"boolean",description:"Whether the story is paid"},novlPurchasedAt:{control:"date",description:"Date when the story was purchased"},ownerAvatar:{control:"text",description:"Avatar of the owner"},ownerName:{control:"text",description:"Name of the owner"},novlPrice:{control:"text",description:"Price of the novel"},longDescription:{control:"text",description:"Long description of the novel"},likes:{control:"number",description:"Number of likes"},views:{control:"number",description:"Number of views"},readingDuration:{control:"text",description:"Estimated reading duration"},languages:{control:"text",description:"Languages the novel is available in"},genres:{control:"text",description:"Genres of the novel"},literatureTypes:{control:"text",description:"Type of literature"},coverImage:{control:"text",description:"URL of the cover image"},hasBranches:{control:"boolean",description:"Whether the novel has branches"}}},a={args:{novlTitle:"My First Novel",storyCompleteStatus:!1,writeEnabled:!1,novlPaid:!1,novlPurchasedAt:"",novlPrice:"50€",longDescription:"This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.",likes:0,views:0,readingDuration:"1min",languages:"English",genres:"Action, Adventure",literatureTypes:"Novel",coverImage:"https://picsum.photos/200/300",hasBranches:!0}},o={args:{...a.args,likes:100,views:100,readingDuration:"1min",languages:"English",genres:"Action, Adventure",literatureTypes:"Novel",writeEnabled:!0,hasBranches:!1}},i={args:{...a.args,novlTitle:"My First Novel",likes:7,views:100,readingDuration:"-1",languages:"English",genres:"Action, Adventure",literatureTypes:"Novel",writeEnabled:!1,hasBranches:!1}},r={args:{...a.args,likes:4,views:1750,readingDuration:"3hours 5min",novlTitle:"Interstellar",storyCompleteStatus:!0}},s={args:{...a.args,likes:1293,views:1293,readingDuration:"4 hours",storyCompleteStatus:!0,novlTitle:"The lord of the rings",novlPaid:!0,novlPurchasedAt:""}},l={args:{...a.args,storyCompleteStatus:!0,novlTitle:"The fellowship of the ring",novlPaid:!0,novlPurchasedAt:new Date().toISOString()}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    hasBranches: true
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var m,f,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    likes: 100,
    views: 100,
    readingDuration: '1min',
    languages: 'English',
    genres: 'Action, Adventure',
    literatureTypes: 'Novel',
    writeEnabled: true,
    hasBranches: false
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,y,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,k,x;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    likes: 4,
    views: 1750,
    readingDuration: '3hours 5min',
    novlTitle: 'Interstellar',
    storyCompleteStatus: true
  }
}`,...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var T,S,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var E,P,D;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    storyCompleteStatus: true,
    novlTitle: 'The fellowship of the ring',
    novlPaid: true,
    novlPurchasedAt: new Date().toISOString()
  }
}`,...(D=(P=l.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const pe=["Default","OwnerWritingChapter","NotOwnerNoContent","StoryComplete","PaidStoryNotPurchased","PaidStoryPurchased"];export{a as Default,i as NotOwnerNoContent,o as OwnerWritingChapter,s as PaidStoryNotPurchased,l as PaidStoryPurchased,r as StoryComplete,pe as __namedExportsOrder,de as default};
