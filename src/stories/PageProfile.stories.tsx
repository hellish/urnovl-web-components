import { html } from "lit";

import creator from '../../assets/images/avatar.svg';
import publisher from '../../assets/images/publisher.svg';

import '../components/ur-page-profile/ur-page-profile';

const DESCRIPTION = "Passionate writer crafting stories that captivate and inspire. Lover of words, exploring the world one page at a time. Always seeking new tales to tell."

const PageProfile = ({
    containerWidth = "256px",
    name = "Penguin Publishing",
    avatar = publisher,
    platform = 'desktop',
    about = null,
    location = null,
    facebook_url = null,
    twitter_url = null,
    linkedin_url = null,
    phone = null,
    email = null,
    website = null,
    stories = null,
    views = null,
    following = null,
    followers = null,
    members = null,
    showFollow = false,
    showBecomeAMember = false,
    showDonate = false,
    showSendMessage = false,
    languages = [],
    genres = [],
    literatureTypes = [],
    pageCreatorName = null,
    pageCreatorImage = null,
    pageCreationDate = null,
}) => {
    return html`
        <div style="width:${containerWidth};">
            <ur-page-profile
                platform=${platform}
                name=${name}
                avatar=${avatar}
                about=${about}
                location=${location}
                facebook_url=${facebook_url}
                twitter_url=${twitter_url}
                linkedin_url=${linkedin_url}
                phone=${phone}
                email=${email}
                website=${website}
                stories=${stories}
                views=${views}
                following=${following}
                followers=${followers}
                members=${members}
                show-follow=${showFollow}
                show-become-member=${showBecomeAMember}
                show-donate=${showDonate}
                show-send-message=${showSendMessage}
                languages=${languages}
                genres=${genres}
                literature-types=${literatureTypes}
                page-creator-name=${pageCreatorName}
                page-creator-image=${pageCreatorImage}
                page-creation-date=${pageCreationDate}
            ></ur-page-profile>
        </div>`;
}

export default {
    title: 'Urnovl/Business/PageProfile',
};

export const Default = {
    render: () => PageProfile({
        //
    })
};

export const Wider = {
    render: () => PageProfile({
        containerWidth: '350px',
        location: "London, UK",
        about: DESCRIPTION,
        facebook_url: 'https://facebook.com',
        twitter_url: 'https://twitter.com',
        linkedin_url: 'https://linkedin.com',
        phone: '999666333',
        email: 'urnovl@gmail.com',
        website: 'https://urnovl.co',
        stories: 0,
        views: 350745,
        following: 1556,
        followers: 1557,
        members: 17,
        showFollow: true,
        showBecomeAMember: true,
        showDonate: true,
        showSendMessage: true,
        languages: [ "Greek", "English", "Bulgarian", "Albanian" ],
        genres: [ "Horror", "Thriller" ],
        literatureTypes: [ "Poetry", "Prose", "Poetry" ],
        pageCreatorName: 'Malik Abubakari',
        pageCreatorImage: creator,
        pageCreationDate: 'May 25, 2015'
    })
};

export const FullWidth = {
    render: () => PageProfile({
        containerWidth: '100%',
        location: "London, UK",
        about: DESCRIPTION,
        facebook_url: 'https://facebook.com',
        twitter_url: 'https://twitter.com',
        linkedin_url: 'https://linkedin.com',
        phone: '999666333',
        email: 'urnovl@gmail.com',
        website: 'https://urnovl.co',
        stories: 0,
        views: 350745,
        following: 1556,
        followers: 1557,
        members: 17,
        showFollow: true,
        showBecomeAMember: true,
        showDonate: true,
        showSendMessage: true,
        languages: [ "Greek", "English", "Bulgarian", "Albanian" ],
        genres: [ "Horror", "Thriller" ],
        literatureTypes: [ "Poetry", "Prose", "Poetry" ],
        pageCreatorName: 'Malik Abubakari',
        pageCreatorImage: creator,
        pageCreationDate: 'May 25, 2015'
    })
};

export const MobileMain = {
    render: () => PageProfile({
        platform: 'mobile-main',
        containerWidth: '100%',
        location: "London, UK",
        about: DESCRIPTION,
        facebook_url: 'https://facebook.com',
        twitter_url: 'https://twitter.com',
        linkedin_url: 'https://linkedin.com',
        phone: '999666333',
        email: 'urnovl@gmail.com',
        website: 'https://urnovl.co',
        stories: 0,
        views: 350745,
        following: 1556,
        followers: 1557,
        members: 17,
        showFollow: true,
        showBecomeAMember: true,
        showDonate: true,
        showSendMessage: true,
        languages: [ "Greek", "English", "Bulgarian", "Albanian" ],
        genres: [ "Horror", "Thriller" ],
        literatureTypes: [ "Poetry", "Prose", "Poetry" ],
        pageCreatorName: 'Malik Abubakari',
        pageCreatorImage: creator,
        pageCreationDate: 'May 25, 2015'
    })
};

export const MobileSecondary = {
    render: () => PageProfile({
        platform: 'mobile-secondary',
        containerWidth: '100%',
        location: "London, UK",
        about: DESCRIPTION,
        facebook_url: 'https://facebook.com',
        twitter_url: 'https://twitter.com',
        linkedin_url: 'https://linkedin.com',
        phone: '999666333',
        email: 'urnovl@gmail.com',
        website: 'https://urnovl.co',
        stories: 0,
        views: 350745,
        following: 1556,
        followers: 1557,
        members: 17,
        showFollow: true,
        showBecomeAMember: true,
        showDonate: true,
        showSendMessage: true,
        languages: [ "Greek", "English", "Bulgarian", "Albanian" ],
        genres: [ "Horror", "Thriller" ],
        literatureTypes: [ "Poetry", "Prose", "Poetry" ],
        pageCreatorName: 'Malik Abubakari',
        pageCreatorImage: creator,
        pageCreationDate: 'May 25, 2015'
    })
};

const PageProfileBackground = () => {
    return html`
        <style>
            .sb-show-main.sb-main-padded {
                padding: 0;
            }
        </style>
        <div style="display: flex;flex-direction: column;width: 100%;">
            <div style="background: url('https://raw.githubusercontent.com/hellish/urnovl-web-components/refs/heads/master/assets/demo/background.png') no-repeat;width: 100%;height: 215px;"></div>
            <div style="position: relative;display: flex;">
                <div>
                    ${PageProfile({
                        containerWidth: '256px',
                        location: "London, UK",
                        about: DESCRIPTION,
                        facebook_url: 'https://facebook.com',
                        twitter_url: 'https://twitter.com',
                        linkedin_url: 'https://linkedin.com',
                        phone: '999666333',
                        email: 'urnovl@gmail.com',
                        website: 'https://urnovl.co',
                        stories: 0,
                        views: 350745,
                        following: 1556,
                        followers: 1557,
                        members: 17,
                        showFollow: true,
                        showBecomeAMember: true,
                        showDonate: true,
                        showSendMessage: true,
                        languages: [ "Greek", "English", "Bulgarian", "Albanian" ],
                        genres: [ "Horror", "Thriller" ],
                        literatureTypes: [ "Poetry", "Prose", "Poetry" ],
                        pageCreatorName: 'Malik Abubakari',
                        pageCreatorImage: creator,
                        pageCreationDate: 'May 25, 2015'
                    })}
                </div>
                <div style="position: relative; border-left: 1px solid #C3C6CF;position: relative;flex: 1 1 100%;padding: 36px 16px;font-size: 12px;box-sizing:border-box;">
                    <div>
                        [main-content]
                    </div>
                </div>
            </div>
        </div>
    `
}

export const Full = {
    render: () => PageProfileBackground()
}
