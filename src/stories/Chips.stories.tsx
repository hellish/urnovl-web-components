import { html } from 'lit';
import '../components/ur-chip/ur-chip';

const Chip = ({
    label = 'Chip',
    loading = false,
    disabled = false,
    clickable = true,
    border = '0',
    radius = '8px',
    size = '32px',
    backColor = 'rgb(var(--mdui-color-secondary-container))',
    fontColor = 'rgb(var(--mdui-color-on-secondary-container))'
}) => html`
    <ur-chip 
        label=${label} 
        disabled=${disabled} 
        loading=${loading}
        clickable=${clickable}
        border=${border}
        radius=${radius}
        size=${size}
        backColor=${backColor}
        fontColor=${fontColor}
    ></ur-chip>
`;

export default {
    title: 'Core/Chips',
    render: args => Chip(args),
    argTypes: {
        label: { control: 'text' },
        border: { control: 'text' },
        radius: { control: 'text' },
        size: { control: 'text' },
        backColor: { control: 'color' },
        fontColor: { control: 'color' },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        clickable: { control: 'boolean' }
    }
};

export const Default = {
    args: {
        label: 'Default Chip',
    },
};

export const Disabled = {
    args: {
        label: 'Disabled Chip',
        disabled: true,
    },
};

export const Loading = {
    args: {
        label: 'Loading Chip',
        loading: true,
    },
};

export const NonClickable = {
    args: {
        label: 'Non-Clickable Chip',
        clickable: false,
    },
};

export const NonClickableDisabled = {
    args: {
        label: 'Non-Clickable Disabled Chip',
        clickable: false,
        disabled: true,
    },
};

export const NonClickableLoading = {
    args: {
        label: 'Non-Clickable Loading Chip',
        clickable: false,
        loading: true,
    },
};