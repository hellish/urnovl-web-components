import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

import 'mdui/components/select.js';
import 'mdui/components/menu-item.js';

@Component({
    tag: 'ur-select',
    styleUrl: 'ur-select.css',
    shadow: true,
})
export class UrSelect {
    @Prop()
    label: string = "Text Field"

    @Prop()
    name: string = '';

    @Prop()
    value: string | string[] = '';

    @Prop()
    placeholder: string = null;

    @Prop()
    helper: string = null;

    @Prop()
    readonly: boolean = false;

    @Prop()
    disabled: boolean = false;

    @Prop()
    clearable: boolean = false;

    @Prop()
    multiple: boolean = false;

    @Prop()
    endAligned: boolean = false;

    @Prop()
    variant: 'filled' | 'outlined' = 'filled';

    @Prop()
    placement: 'auto' | 'bottom' | 'top' = 'auto';

    @Prop()
    icon: string = null;

    @Prop()
    endIcon: string = null;

    @Prop()
    form: string = null;

    @Prop()
    menuItems: Array<[label: string, value: string]> = [];

    @Event()
    itemClicked: EventEmitter;

    render() {
        return (
            <Host>
                <mdui-select
                    label={!!this.label ? this.label : ''}
                    name={!!this.name ? this.name : ''}
                    value={this.value}
                    placeholder={!!this.placeholder ? this.placeholder : ''}
                    helper={!!this.helper ? this.helper : ''}
                    readonly={this.readonly}
                    disabled={this.disabled}
                    clearable={this.clearable}
                    multiple={this.multiple}
                    end-aligned={this.endAligned}
                    variant={this.variant}
                    placement={this.placement}
                    icon={this.icon}
                    end-icon={this.endIcon}
                    form={this.form}
                >
                    <div class="items">
                        {this.menuItems.map(([label, value]) => {
                            return <mdui-menu-item value={value} onClick={() => this.itemClicked.emit()}>{label}</mdui-menu-item>
                        })}
                    </div>
                </mdui-select>
            </Host>
        );
    }
}
