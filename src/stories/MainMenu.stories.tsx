import { html } from 'lit';
import '../components/ur-main-menu/ur-main-menu';
import '../components/ur-avatar/ur-avatar';
import '../components/ur-list/ur-list';

// Create a wrapper function to handle state
const MenuWithControls = (args) => {
    // Use closures to maintain state
    let isOpened = args.opened;
    let badgeCount = args.badgeCount || 0;

    // Create a function to update the DOM
    const updateMenu = (element) => {
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

    // Handle toggle button click
    const handleToggle = (e) => {
        isOpened = !isOpened;
        updateMenu(e.target.closest('.menu-controls-wrapper'));
    };

    // Handle badge increment
    const handleIncrementBadge = (e) => {
        badgeCount += 1;
        updateMenu(e.target.closest('.menu-controls-wrapper'));
    };

    // Handle badge decrement
    const handleDecrementBadge = (e) => {
        badgeCount = Math.max(0, badgeCount - 1); // Prevent negative values
        updateMenu(e.target.closest('.menu-controls-wrapper'));
    };

    // Handle menu's native toggle
    const handleMenuToggle = (e) => {
        isOpened = e.detail;
        updateMenu(e.target.parentElement);
        console.log('toggleExpand event payload:', e.detail);
    };

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
                <button
                    @click=${handleToggle}
                    class="toggle-button"
                    style=${buttonStyle}
                >
                    ${isOpened ? 'Close Menu' : 'Open Menu'}
                </button>

                <button
                    @click=${handleDecrementBadge}
                    style=${buttonStyle}
                >
                    -1 Badge
                </button>

                <button
                    @click=${handleIncrementBadge}
                    style=${buttonStyle}
                >
                    +1 Badge
                </button>

                <span class="badge-count" style="margin-left: 12px;">
                    Current Badge Count: ${badgeCount}
                </span>
            </div>

            <ur-main-menu
                .opened=${isOpened}
                .loggedIn=${args.loggedIn}
                .userName=${args.userName}
                .userAvatar=${args.userAvatar}
                .userRole=${args.userRole}
                .badgeCount=${badgeCount}
                @toggleExpand=${handleMenuToggle}
            >
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
    },
    parameters: {
        actions: {
            handles: ['toggleExpand'],
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
    },
};