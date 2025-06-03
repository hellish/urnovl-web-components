import { html } from 'lit';
import '../components/ur-stepper/ur-stepper';
import '../components/ur-text-field/ur-text-field';
import '../components/ur-form/ur-form';
import '../components/ur-button/ur-button';


const Template = args => html`
  <ur-stepper
    step-count="${args.stepCount}"
    current-step="${args.currentStep}"
    allow-step-navigation="${args.allowStepNavigation}"
    .stepTitles="${args.stepTitles}"
    .stepDescriptions="${args.stepDescriptions}"
    show-step-numbers="${args.showStepNumbers}"
    completed-step-icon="${args.completedStepIcon}"
    next-button-disabled="${args.nextButtonDisabled}"
    next-button-text="${args.nextButtonText}"
    previous-button-text="${args.previousButtonText}"
    complete-button-text="${args.completeButtonText}"
    @stepChanged="${args.stepChanged}"
    @stepCompleted="${args.stepCompleted}"
    @allStepsCompleted="${args.allStepsCompleted}"
  >
    ${args.content}
  </ur-stepper>
`;

export default {
  title: 'Core/Stepper',
  render: Template,
  argTypes: {
    stepCount: { control: 'number', description: 'Number of steps' },
    currentStep: { control: 'number', description: 'Current active step' },
    allowStepNavigation: { control: 'boolean', description: 'Allow clicking on completed steps' },
    stepTitles: { control: 'object', description: 'Array of step titles' },
    stepDescriptions: { control: 'object', description: 'Array of step descriptions' },
    showStepNumbers: { control: 'boolean', description: 'Show step numbers' },
    completedStepIcon: { control: 'text', description: 'Icon for completed steps' },
    nextButtonDisabled: { control: 'boolean', description: 'Whether the next button is disabled' },
    nextButtonText: { control: 'text', description: 'Text for Next button' },
    previousButtonText: { control: 'text', description: 'Text for Previous button' },
    completeButtonText: { control: 'text', description: 'Text for Complete button' },
    stepChanged: { action: 'stepChanged' },
    stepCompleted: { action: 'stepCompleted' },
    allStepsCompleted: { action: 'allStepsCompleted' },
  },
};

// Basic stepper with form steps
export const BasicStepper = {
  args: {
    stepCount: 3,
    currentStep: 1,
    allowStepNavigation: true,
    stepTitles: ['Personal Info', 'Contact Details', 'Review'],
    stepDescriptions: ['Enter your personal information', 'Provide contact details', 'Review and submit'],
    showStepNumbers: true,
    completedStepIcon: 'check',
    nextButtonDisabled: false,
    nextButtonText: 'Next',
    previousButtonText: 'Previous',
    completeButtonText: 'Submit',
    content: html`
      <ur-form slot="step-1">
        <ur-text-field
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
          required
        ></ur-text-field>
        <ur-text-field
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          required
        ></ur-text-field>
      </ur-form>

      <ur-form slot="step-2">
        <ur-text-field
          label="Email Address"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        ></ur-text-field>
        <ur-text-field
          label="Phone Number"
          name="phone"
          placeholder="+1 (555) 123-4567"
          required
        ></ur-text-field>
      </ur-form>

      <div slot="step-3" style="padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <h3>Review Your Information</h3>
        <p>Please review all the details you've entered before submitting.</p>
        <ul>
          <li>Personal information is complete</li>
          <li>Contact details are verified</li>
          <li>All required fields are filled</li>
        </ul>
      </div>
    `,
  },
};

// Simple setup stepper
export const SetupStepper = {
  args: {
    stepCount: 4,
    currentStep: 1,
    allowStepNavigation: false,
    stepTitles: ['Start', 'Configure', 'Preview', 'Complete'],
    stepDescriptions: [],
    showStepNumbers: true,
    completedStepIcon: 'done',
    nextButtonDisabled: false,
    nextButtonText: 'Continue',
    previousButtonText: 'Back',
    completeButtonText: 'Finish',
    content: html`
      <div slot="step-1" style="text-align: center; padding: 20px;">
        <h2>Welcome!</h2>
        <p>This wizard will guide you through the setup process in 4 simple steps.</p>
      </div>

      <ur-form slot="step-2">
        <ur-text-field
          label="Project Name"
          name="projectName"
          placeholder="My Awesome Project"
          required
        ></ur-text-field>
      </ur-form>

      <div slot="step-3" style="padding: 20px; border: 1px dashed #ccc; border-radius: 8px;">
        <h3>Configuration Preview</h3>
        <p>Your project will be created with the selected settings.</p>
      </div>

      <div slot="step-4" style="text-align: center; padding: 20px; color: green;">
        <h2>🎉 All Done!</h2>
        <p>Your setup has been completed successfully.</p>
      </div>
    `,
  },
};

// Stepper with disabled next button (validation example)
export const DisabledNextButton = {
  args: {
    stepCount: 3,
    currentStep: 1,
    allowStepNavigation: true,
    stepTitles: ['Required Fields', 'Optional Info', 'Submit'],
    stepDescriptions: ['Please complete all required fields', 'Additional information', 'Review and submit'],
    showStepNumbers: true,
    completedStepIcon: 'check',
    nextButtonDisabled: true, // Next button is disabled
    nextButtonText: 'Next',
    previousButtonText: 'Previous',
    completeButtonText: 'Submit',
    content: html`
      <ur-form slot="step-1">
        <p style="color: #d32f2f; margin-bottom: 16px;">
          <strong>⚠️ Please fill out all required fields to continue</strong>
        </p>
        <ur-text-field
          label="Full Name *"
          name="fullName"
          placeholder="Enter your full name"
          required
        ></ur-text-field>
        <ur-text-field
          label="Email Address *"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        ></ur-text-field>
      </ur-form>

      <ur-form slot="step-2">
        <ur-text-field
          label="Company"
          name="company"
          placeholder="Your company name"
        ></ur-text-field>
        <ur-text-field
          label="Phone Number"
          name="phone"
          placeholder="+1 (555) 123-4567"
        ></ur-text-field>
      </ur-form>

      <div slot="step-3" style="padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <h3>Review Your Information</h3>
        <p>Please review all the details you've entered before submitting.</p>
      </div>
    `,
  },
};

// Stepper with enabled next button
export const EnabledNextButton = {
  args: {
    stepCount: 3,
    currentStep: 1,
    allowStepNavigation: true,
    stepTitles: ['Basic Info', 'Details', 'Finish'],
    stepDescriptions: ['All validation passed', 'Additional details', 'Complete the process'],
    showStepNumbers: true,
    completedStepIcon: 'check',
    nextButtonDisabled: false, // Next button is enabled
    nextButtonText: 'Next',
    previousButtonText: 'Previous',
    completeButtonText: 'Complete',
    content: html`
      <ur-form slot="step-1">
        <p style="color: #2e7d32; margin-bottom: 16px;">
          <strong>✅ All required fields are completed</strong>
        </p>
        <ur-text-field
          label="Full Name"
          name="fullName"
          value="John Doe"
          placeholder="Enter your full name"
          required
        ></ur-text-field>
        <ur-text-field
          label="Email Address"
          name="email"
          type="email"
          value="john@example.com"
          placeholder="your@email.com"
          required
        ></ur-text-field>
      </ur-form>

      <ur-form slot="step-2">
        <ur-text-field
          label="Additional Notes"
          name="notes"
          placeholder="Any additional information"
        ></ur-text-field>
      </ur-form>

      <div slot="step-3" style="padding: 20px; background: #e8f5e8; border-radius: 8px;">
        <h3>🎉 Ready to Submit</h3>
        <p>All validation checks have passed. You can now complete the process.</p>
      </div>
    `,
  },
};

// Stepper with disabled complete button (last step)
export const DisabledCompleteButton = {
  args: {
    stepCount: 2,
    currentStep: 2, // On the last step
    allowStepNavigation: true,
    stepTitles: ['Setup', 'Final Review'],
    stepDescriptions: ['Initial configuration', 'Please review and agree to terms'],
    showStepNumbers: true,
    completedStepIcon: 'check',
    nextButtonDisabled: true, // Complete button is disabled
    nextButtonText: 'Next',
    previousButtonText: 'Back',
    completeButtonText: 'I Agree & Complete',
    content: html`
      <ur-form slot="step-1">
        <ur-text-field
          label="Project Name"
          name="projectName"
          value="My Project"
          placeholder="Enter project name"
          required
        ></ur-text-field>
      </ur-form>

      <div slot="step-2" style="padding: 20px;">
        <h3>Terms and Conditions</h3>
        <div style="background: #f5f5f5; padding: 16px; border-radius: 4px; margin: 16px 0; max-height: 200px; overflow-y: auto;">
          <p>By proceeding, you agree to our terms of service...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p>Please read and accept the terms to continue.</p>
        </div>
        <p style="color: #d32f2f;">
          <strong>⚠️ You must read and accept the terms before proceeding</strong>
        </p>
        <label style="display: flex; align-items: center; gap: 8px; margin-top: 16px;">
          <input type="checkbox" />
          <span>I have read and agree to the terms and conditions</span>
        </label>
      </div>
    `,
  },
};

