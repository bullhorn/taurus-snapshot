import { AxiosInstance } from 'axios';
import { BullhornMetaResponse, FieldMap, FieldLayout, BullhornTrack, BullhornSectionHeader } from '../types';
/**
 * A Class that defines the base Meta Model
 * @param endpoint - Base Url for all relative http calls eg. 'meta/JobOrder'
 * @param [parser] - Optional function to use to manipulate meta data returned
 */
export declare class MetaService {
    entity: string;
    static BASIC: string;
    static FULL: string;
    static TRACK: string;
    label: string;
    http: AxiosInstance;
    memory: any;
    fields: FieldMap[];
    layouts: FieldLayout[];
    tracks: BullhornTrack[];
    sectionHeaders: BullhornSectionHeader[];
    trackTrigger: string;
    allFieldsLoaded: boolean;
    parameters: any;
    private readonly initialized;
    constructor(entity: string, callingIdentifier?: string);
    initialize(callingIdentifier?: string): Promise<void>;
    readonly endpoint: string;
    private setFieldsOnLayout;
    /**
     * Define how much meta data to return
     */
    style(value?: string): MetaService;
    /**
     * Will merge object into the entity's parameter to be sent in any http request.
     * @param object - all additional parameters
     */
    params(object: any): MetaService;
    /**
     * Make http request to get meta data. Response data will be parsed, then the Promise will be resolved.
     */
    get(requested: string[], layout?: string): Promise<FieldMap[]>;
    /**
     * Make http request to get track data. Response data will be parsed, then the Promise will be resolved.
     */
    getTracks(): Promise<BullhornTrack[]>;
    /**
     * Make http request to get track data. Response data will be parsed, then the Promise will be resolved.
     */
    getFields(): Promise<FieldMap[]>;
    getAllLayouts(): Promise<any[]>;
    getFull(requested: string[], layout?: string): Promise<BullhornMetaResponse>;
    getByLayout(layout: string, keepFieldsFromLayout?: boolean): Promise<FieldMap[]>;
    private parse;
    private missing;
    _clean(name: any): string;
    /**
     * Get specific meta data properties
     */
    private extract;
    static validate(): Promise<boolean>;
    static preload(entity: string, callingIdentifier?: string): Promise<[FieldMap[], any[]]>;
}
