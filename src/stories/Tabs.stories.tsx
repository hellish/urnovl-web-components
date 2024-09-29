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
        { content: 'Here user will see stories!', slot: 'stories-slot' , value: 'stories' },
        { content: 'Here user will see settings!', slot: 'settings-slot', value: 'settings' },
        { content: 'Here user will see transactions!', slot: 'transactions-slot', value: 'transactions' },
        { content: 'Here user will see statistics!', slot: 'statistics-slot', value: 'statistics' }
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