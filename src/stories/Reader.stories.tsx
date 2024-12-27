import { html } from 'lit';
import '../components/ur-reader/ur-reader'; // Adjust the path as necessary
import '../components/ur-read-rail-desktop/ur-read-rail-desktop'; // Adjust path for rail

const Template = args => html`
    <div class="total-page-holder" style="display: flex; justify-content: center;">
        <ur-reader
            story-title="${args.storyTitle}"
            chapter-title="${args.chapterTitle}"
            chapter-content="${args.chapterContent}"
            font-size="${args.fontSize}"
            font-type="${args.fontType}"
            ?loading="${args.loading}"
            ?chapter-locked="${args.chapterLocked}"
            chapter-sequence="${args.chapterSequence}"
            ?has-previous-chapter="${args.hasPreviousChapter}"
            ?has-next-chapter="${args.hasNextChapter}"
            ?is-visible="${args.isVisible}"
        >
            <ur-read-rail-desktop
                slot="ur-read-rail-slot" 
                avatar-src="${args.avatarSrc}"
                avatar-name="${args.avatarName}"
                likes="${args.likes}"
                dislike="${args.dislike}"
                comments="${args.comments}"
                donate="${args.donate}"
                share="${args.share}"
                ?is-visible="${args.isVisible}"
                ?is-host-small="${args.isHostSmall}"
                @likeClicked="${args.onLikeClicked}"
                @dislikeClicked="${args.onDislikeClicked}"
                @commentClicked="${args.onCommentClicked}"
                @donateClicked="${args.onDonateClicked}"
                @shareClicked="${args.onShareClicked}"
                @followClicked="${args.onFollowClicked}"
                @viewProfileClicked="${args.onViewProfileClicked}"
            ></ur-read-rail-desktop>
        </ur-reader>
    </div>
`;

export default {
    title: 'urnovl/Business/Reader',
    render: Template,
    argTypes: {
        storyTitle: {
            control: 'text',
            description: 'Title of the story',
        },
        chapterTitle: {
            control: 'text',
            description: 'Title of the chapter',
        },
        chapterContent: {
            control: 'text',
            description: 'Content of the chapter (HTML-supported)',
        },
        fontSize: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Font size for the chapter content, title, and subtitle',
        },
        fontType: {
            control: 'select',
            options: ['serif', 'sans-serif', 'monospace', 'system'],
            description: 'Font type for the chapter content, title, and subtitle',
        },
        loading: {
            control: 'boolean',
            description: 'Whether the reader is in a loading state',
        },
        chapterLocked: {
            control: 'boolean',
            description: 'Whether the chapter is locked and requires unlocking',
        },
        chapterSequence: {
            control: 'number',
            description: 'Sequence number of the chapter to determine if story title is shown',
        },
        avatarSrc: {
            control: 'text',
            description: 'Avatar image source',
            defaultValue: 'https://i.pravatar.cc/150?img=3',
        },
        avatarName: {
            control: 'text',
            description: 'Avatar name',
            defaultValue: 'Jane Doe',
        },
        likes: {
            control: 'text',
            description: 'Number of likes',
            defaultValue: '1.5k',
        },
        dislike: {
            control: 'text',
            description: 'Dislike text',
            defaultValue: 'Dislike',
        },
        comments: {
            control: 'number',
            description: 'Number of comments',
            defaultValue: 15,
        },
        donate: {
            control: 'text',
            description: 'Donate text',
            defaultValue: 'Donate',
        },
        share: {
            control: 'text',
            description: 'Share text',
            defaultValue: 'Share',
        },
        isVisible: { 
            control: 'boolean', 
            description: 'Controls the visibility of the read rail', 
            defaultValue: true 
        },
        isHostSmall: {
            control: 'boolean',
            description: 'Indicates whether the host element is small',
        },
        onLikeClicked: {
            action: 'likeClicked',
            description: 'Triggered when the "Like" button is clicked',
        },
        onDislikeClicked: {
            action: 'dislikeClicked',
            description: 'Triggered when the "Dislike" button is clicked',
        },
        onCommentClicked: {
            action: 'commentClicked',
            description: 'Triggered when the "Comment" button is clicked',
        },
        onDonateClicked: {
            action: 'donateClicked',
            description: 'Triggered when the "Donate" button is clicked',
        },
        onShareClicked: {
            action: 'shareClicked',
            description: 'Triggered when the "Share" button is clicked',
        },
        onFollowClicked: {
            action: 'followClicked',
            description: 'Triggered when the "Follow" button is clicked',
        },
        onViewProfileClicked: {
            action: 'viewProfileClicked',
            description: 'Triggered when the profile avatar is clicked',
        },
    },
};

export const Default = {
    args: {
        storyTitle: 'The Great Adventurer',
        chapterTitle: 'Chapter 1: The Beginning',
        chapterContent: `
          <p>Λίγο πριν φτάσει στην είσοδο της πολυκατοικίας βλέπει να μπαίνει ένας άντρας, ξένος σίγουρα. Μελαμψός, φοράει ρούχα δουλειάς, βρόμικος, ύποπτη φάτσα. Ήταν ανάγκη;</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet enim non euismod elementum. Donec dignissim tempus est sit amet varius. Phasellus vel lorem et ex molestie imperdiet at non nisi. Vestibulum et tellus molestie, tempus nibh sed, cursus neque. Ut porttitor diam at faucibus mollis. Curabitur cursus venenatis quam id dapibus. Aenean aliquam dolor vitae metus tempor, dapibus luctus neque lobortis. Nullam purus velit, mattis eget leo at, efficitur vestibulum erat. Duis egestas est in turpis finibus tristique. Nam congue quam ac posuere elementum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet enim non euismod elementum. Donec dignissim tempus est sit amet varius. Phasellus vel lorem et ex molestie imperdiet at non nisi. Vestibulum et tellus molestie, tempus nibh sed, cursus neque. Ut porttitor diam at faucibus mollis. Curabitur cursus venenatis quam id dapibus. Aenean aliquam dolor vitae metus tempor, dapibus luctus neque lobortis. Nullam purus velit, mattis eget leo at, efficitur vestibulum erat. Duis egestas est in turpis finibus tristique. Nam congue quam ac posuere elementum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet enim non euismod elementum. Donec dignissim tempus est sit amet varius. Phasellus vel lorem et ex molestie imperdiet at non nisi. Vestibulum et tellus molestie, tempus nibh sed, cursus neque. Ut porttitor diam at faucibus mollis. Curabitur cursus venenatis quam id dapibus. Aenean aliquam dolor vitae metus tempor, dapibus luctus neque lobortis. Nullam purus velit, mattis eget leo at, efficitur vestibulum erat. Duis egestas est in turpis finibus tristique. Nam congue quam ac posuere elementum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet enim non euismod elementum. Donec dignissim tempus est sit amet varius. Phasellus vel lorem et ex molestie imperdiet at non nisi. Vestibulum et tellus molestie, tempus nibh sed, cursus neque. Ut porttitor diam at faucibus mollis. Curabitur cursus venenatis quam id dapibus. Aenean aliquam dolor vitae metus tempor, dapibus luctus neque lobortis. Nullam purus velit, mattis eget leo at, efficitur vestibulum erat. Duis egestas est in turpis finibus tristique. Nam congue quam ac posuere elementum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet enim non euismod elementum. Donec dignissim tempus est sit amet varius. Phasellus vel lorem et ex molestie imperdiet at non nisi. Vestibulum et tellus molestie, tempus nibh sed, cursus neque. Ut porttitor diam at faucibus mollis. Curabitur cursus venenatis quam id dapibus. Aenean aliquam dolor vitae metus tempor, dapibus luctus neque lobortis. Nullam purus velit, mattis eget leo at, efficitur vestibulum erat. Duis egestas est in turpis finibus tristique. Nam congue quam ac posuere elementum.</p>
        `,
        fontSize: 'medium',
        fontType: 'serif',
        loading: false,
        chapterLocked: false,
        chapterSequence: 1,
        hasPreviousChapter: false,
        hasNextChapter: true,
        avatarSrc: 'https://i.pravatar.cc/150?img=3',
        avatarName: 'Jane Doe',
        likes: '1.5k',
        dislike: 'Dislike',
        comments: 15,
        donate: 'Donate',
        share: 'Share',
        isVisible: true,
    },
};

export const SubsequentChapter = {
    args: {
        storyTitle: 'The Great Adventure',
        chapterTitle: 'Chapter 2: The Journey Continues',
        chapterContent: `
          <p>Λίγο πριν φτάσει στην είσοδο της πολυκατοικίας βλέπει να μπαίνει ένας άντρας, ξένος σίγουρα. Μελαμψός, φοράει ρούχα δουλειάς, βρόμικος, ύποπτη φάτσα. Ήταν ανάγκη;</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet enim non euismod elementum. Donec dignissim tempus est sit amet varius. Phasellus vel lorem et ex molestie imperdiet at non nisi. Vestibulum et tellus molestie, tempus nibh sed, cursus neque. Ut porttitor diam at faucibus mollis. Curabitur cursus venenatis quam id dapibus. Aenean aliquam dolor vitae metus tempor, dapibus luctus neque lobortis. Nullam purus velit, mattis eget leo at, efficitur vestibulum erat. Duis egestas est in turpis finibus tristique. Nam congue quam ac posuere elementum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet enim non euismod elementum. Donec dignissim tempus est sit amet varius. Phasellus vel lorem et ex molestie imperdiet at non nisi. Vestibulum et tellus molestie, tempus nibh sed, cursus neque. Ut porttitor diam at faucibus mollis. Curabitur cursus venenatis quam id dapibus. Aenean aliquam dolor vitae metus tempor, dapibus luctus neque lobortis. Nullam purus velit, mattis eget leo at, efficitur vestibulum erat. Duis egestas est in turpis finibus tristique. Nam congue quam ac posuere elementum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet enim non euismod elementum. Donec dignissim tempus est sit amet varius. Phasellus vel lorem et ex molestie imperdiet at non nisi. Vestibulum et tellus molestie, tempus nibh sed, cursus neque. Ut porttitor diam at faucibus mollis. Curabitur cursus venenatis quam id dapibus. Aenean aliquam dolor vitae metus tempor, dapibus luctus neque lobortis. Nullam purus velit, mattis eget leo at, efficitur vestibulum erat. Duis egestas est in turpis finibus tristique. Nam congue quam ac posuere elementum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet enim non euismod elementum. Donec dignissim tempus est sit amet varius. Phasellus vel lorem et ex molestie imperdiet at non nisi. Vestibulum et tellus molestie, tempus nibh sed, cursus neque. Ut porttitor diam at faucibus mollis. Curabitur cursus venenatis quam id dapibus. Aenean aliquam dolor vitae metus tempor, dapibus luctus neque lobortis. Nullam purus velit, mattis eget leo at, efficitur vestibulum erat. Duis egestas est in turpis finibus tristique. Nam congue quam ac posuere elementum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet enim non euismod elementum. Donec dignissim tempus est sit amet varius. Phasellus vel lorem et ex molestie imperdiet at non nisi. Vestibulum et tellus molestie, tempus nibh sed, cursus neque. Ut porttitor diam at faucibus mollis. Curabitur cursus venenatis quam id dapibus. Aenean aliquam dolor vitae metus tempor, dapibus luctus neque lobortis. Nullam purus velit, mattis eget leo at, efficitur vestibulum erat. Duis egestas est in turpis finibus tristique. Nam congue quam ac posuere elementum.</p>
        `,
        fontSize: 'medium',
        fontType: 'serif',
        loading: false,
        chapterLocked: false,
        chapterSequence: 2, // Sequence is not the first chapter
        hasPreviousChapter: true,
        hasNextChapter: true,
        avatarSrc: 'https://i.pravatar.cc/150?img=3',
        avatarName: 'Jane Doe',
        likes: '1.5k',
        dislike: 'Dislike',
        comments: 15,
        donate: 'Donate',
        share: 'Share',
    },
};

export const Loading = {
    args: {
        storyTitle: '', // Empty for loading state
        chapterTitle: '', // Empty for loading state
        chapterContent: '', // Empty for loading state
        fontSize: 'medium',
        fontType: 'serif',
        loading: true,
        chapterLocked: false,
        chapterSequence: 1,
    },
};

export const LockedChapter = {
    args: {
        storyTitle: 'The Great Adventure',
        chapterTitle: 'Chapter 1: The Locked Chapter',
        chapterContent: '',
        fontSize: 'medium',
        fontType: 'serif',
        loading: false,
        chapterLocked: true,
        chapterSequence: 1,
    },
};
