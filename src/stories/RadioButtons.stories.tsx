import { html } from 'lit';
import '../components/ur-radio-button/ur-radio-button';

const RadioButton = ({
  text = 'Option 1',
  disabled = false,
  checked = false,
  value = 'option1',
  name = 'group1',
}) => html`
  <ur-radio-button
    checked=${checked}
    disabled=${disabled}
    value=${value}
    name=${name}
  >
    ${text}
  </ur-radio-button>
`;

export default {
  title: 'Core/RadioButtons',
  render: args => RadioButton(args),
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    text: { control: 'text' },
    value: { control: 'text' },
    name: { control: 'text' },
  },
};

export const Default = {
  args: {
    disabled: false,
    checked: false,
    text: 'Option 1',
    value: 'option1',
    name: 'group1',
  },
};

export const Checked = {
  args: {
    checked: true,
    disabled: false,
    text: 'Option 1',
    value: 'option1',
    name: 'group1',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    checked: false,
    text: 'Option 1',
    value: 'option1',
    name: 'group1',
  },
};

export const CheckedAndDisabled = {
  args: {
    checked: true,
    disabled: true,
    text: 'Option 1',
    value: 'option1',
    name: 'group1',
  },
};

export const CustomValue = {
  args: {
    checked: false,
    disabled: false,
    text: 'Custom Option',
    value: 'customOption',
    name: 'group1',
  },
};