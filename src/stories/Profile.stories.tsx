import { html } from "lit";
import '../components/ur-profile/ur-profile';

const Profile = ({
    name,
    description,
    location,
    facebook_url,
    twitter_url,
    linkedin_url,
    phone,
    email,
    website,
    show_follow,
    show_donate,
    show_become_member,
    show_send_message,
    show_stats,
    languages,
    width = '256px'
}) => html`
    <div style="width: ${width};border: 1px solid #ccc;box-sizing: border-box;">
        <ur-profile
            name="${name}"
            description="${description}"
            location="${location}"
            facebook_url="${facebook_url}"
            twitter_url="${twitter_url}",
            linkedin_url="${linkedin_url}"
            phone="${phone}"
            email="${email}"
            website="${website}"
            show_follow="${show_follow}"
            show_donate="${show_donate}"
            show_become_member="${show_become_member}"
            show_send_message="${show_send_message}"
            show_stats="${show_stats}"
            languages="${languages}"></ur-profile>
    </div>
`;

export default {
    title: 'Urnovl/Business/Profile',
};

export const Default = {
    render: () => Profile({
        name: 'Penguin Publishing',
        description: 'Passionate writer crafting stories that captivate and inspire. Lover of words, exploring the world one page at a time. Always seeking new tales to tell.',
        location: 'London, UK',
        facebook_url: 'https://facebook.com',
        twitter_url: 'https://twitter.com',
        linkedin_url: 'https://linkedin.com',
        phone: '999666333',
        email: 'urnovl@gmail.com',
        website: 'urnovl.co',
        show_follow: true,
        show_donate: true,
        show_become_member: true,
        show_send_message: true,
        show_stats: true,
        languages: [ 'English', 'Greek' ].join(',')
    }),
};

export const SmallerWidth = {
    render: () => Profile({
        name: 'Penguin Publishing',
        description: 'Passionate writer crafting stories that captivate and inspire. Lover of words, exploring the world one page at a time. Always seeking new tales to tell.',
        location: 'London, UK',
        facebook_url: 'https://facebook.com',
        twitter_url: 'https://twitter.com',
        linkedin_url: 'https://linkedin.com',
        phone: '999666333',
        email: 'urnovl@gmail.com',
        website: 'urnovl.co',
        show_follow: true,
        show_donate: true,
        show_become_member: true,
        show_send_message: true,
        show_stats: true,
        languages: [ 'English', 'Greek' ].join(','),
        width: '200px'
    }),
};

export const BiggerWidth = {
    render: () => Profile({
        name: 'Penguin Publishing',
        description: 'Passionate writer crafting stories that captivate and inspire. Lover of words, exploring the world one page at a time. Always seeking new tales to tell.',
        location: 'London, UK',
        facebook_url: 'https://facebook.com',
        twitter_url: 'https://twitter.com',
        linkedin_url: 'https://linkedin.com',
        phone: '999666333',
        email: 'urnovl@gmail.com',
        website: 'urnovl.co',
        show_follow: true,
        show_donate: true,
        show_become_member: true,
        show_send_message: true,
        show_stats: true,
        languages: [ 'English', 'Greek' ].join(','),
        width: '350px'
    }),
};
