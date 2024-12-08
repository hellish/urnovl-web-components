import { html } from 'lit';
import '../components/ur-checkbox/ur-checkbox';
import '../components/ur-checkbox-group/ur-checkbox-group';

// Interface for args
interface CheckboxGroupArgs {
    name: string;
    selectAll: boolean;
    required: boolean;
    maxSelectable: number | null;
    options: string[];
    preselectedValues: string[];
}

const CheckboxGroup = ({
    name = 'example-group',
    selectAll = false,
    required = false,
    maxSelectable = null,
    options = ['Option 1', 'Option 2', 'Option 3'],
    preselectedValues = [],
}: CheckboxGroupArgs) => html`
    <ur-checkbox-group name=${name} .selectAll=${selectAll && maxSelectable === null} required=${required} .values=${preselectedValues} .maxSelectable=${maxSelectable}>
        ${options.map((option, index) => html`<ur-checkbox value="option${index + 1}"> ${option} </ur-checkbox>`)}
    </ur-checkbox-group>
`;

export default {
    title: 'Urnovl/Basic/CheckboxGroup',
    render: (args: CheckboxGroupArgs) => CheckboxGroup(args), // Use the defined type
    argTypes: {
        name: { control: 'text', description: 'Name of the checkbox group' },
        selectAll: {
            control: 'boolean',
            description: 'Enable Select All checkbox functionality',
        },
        required: {
            control: 'boolean',
            description: 'Require at least one checkbox to be selected',
        },
        maxSelectable: {
            control: 'number',
            description: 'Maximum number of checkboxes that can be selected',
        },
        options: {
            control: 'array',
            description: 'Array of checkbox options',
        },
        preselectedValues: {
            control: 'array',
            description: 'Preselected values in the group',
        },
    },
};

export const Default = {
    args: {
        name: 'example-group',
        selectAll: false,
        required: false,
        maxSelectable: null,
        options: ['Option 1', 'Option 2', 'Option 3'],
        preselectedValues: [],
    },
};

export const WithSelectAll = {
    args: {
        name: 'example-group',
        selectAll: true,
        required: false,
        maxSelectable: null,
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        preselectedValues: [],
    },
};

export const WithRequiredValidation = {
    args: {
        name: 'example-group',
        selectAll: false,
        required: true,
        maxSelectable: null,
        options: ['Option 1', 'Option 2', 'Option 3'],
        preselectedValues: [],
    },
};

export const PreselectedValues = {
    args: {
        name: 'example-group',
        selectAll: false,
        required: false,
        maxSelectable: null,
        options: ['Option 1', 'Option 2', 'Option 3'],
        preselectedValues: ['option1', 'option3'], // Preselect Option 1 and Option 3
    },
};

export const WithSelectAllAndPreselectedValues = {
    args: {
        name: 'example-group',
        selectAll: true,
        required: false,
        maxSelectable: null,
        options: ['Option 1', 'Option 2', 'Option 3'],
        preselectedValues: ['option1', 'option2'], // Preselect Option 1 and Option 2
    },
};

export const WithSelectAllAndMaxSelected = {
    args: {
        name: 'example-group',
        selectAll: true, // Ensure this is set correctly
        required: false,
        maxSelectable: 1, // Ensure maxSelectable is explicitly passed
        options: ['Option 1', 'Option 2', 'Option 3'],
        preselectedValues: ['option1'], // Preselect Option 1
    },
};

export const CustomOptionsWithSelectAll = {
    args: {
        name: 'custom-group',
        selectAll: true,
        required: false,
        maxSelectable: null,
        options: ['Custom Option 1', 'Custom Option 2', 'Custom Option 3', 'Custom Option 4'],
        preselectedValues: [],
    },
};

export const MaxSelectableExample = {
    args: {
        name: 'example-group',
        selectAll: false,
        required: false,
        maxSelectable: 2, // Limit selection to 2 checkboxes
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        preselectedValues: [], // Initially no preselected values
    },
};

export const MaxSelectableWithPreselected = {
    args: {
        name: 'example-group',
        selectAll: false,
        required: false,
        maxSelectable: 2, // Only 2 options can be selected
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        preselectedValues: ['option1', 'option2'], // Preselect Option 1 and Option 2
    },
};
