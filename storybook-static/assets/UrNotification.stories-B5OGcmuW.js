import{k as ae}from"./entry-preview-BcHUnPw7.js";import"./ur-avatar-CDkTpniw.js";import"./ur-time-ago-Be8GH5Ce.js";import"./ur-button-CAfr7GAX.js";import{s as ne,g as h}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as re,H as se,c as ce,h as e,a as le}from"./index-BJvbtjhH.js";import"./index-DrFu-skq.js";import"./index-BRY6Z_ZR.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./template-yncBVCyc.js";import"./index-CXOzFcj5.js";import"./button-base-DxLrUPRs.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-C8TuHONp.js";import"./form-DhDC-phE.js";import"./index-pqI9kxak.js";const de=":host{--ur-color-background:var(--mdui-color-background);--ur-color-on-background:var(--mdui-color-on-background);--ur-color-surface:var(--mdui-color-surface);--ur-color-surface-variant:var(--mdui-color-surface-variant);--ur-color-border:var(--mdui-color-border);--ur-color-on-surface:var(--mdui-color-on-surface);--ur-color-on-surface-variant:var(--mdui-color-on-surface-variant);--ur-color-error:var(--mdui-color-error);--ur-color-outline-variant:var(--mdui-color-outline-variant);padding:12px 16px;font-size:12px;display:flex;transition:background-color 0.2s ease;color:rgb(var(--ur-color-on-background));background:rgba(var(--ur-color-on-background), 0.02);border-bottom:1px solid rgb(var(--ur-color-outline-variant))}:host(:hover){background:rgba(var(--ur-color-on-background), 0.03);transition:background-color 0.2s ease}:host(.notification--read){background:rgb(var(--ur-color-background))}:host(.notification--read:hover){background:rgba(var(--ur-color-on-background), 0.03)}:host .vert{display:flex;flex:1;align-items:flex-start;gap:12px}:host .profile{flex-shrink:0;cursor:pointer}:host .content{flex:1;cursor:pointer;padding:2px 0}:host .action{flex:0 0 auto}:host .message{color:rgb(var(--ur-color-on-surface))}:host .ago{opacity:0.5;font-size:11px;font-weight:600;margin-top:4px;color:rgb(var(--ur-color-on-surface-variant))}:host .read{margin-left:auto}:host .unsupported{color:rgb(var(--ur-color-error));font-size:0.875rem;padding:8px;text-align:center}",pe=class extends se{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.notificationEvent=ce(this,"notificationEvent",7)}componentWillLoad(){this.isRead=this.notification.read,this.notification.event==="followed"&&(this.isFollowing=this.notification.creator.followed)}emitEvent(o){!this.isRead&&o!=="mark_read"&&(this.isRead=!0,this.emitEvent("mark_read")),o==="follow_back"&&(this.isFollowing=!0),this.notificationEvent.emit({type:o,notification:this.notification})}handleAcceptMembershipRequest(){this.emitEvent("mrequest_accept")}handleRejectMembershipRequest(){this.emitEvent("mrequest_reject")}renderFollowNotification(){if(this.notification.event!=="followed")return null;const{creator:o}=this.notification;return[e("section",{class:"vert"},e("ur-avatar",{class:"profile",onClick:()=>this.emitEvent("profile_click"),src:o.profileImage,name:o.displayName,size:"40px"}),e("section",{class:"content",onClick:()=>this.emitEvent("profile_click")},e("div",{class:"message"},o.displayName," has followed you."),e("div",{class:"ago"},e("ur-time-ago",{date:this.notification.updatedAt})))),!this.isFollowing&&e("ur-button",{class:"action followb",variant:"filled",onClick:()=>this.emitEvent("follow_back")},"Follow back")]}renderPageFollowNotification(){if(this.notification.event!=="pfollowed")return null;const{creator:o,page:g}=this.notification;return e("section",{class:"vert"},e("ur-avatar",{class:"profile",onClick:()=>this.emitEvent("profile_click"),src:o.profileImage,name:o.displayName,size:"40px"}),e("section",{class:"content",onClick:()=>this.emitEvent("profile_click")},e("div",{class:"message"},o.displayName," has followed your page ",e("b",null,g.name),"."),e("div",{class:"ago"},e("ur-time-ago",{date:this.notification.updatedAt}))))}renderCommentNotification(){if(this.notification.event!=="commented")return null;const{creator:o,novl:g,chapter:ie}=this.notification;return e("section",{class:"vert"},e("ur-avatar",{class:"profile",onClick:()=>this.emitEvent("profile_click"),src:o.profileImage,name:o.displayName,size:"40px"}),e("section",{class:"content",onClick:()=>this.emitEvent("comment_click")},e("div",{class:"message"},o.displayName," has commented in chapter ",ie.number," of novl ",e("b",null,g.title),"."),e("div",{class:"ago"},e("ur-time-ago",{date:this.notification.updatedAt}))))}renderMembershipRequestNotification(){if(this.notification.event!=="mrequest")return null;const{creator:o}=this.notification;return e("section",{class:"vert"},e("ur-avatar",{class:"profile",onClick:()=>this.emitEvent("profile_click"),src:o.profileImage,name:o.displayName,size:"40px"}),e("section",{class:"content",onClick:()=>this.emitEvent("profile_click")},e("div",{class:"message"},o.displayName," has requested to become a member."),e("div",{class:"ago"},e("ur-time-ago",{date:this.notification.updatedAt}))),e("ur-button",{class:"action accept",variant:"filled",onClick:()=>this.handleAcceptMembershipRequest()},"Accept"),e("ur-button",{class:"action reject",variant:"outlined",onClick:()=>this.handleRejectMembershipRequest()},"Reject"))}renderMembershipDecisionNotification(){if(this.notification.event!=="mrequestaccepted"&&this.notification.event!=="mrequestrejected")return null;const{creator:o}=this.notification;return e("section",{class:"vert"},e("ur-avatar",{class:"profile",onClick:()=>this.emitEvent("profile_click"),src:o.profileImage,name:o.displayName,size:"40px"}),e("section",{class:"content",onClick:()=>this.emitEvent("profile_click")},e("div",{class:"message"},o.displayName," has ",this.notification.event==="mrequestaccepted"?"accepted":"rejected"," your membership request."),e("div",{class:"ago"},e("ur-time-ago",{date:this.notification.updatedAt}))))}render(){return e(le,{key:"2c851e3bd9054583e45d8b55d36a48975b480a07",class:{notification:!0,"notification--read":this.isRead}},(()=>{switch(this.notification.event){case"followed":return this.renderFollowNotification();case"pfollowed":return this.renderPageFollowNotification();case"commented":return this.renderCommentNotification();case"mrequest":return this.renderMembershipRequestNotification();case"mrequestaccepted":case"mrequestrejected":return this.renderMembershipDecisionNotification();default:return e("div",{class:"unsupported"},"Unsupported notification type: ",this.notification.event)}})())}static get style(){return de}};re(pe,[1,"ur-notification",{notification:[8],isRead:[32],isFollowing:[32]}]);const v={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNotification",tagName:"ur-notification",customElement:!0,members:[{kind:"field",name:"notification",type:"any",description:""}],events:[{kind:"event",name:"notificationEvent",description:""}]}],exports:[{kind:"js",name:"UrNotification",declaration:{name:"UrNotification",module:"src/components/ur-notification/ur-notification.tsx"}},{kind:"custom-element-definition",name:"ur-notification",declaration:{name:"UrNotification",module:"src/components/ur-notification/ur-notification.tsx"}}]}]};ne({...h()||{},...v,modules:[...(h()||{}).modules||[],...v.modules]});const fe=o=>ae`
    <style>
        ur-time-ago::part(time) {
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    </style>
    <ur-notification .notification=${o.notification} locale=${o.locale} @notificationAction=${o.onNotificationAction}></ur-notification>
`,Ee={title:"urnovl/Basic/Notification",render:fe,argTypes:{notification:{control:"object",description:"The notification data object"},locale:{control:"text",description:"Locale for date formatting"},onNotificationAction:{action:"notificationAction"}}},t={args:{notification:{_id:"1",event:"followed",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces",followed:!1},read:!1,updatedAt:new Date().toISOString()},locale:"en"}},a={args:{notification:{...t.args.notification,read:!0},locale:"en"}},n={args:{notification:{...t.args.notification,creator:{...t.args.notification.creator,followed:!0}},locale:"en"}},i={args:{notification:{_id:"7",event:"pfollowed",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces",followed:!1},page:{name:"My Page"},read:!1,updatedAt:new Date().toISOString()},locale:"en"}},r={args:{notification:{...i.args.notification,read:!0},locale:"en"}},s={args:{notification:{...t.args.notification,creator:{...t.args.notification.creator,profileImage:void 0}},locale:"en"}},c={args:{...t.args,locale:"es"}},l={args:{notification:{...t.args.notification,creator:{...t.args.notification.creator,displayName:"Alexandra Constantine Bartholomew III"}},locale:"en"}},d={args:{notification:{_id:"2",event:"commented",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces"},novl:{id:"novl123",title:"The Great Adventure"},chapter:{id:"chapter456",number:3},read:!1,updatedAt:new Date().toISOString()},locale:"en"}},p={args:{notification:{_id:"3",event:"mrequest",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces"},read:!1,updatedAt:new Date().toISOString()},locale:"en"}},f={args:{notification:{_id:"4",event:"mrequestaccepted",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces"},read:!1,updatedAt:new Date().toISOString()},locale:"en"}},m={args:{notification:{_id:"5",event:"mrequestrejected",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces"},read:!1,updatedAt:new Date().toISOString()},locale:"en"}},u={args:{notification:{_id:"6",event:"unsupported_type",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://www.urnovl.co/profile.jpg"},read:!1,updatedAt:new Date().toISOString()},locale:"en"}};var N,b,w;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    } as NotificationType,
    locale: 'en'
  }
}`,...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var k,_,y;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    notification: {
      ...FollowNotification.args.notification,
      read: true
    },
    locale: 'en'
  }
}`,...(y=(_=a.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var S,I,A;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(I=n.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var x,D,F;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    notification: {
      _id: '7',
      event: 'pfollowed',
      creator: {
        _id: 'user123',
        displayName: 'John Doe',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces',
        followed: false
      },
      page: {
        name: 'My Page'
      },
      read: false,
      updatedAt: new Date().toISOString()
    } as NotificationType,
    locale: 'en'
  }
}`,...(F=(D=i.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var E,q,C;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    notification: {
      ...PageFollowNotification.args.notification,
      read: true
    },
    locale: 'en'
  }
}`,...(C=(q=r.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var R,j,M;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(M=(j=s.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var O,J,P;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...FollowNotification.args,
    locale: 'es'
  }
}`,...(P=(J=c.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var T,z,U;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(U=(z=l.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var L,B,H;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    } as NotificationType,
    locale: 'en'
  }
}`,...(H=(B=d.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var $,G,V;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    notification: {
      _id: '3',
      event: 'mrequest',
      creator: {
        _id: 'user123',
        displayName: 'John Doe',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces'
      },
      read: false,
      updatedAt: new Date().toISOString()
    } as NotificationType,
    locale: 'en'
  }
}`,...(V=(G=p.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var W,K,Q;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    notification: {
      _id: '4',
      event: 'mrequestaccepted',
      creator: {
        _id: 'user123',
        displayName: 'John Doe',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces'
      },
      read: false,
      updatedAt: new Date().toISOString()
    } as NotificationType,
    locale: 'en'
  }
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    notification: {
      _id: '5',
      event: 'mrequestrejected',
      creator: {
        _id: 'user123',
        displayName: 'John Doe',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces'
      },
      read: false,
      updatedAt: new Date().toISOString()
    } as NotificationType,
    locale: 'en'
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,oe,te;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    notification: {
      _id: '6',
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
}`,...(te=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};const qe=["FollowNotification","ReadFollowNotification","AlreadyFollowingNotification","PageFollowNotification","ReadPageFollowNotification","NoProfileImageNotification","SpanishLocaleNotification","LongDisplayNameNotification","CommentNotification","MembershipRequestNotification","MembershipAcceptNotification","MembershipRejectNotification","UnsupportedNotification"];export{n as AlreadyFollowingNotification,d as CommentNotification,t as FollowNotification,l as LongDisplayNameNotification,f as MembershipAcceptNotification,m as MembershipRejectNotification,p as MembershipRequestNotification,s as NoProfileImageNotification,i as PageFollowNotification,a as ReadFollowNotification,r as ReadPageFollowNotification,c as SpanishLocaleNotification,u as UnsupportedNotification,qe as __namedExportsOrder,Ee as default};
