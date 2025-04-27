import { Component, Host, Prop, h, Event, EventEmitter, State, Method } from '@stencil/core';

export enum FeedbackType {
    FEEDBACK = 'feedback',
    SUPPORT = 'support',
    PRESS = 'press',
}

@Component({
    tag: 'ur-feedback',
    styleUrl: 'ur-feedback.css',
    shadow: true,
})
export class UrFeedback {
    /**
     * Title text for the modal
     */
    @Prop()
    titleText: string = 'Oh, you mighty storyteller...';

    /**
     * Description text for the modal
     */
    @Prop()
    descriptionText: string = 'Please contact us and help us become better for you or just drop us a line saying hi.';

    /**
     * Placeholder text for the textarea
     */
    @Prop()
    placeholderText: string = 'Write your message here';

    /**
     * Text for the feedback radio option
     */
    @Prop()
    feedbackText: string = 'Feedback';

    /**
     * Text for the support radio option
     */
    @Prop()
    supportText: string = 'Support';

    /**
     * Text for the press radio option
     */
    @Prop()
    pressText: string = 'Press';

    /**
     * Text for success message
     */
    @Prop()
    successText: string = 'Thank you!';

    /**
     * Whether the user is logged in
     */
    @Prop()
    user: boolean = false;

    /**
     * Text for failure message
     */
    @Prop()
    failureText: string = 'An error occurred.';

    @Prop()
    messageLabel: string = 'Type your message here';

    @Prop()
    emailLabel: string = 'Email';

    @Prop()
    emailPlaceholder: string = 'Enter your email address';

    /**
     * Internal state for the text input
     */
    @State()
    text: string = '';

    /**
     * Whether the form is disabled (during submission)
     */
    @State()
    disabled: boolean = false;

    /**
     * Whether the submission was successful
     */
    @State()
    success: boolean = false;

    /**
     * Whether the submission failed
     */
    @State()
    failure: boolean = false;

    /**
     * The selected feedback mode
     */
    @State()
    mode: FeedbackType = FeedbackType.FEEDBACK;

    /**
     * Text for the send button
     */
    @Prop()
    sendText: string = 'Send';

    /**
     * User email
     */
    @State()
    userEmail: string = '';

    /**
     * Email validation error state
     */
    @State()
    emailError: boolean = false;

    /**
     * Event emitted when feedback is submitted
     */
    @Event({
        eventName: 'feedbackSubmit',
        composed: true,
        cancelable: true,
        bubbles: true,
    })
    feedbackSubmit: EventEmitter<{ type: FeedbackType; text: string; email?: string }>;

    /**
     * Handle text input changes
     */
    private handleTextChange = (event: CustomEvent) => {
        this.text = event.detail.value;
    };

    /**
     * Handle email input changes
     */
    private handleEmailChange = (event: CustomEvent) => {
        this.userEmail = event.detail.value;
    };

    /**
     * Handle email validation errors
     */
    private handleEmailError = (event: CustomEvent) => {
        this.emailError = event.detail.error;
    };

    /**
     * Handle radio group value changes
     */
    private handleModeChange = (event: CustomEvent) => {
        this.mode = event.detail.value as FeedbackType;
    };

    /**
     * Reset the form
     */
    @Method()
    async reset() {
        this.text = '';
        this.userEmail = '';
        this.mode = FeedbackType.FEEDBACK;
        this.success = false;
        this.failure = false;
        this.disabled = false;
        this.emailError = false;
    }

    /**
     * Validate form before submission
     */
    private validateForm(): boolean {
        // Check if message is provided
        if (!this.text.trim()) {
            return false;
        }

        // If user is not logged in, email is required and must be valid
        if (!this.user) {
            if (!this.userEmail.trim() || this.emailError) {
                return false;
            }
        }

        return true;
    }

    /**
     * Send the feedback
     */
    private send = () => {
        if (!this.validateForm() || this.disabled) {
            return;
        }

        this.disabled = true;

        // Prepare submission data
        const submissionData: { type: FeedbackType; text: string; email?: string } = {
            type: this.mode,
            text: this.text,
        };

        // Add email to submission data if user is not logged in
        if (!this.user) {
            submissionData.email = this.userEmail;
        }

        // Emit the feedbackSubmit event with the feedback data
        const submitted = this.feedbackSubmit.emit(submissionData);

        // If the event wasn't prevented, we assume it was handled by the parent
        if (submitted) {
            // This is a placeholder for API interaction
            // In a real implementation, the parent component would handle the API call
            // and then call methods on this component to update the UI state

            // For demo purposes, we'll simulate success after 1 second
            setTimeout(() => {
                this.handleSubmitSuccess();
            }, 1000);
        } else {
            this.disabled = false;
        }
    };

    /**
     * Handle successful submission
     */
    @Method()
    async handleSubmitSuccess() {
        this.success = true;
        this.failure = false;
    }

    /**
     * Handle failed submission
     */
    @Method()
    async handleSubmitFailure() {
        this.success = false;
        this.failure = true;
        this.disabled = false;
    }

    render() {
        return (
            <Host>
                <div class="feedback-container">
                    <div class="body">
                        <div class="title">{this.titleText}</div>
                        <div class="desc">{this.descriptionText}</div>

                        {!this.user && (
                            <div class="user-email">
                                <ur-text-field
                                    label={this.emailLabel}
                                    value={this.userEmail}
                                    disabled={this.disabled}
                                    placeholder={this.emailPlaceholder}
                                    type="email"
                                    required={true}
                                    onValueChanged={this.handleEmailChange}
                                    onErrorStateChanged={this.handleEmailError}
                                ></ur-text-field>
                            </div>
                        )}

                        <ur-text-field
                            class="message-textarea"
                            value={this.text}
                            disabled={this.disabled}
                            placeholder={this.placeholderText}
                            label={this.messageLabel}
                            rows={5}
                            autosize={true}
                            minRows={5}
                            required={true}
                            onValueChanged={this.handleTextChange}
                        ></ur-text-field>

                        {!this.success && !this.failure && (
                            <ur-radio-group name="feedback-type" value={this.mode} onValueChanged={this.handleModeChange}>
                                <ur-radio-button value={FeedbackType.FEEDBACK}>{this.feedbackText}</ur-radio-button>
                                <ur-radio-button value={FeedbackType.SUPPORT}>{this.supportText}</ur-radio-button>
                                <ur-radio-button value={FeedbackType.PRESS}>{this.pressText}</ur-radio-button>
                            </ur-radio-group>
                        )}

                        {!this.success && !this.failure && (
                            <div class="send-button-container">
                                <ur-button variant="filled" disabled={this.disabled || !this.text || (!this.user && (!this.userEmail || this.emailError))} onClick={this.send}>
                                    {this.sendText}
                                </ur-button>
                            </div>
                        )}

                        {this.success && <div class="success">{this.successText}</div>}
                        {this.failure && <div class="failure">{this.failureText}</div>}
                    </div>
                </div>
            </Host>
        );
    }
}
