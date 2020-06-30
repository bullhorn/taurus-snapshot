export declare type FieldSyntax = [string, string[]];
export declare type FieldSyntaxTree = (string | FieldSyntax)[];
export declare function tokenize(str: string): string[];
export declare function parse(tokens: string[]): FieldSyntaxTree;
export declare function readField(str: string): string | [string, string[]];
export declare function readFields(str: string): (string | [string, string[]])[];
export declare function fieldTuple(field: string | FieldSyntax): FieldSyntax;
export declare function stringify(fields: FieldSyntaxTree): string;
export declare function missingSubFields(field: string, meta: any): string | false;
export declare function filterNotInMeta(fields: FieldSyntaxTree, meta: any): any;
