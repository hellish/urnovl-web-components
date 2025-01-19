import{k as b}from"./entry-preview-BcHUnPw7.js";import"./ur-button-O4u5R_PB.js";import{s as f,g as s}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as v,H as w,h as e,a as y}from"./index-B9J0OpMa.js";import"./index-Bo8MxV-e.js";import"./ur-button-icon-7GRMLXiQ.js";import"./index-DrFu-skq.js";import"./index-CGUw5SK0.js";import"./get-w4emotEH.js";import"./template-yncBVCyc.js";import"./index-D2jzjD89.js";import"./button-base-DwUGB6N2.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-ClLaGEwM.js";import"./form-BeuMnVCp.js";import"./when-BxLAFfhK.js";import"./watch-ByvFYHv8.js";import"./motion-Dvf13IR2.js";import"./scroll-Nrg22M-p.js";import"./observeResize-CYvww9Tt.js";import"./uniqueId-Bqzl4fNd.js";import"./layout-item-base-CfCCIbpK.js";import"./index-kIIll_V8.js";const k=":host{display:block;position:relative;--ur-color-on-surface:var(--mdui-color-on-surface);--ur-color-surface:var(--mdui-color-surface);color:rgb(var(--ur-color-on-surface))}:host ::slotted([slot='header']){top:0;left:0;padding:8px 12px;display:flex;font-weight:bold;position:sticky;flex-direction:row;align-items:center;justify-content:space-between;color:rgb(var(--ur-color-on-surface));background:rgb(var(--ur-color-surface));z-index:1}:host .drawer-content{overflow-y:auto;padding:8px 24px;min-height:0;position:relative;color:rgb(var(--ur-color-on-surface));background:rgb(var(--ur-color-surface))}:host ::slotted([slot='footer']){bottom:0;position:sticky;padding:8px 12px;color:rgb(var(--ur-color-on-surface));background:rgb(var(--ur-color-surface));display:flex;gap:8px;z-index:1}",O=class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.contentHeight=0,this.open=!1,this.placement="right",this.closeOnEsc=!0,this.closeOnOverlayClick=!0}componentDidLoad(){this.drawerElement=this.el.shadowRoot.querySelector("mdui-navigation-drawer"),this.headerElement=this.el.shadowRoot.querySelector(".drawer-header"),this.footerElement=this.el.shadowRoot.querySelector(".drawer-footer"),this.resizeObserver=new ResizeObserver(()=>{this.updateContentHeight()}),this.resizeObserver.observe(this.headerElement),this.resizeObserver.observe(this.footerElement),this.updateContentHeight()}disconnectedCallback(){this.resizeObserver&&this.resizeObserver.disconnect()}updateContentHeight(){const t=this.headerElement.offsetHeight,r=this.footerElement.offsetHeight;this.contentHeight=t+r+16}async openDrawer(){this.drawerElement.open=!0,this.open=!0}async closeDrawer(){this.drawerElement.open=!1,this.open=!1}render(){return e(y,{key:"289fc2300bc485939d2474491682aeae1d878241"},e("mdui-navigation-drawer",{key:"6d227d3fdccfd944a1b069f00033cedd353a008d",placement:this.placement,modal:!0,"close-on-esc":this.closeOnEsc,"close-on-overlay-click":this.closeOnOverlayClick,open:this.open},e("div",{key:"27b7d024be65ebf49e3fa80a426dfe00abe9eb11",class:"drawer-header",role:"banner"},e("slot",{key:"40dcb2c8a83dd456e130055c966e1bc08e77a6eb",name:"header"})),e("div",{key:"3ac28e9f469e00caf1b8ae326014fefa98684f8e",class:"drawer-content",role:"main",style:{height:`calc(100vh - ${this.contentHeight}px)`}},e("slot",{key:"d21440541d75589443b095c3bc5c3313994145de"})),e("div",{key:"e7397c49bbc5a5cebe9993dcd807103ccc4d49e6",class:"drawer-footer",role:"contentinfo"},e("slot",{key:"215ea053d6d3d2200ef536b90369324cdde49eb7",name:"footer"}))))}get el(){return this}static get style(){return k}};v(O,[1,"ur-navigation-drawer-global",{open:[4],placement:[1],closeOnEsc:[4,"close-on-esc"],closeOnOverlayClick:[4,"close-on-overlay-click"],contentHeight:[32],openDrawer:[64],closeDrawer:[64]}]);const i={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNavigationDrawerGlobal",tagName:"ur-navigation-drawer-global",customElement:!0,members:[{kind:"field",name:"open",type:"boolean",description:"Determines if the drawer is open",default:"false"},{kind:"field",name:"placement",type:"string",description:"Placement of the drawer: 'left' or 'right'",default:"'right'"},{kind:"field",name:"closeOnEsc",type:"boolean",description:"Closes the drawer when the 'Esc' key is pressed",default:"true"},{kind:"field",name:"closeOnOverlayClick",type:"boolean",description:"Closes the drawer when clicking outside of it",default:"true"}],events:[]}],exports:[{kind:"js",name:"UrNavigationDrawerGlobal",declaration:{name:"UrNavigationDrawerGlobal",module:"src/components/ur-navigation-drawer-global/ur-navigation-drawer-global.tsx"}},{kind:"custom-element-definition",name:"ur-navigation-drawer-global",declaration:{name:"UrNavigationDrawerGlobal",module:"src/components/ur-navigation-drawer-global/ur-navigation-drawer-global.tsx"}}]}]};f({...s()||{},...i,modules:[...(s()||{}).modules||[],...i.modules]});const E=({open:t=!1,placement:r="right",closeOnEsc:u=!0,closeOnOverlayClick:p=!0,contained:m=!0})=>{const a=()=>{document.getElementsByTagName("ur-navigation-drawer-global")[0].open=!0},h=()=>{document.getElementsByTagName("ur-navigation-drawer-global")[0].open=!1},g=()=>{a(),document.getElementsByTagName("ur-navigation-drawer-global")[0].openDrawer()},n=()=>{document.getElementsByTagName("ur-navigation-drawer-global")[0].closeDrawer()};return b`
        <ur-button @click=${g}> Open Drawer </ur-button>

        <ur-navigation-drawer-global
            ?open=${t}
            placement=${r}
            ?close-on-esc=${u}
            ?close-on-overlay-click=${p}
            ?contained=${m}
            @opened=${a}
            @closed=${h}
        >
            <div slot="header" class="drawer-header">
                <ur-button-icon icon="close" @click=${n}></ur-button-icon>
                <span part="header-title" class="header-title">Title</span>
            </div>

            <div class="drawer-content">
                <span>
                    <strong>What is Lorem Ipsum?</strong><br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>

                <span>
                    <strong>Why do we use it?</strong><br />
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                    their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </span>
            </div>

            <div slot="footer" class="drawer-footer">
                <ur-button>Apply</ur-button>
                <ur-button variant="text" @click=${n}>Cancel</ur-button>
            </div>
        </ur-navigation-drawer-global>

        <style>
            .header-title {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                font-size: 16px;
                font-weight: 700;
                line-height: 28px;
                text-align: center;
                letter-spacing: 0px;
                color: inherit;
            }
        </style>
    `},J={title:"Core/Navigation Drawer Global",render:t=>E(t),argTypes:{open:{control:"boolean"},placement:{control:"select",options:["left","right"]},closeOnEsc:{control:"boolean"},closeOnOverlayClick:{control:"boolean"},contained:{control:"boolean"}}},o={args:{open:!1,placement:"right",closeOnEsc:!0,closeOnOverlayClick:!0,contained:!0}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    open: false,
    placement: 'right',
    closeOnEsc: true,
    closeOnOverlayClick: true,
    contained: true
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const K=["Default"];export{o as Default,K as __namedExportsOrder,J as default};
