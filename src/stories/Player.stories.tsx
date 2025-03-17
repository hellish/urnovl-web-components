import { html } from 'lit';
import '../components/ur-player/ur-player';

// Define the Player component in Storybook
const Template = args => html`
    <ur-player
        .src=${args.src}
        .storyTitle=${args.storyTitle}
        .author=${args.author}
        .chapterName=${args.chapterName}
        .coverImage=${args.coverImage}
        .playText=${args.playText}
        .pauseText=${args.pauseText}
        .forwardText=${args.forwardText}
        .backwardText=${args.backwardText}
        .speedText=${args.speedText}
        .volumeText=${args.volumeText}
        .autoPlay=${args.autoPlay}
        .showControls=${args.showControls}
        .primaryColor=${args.primaryColor}
        .accentColor=${args.accentColor}
        .darkMode=${args.darkMode}
    >
    </ur-player>
`;

export default {
    title: 'urnovl/Business/Audio Player',
    render: Template,
    argTypes: {
        src: {
            control: 'text',
            description: 'Audio source URL',
        },
        title: {
            control: 'text',
            description: 'Title of the audiobook/story',
        },
        author: {
            control: 'text',
            description: 'Author of the audiobook/story',
        },
        chapterName: {
            control: 'text',
            description: 'Current chapter name',
        },
        coverImage: {
            control: 'text',
            description: 'URL of the cover image',
        },
        playText: {
            control: 'text',
            description: 'Text for play button aria-label',
        },
        pauseText: {
            control: 'text',
            description: 'Text for pause button aria-label',
        },
        forwardText: {
            control: 'text',
            description: 'Text for forward button aria-label',
        },
        backwardText: {
            control: 'text',
            description: 'Text for backward button aria-label',
        },
        speedText: {
            control: 'text',
            description: 'Text for speed control aria-label',
        },
        volumeText: {
            control: 'text',
            description: 'Text for volume control aria-label',
        },
        autoPlay: {
            control: 'boolean',
            description: 'Whether the audio should autoplay',
        },
        showControls: {
            control: 'boolean',
            description: 'Whether to show the player controls',
        },
        primaryColor: {
            control: 'text',
            description: 'Primary color for the player',
        },
        accentColor: {
            control: 'text',
            description: 'Accent color for the player',
        },
        darkMode: {
            control: 'boolean',
            description: 'Whether to use dark mode',
        },
    },
};

// Default story - Basic audiobook player
export const Default = {
    args: {
        src: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3',
        storyTitle: 'Hamlet',
        author: 'William Shakespeare',
        chapterName: 'Act 1',
        coverImage: 'https://picsum.photos/200/300',
        playText: 'Play',
        pauseText: 'Pause',
        forwardText: 'Forward 15s',
        backwardText: 'Back 15s',
        speedText: 'Speed',
        volumeText: 'Volume',
        autoPlay: false,
        showControls: true,
        primaryColor: 'rgb(var(--ur-color-primary))',
        accentColor: 'rgb(var(--ur-color-primary-container))',
        darkMode: false,
    },
};

// Dark mode player with a modern fiction title
export const DarkModeModernFiction = {
    args: {
        ...Default.args,
        src: 'https://storage.googleapis.com/media-session/big-buck-bunny/prelude.mp3',
        storyTitle: 'The Alchemist',
        author: 'Paulo Coelho',
        chapterName: 'Chapter 3: The Desert',
        coverImage: 'https://picsum.photos/id/237/200/300',
        darkMode: true,
    },
};
