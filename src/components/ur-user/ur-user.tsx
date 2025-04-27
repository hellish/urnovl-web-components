import { Component, Host, h, Prop, Event, Element, EventEmitter } from '@stencil/core';
import { USER_COVER_FALLBACK } from '../../data/user';

@Component({
    tag: 'ur-user',
    styleUrl: 'ur-user.css',
    shadow: true,
})
export class UrUser {

    @Element()
    el: HTMLElement;

    @Prop({ reflect: true })
    userId: string;

    @Prop()
    loading = false;

    @Prop()
    followed = false;

    @Prop()
    userTitle = 'User title'

    @Prop()
    userCover: string;

    @Prop()
    userCoverFallback = USER_COVER_FALLBACK;

    @Prop()
    followers = 0;

    @Prop()
    showStats = true;

    @Prop()
    userDescription: string;

    @Prop()
    borderRadius = '8px';

    @Event()
    userClicked: EventEmitter<string>;

    @Event()
    userFollowClicked: EventEmitter<[string, boolean]>;

    componentDidLoad() {
        this.el.style.setProperty("--page-border-radius", this.borderRadius);
    }

    handleFollowClicked($event: Event) {
        $event.stopPropagation();
        $event.preventDefault();
        this.userFollowClicked.emit([ this.userId, this.followed ]);
    }

    handleUserClicked($event) {
        $event.stopPropagation();
        $event.preventDefault();
        this.userClicked.emit(this.userId)
    }

    renderLoading() {
        return <Host>
            <div class="page loading">
                <section class="cover loading"></section>
                <section class="info">
                    <div class="title loading">&nbsp;</div>
                    <div class="stats loading"></div>
                    <div class="description loading">&nbsp;</div>
                    <div class="actions loading"></div>
                </section>
            </div>
        </Host>
    }

    render() {
        if (this.loading) {
            return this.renderLoading();
        }

        return (
            <Host>
                <div class="user" onClick={($event) => this.handleUserClicked($event)}>
                    <section class='cover' style={{
                        backgroundImage: this.userCover ? `url(${this.userCover})` : `url(${this.userCoverFallback})`
                    }}>
                    </section>
                    <section class='info'>
                        <div class='title'>{this.userTitle}</div>
                        {this.showStats &&
                            <div class='stats'>
                                <div class="followers">
                                    <div>
                                        <b>{this.followers}</b> Followers
                                    </div>
                                </div>
                            </div>
                        }
                        <div class="description">{this.userDescription}</div>
                        <div class="actions">
                            <ur-button class="follow"
                                       variant="outlined"
                                       onClick={($event) => this.handleFollowClicked($event)}>
                                {this.followed ? 'Unfollow' : 'Follow'}
                            </ur-button>
                        </div>
                    </section>
                </div>
            </Host>
        );
    }
}
