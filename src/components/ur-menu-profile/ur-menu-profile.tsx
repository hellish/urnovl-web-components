import { Component, Prop, h, Element } from '@stencil/core';

@Component({
    tag: 'ur-menu-profile',
    styleUrl: 'ur-menu-profile.css',
    shadow: true,
})
export class UrMenuProfile {

    private resizeObserver: ResizeObserver;

    @Element()
    el: HTMLElement;

    @Prop()
    userAvatar?: string;

    @Prop()
    userName?: string;

    @Prop()
    userRole?: string;

    componentDidLoad() {
        this.resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                const width = entry.contentRect.width; // Observe the host width
                const avatarSize = width >= 57 ? '40px' : '32px';
                this.el.style.setProperty('--avatar-size', avatarSize);

                // Add or remove the 'hide-info' class based on the width
                if (width < 57) {
                    this.el.classList.add('hide-info');
                } else {
                    this.el.classList.remove('hide-info');
                }
            }
        });

        // Observe the host element
        this.resizeObserver.observe(this.el);
    }

    disconnectedCallback() {
        this.resizeObserver.disconnect();
    }

    render() {
        return (
            <div class="profile-container">
                <div class="avatar">
                    <ur-avatar
                        src={this.userAvatar}
                        name={this.userName || 'User'}
                        size="var(--avatar-size)"
                        radius="50%"
                    ></ur-avatar>
                </div>
                <div class="info">
                    <div class="username">{this.userName || 'Guest'}</div>
                    <div class="role">{this.userRole || 'No Role'}</div>
                </div>
            </div>
        );
    }
}
