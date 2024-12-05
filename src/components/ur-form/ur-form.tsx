import { Component, Host, h, Event, EventEmitter, Listen, Element, Method } from '@stencil/core';

@Component({
  tag: 'ur-form',
  styleUrl: 'ur-form.css',
  shadow: true,
})
export class UrForm {
  @Element() el: HTMLElement;

  /** Event emitted when the form is valid */
  @Event({
    bubbles: true,
    composed: true,
  })
  formValid: EventEmitter<void>;

  /** Event emitted when the form is invalid */
  @Event({
    bubbles: true,
    composed: true,
  })
  formInvalid: EventEmitter<{ errors: { [key: string]: string } }>;

  /** Event emitted whenever the form data changes */
  @Event({
    bubbles: true,
    composed: true,
  })
  formDataChanged: EventEmitter<{ [key: string]: any }>;

  /** Holds form data collected from child input components */
  private formData: { [key: string]: any } = {};

  /** Holds error messages for invalid fields */
  private formErrors: { [key: string]: string } = {};

  /** Automatically validate fields on component load */
  componentDidLoad() {
    this.validateAllFields();
  }

  /** Handle value changes in child components */
  @Listen('valueChanged')
  handleValueChanged(event: CustomEvent<{ name: string; value: string }>) {
    const { name, value } = event.detail;
    this.formData[name] = value;
    this.emitFormState();
  }

  /** Handle error state changes in child components */
  @Listen('errorStateChanged')
  handleErrorStateChanged(event: CustomEvent<{ name: string; error: boolean; message?: string }>) {
    const { name, error, message } = event.detail;

    if (error) {
      this.formErrors[name] = message || 'Invalid input.';
    } else {
      delete this.formErrors[name];
    }

    this.emitFormState();
  }

  /** Validate all fields in the form */
  private validateAllFields() {
    const fields = Array.from(
      this.el.querySelectorAll('ur-text-field, ur-radio-group, ur-checkbox-group')
    ) as any[];
  
    this.formErrors = {}; // Reset previous errors
  
    fields.forEach((field) => {
      if (field.validate && !field.validate()) {
        this.formErrors[field.name] = field.errorMessage || 'Invalid input.';
      } else if (field.value) {
        this.formData[field.name] = field.value;
      }
    });
  
    this.emitFormState();
  }

  /** Emit the current form state */
  private emitFormState() {
    const isValid = Object.keys(this.formErrors).length === 0;

    if (isValid) {
      this.formValid.emit();
    } else {
      this.formInvalid.emit({ errors: this.formErrors });
    }

    this.formDataChanged.emit(this.formData);
  }

  /** Submit the form and validate fields */
  @Method()
  async submitForm() {
    this.validateAllFields();
    const isValid = Object.keys(this.formErrors).length === 0;

    if (isValid) {
      this.formValid.emit();
    } else {
      this.formInvalid.emit({ errors: this.formErrors });
    }
  }

  /** Reset the form fields */
  @Method()
  async resetForm() {
    const fields = Array.from(
      this.el.querySelectorAll('ur-text-field, ur-radio-group, ur-checkbox-group')
    ) as any[];
  
    fields.forEach((field) => {
      if (field.reset) {
        field.reset();
      }
    });
  
    this.formData = {};
    this.formErrors = {};
    this.emitFormState();
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
