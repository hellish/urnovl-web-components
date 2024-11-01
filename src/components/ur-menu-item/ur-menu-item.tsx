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

    @Event()
    itemClicked: EventEmitter<string>;

    handleClick() {
        this.itemClicked.emit(this.value); // Emit the value of the clicked item
    }

    render() {
        return (
            <Host>
                <mdui-menu-item disabled={this.disabled} value={this.value} onClick={() => this.handleClick()}>
                    {this.label}
                </mdui-menu-item>
            </Host>
        );
    }
}
