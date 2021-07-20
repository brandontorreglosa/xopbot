import Thumbnail from "./Thumbnail";
import Video from "./Video";
import Channel from "./Channel";
declare class Playlist {
    id?: string;
    title?: string;
    videoCount: number;
    lastUpdate?: string;
    views?: number;
    url?: string;
    link?: string;
    channel?: Channel;
    thumbnail?: Thumbnail;
    videos: Video[];
    private _continuation;
    constructor(data?: {}, searchResult?: boolean);
    private _patch;
    private _patchSearch;
    next(limit?: number): Promise<Video[]>;
    fetch(max?: number): Promise<this>;
    get type(): "playlist";
    [Symbol.iterator](): IterableIterator<Video>;
    toJSON(): {
        id: string;
        title: string;
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
        url: string;
        videos: Video[];
    };
}
export default Playlist;
