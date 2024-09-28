import { html } from 'lit';
import '../components/ur-switch/ur-switch';  // Import your switch component

// Define the Switch component in Storybook
const Switch = ({
    checked = false,
    disabled = false,
}) => html`
    <ur-switch checked=${checked} disabled=${disabled}></ur-switch>
`;

export default {
    title: 'Core/Switches',  // Define the story under Core/Switches in Storybook
    render: args => Switch(args),  // Render the Switch component with args
    argTypes: {
        // Add controls for toggling checked and disabled properties
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
};

export const Default = {
    args: {
        checked: false,
        disabled: false,
    },
};

export const Checked = {
    args: {
        checked: true,
        disabled: false,
    },
};

export const Disabled = {
    args: {
        checked: false,
        disabled: true,
    },
};

export const CheckedAndDisabled = {
    args: {
        checked: true,
        disabled: true,
    },
};