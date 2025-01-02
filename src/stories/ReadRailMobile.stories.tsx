import { html } from 'lit';
import '../components/ur-read-rail-mobile/ur-read-rail-mobile'; // Adjust the path as necessary

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
      is-host-small="${args.isHostSmall}"
    ></ur-read-rail-mobile>
  </div>
`;

export default {
  title: 'urnovl/Business/Read Rail/Mobile',
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
