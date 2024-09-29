import { html } from 'lit';
import '../components/ur-segment-button/ur-segment-button';  // Import your segmented button component

const SegmentButton = ({
    
}) => html`
    <ur-segment-button>
    </ur-segment-button>
`;

export default {
    title: 'Core/Segment Buttons',  // Define the story under Core/Tabs in Storybook
    render: args => SegmentButton(args),  // Render the Tabs component with args
    argTypes: {
        // Add controls for toggling checked and disabled properties
    },
};

export const Default = {
    args: {
    },
};