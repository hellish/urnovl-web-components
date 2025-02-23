import { html } from 'lit';
import '../components/ur-page-carousel/ur-page-carousel';
import '../components/ur-button-arrow-left/ur-button-arrow-left';
import '../components/ur-button-arrow-right/ur-button-arrow-right';

import { PAGES } from '../data/page';

const PageCarousel = ({
    pages,
    breakpoints,
    grid,
    slidesPerView,
    spaceBetween,
    navigation = false,
    slideWidth = '100%',
    containerWidth = '100%',
    containerPadding = '20px',
    containerBackgroundColor = '#efefef',
}) => html`
    <style>
        ur-page-carousel {
            --swiper-slide-width: ${slideWidth};
        }
    </style>
    <div style="width: ${containerWidth}; box-sizing:border-box; background: ${containerBackgroundColor};margin: 0;padding: ${containerPadding};">
        <ur-page-carousel
            class="pages-carousel"
            .pages="${pages}"
            .breakpoints="${breakpoints}"
            .grid="${grid}"
            .navigation="${navigation}"
            slides-per-view="${slidesPerView}"
            space-between="${spaceBetween}"></ur-page-carousel>
        <button id="reset-carousel" onclick="reset()">reset</button>
    </div>
`;

export default {
    title: 'Urnovl/Business/PageCarousel',
    render: args => PageCarousel(args)
};

export const Default = {
    args: {
        pages: PAGES,
        breakpoints: {},
        grid: {},
        slidesPerView: 6,
        spaceBetween: 8,
        // container styles
        containerWidth: '100%',
        containerBackgroundColor: 'transparent',
    },
};

export const TwoRowsGrid = {
    args: {
        pages: PAGES.map((page, index) => {
            if (index === 1 || index === 2) {
                return { ...page, borderRadius: '0' };
            }

            return { ...page };
        }),
        breakpoints: {},
        grid: {
            rows: 2,
            fill: 'row'
        },
        slidesPerView: 3,
        spaceBetween: 8,
        // container styles
        containerWidth: '700px',
        containerBackgroundColor: 'transparent',
    },
};

export const SneakPeek = {
    render: args => PageCarousel(args),
    args: {
        pages: PAGES,
        breakpoints: {
            2075: {
                slidesPerView: 'auto',
                spaceBetween: 8
            },
            1700: {
                slidesPerView: 'auto',
                spaceBetween: 8
            },
            1420: {
                slidesPerView: 'auto',
                spaceBetween: 8
            },
            1090: {
                slidesPerView: 'auto',
                spaceBetween: 8
            },
            321: {
                slidesPerView: 'auto',
                spaceBetween: 4
            },
            0: {
                slidesPerView: 'auto',
                spaceBetween: 4
            }
        },
        grid: {
            rows: 1,
            fill: 'row'
        },
        slidesPerView: 'auto',
        spaceBetween: 4,
        // container styles
        //slideWidth: '80%',
        containerWidth: '100%',
        containerBackgroundColor: 'transparent',
    },
};

export const FullWithArrows = {
    render: args => PageCarousel(args),
    args: {
        pages: PAGES,
        breakpoints: {
            2075: {
                slidesPerView: 'auto',
                spaceBetween: 8
            },
            1700: {
                slidesPerView: 'auto',
                spaceBetween: 8
            },
            1420: {
                slidesPerView: 'auto',
                spaceBetween: 8
            },
            1090: {
                slidesPerView: 'auto',
                spaceBetween: 8
            },
            321: {
                slidesPerView: 'auto',
                spaceBetween: 4
            },
            0: {
                slidesPerView: 'auto',
                spaceBetween: 4
            }
        },
        grid: {
            rows: 1,
            fill: 'row'
        },
        //slidesPerView: 'auto',
        //spaceBetween: 8,
        navigation: true,
        // container styles
        containerWidth: '100%',
        containerBackgroundColor: 'transparent',
    },
};

export const CustomSlide = {
    render: args => PageCarousel(args),
    args: {
        pages: PAGES.map((page, index) => {
            if (index === 2) {
                return {
                    content: (pageIndex) => {
                        return `<div>[ custom content goes here for index ${pageIndex} ]</div>`
                    }
                };
            }

            return page;
        }),
        breakpoints: {
            2075: {
                slidesPerView: 'auto',
                spaceBetween: 8
            },
            1700: {
                slidesPerView: 'auto',
                spaceBetween: 8
            },
            1420: {
                slidesPerView: 'auto',
                spaceBetween: 8
            },
            1090: {
                slidesPerView: 'auto',
                spaceBetween: 8
            },
            321: {
                slidesPerView: 'auto',
                spaceBetween: 4
            },
            0: {
                slidesPerView: 'auto',
                spaceBetween: 4
            }
        },
        grid: {
            rows: 1,
            fill: 'row'
        },
        //slidesPerView: 'auto',
        //spaceBetween: 8,
        navigation: true,
        // container styles
        containerWidth: '100%',
        containerBackgroundColor: 'transparent',
    },
};
