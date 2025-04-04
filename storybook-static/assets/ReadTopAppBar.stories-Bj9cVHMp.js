import{k as s}from"./entry-preview-BcHUnPw7.js";import"./ur-button-icon-BechBhvu.js";import{s as S,g as p}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as B,H as x,c as l,h as a,a as V}from"./index-DddAbXmr.js";import"./top-app-bar-CIV7x9Gg.js";import"./index-BriiHZyV.js";import"./ur-select-BYg2EnqR.js";import"./ur-linear-progress-BDl7ix7p.js";import"./index-DrFu-skq.js";import"./index-CIbCn1or.js";import"./class-map-CDMw4-pN.js";import"./get-7S0C3xNv.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-CWeRpzKK.js";import"./if-defined-CL77Dv0Z.js";import"./anchor--mD29Q5y.js";import"./form-B80GgqR6.js";import"./index-DsS9OQyQ.js";import"./query-assigned-elements-BInJlOXT.js";import"./scrollBehavior-xqoZ5OkU.js";import"./layout-item-base-BFJkVErc.js";import"./observeResize-BQjwoNka.js";import"./uniqueId-Bqzl4fNd.js";import"./array-BxBpEZy1.js";import"./when-BxLAFfhK.js";import"./default-value-C0GKHYBG.js";import"./index-D1Vud5Wt.js";import"./check-CYfW0qAL.js";import"./svg-tag-Dv8So2Bi.js";import"./motion-C9ubeaLF.js";import"./index-ChVl_XAc.js";import"./live-Lfr4UlnM.js";import"./menu-item-DWin7MbG.js";const O=":host{display:flex;align-items:center;width:100%;--ur-color-on-background:var(--mdui-color-on-background);--ur-color-on-surface:var(--mdui-color-on-surface);--ur-color-on-surface-variant:var(--mdui-color-on-surface-variant);--ur-state-layers-outline-variant-opacity-16:var(--mdui-state-layers-outline-variant-opacity-16)}:host .urnovl-logo{width:70px;height:19px;margin:auto 8;fill:var(--ur-color-on-background, #000)}:host mdui-top-app-bar{width:100%;display:flex;align-items:center;justify-content:center;column-gap:8px;padding:0 16px}:host mdui-top-app-bar[variant='small']{height:48px}:host mdui-top-app-bar-title{flex:1;font-size:14px;line-height:16px;letter-spacing:-0.26px;color:var(--ur-color-on-background, #000);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;display:block;}:host ur-button-icon{margin-right:initial}:host .read-progress{position:absolute;left:0;top:100%;width:100%;height:4px;background:red}",_=O+"",A=class extends x{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.readingSettingsClick=l(this,"readingSettingsClick",7),this.storySummaryClick=l(this,"storySummaryClick",7),this.editChapterClick=l(this,"editChapterClick",7),this.chapterButtonClick=l(this,"chapterButtonClick",7),this.variant="small",this.isChapterOwner=!1,this.deviceVariant="desktop",this.scrollBehavior="hide",this.scrollThreshold=50,this.topValue="0",this.handleReadingSettingsClick=()=>{console.log("Handle read settings"),this.readingSettingsClick.emit()},this.handleStorySummaryClick=()=>{console.log("Story summary click"),this.storySummaryClick.emit()},this.handleEditChapterClick=()=>{console.log("Edit clicked"),this.editChapterClick.emit()},this.handleChapterButtonClick=()=>{console.log("Chapter button clicked"),this.chapterButtonClick.emit()}}initMutationObserver(){var e;const t=(e=this.el.shadowRoot)===null||e===void 0?void 0:e.querySelector("mdui-top-app-bar");t&&(this.mutationObserver=new MutationObserver(r=>{r.forEach(i=>{if(i.type==="attributes"&&i.attributeName==="hide"){const w=t.hasAttribute("hide");this.updateTopValue(w)}})}),this.mutationObserver.observe(t,{attributes:!0}))}updateTopValue(e){var t;const r=(t=this.el.shadowRoot)===null||t===void 0?void 0:t.querySelector("mdui-top-app-bar");if(r){const i=r.offsetHeight;this.topValue=e?`-${i}px`:"0",r.style.top=this.topValue}}componentDidLoad(){var e;this.initMutationObserver();const t=(e=this.el.shadowRoot)===null||e===void 0?void 0:e.querySelector("mdui-top-app-bar");if(t){const r=t.hasAttribute("hide");this.updateTopValue(r)}}disconnectedCallback(){this.mutationObserver&&this.mutationObserver.disconnect()}render(){return a(V,{key:"3e3362e18ef692293b4542f88c0dde3e416bd6e9"},a("mdui-top-app-bar",{key:"378c3515b85da72db73d3446cad7a0949bdbe25d",variant:this.variant,"scroll-target":".example-scroll-target","scroll-behavior":this.scrollBehavior,"scroll-threshold":this.scrollThreshold,style:{top:this.topValue}},a("mdui-top-app-bar-title",{key:"92b28f5a35d9a6232a93e80d52a2da67ee73668e"},this.novelTitle),this.isChapterOwner&&a("ur-button-icon",{key:"a281fce9d532bd81270ddc911b2f147a751a0317",icon:"edit",variant:"standard","aria-label":"Edit Chapter",onClick:this.handleEditChapterClick}),this.deviceVariant==="desktop"&&a("slot",{key:"3b0eef8f66fc210708a081ee8214f69ce989bc38",name:"chapter-select"}),this.deviceVariant==="mobile"&&a("ur-button-icon",{key:"0cbdd53bd1086f34282ac23b6c5ec943b9a0b93c",icon:"list",variant:"standard","aria-label":"Select Chapter",onClick:this.handleChapterButtonClick}),a("ur-button-icon",{key:"587291a682a04118d2ade5bd5f6a9c4238c66ddd",icon:"info_outline",variant:"standard","aria-label":"Story Summary",onClick:this.handleStorySummaryClick}),a("ur-button-icon",{key:"d8640e94db134f7a37f2debc10f3667a404fb089",icon:"text_format--outlined",variant:"standard","aria-label":"Reading Settings",onClick:this.handleReadingSettingsClick}),a("div",{key:"891faf90ceeac8049fc03f352d7ee018e6d638f3",class:"read-progress"},a("slot",{key:"c77d835e86fe447c371937fb4678bd2a31e68604",name:"read-progress"}))))}get el(){return this}static get style(){return _}};B(A,[1,"ur-read-top-app-bar",{variant:[1],novelTitle:[1,"novel-title"],isChapterOwner:[4,"is-chapter-owner"],deviceVariant:[1,"device-variant"],scrollBehavior:[1,"scroll-behavior"],scrollThreshold:[2,"scroll-threshold"],topValue:[32]}]);const c={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrReadTopAppBar",tagName:"ur-read-top-app-bar",customElement:!0,members:[{kind:"field",name:"variant",type:"string",description:"Variant of the top app bar (e.g., 'small', 'medium', etc.)",default:"'small'"},{kind:"field",name:"novelTitle",type:"string",description:"Title of the novel"},{kind:"field",name:"isChapterOwner",type:"boolean",description:"Whether the current user is the chapter owner",default:"false"},{kind:"field",name:"deviceVariant",type:"string",description:"",default:"'desktop'"},{kind:"field",name:"scrollBehavior",type:"string",description:"Behavior of the top app bar on scroll",default:"'hide'"},{kind:"field",name:"scrollThreshold",type:"number",description:"Scroll threshold in pixels (default: 50)",default:"50"}],events:[{kind:"event",name:"readingSettingsClick",description:""},{kind:"event",name:"storySummaryClick",description:""},{kind:"event",name:"editChapterClick",description:""},{kind:"event",name:"chapterButtonClick",description:""}]}],exports:[{kind:"js",name:"UrReadTopAppBar",declaration:{name:"UrReadTopAppBar",module:"src/components/ur-read-top-app-bar/ur-read-top-app-bar.tsx"}},{kind:"custom-element-definition",name:"ur-read-top-app-bar",declaration:{name:"UrReadTopAppBar",module:"src/components/ur-read-top-app-bar/ur-read-top-app-bar.tsx"}}]}]};S({...p()||{},...c,modules:[...(p()||{}).modules||[],...c.modules]});var u=Object.freeze,E=Object.defineProperty,H=(e,t)=>u(E(e,"raw",{value:u(e.slice())})),h;const R=e=>{const t=[{id:"1",title:"Beneath the Crimson Sky"},{id:"2",title:"The Hidden Truth"},{id:"3",title:"Echoes of the Forgotten"},{id:"4",title:"Whispers in the Dark"},{id:"5",title:"The Silent Horizon"},{id:"6",title:"A Kingdom’s Fall"},{id:"7",title:"The Final Stand"},{id:"8",title:"Shadows of the Unknown"},{id:"9",title:"The Lost Journey"},{id:"10",title:"Dreams of Fire"},{id:"11",title:"The Eternal Quest"},{id:"12",title:"Paths Unseen"},{id:"13",title:"Secrets of the Past"},{id:"14",title:"The Rise of Heroes"},{id:"15",title:"Fate’s Edge"}];return s(h||(h=H([`
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
            `:"")},me={title:"urnovl/Business/TopAppBars/Reading TopAppBar",render:R,argTypes:{novelTitle:{control:"text",description:"Title displayed in the app bar"},usage:{control:"text",description:"Usage prop passed to ur-select component",defaultValue:"topBar"},isChapterOwner:{control:"boolean",defaultValue:!1},deviceVariant:{control:"radio",options:["desktop","mobile"],defaultValue:"desktop"},variant:{control:"select",options:["small","medium","large"],defaultValue:"small"}}},o={args:{novelTitle:"War and Peace",usage:"topBar"}},n={args:{...o.args,isChapterOwner:!0,deviceVariant:"desktop"}},d={args:{...o.args,isChapterOwner:!0,deviceVariant:"mobile"}};var m,v,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    novelTitle: 'War and Peace',
    // Default title for the top app bar
    usage: 'topBar' // Default usage
  }
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var b,f,k;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isChapterOwner: true,
    deviceVariant: 'desktop'
  }
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var C,y,T;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isChapterOwner: true,
    deviceVariant: 'mobile'
  }
}`,...(T=(y=d.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const ve=["Default","OwnerDesktop","OwnerMobile"];export{o as Default,n as OwnerDesktop,d as OwnerMobile,ve as __namedExportsOrder,me as default};
