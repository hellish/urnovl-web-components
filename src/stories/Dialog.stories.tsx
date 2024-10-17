import { html } from 'lit';
import '../components/ur-dialog/ur-dialog';

const Dialog = ({
                    headline = 'My Test Dialog',
                    description = 'Test Description Content',
                    open = false,
                    fullscreen = false,
                    closeOnEsc = true,
                    closeOnOverlayClick = true,
}) => html`
    <ur-dialog
        headline=${headline}
        description=${description}
        open=${open}
        fullscreen=${fullscreen}
        close-on-esc=${closeOnEsc}
        close-on-overlay-click=${closeOnOverlayClick}
        @dialogConfirmed=${() => console.log('Dialog confirmed!')}
    ></ur-dialog>
`;

export default {
    title: 'Core/Dialog',
    render: args => Dialog(args),
    argTypes: {
        open: { control: 'boolean' },
        closeOnEsc: { control: 'boolean' },
        closeOnOverlayClick: { control: 'boolean' },
        headline: { control: 'text' },
        description: { control: 'text' },
    },
};

export const Default = {
    args: {
        open: false,
    },
};

export const OpenByDefault = {
    args: {
        open: true,
        headline: 'My Open Test Dialog',
        description: 'Test Open Description Content',
        closeOnEsc: false,
        closeOnOverlayClick: false,
    },
};

export const fullscreen = {
    args: {
        headline: 'My Open Test Dialog',
        description: 'Test Open Description Content',
        closeOnEsc: false,
        closeOnOverlayClick: false,
        fullscreen: true,
    },
};
