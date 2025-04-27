import{x as s}from"./entry-preview-CxXhOGqP.js";import"./ur-button-icon-CMeFWtn0.js";import{s as S,g as d}from"./chunk-L4EGOTBX-BPj2F1fn.js";import{d as x,H as B,c as l,h as a,a as V}from"./index-Bdp-Mrn6.js";import"./top-app-bar-kiCgv1B8.js";import"./index-rsUJIYwf.js";import"./ur-select-D8yQVlKJ.js";import"./ur-linear-progress-BRO9-mZT.js";import"./index-DrFu-skq.js";import"./index-CFISRIGu.js";import"./class-map-CvfWHz58.js";import"./get-DCsNyb8P.js";import"./watch-ByvFYHv8.js";import"./template-DbMQw6l-.js";import"./button-base--7WXG1Vh.js";import"./if-defined-D52-l-pg.js";import"./anchor-BJ52fAYX.js";import"./form-CWZnyZ12.js";import"./index-pr7ns5cs.js";import"./query-assigned-elements-BInJlOXT.js";import"./scrollBehavior-BFu5gf--.js";import"./layout-item-base-fPN3unkk.js";import"./observeResize-Dehp4heo.js";import"./uniqueId-Bqzl4fNd.js";import"./array-twMukXEq.js";import"./when-BR7zwNJC.js";import"./default-value-dSVzt9o_.js";import"./index-CZORzzaO.js";import"./check-rTkI7oyp.js";import"./svg-tag-B1kmCZ6g.js";import"./clear-HN6fad0k.js";import"./motion-C_TLgITA.js";import"./index-D39jp6j-.js";import"./live-DwPmnOYN.js";import"./menu-item-Cj3n2gSr.js";const O=":host{display:flex;align-items:center;width:100%;--ur-color-on-background:var(--mdui-color-on-background);--ur-color-on-surface:var(--mdui-color-on-surface);--ur-color-on-surface-variant:var(--mdui-color-on-surface-variant);--ur-state-layers-outline-variant-opacity-16:var(--mdui-state-layers-outline-variant-opacity-16)}:host .urnovl-logo{width:70px;height:19px;margin:auto 8;fill:var(--ur-color-on-background, #000)}:host mdui-top-app-bar{width:100%;display:flex;align-items:center;justify-content:center;column-gap:8px;padding:0 16px}:host mdui-top-app-bar[variant='small']{height:48px}:host mdui-top-app-bar-title{flex:1;font-size:14px;line-height:16px;letter-spacing:-0.26px;color:var(--ur-color-on-background, #000);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;display:block;}:host ur-button-icon{margin-right:initial}:host .read-progress{position:absolute;left:0;top:100%;width:100%;height:4px;background:red}",_=O+"",A=class extends B{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.readingSettingsClick=l(this,"readingSettingsClick",7),this.storySummaryClick=l(this,"storySummaryClick",7),this.editChapterClick=l(this,"editChapterClick",7),this.chapterButtonClick=l(this,"chapterButtonClick",7),this.variant="small",this.isChapterOwner=!1,this.deviceVariant="desktop",this.scrollBehavior="hide",this.scrollThreshold=50,this.topValue="0",this.handleReadingSettingsClick=()=>{console.log("Handle read settings"),this.readingSettingsClick.emit()},this.handleStorySummaryClick=()=>{console.log("Story summary click"),this.storySummaryClick.emit()},this.handleEditChapterClick=()=>{console.log("Edit clicked"),this.editChapterClick.emit()},this.handleChapterButtonClick=()=>{console.log("Chapter button clicked"),this.chapterButtonClick.emit()}}initMutationObserver(){var e;const t=(e=this.el.shadowRoot)===null||e===void 0?void 0:e.querySelector("mdui-top-app-bar");t&&(this.mutationObserver=new MutationObserver(r=>{r.forEach(i=>{if(i.type==="attributes"&&i.attributeName==="hide"){const w=t.hasAttribute("hide");this.updateTopValue(w)}})}),this.mutationObserver.observe(t,{attributes:!0}))}updateTopValue(e){var t;const r=(t=this.el.shadowRoot)===null||t===void 0?void 0:t.querySelector("mdui-top-app-bar");if(r){const i=r.offsetHeight;this.topValue=e?`-${i}px`:"0",r.style.top=this.topValue}}componentDidLoad(){var e;this.initMutationObserver();const t=(e=this.el.shadowRoot)===null||e===void 0?void 0:e.querySelector("mdui-top-app-bar");if(t){const r=t.hasAttribute("hide");this.updateTopValue(r)}}disconnectedCallback(){this.mutationObserver&&this.mutationObserver.disconnect()}render(){return a(V,{key:"26b0baf20bece02e8a6c981e4e362e52b54938e1"},a("mdui-top-app-bar",{key:"8fe549fbf8121a1ecd8cf80b016cebf4abf73375",variant:this.variant,"scroll-target":".example-scroll-target","scroll-behavior":this.scrollBehavior,"scroll-threshold":this.scrollThreshold,style:{top:this.topValue}},a("mdui-top-app-bar-title",{key:"d40b59f78c3a2d003f2a35c5e556f8ab4c80b538"},this.novelTitle),this.isChapterOwner&&a("ur-button-icon",{key:"4fc7b06ae9ed43d64864c6f4600e6cd81d35ef96",icon:"edit",variant:"standard","aria-label":"Edit Chapter",onClick:this.handleEditChapterClick}),this.deviceVariant==="desktop"&&a("slot",{key:"7e2e2e62577a3d459aae5b51d378dada0479e1b9",name:"chapter-select"}),this.deviceVariant==="mobile"&&a("ur-button-icon",{key:"acb03b4377d8fa6b45d547bbe4ad223bcd664a66",icon:"list",variant:"standard","aria-label":"Select Chapter",onClick:this.handleChapterButtonClick}),a("ur-button-icon",{key:"f02a08c8db4cd6c5bb0766ae2a0a3d3b0ffe0aae",icon:"info_outline",variant:"standard","aria-label":"Story Summary",onClick:this.handleStorySummaryClick}),a("ur-button-icon",{key:"64a0552a2344c30532771d2c4f05641777c48bd3",icon:"text_format--outlined",variant:"standard","aria-label":"Reading Settings",onClick:this.handleReadingSettingsClick}),a("div",{key:"5103083ba00dadfe957d0cdf2802eff531b72d40",class:"read-progress"},a("slot",{key:"327e360d0be9ea56dafb879ae424a0d0475e3a9c",name:"read-progress"}))))}get el(){return this}static get style(){return _}};x(A,[1,"ur-read-top-app-bar",{variant:[1],novelTitle:[1,"novel-title"],isChapterOwner:[4,"is-chapter-owner"],deviceVariant:[1,"device-variant"],scrollBehavior:[1,"scroll-behavior"],scrollThreshold:[2,"scroll-threshold"],topValue:[32]}]);const c={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrReadTopAppBar",tagName:"ur-read-top-app-bar",customElement:!0,members:[{kind:"field",name:"variant",type:"string",description:"Variant of the top app bar (e.g., 'small', 'medium', etc.)",default:"'small'"},{kind:"field",name:"novelTitle",type:"string",description:"Title of the novel"},{kind:"field",name:"isChapterOwner",type:"boolean",description:"Whether the current user is the chapter owner",default:"false"},{kind:"field",name:"deviceVariant",type:"string",description:"",default:"'desktop'"},{kind:"field",name:"scrollBehavior",type:"string",description:"Behavior of the top app bar on scroll",default:"'hide'"},{kind:"field",name:"scrollThreshold",type:"number",description:"Scroll threshold in pixels (default: 50)",default:"50"}],events:[{kind:"event",name:"readingSettingsClick",description:""},{kind:"event",name:"storySummaryClick",description:""},{kind:"event",name:"editChapterClick",description:""},{kind:"event",name:"chapterButtonClick",description:""}]}],exports:[{kind:"js",name:"UrReadTopAppBar",declaration:{name:"UrReadTopAppBar",module:"src/components/ur-read-top-app-bar/ur-read-top-app-bar.tsx"}},{kind:"custom-element-definition",name:"ur-read-top-app-bar",declaration:{name:"UrReadTopAppBar",module:"src/components/ur-read-top-app-bar/ur-read-top-app-bar.tsx"}}]}]};S({...d()||{},...c,modules:[...(d()||{}).modules||[],...c.modules]});var u=Object.freeze,E=Object.defineProperty,H=(e,t)=>u(E(e,"raw",{value:u(e.slice())})),h;const R=e=>{const t=[{id:"1",title:"Beneath the Crimson Sky"},{id:"2",title:"The Hidden Truth"},{id:"3",title:"Echoes of the Forgotten"},{id:"4",title:"Whispers in the Dark"},{id:"5",title:"The Silent Horizon"},{id:"6",title:"A Kingdom’s Fall"},{id:"7",title:"The Final Stand"},{id:"8",title:"Shadows of the Unknown"},{id:"9",title:"The Lost Journey"},{id:"10",title:"Dreams of Fire"},{id:"11",title:"The Eternal Quest"},{id:"12",title:"Paths Unseen"},{id:"13",title:"Secrets of the Past"},{id:"14",title:"The Rise of Heroes"},{id:"15",title:"Fate’s Edge"}];return s(h||(h=H([`
        <ur-read-top-app-bar
            novel-title="`,`"
            variant="`,`"
            device-variant="`,`"
            is-chapter-owner="`,`"
            .scroll-behavior="`,`"
            .scroll-threshold="`,`"
        >
        <!-- Chapter Select Dropdown -->
        `,`

            <!-- Linear Progress Bar -->
            <ur-linear-progress slot="read-progress" id="progress-bar" value="0" max="1"></ur-linear-progress>
        </ur-read-top-app-bar>

        <!-- Scrollable Container -->
        <div class="example-read-page example-scroll-target" style="background: #F0F0F0; height: 250px; overflow: auto;" onscroll="updateProgress()">
            <div style="height: 1000px;"></div>
        </div>

        <script>
            // Function to update the progress bar based on the scroll position
            function updateProgress() {
                const scrollable = document.querySelector('.example-read-page');
                const progressBar = document.querySelector('#progress-bar');

                if (scrollable && progressBar) {
                    const scrollHeight = scrollable.scrollHeight - scrollable.clientHeight;
                    const scrollTop = scrollable.scrollTop;

                    // Calculate the percentage of scroll completion (0 to 1)
                    const progressValue = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

                    // Update the progress bar's value
                    progressBar.value = progressValue;
                }
            }

            // Initialize progress bar on load
            document.addEventListener('DOMContentLoaded', updateProgress);
        <\/script>
    `])),e.novelTitle,e.variant,e.deviceVariant,e.isChapterOwner,e.scrollBehavior||"hide",e.scrollThreshold||50,e.deviceVariant==="desktop"?s`
                <ur-select
                    slot="chapter-select"
                    name="chapters-select"
                    value="6"
                    variant="outlined"
                    flex="true"
                    usage="${e.usage}"
                    suffix="&#9660;"
                >
                    ${t.map((r,i)=>e.usage==="topBar"?s`<mdui-menu-item value="${r.id}">
                                  ${i+1}. ${r.title}
                              </mdui-menu-item>`:s`<mdui-menu-item value="${r.id}">
                                  ${r.title}
                              </mdui-menu-item>`)}
                </ur-select>
            `:"")},be={title:"urnovl/Business/TopAppBars/Reading TopAppBar",render:R,argTypes:{novelTitle:{control:"text",description:"Title displayed in the app bar"},usage:{control:"text",description:"Usage prop passed to ur-select component",defaultValue:"topBar"},isChapterOwner:{control:"boolean",defaultValue:!1},deviceVariant:{control:"radio",options:["desktop","mobile"],defaultValue:"desktop"},variant:{control:"select",options:["small","medium","large"],defaultValue:"small"}}},o={args:{novelTitle:"War and Peace",usage:"topBar"}},n={args:{...o.args,isChapterOwner:!0,deviceVariant:"desktop"}},p={args:{...o.args,isChapterOwner:!0,deviceVariant:"mobile"}};var m,b,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    novelTitle: 'War and Peace',
    // Default title for the top app bar
    usage: 'topBar' // Default usage
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,f,k;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isChapterOwner: true,
    deviceVariant: 'desktop'
  }
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var C,y,T;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isChapterOwner: true,
    deviceVariant: 'mobile'
  }
}`,...(T=(y=p.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const ve=["Default","OwnerDesktop","OwnerMobile"];export{o as Default,n as OwnerDesktop,p as OwnerMobile,ve as __namedExportsOrder,be as default};
