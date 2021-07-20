import Channel from "./Channel";
import Thumbnail from "./Thumbnail";
declare class Video {
    id?: string;
    title?: string;
    description?: string;
    durationFormatted: string;
    duration: number;
    uploadedAt?: string;
    views: number;
    thumbnail?: Thumbnail;
    channel?: Channel;
    videos?: Video[];
    likes: number;
    dislikes: number;
    live: boolean;
    private: boolean;
    tags: string[];
    constructor(data: any);
    private _patch;
    get url(): string;
    embedHTML(options?: {
        id: string;
        width: number;
        height: number;
    }): string;
    get embedURL(): string;
    get type(): "video";
    toString(): string;
    toJSON(): {
        id: string;
        url: string;
        title: string;
        description: string;
        duration: number;
        duration_formatted: string;
        uploadedAt: string;
        thumbnail: {
            id: string;
            width: number;
            height: number;
            url: string;
        };
        channel: {
            name: string;
            id: string;
            icon: string;
        };
        views: number;
        type: "video";
        tags: string[];
        ratings: {
            likes: number;
            dislikes: number;
        };
        live: boolean;
        private: boolean;
    };
}
export default Video;
