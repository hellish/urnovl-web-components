import { Component, Event, Host, Prop, h } from '@stencil/core';
import { isNumber } from '../../utils/utils';
import { Icons } from './icons';

import '../ur-avatar/ur-avatar';
import '../ur-button/ur-button';

@Component({
    tag: 'ur-page-profile',
    styleUrl: 'ur-page-profile.css',
    shadow: true,
})
export class UrPageProfile {

    @Prop()
    avatar;

    @Prop()
    name;

    @Prop()
    description = null;

    @Prop()
    location = null;

    @Prop()
    facebook_url = null;

    @Prop()
    twitter_url = null;

    @Prop()
    linkedin_url = null;

    @Prop()
    email = null;

    @Prop()
    phone = null;

    @Prop()
    website = null;

    @Prop()
    stories: number | null = null;

    @Prop()
    views: number | null = null;

    @Prop()
    following: number | null = null;

    @Prop()
    followers: number | null = null;

    @Prop()
    members: number | null = null;

    @Prop()
    showFollow = false;

    @Event()
    follow;

    @Prop()
    showBecomeMember = false;

    @Event()
    member;

    @Prop()
    showDonate = false;

    @Event()
    donate;

    @Prop()
    showSendMessage = false;

    @Event()
    sendMessage;

    @Prop()
    languages: string | null = null;

    @Prop()
    genres: string | null = null;

    @Prop()
    literatureTypes: string | null = null;

    @Prop()
    pageCreatorName = null;

    @Prop()
    pageCreatorImage = null;

    @Prop()
    pageCreationDate = null;

    render() {
        return (
            <Host>
                <div class="profile">
                    <div class="avatar">
                        <ur-avatar
                            border={"5px"}
                            radius={"25px"}
                            size={"96px"}
                            src={this.avatar}
                            name={this.name}></ur-avatar>
                    </div>
                    <div class="info">
                        <div class="name">{this.name}</div>
                        {this.description && <div class="description">{this.description}</div>}
                        {this.location && <div class="location">{this.location}</div>}
                        {(!!this.facebook_url || !!this.twitter_url || !!this.linkedin_url || !!this.email || !!this.phone) && (
                            <div class="social">
                                {
                                    this.facebook_url && <a href={this.facebook_url} title="facebook" target="_blank">
                                        <span class="icon" innerHTML={Icons.facebook}></span>
                                    </a>
                                }
                                {
                                    this.twitter_url && <a href={this.twitter_url} title="twitter" target="_blank">
                                        <span class="icon" innerHTML={Icons.twitter}></span>
                                    </a>
                                }
                                {
                                    this.linkedin_url && <a href={this.linkedin_url} title="linkedin" target="_blank">
                                        <span class="icon" innerHTML={Icons.linkedin}></span>
                                    </a>
                                }
                                {
                                    this.email && <a href={"mailto:" + this.email} title="email" target="_blank">
                                        <span class="icon" innerHTML={Icons.email}></span>
                                    </a>
                                }
                                {
                                    this.phone && <a href={"tel:" + this.phone} title="phone" target="_blank">
                                        <span class="icon" innerHTML={Icons.phone}></span>
                                    </a>
                                }
                            </div>
                        )}
                        {
                            this.website && <a class="website" href={this.website} title="website" target="_blank">
                                <span class="icon" innerHTML={Icons.website}></span>
                                {this.website}
                            </a>
                        }
                    </div>
                    <div class="actions">
                        {this.showFollow && <ur-button class="follow" onClick={() => this.follow.emit()}>Follow</ur-button>}
                        {this.showBecomeMember && <ur-button class="follow" variant="outlined" onClick={() => this.member.emit()}>Become a Member</ur-button>}
                        {this.showDonate && <ur-button class="follow" variant="outlined" onClick={() => this.donate.emit()}>Donate</ur-button>}
                        {this.showSendMessage && <ur-button class="follow" variant="outlined" onClick={() => this.sendMessage.emit()}>Message</ur-button>}
                    </div>
                    <div class="stats">
                        {isNumber(this.stories) && <div>
                            <div class="stat">
                                <div class="key">Stories</div>
                                <div class="value">{this.stories}</div>
                            </div>
                        </div>}
                        {isNumber(this.views) && <div>
                            <div class="stat">
                                <div class="key">Views</div>
                                <div class="value">{this.views}</div>
                            </div>
                        </div>}
                        {isNumber(this.following) && <div>
                            <div class="stat">
                                <div class="key">Following</div>
                                <div class="value">{this.following}</div>
                            </div>
                        </div>}
                        {isNumber(this.followers) && <div>
                            <div class="stat">
                                <div class="key">Followers</div>
                                <div class="value">{this.followers}</div>
                            </div>
                        </div>}
                        {isNumber(this.members) && <div>
                            <div class="stat">
                                <div class="key">Members</div>
                                <div class="value">{this.members}</div>
                            </div>
                        </div>}
                    </div>
                    {this.languages && <div class="languages">
                        <div class="category">Languages</div>
                        <div class="items">
                            {this.languages.split(",").map(language => {
                                return <div class="chip">{language}</div>
                            })}
                        </div>
                    </div>}
                    {this.genres && <div class="genres">
                        <div class="category">Genres</div>
                        <div class="items">
                            {this.genres.split(",").map(genre => {
                                return <div class="chip">{genre}</div>
                            })}
                        </div>
                    </div>}
                    {this.literatureTypes && <div class="literature-types">
                        <div class="category">Literature Types</div>
                        <div class="items">
                            {this.literatureTypes.split(",").map(litType => {
                                return <div class="chip">{litType}</div>
                            })}
                        </div>
                    </div>}
                    {this.pageCreatorName && this.pageCreatorImage && <div class="created-by">
                        <div class="category">Created by</div>
                        <div class="person">
                            <ur-avatar name={this.pageCreatorName} src={this.pageCreatorImage}></ur-avatar>
                            <div>{this.pageCreatorName}</div>
                        </div>
                    </div>}
                    {this.pageCreationDate && <div class="page-creation-date">
                        Page Created: {this.pageCreationDate}
                    </div>}
                </div>
            </Host>
        );
    }
}
