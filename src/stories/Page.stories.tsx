import { html } from 'lit';
import '../components/ur-page/ur-page';
import { PAGES } from '../data/page';

const Page = ({
    pageTitle,
    pageCover,
    followers,
    showStats,
    pageDescription,
    borderRadius = '8px',
    width = '100%',
}) => html`
    <div style="width:${width}; border-radius:${borderRadius};">
        <ur-page
            page-border-radius: ${borderRadius};
            page-width: ${width};
            page-description="${pageDescription}"
            page-title="${pageTitle}"
            page-cover="${pageCover}"
            followers="${followers}"
            show-stats="${showStats}"
        </ur-page>
    </div>
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
        pageCover: null,
    },
};

export const NoStats = {
    args: PAGES[1],
};

export const SmallDescription = {
    args: PAGES[0],
};

export const BigDescription = {
    args: PAGES[2],
};

export const SmallerWidth = {
    args: {
        ...PAGES[0],
        width: '250px',
    },
};

export const BiggerWidth = {
    args: {
        ...PAGES[0],
        width: '650px',
    },
};

export const BigDescriptionWithBiggerWidth = {
    args: {
        ...PAGES[2],
        width: '650px',
    },
};

export const NoBorderRadius = {
    args: {
        ...PAGES[0],
        novlCover: PAGES[6],
        width: '350px',
        borderRadius: '0px',
    },
};
