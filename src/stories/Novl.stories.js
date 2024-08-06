import { html } from 'lit';
import '../components/ur-novl/ur-novl';

const Novl = ({ novlTitle, novlCover, likes, views, showStats, novlDescription, authorAvatar, authorName, published, price }) => html`
  <ur-novl
    author-name="${authorName}"
    author-avatar="${authorAvatar}"
    novl-description="${novlDescription}"
    novl-title="${novlTitle}"
    novl-cover="${novlCover}"
    likes="${likes}"
    views="${views}"
    show-stats="${showStats}"
    published="${published}"
    price="${price}"
  ></ur-novl>
`;

export default {
  title: 'Urnovl/Novl',
  render: args => Novl(args),
};

export const Default = {
  args: {
    novlTitle: 'Welcome to my nightmare',
    novlCover: 'https://s3-eu-west-1.amazonaws.com/urnovl-irl-1/covers/fe469e2a-8e19-48a2-a89d-55e8a201156c-grid.jpg',
    likes: 12700,
    views: 345000,
    showStats: true,
    novlDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    authorAvatar: 'https://lh4.googleusercontent.com/-FxnW9K6NrJY/AAAAAAAAAAI/AAAAAAAAACM/irHh3OywY_Y/photo.jpg',
    authorName: 'Alex Johnson',
    published: false,
  },
};

export const NoStats = {
  args: {
    novlTitle: 'Welcome to my nightmare',
    novlCover: 'https://s3-eu-west-1.amazonaws.com/urnovl-irl-1/covers/fe469e2a-8e19-48a2-a89d-55e8a201156c-grid.jpg',
    showStats: false,
    novlDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    authorAvatar: 'https://lh4.googleusercontent.com/-FxnW9K6NrJY/AAAAAAAAAAI/AAAAAAAAACM/irHh3OywY_Y/photo.jpg',
    authorName: 'Παπαδόπουλος Αλέξανδρος',
    published: true,
  },
};

export const SmallDescription = {
  args: {
    novlTitle: 'Welcome to my nightmare',
    novlCover: 'https://s3-eu-west-1.amazonaws.com/urnovl-irl-1/covers/fe469e2a-8e19-48a2-a89d-55e8a201156c-grid.jpg',
    likes: 7,
    views: 1024,
    showStats: true,
    novlDescription: 'Lorem Ipsum is simply dummy text.',
    authorAvatar: 'https://lh4.googleusercontent.com/-FxnW9K6NrJY/AAAAAAAAAAI/AAAAAAAAACM/irHh3OywY_Y/photo.jpg',
    authorName: 'James Bond 007',
    published: false,
  },
};

export const WithPrice = {
  args: {
    novlTitle: 'Welcome to my nightmare',
    novlCover: 'https://s3-eu-west-1.amazonaws.com/urnovl-irl-1/covers/fe469e2a-8e19-48a2-a89d-55e8a201156c-grid.jpg',
    likes: 7,
    views: 1024,
    showStats: true,
    novlDescription: 'Lorem Ipsum is simply dummy text.',
    authorAvatar: 'https://lh4.googleusercontent.com/-FxnW9K6NrJY/AAAAAAAAAAI/AAAAAAAAACM/irHh3OywY_Y/photo.jpg',
    authorName: 'James Bond 007',
    published: true,
    price: '15$',
  },
};

export const Full = {
  args: {
    novlTitle: "But you can't help, this is the end Of a tale that wasn't right",
    novlCover: 'https://s3-eu-west-1.amazonaws.com/urnovl-irl-1/covers/fe469e2a-8e19-48a2-a89d-55e8a201156c-grid.jpg',
    likes: 7,
    views: 1024,
    showStats: true,
    novlDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    authorAvatar: 'https://lh4.googleusercontent.com/-FxnW9K6NrJY/AAAAAAAAAAI/AAAAAAAAACM/irHh3OywY_Y/photo.jpg',
    authorName: 'Jesus Christ Super Star 🌟',
    published: false,
    price: '1555€',
  },
};
