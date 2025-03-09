import { Component, Host, Prop, forceUpdate, h } from '@stencil/core';

@Component({
    tag: 'ur-avatar',
    styleUrl: 'ur-avatar.css',
    shadow: true,
})
export class UrAvatar {

    @Prop()
    size = '32px'

    @Prop()
    src: string; // Avatar source URL

    @Prop()
    name?: string;

    @Prop()
    border = '0';

    @Prop()
    radius = '50%';

    @Prop()
    variant: 'user' | 'page' = 'user';

    // Default avatar image path
    private defaultUserAvatar = '/assets/img/user/account.png';
    private defaultPageAvatar = '/assets/img/pages/page.png';

    private get defaultAvatar() {
        return this.variant === 'page' ? this.defaultPageAvatar : this.defaultUserAvatar;
    }

    componentDidLoad() {
        const m = new Image();
        m.src = this.src || this.defaultAvatar;
        m.onload = () => {
            forceUpdate(this);
        }

        m.onerror = () => {
            this.src = this.defaultAvatar;
            forceUpdate(this);
        }
    }

    render() {
        // Use default avatar if src is not provided or is empty
        const avatarSrc = this.src || this.defaultAvatar;

        return (
            <Host>
                <img
                    class="avatar"
                    src={avatarSrc}
                    style={{ borderRadius: this.radius, height: this.size, width: this.size, borderWidth: this.border }}
                    alt={this.name || (this.variant === 'page' ? 'Business Avatar' : 'User Avatar')}
                />
            </Host>
        );
    }
}
