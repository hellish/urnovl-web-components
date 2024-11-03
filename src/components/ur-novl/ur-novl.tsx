import { Event, Component, Host, Prop, h } from '@stencil/core';
import { NOVL_COVER_FALLBACK } from '../../data/novls';

@Component({
    tag: 'ur-novl',
    styleUrl: 'ur-novl.css',
    shadow: true,
})
export class UrNovl {

    @Prop({ reflect: true })
    novlId;

    @Prop()
    loading = false;

    @Prop()
    novlTitle = 'Novl title';

    @Prop()
    novlCover;

    @Prop()
    novlCoverFallback = NOVL_COVER_FALLBACK;

    @Prop()
    likes = 0;

    @Prop()
    views = 0;

    @Prop()
    showStats = true;

    @Prop()
    novlDescription;

    @Prop()
    authorAvatar;

    @Prop()
    authorName;

    @Prop()
    published = false;

    @Prop()
    price: string | null = null;

    @Prop()
    publisherAvatar: string | null = null;

    @Prop()
    publisherName: string | null = null;

    @Event()
    authorClicked;

    render() {
        return (
            <Host>
                <div class="novl">
                    {this.loading && <section class="cover loading"></section>}
                    {!this.loading && <section
                        class="cover"
                        style={{
                            backgroundImage: this.novlCover ? `url(${this.novlCover})` : `url(${this.novlCoverFallback})`,
                        }}
                    >
                        {!this.published && (
                            <div class="ongoing">
                                <span>O</span>
                            </div>
                        )}
                        {!!this.price && (
                            <div class="price">
                                <span>{this.price}</span>
                            </div>
                        )}
                        {!!this.publisherAvatar && this.publisherName && (
                            <div class="publisher">
                                <div class="avatar" style={{ backgroundImage: `url(${this.publisherAvatar})` }}></div>
                                <div class="name">{this.publisherName}</div>
                            </div>
                        )}
                    </section>}
                    <section class="info">
                        {this.loading && <div class="title loading">&nbsp;</div>}
                        {!this.loading && <div class="title">{this.novlTitle}</div>}
                        {this.loading && <div class="stats loading"></div>}
                        {this.showStats && !this.loading && (
                            <div class="stats">
                                <div class="likes">
                                    <div>
                                        <b>{this.likes}</b> Likes
                                    </div>
                                    <div class="dot">·</div>
                                </div>
                                <div class="views">
                                    <b>{this.views}</b> Views
                                </div>
                            </div>
                        )}
                        {this.loading && <div class="description loading">&nbsp;</div>}
                        {!this.loading && <div class="description">{this.novlDescription}</div>}
                        <div class="author" onClick={_ => this.authorClicked.emit()}>
                            {this.loading && <div class="avatar loading">&nbsp;</div>}
                            {!this.loading && <div class="avatar" style={{ backgroundImage: `url(${this.authorAvatar})` }}></div>}
                            {this.loading && <div class="name loading">&nbsp;</div>}
                            {!this.loading && <div class="name">{this.authorName}</div>}
                        </div>
                    </section>
                </div>
            </Host>
        );
    }
}
