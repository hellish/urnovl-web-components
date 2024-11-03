import { html } from 'lit';
import '../components/ur-button/ur-button';
import '../components/ur-dialog/ur-dialog';

const DialogContent = () => html`
    <div style="padding: 25px">[show any dialog content here]</div>
`;

const Dialog = ({
    open = false,
    fullscreen = false,
    closeOnEsc = true,
    closeOnOverlayClick = true,
    borderRadius = "0",
}) => html`
    <script>
        function handleClick() {
            document.getElementById('ur-dialog-1').openDialog();
        }
    </script>
    <ur-button onclick="handleClick()">Open</ur-button>
    <ur-dialog
        id="ur-dialog-1"
        open=${open}
        border-radius=${borderRadius}
        fullscreen=${fullscreen}
        close-on-esc=${closeOnEsc}
        close-on-overlay-click=${closeOnOverlayClick}
    >
        ${DialogContent()}
    </ur-dialog>
`;

export default {
    title: 'Core/Dialog',
    render: args => Dialog(args),
    argTypes: {
        open: { control: 'boolean' },
        closeOnEsc: { control: 'boolean' },
        closeOnOverlayClick: { control: 'boolean' },
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
    },
};

export const WithoutCloseOnEsc = {
    args: {
        closeOnEsc: false,
    },
};

export const WithoutCloseOnOverlayClick = {
    args: {
        closeOnOverlayClick: false,
    },
};

export const RoundedWithBorderRadius = {
    args: {
        borderRadius: "15px"
    },
};

export const Fullscreen = {
    args: {
        headline: 'My Open Test Dialog',
        description: 'Test Open Description Content',
        fullscreen: true,
    },
};
