declare type ThumbnailType = "default" | "hqdefault" | "mqdefault" | "sddefault" | "maxresdefault" | "ultrares";
declare class Thumbnail {
    id?: string;
    width: number;
    height: number;
    url?: string;
    constructor(data: any);
    private _patch;
    displayThumbnailURL(thumbnailType?: ThumbnailType): string;
    defaultThumbnailURL(id: "0" | "1" | "2" | "3" | "4"): string;
    toString(): string;
    toJSON(): {
        id: string;
        width: number;
        height: number;
        url: string;
    };
}
export default Thumbnail;
