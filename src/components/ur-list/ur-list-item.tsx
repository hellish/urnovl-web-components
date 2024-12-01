import { Component, Host, Prop, h } from '@stencil/core';

import 'mdui/components/list-item';

@Component({
    tag: 'ur-list-item',
    styleUrl: 'ur-list-item.css',
    shadow: true,
})
export class UrListItem {

    @Prop()
    content?: string; // Main content of the list item

    @Prop()
    disabled = false; // Disable the list item

    @Prop()
    active = false; // Mark the list item as active

    @Prop()
    nonclickable = false; // Make the item non-clickable

    @Prop()
    rounded = false; // Apply rounded styling

    @Prop()
    alignment: 'start' | 'center' | 'end' = 'center'; // Vertical alignment

    @Prop()
    icon?: string; // Icon on the left

    @Prop()
    endIcon?: string; // Icon on the right

    @Prop()
    description?: string; // Description (secondary text)

    @Prop()
    href?: string; // Turn the list item into a link

    @Prop()
    target?: '_blank' | '_self' | '_parent' | '_top'; // Link target

    @Prop()
    rel?: string; // Rel attribute for links

    render() {
        const classes = {
            'ur-list-item': true,
            'ur-list-item--disabled': this.disabled && !this.href, // Apply disabled styles only if not a link
            'ur-list-item--active': this.active,
            'ur-list-item--nonclickable': this.nonclickable,
            'ur-list-item--rounded': this.rounded,
            [`ur-list-item--align-${this.alignment}`]: !!this.alignment, // Add alignment class
        };

        return (
            <Host>
                <mdui-list-item
                    class={classes}
                    {...(this.href
                        ? {
                            href: this.href,
                            target: this.target,
                            rel: this.rel || undefined, // Ensure `rel` is passed only if provided
                        }
                        : {
                            disabled: this.disabled,
                            nonclickable: this.nonclickable || undefined, // Reflect `nonclickable` as an attribute
                            alignment: this.alignment,
                        })}
                >
                    {/* Left Icon */}
                    {this.icon && <mdui-icon slot="icon" class="material-icons-outlined" name={this.icon}></mdui-icon>}

                    {/* Content */}
                    <div class="content">
                        {this.content || <slot></slot>}
                        {this.description && <div class="description">{this.description}</div>}
                    </div>

                    {/* Custom Slot */}
                    <slot name="custom"></slot>

                    {/* Right Icon */}
                    {this.endIcon && <mdui-icon slot="end-icon" name={this.endIcon}></mdui-icon>}
                </mdui-list-item>
            </Host>
        );
    }
}
