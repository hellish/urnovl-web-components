import{k as C}from"./lit-element-CPYlYYac.js";import"./ur-button-arrow-right-B7lg_7r_.js";import{s as E,g as i}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as R,H as $,h as o,a as B}from"./index-K5CyEtrH.js";import"./index-BAsvbfkq.js";import"./directive-helpers-HhY1hBkG.js";const L=`:host {
    img {
        display: block;
        border-color: #ececec;
        border-style: solid;
        background: #fff;
    }
}
`,P=class extends ${constructor(){super(),this.__registerHost(),this.__attachShadow(),this.size="32px",this.src=void 0,this.name=void 0,this.border="0",this.radius="50%"}render(){return o(B,{key:"1452eb09a83b4ebe1ed6f2e9c0ffcd671fec7bca"},o("img",{key:"456c5c76198705aaf587fd99774de6ec5375a38c",class:"avatar",src:this.src,style:{borderRadius:this.radius,height:this.size,width:this.size,borderWidth:this.border},alt:this.name}))}static get style(){return L}};R(P,[1,"ur-avatar",{size:[1],src:[1],name:[1],border:[1],radius:[1]}]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrAvatar",tagName:"ur-avatar",customElement:!0,members:[{kind:"field",name:"size",type:"string",description:"",default:"'32px'"},{kind:"field",name:"src",type:"string",description:""},{kind:"field",name:"name",type:"string",description:""},{kind:"field",name:"border",type:"string",description:"",default:"'0'"},{kind:"field",name:"radius",type:"string",description:"",default:"'50%'"}],events:[]}],exports:[{kind:"js",name:"UrAvatar",declaration:{name:"UrAvatar",module:"src/components/ur-avatar/ur-avatar.tsx"}},{kind:"custom-element-definition",name:"ur-avatar",declaration:{name:"UrAvatar",module:"src/components/ur-avatar/ur-avatar.tsx"}}]}]};E({...i()||{},...d,modules:[...(i()||{}).modules||[],...d.modules]});const j=""+new URL("avatar-l2bw-8_m.svg",import.meta.url).href,F=""+new URL("publisher-pbXrxVc5.svg",import.meta.url).href,V={title:"Urnovl/Avatar"},e=({width:S="35px",border:U="0",name:_=void 0,radius:W="50%",src:z=j})=>C`
    <div style="background: #09F; height: 200px;width: 200px;display: flex;align-items:center;justify-content: center;">
        <ur-avatar size=${S} border=${U} name=${_} src="${z}" radius=${W}></ur-avatar>
    </div>
`,r={render:()=>e({width:"32px"})},a={render:()=>e({width:"96px"})},t={render:()=>e({width:"96px",border:"5px"})},s={render:()=>e({width:"96px",border:"5px",name:"Penguin Publishing",radius:"25px",src:F})},n={render:()=>e({width:"96px",border:"5px",name:"John Smith"})};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '32px'
  })
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,l,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px'
  })
}`,...(h=(l=a.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var v,g,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px',
    border: '5px'
  })
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,b,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px',
    border: '5px',
    name: 'Penguin Publishing',
    radius: '25px',
    src: publisher
  })
}`,...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var w,y,A;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px',
    border: '5px',
    name: 'John Smith'
  })
}`,...(A=(y=n.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const O=["Default","Bigger","WithBorder","CustomImageWithLessRadius","FullWithName"];export{a as Bigger,s as CustomImageWithLessRadius,r as Default,n as FullWithName,t as WithBorder,O as __namedExportsOrder,V as default};