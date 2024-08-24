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
    src: string;

    @Prop()
    name?: string;

    @Prop()
    border = '0';

    @Prop()
    radius = '50%'

    render() {
        return (
            <Host>
                <img class="avatar" src={this.src} style={{ borderRadius: this.radius, height: this.size, width: this.size, borderWidth: this.border }} alt={this.name} />
            </Host>
        );
    }
}
