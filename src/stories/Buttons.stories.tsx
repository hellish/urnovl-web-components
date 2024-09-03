import { html } from 'lit';
import '../components/ur-button-arrow-left/ur-button-arrow-left';
import '../components/ur-button-arrow-right/ur-button-arrow-right';

const ButtonArrowLeft = () => html`
    <link rel="stylesheet" href="https://unpkg.com/mdui@2/mdui.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    <ur-button-arrow-left></ur-button-arrow-left>
`;

const ButtonArrowRight = () => html`
    <link rel="stylesheet" href="https://unpkg.com/mdui@2/mdui.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
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
