import { html } from 'lit';
import '../components/ur-comment-form/ur-comment-form';

const Template = args => html`
    <ur-comment-form
        .user=${args.user}
        .placeholder=${args.placeholder}
        .maxLength=${args.maxLength}
        .minLength=${args.minLength}
        .disabled=${args.disabled}
        .loading=${args.loading}
        .isServer=${args.isServer}
        .variant=${args.variant}
        @commentSubmit=${args.onCommentSubmit}
        @inputFocus=${args.onInputFocus}
        @inputBlur=${args.onInputBlur}
        @inputChange=${args.onInputChange}
        @formError=${args.onFormError}
    ></ur-comment-form>
`;

export default {
    title: 'urnovl/Business/Forms/CommentForm',
    render: Template,
    argTypes: {
        user: {
            control: 'object',
            description: 'User object containing displayName and avatar',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text for the comment input',
        },
        maxLength: {
            control: 'number',
            description: 'Maximum length of the comment',
        },
        minLength: {
            control: 'number',
            description: 'Minimum length of the comment',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the form is disabled',
        },
        loading: {
            control: 'boolean',
            description: 'Whether the form is in loading state',
        },
        isServer: {
            control: 'boolean',
            description: 'Whether running in server context',
        },
        variant: {
            control: 'select',
            options: ['desktop', 'mobile'],
            description: 'The variant of the form (desktop or mobile)',
        },
        onCommentSubmit: { action: 'commentSubmit' },
        onInputFocus: { action: 'inputFocus' },
        onInputBlur: { action: 'inputBlur' },
        onInputChange: { action: 'inputChange' },
        onFormError: { action: 'formError' },
    },
};

// Default story (Desktop variant)
export const Default = {
    args: {
        user: {
            displayName: 'John Doe',
            avatar: 'https://i.pravatar.cc/150?img=5',
        },
        placeholder: 'Write your comment here...',
        maxLength: 400,
        minLength: 1,
        disabled: false,
        loading: false,
        isServer: false,
        variant: 'desktop',
    },
};

// Loading state story
export const LoadingState = {
    args: {
        ...Default.args,
        loading: true,
        user: {
            displayName: 'Jane Smith',
            avatar: 'https://i.pravatar.cc/150?img=6',
        },
    },
};

// Disabled state story
export const DisabledState = {
    args: {
        ...Default.args,
        disabled: true,
        placeholder: 'Comments are disabled',
        user: {
            displayName: 'Guest User',
            avatar: 'https://i.pravatar.cc/150?img=7',
        },
    },
};

// Mobile variant story
export const MobileVariant = {
    args: {
        ...Default.args,
        variant: 'mobile',
        user: {
            displayName: 'John Mobile',
            avatar: 'https://i.pravatar.cc/150?img=8',
        },
        placeholder: 'Comment...',
    },
};
