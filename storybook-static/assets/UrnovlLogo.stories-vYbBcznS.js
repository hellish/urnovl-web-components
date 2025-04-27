import{k as D}from"./entry-preview-BcHUnPw7.js";import"./ur-logo-Dm-kYCt8.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-DddAbXmr.js";const x=({width:f,height:y,color:C,rotation:w,opacity:F})=>D`
  <ur-logo 
    width="${f}" 
    height="${y}" 
    color="${C}" 
    rotation="${w}" 
    opacity="${F}">
  </ur-logo>
`,b={title:"Core/Logo",render:x,argTypes:{width:{control:"text",defaultValue:"70",description:"Width of the logo in pixels"},height:{control:"text",defaultValue:"19",description:"Height of the logo in pixels"},color:{control:"color",defaultValue:"currentColor",description:"Fill color of the logo"},rotation:{control:{type:"number",min:0,max:360,step:1},defaultValue:0,description:"Rotation of the logo in degrees"},opacity:{control:{type:"number",min:0,max:1,step:.1},defaultValue:.9,description:"Opacity of the logo (0 is transparent, 1 is fully opaque)"}}},o={args:{width:"70",height:"19",color:"currentColor",rotation:0,opacity:.9}},t={args:{width:"100",height:"50",color:"#FF5733",rotation:0,opacity:.8}},r={args:{width:"70",height:"19",color:"currentColor",rotation:45,opacity:.7}},e={args:{width:"70",height:"19",color:"#0000FF",rotation:180,opacity:1}};var a,n,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    width: '70',
    // Default width
    height: '19',
    // Default height
    color: 'currentColor',
    // Default color
    rotation: 0,
    // Default rotation
    opacity: 0.9 // Default opacity
  }
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var s,l,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    width: '100',
    // Custom width
    height: '50',
    // Custom height
    color: '#FF5733',
    // Custom color
    rotation: 0,
    // Default rotation
    opacity: 0.8 // Slightly more transparent
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,p,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    width: '70',
    // Default width
    height: '19',
    // Default height
    color: 'currentColor',
    // Default color
    rotation: 45,
    // 45 degrees rotation
    opacity: 0.7 // More transparency
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,g,m;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    width: '70',
    height: '19',
    color: '#0000FF',
    // Custom blue color
    rotation: 180,
    // 180 degrees rotation
    opacity: 1 // Fully opaque
  }
}`,...(m=(g=e.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const _=["Default","CustomSizeAndColor","RotatedLogo","FullyRotatedLogo"];export{t as CustomSizeAndColor,o as Default,e as FullyRotatedLogo,r as RotatedLogo,_ as __namedExportsOrder,b as default};
