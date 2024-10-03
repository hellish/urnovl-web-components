import { html } from 'lit';
import '../components/ur-radio-button/ur-radio-button';

const RadioButton = ({
  text = 'Option 1',
  disabled = false,
  checked = false,
}) => html`
    <ur-radio-button checked=${checked} disabled=${disabled}>
      ${text}
    </ur-radio-button>
`;

export default {
  title: 'Core/RadioButtons',
  render: args => RadioButton(args),
  argTypes: {
    // You can define controls here if needed, such as:
    // checked: { control: 'boolean' },
    // disabled: { control: 'boolean' },
  }
};

export const Default = {
  args: {
    disabled: false,
    checked: false,
    text: 'Option 1',
  },
};

export const Checked = {
  args: {
    checked: true,
    text: 'Option 1',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    text: 'Option 1',
  },
};

export const CheckedAndDisabled = {
  args: {
    checked: true,
    disabled: true,
    text: 'Option 1',
  },
};
