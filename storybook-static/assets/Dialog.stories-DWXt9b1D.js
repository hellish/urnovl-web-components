import{i as Oe,k as o}from"./entry-preview-BcHUnPw7.js";import"./ur-button-CKpOEDy7.js";import"./ur-button-icon-CpyodfmA.js";import{s as De,g as B}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as Ee,H as Se,c as He,h as g,a as Re}from"./index-BJvbtjhH.js";import{d as ze,_ as l,n as p,M as Ae,R as $e,c as _e}from"./class-map-CWCTosL-.js";import{o as Be}from"./query-assigned-elements-BInJlOXT.js";import{i as z,H as We,D as qe,K as A,b as y}from"./get-IZFZkHlF.js";import{n as f}from"./when-BxLAFfhK.js";import{w as Me}from"./watch-ByvFYHv8.js";import{g as $,a as W,b as c,s as _}from"./motion-DsSt5j88.js";import{l as Pe,u as q,M as Te}from"./scroll-JTjBHVja.js";import{n as Ue}from"./template-yncBVCyc.js";import{o as Fe}from"./index-DiG0h0go.js";import"./index-CXOzFcj5.js";import"./ur-text-field-Cf-87SYh.js";import"./index-DrFu-skq.js";import"./index-BRY6Z_ZR.js";import"./button-base-DxLrUPRs.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-C8TuHONp.js";import"./form-DhDC-phE.js";import"./index-pqI9kxak.js";import"./index-rXz1tEXk.js";import"./live-KarC74af.js";import"./default-value-Btzv9brT.js";import"./observeResize-C8vt2UeC.js";import"./uniqueId-Bqzl4fNd.js";import"./svg-tag-C3ctfYVB.js";const Le=Oe`:host{--shape-corner:var(--mdui-shape-corner-extra-large);--z-index:2300;position:fixed;z-index:var(--z-index);display:none;align-items:center;justify-content:center;inset:0;padding:3rem}::slotted(mdui-top-app-bar[slot=header]){position:absolute;border-top-left-radius:var(--mdui-shape-corner-extra-large);border-top-right-radius:var(--mdui-shape-corner-extra-large);background-color:rgb(var(--mdui-color-surface-container-high))}:host([fullscreen]:not([fullscreen=false i])){--shape-corner:var(--mdui-shape-corner-none);padding:0}:host([fullscreen]:not([fullscreen=false i])) ::slotted(mdui-top-app-bar[slot=header]){border-top-left-radius:var(--mdui-shape-corner-none);border-top-right-radius:var(--mdui-shape-corner-none)}.overlay{position:fixed;inset:0;background-color:rgba(var(--mdui-color-scrim),.4)}.panel{--mdui-color-background:var(--mdui-color-surface-container-high);position:relative;display:flex;flex-direction:column;max-height:100%;border-radius:var(--shape-corner);outline:0;transform-origin:top;min-width:17.5rem;max-width:35rem;padding:1.5rem;background-color:rgb(var(--mdui-color-surface-container-high));box-shadow:var(--mdui-elevation-level3)}:host([fullscreen]:not([fullscreen=false i])) .panel{width:100%;max-width:100%;height:100%;max-height:100%;box-shadow:var(--mdui-elevation-level0)}.header{display:flex;flex-direction:column}.has-icon .header{align-items:center}.icon{display:flex;color:rgb(var(--mdui-color-secondary));font-size:1.5rem}.icon mdui-icon,::slotted([slot=icon]){font-size:inherit}.headline{display:flex;color:rgb(var(--mdui-color-on-surface));font-size:var(--mdui-typescale-headline-small-size);font-weight:var(--mdui-typescale-headline-small-weight);letter-spacing:var(--mdui-typescale-headline-small-tracking);line-height:var(--mdui-typescale-headline-small-line-height)}.icon+.headline{padding-top:1rem}.body{overflow:auto}.header+.body{margin-top:1rem}.description{display:flex;color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-body-medium-size);font-weight:var(--mdui-typescale-body-medium-weight);letter-spacing:var(--mdui-typescale-body-medium-tracking);line-height:var(--mdui-typescale-body-medium-line-height)}:host([fullscreen]:not([fullscreen=false i])) .description{color:rgb(var(--mdui-color-on-surface))}.has-description.has-default .description{margin-bottom:1rem}.action{display:flex;justify-content:flex-end;padding-top:1.5rem}.action::slotted(:not(:first-child)){margin-left:.5rem}:host([stacked-actions]:not([stacked-actions=false i])) .action{flex-direction:column;align-items:end}:host([stacked-actions]:not([stacked-actions=false i])) .action::slotted(:not(:first-child)){margin-left:0;margin-top:.5rem}`;let a=class extends Ae{constructor(){super(...arguments),this.open=!1,this.fullscreen=!1,this.closeOnEsc=!1,this.closeOnOverlayClick=!1,this.stackedActions=!1,this.overlayRef=z(),this.panelRef=z(),this.bodyRef=z(),this.hasSlotController=new We(this,"header","icon","headline","description","action","[default]"),this.definedController=new qe(this,{relatedElements:["mdui-top-app-bar"]})}async onOpenChange(){const e=this.hasUpdated;if(!this.open&&!e)return;await this.definedController.whenDefined(),e||await this.updateComplete;const s=Array.from(this.panelRef.value.querySelectorAll(".header, .body, .actions")),i=$(this,"linear"),m=$(this,"emphasized-decelerate"),u=$(this,"emphasized-accelerate"),h=()=>Promise.all([_(this.overlayRef.value),_(this.panelRef.value),...s.map(d=>_(d))]);if(this.open){if(e&&!this.emit("open",{cancelable:!0}))return;this.style.display="flex";const d=this.topAppBarElements??[];if(d.length){const t=d[0];t.scrollTarget||(t.scrollTarget=this.bodyRef.value),this.bodyRef.value.style.marginTop="0"}this.originalTrigger=document.activeElement,this.modalHelper.activate(),Pe(this),await h(),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t?t.focus({preventScroll:!0}):this.panelRef.value.focus({preventScroll:!0})});const n=W(this,"medium4");await Promise.all([c(this.overlayRef.value,[{opacity:0},{opacity:1,offset:.3},{opacity:1}],{duration:e?n:0,easing:i}),c(this.panelRef.value,[{transform:"translateY(-1.875rem) scaleY(0)"},{transform:"translateY(0) scaleY(1)"}],{duration:e?n:0,easing:m}),c(this.panelRef.value,[{opacity:0},{opacity:1,offset:.1},{opacity:1}],{duration:e?n:0,easing:i}),...s.map(t=>c(t,[{opacity:0},{opacity:0,offset:.2},{opacity:1,offset:.8},{opacity:1}],{duration:e?n:0,easing:i}))]),e&&this.emit("opened")}else{if(!this.emit("close",{cancelable:!0}))return;this.modalHelper.deactivate(),await h();const n=W(this,"short4");await Promise.all([c(this.overlayRef.value,[{opacity:1},{opacity:0}],{duration:n,easing:i}),c(this.panelRef.value,[{transform:"translateY(0) scaleY(1)"},{transform:"translateY(-1.875rem) scaleY(0.6)"}],{duration:n,easing:u}),c(this.panelRef.value,[{opacity:1},{opacity:1,offset:.75},{opacity:0}],{duration:n,easing:i}),...s.map(we=>c(we,[{opacity:1},{opacity:0,offset:.75},{opacity:0}],{duration:n,easing:i}))]),this.style.display="none",q(this);const t=this.originalTrigger;typeof(t==null?void 0:t.focus)=="function"&&setTimeout(()=>t.focus()),this.emit("closed")}}disconnectedCallback(){super.disconnectedCallback(),q(this),Fe(this)}firstUpdated(e){super.firstUpdated(e),this.modalHelper=new Te(this),this.addEventListener("keydown",s=>{this.open&&this.closeOnEsc&&s.key==="Escape"&&(s.stopPropagation(),this.open=!1)})}render(){const e=this.hasSlotController.test("action"),s=this.hasSlotController.test("[default]"),i=!!this.icon||this.hasSlotController.test("icon"),m=!!this.headline||this.hasSlotController.test("headline"),u=!!this.description||this.hasSlotController.test("description"),h=i||m||this.hasSlotController.test("header"),d=u||s;return o`<div ${A(this.overlayRef)} part="overlay" class="overlay" @click="${this.onOverlayClick}" tabindex="-1"></div><div ${A(this.panelRef)} part="panel" class="panel ${$e({"has-icon":i,"has-description":u,"has-default":s})}" tabindex="0">${f(h,()=>o`<slot name="header" part="header" class="header">${f(i,()=>this.renderIcon())} ${f(m,()=>this.renderHeadline())}</slot>`)} ${f(d,()=>o`<div ${A(this.bodyRef)} part="body" class="body">${f(u,()=>this.renderDescription())}<slot></slot></div>`)} ${f(e,()=>o`<slot name="action" part="action" class="action"></slot>`)}</div>`}onOverlayClick(){this.emit("overlay-click"),this.closeOnOverlayClick&&(this.open=!1)}renderIcon(){return o`<slot name="icon" part="icon" class="icon">${this.icon?o`<mdui-icon name="${this.icon}"></mdui-icon>`:Ue}</slot>`}renderHeadline(){return o`<slot name="headline" part="headline" class="headline">${this.headline}</slot>`}renderDescription(){return o`<slot name="description" part="description" class="description">${this.description}</slot>`}};a.styles=[ze,Le];l([p({reflect:!0})],a.prototype,"icon",void 0);l([p({reflect:!0})],a.prototype,"headline",void 0);l([p({reflect:!0})],a.prototype,"description",void 0);l([p({type:Boolean,reflect:!0,converter:y})],a.prototype,"open",void 0);l([p({type:Boolean,reflect:!0,converter:y})],a.prototype,"fullscreen",void 0);l([p({type:Boolean,reflect:!0,converter:y,attribute:"close-on-esc"})],a.prototype,"closeOnEsc",void 0);l([p({type:Boolean,reflect:!0,converter:y,attribute:"close-on-overlay-click"})],a.prototype,"closeOnOverlayClick",void 0);l([p({type:Boolean,reflect:!0,converter:y,attribute:"stacked-actions"})],a.prototype,"stackedActions",void 0);l([Be({slot:"header",selector:"mdui-top-app-bar",flatten:!0})],a.prototype,"topAppBarElements",void 0);l([Me("open")],a.prototype,"onOpenChange",null);a=l([_e("mdui-dialog")],a);const je=':host{--ur-dialog-panel-border-radius:0;--ur-color-background:var(--mdui-color-background);--ur-color-outline-variant:var(--mdui-color-outline-variant);--ur-color-background-container-highest:var(--mdui-color-surface-container-highest)}:host mdui-dialog::part(panel){padding:0;border-radius:var(--ur-dialog-panel-border-radius)}:host ::slotted([slot="header"]){display:flex;align-items:center;justify-content:space-between;padding:8px 16px}:host ::slotted([slot="header"]) h2{margin:0;font-size:1rem;font-weight:500;color:rgb(var(--ur-color-on-surface))}:host ::part(panel){background:rgb(var(--ur-color-background))}:host .dialog-header{position:relative;z-index:1}:host .dialog-header.header-overlay{position:absolute;top:0;left:0;right:0;width:100%;z-index:2;background:transparent}',Ie=class extends Se{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.urDialogClose=He(this,"urDialogClose",7),this.description=null,this.open=!1,this.fullscreen=!1,this.closeOnEsc=!0,this.closeOnOverlayClick=!0,this.showHeader=!0,this.overlayHeader=!1,this.variant="desktop",this.borderRadius="12px",this.handleClose=async r=>{await this.closeDialog(r.detail)}}componentDidLoad(){this.el.style.setProperty("--ur-dialog-panel-border-radius",this.borderRadius),this.dialogElement=this.el.shadowRoot.querySelector(".inner-dialog")}disconnectedCallback(){this.dialogElement&&this.dialogElement.removeEventListener("mdui-dialog-close",this.handleClose)}async openDialog(){this.dialogElement.open=!0}async closeDialog(r){this.dialogElement&&(this.dialogElement.open=!1,await new Promise(e=>requestAnimationFrame(e)),this.urDialogClose.emit(r))}render(){return g(Re,{key:"749b0de2781ea7d7e20747402d41018f52fd4e9f"},g("mdui-dialog",{key:"311b9dec9700b6257bb4e393b3ac62832e030d23",open:this.open,"close-on-overlay-click":this.closeOnOverlayClick,"close-on-esc":this.closeOnEsc,fullscreen:this.fullscreen,"border-radius":this.borderRadius,class:{"inner-dialog":!0,mobile:this.variant==="mobile",desktop:this.variant==="desktop"},style:{"--ur-dialog-panel-border-radius":this.borderRadius},onMduiDialogClose:this.handleClose},this.showHeader&&g("div",{key:"cf08f4febccdb0e5721a164a81ff2ab869499c05",part:"header",class:{"dialog-header":!0,"header-overlay":this.overlayHeader}},g("slot",{key:"2f3865c81b47c2f61ec64b2b366b2b0f03569a54",name:"header"})),g("slot",{key:"628166950f9cf2246e0c0bc4ae42f7f9d5032ac6"}),g("slot",{key:"70574dd680639a59a5eea96c4bff4af506ef7488",name:"main-content"})))}get el(){return this}static get style(){return je}};Ee(Ie,[1,"ur-dialog",{description:[1],open:[4],fullscreen:[4],closeOnEsc:[4,"close-on-esc"],closeOnOverlayClick:[4,"close-on-overlay-click"],showHeader:[4,"show-header"],overlayHeader:[4,"overlay-header"],variant:[1],borderRadius:[1,"border-radius"],openDialog:[64],closeDialog:[64]}]);const M={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrDialog",tagName:"ur-dialog",customElement:!0,members:[{kind:"field",name:"description",type:"string",description:"",default:"null"},{kind:"field",name:"open",type:"boolean",description:"",default:"false"},{kind:"field",name:"fullscreen",type:"boolean",description:"",default:"false"},{kind:"field",name:"closeOnEsc",type:"boolean",description:"",default:"true"},{kind:"field",name:"closeOnOverlayClick",type:"boolean",description:"",default:"true"},{kind:"field",name:"showHeader",type:"boolean",description:"",default:"true"},{kind:"field",name:"overlayHeader",type:"boolean",description:"",default:"false"},{kind:"field",name:"variant",type:"string",description:"",default:"'desktop'"},{kind:"field",name:"borderRadius",type:"string",description:"",default:"'12px'"}],events:[{kind:"event",name:"urDialogClose",description:""}]}],exports:[{kind:"js",name:"UrDialog",declaration:{name:"UrDialog",module:"src/components/ur-dialog/ur-dialog.tsx"}},{kind:"custom-element-definition",name:"ur-dialog",declaration:{name:"UrDialog",module:"src/components/ur-dialog/ur-dialog.tsx"}}]}]};De({...B()||{},...M,modules:[...(B()||{}).modules||[],...M.modules]});var P=Object.freeze,Ye=Object.defineProperty,Ne=(r,e)=>P(Ye(r,"raw",{value:P(r.slice())})),T;const Ve=()=>o`
    <div style="padding: 24px">
        <h3 style="margin: 0 0 16px">Simple Dialog Content</h3>
        <p>This is a basic dialog with simple text content.</p>
    </div>
`,Ke=()=>o`
    <div style="padding: 24px">
        <h3 style="margin: 0 0 16px">Contact Form</h3>
        <form id="contact-form" style="display: flex; flex-direction: column; gap: 16px;">
            <ur-text-field type="text" placeholder="Name" style="padding: 8px" label="Name"></ur-text-field>
            <ur-text-field type="email" placeholder="Email" style="padding: 8px" label="Email"></ur-text-field>
            <ur-text-field type="textarea" placeholder="Message" rows="4" style="padding: 8px"></ur-text-field>
            <ur-button type="submit">Submit</ur-button>
        </form>
    </div>
`,Ge=()=>o`
    <div slot="header">
        <span style="margin: 0">Custom Header</span>
        <ur-button-icon onclick="document.getElementById('dialog-with-header').closeDialog()" icon="close" variant="standard"></ur-button-icon>
    </div>
    <div style="padding: 24px">
        <p>This dialog demonstrates a custom header with a close button.</p>
    </div>
`,Ce=()=>o`
    <div style="padding: 24px">
        <h3>Scrollable Content</h3>
        ${Array(10).fill(null).map(()=>o`
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                `)}
    </div>
`,Je=()=>o`
    <div slot="header">
        <div style="display: flex; width: 100%; justify-content: space-between; align-items: center;">
            <span style="font-weight: 500; font-size: 18px;">Overlaid Header</span>
            <ur-button-icon color="red" background-color="blue" onclick="document.getElementById('dialog-overlay-header').closeDialog()" icon="close" variant="standard"></ur-button-icon>
        </div>
    </div>
    <div style="padding: 24px">
        <h3 style="margin-top: 40px;">Content Under Overlaid Header</h3>
        ${Array(5).fill(null).map(()=>o`
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                `)}
    </div>
`,Qe=({id:r="ur-dialog-1",open:e=!1,fullscreen:s=!1,closeOnEsc:i=!0,closeOnOverlayClick:m=!0,borderRadius:u="0",variant:h="desktop",showHeader:d=!0,content:n=Ve})=>o(T||(T=Ne([`
    <script>
        function handleClick(dialogId) {
            document.getElementById(dialogId).openDialog();
        }
    <\/script>
    <ur-button onclick="handleClick('`,`')">Open Dialog</ur-button>
    <ur-dialog
        id=`,`
        open=`,`
        border-radius=`,`
        fullscreen=`,`
        close-on-esc=`,`
        close-on-overlay-click=`,`
        variant=`,`
        show-header=`,`
    >
        `,`
    </ur-dialog>
`])),r,r,e,u,s,i,m,h,d,n()),Ro={title:"Core/Dialog",render:r=>Qe(r),argTypes:{open:{control:"boolean",description:"Controls whether the dialog is initially open"},closeOnEsc:{control:"boolean",description:"Allows closing the dialog with the ESC key"},closeOnOverlayClick:{control:"boolean",description:"Allows closing the dialog by clicking the overlay"},borderRadius:{control:"text",description:"Sets the border radius of the dialog"},fullscreen:{control:"boolean",description:"Makes the dialog fullscreen"},variant:{control:{type:"select",options:["mobile","desktop"]},description:"Sets the dialog variant"},showHeader:{control:"boolean",description:"Controls the visibility of the header slot"},overlayHeader:{control:"boolean",description:"Makes the header overlay the content"}},parameters:{docs:{description:{component:"A versatile dialog component that supports various configurations including fullscreen mode, custom headers, and different variants."}}}},v={args:{open:!1}},b={args:{open:!0}},k={args:{id:"dialog-with-form",content:Ke}},x={args:{id:"dialog-with-header",content:Ge}},C={args:{id:"dialog-with-scroll",content:Ce}},w={args:{id:"mobile-dialog",variant:"mobile",borderRadius:"0"}},O={args:{id:"fullscreen-dialog",fullscreen:!0,content:Ce}},D={args:{id:"rounded-dialog",borderRadius:"16px"}},E={args:{id:"no-header-dialog",showHeader:!1}},S={args:{id:"no-overlay-close-dialog",closeOnOverlayClick:!1}},H={args:{id:"no-esc-close-dialog",closeOnEsc:!1}},R={args:{id:"dialog-overlay-header",content:Je,overlayHeader:!0,borderRadius:"12px"}};var U,F,L;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    open: false
  }
}`,...(L=(F=v.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var j,I,Y;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    open: true
  }
}`,...(Y=(I=b.parameters)==null?void 0:I.docs)==null?void 0:Y.source}}};var N,V,K;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'dialog-with-form',
    content: FormContent
  }
}`,...(K=(V=k.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var G,J,Q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    id: 'dialog-with-header',
    content: CustomHeaderContent
  }
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    id: 'dialog-with-scroll',
    content: LongContent
  }
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,te,ae;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    id: 'mobile-dialog',
    variant: 'mobile',
    borderRadius: '0'
  }
}`,...(ae=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,ie,se;O.parameters={...O.parameters,docs:{...(re=O.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    id: 'fullscreen-dialog',
    fullscreen: true,
    content: LongContent
  }
}`,...(se=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ne,le,de;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    id: 'rounded-dialog',
    borderRadius: '16px'
  }
}`,...(de=(le=D.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,ue;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    id: 'no-header-dialog',
    showHeader: false
  }
}`,...(ue=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,he,ge;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    id: 'no-overlay-close-dialog',
    closeOnOverlayClick: false
  }
}`,...(ge=(he=S.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var fe,ye,ve;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    id: 'no-esc-close-dialog',
    closeOnEsc: false
  }
}`,...(ve=(ye=H.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var be,ke,xe;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    id: 'dialog-overlay-header',
    content: OverlayHeaderContent,
    overlayHeader: true,
    borderRadius: '12px'
  }
}`,...(xe=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:xe.source}}};const zo=["Default","OpenByDefault","WithForm","WithCustomHeader","WithScrollableContent","MobileVariant","FullscreenDialog","RoundedDialog","WithoutHeader","WithoutOverlayClose","WithoutEscClose","WithOverlayHeader"];export{v as Default,O as FullscreenDialog,w as MobileVariant,b as OpenByDefault,D as RoundedDialog,x as WithCustomHeader,k as WithForm,R as WithOverlayHeader,C as WithScrollableContent,H as WithoutEscClose,E as WithoutHeader,S as WithoutOverlayClose,zo as __namedExportsOrder,Ro as default};
