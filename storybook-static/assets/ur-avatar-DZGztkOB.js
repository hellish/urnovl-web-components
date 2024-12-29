import{s,g as a}from"./chunk-L4EGOTBX-2Jzo53v8.js";import"./entry-preview-BcHUnPw7.js";import{d as i,H as n,h as e,a as o}from"./index-Dnt4yWMo.js";const d=`:host {
    --ur-color-background: var(--mdui-color-background);

    img {
        display: block;
        border-color: rgb(var(--ur-color-background));
        border-style: solid;
        background: #fff;
    }
}
`,c=class extends n{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.defaultAvatar="/assets/img/user/account.png",this.size="32px",this.src=void 0,this.name=void 0,this.border="0",this.radius="50%"}render(){const r=this.src||this.defaultAvatar;return e(o,{key:"79ac98676d1abcf3299b3e8af19ee03ea08e86d1"},e("img",{key:"6549c2223299f7cbc724a49eafc5821a3aaa730b",class:"avatar",src:r,style:{borderRadius:this.radius,height:this.size,width:this.size,borderWidth:this.border},alt:this.name||"User Avatar"}))}static get style(){return d}};i(c,[1,"ur-avatar",{size:[1],src:[1],name:[1],border:[1],radius:[1]}]);const t={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrAvatar",tagName:"ur-avatar",customElement:!0,members:[{kind:"field",name:"size",type:"string",description:"",default:"'32px'"},{kind:"field",name:"src",type:"string",description:""},{kind:"field",name:"name",type:"string",description:""},{kind:"field",name:"border",type:"string",description:"",default:"'0'"},{kind:"field",name:"radius",type:"string",description:"",default:"'50%'"}],events:[]}],exports:[{kind:"js",name:"UrAvatar",declaration:{name:"UrAvatar",module:"src/components/ur-avatar/ur-avatar.tsx"}},{kind:"custom-element-definition",name:"ur-avatar",declaration:{name:"UrAvatar",module:"src/components/ur-avatar/ur-avatar.tsx"}}]}]};s({...a()||{},...t,modules:[...(a()||{}).modules||[],...t.modules]});
