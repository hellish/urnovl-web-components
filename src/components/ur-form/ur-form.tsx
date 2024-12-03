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

    @Listen('valueChanged')
    handleValueChanged(event: CustomEvent<{ name: string; value: string }>) {
        const { name, value } = event.detail;
        this.formData[name] = value;

        this.emitFormState();
    }

    @Listen('errorStateChanged')
    handleErrorStateChanged(event: CustomEvent<{ name: string; error: boolean; message?: string }>) {
        const { name, error, message } = event.detail;

        if (error) {
            this.formErrors[name] = message || 'Invalid input.';
        } else {
            delete this.formErrors[name];
        }

        // Debug logs to track state (added for troubleshooting)
        console.log(`Updated formErrors after errorStateChanged:`, this.formErrors);

        this.emitFormState();
    }

    private validateAllFields() {
        const fields = Array.from(this.el.querySelectorAll('ur-text-field')) as any[];

        this.formErrors = {}; // Reset previous errors

        fields.forEach(field => {
            if (field.error) {
                this.formErrors[field.name] = field.errorMessage || 'Invalid input.';
            }
        });

        this.emitFormState();
    }

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

    @Method()
    async resetForm() {
        const fields = Array.from(this.el.querySelectorAll('ur-text-field')) as any[];

        fields.forEach(field => {
            field.value = '';
            field.error = false;
        });

        this.formData = {};
        this.formErrors = {};
        this.emitFormState();
    }

    private emitFormState() {
        // Wait until all errorStateChanged events are processed
        const fields = Array.from(this.el.querySelectorAll('ur-text-field')) as any[];

        // Reset formErrors to start fresh
        this.formErrors = {};

        fields.forEach(field => {
            if (field.error) {
                this.formErrors[field.name] = field.errorMessage || 'Invalid input.';
            }
        });

        console.log('Final state of formErrors:', this.formErrors);

        // Emit appropriate form state
        if (Object.keys(this.formErrors).length === 0) {
            console.log('Emitting formValid event');
            this.formValid.emit();
        } else {
            console.log('Emitting formInvalid event');
            this.formInvalid.emit({ errors: this.formErrors });
        }

        // Always emit formDataChanged
        this.formDataChanged.emit(this.formData);
    }

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
