import { Component, Prop, h, Event, EventEmitter, State, Method, Element, Watch } from '@stencil/core';
import { Editor, Extension } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';

@Component({
    tag: 'ur-editor',
    styleUrl: 'ur-editor.css',
    shadow: true,
})
export class UrEditor {
    private editor: Editor;
    private editorContainer?: HTMLDivElement;

    @Element() hostElement: HTMLElement;

    /**
     * The content to edit
     */
    @Prop() content: string = '';

    /**
     * Whether the editor is disabled
     */
    @Prop() disabled: boolean = false;

    /**
     * Placeholder text when content is empty
     */
    @Prop() placeholder: string = 'Start typing...';

    /**
     * Enable bold formatting
     */
    @Prop() enableBold: boolean = true;

    /**
     * Enable italic formatting
     */
    @Prop() enableItalic: boolean = true;

    /**
     * Enable underline formatting
     */
    @Prop() enableUnderline: boolean = true;

    /**
     * Enable text alignment
     */
    @Prop() enableTextAlign: boolean = true;

    /**
     * Enable blockquote
     */
    @Prop() enableBlockquote: boolean = true;

    /**
     * Optional max length for content
     */
    @Prop() maxLength: number = 0;

    /**
     * Show character counter
     */
    @Prop() showCounter: boolean = false;

    /**
     * Show fixed toolbar or only selection tooltip
     */
    @Prop() showFixedToolbar: boolean = true;

    /**
     * Internal state to track formatting states
     */
    @State() formattingState = {
        bold: false,
        italic: false,
        underline: false,
        blockquote: false,
        textAlignLeft: false,
        textAlignCenter: false,
        textAlignRight: false,
        textAlignJustify: false,
    };

    /**
     * Internal state to track character count
     */
    @State() charCount: number = 0;

    /**
     * State to track the selection tooltip position and visibility
     */
    @State() selectionTooltip = {
        visible: false,
        top: 0,
        left: 0,
    };

    /**
     * Track if mouse is currently pressed down
     */
    @State() isMouseDown: boolean = false;

    /**
     * Event emitted when content changes
     */
    @Event({
        eventName: 'contentChanged',
        composed: true,
        cancelable: true,
        bubbles: true,
    })
    contentChanged: EventEmitter<string>;

    /**
     * Watch for content changes from outside
     */
    @Watch('content')
    async contentUpdated(newContent: string) {
        if (this.editor) {
            const currentHTML = this.editor.getHTML();
            if (newContent !== currentHTML) {
                this.editor.commands.setContent(newContent, false);
                this.updateCharCount();
            }
        }
    }

    /**
     * Watch for disabled state changes
     */
    @Watch('disabled')
    disabledUpdated(isDisabled: boolean) {
        if (this.editor) {
            this.editor.setEditable(!isDisabled);
        }
    }

    /**
     * Update the character count based on editor content
     */
    private updateCharCount() {
        if (this.editor) {
            // Get plain text content for accurate character count
            const text = this.editor.getText();
            this.charCount = text ? text.length : 0;
        }
    }

    /**
     * Update the formatting state based on editor state
     */
    private updateFormattingState() {
        if (this.editor) {
            this.formattingState = {
                bold: this.editor.isActive('bold'),
                italic: this.editor.isActive('italic'),
                underline: this.editor.isActive('underline'),
                blockquote: this.editor.isActive('blockquote'),
                textAlignLeft: this.editor.isActive({ textAlign: 'left' }),
                textAlignCenter: this.editor.isActive({ textAlign: 'center' }),
                textAlignRight: this.editor.isActive({ textAlign: 'right' }),
                textAlignJustify: this.editor.isActive({ textAlign: 'justify' }),
            };
        }
    }

    /**
     * Initialize the editor when component loads
     */
    componentDidLoad() {
        this.initEditor();

        // Add event listeners for mouse up/down
        if (this.editorContainer) {
            this.editorContainer.addEventListener('mousedown', this.handleMouseDown);
            // We add mouseup to document to catch releases outside the editor
            document.addEventListener('mouseup', this.handleMouseUp);
        }
    }

    /**
     * Clean up when component unloads
     */
    disconnectedCallback() {
        if (this.editor) {
            this.editor.destroy();
        }

        // Remove event listeners
        if (this.editorContainer) {
            this.editorContainer.removeEventListener('mousedown', this.handleMouseDown);
        }
        document.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Handle mouse down event
     */
    private handleMouseDown = () => {
        this.isMouseDown = true;

        // Hide tooltip when starting a new selection
        this.selectionTooltip = {
            ...this.selectionTooltip,
            visible: false,
        };
    };

    /**
     * Handle mouse up event
     */
    private handleMouseUp = () => {
        this.isMouseDown = false;

        // Slight delay to ensure selection is fully processed
        setTimeout(() => {
            // Check if there's a selection when mouse is released
            if (this.editor && !this.editor.state.selection.empty && this.editor.view.hasFocus()) {
                this.updateSelectionTooltip(this.editor);
            }
        }, 10);
    };

    /**
     * Initialize the Tiptap editor
     */
    private initEditor() {
        if (!this.editorContainer) return;

        // Create an array of extensions with the correct type
        const extensions: Extension[] = [
            StarterKit.configure({
                // Configure extensions from StarterKit
                bold: this.enableBold ? {} : false,
                italic: this.enableItalic ? {} : false,
                blockquote: this.enableBlockquote ? {} : false,
            }),
        ];

        // Add underline extension if enabled
        if (this.enableUnderline) {
            extensions.push(Underline);
        }

        // Add text alignment extension if enabled
        if (this.enableTextAlign) {
            extensions.push(
                TextAlign.configure({
                    types: ['heading', 'paragraph', 'blockquote'],
                    alignments: ['left', 'center', 'right', 'justify'],
                    defaultAlignment: 'left',
                }),
            );
        }

        this.editor = new Editor({
            element: this.editorContainer,
            extensions,
            content: this.content,
            editable: !this.disabled,
            onUpdate: ({ editor }) => {
                this.updateCharCount();
                this.contentChanged.emit(editor.getHTML());
            },
            onSelectionUpdate: () => {
                // Only update formatting state, tooltip is managed by mouse events
                this.updateFormattingState();
            },
            // Add transaction handler to detect formatting changes
            onTransaction: () => {
                this.updateFormattingState();
            },
        });

        // Initialize states
        this.updateCharCount();
        this.updateFormattingState();
    }

    /**
     * Update the selection tooltip position based on text selection
     * FIXED to handle scrolling properly
     */
    private updateSelectionTooltip(editor: Editor) {
        // Don't show tooltip if mouse is still down (during selection)
        if (this.isMouseDown) {
            return;
        }

        // Hide tooltip if editor loses focus or selection is empty
        if (!editor.view.hasFocus() || editor.state.selection.empty) {
            this.selectionTooltip = {
                ...this.selectionTooltip,
                visible: false,
            };
            return;
        }

        // Get selection coordinates
        const { from, to } = editor.state.selection;
        const view = editor.view;
        const start = view.coordsAtPos(from);
        const end = view.coordsAtPos(to);

        // Get the editor container's bounding rect for relative positioning
        const editorRect = this.editorContainer.getBoundingClientRect();

        // Calculate the top position relative to the editor container
        const selectionTop = Math.min(start.top, end.top) - editorRect.top;

        // Subtract additional space to position tooltip above selection
        const top = selectionTop - 60;

        // Center the tooltip horizontally over the selection
        // Calculate the position relative to the editor container's left edge
        const selectionCenter = (start.left + end.left) / 2;
        const left = selectionCenter - editorRect.left;

        this.selectionTooltip = {
            visible: true,
            top,
            left,
        };
    }

    /**
     * Public method to get HTML content
     */
    @Method()
    async getHTML(): Promise<string> {
        return this.editor ? this.editor.getHTML() : '';
    }

    /**
     * Public method to get text content
     */
    @Method()
    async getText(): Promise<string> {
        return this.editor ? this.editor.getText() : '';
    }

    /**
     * Public method to set content
     */
    @Method()
    async setContent(content: string): Promise<void> {
        if (this.editor) {
            this.editor.commands.setContent(content, false);
            this.updateCharCount();
            this.updateFormattingState();
        }
    }

    /**
     * Public method to clear content
     */
    @Method()
    async clearContent(): Promise<void> {
        if (this.editor) {
            this.editor.commands.clearContent();
            this.updateCharCount();
            this.updateFormattingState();
        }
    }

    /**
     * Handle bold button click
     */
    private handleBold = () => {
        this.editor?.chain().focus().toggleBold().run();
    };

    /**
     * Handle italic button click
     */
    private handleItalic = () => {
        this.editor?.chain().focus().toggleItalic().run();
    };

    /**
     * Handle underline button click
     */
    private handleUnderline = () => {
        this.editor?.chain().focus().toggleUnderline().run();
    };

    /**
     * Handle blockquote button click
     */
    private handleBlockquote = () => {
        this.editor?.chain().focus().toggleBlockquote().run();
    };

    /**
     * Handle alignment button click
     */
    private handleAlign = (alignment: 'left' | 'center' | 'right' | 'justify') => {
        this.editor?.chain().focus().setTextAlign(alignment).run();
    };

    /**
     * Get CSS class for toolbar button
     */
    private getButtonClass(isActive: boolean) {
        return {
            'toolbar-button': true,
            'is-active': isActive,
        };
    }

    render() {
        return (
            <div class="ur-editor">
                {/* Fixed Toolbar - Can be toggled with showFixedToolbar prop */}
                {this.showFixedToolbar && (
                    <div class="editor-toolbar">
                        {this.enableBold && (
                            <button type="button" title="Bold" class={this.getButtonClass(this.formattingState.bold)} onClick={this.handleBold} disabled={this.disabled}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z" />
                                </svg>
                            </button>
                        )}

                        {this.enableItalic && (
                            <button type="button" title="Italic" class={this.getButtonClass(this.formattingState.italic)} onClick={this.handleItalic} disabled={this.disabled}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" />
                                </svg>
                            </button>
                        )}

                        {this.enableUnderline && (
                            <button
                                type="button"
                                title="Underline"
                                class={this.getButtonClass(this.formattingState.underline)}
                                onClick={this.handleUnderline}
                                disabled={this.disabled}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3h2zM4 20h16v2H4v-2z" />
                                </svg>
                            </button>
                        )}

                        {this.enableBlockquote && (
                            <button
                                type="button"
                                title="Quote"
                                class={this.getButtonClass(this.formattingState.blockquote)}
                                onClick={this.handleBlockquote}
                                disabled={this.disabled}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                </svg>
                            </button>
                        )}

                        {this.enableTextAlign && (
                            <div class="align-buttons">
                                <button
                                    type="button"
                                    title="Align Left"
                                    class={this.getButtonClass(this.formattingState.textAlignLeft)}
                                    onClick={() => this.handleAlign('left')}
                                    disabled={this.disabled}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    title="Align Center"
                                    class={this.getButtonClass(this.formattingState.textAlignCenter)}
                                    onClick={() => this.handleAlign('center')}
                                    disabled={this.disabled}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M3 4h18v2H3V4zm2 15h14v2H5v-2zm-2-5h18v2H3v-2zm2-5h14v2H5V9z" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    title="Align Right"
                                    class={this.getButtonClass(this.formattingState.textAlignRight)}
                                    onClick={() => this.handleAlign('right')}
                                    disabled={this.disabled}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M3 4h18v2H3V4zm4 15h14v2H7v-2zm-4-5h18v2H3v-2zm4-5h14v2H7V9z" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    title="Justify"
                                    class={this.getButtonClass(this.formattingState.textAlignJustify)}
                                    onClick={() => this.handleAlign('justify')}
                                    disabled={this.disabled}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M3 4h18v2H3V4zm0 15h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V9z" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Selection Tooltip - appears when text is selected */}
                {this.selectionTooltip.visible && (
                    <div
                        class="selection-tooltip"
                        style={{
                            top: `${this.selectionTooltip.top}px`,
                            left: `${this.selectionTooltip.left}px`,
                        }}
                    >
                        {this.enableBold && (
                            <button type="button" title="Bold" class={this.getButtonClass(this.formattingState.bold)} onClick={this.handleBold} disabled={this.disabled}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z" />
                                </svg>
                            </button>
                        )}

                        {this.enableItalic && (
                            <button type="button" title="Italic" class={this.getButtonClass(this.formattingState.italic)} onClick={this.handleItalic} disabled={this.disabled}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" />
                                </svg>
                            </button>
                        )}

                        {this.enableUnderline && (
                            <button
                                type="button"
                                title="Underline"
                                class={this.getButtonClass(this.formattingState.underline)}
                                onClick={this.handleUnderline}
                                disabled={this.disabled}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3h2zM4 20h16v2H4v-2z" />
                                </svg>
                            </button>
                        )}
                        
                        {this.enableBlockquote && (
                            <button
                                type="button"
                                title="Quote"
                                class={this.getButtonClass(this.formattingState.blockquote)}
                                onClick={this.handleBlockquote}
                                disabled={this.disabled}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                </svg>
                            </button>
                        )}
                        
                        {this.enableTextAlign && (
                            <div class="align-buttons">
                                <button
                                    type="button"
                                    title="Align Left"
                                    class={this.getButtonClass(this.formattingState.textAlignLeft)}
                                    onClick={() => this.handleAlign('left')}
                                    disabled={this.disabled}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    title="Align Center"
                                    class={this.getButtonClass(this.formattingState.textAlignCenter)}
                                    onClick={() => this.handleAlign('center')}
                                    disabled={this.disabled}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M3 4h18v2H3V4zm2 15h14v2H5v-2zm-2-5h18v2H3v-2zm2-5h14v2H5V9z" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    title="Align Right"
                                    class={this.getButtonClass(this.formattingState.textAlignRight)}
                                    onClick={() => this.handleAlign('right')}
                                    disabled={this.disabled}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M3 4h18v2H3V4zm4 15h14v2H7v-2zm-4-5h18v2H3v-2zm4-5h14v2H7V9z" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    title="Justify"
                                    class={this.getButtonClass(this.formattingState.textAlignJustify)}
                                    onClick={() => this.handleAlign('justify')}
                                    disabled={this.disabled}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M3 4h18v2H3V4zm0 15h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V9z" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Editor Content */}
                <div class="editor-content" ref={el => (this.editorContainer = el as HTMLDivElement)} data-placeholder={this.placeholder}></div>

                {/* Character Counter */}
                {this.showCounter && this.maxLength > 0 && (
                    <div class="char-counter">
                        {this.charCount} / {this.maxLength}
                    </div>
                )}
            </div>
        );
    }
}