import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

import 'mdui/components/menu-item.js';

@Component({
  tag: 'ur-menu-item',
  styleUrl: 'ur-menu-item.css',
  shadow: true,
})
export class UrMenuItem {

    @Prop()
    value: string = '';

    @Prop()
    label: string = '';

    @Prop()
    disabled: boolean = false;

    @Prop()
    selected: boolean = false;

    @Event()
    itemClicked: EventEmitter<string>;

    handleClick() {
        this.itemClicked.emit(this.value); // Emit the value of the clicked item
        this.selected = !this.selected;
    }

    render() {
        return (
            <Host>
                <mdui-menu-item
                    disabled={this.disabled}
                    value={this.value}
                    onClick={() => this.handleClick()}>
                    <mdui-icon name="check" class={`check-icon ${this.selected ? 'selected' : ''}`}></mdui-icon>
                    <span>{this.label}</span>
                </mdui-menu-item>
            </Host>
        );
    }
}
