export interface ChannelIconInterface {
    url?: string;
    width: number;
    height: number;
}
declare class Channel {
    name?: string;
    verified: boolean;
    id?: string;
    url?: string;
    icon: ChannelIconInterface;
    subscribers?: string;
    constructor(data: any);
    private _patch;
    iconURL(options?: {
        size: number;
    }): string;
    get type(): "channel";
    toString(): string;
    toJSON(): {
        name: string;
        verified: boolean;
        id: string;
        url: string;
        iconURL: string;
        type: "channel";
        subscribers: string;
    };
}
export default Channel;
