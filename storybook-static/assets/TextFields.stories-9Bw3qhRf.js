import{k as qe}from"./entry-preview-BcHUnPw7.js";import{s as Ne,g as T}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as Te,H as Re,c as R,h as E,a as Ee}from"./index-Dnt4yWMo.js";import"./index-CFhNLdH0.js";import"./index-DrFu-skq.js";import"./get-16ZjOD6f.js";import"./class-map-c_lXebLN.js";import"./if-defined-CL77Dv0Z.js";import"./live-B52-oj_Y.js";import"./when-BxLAFfhK.js";import"./localize-Dzz2kkGe.js";import"./form-DYv8CV48.js";import"./default-value-Cjt0J7Mq.js";import"./watch-ByvFYHv8.js";import"./observeResize-BFEvAm6p.js";import"./uniqueId-Bqzl4fNd.js";import"./template-yncBVCyc.js";import"./svg-tag-Bx7YH7wk.js";import"./index-BxWH4IIK.js";import"./ripple-mixin-CQ5hE0DF.js";import"./index-CbvShPku.js";import"./button-base-D5rkyElT.js";import"./anchor-DFAJu5AH.js";const ze=":host{display:block}:host mdui-text-field::part(container){border-radius:var(--mdui-shape-corner-small)}",Ie=class extends Re{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.valueChanged=R(this,"valueChanged",7),this.errorStateChanged=R(this,"errorStateChanged",7),this.handleInput=e=>{const t=e.target;this.value=t.value,this.valueChanged.emit({name:this.name,value:this.value}),console.log(`Handling input for field '${this.name}':`,this.value),this.validateInput(t)},this.label="text field",this.placeholder=null,this.helper=null,this.disabled=!1,this.required=!1,this.variant="filled",this.value="",this.name="",this.endIcon=null,this.rows=null,this.autosize=!1,this.minRows=null,this.maxRows=null,this.minlength=null,this.maxlength=null,this.counter=!1,this.type="text",this.pattern=null,this.min=null,this.max=null,this.step=null,this.error=!1,this.errorMessage=null}validateInput(e){let t=!1,n="";if(this.required&&!e.value.trim())t=!0,n=`${this.label} is required.`;else if(this.minlength&&e.value.length<this.minlength)t=!0,n=`Minimum length is ${this.minlength} characters.`;else if(this.maxlength&&e.value.length>this.maxlength)t=!0,n=`Maximum length is ${this.maxlength} characters.`;else if(this.type==="email"&&!/\S+@\S+\.\S+/.test(e.value))t=!0,n="Please include a valid email address.";else if(this.type==="url"&&!/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(e.value))t=!0,n="Please include a valid URL.";else if(this.type==="tel"&&!/^\+?[0-9\s\-]+$/.test(e.value))t=!0,n="Please include a valid phone number.";else if(this.pattern&&!new RegExp(this.pattern).test(e.value))t=!0,n="Input does not match the required pattern.";else if(this.type==="number"&&this.min!==null&&!isNaN(Number(e.value))&&Number(e.value)<Number(this.min))t=!0,n=`Value must be at least ${this.min}.`;else if(this.type==="number"&&this.max!==null&&!isNaN(Number(e.value))&&Number(e.value)>Number(this.max))t=!0,n=`Value must not exceed ${this.max}.`;else if(this.type==="number"&&this.step!==null&&!isNaN(Number(this.step))){const b=Number(e.value),v=Number(this.step),x=Number(this.min)||0;(b-x)%v!==0&&(t=!0,n=`Value must align with step intervals of ${this.step}.`)}this.error=t,this.errorMessage=n,console.log(`Validation result for '${this.name}':`,{error:t,message:n}),this.errorStateChanged.emit({name:this.name,error:t,message:n})}render(){return E(Ee,{key:"bfae6177eebf675c64aa63db27e003aad0d27be3"},E("mdui-text-field",{key:"563da333f9b1623960a5018f1ed4f4bfbf4bc376",variant:this.variant,disabled:this.disabled,required:this.required,value:this.value,name:this.name,label:this.label||"",helper:this.helper||"","end-icon":this.endIcon,placeholder:this.placeholder||"",rows:this.rows!==null?this.rows:void 0,autosize:this.autosize?"true":void 0,"min-rows":this.minRows!==null?this.minRows:void 0,"max-rows":this.maxRows!==null?this.maxRows:void 0,minlength:this.minlength!==null?this.minlength:void 0,maxlength:this.maxlength!==null?this.maxlength:void 0,counter:this.counter?"true":void 0,type:this.type,pattern:this.pattern||void 0,min:this.min!==null?this.min:void 0,max:this.max!==null?this.max:void 0,step:this.step!==null?this.step:void 0,onInput:this.handleInput}))}static get style(){return ze}};Te(Ie,[1,"ur-text-field",{label:[1],placeholder:[1],helper:[1],disabled:[4],required:[4],variant:[1],value:[1025],name:[1],endIcon:[1,"end-icon"],rows:[2],autosize:[4],minRows:[2,"min-rows"],maxRows:[2,"max-rows"],minlength:[2],maxlength:[2],counter:[4],type:[1],pattern:[1],min:[8],max:[8],step:[8],error:[1540],errorMessage:[1537,"error-message"]}]);const z={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrTextField",tagName:"ur-text-field",customElement:!0,members:[{kind:"field",name:"label",type:"string",description:"",default:"'text field'"},{kind:"field",name:"placeholder",type:"string",description:"",default:"null"},{kind:"field",name:"helper",type:"string",description:"",default:"null"},{kind:"field",name:"disabled",type:"boolean",description:"",default:"false"},{kind:"field",name:"required",type:"boolean",description:"",default:"false"},{kind:"field",name:"variant",type:"string",description:"",default:"'filled'"},{kind:"field",name:"value",type:"string",description:"",default:"''"},{kind:"field",name:"name",type:"string",description:"",default:"''"},{kind:"field",name:"endIcon",type:"string",description:"",default:"null"},{kind:"field",name:"rows",type:"number",description:"",default:"null"},{kind:"field",name:"autosize",type:"boolean",description:"",default:"false"},{kind:"field",name:"minRows",type:"number",description:"",default:"null"},{kind:"field",name:"maxRows",type:"number",description:"",default:"null"},{kind:"field",name:"minlength",type:"number",description:"",default:"null"},{kind:"field",name:"maxlength",type:"number",description:"",default:"null"},{kind:"field",name:"counter",type:"boolean",description:"",default:"false"},{kind:"field",name:"type",type:"string",description:"",default:"'text'"},{kind:"field",name:"pattern",type:"string",description:"",default:"null"},{kind:"field",name:"min",type:"any",description:"",default:"null"},{kind:"field",name:"max",type:"any",description:"",default:"null"},{kind:"field",name:"step",type:"any",description:"",default:"null"},{kind:"field",name:"error",type:"boolean",description:"",default:"false"},{kind:"field",name:"errorMessage",type:"string",description:"",default:"null"}],events:[{kind:"event",name:"valueChanged",description:""},{kind:"event",name:"errorStateChanged",description:""}]}],exports:[{kind:"js",name:"UrTextField",declaration:{name:"UrTextField",module:"src/components/ur-text-field/ur-text-field.tsx"}},{kind:"custom-element-definition",name:"ur-text-field",declaration:{name:"UrTextField",module:"src/components/ur-text-field/ur-text-field.tsx"}}]}]};Ne({...T()||{},...z,modules:[...(T()||{}).modules||[],...z.modules]});const Ce=({label:e="Welcome",placeholder:t="",helper:n="",disabled:b=!1,required:v=!1,variant:x="outlined",value:we="",name:Fe="",endIcon:ke=null,rows:y=null,autosize:$e=!1,minRows:w=null,maxRows:F=null,minlength:k=null,maxlength:$=null,counter:Me=!1,type:Se="text",pattern:M=null,min:S=null,max:q=null,step:N=null})=>qe`
    <ur-text-field
        label=${e}
        placeholder=${t}
        helper=${n}
        variant=${x}
        value=${we}
        name=${Fe}
        end-icon=${ke}
        disabled=${b}
        required=${v}
        rows=${y!==null?y:""}
        autosize=${$e}
        min-rows=${w!==null?w:""}
        max-rows=${F!==null?F:""}
        minlength=${k!==null?k:""}
        maxlength=${$!==null?$:""}
        counter=${Me}
        type=${Se}
        pattern=${M!==null?M:""}
        min=${S!==null?S:""}
        max=${q!==null?q:""}
        step=${N!==null?N:""}
    ></ur-text-field>
`,rt={title:"Core/TextField",render:e=>Ce(e),argTypes:{label:{control:"text",description:"The label displayed above the input field"},placeholder:{control:"text",description:"Placeholder text shown inside the input field"},helper:{control:"text",description:"Helper text displayed below the input field"},disabled:{control:"boolean",description:"Whether the input field is disabled"},required:{control:"boolean",description:"Whether the input field is required"},variant:{control:"select",options:["filled","outlined"],description:"Style variant of the input field"},value:{control:"text",description:"The current value of the input field"},name:{control:"text",description:"The name attribute for form integration (FormData)"},endIcon:{control:"text",description:"Optional icon displayed at the end of the input field"},rows:{control:"number",description:"The number of rows in the text field"},autosize:{control:"boolean",description:"Whether the text field height adjusts automatically"},minRows:{control:"number",description:"Minimum number of rows when autosize is enabled"},maxRows:{control:"number",description:"Maximum number of rows when autosize is enabled"},minlength:{control:"number",description:"Minimum number of characters for input"},maxlength:{control:"number",description:"Maximum number of characters for input"},counter:{control:"boolean",description:"Whether to display the character counter"},type:{control:"text",description:"The input type (e.g., text, password, number)"},pattern:{control:"text",description:"A regex pattern the input value must match"},min:{control:"text",description:"The minimum value for the input field (for number or date types)"},max:{control:"text",description:"The maximum value for the input field (for number or date types)"},step:{control:"text",description:"Step interval for numeric inputs"}}},a={args:{disabled:!1,variant:"outlined",value:"",name:"default-field"}},r={args:{disabled:!0,variant:"outlined",value:"",name:"disabled-field"}},i={args:{variant:"outlined",value:"test",name:"value-field"}},l={args:{variant:"outlined",placeholder:"test placeholder",name:"placeholder-field"}},s={args:{variant:"outlined",helper:"test helper",name:"helper-field"}},o={args:{variant:"outlined",endIcon:"mic",name:"end-icon-field"}},d={args:{variant:"outlined",placeholder:"test placeholder",helper:"test helper",value:"test",endIcon:"mic",disabled:!1,name:"full-field"}},u={args:{label:"Required Field",placeholder:"Enter something",variant:"filled",helper:"This field is required",required:!0,name:"required-field"}},m={args:{label:"Multi-line Field",placeholder:"Type your message...",variant:"outlined",rows:4,name:"multi-line-field"}},c={args:{label:"Auto-resizing Field",placeholder:"Start typing...",autosize:!0,minRows:2,maxRows:5,variant:"outlined",name:"autosize-field"}},p={args:{label:"Max Length Field",placeholder:"Max 10 characters",variant:"outlined",maxlength:10,counter:!0,helper:"Up to 10 characters",name:"maxlength-field"}},h={args:{label:"Min Length Field",placeholder:"At least 5 characters",variant:"outlined",minlength:5,helper:"Must be at least 5 characters",name:"minlength-field"}},f={args:{label:"Pattern Field",placeholder:"Enter a number",variant:"outlined",pattern:"\\d+",helper:"Only numbers are allowed",name:"pattern-field"}},g={args:{label:"Numeric Field",placeholder:"Enter a value",variant:"outlined",type:"number",min:0,max:100,step:1,helper:"Enter a value between 0 and 100",name:"numeric-field"}};var I,C,W;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: false,
    variant: 'outlined',
    value: '',
    name: 'default-field'
  }
}`,...(W=(C=a.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var L,P,U;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    disabled: true,
    variant: 'outlined',
    value: '',
    name: 'disabled-field'
  }
}`,...(U=(P=r.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var A,H,V;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    value: 'test',
    name: 'value-field'
  }
}`,...(V=(H=i.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var _,D,O;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    placeholder: 'test placeholder',
    name: 'placeholder-field'
  }
}`,...(O=(D=l.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var j,B,G;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    helper: 'test helper',
    name: 'helper-field'
  }
}`,...(G=(B=s.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,Q;o.parameters={...o.parameters,docs:{...(J=o.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    endIcon: 'mic',
    name: 'end-icon-field'
  }
}`,...(Q=(K=o.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    placeholder: 'test placeholder',
    helper: 'test helper',
    value: 'test',
    endIcon: 'mic',
    disabled: false,
    name: 'full-field'
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    placeholder: 'Enter something',
    variant: 'filled',
    helper: 'This field is required',
    required: true,
    name: 'required-field'
  }
}`,...(ne=(te=u.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,re,ie;m.parameters={...m.parameters,docs:{...(ae=m.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Multi-line Field',
    placeholder: 'Type your message...',
    variant: 'outlined',
    rows: 4,
    name: 'multi-line-field'
  }
}`,...(ie=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,se,oe;c.parameters={...c.parameters,docs:{...(le=c.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Auto-resizing Field',
    placeholder: 'Start typing...',
    autosize: true,
    minRows: 2,
    maxRows: 5,
    variant: 'outlined',
    name: 'autosize-field'
  }
}`,...(oe=(se=c.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var de,ue,me;p.parameters={...p.parameters,docs:{...(de=p.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: 'Max Length Field',
    placeholder: 'Max 10 characters',
    variant: 'outlined',
    maxlength: 10,
    counter: true,
    helper: 'Up to 10 characters',
    name: 'maxlength-field'
  }
}`,...(me=(ue=p.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ce,pe,he;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Min Length Field',
    placeholder: 'At least 5 characters',
    variant: 'outlined',
    minlength: 5,
    helper: 'Must be at least 5 characters',
    name: 'minlength-field'
  }
}`,...(he=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var fe,ge,be;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    label: 'Pattern Field',
    placeholder: 'Enter a number',
    variant: 'outlined',
    pattern: '\\\\d+',
    helper: 'Only numbers are allowed',
    name: 'pattern-field'
  }
}`,...(be=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ve,xe,ye;g.parameters={...g.parameters,docs:{...(ve=g.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: 'Numeric Field',
    placeholder: 'Enter a value',
    variant: 'outlined',
    type: 'number',
    min: 0,
    max: 100,
    step: 1,
    helper: 'Enter a value between 0 and 100',
    name: 'numeric-field'
  }
}`,...(ye=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};const it=["Default","Disabled","WithValue","WithPlaceholder","WithHelper","WithEndIcon","Full","RequiredField","MultiLineField","AutosizeField","MaxLengthField","MinLengthField","PatternField","NumericField"];export{c as AutosizeField,a as Default,r as Disabled,d as Full,p as MaxLengthField,h as MinLengthField,m as MultiLineField,g as NumericField,f as PatternField,u as RequiredField,o as WithEndIcon,s as WithHelper,l as WithPlaceholder,i as WithValue,it as __namedExportsOrder,rt as default};
