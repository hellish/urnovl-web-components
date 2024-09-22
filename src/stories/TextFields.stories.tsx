import { html } from 'lit';
import '../components/ur-text-field/ur-text-field';

const TextField = ({
    label = 'Welcome',
    placeholder = "",
    helper = "",
    disabled = false,
    variant = 'outlined',
    endIcon = null,
    value = ""
}) => html`
    <ur-text-field
        label=${label}
        placeholder=${placeholder}
        helper=${helper}
        variant=${variant}
        value=${value}
        end-icon=${endIcon}
        disabled=${disabled}></ur-text-field>
`;

export default {
    title: 'Core/TextField',
    render: args => TextField(args),
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'filled',
                'outlined'
            ]
        }
    }
};

export const Default = {
    args: {
        disabled: false,
        variant: 'outlined',
        value: ''
    },
};

export const Disabled = {
    args: {
        disabled: true,
        variant: 'outlined',
        value: ''
    },
};

export const WithValue = {
    args: {
        variant: 'outlined',
        value: 'test'
    },
};

export const WithPlaceholder = {
    args: {
        variant: 'outlined',
        placeholder: 'test placeholder'
    },
};

export const WithHelper = {
    args: {
        variant: 'outlined',
        helper: 'test helper'
    },
};

export const WithEndIcon = {
    args: {
        variant: 'outlined',
        endIcon: 'mic'
    },
};

export const Full = {
    args: {
        variant: 'outlined',
        placeholder: 'test placeholder',
        helper: 'test helper',
        value: 'test',
        endIcon: 'mic',
        disabled: false,
    },
};
