import{a as $,x as e}from"./entry-preview-CxXhOGqP.js";import"./ur-list-Bb-xVuU6.js";import"./ur-list-item-D6JMQvDe.js";import{s as ee,g as b}from"./chunk-L4EGOTBX-BPj2F1fn.js";import{d as te,H as se,h as p,a as re}from"./index-Bdp-Mrn6.js";import{h as ie,_ as oe,M as ne,c as ae}from"./class-map-CvfWHz58.js";import"./ur-avatar-Dse7lsSn.js";import"./index-DrFu-skq.js";import"./query-assigned-elements-BInJlOXT.js";import"./get-DCsNyb8P.js";import"./anchor-BJ52fAYX.js";import"./if-defined-D52-l-pg.js";import"./template-DbMQw6l-.js";import"./index-rsUJIYwf.js";const ce=$`:host{display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:default;color:rgb(var(--mdui-color-on-surface-variant));font-size:var(--mdui-typescale-label-small-size);font-weight:var(--mdui-typescale-label-small-weight);letter-spacing:var(--mdui-typescale-label-small-tracking);line-height:var(--mdui-typescale-label-small-line-height);padding-left:1rem;padding-right:1.5rem;height:3.5rem;line-height:3.5rem}`;let h=class extends ne{render(){return e`<slot></slot>`}};h.styles=[ie,ce];h=oe([ae("mdui-list-subheader")],h);const le=":host{display:block;margin:0;padding:0;opacity:0.5;text-transform:uppercase}",me=class extends se{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.text=""}render(){return p(re,{key:"e4882b953aa94598c14f3df74cc96aa1179bbf36"},p("mdui-list-subheader",{key:"a4f9323fbc90289651d4dc87e5a61cfcde159212"},this.text||p("slot",{key:"329a0f02ae30bc9c4c245ade0228a75282f86e68"})))}static get style(){return le}};te(me,[1,"ur-list-subheader",{text:[1]}]);const g={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrListSubheader",tagName:"ur-list-subheader",customElement:!0,members:[{kind:"field",name:"text",type:"string",description:"",default:"''"}],events:[]}],exports:[{kind:"js",name:"UrListSubheader",declaration:{name:"UrListSubheader",module:"src/components/ur-list-subheader/ur-list-subheader.tsx"}},{kind:"custom-element-definition",name:"ur-list-subheader",declaration:{name:"UrListSubheader",module:"src/components/ur-list-subheader/ur-list-subheader.tsx"}}]}]};ee({...b()||{},...g,modules:[...(b()||{}).modules||[],...g.modules]});const Je={title:"Core/List"},ue=()=>e`
    <ur-list>
        <ur-list-item content="Item 1">Item 1</ur-list-item>
        <ur-list-item content="Item 2">Item 2</ur-list-item>
        <ur-list-item content="Item 3">Item 3</ur-list-item>
    </ur-list>
`,de=()=>e`
    <ur-list>
        <ur-list-item icon="home--outlined" end-icon="chevron_right" content="Home"></ur-list-item>
        <ur-list-item icon="settings--outlined" end-icon="chevron_right" content="Settings"></ur-list-item>
        <ur-list-item icon="help--outlined" end-icon="chevron_right" content="Help"></ur-list-item>
    </ur-list>
`,pe=()=>e`
    <ur-list>
        <ur-list-item icon="home" content="Home" description="Go to the homepage"></ur-list-item>
        <ur-list-item icon="settings" content="Settings" description="Configure your preferences"></ur-list-item>
        <ur-list-item icon="help" content="Help" description="Get assistance"></ur-list-item>
    </ur-list>
`,he=()=>e`
    <ur-list>
        <ur-list-item disabled content="Disabled Item 1">Disabled Item 1</ur-list-item>
        <ur-list-item disabled content="Disabled Item 2">Disabled Item 2</ur-list-item>
    </ur-list>
`,be=()=>e`
    <ur-list>
        <ur-list-item active content="Active Item">Active Item</ur-list-item>
        <ur-list-item content="Inactive Item">Inactive Item</ur-list-item>
    </ur-list>
`,ge=()=>e`
    <ur-list>
        <ur-list-item rounded content="Rounded Item 1"></ur-list-item>
        <ur-list-item rounded content="Rounded Item 2"></ur-list-item>
    </ur-list>
`,ve=()=>e`
    <ur-list>
        <ur-list-item nonclickable content="Non-Clickable Item 1"></ur-list-item>
        <ur-list-item nonclickable content="Non-Clickable Item 2"></ur-list-item>
    </ur-list>
`,fe=()=>e`
    <ur-list>
        <ur-list-item alignment="start" icon="person" content="Aligned to Start"></ur-list-item>
        <ur-list-item alignment="center" icon="person" content="Aligned to Center"></ur-list-item>
        <ur-list-item alignment="end" icon="person" content="Aligned to End"></ur-list-item>
    </ur-list>
`,Ie=()=>e`
    <ur-list>
        <ur-list-item content="External Link" href="https://example.com" target="_blank" end-icon="open_in_new"></ur-list-item>
        <ur-list-item content="Internal Link" href="/settings" target="_self" end-icon="chevron_right"></ur-list-item>
    </ur-list>
`,_e=()=>e`
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
`,xe=()=>e`
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
`,Se=()=>e`
    <ur-list>
        <ur-list-subheader text="Subheader"></ur-list-subheader>
        <ur-list-item content="Item 1"></ur-list-item>
        <ur-list-item content="Item 2"></ur-list-item>
    </ur-list>
`,t={render:ue},s={render:de},r={render:pe},i={render:he},o={render:be},n={render:ge},a={render:ve},c={render:fe},l={render:Ie},m={render:_e},u={render:xe},d={render:Se};var v,f,I;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(I=(f=t.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var _,x,S;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: WithIconsTemplate
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var y,k,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: WithDescriptionsTemplate
}`,...(C=(k=r.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var w,T,W;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: DisabledItemsTemplate
}`,...(W=(T=i.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var D,A,L;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: WithActiveItemTemplate
}`,...(L=(A=o.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var z,E,H;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: RoundedItemsTemplate
}`,...(H=(E=n.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var N,R,U;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: NonClickableItemsTemplate
}`,...(U=(R=a.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,J,M;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: VerticalAlignmentTemplate
}`,...(M=(J=c.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var P,j,G;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: LinksTemplate
}`,...(G=(j=l.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var O,q,B;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: CustomContentTemplate
}`,...(B=(q=m.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var F,K,Q;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: CustomWithAvatarTemplate
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: ListWithSubheaderTemplate
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Me=["Default","WithIcons","WithDescriptions","DisabledItems","WithActiveItem","RoundedItems","NonClickableItems","VerticalAlignment","Links","CustomContent","CustomWithAvatar","WithSubheader"];export{m as CustomContent,u as CustomWithAvatar,t as Default,i as DisabledItems,l as Links,a as NonClickableItems,n as RoundedItems,c as VerticalAlignment,o as WithActiveItem,r as WithDescriptions,s as WithIcons,d as WithSubheader,Me as __namedExportsOrder,Je as default};
