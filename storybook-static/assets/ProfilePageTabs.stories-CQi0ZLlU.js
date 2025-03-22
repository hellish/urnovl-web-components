import{k as P}from"./entry-preview-BcHUnPw7.js";import{s as O,g as d}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as L,H as C,c as V,h as a,a as U}from"./index-BJvbtjhH.js";import"./tab-panel-DhczS8yD.js";import"./index-DrFu-skq.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./query-assigned-elements-BInJlOXT.js";import"./index-CXOzFcj5.js";import"./watch-ByvFYHv8.js";import"./observeResize-C8vt2UeC.js";import"./uniqueId-Bqzl4fNd.js";import"./when-BxLAFfhK.js";import"./template-yncBVCyc.js";const R=":host{display:block}:host mdui-tabs{display:inline-flex;width:auto}:host mdui-tab{min-width:fit-content;padding:0 8px}:host mdui-tab span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host mdui-tabs[full-width-tabs]{width:100%}",$=class extends C{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.tabChange=V(this,"tabChange",7),this.activeTab="stories",this.storiesTabText="Stories",this.libraryTabText="Library",this.transactionsTabText="Transactions",this.statisticsTabText="Statistics",this.settingsTabText="Settings",this.aboutTabText="About",this.isOwner=!1,this.fullWidthTabs=!0,this.isMobile=!1,this.handleTabChange=t=>{var e;const l=(e=t.target)===null||e===void 0?void 0:e.value;l&&this.tabChange.emit(l)},this.tabs=[{value:"stories",text:()=>this.storiesTabText,visibleFor:"all"},{value:"about",text:()=>this.aboutTabText,visibleFor:"all",mobileOnly:!0}]}componentWillLoad(){this.activeTab&&this.tabChange.emit(this.activeTab)}getVisibleTabs(){return this.tabs.filter(t=>(t.visibleFor==="all"||t.visibleFor==="owner"&&this.isOwner)&&(!t.mobileOnly||this.isMobile))}render(){const t=this.getVisibleTabs();return a(U,{key:"10d679350e40c77d5a0a769ffa2b5d006d0249e0"},a("mdui-tabs",{key:"7fa9984f136bd412a7c62265201463b970ea5282",value:this.activeTab,onChange:this.handleTabChange,"full-width-tabs":this.fullWidthTabs},t.map(e=>a("mdui-tab",{key:e.value,value:e.value},e.text())),t.map(e=>a("mdui-tab-panel",{key:e.value,slot:"panel",value:e.value},a("slot",{name:e.value})))))}static get style(){return R}};L($,[1,"ur-page-profile-tabs",{activeTab:[1,"active-tab"],storiesTabText:[1,"stories-tab-text"],libraryTabText:[1,"library-tab-text"],transactionsTabText:[1,"transactions-tab-text"],statisticsTabText:[1,"statistics-tab-text"],settingsTabText:[1,"settings-tab-text"],aboutTabText:[1,"about-tab-text"],isOwner:[4,"is-owner"],fullWidthTabs:[4,"full-width-tabs"],isMobile:[4,"is-mobile"]}]);const c={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrPageProfileTabs",tagName:"ur-page-profile-tabs",customElement:!0,members:[{kind:"field",name:"activeTab",type:"string",description:"",default:"'stories'"},{kind:"field",name:"storiesTabText",type:"string",description:"",default:"'Stories'"},{kind:"field",name:"libraryTabText",type:"string",description:"",default:"'Library'"},{kind:"field",name:"transactionsTabText",type:"string",description:"",default:"'Transactions'"},{kind:"field",name:"statisticsTabText",type:"string",description:"",default:"'Statistics'"},{kind:"field",name:"settingsTabText",type:"string",description:"",default:"'Settings'"},{kind:"field",name:"aboutTabText",type:"string",description:"",default:"'About'"},{kind:"field",name:"isOwner",type:"boolean",description:"",default:"false"},{kind:"field",name:"fullWidthTabs",type:"boolean",description:"",default:"true"},{kind:"field",name:"isMobile",type:"boolean",description:"",default:"false"}],events:[{kind:"event",name:"tabChange",description:""}]}],exports:[{kind:"js",name:"UrPageProfileTabs",declaration:{name:"UrPageProfileTabs",module:"src/components/ur-page-profile-tabs/ur-page-profile-tabs.tsx"}},{kind:"custom-element-definition",name:"ur-page-profile-tabs",declaration:{name:"UrPageProfileTabs",module:"src/components/ur-page-profile-tabs/ur-page-profile-tabs.tsx"}}]}]};O({...d()||{},...c,modules:[...(d()||{}).modules||[],...c.modules]});const K={title:"urnovl/Business/Profile Tabs",parameters:{viewport:{defaultViewport:"responsive"}},render:t=>{const e=M=>{const b=M.detail;console.log("Tab changed to:",b);const s=new URL(window.location.href);s.searchParams.has("tab")?s.searchParams.set("tab",b):s.searchParams.append("tab",b),console.log("New URL:",s.toString()),window.history.pushState({},"",s.toString())},T=new URLSearchParams(window.location.search).get("tab")||t.initialTab||"stories";return console.log("Initial tab from URL:",T),P`
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
        `},argTypes:{isOwner:{control:"boolean"},isMobile:{control:"boolean"},initialTab:{control:"select",options:["stories","library","transactions","statistics","settings","about"]}}},i={args:{isOwner:!1,storiesTabText:"Stories",libraryTabText:"Library",isMobile:!1}},r={args:{isOwner:!0,storiesTabText:"My Stories",libraryTabText:"Reading List",transactionsTabText:"Transactions",statisticsTabText:"Analytics",settingsTabText:"Settings",isMobile:!1}},o={args:{isOwner:!0,initialTab:"statistics",storiesTabText:"My Stories",libraryTabText:"Reading List",transactionsTabText:"Transactions",statisticsTabText:"Analytics",settingsTabText:"Settings",isMobile:!1}},n={args:{isOwner:!1,storiesTabText:"Stories",libraryTabText:"Library",isMobile:!0},parameters:{viewport:{defaultViewport:"mobile1"}}};var u,p,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isOwner: false,
    storiesTabText: 'Stories',
    libraryTabText: 'Library',
    isMobile: false // Default to desktop view
  }
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,g,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isOwner: true,
    storiesTabText: 'My Stories',
    libraryTabText: 'Reading List',
    transactionsTabText: 'Transactions',
    statisticsTabText: 'Analytics',
    settingsTabText: 'Settings',
    isMobile: false // Default to desktop view
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,v,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const Q=["Visitor","Owner","PreselectedTab","MobileView"];export{n as MobileView,r as Owner,o as PreselectedTab,i as Visitor,Q as __namedExportsOrder,K as default};
