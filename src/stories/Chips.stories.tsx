import { html } from 'lit';
import '../components/ur-chip/ur-chip';

const Chip = ({
    label = 'Chip',
    loading = false,
    disabled = false,
}) => html`
    <ur-chip label=${label} disabled=${disabled} loading=${loading}></ur-chip>
`;

export default {
    title: 'Core/Chips',
    render: args => Chip(args),
    argTypes: {
        label: { control: 'text'},
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
        disabled: false,
        loading: true
    },
};