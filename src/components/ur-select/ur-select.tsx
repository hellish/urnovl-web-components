import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

import '../ur-menu-item/ur-menu-item';
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
    items: Array<[label: string, value: string]> = [];

    @Event()
    itemClicked: EventEmitter<void>;

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
                    {this.items.map(([label, value]) => {
                        return <ur-menu-item value={value} label={label} onClick={() => this.itemClicked.emit()}></ur-menu-item>
                    })}
                    {/*<mdui-menu-item value="item-1">Item 1</mdui-menu-item>*/}
                    {/*<mdui-menu-item value="item-2">Item 2</mdui-menu-item>*/}
                </mdui-select>
            </Host>
        );
    }
}
