import { html } from 'lit';
import '../components/ur-button-arrow-left/ur-button-arrow-left';
import '../components/ur-button-arrow-right/ur-button-arrow-right';
import '../components/ur-loader/ur-loader';

export default {
    title: 'Urnovl/Loader',
};

const Loader = () => html`
    <div style="background: #09F; height: 200px;width: 200px;display: flex;align-items:center;justify-content: center;">
        <ur-loader></ur-loader>
    </div>
`;

export const Default = {
    render: () => Loader(),
};
