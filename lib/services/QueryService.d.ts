import { AxiosInstance } from 'axios';
import { BullhornListResponse } from '../types';
import { MetaService } from './MetaService';
/**
 * A base class for making Query calls via Rest
 */
export declare class QueryService<T> {
    entity: string;
    http: AxiosInstance;
    meta: MetaService;
    records: any[];
    parameters: {
        fields: any;
        orderBy?: string[];
        start: number;
        count: number;
        where?: string;
        layout?: string;
        sort?: any;
        query?: any;
        showTotalMatched?: boolean;
    };
    protected _page: number;
    protected _endpoint: string;
    protected _lastResponse: BullhornListResponse<T>;
    private readonly initialized;
    /**
     * constructor description
     * @param endpoint - Base Url for all relative http calls eg. 'query/JobOrder'
     */
    constructor(entity: string, callingIdentifier?: string);
    initialize(callingIdentifier?: string): Promise<void>;
    get endpoint(): string;
    set endpoint(value: string);
    get total(): Promise<number>;
    get snapshot(): BullhornListResponse<T>;
    fields(...args: string[][]): this;
    sort(...args: any[]): this;
    where(value: {}): this;
    query(value: string): this;
    appendQuery(value: string): this;
    count(value: number): this;
    page(value: number): this;
    nextpage(): Promise<BullhornListResponse<T>>;
    params(object: any): this;
    get(add: any): Promise<BullhornListResponse<T>>;
    run(add: boolean): Promise<BullhornListResponse<T>>;
    private recursiveQueryPull;
    private shouldPullMoreRecords;
    private getNext;
    private httpGet;
    then(done: any, fail?: any): Promise<BullhornListResponse<T>>;
}
