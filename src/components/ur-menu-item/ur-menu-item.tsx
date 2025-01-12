// ur-menu-item.tsx
import { Component, Host, h, Prop, Watch, State, Element } from '@stencil/core';
import 'mdui/components/menu-item';
import 'mdui/components/icon';

@Component({
    tag: 'ur-menu-item',
    styleUrl: 'ur-menu-item.css',
    shadow: true,
})
export class UrMenuItem {
    @Element()
    el: HTMLElement;

    @Prop() 
    value: string = '';

    @Prop() 
    label: string = '';

    @Prop() 
    disabled: boolean = false;

    @Prop() 
    selected: boolean = false;

    @Prop() 
    size: 'small' | 'medium' | 'large' = 'medium';

    @Prop() 
    selectedIcon: string = 'check';

    @Prop() 
    fullWidth: boolean = false;

    @Prop() 
    leftAligned: boolean = true;

    @Prop({ reflect: true })
    heightNumber?: number = 30;

    @State() 
    private isHovered: boolean = false;

    @Watch('selected')
    selectedChanged(newValue: boolean) {
        this.el.setAttribute('aria-selected', newValue.toString());
    }

    @Watch('disabled')
    disabledChanged(newValue: boolean) {
        this.el.setAttribute('aria-disabled', newValue.toString());
    }

    @Watch('heightNumber')
    heightNumberChanged(newValue: number) {
        if (newValue) {
            this.el.style.setProperty('--menu-item-height', `${newValue}px`);
            
            // Also update the mdui-menu-item height
            const menuItem = this.el.querySelector('mdui-menu-item');
            if (menuItem) {
                menuItem.style.height = `${newValue}px`;
            }
        }
    }

    private handleMouseEnter = () => {
        if (!this.disabled) {
            this.isHovered = true;
        }
    };

    private handleMouseLeave = () => {
        this.isHovered = false;
    };

    private handleClick = (event: MouseEvent) => {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
    };

    componentDidLoad() {
        this.el.setAttribute('role', 'menuitem');
        this.el.setAttribute('aria-disabled', this.disabled.toString());
        this.el.setAttribute('aria-selected', this.selected.toString());

        if (this.heightNumber) {
            this.heightNumberChanged(this.heightNumber);
        }

        // Watch for parent menu's value changes
        const parentMenu = this.el.closest('mdui-menu');
        if (parentMenu) {
            parentMenu.addEventListener('change', () => {
                const isSelected = parentMenu.value === this.value;
                if (isSelected !== this.selected) {
                    this.selected = isSelected;
                }
            });
        }
    }

    render() {
        const menuItemStyle = this.heightNumber ? { height: `${this.heightNumber}px` } : {};
    
        return (
            <Host
                class={{
                    'menu-item': true,
                    [`size-${this.size}`]: true,
                    'disabled': this.disabled,
                    'selected': this.selected,
                    'hovered': this.isHovered,
                    'left-aligned': this.leftAligned,
                    'full-width': this.fullWidth,
                }}
                onClick={this.handleClick}
            >
                <mdui-menu-item 
                    disabled={this.disabled} 
                    value={this.value} 
                    onMouseEnter={this.handleMouseEnter} 
                    onMouseLeave={this.handleMouseLeave}
                    style={menuItemStyle}
                >
                    {this.selected && <mdui-icon name={this.selectedIcon} />}
                    <span class="item-label">{this.label}</span>
                </mdui-menu-item>
            </Host>
        );
    }
}
