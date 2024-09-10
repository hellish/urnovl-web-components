import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

import 'mdui/components/button';
import 'mdui/components/checkbox';

@Component({
    tag: 'ur-locale-filter-panel',
    styleUrl: 'ur-locale-filter-panel.css',
    shadow: true,
})
export class UrLocaleFilterPanel {

    @Prop()
    locales: Array<[label: string, value: string, checked: boolean]> = [];

    @Event()
    save: EventEmitter<void>;

    @Event()
    cancel: EventEmitter<void>;

    render() {
        return (
            <div class="locale-filter-panel">
                <header>
                    <mdui-button variant="text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#43474E" />
                        </svg>
                    </mdui-button>
                    <label>Filters</label>
                </header>
                <main>
                    <div class="description">
                        <div class="title">Content Languages</div>
                        <div class="text">Choose the language you want to see for the stories, pages and competitions</div>
                    </div>
                    <div class="locales">
                        {this.locales.map(([label, value, checked]) => {
                            return <mdui-checkbox checked={checked} value={value}>{label}</mdui-checkbox>
                        })}
                    </div>
                </main>
                <footer>
                    <mdui-button class="save" onClick={() => this.save.emit()}>
                        Save
                    </mdui-button>
                    <mdui-button class="cancel" variant="text" onClick={() => this.cancel.emit()}>
                        Cancel
                    </mdui-button>
                </footer>
            </div>
        );
    }
}
