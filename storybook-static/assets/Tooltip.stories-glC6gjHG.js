import{x as f}from"./entry-preview-CxXhOGqP.js";import"./ur-tooltip-BUoBwWEv.js";import"./ur-button-DHluMf_C.js";import"./index-DrFu-skq.js";import"./chunk-L4EGOTBX-BPj2F1fn.js";import"./index-Bdp-Mrn6.js";import"./index-CtpJcEdY.js";import"./class-map-CvfWHz58.js";import"./get-DCsNyb8P.js";import"./template-DbMQw6l-.js";import"./index-rsUJIYwf.js";import"./button-base--7WXG1Vh.js";import"./if-defined-D52-l-pg.js";import"./anchor-BJ52fAYX.js";import"./form-CWZnyZ12.js";import"./index-pr7ns5cs.js";const v=t=>f`
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
`,j={title:"Core/Tooltip",render:v,argTypes:{content:{control:"text",description:"Content of the tooltip (plain or HTML)"},headline:{control:"text",description:"Headline for rich tooltips"},actionText:{control:"text",description:"Action button text for rich tooltips"},placement:{control:"select",options:["auto","top-left","top-start","top","top-end","top-right","bottom-left","bottom-start","bottom","bottom-end","bottom-right","left-start","left","left-end","right-start","right","right-end"],description:"Placement of the tooltip relative to the target"},variant:{control:"select",options:["plain","rich"],description:"Tooltip variant (plain or rich text)"},trigger:{control:"select",options:["hover","click","focus","manual"],description:"Trigger method for the tooltip"},openDelay:{control:"number",description:"Delay in milliseconds before the tooltip appears"},closeDelay:{control:"number",description:"Delay in milliseconds before the tooltip disappears"},colorScheme:{control:"select",options:["dark","light"],description:"Color scheme for the tooltip (dark or light)"},disabled:{control:"boolean",description:"Whether the tooltip is disabled"}}},e={args:{content:"This is a plain tooltip.",placement:"bottom",variant:"plain",trigger:"hover",openDelay:0,closeDelay:150,disabled:!1}},o={args:{content:"Rich tooltips bring attention to a particular element or feature that warrants the user's focus. It supports multiple lines of informational text.",headline:"Rich Tooltip",actionText:"Action",placement:"bottom",variant:"rich",trigger:"hover",openDelay:150,closeDelay:150,disabled:!1}},i={args:{content:"This tooltip is disabled.",placement:"right",variant:"plain",trigger:"hover",openDelay:150,closeDelay:150,disabled:!0}},r={args:{content:"This is a tooltip with a light color scheme.",placement:"bottom",variant:"plain",trigger:"hover",openDelay:0,closeDelay:150,colorScheme:"light",disabled:!1}};var n,a,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    content: 'This is a plain tooltip.',
    placement: 'bottom',
    variant: 'plain',
    trigger: 'hover',
    openDelay: 0,
    closeDelay: 150,
    disabled: false
  }
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const E=["PlainTooltip","RichTooltip","DisabledTooltip","LightTooltip"];export{i as DisabledTooltip,r as LightTooltip,e as PlainTooltip,o as RichTooltip,E as __namedExportsOrder,j as default};
