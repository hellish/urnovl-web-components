import { html } from 'lit';
import '../components/ur-bottom-sheet/ur-bottom-sheet';
import '../components/ur-button/ur-button';

const SheetContent = () => html`
    <div slot="header">
        <h3 style="margin: 0">Bottom Sheet</h3>
    </div>
    <div style="padding: 8px">
        <p>This is the content of the bottom sheet.</p>
        <p>Try dragging the header to move the sheet.</p>
        ${Array(5).fill(0).map(() => html`
            <p>Additional content paragraph.</p>
            <p>Additional content paragraph.</p>
            <p>Additional content paragraph.</p>
            <p>Additional content paragraph.</p>
            <p>Additional content paragraph.</p>
            <p>Additional content paragraph.</p>
            <p>Additional content paragraph.</p>
        `)}
    </div>
    <div slot="footer">
        <ur-button
            class="close-sheet-button"
            @click=${() => {
                const sheet = document.querySelector('ur-bottom-sheet');
                sheet?.dispatchEvent(new CustomEvent('dismiss'));
            }}
        >Close</ur-button>
    </div>
`;

const BottomSheet = ({
    open = false,
    selectedDetent = 'large',
    backdropDismiss = true
}) => {
    const sheetId = `sheet-${Math.random().toString(36).slice(2, 9)}`;
    const buttonId = `btn-${Math.random().toString(36).slice(2, 9)}`;

    setTimeout(() => {
        const sheet = document.getElementById(sheetId);
        const openButton = document.getElementById(buttonId);
        
        openButton?.addEventListener('click', () => {
            sheet?.setAttribute('open', 'true');
        });

        sheet?.shadowRoot?.querySelector('.close-sheet-button')
            ?.addEventListener('click', () => {
                sheet.setAttribute('open', 'false');
            });

        sheet?.addEventListener('dismiss', () => {
            sheet.setAttribute('open', 'false');
        });
    }, 0);

    return html`
        <div style="padding: 20px">
            <ur-button id=${buttonId}>Open Sheet</ur-button>
            
            <ur-bottom-sheet
                id=${sheetId}
                open=${open}
                selected-detent=${selectedDetent}
                backdrop-dismiss=${backdropDismiss}
            >
                ${SheetContent()}
            </ur-bottom-sheet>
        </div>
    `;
};

export default {
    title: 'Core/Bottom Sheet',
    argTypes: {
        open: { control: 'boolean' },
        selectedDetent: { 
            control: { type: 'select', options: ['large', 'medium', 'small'] }
        },
        backdropDismiss: { control: 'boolean' }
    }
};

const Template = (args) => BottomSheet(args);

export const Default = Template.bind({});
Default.args = {
    open: false,
    selectedDetent: 'large',
    backdropDismiss: true
};

export const Medium = Template.bind({});
Medium.args = {
    open: false,
    selectedDetent: 'medium',
    backdropDismiss: true
};