import { Component, Host, Prop, h } from '@stencil/core';

import 'mdui/components/radio.js';

@Component({
  tag: 'ur-radio-button',
  styleUrl: 'ur-radio-button.css',
  shadow: true,
})
export class UrRadioButton {

  @Prop()
  disabled = false;

  @Prop()
  checked = false;

  @Prop()
  text: string = 'Mandarin';
  
  render() {
    return (
      <Host>
            <mdui-radio checked={this.checked} disabled={this.disabled}>{this.text}</mdui-radio>
      </Host>
    );
  }
}
