import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

import 'mdui/components/button-icon';

@Component({
    tag: 'ur-button-arrow-right',
    styleUrl: 'ur-button-arrow-right.css',
    shadow: true,
})
export class UrButtonArrowRight {

    @Prop()
    disabled = false;

    @Event()
    rightClicked: EventEmitter;

    render() {
        return (
            <Host>
                <mdui-button-icon disabled={this.disabled} onClick={() => this.rightClicked.emit()}>
                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Arrow right">
                            <path id="Icon" d="M6.33331 14.0002H22.6666M22.6666 14.0002L14.5 5.8335M22.6666 14.0002L14.5 22.1668" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                </mdui-button-icon>
            </Host>
        );
    }
}
