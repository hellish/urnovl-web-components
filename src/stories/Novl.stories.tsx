import { html } from 'lit';
import '../components/ur-novl/ur-novl';

import { NOVLS } from '../data/novls';

const Novl = ({
    novlTitle,
    novlCover,
    likes,
    views,
    showStats,
    novlDescription,
    authorAvatar,
    authorName,
    published,
    price,
    publisherName,
    publisherAvatar,
    borderRadius,
    width = '270px',
}) => html`
  <div style="width: ${width}; box-sizing:border-box;">
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
      border-radius="${borderRadius}"
    ></ur-novl>
  </div>
`;

export default {
    title: 'Urnovl/Novl',
    render: args => Novl(args),
};

export const Default = {
    args: NOVLS[0],
};

export const BrokenCover = {
    args: {
        ...NOVLS[0],
        novlCover: null
    }
};

export const NoStats = {
    args: NOVLS[1],
};

export const SmallDescription = {
    args: NOVLS[2],
};

export const WithPrice = {
    args: NOVLS[3],
};

export const WithPublisher = {
    args: NOVLS[4],
};

export const Full = {
    args: NOVLS[5],
};

export const BiggerWidth = {
    args: {
        ...NOVLS[6],
        width: '320px',
    },
};

export const FullWithBiggerWidth = {
    args: {
        ...NOVLS[7],
        width: '350px',
    },
};

export const NoBorderRadius = {
    args: {
        ...NOVLS[7],
        novlCover: NOVLS[6]['novlCover'],
        width: '350px',
        borderRadius: '0',
    },
};
