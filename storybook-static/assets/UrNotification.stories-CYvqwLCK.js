import{k as L}from"./entry-preview-BcHUnPw7.js";import"./ur-avatar-B9hKaEot.js";import"./ur-time-ago-Dsty35uF.js";import"./ur-button-CKpOEDy7.js";import{s as T,g as d}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as B,H,c as $,h as o,a as G}from"./index-BJvbtjhH.js";import"./index-DrFu-skq.js";import"./index-BRY6Z_ZR.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./template-yncBVCyc.js";import"./index-CXOzFcj5.js";import"./button-base-DxLrUPRs.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-C8TuHONp.js";import"./form-DhDC-phE.js";import"./index-pqI9kxak.js";const M=":host{--ur-color-background:var(--mdui-color-background);--ur-color-on-background:var(--mdui-color-on-background);--ur-color-surface:var(--mdui-color-surface);--ur-color-surface-variant:var(--mdui-color-surface-variant);--ur-color-border:var(--mdui-color-border);--ur-color-on-surface:var(--mdui-color-on-surface);--ur-color-on-surface-variant:var(--mdui-color-on-surface-variant);--ur-color-error:var(--mdui-color-error);--ur-color-outline-variant:var(--mdui-color-outline-variant);padding:12px 16px;font-size:12px;display:flex;transition:background-color 0.2s ease;color:rgb(var(--ur-color-on-background));background:rgba(var(--ur-color-on-background), 0.02);border-bottom:1px solid rgb(var(--ur-color-outline-variant))}:host(:hover){background:rgba(var(--ur-color-on-background), 0.03);transition:background-color 0.2s ease}:host(.notification--read){background:rgb(var(--ur-color-background))}:host(.notification--read:hover){background:rgba(var(--ur-color-on-background), 0.03)}:host .vert{display:flex;flex:1;align-items:flex-start;gap:12px}:host .profile{flex-shrink:0;cursor:pointer}:host .content{flex:1;cursor:pointer;padding:2px 0}:host .action{flex:0 0 auto}:host .message{color:rgb(var(--ur-color-on-surface))}:host .ago{opacity:0.5;font-size:11px;font-weight:600;margin-top:4px;color:rgb(var(--ur-color-on-surface-variant))}:host .read{margin-left:auto}:host .unsupported{color:rgb(var(--ur-color-error));font-size:0.875rem;padding:8px;text-align:center}",P=class extends H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.notificationEvent=$(this,"notificationEvent",7)}componentWillLoad(){this.isRead=this.notification.read,this.notification.event==="followed"&&(this.isFollowing=this.notification.creator.followed)}emitEvent(t){!this.isRead&&t!=="mark_read"&&(this.isRead=!0,this.emitEvent("mark_read")),t==="follow_back"&&(this.isFollowing=!0),this.notificationEvent.emit({type:t,notification:this.notification})}renderFollowNotification(){if(this.notification.event!=="followed")return null;const{creator:t}=this.notification;return[o("section",{class:"vert"},o("ur-avatar",{class:"profile",onClick:()=>this.emitEvent("profile_click"),src:t.profileImage,name:t.displayName,size:"40px"}),o("section",{class:"content",onClick:()=>this.emitEvent("profile_click")},o("div",{class:"message"},t.displayName," has followed you."),o("div",{class:"ago"},o("ur-time-ago",{date:this.notification.updatedAt})))),!this.isFollowing&&o("ur-button",{class:"action followb",variant:"filled",onClick:()=>this.emitEvent("follow_back")},"Follow back")]}renderCommentNotification(){if(this.notification.event!=="commented")return null;const{creator:t,novl:z,chapter:J}=this.notification;return o("section",{class:"vert"},o("ur-avatar",{class:"profile",onClick:()=>this.emitEvent("profile_click"),src:t.profileImage,name:t.displayName,size:"40px"}),o("section",{class:"content",onClick:()=>this.emitEvent("comment_click")},o("div",{class:"message"},t.displayName," has commented in chapter ",J.number," of novl ",o("b",null,z.title),"."),o("div",{class:"ago"},o("ur-time-ago",{date:this.notification.updatedAt}))))}render(){return o(G,{key:"e06c95bd2df26b37814e6454fe044661aeaf09a6",class:{notification:!0,"notification--read":this.isRead}},(()=>{switch(this.notification.event){case"followed":return this.renderFollowNotification();case"commented":return this.renderCommentNotification();default:return o("div",{class:"unsupported"},"Unsupported notification type: ",this.notification.event)}})())}static get style(){return M}};B(P,[1,"ur-notification",{notification:[8],isRead:[32],isFollowing:[32]}]);const f={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNotification",tagName:"ur-notification",customElement:!0,members:[{kind:"field",name:"notification",type:"any",description:""}],events:[{kind:"event",name:"notificationEvent",description:""}]}],exports:[{kind:"js",name:"UrNotification",declaration:{name:"UrNotification",module:"src/components/ur-notification/ur-notification.tsx"}},{kind:"custom-element-definition",name:"ur-notification",declaration:{name:"UrNotification",module:"src/components/ur-notification/ur-notification.tsx"}}]}]};T({...d()||{},...f,modules:[...(d()||{}).modules||[],...f.modules]});const V=t=>L`
    <style>
        ur-time-ago::part(time) {
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    </style>
    <ur-notification .notification=${t.notification} locale=${t.locale} @notificationAction=${t.onNotificationAction}></ur-notification>
`,fo={title:"urnovl/Basic/Notification",render:V,argTypes:{notification:{control:"object",description:"The notification data object"},locale:{control:"text",description:"Locale for date formatting"},onNotificationAction:{action:"notificationAction"}}},i={args:{notification:{_id:"1",event:"followed",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces",followed:!1},read:!1,updatedAt:new Date().toISOString()},locale:"en"}},e={args:{notification:{...i.args.notification,read:!0},locale:"en"}},n={args:{notification:{...i.args.notification,creator:{...i.args.notification.creator,followed:!0}},locale:"en"}},a={args:{notification:{...i.args.notification,creator:{...i.args.notification.creator,profileImage:void 0}},locale:"en"}},r={args:{...i.args,locale:"es"}},c={args:{notification:{...i.args.notification,creator:{...i.args.notification.creator,displayName:"Alexandra Constantine Bartholomew III"}},locale:"en"}},s={args:{notification:{_id:"2",event:"commented",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces"},novl:{id:"novl123",title:"The Great Adventure"},chapter:{id:"chapter456",number:3},read:!1,updatedAt:new Date().toISOString()},locale:"en"}},l={args:{notification:{_id:"1",event:"unsupported_type",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://www.urnovl.co/profile.jpg"},read:!1,updatedAt:new Date().toISOString()},locale:"en"}};var m,u,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    notification: {
      _id: '1',
      event: 'followed',
      creator: {
        _id: 'user123',
        displayName: 'John Doe',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces',
        followed: false
      },
      read: false,
      updatedAt: new Date().toISOString()
    },
    locale: 'en'
  }
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,h,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    notification: {
      ...FollowNotification.args.notification,
      read: true
    },
    locale: 'en'
  }
}`,...(v=(h=e.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var w,N,b;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    notification: {
      ...FollowNotification.args.notification,
      creator: {
        ...FollowNotification.args.notification.creator,
        followed: true
      }
    },
    locale: 'en'
  }
}`,...(b=(N=n.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var k,x,_;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    notification: {
      ...FollowNotification.args.notification,
      creator: {
        ...FollowNotification.args.notification.creator,
        profileImage: undefined
      }
    },
    locale: 'en'
  }
}`,...(_=(x=a.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var y,I,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...FollowNotification.args,
    locale: 'es'
  }
}`,...(S=(I=r.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var F,A,E;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    notification: {
      ...FollowNotification.args.notification,
      creator: {
        ...FollowNotification.args.notification.creator,
        displayName: 'Alexandra Constantine Bartholomew III'
      }
    },
    locale: 'en'
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var C,D,U;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    notification: {
      _id: '2',
      event: 'commented',
      creator: {
        _id: 'user123',
        displayName: 'John Doe',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces'
      },
      novl: {
        id: 'novl123',
        title: 'The Great Adventure'
      },
      chapter: {
        id: 'chapter456',
        number: 3
      },
      read: false,
      updatedAt: new Date().toISOString()
    },
    locale: 'en'
  }
}`,...(U=(D=s.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var O,R,j;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    notification: {
      _id: '1',
      event: 'unsupported_type',
      creator: {
        _id: 'user123',
        displayName: 'John Doe',
        profileImage: 'https://www.urnovl.co/profile.jpg'
      },
      read: false,
      updatedAt: new Date().toISOString()
    },
    locale: 'en'
  }
}`,...(j=(R=l.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const mo=["FollowNotification","ReadFollowNotification","AlreadyFollowingNotification","NoProfileImageNotification","SpanishLocaleNotification","LongDisplayNameNotification","CommentNotification","UnsupportedNotification"];export{n as AlreadyFollowingNotification,s as CommentNotification,i as FollowNotification,c as LongDisplayNameNotification,a as NoProfileImageNotification,e as ReadFollowNotification,r as SpanishLocaleNotification,l as UnsupportedNotification,mo as __namedExportsOrder,fo as default};
