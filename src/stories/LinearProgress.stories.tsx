import { html } from 'lit';
import '../components/ur-linear-progress/ur-linear-progress'; // Adjust the path as necessary

const Template = args => html` <ur-linear-progress max="${args.max}" value="${args.value}"></ur-linear-progress> `;

export default {
    title: 'Core/Linear Progress',
    render: Template,
    argTypes: {
        max: {
            control: 'number',
            description: 'The maximum value for the progress bar',
        },
        value: {
            control: 'number',
            description: 'The current value for the progress bar. If omitted, the progress bar will be indeterminate.',
        },
    },
};

// Indeterminate without value
export const IndeterminateNoValue = {
    args: {
        max: 1,
    },
    render: () => html` <ur-linear-progress max="1"></ur-linear-progress> `,
};

// Determinate Progress
export const DeterminateHalf = {
    args: {
        max: 1,
        value: 0.5, // 50% progress
    },
};

export const DeterminateFull = {
    args: {
        max: 100,
        value: 100, // 100% progress
    },
};