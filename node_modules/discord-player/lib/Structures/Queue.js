"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
const AudioFilters_1 = __importDefault(require("../utils/AudioFilters"));
const events_1 = require("events");
class Queue extends events_1.EventEmitter {
    /**
     * Queue constructor
     * @param {Player} player The player that instantiated this Queue
     * @param {DiscordMessage} message The message object
     */
    constructor(player, message) {
        var _a, _b;
        super();
        /**
         * If autoplay is enabled in this queue
         * @type {boolean}
         */
        this.autoPlay = false;
        /**
         * The player that instantiated this Queue
         * @name Queue#player
         * @type {Player}
         * @readonly
         */
        Object.defineProperty(this, 'player', { value: player, enumerable: false });
        /**
         * ID of the guild assigned to this queue
         * @type {DiscordSnowflake}
         */
        this.guildID = message.guild.id;
        /**
         * The voice connection of this queue
         * @type {DiscordVoiceConnection}
         */
        this.voiceConnection = null;
        /**
         * Tracks of this queue
         * @type {Track[]}
         */
        this.tracks = [];
        /**
         * Previous tracks of this queue
         * @type {Track[]}
         */
        this.previousTracks = [];
        /**
         * If the player of this queue is stopped
         * @type {boolean}
         */
        this.stopped = false;
        /**
         * If last track was skipped
         * @type {boolean}
         */
        this.lastSkipped = false;
        /**
         * Queue volume
         * @type {Number}
         */
        this.volume = 100;
        /**
         * If the player of this queue is paused
         * @type {boolean}
         */
        this.paused = Boolean((_b = (_a = this.voiceConnection) === null || _a === void 0 ? void 0 : _a.dispatcher) === null || _b === void 0 ? void 0 : _b.paused);
        /**
         * If repeat mode is enabled in this queue
         * @type {boolean}
         */
        this.repeatMode = false;
        /**
         * If loop mode is enabled in this queue
         * @type {boolean}
         */
        this.loopMode = false;
        /**
         * The additional calculated stream time
         * @type {Number}
         */
        this.additionalStreamTime = 0;
        /**
         * The initial message object
         * @type {DiscordMessage}
         */
        this.firstMessage = message;
        /**
         * The audio filters in this queue
         * @type {QueueFilters}
         */
        this.filters = {};
        Object.keys(AudioFilters_1.default).forEach((fn) => {
            this.filters[fn] = false;
        });
    }
    /**
     * Currently playing track
     * @type {Track}
     */
    get playing() {
        return this.tracks[0];
    }
    /**
     * Calculated volume of this queue
     * @type {Number}
     */
    get calculatedVolume() {
        return this.filters.normalizer ? this.volume + 70 : this.volume;
    }
    /**
     * Total duration
     * @type {Number}
     */
    get totalTime() {
        return this.tracks.length > 0 ? this.tracks.map((t) => t.durationMS).reduce((p, c) => p + c) : 0;
    }
    /**
     * Current stream time
     * @type {Number}
     */
    get currentStreamTime() {
        var _a, _b;
        const NC = this.filters.nightcore ? 1.25 : null;
        const VW = this.filters.vaporwave ? 0.8 : null;
        const streamTime = ((_b = (_a = this.voiceConnection) === null || _a === void 0 ? void 0 : _a.dispatcher) === null || _b === void 0 ? void 0 : _b.streamTime) + this.additionalStreamTime || 0;
        if (NC && VW)
            return streamTime * (NC + VW);
        return NC ? streamTime * NC : VW ? streamTime * VW : streamTime;
    }
    /**
     * Sets audio filters in this player
     * @param {QueueFilters} filters Audio filters to set
     * @returns {Promise<void>}
     */
    setFilters(filters) {
        return this.player.setFilters(this.firstMessage, filters);
    }
    /**
     * Returns array of all enabled filters
     * @returns {String[]}
     */
    getFiltersEnabled() {
        const filters = [];
        for (const filter in this.filters) {
            if (this.filters[filter] !== false)
                filters.push(filter);
        }
        return filters;
    }
    /**
     * Returns all disabled filters
     * @returns {String[]}
     */
    getFiltersDisabled() {
        const enabled = this.getFiltersEnabled();
        return Object.keys(this.filters).filter((f) => !enabled.includes(f));
    }
    /**
     * Destroys this queue
     * @returns {Boolean}
     */
    destroy() {
        return this.player.stop(this.firstMessage);
    }
    /**
     * String representation of this Queue
     * @returns {String}
     */
    toString() {
        return `<Queue ${this.guildID}>`;
    }
}
exports.Queue = Queue;
exports.default = Queue;
