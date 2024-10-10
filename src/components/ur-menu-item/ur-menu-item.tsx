import { Component, Host, h, Prop } from '@stencil/core';

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

  render() {
    return (
      <Host>
          <mdui-menu-item
              value={this.value}
          >
              {this.label}
          </mdui-menu-item>
      </Host>
    );
  }
}
