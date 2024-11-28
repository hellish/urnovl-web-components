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
    showHeader = true;

    @Prop()
    showFooter = true;

    @Prop()
    locales: Array<[label: string, value: string, checked: boolean]> = [];

    @Event({
        bubbles: true,
        composed: true,
    })
    save: EventEmitter<void>;
    
    @Event({
        bubbles: true,
        composed: true,
    })
    cancel: EventEmitter<void>;

    private handleCancel() {
        this.cancel.emit(); // Emit the cancel event
    }

    private handleSave() {
        this.save.emit(); // Emit the save event
    }

    render() {
        return (
            <div class="locale-filter-panel">
                {this.showHeader && (
                    <header>
                        <ur-button-icon
                            class="close-panel"
                            icon="close"
                            onClick={() => this.handleCancel()} // Emit cancel on [x] button click
                        ></ur-button-icon>
                        <label>Filters</label>
                    </header>
                )}
                <main>
                    <div class="description">
                        <div class="title">Content Languages</div>
                        <div class="text">Choose the language you want to see for the stories, pages and competitions</div>
                    </div>
                    <div class="locales">
                        {this.locales.map(([label, value, checked]) => {
                            return (
                                <mdui-checkbox checked={checked} value={value}>
                                    {label}
                                </mdui-checkbox>
                            );
                        })}
                    </div>
                </main>
                {this.showFooter && (
                    <footer>
                        <mdui-button class="save" onClick={() => this.handleSave()}>
                            Save
                        </mdui-button>
                        <mdui-button class="cancel" variant="text" onClick={() => this.handleCancel()}>
                            Cancel
                        </mdui-button>
                    </footer>
                )}
            </div>
        );
    }
}
