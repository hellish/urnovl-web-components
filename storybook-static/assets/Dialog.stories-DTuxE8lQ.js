import{i as ke,k as t}from"./entry-preview-BcHUnPw7.js";import"./ur-button-D49M1-gq.js";import"./ur-button-icon-D53hif3e.js";import{s as xe,g as z}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as Ce,H as we,h as g,a as Oe}from"./index-B9J0OpMa.js";import{k as Se,_ as n,n as p,M as Ee,d as H,H as De,D as Re,K as A,R as He,f as y,c as Ae}from"./get-w4emotEH.js";import{o as _e}from"./query-assigned-elements-BInJlOXT.js";import{n as f}from"./when-BxLAFfhK.js";import{w as $e}from"./watch-ByvFYHv8.js";import{g as _,a as B,b as c,s as $}from"./motion-Dvf13IR2.js";import{l as ze,u as T,M as Be}from"./scroll-Nrg22M-p.js";import{n as Te}from"./template-yncBVCyc.js";import{o as We}from"./index-DEqrGdH5.js";import"./index-D2jzjD89.js";import"./ur-text-field-CGjSGe-8.js";import"./index-DrFu-skq.js";import"./index-CGUw5SK0.js";import"./button-base-DwUGB6N2.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-ClLaGEwM.js";import"./form-BeuMnVCp.js";import"./index-kIIll_V8.js";import"./live-8TRlRbWK.js";import"./default-value-BEuyqpAi.js";import"./observeResize-CYvww9Tt.js";import"./uniqueId-Bqzl4fNd.js";import"./svg-tag-DDFZdwWr.js";const Pe=ke`:host{--shape-corner:var(--mdui-shape-corner-extra-large);--z-index:2300;position:fixed;z-index:var(--z-index);display:none;align-items:center;justify-content:center;inset:0;padding:3rem}::slotted(mdui-top-app-bar[slot=header]){position:absolute;border-top-left-radius:var(--mdui-shape-corner-extra-large);border-top-right-radius:var(--mdui-shape-corner-extra-large);background-color:rgb(var(--mdui-color-surface-container-high))}:host([fullscreen]:not([fullscreen=false i])){--shape-corner:var(--mdui-shape-corner-none);padding:0}:host([fullscreen]:not([fullscreen=false i])) ::slotted(mdui-top-app-bar[slot=header]){border-top-left-radius:var(--mdui-shape-corner-none);border-top-right-radius:var(--mdui-shape-corner-none)}.overlay{position:fixed;inset:0;background-color:rgba(var(--mdui-color-scrim),.4)}.panel{--mdui-color-background:var(--mdui-color-surface-container-high);position:relative;display:flex;flex-direction:column;max-height:100%;border-radius:var(--shape-corner);outline:0;transform-origin:top;min-width:17.5rem;max-width:35rem;padding:1.5rem;background-color:rgb(var(--mdui-color-surface-container-high));box-shadow:var(--mdui-elevation-level3)}:host([fullscreen]:not([fullscreen=false i])) .panel{width:100%;max-width:100%;height:100%;max-height:100%;box-shadow:var(--mdui-elevation-level0)}.header{display:flex;flex-direction:column}.has-icon .header{align-items:center}.icon{display:flex;color:rgb(var(--mdui-color-secondary));font-size:1.5rem}.icon mdui-icon,::slotted([slot=icon]){font-size:inherit}.headline{display:flex;color:rgb(var(--mdui-color-on-surface));font-size:var(--mdui-typescale-headline-small-size);font-weight:var(--mdui-typescale-headline-small-weight);letter-spacing:var(--mdui-typescale-headline-small-tracking);line-height:var(--mdui-typescale-headline-small-line-height)}.icon+.headline{padding-top:1rem}.body{overflow:auto}.header+.body{margin-top:1rem}.description{display:flex;color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-body-medium-size);font-weight:var(--mdui-typescale-body-medium-weight);letter-spacing:var(--mdui-typescale-body-medium-tracking);line-height:var(--mdui-typescale-body-medium-line-height)}:host([fullscreen]:not([fullscreen=false i])) .description{color:rgb(var(--mdui-color-on-surface))}.has-description.has-default .description{margin-bottom:1rem}.action{display:flex;justify-content:flex-end;padding-top:1.5rem}.action::slotted(:not(:first-child)){margin-left:.5rem}:host([stacked-actions]:not([stacked-actions=false i])) .action{flex-direction:column;align-items:end}:host([stacked-actions]:not([stacked-actions=false i])) .action::slotted(:not(:first-child)){margin-left:0;margin-top:.5rem}`;let a=class extends Ee{constructor(){super(...arguments),this.open=!1,this.fullscreen=!1,this.closeOnEsc=!1,this.closeOnOverlayClick=!1,this.stackedActions=!1,this.overlayRef=H(),this.panelRef=H(),this.bodyRef=H(),this.hasSlotController=new De(this,"header","icon","headline","description","action","[default]"),this.definedController=new Re(this,{relatedElements:["mdui-top-app-bar"]})}async onOpenChange(){const e=this.hasUpdated;if(!this.open&&!e)return;await this.definedController.whenDefined(),e||await this.updateComplete;const i=Array.from(this.panelRef.value.querySelectorAll(".header, .body, .actions")),r=_(this,"linear"),m=_(this,"emphasized-decelerate"),u=_(this,"emphasized-accelerate"),h=()=>Promise.all([$(this.overlayRef.value),$(this.panelRef.value),...i.map(l=>$(l))]);if(this.open){if(e&&!this.emit("open",{cancelable:!0}))return;this.style.display="flex";const l=this.topAppBarElements??[];if(l.length){const o=l[0];o.scrollTarget||(o.scrollTarget=this.bodyRef.value),this.bodyRef.value.style.marginTop="0"}this.originalTrigger=document.activeElement,this.modalHelper.activate(),ze(this),await h(),requestAnimationFrame(()=>{const o=this.querySelector("[autofocus]");o?o.focus({preventScroll:!0}):this.panelRef.value.focus({preventScroll:!0})});const s=B(this,"medium4");await Promise.all([c(this.overlayRef.value,[{opacity:0},{opacity:1,offset:.3},{opacity:1}],{duration:e?s:0,easing:r}),c(this.panelRef.value,[{transform:"translateY(-1.875rem) scaleY(0)"},{transform:"translateY(0) scaleY(1)"}],{duration:e?s:0,easing:m}),c(this.panelRef.value,[{opacity:0},{opacity:1,offset:.1},{opacity:1}],{duration:e?s:0,easing:r}),...i.map(o=>c(o,[{opacity:0},{opacity:0,offset:.2},{opacity:1,offset:.8},{opacity:1}],{duration:e?s:0,easing:r}))]),e&&this.emit("opened")}else{if(!this.emit("close",{cancelable:!0}))return;this.modalHelper.deactivate(),await h();const s=B(this,"short4");await Promise.all([c(this.overlayRef.value,[{opacity:1},{opacity:0}],{duration:s,easing:r}),c(this.panelRef.value,[{transform:"translateY(0) scaleY(1)"},{transform:"translateY(-1.875rem) scaleY(0.6)"}],{duration:s,easing:u}),c(this.panelRef.value,[{opacity:1},{opacity:1,offset:.75},{opacity:0}],{duration:s,easing:r}),...i.map(be=>c(be,[{opacity:1},{opacity:0,offset:.75},{opacity:0}],{duration:s,easing:r}))]),this.style.display="none",T(this);const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("closed")}}disconnectedCallback(){super.disconnectedCallback(),T(this),We(this)}firstUpdated(e){super.firstUpdated(e),this.modalHelper=new Be(this),this.addEventListener("keydown",i=>{this.open&&this.closeOnEsc&&i.key==="Escape"&&(i.stopPropagation(),this.open=!1)})}render(){const e=this.hasSlotController.test("action"),i=this.hasSlotController.test("[default]"),r=!!this.icon||this.hasSlotController.test("icon"),m=!!this.headline||this.hasSlotController.test("headline"),u=!!this.description||this.hasSlotController.test("description"),h=r||m||this.hasSlotController.test("header"),l=u||i;return t`<div ${A(this.overlayRef)} part="overlay" class="overlay" @click="${this.onOverlayClick}" tabindex="-1"></div><div ${A(this.panelRef)} part="panel" class="panel ${He({"has-icon":r,"has-description":u,"has-default":i})}" tabindex="0">${f(h,()=>t`<slot name="header" part="header" class="header">${f(r,()=>this.renderIcon())} ${f(m,()=>this.renderHeadline())}</slot>`)} ${f(l,()=>t`<div ${A(this.bodyRef)} part="body" class="body">${f(u,()=>this.renderDescription())}<slot></slot></div>`)} ${f(e,()=>t`<slot name="action" part="action" class="action"></slot>`)}</div>`}onOverlayClick(){this.emit("overlay-click"),this.closeOnOverlayClick&&(this.open=!1)}renderIcon(){return t`<slot name="icon" part="icon" class="icon">${this.icon?t`<mdui-icon name="${this.icon}"></mdui-icon>`:Te}</slot>`}renderHeadline(){return t`<slot name="headline" part="headline" class="headline">${this.headline}</slot>`}renderDescription(){return t`<slot name="description" part="description" class="description">${this.description}</slot>`}};a.styles=[Se,Pe];n([p({reflect:!0})],a.prototype,"icon",void 0);n([p({reflect:!0})],a.prototype,"headline",void 0);n([p({reflect:!0})],a.prototype,"description",void 0);n([p({type:Boolean,reflect:!0,converter:y})],a.prototype,"open",void 0);n([p({type:Boolean,reflect:!0,converter:y})],a.prototype,"fullscreen",void 0);n([p({type:Boolean,reflect:!0,converter:y,attribute:"close-on-esc"})],a.prototype,"closeOnEsc",void 0);n([p({type:Boolean,reflect:!0,converter:y,attribute:"close-on-overlay-click"})],a.prototype,"closeOnOverlayClick",void 0);n([p({type:Boolean,reflect:!0,converter:y,attribute:"stacked-actions"})],a.prototype,"stackedActions",void 0);n([_e({slot:"header",selector:"mdui-top-app-bar",flatten:!0})],a.prototype,"topAppBarElements",void 0);n([$e("open")],a.prototype,"onOpenChange",null);a=n([Ae("mdui-dialog")],a);const Me=':host{--ur-dialog-panel-border-radius:0;--ur-color-outline-variant:var(--mdui-color-outline-variant)}:host mdui-dialog::part(panel){padding:0;border-radius:var(--ur-dialog-panel-border-radius)}:host ::slotted([slot="header"]){display:flex;align-items:center;justify-content:space-between;padding:8px 16px}:host ::slotted([slot="header"]) h2{margin:0;font-size:1rem;font-weight:500;color:rgb(var(--ur-color-on-surface))}',Ue=class extends we{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.description=null,this.open=!1,this.fullscreen=!1,this.closeOnEsc=!0,this.closeOnOverlayClick=!0,this.showHeader=!0,this.variant="desktop",this.borderRadius="12px"}componentDidLoad(){this.el.style.setProperty("--ur-dialog-panel-border-radius",this.borderRadius),this.dialogElement=this.el.shadowRoot.querySelector(".inner-dialog")}async openDialog(){this.dialogElement.open=!0}async closeDialog(){this.dialogElement.open=!1}render(){return g(Oe,{key:"9cdc5269f626c5af28ce5568f3e9eefa6437839a"},g("mdui-dialog",{key:"cfbe68af9bc08f5be556bd603b6caf1841de1a13",open:this.open,"close-on-overlay-click":this.closeOnOverlayClick,"close-on-esc":this.closeOnEsc,fullscreen:this.fullscreen,"border-radius":this.borderRadius,class:{"inner-dialog":!0,mobile:this.variant==="mobile",desktop:this.variant==="desktop"},style:{"--ur-dialog-panel-border-radius":this.borderRadius}},this.showHeader&&g("slot",{key:"26be23c0832ae9b1026136115d32d873237b737a",name:"header"}),g("slot",{key:"888bbdc096f84b173d07b2ad3c9ab4d1035fb29d"}),g("slot",{key:"48d4ef9c3ef51f6acf2664ac39edc5b248beacb0",name:"main-content"})))}get el(){return this}static get style(){return Me}};Ce(Ue,[1,"ur-dialog",{description:[1],open:[4],fullscreen:[4],closeOnEsc:[4,"close-on-esc"],closeOnOverlayClick:[4,"close-on-overlay-click"],showHeader:[4,"show-header"],variant:[1],borderRadius:[1,"border-radius"],openDialog:[64],closeDialog:[64]}]);const W={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrDialog",tagName:"ur-dialog",customElement:!0,members:[{kind:"field",name:"description",type:"string",description:"",default:"null"},{kind:"field",name:"open",type:"boolean",description:"",default:"false"},{kind:"field",name:"fullscreen",type:"boolean",description:"",default:"false"},{kind:"field",name:"closeOnEsc",type:"boolean",description:"",default:"true"},{kind:"field",name:"closeOnOverlayClick",type:"boolean",description:"",default:"true"},{kind:"field",name:"showHeader",type:"boolean",description:"",default:"true"},{kind:"field",name:"variant",type:"string",description:"",default:"'desktop'"},{kind:"field",name:"borderRadius",type:"string",description:"",default:"'12px'"}],events:[]}],exports:[{kind:"js",name:"UrDialog",declaration:{name:"UrDialog",module:"src/components/ur-dialog/ur-dialog.tsx"}},{kind:"custom-element-definition",name:"ur-dialog",declaration:{name:"UrDialog",module:"src/components/ur-dialog/ur-dialog.tsx"}}]}]};xe({...z()||{},...W,modules:[...(z()||{}).modules||[],...W.modules]});var P=Object.freeze,Fe=Object.defineProperty,qe=(d,e)=>P(Fe(d,"raw",{value:P(d.slice())})),M;const Le=()=>t`
    <div style="padding: 24px">
        <h3 style="margin: 0 0 16px">Simple Dialog Content</h3>
        <p>This is a basic dialog with simple text content.</p>
    </div>
`,Ye=()=>t`
    <div style="padding: 24px">
        <h3 style="margin: 0 0 16px">Contact Form</h3>
        <form id="contact-form" style="display: flex; flex-direction: column; gap: 16px;">
            <ur-text-field type="text" placeholder="Name" style="padding: 8px" label="Name"></ur-text-field>
            <ur-text-field type="email" placeholder="Email" style="padding: 8px" label="Email"></ur-text-field>
            <ur-text-field type="textarea" placeholder="Message" rows="4" style="padding: 8px"></ur-text-field>
            <ur-button type="submit">Submit</ur-button>
        </form>
    </div>
`,je=()=>t`
    <div slot="header">
        <span style="margin: 0">Custom Header</span>
        <ur-button-icon 
            onclick="document.getElementById('dialog-with-header').closeDialog()"
            icon="close"
            variant="standard"
        ></ur-button-icon>
    </div>
    <div style="padding: 24px">
        <p>This dialog demonstrates a custom header with a close button.</p>
    </div>
`,ve=()=>t`
    <div style="padding: 24px">
        <h3>Scrollable Content</h3>
        ${Array(10).fill(null).map(()=>t`
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        `)}
    </div>
`,Ie=({id:d="ur-dialog-1",open:e=!1,fullscreen:i=!1,closeOnEsc:r=!0,closeOnOverlayClick:m=!0,borderRadius:u="0",variant:h="desktop",showHeader:l=!0,content:s=Le})=>t(M||(M=qe([`
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
`])),d,d,e,u,i,r,m,h,l,s()),kt={title:"Core/Dialog",render:d=>Ie(d),argTypes:{open:{control:"boolean",description:"Controls whether the dialog is initially open"},closeOnEsc:{control:"boolean",description:"Allows closing the dialog with the ESC key"},closeOnOverlayClick:{control:"boolean",description:"Allows closing the dialog by clicking the overlay"},borderRadius:{control:"text",description:"Sets the border radius of the dialog"},fullscreen:{control:"boolean",description:"Makes the dialog fullscreen"},variant:{control:{type:"select",options:["mobile","desktop"]},description:"Sets the dialog variant"},showHeader:{control:"boolean",description:"Controls the visibility of the header slot"}},parameters:{docs:{description:{component:"A versatile dialog component that supports various configurations including fullscreen mode, custom headers, and different variants."}}}},v={args:{open:!1}},b={args:{open:!0}},k={args:{id:"dialog-with-form",content:Ye}},x={args:{id:"dialog-with-header",content:je}},C={args:{id:"dialog-with-scroll",content:ve}},w={args:{id:"mobile-dialog",variant:"mobile",borderRadius:"0"}},O={args:{id:"fullscreen-dialog",fullscreen:!0,content:ve}},S={args:{id:"rounded-dialog",borderRadius:"16px"}},E={args:{id:"no-header-dialog",showHeader:!1}},D={args:{id:"no-overlay-close-dialog",closeOnOverlayClick:!1}},R={args:{id:"no-esc-close-dialog",closeOnEsc:!1}};var U,F,q;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    open: false
  }
}`,...(q=(F=v.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var L,Y,j;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    open: true
  }
}`,...(j=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var I,N,V;k.parameters={...k.parameters,docs:{...(I=k.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: 'dialog-with-form',
    content: FormContent
  }
}`,...(V=(N=k.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var K,G,J;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    id: 'dialog-with-header',
    content: CustomHeaderContent
  }
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    id: 'dialog-with-scroll',
    content: LongContent
  }
}`,...(Z=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,oe;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    id: 'mobile-dialog',
    variant: 'mobile',
    borderRadius: '0'
  }
}`,...(oe=(te=w.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ae,re,ie;O.parameters={...O.parameters,docs:{...(ae=O.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    id: 'fullscreen-dialog',
    fullscreen: true,
    content: LongContent
  }
}`,...(ie=(re=O.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var se,ne,le;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    id: 'rounded-dialog',
    borderRadius: '16px'
  }
}`,...(le=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var de,ce,pe;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    id: 'no-header-dialog',
    showHeader: false
  }
}`,...(pe=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,me,he;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    id: 'no-overlay-close-dialog',
    closeOnOverlayClick: false
  }
}`,...(he=(me=D.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var fe,ge,ye;R.parameters={...R.parameters,docs:{...(fe=R.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    id: 'no-esc-close-dialog',
    closeOnEsc: false
  }
}`,...(ye=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};const xt=["Default","OpenByDefault","WithForm","WithCustomHeader","WithScrollableContent","MobileVariant","FullscreenDialog","RoundedDialog","WithoutHeader","WithoutOverlayClose","WithoutEscClose"];export{v as Default,O as FullscreenDialog,w as MobileVariant,b as OpenByDefault,S as RoundedDialog,x as WithCustomHeader,k as WithForm,C as WithScrollableContent,R as WithoutEscClose,E as WithoutHeader,D as WithoutOverlayClose,xt as __namedExportsOrder,kt as default};
