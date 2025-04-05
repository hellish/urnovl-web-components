import{k as h}from"./entry-preview-BcHUnPw7.js";import"./ur-list-item-OhVirBOP.js";import"./index-BriiHZyV.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-DddAbXmr.js";import"./class-map-CDMw4-pN.js";import"./query-assigned-elements-BInJlOXT.js";import"./get-7S0C3xNv.js";import"./anchor--mD29Q5y.js";import"./if-defined-CL77Dv0Z.js";import"./template-yncBVCyc.js";const ve={title:"Core/List Items",argTypes:{content:{control:"text",description:"Main content of the list item"},disabled:{control:"boolean",description:"Disable the list item"},active:{control:"boolean",description:"Highlight the item as active"},nonclickable:{control:"boolean",description:"Remove hover and click effects"},rounded:{control:"boolean",description:"Apply rounded corners"},alignment:{control:{type:"select",options:["start","center","end"]},description:"Vertical alignment of the item content"},icon:{control:"text",description:"Left icon (Material Icon name)"},endIcon:{control:"text",description:"Right icon (Material Icon name)"},description:{control:"text",description:"Secondary text for the list item"},href:{control:"text",description:"URL for the item link"},target:{control:{type:"select",options:["_self","_blank","_parent","_top"]},description:"Target for the item link"}}},e=t=>h`
    <ur-list-item
        ?disabled=${t.disabled}
        ?active=${t.active}
        ?nonclickable=${t.nonclickable}
        ?rounded=${t.rounded}
        alignment=${t.alignment}
        icon=${t.icon}
        end-icon=${t.endIcon}
        href=${t.href}
        target=${t.target}
        description=${t.description}
    >
        ${t.content}
    </ur-list-item>
`,n={args:{content:"Default Item",disabled:!1,active:!1,nonclickable:!1,rounded:!1,alignment:"center",icon:"",endIcon:"",description:"",href:"",target:"_self"},render:e},r={args:{content:"Disabled Item",disabled:!0},render:e},o={args:{content:"Become a partner",icon:"handshake--outlined",endIcon:"chevron_right"},render:e},s={args:{content:"Frequently asked questions",endIcon:"open_in_new"},render:e},c={args:{content:"Primary Text",description:"Secondary Text"},render:e},i={args:{content:"Active Item",active:!0},render:e},a={args:{content:"Active Item",active:!0,icon:"home--outlined"},render:e},d={args:{content:"Rounded Item",rounded:!0},render:e},l={args:{content:"Non-Clickable Item",nonclickable:!0},render:e},m={args:{content:"Aligned Item",description:"Supporting text",alignment:"start",icon:"people",endIcon:"arrow_forward"},render:e},p={args:{content:"Link Item",href:"https://example.com",target:"_blank",endIcon:"open_in_new"},render:e},u={args:{icon:"home--outlined",content:"",endIcon:""},render:e},g={render:()=>h`
        <ur-list-item end-icon="chevron_right">
            <div slot="custom" class="custom-content" part="custom-slot">
                <!-- Profile Picture -->
                <img
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5"
                    alt="Profile Picture"
                    class="custom-content__profile-picture"
                    style="border-radius: 50%; width: 64px; height: 64px; flex-shrink: 0;"
                />

                <!-- User Information -->
                <div class="custom-content__info" style="flex-grow: 1;">
                    <div class="custom-content__username" style="font-size: 18px; font-weight: bold;">Tsipidis Anastasios</div>
                    <div class="custom-content__subtitle" style="font-size: 14px; color: gray;">Author & Reader</div>
                </div>
            </div>
        </ur-list-item>
    `},f={render:()=>h`
        <ur-list-item end-icon="chevron_right">
            <div slot="custom" class="custom-content" part="custom-slot">
                <!-- Profile Picture -->


                <!-- User Information -->
                <div class="custom-content__info" style="flex-grow: 1;">
                    <div class="custom-content__username" style="font-size: 18px; font-weight: bold;">Tsipidis Anastasios</div>
                    <div class="custom-content__subtitle" style="font-size: 14px; color: gray;">Author & Reader</div>
                </div>
            </div>
        </ur-list-item>
    `};var v,I,_;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    content: 'Default Item',
    disabled: false,
    active: false,
    nonclickable: false,
    rounded: false,
    alignment: 'center',
    icon: '',
    endIcon: '',
    description: '',
    href: '',
    target: '_self'
  },
  render: ListItemTemplate
}`,...(_=(I=n.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var b,x,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    content: 'Disabled Item',
    disabled: true
  },
  render: ListItemTemplate
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var k,w,T;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    content: 'Become a partner',
    icon: 'handshake--outlined',
    endIcon: 'chevron_right'
  },
  render: ListItemTemplate
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var A,L,S;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    content: 'Frequently asked questions',
    endIcon: 'open_in_new'
  },
  render: ListItemTemplate
}`,...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var P,D,C;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    content: 'Primary Text',
    description: 'Secondary Text'
  },
  render: ListItemTemplate
}`,...(C=(D=c.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var R,$,z;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    content: 'Active Item',
    active: true
  },
  render: ListItemTemplate
}`,...(z=($=i.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var W,N,U;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    content: 'Active Item',
    active: true,
    icon: 'home--outlined'
  },
  render: ListItemTemplate
}`,...(U=(N=a.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var q,E,M;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    content: 'Rounded Item',
    rounded: true
  },
  render: ListItemTemplate
}`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var O,V,B;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    content: 'Non-Clickable Item',
    nonclickable: true
  },
  render: ListItemTemplate
}`,...(B=(V=l.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var F,H,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    content: 'Aligned Item',
    description: 'Supporting text',
    alignment: 'start',
    // Default alignment, options: 'start', 'center', 'end'
    icon: 'people',
    // Left icon
    endIcon: 'arrow_forward' // End icon
  },
  render: ListItemTemplate // Use the shared ListItemTemplate
}`,...(j=(H=m.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    content: 'Link Item',
    href: 'https://example.com',
    target: '_blank',
    endIcon: 'open_in_new'
  },
  render: ListItemTemplate
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    icon: 'home--outlined',
    // Icon for external links
    content: '',
    // No text content for this example
    endIcon: '' // No end icon
  },
  render: ListItemTemplate
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => html\`
        <ur-list-item end-icon="chevron_right">
            <div slot="custom" class="custom-content" part="custom-slot">
                <!-- Profile Picture -->
                <img
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5"
                    alt="Profile Picture"
                    class="custom-content__profile-picture"
                    style="border-radius: 50%; width: 64px; height: 64px; flex-shrink: 0;"
                />

                <!-- User Information -->
                <div class="custom-content__info" style="flex-grow: 1;">
                    <div class="custom-content__username" style="font-size: 18px; font-weight: bold;">Tsipidis Anastasios</div>
                    <div class="custom-content__subtitle" style="font-size: 14px; color: gray;">Author & Reader</div>
                </div>
            </div>
        </ur-list-item>
    \`
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,oe;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => html\`
        <ur-list-item end-icon="chevron_right">
            <div slot="custom" class="custom-content" part="custom-slot">
                <!-- Profile Picture -->


                <!-- User Information -->
                <div class="custom-content__info" style="flex-grow: 1;">
                    <div class="custom-content__username" style="font-size: 18px; font-weight: bold;">Tsipidis Anastasios</div>
                    <div class="custom-content__subtitle" style="font-size: 14px; color: gray;">Author & Reader</div>
                </div>
            </div>
        </ur-list-item>
    \`
}`,...(oe=(re=f.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const Ie=["Default","Disabled","WithIcons","WithEndIcon","WithDescription","Active","ActiveIcon","Rounded","NonClickable","VerticalAlignment","LinkItem","IconOnly","CustomContent","CustomWithAvatar"];export{i as Active,a as ActiveIcon,g as CustomContent,f as CustomWithAvatar,n as Default,r as Disabled,u as IconOnly,p as LinkItem,l as NonClickable,d as Rounded,m as VerticalAlignment,c as WithDescription,s as WithEndIcon,o as WithIcons,Ie as __namedExportsOrder,ve as default};
