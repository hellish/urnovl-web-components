import{k as p}from"./entry-preview-BcHUnPw7.js";import"./ur-button-icon-klassPFX.js";import{s as c,g as r}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d,H as m,c as a,h as e,a as h}from"./index-Dnt4yWMo.js";import"./top-app-bar-B1poS01I.js";import"./index-BXDV2pmF.js";import"./index-DrFu-skq.js";import"./index-CTeXfnxQ.js";import"./get-D9DBDJjp.js";import"./class-map-DirLTUPi.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-ETGWZztw.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-Bt_5eb2T.js";import"./form-D6WTgxde.js";import"./ripple-mixin-Baxn-44g.js";import"./query-assigned-elements-BInJlOXT.js";import"./layout-item-base-DHAFVIi5.js";import"./observeResize-DYL0_NZ3.js";import"./uniqueId-Bqzl4fNd.js";const u=':host{display:flex;align-items:center;width:100%;--ur-color-on-background:var(--mdui-color-on-background);--ur-color-on-surface:var(--mdui-color-on-surface);--ur-color-on-surface-variant:var(--mdui-color-on-surface-variant);--ur-state-layers-outline-variant-opacity-16:var(--mdui-state-layers-outline-variant-opacity-16)}:host .urnovl-logo{width:70px;height:19px;margin:auto 8;fill:var(--ur-color-on-background, #000)}:host mdui-top-app-bar{width:100%;display:flex;align-items:center;justify-content:center;column-gap:8px;padding:0 16px}:host mdui-top-app-bar[variant="small"]{height:48px}:host mdui-top-app-bar-title{flex:1;font-size:14px;line-height:16px;letter-spacing:-.26px;color:var(--ur-color-on-background, #000);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;display:block;}:host ur-button-icon{margin-right:initial}',b=u+"",k=class extends m{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.backClick=a(this,"backClick",7),this.chaptersClick=a(this,"chaptersClick",7),this.readingSettingsClick=a(this,"readingSettingsClick",7),this.handleBackClick=()=>{this.backClick.emit()},this.handleChaptersClick=()=>{this.chaptersClick.emit()},this.handleReadingSettingsClick=()=>{this.readingSettingsClick.emit()},this.variant="small",this.headerTitle=void 0,this.scrollBehavior="hide",this.scrollThreshold=30}render(){return e(h,{key:"8a7f0af89b9afaac07f2c0fc670b262614bb6c41"},e("mdui-top-app-bar",{key:"dfd898d913f2d740f28c318b72f697615a98a4a8",variant:this.variant,"scroll-target":".example-scroll-target","scroll-behavior":this.scrollBehavior,"scroll-threshold":this.scrollThreshold},e("ur-button-icon",{key:"737bc8222562535fe6049271f4130740522fc23a",icon:"arrow_back",variant:"standard","aria-label":"Back",onClick:this.handleBackClick}),e("mdui-top-app-bar-title",{key:"af8baa0d3e940c136a7f1f420233abe9badc7330"},this.headerTitle),e("ur-button-icon",{key:"8235facdf95bc919b65e28891f89e4d0809115e0",icon:"library_books--outlined",variant:"standard","aria-label":"Chapters",onClick:this.handleChaptersClick}),e("ur-button-icon",{key:"ac1a820ee363480617966e1a5fc4ce82f18234fe",icon:"text_format--outlined",variant:"standard","aria-label":"Reading Settings",onClick:this.handleReadingSettingsClick})))}static get style(){return b}};d(k,[1,"ur-read-mobile-top-app-bar",{variant:[1],headerTitle:[1,"header-title"],scrollBehavior:[1,"scroll-behavior"],scrollThreshold:[2,"scroll-threshold"]}]);const i={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrMainDesktopTopAppBar",tagName:"ur-read-mobile-top-app-bar",customElement:!0,members:[{kind:"field",name:"variant",type:"string",description:"",default:"'small'"},{kind:"field",name:"headerTitle",type:"string",description:""},{kind:"field",name:"scrollBehavior",type:"string",description:"",default:"'hide'"},{kind:"field",name:"scrollThreshold",type:"number",description:"",default:"30"}],events:[{kind:"event",name:"backClick",description:""},{kind:"event",name:"chaptersClick",description:""},{kind:"event",name:"readingSettingsClick",description:""}]}],exports:[{kind:"js",name:"UrMainDesktopTopAppBar",declaration:{name:"UrMainDesktopTopAppBar",module:"src/components/ur-read-mobile-top-app-bar/ur-read-mobile-top-app-bar.tsx"}},{kind:"custom-element-definition",name:"ur-read-mobile-top-app-bar",declaration:{name:"UrMainDesktopTopAppBar",module:"src/components/ur-read-mobile-top-app-bar/ur-read-mobile-top-app-bar.tsx"}}]}]};c({...r()||{},...i,modules:[...(r()||{}).modules||[],...i.modules]});const f=n=>p`
    <ur-read-mobile-top-app-bar
        header-title="${n.headerTitle}">
    </ur-read-mobile-top-app-bar>

    <div class="example-scroll-target" style="background: #F0F0F0; height: 250px; overflow: auto;">
        <div style="height: 1000px;"></div>
    </div>
`,N={title:"urnovl/Business/TopAppBars/Reading Mobile TopAppBar",render:f,argTypes:{headerTitle:{control:"text",description:"Title displayed in the app bar"}}},t={args:{headerTitle:"Harry Potter and the Sorcerer’s Stone"}};var o,s,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    headerTitle: 'Harry Potter and the Sorcerer’s Stone' // Default title for the top app bar
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const O=["Default"];export{t as Default,O as __namedExportsOrder,N as default};