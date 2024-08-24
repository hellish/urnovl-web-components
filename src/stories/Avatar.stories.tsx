import { html } from 'lit';
import '../components/ur-button-arrow-left/ur-button-arrow-left';
import '../components/ur-button-arrow-right/ur-button-arrow-right';
import '../components/ur-avatar/ur-avatar';

import avatar from '../../assets/images/avatar.svg';
import publisher from '../../assets/images/publisher.svg';

export default {
    title: 'Urnovl/Avatar',
};

const Avatar = ({
    width = '35px',
    border = '0',
    name = undefined,
    radius = '50%',
    src = avatar
}) => html`
    <div style="background: #09F; height: 200px;width: 200px;display: flex;align-items:center;justify-content: center;">
        <ur-avatar size=${width} border=${border} name=${name} src="${src}" radius=${radius}></ur-avatar>
    </div>
`;

export const Default = {
    render: () => Avatar({
        width: '32px'
    }),
};

export const Bigger = {
    render: () => Avatar({
        width: '96px'
    }),
};

export const WithBorder = {
    render: () => Avatar({
        width: '96px',
        border: '5px',
    }),
};

export const CustomImageWithLessRadius = {
    render: () => Avatar({
        width: '96px',
        border: '5px',
        name: 'Penguin Publishing',
        radius: '25px',
        src: publisher,
    }),
};

export const FullWithName = {
    render: () => Avatar({
        width: '96px',
        border: '5px',
        name: 'John Smith'
    }),
};
