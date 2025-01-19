import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
    tag: 'ur-thumbs-rating',
    styleUrl: 'ur-thumbs-rating.css',
    shadow: true,
})
export class UrThumbsRating {
    @Prop()
    likesCount: number = 0;

    @Prop()
    dislikeText: string = 'Dislike';

    @Prop({ mutable: true })
    isLiked: boolean = false;

    @Prop({ mutable: true })
    isDisliked: boolean = false;

    @Event({ bubbles: true, composed: true })
    thumbsUp: EventEmitter<void>;

    @Event({ bubbles: true, composed: true })
    thumbsDown: EventEmitter<void>;

    private handleThumbsUp() {
        console.log('Thumbs up clicked, current state:', this.isLiked);
        this.thumbsUp.emit();
    }

    private handleThumbsDown() {
        console.log('Thumbs down clicked, current state:', this.isDisliked);
        this.thumbsDown.emit();
    }

    render() {
        return (
            <Host>
                <div class="action">
                    <ur-button-icon
                        class={{
                            'thumbs': true,
                            'thumbs-up': true,
                            'active': this.isLiked,
                        }}
                        icon={this.isLiked ? 'thumb_up' : 'thumb_up--outlined'}
                        selectedIcon="thumb_up"
                        selected={this.isLiked}
                        onClick={() => this.handleThumbsUp()}
                    ></ur-button-icon>
                    <span class="action-text">{this.likesCount}</span>
                </div>

                <div class="action">
                    <ur-button-icon
                        class={{
                            'thumbs': true,
                            'thumbs-down': true,
                            'active': this.isDisliked,
                        }}
                        icon={this.isDisliked ? 'thumb_down' : 'thumb_down--outlined'}
                        selectedIcon="thumb_down"
                        selected={this.isDisliked}
                        onClick={() => this.handleThumbsDown()}
                    ></ur-button-icon>
                    <span class="action-text">{this.dislikeText}</span>
                </div>
            </Host>
        );
    }
}
