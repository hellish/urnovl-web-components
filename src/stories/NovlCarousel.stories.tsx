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
        let _novls_ = ${JSON.stringify(NOVLS)};

        function uniq(arr, n) {
            if (n > arr.length) {
                throw new Error("The number of elements to select cannot exceed the array length.");
            }

            // Shuffle the array using the Fisher-Yates shuffle algorithm
            let shuffled = arr.slice(); // Create a copy of the array
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
            }

            // Return the first n elements from the shuffled array
            return shuffled.slice(0, n);
        }

        for (const item of document.getElementsByClassName('novls-carousel')) {
            item.once = false;

            item.addEventListener('progressUpdated', (event) => {
                if (item.once) {
                    return;
                }

                const [progress, slides] = event.detail;

                console.log('progress:updated', progress, slides);

                if (progress > 80) {
                    item.once = true;
                    const newNovls = uniq(_novls_, slides).map(_novl_ => {
                        let uuid = crypto.randomUUID();
                        return { ..._novl_, novlId: uuid };
                    });
                    item.addNovls( newNovls );
                    console.log('new novls added', newNovls);
                }
            })

            item.addEventListener('snapIndexChange', (event) => {
                // console.log('snapIndexChange', event);
            })

            item.addEventListener('slideChange', (event) => {
                // const [beg, end, viewportNovlCount] = event.detail;
                // console.log('slideChange', beg, end, viewportNovlCount, uniq(_novls_, viewportNovlCount));
            })

            item.addEventListener('novlClicked', (event) => {
                console.log('novl clicked', event.detail);
                const _novl_index_ = _novls_.findIndex(_novl_ => _novl_.novlId === event.detail);
                const _novl_ = _novls_[_novl_index_];
                if (_novl_.loading) {
                    while(true) {
                        let _new_novl_ = uniq(_novls_, 1).pop();
                        if (!_new_novl_.loading) {
                            item.updateNovlsByIndex( new Map( [ [_novl_index_, _new_novl_] ] ) );
                            _novls_[_novl_index_] = _new_novl_;
                            break;
                        }
                    }
                }
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
        navigation: true,
        novls: NOVLS.slice(0, 7),
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
