import { Component, Host, h, Prop, Event, EventEmitter, State, Watch } from '@stencil/core';

import '../ur-menu-item/ur-menu-item';
import 'mdui/components/select.js';

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
    items: Array<[label: string, value: string, disabled: boolean]> = [];

    @State()
    selectedValue: string | string[] = this.multiple ? [] : '';

    @Event()
    itemClicked: EventEmitter<string | string[]>;

    @Watch('value')
    valueChanged(newValue: string | string[]) {
        this.selectedValue = newValue;
    }

    handleItemClicked(event: CustomEvent<string>) {
        const value = event.detail;

        if (this.multiple) {
            const currentValue = Array.isArray(this.selectedValue) ? [...this.selectedValue] : [];
            const valueIndex = currentValue.indexOf(value);

            if (valueIndex > -1) {
                currentValue.splice(valueIndex, 1);
            } else {
                currentValue.push(value);
            }

            this.selectedValue = currentValue;
        } else {
            this.selectedValue = value;
        }

        this.itemClicked.emit(this.selectedValue);
    }

    componentWillLoad() {
        this.selectedValue = this.value;
    }

    render() {
        return (
            <Host>
                <mdui-select
                    label={this.label}
                    name={this.name}
                    value={this.selectedValue}
                    placeholder={this.placeholder}
                    helper={this.helper}
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
                    {this.items.map(([label, value, disabled]) => (
                        <ur-menu-item
                            value={value}
                            label={label}
                            disabled={disabled}
                            onItemClicked={(event) => this.handleItemClicked(event)}
                        ></ur-menu-item>
                    ))}
                </mdui-select>
            </Host>
        );
    }
}
