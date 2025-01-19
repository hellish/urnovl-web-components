import { html } from 'lit';
import '../components/ur-menu-item/ur-menu-item';

const MenuItemTemplate = ({
    value = '',
    label = '',
    disabled = false,
    selected = false,
    size = 'medium',
    selectedIcon = 'check',
    fullWidth = false,
    leftAligned = true,
    heightNumber = 32
}) => {
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const menuItem = e.currentTarget.querySelector('ur-menu-item');
        if (menuItem) {
            // Toggle the selected state
            const newSelected = !menuItem.selected;
            menuItem.selected = newSelected;
            
            // Update the menu value
            const menu = e.currentTarget;
            menu.value = newSelected ? value : '';
        }
        
        const customEvent = new CustomEvent('change', {
            detail: { value, selected: menuItem?.selected },
            bubbles: true,
            composed: true
        });
        e.currentTarget.dispatchEvent(customEvent);
    };

    return html`
        <div style="width: ${fullWidth ? '100%' : '200px'};">
            <mdui-menu 
                selects="single" 
                value=${selected ? value : ''}
                @click=${handleClick}
            >
                <ur-menu-item
                    value=${value}
                    label=${label}
                    ?disabled=${disabled}
                    ?selected=${selected}
                    size=${size}
                    selected-icon=${selectedIcon}
                    ?fullWidth=${fullWidth}
                    ?leftAligned=${leftAligned}
                    .heightNumber=${heightNumber}
                ></ur-menu-item>
            </mdui-menu>
        </div>
    `;
};

export default {
    title: 'Core/Menu Item',
    render: args => MenuItemTemplate(args),
    argTypes: {
        value: { control: 'text' },
        label: { control: 'text' },
        disabled: { control: 'boolean' },
        selected: { control: 'boolean' },
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] }
        },
        selectedIcon: {
            control: { type: 'select',
            options: ['check', 'cloud_done', 'done_outline', 'star', 'favorite'] }
        },
        fullWidth: { control: 'boolean' },
        leftAligned: { control: 'boolean' },
        heightNumber: { 
            control: { type: 'number' },
            description: 'Custom height in pixels'
        }
    }
};

export const Default = {
    args: {
        value: 'item1',
        label: 'Menu Item',
        disabled: false,
        selected: false,
        size: 'medium',
        selectedIcon: 'check',
        fullWidth: false,
        leftAligned: true,
    }
};

export const FullWidthCentered = {
    args: {
        value: 'item3',
        label: 'Full Width Centered',
        disabled: false,
        selected: false,
        size: 'medium',
        selectedIcon: 'check',
        fullWidth: true,
        leftAligned: false,
        heightNumber: 44
    }
};

export const RandomHeight = {
    args: {
        value: 'item3',
        label: 'Full Width Centered',
        disabled: false,
        selected: false,
        size: 'medium',
        selectedIcon: 'check',
        fullWidth: true,
        leftAligned: false,
        heightNumber: 32
    }
};