import { html } from 'lit';
import '../components/ur-button/ur-button';
import '../components/ur-button-arrow-left/ur-button-arrow-left';
import '../components/ur-button-arrow-right/ur-button-arrow-right';

const ButtonArrowLeft = ({
    disabled = false
}) => html`
    <ur-button-arrow-left disabled=${disabled}></ur-button-arrow-left>
`;

const ButtonArrowRight = ({
    disabled = false
}) => html`
    <ur-button-arrow-right disabled=${disabled}></ur-button-arrow-right>
`;

const Button = ({
    text = 'Welcome',
    disabled = false,
    variant = 'filled',
    icon = null,
    endIcon = null,
}) => html`
    <ur-button icon=${icon} end-icon=${endIcon} variant=${variant} disabled=${disabled}>${text}</ur-button>
`;

export default {
    title: 'Core/Buttons',
    render: args => Button(args),
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'elevated',
                'filled',
                'tonal',
                'outlined',
                'text'
            ]
        }
    }
};

export const ArrowLeft = {
    render: () => ButtonArrowLeft({}),
};

export const DisabledArrowLeft = {
    render: () => ButtonArrowLeft({ disabled: true }),
};

export const ArrowRight = {
    render: () => ButtonArrowRight({}),
};

export const DisbledArrowRight = {
    render: () => ButtonArrowRight({ disabled :true }),
};

export const Basic = {
    args: {}
}

export const Disabled = {
    args: {
        disabled: true
    },
}

export const WithVariant = {
    args: {
        variant: 'outlined'
    },
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'elevated',
                'filled',
                'tonal',
                'outlined',
                'text'
            ]
        }
    }
}

export const WithIcons = {
    args: {
        icon: 'search',
        endIcon: 'arrow_forward',
    }
}

export const Full = {
    args: {
        icon: 'search',
        endIcon: 'arrow_forward',
        variant: 'outlined',
        disabled: false
    }
}
