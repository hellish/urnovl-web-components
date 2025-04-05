import{k as ae}from"./entry-preview-BcHUnPw7.js";import"./ur-avatar-LWOBhbU6.js";import"./ur-time-ago-BQvV6XqK.js";import"./ur-button-Cj914QN4.js";import{s as ne,g as h}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as re,H as se,c as ce,h as e,a as le}from"./index-DddAbXmr.js";import"./index-DrFu-skq.js";import"./index-B-mBYDoO.js";import"./class-map-CDMw4-pN.js";import"./get-7S0C3xNv.js";import"./template-yncBVCyc.js";import"./index-BriiHZyV.js";import"./button-base-CWeRpzKK.js";import"./if-defined-CL77Dv0Z.js";import"./anchor--mD29Q5y.js";import"./form-B80GgqR6.js";import"./index-DsS9OQyQ.js";const pe=":host{--ur-color-background:var(--mdui-color-background);--ur-color-on-background:var(--mdui-color-on-background);--ur-color-surface:var(--mdui-color-surface);--ur-color-surface-variant:var(--mdui-color-surface-variant);--ur-color-border:var(--mdui-color-border);--ur-color-on-surface:var(--mdui-color-on-surface);--ur-color-on-surface-variant:var(--mdui-color-on-surface-variant);--ur-color-error:var(--mdui-color-error);--ur-color-outline-variant:var(--mdui-color-outline-variant);padding:12px 16px;font-size:12px;display:flex;transition:background-color 0.2s ease;color:rgb(var(--ur-color-on-background));background:rgba(var(--ur-color-on-background), 0.02);border-bottom:1px solid rgb(var(--ur-color-outline-variant))}:host(:hover){background:rgba(var(--ur-color-on-background), 0.03);transition:background-color 0.2s ease}:host(.notification--read){background:rgb(var(--ur-color-background))}:host(.notification--read:hover){background:rgba(var(--ur-color-on-background), 0.03)}:host .vert{display:flex;flex:1;align-items:flex-start;gap:12px}:host .profile{flex-shrink:0;cursor:pointer}:host .content{flex:1;cursor:pointer;padding:2px 0}:host .action{flex:0 0 auto}:host .message{color:rgb(var(--ur-color-on-surface))}:host .ago{opacity:0.5;font-size:11px;font-weight:600;margin-top:4px;color:rgb(var(--ur-color-on-surface-variant))}:host .read{margin-left:auto}:host .unsupported{color:rgb(var(--ur-color-error));font-size:0.875rem;padding:8px;text-align:center}",de=class extends se{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.notificationEvent=ce(this,"notificationEvent",7)}componentWillLoad(){this.isRead=this.notification.read,this.notification.event==="mrequest"&&(this.memberRequestStatus=this.notification.status),this.notification.event==="followed"&&(this.isFollowing=this.notification.creator.followed)}emitEvent(o){!this.isRead&&o!=="mark_read"&&(this.isRead=!0,this.emitEvent("mark_read")),o==="follow_back"&&(this.isFollowing=!0),this.notificationEvent.emit({type:o,notification:this.notification})}handleAcceptMembershipRequest(){this.memberRequestStatus="accepted",this.emitEvent("mrequest_accept")}handleRejectMembershipRequest(){this.memberRequestStatus="rejected",this.emitEvent("mrequest_reject")}renderFollowNotification(){if(this.notification.event!=="followed")return null;const{creator:o}=this.notification;return[e("section",{class:"vert"},e("ur-avatar",{class:"profile",onClick:()=>this.emitEvent("profile_click"),src:o.profileImage,name:o.displayName,size:"40px"}),e("section",{class:"content",onClick:()=>this.emitEvent("profile_click")},e("div",{class:"message"},o.displayName," has followed you."),e("div",{class:"ago"},e("ur-time-ago",{date:this.notification.updatedAt})))),!this.isFollowing&&e("ur-button",{class:"action followb",variant:"filled",onClick:()=>this.emitEvent("follow_back")},"Follow back")]}renderPageFollowNotification(){if(this.notification.event!=="pfollowed")return null;const{creator:o,page:i}=this.notification;return e("section",{class:"vert"},e("ur-avatar",{class:"profile",onClick:()=>this.emitEvent("profile_click"),src:o.profileImage,name:o.displayName,size:"40px"}),e("section",{class:"content",onClick:()=>this.emitEvent("profile_click")},e("div",{class:"message"},o.displayName," has followed your page ",e("b",null,i.name),"."),e("div",{class:"ago"},e("ur-time-ago",{date:this.notification.updatedAt}))))}renderCommentNotification(){if(this.notification.event!=="commented")return null;const{creator:o,novl:i,chapter:ie}=this.notification;return e("section",{class:"vert"},e("ur-avatar",{class:"profile",onClick:()=>this.emitEvent("profile_click"),src:o.profileImage,name:o.displayName,size:"40px"}),e("section",{class:"content",onClick:()=>this.emitEvent("comment_click")},e("div",{class:"message"},o.displayName," has commented in chapter ",ie.number," of novl ",e("b",null,i.title),"."),e("div",{class:"ago"},e("ur-time-ago",{date:this.notification.updatedAt}))))}renderMembershipRequestNotification(){if(this.notification.event!=="mrequest")return null;const{creator:o,page:i}=this.notification;return e("section",{class:"vert"},e("ur-avatar",{class:"profile",onClick:()=>this.emitEvent("profile_click"),src:o.profileImage,name:o.displayName,size:"40px"}),e("section",{class:"content",onClick:()=>this.emitEvent("profile_click")},e("div",{class:"message"},this.memberRequestStatus==="pending"?`${o.displayName} has requested to become a member to ${i.name}`:`You ${this.memberRequestStatus} ${o.displayName} as a member to ${i.name}`),e("div",{class:"ago"},e("ur-time-ago",{date:this.notification.updatedAt}))),this.memberRequestStatus==="pending"&&[e("ur-button",{class:"action accept",variant:"filled",onClick:()=>this.handleAcceptMembershipRequest()},"Accept"),e("ur-button",{class:"action reject",variant:"outlined",onClick:()=>this.handleRejectMembershipRequest()},"Reject")])}renderMembershipDecisionNotification(){if(this.notification.event!=="mrequestaccepted"&&this.notification.event!=="mrequestrejected")return null;const{creator:o,page:i}=this.notification;return e("section",{class:"vert"},e("ur-avatar",{class:"profile",onClick:()=>this.emitEvent("profile_click"),src:o.profileImage,name:o.displayName,size:"40px"}),e("section",{class:"content",onClick:()=>this.emitEvent("profile_click")},e("div",{class:"message"},o.displayName," has ",this.notification.event==="mrequestaccepted"?"accepted":"rejected"," your membership request to ",i.name,"."),e("div",{class:"ago"},e("ur-time-ago",{date:this.notification.updatedAt}))))}render(){return e(le,{key:"d0a7c8cab5832f408440616c976b14edcf099077",class:{notification:!0,"notification--read":this.isRead}},(()=>{switch(this.notification.event){case"followed":return this.renderFollowNotification();case"pfollowed":return this.renderPageFollowNotification();case"commented":return this.renderCommentNotification();case"mrequest":return this.renderMembershipRequestNotification();case"mrequestaccepted":case"mrequestrejected":return this.renderMembershipDecisionNotification();default:return e("div",{class:"unsupported"},"Unsupported notification type: ",this.notification.event)}})())}static get style(){return pe}};re(de,[1,"ur-notification",{notification:[8],isRead:[32],isFollowing:[32],memberRequestStatus:[32]}]);const v={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrNotification",tagName:"ur-notification",customElement:!0,members:[{kind:"field",name:"notification",type:"any",description:""}],events:[{kind:"event",name:"notificationEvent",description:""}]}],exports:[{kind:"js",name:"UrNotification",declaration:{name:"UrNotification",module:"src/components/ur-notification/ur-notification.tsx"}},{kind:"custom-element-definition",name:"ur-notification",declaration:{name:"UrNotification",module:"src/components/ur-notification/ur-notification.tsx"}}]}]};ne({...h()||{},...v,modules:[...(h()||{}).modules||[],...v.modules]});const me=o=>ae`
    <style>
        ur-time-ago::part(time) {
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    </style>
    <ur-notification .notification=${o.notification} locale=${o.locale} @notificationAction=${o.onNotificationAction}></ur-notification>
`,Re={title:"urnovl/Basic/Notification",render:me,argTypes:{notification:{control:"object",description:"The notification data object"},locale:{control:"text",description:"Locale for date formatting"},onNotificationAction:{action:"notificationAction"}}},t={args:{notification:{_id:"1",event:"followed",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces",followed:!1},read:!1,updatedAt:new Date().toISOString()},locale:"en"}},n={args:{notification:{...t.args.notification,read:!0},locale:"en"}},r={args:{notification:{...t.args.notification,creator:{...t.args.notification.creator,followed:!0}},locale:"en"}},a={args:{notification:{_id:"7",event:"pfollowed",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces",followed:!1},page:{name:"My Page"},read:!1,updatedAt:new Date().toISOString()},locale:"en"}},s={args:{notification:{...a.args.notification,read:!0},locale:"en"}},c={args:{notification:{...t.args.notification,creator:{...t.args.notification.creator,profileImage:void 0}},locale:"en"}},l={args:{...t.args,locale:"es"}},p={args:{notification:{...t.args.notification,creator:{...t.args.notification.creator,displayName:"Alexandra Constantine Bartholomew III"}},locale:"en"}},d={args:{notification:{_id:"2",event:"commented",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces"},novl:{id:"novl123",title:"The Great Adventure"},chapter:{id:"chapter456",number:3},read:!1,updatedAt:new Date().toISOString()},locale:"en"}},m={args:{notification:{_id:"3",event:"mrequest",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces"},page:{name:"My Page"},read:!1,updatedAt:new Date().toISOString()},locale:"en"}},f={args:{notification:{_id:"4",event:"mrequestaccepted",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces"},page:{name:"My Page"},read:!1,updatedAt:new Date().toISOString()},locale:"en"}},u={args:{notification:{_id:"5",event:"mrequestrejected",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces"},page:{name:"My Page"},read:!1,updatedAt:new Date().toISOString()},locale:"en"}},g={args:{notification:{_id:"6",event:"unsupported_type",creator:{_id:"user123",displayName:"John Doe",profileImage:"https://www.urnovl.co/profile.jpg"},read:!1,updatedAt:new Date().toISOString()},locale:"en"}};var b,N,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(N=t.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var y,k,_;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    notification: {
      ...FollowNotification.args.notification,
      read: true
    },
    locale: 'en'
  }
}`,...(_=(k=n.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var S,I,A;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(I=r.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var q,x,D;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(D=(x=a.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var R,F,E;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    notification: {
      ...PageFollowNotification.args.notification,
      read: true
    },
    locale: 'en'
  }
}`,...(E=(F=s.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var M,C,j;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(j=(C=c.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var P,O,J;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...FollowNotification.args,
    locale: 'es'
  }
}`,...(J=(O=l.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var T,z,U;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(U=(z=p.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var $,L,B;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(B=(L=d.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var H,G,V;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    notification: {
      _id: '3',
      event: 'mrequest',
      creator: {
        _id: 'user123',
        displayName: 'John Doe',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces'
      },
      page: {
        name: 'My Page'
      },
      read: false,
      updatedAt: new Date().toISOString()
    } as NotificationType,
    locale: 'en'
  }
}`,...(V=(G=m.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var W,Y,K;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    notification: {
      _id: '4',
      event: 'mrequestaccepted',
      creator: {
        _id: 'user123',
        displayName: 'John Doe',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces'
      },
      page: {
        name: 'My Page'
      },
      read: false,
      updatedAt: new Date().toISOString()
    } as NotificationType,
    locale: 'en'
  }
}`,...(K=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var Q,X,Z;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    notification: {
      _id: '5',
      event: 'mrequestrejected',
      creator: {
        _id: 'user123',
        displayName: 'John Doe',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces'
      },
      page: {
        name: 'My Page'
      },
      read: false,
      updatedAt: new Date().toISOString()
    } as NotificationType,
    locale: 'en'
  }
}`,...(Z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,oe,te;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};const Fe=["FollowNotification","ReadFollowNotification","AlreadyFollowingNotification","PageFollowNotification","ReadPageFollowNotification","NoProfileImageNotification","SpanishLocaleNotification","LongDisplayNameNotification","CommentNotification","MembershipRequestNotification","MembershipAcceptNotification","MembershipRejectNotification","UnsupportedNotification"];export{r as AlreadyFollowingNotification,d as CommentNotification,t as FollowNotification,p as LongDisplayNameNotification,f as MembershipAcceptNotification,u as MembershipRejectNotification,m as MembershipRequestNotification,c as NoProfileImageNotification,a as PageFollowNotification,n as ReadFollowNotification,s as ReadPageFollowNotification,l as SpanishLocaleNotification,g as UnsupportedNotification,Fe as __namedExportsOrder,Re as default};
