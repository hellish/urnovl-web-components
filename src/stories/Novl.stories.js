import { html } from 'lit';
import '../components/ur-novl/ur-novl';

const Novl = ({ novlTitle }) => html`
    <ur-novl novl-title="${novlTitle}"></ur-novl>
`;

export default {
  title: 'Urnovl/Novl',
  render: args => Novl(args),
};

export const Default = {
  args: {
    novlTitle: 'Welcome to my nightmare'
  },
};
