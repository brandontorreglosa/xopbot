import { Player } from '../Player';
import { User } from 'discord.js';
import { TrackData } from '../types/types';
import Queue from './Queue';
export declare class Track {
    player: Player;
    title: string;
    description: string;
    author: string;
    url: string;
    thumbnail: string;
    duration: string;
    views: number;
    requestedBy: User;
    fromPlaylist: boolean;
    raw: TrackData;
    /**
     * Track constructor
     * @param {Player} player The player that instantiated this Track
     * @param {TrackData} data Track data
     */
    constructor(player: Player, data: TrackData);
    private _patch;
    /**
     * The queue in which this track is located
     * @type {Queue}
     */
    get queue(): Queue;
    /**
     * The track duration in millisecond
     * @type {Number}
     */
    get durationMS(): number;
    /**
     * Returns source of this track
     * @type {TrackSource}
     */
    get source(): import("../types/types").TrackSource;
    /**
     * String representation of this track
     * @returns {String}
     */
    toString(): string;
}
export default Track;
