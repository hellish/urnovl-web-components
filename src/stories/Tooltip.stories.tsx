import { html } from 'lit';
import '../components/ur-tooltip/ur-tooltip';
import '../components/ur-button/ur-button';

const TooltipTemplate = args => html`
    <div style="width: 500px;height: 300px;position: relative;display: flex;align-items: center;justify-content: center;">
        <ur-tooltip
            content="${args.content}"
            headline="${args.headline}"
            action-text="${args.actionText}"
            placement="${args.placement}"
            variant="${args.variant}"
            trigger="${args.trigger}"
            open-delay="${args.openDelay}"
            close-delay="${args.closeDelay}"
            ?disabled="${args.disabled}"
            color-scheme="${args.colorScheme || 'dark'}"
        >
            <ur-button variant="filled">Hover over me</ur-button>
        </ur-tooltip>
    </div>
`;

export default {
    title: 'Core/Tooltip',
    render: TooltipTemplate,
    argTypes: {
        content: {
            control: 'text',
            description: 'Content of the tooltip (plain or HTML)',
        },
        headline: {
            control: 'text',
            description: 'Headline for rich tooltips',
        },
        actionText: {
            control: 'text',
            description: 'Action button text for rich tooltips',
        },
        placement: {
            control: 'select',
            options: [
                'auto',
                'top-left',
                'top-start',
                'top',
                'top-end',
                'top-right',
                'bottom-left',
                'bottom-start',
                'bottom',
                'bottom-end',
                'bottom-right',
                'left-start',
                'left',
                'left-end',
                'right-start',
                'right',
                'right-end',
            ],
            description: 'Placement of the tooltip relative to the target',
        },
        variant: {
            control: 'select',
            options: ['plain', 'rich'],
            description: 'Tooltip variant (plain or rich text)',
        },
        trigger: {
            control: 'select',
            options: ['hover', 'click', 'focus', 'manual'],
            description: 'Trigger method for the tooltip',
        },
        openDelay: {
            control: 'number',
            description: 'Delay in milliseconds before the tooltip appears',
        },
        closeDelay: {
            control: 'number',
            description: 'Delay in milliseconds before the tooltip disappears',
        },
        colorScheme: {
            control: 'select',
            options: ['dark', 'light'],
            description: 'Color scheme for the tooltip (dark or light)',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the tooltip is disabled',
        },
    },
};

export const PlainTooltip = {
    args: {
        content: 'This is a plain tooltip.',
        placement: 'bottom',
        variant: 'plain',
        trigger: 'hover',
        openDelay: 0,
        closeDelay: 150,
        disabled: false,
    },
};

export const RichTooltip = {
    args: {
        content: `Rich tooltips bring attention to a particular element or feature that warrants the user's focus. It supports multiple lines of informational text.`,
        headline: 'Rich Tooltip',
        actionText: 'Action',
        placement: 'bottom',
        variant: 'rich',
        trigger: 'hover',
        openDelay: 150,
        closeDelay: 150,
        disabled: false,
    },
};

export const DisabledTooltip = {
    args: {
        content: 'This tooltip is disabled.',
        placement: 'right',
        variant: 'plain',
        trigger: 'hover',
        openDelay: 150,
        closeDelay: 150,
        disabled: true,
    },
};

export const LightTooltip = {
    args: {
        content: 'This is a tooltip with a light color scheme.',
        placement: 'bottom',
        variant: 'plain',
        trigger: 'hover',
        openDelay: 0,
        closeDelay: 150,
        colorScheme: 'light',
        disabled: false,
    },
};
