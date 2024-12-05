import { html } from 'lit';
import '../components/ur-form/ur-form';
import '../components/ur-radio-group/ur-radio-group';
import '../components/ur-radio-button/ur-radio-button';
import '../components/ur-button/ur-button';

const RadioFormValidation = () => {
  const formStatusId = `form-status-${Math.random().toString(36).substring(2, 8)}`;
  const formDataId = `form-data-${Math.random().toString(36).substring(2, 8)}`;
  let isFormValid = false; // Track form validity

  const attachListeners = () => {
    const form = document.querySelector('ur-form');
    const status = document.getElementById(formStatusId);
    const formDataDisplay = document.getElementById(formDataId);

    const updateButtonState = () => {
        const submitButton = document.querySelector('[data-action="submitForm"]') as HTMLButtonElement;
        if (submitButton) {
          submitButton.disabled = !isFormValid;
        }
      };

    form.addEventListener('formDataChanged', (event) => {
      console.log('Form data changed:', event.detail);
      formDataDisplay.textContent = JSON.stringify(event.detail, null, 2);
    });

    form.addEventListener('formValid', () => {
      console.log('Form is valid!');
      status.textContent = 'Form is valid! 🎉';
      status.style.color = 'green';
      isFormValid = true;
      updateButtonState(); // Update button state
    });

    form.addEventListener('formInvalid', (event) => {
      console.log('Form is invalid:', event.detail.errors);
      status.textContent = `Form is invalid: ${JSON.stringify(event.detail.errors)}`;
      status.style.color = 'red';
      isFormValid = false;
      updateButtonState(); // Update button state
    });
  };

  const submitForm = () => {
    const form = document.querySelector('ur-form');
    form.submitForm();
  };

  const resetForm = () => {
    const form = document.querySelector('ur-form');
    const status = document.getElementById(formStatusId);
    const formDataDisplay = document.getElementById(formDataId);
    const submitButton = document.querySelector('[data-action="submitForm"]') as HTMLButtonElement;

    form.resetForm();
    status.textContent = 'Form has been reset.';
    status.style.color = 'blue';
    formDataDisplay.textContent = '';
    isFormValid = false; // Ensure form is marked as invalid
    if (submitButton) submitButton.disabled = true; // Disable the Submit button
  };

  setTimeout(attachListeners, 0);

  return html`
    <ur-form>
      <ur-radio-group name="favorite_color" value="blue">
        <ur-radio-button value="red">Red</ur-radio-button>
        <ur-radio-button value="blue" checked>Blue</ur-radio-button>
        <ur-radio-button value="green">Green</ur-radio-button>
        <ur-radio-button value="yellow" disabled>Yellow</ur-radio-button>
      </ur-radio-group>
      <div style="margin-top: 10px;">
        <ur-button
          data-action="submitForm"
          variant="filled"
          @click=${submitForm}
          style="margin-right: 10px;"
        >
          Submit
        </ur-button>
        <ur-button
          data-action="resetForm"
          variant="outlined"
          @click=${resetForm}
        >
          Reset
        </ur-button>
      </div>
      <p id=${formStatusId} style="margin-top: 10px; font-weight: bold;"></p>
      <div style="margin-top: 10px;">
        <h4>Form Data:</h4>
        <pre id=${formDataId} style="background: #f4f4f4; padding: 10px;"></pre>
      </div>
    </ur-form>
  `;
};

export default {
  title: 'Urnovl/Basic/Form',
  render: RadioFormValidation,
};

export const RadioForm = {};
