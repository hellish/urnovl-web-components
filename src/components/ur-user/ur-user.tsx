import { Component, Host, h, Prop, Event } from '@stencil/core';
import { USER_COVER_FALLBACK } from '../../data/user';

@Component({
    tag: 'ur-user',
    styleUrl: 'ur-user.css',
    shadow: true,
})
export class UrUser {

    @Prop()
    userTitle = 'User title'

    @Prop()
    userCover;

    @Prop()
    userCoverFallback = USER_COVER_FALLBACK;

    @Prop()
    followers = 0;

    @Prop()
    showStats = true;

    @Prop()
    userDescription;

    @Event()
    userFollowClicked;

    render() {
        return (
            <Host>
                <div class="user">
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
                            <ur-button class="follow" variant="outlined"
                                       onClick={() => this.userFollowClicked.emit()}>Follow
                            </ur-button>
                        </div>
                    </section>
                </div>
            </Host>
        );
    }
}
