import{k as g}from"./entry-preview-BcHUnPw7.js";import"./ur-list-B-K349el.js";import"./ur-list-item-B8EhyogS.js";import"./ur-tooltip-Dmobz621.js";import"./ur-button-icon-ChzhEZbz.js";import"./ur-logo-DfqYEmH3.js";import"./ur-button-BRTSQpVH.js";import"./ur-menu-profile-Ap2QBkvv.js";import{s as E,g as x}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as $,H as P,c as i,h as e,a as _}from"./index-BJvbtjhH.js";import"./ur-avatar-B9hKaEot.js";import"./index-DrFu-skq.js";import"./class-map-CWCTosL-.js";import"./query-assigned-elements-BInJlOXT.js";import"./get-IZFZkHlF.js";import"./anchor-C8TuHONp.js";import"./if-defined-CL77Dv0Z.js";import"./template-yncBVCyc.js";import"./index-CXOzFcj5.js";import"./index-rXz1tEXk.js";import"./watch-ByvFYHv8.js";import"./button-base-DxLrUPRs.js";import"./form-DhDC-phE.js";import"./index-pqI9kxak.js";import"./index-BRY6Z_ZR.js";const j=`:host {
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
}`,B=class extends P{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.notificationCenterClick=i(this,"notificationCenterClick",7),this.contactUsClick=i(this,"contactUsClick",7),this.premiumClick=i(this,"premiumClick",7),this.toggleExpand=i(this,"toggleExpand",7),this.signUpClick=i(this,"signUpClick",7),this.viewProfileClick=i(this,"viewProfileClick",7),this.homeClick=i(this,"homeClick",7),this.storiesClick=i(this,"storiesClick",7),this.pagesClick=i(this,"pagesClick",7),this.competitionsClick=i(this,"competitionsClick",7),this.termsClick=i(this,"termsClick",7),this.rulesClick=i(this,"rulesClick",7),this.privacyClick=i(this,"privacyClick",7),this.paymentClick=i(this,"paymentClick",7),this.acceptableUseClick=i(this,"acceptableUseClick",7),this.partnershipClick=i(this,"partnershipClick",7),this.menuToggleClick=i(this,"menuToggleClick",7),this.whatsNewClick=i(this,"whatsNewClick",7),this.faqsClick=i(this,"faqsClick",7),this.facebookClick=i(this,"facebookClick",7),this.xClick=i(this,"xClick",7),this.discordClick=i(this,"discordClick",7),this.expanded=!1,this.opened=!1,this.badgeCount=10,this.termsText="Terms of Service",this.rulesText="House Rules",this.privacyText="Privacy Policy",this.paymentText="Payment Terms",this.acceptableUseText="Quills Acceptable Use Policy",this.partnershipText="Partnership Program",this.homeText="Home",this.storiesText="Stories",this.pagesText="Pages",this.competitionsText="Competitions",this.notificationText="Notifications",this.facebookText="Our Facebook",this.xText="Our X",this.discordText="Our Discord",this.contactUsText="Contact us",this.signUpText="Sign Up/In",this.premiumText="Go Premium",this.whatsNewText="What's new",this.faqsText="FAQs",this.updateCounter=0}watchOpenedHandler(t){this.expanded=t,this.toggleExpand.emit(this.expanded)}open(){this.expanded||(this.expanded=!0,this.opened=!0,this.menuToggleClick.emit(!0),this.toggleExpand.emit(!0))}close(){this.expanded&&(this.expanded=!1,this.opened=!1,this.menuToggleClick.emit(!1),this.toggleExpand.emit(!1))}toggle(){this.expanded?this.close():this.open()}reset(){this.expanded=this.opened,this.toggleExpand.emit(this.expanded)}watchUserNameHandler(t,n){t!==n&&this.triggerUpdate()}watchUserRoleHandler(t,n){t!==n&&this.triggerUpdate()}watchUserAvatarHandler(t,n){t!==n&&this.triggerUpdate()}watchBadgeCountHandler(t,n){t!==n&&this.triggerUpdate()}watchCurrentRouteHandler(t,n){t!==n&&this.triggerUpdate()}watchNotificationCenterOpenedHandler(t,n){t!==n&&this.triggerUpdate()}triggerUpdate(){this.updateCounter++}componentDidLoad(){this.expanded=this.opened,this.mutationObserver=new MutationObserver(t=>{t.forEach(n=>{if(n.type==="attributes"&&n.attributeName==="class"){const a=n.target.classList.contains("expanded");this.expanded!==a&&(this.expanded=a,this.toggleExpand.emit(this.expanded))}})}),this.mutationObserver.observe(this.el.shadowRoot.host,{attributes:!0,attributeFilter:["class"]})}handleToggleClick(){this.toggle()}disconnectedCallback(){this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect()}handleNotificationClick(){this.notificationCenterClick.emit()}renderNavigation(){return e("div",{class:"menu-navigation"},e("ur-list",null,e("ur-list-item",{active:this.currentRoute==="/",icon:"home--outlined",content:this.homeText,onClick:()=>this.homeClick.emit()}),e("ur-list-item",{active:this.currentRoute==="/stories",icon:"import_contacts--outlined",content:this.storiesText,onClick:()=>this.storiesClick.emit()}),e("ur-list-item",{active:this.currentRoute==="/pages",icon:"hub--outlined",content:this.pagesText,onClick:()=>this.pagesClick.emit()})))}renderNotifications(){return e("div",{class:"notifications-holder"},e("ur-list-item",{active:this.notificationCenterOpened,icon:"notifications--outlined",content:this.notificationText,onClick:()=>this.handleNotificationClick()},e("div",{slot:"notification-badge",class:"notification-badge"},this.badgeCount>0&&this.badgeCount)))}renderNotificationsCollapsed(){return e("div",{class:"notifications-holder"},e("ur-tooltip",{content:this.notificationText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("div",{class:"notification-button-wrapper"},e("ur-button-icon",{"border-radius":"0",class:"navigation-button-icon","button-width":"57px",active:this.notificationCenterOpened,icon:"notifications--outlined",title:"Notifications",onClick:()=>this.handleNotificationClick()}),this.badgeCount>0&&e("div",{class:"notification-badge-collapsed"},this.badgeCount))))}renderCollapsedNavigation(){return e("div",{class:"menu-navigation"},e("div",{class:"menu-items"},e("ur-tooltip",{content:this.homeText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("ur-button-icon",{active:this.currentRoute==="/","border-radius":"0",class:"navigation-button-icon","button-width":"57px",icon:"home--outlined",title:"Home",onClick:()=>this.homeClick.emit()})),e("ur-tooltip",{content:this.storiesText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("ur-button-icon",{active:this.currentRoute==="/stories","border-radius":"0",class:"navigation-button-icon","button-width":"57px",icon:"import_contacts--outlined",title:"Stories",onClick:()=>this.storiesClick.emit()})),e("ur-tooltip",{content:this.pagesText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("ur-button-icon",{active:this.currentRoute==="/pages","border-radius":"0",class:"navigation-button-icon","button-width":"57px",icon:"hub--outlined",title:"Pages",onClick:()=>this.pagesClick.emit()}))))}renderCollapsedFooter(){return e("footer",{class:"menu-footer collapsed"},e("div",{class:"social-links"},e("ur-tooltip",{content:this.facebookText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("a",{target:"_blank",rel:"noopener noreferrer",class:"social",onClick:()=>this.facebookClick.emit()},e("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},e("path",{d:"M4.21705 8.5216H5.97091V15.7419C5.97091 15.8845 6.08642 16 6.22897 16H9.2027C9.34526 16 9.46077 15.8845 9.46077 15.7419V8.55561H11.477C11.6081 8.55561 11.7184 8.45724 11.7333 8.32702L12.0396 5.66885C12.048 5.59572 12.0248 5.52248 11.9759 5.46761C11.9269 5.4127 11.8568 5.38126 11.7832 5.38126H9.46087V3.71499C9.46087 3.2127 9.73132 2.95799 10.2648 2.95799C10.3408 2.95799 11.7832 2.95799 11.7832 2.95799C11.9258 2.95799 12.0413 2.84243 12.0413 2.69992V0.259974C12.0413 0.117419 11.9258 0.00190968 11.7832 0.00190968H9.6906C9.67584 0.0011871 9.64306 0 9.59475 0C9.23166 0 7.96956 0.0712774 6.97261 0.988439C5.86799 2.0048 6.02154 3.22173 6.05824 3.43272V5.38121H4.21705C4.07449 5.38121 3.95898 5.49672 3.95898 5.63928V8.26348C3.95898 8.40604 4.07449 8.5216 4.21705 8.5216Z",fill:"currentColor"})))),e("ur-tooltip",{content:this.xText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("a",{target:"_blank",rel:"noopener noreferrer",class:"social x",onClick:()=>this.xClick.emit()},e("svg",{viewBox:"0 0 512 509.64",xmlns:"http://www.w3.org/2000/svg"},e("path",{d:"M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z",fill:"currentColor"})))),e("ur-tooltip",{content:this.discordText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("a",{target:"_blank",rel:"noopener noreferrer",class:"social discord",onClick:()=>this.discordClick.emit()},e("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e("path",{d:"M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z",fill:"currentColor"})))),e("ur-tooltip",{content:this.contactUsText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("a",{class:"social contact-us",onClick:()=>this.contactUsClick.emit()},e("mdui-icon",{name:"feedback"})))),e("div",{class:"vertical-logo"},e("ur-tooltip",{content:"Home",placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("a",{"aria-label":"Navigate to homepage",onClick:()=>this.homeClick.emit()},e("ur-logo",{width:"55",height:"14",opacity:.5,rotation:-90})))))}renderLoggedOutExpanded(){return e("div",{class:"menu logged-out"},e("div",{class:"welcome"},e("ur-button",{class:"menu-button",icon:"login",variant:"filled","full-width":!0,onClick:()=>this.signUpClick.emit()},this.signUpText)))}renderLoggedOutCollapsed(){return e("div",{class:"menu logged-out"},e("div",{class:"welcome"},e("ur-tooltip",{content:this.signUpText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("ur-button-icon",{class:"menu-button-icon",icon:"login",variant:"filled",onClick:()=>this.signUpClick.emit()}))))}renderPremiumExpanded(){return e("div",{class:"premium expanded"},e("ur-button",{class:"menu-button",icon:"workspace_premium--outlined",variant:"filled","full-width":!0,onClick:()=>this.premiumClick.emit()},this.premiumText))}renderPremiumCollapsed(){return e("div",{class:"premium collapsed"},e("ur-tooltip",{content:this.premiumText,placement:"right",trigger:"hover",colorScheme:"dark","open-delay":"200","close-delay":"100"},e("ur-button-icon",{class:"navigation-button-icon",icon:"workspace_premium--outlined",title:"Premium",variant:"filled",onClick:()=>this.premiumClick.emit()})))}renderFooter(){return e("footer",{class:"menu-footer"},e("div",{class:"horizontal-logo"},e("a",{"aria-label":"Navigate to homepage",onClick:()=>this.homeClick.emit()},e("ur-logo",{width:"55",height:"14",opacity:.5,rotation:0}))),e("div",{class:"link-hld"},e("a",{class:"link",style:{display:"block"},onClick:()=>this.termsClick.emit()},this.termsText),e("a",{class:"link",style:{display:"block"},onClick:()=>this.rulesClick.emit()},this.rulesText),e("a",{class:"link",style:{display:"block"},onClick:()=>this.whatsNewClick.emit()},this.whatsNewText),e("a",{class:"link",style:{display:"block"},onClick:()=>this.faqsClick.emit()},this.faqsText),e("a",{class:"link",style:{display:"block"},onClick:()=>this.privacyClick.emit()},this.privacyText),e("a",{class:"link",style:{display:"block"},onClick:()=>this.paymentClick.emit()},this.paymentText),e("a",{class:"link",style:{display:"block"},onClick:()=>this.acceptableUseClick.emit()},this.acceptableUseText),e("a",{class:"link",style:{display:"block"},onClick:()=>this.partnershipClick.emit()},this.partnershipText)),e("span",{class:"est"},"© ",new Date().getFullYear()," Urnovl.co"))}render(){var t,n;return e(_,{key:"359a13657a7350374a8e92804aea6e7021a15401",class:`left-host-menu ${this.expanded?"expanded":"collapsed"}`,style:{minHeight:`${this.parentHeight}px`}},this.loggedIn&&e("ur-menu-profile",{key:"ae88f56729c44bee4bb9542380dccdae7f8c2c74",part:"menu-profile","user-avatar":this.userAvatar,"user-name":this.userName,"user-role":this.userRole,"on-click":()=>this.viewProfileClick.emit(),class:`${this.expanded?"expanded":"collapsed"} ${!((t=this.currentRoute)===null||t===void 0)&&t.endsWith("/profile")||!((n=this.currentRoute)===null||n===void 0)&&n.endsWith("/profile/")?"active":""}`}),!this.loggedIn&&this.expanded&&this.renderLoggedOutExpanded(),!this.loggedIn&&!this.expanded&&this.renderLoggedOutCollapsed(),this.expanded&&this.renderNavigation(),!this.expanded&&this.renderCollapsedNavigation(),e("div",{key:"3efe3ba0330a9117c4662272c062713e4c7015dd",class:"flex"}),this.loggedIn&&!this.expanded&&this.renderNotificationsCollapsed(),this.loggedIn&&this.expanded&&this.renderNotifications(),this.expanded?this.renderFooter():this.renderCollapsedFooter())}get el(){return this}static get watchers(){return{opened:["watchOpenedHandler"],userName:["watchUserNameHandler"],userRole:["watchUserRoleHandler"],userAvatar:["watchUserAvatarHandler"],badgeCount:["watchBadgeCountHandler"],currentRoute:["watchCurrentRouteHandler"],notificationCenterOpened:["watchNotificationCenterOpenedHandler"]}}static get style(){return j}};$(B,[1,"ur-main-menu",{opened:[4],loggedIn:[4,"logged-in"],userName:[1,"user-name"],userRole:[1,"user-role"],userAvatar:[1,"user-avatar"],badgeCount:[2,"badge-count"],termsText:[1,"terms-text"],rulesText:[1,"rules-text"],privacyText:[1,"privacy-text"],paymentText:[1,"payment-text"],acceptableUseText:[1,"acceptable-use-text"],partnershipText:[1,"partnership-text"],homeText:[1,"home-text"],storiesText:[1,"stories-text"],pagesText:[1,"pages-text"],competitionsText:[1,"competitions-text"],notificationText:[1,"notification-text"],facebookText:[1,"facebook-text"],xText:[1,"x-text"],discordText:[1,"discord-text"],contactUsText:[1,"contact-us-text"],signUpText:[1,"sign-up-text"],premiumText:[1,"premium-text"],whatsNewText:[1,"whats-new-text"],faqsText:[1,"faqs-text"],currentRoute:[1,"current-route"],notificationCenterOpened:[4,"notification-center-opened"],expanded:[32],parentHeight:[32],updateCounter:[32]},void 0,{opened:["watchOpenedHandler"],userName:["watchUserNameHandler"],userRole:["watchUserRoleHandler"],userAvatar:["watchUserAvatarHandler"],badgeCount:["watchBadgeCountHandler"],currentRoute:["watchCurrentRouteHandler"],notificationCenterOpened:["watchNotificationCenterOpenedHandler"]}]);const f={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrMainMenu",tagName:"ur-main-menu",customElement:!0,members:[{kind:"field",name:"opened",type:"boolean",description:"",default:"false"},{kind:"field",name:"loggedIn",type:"boolean",description:""},{kind:"field",name:"userName",type:"string",description:""},{kind:"field",name:"userRole",type:"string",description:""},{kind:"field",name:"userAvatar",type:"string",description:""},{kind:"field",name:"badgeCount",type:"number",description:"",default:"10"},{kind:"field",name:"termsText",type:"string",description:"",default:"'Terms of Service'"},{kind:"field",name:"rulesText",type:"string",description:"",default:"'House Rules'"},{kind:"field",name:"privacyText",type:"string",description:"",default:"'Privacy Policy'"},{kind:"field",name:"paymentText",type:"string",description:"",default:"'Payment Terms'"},{kind:"field",name:"acceptableUseText",type:"string",description:"",default:"'Quills Acceptable Use Policy'"},{kind:"field",name:"partnershipText",type:"string",description:"",default:"'Partnership Program'"},{kind:"field",name:"homeText",type:"string",description:"",default:"'Home'"},{kind:"field",name:"storiesText",type:"string",description:"",default:"'Stories'"},{kind:"field",name:"pagesText",type:"string",description:"",default:"'Pages'"},{kind:"field",name:"competitionsText",type:"string",description:"",default:"'Competitions'"},{kind:"field",name:"notificationText",type:"string",description:"",default:"'Notifications'"},{kind:"field",name:"facebookText",type:"string",description:"",default:"'Our Facebook'"},{kind:"field",name:"xText",type:"string",description:"",default:"'Our X'"},{kind:"field",name:"discordText",type:"string",description:"",default:"'Our Discord'"},{kind:"field",name:"contactUsText",type:"string",description:"",default:"'Contact us'"},{kind:"field",name:"signUpText",type:"string",description:"",default:"'Sign Up/In'"},{kind:"field",name:"premiumText",type:"string",description:"",default:"'Go Premium'"},{kind:"field",name:"whatsNewText",type:"string",description:"",default:`"What's new"`},{kind:"field",name:"faqsText",type:"string",description:"",default:"'FAQs'"},{kind:"field",name:"currentRoute",type:"string",description:""},{kind:"field",name:"notificationCenterOpened",type:"boolean",description:""}],events:[{kind:"event",name:"notificationCenterClick",description:""},{kind:"event",name:"contactUsClick",description:""},{kind:"event",name:"premiumClick",description:""},{kind:"event",name:"toggleExpand",description:""},{kind:"event",name:"signUpClick",description:""},{kind:"event",name:"viewProfileClick",description:""},{kind:"event",name:"homeClick",description:""},{kind:"event",name:"storiesClick",description:""},{kind:"event",name:"pagesClick",description:""},{kind:"event",name:"competitionsClick",description:""},{kind:"event",name:"termsClick",description:""},{kind:"event",name:"rulesClick",description:""},{kind:"event",name:"privacyClick",description:""},{kind:"event",name:"paymentClick",description:""},{kind:"event",name:"acceptableUseClick",description:""},{kind:"event",name:"partnershipClick",description:""},{kind:"event",name:"menuToggleClick",description:""},{kind:"event",name:"whatsNewClick",description:""},{kind:"event",name:"faqsClick",description:""},{kind:"event",name:"facebookClick",description:""},{kind:"event",name:"xClick",description:""},{kind:"event",name:"discordClick",description:""}]}],exports:[{kind:"js",name:"UrMainMenu",declaration:{name:"UrMainMenu",module:"src/components/ur-main-menu/ur-main-menu.tsx"}},{kind:"custom-element-definition",name:"ur-main-menu",declaration:{name:"UrMainMenu",module:"src/components/ur-main-menu/ur-main-menu.tsx"}}]}]};E({...x()||{},...f,modules:[...(x()||{}).modules||[],...f.modules]});const z=t=>{let n=t.opened,r=t.badgeCount||0;const a=o=>{const p=o.querySelector("ur-main-menu"),h=o.querySelector(".toggle-button"),m=o.querySelector(".badge-count");p&&(p.opened=n,p.badgeCount=r),h&&(h.textContent=n?"Close Menu":"Open Menu"),m&&(m.textContent=`Current Badge Count: ${r}`)},M=o=>{n=!n,a(o.target.closest(".menu-controls-wrapper"))},A=o=>{r+=1,a(o.target.closest(".menu-controls-wrapper"))},I=o=>{r=Math.max(0,r-1),a(o.target.closest(".menu-controls-wrapper"))},S=o=>{n=!n,a(o.target.parentElement),console.log("Internal menu button clicked. New state:",n)},u=`
        padding: 8px 16px;
        margin: 0 4px;
        background-color: #4a5568;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    `;return g`
        <div class="menu-controls-wrapper" style="padding: 20px;">
            <div style="margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                <!-- External Toggle Button -->
                <button
                    @click=${M}
                    class="toggle-button"
                    style=${u}
                >
                    ${n?"Close Menu":"Open Menu"}
                </button>

                <button
                    @click=${I}
                    style=${u}
                >
                    -1 Badge
                </button>

                <button
                    @click=${A}
                    style=${u}
                >
                    +1 Badge
                </button>

                <span class="badge-count" style="margin-left: 12px;">
                    Current Badge Count: ${r}
                </span>
            </div>

            <!-- Menu Component -->
            <ur-main-menu
                #mainMenu
                .opened=${n}
                .loggedIn=${t.loggedIn}
                .userName=${t.userName}
                .userAvatar=${t.userAvatar}
                .userRole=${t.userRole}
                .badgeCount=${r}
                @menuToggleClick=${S}
            >
                ${t.loggedIn?g`
                          <ur-menu-profile
                              class=${n?"expanded":"collapsed"}
                              .userAvatar=${t.userAvatar}
                              .userName=${t.userName}
                              .userRole=${t.userRole}
                          ></ur-menu-profile>
                      `:""}
            </ur-main-menu>
        </div>
    `},pe={title:"urnovl/Business/Main Menu",render:t=>z(t),argTypes:{opened:{control:"boolean",description:"Determines whether the menu is expanded (open) or collapsed (closed)"},loggedIn:{control:"boolean",description:"Determines if the user is logged in"},userName:{control:"text",description:"Name of the logged-in user"},userRole:{control:"text",description:"Role of the logged-in user"},userAvatar:{control:"text",description:"URL of the user avatar"},badgeCount:{control:"number",description:"Number of notifications to display in the badge"}},parameters:{actions:{handles:["menuToggleClick"]}}},s={args:{opened:!1,loggedIn:!1,userName:"Guest",userRole:"",userAvatar:"",badgeCount:0}},l={args:{opened:!0,loggedIn:!1,userName:"Guest",userRole:"",userAvatar:"",badgeCount:0}},c={args:{opened:!1,loggedIn:!0,userName:"Tasos Tsipos",userRole:"Author & Reader",userAvatar:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",badgeCount:5}},d={args:{opened:!0,loggedIn:!0,userName:"Tasos Tsipidopoulakoglou",userRole:"Author & Reader",userAvatar:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",badgeCount:10}};var k,C,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    opened: false,
    loggedIn: false,
    userName: 'Guest',
    userRole: '',
    userAvatar: '',
    badgeCount: 0
  }
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var v,y,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    opened: true,
    loggedIn: false,
    userName: 'Guest',
    userRole: '',
    userAvatar: '',
    badgeCount: 0
  }
}`,...(w=(y=l.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var T,U,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    opened: false,
    loggedIn: true,
    userName: 'Tasos Tsipos',
    userRole: 'Author & Reader',
    userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
    badgeCount: 5
  }
}`,...(N=(U=c.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var R,H,O;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    opened: true,
    loggedIn: true,
    userName: 'Tasos Tsipidopoulakoglou',
    userRole: 'Author & Reader',
    userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
    badgeCount: 10
  }
}`,...(O=(H=d.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const he=["Default","LoggedOutOpened","LoggedInClosed","LoggedInOpened"];export{s as Default,c as LoggedInClosed,d as LoggedInOpened,l as LoggedOutOpened,he as __namedExportsOrder,pe as default};
