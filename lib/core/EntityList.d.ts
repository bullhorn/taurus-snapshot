import { Observable } from 'rxjs';
import { EntityMessageBroker } from '../broker';
import { QueryService, SearchService } from '../services';
import { Entity } from './Entity';
import { EntityListOptions } from './EntityListOptions';
import { StatefulSubject } from './StatefulSubject';
export declare type EntityListReference<T> = SearchService<T> | QueryService<T>;
export declare type EntityOperation = number | Entity<any>;
export interface ListResults {
    start: number;
    count: number;
    data: any[];
    total?: number;
}
export declare class EntityList<T> extends StatefulSubject<T[]> {
    static useSearch: boolean;
    type: string;
    descriptor: any;
    private $latest;
    private readonly $ref;
    private readonly $list;
    readonly $loadError: Observable<any>;
    private readonly loadErrorSubject;
    protected broker: EntityMessageBroker;
    private latestTimestamp;
    constructor(type: string, options?: EntityListOptions, state?: T[], callingIdentifier?: string);
    protected getSearcher(type: string, callingIdentifier?: string): EntityListReference<T>;
    get lastAdded(): Entity<T>;
    get info(): {
        total: number;
        messages: import("../types/Responses").BullhornMessage[];
        start: string;
        count: string;
    };
    findById(pk: number): Entity<T>;
    push(item: T): Promise<any>;
    update(item: EntityOperation, value: T): Promise<any>;
    remove(item: EntityOperation): Promise<any>;
    private _setUpObservable;
    private _eventHook;
    private _checkOperationCases;
}
