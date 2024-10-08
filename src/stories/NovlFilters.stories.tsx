import { html } from "lit";
import '../components/ur-locale-filter-button/ur-locale-filter-button';
import '../components/ur-locale-filter-panel/ur-locale-filter-panel';

const LOCALES = [
    ['English', 'en', false],
    ['German', 'de', false],
    ['Greek', 'el', false],
    ['Russian', 'eu', false],
    ['Spanish', 'es', false],
    ['Italian', 'it', false],
    ['French', 'fr', false],
    ['Italian', 'it', false],
    ['Turkish', 'tr', false],
    ['Hindi', 'hi', false]
];

const Button = ({
    count = 0
}) => {
    return html`<ur-locale-filter-button count="${count}"></ur-locale-filter-button>`;
}

const Panel = ({
    showHeader = true,
    showFooter = true,
    locales = []
}) => {
    return html`<ur-locale-filter-panel
        show-footer="${showFooter}"
        show-header="${showHeader}"
        .locales="${locales}">
    </ur-locale-filter-panel>`;
}

export default {
    title: 'Urnovl/Business/NovlFilters',
};

export const Default = {
    render: () => Button({
        count: 0
    })
};

export const ButtonWithSelectedFilters = {
    render: () => Button({
        count: 9
    })
};

export const LocalePanel = {
    render: () => Panel({
        locales: LOCALES
    })
};

export const LocalePanelNoHeader = {
    render: () => Panel({
        showHeader: false,
        locales: LOCALES
    })
};

export const LocalePanelWithNoFooter = {
    render: () => Panel({
        showFooter: false,
        locales: LOCALES
    })
};

export const LocalePanelWithNoHeaderNoFooter = {
    render: () => Panel({
        showHeader: false,
        showFooter: false,
        locales: LOCALES
    })
};
