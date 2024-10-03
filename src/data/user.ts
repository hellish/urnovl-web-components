import type { User } from '../models/user';

export const USER_COVER_FALLBACK = 'data:image/webp;base64,UklGRtQAAABXRUJQVlA4TMgAAAAv/8f/EQfQla70pPIBIUHi/+9mIvqf8Z///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7vAQ==';

export const USERS: Array<User> = [
    {
        userTitle: 'Efthumis Malamidis',
        userCover: 'https://s3-eu-west-1.amazonaws.com/urnovl-irl-1/covers/fe469e2a-8e19-48a2-a89d-55e8a201156c-grid.jpg',
        followers: 3500,
        showStats: true,
        userDescription: 'Mystery author crafting gripping tales full of suspense, adventure, and thrilling twists.',
    },
];
