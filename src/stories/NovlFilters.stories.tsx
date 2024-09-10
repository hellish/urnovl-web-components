import { html } from "lit";
import '../components/ur-locale-filter-button/ur-locale-filter-button';
import '../components/ur-locale-filter-panel/ur-locale-filter-panel';

const Button = ({
    count = 0
}) => {
    return html`<ur-locale-filter-button count="${count}"></ur-locale-filter-button>`;
}

const Panel = ({
    locales = []
}) => {
    return html`<ur-locale-filter-panel .locales="${locales}"></ur-locale-filter-panel>`;
}

export default {
    title: 'Urnovl/NovlFilters',
};

export const DefaultButton = {
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
        locales: [
            [ 'English', 'en', false ],
            [ 'German', 'de', false ],
            [ 'Greek', 'el', false ],
            [ 'Russian', 'eu', false ],
            [ 'Spanish', 'es', false ],
            [ 'Italian', 'it', false ],
            [ 'French', 'fr', false ],
            [ 'Italian', 'it', false ],
            [ 'Turkish', 'tr', false ],
            [ 'Hindi', 'hi', false ]
        ]
    })
};
