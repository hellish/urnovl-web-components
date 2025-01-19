import{s,g as t}from"./chunk-L4EGOTBX-2Jzo53v8.js";import"./entry-preview-BcHUnPw7.js";import{d as i,H as n,h as a,a as o}from"./index-B9J0OpMa.js";const d=`:host {
    --ur-color-background: var(--mdui-color-background);

    img {
        display: block;
        border-color: rgb(var(--ur-color-background));
        border-style: solid;
        background: #fff;
    }
}
`,c=class extends n{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.defaultAvatar="/assets/img/user/account.png",this.size="32px",this.src=void 0,this.name=void 0,this.border="0",this.radius="50%"}render(){const r=this.src||this.defaultAvatar;return a(o,{key:"e2603023b0fec3e47d0635e226dc69c7c1af708c"},a("img",{key:"7bf5f11636abe21c9a2f0ca5aa862fa7183fcc62",class:"avatar",src:r,style:{borderRadius:this.radius,height:this.size,width:this.size,borderWidth:this.border},alt:this.name||"User Avatar"}))}static get style(){return d}};i(c,[1,"ur-avatar",{size:[1],src:[1],name:[1],border:[1],radius:[1]}]);const e={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrAvatar",tagName:"ur-avatar",customElement:!0,members:[{kind:"field",name:"size",type:"string",description:"",default:"'32px'"},{kind:"field",name:"src",type:"string",description:""},{kind:"field",name:"name",type:"string",description:""},{kind:"field",name:"border",type:"string",description:"",default:"'0'"},{kind:"field",name:"radius",type:"string",description:"",default:"'50%'"}],events:[]}],exports:[{kind:"js",name:"UrAvatar",declaration:{name:"UrAvatar",module:"src/components/ur-avatar/ur-avatar.tsx"}},{kind:"custom-element-definition",name:"ur-avatar",declaration:{name:"UrAvatar",module:"src/components/ur-avatar/ur-avatar.tsx"}}]}]};s({...t()||{},...e,modules:[...(t()||{}).modules||[],...e.modules]});
