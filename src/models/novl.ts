export type CustomContent = {
    content: (index: number) => string;
}

export type LoadingNovl = {
    novlId: string;
    loading: true;
}

export type LoadedNovl = {
    novlId: string;
    novlTitle: string;
    novlCover: string;
    likes?: number;
    views?: number;
    showStats?: boolean;
    novlDescription: string;
    authorAvatar: string;
    authorName: string;
    published?: boolean;
    price?: string;
    publisherAvatar?: string;
    publisherName?: string;
    borderRadius?: string;
}

export type Novl = LoadingNovl | LoadedNovl;

export const is_custom_data = (data: any): data is CustomContent => {
    return data && !!data.content && typeof data.content === 'function';
};
