import { Component, Host, h, Prop, Event, EventEmitter, Element, Listen, Method } from '@stencil/core';

@Component({
  tag: 'ur-wizard-step',
  styleUrl: 'ur-wizard-step.css',
  shadow: true,
})
export class UrWizardStep {
  @Element()
  el: HTMLElement;

  /** Step number of the wizard */
  @Prop()
  step: number;

  /** Title of the wizard step */
  @Prop()
  stepTitle: string;

  /** Subtitle or instructions for the step */
  @Prop()
  subtitle: string;

  /** Determines if the "Previous" button is visible */
  @Prop()
  showPrevious: boolean = true;

  /** Determines if the "Next" button is visible */
  @Prop()
  showNext: boolean = true;

  /** Title of the "Previous" button */
  @Prop()
  previousButtonTitle: string = 'Previous';

  /** Title of the "Next" button */
  @Prop()
  nextButtonTitle: string = 'Next';

  /** Determines if the step can be skipped */
  @Prop()
  isSkippable: boolean = false;

  /** Validation state of the step */
  @Prop({ mutable: true })
  isValid: boolean = true;

  /** Custom validation message */
  @Prop()
  validationMessage: string;

  /** Custom CSS class for the component */
  @Prop()
  customClass: string;

  /** Event emitted when the step is completed */
  @Event()
  stepCompleted: EventEmitter<{ step: number; formData: { [key: string]: any } }>;

  /** Event emitted when navigating back */
  @Event()
  stepBack: EventEmitter<number>;

  private formData: { [key: string]: any } = {};

  /** Listen to `formValid` events */
  @Listen('formValid')
  handleFormValid() {
    console.log('Form in wizard step is valid.');
    this.isValid = true;
    this.updateNextButtonState();
  }

  /** Listen to `formInvalid` events */
  @Listen('formInvalid')
  handleFormInvalid(event: CustomEvent<{ errors: { [key: string]: string } }>) {
    console.log('Form in wizard step is invalid:', event.detail.errors);
    this.isValid = false;
    this.updateNextButtonState();
  }

  /** Update the "Next" button state */
  private updateNextButtonState() {
    const nextButton = this.el.shadowRoot.querySelector('ur-button[variant="filled"]') as HTMLElement | null;
    if (nextButton) {
      nextButton.toggleAttribute('disabled', !this.isValid);
    }

    console.log('Next button state updated. Disabled:', !this.isValid);
  }

  /** Handle "Next" button click */
  private handleNext = () => {
    if (!this.isValid) {
      console.error('Step is invalid. Fix errors before proceeding.');
      return;
    }

    const form = this.el.querySelector('ur-form') as any;
    if (form) {
      console.log('Submitting form data for step:', this.step);
      form.submitForm(); // Submit the form to collect data
    }

    console.log(`Navigating forward from step ${this.step}`, this.formData);
    this.stepCompleted.emit({ step: this.step, formData: this.formData });
  };

  /** Handle "Previous" button click */
  private handlePrevious = () => {
    if (this.step > 1) {
      console.log(`Navigating back from step ${this.step} to step ${this.step - 1}`);
      this.stepBack.emit(this.step - 1);
    } else {
      console.warn('Already at the first step. Cannot go back further.');
    }
  };

  /** Trigger form submission programmatically */
  @Method()
  async submitStepForm() {
    const form = this.el.querySelector('ur-form') as any;

    if (form) {
      await form.submitForm();
    } else {
      console.warn('No ur-form found in this step.');
    }
  }

  /** Reset the form within the step */
  @Method()
  async resetStepForm() {
    const form = this.el.querySelector('ur-form') as any;

    if (form) {
      await form.resetForm();
    } else {
      console.warn('No ur-form found in this step.');
    }
  }

  render() {
    return (
      <Host class={this.customClass}>
        <div class="step-container">
          <h2 class="step-title">{this.stepTitle}</h2>
          {this.subtitle && <p class="step-subtitle">{this.subtitle}</p>}

          <form>
            <slot></slot>
            {!this.isValid && (
              <p class="validation-message">{this.validationMessage || 'Step is invalid'}</p>
            )}
          </form>

          <div class="step-actions">
            {this.showPrevious && (
              <ur-button variant="outlined" onClick={this.handlePrevious}>
                {this.previousButtonTitle}
              </ur-button>
            )}
            {this.showNext && (
              <ur-button variant="filled" onClick={this.handleNext} disabled={!this.isValid}>
                {this.nextButtonTitle}
              </ur-button>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
