import{k as A}from"./entry-preview-BcHUnPw7.js";import"./ur-chip-Oedwlmat.js";import"./ur-button-DD2i9WoV.js";import{s as P,g as c}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as D,H as I,c as i,h as e,a as $}from"./index-DddAbXmr.js";import"./ur-time-ago-BQvV6XqK.js";import"./ur-long-description-BRqR28GE.js";import"./ur-profile-card-M4rRKtvZ.js";import"./index-DrFu-skq.js";import"./index-D1Vud5Wt.js";import"./class-map-CDMw4-pN.js";import"./get-7S0C3xNv.js";import"./anchor--mD29Q5y.js";import"./if-defined-CL77Dv0Z.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./check-CYfW0qAL.js";import"./svg-tag-Dv8So2Bi.js";import"./index-BriiHZyV.js";import"./button-base-CWeRpzKK.js";import"./form-B80GgqR6.js";import"./index-DsS9OQyQ.js";import"./index-B-mBYDoO.js";import"./ur-avatar-D_HQUxCA.js";import"./ur-tooltip-BqonQQAg.js";import"./ur-button-icon-BechBhvu.js";import"./index-CIbCn1or.js";const M=`:host{--ur-color-background:var(--mdui-color-background);--ur-color-on-background:var(--mdui-color-on-background);--ur-color-on-complete-surface:#1A5100;--ur-color-complete-surface:red;--ur-color-primary:var(--mdui-color-primary);--ur-color-primary-container:var(--mdui-color-primary-container);--ur-color-on-surface-lite:var(--mdui-color-on-surface-lite);--ur-color-surface-container-high:var(--mdui-color-surface-container-high);display:block;color:rgb(var(--ur-color-on-background-rgb));background:rgb(var(--ur-color-complete-surface))}:host .cover-image{height:100%;width:100%;object-fit:cover}:host .cover{height:calc( 100vw / 3);width:100%;max-height:210px;position:relative}:host .status{display:flex;position:absolute;top:0;left:24px;transform:translate(0, -50%)}:host .novl-content{display:flex;position:relative;padding:24px;gap:16px;flex-direction:column}:host .title-text{margin:0;font-size:22px;font-style:normal;font-weight:700;line-height:24px;letter-spacing:-0.262px}:host .story-stats{margin-top:8px;display:flex}:host .story-stat{font-size:12px;display:flex;align-items:center}:host .story-stat-label{font-weight:700;line-height:12px}:host .story-stat-value{font-weight:400;line-height:12px;margin-right:4px}:host .story-stat-separator{margin:0 4px}:host .novl-details{display:flex;flex-wrap:wrap;gap:8px}:host .actions-holder{overflow:auto;display:flex;gap:8px}:host .summary-action{flex:1}:host .owner-holder{display:flex;flex-direction:column;gap:8px}@keyframes placeholderAnimate{0%{background-position:-650px 0}100%{background-position:650px 0}}:host .title-text.loading{height:24px;margin:8px 0;border-radius:4px;animation-duration:1.7s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:placeholderAnimate;background:linear-gradient(
        to right,
        rgba(var(--ur-color-on-background), 0.04) 2%,
        rgba(var(--ur-color-on-background), 0.12) 18%,
        rgba(var(--ur-color-on-background), 0.04) 33%
    );background-size:1000px}`,B=class extends I{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.readStoryEvent=i(this,"readStoryEvent",7),this.learnMoreEvent=i(this,"learnMoreEvent",7),this.writeStoryEvent=i(this,"writeStoryEvent",7),this.buyStoryEvent=i(this,"buyStoryEvent",7),this.toggleLibraryEvent=i(this,"toggleLibraryEvent",7),this.novlTitle="This is long story title",this.completeText="Complete",this.ongoingText="Ongoing",this.likesText="Likes",this.viewsText="Views",this.readingDuration="1min",this.readingDurationText="Reading Duration",this.description="Description",this.languages="English",this.genres="Action, Adventure",this.literatureTypes="Novel",this.showLessText="Show less",this.showMoreText="Show more...",this.readStoryText="Read story",this.learnMoreText="Learn more",this.writeStoryText="Start writing",this.buyStoryText="Buy for",this.addToLibraryText="Add to Library",this.removeFromLibraryText="Remove from Library",this.novlPurchasedAt="",this.novlIsOwn=!1,this.expanded=!1}onToggleLibrary(){this.toggleLibraryEvent.emit()}onReadStory(){this.readStoryEvent.emit()}onLearnMore(){this.learnMoreEvent.emit()}onWriteStory(){this.writeStoryEvent.emit()}onBuyStory(){this.buyStoryEvent.emit()}async reset(){this.expanded=!1}render(){return e($,{key:"0332de71407babb0857b407ad7ac7902de5d4485"},e("div",{key:"bac3e42fd6ded5ce7890ef9f93cf32f93b1e8e2e",class:"cover"},e("img",{key:"f3514fafa2b645dd3c8154e2def99d4447c1e5cc",class:"cover-image",src:this.coverImage,alt:"Novl Cover"})),e("div",{key:"fbdd845d22397cfcdd87f1daae130717cf6dd3fa",class:"novl-content"},e("div",{key:"04b77ebf0cbf60a26e268ee12eb065e0adc5466d",class:"status"},this.storyCompleteStatus?e("ur-chip",{fontColor:"#1A5100",backColor:"#C6F4D0",radius:"50px",border:"2px",size:"32px",class:"status-chip",clickable:!1,label:this.completeText}):e("ur-chip",{fontColor:"rgb(var(--ur-color-primary))",backColor:"rgb(var(--ur-color-primary-container))",size:"32px",class:"status-chip",border:"2px",radius:"50px",clickable:!1,label:this.ongoingText})),e("div",{key:"29bd471b3183cdaf0ba2ae3334018306b412d849",class:"main-content"},e("h1",{key:"a09e85d97f40d672939558259b6ba03f0f87cbf2",class:"title-text"},this.novlTitle),e("span",{key:"c0fee181927c4345d01360a79956ebc7fea030ab",class:"story-stats"},this.likes>0&&e("span",{key:"26e2ae7650479eb4a8cef130e72b3dd73403ff52",class:"story-stat"},e("span",{key:"9436d02508a9b651b3be321a08b7955e1e818257",class:"story-stat-value"},this.likes),e("span",{key:"b5b5faa62f9517bc1bfbb17f880065bfe868206c",class:"story-stat-label"},this.likesText)),this.likes>0&&e("span",{key:"df4a1dfdfae445a0e35ffd9579f428c934fecd90",class:"story-stat-separator"},"·"),this.views>0&&e("span",{key:"38abeef7236d017ccfedaf2359c013a5241985ef",class:"story-stat"},e("span",{key:"638f9bd7651c2aba4ee9eada54ca0cb0983d1910",class:"story-stat-value"},this.views),e("span",{key:"ca920b471638ff81b840d4e0c691e5008a02c4ef",class:"story-stat-label"},this.viewsText)),this.views>0&&e("span",{key:"6bff9e561ecae5b3b613bac0c4f0b22c62c2db61",class:"story-stat-separator"},"·"),e("span",{key:"9c012cb9a8872e6bfd6994da004443b81453c198",class:"story-stat"},e("span",{key:"aacd86dd6ecc0970d465d8002971735cd955b754",class:"story-stat-value"},this.readingDuration==="-1"?"N/A":this.readingDuration),e("span",{key:"fdccb4e9e37eb0cb4dfa0d87c718120e7c342503",class:"story-stat-label"},this.readingDurationText)))),e("div",{key:"98cfa7908b755c7a419e5714b52a864671fee65e",class:"novl-details"},this.languages.split(",").map(t=>e("ur-chip",{fontColor:"rgb(var(--ur-color-on-surface-lite))",backColor:"rgb(var(--ur-color-surface-container-high))",size:"28px",class:"info-chip",clickable:!1,label:t})),this.literatureTypes.split(",").map(t=>e("ur-chip",{fontColor:"rgb(var(--ur-color-on-surface-lite))",backColor:"rgb(var(--ur-color-surface-container-high))",size:"28px",class:"info-chip",clickable:!1,label:t})),this.genres.split(",").map(t=>e("ur-chip",{fontColor:"rgb(var(--ur-color-on-surface-lite))",backColor:"rgb(var(--ur-color-surface-container-high))",size:"28px",class:"info-chip",clickable:!1,label:t}))),e("div",{key:"1e13621e27ec070afb2aceb3b61240e74008c31d",class:"description"},e("slot",{key:"ba5fed4a7172e74931ff4fa17c59a1cdd40ea865",name:"description"})),e("div",{key:"41a3f312e44461d079ba09ed0071d3881d541376",class:"actions-holder"},this.hasBranches&&e("ur-button",{key:"6f98d2b5b812b8f2779826a1fe9cc94a4225e930",class:"summary-action",variant:"filled","full-width":!0,onClick:()=>this.onReadStory()},this.readStoryText),this.writeEnabled&&!this.hasBranches&&e("ur-button",{key:"9d18141aac2b638f84c881f7adf103f4160b0769",class:"summary-action",variant:"filled","full-width":!0,onClick:()=>this.onWriteStory()},this.writeStoryText),this.novlPaid&&(this.novlPurchasedAt?e("ur-button",{class:"summary-action",variant:"filled",fullWidth:!0,onClick:()=>this.onReadStory()},this.readStoryText):e("ur-button",{class:"summary-action",variant:"filled",fullWidth:!0,onClick:()=>this.onBuyStory()},this.buyStoryText," ",e("span",{class:"buy-price"},this.novlPrice))),e("ur-button",{key:"358ecaad8b92962576369e4acacbd164739bcca5",class:"summary-action",variant:"outlined",fullWidth:!0,onClick:()=>this.onLearnMore()},this.learnMoreText),this.isUserLoggedIn&&e("ur-button",{key:"cf7e7ae8a09d8543666881d6395b43327041959b",class:"summary-action",icon:this.isNovlLibrary?"bookmark_added":"bookmark_add--outlined",variant:"text",onClick:()=>this.onToggleLibrary()},this.isNovlLibrary?this.removeFromLibraryText:this.addToLibraryText)),e("div",{key:"fea0291ee155a46e52db43ea25f826d110045fef",class:"owner-holder"},e("slot",{key:"36451c8c660e8fd0e3dfa357aabbe4b62c4b768b",name:"owner"}),e("slot",{key:"e893ac19a50ffba59eb60c77bf2f9db4f2e2035e",name:"owner-page"}))))}static get style(){return M}};D(B,[1,"ur-novl-summary",{novlTitle:[1,"novl-title"],coverImage:[1,"cover-image"],completeText:[1,"complete-text"],ongoingText:[1,"ongoing-text"],storyCompleteStatus:[4,"story-complete-status"],likes:[2],likesText:[1,"likes-text"],views:[2],viewsText:[1,"views-text"],readingDuration:[1,"reading-duration"],readingDurationText:[1,"reading-duration-text"],description:[1],languages:[1],genres:[1],literatureTypes:[1,"literature-types"],showLessText:[1,"show-less-text"],showMoreText:[1,"show-more-text"],readStoryText:[1,"read-story-text"],learnMoreText:[1,"learn-more-text"],writeStoryText:[1,"write-story-text"],buyStoryText:[1,"buy-story-text"],addToLibraryText:[1,"add-to-library-text"],removeFromLibraryText:[1,"remove-from-library-text"],novlPrice:[1,"novl-price"],hasBranches:[4,"has-branches"],writeEnabled:[4,"write-enabled"],novlPaid:[4,"novl-paid"],novlPurchasedAt:[1,"novl-purchased-at"],ownerAvatar:[1,"owner-avatar"],ownerName:[1,"owner-name"],isUserLoggedIn:[4,"is-user-logged-in"],isNovlLibrary:[4,"is-novl-library"],novlIsOwn:[4,"novl-is-own"],expanded:[4],reset:[64]}]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNovlSummary",tagName:"ur-novl-summary",customElement:!0,members:[{kind:"field",name:"novlTitle",type:"string",description:"",default:"'This is long story title'"},{kind:"field",name:"coverImage",type:"string",description:""},{kind:"field",name:"completeText",type:"string",description:"",default:"'Complete'"},{kind:"field",name:"ongoingText",type:"string",description:"",default:"'Ongoing'"},{kind:"field",name:"storyCompleteStatus",type:"boolean",description:""},{kind:"field",name:"likes",type:"number",description:""},{kind:"field",name:"likesText",type:"string",description:"",default:"'Likes'"},{kind:"field",name:"views",type:"number",description:""},{kind:"field",name:"viewsText",type:"string",description:"",default:"'Views'"},{kind:"field",name:"readingDuration",type:"string",description:"",default:"'1min'"},{kind:"field",name:"readingDurationText",type:"string",description:"",default:"'Reading Duration'"},{kind:"field",name:"description",type:"string",description:"",default:"'Description'"},{kind:"field",name:"languages",type:"string",description:"",default:"'English'"},{kind:"field",name:"genres",type:"string",description:"",default:"'Action, Adventure'"},{kind:"field",name:"literatureTypes",type:"string",description:"",default:"'Novel'"},{kind:"field",name:"showLessText",type:"string",description:"",default:"'Show less'"},{kind:"field",name:"showMoreText",type:"string",description:"",default:"'Show more...'"},{kind:"field",name:"readStoryText",type:"string",description:"",default:"'Read story'"},{kind:"field",name:"learnMoreText",type:"string",description:"",default:"'Learn more'"},{kind:"field",name:"writeStoryText",type:"string",description:"",default:"'Start writing'"},{kind:"field",name:"buyStoryText",type:"string",description:"",default:"'Buy for'"},{kind:"field",name:"addToLibraryText",type:"string",description:"",default:"'Add to Library'"},{kind:"field",name:"removeFromLibraryText",type:"string",description:"",default:"'Remove from Library'"},{kind:"field",name:"novlPrice",type:"string",description:""},{kind:"field",name:"hasBranches",type:"boolean",description:""},{kind:"field",name:"writeEnabled",type:"boolean",description:""},{kind:"field",name:"novlPaid",type:"boolean",description:""},{kind:"field",name:"novlPurchasedAt",type:"string",description:"",default:"''"},{kind:"field",name:"ownerAvatar",type:"string",description:""},{kind:"field",name:"ownerName",type:"string",description:""},{kind:"field",name:"isUserLoggedIn",type:"boolean",description:""},{kind:"field",name:"isNovlLibrary",type:"boolean",description:""},{kind:"field",name:"novlIsOwn",type:"boolean",description:"",default:"false"},{kind:"field",name:"expanded",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"readStoryEvent",description:""},{kind:"event",name:"learnMoreEvent",description:""},{kind:"event",name:"writeStoryEvent",description:""},{kind:"event",name:"buyStoryEvent",description:""},{kind:"event",name:"toggleLibraryEvent",description:""}]}],exports:[{kind:"js",name:"UrNovlSummary",declaration:{name:"UrNovlSummary",module:"src/components/ur-novl-summary/ur-novl-summary.tsx"}},{kind:"custom-element-definition",name:"ur-novl-summary",declaration:{name:"UrNovlSummary",module:"src/components/ur-novl-summary/ur-novl-summary.tsx"}}]}]};P({...c()||{},...d,modules:[...(c()||{}).modules||[],...d.modules]});const U=t=>A`
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
