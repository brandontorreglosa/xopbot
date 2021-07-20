import Util from "./Util";
import Channel from "./Structures/Channel";
import Playlist from "./Structures/Playlist";
import Video from "./Structures/Video";
import Thumbnail from "./Structures/Thumbnail";
export interface SearchOptions {
    limit?: number;
    type?: "video" | "channel" | "playlist" | "all";
    requestOptions?: RequestInit;
    safeSearch?: boolean;
}
export interface PlaylistOptions {
    limit?: number;
    requestOptions?: RequestInit;
}
declare class YouTube {
    constructor();
    static search(query: string, options?: SearchOptions & {
        type: "video";
    }): Promise<Video[]>;
    static search(query: string, options?: SearchOptions & {
        type: "channel";
    }): Promise<Channel[]>;
    static search(query: string, options?: SearchOptions & {
        type: "playlist";
    }): Promise<Playlist[]>;
    static search(query: string, options?: SearchOptions & {
        type: "all";
    }): Promise<(Video | Channel | Playlist)[]>;
    static searchOne(query: string, type?: "video", safeSearch?: boolean, requestOptions?: RequestInit): Promise<Video>;
    static searchOne(query: string, type?: "channel", safeSearch?: boolean, requestOptions?: RequestInit): Promise<Channel>;
    static searchOne(query: string, type?: "playlist", safeSearch?: boolean, requestOptions?: RequestInit): Promise<Playlist>;
    static getPlaylist(url: string, options?: PlaylistOptions): Promise<Playlist>;
    static getVideo(url: string | Video, requestOptions?: RequestInit): Promise<Video>;
    static homepage(): Promise<Video[]>;
    static fetchInnerTubeKey(): Promise<string>;
    static trending(): Promise<Video[]>;
    static getSuggestions(query: string): Promise<string[]>;
    static validate(url: string, type?: "VIDEO" | "VIDEO_ID" | "PLAYLIST" | "PLAYLIST_ID"): boolean;
    static isPlaylist(src: string): boolean;
    static get Regex(): {
        PLAYLIST_URL: RegExp;
        PLAYLIST_ID: RegExp;
        VIDEO_ID: RegExp;
        VIDEO_URL: RegExp;
    };
}
export { Util, Thumbnail, Channel, Playlist, Video, YouTube };
export default YouTube;
