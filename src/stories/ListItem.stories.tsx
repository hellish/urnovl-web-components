import { html } from 'lit';
import '../components/ur-list/ur-list-item'; // Import your list-item component
import 'mdui/components/icon.js';

export default {
    title: 'Core/List/List Items', // Story location in Storybook
    argTypes: {
        content: { control: 'text', description: 'Main content of the list item' },
        disabled: { control: 'boolean', description: 'Disable the list item' },
        active: { control: 'boolean', description: 'Highlight the item as active' },
        nonclickable: { control: 'boolean', description: 'Remove hover and click effects' },
        rounded: { control: 'boolean', description: 'Apply rounded corners' },
        alignment: {
            control: { type: 'select', options: ['start', 'center', 'end'] },
            description: 'Vertical alignment of the item content',
        },
        icon: { control: 'text', description: 'Left icon (Material Icon name)' },
        endIcon: { control: 'text', description: 'Right icon (Material Icon name)' },
        description: { control: 'text', description: 'Secondary text for the list item' },
        href: { control: 'text', description: 'URL for the item link' },
        target: {
            control: { type: 'select', options: ['_self', '_blank', '_parent', '_top'] },
            description: 'Target for the item link',
        },
    },
};

const ListItemTemplate = (args: any) => html`
    <ur-list-item
        ?disabled=${args.disabled}
        ?active=${args.active}
        ?nonclickable=${args.nonclickable}
        ?rounded=${args.rounded}
        alignment=${args.alignment}
        icon=${args.icon}
        end-icon=${args.endIcon}
        href=${args.href}
        target=${args.target}
        description=${args.description}
    >
        ${args.content}
    </ur-list-item>
`;

export const Default = {
    args: {
        content: 'Default Item',
        disabled: false,
        active: false,
        nonclickable: false,
        rounded: false,
        alignment: 'center',
        icon: '',
        endIcon: '',
        description: '',
        href: '',
        target: '_self',
    },
    render: ListItemTemplate,
};

export const Disabled = {
    args: {
        content: 'Disabled Item',
        disabled: true,
    },
    render: ListItemTemplate,
};

export const WithIcons = {
    args: {
        content: 'Become a partner',
        icon: 'handshake--outlined',
        endIcon: 'chevron_right',
    },
    render: ListItemTemplate,
};

export const WithEndIcon = {
    args: {
        content: 'Frequently asked questions',
        endIcon: 'open_in_new',
    },
    render: ListItemTemplate,
};

export const WithDescription = {
    args: {
        content: 'Primary Text',
        description: 'Secondary Text',
    },
    render: ListItemTemplate,
};

export const Active = {
    args: {
        content: 'Active Item',
        active: true,
    },
    render: ListItemTemplate,
};

export const Rounded = {
    args: {
        content: 'Rounded Item',
        rounded: true,
    },
    render: ListItemTemplate,
};

export const NonClickable = {
    args: {
        content: 'Non-Clickable Item',
        nonclickable: true,
    },
    render: ListItemTemplate,
};

export const VerticalAlignment = {
    args: {
        content: 'Aligned Item',
        description: 'Supporting text',
        alignment: 'start', // Default alignment, options: 'start', 'center', 'end'
        icon: 'people', // Left icon
        endIcon: 'arrow_forward', // End icon
    },
    render: ListItemTemplate, // Use the shared ListItemTemplate
};

export const LinkItem = {
    args: {
        content: 'Link Item',
        href: 'https://example.com',
        target: '_blank',
        endIcon: 'open_in_new',
    },
    render: ListItemTemplate,
};

export const IconOnly = {
    args: {
        icon: 'home--outlined', // Icon for external links
        content: '', // No text content for this example
        endIcon: '', // No end icon
    },
    render: ListItemTemplate,
};

export const CustomContent = {
    render: () => html`
        <ur-list-item end-icon="chevron_right">
            <div slot="custom" class="custom-content" part="custom-slot">
                <!-- Profile Picture -->
                <img
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5"
                    alt="Profile Picture"
                    class="custom-content__profile-picture"
                    style="border-radius: 50%; width: 64px; height: 64px; flex-shrink: 0;"
                />

                <!-- User Information -->
                <div class="custom-content__info" style="flex-grow: 1;">
                    <div class="custom-content__username" style="font-size: 18px; font-weight: bold;">Tsipidis Anastasios</div>
                    <div class="custom-content__subtitle" style="font-size: 14px; color: gray;">Author & Reader</div>
                </div>
            </div>
        </ur-list-item>
    `,
};
