"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractorModel = void 0;
class ExtractorModel {
    /**
     * Model for raw Discord Player extractors
     * @param {String} extractorName Name of the extractor
     * @param {Object} data Extractor object
     */
    constructor(extractorName, data) {
        /**
         * The extractor name
         * @type {String}
         */
        this.name = extractorName;
        Object.defineProperty(this, '_raw', { value: data, configurable: false, writable: false, enumerable: false });
    }
    /**
     * Method to handle requests from `Player.play()`
     * @param {String} query Query to handle
     * @returns {Promise<ExtractorModelData>}
     */
    handle(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._raw.getInfo(query);
            if (!data)
                return null;
            return {
                title: data.title,
                duration: data.duration,
                thumbnail: data.thumbnail,
                engine: data.engine,
                views: data.views,
                author: data.author,
                description: data.description,
                url: data.url
            };
        });
    }
    /**
     * Method used by Discord Player to validate query with this extractor
     * @param {String} query The query to validate
     * @returns {Boolean}
     */
    validate(query) {
        return Boolean(this._raw.validate(query));
    }
    /**
     * The extractor version
     * @type {String}
     */
    get version() {
        var _a;
        return (_a = this._raw.version) !== null && _a !== void 0 ? _a : '0.0.0';
    }
    /**
     * If player should mark this extractor as important
     * @type {Boolean}
     */
    get important() {
        return Boolean(this._raw.important);
    }
}
exports.ExtractorModel = ExtractorModel;
exports.default = ExtractorModel;
