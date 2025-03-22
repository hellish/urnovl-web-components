import { html } from 'lit';
import '../components/ur-user-profile-settings-form/ur-user-profile-settings-form';

// Define the User Profile Settings component in Storybook
const Template = args => html`
    <ur-user-profile-settings-form .settings=${args.settings} @inputChanged=${args.inputChanged || (() => console.log('Input changed'))}> </ur-user-profile-settings-form>
`;

export default {
    title: 'Urnovl/Business/User Profile Settings',
    render: Template,
    argTypes: {
        settings: {
            control: 'object',
            description: 'User profile settings data',
        },
        inputChanged: {
            action: 'inputChanged',
            description: 'Triggered when an input field changes',
        },
    },
};

// Default story with empty settings
export const Empty = {
    args: {
        settings: {
            location: '',
            website: '',
            about: '',
            email: '',
            email_enabled: false,
            facebook: '',
            facebook_enabled: false,
            linkedin: '',
            linkedin_enabled: false,
            twitter: '',
            twitter_enabled: false,
        },
    },
};

// Complete profile with all fields filled
export const CompleteProfile = {
    args: {
        settings: {
            location: 'Thermi, Thessaloniki',
            website: 'www.example.com',
            about: 'This is my profile description. I am a passionate writer who enjoys creating stories and connecting with other authors.',
            email: 'example@email.com',
            email_enabled: true,
            facebook: 'myusername',
            facebook_enabled: true,
            linkedin: 'mylinkedin',
            linkedin_enabled: true,
            twitter: 'mytwitterhandle',
            twitter_enabled: true,
        },
    },
};

// Partial profile with only some fields filled
export const PartialProfile = {
    args: {
        settings: {
            location: 'Athens, Greece',
            website: '',
            about: 'Just getting started with writing!',
            email: 'private@email.com',
            email_enabled: false,
            facebook: 'myfbprofile',
            facebook_enabled: true,
            linkedin: '',
            linkedin_enabled: false,
            twitter: 'twitteruser',
            twitter_enabled: true,
        },
    },
};
