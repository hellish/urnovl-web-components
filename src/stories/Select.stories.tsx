import { html } from 'lit';
import '../components/ur-select/ur-select';
import { Listen } from '@stencil/core';

const ITEMS = [
    ['English', 'en'],
    ['German', 'de'],
    ['Greek', 'gr']
];

const Select = ({
    label = [],
    name = 'Test Name',
    value = [],
    placeholder = "",
    helper = "",
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
    </ur-select>
`;

export default {
    title: 'Core/Select',
    render: args => Select(args),
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'filled',
                'outlined'
            ]
        },
        onClick: {action: 'onClick'},
    },
    // @Listen('itemClicked')
    // itemClickedHandler(event: CustomEvent<void>) {
    //     console.log('Received the itemClicked event: ', event.detail);
    // }
};

export const Default = {
    args: {
        disabled: false,
        variant: 'outlined',
        value: '',
        items: ITEMS
    },
};

export const Disabled = {
    args: {
        disabled: true,
        variant: 'outlined',
        value: '',
        items: ITEMS
    },
};

export const WithValue = {
    args: {
        variant: 'outlined',
        value: 'test',
        items: ITEMS
    },
};

export const WithMultipleValues = {
    args: {
        variant: 'outlined',
        value: [ITEMS],
        multiple: true,
        items: ITEMS
    },
};

export const WithPlaceholder = {
    args: {
        variant: 'outlined',
        placeholder: 'test placeholder',
        items: ITEMS
    },
};

export const WithHelper = {
    args: {
        variant: 'outlined',
        helper: 'test helper',
        items: ITEMS
    },
};

export const WithIcon = {
    args: {
        variant: 'outlined',
        icon: 'keyboard_arrow_down',
        items: ITEMS
    },
};

export const WithEndIcon = {
    args: {
        variant: 'outlined',
        endIcon: 'keyboard_arrow_down',
        items: ITEMS
    },
};

export const Full = {
    args: {
        variant: 'outlined',
        placeholder: 'test placeholder',
        helper: 'test helper',
        value: 'test',
        endIcon: 'keyboard_arrow_down',
        disabled: false,
        items: ITEMS
    },
};
