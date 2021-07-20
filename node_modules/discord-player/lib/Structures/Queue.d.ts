/// <reference types="node" />
import { Message, Snowflake, VoiceConnection } from 'discord.js';
import { Player } from '../Player';
import { EventEmitter } from 'events';
import { Track } from './Track';
import { QueueFilters } from '../types/types';
export declare class Queue extends EventEmitter {
    player: Player;
    guildID: Snowflake;
    voiceConnection?: VoiceConnection;
    stream?: any;
    tracks: Track[];
    previousTracks: Track[];
    stopped: boolean;
    lastSkipped: boolean;
    volume: number;
    paused: boolean;
    repeatMode: boolean;
    loopMode: boolean;
    filters: QueueFilters;
    additionalStreamTime: number;
    firstMessage: Message;
    /**
     * If autoplay is enabled in this queue
     * @type {boolean}
     */
    autoPlay: boolean;
    /**
     * Queue constructor
     * @param {Player} player The player that instantiated this Queue
     * @param {DiscordMessage} message The message object
     */
    constructor(player: Player, message: Message);
    /**
     * Currently playing track
     * @type {Track}
     */
    get playing(): Track;
    /**
     * Calculated volume of this queue
     * @type {Number}
     */
    get calculatedVolume(): number;
    /**
     * Total duration
     * @type {Number}
     */
    get totalTime(): number;
    /**
     * Current stream time
     * @type {Number}
     */
    get currentStreamTime(): number;
    /**
     * Sets audio filters in this player
     * @param {QueueFilters} filters Audio filters to set
     * @returns {Promise<void>}
     */
    setFilters(filters: QueueFilters): Promise<void>;
    /**
     * Returns array of all enabled filters
     * @returns {String[]}
     */
    getFiltersEnabled(): string[];
    /**
     * Returns all disabled filters
     * @returns {String[]}
     */
    getFiltersDisabled(): string[];
    /**
     * Destroys this queue
     * @returns {Boolean}
     */
    destroy(): boolean;
    /**
     * String representation of this Queue
     * @returns {String}
     */
    toString(): string;
}
export default Queue;
