/**
 * Every Utility Types from [type-fest](https://github.com/sindresorhus/type-fest).
 * Strongly recommand use type-fest.
 */
/**
 * @deprecated will be deprecate next version
 */
type IsEqual<T, U> = (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U ? 1 : 2 ? true : false;
/**
 * @deprecated will be deprecate next version
 */
interface SimplifyOptions {
    /**
      Do the simplification recursively.
  
      @default false
      */
    deep?: boolean;
}
/**
 * @deprecated will be deprecate next version
 */
type Flatten<AnyType, Options extends SimplifyOptions = {}> = Options['deep'] extends true ? {
    [KeyType in keyof AnyType]: Simplify<AnyType[KeyType], Options>;
} : {
    [KeyType in keyof AnyType]: AnyType[KeyType];
};
/**
 * @deprecated will be deprecate next version
 */
type Filter<KeyType, ExcludeType> = IsEqual<KeyType, ExcludeType> extends true ? never : KeyType extends ExcludeType ? never : KeyType;
/**
 * @deprecated will be deprecate next version
 */
type Simplify<AnyType, Options extends SimplifyOptions = {}> = Flatten<AnyType> extends AnyType ? Flatten<AnyType, Options> : AnyType;
/**
 * @deprecated will be deprecate next version
 */
type Except<ObjectType, KeysType extends keyof ObjectType> = {
    [KeyType in keyof ObjectType as Filter<KeyType, KeysType>]: ObjectType[KeyType];
};
/**
 * @deprecated will be deprecate next version
 */
type SetOptional<BaseType, Keys extends keyof BaseType> = Simplify<Except<BaseType, Keys> & Partial<Pick<BaseType, Keys>>>;
/**
 * @deprecated will be deprecate next version
 */
type SetRequired<BaseType, Keys extends keyof BaseType> = Simplify<Except<BaseType, Keys> & Required<Pick<BaseType, Keys>>>;

/**
 * Recommand use `SetRequired` in [type-fest](https://github.com/sindresorhus/type-fest).
 *
 * @deprecated will be deprecate next version
 */
type TNonNullableObject<T> = SetRequired<T, keyof T>;

/**
 * Recommand use `SetRequired` in [type-fest](https://github.com/sindresorhus/type-fest).
 *
 * @deprecated will be deprecate next version
 */
type TNonNullablePick<T, K extends keyof T> = SetRequired<T, K>;

/**
 * Recommand use `SetOptional` in [type-fest](https://github.com/sindresorhus/type-fest).
 *
 * @deprecated will be deprecate next version
 */
type TNullablePick<T, K extends keyof T> = SetOptional<T, K>;

/**
 * PartialRecord: optional keys for TypeScript Record
 *
 * @see https://stackoverflow.com/questions/53276792/define-a-list-of-optional-keys-for-typescript-record
 */
type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

/**
 * Recommand use `LastArrayElement` in [type-fest](https://github.com/sindresorhus/type-fest).
 *
 * @deprecated will be deprecate next version
 */
type TResolveArray<T> = T extends (infer U)[] ? U : T;

type TResolvePromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

/**
 * Same behavior of Array.prototype.at but at function result will be undefined throw exception.
 *
 * @param values array arguments
 * @param index array index arguments
 * @returns element of array at the index order
 */
declare function atOrThrow<T>(values: T | T[], index: number, err?: Error): NonNullable<T>;

/**
 * Same behavior of Array.prototype.at but at function result will be undefined return undefined.
 *
 * @param values array arguments
 * @param index array index arguments
 * @returns element of array at the index order
 */
declare function atOrUndefined<T>(values: T | T[], index: number): T | undefined;

declare function chunk<T>(arr: T[], size: number): T[][];

/**
 * Same behavior of Array.prototype.find but at function result will be undefined throw exception.
 *
 * @param values array arguments
 * @param predicate predicate function
 * @returns find result
 */
declare function findOrThrow<T>(values: T[], predicate: (value: T, index: number, obj: T[]) => unknown, err?: Error): T;

declare function first<T>(arr: T | T[]): T;

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
declare function getRandomRange(min: number, max: number): number;

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
declare function getRandomRangeInt(min: number, max: number): number;

declare function invert(value: boolean): boolean;

/**
 * Return `true` if the given value is empty value. Do additional checks based on the type of value given.
 *
 * * `number` type checks isNaN
 * * `string` type checks empty string
 * * `object` type and array checks whether the length of value is zero
 * * `object` type and object(also exclude instance of Date) whether the number of object key is zero
 *
 * @param value value you want to check it's empty
 */
declare function isComplexEmpty<T>(value?: T | undefined | null): value is null | undefined;

declare function isEmpty<T>(value?: T | undefined | null): value is undefined | null;

declare function isError(err: unknown): Error | undefined;
declare function isError(err: unknown, defaultValue: Error): Error;

declare function isFalse(value: boolean): boolean;

/**
 * Return `true` if the given value is non-empty value. Do additional checks based on the type of value given.
 * Returns the invert of result of `isComplexEmpty`
 *
 * @param value value you want to check it's non-empty
 */
declare function isNotComplexEmpty<T>(value?: T | null | undefined): value is T;

declare function isNotEmpty<T>(value?: T | undefined | null): value is T;

declare function isNotNull<T>(value?: T | null): value is T;

declare function isNotUndefined<T>(value?: T | undefined): value is T;

declare function isNull<T>(value?: T | null): value is null;

declare function isTrue(value: boolean): boolean;

declare function isUndefined<T>(value?: T | undefined): value is undefined;

declare function keyBy<T extends Record<K, PropertyKey>, K extends keyof T>(arr: T[], keyName: K): Partial<Record<T[K], T>>;

declare function keyBys<T extends Record<K, PropertyKey>, K extends keyof T>(arr: T[], keyName: K): Partial<Record<T[K], T[]>>;

declare function last<T>(arr: T[]): T;

/**
 * If the value is null or undefined, throw an error.
 *
 * @param value any type of value
 * @returns non nullable value
 */
declare function orThrow<T>(value: T | undefined, err?: Error): T;

declare function parseBool(value?: unknown): boolean;

declare function populate(size: number, oneBase?: boolean): number[];

declare function settify<T>(values: T[]): T[];

/**
 * sleep millisecond
 *
 * @param ms sleep time. That use millisecond
 */
declare function sleep(ms?: number): Promise<void>;

declare function toArray<T>(arr: T | T[]): T[];

/**
 * Same behavior of Object.keys but at function result type alised keyof O
 */
declare function typedkey<O extends object>(value: O): (keyof O)[];

export { Except, Filter, Flatten, IsEqual, PartialRecord, SetOptional, SetRequired, Simplify, SimplifyOptions, TNonNullableObject, TNonNullablePick, TNullablePick, TResolveArray, TResolvePromise, atOrThrow, atOrUndefined, chunk, findOrThrow, first, getRandomRange, getRandomRangeInt, invert, isComplexEmpty, isEmpty, isError, isFalse, isNotComplexEmpty, isNotEmpty, isNotNull, isNotUndefined, isNull, isTrue, isUndefined, keyBy, keyBys, last, orThrow, parseBool, populate, settify, sleep, toArray, typedkey };
