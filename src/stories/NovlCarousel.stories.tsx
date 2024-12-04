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
    navigation = false,
    slideWidth = '100%',
    containerWidth = '100%',
    containerPadding = '20px',
    containerBackgroundColor = '#efefef',
}) => html`
    <script>
        for (const item of document.getElementsByClassName('novls-carousel')) {
            item.addEventListener('novlClicked', (event) => {
                alert('novl clicked with id ' + event.detail);
            })
        }
    </script>
    <style>
        ur-novl-carousel {
            --swiper-slide-width: ${slideWidth};
        }
    </style>
    <div style="width: ${containerWidth}; box-sizing:border-box; background: ${containerBackgroundColor};margin: 0;padding: ${containerPadding};">
        <ur-novl-carousel
            class="novls-carousel"
            .novls="${novls}"
            .breakpoints="${breakpoints}"
            .grid="${grid}"
            .navigation="${navigation}"
            slides-per-view="${slidesPerView}"
            space-between="${spaceBetween}"></ur-novl-carousel>
    </div>
`;

export default {
    title: 'Urnovl/Business/NovlCarousel',
    render: args => NovlCarousel(args)
};

export const Default = {
    args: {
        novls: NOVLS,
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
        novls: NOVLS.map((novl, index) => {
            if (index === 1 || index === 2) {
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
        spaceBetween: 8,
        // container styles
        containerWidth: '700px',
        containerBackgroundColor: 'transparent',
    },
};

export const SneakPeek = {
    render: args => NovlCarousel(args),
    args: {
        novls: NOVLS,
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
    render: args => NovlCarousel(args),
    args: {
        novls: NOVLS,
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
    render: args => NovlCarousel(args),
    args: {
        novls: NOVLS.map((novl, index) => {
            if (index === 2) {
                return {
                    content: (novlIndex) => {
                        return `<div>[ custom content goes here for index ${novlIndex} ]</div>`
                    }
                };
            }

            return novl;
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
