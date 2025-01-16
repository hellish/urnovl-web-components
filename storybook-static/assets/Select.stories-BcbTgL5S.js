import{k as e}from"./entry-preview-BcHUnPw7.js";import"./ur-select-m01rKEYN.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-B9J0OpMa.js";import"./get-16ZjOD6f.js";import"./class-map-c_lXebLN.js";import"./query-assigned-elements-BInJlOXT.js";import"./if-defined-CL77Dv0Z.js";import"./array-BxBpEZy1.js";import"./when-BxLAFfhK.js";import"./form-DYv8CV48.js";import"./default-value-Cjt0J7Mq.js";import"./observeResize-BFEvAm6p.js";import"./uniqueId-Bqzl4fNd.js";import"./ripple-mixin-CQ5hE0DF.js";import"./index-BxWH4IIK.js";import"./index-CKf_iOkS.js";import"./anchor-DFAJu5AH.js";import"./watch-ByvFYHv8.js";import"./template-yncBVCyc.js";import"./check-CeipmVHa.js";import"./svg-tag-Bx7YH7wk.js";import"./button-base-D5rkyElT.js";import"./motion-vT-sjHCv.js";import"./index-CFhNLdH0.js";import"./live-B52-oj_Y.js";import"./localize-Dzz2kkGe.js";import"./index-CbvShPku.js";const le=({name:p="example-select",value:B="",options:F=["Option 1","Option 2","Option 3"],multiple:G=!1,label:H="",placeholder:J="",helper:K="",disabled:L=!1,clearable:d=!1,variant:N="filled",readonly:Q=!1,placement:U="bottom",icon:m="",endIcon:u="",clearIcon:f="close",suffix:X=""})=>e`
    <ur-select
        name=${p}
        .value=${B}
        ?multiple=${G}
        ?disabled=${L}
        ?clearable=${d}
        ?readonly=${Q}
        variant=${N}
        placement=${U}
        label=${H}
        placeholder=${J}
        helper=${K}
        suffix=${X}
    >
        ${m?e`<span slot="icon" class="material-icons">${m}</span>`:""}
        ${u?e`<span slot="end-icon" class="material-icons">${u}</span>`:""}
        ${d&&f?e`<span slot="clear-icon" class="material-icons">${f}</span>`:""}
        ${F.map((Z,ee)=>e`<mdui-menu-item value="option${ee+1}">${Z}</mdui-menu-item>`)}
    </ur-select>
`,We={title:"Core/Select",render:p=>le(p),argTypes:{name:{control:"text"},value:{control:"text"},options:{control:"array"},multiple:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},helper:{control:"text"},disabled:{control:"boolean"},clearable:{control:"boolean"},variant:{control:{type:"select",options:["filled","outlined"]}},placement:{control:{type:"select",options:["bottom","top"]}},readonly:{control:"boolean"},icon:{control:"text"},endIcon:{control:"text"},clearIcon:{control:"text"},suffix:{control:"text"}}},l={args:{name:"default-select",value:"",options:["Option 1","Option 2","Option 3"],label:"Select an Option",placeholder:"Choose...",helper:"Select one of the options",multiple:!1,disabled:!1,clearable:!1,readonly:!1,variant:"outlined",placement:"bottom",icon:"",endIcon:"",clearIcon:"close",suffix:""}},n={args:{name:"preselected-select",value:"option2",options:["Option 1","Option 2","Option 3"],label:"Select an Option",placeholder:"Choose...",helper:"This select has a preselected value",multiple:!1,disabled:!1,clearable:!0,readonly:!1,variant:"filled",placement:"bottom",icon:"",endIcon:"",clearIcon:"close"}},o={args:{name:"multi-select",value:"",options:["Option 1","Option 2","Option 3"],label:"Select Multiple Options",placeholder:"Choose...",helper:"You can select multiple options",multiple:!0,disabled:!1,clearable:!0,readonly:!1,variant:"outlined",placement:"bottom",icon:"",endIcon:"",clearIcon:"close"}},a={args:{name:"disabled-select",value:"",options:["Option 1","Option 2","Option 3"],label:"Disabled Select",placeholder:"Cannot choose...",helper:"This select is disabled",multiple:!1,disabled:!0,clearable:!1,readonly:!1,variant:"filled",placement:"bottom",icon:"",endIcon:"",clearIcon:"close"}},t={args:{name:"readonly-select",value:"option2",options:["Option 1","Option 2","Option 3"],label:"Read-Only Select",placeholder:"Cannot change...",helper:"This select is read-only",multiple:!1,disabled:!1,clearable:!1,readonly:!0,variant:"filled",placement:"bottom",icon:"",endIcon:"",clearIcon:"close"}},s={args:{name:"custom-placement",value:"",options:["Option 1","Option 2","Option 3"],label:"Custom Dropdown Placement",placeholder:"Choose...",helper:"This select has a custom dropdown placement",multiple:!1,disabled:!1,clearable:!1,readonly:!1,variant:"filled",placement:"top",icon:"",endIcon:"",clearIcon:"close"}},r={args:{name:"multi-select-preselected",value:["option2","option3"],options:["Option 1","Option 2","Option 3"],label:"Multi Select with Preselected",placeholder:"Choose...",helper:"This select has preselected options and allows multiple selection",multiple:!0,disabled:!1,clearable:!0,readonly:!1,variant:"filled",placement:"bottom",icon:"",endIcon:"",clearIcon:"close"}},i={args:{name:"disabled-preselect",value:"option2",options:["Option 1","Option 2","Option 3"],label:"Disabled with Preselected",placeholder:"Cannot change...",helper:"This select is disabled but has a preselected value",multiple:!1,disabled:!0,clearable:!1,readonly:!1,variant:"filled",placement:"bottom",icon:"",endIcon:"",clearIcon:"close"}},c={args:{name:"prefix-suffix-select",value:"",options:["Option 1","Option 2","Option 3"],label:"Select with Prefix and Suffix",placeholder:"Choose...",helper:"This select has prefix and suffix",multiple:!1,disabled:!1,clearable:!0,readonly:!1,variant:"outlined",placement:"bottom",suffix:"/100",icon:"",endIcon:"",clearIcon:"close"}};var b,h,O;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'default-select',
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Select an Option',
    placeholder: 'Choose...',
    helper: 'Select one of the options',
    multiple: false,
    disabled: false,
    clearable: false,
    readonly: false,
    variant: 'outlined',
    // Valid value
    placement: 'bottom',
    // Valid value
    icon: '',
    endIcon: '',
    clearIcon: 'close',
    suffix: ''
  }
}`,...(O=(h=l.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var v,I,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'preselected-select',
    value: 'option2',
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Select an Option',
    placeholder: 'Choose...',
    helper: 'This select has a preselected value',
    multiple: false,
    disabled: false,
    clearable: true,
    readonly: false,
    variant: 'filled',
    placement: 'bottom',
    icon: '',
    endIcon: '',
    clearIcon: 'close'
  }
}`,...(S=(I=n.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var g,x,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'multi-select',
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Select Multiple Options',
    placeholder: 'Choose...',
    helper: 'You can select multiple options',
    multiple: true,
    disabled: false,
    clearable: true,
    readonly: false,
    variant: 'outlined',
    placement: 'bottom',
    icon: '',
    endIcon: '',
    clearIcon: 'close'
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var C,$,P;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: 'disabled-select',
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Disabled Select',
    placeholder: 'Cannot choose...',
    helper: 'This select is disabled',
    multiple: false,
    disabled: true,
    clearable: false,
    readonly: false,
    variant: 'filled',
    placement: 'bottom',
    icon: '',
    endIcon: '',
    clearIcon: 'close'
  }
}`,...(P=($=a.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var T,w,D;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'readonly-select',
    value: 'option2',
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Read-Only Select',
    placeholder: 'Cannot change...',
    helper: 'This select is read-only',
    multiple: false,
    disabled: false,
    clearable: false,
    readonly: true,
    variant: 'filled',
    placement: 'bottom',
    icon: '',
    endIcon: '',
    clearIcon: 'close'
  }
}`,...(D=(w=t.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var M,W,R;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    name: 'custom-placement',
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Custom Dropdown Placement',
    placeholder: 'Choose...',
    helper: 'This select has a custom dropdown placement',
    multiple: false,
    disabled: false,
    clearable: false,
    readonly: false,
    variant: 'filled',
    placement: 'top',
    icon: '',
    endIcon: '',
    clearIcon: 'close'
  }
}`,...(R=(W=s.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var _,k,V;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    name: 'multi-select-preselected',
    value: ['option2', 'option3'],
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Multi Select with Preselected',
    placeholder: 'Choose...',
    helper: 'This select has preselected options and allows multiple selection',
    multiple: true,
    disabled: false,
    clearable: true,
    readonly: false,
    variant: 'filled',
    placement: 'bottom',
    icon: '',
    endIcon: '',
    clearIcon: 'close'
  }
}`,...(V=(k=r.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var Y,E,j;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    name: 'disabled-preselect',
    value: 'option2',
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Disabled with Preselected',
    placeholder: 'Cannot change...',
    helper: 'This select is disabled but has a preselected value',
    multiple: false,
    disabled: true,
    clearable: false,
    readonly: false,
    variant: 'filled',
    placement: 'bottom',
    icon: '',
    endIcon: '',
    clearIcon: 'close'
  }
}`,...(j=(E=i.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var q,z,A;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: 'prefix-suffix-select',
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Select with Prefix and Suffix',
    placeholder: 'Choose...',
    helper: 'This select has prefix and suffix',
    multiple: false,
    disabled: false,
    clearable: true,
    readonly: false,
    variant: 'outlined',
    placement: 'bottom',
    suffix: '/100',
    icon: '',
    endIcon: '',
    clearIcon: 'close'
  }
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const Re=["Default","Preselected","MultipleSelection","Disabled","ReadOnly","CustomPlacement","MultiSelectWithPreselected","DisabledWithPreselected","WithSuffix"];export{s as CustomPlacement,l as Default,a as Disabled,i as DisabledWithPreselected,r as MultiSelectWithPreselected,o as MultipleSelection,n as Preselected,t as ReadOnly,c as WithSuffix,Re as __namedExportsOrder,We as default};
