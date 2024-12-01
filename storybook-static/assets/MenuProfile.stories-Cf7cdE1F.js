import{k as R}from"./entry-preview-BcHUnPw7.js";import"./ur-avatar-DeRlyDn-.js";import{s as k,g as l}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as N,H as T,h as e}from"./index-Dnt4yWMo.js";import"./index-DrFu-skq.js";const z=":host{display:block;width:100%;height:40px;padding:8px 0;--ur-color-outline:var(--mdui-color-outline);--ur-color-primary:var(--mdui-color-primary);--ur-color-on-surface:var(--mdui-color-on-surface);--webkit-user-select:none}:host(:hover){cursor:pointer;transition:background-color 0.3s ease;background-color:rgba(var(--ur-color-on-surface), .07);}:host .profile-container{display:flex;flex-direction:row;align-items:center;height:100%;overflow:hidden;}:host .profile-container .avatar{display:flex;justify-content:center;align-items:center;width:56px;height:100%;flex-shrink:0;flex:0 0 auto;}:host .profile-container .info{display:flex;row-gap:4px;padding:0 4px 0 0;flex-direction:column;flex-grow:1;min-width:0;}:host(.hide-info) .info{display:none}:host .profile-container .username{font-size:14px;line-height:16px;letter-spacing:0.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;}:host .profile-container .role{font-size:9px;line-height:12px;letter-spacing:0.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;color:rgb(var(--ur-color-outline));font-weight:700}",M=class extends T{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.userAvatar=void 0,this.userName=void 0,this.userRole=void 0}componentDidLoad(){this.resizeObserver=new ResizeObserver(r=>{for(let n of r){const a=n.contentRect.width,d=a>=57?"40px":"32px";this.el.style.setProperty("--avatar-size",d),a<57?this.el.classList.add("hide-info"):this.el.classList.remove("hide-info")}}),this.resizeObserver.observe(this.el)}disconnectedCallback(){this.resizeObserver.disconnect()}render(){return e("div",{key:"50b4daa38c1dfe66dd7b2cb72ecf297f2ddfd2d1",class:"profile-container"},e("div",{key:"8c8ebb6de6ae4b7361c6dc0e4f3303bd398e0a25",class:"avatar"},e("ur-avatar",{key:"54628c6197b2c571bba4c00023c255bf29f46687",src:this.userAvatar,name:this.userName||"User",size:"var(--avatar-size)",radius:"50%"})),e("div",{key:"6680af86227a9f086defbe55ec109aa4325075ad",class:"info"},e("div",{key:"ebb73db066fb82a7ea87041edd2fee4a5bf98014",class:"username"},this.userName||"Guest"),e("div",{key:"8bfd41b7404be778d94887d14beb36efd584dff5",class:"role"},this.userRole||"No Role")))}get el(){return this}static get style(){return z}};N(M,[1,"ur-menu-profile",{userAvatar:[1,"user-avatar"],userName:[1,"user-name"],userRole:[1,"user-role"]}]);const c={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrMenuProfile",tagName:"ur-menu-profile",customElement:!0,members:[{kind:"field",name:"userAvatar",type:"string",description:""},{kind:"field",name:"userName",type:"string",description:""},{kind:"field",name:"userRole",type:"string",description:""}],events:[]}],exports:[{kind:"js",name:"UrMenuProfile",declaration:{name:"UrMenuProfile",module:"src/components/ur-menu-profile/ur-menu-profile.tsx"}},{kind:"custom-element-definition",name:"ur-menu-profile",declaration:{name:"UrMenuProfile",module:"src/components/ur-menu-profile/ur-menu-profile.tsx"}}]}]};k({...l()||{},...c,modules:[...(l()||{}).modules||[],...c.modules]});const P=({userAvatar:r="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",userName:n="John Doe",userRole:a="Admin",wrapperWidth:d="220px"})=>R`
    <div style="width: ${d}; border: 1px solid #ddd;">
        <ur-menu-profile
            user-avatar=${r}
            user-name=${n}
            user-role=${a}
        ></ur-menu-profile>
    </div>
`,E={title:"Urnovl/Basic/Menu Profile",render:r=>P(r),argTypes:{userAvatar:{control:"text",description:"Avatar URL of the user"},userName:{control:"text",description:"Name of the user"},userRole:{control:"text",description:"Role of the user"},wrapperWidth:{control:"text",description:"Width of the wrapper to test avatar resizing"}}},t={args:{userAvatar:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",userName:"Tasos Tsipidis",userRole:"Author & Reader",wrapperWidth:"220px"}},s={args:{userAvatar:"",userName:"Guest",userRole:""}},o={args:{userAvatar:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",userName:"Tasos Tsipidis",userRole:"Author & Reader",wrapperWidth:"56px"}},i={args:{userAvatar:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",userName:"A very long user name that will definitely overflow",userRole:"A very long role name that will also overflow and truncate",wrapperWidth:"220px"}};var u,p,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
    userName: 'Tasos Tsipidis',
    userRole: 'Author & Reader',
    wrapperWidth: '220px'
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,h,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    userAvatar: '',
    userName: 'Guest',
    userRole: ''
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var w,b,g;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
    userName: 'Tasos Tsipidis',
    userRole: 'Author & Reader',
    wrapperWidth: '56px' // Small wrapper for avatar-only
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,y,A;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
    userName: 'A very long user name that will definitely overflow',
    userRole: 'A very long role name that will also overflow and truncate',
    wrapperWidth: '220px' // Small wrapper to force truncation
  }
}`,...(A=(y=i.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const C=["Default","Guest","SmallAvatarOnly","TruncatedText"];export{t as Default,s as Guest,o as SmallAvatarOnly,i as TruncatedText,C as __namedExportsOrder,E as default};
