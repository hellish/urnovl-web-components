import{k as c}from"./entry-preview-BcHUnPw7.js";import"./ur-logo-CI1Wj6gn.js";import{s as p,g as r}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as l,H as d,c as u,h as e,a as m}from"./index-Dnt4yWMo.js";import"./top-app-bar-B1poS01I.js";import"./index-BXDV2pmF.js";import"./index-DrFu-skq.js";import"./get-D9DBDJjp.js";import"./query-assigned-elements-BInJlOXT.js";import"./watch-ByvFYHv8.js";import"./layout-item-base-DHAFVIi5.js";import"./observeResize-DYL0_NZ3.js";import"./uniqueId-Bqzl4fNd.js";const h=':host{display:flex;align-items:center;height:48px;width:100%;--ur-color-background:var(--mdui-color-background);--ur-color-on-background:var(--mdui-color-on-background);--ur-color-on-surface:var(--mdui-color-on-surface);--ur-color-on-secondary:var(--mdui-color-on-secondary);--ur-color-on-surface-variant:var(--mdui-color-on-surface-variant);--ur-state-layers-outline-variant-opacity-16:var(--mdui-state-layers-outline-variant-opacity-16);--ur-color-outline:var(--mdui-color-outline);--ur-state-layers-primary-opacity-08:var(--mdui-state-layers-primary-opacity-08);z-index:0;background:var(--ur-color-background)}:host .urnovl-logo{width:70px;height:19px;margin:auto 8;fill:rgb(var(--ur-color-on-background))}:host .logo-hld{display:flex;padding:0 32px;height:48px;margin:5px 0 0 0;align-items:center;justify-content:center}:host mdui-top-app-bar{display:flex;align-items:center;justify-content:left;width:100%;padding:0 16px}:host mdui-top-app-bar[variant="small"]{height:48px}:host mdui-top-app-bar-title{font-size:20px;color:var(--ur-color-on-background, #000)}:host .search-lnk{display:flex;height:40px;align-items:center;border-radius:50px;padding:0 24px 0 8px;background:#EFEEF0;cursor:text;flex:1;max-width:max-content;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}:host .search-lnk:hover{transition:all 0.2s ease;background:rgba(var(--ur-color-outline), .2)}:host-context(html.ur-theme-dark) .search-lnk{background:#1A1C21}:host-context(html.ur-theme-dark) .search-lnk:hover{transition:all 0.2s ease;background:rgba(var(--ur-color-outline), .2)}:host .icon{width:40px;margin-right:8px;text-align:center;}:host .search-txt{font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',k=class extends d{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.searchLinkClicked=u(this,"searchLinkClicked",7),this.handleSearchClick=()=>{this.searchLinkClicked.emit()},this.variant="small",this.logoRotation=0,this.logoOpacity=1,this.searchText="Search for stories, writers & publishers"}render(){return e(m,{key:"7a0c663380279e1de1f3b891d91cce27f93fd725"},e("mdui-top-app-bar",{key:"23218388e20ea968dc26c6eaee01efcfec4365f3",variant:this.variant,"scroll-target":".example-scroll-target"},e("div",{key:"2e860eb24283d326ebfe83a5bbe839c9616fa8b6",class:"logo-hld"},e("ur-logo",{key:"726d788bbd4ca0f7e2b639808787f62019b3131b",width:"70",height:"19",color:"currentColor",rotation:this.logoRotation,opacity:this.logoOpacity})),e("div",{key:"48aae94d5eec7cd20bff879878eab2a443e14c8e",class:"search-lnk",onClick:this.handleSearchClick},e("mdui-icon",{key:"ab053824d6f9b82fd6cab3df68049ea137bed00e",class:"icon",name:"search"}),e("span",{key:"b77764b34838d688ac5c6e8ea7ad28c253ea8355",class:"search-txt"},this.searchText))))}static get style(){return h}};l(k,[1,"ur-main-desktop-top-app-bar",{variant:[1],logoRotation:[2,"logo-rotation"],logoOpacity:[2,"logo-opacity"],searchText:[1,"search-text"]}]);const a={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrMainDesktopTopAppBar",tagName:"ur-main-desktop-top-app-bar",customElement:!0,members:[{kind:"field",name:"variant",type:"string",description:"",default:"'small'"},{kind:"field",name:"logoRotation",type:"number",description:"",default:"0"},{kind:"field",name:"logoOpacity",type:"number",description:"",default:"1"},{kind:"field",name:"searchText",type:"string",description:"",default:"'Search for stories, writers & publishers'"}],events:[{kind:"event",name:"searchLinkClicked",description:""}]}],exports:[{kind:"js",name:"UrMainDesktopTopAppBar",declaration:{name:"UrMainDesktopTopAppBar",module:"src/components/ur-main-desktop-top-app-bar/ur-main-desktop-top-app-bar.tsx"}},{kind:"custom-element-definition",name:"ur-main-desktop-top-app-bar",declaration:{name:"UrMainDesktopTopAppBar",module:"src/components/ur-main-desktop-top-app-bar/ur-main-desktop-top-app-bar.tsx"}}]}]};p({...r()||{},...a,modules:[...(r()||{}).modules||[],...a.modules]});const g=n=>c`
    <ur-main-desktop-top-app-bar
        search-text="${n.searchText}">
    </ur-main-desktop-top-app-bar>

    <div class="example-scroll-target" style="background: #F0F0F0; height: 250px; overflow: auto;">
        <div style="height: 1000px;"></div>
    </div>
`,S={title:"urnovl/Business/TopAppBars/Main Desktop TopAppBar",render:g,argTypes:{searchText:{control:"text",description:"Text for the search link"}}},t={args:{searchText:"Search for stories, writers & publishers"}};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    searchText: 'Search for stories, writers & publishers' // Default search text
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,S as default};