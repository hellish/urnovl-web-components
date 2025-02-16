import { Component, h, State, Prop, Event, EventEmitter, Watch, Host, Element, Method } from '@stencil/core';

@Component({
    tag: 'ur-main-menu',
    styleUrl: 'ur-main-menu.css',
    shadow: true,
})
export class UrMainMenu {

    private resizeObserver: ResizeObserver;

    private mutationObserver: MutationObserver;

    @Element()
    el!: HTMLUrMainMenuElement;

    @State()
    expanded = false;

    @State()
    parentHeight: number;

    @Prop()
    opened = false;

    @Watch('opened')
    watchOpenedHandler(newVal: boolean) {
        this.expanded = newVal;
        this.toggleExpand.emit(this.expanded); // Notify of the change
    }

    @Method()
    public async open() {
        if (!this.expanded) {
            this.expanded = true;
            this.opened = true;
            this.menuToggleClick.emit(true);
            this.toggleExpand.emit(true);
        }
    }

    @Method()
    public async close() {
        if (this.expanded) {
            this.expanded = false;
            this.opened = false;
            this.menuToggleClick.emit(false);
            this.toggleExpand.emit(false);
        }
    }

    @Method()
    public async toggle() {
        if (this.expanded) {
            this.close();
        } else {
            this.open();
        }
    }

    @Method()
    public async reset() {
        this.expanded = this.opened;
        this.toggleExpand.emit(this.expanded);
    }


    @Prop()
    loggedIn: boolean;

    @Prop()
    userName?: string;

    @Prop()
    userRole?: string;

    @Prop()
    userAvatar?: string;

    @Prop()
    badgeCount = 10;

    @Prop()
    termsText = 'Terms of Service';

    @Prop()
    rulesText = 'House Rules';

    @Prop()
    privacyText = 'Privacy Policy';

    @Prop()
    paymentText = 'Payment Terms';

    @Prop()
    acceptableUseText = 'Quills Acceptable Use Policy';

    @Prop()
    partnershipText = 'Partnership Program';

    @Prop()
    homeText = 'Home';

    @Prop()
    storiesText = 'Stories';

    @Prop()
    pagesText = 'Pages';

    @Prop()
    competitionsText = 'Competitions';

    @Prop()
    notificationText = 'Notifications';

    @Prop()
    facebookText = 'Our Facebook';

    @Prop()
    xText = 'Our X';

    @Prop()
    discordText = 'Our Discord';

    @Prop()
    contactUsText = 'Contact us';

    @Prop()
    signUpText = 'Sign Up/In';

    @Prop()
    premiumText = 'Go Premium';

    @Prop()
    whatsNewText = "What's new";

    @Prop()
    faqsText = 'FAQs';

    @Event()
    notificationCenterClick: EventEmitter<void>;

    @Event()
    contactUsClick: EventEmitter<void>;

    @Event()
    premiumClick: EventEmitter<void>;

    @Event()
    toggleExpand: EventEmitter<boolean>;

    @Event()
    signUpClick: EventEmitter<void>;

    @Event()
    viewProfileClick: EventEmitter<void>;

    @Event()
    homeClick: EventEmitter<void>;

    @Event()
    storiesClick: EventEmitter<void>;

    @Event()
    pagesClick: EventEmitter<void>;

    @Event()
    competitionsClick: EventEmitter<void>;

    @Event()
    termsClick: EventEmitter<void>;

    @Prop()
    currentRoute: string;

    @Prop()
    notificationCenterOpened: boolean;

    @Event()
    rulesClick: EventEmitter<void>;

    @Event()
    privacyClick: EventEmitter<void>;

    @Event()
    paymentClick: EventEmitter<void>;

    @Event()
    acceptableUseClick: EventEmitter<void>;

    @Event()
    partnershipClick: EventEmitter<void>;

    @Event()
    menuToggleClick: EventEmitter<boolean>; // Specify the event emits a boolean

    @Event()
    whatsNewClick: EventEmitter<void>;

    @Event()
    faqsClick: EventEmitter<void>;

    @Event()
    facebookClick: EventEmitter<void>;

    @Event()
    xClick: EventEmitter<void>;

    @Event()
    discordClick: EventEmitter<void>;

    /*
    @Watch('userName')
    watchUserNameHandler(newVal: string, oldVal: string) {
        if (newVal !== oldVal) {
            // forceUpdate(this); // Forces a re-render
        }
    }

    @Watch('userRole')
    watchUserRoleHandler(newVal: string, oldVal: string) {
        if (newVal !== oldVal) {
            // forceUpdate(this); // Forces a re-render
        }
    }

    @Watch('userAvatar')
    watchUserAvatarHandler(newVal: string, oldVal: string) {
        if (newVal !== oldVal) {
            // forceUpdate(this); // Forces a re-render
        }
    }

    @Watch('badgeCount')
    watchBadgeCountHandler(newVal: number, oldVal: number) {
        if (newVal !== oldVal) {
            // forceUpdate(this); // Forces a re-render
        }
    }

    @Watch('currentRoute')
    watchCurrentRouteHandler(newVal: string, oldVal: string) {
        if (newVal !== oldVal) {
            // forceUpdate(this); // Forces a re-render
        }
    }

    @Watch('notificationCenterOpened')
    watchNotificationCenterOpenedHandler(newVal: boolean, oldVal: boolean) {
        // Force re-render
        if (newVal !== oldVal) {
            // forceUpdate(this); // Forces a re-render
        }
    }
    */

    componentDidLoad() {
        this.expanded = this.opened;

        // Set up mutation observer to watch for class changes
        this.mutationObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const hostElement = mutation.target as HTMLElement;
                    const isExpanded = hostElement.classList.contains('expanded');
                    if (this.expanded !== isExpanded) {
                        this.expanded = isExpanded;
                        this.toggleExpand.emit(this.expanded);
                    }
                }
            });
        });

        // Start observing the host element
        this.mutationObserver.observe(this.el.shadowRoot.host, {
            attributes: true,
            attributeFilter: ['class'],
        });
    }

    // Handle button click to emit the toggle event
    handleToggleClick() {
        this.toggle(); // Use the new toggle method
    }

    disconnectedCallback() {
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }

        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }

    handleNotificationClick() {
        this.notificationCenterClick.emit();
    }

    renderNavigation() {
        return (
            <div class="menu-navigation">
                <ur-list>
                    <ur-list-item
                        active={this.currentRoute === '/'}
                        icon="home--outlined"
                        content={this.homeText}
                        onClick={() => this.homeClick.emit()}></ur-list-item>

                    <ur-list-item
                        active={this.currentRoute === '/stories'}
                        icon="import_contacts--outlined"
                        content={this.storiesText}
                        onClick={() => this.storiesClick.emit()}
                    ></ur-list-item>

                    <ur-list-item active={this.currentRoute === '/pages'} icon="hub--outlined" content={this.pagesText} onClick={() => this.pagesClick.emit()}></ur-list-item>

                    {/*
                    <ur-list-item icon="emoji_events--outlined" content={this.competitionsText} onClick={() => this.competitionsClick.emit()}></ur-list-item>
                    */}
                </ur-list>
            </div>
        );
    }

    renderNotifications() {
        return (
            <div class="notifications-holder">
                <ur-list-item active={this.notificationCenterOpened} icon="notifications--outlined" content={this.notificationText} onClick={() => this.handleNotificationClick()}>
                    <div slot="notification-badge" class="notification-badge">
                        {this.badgeCount > 0 && this.badgeCount}
                    </div>
                </ur-list-item>
            </div>
        );
    }

    renderNotificationsCollapsed() {
        return (
            <div class="notifications-holder">
                <ur-tooltip content={this.notificationText} placement="right" trigger="hover" colorScheme="dark" open-delay="200" close-delay="100">
                    <div class="notification-button-wrapper">
                        <ur-button-icon
                            border-radius="0"
                            class="navigation-button-icon"
                            button-width="57px"
                            active={this.notificationCenterOpened}
                            icon="notifications--outlined"
                            title="Notifications"
                            onClick={() => this.handleNotificationClick()}
                        ></ur-button-icon>
                        {this.badgeCount > 0 && <div class="notification-badge-collapsed">{this.badgeCount}</div>}
                    </div>
                </ur-tooltip>
            </div>
        );
    }

    renderCollapsedNavigation() {
        return (
            <div class="menu-navigation">
                <div class="menu-items">
                    <ur-tooltip content={this.homeText} placement="right" trigger="hover" colorScheme="dark" open-delay="200" close-delay="100">
                        <ur-button-icon
                            active={this.currentRoute === '/'}
                            border-radius="0"
                            class="navigation-button-icon"
                            button-width="57px"
                            icon="home--outlined"
                            title="Home"
                            onClick={() => this.homeClick.emit()}
                        ></ur-button-icon>
                    </ur-tooltip>

                    <ur-tooltip content={this.storiesText} placement="right" trigger="hover" colorScheme="dark" open-delay="200" close-delay="100">
                        <ur-button-icon
                            active={this.currentRoute === '/stories'}
                            border-radius="0"
                            class="navigation-button-icon"
                            button-width="57px"
                            icon="import_contacts--outlined"
                            title="Stories"
                            onClick={() => this.storiesClick.emit()}
                        ></ur-button-icon>
                    </ur-tooltip>

                    <ur-tooltip content={this.pagesText} placement="right" trigger="hover" colorScheme="dark" open-delay="200" close-delay="100">
                        <ur-button-icon
                            active={this.currentRoute === '/pages'}
                            border-radius="0"
                            class="navigation-button-icon"
                            button-width="57px"
                            icon="hub--outlined"
                            title="Pages"
                            onClick={() => this.pagesClick.emit()}
                        ></ur-button-icon>
                    </ur-tooltip>

                    {/*
                    <ur-tooltip content={this.competitionsText} placement="right" trigger="hover" colorScheme="dark" open-delay="200" close-delay="100">
                        <ur-button-icon
                            class="navigation-button-icon"
                            icon="emoji_events--outlined"
                            title="Competitions"
                            onClick={() => this.competitionsClick.emit()}
                        ></ur-button-icon>
                    </ur-tooltip>
                    */}
                </div>
            </div>
        );
    }

    renderCollapsedFooter() {
        return (
            <footer class="menu-footer collapsed">
                <div class="social-links">
                    <ur-tooltip content={this.facebookText} placement="right" trigger="hover" colorScheme="dark" open-delay="200" close-delay="100">
                        <a target="_blank" rel="noopener noreferrer" class="social" onClick={() => this.facebookClick.emit()}>
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.21705 8.5216H5.97091V15.7419C5.97091 15.8845 6.08642 16 6.22897 16H9.2027C9.34526 16 9.46077 15.8845 9.46077 15.7419V8.55561H11.477C11.6081 8.55561 11.7184 8.45724 11.7333 8.32702L12.0396 5.66885C12.048 5.59572 12.0248 5.52248 11.9759 5.46761C11.9269 5.4127 11.8568 5.38126 11.7832 5.38126H9.46087V3.71499C9.46087 3.2127 9.73132 2.95799 10.2648 2.95799C10.3408 2.95799 11.7832 2.95799 11.7832 2.95799C11.9258 2.95799 12.0413 2.84243 12.0413 2.69992V0.259974C12.0413 0.117419 11.9258 0.00190968 11.7832 0.00190968H9.6906C9.67584 0.0011871 9.64306 0 9.59475 0C9.23166 0 7.96956 0.0712774 6.97261 0.988439C5.86799 2.0048 6.02154 3.22173 6.05824 3.43272V5.38121H4.21705C4.07449 5.38121 3.95898 5.49672 3.95898 5.63928V8.26348C3.95898 8.40604 4.07449 8.5216 4.21705 8.5216Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </ur-tooltip>

                    <ur-tooltip content={this.xText} placement="right" trigger="hover" colorScheme="dark" open-delay="200" close-delay="100">
                        <a target="_blank" rel="noopener noreferrer" class="social x" onClick={() => this.xClick.emit()}>
                            <svg viewBox="0 0 512 509.64" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </ur-tooltip>

                    <ur-tooltip content={this.discordText} placement="right" trigger="hover" colorScheme="dark" open-delay="200" close-delay="100">
                        <a target="_blank" rel="noopener noreferrer" class="social discord" onClick={() => this.discordClick.emit()}>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </ur-tooltip>
                    <ur-tooltip content={this.contactUsText} placement="right" trigger="hover" colorScheme="dark" open-delay="200" close-delay="100">
                        <a class="social contact-us" onClick={() => this.contactUsClick.emit()}>
                            <mdui-icon name="feedback"></mdui-icon>
                        </a>
                    </ur-tooltip>
                </div>
                <div class="vertical-logo">
                    <ur-tooltip content="Home" placement="right" trigger="hover" colorScheme="dark" open-delay="200" close-delay="100">
                        <a aria-label="Navigate to homepage" onClick={() => this.homeClick.emit()}>
                            <ur-logo width="55" height="14" opacity={0.5} rotation={-90}></ur-logo>
                        </a>
                    </ur-tooltip>
                </div>
            </footer>
        );
    }

    renderLoggedOutExpanded() {
        return (
            <div class="menu logged-out">
                <div class="welcome">
                    <ur-button class="menu-button" icon="login" variant="filled" full-width onClick={() => this.signUpClick.emit()}>
                        {this.signUpText}
                    </ur-button>
                </div>
            </div>
        );
    }

    renderLoggedOutCollapsed() {
        return (
            <div class="menu logged-out">
                <div class="welcome">
                    <ur-tooltip content={this.signUpText} placement="right" trigger="hover" colorScheme="dark" open-delay="200" close-delay="100">
                        <ur-button-icon class="menu-button-icon" icon="login" variant="filled" onClick={() => this.signUpClick.emit()}></ur-button-icon>
                    </ur-tooltip>
                </div>
            </div>
        );
    }

    renderPremiumExpanded() {
        return (
            <div class="premium expanded">
                <ur-button class="menu-button" icon="workspace_premium--outlined" variant="filled" full-width onClick={() => this.premiumClick.emit()}>
                    {this.premiumText}
                </ur-button>
            </div>
        );
    }

    renderPremiumCollapsed() {
        return (
            <div class="premium collapsed">
                <ur-tooltip content={this.premiumText} placement="right" trigger="hover" colorScheme="dark" open-delay="200" close-delay="100">
                    <ur-button-icon
                        class="navigation-button-icon"
                        icon="workspace_premium--outlined"
                        title="Premium"
                        variant="filled"
                        onClick={() => this.premiumClick.emit()}
                    ></ur-button-icon>
                </ur-tooltip>
            </div>
        );
    }

    renderFooter() {
        return (
            <footer class="menu-footer">
                <div class="horizontal-logo">
                    <a aria-label="Navigate to homepage" onClick={() => this.homeClick.emit()}>
                        <ur-logo width="55" height="14" opacity={0.5} rotation={0}></ur-logo>
                    </a>
                </div>
                <div class="link-hld">
                    <a class="link" style={{ display: 'block' }} onClick={() => this.termsClick.emit()}>
                        {this.termsText}
                    </a>

                    <a class="link" style={{ display: 'block' }} onClick={() => this.rulesClick.emit()}>
                        {this.rulesText}
                    </a>

                    <a class="link" style={{ display: 'block' }} onClick={() => this.whatsNewClick.emit()}>
                        {this.whatsNewText}
                    </a>

                    <a class="link" style={{ display: 'block' }} onClick={() => this.faqsClick.emit()}>
                        {this.faqsText}
                    </a>

                    <a class="link" style={{ display: 'block' }} onClick={() => this.privacyClick.emit()}>
                        {this.privacyText}
                    </a>

                    <a class="link" style={{ display: 'block' }} onClick={() => this.paymentClick.emit()}>
                        {this.paymentText}
                    </a>

                    <a class="link" style={{ display: 'block' }} onClick={() => this.acceptableUseClick.emit()}>
                        {this.acceptableUseText}
                    </a>

                    <a class="link" style={{ display: 'block' }} onClick={() => this.partnershipClick.emit()}>
                        {this.partnershipText}
                    </a>
                </div>
                <span class="est">© {new Date().getFullYear()} Urnovl.co</span>
            </footer>
        );
    }

    render() {
        return (
            <Host class={`left-host-menu ${this.expanded ? 'expanded' : 'collapsed'}`} style={{ minHeight: `${this.parentHeight}px` }}>
                {/* Use ur-menu-profile for both expanded and collapsed states */}
                {this.loggedIn && (
                    <ur-menu-profile
                        part="menu-profile"
                        user-avatar={this.userAvatar}
                        user-name={this.userName}
                        user-role={this.userRole}
                        on-click={() => this.viewProfileClick.emit()}
                        class={`${this.expanded ? 'expanded' : 'collapsed'} ${this.currentRoute?.endsWith('/profile') || this.currentRoute?.endsWith('/profile/') ? 'active' : ''}`}

                    ></ur-menu-profile>
                )}

                {/* TODO: Add premium */}
                {/* {this.loggedIn && this.expanded && this.renderPremiumExpanded()}
                {this.loggedIn && !this.expanded && this.renderPremiumCollapsed()} */}

                {!this.loggedIn && this.expanded && this.renderLoggedOutExpanded()}
                {!this.loggedIn && !this.expanded && this.renderLoggedOutCollapsed()}

                {this.expanded && this.renderNavigation()}

                {!this.expanded && this.renderCollapsedNavigation()}

                <div class="flex"></div>

                {this.loggedIn && !this.expanded && this.renderNotificationsCollapsed()}

                {this.loggedIn && this.expanded && this.renderNotifications()}

                {this.expanded ? this.renderFooter() : this.renderCollapsedFooter()}
            </Host>
        );
    }
}
