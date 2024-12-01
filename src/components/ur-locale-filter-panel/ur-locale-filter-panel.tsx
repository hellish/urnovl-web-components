import { Component, Event, EventEmitter, Prop, h, State } from '@stencil/core';
import { dev_log_info } from '../../utils/utils';
import { Locale } from '../../models/locale';

import 'mdui/components/button';
import 'mdui/components/checkbox';

@Component({
    tag: 'ur-locale-filter-panel',
    styleUrl: 'ur-locale-filter-panel.css',
    shadow: true,
})
export class UrLocaleFilterPanel {

    /** Whether to show the header */
    @Prop()
    showHeader = true;

    /** Whether to show the footer */
    @Prop()
    showFooter = true;

    /** List of available languages */
    @Prop()
    locales: Array<Locale> = []; // Use key exclusively

    @Prop()
    disabledLocales = [ 'en' ];

    /** Internal state for mutable locales */
    @State()
    mutableLocales: Array<Locale> = [];

    /** Event emitted when saving languages */
    @Event()
    save: EventEmitter<Array<Locale>>;

    /** Event emitted when canceling */
    @Event()
    cancel: EventEmitter<void>;

    componentWillLoad() {
        dev_log_info('Component initialized with locales:', this.locales);
        this.mutableLocales = [...this.locales];
        dev_log_info('Initialized mutableLocales:', this.mutableLocales);
    }

    private handleCancel() {
        this.cancel.emit(); // Emit the cancel event
    }

    private handleSave() {
        this.save.emit(this.mutableLocales);
    }

    private toggleLocale(key: string) {
        dev_log_info('ToggleLocale triggered for key:', key);

        this.mutableLocales = this.mutableLocales.map(locale => {
            if (locale.key === key) {
                return { ...locale, checked: !locale.checked }; // Toggle only the target locale
            }

            return { ...locale }; // Return other locales as is
        });

        dev_log_info('Updated mutableLocales:', this.mutableLocales);
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
                            return (
                                <mdui-checkbox
                                    checked={locale.checked}
                                    value={locale.key} // Use key exclusively
                                    disabled={this.disabledLocales.includes(locale.key)} // Disable 'en' dynamically
                                    class={this.disabledLocales.includes(locale.key) ? 'non-selectable' : ''}
                                    onChange={(event: Event) => {
                                        const checkbox = event.target as HTMLInputElement;
                                        dev_log_info('Checkbox value changed:', checkbox.value);
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
