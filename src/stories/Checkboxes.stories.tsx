import { html } from 'lit';
import '../components/ur-checkbox/ur-checkbox';

const Checkbox = ({ text = 'Welcome', disabled = false, checked = false, value = '', name = 'example-group' }) => html`
    <ur-checkbox checked=${checked} disabled=${disabled} value=${value} name=${name}> ${text} </ur-checkbox>
`;

export default {
    title: 'Core/Checkboxes',
    render: args => Checkbox(args),
    argTypes: {
        text: { control: 'text', description: 'Label text for the checkbox' },
        disabled: { control: 'boolean', description: 'Disable the checkbox' },
        checked: { control: 'boolean', description: 'Checked state of the checkbox' },
        value: { control: 'text', description: 'Value of the checkbox' },
        name: { control: 'text', description: 'Group name of the checkbox' },
    },
};

export const Default = {
    args: {
        text: 'Welcome',
        disabled: false,
        checked: false,
        value: 'default-value',
        name: 'example-group',
    },
};

export const Checked = {
    args: {
        text: 'Checked Checkbox',
        checked: true,
        disabled: false,
        value: 'checked-value',
        name: 'example-group',
    },
};

export const Disabled = {
    args: {
        text: 'Disabled Checkbox',
        checked: false,
        disabled: true,
        value: 'disabled-value',
        name: 'example-group',
    },
};

export const CheckedAndDisabled = {
    args: {
        text: 'Checked and Disabled Checkbox',
        checked: true,
        disabled: true,
        value: 'checked-disabled-value',
        name: 'example-group',
    },
};

export const WithCustomValue = {
    args: {
        text: 'Checkbox with Value',
        checked: false,
        disabled: false,
        value: 'custom-value',
        name: 'custom-group',
    },
};
