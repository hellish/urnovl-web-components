import{k as g}from"./entry-preview-BcHUnPw7.js";import"./ur-checkbox-By6YFwe6.js";import{s as z,g as b}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as J,H as Q,c as x,h,a as Y}from"./index-BJvbtjhH.js";import"./index-DrFu-skq.js";import"./index-Cm9RL1V7.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./if-defined-CL77Dv0Z.js";import"./live-KarC74af.js";import"./form-DhDC-phE.js";import"./default-value-Btzv9brT.js";import"./watch-ByvFYHv8.js";import"./svg-tag-C3ctfYVB.js";import"./index-CXOzFcj5.js";const Z="",ee=class extends Q{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.valueChanged=x(this,"valueChanged",7),this.errorStateChanged=x(this,"errorStateChanged",7),this.name="default-group",this.values=[],this.required=!1,this.selectAll=!1,this.selectAllText="Select All",this.maxSelectable=null,this.options=[],this.handleValueChangeDebounce=this.debounce(e=>{if(this.isBulkUpdating){console.log(`Suppressed event during bulk update: ${e.detail.value}`);return}const{value:l,checked:t}=e.detail;if(l==="select-all")this.handleSelectAllToggle(t);else{if(this.isBulkUpdating===!0)return;if(t){if(this.maxSelectable&&this.values.length>=this.maxSelectable){console.warn(`Max selectable limit reached: ${this.maxSelectable}`),this.syncSelection();return}this.values=[...new Set([...this.values,l])]}else this.values=this.values.filter(s=>s!==l);this.isSelectAllSelected()&&this.values.length<this.options.length-1&&(this.values=this.values.filter(s=>s!=="select-all")),this.maxSelectable&&this.syncSelection(),this.emitFormData()}},50),this.handleValueChange=this.handleValueChangeDebounce.debounced,this.isBulkUpdating=!1,this.onSlotChange=e=>{const t=e.target.assignedElements().filter(a=>a.tagName==="UR-CHECKBOX");t.length!==this.options.length&&(this.options=t,this.options.forEach(a=>{a.name=this.name,a.addEventListener("valueChanged",this.handleValueChange)}),this.syncSelection(),this.emitFormData())}}async validate(){const e=this.values.length>0||!this.required;return this.errorStateChanged.emit({name:this.name,error:!e,message:e?void 0:"At least one checkbox must be selected."}),e}async reset(){this.values=[],this.syncSelection()}debounce(e,l){let t;return{debounced:function(...s){clearTimeout(t),t=window.setTimeout(()=>e(...s),l)},clear:()=>clearTimeout(t)}}handleSelectAllToggle(e){console.log(`Handle Select All Toggle - Checked: ${e}`),this.isBulkUpdating=!0,this.handleValueChangeDebounce.clear(),e?(console.log("select all"),this.values=this.options.map(l=>l.value).filter(l=>l!=="select-all")):(console.log("deselect all"),this.values=[]),this.isBulkUpdating=!1,this.syncSelection(e),this.emitFormData()}syncSelection(e=!1){const l=typeof this.maxSelectable=="number"&&this.maxSelectable>0&&this.values.length>=this.maxSelectable;console.log("disableOptions:",e),this.options.forEach(t=>{const a=this.values.includes(t.value);if(t.value==="select-all"){const s=this.isSelectAllSelected();t.checked!==s&&(t.checked=s,console.log(`Checkbox: ${t.value} (Select All) - Checked: ${s}`)),t.disabled=!1}else{t.checked!==a&&(t.checked=a);const s=e||l&&!a;t.disabled!==s&&(t.disabled=s,console.log(s?"Disable the options":"Enable the options"))}})}isSelectAllSelected(){const e=this.options.filter(l=>l.value!=="select-all");return this.values.length===e.length}emitFormData(){console.log(`Form Data (Checkbox Group - ${this.name}):`,this.values),this.valueChanged.emit({name:this.name,values:this.values})}render(){const e=this.selectAll&&this.maxSelectable===null;return h(Y,{key:"aaf0143619d0aaf137cdd839c6429385f79f439a"},e&&h("ur-checkbox",{key:"086e4b561ef5807356355482e1fc7f6806510d6e",value:"select-all",onValueChanged:this.handleValueChange},this.selectAllText),h("slot",{key:"66933ff2805b61150d97d01d03002d48d785a1bd",onSlotchange:this.onSlotChange}))}static get style(){return Z}};J(ee,[1,"ur-checkbox-group",{name:[1],values:[1040],required:[4],selectAll:[4,"select-all"],selectAllText:[1,"select-all-text"],maxSelectable:[2,"max-selectable"],options:[32],validate:[64],reset:[64]}]);const f={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrCheckboxGroup",tagName:"ur-checkbox-group",customElement:!0,members:[{kind:"field",name:"name",type:"string",description:"The name of the checkbox group",default:"'default-group'"},{kind:"field",name:"values",type:"unknown",description:"Currently selected values",default:"[]"},{kind:"field",name:"required",type:"boolean",description:"Whether the group is required",default:"false"},{kind:"field",name:"selectAll",type:"boolean",description:'Enable a "Select All" checkbox',default:"false"},{kind:"field",name:"selectAllText",type:"string",description:'Text for the "Select All" checkbox',default:"'Select All'"},{kind:"field",name:"maxSelectable",type:"number",description:"Maximum number of selectable options",default:"null"}],events:[{kind:"event",name:"valueChanged",description:"Event emitted when the values change"},{kind:"event",name:"errorStateChanged",description:"Event emitted when validation state changes"}]}],exports:[{kind:"js",name:"UrCheckboxGroup",declaration:{name:"UrCheckboxGroup",module:"src/components/ur-checkbox-group/ur-checkbox-group.tsx"}},{kind:"custom-element-definition",name:"ur-checkbox-group",declaration:{name:"UrCheckboxGroup",module:"src/components/ur-checkbox-group/ur-checkbox-group.tsx"}}]}]};z({...b()||{},...f,modules:[...(b()||{}).modules||[],...f.modules]});const te=({name:e="example-group",selectAll:l=!1,required:t=!1,maxSelectable:a=null,options:s=["Option 1","Option 2","Option 3"],preselectedValues:I=[]})=>g`
    <ur-checkbox-group name=${e} .selectAll=${l&&a===null} required=${t} .values=${I} .maxSelectable=${a}>
        ${s.map((K,X)=>g`<ur-checkbox value="option${X+1}"> ${K} </ur-checkbox>`)}
    </ur-checkbox-group>
`,xe={title:"Urnovl/Basic/CheckboxGroup",render:e=>te(e),argTypes:{name:{control:"text",description:"Name of the checkbox group"},selectAll:{control:"boolean",description:"Enable Select All checkbox functionality"},required:{control:"boolean",description:"Require at least one checkbox to be selected"},maxSelectable:{control:"number",description:"Maximum number of checkboxes that can be selected"},options:{control:"array",description:"Array of checkbox options"},preselectedValues:{control:"array",description:"Preselected values in the group"}}},o={args:{name:"example-group",selectAll:!1,required:!1,maxSelectable:null,options:["Option 1","Option 2","Option 3"],preselectedValues:[]}},n={args:{name:"example-group",selectAll:!0,required:!1,maxSelectable:null,options:["Option 1","Option 2","Option 3","Option 4"],preselectedValues:[]}},r={args:{name:"example-group",selectAll:!1,required:!0,maxSelectable:null,options:["Option 1","Option 2","Option 3"],preselectedValues:[]}},i={args:{name:"example-group",selectAll:!1,required:!1,maxSelectable:null,options:["Option 1","Option 2","Option 3"],preselectedValues:["option1","option3"]}},c={args:{name:"example-group",selectAll:!0,required:!1,maxSelectable:null,options:["Option 1","Option 2","Option 3"],preselectedValues:["option1","option2"]}},u={args:{name:"example-group",selectAll:!0,required:!1,maxSelectable:1,options:["Option 1","Option 2","Option 3"],preselectedValues:["option1"]}},p={args:{name:"custom-group",selectAll:!0,required:!1,maxSelectable:null,options:["Custom Option 1","Custom Option 2","Custom Option 3","Custom Option 4"],preselectedValues:[]}},d={args:{name:"example-group",selectAll:!1,required:!1,maxSelectable:2,options:["Option 1","Option 2","Option 3","Option 4"],preselectedValues:[]}},m={args:{name:"example-group",selectAll:!1,required:!1,maxSelectable:2,options:["Option 1","Option 2","Option 3","Option 4"],preselectedValues:["option1","option2"]}};var S,O,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'example-group',
    selectAll: false,
    required: false,
    maxSelectable: null,
    options: ['Option 1', 'Option 2', 'Option 3'],
    preselectedValues: []
  }
}`,...(k=(O=o.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var A,v,C;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: 'example-group',
    selectAll: true,
    required: false,
    maxSelectable: null,
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    preselectedValues: []
  }
}`,...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var V,y,q;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    name: 'example-group',
    selectAll: false,
    required: true,
    maxSelectable: null,
    options: ['Option 1', 'Option 2', 'Option 3'],
    preselectedValues: []
  }
}`,...(q=(y=r.parameters)==null?void 0:y.docs)==null?void 0:q.source}}};var E,$,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    name: 'example-group',
    selectAll: false,
    required: false,
    maxSelectable: null,
    options: ['Option 1', 'Option 2', 'Option 3'],
    preselectedValues: ['option1', 'option3'] // Preselect Option 1 and Option 3
  }
}`,...(T=($=i.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var U,W,D;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    name: 'example-group',
    selectAll: true,
    required: false,
    maxSelectable: null,
    options: ['Option 1', 'Option 2', 'Option 3'],
    preselectedValues: ['option1', 'option2'] // Preselect Option 1 and Option 2
  }
}`,...(D=(W=c.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var M,P,w;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    name: 'example-group',
    selectAll: true,
    // Ensure this is set correctly
    required: false,
    maxSelectable: 1,
    // Ensure maxSelectable is explicitly passed
    options: ['Option 1', 'Option 2', 'Option 3'],
    preselectedValues: ['option1'] // Preselect Option 1
  }
}`,...(w=(P=u.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var G,B,_;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    name: 'custom-group',
    selectAll: true,
    required: false,
    maxSelectable: null,
    options: ['Custom Option 1', 'Custom Option 2', 'Custom Option 3', 'Custom Option 4'],
    preselectedValues: []
  }
}`,...(_=(B=p.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var F,H,R;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    name: 'example-group',
    selectAll: false,
    required: false,
    maxSelectable: 2,
    // Limit selection to 2 checkboxes
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    preselectedValues: [] // Initially no preselected values
  }
}`,...(R=(H=d.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var N,j,L;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    name: 'example-group',
    selectAll: false,
    required: false,
    maxSelectable: 2,
    // Only 2 options can be selected
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    preselectedValues: ['option1', 'option2'] // Preselect Option 1 and Option 2
  }
}`,...(L=(j=m.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};const fe=["Default","WithSelectAll","WithRequiredValidation","PreselectedValues","WithSelectAllAndPreselectedValues","WithSelectAllAndMaxSelected","CustomOptionsWithSelectAll","MaxSelectableExample","MaxSelectableWithPreselected"];export{p as CustomOptionsWithSelectAll,o as Default,d as MaxSelectableExample,m as MaxSelectableWithPreselected,i as PreselectedValues,r as WithRequiredValidation,n as WithSelectAll,u as WithSelectAllAndMaxSelected,c as WithSelectAllAndPreselectedValues,fe as __namedExportsOrder,xe as default};
