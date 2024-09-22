import { html } from 'lit';
import '../components/ur-button/ur-button';
import '../components/ur-button-arrow-left/ur-button-arrow-left';
import '../components/ur-button-arrow-right/ur-button-arrow-right';

const ButtonArrowLeft = () => html`
    <ur-button-arrow-left></ur-button-arrow-left>
`;

const ButtonArrowRight = () => html`
    <ur-button-arrow-right></ur-button-arrow-right>
`;

const Button = ({
    text = 'Welcome',
    disabled = false,
    variant = 'filled'
}) => html`
    <ur-button variant=${variant} disabled=${disabled}>${text}</ur-button>
`;

export default {
    title: 'Urnovl/Buttons',
};

export const ArrowLeft = {
    render: () => ButtonArrowLeft(),
};

export const ArrowRight = {
    render: () => ButtonArrowRight(),
};

export const Basic = {
    render: () => Button({
        //
    }),
}

export const Disabled = {
    render: () => Button({
        disabled: true
    }),
}

export const WithVariant = {
    render: () => Button({
        variant: 'outlined'
    }),
}
