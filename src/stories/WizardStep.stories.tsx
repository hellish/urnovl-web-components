import { html } from 'lit';
import '../components/ur-wizard-step/ur-wizard-step'; // Adjust the path
import '../components/ur-text-field/ur-text-field'; // Adjust the path
import '../components/ur-form/ur-form'; // Ensure ur-form is included

const Template = args => html`
  <ur-wizard-step
    step="${args.step}"
    step-title="${args.stepTitle}"
    subtitle="${args.subtitle}"
    show-previous="${args.showPrevious}"
    show-next="${args.showNext}"
    previous-button-title="${args.previousButtonTitle}"
    next-button-title="${args.nextButtonTitle}"
    custom-class="${args.customClass}"
  >
    ${args.content}
  </ur-wizard-step>
`;

export default {
  title: 'urnovl/Basic/Wizard Step',
  render: Template,
  argTypes: {
    step: { control: 'number', description: 'The step number' },
    stepTitle: { control: 'text', description: 'Title of the step' },
    subtitle: { control: 'text', description: 'Subtitle of the step' },
    showPrevious: { control: 'boolean', description: 'Show Previous button' },
    showNext: { control: 'boolean', description: 'Show Next button' },
    previousButtonTitle: { control: 'text', description: 'Title of Previous button' },
    nextButtonTitle: { control: 'text', description: 'Title of Next button' },
    customClass: { control: 'text', description: 'Custom CSS class for styling' },
    content: { control: 'text', description: 'Content inside the step' },
  },
};

// Stories
export const DefaultStep = {
  args: {
    step: 1,
    stepTitle: 'Default Step',
    subtitle: 'This is a default wizard step.',
    showPrevious: true,
    showNext: true,
    previousButtonTitle: 'Previous',
    nextButtonTitle: 'Next',
    customClass: '',
    content: html`
      <ur-form>
        <ur-text-field
          label="Default Field"
          name="default-field"
          placeholder="Enter something"
          variant="outlined"
          helper="This is a helper text"
          required
          @valueChanged=${event => console.log('Default Step - Value Changed:', event.detail)}
          @errorStateChanged=${event => console.log('Default Step - Error State Changed:', event.detail)}
        ></ur-text-field>
      </ur-form>
    `,
  },
};

export const InvalidStep = {
  args: {
    ...DefaultStep.args,
    step: 2,
    stepTitle: 'Validation Step',
    subtitle: 'You must complete the field to proceed.',
    showNext: true,
    isValid: false,
    content: html`
      <ur-form>
        <ur-text-field
          label="Required Field"
          name="required-field"
          placeholder="Enter text"
          variant="outlined"
          helper="This field is required"
          required
          @valueChanged=${event => console.log('Invalid Step - Value Changed:', event.detail)}
          @errorStateChanged=${event => console.log('Invalid Step - Error State Changed:', event.detail)}
        ></ur-text-field>
      </ur-form>
    `,
  },
};

export const MultiFieldStep = {
  args: {
    ...DefaultStep.args,
    step: 3,
    stepTitle: 'Multi-Field Step',
    subtitle: 'Complete all fields to proceed.',
    content: html`
      <ur-form>
        <ur-text-field
          label="Name"
          name="name"
          placeholder="Enter your name"
          variant="outlined"
          helper="Name is required"
          required
          @valueChanged=${event => console.log('MultiFieldStep - Name Value Changed:', event.detail)}
          @errorStateChanged=${event => console.log('MultiFieldStep - Name Error State Changed:', event.detail)}
        ></ur-text-field>
        <ur-text-field
          label="Age"
          name="age"
          placeholder="Enter your age"
          variant="outlined"
          type="number"
          min="18"
          max="100"
          required
          helper="Age must be between 18 and 100"
          @valueChanged=${event => console.log('MultiFieldStep - Age Value Changed:', event.detail)}
          @errorStateChanged=${event => console.log('MultiFieldStep - Age Error State Changed:', event.detail)}
        ></ur-text-field>
      </ur-form>
    `,
  },
};

export const FinalStep = {
  args: {
    ...DefaultStep.args,
    step: 4,
    stepTitle: 'Final Step',
    subtitle: 'Review and submit your information.',
    showPrevious: true,
    nextButtonTitle: 'Submit',
    content: html`
      <ur-form>
        <p>Please ensure all your information is correct before submitting.</p>
      </ur-form>
    `,
  },
};
