import { html } from 'lit';
import '../components/ur-reader/ur-reader'; // Adjust the path as necessary

const Template = args => html`
    <ur-reader
        story-title="${args.storyTitle}"
        chapter-title="${args.chapterTitle}"
        chapter-content="${args.chapterContent}"
        font-size="${args.fontSize}"
        font-type="${args.fontType}"
        loading="${args.loading}" <!-- Add loading prop -->
    ></ur-reader>
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
    },
};

export const Default = {
    args: {
        storyTitle: 'The Great Adventure',
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
        loading: false, // Default is not loading
    },
};

export const Loading = {
    args: {
        storyTitle: '', // Empty for loading state
        chapterTitle: '', // Empty for loading state
        chapterContent: '', // Empty for loading state
        fontSize: 'medium',
        fontType: 'serif',
        loading: true, // Set to loading state
    },
};
