import { html } from 'lit';
import '../components/ur-thumbs-rating/ur-thumbs-rating';

const Template = (args) => {
    // Local state management for the story
    let isLiked = args.isLiked;
    let isDisliked = args.isDisliked;
    let likesCount = args.likesCount;

    const handleThumbsUp = () => {
        if (isDisliked) {
            isDisliked = false;
        }
        isLiked = !isLiked;
        // Update likes count based on the action
        likesCount = isLiked ? likesCount + 1 : likesCount - 1;
        
        // Update the component
        const component = document.querySelector('ur-thumbs-rating');
        if (component) {
            component.isLiked = isLiked;
            component.isDisliked = isDisliked;
            component.likesCount = likesCount;
        }
    };

    const handleThumbsDown = () => {
        if (isLiked) {
            isLiked = false;
            likesCount--; // Decrease likes count if it was previously liked
        }
        isDisliked = !isDisliked;
        
        // Update the component
        const component = document.querySelector('ur-thumbs-rating');
        if (component) {
            component.isLiked = isLiked;
            component.isDisliked = isDisliked;
            component.likesCount = likesCount;
        }
    };

    return html`
        <ur-thumbs-rating
            likes-count="${likesCount}"
            dislike-text="${args.dislikeText}"
            is-liked="${isLiked}"
            is-disliked="${isDisliked}"
            @thumbsUp="${handleThumbsUp}"
            @thumbsDown="${handleThumbsDown}"
        ></ur-thumbs-rating>
    `;
};

export default {
    title: 'urnovl/Business/ThumbsRating',
    render: Template,
    argTypes: {
        likesCount: {
            control: 'number',
            description: 'Number of likes to display',
        },
        dislikeText: {
            control: 'text',
            description: 'Text to display for dislike button',
        },
        isLiked: {
            control: 'boolean',
            description: 'Whether the content is liked',
        },
        isDisliked: {
            control: 'boolean',
            description: 'Whether the content is disliked',
        }
    },
};

// Stories remain the same but now they'll be interactive
export const Default = {
    args: {
        likesCount: 42,
        dislikeText: 'Dislike',
        isLiked: false,
        isDisliked: false
    },
};

export const Liked = {
    args: {
        ...Default.args,
        isLiked: true,
        likesCount: 43
    },
};

export const Disliked = {
    args: {
        ...Default.args,
        isDisliked: true
    },
};

export const ManyLikes = {
    args: {
        ...Default.args,
        likesCount: 9999
    },
};

export const CustomDislikeText = {
    args: {
        ...Default.args,
        dislikeText: 'No thanks'
    },
};