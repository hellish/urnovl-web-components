import { html } from 'lit';

export default {
    title: 'Urnovl/MDUI',
};

const MDuiButton = () => html`
    <link rel="stylesheet" href="https://unpkg.com/mdui@2/mdui.css">
    <script src="https://unpkg.com/mdui@2/mdui.global.js"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    <mdui-button>Hello, world!</mdui-button>
    <br />
    <mdui-bottom-app-bar style="position: relative;">
    <mdui-dropdown>
        <mdui-button-icon icon="menu" slot="trigger"></mdui-button-icon>
        <mdui-menu>
            <mdui-menu-item>Settings</mdui-menu-item>
            <mdui-menu-item>Send Feedback</mdui-menu-item>
            <mdui-menu-item>Help</mdui-menu-item>
        </mdui-menu>
    </mdui-dropdown>
    <mdui-button-icon icon="edit--outlined"></mdui-button-icon>
    <mdui-button-icon icon="mic_none--outlined"></mdui-button-icon>
    <mdui-button-icon icon="image--outlined"></mdui-button-icon>
    <div style="flex-grow: 1"></div>
    <mdui-fab icon="add"></mdui-fab>
    </mdui-bottom-app-bar>
`;

export const Button = {
    render: () => MDuiButton(),
};
