import { html } from 'lit';
import '../components/ur-novl-carousel/ur-novl-carousel';

import { NOVLS } from '../data/novls';

const NovlCarousel = ({ novls, breakpoints, grid, slidesPerView, spaceBetween, width = '100%' }) => html`
  <div style="width: ${width}; box-sizing:border-box; background: #efefef;margin: 0;padding: 20px;">
    <ur-novl-carousel
        .novls="${novls}"
        .breakpoints="${breakpoints}"
        .grid="${grid}"
        slides-per-view="${slidesPerView}"
        space-between="${spaceBetween}"></ur-novl-carousel>
  </div>
`;

export default {
    title: 'Urnovl/NovlCarousel',
    render: args => NovlCarousel(args)
};

export const Default = {
    args: {
        novls: NOVLS,
        breakpoints: {},
        grid: {},
        slidesPerView: 1,
        spaceBetween: 10,
        width: '700px', // container width
    },
};

export const TwoRowsGrid = {
    args: {
        novls: NOVLS.map((novl, index) => {
            if (index === 1 || index === 6) {
                novl.borderRadius = '0'
            }

            return novl;
        }),
        breakpoints: {},
        grid: {
            rows: 2,
            fill: 'row'
        },
        slidesPerView: 3,
        spaceBetween: 10,
        width: '700px', // container width
    },
};
