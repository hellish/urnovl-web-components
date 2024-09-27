import { html } from 'lit';
import '../components/ur-page/ur-page';

import { PAGES } from '../data/page';

const Page = ({
                  pageTitle,
                  pageCover,
                  followers,
                  showStats,
                  pageDescription,
                  borderRadius = '16px 16px 0px 0px',
                  width = '270px',
              }) => html`
    <style>
        ur-page {
            --page-width: ${width};
            --page-border-radius: ${borderRadius};
        }
    </style>
    <ur-page
        page-description="${pageDescription}"
        page-title="${pageTitle}"
        page-cover="${pageCover}"
        followers="${followers}"
        show-stats="${showStats}"
    </ur-page>
`;

export default {
    title: 'Urnovl/Business/Page',
    render: args => Page(args),
};

export const Default = {
    args: PAGES[0],
};

export const BrokenCover = {
    args: {
        ...PAGES[0],
        novlCover: null
    }
};

// export const NoStats = {
//     args: NOVLS[1],
// };
//
// export const SmallDescription = {
//     args: NOVLS[2],
// };
//
// export const WithPrice = {
//     args: NOVLS[3],
// };
//
// export const WithPublisher = {
//     args: NOVLS[4],
// };
//
// export const Full = {
//     args: NOVLS[5],
// };
//
// export const BiggerWidth = {
//     args: {
//         ...NOVLS[6],
//         width: '320px',
//     },
// };
//
// export const FullWithBiggerWidth = {
//     args: {
//         ...NOVLS[7],
//         width: '350px',
//     },
// };
//
// export const NoBorderRadius = {
//     args: {
//         ...NOVLS[7],
//         novlCover: NOVLS[6]['novlCover'],
//         width: '450px',
//         borderRadius: '0',
//     },
// };
