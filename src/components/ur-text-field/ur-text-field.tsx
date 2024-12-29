import { Component, Host, Prop, h, Event, EventEmitter } from '@stencil/core';
import 'mdui/components/text-field';

@Component({
    tag: 'ur-text-field',
    styleUrl: 'ur-text-field.css',
    shadow: true,
})
export class UrTextField {
    @Prop()
    label: string = 'text field';

    @Prop()
    placeholder: string | null = null;

    @Prop()
    helper: string | null = null;

    @Prop()
    disabled: boolean = false;

    @Prop()
    required: boolean = false;

    @Prop()
    variant: 'filled' | 'outlined' = 'filled';

    @Prop({ mutable: true })
    value: string = '';

    @Prop()
    name: string = '';

    @Prop()
    endIcon: string | null = null;

    @Prop()
    rows: number | null = null;

    @Prop()
    autosize: boolean = false;

    @Prop()
    minRows: number | null = null;

    @Prop()
    maxRows: number | null = null;

    @Prop()
    minlength: number | null = null;

    @Prop()
    maxlength: number | null = null;

    @Prop()
    counter: boolean = false;

    @Prop()
    type: string = 'text';

    @Prop()
    pattern: string | null = null;

    @Prop()
    min: number | string | null = null;

    @Prop()
    max: number | string | null = null;

    @Prop()
    step: number | string | null = null;

    @Prop({ mutable: true, reflect: true })
    error: boolean = false;

    @Prop({ mutable: true, reflect: true })
    errorMessage: string | null = null;

    @Event({
        bubbles: true,
        composed: true,
    })
    valueChanged: EventEmitter<{ name: string; value: string }>;

    @Event({
        bubbles: true,
        composed: true,
    })
    errorStateChanged: EventEmitter<{ name: string; error: boolean; message?: string }>;

    private handleInput = (event: InputEvent) => {
        const target = event.target as HTMLInputElement;
        this.value = target.value; // Update the local value property
        this.valueChanged.emit({ name: this.name, value: this.value });

        console.log(`Handling input for field '${this.name}':`, this.value);

        // Validate input after every change
        this.validateInput(target);
    };

    private validateInput(input: HTMLInputElement) {
        let error = false;
        let message = '';

        // Required validation
        if (this.required && !input.value.trim()) {
            error = true;
            message = `${this.label} is required.`;
        }
        // Minimum length validation
        else if (this.minlength && input.value.length < this.minlength) {
            error = true;
            message = `Minimum length is ${this.minlength} characters.`;
        }
        // Maximum length validation
        else if (this.maxlength && input.value.length > this.maxlength) {
            error = true;
            message = `Maximum length is ${this.maxlength} characters.`;
        }
        // Email validation
        else if (this.type === 'email' && !/\S+@\S+\.\S+/.test(input.value)) {
            error = true;
            message = `Please include a valid email address.`;
        }
        // URL validation
        else if (this.type === 'url' && !/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(input.value)) {
            error = true;
            message = `Please include a valid URL.`;
        }
        // Phone number validation
        else if (this.type === 'tel' && !/^\+?[0-9\s\-]+$/.test(input.value)) {
            error = true;
            message = `Please include a valid phone number.`;
        }
        // Pattern validation
        else if (this.pattern && !new RegExp(this.pattern).test(input.value)) {
            error = true;
            message = `Input does not match the required pattern.`;
        }
        // Numeric minimum value
        else if (this.type === 'number' && this.min !== null && !isNaN(Number(input.value)) && Number(input.value) < Number(this.min)) {
            error = true;
            message = `Value must be at least ${this.min}.`;
        }
        // Numeric maximum value
        else if (this.type === 'number' && this.max !== null && !isNaN(Number(input.value)) && Number(input.value) > Number(this.max)) {
            error = true;
            message = `Value must not exceed ${this.max}.`;
        }
        // Step validation for numeric inputs
        else if (this.type === 'number' && this.step !== null && !isNaN(Number(this.step))) {
            const value = Number(input.value);
            const step = Number(this.step);
            const min = Number(this.min) || 0;
            if ((value - min) % step !== 0) {
                error = true;
                message = `Value must align with step intervals of ${this.step}.`;
            }
        }

        this.error = error;
        this.errorMessage = message;

        console.log(`Validation result for '${this.name}':`, { error, message });

        // Emit the error state
        this.errorStateChanged.emit({ name: this.name, error, message });
    }

    render() {
        return (
            <Host>
                <mdui-text-field
                    variant={this.variant}
                    disabled={this.disabled}
                    required={this.required}
                    value={this.value}
                    name={this.name}
                    label={this.label || ''}
                    helper={this.helper || ''}
                    end-icon={this.endIcon}
                    placeholder={this.placeholder || ''}
                    rows={this.rows !== null ? this.rows : undefined}
                    autosize={this.autosize ? 'true' : undefined}
                    min-rows={this.minRows !== null ? this.minRows : undefined}
                    max-rows={this.maxRows !== null ? this.maxRows : undefined}
                    minlength={this.minlength !== null ? this.minlength : undefined}
                    maxlength={this.maxlength !== null ? this.maxlength : undefined}
                    counter={this.counter ? 'true' : undefined}
                    type={this.type}
                    pattern={this.pattern || undefined}
                    min={this.min !== null ? this.min : undefined}
                    max={this.max !== null ? this.max : undefined}
                    step={this.step !== null ? this.step : undefined}
                    onInput={this.handleInput}
                ></mdui-text-field>
            </Host>
        );
    }
}
