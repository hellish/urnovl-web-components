import { html } from 'lit';
import '../components/ur-checkbox/ur-checkbox';

const Checkbox = ({
    text = 'Welcome',
    disabled = false,
}) => html`
    <ur-checkbox disabled=${disabled}>${text}</ur-checkbox>
`;

export default {
    title: 'Urnovl/Checkboxes',
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

export const Disabled = {
    args: {
        disabled: true
    },
};
