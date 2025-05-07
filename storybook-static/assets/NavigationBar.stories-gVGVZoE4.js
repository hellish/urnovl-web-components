import{a as B,x as r}from"./entry-preview-CxXhOGqP.js";import{s as de,g as N}from"./chunk-L4EGOTBX-BPj2F1fn.js";import{d as ce,H as me,h as S,a as ue}from"./index-Bdp-Mrn6.js";import{h as C,_ as t,n as l,c as V,M as ne}from"./class-map-CvfWHz58.js";import{D as ve,r as w,b as se,e as he,H as pe,n as be}from"./get-DCsNyb8P.js";import{o as ge}from"./query-assigned-elements-BInJlOXT.js";import{w as $}from"./watch-ByvFYHv8.js";import{S as fe}from"./scrollBehavior-BFu5gf--.js";import{L as ye}from"./layout-item-base-fPN3unkk.js";import{A as xe,c as L}from"./anchor-BJ52fAYX.js";import{n as I}from"./template-DbMQw6l-.js";import{u as we}from"./uniqueId-Bqzl4fNd.js";import{R as ke,F as Se}from"./index-rsUJIYwf.js";import"./index-DrFu-skq.js";import"./observeResize-Dehp4heo.js";import"./if-defined-D52-l-pg.js";const Ie=B`:host{--shape-corner:var(--mdui-shape-corner-none);--z-index:2000;position:fixed;right:0;bottom:0;left:0;display:flex;flex:0 0 auto;overflow:hidden;border-radius:var(--shape-corner) var(--shape-corner) 0 0;z-index:var(--z-index);transition-property:transform;transition-duration:var(--mdui-motion-duration-long2);transition-timing-function:var(--mdui-motion-easing-emphasized);height:5rem;background-color:rgb(var(--mdui-color-surface));box-shadow:var(--mdui-elevation-level2)}:host([scroll-target]:not([scroll-target=''])){position:absolute}:host([hide]:not([hide=false i])){transform:translateY(5.625rem);transition-duration:var(--mdui-motion-duration-short4)}`;let n=class extends fe(ye){constructor(){super(...arguments),this.hide=!1,this.labelVisibility="auto",this.activeKey=0,this.isInitial=!0,this.definedController=new ve(this,{relatedElements:["mdui-navigation-bar-item"]})}get scrollPaddingPosition(){return"bottom"}get layoutPlacement(){return"bottom"}async onActiveKeyChange(){await this.definedController.whenDefined();const e=this.items.find(i=>i.key===this.activeKey);this.value=e==null?void 0:e.value,this.isInitial||this.emit("change")}async onValueChange(){this.isInitial=!this.hasUpdated,await this.definedController.whenDefined();const e=this.items.find(i=>i.value===this.value);this.activeKey=(e==null?void 0:e.key)??0,this.updateItems()}async onLabelVisibilityChange(){await this.definedController.whenDefined(),this.updateItems()}firstUpdated(e){super.firstUpdated(e),this.addEventListener("transitionend",i=>{i.target===this&&this.emit(this.hide?"hidden":"shown")})}render(){return r`<slot @slotchange="${this.onSlotChange}" @click="${this.onClick}"></slot>`}runScrollThreshold(e){!e&&!this.hide&&this.emit("hide",{cancelable:!0})&&(this.hide=!0),e&&this.hide&&this.emit("show",{cancelable:!0})&&(this.hide=!1)}onClick(e){if(e.button)return;const o=e.target.closest("mdui-navigation-bar-item");o&&(this.activeKey=o.key,this.isInitial=!1,this.updateItems())}updateItems(){const e=this.items,i=this.labelVisibility==="auto"?e.length<=3?"labeled":"selected":this.labelVisibility;e.forEach(o=>{o.active=this.activeKey===o.key,o.labelVisibility=i,o.isInitial=this.isInitial})}async onSlotChange(){await this.definedController.whenDefined(),this.updateItems()}};n.styles=[C,Ie];t([l({type:Boolean,reflect:!0,converter:se})],n.prototype,"hide",void 0);t([l({reflect:!0,attribute:"label-visibility"})],n.prototype,"labelVisibility",void 0);t([l({reflect:!0})],n.prototype,"value",void 0);t([l({reflect:!0,attribute:"scroll-behavior"})],n.prototype,"scrollBehavior",void 0);t([w()],n.prototype,"activeKey",void 0);t([ge({selector:"mdui-navigation-bar-item",flatten:!0})],n.prototype,"items",void 0);t([$("activeKey",!0)],n.prototype,"onActiveKeyChange",null);t([$("value")],n.prototype,"onValueChange",null);t([$("labelVisibility",!0)],n.prototype,"onLabelVisibilityChange",null);n=t([V("mdui-navigation-bar")],n);const Be=B`:host{--shape-corner-indicator:var(--mdui-shape-corner-full);position:relative;z-index:0;flex:1;overflow:hidden;min-width:3rem;--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface-variant)}.container{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;text-decoration:none;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;padding-top:.75rem;padding-bottom:.75rem}.container:not(.initial){transition:padding var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}mdui-ripple{z-index:1;left:50%;transform:translateX(-50%);width:4rem;height:2rem;margin-top:.75rem;border-radius:var(--mdui-shape-corner-full)}mdui-ripple:not(.initial){transition:margin-top var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}.indicator{position:relative;display:flex;align-items:center;justify-content:center;background-color:transparent;border-radius:var(--shape-corner-indicator);height:2rem;width:2rem}:not(.initial) .indicator{transition:background-color var(--mdui-motion-duration-short1) var(--mdui-motion-easing-standard),width var(--mdui-motion-duration-short4) var(--mdui-motion-easing-standard)}::slotted([slot=badge]){position:absolute;transform:translate(50%,-50%)}::slotted([slot=badge][variant=small]){transform:translate(.5625rem,-.5625rem)}.active-icon,.icon{color:rgb(var(--mdui-color-on-surface-variant));font-size:1.5rem}.active-icon mdui-icon,.icon mdui-icon,::slotted([slot=active]),::slotted([slot=icon]){font-size:inherit}.icon{display:flex}.active-icon{display:none}.label{display:flex;align-items:center;height:1rem;color:rgb(var(--mdui-color-on-surface-variant));margin-top:.25rem;margin-bottom:.25rem;font-size:var(--mdui-typescale-label-medium-size);font-weight:var(--mdui-typescale-label-medium-weight);letter-spacing:var(--mdui-typescale-label-medium-tracking);line-height:var(--mdui-typescale-label-medium-line-height)}:not(.initial) .label{transition:opacity var(--mdui-motion-duration-short4) var(--mdui-motion-easing-linear)}:host(:not([active])) mdui-ripple.label-visibility-selected,mdui-ripple.label-visibility-unlabeled{margin-top:1.5rem}.container.label-visibility-unlabeled,:host(:not([active])) .container.label-visibility-selected{padding-top:1.5rem;padding-bottom:0}.container.label-visibility-unlabeled .label,:host(:not([active])) .container.label-visibility-selected .label{opacity:0}:host([active]){--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}:host([active]) .indicator{width:4rem;background-color:rgb(var(--mdui-color-secondary-container))}:host([active]) .active-icon,:host([active]) .icon{color:rgb(var(--mdui-color-on-secondary-container))}:host([active]) .has-active-icon .active-icon{display:flex}:host([active]) .has-active-icon .icon{display:none}:host([active]) .label{color:rgb(var(--mdui-color-on-surface))}`;let s=class extends xe(ke(Se(ne))){constructor(){super(...arguments),this.isInitial=!0,this.active=!1,this.disabled=!1,this.key=we(),this.rippleRef=he(),this.hasSlotController=new pe(this,"active-icon")}get rippleElement(){return this.rippleRef.value}get rippleDisabled(){return this.disabled}get focusElement(){var e;return this.href?(e=this.renderRoot)==null?void 0:e.querySelector("._a"):this}get focusDisabled(){return this.disabled}render(){const e=L({"label-visibility-selected":this.labelVisibility==="selected","label-visibility-labeled":this.labelVisibility==="labeled","label-visibility-unlabeled":this.labelVisibility==="unlabeled",initial:this.isInitial}),i=L([{container:!0,"has-active-icon":this.activeIcon||this.hasSlotController.test("active-icon")},e]);return r`<mdui-ripple .noRipple="${!this.active||this.noRipple}" class="${e}" ${be(this.rippleRef)}></mdui-ripple>${this.href?this.renderAnchor({part:"container",className:i,content:this.renderInner()}):r`<div part="container" class="${i}">${this.renderInner()}</div>`}`}renderInner(){return r`<div part="indicator" class="indicator"><slot name="badge" part="badge" class="badge"></slot><slot name="active-icon" part="active-icon" class="active-icon">${this.activeIcon?r`<mdui-icon name="${this.activeIcon}"></mdui-icon>`:I}</slot><slot name="icon" part="icon" class="icon">${this.icon?r`<mdui-icon name="${this.icon}"></mdui-icon>`:I}</slot></div><slot part="label" class="label"></slot>`}};s.styles=[C,Be];t([l({reflect:!0})],s.prototype,"icon",void 0);t([l({reflect:!0,attribute:"active-icon"})],s.prototype,"activeIcon",void 0);t([l({reflect:!0})],s.prototype,"value",void 0);t([w()],s.prototype,"labelVisibility",void 0);t([w()],s.prototype,"isInitial",void 0);t([l({type:Boolean,reflect:!0,converter:se})],s.prototype,"active",void 0);t([w()],s.prototype,"disabled",void 0);s=t([V("mdui-navigation-bar-item")],s);const Ce=B`:host{--shape-corner:var(--mdui-shape-corner-full);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border-radius:var(--shape-corner);padding-left:.25rem;padding-right:.25rem;color:rgb(var(--mdui-color-on-error));background-color:rgb(var(--mdui-color-error));height:1rem;min-width:1rem;font-size:var(--mdui-typescale-label-small-size);font-weight:var(--mdui-typescale-label-small-weight);letter-spacing:var(--mdui-typescale-label-small-tracking);line-height:var(--mdui-typescale-label-small-line-height)}:host([variant=small]){min-width:0;padding:0;width:.375rem;height:.375rem}`;let x=class extends ne{constructor(){super(...arguments),this.variant="large"}render(){return this.variant==="small"?I:r`<slot></slot>`}};x.styles=[C,Ce];t([l({reflect:!0})],x.prototype,"variant",void 0);x=t([V("mdui-badge")],x);const Ve=":host{display:block;width:100%}",$e=class extends me{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.position="bottom",this.labelVisibility="auto",this.scrollBehavior="",this.value=""}changeHandler(a){a.target!==this.el&&(console.log("MDUI change event inside Stencil component:",a.detail),this.value=a.detail.value,this.el.dispatchEvent(new CustomEvent("nav-change",{detail:a.detail,bubbles:!0,composed:!0})))}valueChanged(a){var e;const i=(e=this.el.shadowRoot)===null||e===void 0?void 0:e.querySelector("mdui-navigation-bar");i&&i.setAttribute("value",a)}componentDidLoad(){this.valueChanged(this.value)}async setValue(a){this.value=a}render(){const{position:a,value:e,labelVisibility:i,scrollBehavior:o,scrollThreshold:c,scrollTarget:d}=this;return S(ue,{key:"6e2542dba3f97f1fafd41b51e45dce557318eaa4"},S("mdui-navigation-bar",{key:"856073a033ec3780a8ea1cfe258b713c37d423f9",class:a==="top"?"top-position":"",value:e,"label-visibility":i,"scroll-behavior":o,"scroll-threshold":c,"scroll-target":d},S("slot",{key:"04465eaa0c1d038c3476a1ff47b427d9eac23ae3"})))}get el(){return this}static get watchers(){return{value:["valueChanged"]}}static get style(){return Ve}};ce($e,[1,"ur-navigation-bar",{position:[1],labelVisibility:[1,"label-visibility"],scrollBehavior:[1,"scroll-behavior"],scrollThreshold:[2,"scroll-threshold"],value:[1537],scrollTarget:[1,"scroll-target"],setValue:[64]},[[0,"change","changeHandler"]],{value:["valueChanged"]}]);const _={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNavigationBar",tagName:"ur-navigation-bar",customElement:!0,members:[{kind:"field",name:"position",type:"string",description:"Position of the navigation bar",default:"'bottom'"},{kind:"field",name:"labelVisibility",type:"string",description:"Label visibility",default:"'auto'"},{kind:"field",name:"scrollBehavior",type:"string",description:"Scroll behavior",default:"''"},{kind:"field",name:"scrollThreshold",type:"number",description:"Scroll threshold in pixels"},{kind:"field",name:"value",type:"string",description:"Selected value",default:"''"},{kind:"field",name:"scrollTarget",type:"string",description:"Scroll target (CSS selector or DOM element)"}],events:[]}],exports:[{kind:"js",name:"UrNavigationBar",declaration:{name:"UrNavigationBar",module:"src/components/ur-navigation-bar/ur-navigation-bar.tsx"}},{kind:"custom-element-definition",name:"ur-navigation-bar",declaration:{name:"UrNavigationBar",module:"src/components/ur-navigation-bar/ur-navigation-bar.tsx"}}]}]};de({...N()||{},..._,modules:[...(N()||{}).modules||[],..._.modules]});const Ee=a=>{const{position:e="bottom",labelVisibility:i="auto",scrollBehavior:o="",value:c="home"}=a;return r`
        <div style="border: 1px solid #eee; padding: 16px; border-radius: 8px;">
            <ur-navigation-bar
                position="${e}"
                label-visibility="${i}"
                scroll-behavior="${o}"
                value="${c}"
                style="position: relative; width: 100%;"
                @change=${k=>{console.log("Navigation value changed:",k.detail.value);const E=k.target.closest("div").querySelector("#selection-display");E&&(E.textContent=k.detail.value)}}
            >
                <mdui-navigation-bar-item icon="home" value="home">Home</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="search" value="search">Search</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="favorite" value="favorites">
                    Favorites
                    <mdui-badge slot="badge">5</mdui-badge>
                </mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="person" value="profile">Profile</mdui-navigation-bar-item>
            </ur-navigation-bar>

            <div style="margin-top: 16px; color: #666;">
                <p>Current selection: <strong id="selection-display">${c}</strong></p>
                <p>To change selection, click on any navigation item.</p>
            </div>
        </div>
    `},le=a=>{const{count:e=3}=a,i=[],o=["home","search","favorite","person","settings","notifications","mail"],c=["Home","Search","Favorites","Profile","Settings","Notifications","Mail"];for(let d=0;d<Math.min(e,o.length);d++)i.push(r`
            <mdui-navigation-bar-item icon="${o[d]}" value="item-${d+1}">
                ${c[d]}
            </mdui-navigation-bar-item>
        `);return r`
        <div style="border: 1px solid #eee; padding: 16px; border-radius: 8px;">
            <h3>Navigation Bar with ${e} Items</h3>
            <p>With auto label visibility, labels ${e<=3?"are always shown":"only show for the selected item"} when there are ${e} items.</p>
            
            <ur-navigation-bar
                value="item-1"
                style="position: relative; width: 100%;"
            >
                ${i}
            </ur-navigation-bar>
        </div>
    `},Ne=()=>r`
        <div style="border: 1px solid #eee; padding: 16px; border-radius: 8px;">
            <h3>Label Visibility Options</h3>
            
            <h4>Selected</h4>
            <p>Only the selected item's label is visible.</p>
            <ur-navigation-bar
                value="item-1"
                label-visibility="selected"
                style="position: relative; width: 100%; margin-bottom: 24px;"
            >
                <mdui-navigation-bar-item icon="home" value="item-1">Home</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="search" value="item-2">Search</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="favorite" value="item-3">Favorites</mdui-navigation-bar-item>
            </ur-navigation-bar>
            
            <h4>Labeled</h4>
            <p>All labels are always visible.</p>
            <ur-navigation-bar
                value="item-1"
                label-visibility="labeled"
                style="position: relative; width: 100%; margin-bottom: 24px;"
            >
                <mdui-navigation-bar-item icon="home" value="item-1">Home</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="search" value="item-2">Search</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="favorite" value="item-3">Favorites</mdui-navigation-bar-item>
            </ur-navigation-bar>
            
            <h4>Unlabeled</h4>
            <p>No labels are visible.</p>
            <ur-navigation-bar
                value="item-1"
                label-visibility="unlabeled"
                style="position: relative; width: 100%;"
            >
                <mdui-navigation-bar-item icon="home" value="item-1">Home</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="search" value="item-2">Search</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="favorite" value="item-3">Favorites</mdui-navigation-bar-item>
            </ur-navigation-bar>
        </div>
    `,Le=()=>r`
        <div style="border: 1px solid #eee; padding: 16px; border-radius: 8px;">
            <h3>Active Icons</h3>
            <p>Different icons can be shown for active and inactive states.</p>
            
            <ur-navigation-bar
                value="item-1"
                style="position: relative; width: 100%;"
            >
                <mdui-navigation-bar-item 
                    icon="home_outlined" 
                    active-icon="home_filled" 
                    value="item-1"
                >Home</mdui-navigation-bar-item>
                
                <mdui-navigation-bar-item
                    icon="search_outlined"
                    active-icon="search"
                    value="item-2"
                >Search</mdui-navigation-bar-item>
                
                <mdui-navigation-bar-item
                    icon="favorite_outlined"
                    active-icon="favorite"
                    value="item-3"
                >Favorites</mdui-navigation-bar-item>
            </ur-navigation-bar>
        </div>
    `,_e=()=>r`
        <div style="border: 1px solid #eee; padding: 16px; border-radius: 8px;">
            <h3>Links and Badges</h3>
            
            <ur-navigation-bar
                value="item-1"
                style="position: relative; width: 100%;"
            >
                <mdui-navigation-bar-item 
                    icon="home" 
                    value="item-1"
                >
                    Home
                </mdui-navigation-bar-item>
                
                <mdui-navigation-bar-item
                    icon="link"
                    href="https://example.com"
                    target="_blank"
                    value="item-2"
                >
                    External Link
                </mdui-navigation-bar-item>
                
                <mdui-navigation-bar-item
                    icon="notifications"
                    value="item-3"
                >
                    Notifications
                    <mdui-badge slot="badge">9</mdui-badge>
                </mdui-navigation-bar-item>
                
                <mdui-navigation-bar-item
                    icon="mail"
                    value="item-4"
                >
                    Mail
                    <mdui-badge slot="badge">99+</mdui-badge>
                </mdui-navigation-bar-item>
            </ur-navigation-bar>
            
            <p style="margin-top: 16px; color: #666;">
                <strong>Note:</strong> The second item is an external link that will open in a new tab.
            </p>
        </div>
    `,Qe={title:"Urnovl/Basic/Navigation Bar",render:a=>Ee(a),argTypes:{position:{control:"select",options:["bottom","top"],description:"Position of the navigation bar"},labelVisibility:{control:"select",options:["auto","selected","labeled","unlabeled"],description:"Controls visibility of navigation item labels"},scrollBehavior:{control:"select",options:["","hide"],description:"Behavior on scroll (hide to hide when scrolling down)"},value:{control:"select",options:["home","search","favorites","profile"],description:"Value of the active navigation item"}},parameters:{docs:{description:{component:"The navigation bar facilitates easy switching between main pages on mobile devices."}}}},m={args:{position:"bottom",labelVisibility:"auto",value:"home"}},u={args:{position:"top",value:"search"}},v={args:{labelVisibility:"selected",value:"favorites"}},h={args:{scrollBehavior:"hide",value:"profile"}},p={render:()=>le({count:3})},b={render:()=>le({count:5})},g={render:()=>Ne()},f={render:()=>Le()},y={render:()=>_e()};var A,H,T;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    position: 'bottom',
    labelVisibility: 'auto',
    value: 'home'
  }
}`,...(T=(H=m.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var D,M,P;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    position: 'top',
    value: 'search'
  }
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var z,F,U;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    labelVisibility: 'selected',
    value: 'favorites'
  }
}`,...(U=(F=v.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var K,R,O;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    scrollBehavior: 'hide',
    value: 'profile'
  }
}`,...(O=(R=h.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var j,q,W;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ItemCountExample({
    count: 3
  })
}`,...(W=(q=p.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var X,Y,G;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => ItemCountExample({
    count: 5
  })
}`,...(G=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,Q,Z;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => LabelVisibilityExample()
}`,...(Z=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,ie,te;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => ActiveIconExample()
}`,...(te=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var ae,oe,re;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => LinksAndBadgesExample()
}`,...(re=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const Ze=["Default","TopPosition","SelectedLabels","HideOnScroll","ThreeItems","FiveItems","LabelVisibilityOptions","ActiveIcons","LinksAndBadges"];export{f as ActiveIcons,m as Default,b as FiveItems,h as HideOnScroll,g as LabelVisibilityOptions,y as LinksAndBadges,v as SelectedLabels,p as ThreeItems,u as TopPosition,Ze as __namedExportsOrder,Qe as default};
