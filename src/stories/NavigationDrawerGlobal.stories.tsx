import { html } from 'lit';
import '../components/ur-button/ur-button';
import '../components/ur-navigation-drawer-global/ur-navigation-drawer-global';
import '../components/ur-button-icon/ur-button-icon';

const NavigationDrawer = ({ open = false, placement = 'right', closeOnEsc = true, closeOnOverlayClick = true, contained = true }) => {
    const handleDrawerOpened = () => {
        document.getElementsByTagName('ur-navigation-drawer-global')[0].open = true;
    };

    const handleDrawerClosed = () => {
        document.getElementsByTagName('ur-navigation-drawer-global')[0].open = false;
    };

    const handleDrawerOpen = () => {
        handleDrawerOpened();
        document.getElementsByTagName('ur-navigation-drawer-global')[0].openDrawer();
    };

    const handleClose = () => {
        const drawer = document.getElementsByTagName('ur-navigation-drawer-global')[0];
        drawer.closeDrawer();
    };

    return html`
        <ur-button @click=${handleDrawerOpen}> Open Drawer </ur-button>

        <ur-navigation-drawer-global
            ?open=${open}
            placement=${placement}
            ?close-on-esc=${closeOnEsc}
            ?close-on-overlay-click=${closeOnOverlayClick}
            ?contained=${contained}
            @opened=${handleDrawerOpened}
            @closed=${handleDrawerClosed}
        >
            <div slot="header" class="drawer-header">
                <ur-button-icon icon="close" @click=${handleClose}></ur-button-icon>
                <span part="header-title" class="header-title">Title</span>
            </div>

            <div class="drawer-content">
                <span>
                    <strong>What is Lorem Ipsum?</strong><br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>

                <span>
                    <strong>Why do we use it?</strong><br />
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                    their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </span>
            </div>

            <div slot="footer" class="drawer-footer">
                <ur-button>Apply</ur-button>
                <ur-button variant="text" @click=${handleClose}>Cancel</ur-button>
            </div>
        </ur-navigation-drawer-global>

        <style>
            .header-title {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                font-size: 16px;
                font-weight: 700;
                line-height: 28px;
                text-align: center;
                letter-spacing: 0px;
                color: inherit;
            }
        </style>
    `;
};

export default {
    title: 'Core/Navigation Drawer Global',
    render: args => NavigationDrawer(args),
    argTypes: {
        open: { control: 'boolean' },
        placement: { control: 'select', options: ['left', 'right'] },
        closeOnEsc: { control: 'boolean' },
        closeOnOverlayClick: { control: 'boolean' },
        contained: { control: 'boolean' },
    },
};

export const Default = {
    args: {
        open: false,
        placement: 'right',
        closeOnEsc: true,
        closeOnOverlayClick: true,
        contained: true,
    },
};
