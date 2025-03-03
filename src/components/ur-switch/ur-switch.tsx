import { Component, Host, Prop, Event, EventEmitter, h, Element } from '@stencil/core';

import 'mdui/components/switch';

@Component({
    tag: 'ur-switch',
    styleUrl: 'ur-switch.css',
    shadow: true,
})
export class UrSwitch {
    @Element() el!: HTMLElement;

    @Prop()
    disabled = false;

    @Prop({ mutable: true, reflect: true })
    checked = false;

    @Prop()
    checkedIcon: string;

    @Prop()
    uncheckedIcon: string;

    // This will emit the event with the exact name 'switchChange'
    @Event({ eventName: 'switchChange' })
    switchChange: EventEmitter<boolean>;

    componentDidLoad() {
        const mduiSwitch = this.el.shadowRoot.querySelector('mdui-switch');

        if (mduiSwitch) {
            mduiSwitch.addEventListener('change', this.handleChangeEvent);
        }
    }

    disconnectedCallback() {
        const mduiSwitch = this.el.shadowRoot?.querySelector('mdui-switch');
        if (mduiSwitch) {
            mduiSwitch.removeEventListener('change', this.handleChangeEvent);
        }
    }

    private handleChangeEvent = (event: Event) => {
        const mduiSwitch = event.target as HTMLElement & { checked: boolean };
        this.checked = mduiSwitch.checked;
        this.switchChange.emit(this.checked);
    };

    render() {
        return (
            <Host>
                <mdui-switch checked={this.checked} disabled={this.disabled} checked-icon={this.checkedIcon} unchecked-icon={this.uncheckedIcon}></mdui-switch>
            </Host>
        );
    }
}
