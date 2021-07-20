import Channel from "./Structures/Channel";
import Playlist from "./Structures/Playlist";
import Video from "./Structures/Video";
export interface ParseSearchInterface {
    type?: "video" | "playlist" | "channel" | "all";
    limit?: number;
    requestOptions?: RequestInit;
}
declare class Util {
    constructor();
    static get VideoRegex(): RegExp;
    static get VideoIDRegex(): RegExp;
    static get PlaylistURLRegex(): RegExp;
    static get PlaylistIDRegex(): RegExp;
    static getHTML(url: string, requestOptions?: RequestInit): Promise<string>;
    static parseDuration(duration: string): number;
    static parseSearchResult(html: string, options?: ParseSearchInterface): (Video | Channel | Playlist)[];
    static parseChannel(data?: any): Channel;
    static parseVideo(data?: any): Video;
    static parsePlaylist(data?: any): Playlist;
    static getPlaylistVideos(data: any, limit?: number): Video[];
    static getPlaylist(html: string, limit?: number): Playlist;
    static getContinuationToken(ctx: any): string;
    static getVideo(html: string): Video;
    static getNext(body: any, home?: boolean): Video[];
    static parseHomepage(html: string): Video[];
    static getPlaylistURL(url: string): string;
    static validatePlaylist(url: string): void;
    static filter(ftype: string): string;
    static parseMS(milliseconds: number): {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
    static durationString(data: any): string;
    static json(data: string): any;
}
export default Util;
