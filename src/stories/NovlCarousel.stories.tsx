import { html } from 'lit';
import '../components/ur-novl-carousel/ur-novl-carousel';

import { NOVLS } from '../data/novls';

const NovlCarousel = ({ novls, width = '100%' }) => html`
  <div style="width: ${width}; box-sizing:border-box;">
    <ur-novl-carousel .novls="${novls}"></ur-novl-carousel>
  </div>
`;

export default {
    title: 'Urnovl/NovlCarousel',
    render: args => NovlCarousel(args)
};

export const Default = {
    args: {
        novls: NOVLS,
        width: '700px'
    },
};
