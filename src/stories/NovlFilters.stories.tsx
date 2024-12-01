import { html } from 'lit';
import '../components/ur-locale-filter-button/ur-locale-filter-button';
import '../components/ur-locale-filter-panel/ur-locale-filter-panel';

const LOCALES = [
    { label: 'English', value: 'en', checked: false },
    { label: 'German', value: 'de', checked: false },
    { label: 'Greek', value: 'el', checked: false },
    { label: 'Russian', value: 'eu', checked: false },
    { label: 'Spanish', value: 'es', checked: false },
    { label: 'Italian', value: 'it', checked: false },
    { label: 'French', value: 'fr', checked: false },
    { label: 'Turkish', value: 'tr', checked: false },
    { label: 'Hindi', value: 'hi', checked: false },
];

const Button = ({ count = 0 }) => {
    return html`<ur-locale-filter-button count="${count}"></ur-locale-filter-button>`;
};

const Panel = ({ showHeader = true, showFooter = true, locales = [] }) => {
    return html`
        <ur-locale-filter-panel
            show-header="${showHeader}"
            show-footer="${showFooter}"
            .locales="${locales}"
        >
        </ur-locale-filter-panel>
    `;
};

export default {
    title: 'Urnovl/Business/NovlFilters',
};

export const DefaultButton = {
    render: () => Button({ count: 0 }),
};

export const ButtonWithSelectedFilters = {
    render: () => Button({ count: 5 }), // Example count for selected filters
};

export const LocalePanel = {
    render: () => Panel({ locales: LOCALES }),
};

export const LocalePanelNoHeader = {
    render: () => Panel({ showHeader: false, locales: LOCALES }),
};

export const LocalePanelNoFooter = {
    render: () => Panel({ showFooter: false, locales: LOCALES }),
};

export const LocalePanelNoHeaderNoFooter = {
    render: () => Panel({
        showHeader: false,
        showFooter: false,
        locales: LOCALES,
    }),
};

export const LocalePanelWithPreselectedLanguages = {
    render: () => Panel({
        locales: LOCALES.map(locale =>
            locale.value === 'en' || locale.value === 'de'
                ? { ...locale, checked: true }
                : locale
        ),
    }),
};
