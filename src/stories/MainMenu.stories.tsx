import { html } from 'lit';
import '../components/ur-main-menu/ur-main-menu';
import '../components/ur-avatar/ur-avatar';
import '../components/ur-list/ur-list';

// Create a wrapper function to handle state
const MenuWithControls = args => {
    // State variables
    let isOpened = args.opened;
    let badgeCount = args.badgeCount || 0;

    // Update the menu's attributes dynamically
    const updateMenu = element => {
        const menu = element.querySelector('ur-main-menu');
        const toggleButton = element.querySelector('.toggle-button');
        const badgeCountDisplay = element.querySelector('.badge-count');

        if (menu) {
            menu.opened = isOpened;
            menu.badgeCount = badgeCount;
        }
        if (toggleButton) {
            toggleButton.textContent = isOpened ? 'Close Menu' : 'Open Menu';
        }
        if (badgeCountDisplay) {
            badgeCountDisplay.textContent = `Current Badge Count: ${badgeCount}`;
        }
    };

    // External button toggle handler
    const handleToggle = e => {
        isOpened = !isOpened;
        updateMenu(e.target.closest('.menu-controls-wrapper'));
    };

    // Badge count increment handler
    const handleIncrementBadge = e => {
        badgeCount += 1;
        updateMenu(e.target.closest('.menu-controls-wrapper'));
    };

    // Badge count decrement handler
    const handleDecrementBadge = e => {
        badgeCount = Math.max(0, badgeCount - 1); // Prevent negative values
        updateMenu(e.target.closest('.menu-controls-wrapper'));
    };

    // Internal menu toggle event handler
    const handleMenuToggleClick = e => {
        isOpened = !isOpened; // Update the state
        updateMenu(e.target.parentElement); // Update the DOM
        console.log('Internal menu button clicked. New state:', isOpened);
    };

    // Styling for control buttons
    const buttonStyle = `
        padding: 8px 16px;
        margin: 0 4px;
        background-color: #4a5568;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    `;

    return html`
        <div class="menu-controls-wrapper" style="padding: 20px;">
            <div style="margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                <!-- External Toggle Button -->
                <button @click=${handleToggle} class="toggle-button" style=${buttonStyle}>${isOpened ? 'Close Menu' : 'Open Menu'}</button>

                <button @click=${handleDecrementBadge} style=${buttonStyle}>-1 Badge</button>

                <button @click=${handleIncrementBadge} style=${buttonStyle}>+1 Badge</button>

                <span class="badge-count" style="margin-left: 12px;"> Current Badge Count: ${badgeCount} </span>
            </div>

            <!-- Menu Component -->
            <ur-main-menu
                #mainMenu
                .opened=${isOpened}
                .loggedIn=${args.loggedIn}
                .userName=${args.userName}
                .userAvatar=${args.userAvatar}
                .userRole=${args.userRole}
                .badgeCount=${badgeCount}
                @menuToggleClick=${handleMenuToggleClick}
            >
                <ur-autosave-drawer
                    slot="autosave-drawer"
                    .autosaves=${args.autosaves}
                    empty-message=${args.emptyMessage}
                    chapter-text=${args.chapterText}
                    yes-text=${args.yesText}
                    no-text=${args.noText}
                    delete-confirm-message=${args.deleteConfirmMessage}
                    @autosaveOpen=${e => console.log('Open autosave:', e.detail)}
                    @autosaveDeleteRequest=${e => console.log('Delete request:', e.detail)}
                    @autosaveDeleteConfirm=${e => console.log('Delete confirm:', e.detail)}
                    @autosaveDeleteCancel=${e => console.log('Delete cancel:', e.detail)}
                ></ur-autosave-drawer>
                ${args.loggedIn
                    ? html`
                          <ur-menu-profile
                              class=${isOpened ? 'expanded' : 'collapsed'}
                              .userAvatar=${args.userAvatar}
                              .userName=${args.userName}
                              .userRole=${args.userRole}
                          ></ur-menu-profile>
                      `
                    : ''}
            </ur-main-menu>
        </div>
    `;
};

export default {
    title: 'urnovl/Business/Main Menu',
    render: args => MenuWithControls(args),
    argTypes: {
        opened: {
            control: 'boolean',
            description: 'Determines whether the menu is expanded (open) or collapsed (closed)',
        },
        loggedIn: {
            control: 'boolean',
            description: 'Determines if the user is logged in',
        },
        userName: {
            control: 'text',
            description: 'Name of the logged-in user',
        },
        userRole: {
            control: 'text',
            description: 'Role of the logged-in user',
        },
        userAvatar: {
            control: 'text',
            description: 'URL of the user avatar',
        },
        badgeCount: {
            control: 'number',
            description: 'Number of notifications to display in the badge',
        },
        autosaves: {
            control: 'array',
            description: 'Array of autosaves to display in the drawer',
        },
        emptyMessage: {
            control: 'text',
            description: 'Message to display when the drawer is empty',
        },
        chapterText: {
            control: 'text',
            description: 'Text for the chapter label',
        },
        yesText: {
            control: 'text',
            description: 'Text for the yes button',
        },
        noText: {
            control: 'text',
            description: 'Text for the no button',
        },
        deleteConfirmMessage: {
            control: 'text',
            description: 'Text for the delete confirmation message',
        },
    },
    parameters: {
        actions: {
            handles: ['menuToggleClick'],
        },
    },
};

export const Default = {
    args: {
        opened: false,
        loggedIn: false,
        userName: 'Guest',
        userRole: '',
        userAvatar: '',
        badgeCount: 0,
    },
};

export const LoggedOutOpened = {
    args: {
        opened: true,
        loggedIn: false,
        userName: 'Guest',
        userRole: '',
        userAvatar: '',
        badgeCount: 0,
    },
};

export const LoggedInClosed = {
    args: {
        opened: false,
        loggedIn: true,
        userName: 'Tasos Tsipos',
        userRole: 'Author & Reader',
        userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
        badgeCount: 5,
    },
};

export const LoggedInOpened = {
    args: {
        opened: true,
        loggedIn: true,
        userName: 'Tasos Tsipidopoulakoglou',
        userRole: 'Author & Reader',
        userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
        badgeCount: 10,
        // Add novl property to each autosave
        autosaves: [
            {
                id: 1,
                novl: { title: 'My First Novel' },
                title: 'The random chapter title',
                sequence: 1,
                showOptions: false,
            },
            {
                id: 2,
                novl: { title: 'My Second Novel' },
                title: 'Lone wolf',
                sequence: 2,
                showOptions: false,
            },
        ],
        // Add these properties which are used in the component
        emptyMessage: "You don't have anything saved in your drawer, yet!",
        chapterText: 'Chapter',
        yesText: 'Yes',
        noText: 'No',
        deleteConfirmMessage: 'Delete chapter?',
    },
};
