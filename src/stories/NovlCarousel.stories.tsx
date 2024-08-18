import { html } from 'lit';
import '../components/ur-novl-carousel/ur-novl-carousel';
import '../components/ur-button-arrow-left/ur-button-arrow-left';
import '../components/ur-button-arrow-right/ur-button-arrow-right';

import { NOVLS } from '../data/novls';

const NovlCarousel = ({
    novls,
    breakpoints,
    grid,
    slidesPerView,
    spaceBetween,
    slideWidth = '100%',
    containerWidth = '100%',
    containerPadding = '20px',
    containerBackgroundColor = '#efefef',
}) => html`
    <style>
        ur-novl-carousel {
            --swiper-slide-width: ${slideWidth};
        }
    </style>
    <div style="width: ${containerWidth}; box-sizing:border-box; background: ${containerBackgroundColor};margin: 0;padding: ${containerPadding};">
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
        // container styles
        containerWidth: '700px',
    },
};

export const TwoRowsGrid = {
    args: {
        novls: NOVLS.map((novl, index) => {
            if (index === 1 || index === 6) {
                return { ...novl, borderRadius: '0' };
            }

            return { ...novl };
        }),
        breakpoints: {},
        grid: {
            rows: 2,
            fill: 'row'
        },
        slidesPerView: 3,
        spaceBetween: 10,
        // container styles
        containerWidth: '700px',
    },
};

export const SneakPeek = {
    render: args => NovlCarousel(args),
    args: {
        novls: NOVLS,
        breakpoints: {},
        grid: {
            rows: 1,
            fill: 'row'
        },
        slidesPerView: 'auto',
        spaceBetween: 10,
        // container styles
        slideWidth: '80%',
        containerWidth: '700px',
    },
};

export const SneakPeekWithSmallerNovl = {
    render: args => NovlCarousel(args),
    args: {
        novls: NOVLS,
        breakpoints: {},
        grid: {
            rows: 1,
            fill: 'row'
        },
        slidesPerView: 'auto',
        spaceBetween: 10,
        // container styles
        slideWidth: '250px',
        containerWidth: '700px',
    },
};

export const FullWithArrows = {
    render: args => NovlCarousel(args),
    args: {
        novls: NOVLS,
        breakpoints: {},
        grid: {
            rows: 1,
            fill: 'row'
        },
        slidesPerView: '3',
        spaceBetween: 18,
        // container styles
        slideWidth: '336px',
        containerWidth: '1044px',
        containerPadding: '30px',
        containerBackgroundColor: 'transparent'
    },
};
