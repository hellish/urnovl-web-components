import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'ur-menu',
    styleUrl: 'ur-menu.css',
    shadow: true,
})
export class UrLeftMenu {
    @State()
    isExpanded: boolean = false; // Initialize with default state

    @Prop()
    isLoggedIn: boolean;

    @Prop()
    userName?: string;

    @Prop()
    userRole?: string;

    @Prop()
    userAvatar?: string;

    @Event()
    toggleExpand: EventEmitter<boolean>; // Emit the new state of isExpanded

    // Toggle menu state and emit event
    toggleMenu() {
        this.isExpanded = !this.isExpanded; // Update the internal state
        this.toggleExpand.emit(this.isExpanded); // Emit the updated state
    }

    handleToggle() {
        this.toggleExpand.emit(this.isExpanded); // Emit the toggled state
    }

    renderNavigation() {
        return (
            <div class="menu-navigation">
                <ur-list>
                    <ur-list-item class="material-icons-outlined" icon="home--outlined" content="Home"></ur-list-item>
                    <ur-list-item icon="import_contacts--outlined" content="Stories"></ur-list-item>
                    <ur-list-item icon="hub--outlined" content="Pages"></ur-list-item>
                    <ur-list-item icon="emoji_events--outlined" content="Competitions"></ur-list-item>
                </ur-list>
            </div>
        );
    }

    renderCollapsedFooter() {
        return (
            <footer class="menu-footer collapsed">
                <div class="social-links">
                    <a href="https://www.facebook.com/urnovl.co" target="_blank" rel="noopener noreferrer" class="social">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon">
                            <path
                                d="M4.21705 8.5216H5.97091V15.7419C5.97091 15.8845 6.08642 16 6.22897 16H9.2027C9.34526 16 9.46077 15.8845 9.46077 15.7419V8.55561H11.477C11.6081 8.55561 11.7184 8.45724 11.7333 8.32702L12.0396 5.66885C12.048 5.59572 12.0248 5.52248 11.9759 5.46761C11.9269 5.4127 11.8568 5.38126 11.7832 5.38126H9.46087V3.71499C9.46087 3.2127 9.73132 2.95799 10.2648 2.95799C10.3408 2.95799 11.7832 2.95799 11.7832 2.95799C11.9258 2.95799 12.0413 2.84243 12.0413 2.69992V0.259974C12.0413 0.117419 11.9258 0.00190968 11.7832 0.00190968H9.6906C9.67584 0.0011871 9.64306 0 9.59475 0C9.23166 0 7.96956 0.0712774 6.97261 0.988439C5.86799 2.0048 6.02154 3.22173 6.05824 3.43272V5.38121H4.21705C4.07449 5.38121 3.95898 5.49672 3.95898 5.63928V8.26348C3.95898 8.40604 4.07449 8.5216 4.21705 8.5216Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                    <a href="https://x.com/urnovl" target="_blank" rel="noopener noreferrer" class="social x">
                        <svg viewBox="0 0 512 509.64" xmlns="http://www.w3.org/2000/svg" class="icon">
                            <path
                                fill="currentColor"
                                d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
                            />
                        </svg>
                    </a>
                    <a href="https://discord.gg/2PpJk9vmN6" target="_blank" rel="noopener noreferrer" class="social discord">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon">
                            <path
                                d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                    <a href="/" class="feedback social">
                        <mdui-icon class="icon" name="feedback"></mdui-icon>
                    </a>
                </div>
                <div class="vertical-logo">
                    <a href="/" aria-label="Navigate to homepage">
                        <ur-logo width="55" height="14" opacity={0.5} rotation={-90}></ur-logo>
                    </a>
                </div>
            </footer>
        );
    }

    renderLoggedOutExpanded() {
        return (
            <div class="menu loggedout">
                <div class="welcome">
                    <ur-button class="menu-button" icon="login" variant="filled" full-width>
                        Sign Up/In
                    </ur-button>
                </div>
            </div>
        );
    }

    renderLoggedOutCollapsed() {
        return (
            <div class="menu loggedout">
                <div class="welcome">
                    <ur-button-icon class="menu-button" icon="login" variant="filled"></ur-button-icon>
                </div>
            </div>
        );
    }

    renderPremiumExpanded() {
        return (
            <div class="premium expanded">
                <ur-button class="menu-button" icon="workspace_premium--outlined" variant="filled" full-width>
                    Go Premium
                </ur-button>
            </div>
        );
    }

    renderPremiumCollapsed() {
        return (
            <div class="premium collapsed">
                <ur-button-icon class="menu-button" icon="workspace_premium--outlined" variant="filled"></ur-button-icon>
            </div>
        );
    }

    renderFooter() {
        const currentPath = window.location.pathname;

        const links = [
            { href: '/terms-of-service', label: 'Terms of Service' },
            { href: '/house-rules', label: 'House Rules' },
            { href: '/privacy-policy', label: 'Privacy Policy' },
            { href: '/terms-of-pay', label: 'Payment Terms' },
            { href: '/quills-acceptable-use-policy', label: 'Quills Acceptable Use Policy' },
            { href: '/affiliate-agreement', label: 'Partnership Program' },
        ];

        return (
            <footer class="menu-footer">
                <div class="horizontal-logo">
                    <a href="/" aria-label="Navigate to homepage">
                        <ur-logo width="55" height="14" opacity={0.5} rotation={0}></ur-logo>
                    </a>
                </div>
                <div class="link-hld">
                    {links.map((link, index) => (
                        <a key={index} href={link.href} class={`link ${currentPath === link.href ? 'active' : ''}`} slot="guide-links-primary" style={{ display: 'block' }}>
                            {link.label}
                        </a>
                    ))}
                </div>
                <span class="est">© {new Date().getFullYear()} Urnovl.co</span>
            </footer>
        );
    }

    render() {
        return (
            <div class={`left-menu ${this.isExpanded ? 'expanded' : 'collapsed'}`}>
                {/* Toggle Button */}
                <ur-button
                    variant="text"
                    class="toggle-button"
                    onClick={() => {
                        this.toggleMenu(); // Update the internal state
                        this.handleToggle(); // Emit the event
                    }}
                >
                    <mdui-icon class="icon" name={this.isExpanded ? 'close' : 'menu'}></mdui-icon>
                </ur-button>

                {/* Use ur-menuprofile for both expanded and collapsed states */}
                {this.isLoggedIn && (
                    <ur-menuprofile
                        user-avatar={this.userAvatar}
                        user-name={this.userName}
                        user-role={this.userRole}
                        class={this.isExpanded ? 'expanded' : 'collapsed'}
                    ></ur-menuprofile>
                )}

                {this.isLoggedIn && this.isExpanded && this.renderPremiumExpanded()}
                {this.isLoggedIn && !this.isExpanded && this.renderPremiumCollapsed()}

                {!this.isLoggedIn && this.isExpanded && this.renderLoggedOutExpanded()}
                {!this.isLoggedIn && !this.isExpanded && this.renderLoggedOutCollapsed()}

                {this.renderNavigation()}

                {this.isExpanded ? this.renderFooter() : this.renderCollapsedFooter()}
            </div>
        );
    }
}
