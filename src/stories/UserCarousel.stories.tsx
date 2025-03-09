import { html } from 'lit';
import '../components/ur-user-carousel/ur-user-carousel';
import '../components/ur-button-arrow-left/ur-button-arrow-left';
import '../components/ur-button-arrow-right/ur-button-arrow-right';

import { USERS } from '../data/user';

const UserCarousel = ({
    users,
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
        for (const item of document.getElementsByClassName('user-carousel')) {
            item.addEventListener('userClicked', (event) => {
                alert('user clicked with id ' + event.detail);
            })
        }
    </script>
    <style>
        ur-user-carousel {
            --swiper-slide-width: ${slideWidth};
        }
    </style>
    <div style="width: ${containerWidth}; box-sizing:border-box; background: ${containerBackgroundColor};margin: 0;padding: ${containerPadding};">
        <ur-user-carousel
            class="users-carousel"
            .users="${users}"
            .breakpoints="${breakpoints}"
            .grid="${grid}"
            .navigation="${navigation}"
            slides-per-view="${slidesPerView}"
            space-between="${spaceBetween}"></ur-user-carousel>
    </div>
`;

export default {
    title: 'Urnovl/Business/UserCarousel',
    render: args => UserCarousel(args)
};

export const Default = {
    args: {
        users: USERS,
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
        users: USERS.map((user, index) => {
            if (index === 1 || index === 2) {
                return { ...user, borderRadius: '0' };
            }

            return { ...user };
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
    render: args => UserCarousel(args),
    args: {
        users: USERS,
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
    render: args => UserCarousel(args),
    args: {
        users: USERS,
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
    render: args => UserCarousel(args),
    args: {
        users: USERS.map((user, index) => {
            if (index === 2) {
                return {
                    content: (userIndex) => {
                        return `<div>[ custom content goes here for index ${userIndex} ]</div>`
                    }
                };
            }

            return user;
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
