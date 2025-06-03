import { Component, Host, h, Prop, Event, Element, EventEmitter } from '@stencil/core';
import { PAGE_COVER_FALLBACK } from '../../data/page';

@Component({
  tag: 'ur-page',
  styleUrl: 'ur-page.css',
  shadow: true,
})
export class UrPage {

    @Element()
    el: HTMLElement;

    @Prop()
    pageId: string;

    @Prop()
    loading = false;

    @Prop()
    followed = false;

    @Prop()
    pageTitle: string = 'Page title'

    @Prop()
    pageCover: string;

    @Prop()
    pageCoverFallback: string = PAGE_COVER_FALLBACK;

    @Prop()
    followers: number = 0;

    @Prop()
    showStats: boolean = true;

    @Prop()
    pageDescription: string;

    @Prop()
    pageType: string;

    @Prop()
    borderRadius: string = '8px';

    @Event({ bubbles: true, composed: true })
    pageClicked: EventEmitter<string>;

    @Event({ bubbles: true, composed: true })
    pageFollowClicked: EventEmitter<[string, boolean]>;

    componentDidLoad() {
        this.el.style.setProperty("--page-border-radius", this.borderRadius);
    }

    handleFollowClicked($event: Event) {
        $event.stopPropagation();
        $event.preventDefault();
        this.pageFollowClicked.emit([ this.pageId, this.followed ]);
    }

    renderLoading() {
        return <Host>
            <div class="page loading">
                <section class="cover loading"></section>
                <section class="info">
                    <div class="title loading">&nbsp;</div>
                    <div class="description loading">&nbsp;</div>
                    <div class="stats loading"></div>
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
                <div class="page" onClick={() => {
                    this.pageClicked.emit(this.pageId);
                }}>
                    <section class='cover' style={{
                        backgroundImage: this.pageCover ? `url(${this.pageCover})` : `url(${this.pageCoverFallback})`
                    }}>
                    </section>
                    <section class='info'>
                        <div class='title'>{this.pageTitle}</div>
                        <div class="description">{this.pageType}</div>
                        {this.showStats &&
                            <div class='stats'>
                                <div class="followers">
                                    <div>
                                        <b>{this.followers}</b> {this.followers === 1 ? 'Follower' : 'Followers'}
                                    </div>
                                </div>
                            </div>
                        }
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
