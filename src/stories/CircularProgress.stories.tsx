import { html } from 'lit';
import '../components/ur-circular-progress/ur-circular-progress';

const Template = args => html` 
  <ur-circular-progress 
    .max=${args.max} 
    .value=${args.value}
  ></ur-circular-progress> 
`;

export default {
    title: 'Urnovl/Basic/Circular Progress',
    render: Template,
    argTypes: {
        max: {
            control: 'number',
            description: 'The maximum value for the progress indicator. Defaults to 1.',
        },
        value: {
            control: 'number',
            description: 'The current value for the progress indicator. If not specified, the progress will be indeterminate.',
        },
    },
};

// Indeterminate Progress (No Value Provided)
export const Indeterminate = {
    args: {
        max: 1,
    },
};

// Determinate Progress (50%)
export const DeterminateHalf = {
    args: {
        max: 1,
        value: 0.5,
    },
};

// Determinate Progress (100%)
export const DeterminateFull = {
    args: {
        max: 1,
        value: 1,
    },
};

// Custom Max Value (100) and Progress (75%)
export const CustomMax = {
    args: {
        max: 100,
        value: 75,
    },
};