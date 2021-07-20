import { QueryType, TimeData } from '../types/types';
import { Track } from '../Structures/Track';
import { VoiceChannel } from 'discord.js';
export declare class Util {
    /**
     * Static Player Util class
     */
    constructor();
    /**
     * Checks FFmpeg Version
     * @param {Boolean} [force] If it should forcefully get the version
     * @returns {String}
     */
    static getFFmpegVersion(force?: boolean): string;
    /**
     * Checks FFmpeg
     * @param {Boolean} [force] If it should forcefully get the version
     * @returns {Boolean}
     */
    static checkFFmpeg(force?: boolean): boolean;
    /**
     * Alerts if FFmpeg is not available
     */
    static alertFFmpeg(): void;
    /**
     * Resolves query type
     * @param {String} query The query
     * @returns {QueryType}
     */
    static getQueryType(query: string): QueryType;
    /**
     * Checks if the given string is url
     * @param {String} str URL to check
     * @returns {Boolean}
     */
    static isURL(str: string): boolean;
    /**
     * Returns Vimeo ID
     * @param {String} query Vimeo link
     * @returns {String}
     */
    static getVimeoID(query: string): string;
    /**
     * Parses ms time
     * @param {Number} milliseconds Time to parse
     * @returns {TimeData}
     */
    static parseMS(milliseconds: number): TimeData;
    /**
     * Creates simple duration string
     * @param {object} durObj Duration object
     * @returns {String}
     */
    static durationString(durObj: object): string;
    /**
     * Makes youtube searches
     * @param {String} query The query
     * @param {any} options Options
     * @returns {Promise<Track[]>}
     */
    static ytSearch(query: string, options?: any): Promise<Track[]>;
    /**
     * Checks if the given voice channel is empty
     * @param {DiscordVoiceChannel} channel The voice channel
     * @returns {Boolean}
     */
    static isVoiceEmpty(channel: VoiceChannel): boolean;
    /**
     * Builds time code
     * @param {object} data The data to build time code from
     * @returns {String}
     */
    static buildTimeCode(data: any): string;
    /**
     * Manage CJS require
     * @param {String} id id to require
     * @returns {any}
     */
    static require(id: string): any;
    /**
     * Defines a property in the given object
     * @param {any} target The target
     * @param {any} prop The property to define
     * @param {any} value The value
     * @returns {void}
     */
    static define(ops: {
        target: any;
        prop: any;
        value: any;
        enumerate?: boolean;
    }): void;
}
export default Util;
