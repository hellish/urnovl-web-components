import { html } from 'lit';
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
                    ?enable-blockquote=${args.enableBlockquote}
                    ?show-counter=${args.showCounter}
                    .maxLength=${args.maxLength}
                    .maxWords=${args.maxWords}
                    .wordLabel=${args.wordLabel}
                    .charLabel=${args.charLabel}
                    ?show-fixed-toolbar=${args.showFixedToolbar}
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
        enableBlockquote: {
            control: 'boolean',
            description: 'Enable blockquote formatting',
        },
        showCounter: {
            control: 'boolean',
            description: 'Show character and word counters',
        },
        showFixedToolbar: {
            control: 'boolean',
            description: 'Show fixed toolbar or only selection tooltip',
        },
        maxLength: {
            control: {
                type: 'number',
                min: 0,
                max: 1000,
                step: 10,
            },
            description: 'Maximum number of characters allowed (0 = no limit, cannot be used with maxWords)',
        },
        maxWords: {
            control: {
                type: 'number',
                min: 0,
                max: 500,
                step: 5,
            },
            description: 'Maximum number of words allowed (0 = no limit, cannot be used with maxLength)',
        },
        wordLabel: {
            control: 'text',
            description: 'Label for word counter',
        },
        charLabel: {
            control: 'text',
            description: 'Label for character counter',
        },
    },
};

// Default story - No limit
export const Default = {
    args: {
        content: '<p>This is a simple rich text editor with formatting options.</p>',
        placeholder: 'Write your story...',
        disabled: false,
        enableBold: true,
        enableItalic: true,
        enableUnderline: true,
        enableTextAlign: true,
        enableBlockquote: true,
        showCounter: true,
        showFixedToolbar: true,
        maxLength: 0,
        maxWords: 0,
        wordLabel: 'Words',
        charLabel: 'Characters',
    },
};

// Story with character limit
export const CharacterLimit = {
    args: {
        ...Default.args,
        content:
            '<p>This editor has a character limit of 200. Try typing more text to see how the counter works. The editor will prevent you from exceeding the limit while preserving any formatting.</p>',
        showCounter: true,
        maxLength: 200,
        maxWords: 0,
        charLabel: 'Characters',
    },
};

// Story with word limit
export const WordLimit = {
    args: {
        ...Default.args,
        content:
            '<p>This editor has a word limit of 30. Try typing more words to see how the counter works. The editor will stop accepting new words when you reach the limit.</p>',
        showCounter: true,
        maxLength: 0,
        maxWords: 30,
        wordLabel: 'Words',
    },
};

// Disabled editor
export const Disabled = {
    args: {
        ...Default.args,
        content: '<p>This editor is disabled and cannot be edited.</p>',
        disabled: true,
        showCounter: true,
    },
};
