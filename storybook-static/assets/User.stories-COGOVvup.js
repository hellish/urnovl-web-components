import{k as K}from"./entry-preview-BcHUnPw7.js";import"./ur-button-CblMdzBJ.js";import{s as q,g as p}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as G,H as J,c as X,h as e,a as Z}from"./index-HG5WCs1g.js";import"./index-DrFu-skq.js";import"./index-f9bQhlz_.js";import"./get-16ZjOD6f.js";import"./class-map-c_lXebLN.js";import"./template-yncBVCyc.js";import"./index-BxWH4IIK.js";import"./button-base-D5rkyElT.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-DFAJu5AH.js";import"./form-DYv8CV48.js";import"./ripple-mixin-CQ5hE0DF.js";const Y="data:image/webp;base64,UklGRtQAAABXRUJQVlA4TMgAAAAv/8f/EQfQla70pPIBIUHi/+9mIvqf8Z///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7vAQ==",r=[{userTitle:"Efthumis Malamidis",userCover:"https://urnovl-thanos-dev-test.s3.eu-north-1.amazonaws.com/urnovl-storybook-covers/profile_dummy.png",followers:3500,showStats:!0,userDescription:"Mystery author crafting gripping tales full of suspense, adventure, and thrilling twists."},{userTitle:"Efthumis Malamidis",userCover:"https://urnovl-thanos-dev-test.s3.eu-north-1.amazonaws.com/urnovl-storybook-covers/profile_dummy.png",followers:3500,showStats:!1,userDescription:"Mystery author crafting gripping tales full of suspense, adventure, and thrilling twists."},{userTitle:"Efthumis Malamidis",userCover:"https://urnovl-thanos-dev-test.s3.eu-north-1.amazonaws.com/urnovl-storybook-covers/profile_dummy.png",followers:3500,showStats:!0,userDescription:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}],ee=`:host {
    --user-width: 100%;
    --user-border-radius: 8px;
    --ur-color-on-background: var(--mdui-color-on-background);
    --ur-color-background: var(--mdui-color-background);
}

:host {
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
    container-type: inline-size;
    container-name: page;
}

:host .user {
    overflow: hidden;
    width: var(--user-width);
    border-radius: var(--user-border-radius);
}

:host .cover {
    aspect-ratio: 1;
    background-color: rgb(var(--ur-color-on-background));
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
}

:host .info {
    display: flex;
    flex-direction: column;
    padding: 8px;
    row-gap: 8px;
    background: rgb(var(--ur-color-background));
    box-sizing: border-box;
}

:host .info .title {
    color: rgb(var(--ur-color-on-background));
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Number of lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

:host .info .stats {
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    display: flex;
    flex-direction: row;
    color: rgb(var(--ur-color-on-background));
}

:host .info .stats b {
    font-weight: 700;
}

:host .info .stats .followers {
    display: flex;
}

:host .user .actions {
    padding-top: 10px;
}

:host .user .actions ur-button {
    width: 100%;
    padding-bottom: 5px;
}

:host .follow {
    display: flex;
    width: 100%;
}

:host .info .description {
    color: rgb(var(--ur-color-on-background));
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 163.636% */
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Number of lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

@container user (max-width: 300px) {
    :host .info .title {
        font-size: 14px;
        line-height: 1.2rem;
    }

    :host .info .stats {
        font-size: 11px;
    }

    :host .info .description{
        font-size: 11px;
    }

    :host .info {
        row-gap: 4px;
        padding: 4px;
    }
}
`,re=class extends J{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.userFollowClicked=X(this,"userFollowClicked",7),this.userTitle="User title",this.userCover=void 0,this.userCoverFallback=Y,this.followers=0,this.showStats=!0,this.userDescription=void 0}render(){return e(Z,{key:"7b411044aa67e570ed4f3b05e3c2c4fbef71f0b5"},e("div",{key:"e5986dbcea9381cf77351eb2a4bc38e644712808",class:"user"},e("section",{key:"dee7d847de66a10f3c655074615875b97abb299c",class:"cover",style:{backgroundImage:this.userCover?`url(${this.userCover})`:`url(${this.userCoverFallback})`}}),e("section",{key:"4922d7d4e901e3a979654298d5e26f083528e6ce",class:"info"},e("div",{key:"b201fb0c65102c1cd7cb82442330d0c58cdb9bff",class:"title"},this.userTitle),this.showStats&&e("div",{key:"6be64d72e01891168c5745681027488c793abf3e",class:"stats"},e("div",{key:"8ae08e02da2c58f13696efa9d7a4ee60b2597d78",class:"followers"},e("div",{key:"29a71fe17b28e99199d640334a508840f814926c"},e("b",{key:"e7f9b91b0f8d0c4d9336611c8841131af501a310"},this.followers)," Followers"))),e("div",{key:"80707044e2ab62aee810a067ea8235f6df355002",class:"description"},this.userDescription),e("div",{key:"bbda984ee3ba691b29f1bf401926017cd528ee21",class:"actions"},e("ur-button",{key:"8604d3a51db087df992e6210c368614d22ec1167",class:"follow",variant:"outlined",onClick:()=>this.userFollowClicked.emit()},"Follow")))))}static get style(){return ee}};G(re,[1,"ur-user",{userTitle:[1,"user-title"],userCover:[8,"user-cover"],userCoverFallback:[8,"user-cover-fallback"],followers:[2],showStats:[4,"show-stats"],userDescription:[8,"user-description"]}]);const m={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrUser",tagName:"ur-user",customElement:!0,members:[{kind:"field",name:"userTitle",type:"string",description:"",default:"'User title'"},{kind:"field",name:"userCover",type:"any",description:""},{kind:"field",name:"userCoverFallback",type:"any",description:"",default:"USER_COVER_FALLBACK"},{kind:"field",name:"followers",type:"number",description:"",default:"0"},{kind:"field",name:"showStats",type:"boolean",description:"",default:"true"},{kind:"field",name:"userDescription",type:"any",description:""}],events:[{kind:"event",name:"userFollowClicked",description:""}]}],exports:[{kind:"js",name:"UrUser",declaration:{name:"UrUser",module:"src/components/ur-user/ur-user.tsx"}},{kind:"custom-element-definition",name:"ur-user",declaration:{name:"UrUser",module:"src/components/ur-user/ur-user.tsx"}}]}]};q({...p()||{},...m,modules:[...(p()||{}).modules||[],...m.modules]});const se=({userTitle:u,userCover:W,followers:N,showStats:Q,userDescription:H,borderRadius:V="8px",width:j})=>K`
    <style>
        ur-user {
            --user-width: ${j};
            --user-border-radius: ${V};
        }
    </style>
    <ur-user
        user-description="${H}"
        user-title="${u}"
        user-cover="${W}"
        followers="${N}"
        show-stats="${Q}"
    </ur-user>
`,ve={title:"Urnovl/Business/User",render:u=>se(u)},s={args:r[0]},o={args:{...r[0],userCover:null}},n={args:r[1]},t={args:r[0]},i={args:r[2]},a={args:{...r[0],width:"250px"}},c={args:{...r[0],width:"650px"}},l={args:{...r[2],width:"650px"}},d={args:{...r[0],userCover:r[0].userCover,width:"100%",borderRadius:"0"}};var f,h,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: USERS[0]
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,v,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    userCover: null
  }
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var k,y,x;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: USERS[1]
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var S,z,C;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: USERS[0]
}`,...(C=(z=t.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var U,E,R;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: USERS[2]
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var B,D,A;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    width: '250px'
  }
}`,...(A=(D=a.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var O,_,P;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    width: '650px'
  }
}`,...(P=(_=c.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var F,I,L;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...USERS[2],
    width: '650px'
  }
}`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var M,$,T;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...USERS[0],
    userCover: USERS[0]['userCover'],
    width: '100%',
    borderRadius: '0'
  }
}`,...(T=($=d.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};const we=["Default","BrokenCover","NoStats","SmallDescription","BigDescription","SmallerWidth","BiggerWidth","BigDescriptionWithBiggerWidth","NoBorderRadius"];export{i as BigDescription,l as BigDescriptionWithBiggerWidth,c as BiggerWidth,o as BrokenCover,s as Default,d as NoBorderRadius,n as NoStats,t as SmallDescription,a as SmallerWidth,we as __namedExportsOrder,ve as default};
