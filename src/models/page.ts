export type PageCustomContent = {
    content: (index: number) => string;
}

export type PageMemberEvent = {
    pageId: string;
    status: 'idle' | 'pending' | 'accepted' | 'rejected' | 'canceled' | 'leave';
}

export type LoadingPage = {
    pageId: string;
    loading: true;

};

export type LoadedPage = {
    pageId: string;
    pageTitle: string;
    pageCover: string;
    pageDescription: string;
    followers?: number;
    showStats?: boolean;
    borderRadius?: string;
};

export type Page = LoadingPage | LoadedPage;

export const is_custom_data = (data: any): data is PageCustomContent => {
    return data && !!data.content && typeof data.content === 'function';
};
