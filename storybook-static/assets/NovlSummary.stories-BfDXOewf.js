import{k as A}from"./entry-preview-BcHUnPw7.js";import"./ur-chip-CZUEJ4St.js";import"./ur-button-vHSG-pKr.js";import{s as N,g as c}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as I,H as $,c as a,h as e,a as M}from"./index-BJvbtjhH.js";import"./ur-time-ago-DZKVhp_V.js";import"./ur-long-description-nZmAUnQr.js";import"./ur-profile-card-BmezZTax.js";import"./index-DrFu-skq.js";import"./index-DnUXnuGK.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./anchor-C8TuHONp.js";import"./if-defined-CL77Dv0Z.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./check-Bc-_4cuB.js";import"./svg-tag-C3ctfYVB.js";import"./index-CXOzFcj5.js";import"./button-base-DxLrUPRs.js";import"./form-DhDC-phE.js";import"./index-pqI9kxak.js";import"./index-BRY6Z_ZR.js";import"./ur-avatar-CDkTpniw.js";import"./ur-tooltip-fey0by2o.js";import"./ur-button-icon-BwpYUWjp.js";import"./index-rXz1tEXk.js";const B=`:host{--ur-color-background:var(--mdui-color-background);--ur-color-on-background:var(--mdui-color-on-background);--ur-color-on-complete-surface:#1A5100;--ur-color-complete-surface:red;--ur-color-primary:var(--mdui-color-primary);--ur-color-primary-container:var(--mdui-color-primary-container);--ur-color-on-surface-lite:var(--mdui-color-on-surface-lite);--ur-color-surface-container-high:var(--mdui-color-surface-container-high);display:block;color:rgb(var(--ur-color-on-background-rgb));background:rgb(var(--ur-color-complete-surface))}:host .cover-image{height:100%;width:100%;object-fit:cover}:host .cover{height:calc( 100vw / 3);width:100%;max-height:210px;position:relative}:host .status{display:flex;position:absolute;top:0;left:24px;transform:translate(0, -50%)}:host .novl-content{display:flex;position:relative;padding:24px;gap:16px;flex-direction:column}:host .title-text{margin:0;font-size:22px;font-style:normal;font-weight:700;line-height:24px;letter-spacing:-0.262px}:host .story-stats{margin-top:8px;display:flex}:host .story-stat{font-size:12px;display:flex;align-items:center}:host .story-stat-label{font-weight:700;line-height:12px}:host .story-stat-value{font-weight:400;line-height:12px;margin-right:4px}:host .story-stat-separator{margin:0 4px}:host .novl-details{display:flex;flex-wrap:wrap;gap:8px}:host .actions-holder{display:flex;gap:8px}:host .summary-action{flex:1}:host .owner-holder{display:flex;flex-direction:column;gap:8px}@keyframes placeholderAnimate{0%{background-position:-650px 0}100%{background-position:650px 0}}:host .title-text.loading{height:24px;margin:8px 0;border-radius:4px;animation-duration:1.7s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:placeholderAnimate;background:linear-gradient(
        to right,
        rgba(var(--ur-color-on-background), 0.04) 2%,
        rgba(var(--ur-color-on-background), 0.12) 18%,
        rgba(var(--ur-color-on-background), 0.04) 33%
    );background-size:1000px}`,O=class extends ${constructor(){super(),this.__registerHost(),this.__attachShadow(),this.readStoryEvent=a(this,"readStoryEvent",7),this.learnMoreEvent=a(this,"learnMoreEvent",7),this.writeStoryEvent=a(this,"writeStoryEvent",7),this.buyStoryEvent=a(this,"buyStoryEvent",7),this.novlTitle="This is long story title",this.completeText="Complete",this.ongoingText="Ongoing",this.likesText="Likes",this.viewsText="Views",this.readingDuration="1min",this.readingDurationText="Reading Duration",this.description="Description",this.languages="English",this.genres="Action, Adventure",this.literatureTypes="Novel",this.showLessText="Show less",this.showMoreText="Show more...",this.readStoryText="Read story",this.learnMoreText="Learn more",this.writeStoryText="Start writing",this.buyStoryText="Buy for",this.novlPurchasedAt="",this.novlIsOwn=!1,this.expanded=!1}onReadStory(){this.readStoryEvent.emit()}onLearnMore(){this.learnMoreEvent.emit()}onWriteStory(){this.writeStoryEvent.emit()}onBuyStory(){this.buyStoryEvent.emit()}async reset(){this.expanded=!1}render(){return e(M,{key:"4f1c631253bf7221888d7f5196eccc944dc2b7d6"},e("div",{key:"c123f28294e35c5f63b03b0ffc0bdb5b8c245177",class:"cover"},e("img",{key:"256aeded23a2bf21e7ce09f3f23df7198039f90c",class:"cover-image",src:this.coverImage,alt:"Novl Cover"})),e("div",{key:"e6f04e4c0a5caaee2c6f6e07e7725419ae1f6037",class:"novl-content"},e("div",{key:"ca6f84dc42b11897eee95ec8e4616f73b81c40df",class:"status"},this.storyCompleteStatus?e("ur-chip",{fontColor:"#1A5100",backColor:"#C6F4D0",radius:"50px",border:"2px",size:"32px",class:"status-chip",clickable:!1,label:this.completeText}):e("ur-chip",{fontColor:"rgb(var(--ur-color-primary))",backColor:"rgb(var(--ur-color-primary-container))",size:"32px",class:"status-chip",border:"2px",radius:"50px",clickable:!1,label:this.ongoingText})),e("div",{key:"cdc7eeb4abe67e320adf29a5d82dcb8a019871d1",class:"main-content"},e("h1",{key:"e5147e0711e390a137c0e5585882de17069dec1a",class:"title-text"},this.novlTitle),e("span",{key:"ff1ea2bab4efe8d9c5d5aa6ca8abb63eab0ef53c",class:"story-stats"},this.likes>0&&e("span",{key:"1418b3007fa865a8b65f924eca90c1de33a108a5",class:"story-stat"},e("span",{key:"b7ed2d36e628deba8b6d0ad4e478e0ab07314812",class:"story-stat-value"},this.likes),e("span",{key:"f1de40699b92c003b1c4e3f4f618c41b75948796",class:"story-stat-label"},this.likesText)),this.likes>0&&e("span",{key:"cdf6f4fdf1a0fde5abc6b78605217f4958a8b160",class:"story-stat-separator"},"·"),this.views>0&&e("span",{key:"abb19e698906792838f70fd6c8977deac9b3f233",class:"story-stat"},e("span",{key:"341b2bdb42a43866901b470e2425ebc0467cf638",class:"story-stat-value"},this.views),e("span",{key:"28e5409add89795660e8b7e26de69530707dd3c1",class:"story-stat-label"},this.viewsText)),this.views>0&&e("span",{key:"70cd5878dc9efc43c24c9150e5515a9fddcf6cce",class:"story-stat-separator"},"·"),e("span",{key:"c520d9435a394a57a8fd12950c57665be7ab73ee",class:"story-stat"},e("span",{key:"be304c264fdaa88330bb963bcb7b57994a849191",class:"story-stat-value"},this.readingDuration==="-1"?"N/A":this.readingDuration),e("span",{key:"7beb1aa105eb6a882edf15965752b5eeb59d446e",class:"story-stat-label"},this.readingDurationText)))),e("div",{key:"efa0911ac2b84700078be1a8cd7fef137e1915da",class:"novl-details"},this.languages.split(",").map(t=>e("ur-chip",{fontColor:"rgb(var(--ur-color-on-surface-lite))",backColor:"rgb(var(--ur-color-surface-container-high))",size:"28px",class:"info-chip",clickable:!1,label:t})),this.literatureTypes.split(",").map(t=>e("ur-chip",{fontColor:"rgb(var(--ur-color-on-surface-lite))",backColor:"rgb(var(--ur-color-surface-container-high))",size:"28px",class:"info-chip",clickable:!1,label:t})),this.genres.split(",").map(t=>e("ur-chip",{fontColor:"rgb(var(--ur-color-on-surface-lite))",backColor:"rgb(var(--ur-color-surface-container-high))",size:"28px",class:"info-chip",clickable:!1,label:t}))),e("div",{key:"9b37a6b902469bd99065f32aabaf2e245ace17d6",class:"description"},e("slot",{key:"1dcbb5ee0ecc9e61f4b671f5f315f4d73c495897",name:"description"})),e("div",{key:"6cb7303a6953afa6ffd3978e7bf82f825d1dc159",class:"actions-holder"},this.hasBranches&&e("ur-button",{key:"e3249db06ccffa9b09f3a54aff3abe54be888e33",class:"summary-action",variant:"filled","full-width":!0,onClick:()=>this.onReadStory()},this.readStoryText),this.writeEnabled&&!this.hasBranches&&e("ur-button",{key:"3f5e747e569426b25453ea28b57a5bf0b17bf3f5",class:"summary-action",variant:"filled","full-width":!0,onClick:()=>this.onWriteStory()},this.writeStoryText),this.novlPaid&&(this.novlPurchasedAt?e("ur-button",{class:"summary-action",variant:"filled",fullWidth:!0,onClick:()=>this.onReadStory()},this.readStoryText):e("ur-button",{class:"summary-action",variant:"filled",fullWidth:!0,onClick:()=>this.onBuyStory()},this.buyStoryText," ",e("span",{class:"buy-price"},this.novlPrice))),this.novlIsOwn&&e("ur-button",{key:"1ca495a2342320d47ee3804fdf2224cb95f6e26c",class:"summary-action",variant:"outlined",fullWidth:!0,onClick:()=>this.onLearnMore()},this.learnMoreText)),e("div",{key:"a11c185ed7d7544e061e0a5ee873a97fddb65b92",class:"owner-holder"},e("slot",{key:"228c7ad0071ddff8086e6850cedef033d453b132",name:"owner"}),e("slot",{key:"20829a1f85628f7dc245488b4c422bbbee4c55bb",name:"owner-page"}))))}static get style(){return B}};I(O,[1,"ur-novl-summary",{novlTitle:[1,"novl-title"],coverImage:[1,"cover-image"],completeText:[1,"complete-text"],ongoingText:[1,"ongoing-text"],storyCompleteStatus:[4,"story-complete-status"],likes:[2],likesText:[1,"likes-text"],views:[2],viewsText:[1,"views-text"],readingDuration:[1,"reading-duration"],readingDurationText:[1,"reading-duration-text"],description:[1],languages:[1],genres:[1],literatureTypes:[1,"literature-types"],showLessText:[1,"show-less-text"],showMoreText:[1,"show-more-text"],readStoryText:[1,"read-story-text"],learnMoreText:[1,"learn-more-text"],writeStoryText:[1,"write-story-text"],buyStoryText:[1,"buy-story-text"],novlPrice:[1,"novl-price"],hasBranches:[4,"has-branches"],writeEnabled:[4,"write-enabled"],novlPaid:[4,"novl-paid"],novlPurchasedAt:[1,"novl-purchased-at"],ownerAvatar:[1,"owner-avatar"],ownerName:[1,"owner-name"],novlIsOwn:[4,"novl-is-own"],expanded:[4],reset:[64]}]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlSummary",tagName:"ur-novl-summary",customElement:!0,members:[{kind:"field",name:"novlTitle",type:"string",description:"",default:"'This is long story title'"},{kind:"field",name:"coverImage",type:"string",description:""},{kind:"field",name:"completeText",type:"string",description:"",default:"'Complete'"},{kind:"field",name:"ongoingText",type:"string",description:"",default:"'Ongoing'"},{kind:"field",name:"storyCompleteStatus",type:"boolean",description:""},{kind:"field",name:"likes",type:"number",description:""},{kind:"field",name:"likesText",type:"string",description:"",default:"'Likes'"},{kind:"field",name:"views",type:"number",description:""},{kind:"field",name:"viewsText",type:"string",description:"",default:"'Views'"},{kind:"field",name:"readingDuration",type:"string",description:"",default:"'1min'"},{kind:"field",name:"readingDurationText",type:"string",description:"",default:"'Reading Duration'"},{kind:"field",name:"description",type:"string",description:"",default:"'Description'"},{kind:"field",name:"languages",type:"string",description:"",default:"'English'"},{kind:"field",name:"genres",type:"string",description:"",default:"'Action, Adventure'"},{kind:"field",name:"literatureTypes",type:"string",description:"",default:"'Novel'"},{kind:"field",name:"showLessText",type:"string",description:"",default:"'Show less'"},{kind:"field",name:"showMoreText",type:"string",description:"",default:"'Show more...'"},{kind:"field",name:"readStoryText",type:"string",description:"",default:"'Read story'"},{kind:"field",name:"learnMoreText",type:"string",description:"",default:"'Learn more'"},{kind:"field",name:"writeStoryText",type:"string",description:"",default:"'Start writing'"},{kind:"field",name:"buyStoryText",type:"string",description:"",default:"'Buy for'"},{kind:"field",name:"novlPrice",type:"string",description:""},{kind:"field",name:"hasBranches",type:"boolean",description:""},{kind:"field",name:"writeEnabled",type:"boolean",description:""},{kind:"field",name:"novlPaid",type:"boolean",description:""},{kind:"field",name:"novlPurchasedAt",type:"string",description:"",default:"''"},{kind:"field",name:"ownerAvatar",type:"string",description:""},{kind:"field",name:"ownerName",type:"string",description:""},{kind:"field",name:"novlIsOwn",type:"boolean",description:"",default:"false"},{kind:"field",name:"expanded",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"readStoryEvent",description:""},{kind:"event",name:"learnMoreEvent",description:""},{kind:"event",name:"writeStoryEvent",description:""},{kind:"event",name:"buyStoryEvent",description:""}]}],exports:[{kind:"js",name:"UrNovlSummary",declaration:{name:"UrNovlSummary",module:"src/components/ur-novl-summary/ur-novl-summary.tsx"}},{kind:"custom-element-definition",name:"ur-novl-summary",declaration:{name:"UrNovlSummary",module:"src/components/ur-novl-summary/ur-novl-summary.tsx"}}]}]};N({...c()||{},...d,modules:[...(c()||{}).modules||[],...d.modules]});const L=t=>A`
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
`,de={title:"urnovl/Business/Novl Summary",render:L,argTypes:{novlTitle:{control:"text",description:"The title of the novel"},storyCompleteStatus:{control:"boolean",description:"Whether the story is complete"},writeEnabled:{control:"boolean",description:"Whether the user can write a chapter"},novlPaid:{control:"boolean",description:"Whether the story is paid"},novlPurchasedAt:{control:"date",description:"Date when the story was purchased"},ownerAvatar:{control:"text",description:"Avatar of the owner"},ownerName:{control:"text",description:"Name of the owner"},novlPrice:{control:"text",description:"Price of the novel"},longDescription:{control:"text",description:"Long description of the novel"},likes:{control:"number",description:"Number of likes"},views:{control:"number",description:"Number of views"},readingDuration:{control:"text",description:"Estimated reading duration"},languages:{control:"text",description:"Languages the novel is available in"},genres:{control:"text",description:"Genres of the novel"},literatureTypes:{control:"text",description:"Type of literature"},coverImage:{control:"text",description:"URL of the cover image"},hasBranches:{control:"boolean",description:"Whether the novel has branches"}}},n={args:{novlTitle:"My First Novel",storyCompleteStatus:!1,writeEnabled:!1,novlPaid:!1,novlPurchasedAt:"",novlPrice:"50€",longDescription:"This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.",likes:0,views:0,readingDuration:"1min",languages:"English",genres:"Action, Adventure",literatureTypes:"Novel",coverImage:"https://picsum.photos/200/300",hasBranches:!0}},o={args:{...n.args,likes:100,views:100,readingDuration:"1min",languages:"English",genres:"Action, Adventure",literatureTypes:"Novel",writeEnabled:!0,hasBranches:!1}},i={args:{...n.args,novlTitle:"My First Novel",likes:7,views:100,readingDuration:"-1",languages:"English",genres:"Action, Adventure",literatureTypes:"Novel",writeEnabled:!1,hasBranches:!1}},r={args:{...n.args,likes:4,views:1750,readingDuration:"3hours 5min",novlTitle:"Interstellar",storyCompleteStatus:!0}},s={args:{...n.args,likes:1293,views:1293,readingDuration:"4 hours",storyCompleteStatus:!0,novlTitle:"The lord of the rings",novlPaid:!0,novlPurchasedAt:""}},l={args:{...n.args,storyCompleteStatus:!0,novlTitle:"The fellowship of the ring",novlPaid:!0,novlPurchasedAt:new Date().toISOString()}};var p,u,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var m,f,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(D=(P=l.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const pe=["Default","OwnerWritingChapter","NotOwnerNoContent","StoryComplete","PaidStoryNotPurchased","PaidStoryPurchased"];export{n as Default,i as NotOwnerNoContent,o as OwnerWritingChapter,s as PaidStoryNotPurchased,l as PaidStoryPurchased,r as StoryComplete,pe as __namedExportsOrder,de as default};
