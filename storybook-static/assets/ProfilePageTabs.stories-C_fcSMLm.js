import{k as P}from"./entry-preview-BcHUnPw7.js";import{s as O,g as c}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as L,H as C,c as F,h as i,a as V}from"./index-B9J0OpMa.js";import"./tab-panel-DhczS8yD.js";import"./index-DrFu-skq.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./query-assigned-elements-BInJlOXT.js";import"./index-CXOzFcj5.js";import"./watch-ByvFYHv8.js";import"./observeResize-C8vt2UeC.js";import"./uniqueId-Bqzl4fNd.js";import"./when-BxLAFfhK.js";import"./template-yncBVCyc.js";const U=":host{display:block}:host mdui-tabs{display:inline-flex;width:auto}:host mdui-tab{min-width:fit-content;padding:0 8px}:host mdui-tab span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host mdui-tabs[full-width-tabs]{width:100%}",R=class extends C{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.tabChange=F(this,"tabChange",7),this.handleTabChange=t=>{var e;const l=(e=t.target)===null||e===void 0?void 0:e.value;l&&this.tabChange.emit(l)},this.tabs=[{value:"stories",text:()=>this.storiesTabText,visibleFor:"all"},{value:"library",text:()=>this.libraryTabText,visibleFor:"all"},{value:"transactions",text:()=>this.transactionsTabText,visibleFor:"owner"},{value:"statistics",text:()=>this.statisticsTabText,visibleFor:"owner"},{value:"settings",text:()=>this.settingsTabText,visibleFor:"owner"},{value:"about",text:()=>this.aboutTabText,visibleFor:"all",mobileOnly:!0}],this.activeTab="stories",this.storiesTabText="Stories",this.libraryTabText="Library",this.transactionsTabText="Transactions",this.statisticsTabText="Statistics",this.settingsTabText="Settings",this.aboutTabText="About",this.isOwner=!1,this.fullWidthTabs=!0,this.isMobile=!1}componentWillLoad(){this.activeTab&&this.tabChange.emit(this.activeTab)}getVisibleTabs(){return this.tabs.filter(t=>(t.visibleFor==="all"||t.visibleFor==="owner"&&this.isOwner)&&(!t.mobileOnly||this.isMobile))}render(){const t=this.getVisibleTabs();return i(V,{key:"94654b6729ab992f231d04720a0211bc15065d92"},i("mdui-tabs",{key:"edbb8f141cca927e02145df2cfd77492f67be0f0",value:this.activeTab,onChange:this.handleTabChange,"full-width-tabs":this.fullWidthTabs},t.map(e=>i("mdui-tab",{key:e.value,value:e.value},e.text())),t.map(e=>i("mdui-tab-panel",{key:e.value,slot:"panel",value:e.value},i("slot",{name:e.value})))))}static get style(){return U}};L(R,[1,"ur-page-profile-tabs",{activeTab:[1,"active-tab"],storiesTabText:[1,"stories-tab-text"],libraryTabText:[1,"library-tab-text"],transactionsTabText:[1,"transactions-tab-text"],statisticsTabText:[1,"statistics-tab-text"],settingsTabText:[1,"settings-tab-text"],aboutTabText:[1,"about-tab-text"],isOwner:[4,"is-owner"],fullWidthTabs:[4,"full-width-tabs"],isMobile:[4,"is-mobile"]}]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrPageProfileTabs",tagName:"ur-page-profile-tabs",customElement:!0,members:[{kind:"field",name:"activeTab",type:"string",description:"",default:"'stories'"},{kind:"field",name:"storiesTabText",type:"string",description:"",default:"'Stories'"},{kind:"field",name:"libraryTabText",type:"string",description:"",default:"'Library'"},{kind:"field",name:"transactionsTabText",type:"string",description:"",default:"'Transactions'"},{kind:"field",name:"statisticsTabText",type:"string",description:"",default:"'Statistics'"},{kind:"field",name:"settingsTabText",type:"string",description:"",default:"'Settings'"},{kind:"field",name:"aboutTabText",type:"string",description:"",default:"'About'"},{kind:"field",name:"isOwner",type:"boolean",description:"",default:"false"},{kind:"field",name:"fullWidthTabs",type:"boolean",description:"",default:"true"},{kind:"field",name:"isMobile",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"tabChange",description:""}]}],exports:[{kind:"js",name:"UrPageProfileTabs",declaration:{name:"UrPageProfileTabs",module:"src/components/ur-page-profile-tabs/ur-page-profile-tabs.tsx"}},{kind:"custom-element-definition",name:"ur-page-profile-tabs",declaration:{name:"UrPageProfileTabs",module:"src/components/ur-page-profile-tabs/ur-page-profile-tabs.tsx"}}]}]};O({...c()||{},...d,modules:[...(c()||{}).modules||[],...d.modules]});const K={title:"urnovl/Business/Profile Tabs",parameters:{viewport:{defaultViewport:"responsive"}},render:t=>{const e=M=>{const b=M.detail;console.log("Tab changed to:",b);const s=new URL(window.location.href);s.searchParams.has("tab")?s.searchParams.set("tab",b):s.searchParams.append("tab",b),console.log("New URL:",s.toString()),window.history.pushState({},"",s.toString())},T=new URLSearchParams(window.location.search).get("tab")||t.initialTab||"stories";return console.log("Initial tab from URL:",T),P`
            <div style="max-width: 800px; margin: 20px;">
                <ur-page-profile-tabs
                    .activeTab=${T}
                    .isOwner=${t.isOwner}
                    .storiesTabText=${t.storiesTabText}
                    .libraryTabText=${t.libraryTabText}
                    .transactionsTabText=${t.transactionsTabText}
                    .statisticsTabText=${t.statisticsTabText}
                    .settingsTabText=${t.settingsTabText}
                    .isMobile=${t.isMobile}
                    @tabChange=${e}
                >
                    <div slot="stories">Latest published stories and drafts</div>
                    <div slot="library">Books saved for later reading</div>
                    <div slot="transactions">Recent purchases and earnings</div>
                    <div slot="statistics">Monthly reading and writing analytics</div>
                    <div slot="settings">Account preferences and notifications</div>
                    <div slot="about">About the page</div>
                </ur-page-profile-tabs>
            </div>
        `},argTypes:{isOwner:{control:"boolean"},isMobile:{control:"boolean"},initialTab:{control:"select",options:["stories","library","transactions","statistics","settings","about"]}}},a={args:{isOwner:!1,storiesTabText:"Stories",libraryTabText:"Library",isMobile:!1}},r={args:{isOwner:!0,storiesTabText:"My Stories",libraryTabText:"Reading List",transactionsTabText:"Transactions",statisticsTabText:"Analytics",settingsTabText:"Settings",isMobile:!1}},o={args:{isOwner:!0,initialTab:"statistics",storiesTabText:"My Stories",libraryTabText:"Reading List",transactionsTabText:"Transactions",statisticsTabText:"Analytics",settingsTabText:"Settings",isMobile:!1}},n={args:{isOwner:!1,storiesTabText:"Stories",libraryTabText:"Library",isMobile:!0},parameters:{viewport:{defaultViewport:"mobile1"}}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isOwner: false,
    storiesTabText: 'Stories',
    libraryTabText: 'Library',
    isMobile: false // Default to desktop view
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,x,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isOwner: true,
    storiesTabText: 'My Stories',
    libraryTabText: 'Reading List',
    transactionsTabText: 'Transactions',
    statisticsTabText: 'Analytics',
    settingsTabText: 'Settings',
    isMobile: false // Default to desktop view
  }
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,v,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isOwner: true,
    initialTab: 'statistics',
    storiesTabText: 'My Stories',
    libraryTabText: 'Reading List',
    transactionsTabText: 'Transactions',
    statisticsTabText: 'Analytics',
    settingsTabText: 'Settings',
    isMobile: false // Default to desktop view
  }
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,S,k;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isOwner: false,
    storiesTabText: 'Stories',
    libraryTabText: 'Library',
    isMobile: true // Force mobile view
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1' // Force mobile viewport for this story
    }
  }
}`,...(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const Q=["Visitor","Owner","PreselectedTab","MobileView"];export{n as MobileView,r as Owner,o as PreselectedTab,a as Visitor,Q as __namedExportsOrder,K as default};
