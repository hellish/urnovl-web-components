import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

import 'mdui/components/button-icon';

@Component({
    tag: 'ur-button-arrow-left',
    styleUrl: 'ur-button-arrow-left.css',
    shadow: true,
})
export class UrButtonArrowLeft {

    @Prop()
    disabled = false;

    @Event()
    leftClicked: EventEmitter;

    render() {
        return (
            <Host>
                <mdui-button-icon borderRadius="12px" disabled={this.disabled} onClick={() => this.leftClicked.emit()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                        <g>
                            <path d="M22.6667 13.9998L6.33334 13.9998M6.33334 13.9998L14.5 22.1665M6.33334 13.9998L14.5 5.83317"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                </mdui-button-icon>
            </Host>
        );
    }
}
