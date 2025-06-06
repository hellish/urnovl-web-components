import{x as f}from"./entry-preview-CxXhOGqP.js";import{s as w,g as l}from"./chunk-L4EGOTBX-BPj2F1fn.js";import{d as v,H as k,h as o,a as y}from"./index-Bdp-Mrn6.js";import"./index-CB6WYK4R.js";import"./ur-locale-filter-button-9okrf-WT.js";import"./index-DrFu-skq.js";import"./class-map-CvfWHz58.js";import"./get-DCsNyb8P.js";import"./when-BR7zwNJC.js";import"./index-rsUJIYwf.js";import"./watch-ByvFYHv8.js";import"./motion-C_TLgITA.js";import"./breakpoint-DPedhH8X.js";import"./scroll-CpZbyAEJ.js";import"./observeResize-Dehp4heo.js";import"./uniqueId-Bqzl4fNd.js";import"./layout-item-base-fPN3unkk.js";import"./ur-button-icon-BR1VQfom.js";import"./index-CFISRIGu.js";import"./template-DbMQw6l-.js";import"./button-base--7WXG1Vh.js";import"./if-defined-D52-l-pg.js";import"./anchor-BJ52fAYX.js";import"./form-CWZnyZ12.js";import"./index-pr7ns5cs.js";import"./index-CtpJcEdY.js";import"./index-_7_SoGGi.js";import"./live-DwPmnOYN.js";import"./default-value-dSVzt9o_.js";import"./svg-tag-B1kmCZ6g.js";const b=":host{display:block;position:relative}:host .drawer-header{padding:12px 24px;border-bottom:1px solid rgb(var(--ur-color-outline));user-select:none}:host .drawer-content{flex:1;overflow-y:auto;padding:16px;min-height:0}:host .drawer-footer{padding:16px;border-top:1px solid rgb(var(--ur-color-outline))}",E=class extends k{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.open=!1,this.placement="right",this.closeOnEsc=!0,this.closeOnOverlayClick=!0,this.contained=!1}componentDidLoad(){this.drawerElement=this.el.shadowRoot.querySelector("mdui-navigation-drawer")}async openDrawer(){this.drawerElement.open=!0,this.open=!0}async closeDrawer(){this.drawerElement.open=!1,this.open=!1}render(){return o(y,{key:"3bc1d4415f471ecfb58e7d16690c9e908b7b06a6"},o("mdui-navigation-drawer",{key:"30771f7cbc75b80aafcf6946d482ac0ec6d3de4b",placement:this.placement,modal:!0,"close-on-esc":this.closeOnEsc,"close-on-overlay-click":this.closeOnOverlayClick,contained:this.contained,open:this.open},o("slot",{key:"faa2990267396aafcb22b16462043d25c402345e"})))}get el(){return this}static get style(){return b}};v(E,[1,"ur-navigation-drawer",{open:[4],placement:[1],closeOnEsc:[4,"close-on-esc"],closeOnOverlayClick:[4,"close-on-overlay-click"],contained:[4],openDrawer:[64],closeDrawer:[64]}]);const s={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNavigationDrawer",tagName:"ur-navigation-drawer",customElement:!0,members:[{kind:"field",name:"open",type:"boolean",description:"Determines if the drawer is open",default:"false"},{kind:"field",name:"placement",type:"string",description:"Placement of the drawer: 'left' or 'right'",default:"'right'"},{kind:"field",name:"closeOnEsc",type:"boolean",description:"Closes the drawer when the 'Esc' key is pressed",default:"true"},{kind:"field",name:"closeOnOverlayClick",type:"boolean",description:"Closes the drawer when clicking outside of it",default:"true"},{kind:"field",name:"contained",type:"boolean",description:"Contains the drawer within its parent element",default:"false"}],events:[]}],exports:[{kind:"js",name:"UrNavigationDrawer",declaration:{name:"UrNavigationDrawer",module:"src/components/ur-navigation-drawer/ur-navigation-drawer.tsx"}},{kind:"custom-element-definition",name:"ur-navigation-drawer",declaration:{name:"UrNavigationDrawer",module:"src/components/ur-navigation-drawer/ur-navigation-drawer.tsx"}}]}]};w({...l()||{},...s,modules:[...(l()||{}).modules||[],...s.modules]});const O=[{label:"English",key:"en",checked:!0},{label:"Spanish",key:"es",checked:!1},{label:"French",key:"fr",checked:!1},{label:"German",key:"de",checked:!0},{label:"Souaxilian",key:"su",checked:!0}],D=({open:r=!1,placement:p="right",locales:a=O})=>{const u=e=>{document.getElementsByTagName("ur-locale-filter-button")[0].count=e.filter(g=>g.checked).length},h=e=>{u(e.detail),document.getElementsByTagName("ur-navigation-drawer")[0].closeDrawer()},n=()=>{document.getElementsByTagName("ur-locale-filter-button")[0].selected=!0},i=()=>{document.getElementsByTagName("ur-locale-filter-button")[0].selected=!1};return f`
        <ur-navigation-drawer
            open=${r}
            placement=${p}
            @opened=${n}
            @closed=${i}>
            <ur-locale-filter-panel
                .locales=${a}
                show-header
                show-footer
                @save=${h}
                @cancel=${()=>{i(),document.getElementsByTagName("ur-navigation-drawer")[0].closeDrawer()}}
            ></ur-locale-filter-panel>
        </ur-navigation-drawer>

        <ur-locale-filter-button
            @click=${()=>{n(),document.getElementsByTagName("ur-navigation-drawer")[0].openDrawer()}}
            count=${a.filter(e=>e.checked).length}
        ></ur-locale-filter-button>
    `},oe={title:"urnovl/Business/Locale Drawer",render:r=>D(r),argTypes:{open:{control:"boolean"},placement:{control:"select",options:["left","right"]},closeOnEsc:{control:"boolean"},closeOnOverlayClick:{control:"boolean"},contained:{control:"boolean"}}},t={args:{open:!1,placement:"right",closeOnEsc:!0,closeOnOverlayClick:!0,contained:!0}};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    open: false,
    placement: 'right',
    closeOnEsc: true,
    closeOnOverlayClick: true,
    contained: true
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const ae=["Default"];export{t as Default,ae as __namedExportsOrder,oe as default};
