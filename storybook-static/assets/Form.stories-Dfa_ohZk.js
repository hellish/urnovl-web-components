import{x as p}from"./entry-preview-CxXhOGqP.js";import"./ur-form-CtYnxKwr.js";import"./ur-text-field-vAmsjrjf.js";import"./ur-button-DHluMf_C.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-BPj2F1fn.js";import"./index-Bdp-Mrn6.js";import"./index-D39jp6j-.js";import"./class-map-CvfWHz58.js";import"./get-DCsNyb8P.js";import"./if-defined-D52-l-pg.js";import"./live-DwPmnOYN.js";import"./when-BR7zwNJC.js";import"./form-CWZnyZ12.js";import"./default-value-dSVzt9o_.js";import"./watch-ByvFYHv8.js";import"./observeResize-Dehp4heo.js";import"./uniqueId-Bqzl4fNd.js";import"./template-DbMQw6l-.js";import"./svg-tag-B1kmCZ6g.js";import"./index-rsUJIYwf.js";import"./index-CFISRIGu.js";import"./button-base--7WXG1Vh.js";import"./anchor-BJ52fAYX.js";import"./index-pr7ns5cs.js";import"./index-CtpJcEdY.js";const S=({fields:i=[],buttons:$=[{label:"Submit",action:"submitForm",variant:"filled",disabled:!1},{label:"Reset",action:"resetForm",variant:"outlined",disabled:!1}]})=>{const l=`form-status-${Math.random().toString(36).substring(2,8)}`,s=`form-data-${Math.random().toString(36).substring(2,8)}`,m=`form-errors-${Math.random().toString(36).substring(2,8)}`;let a=!1;const E=()=>{const e=document.querySelector("ur-form"),t=document.getElementById(l),u=document.getElementById(s),c=document.getElementById(m);e.addEventListener("formDataChanged",r=>{console.log("Form data changed:",r.detail),u.textContent=JSON.stringify(r.detail,null,2)}),e.addEventListener("formValid",()=>{console.log("Form is valid!"),t.textContent="Form is valid! 🎉",t.style.color="green",a=!0,d()}),e.addEventListener("formInvalid",r=>{console.log("Form is invalid:",r.detail.errors),t.textContent=`Form is invalid: ${JSON.stringify(r.detail.errors)}`,t.style.color="red",a=!1,c.textContent=JSON.stringify(r.detail.errors,null,2),d()})},d=()=>{const e=document.querySelector('[data-action="submitForm"]');e&&(e.disabled=!a)},x=()=>{document.querySelector("ur-form").submitForm()},v=()=>{const e=document.querySelector("ur-form"),t=document.getElementById(l),u=document.getElementById(s),c=document.getElementById(m);e.resetForm(),t.textContent="Form has been reset.",t.style.color="blue",u.textContent="",c.textContent="",a=!1,d()};return setTimeout(E,0),p`
        <ur-form>
            ${i.map(e=>p`
                    <ur-text-field
                        label=${e.label}
                        name=${e.name}
                        placeholder=${e.placeholder||""}
                        type=${e.type||"text"}
                        required=${e.required||!1}
                        minlength=${e.minlength||""}
                        maxlength=${e.maxlength||""}
                        pattern=${e.pattern||""}
                        min=${e.min||""}
                        max=${e.max||""}
                        step=${e.step||""}
                        rows=${e.rows||""}
                        autosize=${e.autosize||!1}
                        variant=${e.variant||"outlined"}
                        helper=${e.helper||""}
                    ></ur-text-field>
                `)}
            <div style="margin-top: 10px;">
                ${$.map(e=>p`
                        <ur-button
                            data-action=${e.action}
                            variant=${e.variant}
                            disabled=${e.action==="submitForm"?!a:e.disabled}
                            @click=${e.action==="submitForm"?x:v}
                            style="margin-right: 10px;"
                        >
                            ${e.label}
                        </ur-button>
                    `)}
            </div>
            <p id=${l} style="margin-top: 10px; font-weight: bold;"></p>
            <div style="margin-top: 10px;">
                <h4>Form Data:</h4>
                <pre id=${s} style="background: #f4f4f4; padding: 10px;"></pre>
                <h4>Form Errors:</h4>
                <pre id=${m} style="background: #f4f4f4; padding: 10px;"></pre>
            </div>
        </ur-form>
    `},X={title:"Urnovl/Basic/Form",render:i=>S(i),argTypes:{fields:{control:"array",description:"Array of text fields to include in the form"},buttons:{control:"array",description:"Array of buttons with labels, actions, and styles"}}},n={args:{fields:[{label:"Username",name:"username",placeholder:"Enter your username",required:!0},{label:"Email",name:"email",type:"email",placeholder:"Enter your email",required:!0}],buttons:[{label:"Submit",action:"submitForm",variant:"filled",disabled:!1}]}},o={args:{fields:[{label:"First Name",name:"first_name",placeholder:"Enter your first name",required:!0},{label:"Last Name",name:"last_name",placeholder:"Enter your last name",required:!0},{label:"Email",name:"email",type:"email",placeholder:"Enter your email"}],buttons:[{label:"Submit",action:"submitForm",variant:"filled",disabled:!1},{label:"Reset",action:"resetForm",variant:"outlined",disabled:!1}]}};var b,f,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    fields: [{
      label: 'Username',
      name: 'username',
      placeholder: 'Enter your username',
      required: true
    }, {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      required: true
    }],
    buttons: [{
      label: 'Submit',
      action: 'submitForm',
      variant: 'filled',
      disabled: false
    }]
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,h,F;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    fields: [{
      label: 'First Name',
      name: 'first_name',
      placeholder: 'Enter your first name',
      required: true
    }, {
      label: 'Last Name',
      name: 'last_name',
      placeholder: 'Enter your last name',
      required: true
    }, {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email'
    }],
    buttons: [{
      label: 'Submit',
      action: 'submitForm',
      variant: 'filled',
      disabled: false
    }, {
      label: 'Reset',
      action: 'resetForm',
      variant: 'outlined',
      disabled: false
    }]
  }
}`,...(F=(h=o.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};const Y=["CentralizedValidation","FormReset"];export{n as CentralizedValidation,o as FormReset,Y as __namedExportsOrder,X as default};
