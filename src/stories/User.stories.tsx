import { html } from 'lit';
import '../components/ur-user/ur-user';

import { USERS } from '../data/user';

const User = ({
                  userTitle,
                  userCover,
                  followers,
                  showStats,
                  userDescription,
                  borderRadius = '16px 16px 0px 0px',
                  width = '270px',
              }) => html`
    <style>
        ur-user {
            --user-width: ${width};
            --user-border-radius: ${borderRadius};
        }
    </style>
    <ur-user
        user-description="${userDescription}"
        user-title="${userTitle}"
        user-cover="${userCover}"
        followers="${followers}"
        show-stats="${showStats}"
    </ur-user>
`;

export default {
    title: 'Urnovl/Business/User',
    render: args => User(args),
};

export const Default = {
    args: USERS[0],
};

export const BrokenCover = {
    args: {
        ...USERS[0],
        userCover: null
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
