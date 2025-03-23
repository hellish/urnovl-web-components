import{k}from"./entry-preview-BcHUnPw7.js";import"./ur-chapter-item-DZej2J7v.js";import"./index-DrFu-skq.js";import"./ur-time-ago-DZKVhp_V.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-BJvbtjhH.js";import"./ur-button-vHSG-pKr.js";import"./index-BRY6Z_ZR.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./template-yncBVCyc.js";import"./index-CXOzFcj5.js";import"./button-base-DxLrUPRs.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-C8TuHONp.js";import"./form-DhDC-phE.js";import"./index-pqI9kxak.js";import"./ur-button-icon-BwpYUWjp.js";import"./index-rXz1tEXk.js";import"./watch-ByvFYHv8.js";const g=e=>k`
    <ur-chapter-item
        .chapterNumber=${e.chapterNumber}
        .chapterTitle=${e.chapterTitle}
        .createdAt=${e.createdAt}
        .readingDuration=${e.readingDuration}
        .likes=${e.likes}
        .views=${e.views}
        .likesText=${e.likesText}
        .viewsText=${e.viewsText}
        .readingDurationText=${e.readingDurationText}
        .isBound=${e.isBound}
        .isCompleted=${e.isCompleted}
        .isOwner=${e.isOwner}
        .isLocked=${e.isLocked}
    ></ur-chapter-item>
`,E={title:"urnovl/Business/Chapter Item",render:g,argTypes:{chapterNumber:{control:"number",description:"Chapter number"},chapterTitle:{control:"text",description:"Title of the chapter"},createdAt:{control:"text",description:"Creation date/time"},readingDuration:{control:"number",description:"Reading duration in minutes"},likes:{control:"number",description:"Number of likes"},views:{control:"number",description:"Number of views"},isBound:{control:"boolean",description:"Whether the chapter is bound"},isCompleted:{control:"boolean",description:"Whether the chapter is completed"},likesText:{control:"text",description:"Text for likes"},viewsText:{control:"text",description:"Text for views"},isOwner:{control:"boolean",description:"Whether the chapter is owned by the user"},isLocked:{control:"boolean",description:"Whether the chapter is locked"}}},i={args:{chapterNumber:1,chapterTitle:"The Beginning",createdAt:"Jan 15, 2023",readingDuration:5,likes:24,views:3,likesText:"Likes",viewsText:"Views",readingDurationText:"Reading Duration",isBound:!1,isCompleted:!1,isOwner:!0,isLocked:!1}},t={args:{chapterNumber:1,chapterTitle:"The Beginning",createdAt:"Jan 15, 2023",readingDuration:5,likes:24,views:3,likesText:"Likes",viewsText:"Views",readingDurationText:"Reading Duration",isBound:!1,isCompleted:!1,isOwner:!0,isLocked:!0}},r={args:{chapterNumber:1,chapterTitle:"The Beginning",createdAt:"Jan 15, 2023",readingDuration:5,likes:24,views:3,likesText:"Likes",viewsText:"Views",readingDurationText:"Reading Duration",isBound:!1,isCompleted:!0,isOwner:!1,isLocked:!1}},n={args:{chapterNumber:1,chapterTitle:"The Beginning",createdAt:"Jan 15, 2023",readingDuration:5,likes:24,views:3,likesText:"Likes",viewsText:"Views",readingDurationText:"Reading Duration",isBound:!0,isCompleted:!0,isOwner:!1,isLocked:!0}};var s,o,a;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    chapterNumber: 1,
    chapterTitle: 'The Beginning',
    createdAt: 'Jan 15, 2023',
    readingDuration: 5,
    likes: 24,
    views: 3,
    likesText: 'Likes',
    viewsText: 'Views',
    readingDurationText: 'Reading Duration',
    isBound: false,
    isCompleted: false,
    isOwner: true,
    isLocked: false
  }
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    chapterNumber: 1,
    chapterTitle: 'The Beginning',
    createdAt: 'Jan 15, 2023',
    readingDuration: 5,
    likes: 24,
    views: 3,
    likesText: 'Likes',
    viewsText: 'Views',
    readingDurationText: 'Reading Duration',
    isBound: false,
    isCompleted: false,
    isOwner: true,
    isLocked: true
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,l,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    chapterNumber: 1,
    chapterTitle: 'The Beginning',
    createdAt: 'Jan 15, 2023',
    readingDuration: 5,
    likes: 24,
    views: 3,
    likesText: 'Likes',
    viewsText: 'Views',
    readingDurationText: 'Reading Duration',
    isBound: false,
    isCompleted: true,
    isOwner: false,
    isLocked: false
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var w,T,h;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    chapterNumber: 1,
    chapterTitle: 'The Beginning',
    createdAt: 'Jan 15, 2023',
    readingDuration: 5,
    likes: 24,
    views: 3,
    likesText: 'Likes',
    viewsText: 'Views',
    readingDurationText: 'Reading Duration',
    isBound: true,
    isCompleted: true,
    isOwner: false,
    isLocked: true
  }
}`,...(h=(T=n.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const j=["OwnerView","OwnerLockedView","NonOwnerView","NonOwnerLockedView"];export{n as NonOwnerLockedView,r as NonOwnerView,t as OwnerLockedView,i as OwnerView,j as __namedExportsOrder,E as default};
