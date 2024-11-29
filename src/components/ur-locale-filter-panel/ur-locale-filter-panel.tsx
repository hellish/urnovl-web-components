import { Component, Event, EventEmitter, Prop, h, State } from '@stencil/core';

import 'mdui/components/button';
import 'mdui/components/checkbox';

@Component({
    tag: 'ur-locale-filter-panel',
    styleUrl: 'ur-locale-filter-panel.css',
    shadow: true,
})
export class UrLocaleFilterPanel {
    /** Whether to show the header */
    @Prop() showHeader = true;

    /** Whether to show the footer */
    @Prop() showFooter = true;

    /** List of available languages */
    @Prop() locales: Array<{ label: string; value: string; checked: boolean }> = [];

    /** Internal state for mutable locales */
    @State() mutableLocales: Array<{ label: string; value: string; checked: boolean }> = [];

    /** Event emitted when saving languages */
    @Event({ bubbles: true, composed: true }) save: EventEmitter<string[]>;

    /** Event emitted when canceling */
    @Event({ bubbles: true, composed: true }) cancel: EventEmitter<void>;

    componentWillLoad() {
        console.log('Component initialized with locales:', this.locales);
        this.mutableLocales = [...this.locales];
    }

    private handleCancel() {
        this.cancel.emit(); // Emit the cancel event
    }

    private handleSave() {
        const selectedLanguages = this.mutableLocales.filter(locale => locale.checked).map(locale => locale.value);
        console.log('Selected languages on Save:', selectedLanguages); // Debugging
        this.save.emit(selectedLanguages); // Emit selected languages
    }

    private toggleLocale(value: string) {
        console.log('ToggleLocale triggered for value:', value);
        console.trace('Call stack for toggleLocale');
      
        this.mutableLocales = this.mutableLocales.map(locale =>
          locale.value === value ? { ...locale, checked: !locale.checked } : locale
        );
      
        console.log('Updated mutableLocales:', this.mutableLocales); 
      }

    render() {
        return (
            <div class="locale-filter-panel">
                {this.showHeader && (
                    <header>
                        <ur-button-icon class="close-panel" icon="close" onClick={() => this.handleCancel()}></ur-button-icon>
                        <label>Filters</label>
                    </header>
                )}
                <main>
                    <div class="description">
                        <div class="title">Content Languages</div>
                        <div class="text">Choose the language you want to see for the stories, pages, and competitions</div>
                    </div>
                    <div class="locales">
                        {this.mutableLocales.map(({ label, value, checked }) => (
                            <mdui-checkbox
                                checked={checked}
                                value={value}
                                onChange={() => {
                                    console.log('Checkbox value changed:', value);
                                    this.toggleLocale(value);
                                }}
                            >
                                {label}
                            </mdui-checkbox>
                        ))}
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
