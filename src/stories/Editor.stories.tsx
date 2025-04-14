import { html } from 'lit';
// Removed the unused import
import '../components/ur-editor/ur-editor'; // Adjust the path as necessary

// Define interface for the custom element
interface ContentPreviewElement extends HTMLElement {
    content: string;
}

// Create a custom element for the preview functionality
if (!customElements.get('content-preview')) {
    class ContentPreview extends HTMLElement {
        // Define private property
        private _content: string = '';

        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }

        connectedCallback() {
            this.render();
        }

        set content(value) {
            this._content = value;
            this.render();
        }

        get content() {
            return this._content;
        }

        render() {
            this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.5;
          }
        </style>
        <div>${this._content}</div>
      `;
        }
    }

    customElements.define('content-preview', ContentPreview);
}

// The template function for rendering the story
const Template = args => {
    // Handle content changes from the editor
    const handleContentChanged = e => {
        const previewEl = document.querySelector('content-preview') as ContentPreviewElement;
        if (previewEl) {
            previewEl.content = e.detail;
        }
    };

    return html`
        <div style="display: flex; flex-direction: column; gap: 20px; max-width: 800px">
            <div style="border: 1px solid #ddd; border-radius: 4px; padding: 16px">
                <h3 style="margin-top: 0; margin-bottom: 16px">Editor</h3>
                <ur-editor
                    .content=${args.content}
                    .placeholder=${args.placeholder}
                    ?disabled=${args.disabled}
                    ?enable-bold=${args.enableBold}
                    ?enable-italic=${args.enableItalic}
                    ?enable-underline=${args.enableUnderline}
                    ?enable-text-align=${args.enableTextAlign}
                    ?show-counter=${args.showCounter}
                    .maxLength=${args.maxLength}
                    @contentChanged=${handleContentChanged}
                ></ur-editor>
            </div>

            <div style="border: 1px solid #ddd; border-radius: 4px; padding: 16px">
                <h3 style="margin-top: 0; margin-bottom: 16px">Preview</h3>
                <content-preview .content=${args.content}></content-preview>
            </div>
        </div>
    `;
};

export default {
    title: 'urnovl/Business/Editor',
    render: Template,
    argTypes: {
        content: {
            control: 'text',
            description: 'Initial HTML content for the editor',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text when content is empty',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the editor is disabled',
        },
        enableBold: {
            control: 'boolean',
            description: 'Enable bold formatting',
        },
        enableItalic: {
            control: 'boolean',
            description: 'Enable italic formatting',
        },
        enableUnderline: {
            control: 'boolean',
            description: 'Enable underline formatting',
        },
        enableTextAlign: {
            control: 'boolean',
            description: 'Enable text alignment options',
        },
        showCounter: {
            control: 'boolean',
            description: 'Show character counter',
        },
        maxLength: {
            control: {
                type: 'number',
                min: 0,
                max: 1000,
                step: 10,
            },
            description: 'Maximum number of characters allowed',
        },
    },
};

// Default story
export const Default = {
    args: {
        content: '<p>This is a basic editor. Try formatting this text!</p>',
        placeholder: 'Start typing...',
        disabled: false,
        enableBold: true,
        enableItalic: true,
        enableUnderline: true,
        enableTextAlign: true,
        showCounter: false,
        maxLength: 0,
    },
};

// Editor with character limit
export const WithCharacterLimit = {
    args: {
        ...Default.args,
        content: "<p>This editor has a character limit of 100 characters. The counter below will show how many characters you've used.</p>",
        showCounter: true,
        maxLength: 100,
    },
};
