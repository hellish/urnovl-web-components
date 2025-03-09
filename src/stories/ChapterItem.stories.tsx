import { html } from 'lit';
import '../components/ur-chapter-item/ur-chapter-item';

// Define the ChapterItem component in Storybook
const Template = args => html`
    <ur-chapter-item
        .chapterNumber=${args.chapterNumber}
        .chapterTitle=${args.chapterTitle}
        .createdAt=${args.createdAt}
        .readingDuration=${args.readingDuration}
        .likes=${args.likes}
        .views=${args.views}
        .likesText=${args.likesText}
        .viewsText=${args.viewsText}
        .readingDurationText=${args.readingDurationText}
        .isBound=${args.isBound}
        .isCompleted=${args.isCompleted}
        .isOwner=${args.isOwner}
        .isLocked=${args.isLocked}
    ></ur-chapter-item>
`;

export default {
    title: 'urnovl/Business/Chapter Item',
    render: Template,
    argTypes: {
        chapterNumber: {
            control: 'number',
            description: 'Chapter number',
        },
        chapterTitle: {
            control: 'text',
            description: 'Title of the chapter',
        },
        createdAt: {
            control: 'text',
            description: 'Creation date/time',
        },
        readingDuration: {
            control: 'number',
            description: 'Reading duration in minutes',
        },
        likes: {
            control: 'number',
            description: 'Number of likes',
        },
        views: {
            control: 'number',
            description: 'Number of views',
        },
        isBound: {
            control: 'boolean',
            description: 'Whether the chapter is bound',
        },
        isCompleted: {
            control: 'boolean',
            description: 'Whether the chapter is completed',
        },
        likesText: {
            control: 'text',
            description: 'Text for likes',
        },
        viewsText: {
            control: 'text',
            description: 'Text for views',
        },
        isOwner: {
            control: 'boolean',
            description: 'Whether the chapter is owned by the user',
        },
        isLocked: {
            control: 'boolean',
            description: 'Whether the chapter is locked',
        },
    },
};

// Owner View (Not published - can see delete options)
export const OwnerView = {
    args: {
        chapterNumber: 1,
        chapterTitle: 'The Beginning',
        createdAt: 'Jan 15, 2023',
        readingDuration: 5,
        likes: 24,
        views: 3,
        likesText: 'Likes',
        viewsText: 'Views',
        readingDurationText: 'Reading Duration',
        isBound: false,
        isCompleted: false,
        isOwner: true,
        isLocked: false,
    },
};

//Owner and is Locked
export const OwnerLockedView = {
    args: {
        chapterNumber: 1,
        chapterTitle: 'The Beginning',
        createdAt: 'Jan 15, 2023',
        readingDuration: 5,
        likes: 24,
        views: 3,
        likesText: 'Likes',
        viewsText: 'Views',
        readingDurationText: 'Reading Duration',
        isBound: false,
        isCompleted: false,
        isOwner: true,
        isLocked: true,
    },
};

// Non-Owner View (Published - cannot see delete options)
export const NonOwnerView = {
    args: {
        chapterNumber: 1,
        chapterTitle: 'The Beginning',
        createdAt: 'Jan 15, 2023',
        readingDuration: 5,
        likes: 24,
        views: 3,
        likesText: 'Likes',
        viewsText: 'Views',
        readingDurationText: 'Reading Duration',
        isBound: false,
        isCompleted: true,
        isOwner: false,
        isLocked: false,
    },
};

// Locked View (Published - cannot see delete options)
export const NonOwnerLockedView = {
    args: {
        chapterNumber: 1,
        chapterTitle: 'The Beginning',
        createdAt: 'Jan 15, 2023',
        readingDuration: 5,
        likes: 24,
        views: 3,
        likesText: 'Likes',
        viewsText: 'Views',
        readingDurationText: 'Reading Duration',
        isBound: true,
        isCompleted: true,
        isOwner: false,
        isLocked: true,
    },
};
