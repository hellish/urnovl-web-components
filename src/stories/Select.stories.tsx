import { html } from 'lit';

import '../components/ur-select/ur-select'; // Adjust the path as necessary

const SelectTemplate = ({
    name = 'example-select',
    value = '',
    options = ['Option 1', 'Option 2', 'Option 3'],
    multiple = false,
    label = '',
    placeholder = '',
    helper = '',
    disabled = false,
    clearable = false,
    variant = 'filled',
    readonly = false,
    placement = 'bottom',
    icon = '',
    endIcon = '',
    clearIcon = 'close',
    suffix = '',
}) => html`
    <ur-select
        name=${name}
        .value=${value}
        ?multiple=${multiple}
        ?disabled=${disabled}
        ?clearable=${clearable}
        ?readonly=${readonly}
        variant=${variant}
        placement=${placement}
        label=${label}
        placeholder=${placeholder}
        helper=${helper}
        suffix=${suffix}
    >
        ${icon ? html`<span slot="icon" class="material-icons">${icon}</span>` : ''}
        ${endIcon ? html`<span slot="end-icon" class="material-icons">${endIcon}</span>` : ''}
        ${clearable && clearIcon ? html`<span slot="clear-icon" class="material-icons">${clearIcon}</span>` : ''}
        ${options.map((option, index) => html`<mdui-menu-item value="option${index + 1}">${option}</mdui-menu-item>`)}
    </ur-select>
`;

export default {
    title: 'Core/Select',
    render: args => SelectTemplate(args),
    argTypes: {
        name: { control: 'text' },
        value: { control: 'text' },
        options: { control: 'array' },
        multiple: { control: 'boolean' },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        helper: { control: 'text' },
        disabled: { control: 'boolean' },
        clearable: { control: 'boolean' },
        variant: {
            control: { type: 'select', options: ['filled', 'outlined'] },
        },
        placement: {
            control: { type: 'select', options: ['bottom', 'top'] },
        },
        readonly: { control: 'boolean' },
        icon: { control: 'text' },
        endIcon: { control: 'text' },
        clearIcon: { control: 'text' },
        suffix: { control: 'text' }, // Keep suffix if it exists in your component
    },
};

export const Default = {
    args: {
        name: 'default-select',
        value: '',
        options: ['Option 1', 'Option 2', 'Option 3'],
        label: 'Select an Option',
        placeholder: 'Choose...',
        helper: 'Select one of the options',
        multiple: false,
        disabled: false,
        clearable: false,
        readonly: false,
        variant: 'outlined', // Valid value
        placement: 'bottom', // Valid value
        icon: '',
        endIcon: '',
        clearIcon: 'close',
        suffix: '',
    },
};


export const Preselected = {
    args: {
        name: 'preselected-select',
        value: 'option2',
        options: ['Option 1', 'Option 2', 'Option 3'],
        label: 'Select an Option',
        placeholder: 'Choose...',
        helper: 'This select has a preselected value',
        multiple: false,
        disabled: false,
        clearable: true,
        readonly: false,
        variant: 'filled',
        placement: 'bottom',
        icon: '',
        endIcon: '',
        clearIcon: 'close',
    },
};

export const MultipleSelection = {
    args: {
        name: 'multi-select',
        value: '',
        options: ['Option 1', 'Option 2', 'Option 3'],
        label: 'Select Multiple Options',
        placeholder: 'Choose...',
        helper: 'You can select multiple options',
        multiple: true,
        disabled: false,
        clearable: true,
        readonly: false,
        variant: 'outlined',
        placement: 'bottom',
        icon: '',
        endIcon: '',
        clearIcon: 'close',
    },
};

export const Disabled = {
    args: {
        name: 'disabled-select',
        value: '',
        options: ['Option 1', 'Option 2', 'Option 3'],
        label: 'Disabled Select',
        placeholder: 'Cannot choose...',
        helper: 'This select is disabled',
        multiple: false,
        disabled: true,
        clearable: false,
        readonly: false,
        variant: 'filled',
        placement: 'bottom',
        icon: '',
        endIcon: '',
        clearIcon: 'close',
    },
};

export const ReadOnly = {
    args: {
        name: 'readonly-select',
        value: 'option2',
        options: ['Option 1', 'Option 2', 'Option 3'],
        label: 'Read-Only Select',
        placeholder: 'Cannot change...',
        helper: 'This select is read-only',
        multiple: false,
        disabled: false,
        clearable: false,
        readonly: true,
        variant: 'filled',
        placement: 'bottom',
        icon: '',
        endIcon: '',
        clearIcon: 'close',
    },
};

export const CustomPlacement = {
    args: {
        name: 'custom-placement',
        value: '',
        options: ['Option 1', 'Option 2', 'Option 3'],
        label: 'Custom Dropdown Placement',
        placeholder: 'Choose...',
        helper: 'This select has a custom dropdown placement',
        multiple: false,
        disabled: false,
        clearable: false,
        readonly: false,
        variant: 'filled',
        placement: 'top',
        icon: '',
        endIcon: '',
        clearIcon: 'close',
    },
};

export const MultiSelectWithPreselected = {
    args: {
        name: 'multi-select-preselected',
        value: ['option2', 'option3'],
        options: ['Option 1', 'Option 2', 'Option 3'],
        label: 'Multi Select with Preselected',
        placeholder: 'Choose...',
        helper: 'This select has preselected options and allows multiple selection',
        multiple: true,
        disabled: false,
        clearable: true,
        readonly: false,
        variant: 'filled',
        placement: 'bottom',
        icon: '',
        endIcon: '',
        clearIcon: 'close',
    },
};

export const DisabledWithPreselected = {
    args: {
        name: 'disabled-preselect',
        value: 'option2',
        options: ['Option 1', 'Option 2', 'Option 3'],
        label: 'Disabled with Preselected',
        placeholder: 'Cannot change...',
        helper: 'This select is disabled but has a preselected value',
        multiple: false,
        disabled: true,
        clearable: false,
        readonly: false,
        variant: 'filled',
        placement: 'bottom',
        icon: '',
        endIcon: '',
        clearIcon: 'close',
    },
};

export const WithPrefixAndSuffix = {
    args: {
        name: 'prefix-suffix-select',
        value: '',
        options: ['Option 1', 'Option 2', 'Option 3'],
        label: 'Select with Prefix and Suffix',
        placeholder: 'Choose...',
        helper: 'This select has prefix and suffix',
        multiple: false,
        disabled: false,
        clearable: true,
        readonly: false,
        variant: 'filled',
        placement: 'bottom',
        suffix: '/100',
        icon: '',
        endIcon: '',
        clearIcon: 'close',
    },
};