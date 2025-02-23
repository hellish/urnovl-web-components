import { Component, Prop, h, State, Watch, Host } from '@stencil/core';

@Component({
    tag: 'ur-time-ago',
    styleUrl: 'ur-time-ago.css',
    shadow: true,
})
export class UrTimeAgo {
    private timer: number;

    @Prop()
    date: string;

    @State()
    timeAgo: string;

    @Watch('date')
    watchDate() {
        this.updateTime();
    }

    componentWillLoad() {
        this.updateTime();
        // Update every minute
        this.timer = setInterval(() => this.updateTime(), 60000);
    }

    disconnectedCallback() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    private updateTime() {
        const date = new Date(this.date);
        const now = new Date();
        const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        let interval = Math.floor(seconds / 31536000);
        if (interval >= 1) {
            this.timeAgo = this.format(interval, 'year');
            return;
        }

        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            this.timeAgo = this.format(interval, 'month');
            return;
        }

        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
            this.timeAgo = this.format(interval, 'day');
            return;
        }

        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            this.timeAgo = this.format(interval, 'hour');
            return;
        }

        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            this.timeAgo = this.format(interval, 'minute');
            return;
        }

        this.timeAgo = this.format(Math.floor(seconds), 'second');
    }

    private format(value: number, unit: string): string {
        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
        return rtf.format(-value, unit as Intl.RelativeTimeFormatUnit);
    }

    render() {
        return (
            <Host>
                <span class="time-ago" part="time">
                    {this.timeAgo}
                </span>
            </Host>
        );
    }
}
