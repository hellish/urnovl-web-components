import { html } from 'lit';
import '../components/ur-form/ur-form';
import '../components/ur-text-field/ur-text-field';
import '../components/ur-button/ur-button';

const Form = ({
    fields = [],
    buttons = [
        { label: 'Submit', action: 'submitForm', variant: 'filled', disabled: false },
        { label: 'Reset', action: 'resetForm', variant: 'outlined', disabled: false },
    ],
}) => {
    const formStatusId = `form-status-${Math.random().toString(36).substring(2, 8)}`;
    const formDataId = `form-data-${Math.random().toString(36).substring(2, 8)}`;
    const formErrorsId = `form-errors-${Math.random().toString(36).substring(2, 8)}`;
    let isFormValid = false; // Track form validity

    const attachListeners = () => {
        const form = document.querySelector('ur-form');
        const status = document.getElementById(formStatusId);
        const formDataDisplay = document.getElementById(formDataId);
        const formErrorsDisplay = document.getElementById(formErrorsId);

        // Handle form data changes
        form.addEventListener('formDataChanged', (event) => {
            console.log('Form data changed:', event.detail);
            formDataDisplay.textContent = JSON.stringify(event.detail, null, 2);
        });

        // Handle form validation success
        form.addEventListener('formValid', () => {
            console.log('Form is valid!');
            status.textContent = 'Form is valid! 🎉';
            status.style.color = 'green';
            isFormValid = true; // Update validity
            updateButtonStates();
        });

        // Handle form validation failure
        form.addEventListener('formInvalid', (event) => {
            console.log('Form is invalid:', event.detail.errors);
            status.textContent = `Form is invalid: ${JSON.stringify(event.detail.errors)}`;
            status.style.color = 'red';
            isFormValid = false; // Update validity
            formErrorsDisplay.textContent = JSON.stringify(event.detail.errors, null, 2);
            updateButtonStates();
        });
    };

    const updateButtonStates = () => {
        const submitButton = document.querySelector('[data-action="submitForm"]') as HTMLButtonElement;
        if (submitButton) {
            submitButton.disabled = !isFormValid;
        }
    };
    

    const submitForm = () => {
        const form = document.querySelector('ur-form');
        form.submitForm();
    };

    const resetForm = () => {
        const form = document.querySelector('ur-form');
        const status = document.getElementById(formStatusId);
        const formDataDisplay = document.getElementById(formDataId);
        const formErrorsDisplay = document.getElementById(formErrorsId);

        form.resetForm();
        status.textContent = 'Form has been reset.';
        status.style.color = 'blue';
        formDataDisplay.textContent = '';
        formErrorsDisplay.textContent = '';
        isFormValid = false; // Reset validity
        updateButtonStates();
    };

    // Attach listeners after the first render
    setTimeout(attachListeners, 0);

    return html`
        <ur-form>
            ${fields.map(
                field => html`
                    <ur-text-field
                        label=${field.label}
                        name=${field.name}
                        placeholder=${field.placeholder || ''}
                        type=${field.type || 'text'}
                        required=${field.required || false}
                        minlength=${field.minlength || ''}
                        maxlength=${field.maxlength || ''}
                        pattern=${field.pattern || ''}
                        min=${field.min || ''}
                        max=${field.max || ''}
                        step=${field.step || ''}
                        rows=${field.rows || ''}
                        autosize=${field.autosize || false}
                        variant=${field.variant || 'outlined'}
                        helper=${field.helper || ''}
                    ></ur-text-field>
                `
            )}
            <div style="margin-top: 10px;">
                ${buttons.map(
                    button => html`
                        <ur-button
                            data-action=${button.action}
                            variant=${button.variant}
                            disabled=${button.action === 'submitForm' ? !isFormValid : button.disabled}
                            @click=${button.action === 'submitForm' ? submitForm : resetForm}
                            style="margin-right: 10px;"
                        >
                            ${button.label}
                        </ur-button>
                    `
                )}
            </div>
            <p id=${formStatusId} style="margin-top: 10px; font-weight: bold;"></p>
            <div style="margin-top: 10px;">
                <h4>Form Data:</h4>
                <pre id=${formDataId} style="background: #f4f4f4; padding: 10px;"></pre>
                <h4>Form Errors:</h4>
                <pre id=${formErrorsId} style="background: #f4f4f4; padding: 10px;"></pre>
            </div>
        </ur-form>
    `;
};

export default {
    title: 'Urnovl/Basic/Form',
    render: args => Form(args),
    argTypes: {
        fields: { control: 'array', description: 'Array of text fields to include in the form' },
        buttons: { control: 'array', description: 'Array of buttons with labels, actions, and styles' },
    },
};

export const CentralizedValidation = {
    args: {
        fields: [
            { label: 'Username', name: 'username', placeholder: 'Enter your username', required: true },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email', required: true },
        ],
        buttons: [
            { label: 'Submit', action: 'submitForm', variant: 'filled', disabled: false },
        ],
    },
};

export const FormReset = {
    args: {
        fields: [
            { label: 'First Name', name: 'first_name', placeholder: 'Enter your first name', required: true },
            { label: 'Last Name', name: 'last_name', placeholder: 'Enter your last name', required: true },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
        ],
        buttons: [
            { label: 'Submit', action: 'submitForm', variant: 'filled', disabled: false },
            { label: 'Reset', action: 'resetForm', variant: 'outlined', disabled: false },
        ],
    },
};
