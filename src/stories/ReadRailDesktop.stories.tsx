import { html } from 'lit';
import '../components/ur-read-rail-desktop/ur-read-rail-desktop';

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
      ?is-own-chapter="${args.isOwnChapter}"
      ?is-chapter-purchased="${args.isChapterPurchased}"
      ?is-novl-deleted="${args.isNovlDeleted}"
      ?is-author-followed="${args.isAuthorFollowed}"
      ?is-paid-chapter="${args.isPaidChapter}"
      ?is-author-pro="${args.isAuthorPro}"
      ?is-donations-enabled="${args.isDonationsEnabled}"
      ?is-host-small="${args.isHostSmall}"
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
      control: 'number',  // Changed from 'text'
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
    isOwnChapter: {
      control: 'boolean',
      description: 'Indicates if this is the user\'s own chapter',
    },
    isChapterPurchased: {
      control: 'boolean',
      description: 'Indicates if the chapter has been purchased',
    },
    isNovlDeleted: {
      control: 'boolean',
      description: 'Indicates if the novel has been deleted',
    },
    isAuthorFollowed: {
      control: 'boolean',
      description: 'Indicates if the author is being followed',
    },
    isPaidChapter: {
      control: 'boolean',
      description: 'Indicates if this is a paid chapter',
    },
    isAuthorPro: {
      control: 'boolean',
      description: 'Indicates if the author has pro status',
    },
    isDonationsEnabled: {
      control: 'boolean',
      description: 'Indicates if donations are enabled',
    },
    isHostSmall: {
      control: 'boolean',
      description: 'Indicates if the host container is small',
    },
  },
};

export const Default = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=3',
    avatarName: 'Jane Doe',
    likes: 1500,  // Changed from '1.5k'
    dislike: 'Dislike',
    comments: 15,
    donate: 'Donate',
    share: 'Share',
    isFollowed: false
  },
};

export const HighEngagement = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=5',
    avatarName: 'John Smith',
    likes: 10000,  // Changed from '10k'
    dislike: 'Dislike',
    comments: 150,
    donate: 'Donate',
    share: 'Share',
    isFollowed: false
  },
};

export const MinimalInteraction = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=7',
    avatarName: 'Anonymous',
    likes: 0,  // Changed from '0'
    dislike: 'Dislike',
    comments: 0,
    donate: 'Donate',
    share: 'Share',
    isFollowed: false
  },
};

export const NoAvatar = {
  args: {
    avatarSrc: '',
    avatarName: '',
    likes: 500,  // Changed from '500'
    dislike: 'Dislike',
    comments: 10,
    donate: 'Donate',
    share: 'Share',
    isFollowed: false
  },
};

export const AlreadyFollowed = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=6',
    avatarName: 'Followed Author',
    likes: 2500,  // Changed from '2.5k'
    dislike: 'Dislike',
    comments: 50,
    donate: 'Donate',
    share: 'Share',
    isFollowed: true
  },
};

export const ProAuthorWithDonations = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=8',
    avatarName: 'Pro Author',
    likes: 5000,  // Changed from '5k'
    dislike: 'Dislike',
    comments: 75,
    donate: 'Donate',
    share: 'Share',
    isFollowed: false,
    isAuthorPro: true,
    isDonationsEnabled: true,
    isPaidChapter: false,
    isOwnChapter: false
  },
};

export const PaidChapter = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=9',
    avatarName: 'Premium Author',
    likes: 3200,  // Changed from '3.2k'
    dislike: 'Dislike',
    comments: 45,
    donate: 'Donate',
    share: 'Share',
    isFollowed: false,
    isPaidChapter: true,
    isChapterPurchased: false,
    isAuthorPro: true,
    isDonationsEnabled: true
  },
};

export const OwnChapter = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=10',
    avatarName: 'You',
    likes: 120,  // Was already a number
    dislike: 'Dislike',
    comments: 8,
    donate: 'Donate',
    share: 'Share',
    isOwnChapter: true,
    isAuthorPro: false
  },
};

export const SmallHostContainer = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=12',
    avatarName: 'Compact View',
    likes: 1200,  // Changed from '1.2k'
    dislike: 'Dislike',
    comments: 25,
    donate: 'Donate',
    share: 'Share',
    isHostSmall: true,
    isAuthorPro: true,
    isDonationsEnabled: true
  },
};

export const NonProAuthor = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=13',
    avatarName: 'Regular Author',
    likes: 800,  // Was already a number
    dislike: 'Dislike',
    comments: 15,
    donate: 'Donate',
    share: 'Share',
    isAuthorPro: false,
    isDonationsEnabled: false
  },
};

export const DonationsDisabled = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=14',
    avatarName: 'No Donations',
    likes: 4500,  // Changed from '4.5k'
    dislike: 'Dislike',
    comments: 67,
    donate: 'Donate',
    share: 'Share',
    isAuthorPro: true,
    isDonationsEnabled: false
  },
};