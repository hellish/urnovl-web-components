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
    @Prop() locales: Array<{ label: string; value?: string; key?: string; checked: boolean }> = [];

    /** Field to use as the identifier ('key' or 'value') */
    @Prop() identifierField: 'key' | 'value' = 'value';

    /** Internal state for mutable locales */
    @State() mutableLocales: Array<{ label: string; value?: string; key?: string; checked: boolean }> = [];

    /** Event emitted when saving languages */
    @Event({ bubbles: true, composed: true }) save: EventEmitter<string[]>;

    /** Event emitted when canceling */
    @Event({ bubbles: true, composed: true }) cancel: EventEmitter<void>;

    componentWillLoad() {
        console.log('Component initialized with locales:', this.locales);

        // Deep copy the array to prevent any reference issues
        this.mutableLocales = this.locales.map(locale => ({ ...locale }));

        console.log('Initialized mutableLocales:', this.mutableLocales);
    }

    private handleCancel() {
        this.cancel.emit(); // Emit the cancel event
    }

    private handleSave() {
        const selectedLanguages = this.mutableLocales
            .filter(locale => locale.checked)
            .map(locale => locale[this.identifierField]); // Use identifierField dynamically
        console.log('Selected languages on Save:', selectedLanguages);
        this.save.emit(selectedLanguages as string[]); // Emit selected languages
    }

    private toggleLocale(identifier: string) {
        console.log('ToggleLocale triggered for identifier:', identifier);

        this.mutableLocales = this.mutableLocales.map(locale => {
            if (locale[this.identifierField] === identifier) {
                return { ...locale, checked: !locale.checked }; // Toggle only the target locale
            }
            return { ...locale }; // Return other locales as is
        });

        console.log('Updated mutableLocales:', this.mutableLocales);
    }

    render() {
        return (
            <div class="locale-filter-panel">
                {this.showHeader && (
                    <header>
                        <ur-button-icon
                            class="close-panel"
                            icon="close"
                            onClick={() => this.handleCancel()}
                        ></ur-button-icon>
                        <label>Filters</label>
                    </header>
                )}
                <main>
                    <div class="description">
                        <div class="title">Content Languages</div>
                        <div class="text">
                            Choose the language you want to see for the stories, pages, and competitions
                        </div>
                    </div>
                    <div class="locales">
                        {this.mutableLocales.map(locale => {
                            const identifier = locale[this.identifierField]; // Dynamically select key or value
                            return (
                                <mdui-checkbox
                                    checked={locale.checked}
                                    value={identifier}
                                    disabled={identifier === 'en'} // Disable the checkbox for 'en'
                                    class={identifier === 'en' ? 'non-selectable' : ''}
                                    onChange={() => {
                                        console.log('Checkbox value changed:', identifier);
                                        this.toggleLocale(identifier as string); // Pass identifier dynamically
                                    }}
                                >
                                    {locale.label}
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
