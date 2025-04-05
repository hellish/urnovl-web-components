import { html } from 'lit';
import '../components/ur-navigation-bar/ur-navigation-bar';
import 'mdui/components/navigation-bar-item.js';
import 'mdui/components/badge.js';
import 'mdui/components/icon.js';

// Create a story with direct MDUI components inside ur-navigation-bar
const NavigationBar = args => {
    const { position = 'bottom', labelVisibility = 'auto', scrollBehavior = '', value = 'home' } = args;

    // Add event handler to update the display value when selection changes
    const handleChange = e => {
        console.log('Navigation value changed:', e.detail.value);
        const display = e.target.closest('div').querySelector('#selection-display');
        if (display) {
            display.textContent = e.detail.value;
        }
    };

    return html`
        <div style="border: 1px solid #eee; padding: 16px; border-radius: 8px;">
            <ur-navigation-bar
                position="${position}"
                label-visibility="${labelVisibility}"
                scroll-behavior="${scrollBehavior}"
                value="${value}"
                style="position: relative; width: 100%;"
                @change=${handleChange}
            >
                <mdui-navigation-bar-item icon="home" value="home">Home</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="search" value="search">Search</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="favorite" value="favorites">
                    Favorites
                    <mdui-badge slot="badge">5</mdui-badge>
                </mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="person" value="profile">Profile</mdui-navigation-bar-item>
            </ur-navigation-bar>

            <div style="margin-top: 16px; color: #666;">
                <p>Current selection: <strong id="selection-display">${value}</strong></p>
                <p>To change selection, click on any navigation item.</p>
            </div>
        </div>
    `;
};

// Story with different numbers of items
const ItemCountExample = args => {
    const { count = 3 } = args;
    
    // Generate navigation items based on count
    const items = [];
    const icons = ['home', 'search', 'favorite', 'person', 'settings', 'notifications', 'mail'];
    const labels = ['Home', 'Search', 'Favorites', 'Profile', 'Settings', 'Notifications', 'Mail'];
    
    for (let i = 0; i < Math.min(count, icons.length); i++) {
        items.push(html`
            <mdui-navigation-bar-item icon="${icons[i]}" value="item-${i+1}">
                ${labels[i]}
            </mdui-navigation-bar-item>
        `);
    }
    
    return html`
        <div style="border: 1px solid #eee; padding: 16px; border-radius: 8px;">
            <h3>Navigation Bar with ${count} Items</h3>
            <p>With auto label visibility, labels ${count <= 3 ? 'are always shown' : 'only show for the selected item'} when there are ${count} items.</p>
            
            <ur-navigation-bar
                value="item-1"
                style="position: relative; width: 100%;"
            >
                ${items}
            </ur-navigation-bar>
        </div>
    `;
};

// Story with different label visibility options
const LabelVisibilityExample = () => {
    // Create examples for each label visibility option
    return html`
        <div style="border: 1px solid #eee; padding: 16px; border-radius: 8px;">
            <h3>Label Visibility Options</h3>
            
            <h4>Selected</h4>
            <p>Only the selected item's label is visible.</p>
            <ur-navigation-bar
                value="item-1"
                label-visibility="selected"
                style="position: relative; width: 100%; margin-bottom: 24px;"
            >
                <mdui-navigation-bar-item icon="home" value="item-1">Home</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="search" value="item-2">Search</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="favorite" value="item-3">Favorites</mdui-navigation-bar-item>
            </ur-navigation-bar>
            
            <h4>Labeled</h4>
            <p>All labels are always visible.</p>
            <ur-navigation-bar
                value="item-1"
                label-visibility="labeled"
                style="position: relative; width: 100%; margin-bottom: 24px;"
            >
                <mdui-navigation-bar-item icon="home" value="item-1">Home</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="search" value="item-2">Search</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="favorite" value="item-3">Favorites</mdui-navigation-bar-item>
            </ur-navigation-bar>
            
            <h4>Unlabeled</h4>
            <p>No labels are visible.</p>
            <ur-navigation-bar
                value="item-1"
                label-visibility="unlabeled"
                style="position: relative; width: 100%;"
            >
                <mdui-navigation-bar-item icon="home" value="item-1">Home</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="search" value="item-2">Search</mdui-navigation-bar-item>
                <mdui-navigation-bar-item icon="favorite" value="item-3">Favorites</mdui-navigation-bar-item>
            </ur-navigation-bar>
        </div>
    `;
};

// Story with active icons
const ActiveIconExample = () => {
    return html`
        <div style="border: 1px solid #eee; padding: 16px; border-radius: 8px;">
            <h3>Active Icons</h3>
            <p>Different icons can be shown for active and inactive states.</p>
            
            <ur-navigation-bar
                value="item-1"
                style="position: relative; width: 100%;"
            >
                <mdui-navigation-bar-item 
                    icon="home_outlined" 
                    active-icon="home_filled" 
                    value="item-1"
                >Home</mdui-navigation-bar-item>
                
                <mdui-navigation-bar-item
                    icon="search_outlined"
                    active-icon="search"
                    value="item-2"
                >Search</mdui-navigation-bar-item>
                
                <mdui-navigation-bar-item
                    icon="favorite_outlined"
                    active-icon="favorite"
                    value="item-3"
                >Favorites</mdui-navigation-bar-item>
            </ur-navigation-bar>
        </div>
    `;
};

// Story with links and badges
const LinksAndBadgesExample = () => {
    return html`
        <div style="border: 1px solid #eee; padding: 16px; border-radius: 8px;">
            <h3>Links and Badges</h3>
            
            <ur-navigation-bar
                value="item-1"
                style="position: relative; width: 100%;"
            >
                <mdui-navigation-bar-item 
                    icon="home" 
                    value="item-1"
                >
                    Home
                </mdui-navigation-bar-item>
                
                <mdui-navigation-bar-item
                    icon="link"
                    href="https://example.com"
                    target="_blank"
                    value="item-2"
                >
                    External Link
                </mdui-navigation-bar-item>
                
                <mdui-navigation-bar-item
                    icon="notifications"
                    value="item-3"
                >
                    Notifications
                    <mdui-badge slot="badge">9</mdui-badge>
                </mdui-navigation-bar-item>
                
                <mdui-navigation-bar-item
                    icon="mail"
                    value="item-4"
                >
                    Mail
                    <mdui-badge slot="badge">99+</mdui-badge>
                </mdui-navigation-bar-item>
            </ur-navigation-bar>
            
            <p style="margin-top: 16px; color: #666;">
                <strong>Note:</strong> The second item is an external link that will open in a new tab.
            </p>
        </div>
    `;
};

export default {
    title: 'Urnovl/Basic/Navigation Bar',
    render: args => NavigationBar(args),
    argTypes: {
        position: {
            control: 'select',
            options: ['bottom', 'top'],
            description: 'Position of the navigation bar',
        },
        labelVisibility: {
            control: 'select',
            options: ['auto', 'selected', 'labeled', 'unlabeled'],
            description: 'Controls visibility of navigation item labels',
        },
        scrollBehavior: {
            control: 'select',
            options: ['', 'hide'],
            description: 'Behavior on scroll (hide to hide when scrolling down)',
        },
        value: {
            control: 'select',
            options: ['home', 'search', 'favorites', 'profile'],
            description: 'Value of the active navigation item',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The navigation bar facilitates easy switching between main pages on mobile devices.',
            },
        },
    },
};

// Default (bottom positioned)
export const Default = {
    args: {
        position: 'bottom',
        labelVisibility: 'auto',
        value: 'home',
    },
};

// Top positioned
export const TopPosition = {
    args: {
        position: 'top',
        value: 'search',
    },
};

// Selected labels only
export const SelectedLabels = {
    args: {
        labelVisibility: 'selected',
        value: 'favorites',
    },
};

// Hide on scroll
export const HideOnScroll = {
    args: {
        scrollBehavior: 'hide',
        value: 'profile',
    },
};

// Item Count Examples
export const ThreeItems = {
    render: () => ItemCountExample({ count: 3 }),
};

export const FiveItems = {
    render: () => ItemCountExample({ count: 5 }),
};

// Label Visibility Examples
export const LabelVisibilityOptions = {
    render: () => LabelVisibilityExample(),
};

// Active Icons Example
export const ActiveIcons = {
    render: () => ActiveIconExample(),
};

// Links and Badges Example
export const LinksAndBadges = {
    render: () => LinksAndBadgesExample(),
};