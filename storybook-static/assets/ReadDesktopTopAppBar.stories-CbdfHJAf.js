import{k as s}from"./entry-preview-BcHUnPw7.js";import"./ur-button-icon-BnHHZydI.js";import{s as g,g as l}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as b,H as f,c as v,h as o,a as k}from"./index-B9J0OpMa.js";import"./top-app-bar-DfPEiOfq.js";import"./index-BxWH4IIK.js";import"./ur-select-DLiTvKHw.js";import"./ur-linear-progress-SzqVyV6g.js";import"./index-DrFu-skq.js";import"./index-CbvShPku.js";import"./get-16ZjOD6f.js";import"./class-map-c_lXebLN.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./button-base-D5rkyElT.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-DFAJu5AH.js";import"./form-DYv8CV48.js";import"./ripple-mixin-CQ5hE0DF.js";import"./query-assigned-elements-BInJlOXT.js";import"./layout-item-base-BAd6hf-s.js";import"./observeResize-BFEvAm6p.js";import"./uniqueId-Bqzl4fNd.js";import"./array-BxBpEZy1.js";import"./when-BxLAFfhK.js";import"./default-value-Cjt0J7Mq.js";import"./index-CKf_iOkS.js";import"./check-CeipmVHa.js";import"./svg-tag-Bx7YH7wk.js";import"./motion-vT-sjHCv.js";import"./index-CFhNLdH0.js";import"./live-B52-oj_Y.js";import"./localize-Dzz2kkGe.js";const T=":host{display:flex;align-items:center;width:100%;--ur-color-on-background:var(--mdui-color-on-background);--ur-color-on-surface:var(--mdui-color-on-surface);--ur-color-on-surface-variant:var(--mdui-color-on-surface-variant);--ur-state-layers-outline-variant-opacity-16:var(--mdui-state-layers-outline-variant-opacity-16)}:host .urnovl-logo{width:70px;height:19px;margin:auto 8;fill:var(--ur-color-on-background, #000)}:host mdui-top-app-bar{width:100%;display:flex;align-items:center;justify-content:center;column-gap:8px;padding:0 16px}:host mdui-top-app-bar[variant='small']{height:48px}:host mdui-top-app-bar-title{flex:1;font-size:14px;line-height:16px;letter-spacing:-0.26px;color:var(--ur-color-on-background, #000);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;display:block;}:host ur-button-icon{margin-right:initial}:host .read-progress{position:absolute;left:0;top:100%;width:100%;height:4px;background:red}",y=T+"",x=class extends f{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.readingSettingsClick=v(this,"readingSettingsClick",7),this.handleReadingSettingsClick=()=>{this.readingSettingsClick.emit()},this.variant="small",this.novelTitle=void 0,this.scrollBehavior="hide",this.scrollThreshold=50,this.topValue="0"}initMutationObserver(){var e;const t=(e=this.el.shadowRoot)===null||e===void 0?void 0:e.querySelector("mdui-top-app-bar");t&&(this.mutationObserver=new MutationObserver(r=>{r.forEach(a=>{if(a.type==="attributes"&&a.attributeName==="hide"){const h=t.hasAttribute("hide");this.updateTopValue(h)}})}),this.mutationObserver.observe(t,{attributes:!0}))}updateTopValue(e){var t;const r=(t=this.el.shadowRoot)===null||t===void 0?void 0:t.querySelector("mdui-top-app-bar");if(r){const a=r.offsetHeight;this.topValue=e?`-${a}px`:"0",r.style.top=this.topValue}}componentDidLoad(){var e;this.initMutationObserver();const t=(e=this.el.shadowRoot)===null||e===void 0?void 0:e.querySelector("mdui-top-app-bar");if(t){const r=t.hasAttribute("hide");this.updateTopValue(r)}}disconnectedCallback(){this.mutationObserver&&this.mutationObserver.disconnect()}render(){return o(k,{key:"609aa652edae91f1e43937a2ac8ed971ead7614f"},o("mdui-top-app-bar",{key:"7033cb0942e8c7699cab1a2e413403a2b98b378b",variant:this.variant,"scroll-target":".example-scroll-target","scroll-behavior":this.scrollBehavior,"scroll-threshold":this.scrollThreshold,style:{top:this.topValue}},o("mdui-top-app-bar-title",{key:"5947a6df31600b78788d3bc0e47af142dcfe252d"},this.novelTitle),o("slot",{key:"c3ca0337699582f9f644b9fc298c336aa73704c0",name:"chapter-select"}),o("ur-button-icon",{key:"8a7425feb0eabcade0ea6abec4905d5a24be8c19",icon:"text_format--outlined",variant:"standard","aria-label":"Reading Settings",onClick:this.handleReadingSettingsClick}),o("div",{key:"605af2631f9c06ed2f3175e53da136cb199fb08b",class:"read-progress"},o("slot",{key:"b3f0c318f180d0fcfd380033d99c9264290e4fdb",name:"read-progress"}))))}get el(){return this}static get style(){return y}};b(x,[1,"ur-read-desktop-top-app-bar",{variant:[1],novelTitle:[1,"novel-title"],scrollBehavior:[1,"scroll-behavior"],scrollThreshold:[2,"scroll-threshold"],topValue:[32]}]);const p={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrReadDesktopTopAppBar",tagName:"ur-read-desktop-top-app-bar",customElement:!0,members:[{kind:"field",name:"variant",type:"string",description:"Variant of the top app bar (e.g., 'small', 'medium', etc.)",default:"'small'"},{kind:"field",name:"novelTitle",type:"string",description:"Title of the novel"},{kind:"field",name:"scrollBehavior",type:"string",description:"Behavior of the top app bar on scroll",default:"'hide'"},{kind:"field",name:"scrollThreshold",type:"number",description:"Scroll threshold in pixels (default: 50)",default:"50"}],events:[{kind:"event",name:"readingSettingsClick",description:""}]}],exports:[{kind:"js",name:"UrReadDesktopTopAppBar",declaration:{name:"UrReadDesktopTopAppBar",module:"src/components/ur-read-desktop-top-app-bar/ur-read-desktop-top-app-bar.tsx"}},{kind:"custom-element-definition",name:"ur-read-desktop-top-app-bar",declaration:{name:"UrReadDesktopTopAppBar",module:"src/components/ur-read-desktop-top-app-bar/ur-read-desktop-top-app-bar.tsx"}}]}]};g({...l()||{},...p,modules:[...(l()||{}).modules||[],...p.modules]});var n=Object.freeze,B=Object.defineProperty,S=(e,t)=>n(B(e,"raw",{value:n(e.slice())})),d;const w=e=>{const t=[{id:"1",title:"Beneath the Crimson Sky"},{id:"2",title:"The Hidden Truth"},{id:"3",title:"Echoes of the Forgotten"},{id:"4",title:"Whispers in the Dark"},{id:"5",title:"The Silent Horizon"},{id:"6",title:"A Kingdom’s Fall"},{id:"7",title:"The Final Stand"},{id:"8",title:"Shadows of the Unknown"},{id:"9",title:"The Lost Journey"},{id:"10",title:"Dreams of Fire"},{id:"11",title:"The Eternal Quest"},{id:"12",title:"Paths Unseen"},{id:"13",title:"Secrets of the Past"},{id:"14",title:"The Rise of Heroes"},{id:"15",title:"Fate’s Edge"}];return s(d||(d=S([`
        <ur-read-desktop-top-app-bar novel-title="`,`">
            <!-- Chapter Select Dropdown -->
            <ur-select slot="chapter-select" name="chapters-select" value="6" variant="outlined" flex="true" usage="`,`" suffix="&#9660;">
                `,`
            </ur-select>

            <!-- Linear Progress Bar -->
            <ur-linear-progress slot="read-progress" id="progress-bar" value="0" max="1"></ur-linear-progress>
        </ur-read-desktop-top-app-bar>

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
    `])),e.novelTitle,e.usage,t.map((r,a)=>e.usage==="topBar"?s`<mdui-menu-item value="${r.id}">${a+1}. ${r.title}</mdui-menu-item>`:s`<mdui-menu-item value="${r.id}">${r.title}</mdui-menu-item>`))},ie={title:"urnovl/Business/TopAppBars/Reading Desktop TopAppBar",render:w,argTypes:{novelTitle:{control:"text",description:"Title displayed in the app bar"},usage:{control:"text",description:"Usage prop passed to ur-select component",defaultValue:"topBar"}}},i={args:{novelTitle:"War and Peace",usage:"topBar"}};var c,u,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    novelTitle: 'War and Peace',
    // Default title for the top app bar
    usage: 'topBar' // Default usage
  }
}`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const se=["Default"];export{i as Default,se as __namedExportsOrder,ie as default};
