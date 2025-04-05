import{k as x}from"./entry-preview-BcHUnPw7.js";import"./ur-list-BtEPwSfP.js";import"./ur-list-item-OhVirBOP.js";import"./ur-tooltip-DuFJ5Hb5.js";import"./ur-button-icon-DqyzIZEz.js";import"./ur-logo-DDg8Fqu8.js";import"./ur-button-DD2i9WoV.js";import"./ur-menu-profile-SM_6b1-D.js";import{s as H,g as p}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as $,H as E,c as o,h as e,a as S}from"./index-DddAbXmr.js";import"./ur-avatar-D_HQUxCA.js";import"./index-DrFu-skq.js";import"./class-map-CDMw4-pN.js";import"./query-assigned-elements-BInJlOXT.js";import"./get-7S0C3xNv.js";import"./anchor--mD29Q5y.js";import"./if-defined-CL77Dv0Z.js";import"./template-yncBVCyc.js";import"./index-BriiHZyV.js";import"./index-CIbCn1or.js";import"./watch-ByvFYHv8.js";import"./button-base-CWeRpzKK.js";import"./form-B80GgqR6.js";import"./index-DsS9OQyQ.js";import"./index-B-mBYDoO.js";const q=":host{display:block;width:100%;--ur-color-outline:var(--mdui-color-outline)}:host .autosave-item{display:flex;justify-content:space-between;margin-left:-12px;position:relative}:host .autosaves-title{padding:2px 0;font-weight:600;font-size:10px;margin-right:8px;font-weight:600;padding:12px;color:rgb(var(--ur-color-outline))}:host .drawer{width:100%;box-sizing:border-box}:host .delete-button{visibility:hidden;position:absolute;right:0;top:0}:host .confirmation-buttons{display:flex;gap:4px}:host .confirmation-content{display:flex;align-items:center;gap:4px}:host .autosave-item:hover .delete-button{visibility:visible}:host .confirmation-title{flex:1}.autosaves{list-style:none;margin:0;padding:0;width:100%}.autosave-content{display:flex;align-items:center;justify-content:space-between}:host .content-info{gap:4px;display:flex;flex-direction:column}.info{flex:1;cursor:pointer}.confirmation{cursor:default;width:100%}.delete-icon-wrapper{margin-left:0.75rem;cursor:pointer;display:flex;align-items:center;justify-content:center}:host .title{font-size:9px;line-height:12px;padding-top:6px}:host .subtitle{font-size:12px;line-height:22px}:host .chapter{font-size:9px;font-weight:600;opacity:0.5;line-height:12px;padding-bottom:6px}.buttons{display:flex;gap:0.5rem;margin-top:0.5rem}",j=class extends E{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.autosaveOpen=o(this,"autosaveOpen",7),this.autosaveDeleteRequest=o(this,"autosaveDeleteRequest",7),this.autosaveDeleteConfirm=o(this,"autosaveDeleteConfirm",7),this.autosaveDeleteCancel=o(this,"autosaveDeleteCancel",7),this.forceRender=0,this.autosaves=[],this.emptyMessage="You don't have anything saved in your drawer, yet!",this.chapterText="Chapter",this.yesText="Yes",this.noText="No",this.autosavesTitle="Autosaves",this.deleteConfirmMessage="Delete chapter?"}autosavesChanged(t){console.log("Autosaves changed in web component:",t),this.forceRender++}handleOpenAutosave(t,n){t.stopPropagation(),this.autosaveOpen.emit(n)}handleDeleteRequest(t,n){t.stopPropagation(),this.autosaves=this.autosaves.map(i=>i.id&&i.id===n.id||i._id&&i._id===n._id?Object.assign(Object.assign({},i),{showOptions:!0}):i),this.autosaveDeleteRequest.emit(n)}handleDeleteConfirm(t,n){t.stopPropagation(),this.autosaveDeleteConfirm.emit(n)}handleDeleteCancel(t,n){t.stopPropagation(),this.autosaves=this.autosaves.map(i=>i.id&&i.id===n.id||i._id&&i._id===n._id?Object.assign(Object.assign({},i),{showOptions:!1}):i),this.autosaveDeleteCancel.emit(n)}renderAutosaveContent(t){var n;const i=((n=t.novl)===null||n===void 0?void 0:n.title)||"Untitled Story",s=t.title||"Untitled Chapter",a=t.sequence?`${this.chapterText} ${t.sequence}`:"";return e("div",{class:"autosave-content"},e("div",{class:"content-info"},e("div",{class:"title"},i),e("div",{class:"subtitle"},s),a&&e("div",{class:"chapter"},a)))}renderDeleteConfirmation(t){return e("div",{class:"confirmation-content"},e("div",{class:"confirmation-title"},this.deleteConfirmMessage),e("div",{class:"confirmation-buttons"},e("ur-button-icon",{icon:"check",variant:"standard",buttonHeight:"32px",buttonWidth:"32px",onClick:n=>this.handleDeleteConfirm(n,t)}),e("ur-button-icon",{icon:"close",variant:"standard",buttonHeight:"32px",buttonWidth:"32px",onClick:n=>this.handleDeleteCancel(n,t)})))}render(){return e(S,{key:"1a28e6cef9382e7035c3f04e597fe40b74a869a4"},e("div",{key:"789d0210a443a38d59fa6231aed94ffebe836042",class:"drawer"},this.autosaves&&this.autosaves.length>0&&e("div",{key:"592e03797d0d0fe41fdee19ee1c7229a3d7f6a1f",class:"autosaves-container"},e("div",{key:"569dc4fc04d4b3ae314dc9508a765ecf20858480",class:"autosaves-title"},this.autosavesTitle),e("ur-list",{key:"ec2112100b43043dc43f083f62353d5cddad230a"},this.autosaves.map((t,n)=>t.showOptions?e("ur-list-item",{key:t.id||t._id||n,nonclickable:!0,class:"confirmation-item"},this.renderDeleteConfirmation(t)):e("div",{class:"autosave-item"},e("ur-list-item",{key:t.id||t._id||n,onClick:i=>this.handleOpenAutosave(i,t)},this.renderAutosaveContent(t)),e("ur-button-icon",{class:"delete-button",icon:"delete",variant:"standard",buttonHeight:"40px",buttonWidth:"40px",onClick:i=>this.handleDeleteRequest(i,t)})))))))}static get watchers(){return{autosaves:["autosavesChanged"]}}static get style(){return q}};$(j,[1,"ur-autosave-drawer",{autosaves:[1040],emptyMessage:[1,"empty-message"],chapterText:[1,"chapter-text"],yesText:[1,"yes-text"],noText:[1,"no-text"],autosavesTitle:[1,"autosaves-title"],deleteConfirmMessage:[1,"delete-confirm-message"],forceRender:[32]},void 0,{autosaves:["autosavesChanged"]}]);const v={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrAutosaveDrawer",tagName:"ur-autosave-drawer",customElement:!0,members:[{kind:"field",name:"autosaves",type:"unknown",description:"Array of autosave items to display in the drawer",default:"[]"},{kind:"field",name:"emptyMessage",type:"string",description:"Empty drawer message",default:`"You don't have anything saved in your drawer, yet!"`},{kind:"field",name:"chapterText",type:"string",description:"Text for the chapter label",default:"'Chapter'"},{kind:"field",name:"yesText",type:"string",description:"Text for the yes button",default:"'Yes'"},{kind:"field",name:"noText",type:"string",description:"Text for the no button",default:"'No'"},{kind:"field",name:"autosavesTitle",type:"string",description:"Text for the autosaves title",default:"'Autosaves'"},{kind:"field",name:"deleteConfirmMessage",type:"string",description:"Text for delete confirmation",default:"'Delete chapter?'"}],events:[{kind:"event",name:"autosaveOpen",description:"Event emitted when an autosave is selected to open"},{kind:"event",name:"autosaveDeleteRequest",description:"Event emitted when delete icon is clicked for an autosave"},{kind:"event",name:"autosaveDeleteConfirm",description:'Event emitted when delete confirmation "Yes" button is clicked'},{kind:"event",name:"autosaveDeleteCancel",description:'Event emitted when delete confirmation "No" button is clicked'}]}],exports:[{kind:"js",name:"UrAutosaveDrawer",declaration:{name:"UrAutosaveDrawer",module:"src/components/ur-autosave-drawer/ur-autosave-drawer.tsx"}},{kind:"custom-element-definition",name:"ur-autosave-drawer",declaration:{name:"UrAutosaveDrawer",module:"src/components/ur-autosave-drawer/ur-autosave-drawer.tsx"}}]}]};H({...p()||{},...v,modules:[...(p()||{}).modules||[],...v.modules]});const z=`:host {
    height: 100%;
    display: flex;
    flex-direction: column;
    width: var(--collapsed-width, 56px);

    --ur-color-background: var(--mdui-color-background);
    --ur-color-primary: var(--mdui-color-primary);
    --ur-color-on-primary: var(--mdui-color-on-primary);
    --ur-color-on-background: var(--mdui-color-on-background);
    --ur-color-outline: var(--mdui-color-outline);
    --ur-color-outline-variant: var(--mdui-color-outline-variant);
    --ur-color-on-surface: var(--mdui-color-on-surface);
    --ur-color-on-secondary: var(--mdui-color-on-secondary);
    --ur-color-on-surface-variant: var(--mdui-color-on-surface-variant);
    --ur-state-layers-outline-variant-opacity-16: var(--mdui-state-layers-outline-variant-opacity-16);

    background: rgb(var(--ur-color-background));
    color: rgb(var(--ur-color-on-background));
    border-right: 1px solid rgb(var(--ur-color-outline-variant));

    --ur-color-error: var(--mdui-color-error);

    --collapsed-width: 56px;
    --expanded-width: 220px;

    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgb(var(--ur-color-outline-variant));
        border-radius: 3px;
    }
}

:host .left-menu {
    height: auto; /* Allow height to expand with content */
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
        width: 6px; /* For Chrome, Safari, and Opera */
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgb(var(--ur-color-outline-variant));
        border-radius: 3px;
    }
}

:host .flex {
    flex: 1 1 auto;
}

:host .welcome {
    padding: 0 8px;
}

:host .toggle-button {
    border-radius: 0;
}

:host .toggle-button .icon {
    font-size: 22px;
    color: rgb(var(--ur-color-on-background));
}

:host(.expanded) {
    width: var(--expanded-width, 220px);
}

:host .premium {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
}

:host .toggle-button {
    color: rgb(var(--ur-color-on-background));
    border: none;
    width: 56px;
    height: 48px;
    padding: 10px;
    cursor: pointer;
}

:host .nav {
    display: flex;
    flex-direction: column;
}

:host .menu.logged-out {
    padding: 16px 0;
    height: 40px;
}

:host .menu-button {
    width: 100%;
}

:host .menu-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

:host .menu.loggedin {
    width: 100%;
    display: flex;
    flex-direction: column;
}

:host .menu.loggedin.notexpanded .profile-list {
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

:host .menu.loggedin.expanded {
    width: initial;
    padding: 0 12px;
}

:host .menu.loggedin.notexpanded {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

:host .navigation-button-icon {
    height: 40px;
    width: 40px;
}

:host .nav-item {
    margin: 10px 0;
    text-decoration: none;
}

:host .welcome .menu-button {
    text-align: center;
    font-size: 22px;
}

:host .icon {
    font-size: 8px;
}

:host .menu-footer {
    padding: 12px;
    margin-top: auto;
    border-top: 1px solid rgb(var(--ur-color-outline-variant));
}

:host .menu-footer .link-hld {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 8px 0 0 0;
}

:host .menu-footer .link {
    text-decoration: none;
    padding: 2px 0;
    font-weight: 600;
    font-size: 10px;
    margin-right: 8px;
    font-weight: 600;
    cursor: pointer;
    color: rgb(var(--ur-color-outline));
}

:host .menu-footer .link:hover {
    text-decoration: underline; /* Underline on hover */
}

:host .menu-footer .est {
    display: block;
    margin: 12px 0 0 0;
    font-size: 10px;
}

:host .menu-footer.collapsed {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

:host .social-links {
    padding: 12px 0 4px 0;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    align-items: center;
}

:host .social {
    width: 20px;
    height: 20px;
    opacity: 0.5;
    transform: scale(0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: rgb(var(--ur-color-on-background));
    cursor: pointer;
}

:host .social.x {
    color: rgb(var(--ur-color-background));
}

:host .vertical-logo a {
    text-decoration: none; /* Removes underline */
    color: inherit;        /* Inherits color from parent */
    display: inline-block; /* Ensures proper alignment */
    cursor: pointer;
}

:host .horizontal-logo a {
    text-decoration: none; /* Removes underline */
    color: inherit;        /* Inherits color from parent */
    display: inline-block; /* Ensures proper alignment */
    cursor: pointer;
}

:host .social:hover {
    opacity: 1;
}

:host .social.x {
    border-radius: 4px;
    background-color: rgba(var(--ur-color-on-background), 1);;
}

:host .social-links .social.discord {
    width: 24px;
    height: 24px;
}

:host .social-links .social.x .icon {
    color: rgb(var(--ur-color-background));
}

:host .social-links .social .icon {
    color: currentColor;
}

:host .feedback .icon {
    margin-top: 2px;
    font-size: 20px;
}

:host ur-menu-profile.active {
    background-color: rgba(var(--ur-color-on-surface), .07);
    box-shadow: inset 4px 0 0 rgb(var(--ur-color-primary));
}

:host .menu-navigation {
    margin-top: 8px;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid rgb(var(--ur-color-outline-variant));
    border-bottom: 1px solid rgb(var(--ur-color-outline-variant));
}

:host .custom-content {
    display: flex;
    align-items: center;
    gap: 10px;
}

:host .notifications-holder {
    border-top: 1px solid rgb(var(--ur-color-outline-variant));
}

:host .toggle-button {
    width: 56px;
    height: 40px;
    margin: 0;
    padding: 0;
    border-radius: 0;
}

:host .custom-content__info {
    display: flex;
    flex-direction: column;
}

:host .vertical-logo {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}

:host .notification-badge {
    background-color: rgb(var(--ur-color-error));
    color: rgb(var(--ur-color-background));
    border-radius: 12px;
    padding: 2px;
    font-size: 12px;
    min-width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 8px; /* Adjust based on your layout needs */
}

:host .notification-button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

:host .notifications-holder {
    display: flex;
    align-items: center;
    justify-content: center;
}

:host .notification-badge-collapsed {
    background-color: rgb(var(--ur-color-error));
    border-radius: 12px;
    padding: 2px;
    font-size: 11px;
    min-width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2px;
}

:host .notification-badge {
    color: rgb(var(--ur-color-background));
    pointer-events: none;
}

:host .notification-badge-collapsed {
    pointer-events: none;
    color: rgb(var(--ur-color-background));
}

:host .notification-badge:empty {
    display: none;
}`,L=class extends E{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.notificationCenterClick=o(this,"notificationCenterClick",7),this.contactUsClick=o(this,"contactUsClick",7),this.premiumClick=o(this,"premiumClick",7),this.toggleExpand=o(this,"toggleExpand",7),this.signUpClick=o(this,"signUpClick",7),this.viewProfileClick=o(this,"viewProfileClick",7),this.homeClick=o(this,"homeClick",7),this.storiesClick=o(this,"storiesClick",7),this.pagesClick=o(this,"pagesClick",7),this.competitionsClick=o(this,"competitionsClick",7),this.termsClick=o(this,"termsClick",7),this.rulesClick=o(this,"rulesClick",7),this.privacyClick=o(this,"privacyClick",7),this.paymentClick=o(this,"paymentClick",7),this.acceptableUseClick=o(this,"acceptableUseClick",7),this.partnershipClick=o(this,"partnershipClick",7),this.menuToggleClick=o(this,"menuToggleClick",7),this.whatsNewClick=o(this,"whatsNewClick",7),this.faqsClick=o(this,"faqsClick",7),this.facebookClick=o(this,"facebookClick",7),this.xClick=o(this,"xClick",7),this.discordClick=o(this,"discordClick",7),this.expanded=!1,this.opened=!1,this.badgeCount=10,this.termsText="Terms of Service",this.rulesText="House Rules",this.privacyText="Privacy Policy",this.paymentText="Payment Terms",this.acceptableUseText="Quills Acceptable Use Policy",this.partnershipText="Partnership Program",this.homeText="Home",this.storiesText="Stories",this.pagesText="Pages",this.competitionsText="Competitions",this.notificationText="Notifications",this.facebookText="Our Facebook",this.xText="Our X",this.discordText="Our Discord",this.contactUsText="Contact us",this.signUpText="Sign Up/In",this.premiumText="Go Premium",this.whatsNewText="What's new",this.faqsText="FAQs",this.updateCounter=0}watchOpenedHandler(t){this.expanded=t,this.toggleExpand.emit(this.expanded)}open(){this.expanded||(this.expanded=!0,this.opened=!0,this.menuToggleClick.emit(!0),this.toggleExpand.emit(!0))}close(){this.expanded&&(this.expanded=!1,this.opened=!1,this.menuToggleClick.emit(!1),this.toggleExpand.emit(!1))}toggle(){this.expanded?this.close():this.open()}reset(){this.expanded=this.opened,this.toggleExpand.emit(this.expanded)}watchUserNameHandler(t,n){t!==n&&this.triggerUpdate()}watchUserRoleHandler(t,n){t!==n&&this.triggerUpdate()}watchUserAvatarHandler(t,n){t!==n&&this.triggerUpdate()}watchBadgeCountHandler(t,n){t!==n&&this.triggerUpdate()}watchCurrentRouteHandler(t,n){t!==n&&this.triggerUpdate()}watchNotificationCenterOpenedHandler(t,n){t!==n&&this.triggerUpdate()}triggerUpdate(){this.updateCounter++}componentDidLoad(){this.expanded=this.opened,this.mutationObserver=new MutationObserver(t=>{t.forEach(n=>{if(n.type==="attributes"&&n.attributeName==="class"){const s=n.target.classList.contains("expanded");this.expanded!==s&&(this.expanded=s,this.toggleExpand.emit(this.expanded))}})}),this.mutationObserver.observe(this.el.shadowRoot.host,{attributes:!0,attributeFilter:["class"]})}handleToggleClick(){this.toggle()}disconnectedCallback(){this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect()}handleNotificationClick(){this.notificationCenterClick.emit()}renderNavigation(){return e("div",{class:"menu-navigation"},e("ur-list",null,e("ur-list-item",{active:this.currentRoute==="/",icon:"home--outlined",content:this.homeText,onClick:()=>this.homeClick.emit()}),e("ur-list-item",{active:this.currentRoute==="/stories",icon:"import_contacts--outlined",content:this.storiesText,onClick:()=>this.storiesClick.emit()}),e("ur-list-item",{active:this.currentRoute==="/pages",icon:"hub--outlined",content:this.pagesText,onClick:()=>this.pagesClick.emit()})))}renderNotifications(){return e("div",{class:"notifications-holder"},e("ur-list-item",{active:this.notificationCenterOpened,icon:"notifications--outlined",content:this.notificationText,onClick:()=>this.handleNotificationClick()},e("div",{slot:"notification-badge",class:"notification-badge"},this.badgeCount>0&&this.badgeCount)))}renderNotificationsCollapsed(){return e("div",{class:"notifications-holder"},e("ur-tooltip",{content:this.notificationText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("div",{class:"notification-button-wrapper"},e("ur-button-icon",{"border-radius":"0",class:"navigation-button-icon","button-width":"57px",active:this.notificationCenterOpened,icon:"notifications--outlined",title:"Notifications",onClick:()=>this.handleNotificationClick()}),this.badgeCount>0&&e("div",{class:"notification-badge-collapsed"},this.badgeCount))))}renderCollapsedNavigation(){return e("div",{class:"menu-navigation"},e("div",{class:"menu-items"},e("ur-tooltip",{content:this.homeText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("ur-button-icon",{active:this.currentRoute==="/","border-radius":"0",class:"navigation-button-icon","button-width":"57px",icon:"home--outlined",title:"Home",onClick:()=>this.homeClick.emit()})),e("ur-tooltip",{content:this.storiesText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("ur-button-icon",{active:this.currentRoute==="/stories","border-radius":"0",class:"navigation-button-icon","button-width":"57px",icon:"import_contacts--outlined",title:"Stories",onClick:()=>this.storiesClick.emit()})),e("ur-tooltip",{content:this.pagesText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("ur-button-icon",{active:this.currentRoute==="/pages","border-radius":"0",class:"navigation-button-icon","button-width":"57px",icon:"hub--outlined",title:"Pages",onClick:()=>this.pagesClick.emit()}))))}renderCollapsedFooter(){return e("footer",{class:"menu-footer collapsed"},e("div",{class:"social-links"},e("ur-tooltip",{content:this.facebookText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("a",{target:"_blank",rel:"noopener noreferrer",class:"social",onClick:()=>this.facebookClick.emit()},e("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},e("path",{d:"M4.21705 8.5216H5.97091V15.7419C5.97091 15.8845 6.08642 16 6.22897 16H9.2027C9.34526 16 9.46077 15.8845 9.46077 15.7419V8.55561H11.477C11.6081 8.55561 11.7184 8.45724 11.7333 8.32702L12.0396 5.66885C12.048 5.59572 12.0248 5.52248 11.9759 5.46761C11.9269 5.4127 11.8568 5.38126 11.7832 5.38126H9.46087V3.71499C9.46087 3.2127 9.73132 2.95799 10.2648 2.95799C10.3408 2.95799 11.7832 2.95799 11.7832 2.95799C11.9258 2.95799 12.0413 2.84243 12.0413 2.69992V0.259974C12.0413 0.117419 11.9258 0.00190968 11.7832 0.00190968H9.6906C9.67584 0.0011871 9.64306 0 9.59475 0C9.23166 0 7.96956 0.0712774 6.97261 0.988439C5.86799 2.0048 6.02154 3.22173 6.05824 3.43272V5.38121H4.21705C4.07449 5.38121 3.95898 5.49672 3.95898 5.63928V8.26348C3.95898 8.40604 4.07449 8.5216 4.21705 8.5216Z",fill:"currentColor"})))),e("ur-tooltip",{content:this.xText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("a",{target:"_blank",rel:"noopener noreferrer",class:"social x",onClick:()=>this.xClick.emit()},e("svg",{viewBox:"0 0 512 509.64",xmlns:"http://www.w3.org/2000/svg"},e("path",{d:"M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z",fill:"currentColor"})))),e("ur-tooltip",{content:this.discordText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("a",{target:"_blank",rel:"noopener noreferrer",class:"social discord",onClick:()=>this.discordClick.emit()},e("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e("path",{d:"M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z",fill:"currentColor"})))),e("ur-tooltip",{content:this.contactUsText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("a",{class:"social contact-us",onClick:()=>this.contactUsClick.emit()},e("mdui-icon",{name:"feedback"})))),e("div",{class:"vertical-logo"},e("ur-tooltip",{content:"Home",placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("a",{"aria-label":"Navigate to homepage",onClick:()=>this.homeClick.emit()},e("ur-logo",{width:"55",height:"14",opacity:.5,rotation:-90})))))}renderLoggedOutExpanded(){return e("div",{class:"menu logged-out"},e("div",{class:"welcome"},e("ur-button",{class:"menu-button",icon:"login",variant:"filled","full-width":!0,onClick:()=>this.signUpClick.emit()},this.signUpText)))}renderLoggedOutCollapsed(){return e("div",{class:"menu logged-out"},e("div",{class:"welcome"},e("ur-tooltip",{content:this.signUpText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("ur-button-icon",{class:"menu-button-icon",icon:"login",variant:"filled",onClick:()=>this.signUpClick.emit()}))))}renderPremiumExpanded(){return e("div",{class:"premium expanded"},e("ur-button",{class:"menu-button",icon:"workspace_premium--outlined",variant:"filled","full-width":!0,onClick:()=>this.premiumClick.emit()},this.premiumText))}renderPremiumCollapsed(){return e("div",{class:"premium collapsed"},e("ur-tooltip",{content:this.premiumText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("ur-button-icon",{class:"navigation-button-icon",icon:"workspace_premium--outlined",title:"Premium",variant:"filled",onClick:()=>this.premiumClick.emit()})))}renderAutosaveDrawer(){return e("slot",{name:"autosave-drawer"})}renderFooter(){return e("footer",{class:"menu-footer"},e("div",{class:"horizontal-logo"},e("a",{"aria-label":"Navigate to homepage",onClick:()=>this.homeClick.emit()},e("ur-logo",{width:"55",height:"14",opacity:.5,rotation:0}))),e("div",{class:"link-hld"},e("a",{class:"link",style:{display:"block"},onClick:()=>this.termsClick.emit()},this.termsText),e("a",{class:"link",style:{display:"block"},onClick:()=>this.rulesClick.emit()},this.rulesText),e("a",{class:"link",style:{display:"block"},onClick:()=>this.whatsNewClick.emit()},this.whatsNewText),e("a",{class:"link",style:{display:"block"},onClick:()=>this.faqsClick.emit()},this.faqsText),e("a",{class:"link",style:{display:"block"},onClick:()=>this.privacyClick.emit()},this.privacyText),e("a",{class:"link",style:{display:"block"},onClick:()=>this.paymentClick.emit()},this.paymentText),e("a",{class:"link",style:{display:"block"},onClick:()=>this.acceptableUseClick.emit()},this.acceptableUseText),e("a",{class:"link",style:{display:"block"},onClick:()=>this.partnershipClick.emit()},this.partnershipText)),e("span",{class:"est"},"© ",new Date().getFullYear()," Urnovl.co"))}render(){var t,n;return e(S,{key:"accd8829fccaebde893fcdf25823d77f963f323f",class:`left-host-menu ${this.expanded?"expanded":"collapsed"}`,style:{minHeight:`${this.parentHeight}px`}},this.loggedIn&&e("ur-menu-profile",{key:"614715eecd833ba206a0f20bc8ba91c23f12bd0a",part:"menu-profile","user-avatar":this.userAvatar,"user-name":this.userName,"user-role":this.userRole,"on-click":()=>this.viewProfileClick.emit(),class:`${this.expanded?"expanded":"collapsed"} ${!((t=this.currentRoute)===null||t===void 0)&&t.endsWith("/profile")||!((n=this.currentRoute)===null||n===void 0)&&n.endsWith("/profile/")?"active":""}`}),!this.loggedIn&&this.expanded&&this.renderLoggedOutExpanded(),!this.loggedIn&&!this.expanded&&this.renderLoggedOutCollapsed(),this.expanded&&this.renderNavigation(),!this.expanded&&this.renderCollapsedNavigation(),e("div",{key:"ccf33ebaeb5944fd74dc54897b9f52848eeef60a",class:"flex"}),this.loggedIn&&!this.expanded&&this.renderNotificationsCollapsed(),this.loggedIn&&this.expanded&&this.renderAutosaveDrawer(),this.loggedIn&&this.expanded&&this.renderNotifications(),this.expanded?this.renderFooter():this.renderCollapsedFooter())}get el(){return this}static get watchers(){return{opened:["watchOpenedHandler"],userName:["watchUserNameHandler"],userRole:["watchUserRoleHandler"],userAvatar:["watchUserAvatarHandler"],badgeCount:["watchBadgeCountHandler"],currentRoute:["watchCurrentRouteHandler"],notificationCenterOpened:["watchNotificationCenterOpenedHandler"]}}static get style(){return z}};$(L,[1,"ur-main-menu",{opened:[4],loggedIn:[4,"logged-in"],userName:[1,"user-name"],userRole:[1,"user-role"],userAvatar:[1,"user-avatar"],badgeCount:[2,"badge-count"],termsText:[1,"terms-text"],rulesText:[1,"rules-text"],privacyText:[1,"privacy-text"],paymentText:[1,"payment-text"],acceptableUseText:[1,"acceptable-use-text"],partnershipText:[1,"partnership-text"],homeText:[1,"home-text"],storiesText:[1,"stories-text"],pagesText:[1,"pages-text"],competitionsText:[1,"competitions-text"],notificationText:[1,"notification-text"],facebookText:[1,"facebook-text"],xText:[1,"x-text"],discordText:[1,"discord-text"],contactUsText:[1,"contact-us-text"],signUpText:[1,"sign-up-text"],premiumText:[1,"premium-text"],whatsNewText:[1,"whats-new-text"],faqsText:[1,"faqs-text"],currentRoute:[1,"current-route"],notificationCenterOpened:[4,"notification-center-opened"],expanded:[32],parentHeight:[32],updateCounter:[32]},void 0,{opened:["watchOpenedHandler"],userName:["watchUserNameHandler"],userRole:["watchUserRoleHandler"],userAvatar:["watchUserAvatarHandler"],badgeCount:["watchBadgeCountHandler"],currentRoute:["watchCurrentRouteHandler"],notificationCenterOpened:["watchNotificationCenterOpenedHandler"]}]);const k={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrMainMenu",tagName:"ur-main-menu",customElement:!0,members:[{kind:"field",name:"opened",type:"boolean",description:"",default:"false"},{kind:"field",name:"loggedIn",type:"boolean",description:""},{kind:"field",name:"userName",type:"string",description:""},{kind:"field",name:"userRole",type:"string",description:""},{kind:"field",name:"userAvatar",type:"string",description:""},{kind:"field",name:"badgeCount",type:"number",description:"",default:"10"},{kind:"field",name:"termsText",type:"string",description:"",default:"'Terms of Service'"},{kind:"field",name:"rulesText",type:"string",description:"",default:"'House Rules'"},{kind:"field",name:"privacyText",type:"string",description:"",default:"'Privacy Policy'"},{kind:"field",name:"paymentText",type:"string",description:"",default:"'Payment Terms'"},{kind:"field",name:"acceptableUseText",type:"string",description:"",default:"'Quills Acceptable Use Policy'"},{kind:"field",name:"partnershipText",type:"string",description:"",default:"'Partnership Program'"},{kind:"field",name:"homeText",type:"string",description:"",default:"'Home'"},{kind:"field",name:"storiesText",type:"string",description:"",default:"'Stories'"},{kind:"field",name:"pagesText",type:"string",description:"",default:"'Pages'"},{kind:"field",name:"competitionsText",type:"string",description:"",default:"'Competitions'"},{kind:"field",name:"notificationText",type:"string",description:"",default:"'Notifications'"},{kind:"field",name:"facebookText",type:"string",description:"",default:"'Our Facebook'"},{kind:"field",name:"xText",type:"string",description:"",default:"'Our X'"},{kind:"field",name:"discordText",type:"string",description:"",default:"'Our Discord'"},{kind:"field",name:"contactUsText",type:"string",description:"",default:"'Contact us'"},{kind:"field",name:"signUpText",type:"string",description:"",default:"'Sign Up/In'"},{kind:"field",name:"premiumText",type:"string",description:"",default:"'Go Premium'"},{kind:"field",name:"whatsNewText",type:"string",description:"",default:`"What's new"`},{kind:"field",name:"faqsText",type:"string",description:"",default:"'FAQs'"},{kind:"field",name:"currentRoute",type:"string",description:""},{kind:"field",name:"notificationCenterOpened",type:"boolean",description:""}],events:[{kind:"event",name:"notificationCenterClick",description:""},{kind:"event",name:"contactUsClick",description:""},{kind:"event",name:"premiumClick",description:""},{kind:"event",name:"toggleExpand",description:""},{kind:"event",name:"signUpClick",description:""},{kind:"event",name:"viewProfileClick",description:""},{kind:"event",name:"homeClick",description:""},{kind:"event",name:"storiesClick",description:""},{kind:"event",name:"pagesClick",description:""},{kind:"event",name:"competitionsClick",description:""},{kind:"event",name:"termsClick",description:""},{kind:"event",name:"rulesClick",description:""},{kind:"event",name:"privacyClick",description:""},{kind:"event",name:"paymentClick",description:""},{kind:"event",name:"acceptableUseClick",description:""},{kind:"event",name:"partnershipClick",description:""},{kind:"event",name:"menuToggleClick",description:""},{kind:"event",name:"whatsNewClick",description:""},{kind:"event",name:"faqsClick",description:""},{kind:"event",name:"facebookClick",description:""},{kind:"event",name:"xClick",description:""},{kind:"event",name:"discordClick",description:""}]}],exports:[{kind:"js",name:"UrMainMenu",declaration:{name:"UrMainMenu",module:"src/components/ur-main-menu/ur-main-menu.tsx"}},{kind:"custom-element-definition",name:"ur-main-menu",declaration:{name:"UrMainMenu",module:"src/components/ur-main-menu/ur-main-menu.tsx"}}]}]};H({...p()||{},...k,modules:[...(p()||{}).modules||[],...k.modules]});const B=t=>{let n=t.opened,i=t.badgeCount||0;const s=r=>{const m=r.querySelector("ur-main-menu"),g=r.querySelector(".toggle-button"),f=r.querySelector(".badge-count");m&&(m.opened=n,m.badgeCount=i),g&&(g.textContent=n?"Close Menu":"Open Menu"),f&&(f.textContent=`Current Badge Count: ${i}`)},a=r=>{n=!n,s(r.target.closest(".menu-controls-wrapper"))},_=r=>{i+=1,s(r.target.closest(".menu-controls-wrapper"))},I=r=>{i=Math.max(0,i-1),s(r.target.closest(".menu-controls-wrapper"))},P=r=>{n=!n,s(r.target.parentElement),console.log("Internal menu button clicked. New state:",n)},h=`
        padding: 8px 16px;
        margin: 0 4px;
        background-color: #4a5568;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    `;return x`
        <div class="menu-controls-wrapper" style="padding: 20px;">
            <div style="margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                <!-- External Toggle Button -->
                <button @click=${a} class="toggle-button" style=${h}>${n?"Close Menu":"Open Menu"}</button>

                <button @click=${I} style=${h}>-1 Badge</button>

                <button @click=${_} style=${h}>+1 Badge</button>

                <span class="badge-count" style="margin-left: 12px;"> Current Badge Count: ${i} </span>
            </div>

            <!-- Menu Component -->
            <ur-main-menu
                #mainMenu
                .opened=${n}
                .loggedIn=${t.loggedIn}
                .userName=${t.userName}
                .userAvatar=${t.userAvatar}
                .userRole=${t.userRole}
                .badgeCount=${i}
                @menuToggleClick=${P}
            >
                <ur-autosave-drawer
                    slot="autosave-drawer"
                    .autosaves=${t.autosaves}
                    empty-message=${t.emptyMessage}
                    chapter-text=${t.chapterText}
                    yes-text=${t.yesText}
                    no-text=${t.noText}
                    delete-confirm-message=${t.deleteConfirmMessage}
                    @autosaveOpen=${r=>console.log("Open autosave:",r.detail)}
                    @autosaveDeleteRequest=${r=>console.log("Delete request:",r.detail)}
                    @autosaveDeleteConfirm=${r=>console.log("Delete confirm:",r.detail)}
                    @autosaveDeleteCancel=${r=>console.log("Delete cancel:",r.detail)}
                ></ur-autosave-drawer>
                ${t.loggedIn?x`
                          <ur-menu-profile
                              class=${n?"expanded":"collapsed"}
                              .userAvatar=${t.userAvatar}
                              .userName=${t.userName}
                              .userRole=${t.userRole}
                          ></ur-menu-profile>
                      `:""}
            </ur-main-menu>
        </div>
    `},ge={title:"urnovl/Business/Main Menu",render:t=>B(t),argTypes:{opened:{control:"boolean",description:"Determines whether the menu is expanded (open) or collapsed (closed)"},loggedIn:{control:"boolean",description:"Determines if the user is logged in"},userName:{control:"text",description:"Name of the logged-in user"},userRole:{control:"text",description:"Role of the logged-in user"},userAvatar:{control:"text",description:"URL of the user avatar"},badgeCount:{control:"number",description:"Number of notifications to display in the badge"},autosaves:{control:"array",description:"Array of autosaves to display in the drawer"},emptyMessage:{control:"text",description:"Message to display when the drawer is empty"},chapterText:{control:"text",description:"Text for the chapter label"},yesText:{control:"text",description:"Text for the yes button"},noText:{control:"text",description:"Text for the no button"},deleteConfirmMessage:{control:"text",description:"Text for the delete confirmation message"}},parameters:{actions:{handles:["menuToggleClick"]}}},l={args:{opened:!1,loggedIn:!1,userName:"Guest",userRole:"",userAvatar:"",badgeCount:0}},c={args:{opened:!0,loggedIn:!1,userName:"Guest",userRole:"",userAvatar:"",badgeCount:0}},d={args:{opened:!1,loggedIn:!0,userName:"Tasos Tsipos",userRole:"Author & Reader",userAvatar:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",badgeCount:5}},u={args:{opened:!0,loggedIn:!0,userName:"Tasos Tsipidopoulakoglou",userRole:"Author & Reader",userAvatar:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",badgeCount:10,autosaves:[{id:1,novl:{title:"My First Novel"},title:"The random chapter title",sequence:1,showOptions:!1},{id:2,novl:{title:"My Second Novel"},title:"Lone wolf",sequence:2,showOptions:!1}],emptyMessage:"You don't have anything saved in your drawer, yet!",chapterText:"Chapter",yesText:"Yes",noText:"No",deleteConfirmMessage:"Delete chapter?"}};var b,C,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    opened: false,
    loggedIn: false,
    userName: 'Guest',
    userRole: '',
    userAvatar: '',
    badgeCount: 0
  }
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var w,T,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    opened: true,
    loggedIn: false,
    userName: 'Guest',
    userRole: '',
    userAvatar: '',
    badgeCount: 0
  }
}`,...(N=(T=c.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var U,O,R;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    opened: false,
    loggedIn: true,
    userName: 'Tasos Tsipos',
    userRole: 'Author & Reader',
    userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
    badgeCount: 5
  }
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var M,A,D;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    opened: true,
    loggedIn: true,
    userName: 'Tasos Tsipidopoulakoglou',
    userRole: 'Author & Reader',
    userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
    badgeCount: 10,
    // Add novl property to each autosave
    autosaves: [{
      id: 1,
      novl: {
        title: 'My First Novel'
      },
      title: 'The random chapter title',
      sequence: 1,
      showOptions: false
    }, {
      id: 2,
      novl: {
        title: 'My Second Novel'
      },
      title: 'Lone wolf',
      sequence: 2,
      showOptions: false
    }],
    // Add these properties which are used in the component
    emptyMessage: "You don't have anything saved in your drawer, yet!",
    chapterText: 'Chapter',
    yesText: 'Yes',
    noText: 'No',
    deleteConfirmMessage: 'Delete chapter?'
  }
}`,...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const fe=["Default","LoggedOutOpened","LoggedInClosed","LoggedInOpened"];export{l as Default,d as LoggedInClosed,u as LoggedInOpened,c as LoggedOutOpened,fe as __namedExportsOrder,ge as default};
