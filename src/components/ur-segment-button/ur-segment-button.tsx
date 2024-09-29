import { Component, Host, Prop, h } from '@stencil/core';

import 'mdui/components/segmented-button-group.js';
import 'mdui/components/segmented-button.js';

@Component({
    tag: 'ur-segment-button',
    styleUrl: 'ur-segment-button.css',
    shadow: true,
})

export class UrSegment {

    // State to track which button is selected
    @Prop() likeSelected: Boolean = false;  // Default is no selection
    @Prop() dislikeSelected: Boolean = false; // Default is no selection

    @Prop() preSelected: string;

    // New prop for the "Like" button label
    @Prop() likeLabel: string = '2.5k';  // Default label is 'Like'

    render() {
        return (
            <Host>
                <mdui-segmented-button-group selects="single" value={this.preSelected}>
                    <mdui-segmented-button selected={this.likeSelected} icon="thumb_up--outlined" selected-icon="thumb_up" value="like">{this.likeLabel}</mdui-segmented-button>
                    <mdui-segmented-button selected={this.dislikeSelected} icon="thumb_down--outlined" selected-icon="thumb_down" value="dislike"></mdui-segmented-button>
                </mdui-segmented-button-group>
            </Host>
        )
    }
}