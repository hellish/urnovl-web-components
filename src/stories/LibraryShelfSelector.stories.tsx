import { html } from 'lit';
import '../components/ur-library-shelf-selector/ur-library-shelf-selector';

// Define the LibraryShelfSelector component in Storybook
const Template = args => html`
    <ur-library-shelf-selector
        .chooseButtonText=${args.chooseButtonText}
        .createButtonText=${args.createButtonText}
        .chooseShelfLabelText=${args.chooseShelfLabelText}
        .createNewShelfLabelText=${args.createNewShelfLabelText}
        .orCreateNewShelf=${args.orCreateNewShelf}
        .newShelfPlaceholder=${args.newShelfPlaceholder}
        .shelves=${args.shelves}
        .selectedShelf=${args.selectedShelf}
        @chooseShelfEvent=${args.onChooseShelf}
        @createShelfEvent=${args.onCreateShelf}
    ></ur-library-shelf-selector>
`;

export default {
    title: 'urnovl/Business/Library Shelf Selector',
    render: Template,
    argTypes: {
        chooseButtonText: {
            control: 'text',
            description: 'Text for the choose button',
        },
        createButtonText: {
            control: 'text',
            description: 'Text for the create button',
        },
        chooseShelfLabelText: {
            control: 'text',
            description: 'Label text for choosing a shelf',
        },
        createNewShelfLabelText: {
            control: 'text',
            description: 'Label text for creating a new shelf',
        },
        newShelfPlaceholder: {
            control: 'text',
            description: 'Placeholder text for the new shelf input',
        },
        shelves: {
            control: 'object',
            description: 'Array of shelf objects with name property',
        },
        selectedShelf: {
            control: 'text',
            description: 'Currently selected shelf',
        },
        orCreateNewShelf: {
            control: 'text',
            description: 'Text for the or create new shelf',
        },
        onChooseShelf: { action: 'chooseShelf' },
        onCreateShelf: { action: 'createShelf' },
    },
};

// With shelves story
export const WithShelves = {
    args: {
        chooseButtonText: 'Choose',
        createButtonText: 'Create',
        chooseShelfLabelText: 'Choose a shelf in your library to which you want to add this story to.',
        createNewShelfLabelText: 'Create a new shelf',
        createNewShelfSubtitleText: 'Create a shelve and organize your favorite stories in your Library.',
        orCreateNewShelf: 'or create a new one',
        newShelfPlaceholder: 'Please enter a shelf name',
        shelves: [
            { name: 'Favorites' },
            { name: 'To Read' },
            { name: 'Currently Reading' },
            { name: 'Finished Books' }
        ],
        selectedShelf: 'Favorites',
    },
};

// Without shelves story
export const WithoutShelves = {
    args: {
        chooseButtonText: 'Choose',
        createButtonText: 'Create',
        chooseShelfLabelText: 'Choose a shelf in your library to which you want to add this story to.',
        createNewShelfLabelText: 'Create a new shelf',
        createNewShelfSubtitleText: 'Create a shelve and organize your favorite stories in your Library.',
        orCreateNewShelf: 'or create a new shelf',
        newShelfPlaceholder: 'Please enter a shelf name',
        shelves: [],
        selectedShelf: '',
    },
};