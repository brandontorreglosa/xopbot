import SearchParameters from './SearchParameters';
export default interface InternalSearchParameters extends SearchParameters {
    uri?: string | null;
    fakeLimit?: number;
    tags?: string[] | string;
}
