import{k as e}from"./entry-preview-BcHUnPw7.js";import"./ur-list-RtU3w2ii.js";import"./ur-list-item-Ds5MZhQj.js";import{s as Z,g as h}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as $,H as ee,h as p,a as te}from"./index-B9J0OpMa.js";import"./ur-avatar-BHS-FTkx.js";import"./index-DrFu-skq.js";import"./get-w4emotEH.js";import"./query-assigned-elements-BInJlOXT.js";import"./anchor-ClLaGEwM.js";import"./if-defined-CL77Dv0Z.js";import"./template-yncBVCyc.js";import"./index-D2jzjD89.js";const se=":host{display:block;margin:0;padding:0;opacity:0.5;text-transform:uppercase}",re=class extends ee{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.text=""}render(){return p(te,{key:"2af05aede61bd4c1f0a5c769f7d1fa76c1390ab1"},p("mdui-list-subheader",{key:"9cbea0db37ae11638b9af87d933cb574bd2a8527"},this.text||p("slot",{key:"79e83e58a0db0e87444cc3fb62f19a900085aea6"})))}static get style(){return se}};$(re,[1,"ur-list-subheader",{text:[1]}]);const b={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrListSubheader",tagName:"ur-list-subheader",customElement:!0,members:[{kind:"field",name:"text",type:"string",description:"",default:"''"}],events:[]}],exports:[{kind:"js",name:"UrListSubheader",declaration:{name:"UrListSubheader",module:"src/components/ur-list/ur-list-subheader.tsx"}},{kind:"custom-element-definition",name:"ur-list-subheader",declaration:{name:"UrListSubheader",module:"src/components/ur-list/ur-list-subheader.tsx"}}]}]};Z({...h()||{},...b,modules:[...(h()||{}).modules||[],...b.modules]});const De={title:"Core/List"},ie=()=>e`
    <ur-list>
        <ur-list-item content="Item 1">Item 1</ur-list-item>
        <ur-list-item content="Item 2">Item 2</ur-list-item>
        <ur-list-item content="Item 3">Item 3</ur-list-item>
    </ur-list>
`,oe=()=>e`
    <ur-list>
        <ur-list-item icon="home--outlined" end-icon="chevron_right" content="Home"></ur-list-item>
        <ur-list-item icon="settings--outlined" end-icon="chevron_right" content="Settings"></ur-list-item>
        <ur-list-item icon="help--outlined" end-icon="chevron_right" content="Help"></ur-list-item>
    </ur-list>
`,ne=()=>e`
    <ur-list>
        <ur-list-item icon="home" content="Home" description="Go to the homepage"></ur-list-item>
        <ur-list-item icon="settings" content="Settings" description="Configure your preferences"></ur-list-item>
        <ur-list-item icon="help" content="Help" description="Get assistance"></ur-list-item>
    </ur-list>
`,ae=()=>e`
    <ur-list>
        <ur-list-item disabled content="Disabled Item 1">Disabled Item 1</ur-list-item>
        <ur-list-item disabled content="Disabled Item 2">Disabled Item 2</ur-list-item>
    </ur-list>
`,ce=()=>e`
    <ur-list>
        <ur-list-item active content="Active Item">Active Item</ur-list-item>
        <ur-list-item content="Inactive Item">Inactive Item</ur-list-item>
    </ur-list>
`,me=()=>e`
    <ur-list>
        <ur-list-item rounded content="Rounded Item 1"></ur-list-item>
        <ur-list-item rounded content="Rounded Item 2"></ur-list-item>
    </ur-list>
`,le=()=>e`
    <ur-list>
        <ur-list-item nonclickable content="Non-Clickable Item 1"></ur-list-item>
        <ur-list-item nonclickable content="Non-Clickable Item 2"></ur-list-item>
    </ur-list>
`,ue=()=>e`
    <ur-list>
        <ur-list-item alignment="start" icon="person" content="Aligned to Start"></ur-list-item>
        <ur-list-item alignment="center" icon="person" content="Aligned to Center"></ur-list-item>
        <ur-list-item alignment="end" icon="person" content="Aligned to End"></ur-list-item>
    </ur-list>
`,de=()=>e`
    <ur-list>
        <ur-list-item content="External Link" href="https://example.com" target="_blank" end-icon="open_in_new"></ur-list-item>
        <ur-list-item content="Internal Link" href="/settings" target="_self" end-icon="chevron_right"></ur-list-item>
    </ur-list>
`,pe=()=>e`
    <ur-list>
        <ur-list-item end-icon="chevron_right">
            <div slot="custom" class="custom-content" part="custom-slot">
                <img
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5"
                    alt="Profile Picture"
                    class="custom-content__profile-picture"
                    style="border-radius: 50%; width: 64px; height: 64px; flex-shrink: 0;"
                />
                <div class="custom-content__info" style="flex-grow: 1;">
                    <div class="custom-content__username" style="font-size: 18px; font-weight: bold;">John Doe</div>
                    <div class="custom-content__subtitle" style="font-size: 14px; color: gray;">Contributor</div>
                </div>
            </div>
        </ur-list-item>
        <ur-list-item end-icon="chevron_right">
            <div slot="custom" class="custom-content" part="custom-slot">
                <img
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5"
                    alt="Profile Picture"
                    class="custom-content__profile-picture"
                    style="border-radius: 50%; width: 64px; height: 64px; flex-shrink: 0;"
                />
                <div class="custom-content__info" style="flex-grow: 1;">
                    <div class="custom-content__username" style="font-size: 18px; font-weight: bold;">Jane Smith</div>
                    <div class="custom-content__subtitle" style="font-size: 14px; color: gray;">Administrator</div>
                </div>
            </div>
        </ur-list-item>
    </ur-list>
`,he=()=>e`
    <ur-list>
        <ur-list-item end-icon="chevron_right">
            <div slot="custom" class="custom-content" part="custom-slot">
                <ur-avatar src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5" name="John Doe" size="64px" radius="50%"></ur-avatar>
                <div class="custom-content__info" style="flex-grow: 1;">
                    <div class="custom-content__username" style="font-size: 18px; font-weight: bold;">John Doe</div>
                    <div class="custom-content__subtitle" style="font-size: 14px; color: gray;">Contributor</div>
                </div>
            </div>
        </ur-list-item>
    </ur-list>
`,be=()=>e`
    <ur-list>
        <ur-list-subheader text="Subheader"></ur-list-subheader>
        <ur-list-item content="Item 1"></ur-list-item>
        <ur-list-item content="Item 2"></ur-list-item>
    </ur-list>
`,t={render:ie},s={render:oe},r={render:ne},i={render:ae},o={render:ce},n={render:me},a={render:le},c={render:ue},m={render:de},l={render:pe},u={render:he},d={render:be};var g,v,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var I,_,x;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: WithIconsTemplate
}`,...(x=(_=s.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var k,S,C;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: WithDescriptionsTemplate
}`,...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var T,y,W;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: DisabledItemsTemplate
}`,...(W=(y=i.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var w,D,A;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: WithActiveItemTemplate
}`,...(A=(D=o.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var L,E,z;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: RoundedItemsTemplate
}`,...(z=(E=n.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var H,N,R;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: NonClickableItemsTemplate
}`,...(R=(N=a.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var U,V,J;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: VerticalAlignmentTemplate
}`,...(J=(V=c.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var P,j,G;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: LinksTemplate
}`,...(G=(j=m.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var M,O,q;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: CustomContentTemplate
}`,...(q=(O=l.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var B,F,K;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: CustomWithAvatarTemplate
}`,...(K=(F=u.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var Q,X,Y;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: ListWithSubheaderTemplate
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ae=["Default","WithIcons","WithDescriptions","DisabledItems","WithActiveItem","RoundedItems","NonClickableItems","VerticalAlignment","Links","CustomContent","CustomWithAvatar","WithSubheader"];export{l as CustomContent,u as CustomWithAvatar,t as Default,i as DisabledItems,m as Links,a as NonClickableItems,n as RoundedItems,c as VerticalAlignment,o as WithActiveItem,r as WithDescriptions,s as WithIcons,d as WithSubheader,Ae as __namedExportsOrder,De as default};
