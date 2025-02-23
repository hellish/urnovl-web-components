import { Component, Host, Prop, h } from '@stencil/core';
import 'mdui/components/circular-progress.js';

@Component({
    tag: 'ur-circular-progress',
    styleUrl: 'ur-circular-progress.css',
    shadow: true,
})
export class UrCircularProgress {
    /**
     * The maximum value of the progress indicator.
     * Defaults to 1.
     */
    @Prop({ reflect: true })
    max: number = 1; // Set default value directly

    /**
     * The current value of the progress indicator.
     * If not specified, the progress indicator will be in an indeterminate state.
     */
    @Prop({ reflect: true })
    value?: number;

    /**
     * Render the circular progress component.
     */
    render() {
        return (
            <Host>
                <mdui-circular-progress max={this.max} value={this.value !== undefined ? this.value : undefined}></mdui-circular-progress>
            </Host>
        );
    }
}
