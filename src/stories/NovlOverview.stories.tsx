import { html } from 'lit';
import '../components/ur-novl-overview-info/ur-novl-overview-info';
import '../components/ur-profile-card/ur-profile-card';
import '../components/ur-long-description/ur-long-description';
import '../components/ur-chapter-item/ur-chapter-item';
import '../components/ur-text-field/ur-text-field';
import '../components/ur-button/ur-button';

// Define the NovlSummary component in Storybook
const Template = args => html`
    <ur-novl-overview-info
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
        .deviceSize=${args.deviceSize}
        .isOwner=${args.isOwner}
        .visibility=${args.visibility}
        .visibilityPublicText=${args.visibilityPublicText}
        .visibilityPrivateText=${args.visibilityPrivateText}
        .showPublishedButton=${args.showPublishedButton}
        .completeStoryText=${args.completeStoryText}
        .revertStoryText=${args.revertStoryText}
        .showCompleteActions=${args.showCompleteActions}
        .showPublishButton=${args.showPublishButton}
        .editTitleMode=${args.editTitleMode}
        .editDescriptionMode=${args.editDescriptionMode}
        .isUserLoggedIn=${args.isUserLoggedIn}
        .isNovlLibrary=${args.isNovlLibrary}
        .addToLibraryText=${args.addToLibraryText}
        .removeFromLibraryText=${args.removeFromLibraryText}
    >
        <div class="title-edit" slot="title-edit">
            EDITING MODE FOR TITLE
        </div>
        <ur-long-description slot="description" .description=${args.longDescription}></ur-long-description>
        <div class="description-edit" slot="description-edit">
            EDITING MODE FOR DESCRIPTION
        </div>
        <ur-profile-card
            slot="owner"
            type="user"
            .avatarSrc=${args.ownerUserAvatar}
            .avatarSize=${args.avatarSizeUser}
            .name=${args.ownerNameUser}
            .profileType=${args.userType}
            .showDescription=${false}
            .hideFollowActions=${true}
        ></ur-profile-card>
        <ur-profile-card
            slot="owner-page"
            .profileType=${args.pageType}
            .avatarSrc=${args.ownerPageAvatar}
            .avatarSize=${args.avatarSizePage}
            .name=${args.ownerNamePage}
            .showDescription=${false}
            .hideFollowActions=${true}
        ></ur-profile-card>
    </ur-novl-overview-info>
`;

export default {
    title: 'urnovl/Business/Novl Overview',
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
        deviceSize: {
            control: 'select',
            description: 'Size of the device',
            options: ['large', 'small'],
        },
        avatarSizeUser: {
            control: 'text',
            description: 'Size of the user avatar',
        },
        avatarSizePage: {
            control: 'text',
            description: 'Size of the page avatar',
        },
        userType: {
            control: 'text',
            description: 'Type user',
        },
        pageType: {
            control: 'text',
            description: 'Type page',
        },
        ownerNameUser: {
            control: 'text',
            description: 'Name of the user',
        },
        ownerNamePage: {
            control: 'text',
            description: 'Name of the page',
        },
        ownerUserAvatar: {
            control: 'text',
            description: 'Avatar of the user',
        },
        ownerPageAvatar: {
            control: 'text',
            description: 'Avatar of the page',
        },
        chapterTitle: {
            control: 'text',
            description: 'Title of the chapter',
        },
        chapterNumber: {
            control: 'number',
            description: 'Number of the chapter',
        },
        visibility: {
            control: 'text',
            description: 'Visibility of the novel',
        },
        visibilityPublicText: {
            control: 'text',
            description: 'Text of the public visibility',
        },
        visibilityPrivateText: {
            control: 'text',
            description: 'Text of the private visibility',
        },
        showPublishedButton: {
            control: 'boolean',
            description: 'Whether the published button is shown',
        },
        completeStoryText: {
            control: 'text',
            description: 'Text of the complete story button',
        },
        revertStoryText: {
            control: 'text',
            description: 'Text of the revert story button',
        },
        showCompleteActions: {
            control: 'boolean',
            description: 'Whether the complete actions are shown',
        },
        showPublishButton: {
            control: 'boolean',
            description: 'Whether the publish button is shown',
        },
        editTitleMode: {
            control: 'boolean',
            description: 'Whether the edit title mode is shown',
        },
        editDescriptionMode: {
            control: 'boolean',
            description: 'Whether the edit description mode is shown',
        },
        isUserLoggedIn: {
            control: 'boolean',
            description: 'Whether the user is logged in',
        },
        isNovlLibrary: {
            control: 'boolean',
            description: 'Whether the novel is in the user\'s library',
        },
        addToLibraryText: {
            control: 'text',
            description: 'Text of the add to library button',
        },
        removeFromLibraryText: {
            control: 'text',
            description: 'Text of the remove from library button',
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
        longDescription:
            'This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.This is a long description that will expand when clicked. It can contain a lot of text, and when expanded, it will show the full content. Click again to collapse it back to a shorter version.',
        likes: 150,
        views: 1500,
        readingDuration: '1min',
        languages: 'English',
        genres: 'Action, Adventure',
        literatureTypes: 'Novel',
        coverImage: 'https://picsum.photos/200/300',
        hasBranches: true,
        deviceSize: 'large',
        avatarSizeUser: '40px',
        avatarSizePage: '40px',
        userType: 'user',
        pageType: 'page',
        ownerNameUser: 'Tasos Tsipidis',
        ownerNamePage: 'Penguin Publishing',
        ownerUserAvatar: 'https://picsum.photos/200/300',
        ownerPageAvatar: 'https://picsum.photos/200/302',
        chapterTitle: 'Chapter 1',
        chapterNumber: 1,
        isOwner: false,
        visibility: 'public',
        visibilityPublicText: 'Public story',
        visibilityPrivateText: 'Private story',
        showPublishedButton: true,
        completeStoryText: 'Complete story',
        revertStoryText: 'Revert to ongoing',
        showCompleteActions: true,
        isUserLoggedIn: false,
        isNovlLibrary: false,
        addToLibraryText: 'Add to Library',
        removeFromLibraryText: 'Remove from Library',
    },
};

// Owner
export const OwnerNotCompleted = {
    args: {
        ...Default.args,
        isOwner: true,
        isUserLoggedIn: true,
        isNovlLibrary: false,
    },
};

export const OwnerCompleted = {
    args: {
        ...Default.args,
        isOwner: true,
        storyCompleteStatus: true,
        isUserLoggedIn: true,
        isNovlLibrary: true,
    },
};

export const OwnerCompletedNotSealed = {
    args: {
        ...Default.args,
        isOwner: true,
        storyCompleteStatus: false,
        showPublishedButton: false,
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
        likes: 1293,
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

// Small device
export const SmallDevice = {
    args: {
        ...Default.args,
        deviceSize: 'small',
        isUserLoggedIn: true,
        isNovlLibrary: true,
    },
};

// Small device & owner
export const SmallDeviceOwner = {
    args: {
        ...Default.args,
        deviceSize: 'small',
        isOwner: true,
    },
};
