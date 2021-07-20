import { ExtractorModelData } from '../types/types';
declare class ExtractorModel {
    name: string;
    private _raw;
    /**
     * Model for raw Discord Player extractors
     * @param {String} extractorName Name of the extractor
     * @param {Object} data Extractor object
     */
    constructor(extractorName: string, data: any);
    /**
     * Method to handle requests from `Player.play()`
     * @param {String} query Query to handle
     * @returns {Promise<ExtractorModelData>}
     */
    handle(query: string): Promise<ExtractorModelData>;
    /**
     * Method used by Discord Player to validate query with this extractor
     * @param {String} query The query to validate
     * @returns {Boolean}
     */
    validate(query: string): boolean;
    /**
     * The extractor version
     * @type {String}
     */
    get version(): string;
    /**
     * If player should mark this extractor as important
     * @type {Boolean}
     */
    get important(): boolean;
}
export default ExtractorModel;
export { ExtractorModel };
