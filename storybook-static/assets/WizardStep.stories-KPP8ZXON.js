import{k as o}from"./entry-preview-BcHUnPw7.js";import"./ur-button-CwSoz4Du.js";import{s as w,g as l}from"./chunk-L4EGOTBX-2Jzo53v8.js";import{d as T,H as y,c as n,h as t,a as k}from"./index-B9J0OpMa.js";import"./ur-text-field-DJfVoeWb.js";import"./ur-form-B52qCsOl.js";import"./index-DrFu-skq.js";import"./index-CGUw5SK0.js";import"./get-w4emotEH.js";import"./template-yncBVCyc.js";import"./index-D2jzjD89.js";import"./button-base-DwUGB6N2.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-ClLaGEwM.js";import"./form-BeuMnVCp.js";import"./index-DEqrGdH5.js";import"./live-8TRlRbWK.js";import"./when-BxLAFfhK.js";import"./default-value-BEuyqpAi.js";import"./watch-ByvFYHv8.js";import"./observeResize-CYvww9Tt.js";import"./uniqueId-Bqzl4fNd.js";import"./svg-tag-DDFZdwWr.js";import"./index-kIIll_V8.js";const N=".step-container{padding:20px;border:1px solid #ccc;border-radius:4px;background-color:#f9f9f9;margin-bottom:20px;display:flex;flex-direction:column;gap:20px;}.step-title{font-size:1.5rem;margin-bottom:10px;font-weight:bold;color:#333;}.step-subtitle{font-size:1rem;color:#666;margin-bottom:20px;font-style:italic;}.step-form{display:flex;flex-direction:column;gap:15px;}.step-actions{display:flex;justify-content:flex-end;gap:10px;}",F=class extends y{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.stepCompleted=n(this,"stepCompleted",7),this.stepBack=n(this,"stepBack",7),this.formData={},this.handleNext=()=>{if(!this.isValid){console.error("Step is invalid. Fix errors before proceeding.");return}const e=this.el.querySelector("ur-form");e&&(console.log("Submitting form data for step:",this.step),e.submitForm()),console.log(`Navigating forward from step ${this.step}`,this.formData),this.stepCompleted.emit({step:this.step,formData:this.formData})},this.handlePrevious=()=>{this.step>1?(console.log(`Navigating back from step ${this.step} to step ${this.step-1}`),this.stepBack.emit(this.step-1)):console.warn("Already at the first step. Cannot go back further.")},this.step=void 0,this.stepTitle=void 0,this.subtitle=void 0,this.showPrevious=!0,this.showNext=!0,this.previousButtonTitle="Previous",this.nextButtonTitle="Next",this.isSkippable=!1,this.isValid=!0,this.validationMessage=void 0,this.customClass=void 0}handleFormValid(){console.log("Form in wizard step is valid."),this.isValid=!0,this.updateNextButtonState()}handleFormInvalid(e){console.log("Form in wizard step is invalid:",e.detail.errors),this.isValid=!1,this.updateNextButtonState()}updateNextButtonState(){const e=this.el.shadowRoot.querySelector('ur-button[variant="filled"]');e&&e.toggleAttribute("disabled",!this.isValid),console.log("Next button state updated. Disabled:",!this.isValid)}async submitStepForm(){const e=this.el.querySelector("ur-form");e?await e.submitForm():console.warn("No ur-form found in this step.")}async resetStepForm(){const e=this.el.querySelector("ur-form");e?await e.resetForm():console.warn("No ur-form found in this step.")}render(){return t(k,{key:"dee11cc97adb36316dbf486df7519175b9f96a14",class:this.customClass},t("div",{key:"dbbef9d370bb2adf634acc1115a308b921dd4d64",class:"step-container"},t("h2",{key:"a727d68be1926a1afe0f413228bbce71e65a2b45",class:"step-title"},this.stepTitle),this.subtitle&&t("p",{key:"1419cec34c3468a8f3983e7e300628892ab198a4",class:"step-subtitle"},this.subtitle),t("form",{key:"f3615e25c764004b9119f2332581452360ee98d7"},t("slot",{key:"0376670cef7066016b6cfe6b3f0f84ede673dea9"}),!this.isValid&&t("p",{key:"ece8875d05e980767e4636961b14d00de936d1ba",class:"validation-message"},this.validationMessage||"Step is invalid")),t("div",{key:"95506b4cafb67ed60f1dd0ac775fc0dea3e245fa",class:"step-actions"},this.showPrevious&&t("ur-button",{key:"982a3d66e45b85dcfdb4c45e3abb365c5228a2d5",variant:"outlined",onClick:this.handlePrevious},this.previousButtonTitle),this.showNext&&t("ur-button",{key:"d10d5cf3564d33edd2eb119a00cc78f8adf616f2",variant:"filled",onClick:this.handleNext,disabled:!this.isValid},this.nextButtonTitle))))}get el(){return this}static get style(){return N}};T(F,[1,"ur-wizard-step",{step:[2],stepTitle:[1,"step-title"],subtitle:[1],showPrevious:[4,"show-previous"],showNext:[4,"show-next"],previousButtonTitle:[1,"previous-button-title"],nextButtonTitle:[1,"next-button-title"],isSkippable:[4,"is-skippable"],isValid:[1028,"is-valid"],validationMessage:[1,"validation-message"],customClass:[1,"custom-class"],submitStepForm:[64],resetStepForm:[64]},[[0,"formValid","handleFormValid"],[0,"formInvalid","handleFormInvalid"]]]);const d={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"UrWizardStep",tagName:"ur-wizard-step",customElement:!0,members:[{kind:"field",name:"step",type:"number",description:"Step number of the wizard"},{kind:"field",name:"stepTitle",type:"string",description:"Title of the wizard step"},{kind:"field",name:"subtitle",type:"string",description:"Subtitle or instructions for the step"},{kind:"field",name:"showPrevious",type:"boolean",description:'Determines if the "Previous" button is visible',default:"true"},{kind:"field",name:"showNext",type:"boolean",description:'Determines if the "Next" button is visible',default:"true"},{kind:"field",name:"previousButtonTitle",type:"string",description:'Title of the "Previous" button',default:"'Previous'"},{kind:"field",name:"nextButtonTitle",type:"string",description:'Title of the "Next" button',default:"'Next'"},{kind:"field",name:"isSkippable",type:"boolean",description:"Determines if the step can be skipped",default:"false"},{kind:"field",name:"isValid",type:"boolean",description:"Validation state of the step",default:"true"},{kind:"field",name:"validationMessage",type:"string",description:"Custom validation message"},{kind:"field",name:"customClass",type:"string",description:"Custom CSS class for the component"}],events:[{kind:"event",name:"stepCompleted",description:"Event emitted when the step is completed"},{kind:"event",name:"stepBack",description:"Event emitted when navigating back"}]}],exports:[{kind:"js",name:"UrWizardStep",declaration:{name:"UrWizardStep",module:"src/components/ur-wizard-step/ur-wizard-step.tsx"}},{kind:"custom-element-definition",name:"ur-wizard-step",declaration:{name:"UrWizardStep",module:"src/components/ur-wizard-step/ur-wizard-step.tsx"}}]}]};w({...l()||{},...d,modules:[...(l()||{}).modules||[],...d.modules]});const $=e=>o`
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
`,Z={title:"urnovl/Basic/Wizard Step",render:$,argTypes:{step:{control:"number",description:"The step number"},stepTitle:{control:"text",description:"Title of the step"},subtitle:{control:"text",description:"Subtitle of the step"},showPrevious:{control:"boolean",description:"Show Previous button"},showNext:{control:"boolean",description:"Show Next button"},previousButtonTitle:{control:"text",description:"Title of Previous button"},nextButtonTitle:{control:"text",description:"Title of Next button"},customClass:{control:"text",description:"Custom CSS class for styling"},content:{control:"text",description:"Content inside the step"}}},i={args:{step:1,stepTitle:"Default Step",subtitle:"This is a default wizard step.",showPrevious:!0,showNext:!0,previousButtonTitle:"Previous",nextButtonTitle:"Next",customClass:"",content:o`
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
    `}};var u,p,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,h,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const ee=["DefaultStep","InvalidStep","MultiFieldStep","FinalStep"];export{i as DefaultStep,a as FinalStep,s as InvalidStep,r as MultiFieldStep,ee as __namedExportsOrder,Z as default};
