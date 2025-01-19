import{k as $e}from"./entry-preview-BcHUnPw7.js";import"./ur-text-field-BVd5wrhJ.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-B9J0OpMa.js";import"./index-DXUeAwMJ.js";import"./get-w4emotEH.js";import"./if-defined-CL77Dv0Z.js";import"./live-8TRlRbWK.js";import"./when-BxLAFfhK.js";import"./localize-D59fSqZK.js";import"./form-BeuMnVCp.js";import"./default-value-BEuyqpAi.js";import"./watch-ByvFYHv8.js";import"./observeResize-CYvww9Tt.js";import"./uniqueId-Bqzl4fNd.js";import"./template-yncBVCyc.js";import"./svg-tag-DDFZdwWr.js";import"./index-D2jzjD89.js";import"./index-kIIll_V8.js";import"./button-base-DwUGB6N2.js";import"./anchor-ClLaGEwM.js";const Me=({label:h="Welcome",placeholder:pe="",helper:me="",disabled:he=!1,required:fe=!1,variant:ge="outlined",value:be="",name:ve="",endIcon:xe=null,rows:f=null,autosize:Fe=!1,minRows:g=null,maxRows:b=null,minlength:v=null,maxlength:x=null,counter:ye=!1,type:we="text",pattern:F=null,min:y=null,max:w=null,step:$=null})=>$e`
    <ur-text-field
        label=${h}
        placeholder=${pe}
        helper=${me}
        variant=${ge}
        value=${be}
        name=${ve}
        end-icon=${xe}
        disabled=${he}
        required=${fe}
        rows=${f!==null?f:""}
        autosize=${Fe}
        min-rows=${g!==null?g:""}
        max-rows=${b!==null?b:""}
        minlength=${v!==null?v:""}
        maxlength=${x!==null?x:""}
        counter=${ye}
        type=${we}
        pattern=${F!==null?F:""}
        min=${y!==null?y:""}
        max=${w!==null?w:""}
        step=${$!==null?$:""}
    ></ur-text-field>
`,Ge={title:"Core/TextField",render:h=>Me(h),argTypes:{label:{control:"text",description:"The label displayed above the input field"},placeholder:{control:"text",description:"Placeholder text shown inside the input field"},helper:{control:"text",description:"Helper text displayed below the input field"},disabled:{control:"boolean",description:"Whether the input field is disabled"},required:{control:"boolean",description:"Whether the input field is required"},variant:{control:"select",options:["filled","outlined"],description:"Style variant of the input field"},value:{control:"text",description:"The current value of the input field"},name:{control:"text",description:"The name attribute for form integration (FormData)"},endIcon:{control:"text",description:"Optional icon displayed at the end of the input field"},rows:{control:"number",description:"The number of rows in the text field"},autosize:{control:"boolean",description:"Whether the text field height adjusts automatically"},minRows:{control:"number",description:"Minimum number of rows when autosize is enabled"},maxRows:{control:"number",description:"Maximum number of rows when autosize is enabled"},minlength:{control:"number",description:"Minimum number of characters for input"},maxlength:{control:"number",description:"Maximum number of characters for input"},counter:{control:"boolean",description:"Whether to display the character counter"},type:{control:"text",description:"The input type (e.g., text, password, number)"},pattern:{control:"text",description:"A regex pattern the input value must match"},min:{control:"text",description:"The minimum value for the input field (for number or date types)"},max:{control:"text",description:"The maximum value for the input field (for number or date types)"},step:{control:"text",description:"Step interval for numeric inputs"}}},e={args:{disabled:!1,variant:"outlined",value:"",name:"default-field"}},r={args:{disabled:!0,variant:"outlined",value:"",name:"disabled-field"}},t={args:{variant:"outlined",value:"test",name:"value-field"}},a={args:{variant:"outlined",placeholder:"test placeholder",name:"placeholder-field"}},n={args:{variant:"outlined",helper:"test helper",name:"helper-field"}},l={args:{variant:"outlined",endIcon:"mic",name:"end-icon-field"}},i={args:{variant:"outlined",placeholder:"test placeholder",helper:"test helper",value:"test",endIcon:"mic",disabled:!1,name:"full-field"}},o={args:{label:"Required Field",placeholder:"Enter something",variant:"filled",helper:"This field is required",required:!0,name:"required-field"}},s={args:{label:"Multi-line Field",placeholder:"Type your message...",variant:"outlined",rows:4,name:"multi-line-field"}},d={args:{label:"Auto-resizing Field",placeholder:"Start typing...",autosize:!0,minRows:2,maxRows:5,variant:"outlined",name:"autosize-field"}},c={args:{label:"Max Length Field",placeholder:"Max 10 characters",variant:"outlined",maxlength:10,counter:!0,helper:"Up to 10 characters",name:"maxlength-field"}},u={args:{label:"Min Length Field",placeholder:"At least 5 characters",variant:"outlined",minlength:5,helper:"Must be at least 5 characters",name:"minlength-field"}},p={args:{label:"Pattern Field",placeholder:"Enter a number",variant:"outlined",pattern:"\\d+",helper:"Only numbers are allowed",name:"pattern-field"}},m={args:{label:"Numeric Field",placeholder:"Enter a value",variant:"outlined",type:"number",min:0,max:100,step:1,helper:"Enter a value between 0 and 100",name:"numeric-field"}};var M,S,T;e.parameters={...e.parameters,docs:{...(M=e.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    disabled: false,
    variant: 'outlined',
    value: '',
    name: 'default-field'
  }
}`,...(T=(S=e.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var q,W,z;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    disabled: true,
    variant: 'outlined',
    value: '',
    name: 'disabled-field'
  }
}`,...(z=(W=r.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var E,L,R;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    value: 'test',
    name: 'value-field'
  }
}`,...(R=(L=t.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var A,I,P;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    placeholder: 'test placeholder',
    name: 'placeholder-field'
  }
}`,...(P=(I=a.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var D,N,O;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    helper: 'test helper',
    name: 'helper-field'
  }
}`,...(O=(N=n.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var H,_,k;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    endIcon: 'mic',
    name: 'end-icon-field'
  }
}`,...(k=(_=l.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var U,V,j;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    placeholder: 'test placeholder',
    helper: 'test helper',
    value: 'test',
    endIcon: 'mic',
    disabled: false,
    name: 'full-field'
  }
}`,...(j=(V=i.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var C,B,G;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    placeholder: 'Enter something',
    variant: 'filled',
    helper: 'This field is required',
    required: true,
    name: 'required-field'
  }
}`,...(G=(B=o.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,Q;s.parameters={...s.parameters,docs:{...(J=s.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Multi-line Field',
    placeholder: 'Type your message...',
    variant: 'outlined',
    rows: 4,
    name: 'multi-line-field'
  }
}`,...(Q=(K=s.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Auto-resizing Field',
    placeholder: 'Start typing...',
    autosize: true,
    minRows: 2,
    maxRows: 5,
    variant: 'outlined',
    name: 'autosize-field'
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Max Length Field',
    placeholder: 'Max 10 characters',
    variant: 'outlined',
    maxlength: 10,
    counter: true,
    helper: 'Up to 10 characters',
    name: 'maxlength-field'
  }
}`,...(te=(re=c.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,ne,le;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Min Length Field',
    placeholder: 'At least 5 characters',
    variant: 'outlined',
    minlength: 5,
    helper: 'Must be at least 5 characters',
    name: 'minlength-field'
  }
}`,...(le=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ie,oe,se;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Pattern Field',
    placeholder: 'Enter a number',
    variant: 'outlined',
    pattern: '\\\\d+',
    helper: 'Only numbers are allowed',
    name: 'pattern-field'
  }
}`,...(se=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var de,ce,ue;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(ce=m.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const Je=["Default","Disabled","WithValue","WithPlaceholder","WithHelper","WithEndIcon","Full","RequiredField","MultiLineField","AutosizeField","MaxLengthField","MinLengthField","PatternField","NumericField"];export{d as AutosizeField,e as Default,r as Disabled,i as Full,c as MaxLengthField,u as MinLengthField,s as MultiLineField,m as NumericField,p as PatternField,o as RequiredField,l as WithEndIcon,n as WithHelper,a as WithPlaceholder,t as WithValue,Je as __namedExportsOrder,Ge as default};
