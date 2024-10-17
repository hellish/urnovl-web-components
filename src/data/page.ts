import type { Page } from '../models/page';

export const PAGE_COVER_FALLBACK = 'data:image/webp;base64,UklGRtQAAABXRUJQVlA4TMgAAAAv/8f/EQfQla70pPIBIUHi/+9mIvqf8Z///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7vAQ==';

export const PAGES: Array<Page> = [
    {
        pageTitle: 'Ianos Publishing House',
        pageCover: 'https://urnovl-thanos-dev-test.s3.eu-north-1.amazonaws.com/urnovl-storybook-covers/ianos.jpg',
        followers: 3500,
        showStats: true,
        pageDescription: 'Writing Community',
    },
    {
        pageTitle: 'Ianos Publishing House',
        pageCover: 'https://urnovl-thanos-dev-test.s3.eu-north-1.amazonaws.com/urnovl-storybook-covers/ianos.jpg',
        followers: 3500,
        showStats: false,
        pageDescription: 'Writing Community',
    },
    {
        pageTitle: 'Ianos Publishing House',
        pageCover: 'https://urnovl-thanos-dev-test.s3.eu-north-1.amazonaws.com/urnovl-storybook-covers/ianos.jpg',
        followers: 3500,
        showStats: true,
        pageDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
];
