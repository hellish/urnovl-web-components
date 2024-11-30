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
    @Prop() locales: Array<{ label: string; key: string; checked: boolean }> = []; // Use key exclusively

    /** Internal state for mutable locales */
    @State() mutableLocales: Array<{ label: string; key: string; checked: boolean }> = [];

    /** Event emitted when saving languages */
    @Event({ bubbles: true, composed: true }) save: EventEmitter<string[]>;

    /** Event emitted when canceling */
    @Event({ bubbles: true, composed: true }) cancel: EventEmitter<void>;

    componentWillLoad() {
        console.log('Component initialized with locales:', this.locales);

        // Deep copy the array
        this.mutableLocales = this.locales.map(locale => {
            if (!locale.key) {
                console.error('Locale is missing key:', locale);
            }
            return { ...locale };
        });

        console.log('Initialized mutableLocales:', this.mutableLocales);
    }

    private handleCancel() {
        this.cancel.emit(); // Emit the cancel event
    }

    private handleSave() {
        const selectedLanguages = this.mutableLocales
            .filter(locale => locale.checked)
            .map(locale => locale.key); // Use key as the identifier
        console.log('Selected languages on Save:', selectedLanguages);
        this.save.emit(selectedLanguages); // Emit selected languages
    }

    private toggleLocale(key: string) {
        console.log('ToggleLocale triggered for key:', key);

        this.mutableLocales = this.mutableLocales.map(locale => {
            if (locale.key === key) {
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
                            if (!locale.key) {
                                console.error('Skipping locale with missing key:', locale);
                                return null; // Skip rendering if key is missing
                            }
                            return (
                                <mdui-checkbox
                                    checked={locale.checked}
                                    value={locale.key} // Use key exclusively
                                    disabled={locale.key === 'en'} // Disable 'en' dynamically
                                    class={locale.key === 'en' ? 'non-selectable' : ''}
                                    onChange={(event: Event) => {
                                        const checkbox = event.target as HTMLInputElement;
                                        console.log('Checkbox value changed:', checkbox.value);
                                        this.toggleLocale(checkbox.value);
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
