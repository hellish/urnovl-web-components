import { html } from 'lit';
import '../components/ur-feedback/ur-feedback';

// Define the Feedback component in Storybook
const Template = args => html`
    <ur-feedback
        titleText=${args.titleText}
        descriptionText=${args.descriptionText}
        placeholderText=${args.placeholderText}
        feedbackText=${args.feedbackText}
        supportText=${args.supportText}
        pressText=${args.pressText}
        successText=${args.successText}
        failureText=${args.failureText}
        user=${args.user}
        emailLabel=${args.emailLabel}
        emailPlaceholder=${args.emailPlaceholder}
        messageLabel=${args.messageLabel}
        sendText=${args.sendText}
        @feedbackSubmit=${args.feedbackSubmit || (e => console.log('Feedback submitted', e.detail))}
    ></ur-feedback>
`;

export default {
    title: 'Urnovl/Business/Feedback',
    render: Template,
    argTypes: {
        titleText: {
            control: 'text',
            description: 'Title text for the feedback form',
        },
        descriptionText: {
            control: 'text',
            description: 'Description text for the feedback form',
        },
        placeholderText: {
            control: 'text',
            description: 'Placeholder text for the textarea',
        },
        feedbackText: {
            control: 'text',
            description: 'Text for the feedback radio option',
        },
        supportText: {
            control: 'text',
            description: 'Text for the support radio option',
        },
        pressText: {
            control: 'text',
            description: 'Text for the press radio option',
        },
        successText: {
            control: 'text',
            description: 'Text for success message',
        },
        failureText: {
            control: 'text',
            description: 'Text for failure message',
        },
        user: {
            control: 'boolean',
            description: 'Whether the user is logged in',
        },
        emailLabel: {
            control: 'text',
            description: 'Label for the email field (when user is not logged in)',
        },
        emailPlaceholder: {
            control: 'text',
            description: 'Placeholder for the email field (when user is not logged in)',
        },
        messageLabel: {
            control: 'text',
            description: 'Label for the message field',
        },
        sendText: {
            control: 'text',
            description: 'Text for the send button',
        },
        feedbackSubmit: {
            action: 'feedbackSubmit',
            description: 'Triggered when the send button is clicked',
        },
    },
};

// Default story with default text (user is logged in)
export const LoggedInUser = {
    args: {
        titleText: 'Oh, you mighty storyteller...',
        descriptionText: 'Please contact us and help us become better for you or just drop us a line saying hi.',
        placeholderText: 'Write your message here',
        feedbackText: 'Feedback',
        supportText: 'Support',
        pressText: 'Press',
        successText: 'Thank you',
        failureText: 'An error occurred.',
        user: true,
        messageLabel: 'Type your message here',
        sendText: 'Send',
    },
};

// Story for when user is not logged in (requires email)
export const NonAuthenticatedUser = {
    args: {
        titleText: 'Oh, you mighty storyteller...',
        descriptionText: 'Please contact us and help us become better for you or just drop us a line saying hi.',
        placeholderText: 'Write your message here',
        feedbackText: 'Feedback',
        supportText: 'Support',
        pressText: 'Press',
        successText: 'Thank you',
        failureText: 'An error occurred.',
        user: false,
        emailLabel: 'Email',
        emailPlaceholder: 'Please enter your email address',
        messageLabel: 'Type your message here',
        sendText: 'Send',
    },
};
