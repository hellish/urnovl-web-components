import { Component, Prop, h, Event, EventEmitter, State, Method, Element, Watch } from '@stencil/core';
import { Editor, Extension } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';

@Component({
    tag: 'ur-editor',
    styleUrl: 'ur-editor.css',
    shadow: true,
})
export class UrEditor {
    private editor: Editor;
    private editorContainer?: HTMLDivElement;

    /**
     * Stores the last valid HTML state before hitting limits
     */
    private lastValidHTML: string | null = null;

    @Element()
    hostElement: HTMLElement;

    /**
     * The content to edit
     */
    @Prop()
    content: string = '';

    /**
     * Whether the editor is disabled
     */
    @Prop()
    disabled: boolean = false;

    /**
     * Placeholder text when content is empty
     */
    @Prop()
    placeholder: string = 'Tell your story...';

    /**
     * Label for word counter
     */
    @Prop()
    wordLabel: string = 'Words';

    /**
     * Label for character counter
     */
    @Prop()
    charLabel: string = 'Characters';

    /**
     * Enable bold formatting
     */
    @Prop()
    enableBold: boolean = true;

    /**
     * Enable italic formatting
     */
    @Prop()
    enableItalic: boolean = true;

    /**
     * Enable underline formatting
     */
    @Prop()
    enableUnderline: boolean = true;

    /**
     * Enable text alignment
     */
    @Prop()
    enableTextAlign: boolean = true;

    /**
     * Enable blockquote
     */
    @Prop()
    enableBlockquote: boolean = true;

    /**
     * Optional max length for content (in characters)
     */
    @Prop()
    maxLength: number = 0;

    /**
     * Optional max word count
     */
    @Prop()
    maxWords: number = 0;

    /**
     * Show character and word counter
     */
    @Prop()
    showCounter: boolean = false;

    /**
     * Show fixed toolbar or only selection tooltip
     */
    @Prop()
    showFixedToolbar: boolean = true;

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
     * Internal state to track word count
     */
    @State() wordCount: number = 0;

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
     * Watch for changes to maxLength - ensure mutual exclusivity with maxWords
     */
    @Watch('maxLength')
    maxLengthUpdated(newValue: number) {
        // If setting a character limit, disable any word limit
        if (newValue > 0 && this.maxWords > 0) {
            this.maxWords = 0;
        }
    }

    /**
     * Watch for changes to maxWords - ensure mutual exclusivity with maxLength
     */
    @Watch('maxWords')
    maxWordsUpdated(newValue: number) {
        // If setting a word limit, disable any character limit
        if (newValue > 0 && this.maxLength > 0) {
            this.maxLength = 0;
        }
    }

    /**
     * Watch for content changes from outside
     */
    @Watch('content')
    async contentUpdated(newContent: string) {
        if (this.editor) {
            const currentHTML = this.editor.getHTML();
            if (newContent !== currentHTML) {
                this.editor.commands.setContent(newContent, false);
                this.updateCounts();
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
            // Also update the editor container's attribute
            if (isDisabled) {
                this.hostElement.setAttribute('disabled', '');
            } else {
                this.hostElement.removeAttribute('disabled');
            }
        }
    }

    /**
     * Update both character and word counts based on editor content
     */
    private updateCounts() {
        if (this.editor) {
            // Get plain text content for accurate counts
            const text = this.editor.getText();
            this.charCount = text ? text.length : 0;

            // Calculate word count by splitting on whitespace and filtering out empty strings
            const words = text
                ? text
                      .trim()
                      .split(/\s+/)
                      .filter(word => word.length > 0)
                : [];
            this.wordCount = words.length;
        }
    }

    /**
     * Check if the current text exceeds the active maximum limit
     * Only one type of limit (character or word) can be active at a time
     */
    private isExceedingLimits(text: string): boolean {
        // If no limits are set, content never exceeds limits
        if (this.maxLength <= 0 && this.maxWords <= 0) {
            return false;
        }

        // Character limit takes precedence if both are set
        if (this.maxLength > 0) {
            const charCount = text ? text.length : 0;
            return charCount > this.maxLength;
        }

        // Word limit check
        if (this.maxWords > 0) {
            const words = text
                ? text
                      .trim()
                      .split(/\s+/)
                      .filter(word => word.length > 0)
                : [];
            const wordCount = words.length;
            return wordCount > this.maxWords;
        }

        // If we get here, no limits are exceeded
        return false;
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

        // Set initial disabled state
        if (this.disabled) {
            this.hostElement.setAttribute('disabled', '');
        }

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

        // Add placeholder extension
        extensions.push(
            Placeholder.configure({
                placeholder: this.placeholder,
                emptyEditorClass: 'is-editor-empty',
                emptyNodeClass: 'is-node-empty',
                showOnlyWhenEditable: true,
                showOnlyCurrent: false,
            }),
        );

        this.editor = new Editor({
            element: this.editorContainer,
            extensions,
            content: this.content,
            editable: !this.disabled,
            onUpdate: ({ editor }) => {
                // Get the current content
                const currentHTML = editor.getHTML();
                const currentText = editor.getText();

                // Update counts
                this.updateCounts();

                // Check if content exceeds any limits
                if (this.isExceedingLimits(currentText)) {
                    // If it does, prevent the update by preserving the existing valid state
                    const preventTransaction = editor.state.tr.setMeta('preventUpdate', true);
                    editor.view.dispatch(preventTransaction);

                    // We need to use setTimeout to ensure we don't interfere with the current transaction
                    setTimeout(() => {
                        // If we have a saved valid state with formatting intact
                        if (this.lastValidHTML) {
                            // Store cursor position before setting content
                            const pos = editor.state.selection.anchor;

                            // Use the previous HTML which preserved all formatting
                            editor.commands.setContent(this.lastValidHTML, false);

                            // Try to restore cursor position as much as possible
                            if (pos > 0) {
                                const newPos = Math.min(pos, editor.state.doc.content.size);
                                editor.commands.setTextSelection(newPos);
                            }
                        }

                        // Re-update counts after reverting
                        this.updateCounts();
                    }, 0);
                } else {
                    // If content is valid, save it as the last valid state
                    this.lastValidHTML = currentHTML;
                    // And emit the update
                    this.contentChanged.emit(currentHTML);
                }
            },
            onSelectionUpdate: () => {
                // Only update formatting state, tooltip is managed by mouse events
                this.updateFormattingState();
            },
            // Add transaction handler to detect formatting changes
            onTransaction: ({ transaction }) => {
                // Skip if this transaction was marked to prevent update
                if (transaction.getMeta('preventUpdate')) {
                    return;
                }

                this.updateFormattingState();
            },
        });

        // Initialize states
        this.updateCounts();
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
            // Check if the new content would exceed limits before setting
            if (!this.isExceedingLimits(content)) {
                this.editor.commands.setContent(content, false);
                this.updateCounts();
                this.updateFormattingState();
            }
        }
    }

    /**
     * Public method to clear content
     */
    @Method()
    async clearContent(): Promise<void> {
        if (this.editor) {
            this.editor.commands.clearContent();
            this.updateCounts();
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

    // Add this function to your component to render formatting buttons consistently
    private renderFormattingButtons() {
        return (
            <fragment>
                {this.enableBold && (
                    <ur-button-icon
                        class={{
                            'toolbar-button': true,
                            'is-active': this.formattingState.bold,
                        }}
                        icon="format_bold"
                        selected={this.formattingState.bold}
                        disabled={this.disabled}
                        onClick={this.handleBold}
                    ></ur-button-icon>
                )}

                {this.enableItalic && (
                    <ur-button-icon
                        class={{
                            'toolbar-button': true,
                            'is-active': this.formattingState.italic,
                        }}
                        icon="format_italic"
                        selected={this.formattingState.italic}
                        disabled={this.disabled}
                        onClick={this.handleItalic}
                    ></ur-button-icon>
                )}

                {this.enableUnderline && (
                    <ur-button-icon
                        class={{
                            'toolbar-button': true,
                            'is-active': this.formattingState.underline,
                        }}
                        icon="format_underlined"
                        selected={this.formattingState.underline}
                        disabled={this.disabled}
                        onClick={this.handleUnderline}
                    ></ur-button-icon>
                )}

                {this.enableBlockquote && (
                    <ur-button-icon
                        class={{
                            'toolbar-button': true,
                            'is-active': this.formattingState.blockquote,
                        }}
                        icon="format_quote"
                        selected={this.formattingState.blockquote}
                        disabled={this.disabled}
                        onClick={this.handleBlockquote}
                    ></ur-button-icon>
                )}

                {this.enableTextAlign && (
                    <div class="align-buttons">
                        <ur-button-icon
                            class={{
                                'toolbar-button': true,
                                'is-active': this.formattingState.textAlignLeft,
                            }}
                            icon="format_align_left"
                            selected={this.formattingState.textAlignLeft}
                            disabled={this.disabled}
                            onClick={() => this.handleAlign('left')}
                        ></ur-button-icon>

                        <ur-button-icon
                            class={{
                                'toolbar-button': true,
                                'is-active': this.formattingState.textAlignCenter,
                            }}
                            icon="format_align_center"
                            selected={this.formattingState.textAlignCenter}
                            disabled={this.disabled}
                            onClick={() => this.handleAlign('center')}
                        ></ur-button-icon>

                        <ur-button-icon
                            class={{
                                'toolbar-button': true,
                                'is-active': this.formattingState.textAlignRight,
                            }}
                            icon="format_align_right"
                            selected={this.formattingState.textAlignRight}
                            disabled={this.disabled}
                            onClick={() => this.handleAlign('right')}
                        ></ur-button-icon>

                        <ur-button-icon
                            class={{
                                'toolbar-button': true,
                                'is-active': this.formattingState.textAlignJustify,
                            }}
                            icon="format_align_justify"
                            selected={this.formattingState.textAlignJustify}
                            disabled={this.disabled}
                            onClick={() => this.handleAlign('justify')}
                        ></ur-button-icon>
                    </div>
                )}
            </fragment>
        );
    }

    render() {
        return (
            <div class="ur-editor">
                {/* Fixed Toolbar - Can be toggled with showFixedToolbar prop */}
                {this.showFixedToolbar && <div class="editor-toolbar">{this.renderFormattingButtons()}</div>}

                {/* Selection Tooltip - appears when text is selected */}
                {this.selectionTooltip.visible && (
                    <div
                        class="selection-tooltip"
                        style={{
                            top: `${this.selectionTooltip.top}px`,
                            left: `${this.selectionTooltip.left}px`,
                        }}
                    >
                        {this.renderFormattingButtons()}
                    </div>
                )}

                {/* Editor Content */}
                <div class="editor-content" ref={el => (this.editorContainer = el as HTMLDivElement)}></div>

                {/* Character and Word Counter */}
                {this.showCounter && (
                    <div class="content-counter">
                        <div class="word-counter">
                            {this.wordLabel}: {this.wordCount}
                            {this.maxWords > 0 ? ` / ${this.maxWords}` : ''}
                        </div>
                        <div class="char-counter">
                            {this.charLabel}: {this.charCount}
                            {this.maxLength > 0 ? ` / ${this.maxLength}` : ''}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
