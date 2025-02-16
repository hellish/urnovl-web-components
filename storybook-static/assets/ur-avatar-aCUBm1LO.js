import{s as i,g as a}from"./chunk-L4EGOTBX-2Jzo53v8.js";import"./entry-preview-BcHUnPw7.js";import{d as n,H as o,f as e,h as r,a as d}from"./index-B9J0OpMa.js";const c=`:host {
    --ur-color-background: var(--mdui-color-background);

    img {
        display: block;
        border-color: rgb(var(--ur-color-background));
        border-style: solid;
        background: #fff;
    }
}
`,m=class extends o{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.defaultAvatar="/assets/img/user/account.png",this.size="32px",this.src=void 0,this.name=void 0,this.border="0",this.radius="50%"}componentDidLoad(){const t=new Image;t.src=this.src,t.onload=()=>{e(this)},t.onerror=()=>{this.src=this.defaultAvatar,e(this)}}render(){const t=this.src||this.defaultAvatar;return r(d,{key:"60bccb75b9798f67b1dcb3425673c64d416c5353"},r("img",{key:"f05893e2faf8f9a9ef1839bc1938688cc66d3bad",class:"avatar",src:t,style:{borderRadius:this.radius,height:this.size,width:this.size,borderWidth:this.border},alt:this.name||"User Avatar"}))}static get style(){return c}};n(m,[1,"ur-avatar",{size:[1],src:[1],name:[1],border:[1],radius:[1]}]);const s={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrAvatar",tagName:"ur-avatar",customElement:!0,members:[{kind:"field",name:"size",type:"string",description:"",default:"'32px'"},{kind:"field",name:"src",type:"string",description:""},{kind:"field",name:"name",type:"string",description:""},{kind:"field",name:"border",type:"string",description:"",default:"'0'"},{kind:"field",name:"radius",type:"string",description:"",default:"'50%'"}],events:[]}],exports:[{kind:"js",name:"UrAvatar",declaration:{name:"UrAvatar",module:"src/components/ur-avatar/ur-avatar.tsx"}},{kind:"custom-element-definition",name:"ur-avatar",declaration:{name:"UrAvatar",module:"src/components/ur-avatar/ur-avatar.tsx"}}]}]};i({...a()||{},...s,modules:[...(a()||{}).modules||[],...s.modules]});
