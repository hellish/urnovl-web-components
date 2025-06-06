import{x as F}from"./entry-preview-CxXhOGqP.js";import"./ur-avatar-vOdIekPT.js";import"./ur-text-field-vAmsjrjf.js";import"./ur-button-DHluMf_C.js";import"./ur-button-icon-BR1VQfom.js";import{s as C,g as m}from"./chunk-L4EGOTBX-BPj2F1fn.js";import{d as k,H as L,c as a,h as t}from"./index-Bdp-Mrn6.js";import"./index-DrFu-skq.js";import"./index-D39jp6j-.js";import"./class-map-CvfWHz58.js";import"./get-DCsNyb8P.js";import"./if-defined-D52-l-pg.js";import"./live-DwPmnOYN.js";import"./when-BR7zwNJC.js";import"./form-CWZnyZ12.js";import"./default-value-dSVzt9o_.js";import"./watch-ByvFYHv8.js";import"./observeResize-Dehp4heo.js";import"./uniqueId-Bqzl4fNd.js";import"./template-DbMQw6l-.js";import"./svg-tag-B1kmCZ6g.js";import"./index-rsUJIYwf.js";import"./index-CFISRIGu.js";import"./button-base--7WXG1Vh.js";import"./anchor-BJ52fAYX.js";import"./index-pr7ns5cs.js";import"./index-CtpJcEdY.js";const B=':host{display:block;width:100%}:host .form-content{display:flex;gap:8px}:host .form-main{flex:1;display:flex;flex-direction:column;gap:12px}:host .input-container{width:100%;position:relative}:host .button-container{display:flex;justify-content:flex-end}:host .mobile-form ur-text-field{margin-right:4px;flex:1;}:host .mobile-form ur-button-icon{flex-shrink:0;width:56px;height:56px;display:flex;justify-content:center;align-items:center;transform:scale(1.4);}:host .mobile-form{gap:4px;display:flex;flex-direction:row;align-items:flex-end}:host([variant="mobile"]) .form-content{flex-direction:row;align-items:center;gap:4px}:host([variant="mobile"]) .form-main{flex-direction:row;gap:4px;align-items:center}:host([variant="mobile"]) .input-container{flex:1}:host([variant="mobile"]) ur-text-field{--ur-text-field-padding:4px;--ur-text-field-font-size:14px}:host([variant="mobile"]) .button-container{flex-shrink:0;margin:0;padding:0}',$=class extends L{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.commentSubmit=a(this,"commentSubmit",7),this.inputFocus=a(this,"inputFocus",7),this.inputBlur=a(this,"inputBlur",7),this.isServer=!1,this.placeholder="Write your comment here...",this.maxLength=400,this.minLength=1,this.disabled=!1,this.variant="desktop",this.formState={text:"",error:null},this.handleInput=e=>{const s=e.detail.value;this.formState=Object.assign(Object.assign({},this.formState),{text:s,error:this.validateInput(s)})},this.handleFocus=e=>{this.inputFocus.emit(e)},this.handleBlur=e=>{this.inputBlur.emit(e)},this.handleSubmit=()=>{this.isFormValid()&&(console.log("Submitting comment:",this.formState.text),this.commentSubmit.emit({text:this.formState.text}),this.resetForm())}}validateInput(e){return e.length<this.minLength?"Comment is too short":e.length>this.maxLength?"Comment is too long":null}isFormValid(){return this.formState.text.length>=this.minLength&&this.formState.text.length<=this.maxLength&&!this.formState.error&&!this.disabled}resetForm(){this.formState={text:"",error:null}}render(){return this.isServer?null:t("div",{class:`comment-form ${this.variant}`},this.variant==="desktop"?t("div",{class:"form-content"},this.user&&t("ur-avatar",{src:this.user.avatar,name:this.user.displayName,size:"56px"}),t("div",{class:"form-main"},t("div",{class:"input-container"},t("ur-text-field",{label:"",placeholder:this.placeholder,maxlength:this.maxLength,rows:3,autosize:!0,counter:!0,disabled:this.disabled,error:!!this.formState.error,errorMessage:this.formState.error,value:this.formState.text,onValueChanged:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleBlur})),t("div",{class:"button-container"},t("ur-button",{variant:"filled","end-icon":"send",disabled:!this.isFormValid(),onClick:this.handleSubmit},"Comment")))):t("div",{class:"mobile-form"},this.user&&t("ur-avatar",{src:this.user.avatar,name:this.user.displayName,size:"56px"}),t("ur-text-field",{label:"",placeholder:this.placeholder,maxlength:this.maxLength,rows:1,autosize:!0,counter:!1,disabled:this.disabled,error:!!this.formState.error,errorMessage:this.formState.error,value:this.formState.text,onValueChanged:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleBlur}),t("ur-button-icon",{icon:"send",variant:"filled",disabled:!this.isFormValid(),onClick:this.handleSubmit})))}get el(){return this}static get style(){return B}};k($,[1,"ur-comment-form",{user:[16],isServer:[4,"is-server"],placeholder:[1],maxLength:[2,"max-length"],minLength:[2,"min-length"],disabled:[4],variant:[1],formState:[32]}]);const l={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrCommentForm",tagName:"ur-comment-form",customElement:!0,members:[{kind:"field",name:"user",type:"unknown",description:""},{kind:"field",name:"isServer",type:"boolean",description:"",default:"false"},{kind:"field",name:"placeholder",type:"string",description:"",default:"'Write your comment here...'"},{kind:"field",name:"maxLength",type:"number",description:"",default:"400"},{kind:"field",name:"minLength",type:"number",description:"",default:"1"},{kind:"field",name:"disabled",type:"boolean",description:"",default:"false"},{kind:"field",name:"variant",type:"string",description:"",default:"'desktop'"}],events:[{kind:"event",name:"commentSubmit",description:""},{kind:"event",name:"inputFocus",description:""},{kind:"event",name:"inputBlur",description:""}]}],exports:[{kind:"js",name:"UrCommentForm",declaration:{name:"UrCommentForm",module:"src/components/ur-comment-form/ur-comment-form.tsx"}},{kind:"custom-element-definition",name:"ur-comment-form",declaration:{name:"UrCommentForm",module:"src/components/ur-comment-form/ur-comment-form.tsx"}}]}]};C({...m()||{},...l,modules:[...(m()||{}).modules||[],...l.modules]});const N=e=>F`
    <ur-comment-form
        .user=${e.user}
        .placeholder=${e.placeholder}
        .maxLength=${e.maxLength}
        .minLength=${e.minLength}
        .disabled=${e.disabled}
        .loading=${e.loading}
        .isServer=${e.isServer}
        .variant=${e.variant}
        @commentSubmit=${e.onCommentSubmit}
        @inputFocus=${e.onInputFocus}
        @inputBlur=${e.onInputBlur}
        @inputChange=${e.onInputChange}
        @formError=${e.onFormError}
    ></ur-comment-form>
`,re={title:"urnovl/Business/Forms/CommentForm",render:N,argTypes:{user:{control:"object",description:"User object containing displayName and avatar"},placeholder:{control:"text",description:"Placeholder text for the comment input"},maxLength:{control:"number",description:"Maximum length of the comment"},minLength:{control:"number",description:"Minimum length of the comment"},disabled:{control:"boolean",description:"Whether the form is disabled"},loading:{control:"boolean",description:"Whether the form is in loading state"},isServer:{control:"boolean",description:"Whether running in server context"},variant:{control:"select",options:["desktop","mobile"],description:"The variant of the form (desktop or mobile)"},onCommentSubmit:{action:"commentSubmit"},onInputFocus:{action:"inputFocus"},onInputBlur:{action:"inputBlur"},onInputChange:{action:"inputChange"},onFormError:{action:"formError"}}},r={args:{user:{displayName:"John Doe",avatar:"https://i.pravatar.cc/150?img=5"},placeholder:"Write your comment here...",maxLength:400,minLength:1,disabled:!1,loading:!1,isServer:!1,variant:"desktop"}},i={args:{...r.args,loading:!0,user:{displayName:"Jane Smith",avatar:"https://i.pravatar.cc/150?img=6"}}},n={args:{...r.args,disabled:!0,placeholder:"Comments are disabled",user:{displayName:"Guest User",avatar:"https://i.pravatar.cc/150?img=7"}}},o={args:{...r.args,variant:"mobile",user:{displayName:"John Mobile",avatar:"https://i.pravatar.cc/150?img=8"},placeholder:"Comment..."}};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    user: {
      displayName: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    placeholder: 'Write your comment here...',
    maxLength: 400,
    minLength: 1,
    disabled: false,
    loading: false,
    isServer: false,
    variant: 'desktop'
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,p,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    user: {
      displayName: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?img=6'
    }
  }
}`,...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,b,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    placeholder: 'Comments are disabled',
    user: {
      displayName: 'Guest User',
      avatar: 'https://i.pravatar.cc/150?img=7'
    }
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,S,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'mobile',
    user: {
      displayName: 'John Mobile',
      avatar: 'https://i.pravatar.cc/150?img=8'
    },
    placeholder: 'Comment...'
  }
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const ie=["Default","LoadingState","DisabledState","MobileVariant"];export{r as Default,n as DisabledState,i as LoadingState,o as MobileVariant,ie as __namedExportsOrder,re as default};
