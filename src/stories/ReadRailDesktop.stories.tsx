import { html } from 'lit';
import '../components/ur-read-rail-desktop/ur-read-rail-desktop'; // Adjust the path as necessary

const Template = args => html`
  <div style="display: flex; justify-content: center;">
    <ur-read-rail-desktop
      avatar-src="${args.avatarSrc}"
      avatar-name="${args.avatarName}"
      likes="${args.likes}"
      dislike="${args.dislike}"
      comments="${args.comments}"
      donate="${args.donate}"
      share="${args.share}"
      ?is-followed="${args.isFollowed}"
    ></ur-read-rail-desktop>
  </div>
`;

export default {
  title: 'urnovl/Basic/Read Rail/Desktop',
  render: Template,
  argTypes: {
    avatarSrc: {
      control: 'text',
      description: 'URL for the avatar image',
    },
    avatarName: {
      control: 'text',
      description: 'Name displayed in the avatar',
    },
    likes: {
      control: 'text',
      description: 'Number of likes displayed',
    },
    dislike: {
      control: 'text',
      description: 'Text for the dislike action',
    },
    comments: {
      control: 'number',
      description: 'Number of comments displayed',
    },
    donate: {
      control: 'text',
      description: 'Text for the donate action',
    },
    share: {
      control: 'text',
      description: 'Text for the share action',
    },
    isFollowed: {
      control: 'boolean',
      description: 'Indicates if the author is already followed',
    },
  },
};

export const Default = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=3',
    avatarName: 'Jane Doe',
    likes: '1.5k',
    dislike: 'Dislike',
    comments: 15,
    donate: 'Donate',
    share: 'Share',
    isFollowed: false, // Not followed by default
  },
};

export const HighEngagement = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=5',
    avatarName: 'John Smith',
    likes: '10k',
    dislike: 'Dislike',
    comments: 150,
    donate: 'Donate',
    share: 'Share',
    isFollowed: false, // Not followed
  },
};

export const MinimalInteraction = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=7',
    avatarName: 'Anonymous',
    likes: '0',
    dislike: 'Dislike',
    comments: 0,
    donate: 'Donate',
    share: 'Share',
    isFollowed: false, // Not followed
  },
};

export const NoAvatar = {
  args: {
    avatarSrc: '',
    avatarName: '',
    likes: '500',
    dislike: 'Dislike',
    comments: 10,
    donate: 'Donate',
    share: 'Share',
    isFollowed: false, // Not followed
  },
};

export const AlreadyFollowed = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=6',
    avatarName: 'Followed Author',
    likes: '2.5k',
    dislike: 'Dislike',
    comments: 50,
    donate: 'Donate',
    share: 'Share',
    isFollowed: true, // Already followed
  },
};