import { html } from 'lit';
import '../components/ur-novl/ur-novl';

const Novl = ({ novlTitle, novlCover, likes, views, showStats, novlDescription, authorAvatar, authorName, published, price, publisherName, publisherAvatar }) => html`
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
    publisher-name="${publisherName}"
    publisher-avatar="${publisherAvatar}"
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

export const WithPublisher = {
  args: {
    novlTitle: 'Welcome to my nightmare',
    novlCover: 'https://s3-eu-west-1.amazonaws.com/urnovl-irl-1/covers/fe469e2a-8e19-48a2-a89d-55e8a201156c-grid.jpg',
    likes: 7,
    views: 1024,
    showStats: true,
    novlDescription: 'Lorem Ipsum is simply dummy text.',
    authorAvatar: 'https://lh4.googleusercontent.com/-FxnW9K6NrJY/AAAAAAAAAAI/AAAAAAAAACM/irHh3OywY_Y/photo.jpg',
    authorName: 'James Bond 007',
    publisherAvatar: "data:image/png;base64,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",
    publisherName: 'Penguin',
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
    publisherAvatar: "data:image/png;base64,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",
    publisherName: 'Penguin',
    published: false,
    price: '1555€',
  },
};
