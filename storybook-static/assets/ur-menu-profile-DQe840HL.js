import"./ur-avatar-CqU5B781.js";import{s as n,g as i}from"./chunk-L4EGOTBX-2Jzo53v8.js";import"./entry-preview-BcHUnPw7.js";import{d as l,H as d,h as e}from"./index-Dnt4yWMo.js";const c=":host{display:block;width:100%;height:40px;padding:8px 0;--ur-color-outline:var(--mdui-color-outline);--ur-color-primary:var(--mdui-color-primary);--ur-color-on-surface:var(--mdui-color-on-surface);--webkit-user-select:none}:host(:hover){cursor:pointer;transition:background-color 0.3s ease;background-color:rgba(var(--ur-color-on-surface), .07);}:host .profile-container{display:flex;flex-direction:row;align-items:center;height:100%;overflow:hidden;}:host .profile-container .avatar{display:flex;justify-content:center;align-items:center;width:56px;height:100%;flex-shrink:0;flex:0 0 auto;}:host .profile-container .info{display:flex;row-gap:4px;padding:0 4px 0 0;flex-direction:column;flex-grow:1;min-width:0;}:host(.hide-info) .info{display:none}:host .profile-container .username{font-size:14px;line-height:16px;letter-spacing:0.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;}:host .profile-container .role{font-size:9px;line-height:12px;letter-spacing:0.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;color:rgb(var(--ur-color-outline));font-weight:700}",u=class extends d{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.userAvatar=void 0,this.userName=void 0,this.userRole=void 0}componentDidLoad(){this.resizeObserver=new ResizeObserver(t=>{for(let o of t){const r=o.contentRect.width,a=r>=57?"40px":"32px";this.el.style.setProperty("--avatar-size",a),r<57?this.el.classList.add("hide-info"):this.el.classList.remove("hide-info")}}),this.resizeObserver.observe(this.el)}disconnectedCallback(){this.resizeObserver.disconnect()}render(){return e("div",{key:"8302c5cb9d8e575d263d65b6a9996cf16d65fb66",class:"profile-container"},e("div",{key:"9149e19042fe7794f540259cc7c8effdd5bd132d",class:"avatar"},e("ur-avatar",{key:"92aa51ebd927696eb2fcaa4130f7b1db08e05538",src:this.userAvatar,name:this.userName||"User",size:"var(--avatar-size)",radius:"50%"})),e("div",{key:"96e88ff70b77c87d549aa231c86c6d16f89bff1d",class:"info"},e("div",{key:"efa10b57072a8c6f7ee77eaca5e97956a1aa6589",class:"username"},this.userName||"Guest"),e("div",{key:"867427b68f4e9367174ddafb85c0df8a075b7115",class:"role"},this.userRole||"No Role")))}get el(){return this}static get style(){return c}};l(u,[1,"ur-menu-profile",{userAvatar:[1,"user-avatar"],userName:[1,"user-name"],userRole:[1,"user-role"]}]);const s={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrMenuProfile",tagName:"ur-menu-profile",customElement:!0,members:[{kind:"field",name:"userAvatar",type:"string",description:""},{kind:"field",name:"userName",type:"string",description:""},{kind:"field",name:"userRole",type:"string",description:""}],events:[]}],exports:[{kind:"js",name:"UrMenuProfile",declaration:{name:"UrMenuProfile",module:"src/components/ur-menu-profile/ur-menu-profile.tsx"}},{kind:"custom-element-definition",name:"ur-menu-profile",declaration:{name:"UrMenuProfile",module:"src/components/ur-menu-profile/ur-menu-profile.tsx"}}]}]};n({...i()||{},...s,modules:[...(i()||{}).modules||[],...s.modules]});