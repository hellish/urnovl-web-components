import{k as f}from"./entry-preview-BcHUnPw7.js";import"./ur-tooltip-C6oC_XCO.js";import"./ur-button-Cvl048CH.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-2Jzo53v8.js";import"./index-B9J0OpMa.js";import"./index-CGUw5SK0.js";import"./get-w4emotEH.js";import"./template-yncBVCyc.js";import"./index-D2jzjD89.js";import"./button-base-DwUGB6N2.js";import"./if-defined-CL77Dv0Z.js";import"./anchor-ClLaGEwM.js";import"./form-BeuMnVCp.js";const v=t=>f`
    <div style="width: 500px;height: 300px;position: relative;display: flex;align-items: center;justify-content: center;">
        <ur-tooltip
            content="${t.content}"
            headline="${t.headline}"
            action-text="${t.actionText}"
            placement="${t.placement}"
            variant="${t.variant}"
            trigger="${t.trigger}"
            open-delay="${t.openDelay}"
            close-delay="${t.closeDelay}"
            ?disabled="${t.disabled}"
            color-scheme="${t.colorScheme||"dark"}"
        >
            <ur-button variant="filled">Hover over me</ur-button>
        </ur-tooltip>
    </div>
`,_={title:"Core/Tooltip",render:v,argTypes:{content:{control:"text",description:"Content of the tooltip (plain or HTML)"},headline:{control:"text",description:"Headline for rich tooltips"},actionText:{control:"text",description:"Action button text for rich tooltips"},placement:{control:"select",options:["auto","top-left","top-start","top","top-end","top-right","bottom-left","bottom-start","bottom","bottom-end","bottom-right","left-start","left","left-end","right-start","right","right-end"],description:"Placement of the tooltip relative to the target"},variant:{control:"select",options:["plain","rich"],description:"Tooltip variant (plain or rich text)"},trigger:{control:"select",options:["hover","click","focus","manual"],description:"Trigger method for the tooltip"},openDelay:{control:"number",description:"Delay in milliseconds before the tooltip appears"},closeDelay:{control:"number",description:"Delay in milliseconds before the tooltip disappears"},colorScheme:{control:"select",options:["dark","light"],description:"Color scheme for the tooltip (dark or light)"},disabled:{control:"boolean",description:"Whether the tooltip is disabled"}}},e={args:{content:"This is a plain tooltip.",placement:"bottom",variant:"plain",trigger:"hover",openDelay:0,closeDelay:150,disabled:!1}},o={args:{content:"Rich tooltips bring attention to a particular element or feature that warrants the user's focus. It supports multiple lines of informational text.",headline:"Rich Tooltip",actionText:"Action",placement:"bottom",variant:"rich",trigger:"hover",openDelay:150,closeDelay:150,disabled:!1}},i={args:{content:"This tooltip is disabled.",placement:"right",variant:"plain",trigger:"hover",openDelay:150,closeDelay:150,disabled:!0}},r={args:{content:"This is a tooltip with a light color scheme.",placement:"bottom",variant:"plain",trigger:"hover",openDelay:0,closeDelay:150,colorScheme:"light",disabled:!1}};var n,a,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    content: 'This is a plain tooltip.',
    placement: 'bottom',
    variant: 'plain',
    trigger: 'hover',
    openDelay: 0,
    closeDelay: 150,
    disabled: false
  }
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var s,c,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    content: \`Rich tooltips bring attention to a particular element or feature that warrants the user's focus. It supports multiple lines of informational text.\`,
    headline: 'Rich Tooltip',
    actionText: 'Action',
    placement: 'bottom',
    variant: 'rich',
    trigger: 'hover',
    openDelay: 150,
    closeDelay: 150,
    disabled: false
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,m,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip is disabled.',
    placement: 'right',
    variant: 'plain',
    trigger: 'hover',
    openDelay: 150,
    closeDelay: 150,
    disabled: true
  }
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,u,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip with a light color scheme.',
    placement: 'bottom',
    variant: 'plain',
    trigger: 'hover',
    openDelay: 0,
    closeDelay: 150,
    colorScheme: 'light',
    disabled: false
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const I=["PlainTooltip","RichTooltip","DisabledTooltip","LightTooltip"];export{i as DisabledTooltip,r as LightTooltip,e as PlainTooltip,o as RichTooltip,I as __namedExportsOrder,_ as default};
