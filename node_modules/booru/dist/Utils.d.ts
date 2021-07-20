export declare function resolveSite(domain: string): string | null;
export declare function jsonfy(xml: string): Promise<object[]>;
export declare function shuffle<T>(array: T[]): T[];
export declare function randInt(min: number, max: number): number;
export declare function validateSearchParams(site: string, limit: number | string): {
    site: string;
    limit: number;
};
export declare function compareArrays(arr1: string[], arr2: string[]): string[];
