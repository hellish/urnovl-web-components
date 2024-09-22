import { html } from 'lit';
import '../components/ur-checkbox/ur-checkbox';

const Checkbox = ({
    text = 'Welcome',
    disabled = false,
    checked = false,
}) => html`
    <ur-checkbox checked=${checked} disabled=${disabled}>${text}</ur-checkbox>
`;

export default {
    title: 'Core/Checkboxes',
    render: args => Checkbox(args),
    argTypes: {
        //
    }
};

export const Default = {
    args: {
        disabled: false
    },
};

export const Checked = {
    args: {
        checked: true
    },
};

export const Disabled = {
    args: {
        disabled: true
    },
};

export const CheckedAndDisabled = {
    args: {
        checked: true,
        disabled: true
    },
};
