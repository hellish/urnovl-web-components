import {Component, Host, h, Prop, Event} from '@stencil/core';
import { PAGE_COVER_FALLBACK } from '../../data/page';

@Component({
  tag: 'ur-page',
  styleUrl: 'ur-page.css',
  shadow: true,
})
export class UrPage {

    @Prop()
    pageTitle = 'Page title'

    @Prop()
    pageCover;

    @Prop()
    pageCoverFallback = PAGE_COVER_FALLBACK;

    @Prop()
    followers = 0;

    @Prop()
    showStats = true;

    @Prop()
    pageDescription;

    @Event()
    pageFollowClicked;

    render() {
        return (
            <Host>
                <div class="page">
                    <section class='cover' style={{
                        backgroundImage: this.pageCover ? `url(${this.pageCover})` : `url(${this.pageCoverFallback})`
                    }}>
                    </section>
                    <section class='info'>
                        <div class='title'>{this.pageTitle}</div>
                        <div class="description">{this.pageDescription}</div>
                        {this.showStats &&
                            <div class='stats'>
                                <div class="followers">
                                    <div>
                                        <b>{this.followers}</b> Followers
                                    </div>
                                </div>
                            </div>
                        }
                        <div class="actions">
                            <ur-button class="follow" variant="outlined"
                                       onClick={() => this.pageFollowClicked.emit()}>Follow
                            </ur-button>
                        </div>
                    </section>

                </div>
            </Host>
        );
    }
}
