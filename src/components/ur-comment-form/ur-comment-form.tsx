import { Component, Prop, h, Event, EventEmitter, State, Element } from '@stencil/core';

interface FormState {
    text: string;
    error: string | null;
}

@Component({
    tag: 'ur-comment-form',
    styleUrl: 'ur-comment-form.css',
    shadow: true,
})
export class UrCommentForm {
    @Element() el!: HTMLElement;

    // Required props
    @Prop() 
    user: { displayName: string; avatar: string };
    
    @Prop() 
    isServer: boolean = false;

    // Configurable props with defaults
    @Prop() 
    placeholder: string = 'Write your comment here...';
    
    @Prop() 
    maxLength: number = 400;
    
    @Prop() 
    minLength: number = 1;
    
    @Prop() 
    disabled: boolean = false;

    // New prop for variant
    @Prop() 
    variant: 'desktop' | 'mobile' = 'desktop';

    // Internal state
    @State() private formState: FormState = {
        text: '',
        error: null,
    };

    // Events
    @Event() 
    commentSubmit: EventEmitter<{ text: string }>;
    
    @Event() 
    inputFocus: EventEmitter<FocusEvent>;
    
    @Event() 
    inputBlur: EventEmitter<FocusEvent>;

    private handleInput = (event: CustomEvent<{ name: string; value: string }>) => {
        const text = event.detail.value;

        this.formState = {
            ...this.formState,
            text,
            error: this.validateInput(text),
        };
    };

    private validateInput(text: string): string | null {
        if (text.length < this.minLength) {
            return 'Comment is too short';
        }
        if (text.length > this.maxLength) {
            return 'Comment is too long';
        }
        return null;
    }

    private isFormValid(): boolean {
        return this.formState.text.length >= this.minLength && this.formState.text.length <= this.maxLength && !this.formState.error && !this.disabled;
    }

    private handleFocus = (e: FocusEvent) => {
        this.inputFocus.emit(e);
    };

    private handleBlur = (e: FocusEvent) => {
        this.inputBlur.emit(e);
    };

    private handleSubmit = () => {
        if (!this.isFormValid()) {
            return;
        }

        console.log('Submitting comment:', this.formState.text);
        this.commentSubmit.emit({ text: this.formState.text });

        this.resetForm();
    };

    private resetForm() {
        this.formState = { text: '', error: null };
    }

    render() {
        if (this.isServer) {
            return null;
        }

        return (
            <div class={`comment-form ${this.variant}`}>
                {this.variant === 'desktop' ? (
                    <div class="form-content">
                        {this.user && <ur-avatar src={this.user.avatar} name={this.user.displayName} size="56px" />}
                        <div class="form-main">
                            <div class="input-container">
                                <ur-text-field
                                    label=""
                                    placeholder={this.placeholder}
                                    maxlength={this.maxLength}
                                    rows={3}
                                    autosize={true}
                                    counter={true}
                                    disabled={this.disabled}
                                    error={!!this.formState.error}
                                    errorMessage={this.formState.error}
                                    value={this.formState.text}
                                    onValueChanged={this.handleInput}
                                    onFocus={this.handleFocus}
                                    onBlur={this.handleBlur}
                                />
                            </div>
                            <div class="button-container">
                                <ur-button variant="filled" end-icon="send" disabled={!this.isFormValid()} onClick={this.handleSubmit}>
                                    Comment
                                </ur-button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div class="mobile-form">
                        {this.user && <ur-avatar src={this.user.avatar} name={this.user.displayName} size="56px" />}
                        <ur-text-field
                            label=""
                            placeholder={this.placeholder}
                            maxlength={this.maxLength}
                            rows={1}
                            autosize={true}
                            counter={false}
                            disabled={this.disabled}
                            error={!!this.formState.error}
                            errorMessage={this.formState.error}
                            value={this.formState.text}
                            onValueChanged={this.handleInput}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                        />
                        <ur-button-icon icon="send" variant="filled" disabled={!this.isFormValid()} onClick={this.handleSubmit}></ur-button-icon>
                    </div>
                )}
            </div>
        );
    }
}
