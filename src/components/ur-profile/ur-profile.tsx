import { Component, Host, Prop, h } from '@stencil/core';

import email_icon from '../../../assets/images/email.svg';
import facebook_icon from '../../../assets/images/facebook.svg';
import linkedin_icon from '../../../assets/images/linkedin.svg';
import phone_icon from '../../../assets/images/phone.svg';
import twitter_icon from '../../../assets/images/twitter.svg';
import website_icon from '../../../assets/images/website.svg';

@Component({
    tag: 'ur-profile',
    styleUrl: 'ur-profile.css',
    shadow: true,
})
export class UrProfile {

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
    show_follow = true;

    @Prop()
    show_donate = true;

    @Prop()
    show_become_member = true;

    @Prop()
    show_send_message = true;

    @Prop()
    show_stats = true;

    @Prop()
    stories_count = 0;

    @Prop()
    views_count = 0;

    @Prop()
    followers_count = 0;

    @Prop()
    writers_count = 0;

    @Prop()
    show_languages = true;

    @Prop()
    languages = 'English'

    @Prop()
    show_genres = true;

    @Prop()
    genres = 'All'

    @Prop()
    show_member_since = true;

    @Prop()
    member_since = 'May 25, 20215'

    render() {
        return (
            <Host>
                <div class="profile">
                    <div class="name">{this.name}</div>

                    {
                        this.description && <div class="description">{this.description}</div>
                    }


                    {
                        this.location && <div class="location">{this.location}</div>
                    }

                    <div class="social">
                        {
                            this.facebook_url && <a href={this.facebook_url} title="facebook" target="_blank">
                                <img src={facebook_icon} alt="facebook" />
                            </a>
                        }
                        {
                            this.twitter_url && <a href={this.twitter_url} title="twitter" target="_blank">
                                <img src={twitter_icon} alt="twitter" />
                            </a>
                        }
                        {
                            this.linkedin_url && <a href={this.linkedin_url} title="linkedin" target="_blank">
                                <img src={linkedin_icon} alt="linkedin" />
                            </a>
                        }
                        {
                            this.email && <a href={"mailto:" + this.email} title="email" target="_blank">
                                <img src={email_icon} alt="email" />
                            </a>
                        }
                        {
                            this.phone && <a href={"tel:" + this.phone} title="phone" target="_blank">
                                <img src={phone_icon} alt="phone" />
                            </a>
                        }
                    </div>

                    {
                        this.website && <a class="website" href={this.website} title="website" target="_blank">
                            <img src={website_icon} alt="website" />{this.website}
                        </a>
                    }

                    {
                        this.show_follow && <div class="follow-action action">
                            <button>Follow</button>
                        </div>
                    }

                    {
                        this.show_donate && <div class="donate-action action">
                            <button>Donate</button>
                        </div>
                    }

                    {
                        this.show_become_member && <div class="member-action action">
                            <button>Become Member</button>
                        </div>
                    }

                    {
                        this.show_send_message && <div class="message-action action">
                            <button>Message</button>
                        </div>
                    }

                    {
                        this.show_stats && <div class="stats">
                            <div class="stat">
                                <span class="label">Stories</span>
                                <span class="value">{this.stories_count}</span>
                            </div>
                            <div class="stat">
                                <span class="label">Views</span>
                                <span class="value">{this.views_count}</span>
                            </div>
                            <div class="stat">
                                <span class="label">Followers</span>
                                <span class="value">{this.followers_count}</span>
                            </div>
                            <div class="stat">
                                <span class="label">Writers</span>
                                <span class="value">{this.writers_count}</span>
                            </div>
                        </div>
                    }

                    {
                        this.show_languages && this.languages.trim().length > 0 && <div class="languages">
                            <div class="title">Languages</div>
                            <div class="pills">
                                {this.languages.split(',').map((language) => {
                                    return <div class="pill">{language.trim()}</div>
                                })}
                            </div>
                        </div>
                    }

                    {
                        this.show_genres && this.genres.trim().length > 0 && <div class="genres">
                            <div class="title">Genres</div>
                            <div class="pills">
                                {this.genres.split(',').map((genre) => {
                                    return <div class="pill">{genre.trim()}</div>
                                })}
                            </div>
                        </div>
                    }

                    {
                        this.show_member_since && this.member_since.trim().length > 0 && <div class="member_since">
                            Member Since: {this.member_since.trim()}
                        </div>
                    }

                </div>

            </Host>
        );
    }
}

