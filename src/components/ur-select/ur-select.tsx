import { Component, Prop, h, Event, EventEmitter, Watch, Host } from '@stencil/core';

import 'mdui/components/select.js';
import 'mdui/components/menu-item.js';
import 'mdui/components/icon';

@Component({
    tag: 'ur-select',
    styleUrl: 'ur-select.css',
    shadow: true,
})
export class UrSelect {
    @Prop()
    value: string | string[] = ''; // Selected value(s)

    @Prop()
    name: string = ''; // Name of the select

    @Prop()
    label: string = ''; // Label text

    @Prop()
    placeholder: string = ''; // Placeholder text

    @Prop()
    helper: string = ''; // Helper text

    @Prop()
    variant: 'filled' | 'outlined' = 'filled'; // Variant of the select

    @Prop()
    usage: 'topBar' | 'standard' = 'standard'

    @Prop()
    multiple: boolean = false; // Enable multi-select

    @Prop()
    clearable: boolean = false; // Enable clear button

    @Prop()
    disabled: boolean = false; // Disable the select

    @Prop()
    required: boolean = false; // Mark as required

    @Prop()
    readonly: boolean = false; // Make the select read-only

    @Prop()
    size: 'normal' | 'big' | 'small' = 'normal';

    @Prop()
    placement: 'bottom' | 'top' = 'bottom'; // Dropdown position

    @Prop()
    icon: string = ''; // Left icon

    @Prop() endIcon: string = 'arrow_drop_down'; // Right icon - default dropdown arrow

    @Prop() 
    flex: boolean = true; // New fullWidth prop

    @Prop()
    suffix: string = ''; // Suffix text or icon

    @Prop()
    clearIcon: string = 'close'; // Icon for the clear button

    @Event({
        bubbles: true,
        composed: true,
    })
    valueChanged: EventEmitter<{ value: string | string[] }>;

    @Watch('value')
    handleValueChange(newValue: string | string[]) {
        this.valueChanged.emit({ value: newValue });
    }

    componentDidLoad() {
        // Simple initialization without debugging code
    }

    private handleChange = (event: Event) => {
        const target = event.target as HTMLElement & { value?: string | string[] };
        
        if (target?.value !== undefined) {
            this.value = target.value;
        }
    };

    render() {

        const selectStyles = {
            flex: this.flex ? '1' : '0 1 auto',
            maxWidth: this.usage === 'topBar' ? '350px' : 'initial',
            fontSize: '10px',
        };

        return (
            <Host style={selectStyles}>
                <mdui-select
                    name={this.name}
                    value={this.value}
                    variant={this.variant}
                    usage={this.usage}
                    multiple={this.multiple}
                    class={!this.multiple ? 'single-select' : ''}
                    flex={this.flex}
                    clearable={this.clearable}
                    disabled={this.disabled}
                    required={this.required}
                    readonly={this.readonly}
                    placement={this.placement}
                    placeholder={this.placeholder}
                    onChange={this.handleChange}
                >
                    {this.icon && (
                        <mdui-icon slot="icon" name={this.icon}></mdui-icon>
                    )}
                    {this.endIcon && (
                        <mdui-icon slot="end-icon" name={this.endIcon}></mdui-icon>
                    )}
                    {this.suffix && <span slot="suffix">{this.suffix}</span>}
                    <slot></slot>
                    {this.helper && <span slot="helper">{this.helper}</span>}
                </mdui-select>
            </Host>
        );
    }

}
