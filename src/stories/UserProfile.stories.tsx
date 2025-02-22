import { html } from "lit";

import '../components/ur-user-page-profile/ur-user-page-profile';

const DESCRIPTION = "Passionate writer crafting stories that captivate and inspire. Lover of words, exploring the world one page at a time. Always seeking new tales to tell."

const UserProfile = ({
    containerWidth = "256px",
    name = "John Doe",
    avatar = 'https://i.pravatar.cc/300',
    platform = 'desktop',
    about = null,
    profileType = null,
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
    isProfileOwner = false,
    userProfileCreatedDate = null,
}) => {
    return html`
        <div style="width:${containerWidth};">
            <ur-user-page-profile
                platform=${platform}
                is-profile-owner=${isProfileOwner}
                name=${name}
                avatar=${avatar}
                profile-type=${profileType}
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
                user-profile-created-date=${userProfileCreatedDate}
            ></ur-user-page-profile>
        </div>`;
}

export default {
    title: 'Urnovl/Business/UserPageProfile',
};

export const Default = {
    render: () => UserProfile({
        //
    })
};

export const Wider = {
    render: () => UserProfile({
        containerWidth: '350px',
        location: "London, UK",
        about: DESCRIPTION,
        facebook_url: 'https://facebook.com',
        profileType: 'Reader & Writer',
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
        userProfileCreatedDate: 'May 25, 2015'
    })
};

export const FullWidth = {
    render: () => UserProfile({
        containerWidth: '100%',
        location: "London, UK",
        profileType: 'Reader & Writer',
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
        userProfileCreatedDate: 'May 25, 2015'
    })
};

export const MobileMain = {
    render: () => UserProfile({
        platform: 'mobile-main',
        containerWidth: '100%',
        location: "London, UK",
        about: DESCRIPTION,
        profileType: 'Reader & Writer',
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
        userProfileCreatedDate: 'May 25, 2015'
    })
};

export const MobileSecondary = {
    render: () => UserProfile({
        platform: 'mobile-secondary',
        containerWidth: '100%',
        location: "London, UK",
        about: DESCRIPTION,
        profileType: 'Reader & Writer',
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
        userProfileCreatedDate: 'May 25, 2015'
    })
};

export const IsPageOwner = {
    render: () => UserProfile({
        platform: 'desktop',
        containerWidth: '100%',
        location: "London, UK",
        about: DESCRIPTION,
        profileType: 'Reader',
        facebook_url: 'https://facebook.com',
        twitter_url: 'https://twitter.com',
        linkedin_url: 'https://linkedin.com',
        phone: '999666333',
        email: 'urnovl@gmail.com',
        website: 'https://urnovl.co',
        stories: 5,
        views: 350745,
        following: 1556,
        followers: 1557,
        isProfileOwner: true,
        members: 17,
        showFollow: true,
        showBecomeAMember: true,
        showDonate: true,
        showSendMessage: true,
        userProfileCreatedDate: 'May 25, 2015'
    })
};

export const MobileSecondaryIsProfileOwner = {
    render: () => UserProfile({
        platform: 'mobile-secondary',
        containerWidth: '100%',
        location: "London, UK",
        about: DESCRIPTION,
        profileType: 'Reader & Writer',
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
        isProfileOwner: true,
        showFollow: true,
        showBecomeAMember: true,
        showDonate: true,
        showSendMessage: true,
        userProfileCreatedDate: 'May 25, 2015'
    })
};

const UserProfileBackground = ({ isProfileOwner = false }: { isProfileOwner?: boolean }) => {
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
                    ${UserProfile({
                        containerWidth: '256px',
                        location: "London, UK",
                        profileType: 'Reader',
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
                        isProfileOwner: isProfileOwner,
                        showSendMessage: true,
                        userProfileCreatedDate: 'May 25, 2015'
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
    render: () => UserProfileBackground({
        isProfileOwner: false
    })
}

export const FullIsProfileOwner = {
    render: () => UserProfileBackground({
        isProfileOwner: true
    })
}
