import { html } from "lit";
import '../components/ur-novl-locale-filter-button/ur-novl-locale-filter-button';

const Button = ({
    count = 0
}) => {
    return html`<ur-novl-locale-filter-button count="${count}"></ur-novl-locale-filter-button>`;
}

export default {
    title: 'Urnovl/NovlFilters',
};

export const Default = {
    render: () => Button({
        count: 0
    })
};

export const WithSelectedFilters = {
    render: () => Button({
        count: 9
    })
};
