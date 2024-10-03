import { html } from 'lit';

import '../components/ur-button-icon/ur-button-icon';

const ButtonIcon = ({
    disabled = false,
    variant = 'standard',
    icon = 'favorite_border',
    selectedIcon = 'favorite',
    selected = false,
}) => html`
    <ur-button-icon icon=${icon} variant=${variant} disabled=${disabled} loading=${disabled} selected=${selected} selected-icon=${selectedIcon}></ur-button-icon>
`;

export default {
    title: 'Core/ButtonsIcon',
    render: args => ButtonIcon(args),
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'standard',
                'filled',
                'tonal',
                'outlined'
            ]
        }
    }
};

export const Basic = {
    args: {
        icon: 'favorite_border',
        variant: 'standard'
    }
}

export const Selectable = {
    args: {
        icon: 'favorite_border',
        variant: 'standard',
        selectedIcon: 'favorite',
        selected: true,
    }
}