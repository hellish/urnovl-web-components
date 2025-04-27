import { html } from 'lit';
import '../components/ur-snackbar/ur-snackbar';
import '../components/ur-button/ur-button';
import '../components/ur-circular-progress/ur-circular-progress';

/**
 * @typedef {Object} UrSnackbarElement
 * @property {boolean} open - Whether the snackbar is open
 * @property {string} message - The message text
 * @property {boolean} actionLoading - Whether the action button is in loading state
 */

interface UrSnackbarElement extends HTMLElement {
    open: boolean;
    message: string;
    actionLoading: boolean;
}

// Reusable function to render the toggle button
const renderShowButton = snackbarId => html`
    <ur-button
        variant="filled"
        @click=${() => {
            // Get the snackbar element
            /** @type {UrSnackbarElement} */
            const snackbar = document.getElementById(snackbarId) as UrSnackbarElement;
            if (snackbar) {
                // Force close first (in case it's already open) then reopen
                snackbar.open = false;
                // Use setTimeout to ensure the close operation completes before reopening
                setTimeout(() => {
                    snackbar.open = true;
                }, 10);
            }
        }}
    >
        Show Snackbar
    </ur-button>
`;

export default {
    title: 'Core/Snackbar',
    component: 'ur-snackbar',
    argTypes: {
        open: { control: 'boolean' },
        message: { control: 'text' },
        placement: {
            control: 'select',
            options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'],
        },
        action: { control: 'text' },
        actionLoading: { control: 'boolean' },
        closeable: { control: 'boolean' },
        closeIcon: { control: 'text' },
        messageLine: { control: 'select', options: [0, 1, 2] },
        autoCloseDelay: { control: 'number' },
        closeOnOutsideClick: { control: 'boolean' },
        backColor: { control: 'color' },
        fontColor: { control: 'color' },
        actionColor: { control: 'color' },
        radius: { control: 'text' },
        zIndex: { control: 'text' },
    },
    parameters: {
        docs: {
            description: {
                component: 'A snackbar component providing feedback about an operation.',
            },
        },
    },
};

// Base template function with default styles
const createStory = (args, slotContent = '') => {
    // Create a unique ID for each snackbar instance
    const snackbarId = `snackbar-${args.storyId || Math.random().toString(36).substring(2, 9)}`;

    return {
        render: args => {
            // Setup action handler
            const handleActionClick = () => {
                console.log(`Action button clicked for ${snackbarId}`);
                // Optionally close the snackbar when action is clicked
                /** @type {UrSnackbarElement} */
                const snackbar = document.getElementById(snackbarId) as UrSnackbarElement;
                if (snackbar && !args.actionLoading) {
                    snackbar.open = false;
                }
            };

            return html`
                <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                    <ur-snackbar
                        id=${snackbarId}
                        ?open=${args.open}
                        message=${args.message || ''}
                        placement=${args.placement || 'bottom'}
                        action=${args.action || ''}
                        ?action-loading=${args.actionLoading}
                        ?closeable=${args.closeable}
                        close-icon=${args.closeIcon || ''}
                        message-line=${args.messageLine || 0}
                        auto-close-delay=${args.autoCloseDelay || 5000}
                        ?close-on-outside-click=${args.closeOnOutsideClick}
                        back-color=${args.backColor || 'rgb(var(--mdui-color-surface-container-highest))'}
                        font-color=${args.fontColor || 'rgb(var(--mdui-color-on-surface))'}
                        action-color=${args.actionColor || 'rgb(var(--mdui-color-primary))'}
                        radius=${args.radius || '4px'}
                        z-index=${args.zIndex || '1000'}
                        @ur-action-click=${handleActionClick}
                    >
                        ${slotContent}
                    </ur-snackbar>

                    ${renderShowButton(snackbarId)}
                </div>
            `;
        },
        args,
    };
};

// 1. Basic Snackbar with Action Button
export const BasicWithAction = createStory({
    storyId: 'basic-with-action',
    message: 'Photo archived successfully',
    action: 'UNDO',
    closeable: false,
});

// 2. Custom Message and Action Using Slots
export const CustomSlots = {
    render: args => {
        // Create unique ID for this instance
        const snackbarId = 'custom-slots-snackbar';

        // Handle the custom action button click
        const handleCustomAction = () => {
            console.log('Custom action button clicked');
            /** @type {UrSnackbarElement} */
            const snackbar = document.getElementById(snackbarId) as UrSnackbarElement;
            if (snackbar) {
                snackbar.open = false;
            }
        };

        return html`
            <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                <ur-snackbar
                    id=${snackbarId}
                    ?open=${args.open}
                    ?closeable=${args.closeable !== undefined ? args.closeable : true}
                    placement=${args.placement || 'bottom'}
                    auto-close-delay=${args.autoCloseDelay || 5000}
                    ?close-on-outside-click=${args.closeOnOutsideClick}
                    back-color=${args.backColor || 'rgb(var(--mdui-color-surface-container-highest))'}
                    font-color=${args.fontColor || 'rgb(var(--mdui-color-on-surface))'}
                    action-color=${args.actionColor || 'rgb(var(--mdui-color-primary))'}
                    radius=${args.radius || '4px'}
                    z-index=${args.zIndex || '1000'}
                >
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <ur-icon name="info"></ur-icon>
                        <span><strong>Important:</strong> Custom formatted message</span>
                    </div>
                    <ur-button slot="action" variant="text" size="small" @click=${handleCustomAction}>OK</ur-button>
                    <ur-icon slot="close-icon" name="cancel"></ur-icon>
                </ur-snackbar>

                ${renderShowButton(snackbarId)}
            </div>
        `;
    },
    args: {
        closeable: true,
        placement: 'bottom',
        autoCloseDelay: 5000,
        closeOnOutsideClick: false,
    },
};

// 3. Actionable Snackbar with Loading State
export const ActionWithAutoLoading = {
    render: (args) => {
        // Create unique ID for this instance
        const snackbarId = 'auto-loading-snackbar';
        
        return html`
            <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                <ur-snackbar
                    id=${snackbarId}
                    ?open=${args.open}
                    placement="bottom-end"
                    auto-close-delay=${0}
                    ?closeable=${args.closeable}
                >
                    <!-- Custom message content with circular progress -->
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <ur-circular-progress
                            .max=${1}
                            .width=${'20px'}
                            .height=${'20px'}
                            style="margin-top: 4px;"
                            id="progress-indicator"
                        ></ur-circular-progress>
                        <span id="snackbar-message">Processing your request...</span>
                    </div>
                    
                    <!-- Action button - only shown in completed state -->
                    <ur-button 
                        slot="action" 
                        variant="text" 
                        size="small" 
                        id="action-button"
                        style="display: none;"
                        @click=${() => {
                            const snackbar = document.getElementById(snackbarId) as UrSnackbarElement;
                            if (snackbar) {
                                snackbar.open = false;
                            }
                        }}
                    >
                        OK
                    </ur-button>
                </ur-snackbar>

                <div style="display: flex; gap: 8px;">
                    ${renderShowButton(snackbarId)}
                    
                    <ur-button
                        variant="outlined"
                        @click=${() => {
                            const snackbar = document.getElementById(snackbarId) as UrSnackbarElement;
                            const messageEl = document.getElementById('snackbar-message');
                            const actionButton = document.getElementById('action-button');
                            const progressEl = document.getElementById('progress-indicator');
                            
                            if (snackbar && messageEl && actionButton && progressEl) {
                                // Update the snackbar content to show completion
                                messageEl.innerHTML = "Save completed successfully!";
                                
                                // Hide progress indicator
                                progressEl.style.display = 'none';
                                
                                // Show the OK button
                                actionButton.style.display = 'inline-block';
                            }
                        }}
                    >
                        Show Completion State
                    </ur-button>
                    
                    <ur-button
                        variant="outlined"
                        @click=${() => {
                            const snackbar = document.getElementById(snackbarId) as UrSnackbarElement;
                            const messageEl = document.getElementById('snackbar-message');
                            const actionButton = document.getElementById('action-button');
                            const progressEl = document.getElementById('progress-indicator');
                            
                            if (snackbar && messageEl && actionButton && progressEl) {
                                // Reset to initial loading state
                                messageEl.innerHTML = "Processing your request...";
                                
                                // Show progress indicator
                                progressEl.style.display = 'inline-block';
                                
                                // Hide the OK button
                                actionButton.style.display = 'none';
                            }
                        }}
                    >
                        Reset to Loading
                    </ur-button>
                </div>
            </div>
        `;
    },
    args: {
        closeable: false
    }
};