import{k as C}from"./entry-preview-BcHUnPw7.js";import"./ur-button-arrow-right-DIV-TruG.js";import{s as E,g as i}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as B,H as R,h as o,a as $}from"./index-K5CyEtrH.js";import"./index-DrFu-skq.js";import"./index-Co_fSMZb.js";import"./index-BmT10YZK.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-BJTZz6Hf.js";import"./form-kvNGPYeq.js";const L=`:host {
    img {
        display: block;
        border-color: #ececec;
        border-style: solid;
        background: #fff;
    }
}
`,P=class extends R{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.size="32px",this.src=void 0,this.name=void 0,this.border="0",this.radius="50%"}render(){return o($,{key:"2a0e63656b1585fa32051c44359d03b520b3b164"},o("img",{key:"f57bf9dc30d11db33a1647f9bda7239dabce4757",class:"avatar",src:this.src,style:{borderRadius:this.radius,height:this.size,width:this.size,borderWidth:this.border},alt:this.name}))}static get style(){return L}};B(P,[1,"ur-avatar",{size:[1],src:[1],name:[1],border:[1],radius:[1]}]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrAvatar",tagName:"ur-avatar",customElement:!0,members:[{kind:"field",name:"size",type:"string",description:"",default:"'32px'"},{kind:"field",name:"src",type:"string",description:""},{kind:"field",name:"name",type:"string",description:""},{kind:"field",name:"border",type:"string",description:"",default:"'0'"},{kind:"field",name:"radius",type:"string",description:"",default:"'50%'"}],events:[]}],exports:[{kind:"js",name:"UrAvatar",declaration:{name:"UrAvatar",module:"src/components/ur-avatar/ur-avatar.tsx"}},{kind:"custom-element-definition",name:"ur-avatar",declaration:{name:"UrAvatar",module:"src/components/ur-avatar/ur-avatar.tsx"}}]}]};E({...i()||{},...d,modules:[...(i()||{}).modules||[],...d.modules]});const j=""+new URL("avatar-l2bw-8_m.svg",import.meta.url).href,F=""+new URL("publisher-pbXrxVc5.svg",import.meta.url).href,K={title:"Urnovl/Basic/Avatar"},r=({width:S="35px",border:U="0",name:_=void 0,radius:W="50%",src:z=j})=>C`
    <div style="background: #09F; height: 200px;width: 200px;display: flex;align-items:center;justify-content: center;">
        <ur-avatar size=${S} border=${U} name=${_} src="${z}" radius=${W}></ur-avatar>
    </div>
`,e={render:()=>r({width:"32px"})},t={render:()=>r({width:"96px"})},a={render:()=>r({width:"96px",border:"5px"})},s={render:()=>r({width:"96px",border:"5px",name:"Penguin Publishing",radius:"25px",src:F})},n={render:()=>r({width:"96px",border:"5px",name:"John Smith"})};var m,c,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '32px'
  })
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,l,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px'
  })
}`,...(h=(l=t.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var v,b,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px',
    border: '5px'
  })
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,f,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px',
    border: '5px',
    name: 'Penguin Publishing',
    radius: '25px',
    src: publisher
  })
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var w,y,A;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px',
    border: '5px',
    name: 'John Smith'
  })
}`,...(A=(y=n.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const Q=["Default","Bigger","WithBorder","CustomImageWithLessRadius","FullWithName"];export{t as Bigger,s as CustomImageWithLessRadius,e as Default,n as FullWithName,a as WithBorder,Q as __namedExportsOrder,K as default};