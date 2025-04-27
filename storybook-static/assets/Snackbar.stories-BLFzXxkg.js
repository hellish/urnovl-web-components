import{i as _,k as m}from"./entry-preview-BcHUnPw7.js";import{s as q,g as O}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as R,H as K,c as g,h as b,a as N}from"./index-DddAbXmr.js";import{h as Y,_ as c,n as d,M as j,c as X}from"./class-map-D9WDFjdt.js";import{n as V}from"./when-BxLAFfhK.js";import{w as E}from"./watch-ByvFYHv8.js";import{g as Z,s as k,a as S,b as y}from"./motion-Dh4Evn1U.js";import{b as B}from"./breakpoint-Cm4z_iZg.js";import{b as f}from"./get-CrYa75fC.js";import{o as F}from"./observeResize-CJw6rTQh.js";import{n as G}from"./template-yncBVCyc.js";import"./clear-Zj1VHT05.js";import"./index-B130AqrC.js";import"./index-BeAidxnL.js";import"./index-DSnKAvJF.js";import"./ur-button-CAONFgYs.js";import"./ur-circular-progress-D1D-tKMO.js";import"./index-DrFu-skq.js";import"./uniqueId-Bqzl4fNd.js";import"./svg-tag-DnJ0JIim.js";import"./button-base-CjWp8XDk.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-CiGySFkk.js";import"./form-Cw4bjwWA.js";import"./index-B-tAPXHM.js";const J=_`:host{--shape-corner:var(--mdui-shape-corner-extra-small);--z-index:2400;position:fixed;z-index:var(--z-index);display:none;align-items:center;flex-wrap:wrap;border-radius:var(--shape-corner);transform:scaleY(0);transition:transform 0s var(--mdui-motion-easing-linear) var(--mdui-motion-duration-short4);min-width:20rem;max-width:36rem;padding:.25rem 0;box-shadow:var(--mdui-elevation-level3);background-color:rgb(var(--mdui-color-inverse-surface));color:rgb(var(--mdui-color-inverse-on-surface));font-size:var(--mdui-typescale-body-medium-size);font-weight:var(--mdui-typescale-body-medium-weight);letter-spacing:var(--mdui-typescale-body-medium-tracking);line-height:var(--mdui-typescale-body-medium-line-height)}:host([placement^=top]){transform-origin:top}:host([placement^=bottom]){transform-origin:bottom}:host([placement=bottom-start]:not([mobile])),:host([placement=top-start]:not([mobile])){left:1rem}:host([placement=bottom-end]:not([mobile])),:host([placement=top-end]:not([mobile])){right:1rem}:host([placement=bottom]:not([mobile])),:host([placement=top]:not([mobile])){left:50%;transform:scaleY(0) translateX(-50%)}:host([mobile]){min-width:0;left:1rem;right:1rem}:host([open]){transform:scaleY(1);transition:top var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard),bottom var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard),transform var(--mdui-motion-duration-medium4) var(--mdui-motion-easing-emphasized-decelerate)}:host([placement=bottom][open]:not([mobile])),:host([placement=top][open]:not([mobile])){transform:scaleY(1) translateX(-50%)}.message{display:block;margin:.625rem 1rem}:host([message-line='1']) .message{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host([message-line='2']) .message{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}.action-group{display:flex;align-items:center;margin-left:auto;padding-right:.5rem}.action,.close-button{display:inline-flex;align-items:center;justify-content:center}.action{color:rgb(var(--mdui-color-inverse-primary));font-size:var(--mdui-typescale-label-large-size);font-weight:var(--mdui-typescale-label-large-weight);letter-spacing:var(--mdui-typescale-label-large-tracking)}.action mdui-button,::slotted(mdui-button[slot=action][variant=outlined]),::slotted(mdui-button[slot=action][variant=text]){color:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;--mdui-comp-ripple-state-layer-color:var(--mdui-color-inverse-primary)}.action mdui-button::part(button){padding:0 .5rem}.close-button{margin:0 -.25rem 0 .25rem;font-size:1.5rem;color:rgb(var(--mdui-color-inverse-on-surface))}.close-button mdui-button-icon,::slotted(mdui-button-icon[slot=close-button][variant=outlined]),::slotted(mdui-button-icon[slot=close-button][variant=standard]){font-size:inherit;color:inherit;--mdui-comp-ripple-state-layer-color:var(--mdui-color-inverse-on-surface)}.close-button .i,::slotted([slot=close-icon]){font-size:inherit}`,l=[];let w=!1,i=class extends j{constructor(){super(),this.open=!1,this.placement="bottom",this.actionLoading=!1,this.closeable=!1,this.autoCloseDelay=5e3,this.closeOnOutsideClick=!1,this.mobile=!1,this.onDocumentClick=this.onDocumentClick.bind(this)}async onOpenChange(){const t=Z(this,"linear"),n=Array.from(this.renderRoot.querySelectorAll(".message, .action-group"));if(this.open){const e=this.hasUpdated;if(e||await this.updateComplete,e&&!this.emit("open",{cancelable:!0}))return;window.clearTimeout(this.closeTimeout),this.autoCloseDelay&&(this.closeTimeout=window.setTimeout(()=>{this.open=!1},this.autoCloseDelay)),this.style.display="flex",await Promise.all([k(this),...n.map(o=>k(o))]),l.push({height:this.clientHeight,snackbar:this}),await this.reorderStack(this);const r=S(this,"medium4");await Promise.all([y(this,[{opacity:0},{opacity:1,offset:.5},{opacity:1}],{duration:e?r:0,easing:t,fill:"forwards"}),...n.map(o=>y(o,[{opacity:0},{opacity:0,offset:.2},{opacity:1,offset:.8},{opacity:1}],{duration:e?r:0,easing:t}))]),e&&this.emit("opened");return}if(!this.open&&this.hasUpdated){if(!this.emit("close",{cancelable:!0}))return;window.clearTimeout(this.closeTimeout),await Promise.all([k(this),...n.map(a=>k(a))]);const r=S(this,"short4");await Promise.all([y(this,[{opacity:1},{opacity:0}],{duration:r,easing:t,fill:"forwards"}),...n.map(a=>y(a,[{opacity:1},{opacity:0,offset:.75},{opacity:0}],{duration:r,easing:t}))]),this.style.display="none",this.emit("closed");const o=l.findIndex(a=>a.snackbar===this);l.splice(o,1),l[o]&&await this.reorderStack(l[o].snackbar);return}}async onStackChange(){await this.reorderStack(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.onDocumentClick),this.mobile=B().down("sm"),this.observeResize=F(document.documentElement,async()=>{const t=B().down("sm");this.mobile!==t&&(this.mobile=t,w||(w=!0,await this.reorderStack(),w=!1))})}disconnectedCallback(){var t;super.disconnectedCallback(),document.removeEventListener("pointerdown",this.onDocumentClick),window.clearTimeout(this.closeTimeout),this.open&&(this.open=!1),(t=this.observeResize)==null||t.unobserve()}render(){return m`<slot part="message" class="message"></slot><div class="action-group"><slot name="action" part="action" class="action" @click="${this.onActionClick}">${this.action?m`<mdui-button variant="text" loading="${this.actionLoading}">${this.action}</mdui-button>`:G}</slot>${V(this.closeable,()=>m`<slot name="close-button" part="close-button" class="close-button" @click="${this.onCloseClick}"><mdui-button-icon><slot name="close-icon" part="close-icon">${this.closeIcon?m`<mdui-icon name="${this.closeIcon}" class="i"></mdui-icon>`:m`<mdui-icon-clear class="i"></mdui-icon-clear>`}</slot></mdui-button-icon></slot>`)}</div>`}async reorderStack(t){const n=t?l.findIndex(e=>e.snackbar===t):0;for(let e=n;e<l.length;e++){const o=l[e].snackbar;this.mobile?["top","bottom"].forEach(a=>{if(o.placement.startsWith(a)){const h=l.filter((u,p)=>p<e&&u.snackbar.placement.startsWith(a)),$=h.reduce((u,p)=>u+p.height,0);o.style[a]=`calc(${$}px + ${h.length+1}rem)`,o.style[a==="top"?"bottom":"top"]="auto"}}):["top","top-start","top-end","bottom","bottom-start","bottom-end"].forEach(a=>{if(o.placement===a){const h=l.filter((u,p)=>p<e&&u.snackbar.placement===a),$=h.reduce((u,p)=>u+p.height,0);o.style[a.startsWith("top")?"top":"bottom"]=`calc(${$}px + ${h.length+1}rem)`,o.style[a.startsWith("top")?"bottom":"top"]="auto"}})}}onDocumentClick(t){if(!this.open||!this.closeOnOutsideClick)return;const n=t.target;!this.contains(n)&&this!==n&&(this.open=!1)}onActionClick(t){t.stopPropagation(),this.emit("action-click")}onCloseClick(){this.open=!1}};i.styles=[Y,J];c([d({type:Boolean,reflect:!0,converter:f})],i.prototype,"open",void 0);c([d({reflect:!0})],i.prototype,"placement",void 0);c([d({reflect:!0,attribute:"action"})],i.prototype,"action",void 0);c([d({type:Boolean,reflect:!0,converter:f,attribute:"action-loading"})],i.prototype,"actionLoading",void 0);c([d({type:Boolean,reflect:!0,converter:f})],i.prototype,"closeable",void 0);c([d({reflect:!0,attribute:"close-icon"})],i.prototype,"closeIcon",void 0);c([d({type:Number,reflect:!0,attribute:"message-line"})],i.prototype,"messageLine",void 0);c([d({type:Number,reflect:!0,attribute:"auto-close-delay"})],i.prototype,"autoCloseDelay",void 0);c([d({type:Boolean,reflect:!0,attribute:"close-on-outside-click",converter:f})],i.prototype,"closeOnOutsideClick",void 0);c([d({type:Boolean,reflect:!0,converter:f})],i.prototype,"mobile",void 0);c([E("open")],i.prototype,"onOpenChange",null);c([E("placement",!0),E("messageLine",!0)],i.prototype,"onStackChange",null);i=c([X("mdui-snackbar")],i);const Q=":host{display:contents}",ee=class extends K{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.urOpen=g(this,"urOpen",7),this.urOpened=g(this,"urOpened",7),this.urClose=g(this,"urClose",7),this.urClosed=g(this,"urClosed",7),this.urActionClick=g(this,"urActionClick",7),this.open=!1,this.placement="bottom",this.actionLoading=!1,this.closeable=!1,this.messageLine=1,this.autoCloseDelay=5e3,this.closeOnOutsideClick=!1,this.message="",this.backColor="rgb(var(--mdui-color-surface-container-highest))",this.fontColor="rgb(var(--mdui-color-on-surface))",this.actionColor="rgb(var(--mdui-color-primary))",this.radius="4px",this.zIndex="1000",this.handleOpen=()=>{this.urOpen.emit()},this.handleOpened=()=>{this.urOpened.emit()},this.handleClose=()=>{this.urClose.emit()},this.handleClosed=()=>{this.urClosed.emit()},this.handleActionClick=()=>{this.urActionClick.emit()}}render(){return b(N,{key:"441a84684db8a4601209f2604bf88d87bf02d4a5"},b("mdui-snackbar",{key:"e4cdd3efe6e7622f3295a5b1bebcb7bc84fb6306",open:this.open,placement:this.placement,action:this.action,"action-loading":this.actionLoading,closeable:this.closeable,"close-icon":this.closeIcon,"message-line":this.messageLine,"auto-close-delay":this.autoCloseDelay,"close-on-outside-click":this.closeOnOutsideClick,onOpen:this.handleOpen,onOpened:this.handleOpened,onClose:this.handleClose,onClosed:this.handleClosed,"onAction-click":this.handleActionClick,style:{"--z-index":this.zIndex,"--shape-corner":this.radius,"background-color":this.backColor,color:this.fontColor}},this.message,b("slot",{key:"a50190cf682b50b72fa9d3564b8905b7070b42d9"}),b("slot",{key:"3de7c36b5425e0a427a0332b3dd150a66f9b0d86",name:"action",slot:"action"}),b("slot",{key:"0da782623eb0ec1c85ebc799b26373948eb4250f",name:"close-button",slot:"close-button"}),b("slot",{key:"8ed3f4406cc4fbd031560e15952b8e57a8eff9d5",name:"close-icon",slot:"close-icon"})))}static get style(){return Q}};R(ee,[1,"ur-snackbar",{open:[1540],placement:[1],action:[1],actionLoading:[4,"action-loading"],closeable:[4],closeIcon:[1,"close-icon"],messageLine:[2,"message-line"],autoCloseDelay:[2,"auto-close-delay"],closeOnOutsideClick:[4,"close-on-outside-click"],message:[1],backColor:[1,"back-color"],fontColor:[1,"font-color"],actionColor:[1,"action-color"],radius:[1],zIndex:[1,"z-index"]}]);const z={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrSnackbar",tagName:"ur-snackbar",customElement:!0,members:[{kind:"field",name:"open",type:"boolean",description:"Controls whether the snackbar is open",default:"false"},{kind:"field",name:"placement",type:"string",description:"Position of the snackbar",default:"'bottom'"},{kind:"field",name:"action",type:"string",description:"Text for the action button"},{kind:"field",name:"actionLoading",type:"boolean",description:"Whether the action button is in loading state",default:"false"},{kind:"field",name:"closeable",type:"boolean",description:"Whether to show a close button",default:"false"},{kind:"field",name:"closeIcon",type:"string",description:"Material icon name for the close button"},{kind:"field",name:"messageLine",type:"number",description:"Maximum number of text lines",default:"1"},{kind:"field",name:"autoCloseDelay",type:"number",description:"Auto close delay in milliseconds",default:"5000"},{kind:"field",name:"closeOnOutsideClick",type:"boolean",description:"Whether to close when clicking outside",default:"false"},{kind:"field",name:"message",type:"string",description:"Message text",default:"''"},{kind:"field",name:"backColor",type:"string",description:"Background color",default:"'rgb(var(--mdui-color-surface-container-highest))'"},{kind:"field",name:"fontColor",type:"string",description:"Text color",default:"'rgb(var(--mdui-color-on-surface))'"},{kind:"field",name:"actionColor",type:"string",description:"Action button color",default:"'rgb(var(--mdui-color-primary))'"},{kind:"field",name:"radius",type:"string",description:"Border radius",default:"'4px'"},{kind:"field",name:"zIndex",type:"string",description:"Z-index",default:"'1000'"}],events:[{kind:"event",name:"urOpen",description:"Emitted when the snackbar starts to open"},{kind:"event",name:"urOpened",description:"Emitted after the snackbar opens and animations complete"},{kind:"event",name:"urClose",description:"Emitted when the snackbar starts to close"},{kind:"event",name:"urClosed",description:"Emitted after the snackbar closes and animations complete"},{kind:"event",name:"urActionClick",description:"Emitted when the action button is clicked"}]}],exports:[{kind:"js",name:"UrSnackbar",declaration:{name:"UrSnackbar",module:"src/components/ur-snackbar/ur-snackbar.tsx"}},{kind:"custom-element-definition",name:"ur-snackbar",declaration:{name:"UrSnackbar",module:"src/components/ur-snackbar/ur-snackbar.tsx"}}]}]};q({...O()||{},...z,modules:[...(O()||{}).modules||[],...z.modules]});const I=s=>m`
    <ur-button
        variant="filled"
        @click=${()=>{const t=document.getElementById(s);t&&(t.open=!1,setTimeout(()=>{t.open=!0},10))}}
    >
        Show Snackbar
    </ur-button>
`,Se={title:"Core/Snackbar",component:"ur-snackbar",argTypes:{open:{control:"boolean"},message:{control:"text"},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end"]},action:{control:"text"},actionLoading:{control:"boolean"},closeable:{control:"boolean"},closeIcon:{control:"text"},messageLine:{control:"select",options:[0,1,2]},autoCloseDelay:{control:"number"},closeOnOutsideClick:{control:"boolean"},backColor:{control:"color"},fontColor:{control:"color"},actionColor:{control:"color"},radius:{control:"text"},zIndex:{control:"text"}},parameters:{docs:{description:{component:"A snackbar component providing feedback about an operation."}}}},te=(s,t="")=>{const n=`snackbar-${s.storyId||Math.random().toString(36).substring(2,9)}`;return{render:e=>{const r=()=>{console.log(`Action button clicked for ${n}`);const o=document.getElementById(n);o&&!e.actionLoading&&(o.open=!1)};return m`
                <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                    <ur-snackbar
                        id=${n}
                        ?open=${e.open}
                        message=${e.message||""}
                        placement=${e.placement||"bottom"}
                        action=${e.action||""}
                        ?action-loading=${e.actionLoading}
                        ?closeable=${e.closeable}
                        close-icon=${e.closeIcon||""}
                        message-line=${e.messageLine||0}
                        auto-close-delay=${e.autoCloseDelay||5e3}
                        ?close-on-outside-click=${e.closeOnOutsideClick}
                        back-color=${e.backColor||"rgb(var(--mdui-color-surface-container-highest))"}
                        font-color=${e.fontColor||"rgb(var(--mdui-color-on-surface))"}
                        action-color=${e.actionColor||"rgb(var(--mdui-color-primary))"}
                        radius=${e.radius||"4px"}
                        z-index=${e.zIndex||"1000"}
                        @ur-action-click=${r}
                    >
                        ${t}
                    </ur-snackbar>

                    ${I(n)}
                </div>
            `},args:s}},v=te({storyId:"basic-with-action",message:"Photo archived successfully",action:"UNDO",closeable:!1}),C={render:s=>{const t="custom-slots-snackbar",n=()=>{console.log("Custom action button clicked");const e=document.getElementById(t);e&&(e.open=!1)};return m`
            <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                <ur-snackbar
                    id=${t}
                    ?open=${s.open}
                    ?closeable=${s.closeable!==void 0?s.closeable:!0}
                    placement=${s.placement||"bottom"}
                    auto-close-delay=${s.autoCloseDelay||5e3}
                    ?close-on-outside-click=${s.closeOnOutsideClick}
                    back-color=${s.backColor||"rgb(var(--mdui-color-surface-container-highest))"}
                    font-color=${s.fontColor||"rgb(var(--mdui-color-on-surface))"}
                    action-color=${s.actionColor||"rgb(var(--mdui-color-primary))"}
                    radius=${s.radius||"4px"}
                    z-index=${s.zIndex||"1000"}
                >
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <ur-icon name="info"></ur-icon>
                        <span><strong>Important:</strong> Custom formatted message</span>
                    </div>
                    <ur-button slot="action" variant="text" size="small" @click=${n}>OK</ur-button>
                    <ur-icon slot="close-icon" name="cancel"></ur-icon>
                </ur-snackbar>

                ${I(t)}
            </div>
        `},args:{closeable:!0,placement:"bottom",autoCloseDelay:5e3,closeOnOutsideClick:!1}},x={render:s=>{const t="auto-loading-snackbar";return m`
            <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                <ur-snackbar
                    id=${t}
                    ?open=${s.open}
                    placement="bottom-end"
                    auto-close-delay=${0}
                    ?closeable=${s.closeable}
                >
                    <!-- Custom message content with circular progress -->
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <ur-circular-progress
                            .max=${1}
                            .width=${"20px"}
                            .height=${"20px"}
                            style="margin-top: 4px;"
                            id="progress-indicator"
                        ></ur-circular-progress>
                        <span id="snackbar-message">Processing your request...</span>
                    </div>
                    
                    <!-- Action button - only shown in completed state -->
                    <ur-button 
                        slot="action" 
                        variant="text" 
                        size="small" 
                        id="action-button"
                        style="display: none;"
                        @click=${()=>{const n=document.getElementById(t);n&&(n.open=!1)}}
                    >
                        OK
                    </ur-button>
                </ur-snackbar>

                <div style="display: flex; gap: 8px;">
                    ${I(t)}
                    
                    <ur-button
                        variant="outlined"
                        @click=${()=>{const n=document.getElementById(t),e=document.getElementById("snackbar-message"),r=document.getElementById("action-button"),o=document.getElementById("progress-indicator");n&&e&&r&&o&&(e.innerHTML="Save completed successfully!",o.style.display="none",r.style.display="inline-block")}}
                    >
                        Show Completion State
                    </ur-button>
                    
                    <ur-button
                        variant="outlined"
                        @click=${()=>{const n=document.getElementById(t),e=document.getElementById("snackbar-message"),r=document.getElementById("action-button"),o=document.getElementById("progress-indicator");n&&e&&r&&o&&(e.innerHTML="Processing your request...",o.style.display="inline-block",r.style.display="none")}}
                    >
                        Reset to Loading
                    </ur-button>
                </div>
            </div>
        `},args:{closeable:!1}};var L,A,D;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`createStory({
  storyId: 'basic-with-action',
  message: 'Photo archived successfully',
  action: 'UNDO',
  closeable: false
})`,...(D=(A=v.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var T,P,U;C.parameters={...C.parameters,docs:{...(T=C.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    // Create unique ID for this instance
    const snackbarId = 'custom-slots-snackbar';

    // Handle the custom action button click
    const handleCustomAction = () => {
      console.log('Custom action button clicked');
      /** @type {UrSnackbarElement} */
      const snackbar = document.getElementById(snackbarId) as UrSnackbarElement;
      if (snackbar) {
        snackbar.open = false;
      }
    };
    return html\`
            <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                <ur-snackbar
                    id=\${snackbarId}
                    ?open=\${args.open}
                    ?closeable=\${args.closeable !== undefined ? args.closeable : true}
                    placement=\${args.placement || 'bottom'}
                    auto-close-delay=\${args.autoCloseDelay || 5000}
                    ?close-on-outside-click=\${args.closeOnOutsideClick}
                    back-color=\${args.backColor || 'rgb(var(--mdui-color-surface-container-highest))'}
                    font-color=\${args.fontColor || 'rgb(var(--mdui-color-on-surface))'}
                    action-color=\${args.actionColor || 'rgb(var(--mdui-color-primary))'}
                    radius=\${args.radius || '4px'}
                    z-index=\${args.zIndex || '1000'}
                >
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <ur-icon name="info"></ur-icon>
                        <span><strong>Important:</strong> Custom formatted message</span>
                    </div>
                    <ur-button slot="action" variant="text" size="small" @click=\${handleCustomAction}>OK</ur-button>
                    <ur-icon slot="close-icon" name="cancel"></ur-icon>
                </ur-snackbar>

                \${renderShowButton(snackbarId)}
            </div>
        \`;
  },
  args: {
    closeable: true,
    placement: 'bottom',
    autoCloseDelay: 5000,
    closeOnOutsideClick: false
  }
}`,...(U=(P=C.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var H,M,W;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    // Create unique ID for this instance
    const snackbarId = 'auto-loading-snackbar';
    return html\`
            <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                <ur-snackbar
                    id=\${snackbarId}
                    ?open=\${args.open}
                    placement="bottom-end"
                    auto-close-delay=\${0}
                    ?closeable=\${args.closeable}
                >
                    <!-- Custom message content with circular progress -->
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <ur-circular-progress
                            .max=\${1}
                            .width=\${'20px'}
                            .height=\${'20px'}
                            style="margin-top: 4px;"
                            id="progress-indicator"
                        ></ur-circular-progress>
                        <span id="snackbar-message">Processing your request...</span>
                    </div>
                    
                    <!-- Action button - only shown in completed state -->
                    <ur-button 
                        slot="action" 
                        variant="text" 
                        size="small" 
                        id="action-button"
                        style="display: none;"
                        @click=\${() => {
      const snackbar = document.getElementById(snackbarId) as UrSnackbarElement;
      if (snackbar) {
        snackbar.open = false;
      }
    }}
                    >
                        OK
                    </ur-button>
                </ur-snackbar>

                <div style="display: flex; gap: 8px;">
                    \${renderShowButton(snackbarId)}
                    
                    <ur-button
                        variant="outlined"
                        @click=\${() => {
      const snackbar = document.getElementById(snackbarId) as UrSnackbarElement;
      const messageEl = document.getElementById('snackbar-message');
      const actionButton = document.getElementById('action-button');
      const progressEl = document.getElementById('progress-indicator');
      if (snackbar && messageEl && actionButton && progressEl) {
        // Update the snackbar content to show completion
        messageEl.innerHTML = "Save completed successfully!";

        // Hide progress indicator
        progressEl.style.display = 'none';

        // Show the OK button
        actionButton.style.display = 'inline-block';
      }
    }}
                    >
                        Show Completion State
                    </ur-button>
                    
                    <ur-button
                        variant="outlined"
                        @click=\${() => {
      const snackbar = document.getElementById(snackbarId) as UrSnackbarElement;
      const messageEl = document.getElementById('snackbar-message');
      const actionButton = document.getElementById('action-button');
      const progressEl = document.getElementById('progress-indicator');
      if (snackbar && messageEl && actionButton && progressEl) {
        // Reset to initial loading state
        messageEl.innerHTML = "Processing your request...";

        // Show progress indicator
        progressEl.style.display = 'inline-block';

        // Hide the OK button
        actionButton.style.display = 'none';
      }
    }}
                    >
                        Reset to Loading
                    </ur-button>
                </div>
            </div>
        \`;
  },
  args: {
    closeable: false
  }
}`,...(W=(M=x.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const Be=["BasicWithAction","CustomSlots","ActionWithAutoLoading"];export{x as ActionWithAutoLoading,v as BasicWithAction,C as CustomSlots,Be as __namedExportsOrder,Se as default};
