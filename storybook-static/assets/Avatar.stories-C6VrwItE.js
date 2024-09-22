import{k as C}from"./entry-preview-BcHUnPw7.js";import"./ur-button-arrow-right-BQ228MKC.js";import{s as E,g as i}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as R,H as $,h as o,a as B}from"./index-K5CyEtrH.js";import"./index-DrFu-skq.js";import"./index-CJeS4kJa.js";import"./watch-ByvFYHv8.js";import"./button-base-DWRrg6PX.js";const L=`:host {
    img {
        display: block;
        border-color: #ececec;
        border-style: solid;
        background: #fff;
    }
}
`,P=class extends ${constructor(){super(),this.__registerHost(),this.__attachShadow(),this.size="32px",this.src=void 0,this.name=void 0,this.border="0",this.radius="50%"}render(){return o(B,{key:"3fd78c954482f8a44f9dc0949a279b2b09b8f7b5"},o("img",{key:"1209d222825919f2c6a97be6dfb446b3eb2a6bda",class:"avatar",src:this.src,style:{borderRadius:this.radius,height:this.size,width:this.size,borderWidth:this.border},alt:this.name}))}static get style(){return L}};R(P,[1,"ur-avatar",{size:[1],src:[1],name:[1],border:[1],radius:[1]}]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrAvatar",tagName:"ur-avatar",customElement:!0,members:[{kind:"field",name:"size",type:"string",description:"",default:"'32px'"},{kind:"field",name:"src",type:"string",description:""},{kind:"field",name:"name",type:"string",description:""},{kind:"field",name:"border",type:"string",description:"",default:"'0'"},{kind:"field",name:"radius",type:"string",description:"",default:"'50%'"}],events:[]}],exports:[{kind:"js",name:"UrAvatar",declaration:{name:"UrAvatar",module:"src/components/ur-avatar/ur-avatar.tsx"}},{kind:"custom-element-definition",name:"ur-avatar",declaration:{name:"UrAvatar",module:"src/components/ur-avatar/ur-avatar.tsx"}}]}]};E({...i()||{},...d,modules:[...(i()||{}).modules||[],...d.modules]});const j=""+new URL("avatar-l2bw-8_m.svg",import.meta.url).href,F=""+new URL("publisher-pbXrxVc5.svg",import.meta.url).href,X={title:"Urnovl/Avatar"},r=({width:S="35px",border:U="0",name:_=void 0,radius:W="50%",src:z=j})=>C`
    <div style="background: #09F; height: 200px;width: 200px;display: flex;align-items:center;justify-content: center;">
        <ur-avatar size=${S} border=${U} name=${_} src="${z}" radius=${W}></ur-avatar>
    </div>
`,e={render:()=>r({width:"32px"})},a={render:()=>r({width:"96px"})},t={render:()=>r({width:"96px",border:"5px"})},s={render:()=>r({width:"96px",border:"5px",name:"Penguin Publishing",radius:"25px",src:F})},n={render:()=>r({width:"96px",border:"5px",name:"John Smith"})};var m,c,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '32px'
  })
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,l,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px'
  })
}`,...(h=(l=a.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var v,b,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px',
    border: '5px'
  })
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,x,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px',
    border: '5px',
    name: 'Penguin Publishing',
    radius: '25px',
    src: publisher
  })
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var w,y,A;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px',
    border: '5px',
    name: 'John Smith'
  })
}`,...(A=(y=n.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const q=["Default","Bigger","WithBorder","CustomImageWithLessRadius","FullWithName"];export{a as Bigger,s as CustomImageWithLessRadius,e as Default,n as FullWithName,t as WithBorder,q as __namedExportsOrder,X as default};
