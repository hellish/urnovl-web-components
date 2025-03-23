import{k as b}from"./entry-preview-BcHUnPw7.js";import"./ur-button-BJRNfVIe.js";import{s as f,g as s}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as v,H as w,h as e,a as y}from"./index-BJvbtjhH.js";import"./index-BW1tcKJL.js";import"./ur-button-icon-BjTruCeP.js";import"./index-DrFu-skq.js";import"./index-BRY6Z_ZR.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./template-yncBVCyc.js";import"./index-CXOzFcj5.js";import"./button-base-DxLrUPRs.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-C8TuHONp.js";import"./form-DhDC-phE.js";import"./index-pqI9kxak.js";import"./when-BxLAFfhK.js";import"./watch-ByvFYHv8.js";import"./motion-DsSt5j88.js";import"./scroll-JTjBHVja.js";import"./observeResize-C8vt2UeC.js";import"./uniqueId-Bqzl4fNd.js";import"./layout-item-base-0Jyw3Jj3.js";import"./index-rXz1tEXk.js";const k=":host{display:block;position:relative;--ur-color-on-surface:var(--mdui-color-on-surface);--ur-color-surface:var(--mdui-color-surface);color:rgb(var(--ur-color-on-surface))}:host ::slotted([slot='header']){top:0;left:0;padding:8px 12px;display:flex;font-weight:bold;position:sticky;flex-direction:row;align-items:center;justify-content:space-between;color:rgb(var(--ur-color-on-surface));background:rgb(var(--ur-color-surface));z-index:1}:host .drawer-content{overflow-y:auto;padding:8px 24px;min-height:0;position:relative;color:rgb(var(--ur-color-on-surface));background:rgb(var(--ur-color-surface))}:host ::slotted([slot='footer']){bottom:0;position:sticky;padding:8px 12px;color:rgb(var(--ur-color-on-surface));background:rgb(var(--ur-color-surface));display:flex;gap:8px;z-index:1}",O=class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.contentHeight=0,this.open=!1,this.placement="right",this.closeOnEsc=!0,this.closeOnOverlayClick=!0}componentDidLoad(){this.drawerElement=this.el.shadowRoot.querySelector("mdui-navigation-drawer"),this.headerElement=this.el.shadowRoot.querySelector(".drawer-header"),this.footerElement=this.el.shadowRoot.querySelector(".drawer-footer"),this.resizeObserver=new ResizeObserver(()=>{this.updateContentHeight()}),this.resizeObserver.observe(this.headerElement),this.resizeObserver.observe(this.footerElement),this.updateContentHeight()}disconnectedCallback(){this.resizeObserver&&this.resizeObserver.disconnect()}updateContentHeight(){const t=this.headerElement.offsetHeight,r=this.footerElement.offsetHeight;this.contentHeight=t+r+16}async openDrawer(){this.drawerElement.open=!0,this.open=!0}async closeDrawer(){this.drawerElement.open=!1,this.open=!1}render(){return e(y,{key:"abd4db1bb67bf10ede20755c1ba11a71c3940e0c"},e("mdui-navigation-drawer",{key:"bac4a2b03567111bf4fdd27b8bf7c43528ee4093",placement:this.placement,modal:!0,"close-on-esc":this.closeOnEsc,"close-on-overlay-click":this.closeOnOverlayClick,open:this.open},e("div",{key:"65af2636050a059c8ec3d896d217d504503bf393",class:"drawer-header",role:"banner"},e("slot",{key:"8bc6e476f902c2bb02bde1424657ba4df492b15c",name:"header"})),e("div",{key:"ac78efe22bf9dd9d95c8a9026314ecd7301c17ef",class:"drawer-content",role:"main",style:{height:`calc(100vh - ${this.contentHeight}px)`}},e("slot",{key:"9311c69bf4161aff005dbc709ea7251228328ef9"})),e("div",{key:"4362bc1a1bcc3f3904558ffbf5234f0c3d22babe",class:"drawer-footer",role:"contentinfo"},e("slot",{key:"b9228d932b2869152813f69513df216064be957e",name:"footer"}))))}get el(){return this}static get style(){return k}};v(O,[1,"ur-navigation-drawer-global",{open:[4],placement:[1],closeOnEsc:[4,"close-on-esc"],closeOnOverlayClick:[4,"close-on-overlay-click"],contentHeight:[32],openDrawer:[64],closeDrawer:[64]}]);const i={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNavigationDrawerGlobal",tagName:"ur-navigation-drawer-global",customElement:!0,members:[{kind:"field",name:"open",type:"boolean",description:"Determines if the drawer is open",default:"false"},{kind:"field",name:"placement",type:"string",description:"Placement of the drawer: 'left' or 'right'",default:"'right'"},{kind:"field",name:"closeOnEsc",type:"boolean",description:"Closes the drawer when the 'Esc' key is pressed",default:"true"},{kind:"field",name:"closeOnOverlayClick",type:"boolean",description:"Closes the drawer when clicking outside of it",default:"true"}],events:[]}],exports:[{kind:"js",name:"UrNavigationDrawerGlobal",declaration:{name:"UrNavigationDrawerGlobal",module:"src/components/ur-navigation-drawer-global/ur-navigation-drawer-global.tsx"}},{kind:"custom-element-definition",name:"ur-navigation-drawer-global",declaration:{name:"UrNavigationDrawerGlobal",module:"src/components/ur-navigation-drawer-global/ur-navigation-drawer-global.tsx"}}]}]};f({...s()||{},...i,modules:[...(s()||{}).modules||[],...i.modules]});const E=({open:t=!1,placement:r="right",closeOnEsc:p=!0,closeOnOverlayClick:u=!0,contained:m=!0})=>{const a=()=>{document.getElementsByTagName("ur-navigation-drawer-global")[0].open=!0},h=()=>{document.getElementsByTagName("ur-navigation-drawer-global")[0].open=!1},g=()=>{a(),document.getElementsByTagName("ur-navigation-drawer-global")[0].openDrawer()},n=()=>{document.getElementsByTagName("ur-navigation-drawer-global")[0].closeDrawer()};return b`
        <ur-button @click=${g}> Open Drawer </ur-button>

        <ur-navigation-drawer-global
            ?open=${t}
            placement=${r}
            ?close-on-esc=${p}
            ?close-on-overlay-click=${u}
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
    `},Q={title:"Core/Navigation Drawer Global",render:t=>E(t),argTypes:{open:{control:"boolean"},placement:{control:"select",options:["left","right"]},closeOnEsc:{control:"boolean"},closeOnOverlayClick:{control:"boolean"},contained:{control:"boolean"}}},o={args:{open:!1,placement:"right",closeOnEsc:!0,closeOnOverlayClick:!0,contained:!0}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    open: false,
    placement: 'right',
    closeOnEsc: true,
    closeOnOverlayClick: true,
    contained: true
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,Q as default};
