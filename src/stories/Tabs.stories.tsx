import { html } from 'lit';
import '../components/ur-tabs/ur-tabs';  // Import your tabs component

const Tabs = ({
    tabs = [
        { label: 'Stories', value: 'stories' },
        { label: 'Settings', value: 'settings' },
        { label: 'Transactions', value: 'transactions' },
        { label: 'Statistics', value: 'statistics' }
      ],
      panels = [
        { content: 'Here user will see stories!', value: 'stories' },
        { content: 'Here user will see settings!', value: 'settings' },
        { content: 'Here user will see transactions!', value: 'transactions' },
        { content: 'Here user will see statistics!', value: 'statistics' }
      ]
}) => html`
    <ur-tabs .tabs=${tabs}
    .panels=${panels}></ur-tabs>
`;

export default {
    title: 'Core/Tabs',  // Define the story under Core/Tabs in Storybook
    render: args => Tabs(args),  // Render the Tabs component with args
    argTypes: {
        // Add controls for toggling checked and disabled properties
    },
};

export const Default = {
    args: {
    },
};