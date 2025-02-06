export type UserCustomContent = {
    content: (index: number) => string;
}

export type LoadingUser = {
    userId: string;
    loading: true;
}

export type LoadedUser = {
    userId: string;
    userTitle: string;
    userCover: string;
    followers?: number;
    showStats?: boolean;
    userDescription: string;
    borderRadius?: string;
}

export type User = LoadingUser | LoadedUser;

export const is_custom_data = (data: any): data is UserCustomContent => {
    return data && !!data.content && typeof data.content === 'function';
};
