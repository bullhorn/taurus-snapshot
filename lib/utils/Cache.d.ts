/**
 * A Singleton Class that wraps localStorage calls to simply setting and
 * retrieving non-String values. All values stored will be Stringified and
 * all values returned will be parsed back with JSON.parse
 */
export declare class Cache {
    /**
     * Will change the the Storage type used by the Cache.  This can be any class
     * that implements the Storage iterface. ie. LocalStorage,SessionStorage,Storage
     */
    static storage: Storage;
    /**
     * Logs all values in storage
     */
    static list(): Promise<void>;
    static exceedsStorageLimit(key: string, value: any): boolean;
    static getLocalStorageSize(): number;
    /**
     * Adds value to cache with the key as the identifier
     * @param key - The key used to store the cached value
     * @param value - The value to be cached
     * @returns value - the value stored
     */
    static put(key: string, value: any): Promise<any>;
    /**
     * Retrieves value from the cache stored with the key
     * @param key - The key used to identify the cached value
     * @returns value - the value cached
     */
    static get(key: string, updateRankings?: boolean): Promise<any>;
    /**
     * Checks if a key is in the cache
     * @param key - The key used to identify the cached value
     * @returns value - if the cache contains the key
     */
    static has(key: string): Promise<boolean>;
    /**
     * Removes a key from the cache
     * @param key - The key used to identify the cached value
     */
    static remove(key: string): Promise<void>;
    /**
     * Clears out the cache
     * @param key - The key used to identify the cached value
     */
    static clear(): Promise<void>;
    static getStorageRankings(): Promise<any>;
    static handleStorageRankingUpdate(key: string): Promise<void>;
}
