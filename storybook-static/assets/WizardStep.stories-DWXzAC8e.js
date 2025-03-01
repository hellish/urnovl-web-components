import{k as o}from"./entry-preview-BcHUnPw7.js";import"./ur-button-CUrM10zk.js";import{s as w,g as l}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as T,H as y,c as n,h as t,a as k}from"./index-B9J0OpMa.js";import"./ur-text-field-CPVui5RK.js";import"./ur-form-SR4xkxFp.js";import"./index-DrFu-skq.js";import"./index-BRY6Z_ZR.js";import"./class-map-CWCTosL-.js";import"./get-IZFZkHlF.js";import"./template-yncBVCyc.js";import"./index-CXOzFcj5.js";import"./button-base-DxLrUPRs.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-C8TuHONp.js";import"./form-DhDC-phE.js";import"./index-pqI9kxak.js";import"./index-DiG0h0go.js";import"./live-KarC74af.js";import"./when-BxLAFfhK.js";import"./default-value-Btzv9brT.js";import"./watch-ByvFYHv8.js";import"./observeResize-C8vt2UeC.js";import"./uniqueId-Bqzl4fNd.js";import"./svg-tag-C3ctfYVB.js";import"./index-rXz1tEXk.js";const N=".step-container{padding:20px;border:1px solid #ccc;border-radius:4px;background-color:#f9f9f9;margin-bottom:20px;display:flex;flex-direction:column;gap:20px;}.step-title{font-size:1.5rem;margin-bottom:10px;font-weight:bold;color:#333;}.step-subtitle{font-size:1rem;color:#666;margin-bottom:20px;font-style:italic;}.step-form{display:flex;flex-direction:column;gap:15px;}.step-actions{display:flex;justify-content:flex-end;gap:10px;}",F=class extends y{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.stepCompleted=n(this,"stepCompleted",7),this.stepBack=n(this,"stepBack",7),this.formData={},this.handleNext=()=>{if(!this.isValid){console.error("Step is invalid. Fix errors before proceeding.");return}const e=this.el.querySelector("ur-form");e&&(console.log("Submitting form data for step:",this.step),e.submitForm()),console.log(`Navigating forward from step ${this.step}`,this.formData),this.stepCompleted.emit({step:this.step,formData:this.formData})},this.handlePrevious=()=>{this.step>1?(console.log(`Navigating back from step ${this.step} to step ${this.step-1}`),this.stepBack.emit(this.step-1)):console.warn("Already at the first step. Cannot go back further.")},this.step=void 0,this.stepTitle=void 0,this.subtitle=void 0,this.showPrevious=!0,this.showNext=!0,this.previousButtonTitle="Previous",this.nextButtonTitle="Next",this.isSkippable=!1,this.isValid=!0,this.validationMessage=void 0,this.customClass=void 0}handleFormValid(){console.log("Form in wizard step is valid."),this.isValid=!0,this.updateNextButtonState()}handleFormInvalid(e){console.log("Form in wizard step is invalid:",e.detail.errors),this.isValid=!1,this.updateNextButtonState()}updateNextButtonState(){const e=this.el.shadowRoot.querySelector('ur-button[variant="filled"]');e&&e.toggleAttribute("disabled",!this.isValid),console.log("Next button state updated. Disabled:",!this.isValid)}async submitStepForm(){const e=this.el.querySelector("ur-form");e?await e.submitForm():console.warn("No ur-form found in this step.")}async resetStepForm(){const e=this.el.querySelector("ur-form");e?await e.resetForm():console.warn("No ur-form found in this step.")}render(){return t(k,{key:"141ebb628c7cd1598694ac59745f23811d2b23ca",class:this.customClass},t("div",{key:"f8a5a943e6c4944a3bc07ce6abc13bdff103dd1b",class:"step-container"},t("h2",{key:"0dbe886864d5ca89354c6ab1096dc1bb365c5f19",class:"step-title"},this.stepTitle),this.subtitle&&t("p",{key:"f7f4a464a821809f1ab2c630b8b43ea8c0ec70e8",class:"step-subtitle"},this.subtitle),t("form",{key:"a2a3ccae91211d4947ec1379bb8cbb89ce888f4b"},t("slot",{key:"89d48e9ffc049a67c2ca6b7a4f6c3800e0462cef"}),!this.isValid&&t("p",{key:"5b2aa592c8ae215811b11479520e7bc221df321b",class:"validation-message"},this.validationMessage||"Step is invalid")),t("div",{key:"c8ed65cf645aa981e7d4f6b0ad76a6542b013e49",class:"step-actions"},this.showPrevious&&t("ur-button",{key:"93ec2ac59cca11169ac1a296216f26020b3ef87a",variant:"outlined",onClick:this.handlePrevious},this.previousButtonTitle),this.showNext&&t("ur-button",{key:"55f59dcba8502a5df2e68267af174fcc727f03b5",variant:"filled",onClick:this.handleNext,disabled:!this.isValid},this.nextButtonTitle))))}get el(){return this}static get style(){return N}};T(F,[1,"ur-wizard-step",{step:[2],stepTitle:[1,"step-title"],subtitle:[1],showPrevious:[4,"show-previous"],showNext:[4,"show-next"],previousButtonTitle:[1,"previous-button-title"],nextButtonTitle:[1,"next-button-title"],isSkippable:[4,"is-skippable"],isValid:[1028,"is-valid"],validationMessage:[1,"validation-message"],customClass:[1,"custom-class"],submitStepForm:[64],resetStepForm:[64]},[[0,"formValid","handleFormValid"],[0,"formInvalid","handleFormInvalid"]]]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrWizardStep",tagName:"ur-wizard-step",customElement:!0,members:[{kind:"field",name:"step",type:"number",description:"Step number of the wizard"},{kind:"field",name:"stepTitle",type:"string",description:"Title of the wizard step"},{kind:"field",name:"subtitle",type:"string",description:"Subtitle or instructions for the step"},{kind:"field",name:"showPrevious",type:"boolean",description:'Determines if the "Previous" button is visible',default:"true"},{kind:"field",name:"showNext",type:"boolean",description:'Determines if the "Next" button is visible',default:"true"},{kind:"field",name:"previousButtonTitle",type:"string",description:'Title of the "Previous" button',default:"'Previous'"},{kind:"field",name:"nextButtonTitle",type:"string",description:'Title of the "Next" button',default:"'Next'"},{kind:"field",name:"isSkippable",type:"boolean",description:"Determines if the step can be skipped",default:"false"},{kind:"field",name:"isValid",type:"boolean",description:"Validation state of the step",default:"true"},{kind:"field",name:"validationMessage",type:"string",description:"Custom validation message"},{kind:"field",name:"customClass",type:"string",description:"Custom CSS class for the component"}],events:[{kind:"event",name:"stepCompleted",description:"Event emitted when the step is completed"},{kind:"event",name:"stepBack",description:"Event emitted when navigating back"}]}],exports:[{kind:"js",name:"UrWizardStep",declaration:{name:"UrWizardStep",module:"src/components/ur-wizard-step/ur-wizard-step.tsx"}},{kind:"custom-element-definition",name:"ur-wizard-step",declaration:{name:"UrWizardStep",module:"src/components/ur-wizard-step/ur-wizard-step.tsx"}}]}]};w({...l()||{},...d,modules:[...(l()||{}).modules||[],...d.modules]});const $=e=>o`
  <ur-wizard-step
    step="${e.step}"
    step-title="${e.stepTitle}"
    subtitle="${e.subtitle}"
    show-previous="${e.showPrevious}"
    show-next="${e.showNext}"
    previous-button-title="${e.previousButtonTitle}"
    next-button-title="${e.nextButtonTitle}"
    custom-class="${e.customClass}"
  >
    ${e.content}
  </ur-wizard-step>
`,te={title:"urnovl/Basic/Wizard Step",render:$,argTypes:{step:{control:"number",description:"The step number"},stepTitle:{control:"text",description:"Title of the step"},subtitle:{control:"text",description:"Subtitle of the step"},showPrevious:{control:"boolean",description:"Show Previous button"},showNext:{control:"boolean",description:"Show Next button"},previousButtonTitle:{control:"text",description:"Title of Previous button"},nextButtonTitle:{control:"text",description:"Title of Next button"},customClass:{control:"text",description:"Custom CSS class for styling"},content:{control:"text",description:"Content inside the step"}}},i={args:{step:1,stepTitle:"Default Step",subtitle:"This is a default wizard step.",showPrevious:!0,showNext:!0,previousButtonTitle:"Previous",nextButtonTitle:"Next",customClass:"",content:o`
      <ur-form>
        <ur-text-field
          label="Default Field"
          name="default-field"
          placeholder="Enter something"
          variant="outlined"
          helper="This is a helper text"
          required
          @valueChanged=${e=>console.log("Default Step - Value Changed:",e.detail)}
          @errorStateChanged=${e=>console.log("Default Step - Error State Changed:",e.detail)}
        ></ur-text-field>
      </ur-form>
    `}},s={args:{...i.args,step:2,stepTitle:"Validation Step",subtitle:"You must complete the field to proceed.",showNext:!0,isValid:!1,content:o`
      <ur-form>
        <ur-text-field
          label="Required Field"
          name="required-field"
          placeholder="Enter text"
          variant="outlined"
          helper="This field is required"
          required
          @valueChanged=${e=>console.log("Invalid Step - Value Changed:",e.detail)}
          @errorStateChanged=${e=>console.log("Invalid Step - Error State Changed:",e.detail)}
        ></ur-text-field>
      </ur-form>
    `}},r={args:{...i.args,step:3,stepTitle:"Multi-Field Step",subtitle:"Complete all fields to proceed.",content:o`
      <ur-form>
        <ur-text-field
          label="Name"
          name="name"
          placeholder="Enter your name"
          variant="outlined"
          helper="Name is required"
          required
          @valueChanged=${e=>console.log("MultiFieldStep - Name Value Changed:",e.detail)}
          @errorStateChanged=${e=>console.log("MultiFieldStep - Name Error State Changed:",e.detail)}
        ></ur-text-field>
        <ur-text-field
          label="Age"
          name="age"
          placeholder="Enter your age"
          variant="outlined"
          type="number"
          min="18"
          max="100"
          required
          helper="Age must be between 18 and 100"
          @valueChanged=${e=>console.log("MultiFieldStep - Age Value Changed:",e.detail)}
          @errorStateChanged=${e=>console.log("MultiFieldStep - Age Error State Changed:",e.detail)}
        ></ur-text-field>
      </ur-form>
    `}},a={args:{...i.args,step:4,stepTitle:"Final Step",subtitle:"Review and submit your information.",showPrevious:!0,nextButtonTitle:"Submit",content:o`
      <ur-form>
        <p>Please ensure all your information is correct before submitting.</p>
      </ur-form>
    `}};var u,p,c;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    step: 1,
    stepTitle: 'Default Step',
    subtitle: 'This is a default wizard step.',
    showPrevious: true,
    showNext: true,
    previousButtonTitle: 'Previous',
    nextButtonTitle: 'Next',
    customClass: '',
    content: html\`
      <ur-form>
        <ur-text-field
          label="Default Field"
          name="default-field"
          placeholder="Enter something"
          variant="outlined"
          helper="This is a helper text"
          required
          @valueChanged=\${event => console.log('Default Step - Value Changed:', event.detail)}
          @errorStateChanged=\${event => console.log('Default Step - Error State Changed:', event.detail)}
        ></ur-text-field>
      </ur-form>
    \`
  }
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,h,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...DefaultStep.args,
    step: 2,
    stepTitle: 'Validation Step',
    subtitle: 'You must complete the field to proceed.',
    showNext: true,
    isValid: false,
    content: html\`
      <ur-form>
        <ur-text-field
          label="Required Field"
          name="required-field"
          placeholder="Enter text"
          variant="outlined"
          helper="This field is required"
          required
          @valueChanged=\${event => console.log('Invalid Step - Value Changed:', event.detail)}
          @errorStateChanged=\${event => console.log('Invalid Step - Error State Changed:', event.detail)}
        ></ur-text-field>
      </ur-form>
    \`
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,g,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...DefaultStep.args,
    step: 3,
    stepTitle: 'Multi-Field Step',
    subtitle: 'Complete all fields to proceed.',
    content: html\`
      <ur-form>
        <ur-text-field
          label="Name"
          name="name"
          placeholder="Enter your name"
          variant="outlined"
          helper="Name is required"
          required
          @valueChanged=\${event => console.log('MultiFieldStep - Name Value Changed:', event.detail)}
          @errorStateChanged=\${event => console.log('MultiFieldStep - Name Error State Changed:', event.detail)}
        ></ur-text-field>
        <ur-text-field
          label="Age"
          name="age"
          placeholder="Enter your age"
          variant="outlined"
          type="number"
          min="18"
          max="100"
          required
          helper="Age must be between 18 and 100"
          @valueChanged=\${event => console.log('MultiFieldStep - Age Value Changed:', event.detail)}
          @errorStateChanged=\${event => console.log('MultiFieldStep - Age Error State Changed:', event.detail)}
        ></ur-text-field>
      </ur-form>
    \`
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,x,C;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...DefaultStep.args,
    step: 4,
    stepTitle: 'Final Step',
    subtitle: 'Review and submit your information.',
    showPrevious: true,
    nextButtonTitle: 'Submit',
    content: html\`
      <ur-form>
        <p>Please ensure all your information is correct before submitting.</p>
      </ur-form>
    \`
  }
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const ie=["DefaultStep","InvalidStep","MultiFieldStep","FinalStep"];export{i as DefaultStep,a as FinalStep,s as InvalidStep,r as MultiFieldStep,ie as __namedExportsOrder,te as default};
