"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = void 0;
class Track {
    /**
     * Track constructor
     * @param {Player} player The player that instantiated this Track
     * @param {TrackData} data Track data
     */
    constructor(player, data) {
        /**
         * The player that instantiated this Track
         * @name Track#player
         * @type {Player}
         * @readonly
         */
        Object.defineProperty(this, 'player', { value: player, enumerable: false });
        /**
         * Title of this track
         * @name Track#title
         * @type {String}
         */
        /**
         * Description of this track
         * @name Track#description
         * @type {String}
         */
        /**
         * Author of this track
         * @name Track#author
         * @type {String}
         */
        /**
         * URL of this track
         * @name Track#url
         * @type {String}
         */
        /**
         * Thumbnail of this track
         * @name Track#thumbnail
         * @type {String}
         */
        /**
         * Duration of this track
         * @name Track#duration
         * @type {String}
         */
        /**
         * Views count of this track
         * @name Track#views
         * @type {Number}
         */
        /**
         * Person who requested this track
         * @name Track#requestedBy
         * @type {DiscordUser}
         */
        /**
         * If this track belongs to playlist
         * @name Track#fromPlaylist
         * @type {Boolean}
         */
        /**
         * Raw track data
         * @name Track#raw
         * @type {TrackData}
         */
        void this._patch(data);
    }
    _patch(data) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.title = (_a = data.title) !== null && _a !== void 0 ? _a : '';
        this.description = (_b = data.description) !== null && _b !== void 0 ? _b : '';
        this.author = (_c = data.author) !== null && _c !== void 0 ? _c : '';
        this.url = (_d = data.url) !== null && _d !== void 0 ? _d : '';
        this.thumbnail = (_e = data.thumbnail) !== null && _e !== void 0 ? _e : '';
        this.duration = (_f = data.duration) !== null && _f !== void 0 ? _f : '';
        this.views = (_g = data.views) !== null && _g !== void 0 ? _g : 0;
        this.requestedBy = data.requestedBy;
        this.fromPlaylist = Boolean(data.fromPlaylist);
        // raw
        Object.defineProperty(this, 'raw', { get: () => data, enumerable: false });
    }
    /**
     * The queue in which this track is located
     * @type {Queue}
     */
    get queue() {
        return this.player.queues.find((q) => q.tracks.includes(this));
    }
    /**
     * The track duration in millisecond
     * @type {Number}
     */
    get durationMS() {
        const times = (n, t) => {
            let tn = 1;
            for (let i = 0; i < t; i++)
                tn *= n;
            return t <= 0 ? 1000 : tn * 1000;
        };
        return this.duration
            .split(':')
            .reverse()
            .map((m, i) => parseInt(m) * times(60, i))
            .reduce((a, c) => a + c, 0);
    }
    /**
     * Returns source of this track
     * @type {TrackSource}
     */
    get source() {
        var _a;
        return (_a = this.raw.source) !== null && _a !== void 0 ? _a : 'arbitrary';
    }
    /**
     * String representation of this track
     * @returns {String}
     */
    toString() {
        return `${this.title} by ${this.author}`;
    }
}
exports.Track = Track;
exports.default = Track;
