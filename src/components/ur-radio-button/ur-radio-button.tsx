import { Component, Host, Prop, h, Event, EventEmitter, Watch } from '@stencil/core';
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
  value: string = '';

  @Prop()
  name: string = ''; // Name of the group

  @Event({
    bubbles: true,
    composed: true,
  })
  valueSelected: EventEmitter<{ value: string }>;

  @Watch('checked')
  watchChecked(newChecked: boolean) {
    if (newChecked) {
      console.log(`Radio button '${this.value}' checked.`);
      this.valueSelected.emit({ value: this.value });
    }
  }

  private handleClick = () => {
    if (!this.disabled && !this.checked) {
      this.checked = true; // Ensure this radio button gets selected
    }
  };

  render() {
    return (
      <Host>
        <mdui-radio
          checked={this.checked ? 'true' : undefined}
          disabled={this.disabled ? 'true' : undefined}
          name={this.name}
          onClick={this.handleClick}
        >
          <slot></slot>
        </mdui-radio>
      </Host>
    );
  }
}
