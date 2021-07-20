"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioFilters = void 0;
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
const FilterList = {
    bassboost: 'bass=g=20',
    '8D': 'apulsator=hz=0.09',
    vaporwave: 'aresample=48000,asetrate=48000*0.8',
    nightcore: 'aresample=48000,asetrate=48000*1.25',
    phaser: 'aphaser=in_gain=0.4',
    tremolo: 'tremolo',
    vibrato: 'vibrato=f=6.5',
    reverse: 'areverse',
    treble: 'treble=g=5',
    normalizer: 'dynaudnorm=g=101',
    surrounding: 'surround',
    pulsator: 'apulsator=hz=1',
    subboost: 'asubboost',
    karaoke: 'stereotools=mlev=0.03',
    flanger: 'flanger',
    gate: 'agate',
    haas: 'haas',
    mcompand: 'mcompand',
    mono: 'pan=mono|c0=.5*c0+.5*c1',
    mstlr: 'stereotools=mode=ms>lr',
    mstrr: 'stereotools=mode=ms>rr',
    compressor: 'compand=points=-80/-105|-62/-80|-15.4/-15.4|0/-12|20/-7.6',
    expander: 'compand=attacks=0:points=-80/-169|-54/-80|-49.5/-64.6|-41.1/-41.1|-25.8/-15|-10.8/-4.5|0/0|20/8.3',
    softlimiter: 'compand=attacks=0:points=-80/-80|-12.4/-12.4|-6/-8|0/-6.8|20/-2.8',
    chorus: 'chorus=0.7:0.9:55:0.4:0.25:2',
    chorus2d: 'chorus=0.6:0.9:50|60:0.4|0.32:0.25|0.4:2|1.3',
    chorus3d: 'chorus=0.5:0.9:50|60|40:0.4|0.32|0.3:0.25|0.4|0.3:2|2.3|1.3',
    fadein: 'afade=t=in:ss=0:d=10',
    *[Symbol.iterator]() {
        for (const [k, v] of Object.entries(this)) {
            if (typeof this[k] === 'string')
                yield { name: k, value: v };
        }
    },
    get names() {
        return Object.keys(this).filter((p) => !['names', 'length'].includes(p) && typeof this[p] !== 'function');
    },
    get length() {
        return Object.keys(this).filter((p) => !['names', 'length'].includes(p) && typeof this[p] !== 'function').length;
    },
    toString() {
        return `${Object.values(this).join(',')}`;
    },
    create(filter) {
        if (!filter || !Array.isArray(filter))
            return this.toString();
        return filter
            .filter((predicate) => typeof predicate === 'string')
            .map((m) => this[m])
            .join(',');
    },
    define(filterName, value) {
        if (typeof this[filterName] && typeof this[filterName] === 'function')
            return;
        this[filterName] = value;
    },
    defineBulk(filterArray) {
        filterArray.forEach((arr) => this.define(arr.name, arr.value));
    }
};
exports.AudioFilters = FilterList;
exports.default = FilterList;
