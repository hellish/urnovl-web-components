import { html } from 'lit';
import '../components/ur-novl-summary/ur-novl-summary';
import '../components/ur-profile-card/ur-profile-card';
import '../components/ur-long-description/ur-long-description';

// Define the NovlSummary component in Storybook
const Template = args => html`
    <ur-novl-summary
        .novlTitle=${args.novlTitle}
        .storyCompleteStatus=${args.storyCompleteStatus}
        .writeEnabled=${args.writeEnabled}
        .novlPaid=${args.novlPaid}
        .novlPurchasedAt=${args.novlPurchasedAt}
        .novlPrice=${args.novlPrice}
        .likes=${args.likes}
        .views=${args.views}
        .readingDuration=${args.readingDuration}
        .languages=${args.languages}
        .genres=${args.genres}
        .literatureTypes=${args.literatureTypes}
        .coverImage=${args.coverImage}
        .hasBranches=${args.hasBranches}
        .ownerAvatar=${args.ownerAvatar}
        .ownerName=${args.ownerName}
        .isUserLoggedIn=${args.isUserLoggedIn}
        .isNovlLibrary=${args.isNovlLibrary}
    >
        <ur-long-description slot="description" .description=${args.longDescription}></ur-long-description>
        <ur-profile-card 
            slot="owner"
            type="user"
            .avatarSrc=${args.ownerAvatar}
            avatarSize="32px"
            name="Tasos Tsipidis"
            profileType="user"
            .showDescription=${false}
        ></ur-profile-card>
        <ur-profile-card 
            slot="owner-page"
            type="page"
            .avatarSrc=${args.ownerAvatar}
            avatarSize="32px"
            name="Penguin Publishing"
            profileType="page"
            .showDescription=${false}
        ></ur-profile-card>
    </ur-novl-summary>
`;

export default {
    title: 'urnovl/Business/Novl Summary',
    render: Template,
    argTypes: {
        novlTitle: {
            control: 'text',
            description: 'The title of the novel',
        },
        storyCompleteStatus: {
            control: 'boolean',
            description: 'Whether the story is complete',
        },
        writeEnabled: {
            control: 'boolean',
            description: 'Whether the user can write a chapter',
        },
        novlPaid: {
            control: 'boolean',
            description: 'Whether the story is paid',
        },
        novlPurchasedAt: {
            control: 'date',
            description: 'Date when the story was purchased',
        },
        ownerAvatar: {
            control: 'text',
            description: 'Avatar of the owner',
        },
        ownerName: {
            control: 'text',
            description: 'Name of the owner',
        },
        novlPrice: {
            control: 'text',
            description: 'Price of the novel',
        },
        longDescription: {
            control: 'text',
            description: 'Long description of the novel',
        },
        likes: {
            control: 'number',
            description: 'Number of likes',
        },
        views: {
            control: 'number',
            description: 'Number of views',
        },
        readingDuration: {
            control: 'text',
            description: 'Estimated reading duration',
        },
        languages: {
            control: 'text',
            description: 'Languages the novel is available in',
        },
        genres: {
            control: 'text',
            description: 'Genres of the novel',
        },
        literatureTypes: {
            control: 'text',
            description: 'Type of literature',
        },
        coverImage: {
            control: 'text',
            description: 'URL of the cover image',
        },
        hasBranches: {
            control: 'boolean',
            description: 'Whether the novel has branches',
        },
        isUserLoggedIn: {
            control: 'boolean',
            description: 'Whether the user is logged in',
        },
        isNovlLibrary: {
            control: 'boolean',
            description: 'Whether the novel is in the user\'s library',
        },
    },
};

// Default story
export const Default = {
    args: {
        novlTitle: 'My First Novel',
        storyCompleteStatus: false,
        writeEnabled: false,
        novlPaid: false,
        novlPurchasedAt: '',
        novlPrice: '50€',
        longDescription: 'This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.',
        likes: 0,
        views: 0,
        readingDuration: '1min',
        languages: 'English',
        genres: 'Action, Adventure',
        literatureTypes: 'Novel',
        coverImage: 'https://picsum.photos/200/300',
        hasBranches: true,
        isUserLoggedIn: true,
        isNovlLibrary: false,
    },
};

// Owner writing a chapter
export const OwnerWritingChapter = {
    args: {
        ...Default.args,
        likes: 100,
        views: 100,
        readingDuration: '1min',
        languages: 'English',
        genres: 'Action, Adventure',
        literatureTypes: 'Novel',
        writeEnabled: true,
        hasBranches: false,
        isUserLoggedIn: true,
        isNovlLibrary: true,
    },
};

// Owner writing a chapter
export const NotOwnerNoContent = {
    args: {
        ...Default.args,
        novlTitle: 'My First Novel',
        likes: 7,
        views: 100,
        readingDuration: '-1',
        languages: 'English',
        genres: 'Action, Adventure',
        literatureTypes: 'Novel',
        writeEnabled: false,
        hasBranches: false,
    },
};

// Story is complete
export const StoryComplete = {
    args: {
        ...Default.args,
        likes: 4,
        views: 1750,
        readingDuration: '3hours 5min',
        novlTitle: 'Interstellar',
        storyCompleteStatus: true,
    },
};

// Paid story, not purchased
export const PaidStoryNotPurchased = {
    args: {
        ...Default.args,
        likes:1293,
        views: 1293,
        readingDuration: '4 hours',
        storyCompleteStatus: true,
        novlTitle: 'The lord of the rings',
        novlPaid: true,
        novlPurchasedAt: '',
    },
};

// Paid story, purchased
export const PaidStoryPurchased = {
    args: {
        ...Default.args,
        storyCompleteStatus: true,
        novlTitle: 'The fellowship of the ring',
        novlPaid: true,
        novlPurchasedAt: new Date().toISOString(),
    },
};