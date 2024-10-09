import { html } from 'lit';
import '../components/ur-select/ur-select';


const menuItems = [
    ['English', 'en'],
    ['German', 'de'],
    ['Greek', 'el']
];

const Select = ({
    label = 'Welcome',
    name = 'Test Name',
    value = '',
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
    errorIcon = null,
    clearIcon = null,
    form = null,
    menuItems = [],
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
        error-icon=${errorIcon}
        clear-icon=${clearIcon}
        form=${form}
        .menuItems=${menuItems}
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
        }
    }
};

export const Default = {
    args: {
        disabled: false,
        variant: 'outlined',
        value: '',
        menuItems: menuItems
    },
};

export const Disabled = {
    args: {
        disabled: true,
        variant: 'outlined',
        value: '',
        menuItems: menuItems
    },
};

export const WithValue = {
    args: {
        variant: 'outlined',
        value: 'test',
        menuItems: menuItems
    },
};

export const WithPlaceholder = {
    args: {
        variant: 'outlined',
        placeholder: 'test placeholder',
        menuItems: menuItems
    },
};

export const WithHelper = {
    args: {
        variant: 'outlined',
        helper: 'test helper',
        menuItems: menuItems
    },
};

export const WithEndIcon = {
    args: {
        variant: 'outlined',
        endIcon: 'mic',
        menuItems: menuItems
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
        menuItems: menuItems
    },
};
