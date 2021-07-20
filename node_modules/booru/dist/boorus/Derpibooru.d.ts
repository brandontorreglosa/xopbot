import SearchParameters from '../structures/SearchParameters';
import SearchResults from '../structures/SearchResults';
import Site from '../structures/Site';
import Booru from './Booru';
export default class Derpibooru extends Booru {
    constructor(site: Site, credentials?: any);
    search(tags: string[] | string, { limit, random, page }?: SearchParameters): Promise<SearchResults>;
}
