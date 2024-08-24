import{k as E}from"./lit-element-CsPioU85.js";import"./ur-button-arrow-right-XMvKYA-P.js";import{s as U,g as i}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as $,H as j,h as o,a as B}from"./index-DF7slccr.js";const P=`:host {
    img {
        display: block;
        border-color: #ececec;
        border-style: solid;
        background: #fff;
    }
}
`,F=class extends j{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.size="32px",this.src=void 0,this.name=void 0,this.border="0",this.radius="50%"}render(){return o(B,{key:"7ba3a4f89f602c64624c2b19f650f05ba6a5ae99"},o("img",{key:"24921648630594e6d9a46b329871b009660b060d",class:"avatar",src:this.src,style:{borderRadius:this.radius,height:this.size,width:this.size,borderWidth:this.border},alt:this.name}))}static get style(){return P}};$(F,[1,"ur-avatar",{size:[1],src:[1],name:[1],border:[1],radius:[1]}]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrAvatar",tagName:"ur-avatar",customElement:!0,members:[{kind:"field",name:"size",type:"string",description:"",default:"'32px'"},{kind:"field",name:"src",type:"string",description:""},{kind:"field",name:"name",type:"string",description:""},{kind:"field",name:"border",type:"string",description:"",default:"'0'"},{kind:"field",name:"radius",type:"string",description:"",default:"'50%'"}],events:[]}],exports:[{kind:"js",name:"UrAvatar",declaration:{name:"UrAvatar",module:"src/components/ur-avatar/ur-avatar.tsx"}},{kind:"custom-element-definition",name:"ur-avatar",declaration:{name:"UrAvatar",module:"src/components/ur-avatar/ur-avatar.tsx"}}]}]};U({...i()||{},...d,modules:[...(i()||{}).modules||[],...d.modules]});const I={title:"Urnovl/Avatar"},e=({width:S="35px",border:W="0",name:_=void 0,radius:z="50%",src:C="/assets/images/profile.jpeg"})=>E`
    <div style="background: #09F; height: 200px;width: 200px;display: flex;align-items:center;justify-content: center;">
        <ur-avatar size=${S} border=${W} name=${_} src="${C}" radius=${z}></ur-avatar>
    </div>
`,r={render:()=>e({width:"32px"})},s={render:()=>e({width:"96px"})},a={render:()=>e({width:"96px",border:"5px"})},t={render:()=>e({width:"96px",border:"5px",name:"Penguin Publishing",radius:"25px",src:"/assets/images/publisher.svg"})},n={render:()=>e({width:"96px",border:"5px",name:"John Smith"})};var m,c,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '32px'
  })
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,l,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px'
  })
}`,...(h=(l=s.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var g,v,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px',
    border: '5px'
  })
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,f,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px',
    border: '5px',
    name: 'Penguin Publishing',
    radius: '25px',
    src: '/assets/images/publisher.svg'
  })
}`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var y,A,w;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => Avatar({
    width: '96px',
    border: '5px',
    name: 'John Smith'
  })
}`,...(w=(A=n.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};const J=["Default","Bigger","WithBorder","CustomImageWithLessRadius","FullWithName"];export{s as Bigger,t as CustomImageWithLessRadius,r as Default,n as FullWithName,a as WithBorder,J as __namedExportsOrder,I as default};
