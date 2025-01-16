import{k as f}from"./entry-preview-BcHUnPw7.js";import"./ur-list-item-CitvyxKy.js";import"./index-BxWH4IIK.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-B9J0OpMa.js";import"./get-16ZjOD6f.js";import"./query-assigned-elements-BInJlOXT.js";import"./class-map-c_lXebLN.js";import"./anchor-DFAJu5AH.js";import"./if-defined-CL77Dv0Z.js";import"./template-yncBVCyc.js";import"./ripple-mixin-CQ5hE0DF.js";const ge={title:"Core/List Items",argTypes:{content:{control:"text",description:"Main content of the list item"},disabled:{control:"boolean",description:"Disable the list item"},active:{control:"boolean",description:"Highlight the item as active"},nonclickable:{control:"boolean",description:"Remove hover and click effects"},rounded:{control:"boolean",description:"Apply rounded corners"},alignment:{control:{type:"select",options:["start","center","end"]},description:"Vertical alignment of the item content"},icon:{control:"text",description:"Left icon (Material Icon name)"},endIcon:{control:"text",description:"Right icon (Material Icon name)"},description:{control:"text",description:"Secondary text for the list item"},href:{control:"text",description:"URL for the item link"},target:{control:{type:"select",options:["_self","_blank","_parent","_top"]},description:"Target for the item link"}}},t=e=>f`
    <ur-list-item
        ?disabled=${e.disabled}
        ?active=${e.active}
        ?nonclickable=${e.nonclickable}
        ?rounded=${e.rounded}
        alignment=${e.alignment}
        icon=${e.icon}
        end-icon=${e.endIcon}
        href=${e.href}
        target=${e.target}
        description=${e.description}
    >
        ${e.content}
    </ur-list-item>
`,n={args:{content:"Default Item",disabled:!1,active:!1,nonclickable:!1,rounded:!1,alignment:"center",icon:"",endIcon:"",description:"",href:"",target:"_self"},render:t},r={args:{content:"Disabled Item",disabled:!0},render:t},o={args:{content:"Become a partner",icon:"handshake--outlined",endIcon:"chevron_right"},render:t},s={args:{content:"Frequently asked questions",endIcon:"open_in_new"},render:t},i={args:{content:"Primary Text",description:"Secondary Text"},render:t},c={args:{content:"Active Item",active:!0},render:t},a={args:{content:"Rounded Item",rounded:!0},render:t},d={args:{content:"Non-Clickable Item",nonclickable:!0},render:t},l={args:{content:"Aligned Item",description:"Supporting text",alignment:"start",icon:"people",endIcon:"arrow_forward"},render:t},m={args:{content:"Link Item",href:"https://example.com",target:"_blank",endIcon:"open_in_new"},render:t},p={args:{icon:"home--outlined",content:"",endIcon:""},render:t},u={render:()=>f`
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
    `},g={render:()=>f`
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
    `};var h,v,I;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var _,b,x;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    content: 'Disabled Item',
    disabled: true
  },
  render: ListItemTemplate
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,k,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    content: 'Become a partner',
    icon: 'handshake--outlined',
    endIcon: 'chevron_right'
  },
  render: ListItemTemplate
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var T,L,A;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    content: 'Frequently asked questions',
    endIcon: 'open_in_new'
  },
  render: ListItemTemplate
}`,...(A=(L=s.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var S,P,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    content: 'Primary Text',
    description: 'Secondary Text'
  },
  render: ListItemTemplate
}`,...(D=(P=i.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var C,R,$;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    content: 'Active Item',
    active: true
  },
  render: ListItemTemplate
}`,...($=(R=c.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var z,W,N;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    content: 'Rounded Item',
    rounded: true
  },
  render: ListItemTemplate
}`,...(N=(W=a.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var U,q,E;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    content: 'Non-Clickable Item',
    nonclickable: true
  },
  render: ListItemTemplate
}`,...(E=(q=d.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var M,O,V;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(O=l.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var B,F,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    content: 'Link Item',
    href: 'https://example.com',
    target: '_blank',
    endIcon: 'open_in_new'
  },
  render: ListItemTemplate
}`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var j,G,J;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: 'home--outlined',
    // Icon for external links
    content: '',
    // No text content for this example
    endIcon: '' // No end icon
  },
  render: ListItemTemplate
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const fe=["Default","Disabled","WithIcons","WithEndIcon","WithDescription","Active","Rounded","NonClickable","VerticalAlignment","LinkItem","IconOnly","CustomContent","CustomWithAvatar"];export{c as Active,u as CustomContent,g as CustomWithAvatar,n as Default,r as Disabled,p as IconOnly,m as LinkItem,d as NonClickable,a as Rounded,l as VerticalAlignment,i as WithDescription,s as WithEndIcon,o as WithIcons,fe as __namedExportsOrder,ge as default};
