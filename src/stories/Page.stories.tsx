import { html } from 'lit';
import '../components/ur-page/ur-page';
import { PAGES } from '../data/page';

const Page = ({
    pageId,
    pageTitle,
    pageCover,
    followers,
    showStats,
    pageDescription,
    borderRadius = '8px',
    width,
    loading = false,
}) => html`
    <style>
        ur-page {
            --page-width: ${width};
            --page-border-radius: ${borderRadius};
        }
    </style>
    <ur-page
        page-id="${pageId}"
        page-description="${pageDescription}"
        page-title="${pageTitle}"
        page-cover="${pageCover}"
        followers="${followers}"
        show-stats="${showStats}"
        loading=${loading}
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
        pageCover: PAGES[0]['pageCover'],
        width: '100%',
        borderRadius: '0',
    },
};

export const LoadingData = {
    args: {
        ...PAGES[2],
        loading: true,
        width: '300px'
    }
};
