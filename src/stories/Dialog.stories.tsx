import { html } from 'lit';
import '../components/ur-button/ur-button';
import '../components/ur-button-icon/ur-button-icon';
import '../components/ur-dialog/ur-dialog';
import '../components/ur-text-field/ur-text-field';
import '../components/ur-novl-summary/ur-novl-summary';
import '../components/ur-profile-card/ur-profile-card';
import '../components/ur-long-description/ur-long-description';

// Sample content components for different use cases
const SimpleContent = () => html`
    <div style="padding: 24px">
        <h3 style="margin: 0 0 16px">Simple Dialog Content</h3>
        <p>This is a basic dialog with simple text content.</p>
    </div>
`;

const FormContent = () => html`
    <div style="padding: 24px">
        <h3 style="margin: 0 0 16px">Contact Form</h3>
        <form id="contact-form" style="display: flex; flex-direction: column; gap: 16px;">
            <ur-text-field type="text" placeholder="Name" style="padding: 8px" label="Name"></ur-text-field>
            <ur-text-field type="email" placeholder="Email" style="padding: 8px" label="Email"></ur-text-field>
            <ur-text-field type="textarea" placeholder="Message" rows="4" style="padding: 8px"></ur-text-field>
            <ur-button type="submit">Submit</ur-button>
        </form>
    </div>
`;

const CustomHeaderContent = () => html`
    <div slot="header">
        <span style="margin: 0">Custom Header</span>
        <ur-button-icon
            onclick="document.getElementById('dialog-with-header').closeDialog()"
            icon="close"
            variant="standard"
        ></ur-button-icon>
    </div>
    <div style="padding: 24px">
        <p>This dialog demonstrates a custom header with a close button.</p>
    </div>
`;

const LongContent = () => html`
    <div style="padding: 24px">
        <h3>Scrollable Content</h3>
        ${Array(10).fill(null).map(() => html`
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        `)}
    </div>
`;

const Dialog = ({
    id = 'ur-dialog-1',
    open = false,
    fullscreen = false,
    closeOnEsc = true,
    closeOnOverlayClick = true,
    borderRadius = "0",
    variant = 'desktop',
    showHeader = true,
    content = SimpleContent,
}) => html`
    <script>
        function handleClick(dialogId) {
            document.getElementById(dialogId).openDialog();
        }
    </script>
    <ur-button onclick="handleClick('${id}')">Open Dialog</ur-button>
    <ur-dialog
        id=${id}
        open=${open}
        border-radius=${borderRadius}
        fullscreen=${fullscreen}
        close-on-esc=${closeOnEsc}
        close-on-overlay-click=${closeOnOverlayClick}
        variant=${variant}
        show-header=${showHeader}
    >
        ${content()}
    </ur-dialog>
`;

export default {
    title: 'Core/Dialog',
    render: args => Dialog(args),
    argTypes: {
        open: {
            control: 'boolean',
            description: 'Controls whether the dialog is initially open'
        },
        closeOnEsc: {
            control: 'boolean',
            description: 'Allows closing the dialog with the ESC key'
        },
        closeOnOverlayClick: {
            control: 'boolean',
            description: 'Allows closing the dialog by clicking the overlay'
        },
        borderRadius: {
            control: 'text',
            description: 'Sets the border radius of the dialog'
        },
        fullscreen: {
            control: 'boolean',
            description: 'Makes the dialog fullscreen'
        },
        variant: {
            control: { type: 'select', options: ['mobile', 'desktop'] },
            description: 'Sets the dialog variant'
        },
        showHeader: {
            control: 'boolean',
            description: 'Controls the visibility of the header slot'
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'A versatile dialog component that supports various configurations including fullscreen mode, custom headers, and different variants.'
            }
        }
    }
};

// Basic dialog with simple content
export const Default = {
    args: {
        open: false,
    }
};

// Dialog that opens by default
export const OpenByDefault = {
    args: {
        open: true,
    }
};

// Dialog with form content
export const WithForm = {
    args: {
        id: 'dialog-with-form',
        content: FormContent,
    }
};

// Dialog with custom header
export const WithCustomHeader = {
    args: {
        id: 'dialog-with-header',
        content: CustomHeaderContent,
    }
};

// Dialog with long, scrollable content
export const WithScrollableContent = {
    args: {
        id: 'dialog-with-scroll',
        content: LongContent,
    }
};

// Mobile variant
export const MobileVariant = {
    args: {
        id: 'mobile-dialog',
        variant: 'mobile',
        borderRadius: '0',
    }
};

// Fullscreen dialog
export const FullscreenDialog = {
    args: {
        id: 'fullscreen-dialog',
        fullscreen: true,
        content: LongContent,
    }
};

// Dialog with rounded corners
export const RoundedDialog = {
    args: {
        id: 'rounded-dialog',
        borderRadius: '16px',
    }
};

// Dialog without header
export const WithoutHeader = {
    args: {
        id: 'no-header-dialog',
        showHeader: false,
    }
};

// Dialog that can't be closed by overlay click
export const WithoutOverlayClose = {
    args: {
        id: 'no-overlay-close-dialog',
        closeOnOverlayClick: false,
    }
};

// Dialog that can't be closed by ESC key
export const WithoutEscClose = {
    args: {
        id: 'no-esc-close-dialog',
        closeOnEsc: false,
    }
};

const NovlSummary = (args) => {
    return () => html`
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
}

export const WithNovlSummary = {
    args: {
        id: 'with-novl-summary',
        content: NovlSummary({
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
        })
    }
}

