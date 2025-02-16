import { Component, Host, Prop, h } from '@stencil/core';

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
    radius = '50%'

    // Default avatar image path
    private defaultAvatar = '/assets/img/user/account.png';

    componentDidLoad() {
        // force image download
        new Image().src = this.src;
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
                    alt={this.name || 'User Avatar'}
                />
            </Host>
        );
    }
}
