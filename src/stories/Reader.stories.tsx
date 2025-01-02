import { html } from 'lit';
import { useState } from '@storybook/preview-api';
import '../components/ur-reader/ur-reader';
import '../components/ur-read-rail/ur-read-rail';
import '../components/ur-thumbs-rating/ur-thumbs-rating';

const Template = args => {
    const [state, setState] = useState({
        isLiked: args.isLiked || false,
        isDisliked: args.isDisliked || false,
        likesCount: args.likes,
    });

    const handleThumbsUp = () => {
        setState({
            isLiked: !state.isLiked,
            isDisliked: false,
            likesCount: !state.isLiked ? state.likesCount + 1 : state.likesCount - 1,
        });
        console.log('Thumbs up clicked', state);
    };

    const handleThumbsDown = () => {
        setState({
            isLiked: false,
            isDisliked: !state.isDisliked,
            likesCount: state.isLiked ? state.likesCount - 1 : state.likesCount,
        });
        console.log('Thumbs down clicked', state);
    };

    return html`
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
                <ur-read-rail
                    slot="ur-read-rail-slot"
                    avatar-src="${args.avatarSrc}"
                    avatar-name="${args.avatarName}"
                    comments="${args.comments}"
                    donate="${args.donate}"
                    share="${args.share}"
                    ?is-visible="${args.isVisible}"
                    ?is-host-small="${args.isHostSmall}"
                    @commentClicked="${args.onCommentClicked}"
                    @donateClicked="${args.onDonateClicked}"
                    @shareClicked="${args.onShareClicked}"
                    @followClicked="${args.onFollowClicked}"
                    @viewProfileClicked="${args.onViewProfileClicked}"
                >
                    <ur-thumbs-rating
                        slot="thumbs-rating"
                        .likesCount="${state.likesCount}"
                        .dislikeText="${args.dislike}"
                        ?is-liked="${state.isLiked}"
                        ?is-disliked="${state.isDisliked}"
                        @thumbsUp="${handleThumbsUp}"
                        @thumbsDown="${handleThumbsDown}"
                    ></ur-thumbs-rating>
                </ur-read-rail>
            </ur-reader>
        </div>
    `;
};

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
            control: 'number', // Changed from 'text'
            description: 'Number of likes',
            defaultValue: 1500, // Changed from '1.5k'
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
            defaultValue: true,
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
        isLiked: {
            control: 'boolean',
            description: 'Whether the content is liked',
            defaultValue: false,
        },
        isDisliked: {
            control: 'boolean',
            description: 'Whether the content is disliked',
            defaultValue: false,
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
        likes: 1500, // Changed from '1.5k'
        dislike: 'Dislike',
        comments: 15,
        donate: 'Donate',
        share: 'Share',
        isVisible: true,
        isLiked: false,
        isDisliked: false,
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
        chapterSequence: 2,
        hasPreviousChapter: true,
        hasNextChapter: true,
        avatarSrc: 'https://i.pravatar.cc/150?img=3',
        avatarName: 'Jane Doe',
        likes: 1500,
        dislike: 'Dislike',
        comments: 15,
        donate: 'Donate',
        share: 'Share',
        isLiked: true,
        isDisliked: false,
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
