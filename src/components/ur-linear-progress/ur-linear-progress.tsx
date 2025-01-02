import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'ur-linear-progress',
    styleUrl: 'ur-linear-progress.css',
    shadow: true,
})
export class UrLinearProgress {
    /**
     * The current value of the progress indicator.
     * If null or undefined, the progress is indeterminate.
     */
    @Prop()
    value: number | null = null;

    /**
     * The maximum value of the progress indicator.
     */
    @Prop({ reflect: true })
    max: number = 1;

    /**
     * Watch for changes to value and enforce valid ranges.
     */
    @Watch('value')
    validateValue(newValue: number | null) {
        if (newValue !== null && (newValue < 0 || newValue > this.max)) {
            console.warn(`ur-linear-progress: Invalid value "${newValue}"`);
            this.value = Math.max(0, Math.min(newValue, this.max));
        }
    }

    /**
     * Determine if the progress is indeterminate.
     */
    private isIndeterminate(): boolean {
        return this.value === null || this.value === undefined;
    }

    /**
     * Render progress bar width for determinate progress.
     */
    private getIndicatorWidth(): string | undefined {
        return !this.isIndeterminate() ? `${(this.value! / this.max) * 100}%` : undefined;
    }

    render() {
        return (
            <Host
                {...(this.isIndeterminate() && {
                    'data-indeterminate': true, // Add a data attribute for styling if indeterminate
                })}
            >
                <div class="progress-container">
                    <div
                        class={{
                            indicator: true,
                            indeterminate: this.isIndeterminate(),
                        }}
                        part="indicator"
                        style={!this.isIndeterminate() ? { width: this.getIndicatorWidth() } : {}}
                    ></div>
                </div>
            </Host>
        );
    }
}
