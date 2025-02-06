import{k as f}from"./entry-preview-BcHUnPw7.js";import{s as w,g as l}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as k,H as v,h as a,a as y}from"./index-B9J0OpMa.js";import"./index-Bo8MxV-e.js";import"./ur-locale-filter-button-Drz_uPuu.js";import"./index-DrFu-skq.js";import"./get-w4emotEH.js";import"./when-BxLAFfhK.js";import"./index-D2jzjD89.js";import"./watch-ByvFYHv8.js";import"./motion-Dvf13IR2.js";import"./scroll-Nrg22M-p.js";import"./observeResize-CYvww9Tt.js";import"./uniqueId-Bqzl4fNd.js";import"./layout-item-base-CfCCIbpK.js";import"./ur-button-icon-CaCnr62T.js";import"./index-kIIll_V8.js";import"./template-yncBVCyc.js";import"./button-base-DwUGB6N2.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-ClLaGEwM.js";import"./form-BeuMnVCp.js";import"./index-CGUw5SK0.js";import"./index-Dl2iJJTc.js";import"./live-8TRlRbWK.js";import"./default-value-BEuyqpAi.js";import"./svg-tag-DDFZdwWr.js";const b=":host{display:block;position:relative}:host .drawer-header{padding:12px 24px;border-bottom:1px solid rgb(var(--ur-color-outline));user-select:none}:host .drawer-content{flex:1;overflow-y:auto;padding:16px;min-height:0}:host .drawer-footer{padding:16px;border-top:1px solid rgb(var(--ur-color-outline))}",E=class extends v{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.open=!1,this.placement="right",this.closeOnEsc=!0,this.closeOnOverlayClick=!0,this.contained=!1}componentDidLoad(){this.drawerElement=this.el.shadowRoot.querySelector("mdui-navigation-drawer")}async openDrawer(){this.drawerElement.open=!0,this.open=!0}async closeDrawer(){this.drawerElement.open=!1,this.open=!1}render(){return a(y,{key:"c7f0aeb52da59859a5bc0b5c10fcea8a1e753c7e"},a("mdui-navigation-drawer",{key:"13640926ba2f2540261701c60cb5a91bad45f1af",placement:this.placement,modal:!0,"close-on-esc":this.closeOnEsc,"close-on-overlay-click":this.closeOnOverlayClick,contained:this.contained,open:this.open},a("slot",{key:"35f1f82f6f7965b627415cafed43d0a0d64a3a02"})))}get el(){return this}static get style(){return b}};k(E,[1,"ur-navigation-drawer",{open:[4],placement:[1],closeOnEsc:[4,"close-on-esc"],closeOnOverlayClick:[4,"close-on-overlay-click"],contained:[4],openDrawer:[64],closeDrawer:[64]}]);const s={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNavigationDrawer",tagName:"ur-navigation-drawer",customElement:!0,members:[{kind:"field",name:"open",type:"boolean",description:"Determines if the drawer is open",default:"false"},{kind:"field",name:"placement",type:"string",description:"Placement of the drawer: 'left' or 'right'",default:"'right'"},{kind:"field",name:"closeOnEsc",type:"boolean",description:"Closes the drawer when the 'Esc' key is pressed",default:"true"},{kind:"field",name:"closeOnOverlayClick",type:"boolean",description:"Closes the drawer when clicking outside of it",default:"true"},{kind:"field",name:"contained",type:"boolean",description:"Contains the drawer within its parent element",default:"false"}],events:[]}],exports:[{kind:"js",name:"UrNavigationDrawer",declaration:{name:"UrNavigationDrawer",module:"src/components/ur-navigation-drawer/ur-navigation-drawer.tsx"}},{kind:"custom-element-definition",name:"ur-navigation-drawer",declaration:{name:"UrNavigationDrawer",module:"src/components/ur-navigation-drawer/ur-navigation-drawer.tsx"}}]}]};w({...l()||{},...s,modules:[...(l()||{}).modules||[],...s.modules]});const O=[{label:"English",key:"en",checked:!0},{label:"Spanish",key:"es",checked:!1},{label:"French",key:"fr",checked:!1},{label:"German",key:"de",checked:!0},{label:"Souaxilian",key:"su",checked:!0}],D=({open:r=!1,placement:u="right",locales:o=O})=>{const p=e=>{document.getElementsByTagName("ur-locale-filter-button")[0].count=e.filter(g=>g.checked).length},h=e=>{p(e.detail),document.getElementsByTagName("ur-navigation-drawer")[0].closeDrawer()},n=()=>{document.getElementsByTagName("ur-locale-filter-button")[0].selected=!0},i=()=>{document.getElementsByTagName("ur-locale-filter-button")[0].selected=!1};return f`
        <ur-navigation-drawer
            open=${r}
            placement=${u}
            @opened=${n}
            @closed=${i}>
            <ur-locale-filter-panel
                .locales=${o}
                show-header
                show-footer
                @save=${h}
                @cancel=${()=>{i(),document.getElementsByTagName("ur-navigation-drawer")[0].closeDrawer()}}
            ></ur-locale-filter-panel>
        </ur-navigation-drawer>

        <ur-locale-filter-button
            @click=${()=>{n(),document.getElementsByTagName("ur-navigation-drawer")[0].openDrawer()}}
            count=${o.filter(e=>e.checked).length}
        ></ur-locale-filter-button>
    `},ee={title:"urnovl/Business/Locale Drawer",render:r=>D(r),argTypes:{open:{control:"boolean"},placement:{control:"select",options:["left","right"]},closeOnEsc:{control:"boolean"},closeOnOverlayClick:{control:"boolean"},contained:{control:"boolean"}}},t={args:{open:!1,placement:"right",closeOnEsc:!0,closeOnOverlayClick:!0,contained:!0}};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    open: false,
    placement: 'right',
    closeOnEsc: true,
    closeOnOverlayClick: true,
    contained: true
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const te=["Default"];export{t as Default,te as __namedExportsOrder,ee as default};
