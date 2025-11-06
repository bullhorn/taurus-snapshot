export declare class Is {
    private readonly reference;
    constructor(ref: any);
    get aBoolean(): boolean;
    get aDate(): boolean;
    get aFunction(): boolean;
    get anArray(): boolean;
    get anError(): boolean;
    get anObject(): boolean;
    get aNonEmptyArray(): boolean;
    get aNonEmptyString(): boolean;
    get aNumber(): boolean;
    get aRegExp(): boolean;
    get aString(): boolean;
    get defined(): boolean;
    get nan(): boolean;
    get null(): boolean;
    get undefined(): boolean;
    a(T: any): boolean;
    aTypeOf(type: any): boolean;
}
export declare function is(ref: any): Is;
