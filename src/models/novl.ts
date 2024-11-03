export type LoadingNovl = {
    loading: true;
}

export type LoadedNovl = {
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
