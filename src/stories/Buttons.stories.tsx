import { html } from 'lit';
import '../components/ur-button-arrow-left/ur-button-arrow-left';
import '../components/ur-button-arrow-right/ur-button-arrow-right';

const ButtonArrowLeft = () => html`
    <ur-button-arrow-left></ur-button-arrow-left>
`;

const ButtonArrowRight = () => html`
    <ur-button-arrow-right></ur-button-arrow-right>
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
