import{k as V}from"./entry-preview-BcHUnPw7.js";import"./ur-button-Dx5AtQjJ.js";import{s as K,g}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as q,H as J,c as X,h as e,a as Z}from"./index-Dnt4yWMo.js";import"./index-DrFu-skq.js";import"./index-s090kVPT.js";import"./get-D9DBDJjp.js";import"./class-map-DirLTUPi.js";import"./template-yncBVCyc.js";import"./index-BXDV2pmF.js";import"./button-base-ETGWZztw.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-Bt_5eb2T.js";import"./form-D6WTgxde.js";import"./ripple-mixin-Baxn-44g.js";const Y="data:image/webp;base64,UklGRtQAAABXRUJQVlA4TMgAAAAv/8f/EQfQla70pPIBIUHi/+9mIvqf8Z///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7vAQ==",o=[{pageTitle:"Ianos Publishing House",pageCover:"https://urnovl-thanos-dev-test.s3.eu-north-1.amazonaws.com/urnovl-storybook-covers/ianos.jpg",followers:3500,showStats:!0,pageDescription:"Writing Community"},{pageTitle:"Ianos Publishing House",pageCover:"https://urnovl-thanos-dev-test.s3.eu-north-1.amazonaws.com/urnovl-storybook-covers/ianos.jpg",followers:3500,showStats:!1,pageDescription:"Writing Community"},{pageTitle:"Ianos Publishing House",pageCover:"https://urnovl-thanos-dev-test.s3.eu-north-1.amazonaws.com/urnovl-storybook-covers/ianos.jpg",followers:3500,showStats:!0,pageDescription:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}],ee=`:host {
    --page-width: 100%;
    --page-border-radius: 8px;
    --ur-color-on-background: var(--mdui-color-on-background);
    --ur-color-background: var(--mdui-color-background);
    --ur-color-on-container-lite-dark: var(--mdui-color-on-container-lite-dark);
}

:host {
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
    container-type: inline-size;
    container-name: page;
}

:host .page {
    overflow: hidden;
    width: var(--page-width);
    border-radius: var(--page-border-radius);
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

:host .page .actions {
    padding-top: 10px;
}

:host .page .actions ur-button {
    width: 100%;
    padding-bottom: 5px;
}

:host .follow {
    display: flex;
    width: 100%;
}

:host .info .description {
    color: rgb(var(--ur-color-on-container-lite-dark));
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

@container page (max-width: 300px) {
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
`,oe=class extends J{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.pageFollowClicked=X(this,"pageFollowClicked",7),this.pageTitle="Page title",this.pageCover=void 0,this.pageCoverFallback=Y,this.followers=0,this.showStats=!0,this.pageDescription=void 0}render(){return e(Z,{key:"693ae21398e414857511c312dc9acc4338a08d60"},e("div",{key:"124c752a5533ff5432a4a0f40888f8c370d86c9e",class:"page"},e("section",{key:"dec3312607094464c84b05987020baf51b6fa50a",class:"cover",style:{backgroundImage:this.pageCover?`url(${this.pageCover})`:`url(${this.pageCoverFallback})`}}),e("section",{key:"6be9fd746e36dd5dad8a19dc58cd52b5c954efdd",class:"info"},e("div",{key:"512c4ea7867d7fc3a7701074c7e2d8487cf53506",class:"title"},this.pageTitle),e("div",{key:"91a4bd1292a57e8007c992d1d86dcb5125c32f19",class:"description"},this.pageDescription),this.showStats&&e("div",{key:"997da3bbe34b633e67f37566d4f4f37ee7fcfbe0",class:"stats"},e("div",{key:"097775a4660f2fafc4012f47d0ce46317251fa31",class:"followers"},e("div",{key:"323240a81fad48050b525875530bb1ce11e543bd"},e("b",{key:"9993d924ec832dd8407fe0ec254a07ca68fa6a9f"},this.followers)," Followers"))),e("div",{key:"d927ac9a644d14900554cd6b08e1b98078f9926a",class:"actions"},e("ur-button",{key:"fa552c41c94e69f37d1bacb0ec35a82260be14df",class:"follow",variant:"outlined",onClick:()=>this.pageFollowClicked.emit()},"Follow")))))}static get style(){return ee}};q(oe,[1,"ur-page",{pageTitle:[1,"page-title"],pageCover:[8,"page-cover"],pageCoverFallback:[8,"page-cover-fallback"],followers:[2],showStats:[4,"show-stats"],pageDescription:[8,"page-description"]}]);const u={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrPage",tagName:"ur-page",customElement:!0,members:[{kind:"field",name:"pageTitle",type:"string",description:"",default:"'Page title'"},{kind:"field",name:"pageCover",type:"any",description:""},{kind:"field",name:"pageCoverFallback",type:"any",description:"",default:"PAGE_COVER_FALLBACK"},{kind:"field",name:"followers",type:"number",description:"",default:"0"},{kind:"field",name:"showStats",type:"boolean",description:"",default:"true"},{kind:"field",name:"pageDescription",type:"any",description:""}],events:[{kind:"event",name:"pageFollowClicked",description:""}]}],exports:[{kind:"js",name:"UrPage",declaration:{name:"UrPage",module:"src/components/ur-page/ur-page.tsx"}},{kind:"custom-element-definition",name:"ur-page",declaration:{name:"UrPage",module:"src/components/ur-page/ur-page.tsx"}}]}]};K({...g()||{},...u,modules:[...(g()||{}).modules||[],...u.modules]});const ne=({pageTitle:l,pageCover:T,followers:H,showStats:N,pageDescription:j,borderRadius:Q="8px",width:M})=>V`
    <style>
        ur-page {
            --page-width: ${M};
            --page-border-radius: ${Q};
        }
    </style>
    <ur-page
        page-description="${j}"
        page-title="${l}"
        page-cover="${T}"
        followers="${H}"
        show-stats="${N}"
    </ur-page>
`,ve={title:"Urnovl/Business/Page",render:l=>ne(l)},n={args:o[0]},a={args:{...o[0],pageCover:null}},r={args:o[1]},t={args:o[0]},s={args:o[2]},i={args:{...o[0],width:"250px"}},c={args:{...o[0],width:"650px"}},d={args:{...o[2],width:"650px"}},p={args:{...o[0],pageCover:o[0].pageCover,width:"100%",borderRadius:"0"}};var m,f,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: PAGES[0]
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,v,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...PAGES[0],
    pageCover: null
  }
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var w,y,x;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: PAGES[1]
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var P,C,S;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: PAGES[0]
}`,...(S=(C=t.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var z,A,E;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: PAGES[2]
}`,...(E=(A=s.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var B,D,G;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...PAGES[0],
    width: '250px'
  }
}`,...(G=(D=i.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var O,I,F;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...PAGES[0],
    width: '650px'
  }
}`,...(F=(I=c.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var _,W,L;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...PAGES[2],
    width: '650px'
  }
}`,...(L=(W=d.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var U,$,R;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...PAGES[0],
    pageCover: PAGES[0]['pageCover'],
    width: '100%',
    borderRadius: '0'
  }
}`,...(R=($=p.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};const ke=["Default","BrokenCover","NoStats","SmallDescription","BigDescription","SmallerWidth","BiggerWidth","BigDescriptionWithBiggerWidth","NoBorderRadius"];export{s as BigDescription,d as BigDescriptionWithBiggerWidth,c as BiggerWidth,a as BrokenCover,n as Default,p as NoBorderRadius,r as NoStats,t as SmallDescription,i as SmallerWidth,ke as __namedExportsOrder,ve as default};
