import { Component, Prop, h, Event, EventEmitter, State, Watch } from '@stencil/core';
import '../ur-text-field/ur-text-field';
import '../ur-switch/ur-switch';

@Component({
    tag: 'ur-user-profile-settings-form',
    styleUrl: 'ur-user-profile-settings-form.css',
    shadow: true,
})
export class UrUserProfileSettingsForm {
    /**
     * The form values (settings data)
     */
    @Prop()
    settings: any = {};

    @Prop()
    locationLabelText: string = 'Location';

    @Prop()
    websiteLabelText: string = 'Your website / Blog';

    @Prop()
    aboutLabelText: string = 'Tell the world something about you';

    @Prop()
    facebookLabelText: string = 'Your facebook public profile';

    @Prop()
    twitterLabelText: string = 'Your twitter public profile';

    @Prop()
    linkedinLabelText: string = 'Your linkedin public profile';

    @Prop()
    emailLabelText: string = 'Your email address';

    @Prop()
    personalInfoTitleText: string = 'Personal info';

    @Prop()
    interactTitleText: string = 'Interact';

    @Prop()
    facebookTitleText: string = 'Facebook';

    @Prop()
    twitterTitleText: string = 'Twitter';   

    @Prop()
    linkedinTitleText: string = 'LinkedIn';

    @Prop()
    emailTitleText: string = 'Email';

    @Prop()
    facebookPrefixText: string = 'facebook.com/';

    @Prop()
    twitterPrefixText: string = 'twitter.com/';

    @Prop()
    linkedinPrefixText: string = 'linkedin.com/in/';

    @Prop()
    personalInfoSubtitleText: string = 'Let other people know some things about you. These info will be shown in your profile';

    @Prop()
    interactSubtitleText: string = 'Fill in your social networks\' public profiles and your email address and give the opportunity to other people to interact with you';

    /**
     * Internal state to track which social networks are enabled
     */
    @State() socialEnabled = {
        facebook: false,
        twitter: false,
        linkedin: false,
        email: false,
    };

    /**
     * Watch for settings changes to update internal state
     */
    @Watch('settings')
    settingsChanged(newSettings) {
        if (newSettings) {
            this.updateSocialState(newSettings);
        }
    }

    componentWillLoad() {
        this.updateSocialState(this.settings);
    }

    private updateSocialState(settings) {
        this.socialEnabled = {
            facebook: settings.facebook_enabled || false,
            twitter: settings.twitter_enabled || false,
            linkedin: settings.linkedin_enabled || false,
            email: settings.email_enabled || false,
        };
    }

    /**
     * Event emitted when an input changes
     */
    @Event({
        eventName: 'inputChanged',
        composed: true,
        cancelable: true,
        bubbles: true,
    })
    inputChanged: EventEmitter<{ field: string; value: any }>;

    /**
     * Handle input changes and emit events
     */
    private handleInputChange = (field: string, event: Event) => {
        const target = event.target as HTMLInputElement;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        // Emit change to parent component
        this.inputChanged.emit({ field, value });
    };

    /**
     * Handle social switch changes
     */
    private handleSwitchChange = (field: string, e: CustomEvent) => {
        // Update local state immediately for UI responsiveness
        this.socialEnabled = {
            ...this.socialEnabled,
            [field.replace('_enabled', '')]: e.detail,
        };

        // Emit the change event
        this.handleInputChange(field, {
            target: {
                value: e.detail,
                checked: e.detail,
            },
        } as unknown as Event);
    };

    render() {
        return (
            <div class="settings-container">
                <div class="settings-section">
                    <div class="section-header">
                        <h2 class="section-title">{this.personalInfoTitleText}</h2>
                        <p class="section-description">{this.personalInfoSubtitleText}</p>
                    </div>

                    <div class="form-group">
                        <ur-text-field
                            label={this.locationLabelText}
                            value={this.settings.location || ''}
                            name="location"
                            maxlength={40}
                            counter={true}
                            onValueChanged={e => this.handleInputChange('location', e)}
                        ></ur-text-field>
                    </div>

                    <div class="form-group">
                        <ur-text-field
                            label={this.websiteLabelText}
                            value={this.settings.website || ''}
                            name="website"
                            maxlength={160}
                            counter={true}
                            onValueChanged={e => this.handleInputChange('website', e)}
                        ></ur-text-field>
                    </div>

                    <div class="form-group">
                        <ur-text-field
                            label={this.aboutLabelText}
                            value={this.settings.about || ''}
                            name="about"
                            maxlength={160}
                            counter={true}
                            rows={3}
                            autosize={true}
                            minRows={3}
                            onValueChanged={e => this.handleInputChange('about', e)}
                        ></ur-text-field>
                    </div>
                </div>

                <div class="settings-section">
                    <div class="section-header">
                        <h2 class="section-title">{this.interactTitleText}</h2>
                        <p class="section-description">{this.interactSubtitleText}</p>
                    </div>

                    {/* Facebook */}
                    <div class="form-group social-header">
                        <span class="social-name">{this.facebookTitleText}</span>
                        <div class="toggle-wrapper">
                            <ur-switch checked={this.settings.facebook_enabled} onSwitchChange={e => this.handleSwitchChange('facebook_enabled', e)}></ur-switch>
                        </div>
                    </div>
                    {this.socialEnabled.facebook && (
                        <div class="form-group social-field">
                            <span class="prefix-label">{this.facebookPrefixText}</span>
                            <ur-text-field
                                label={this.facebookLabelText}
                                value={this.settings.facebook || ''}
                                name="facebook"
                                onValueChanged={e => this.handleInputChange('facebook', e)}
                            ></ur-text-field>
                        </div>
                    )}

                    {/* Twitter */}
                    <div class="form-group social-header">
                        <span class="social-name">{this.twitterTitleText}</span>
                        <div class="toggle-wrapper">
                            <ur-switch checked={this.settings.twitter_enabled} onSwitchChange={e => this.handleSwitchChange('twitter_enabled', e)}></ur-switch>
                        </div>
                    </div>
                    {this.socialEnabled.twitter && (
                        <div class="form-group social-field">
                            <span class="prefix-label">{this.twitterPrefixText}</span>
                            <ur-text-field
                                label={this.twitterLabelText}
                                value={this.settings.twitter || ''}
                                name="twitter"
                                onValueChanged={e => this.handleInputChange('twitter', e)}
                            ></ur-text-field>
                        </div>
                    )}

                    {/* LinkedIn */}
                    <div class="form-group social-header">
                        <span class="social-name">{this.linkedinTitleText}</span>
                        <div class="toggle-wrapper">
                            <ur-switch checked={this.settings.linkedin_enabled} onSwitchChange={e => this.handleSwitchChange('linkedin_enabled', e)}></ur-switch>
                        </div>
                    </div>
                    {this.socialEnabled.linkedin && (
                        <div class="form-group social-field">
                            <span class="prefix-label">{this.linkedinPrefixText}</span>
                            <ur-text-field
                                label={this.linkedinLabelText}
                                value={this.settings.linkedin || ''}
                                name="linkedin"
                                onValueChanged={e => this.handleInputChange('linkedin', e)}
                            ></ur-text-field>
                        </div>
                    )}

                    {/* Email */}
                    <div class="form-group social-header">
                        <span class="social-name">{this.emailTitleText}</span>
                        <div class="toggle-wrapper">
                            <ur-switch checked={this.settings.email_enabled} onSwitchChange={e => this.handleSwitchChange('email_enabled', e)}></ur-switch>
                        </div>
                    </div>
                    {this.socialEnabled.email && (
                        <div class="form-group social-field">
                            <ur-text-field
                                label={this.emailLabelText}
                                value={this.settings.email || ''}
                                name="email"
                                type="email"
                                onValueChanged={e => this.handleInputChange('email', e)}
                            ></ur-text-field>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
