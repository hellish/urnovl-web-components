import { html } from 'lit';
import '../components/ur-radio-group/ur-radio-group';
import '../components/ur-radio-button/ur-radio-button';

const RadioGroup = ({
  name = 'example-group',
  value = '',
  options = ['Option 1', 'Option 2', 'Option 3'],
  disabledOptions = [],
}) => html`
  <ur-radio-group name=${name} value=${value}>
    ${options.map(
      (option, index) =>
        html`<ur-radio-button
          value="option${index + 1}"
          name=${name}
          ?checked=${value === `option${index + 1}`}
          ?disabled=${disabledOptions.includes(`option${index + 1}`)}
        >
          ${option}
        </ur-radio-button>`
    )}
  </ur-radio-group>
`;

export default {
  title: 'Urnovl/Basic/RadioGroups',
  render: args => RadioGroup(args),
  argTypes: {
    name: { control: 'text' },
    value: { control: 'text' },
    options: { control: 'array' },
    disabledOptions: { control: 'array' },
  },
};

export const Default = {
  args: {
    name: 'example-group',
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabledOptions: [],
  },
};

export const Preselected = {
  args: {
    name: 'example-group',
    value: 'option2',
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabledOptions: [],
  },
};

export const CustomOptions = {
  args: {
    name: 'custom-group',
    value: 'option3',
    options: ['First Option', 'Second Option', 'Third Option'],
    disabledOptions: [],
  },
};

export const OneDisabled = {
  args: {
    name: 'example-group',
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabledOptions: ['option2'], // Disable the second option
  },
};

export const AllDisabledWithPreselected = {
  args: {
    name: 'example-group',
    value: 'option2', // Preselect the second option
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabledOptions: ['option1', 'option2', 'option3'], // Disable all options
  },
};
