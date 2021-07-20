import { FiltersName } from '../types/types';
/**
 * The available audio filters
 * @typedef {Object} AudioFilters
 * @property {String} bassboost The bassboost filter
 * @property {String} 8D The 8D filter
 * @property {String} vaporwave The vaporwave filter
 * @property {String} nightcore The nightcore filter
 * @property {String} phaser The phaser filter
 * @property {String} tremolo The tremolo filter
 * @property {String} vibrato The vibrato filter
 * @property {String} reverse The reverse filter
 * @property {String} treble The treble filter
 * @property {String} normalizer The normalizer filter
 * @property {String} surrounding The surrounding filter
 * @property {String} pulsator The pulsator filter
 * @property {String} subboost The subboost filter
 * @property {String} kakaoke The kakaoke filter
 * @property {String} flanger The flanger filter
 * @property {String} gate The gate filter
 * @property {String} haas The haas filter
 * @property {String} mcompand The mcompand filter
 * @property {String} mono The mono filter
 * @property {String} mstlr The mstlr filter
 * @property {String} mstrr The mstrr filter
 * @property {String} compressor The compressor filter
 * @property {String} expander The expander filter
 * @property {String} softlimiter The softlimiter filter
 * @property {String} chorus The chorus filter
 * @property {String} chorus2d The chorus2d filter
 * @property {String} chorus3d The chorus3d filter
 * @property {String} fadein The fadein filter
 */
declare const FilterList: {
    bassboost: string;
    '8D': string;
    vaporwave: string;
    nightcore: string;
    phaser: string;
    tremolo: string;
    vibrato: string;
    reverse: string;
    treble: string;
    normalizer: string;
    surrounding: string;
    pulsator: string;
    subboost: string;
    karaoke: string;
    flanger: string;
    gate: string;
    haas: string;
    mcompand: string;
    mono: string;
    mstlr: string;
    mstrr: string;
    compressor: string;
    expander: string;
    softlimiter: string;
    chorus: string;
    chorus2d: string;
    chorus3d: string;
    fadein: string;
    [Symbol.iterator](): IterableIterator<{
        name: FiltersName;
        value: string;
    }>;
    readonly names: string[];
    readonly length: number;
    toString(): string;
    create(filter?: FiltersName[]): string;
    define(filterName: string, value: string): void;
    defineBulk(filterArray: {
        name: string;
        value: string;
    }[]): void;
};
export default FilterList;
export { FilterList as AudioFilters };
