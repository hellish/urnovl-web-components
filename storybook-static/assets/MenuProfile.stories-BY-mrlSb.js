import{k as A}from"./entry-preview-BcHUnPw7.js";import"./ur-menu-profile-vWb4wJDk.js";import"./index-DrFu-skq.js";import"./ur-avatar-BlIkDKJr.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-B9J0OpMa.js";const x=({userAvatar:s="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",userName:f="John Doe",userRole:g="Admin",wrapperWidth:b="220px"})=>A`
    <div style="width: ${b}; border: 1px solid #ddd;">
        <ur-menu-profile
            user-avatar=${s}
            user-name=${f}
            user-role=${g}
        ></ur-menu-profile>
    </div>
`,G={title:"Urnovl/Basic/Menu Profile",render:s=>x(s),argTypes:{userAvatar:{control:"text",description:"Avatar URL of the user"},userName:{control:"text",description:"Name of the user"},userRole:{control:"text",description:"Role of the user"},wrapperWidth:{control:"text",description:"Width of the wrapper to test avatar resizing"}}},r={args:{userAvatar:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",userName:"Tasos Tsipidis",userRole:"Author & Reader",wrapperWidth:"220px"}},e={args:{userAvatar:"",userName:"Guest",userRole:""}},a={args:{userAvatar:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",userName:"Tasos Tsipidis",userRole:"Author & Reader",wrapperWidth:"56px"}},t={args:{userAvatar:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",userName:"A very long user name that will definitely overflow",userRole:"A very long role name that will also overflow and truncate",wrapperWidth:"220px"}};var o,d,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
    userName: 'Tasos Tsipidis',
    userRole: 'Author & Reader',
    wrapperWidth: '220px'
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var n,p,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    userAvatar: '',
    userName: 'Guest',
    userRole: ''
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var i,l,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
    userName: 'Tasos Tsipidis',
    userRole: 'Author & Reader',
    wrapperWidth: '56px' // Small wrapper for avatar-only
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var v,w,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
    userName: 'A very long user name that will definitely overflow',
    userRole: 'A very long role name that will also overflow and truncate',
    wrapperWidth: '220px' // Small wrapper to force truncation
  }
}`,...(h=(w=t.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const $=["Default","Guest","SmallAvatarOnly","TruncatedText"];export{r as Default,e as Guest,a as SmallAvatarOnly,t as TruncatedText,$ as __namedExportsOrder,G as default};
