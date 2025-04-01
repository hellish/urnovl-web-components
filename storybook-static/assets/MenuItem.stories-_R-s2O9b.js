import{k as z}from"./entry-preview-BcHUnPw7.js";import{s as w,g as u}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as E,H as S,h as l,a as H}from"./index-BJvbtjhH.js";import"./menu-item-DfJWeG9x.js";import"./index-CXOzFcj5.js";import"./index-DrFu-skq.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./when-BxLAFfhK.js";import"./anchor-C8TuHONp.js";import"./if-defined-CL77Dv0Z.js";import"./watch-ByvFYHv8.js";import"./motion-DsSt5j88.js";import"./template-yncBVCyc.js";import"./uniqueId-Bqzl4fNd.js";import"./svg-tag-C3ctfYVB.js";import"./check-Bc-_4cuB.js";const _=":host{display:flex;font-size:12px;gap:8px;--ur-color-primary:var(--mdui-color-primary)}:host(.selected){background-color:rgba(var(--ur-color-primary), 0.12)}:host(.disabled),:host(.disabled) mdui-menu-item{color:#aaa;pointer-events:none;cursor:not-allowed}:host(.disabled) *{pointer-events:none !important}:host mdui-menu-item{width:100%;display:flex;height:44px;align-items:center}:host mdui-menu-item::part(label){gap:8px;display:flex;align-items:center;justify-content:center}:host([fullwidth]){width:100%}:host([fullwidth]) mdui-menu-item{width:100%}:host([fullwidth]) mdui-menu-item::part(container){width:100%}:host([leftaligned]) mdui-menu-item::part(label){justify-content:left}:host([height-number]){height:var(--menu-item-height)}:host([height-number]) mdui-menu-item{height:var(--menu-item-height);min-height:var(--menu-item-height)}:host([height-number]) mdui-menu-item::part(container){height:var(--menu-item-height)}:host([height-number]) mdui-menu-item::part(label){height:var(--menu-item-height)}mdui-icon{display:none;visibility:hidden}:host(.selected) mdui-icon{display:inline-flex;visibility:visible}",F=class extends S{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.value="",this.label="",this.disabled=!1,this.selected=!1,this.size="medium",this.selectedIcon="check",this.fullWidth=!1,this.leftAligned=!0,this.heightNumber=30,this.isHovered=!1,this.handleMouseEnter=()=>{this.disabled||(this.isHovered=!0)},this.handleMouseLeave=()=>{this.isHovered=!1},this.handleClick=e=>{if(this.disabled){e.preventDefault(),e.stopPropagation();return}}}selectedChanged(e){this.el.setAttribute("aria-selected",e.toString())}disabledChanged(e){this.el.setAttribute("aria-disabled",e.toString())}heightNumberChanged(e){if(e){this.el.style.setProperty("--menu-item-height",`${e}px`);const t=this.el.querySelector("mdui-menu-item");t&&(t.style.height=`${e}px`)}}componentDidLoad(){this.el.setAttribute("role","menuitem"),this.el.setAttribute("aria-disabled",this.disabled.toString()),this.el.setAttribute("aria-selected",this.selected.toString()),this.heightNumber&&this.heightNumberChanged(this.heightNumber);const e=this.el.closest("mdui-menu");e&&e.addEventListener("change",()=>{const t=e.value===this.value;t!==this.selected&&(this.selected=t)})}render(){const e=this.heightNumber?{height:`${this.heightNumber}px`}:{};return l(H,{key:"6f42f15107b2ab4ffd59fa6c7ebcb361d175040c",class:{"menu-item":!0,[`size-${this.size}`]:!0,disabled:this.disabled,selected:this.selected,hovered:this.isHovered,"left-aligned":this.leftAligned,"full-width":this.fullWidth},onClick:this.handleClick},l("mdui-menu-item",{key:"e3220cac9b0698224f0815ff1f5d3d456b8d38d0",disabled:this.disabled,value:this.value,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,style:e},this.selected&&l("mdui-icon",{key:"ed6fee798e34200c566e37533954d3cc6458376c",name:this.selectedIcon}),l("span",{key:"06112b998514b827673e3b69addbb47c76b2edd9",class:"item-label"},this.label)))}get el(){return this}static get watchers(){return{selected:["selectedChanged"],disabled:["disabledChanged"],heightNumber:["heightNumberChanged"]}}static get style(){return _}};E(F,[1,"ur-menu-item",{value:[1],label:[1],disabled:[4],selected:[4],size:[1],selectedIcon:[1,"selected-icon"],fullWidth:[4,"full-width"],leftAligned:[4,"left-aligned"],heightNumber:[514,"height-number"],isHovered:[32]},void 0,{selected:["selectedChanged"],disabled:["disabledChanged"],heightNumber:["heightNumberChanged"]}]);const h={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrMenuItem",tagName:"ur-menu-item",customElement:!0,members:[{kind:"field",name:"value",type:"string",description:"",default:"''"},{kind:"field",name:"label",type:"string",description:"",default:"''"},{kind:"field",name:"disabled",type:"boolean",description:"",default:"false"},{kind:"field",name:"selected",type:"boolean",description:"",default:"false"},{kind:"field",name:"size",type:"string",description:"",default:"'medium'"},{kind:"field",name:"selectedIcon",type:"string",description:"",default:"'check'"},{kind:"field",name:"fullWidth",type:"boolean",description:"",default:"false"},{kind:"field",name:"leftAligned",type:"boolean",description:"",default:"true"},{kind:"field",name:"heightNumber",type:"number",description:"",default:"30"}],events:[]}],exports:[{kind:"js",name:"UrMenuItem",declaration:{name:"UrMenuItem",module:"src/components/ur-menu-item/ur-menu-item.tsx"}},{kind:"custom-element-definition",name:"ur-menu-item",declaration:{name:"UrMenuItem",module:"src/components/ur-menu-item/ur-menu-item.tsx"}}]}]};w({...u()||{},...h,modules:[...(u()||{}).modules||[],...h.modules]});const D=({value:e="",label:t="",disabled:I=!1,selected:r=!1,size:x="medium",selectedIcon:M="check",fullWidth:o=!1,leftAligned:N=!0,heightNumber:A=32})=>z`
        <div style="width: ${o?"100%":"200px"};">
            <mdui-menu 
                selects="single" 
                value=${r?e:""}
                @click=${s=>{s.preventDefault(),s.stopPropagation();const i=s.currentTarget.querySelector("ur-menu-item");if(i){const m=!i.selected;i.selected=m;const $=s.currentTarget;$.value=m?e:""}const W=new CustomEvent("change",{detail:{value:e,selected:i==null?void 0:i.selected},bubbles:!0,composed:!0});s.currentTarget.dispatchEvent(W)}}
            >
                <ur-menu-item
                    value=${e}
                    label=${t}
                    ?disabled=${I}
                    ?selected=${r}
                    size=${x}
                    selected-icon=${M}
                    ?fullWidth=${o}
                    ?leftAligned=${N}
                    .heightNumber=${A}
                ></ur-menu-item>
            </mdui-menu>
        </div>
    `,te={title:"Core/Menu Item",render:e=>D(e),argTypes:{value:{control:"text"},label:{control:"text"},disabled:{control:"boolean"},selected:{control:"boolean"},size:{control:{type:"select",options:["small","medium","large"]}},selectedIcon:{control:{type:"select",options:["check","cloud_done","done_outline","star","favorite"]}},fullWidth:{control:"boolean"},leftAligned:{control:"boolean"},heightNumber:{control:{type:"number"},description:"Custom height in pixels"}}},n={args:{value:"item1",label:"Menu Item",disabled:!1,selected:!1,size:"medium",selectedIcon:"check",fullWidth:!1,leftAligned:!0}},d={args:{value:"item3",label:"Full Width Centered",disabled:!1,selected:!1,size:"medium",selectedIcon:"check",fullWidth:!0,leftAligned:!1,heightNumber:44}},a={args:{value:"item3",label:"Full Width Centered",disabled:!1,selected:!1,size:"medium",selectedIcon:"check",fullWidth:!0,leftAligned:!1,heightNumber:32}};var c,f,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: 'item1',
    label: 'Menu Item',
    disabled: false,
    selected: false,
    size: 'medium',
    selectedIcon: 'check',
    fullWidth: false,
    leftAligned: true
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,p,v;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 'item3',
    label: 'Full Width Centered',
    disabled: false,
    selected: false,
    size: 'medium',
    selectedIcon: 'check',
    fullWidth: true,
    leftAligned: false,
    heightNumber: 44
  }
}`,...(v=(p=d.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var y,k,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: 'item3',
    label: 'Full Width Centered',
    disabled: false,
    selected: false,
    size: 'medium',
    selectedIcon: 'check',
    fullWidth: true,
    leftAligned: false,
    heightNumber: 32
  }
}`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const ie=["Default","FullWidthCentered","RandomHeight"];export{n as Default,d as FullWidthCentered,a as RandomHeight,ie as __namedExportsOrder,te as default};
