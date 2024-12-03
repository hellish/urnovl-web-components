import { html } from 'lit';
import '../components/ur-text-field/ur-text-field';

const TextField = ({
    label = 'Welcome',
    placeholder = '',
    helper = '',
    disabled = false,
    required = false,
    variant = 'outlined',
    value = '',
    name = '',
    endIcon = null,
    rows = null,
    autosize = false,
    minRows = null,
    maxRows = null,
    minlength = null,
    maxlength = null,
    counter = false,
    type = 'text',
    pattern = null,
    min = null,
    max = null,
    step = null,
}) => html`
    <ur-text-field
        label=${label}
        placeholder=${placeholder}
        helper=${helper}
        variant=${variant}
        value=${value}
        name=${name}
        end-icon=${endIcon}
        disabled=${disabled}
        required=${required}
        rows=${rows !== null ? rows : ''}
        autosize=${autosize}
        min-rows=${minRows !== null ? minRows : ''}
        max-rows=${maxRows !== null ? maxRows : ''}
        minlength=${minlength !== null ? minlength : ''}
        maxlength=${maxlength !== null ? maxlength : ''}
        counter=${counter}
        type=${type}
        pattern=${pattern !== null ? pattern : ''}
        min=${min !== null ? min : ''}
        max=${max !== null ? max : ''}
        step=${step !== null ? step : ''}
    ></ur-text-field>
`;

export default {
    title: 'Core/TextField',
    render: args => TextField(args),
    argTypes: {
        label: { control: 'text', description: 'The label displayed above the input field' },
        placeholder: { control: 'text', description: 'Placeholder text shown inside the input field' },
        helper: { control: 'text', description: 'Helper text displayed below the input field' },
        disabled: { control: 'boolean', description: 'Whether the input field is disabled' },
        required: { control: 'boolean', description: 'Whether the input field is required' },
        variant: { control: 'select', options: ['filled', 'outlined'], description: 'Style variant of the input field' },
        value: { control: 'text', description: 'The current value of the input field' },
        name: { control: 'text', description: 'The name attribute for form integration (FormData)' },
        endIcon: { control: 'text', description: 'Optional icon displayed at the end of the input field' },
        rows: { control: 'number', description: 'The number of rows in the text field' },
        autosize: { control: 'boolean', description: 'Whether the text field height adjusts automatically' },
        minRows: { control: 'number', description: 'Minimum number of rows when autosize is enabled' },
        maxRows: { control: 'number', description: 'Maximum number of rows when autosize is enabled' },
        minlength: { control: 'number', description: 'Minimum number of characters for input' },
        maxlength: { control: 'number', description: 'Maximum number of characters for input' },
        counter: { control: 'boolean', description: 'Whether to display the character counter' },
        type: { control: 'text', description: 'The input type (e.g., text, password, number)' },
        pattern: { control: 'text', description: 'A regex pattern the input value must match' },
        min: { control: 'text', description: 'The minimum value for the input field (for number or date types)' },
        max: { control: 'text', description: 'The maximum value for the input field (for number or date types)' },
        step: { control: 'text', description: 'Step interval for numeric inputs' },
    },
};

export const Default = {
    args: {
        disabled: false,
        variant: 'outlined',
        value: '',
        name: 'default-field',
    },
};

export const Disabled = {
    args: {
        disabled: true,
        variant: 'outlined',
        value: '',
        name: 'disabled-field',
    },
};

export const WithValue = {
    args: {
        variant: 'outlined',
        value: 'test',
        name: 'value-field',
    },
};

export const WithPlaceholder = {
    args: {
        variant: 'outlined',
        placeholder: 'test placeholder',
        name: 'placeholder-field',
    },
};

export const WithHelper = {
    args: {
        variant: 'outlined',
        helper: 'test helper',
        name: 'helper-field',
    },
};

export const WithEndIcon = {
    args: {
        variant: 'outlined',
        endIcon: 'mic',
        name: 'end-icon-field',
    },
};

export const Full = {
    args: {
        variant: 'outlined',
        placeholder: 'test placeholder',
        helper: 'test helper',
        value: 'test',
        endIcon: 'mic',
        disabled: false,
        name: 'full-field',
    },
};

export const RequiredField = {
    args: {
        label: 'Required Field',
        placeholder: 'Enter something',
        variant: 'filled',
        helper: 'This field is required',
        required: true,
        name: 'required-field',
    },
};

export const MultiLineField = {
    args: {
        label: 'Multi-line Field',
        placeholder: 'Type your message...',
        variant: 'outlined',
        rows: 4,
        name: 'multi-line-field',
    },
};

export const AutosizeField = {
    args: {
        label: 'Auto-resizing Field',
        placeholder: 'Start typing...',
        autosize: true,
        minRows: 2,
        maxRows: 5,
        variant: 'outlined',
        name: 'autosize-field',
    },
};

export const MaxLengthField = {
    args: {
        label: 'Max Length Field',
        placeholder: 'Max 10 characters',
        variant: 'outlined',
        maxlength: 10,
        counter: true,
        helper: 'Up to 10 characters',
        name: 'maxlength-field',
    },
};

export const MinLengthField = {
    args: {
        label: 'Min Length Field',
        placeholder: 'At least 5 characters',
        variant: 'outlined',
        minlength: 5,
        helper: 'Must be at least 5 characters',
        name: 'minlength-field',
    },
};

export const PatternField = {
    args: {
        label: 'Pattern Field',
        placeholder: 'Enter a number',
        variant: 'outlined',
        pattern: '\\d+',
        helper: 'Only numbers are allowed',
        name: 'pattern-field',
    },
};

export const NumericField = {
    args: {
        label: 'Numeric Field',
        placeholder: 'Enter a value',
        variant: 'outlined',
        type: 'number',
        min: 0,
        max: 100,
        step: 1,
        helper: 'Enter a value between 0 and 100',
        name: 'numeric-field',
    },
};
