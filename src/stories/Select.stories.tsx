import { html } from 'lit';
import '../components/ur-select/ur-select';

const ITEMS = [
    ['English', 'English', false],
    ['German', 'German', false],
    ['Greek', 'Greek', false]
];

const Select = ({
    label = 'Select Language',
    name = 'language',
    value = '',
    placeholder = '',
    helper = '',
    readonly = false,
    disabled = false,
    clearable = false,
    multiple = false,
    endAligned = false,
    variant = 'outlined',
    placement = 'auto',
    icon = null,
    endIcon = null,
    form = null,
    items = [],
}) => html`
    <ur-select
        label=${label}
        name=${name}
        value=${value}
        placeholder=${placeholder}
        helper=${helper}
        readonly=${readonly}
        disabled=${disabled}
        clearable=${clearable}
        multiple=${multiple}
        end-aligned=${endAligned}
        variant=${variant}
        placement=${placement}
        icon=${icon}
        end-icon=${endIcon}
        form=${form}
        .items=${items}
        @itemClicked=${(e) => console.log('Selected item value:', e.detail)}
    ></ur-select>
`;

export default {
    title: 'Core/Select',
    render: args => Select(args),
    argTypes: {
        variant: {
            control: 'select',
            options: ['filled', 'outlined']
        },
    },
};

export const Default = {
    args: {
        label: 'Select Language',
        items: ITEMS,
    },
};

export const Disabled = {
    args: {
        disabled: true,
        items: ITEMS
    },
};

export const WithPreSetValue = {
    args: {
        label: 'Select Language',
        value: 'English',
        items: ITEMS,
    },
};

export const WithFilledVariant = {
    args: {
        variant: 'filled',
        items: ITEMS
    },
};

export const WithMultipleSelection = {
    args: {
        label: 'Select Languages',
        multiple: true,
        items: ITEMS,
    },
};

export const WithPlaceholder = {
    args: {
        placeholder: 'Choose a language',
        items: ITEMS
    },
};

export const WithHelper = {
    args: {
        helper: 'Select your preferred language',
        items: ITEMS
    },
};

export const WithIcon = {
    args: {
        icon: 'keyboard_arrow_down',
        items: ITEMS
    },
};

export const WithEndIcon = {
    args: {
        endIcon: 'keyboard_arrow_down',
        items: ITEMS
    },
};

export const Full = {
    args: {
        variant: 'outlined',
        placeholder: 'Choose a language',
        helper: 'Select your preferred language',
        endIcon: 'keyboard_arrow_down',
        disabled: false,
        multiple: true,
        items: ITEMS
    },
};

export const FullWithDisabledItems = {
    args: {
        variant: 'outlined',
        placeholder: 'Choose a language',
        helper: 'Select your preferred language',
        endIcon: 'keyboard_arrow_down',
        disabled: false,
        multiple: true,
        items: [
            ['English', 'English', true],
            ['German', 'German', true],
            ['Greek', 'Greek', false]
        ]
    },
};
