import { Event, Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'ur-novl',
    styleUrl: 'ur-novl.css',
    shadow: true,
})
export class UrNovl {

    @Prop()
    novlTitle = 'Novl title'

    @Prop()
    novlCover;

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

    @Event()
    authorClicked;

    render() {
        return (
            <Host>
                <section class='cover' style={{ backgroundImage: `url(${this.novlCover})` }}>
                    {!this.published && <div class="ongoing"><span>O</span></div>}
                </section>
                <section class='info'>
                    <div class='title'>{this.novlTitle}</div>
                    {this.showStats &&
                        <div class='stats'>
                            <div class="likes"><div><b>{this.likes}</b> Likes</div><div class="dot">·</div></div>
                            <div class="views"><b>{this.views}</b> Views</div>
                        </div>
                    }
                    <div class="description">{this.novlDescription}</div>
                    <div class="author" onClick={_ => this.authorClicked.emit()}>
                        <div class="avatar" style={{ backgroundImage: `url(${this.authorAvatar})` }}></div>
                        <div class="name">{this.authorName}</div>
                    </div>
                </section>
            </Host>
        );
    }
}
