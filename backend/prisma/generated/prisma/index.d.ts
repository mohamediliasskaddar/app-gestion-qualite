
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Mesure
 * 
 */
export type Mesure = $Result.DefaultSelection<Prisma.$MesurePayload>
/**
 * Model Moule
 * 
 */
export type Moule = $Result.DefaultSelection<Prisma.$MoulePayload>
/**
 * Model MesureMoule
 * 
 */
export type MesureMoule = $Result.DefaultSelection<Prisma.$MesureMoulePayload>
/**
 * Model Piece
 * 
 */
export type Piece = $Result.DefaultSelection<Prisma.$PiecePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mesures
 * const mesures = await prisma.mesure.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Mesures
   * const mesures = await prisma.mesure.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.mesure`: Exposes CRUD operations for the **Mesure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mesures
    * const mesures = await prisma.mesure.findMany()
    * ```
    */
  get mesure(): Prisma.MesureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moule`: Exposes CRUD operations for the **Moule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moules
    * const moules = await prisma.moule.findMany()
    * ```
    */
  get moule(): Prisma.MouleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mesureMoule`: Exposes CRUD operations for the **MesureMoule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MesureMoules
    * const mesureMoules = await prisma.mesureMoule.findMany()
    * ```
    */
  get mesureMoule(): Prisma.MesureMouleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.piece`: Exposes CRUD operations for the **Piece** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pieces
    * const pieces = await prisma.piece.findMany()
    * ```
    */
  get piece(): Prisma.PieceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Mesure: 'Mesure',
    Moule: 'Moule',
    MesureMoule: 'MesureMoule',
    Piece: 'Piece'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "mesure" | "moule" | "mesureMoule" | "piece"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Mesure: {
        payload: Prisma.$MesurePayload<ExtArgs>
        fields: Prisma.MesureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MesureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MesureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>
          }
          findFirst: {
            args: Prisma.MesureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MesureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>
          }
          findMany: {
            args: Prisma.MesureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>[]
          }
          create: {
            args: Prisma.MesureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>
          }
          createMany: {
            args: Prisma.MesureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MesureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>[]
          }
          delete: {
            args: Prisma.MesureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>
          }
          update: {
            args: Prisma.MesureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>
          }
          deleteMany: {
            args: Prisma.MesureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MesureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MesureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>[]
          }
          upsert: {
            args: Prisma.MesureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesurePayload>
          }
          aggregate: {
            args: Prisma.MesureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMesure>
          }
          groupBy: {
            args: Prisma.MesureGroupByArgs<ExtArgs>
            result: $Utils.Optional<MesureGroupByOutputType>[]
          }
          count: {
            args: Prisma.MesureCountArgs<ExtArgs>
            result: $Utils.Optional<MesureCountAggregateOutputType> | number
          }
        }
      }
      Moule: {
        payload: Prisma.$MoulePayload<ExtArgs>
        fields: Prisma.MouleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MouleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MouleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoulePayload>
          }
          findFirst: {
            args: Prisma.MouleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MouleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoulePayload>
          }
          findMany: {
            args: Prisma.MouleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoulePayload>[]
          }
          create: {
            args: Prisma.MouleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoulePayload>
          }
          createMany: {
            args: Prisma.MouleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MouleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoulePayload>[]
          }
          delete: {
            args: Prisma.MouleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoulePayload>
          }
          update: {
            args: Prisma.MouleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoulePayload>
          }
          deleteMany: {
            args: Prisma.MouleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MouleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MouleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoulePayload>[]
          }
          upsert: {
            args: Prisma.MouleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoulePayload>
          }
          aggregate: {
            args: Prisma.MouleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoule>
          }
          groupBy: {
            args: Prisma.MouleGroupByArgs<ExtArgs>
            result: $Utils.Optional<MouleGroupByOutputType>[]
          }
          count: {
            args: Prisma.MouleCountArgs<ExtArgs>
            result: $Utils.Optional<MouleCountAggregateOutputType> | number
          }
        }
      }
      MesureMoule: {
        payload: Prisma.$MesureMoulePayload<ExtArgs>
        fields: Prisma.MesureMouleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MesureMouleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureMoulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MesureMouleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureMoulePayload>
          }
          findFirst: {
            args: Prisma.MesureMouleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureMoulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MesureMouleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureMoulePayload>
          }
          findMany: {
            args: Prisma.MesureMouleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureMoulePayload>[]
          }
          create: {
            args: Prisma.MesureMouleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureMoulePayload>
          }
          createMany: {
            args: Prisma.MesureMouleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MesureMouleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureMoulePayload>[]
          }
          delete: {
            args: Prisma.MesureMouleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureMoulePayload>
          }
          update: {
            args: Prisma.MesureMouleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureMoulePayload>
          }
          deleteMany: {
            args: Prisma.MesureMouleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MesureMouleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MesureMouleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureMoulePayload>[]
          }
          upsert: {
            args: Prisma.MesureMouleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MesureMoulePayload>
          }
          aggregate: {
            args: Prisma.MesureMouleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMesureMoule>
          }
          groupBy: {
            args: Prisma.MesureMouleGroupByArgs<ExtArgs>
            result: $Utils.Optional<MesureMouleGroupByOutputType>[]
          }
          count: {
            args: Prisma.MesureMouleCountArgs<ExtArgs>
            result: $Utils.Optional<MesureMouleCountAggregateOutputType> | number
          }
        }
      }
      Piece: {
        payload: Prisma.$PiecePayload<ExtArgs>
        fields: Prisma.PieceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PieceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PieceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          findFirst: {
            args: Prisma.PieceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PieceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          findMany: {
            args: Prisma.PieceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>[]
          }
          create: {
            args: Prisma.PieceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          createMany: {
            args: Prisma.PieceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PieceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>[]
          }
          delete: {
            args: Prisma.PieceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          update: {
            args: Prisma.PieceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          deleteMany: {
            args: Prisma.PieceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PieceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PieceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>[]
          }
          upsert: {
            args: Prisma.PieceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiecePayload>
          }
          aggregate: {
            args: Prisma.PieceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePiece>
          }
          groupBy: {
            args: Prisma.PieceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PieceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PieceCountArgs<ExtArgs>
            result: $Utils.Optional<PieceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    mesure?: MesureOmit
    moule?: MouleOmit
    mesureMoule?: MesureMouleOmit
    piece?: PieceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MesureCountOutputType
   */

  export type MesureCountOutputType = {
    mesuresMoules: number
  }

  export type MesureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesuresMoules?: boolean | MesureCountOutputTypeCountMesuresMoulesArgs
  }

  // Custom InputTypes
  /**
   * MesureCountOutputType without action
   */
  export type MesureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureCountOutputType
     */
    select?: MesureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MesureCountOutputType without action
   */
  export type MesureCountOutputTypeCountMesuresMoulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MesureMouleWhereInput
  }


  /**
   * Count Type MouleCountOutputType
   */

  export type MouleCountOutputType = {
    mesuresMoules: number
  }

  export type MouleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesuresMoules?: boolean | MouleCountOutputTypeCountMesuresMoulesArgs
  }

  // Custom InputTypes
  /**
   * MouleCountOutputType without action
   */
  export type MouleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouleCountOutputType
     */
    select?: MouleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MouleCountOutputType without action
   */
  export type MouleCountOutputTypeCountMesuresMoulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MesureMouleWhereInput
  }


  /**
   * Count Type MesureMouleCountOutputType
   */

  export type MesureMouleCountOutputType = {
    pieces: number
  }

  export type MesureMouleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pieces?: boolean | MesureMouleCountOutputTypeCountPiecesArgs
  }

  // Custom InputTypes
  /**
   * MesureMouleCountOutputType without action
   */
  export type MesureMouleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureMouleCountOutputType
     */
    select?: MesureMouleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MesureMouleCountOutputType without action
   */
  export type MesureMouleCountOutputTypeCountPiecesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PieceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Mesure
   */

  export type AggregateMesure = {
    _count: MesureCountAggregateOutputType | null
    _avg: MesureAvgAggregateOutputType | null
    _sum: MesureSumAggregateOutputType | null
    _min: MesureMinAggregateOutputType | null
    _max: MesureMaxAggregateOutputType | null
  }

  export type MesureAvgAggregateOutputType = {
    id: number | null
  }

  export type MesureSumAggregateOutputType = {
    id: number | null
  }

  export type MesureMinAggregateOutputType = {
    id: number | null
    reference: string | null
    dateMesure: Date | null
    taille: string | null
  }

  export type MesureMaxAggregateOutputType = {
    id: number | null
    reference: string | null
    dateMesure: Date | null
    taille: string | null
  }

  export type MesureCountAggregateOutputType = {
    id: number
    reference: number
    dateMesure: number
    taille: number
    _all: number
  }


  export type MesureAvgAggregateInputType = {
    id?: true
  }

  export type MesureSumAggregateInputType = {
    id?: true
  }

  export type MesureMinAggregateInputType = {
    id?: true
    reference?: true
    dateMesure?: true
    taille?: true
  }

  export type MesureMaxAggregateInputType = {
    id?: true
    reference?: true
    dateMesure?: true
    taille?: true
  }

  export type MesureCountAggregateInputType = {
    id?: true
    reference?: true
    dateMesure?: true
    taille?: true
    _all?: true
  }

  export type MesureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mesure to aggregate.
     */
    where?: MesureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesures to fetch.
     */
    orderBy?: MesureOrderByWithRelationInput | MesureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MesureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mesures
    **/
    _count?: true | MesureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MesureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MesureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MesureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MesureMaxAggregateInputType
  }

  export type GetMesureAggregateType<T extends MesureAggregateArgs> = {
        [P in keyof T & keyof AggregateMesure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMesure[P]>
      : GetScalarType<T[P], AggregateMesure[P]>
  }




  export type MesureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MesureWhereInput
    orderBy?: MesureOrderByWithAggregationInput | MesureOrderByWithAggregationInput[]
    by: MesureScalarFieldEnum[] | MesureScalarFieldEnum
    having?: MesureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MesureCountAggregateInputType | true
    _avg?: MesureAvgAggregateInputType
    _sum?: MesureSumAggregateInputType
    _min?: MesureMinAggregateInputType
    _max?: MesureMaxAggregateInputType
  }

  export type MesureGroupByOutputType = {
    id: number
    reference: string
    dateMesure: Date
    taille: string | null
    _count: MesureCountAggregateOutputType | null
    _avg: MesureAvgAggregateOutputType | null
    _sum: MesureSumAggregateOutputType | null
    _min: MesureMinAggregateOutputType | null
    _max: MesureMaxAggregateOutputType | null
  }

  type GetMesureGroupByPayload<T extends MesureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MesureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MesureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MesureGroupByOutputType[P]>
            : GetScalarType<T[P], MesureGroupByOutputType[P]>
        }
      >
    >


  export type MesureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    dateMesure?: boolean
    taille?: boolean
    mesuresMoules?: boolean | Mesure$mesuresMoulesArgs<ExtArgs>
    _count?: boolean | MesureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mesure"]>

  export type MesureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    dateMesure?: boolean
    taille?: boolean
  }, ExtArgs["result"]["mesure"]>

  export type MesureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    dateMesure?: boolean
    taille?: boolean
  }, ExtArgs["result"]["mesure"]>

  export type MesureSelectScalar = {
    id?: boolean
    reference?: boolean
    dateMesure?: boolean
    taille?: boolean
  }

  export type MesureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "dateMesure" | "taille", ExtArgs["result"]["mesure"]>
  export type MesureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesuresMoules?: boolean | Mesure$mesuresMoulesArgs<ExtArgs>
    _count?: boolean | MesureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MesureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MesureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MesurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mesure"
    objects: {
      mesuresMoules: Prisma.$MesureMoulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reference: string
      dateMesure: Date
      taille: string | null
    }, ExtArgs["result"]["mesure"]>
    composites: {}
  }

  type MesureGetPayload<S extends boolean | null | undefined | MesureDefaultArgs> = $Result.GetResult<Prisma.$MesurePayload, S>

  type MesureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MesureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MesureCountAggregateInputType | true
    }

  export interface MesureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mesure'], meta: { name: 'Mesure' } }
    /**
     * Find zero or one Mesure that matches the filter.
     * @param {MesureFindUniqueArgs} args - Arguments to find a Mesure
     * @example
     * // Get one Mesure
     * const mesure = await prisma.mesure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MesureFindUniqueArgs>(args: SelectSubset<T, MesureFindUniqueArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mesure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MesureFindUniqueOrThrowArgs} args - Arguments to find a Mesure
     * @example
     * // Get one Mesure
     * const mesure = await prisma.mesure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MesureFindUniqueOrThrowArgs>(args: SelectSubset<T, MesureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureFindFirstArgs} args - Arguments to find a Mesure
     * @example
     * // Get one Mesure
     * const mesure = await prisma.mesure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MesureFindFirstArgs>(args?: SelectSubset<T, MesureFindFirstArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureFindFirstOrThrowArgs} args - Arguments to find a Mesure
     * @example
     * // Get one Mesure
     * const mesure = await prisma.mesure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MesureFindFirstOrThrowArgs>(args?: SelectSubset<T, MesureFindFirstOrThrowArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mesures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mesures
     * const mesures = await prisma.mesure.findMany()
     * 
     * // Get first 10 Mesures
     * const mesures = await prisma.mesure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mesureWithIdOnly = await prisma.mesure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MesureFindManyArgs>(args?: SelectSubset<T, MesureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mesure.
     * @param {MesureCreateArgs} args - Arguments to create a Mesure.
     * @example
     * // Create one Mesure
     * const Mesure = await prisma.mesure.create({
     *   data: {
     *     // ... data to create a Mesure
     *   }
     * })
     * 
     */
    create<T extends MesureCreateArgs>(args: SelectSubset<T, MesureCreateArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mesures.
     * @param {MesureCreateManyArgs} args - Arguments to create many Mesures.
     * @example
     * // Create many Mesures
     * const mesure = await prisma.mesure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MesureCreateManyArgs>(args?: SelectSubset<T, MesureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mesures and returns the data saved in the database.
     * @param {MesureCreateManyAndReturnArgs} args - Arguments to create many Mesures.
     * @example
     * // Create many Mesures
     * const mesure = await prisma.mesure.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mesures and only return the `id`
     * const mesureWithIdOnly = await prisma.mesure.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MesureCreateManyAndReturnArgs>(args?: SelectSubset<T, MesureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mesure.
     * @param {MesureDeleteArgs} args - Arguments to delete one Mesure.
     * @example
     * // Delete one Mesure
     * const Mesure = await prisma.mesure.delete({
     *   where: {
     *     // ... filter to delete one Mesure
     *   }
     * })
     * 
     */
    delete<T extends MesureDeleteArgs>(args: SelectSubset<T, MesureDeleteArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mesure.
     * @param {MesureUpdateArgs} args - Arguments to update one Mesure.
     * @example
     * // Update one Mesure
     * const mesure = await prisma.mesure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MesureUpdateArgs>(args: SelectSubset<T, MesureUpdateArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mesures.
     * @param {MesureDeleteManyArgs} args - Arguments to filter Mesures to delete.
     * @example
     * // Delete a few Mesures
     * const { count } = await prisma.mesure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MesureDeleteManyArgs>(args?: SelectSubset<T, MesureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mesures
     * const mesure = await prisma.mesure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MesureUpdateManyArgs>(args: SelectSubset<T, MesureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesures and returns the data updated in the database.
     * @param {MesureUpdateManyAndReturnArgs} args - Arguments to update many Mesures.
     * @example
     * // Update many Mesures
     * const mesure = await prisma.mesure.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mesures and only return the `id`
     * const mesureWithIdOnly = await prisma.mesure.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MesureUpdateManyAndReturnArgs>(args: SelectSubset<T, MesureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mesure.
     * @param {MesureUpsertArgs} args - Arguments to update or create a Mesure.
     * @example
     * // Update or create a Mesure
     * const mesure = await prisma.mesure.upsert({
     *   create: {
     *     // ... data to create a Mesure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mesure we want to update
     *   }
     * })
     */
    upsert<T extends MesureUpsertArgs>(args: SelectSubset<T, MesureUpsertArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mesures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureCountArgs} args - Arguments to filter Mesures to count.
     * @example
     * // Count the number of Mesures
     * const count = await prisma.mesure.count({
     *   where: {
     *     // ... the filter for the Mesures we want to count
     *   }
     * })
    **/
    count<T extends MesureCountArgs>(
      args?: Subset<T, MesureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MesureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mesure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MesureAggregateArgs>(args: Subset<T, MesureAggregateArgs>): Prisma.PrismaPromise<GetMesureAggregateType<T>>

    /**
     * Group by Mesure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MesureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MesureGroupByArgs['orderBy'] }
        : { orderBy?: MesureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MesureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMesureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mesure model
   */
  readonly fields: MesureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mesure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MesureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mesuresMoules<T extends Mesure$mesuresMoulesArgs<ExtArgs> = {}>(args?: Subset<T, Mesure$mesuresMoulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesureMoulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mesure model
   */
  interface MesureFieldRefs {
    readonly id: FieldRef<"Mesure", 'Int'>
    readonly reference: FieldRef<"Mesure", 'String'>
    readonly dateMesure: FieldRef<"Mesure", 'DateTime'>
    readonly taille: FieldRef<"Mesure", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mesure findUnique
   */
  export type MesureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesure
     */
    omit?: MesureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureInclude<ExtArgs> | null
    /**
     * Filter, which Mesure to fetch.
     */
    where: MesureWhereUniqueInput
  }

  /**
   * Mesure findUniqueOrThrow
   */
  export type MesureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesure
     */
    omit?: MesureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureInclude<ExtArgs> | null
    /**
     * Filter, which Mesure to fetch.
     */
    where: MesureWhereUniqueInput
  }

  /**
   * Mesure findFirst
   */
  export type MesureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesure
     */
    omit?: MesureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureInclude<ExtArgs> | null
    /**
     * Filter, which Mesure to fetch.
     */
    where?: MesureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesures to fetch.
     */
    orderBy?: MesureOrderByWithRelationInput | MesureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mesures.
     */
    cursor?: MesureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesures.
     */
    distinct?: MesureScalarFieldEnum | MesureScalarFieldEnum[]
  }

  /**
   * Mesure findFirstOrThrow
   */
  export type MesureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesure
     */
    omit?: MesureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureInclude<ExtArgs> | null
    /**
     * Filter, which Mesure to fetch.
     */
    where?: MesureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesures to fetch.
     */
    orderBy?: MesureOrderByWithRelationInput | MesureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mesures.
     */
    cursor?: MesureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mesures.
     */
    distinct?: MesureScalarFieldEnum | MesureScalarFieldEnum[]
  }

  /**
   * Mesure findMany
   */
  export type MesureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesure
     */
    omit?: MesureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureInclude<ExtArgs> | null
    /**
     * Filter, which Mesures to fetch.
     */
    where?: MesureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mesures to fetch.
     */
    orderBy?: MesureOrderByWithRelationInput | MesureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mesures.
     */
    cursor?: MesureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mesures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mesures.
     */
    skip?: number
    distinct?: MesureScalarFieldEnum | MesureScalarFieldEnum[]
  }

  /**
   * Mesure create
   */
  export type MesureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesure
     */
    omit?: MesureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureInclude<ExtArgs> | null
    /**
     * The data needed to create a Mesure.
     */
    data: XOR<MesureCreateInput, MesureUncheckedCreateInput>
  }

  /**
   * Mesure createMany
   */
  export type MesureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mesures.
     */
    data: MesureCreateManyInput | MesureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mesure createManyAndReturn
   */
  export type MesureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mesure
     */
    omit?: MesureOmit<ExtArgs> | null
    /**
     * The data used to create many Mesures.
     */
    data: MesureCreateManyInput | MesureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mesure update
   */
  export type MesureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesure
     */
    omit?: MesureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureInclude<ExtArgs> | null
    /**
     * The data needed to update a Mesure.
     */
    data: XOR<MesureUpdateInput, MesureUncheckedUpdateInput>
    /**
     * Choose, which Mesure to update.
     */
    where: MesureWhereUniqueInput
  }

  /**
   * Mesure updateMany
   */
  export type MesureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mesures.
     */
    data: XOR<MesureUpdateManyMutationInput, MesureUncheckedUpdateManyInput>
    /**
     * Filter which Mesures to update
     */
    where?: MesureWhereInput
    /**
     * Limit how many Mesures to update.
     */
    limit?: number
  }

  /**
   * Mesure updateManyAndReturn
   */
  export type MesureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mesure
     */
    omit?: MesureOmit<ExtArgs> | null
    /**
     * The data used to update Mesures.
     */
    data: XOR<MesureUpdateManyMutationInput, MesureUncheckedUpdateManyInput>
    /**
     * Filter which Mesures to update
     */
    where?: MesureWhereInput
    /**
     * Limit how many Mesures to update.
     */
    limit?: number
  }

  /**
   * Mesure upsert
   */
  export type MesureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesure
     */
    omit?: MesureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureInclude<ExtArgs> | null
    /**
     * The filter to search for the Mesure to update in case it exists.
     */
    where: MesureWhereUniqueInput
    /**
     * In case the Mesure found by the `where` argument doesn't exist, create a new Mesure with this data.
     */
    create: XOR<MesureCreateInput, MesureUncheckedCreateInput>
    /**
     * In case the Mesure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MesureUpdateInput, MesureUncheckedUpdateInput>
  }

  /**
   * Mesure delete
   */
  export type MesureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesure
     */
    omit?: MesureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureInclude<ExtArgs> | null
    /**
     * Filter which Mesure to delete.
     */
    where: MesureWhereUniqueInput
  }

  /**
   * Mesure deleteMany
   */
  export type MesureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mesures to delete
     */
    where?: MesureWhereInput
    /**
     * Limit how many Mesures to delete.
     */
    limit?: number
  }

  /**
   * Mesure.mesuresMoules
   */
  export type Mesure$mesuresMoulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureMoule
     */
    select?: MesureMouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureMoule
     */
    omit?: MesureMouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureMouleInclude<ExtArgs> | null
    where?: MesureMouleWhereInput
    orderBy?: MesureMouleOrderByWithRelationInput | MesureMouleOrderByWithRelationInput[]
    cursor?: MesureMouleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MesureMouleScalarFieldEnum | MesureMouleScalarFieldEnum[]
  }

  /**
   * Mesure without action
   */
  export type MesureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mesure
     */
    select?: MesureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mesure
     */
    omit?: MesureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureInclude<ExtArgs> | null
  }


  /**
   * Model Moule
   */

  export type AggregateMoule = {
    _count: MouleCountAggregateOutputType | null
    _avg: MouleAvgAggregateOutputType | null
    _sum: MouleSumAggregateOutputType | null
    _min: MouleMinAggregateOutputType | null
    _max: MouleMaxAggregateOutputType | null
  }

  export type MouleAvgAggregateOutputType = {
    id: number | null
    nbPlateaux: number | null
  }

  export type MouleSumAggregateOutputType = {
    id: number | null
    nbPlateaux: number | null
  }

  export type MouleMinAggregateOutputType = {
    id: number | null
    reference: string | null
    nbPlateaux: number | null
  }

  export type MouleMaxAggregateOutputType = {
    id: number | null
    reference: string | null
    nbPlateaux: number | null
  }

  export type MouleCountAggregateOutputType = {
    id: number
    reference: number
    nbPlateaux: number
    _all: number
  }


  export type MouleAvgAggregateInputType = {
    id?: true
    nbPlateaux?: true
  }

  export type MouleSumAggregateInputType = {
    id?: true
    nbPlateaux?: true
  }

  export type MouleMinAggregateInputType = {
    id?: true
    reference?: true
    nbPlateaux?: true
  }

  export type MouleMaxAggregateInputType = {
    id?: true
    reference?: true
    nbPlateaux?: true
  }

  export type MouleCountAggregateInputType = {
    id?: true
    reference?: true
    nbPlateaux?: true
    _all?: true
  }

  export type MouleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moule to aggregate.
     */
    where?: MouleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moules to fetch.
     */
    orderBy?: MouleOrderByWithRelationInput | MouleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MouleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Moules
    **/
    _count?: true | MouleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MouleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MouleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MouleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MouleMaxAggregateInputType
  }

  export type GetMouleAggregateType<T extends MouleAggregateArgs> = {
        [P in keyof T & keyof AggregateMoule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoule[P]>
      : GetScalarType<T[P], AggregateMoule[P]>
  }




  export type MouleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MouleWhereInput
    orderBy?: MouleOrderByWithAggregationInput | MouleOrderByWithAggregationInput[]
    by: MouleScalarFieldEnum[] | MouleScalarFieldEnum
    having?: MouleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MouleCountAggregateInputType | true
    _avg?: MouleAvgAggregateInputType
    _sum?: MouleSumAggregateInputType
    _min?: MouleMinAggregateInputType
    _max?: MouleMaxAggregateInputType
  }

  export type MouleGroupByOutputType = {
    id: number
    reference: string
    nbPlateaux: number
    _count: MouleCountAggregateOutputType | null
    _avg: MouleAvgAggregateOutputType | null
    _sum: MouleSumAggregateOutputType | null
    _min: MouleMinAggregateOutputType | null
    _max: MouleMaxAggregateOutputType | null
  }

  type GetMouleGroupByPayload<T extends MouleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MouleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MouleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MouleGroupByOutputType[P]>
            : GetScalarType<T[P], MouleGroupByOutputType[P]>
        }
      >
    >


  export type MouleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    nbPlateaux?: boolean
    mesuresMoules?: boolean | Moule$mesuresMoulesArgs<ExtArgs>
    _count?: boolean | MouleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moule"]>

  export type MouleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    nbPlateaux?: boolean
  }, ExtArgs["result"]["moule"]>

  export type MouleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    nbPlateaux?: boolean
  }, ExtArgs["result"]["moule"]>

  export type MouleSelectScalar = {
    id?: boolean
    reference?: boolean
    nbPlateaux?: boolean
  }

  export type MouleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "nbPlateaux", ExtArgs["result"]["moule"]>
  export type MouleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesuresMoules?: boolean | Moule$mesuresMoulesArgs<ExtArgs>
    _count?: boolean | MouleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MouleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MouleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MoulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Moule"
    objects: {
      mesuresMoules: Prisma.$MesureMoulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reference: string
      nbPlateaux: number
    }, ExtArgs["result"]["moule"]>
    composites: {}
  }

  type MouleGetPayload<S extends boolean | null | undefined | MouleDefaultArgs> = $Result.GetResult<Prisma.$MoulePayload, S>

  type MouleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MouleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MouleCountAggregateInputType | true
    }

  export interface MouleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Moule'], meta: { name: 'Moule' } }
    /**
     * Find zero or one Moule that matches the filter.
     * @param {MouleFindUniqueArgs} args - Arguments to find a Moule
     * @example
     * // Get one Moule
     * const moule = await prisma.moule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MouleFindUniqueArgs>(args: SelectSubset<T, MouleFindUniqueArgs<ExtArgs>>): Prisma__MouleClient<$Result.GetResult<Prisma.$MoulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Moule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MouleFindUniqueOrThrowArgs} args - Arguments to find a Moule
     * @example
     * // Get one Moule
     * const moule = await prisma.moule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MouleFindUniqueOrThrowArgs>(args: SelectSubset<T, MouleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MouleClient<$Result.GetResult<Prisma.$MoulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Moule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouleFindFirstArgs} args - Arguments to find a Moule
     * @example
     * // Get one Moule
     * const moule = await prisma.moule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MouleFindFirstArgs>(args?: SelectSubset<T, MouleFindFirstArgs<ExtArgs>>): Prisma__MouleClient<$Result.GetResult<Prisma.$MoulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Moule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouleFindFirstOrThrowArgs} args - Arguments to find a Moule
     * @example
     * // Get one Moule
     * const moule = await prisma.moule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MouleFindFirstOrThrowArgs>(args?: SelectSubset<T, MouleFindFirstOrThrowArgs<ExtArgs>>): Prisma__MouleClient<$Result.GetResult<Prisma.$MoulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Moules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moules
     * const moules = await prisma.moule.findMany()
     * 
     * // Get first 10 Moules
     * const moules = await prisma.moule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mouleWithIdOnly = await prisma.moule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MouleFindManyArgs>(args?: SelectSubset<T, MouleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Moule.
     * @param {MouleCreateArgs} args - Arguments to create a Moule.
     * @example
     * // Create one Moule
     * const Moule = await prisma.moule.create({
     *   data: {
     *     // ... data to create a Moule
     *   }
     * })
     * 
     */
    create<T extends MouleCreateArgs>(args: SelectSubset<T, MouleCreateArgs<ExtArgs>>): Prisma__MouleClient<$Result.GetResult<Prisma.$MoulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Moules.
     * @param {MouleCreateManyArgs} args - Arguments to create many Moules.
     * @example
     * // Create many Moules
     * const moule = await prisma.moule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MouleCreateManyArgs>(args?: SelectSubset<T, MouleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Moules and returns the data saved in the database.
     * @param {MouleCreateManyAndReturnArgs} args - Arguments to create many Moules.
     * @example
     * // Create many Moules
     * const moule = await prisma.moule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Moules and only return the `id`
     * const mouleWithIdOnly = await prisma.moule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MouleCreateManyAndReturnArgs>(args?: SelectSubset<T, MouleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Moule.
     * @param {MouleDeleteArgs} args - Arguments to delete one Moule.
     * @example
     * // Delete one Moule
     * const Moule = await prisma.moule.delete({
     *   where: {
     *     // ... filter to delete one Moule
     *   }
     * })
     * 
     */
    delete<T extends MouleDeleteArgs>(args: SelectSubset<T, MouleDeleteArgs<ExtArgs>>): Prisma__MouleClient<$Result.GetResult<Prisma.$MoulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Moule.
     * @param {MouleUpdateArgs} args - Arguments to update one Moule.
     * @example
     * // Update one Moule
     * const moule = await prisma.moule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MouleUpdateArgs>(args: SelectSubset<T, MouleUpdateArgs<ExtArgs>>): Prisma__MouleClient<$Result.GetResult<Prisma.$MoulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Moules.
     * @param {MouleDeleteManyArgs} args - Arguments to filter Moules to delete.
     * @example
     * // Delete a few Moules
     * const { count } = await prisma.moule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MouleDeleteManyArgs>(args?: SelectSubset<T, MouleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moules
     * const moule = await prisma.moule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MouleUpdateManyArgs>(args: SelectSubset<T, MouleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moules and returns the data updated in the database.
     * @param {MouleUpdateManyAndReturnArgs} args - Arguments to update many Moules.
     * @example
     * // Update many Moules
     * const moule = await prisma.moule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Moules and only return the `id`
     * const mouleWithIdOnly = await prisma.moule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MouleUpdateManyAndReturnArgs>(args: SelectSubset<T, MouleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Moule.
     * @param {MouleUpsertArgs} args - Arguments to update or create a Moule.
     * @example
     * // Update or create a Moule
     * const moule = await prisma.moule.upsert({
     *   create: {
     *     // ... data to create a Moule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Moule we want to update
     *   }
     * })
     */
    upsert<T extends MouleUpsertArgs>(args: SelectSubset<T, MouleUpsertArgs<ExtArgs>>): Prisma__MouleClient<$Result.GetResult<Prisma.$MoulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Moules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouleCountArgs} args - Arguments to filter Moules to count.
     * @example
     * // Count the number of Moules
     * const count = await prisma.moule.count({
     *   where: {
     *     // ... the filter for the Moules we want to count
     *   }
     * })
    **/
    count<T extends MouleCountArgs>(
      args?: Subset<T, MouleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MouleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Moule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MouleAggregateArgs>(args: Subset<T, MouleAggregateArgs>): Prisma.PrismaPromise<GetMouleAggregateType<T>>

    /**
     * Group by Moule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MouleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MouleGroupByArgs['orderBy'] }
        : { orderBy?: MouleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MouleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMouleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Moule model
   */
  readonly fields: MouleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Moule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MouleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mesuresMoules<T extends Moule$mesuresMoulesArgs<ExtArgs> = {}>(args?: Subset<T, Moule$mesuresMoulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesureMoulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Moule model
   */
  interface MouleFieldRefs {
    readonly id: FieldRef<"Moule", 'Int'>
    readonly reference: FieldRef<"Moule", 'String'>
    readonly nbPlateaux: FieldRef<"Moule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Moule findUnique
   */
  export type MouleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moule
     */
    select?: MouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moule
     */
    omit?: MouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouleInclude<ExtArgs> | null
    /**
     * Filter, which Moule to fetch.
     */
    where: MouleWhereUniqueInput
  }

  /**
   * Moule findUniqueOrThrow
   */
  export type MouleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moule
     */
    select?: MouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moule
     */
    omit?: MouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouleInclude<ExtArgs> | null
    /**
     * Filter, which Moule to fetch.
     */
    where: MouleWhereUniqueInput
  }

  /**
   * Moule findFirst
   */
  export type MouleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moule
     */
    select?: MouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moule
     */
    omit?: MouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouleInclude<ExtArgs> | null
    /**
     * Filter, which Moule to fetch.
     */
    where?: MouleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moules to fetch.
     */
    orderBy?: MouleOrderByWithRelationInput | MouleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moules.
     */
    cursor?: MouleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moules.
     */
    distinct?: MouleScalarFieldEnum | MouleScalarFieldEnum[]
  }

  /**
   * Moule findFirstOrThrow
   */
  export type MouleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moule
     */
    select?: MouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moule
     */
    omit?: MouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouleInclude<ExtArgs> | null
    /**
     * Filter, which Moule to fetch.
     */
    where?: MouleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moules to fetch.
     */
    orderBy?: MouleOrderByWithRelationInput | MouleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moules.
     */
    cursor?: MouleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moules.
     */
    distinct?: MouleScalarFieldEnum | MouleScalarFieldEnum[]
  }

  /**
   * Moule findMany
   */
  export type MouleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moule
     */
    select?: MouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moule
     */
    omit?: MouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouleInclude<ExtArgs> | null
    /**
     * Filter, which Moules to fetch.
     */
    where?: MouleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moules to fetch.
     */
    orderBy?: MouleOrderByWithRelationInput | MouleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Moules.
     */
    cursor?: MouleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moules.
     */
    skip?: number
    distinct?: MouleScalarFieldEnum | MouleScalarFieldEnum[]
  }

  /**
   * Moule create
   */
  export type MouleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moule
     */
    select?: MouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moule
     */
    omit?: MouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouleInclude<ExtArgs> | null
    /**
     * The data needed to create a Moule.
     */
    data: XOR<MouleCreateInput, MouleUncheckedCreateInput>
  }

  /**
   * Moule createMany
   */
  export type MouleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moules.
     */
    data: MouleCreateManyInput | MouleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Moule createManyAndReturn
   */
  export type MouleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moule
     */
    select?: MouleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Moule
     */
    omit?: MouleOmit<ExtArgs> | null
    /**
     * The data used to create many Moules.
     */
    data: MouleCreateManyInput | MouleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Moule update
   */
  export type MouleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moule
     */
    select?: MouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moule
     */
    omit?: MouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouleInclude<ExtArgs> | null
    /**
     * The data needed to update a Moule.
     */
    data: XOR<MouleUpdateInput, MouleUncheckedUpdateInput>
    /**
     * Choose, which Moule to update.
     */
    where: MouleWhereUniqueInput
  }

  /**
   * Moule updateMany
   */
  export type MouleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Moules.
     */
    data: XOR<MouleUpdateManyMutationInput, MouleUncheckedUpdateManyInput>
    /**
     * Filter which Moules to update
     */
    where?: MouleWhereInput
    /**
     * Limit how many Moules to update.
     */
    limit?: number
  }

  /**
   * Moule updateManyAndReturn
   */
  export type MouleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moule
     */
    select?: MouleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Moule
     */
    omit?: MouleOmit<ExtArgs> | null
    /**
     * The data used to update Moules.
     */
    data: XOR<MouleUpdateManyMutationInput, MouleUncheckedUpdateManyInput>
    /**
     * Filter which Moules to update
     */
    where?: MouleWhereInput
    /**
     * Limit how many Moules to update.
     */
    limit?: number
  }

  /**
   * Moule upsert
   */
  export type MouleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moule
     */
    select?: MouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moule
     */
    omit?: MouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouleInclude<ExtArgs> | null
    /**
     * The filter to search for the Moule to update in case it exists.
     */
    where: MouleWhereUniqueInput
    /**
     * In case the Moule found by the `where` argument doesn't exist, create a new Moule with this data.
     */
    create: XOR<MouleCreateInput, MouleUncheckedCreateInput>
    /**
     * In case the Moule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MouleUpdateInput, MouleUncheckedUpdateInput>
  }

  /**
   * Moule delete
   */
  export type MouleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moule
     */
    select?: MouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moule
     */
    omit?: MouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouleInclude<ExtArgs> | null
    /**
     * Filter which Moule to delete.
     */
    where: MouleWhereUniqueInput
  }

  /**
   * Moule deleteMany
   */
  export type MouleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moules to delete
     */
    where?: MouleWhereInput
    /**
     * Limit how many Moules to delete.
     */
    limit?: number
  }

  /**
   * Moule.mesuresMoules
   */
  export type Moule$mesuresMoulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureMoule
     */
    select?: MesureMouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureMoule
     */
    omit?: MesureMouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureMouleInclude<ExtArgs> | null
    where?: MesureMouleWhereInput
    orderBy?: MesureMouleOrderByWithRelationInput | MesureMouleOrderByWithRelationInput[]
    cursor?: MesureMouleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MesureMouleScalarFieldEnum | MesureMouleScalarFieldEnum[]
  }

  /**
   * Moule without action
   */
  export type MouleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moule
     */
    select?: MouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Moule
     */
    omit?: MouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouleInclude<ExtArgs> | null
  }


  /**
   * Model MesureMoule
   */

  export type AggregateMesureMoule = {
    _count: MesureMouleCountAggregateOutputType | null
    _avg: MesureMouleAvgAggregateOutputType | null
    _sum: MesureMouleSumAggregateOutputType | null
    _min: MesureMouleMinAggregateOutputType | null
    _max: MesureMouleMaxAggregateOutputType | null
  }

  export type MesureMouleAvgAggregateOutputType = {
    id: number | null
    quota: number | null
    margeInf: number | null
    margeSup: number | null
    mesureId: number | null
    mouleId: number | null
  }

  export type MesureMouleSumAggregateOutputType = {
    id: number | null
    quota: number | null
    margeInf: number | null
    margeSup: number | null
    mesureId: number | null
    mouleId: number | null
  }

  export type MesureMouleMinAggregateOutputType = {
    id: number | null
    quota: number | null
    margeInf: number | null
    margeSup: number | null
    unite: string | null
    mesureId: number | null
    mouleId: number | null
  }

  export type MesureMouleMaxAggregateOutputType = {
    id: number | null
    quota: number | null
    margeInf: number | null
    margeSup: number | null
    unite: string | null
    mesureId: number | null
    mouleId: number | null
  }

  export type MesureMouleCountAggregateOutputType = {
    id: number
    quota: number
    margeInf: number
    margeSup: number
    unite: number
    mesureId: number
    mouleId: number
    _all: number
  }


  export type MesureMouleAvgAggregateInputType = {
    id?: true
    quota?: true
    margeInf?: true
    margeSup?: true
    mesureId?: true
    mouleId?: true
  }

  export type MesureMouleSumAggregateInputType = {
    id?: true
    quota?: true
    margeInf?: true
    margeSup?: true
    mesureId?: true
    mouleId?: true
  }

  export type MesureMouleMinAggregateInputType = {
    id?: true
    quota?: true
    margeInf?: true
    margeSup?: true
    unite?: true
    mesureId?: true
    mouleId?: true
  }

  export type MesureMouleMaxAggregateInputType = {
    id?: true
    quota?: true
    margeInf?: true
    margeSup?: true
    unite?: true
    mesureId?: true
    mouleId?: true
  }

  export type MesureMouleCountAggregateInputType = {
    id?: true
    quota?: true
    margeInf?: true
    margeSup?: true
    unite?: true
    mesureId?: true
    mouleId?: true
    _all?: true
  }

  export type MesureMouleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MesureMoule to aggregate.
     */
    where?: MesureMouleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MesureMoules to fetch.
     */
    orderBy?: MesureMouleOrderByWithRelationInput | MesureMouleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MesureMouleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MesureMoules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MesureMoules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MesureMoules
    **/
    _count?: true | MesureMouleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MesureMouleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MesureMouleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MesureMouleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MesureMouleMaxAggregateInputType
  }

  export type GetMesureMouleAggregateType<T extends MesureMouleAggregateArgs> = {
        [P in keyof T & keyof AggregateMesureMoule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMesureMoule[P]>
      : GetScalarType<T[P], AggregateMesureMoule[P]>
  }




  export type MesureMouleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MesureMouleWhereInput
    orderBy?: MesureMouleOrderByWithAggregationInput | MesureMouleOrderByWithAggregationInput[]
    by: MesureMouleScalarFieldEnum[] | MesureMouleScalarFieldEnum
    having?: MesureMouleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MesureMouleCountAggregateInputType | true
    _avg?: MesureMouleAvgAggregateInputType
    _sum?: MesureMouleSumAggregateInputType
    _min?: MesureMouleMinAggregateInputType
    _max?: MesureMouleMaxAggregateInputType
  }

  export type MesureMouleGroupByOutputType = {
    id: number
    quota: number
    margeInf: number
    margeSup: number
    unite: string
    mesureId: number
    mouleId: number
    _count: MesureMouleCountAggregateOutputType | null
    _avg: MesureMouleAvgAggregateOutputType | null
    _sum: MesureMouleSumAggregateOutputType | null
    _min: MesureMouleMinAggregateOutputType | null
    _max: MesureMouleMaxAggregateOutputType | null
  }

  type GetMesureMouleGroupByPayload<T extends MesureMouleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MesureMouleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MesureMouleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MesureMouleGroupByOutputType[P]>
            : GetScalarType<T[P], MesureMouleGroupByOutputType[P]>
        }
      >
    >


  export type MesureMouleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quota?: boolean
    margeInf?: boolean
    margeSup?: boolean
    unite?: boolean
    mesureId?: boolean
    mouleId?: boolean
    mesure?: boolean | MesureDefaultArgs<ExtArgs>
    moule?: boolean | MouleDefaultArgs<ExtArgs>
    pieces?: boolean | MesureMoule$piecesArgs<ExtArgs>
    _count?: boolean | MesureMouleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mesureMoule"]>

  export type MesureMouleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quota?: boolean
    margeInf?: boolean
    margeSup?: boolean
    unite?: boolean
    mesureId?: boolean
    mouleId?: boolean
    mesure?: boolean | MesureDefaultArgs<ExtArgs>
    moule?: boolean | MouleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mesureMoule"]>

  export type MesureMouleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quota?: boolean
    margeInf?: boolean
    margeSup?: boolean
    unite?: boolean
    mesureId?: boolean
    mouleId?: boolean
    mesure?: boolean | MesureDefaultArgs<ExtArgs>
    moule?: boolean | MouleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mesureMoule"]>

  export type MesureMouleSelectScalar = {
    id?: boolean
    quota?: boolean
    margeInf?: boolean
    margeSup?: boolean
    unite?: boolean
    mesureId?: boolean
    mouleId?: boolean
  }

  export type MesureMouleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quota" | "margeInf" | "margeSup" | "unite" | "mesureId" | "mouleId", ExtArgs["result"]["mesureMoule"]>
  export type MesureMouleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesure?: boolean | MesureDefaultArgs<ExtArgs>
    moule?: boolean | MouleDefaultArgs<ExtArgs>
    pieces?: boolean | MesureMoule$piecesArgs<ExtArgs>
    _count?: boolean | MesureMouleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MesureMouleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesure?: boolean | MesureDefaultArgs<ExtArgs>
    moule?: boolean | MouleDefaultArgs<ExtArgs>
  }
  export type MesureMouleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesure?: boolean | MesureDefaultArgs<ExtArgs>
    moule?: boolean | MouleDefaultArgs<ExtArgs>
  }

  export type $MesureMoulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MesureMoule"
    objects: {
      mesure: Prisma.$MesurePayload<ExtArgs>
      moule: Prisma.$MoulePayload<ExtArgs>
      pieces: Prisma.$PiecePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quota: number
      margeInf: number
      margeSup: number
      unite: string
      mesureId: number
      mouleId: number
    }, ExtArgs["result"]["mesureMoule"]>
    composites: {}
  }

  type MesureMouleGetPayload<S extends boolean | null | undefined | MesureMouleDefaultArgs> = $Result.GetResult<Prisma.$MesureMoulePayload, S>

  type MesureMouleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MesureMouleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MesureMouleCountAggregateInputType | true
    }

  export interface MesureMouleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MesureMoule'], meta: { name: 'MesureMoule' } }
    /**
     * Find zero or one MesureMoule that matches the filter.
     * @param {MesureMouleFindUniqueArgs} args - Arguments to find a MesureMoule
     * @example
     * // Get one MesureMoule
     * const mesureMoule = await prisma.mesureMoule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MesureMouleFindUniqueArgs>(args: SelectSubset<T, MesureMouleFindUniqueArgs<ExtArgs>>): Prisma__MesureMouleClient<$Result.GetResult<Prisma.$MesureMoulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MesureMoule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MesureMouleFindUniqueOrThrowArgs} args - Arguments to find a MesureMoule
     * @example
     * // Get one MesureMoule
     * const mesureMoule = await prisma.mesureMoule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MesureMouleFindUniqueOrThrowArgs>(args: SelectSubset<T, MesureMouleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MesureMouleClient<$Result.GetResult<Prisma.$MesureMoulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MesureMoule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureMouleFindFirstArgs} args - Arguments to find a MesureMoule
     * @example
     * // Get one MesureMoule
     * const mesureMoule = await prisma.mesureMoule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MesureMouleFindFirstArgs>(args?: SelectSubset<T, MesureMouleFindFirstArgs<ExtArgs>>): Prisma__MesureMouleClient<$Result.GetResult<Prisma.$MesureMoulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MesureMoule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureMouleFindFirstOrThrowArgs} args - Arguments to find a MesureMoule
     * @example
     * // Get one MesureMoule
     * const mesureMoule = await prisma.mesureMoule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MesureMouleFindFirstOrThrowArgs>(args?: SelectSubset<T, MesureMouleFindFirstOrThrowArgs<ExtArgs>>): Prisma__MesureMouleClient<$Result.GetResult<Prisma.$MesureMoulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MesureMoules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureMouleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MesureMoules
     * const mesureMoules = await prisma.mesureMoule.findMany()
     * 
     * // Get first 10 MesureMoules
     * const mesureMoules = await prisma.mesureMoule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mesureMouleWithIdOnly = await prisma.mesureMoule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MesureMouleFindManyArgs>(args?: SelectSubset<T, MesureMouleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesureMoulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MesureMoule.
     * @param {MesureMouleCreateArgs} args - Arguments to create a MesureMoule.
     * @example
     * // Create one MesureMoule
     * const MesureMoule = await prisma.mesureMoule.create({
     *   data: {
     *     // ... data to create a MesureMoule
     *   }
     * })
     * 
     */
    create<T extends MesureMouleCreateArgs>(args: SelectSubset<T, MesureMouleCreateArgs<ExtArgs>>): Prisma__MesureMouleClient<$Result.GetResult<Prisma.$MesureMoulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MesureMoules.
     * @param {MesureMouleCreateManyArgs} args - Arguments to create many MesureMoules.
     * @example
     * // Create many MesureMoules
     * const mesureMoule = await prisma.mesureMoule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MesureMouleCreateManyArgs>(args?: SelectSubset<T, MesureMouleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MesureMoules and returns the data saved in the database.
     * @param {MesureMouleCreateManyAndReturnArgs} args - Arguments to create many MesureMoules.
     * @example
     * // Create many MesureMoules
     * const mesureMoule = await prisma.mesureMoule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MesureMoules and only return the `id`
     * const mesureMouleWithIdOnly = await prisma.mesureMoule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MesureMouleCreateManyAndReturnArgs>(args?: SelectSubset<T, MesureMouleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesureMoulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MesureMoule.
     * @param {MesureMouleDeleteArgs} args - Arguments to delete one MesureMoule.
     * @example
     * // Delete one MesureMoule
     * const MesureMoule = await prisma.mesureMoule.delete({
     *   where: {
     *     // ... filter to delete one MesureMoule
     *   }
     * })
     * 
     */
    delete<T extends MesureMouleDeleteArgs>(args: SelectSubset<T, MesureMouleDeleteArgs<ExtArgs>>): Prisma__MesureMouleClient<$Result.GetResult<Prisma.$MesureMoulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MesureMoule.
     * @param {MesureMouleUpdateArgs} args - Arguments to update one MesureMoule.
     * @example
     * // Update one MesureMoule
     * const mesureMoule = await prisma.mesureMoule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MesureMouleUpdateArgs>(args: SelectSubset<T, MesureMouleUpdateArgs<ExtArgs>>): Prisma__MesureMouleClient<$Result.GetResult<Prisma.$MesureMoulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MesureMoules.
     * @param {MesureMouleDeleteManyArgs} args - Arguments to filter MesureMoules to delete.
     * @example
     * // Delete a few MesureMoules
     * const { count } = await prisma.mesureMoule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MesureMouleDeleteManyArgs>(args?: SelectSubset<T, MesureMouleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MesureMoules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureMouleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MesureMoules
     * const mesureMoule = await prisma.mesureMoule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MesureMouleUpdateManyArgs>(args: SelectSubset<T, MesureMouleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MesureMoules and returns the data updated in the database.
     * @param {MesureMouleUpdateManyAndReturnArgs} args - Arguments to update many MesureMoules.
     * @example
     * // Update many MesureMoules
     * const mesureMoule = await prisma.mesureMoule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MesureMoules and only return the `id`
     * const mesureMouleWithIdOnly = await prisma.mesureMoule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MesureMouleUpdateManyAndReturnArgs>(args: SelectSubset<T, MesureMouleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MesureMoulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MesureMoule.
     * @param {MesureMouleUpsertArgs} args - Arguments to update or create a MesureMoule.
     * @example
     * // Update or create a MesureMoule
     * const mesureMoule = await prisma.mesureMoule.upsert({
     *   create: {
     *     // ... data to create a MesureMoule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MesureMoule we want to update
     *   }
     * })
     */
    upsert<T extends MesureMouleUpsertArgs>(args: SelectSubset<T, MesureMouleUpsertArgs<ExtArgs>>): Prisma__MesureMouleClient<$Result.GetResult<Prisma.$MesureMoulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MesureMoules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureMouleCountArgs} args - Arguments to filter MesureMoules to count.
     * @example
     * // Count the number of MesureMoules
     * const count = await prisma.mesureMoule.count({
     *   where: {
     *     // ... the filter for the MesureMoules we want to count
     *   }
     * })
    **/
    count<T extends MesureMouleCountArgs>(
      args?: Subset<T, MesureMouleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MesureMouleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MesureMoule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureMouleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MesureMouleAggregateArgs>(args: Subset<T, MesureMouleAggregateArgs>): Prisma.PrismaPromise<GetMesureMouleAggregateType<T>>

    /**
     * Group by MesureMoule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesureMouleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MesureMouleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MesureMouleGroupByArgs['orderBy'] }
        : { orderBy?: MesureMouleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MesureMouleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMesureMouleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MesureMoule model
   */
  readonly fields: MesureMouleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MesureMoule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MesureMouleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mesure<T extends MesureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MesureDefaultArgs<ExtArgs>>): Prisma__MesureClient<$Result.GetResult<Prisma.$MesurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    moule<T extends MouleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MouleDefaultArgs<ExtArgs>>): Prisma__MouleClient<$Result.GetResult<Prisma.$MoulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pieces<T extends MesureMoule$piecesArgs<ExtArgs> = {}>(args?: Subset<T, MesureMoule$piecesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MesureMoule model
   */
  interface MesureMouleFieldRefs {
    readonly id: FieldRef<"MesureMoule", 'Int'>
    readonly quota: FieldRef<"MesureMoule", 'Float'>
    readonly margeInf: FieldRef<"MesureMoule", 'Float'>
    readonly margeSup: FieldRef<"MesureMoule", 'Float'>
    readonly unite: FieldRef<"MesureMoule", 'String'>
    readonly mesureId: FieldRef<"MesureMoule", 'Int'>
    readonly mouleId: FieldRef<"MesureMoule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MesureMoule findUnique
   */
  export type MesureMouleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureMoule
     */
    select?: MesureMouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureMoule
     */
    omit?: MesureMouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureMouleInclude<ExtArgs> | null
    /**
     * Filter, which MesureMoule to fetch.
     */
    where: MesureMouleWhereUniqueInput
  }

  /**
   * MesureMoule findUniqueOrThrow
   */
  export type MesureMouleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureMoule
     */
    select?: MesureMouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureMoule
     */
    omit?: MesureMouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureMouleInclude<ExtArgs> | null
    /**
     * Filter, which MesureMoule to fetch.
     */
    where: MesureMouleWhereUniqueInput
  }

  /**
   * MesureMoule findFirst
   */
  export type MesureMouleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureMoule
     */
    select?: MesureMouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureMoule
     */
    omit?: MesureMouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureMouleInclude<ExtArgs> | null
    /**
     * Filter, which MesureMoule to fetch.
     */
    where?: MesureMouleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MesureMoules to fetch.
     */
    orderBy?: MesureMouleOrderByWithRelationInput | MesureMouleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MesureMoules.
     */
    cursor?: MesureMouleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MesureMoules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MesureMoules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MesureMoules.
     */
    distinct?: MesureMouleScalarFieldEnum | MesureMouleScalarFieldEnum[]
  }

  /**
   * MesureMoule findFirstOrThrow
   */
  export type MesureMouleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureMoule
     */
    select?: MesureMouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureMoule
     */
    omit?: MesureMouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureMouleInclude<ExtArgs> | null
    /**
     * Filter, which MesureMoule to fetch.
     */
    where?: MesureMouleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MesureMoules to fetch.
     */
    orderBy?: MesureMouleOrderByWithRelationInput | MesureMouleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MesureMoules.
     */
    cursor?: MesureMouleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MesureMoules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MesureMoules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MesureMoules.
     */
    distinct?: MesureMouleScalarFieldEnum | MesureMouleScalarFieldEnum[]
  }

  /**
   * MesureMoule findMany
   */
  export type MesureMouleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureMoule
     */
    select?: MesureMouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureMoule
     */
    omit?: MesureMouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureMouleInclude<ExtArgs> | null
    /**
     * Filter, which MesureMoules to fetch.
     */
    where?: MesureMouleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MesureMoules to fetch.
     */
    orderBy?: MesureMouleOrderByWithRelationInput | MesureMouleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MesureMoules.
     */
    cursor?: MesureMouleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MesureMoules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MesureMoules.
     */
    skip?: number
    distinct?: MesureMouleScalarFieldEnum | MesureMouleScalarFieldEnum[]
  }

  /**
   * MesureMoule create
   */
  export type MesureMouleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureMoule
     */
    select?: MesureMouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureMoule
     */
    omit?: MesureMouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureMouleInclude<ExtArgs> | null
    /**
     * The data needed to create a MesureMoule.
     */
    data: XOR<MesureMouleCreateInput, MesureMouleUncheckedCreateInput>
  }

  /**
   * MesureMoule createMany
   */
  export type MesureMouleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MesureMoules.
     */
    data: MesureMouleCreateManyInput | MesureMouleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MesureMoule createManyAndReturn
   */
  export type MesureMouleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureMoule
     */
    select?: MesureMouleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MesureMoule
     */
    omit?: MesureMouleOmit<ExtArgs> | null
    /**
     * The data used to create many MesureMoules.
     */
    data: MesureMouleCreateManyInput | MesureMouleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureMouleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MesureMoule update
   */
  export type MesureMouleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureMoule
     */
    select?: MesureMouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureMoule
     */
    omit?: MesureMouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureMouleInclude<ExtArgs> | null
    /**
     * The data needed to update a MesureMoule.
     */
    data: XOR<MesureMouleUpdateInput, MesureMouleUncheckedUpdateInput>
    /**
     * Choose, which MesureMoule to update.
     */
    where: MesureMouleWhereUniqueInput
  }

  /**
   * MesureMoule updateMany
   */
  export type MesureMouleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MesureMoules.
     */
    data: XOR<MesureMouleUpdateManyMutationInput, MesureMouleUncheckedUpdateManyInput>
    /**
     * Filter which MesureMoules to update
     */
    where?: MesureMouleWhereInput
    /**
     * Limit how many MesureMoules to update.
     */
    limit?: number
  }

  /**
   * MesureMoule updateManyAndReturn
   */
  export type MesureMouleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureMoule
     */
    select?: MesureMouleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MesureMoule
     */
    omit?: MesureMouleOmit<ExtArgs> | null
    /**
     * The data used to update MesureMoules.
     */
    data: XOR<MesureMouleUpdateManyMutationInput, MesureMouleUncheckedUpdateManyInput>
    /**
     * Filter which MesureMoules to update
     */
    where?: MesureMouleWhereInput
    /**
     * Limit how many MesureMoules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureMouleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MesureMoule upsert
   */
  export type MesureMouleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureMoule
     */
    select?: MesureMouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureMoule
     */
    omit?: MesureMouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureMouleInclude<ExtArgs> | null
    /**
     * The filter to search for the MesureMoule to update in case it exists.
     */
    where: MesureMouleWhereUniqueInput
    /**
     * In case the MesureMoule found by the `where` argument doesn't exist, create a new MesureMoule with this data.
     */
    create: XOR<MesureMouleCreateInput, MesureMouleUncheckedCreateInput>
    /**
     * In case the MesureMoule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MesureMouleUpdateInput, MesureMouleUncheckedUpdateInput>
  }

  /**
   * MesureMoule delete
   */
  export type MesureMouleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureMoule
     */
    select?: MesureMouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureMoule
     */
    omit?: MesureMouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureMouleInclude<ExtArgs> | null
    /**
     * Filter which MesureMoule to delete.
     */
    where: MesureMouleWhereUniqueInput
  }

  /**
   * MesureMoule deleteMany
   */
  export type MesureMouleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MesureMoules to delete
     */
    where?: MesureMouleWhereInput
    /**
     * Limit how many MesureMoules to delete.
     */
    limit?: number
  }

  /**
   * MesureMoule.pieces
   */
  export type MesureMoule$piecesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    where?: PieceWhereInput
    orderBy?: PieceOrderByWithRelationInput | PieceOrderByWithRelationInput[]
    cursor?: PieceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PieceScalarFieldEnum | PieceScalarFieldEnum[]
  }

  /**
   * MesureMoule without action
   */
  export type MesureMouleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesureMoule
     */
    select?: MesureMouleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MesureMoule
     */
    omit?: MesureMouleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MesureMouleInclude<ExtArgs> | null
  }


  /**
   * Model Piece
   */

  export type AggregatePiece = {
    _count: PieceCountAggregateOutputType | null
    _avg: PieceAvgAggregateOutputType | null
    _sum: PieceSumAggregateOutputType | null
    _min: PieceMinAggregateOutputType | null
    _max: PieceMaxAggregateOutputType | null
  }

  export type PieceAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    valeurPlateau1: number | null
    valeurPlateau2: number | null
    mesureMouleId: number | null
  }

  export type PieceSumAggregateOutputType = {
    id: number | null
    numero: number | null
    valeurPlateau1: number | null
    valeurPlateau2: number | null
    mesureMouleId: number | null
  }

  export type PieceMinAggregateOutputType = {
    id: number | null
    numero: number | null
    valeurPlateau1: number | null
    valeurPlateau2: number | null
    mesureMouleId: number | null
  }

  export type PieceMaxAggregateOutputType = {
    id: number | null
    numero: number | null
    valeurPlateau1: number | null
    valeurPlateau2: number | null
    mesureMouleId: number | null
  }

  export type PieceCountAggregateOutputType = {
    id: number
    numero: number
    valeurPlateau1: number
    valeurPlateau2: number
    mesureMouleId: number
    _all: number
  }


  export type PieceAvgAggregateInputType = {
    id?: true
    numero?: true
    valeurPlateau1?: true
    valeurPlateau2?: true
    mesureMouleId?: true
  }

  export type PieceSumAggregateInputType = {
    id?: true
    numero?: true
    valeurPlateau1?: true
    valeurPlateau2?: true
    mesureMouleId?: true
  }

  export type PieceMinAggregateInputType = {
    id?: true
    numero?: true
    valeurPlateau1?: true
    valeurPlateau2?: true
    mesureMouleId?: true
  }

  export type PieceMaxAggregateInputType = {
    id?: true
    numero?: true
    valeurPlateau1?: true
    valeurPlateau2?: true
    mesureMouleId?: true
  }

  export type PieceCountAggregateInputType = {
    id?: true
    numero?: true
    valeurPlateau1?: true
    valeurPlateau2?: true
    mesureMouleId?: true
    _all?: true
  }

  export type PieceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Piece to aggregate.
     */
    where?: PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pieces to fetch.
     */
    orderBy?: PieceOrderByWithRelationInput | PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pieces
    **/
    _count?: true | PieceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PieceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PieceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PieceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PieceMaxAggregateInputType
  }

  export type GetPieceAggregateType<T extends PieceAggregateArgs> = {
        [P in keyof T & keyof AggregatePiece]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePiece[P]>
      : GetScalarType<T[P], AggregatePiece[P]>
  }




  export type PieceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PieceWhereInput
    orderBy?: PieceOrderByWithAggregationInput | PieceOrderByWithAggregationInput[]
    by: PieceScalarFieldEnum[] | PieceScalarFieldEnum
    having?: PieceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PieceCountAggregateInputType | true
    _avg?: PieceAvgAggregateInputType
    _sum?: PieceSumAggregateInputType
    _min?: PieceMinAggregateInputType
    _max?: PieceMaxAggregateInputType
  }

  export type PieceGroupByOutputType = {
    id: number
    numero: number
    valeurPlateau1: number
    valeurPlateau2: number | null
    mesureMouleId: number
    _count: PieceCountAggregateOutputType | null
    _avg: PieceAvgAggregateOutputType | null
    _sum: PieceSumAggregateOutputType | null
    _min: PieceMinAggregateOutputType | null
    _max: PieceMaxAggregateOutputType | null
  }

  type GetPieceGroupByPayload<T extends PieceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PieceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PieceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PieceGroupByOutputType[P]>
            : GetScalarType<T[P], PieceGroupByOutputType[P]>
        }
      >
    >


  export type PieceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    valeurPlateau1?: boolean
    valeurPlateau2?: boolean
    mesureMouleId?: boolean
    mesureMoule?: boolean | MesureMouleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piece"]>

  export type PieceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    valeurPlateau1?: boolean
    valeurPlateau2?: boolean
    mesureMouleId?: boolean
    mesureMoule?: boolean | MesureMouleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piece"]>

  export type PieceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    valeurPlateau1?: boolean
    valeurPlateau2?: boolean
    mesureMouleId?: boolean
    mesureMoule?: boolean | MesureMouleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piece"]>

  export type PieceSelectScalar = {
    id?: boolean
    numero?: boolean
    valeurPlateau1?: boolean
    valeurPlateau2?: boolean
    mesureMouleId?: boolean
  }

  export type PieceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "valeurPlateau1" | "valeurPlateau2" | "mesureMouleId", ExtArgs["result"]["piece"]>
  export type PieceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesureMoule?: boolean | MesureMouleDefaultArgs<ExtArgs>
  }
  export type PieceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesureMoule?: boolean | MesureMouleDefaultArgs<ExtArgs>
  }
  export type PieceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesureMoule?: boolean | MesureMouleDefaultArgs<ExtArgs>
  }

  export type $PiecePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Piece"
    objects: {
      mesureMoule: Prisma.$MesureMoulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: number
      valeurPlateau1: number
      valeurPlateau2: number | null
      mesureMouleId: number
    }, ExtArgs["result"]["piece"]>
    composites: {}
  }

  type PieceGetPayload<S extends boolean | null | undefined | PieceDefaultArgs> = $Result.GetResult<Prisma.$PiecePayload, S>

  type PieceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PieceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PieceCountAggregateInputType | true
    }

  export interface PieceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Piece'], meta: { name: 'Piece' } }
    /**
     * Find zero or one Piece that matches the filter.
     * @param {PieceFindUniqueArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PieceFindUniqueArgs>(args: SelectSubset<T, PieceFindUniqueArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Piece that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PieceFindUniqueOrThrowArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PieceFindUniqueOrThrowArgs>(args: SelectSubset<T, PieceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Piece that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceFindFirstArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PieceFindFirstArgs>(args?: SelectSubset<T, PieceFindFirstArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Piece that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceFindFirstOrThrowArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PieceFindFirstOrThrowArgs>(args?: SelectSubset<T, PieceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pieces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pieces
     * const pieces = await prisma.piece.findMany()
     * 
     * // Get first 10 Pieces
     * const pieces = await prisma.piece.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pieceWithIdOnly = await prisma.piece.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PieceFindManyArgs>(args?: SelectSubset<T, PieceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Piece.
     * @param {PieceCreateArgs} args - Arguments to create a Piece.
     * @example
     * // Create one Piece
     * const Piece = await prisma.piece.create({
     *   data: {
     *     // ... data to create a Piece
     *   }
     * })
     * 
     */
    create<T extends PieceCreateArgs>(args: SelectSubset<T, PieceCreateArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pieces.
     * @param {PieceCreateManyArgs} args - Arguments to create many Pieces.
     * @example
     * // Create many Pieces
     * const piece = await prisma.piece.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PieceCreateManyArgs>(args?: SelectSubset<T, PieceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pieces and returns the data saved in the database.
     * @param {PieceCreateManyAndReturnArgs} args - Arguments to create many Pieces.
     * @example
     * // Create many Pieces
     * const piece = await prisma.piece.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pieces and only return the `id`
     * const pieceWithIdOnly = await prisma.piece.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PieceCreateManyAndReturnArgs>(args?: SelectSubset<T, PieceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Piece.
     * @param {PieceDeleteArgs} args - Arguments to delete one Piece.
     * @example
     * // Delete one Piece
     * const Piece = await prisma.piece.delete({
     *   where: {
     *     // ... filter to delete one Piece
     *   }
     * })
     * 
     */
    delete<T extends PieceDeleteArgs>(args: SelectSubset<T, PieceDeleteArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Piece.
     * @param {PieceUpdateArgs} args - Arguments to update one Piece.
     * @example
     * // Update one Piece
     * const piece = await prisma.piece.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PieceUpdateArgs>(args: SelectSubset<T, PieceUpdateArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pieces.
     * @param {PieceDeleteManyArgs} args - Arguments to filter Pieces to delete.
     * @example
     * // Delete a few Pieces
     * const { count } = await prisma.piece.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PieceDeleteManyArgs>(args?: SelectSubset<T, PieceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pieces
     * const piece = await prisma.piece.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PieceUpdateManyArgs>(args: SelectSubset<T, PieceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pieces and returns the data updated in the database.
     * @param {PieceUpdateManyAndReturnArgs} args - Arguments to update many Pieces.
     * @example
     * // Update many Pieces
     * const piece = await prisma.piece.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pieces and only return the `id`
     * const pieceWithIdOnly = await prisma.piece.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PieceUpdateManyAndReturnArgs>(args: SelectSubset<T, PieceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Piece.
     * @param {PieceUpsertArgs} args - Arguments to update or create a Piece.
     * @example
     * // Update or create a Piece
     * const piece = await prisma.piece.upsert({
     *   create: {
     *     // ... data to create a Piece
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Piece we want to update
     *   }
     * })
     */
    upsert<T extends PieceUpsertArgs>(args: SelectSubset<T, PieceUpsertArgs<ExtArgs>>): Prisma__PieceClient<$Result.GetResult<Prisma.$PiecePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceCountArgs} args - Arguments to filter Pieces to count.
     * @example
     * // Count the number of Pieces
     * const count = await prisma.piece.count({
     *   where: {
     *     // ... the filter for the Pieces we want to count
     *   }
     * })
    **/
    count<T extends PieceCountArgs>(
      args?: Subset<T, PieceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PieceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Piece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PieceAggregateArgs>(args: Subset<T, PieceAggregateArgs>): Prisma.PrismaPromise<GetPieceAggregateType<T>>

    /**
     * Group by Piece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PieceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PieceGroupByArgs['orderBy'] }
        : { orderBy?: PieceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PieceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPieceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Piece model
   */
  readonly fields: PieceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Piece.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PieceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mesureMoule<T extends MesureMouleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MesureMouleDefaultArgs<ExtArgs>>): Prisma__MesureMouleClient<$Result.GetResult<Prisma.$MesureMoulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Piece model
   */
  interface PieceFieldRefs {
    readonly id: FieldRef<"Piece", 'Int'>
    readonly numero: FieldRef<"Piece", 'Int'>
    readonly valeurPlateau1: FieldRef<"Piece", 'Float'>
    readonly valeurPlateau2: FieldRef<"Piece", 'Float'>
    readonly mesureMouleId: FieldRef<"Piece", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Piece findUnique
   */
  export type PieceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter, which Piece to fetch.
     */
    where: PieceWhereUniqueInput
  }

  /**
   * Piece findUniqueOrThrow
   */
  export type PieceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter, which Piece to fetch.
     */
    where: PieceWhereUniqueInput
  }

  /**
   * Piece findFirst
   */
  export type PieceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter, which Piece to fetch.
     */
    where?: PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pieces to fetch.
     */
    orderBy?: PieceOrderByWithRelationInput | PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pieces.
     */
    cursor?: PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pieces.
     */
    distinct?: PieceScalarFieldEnum | PieceScalarFieldEnum[]
  }

  /**
   * Piece findFirstOrThrow
   */
  export type PieceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter, which Piece to fetch.
     */
    where?: PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pieces to fetch.
     */
    orderBy?: PieceOrderByWithRelationInput | PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pieces.
     */
    cursor?: PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pieces.
     */
    distinct?: PieceScalarFieldEnum | PieceScalarFieldEnum[]
  }

  /**
   * Piece findMany
   */
  export type PieceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter, which Pieces to fetch.
     */
    where?: PieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pieces to fetch.
     */
    orderBy?: PieceOrderByWithRelationInput | PieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pieces.
     */
    cursor?: PieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pieces.
     */
    skip?: number
    distinct?: PieceScalarFieldEnum | PieceScalarFieldEnum[]
  }

  /**
   * Piece create
   */
  export type PieceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * The data needed to create a Piece.
     */
    data: XOR<PieceCreateInput, PieceUncheckedCreateInput>
  }

  /**
   * Piece createMany
   */
  export type PieceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pieces.
     */
    data: PieceCreateManyInput | PieceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Piece createManyAndReturn
   */
  export type PieceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * The data used to create many Pieces.
     */
    data: PieceCreateManyInput | PieceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Piece update
   */
  export type PieceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * The data needed to update a Piece.
     */
    data: XOR<PieceUpdateInput, PieceUncheckedUpdateInput>
    /**
     * Choose, which Piece to update.
     */
    where: PieceWhereUniqueInput
  }

  /**
   * Piece updateMany
   */
  export type PieceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pieces.
     */
    data: XOR<PieceUpdateManyMutationInput, PieceUncheckedUpdateManyInput>
    /**
     * Filter which Pieces to update
     */
    where?: PieceWhereInput
    /**
     * Limit how many Pieces to update.
     */
    limit?: number
  }

  /**
   * Piece updateManyAndReturn
   */
  export type PieceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * The data used to update Pieces.
     */
    data: XOR<PieceUpdateManyMutationInput, PieceUncheckedUpdateManyInput>
    /**
     * Filter which Pieces to update
     */
    where?: PieceWhereInput
    /**
     * Limit how many Pieces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Piece upsert
   */
  export type PieceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * The filter to search for the Piece to update in case it exists.
     */
    where: PieceWhereUniqueInput
    /**
     * In case the Piece found by the `where` argument doesn't exist, create a new Piece with this data.
     */
    create: XOR<PieceCreateInput, PieceUncheckedCreateInput>
    /**
     * In case the Piece was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PieceUpdateInput, PieceUncheckedUpdateInput>
  }

  /**
   * Piece delete
   */
  export type PieceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
    /**
     * Filter which Piece to delete.
     */
    where: PieceWhereUniqueInput
  }

  /**
   * Piece deleteMany
   */
  export type PieceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pieces to delete
     */
    where?: PieceWhereInput
    /**
     * Limit how many Pieces to delete.
     */
    limit?: number
  }

  /**
   * Piece without action
   */
  export type PieceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piece
     */
    select?: PieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piece
     */
    omit?: PieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MesureScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    dateMesure: 'dateMesure',
    taille: 'taille'
  };

  export type MesureScalarFieldEnum = (typeof MesureScalarFieldEnum)[keyof typeof MesureScalarFieldEnum]


  export const MouleScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    nbPlateaux: 'nbPlateaux'
  };

  export type MouleScalarFieldEnum = (typeof MouleScalarFieldEnum)[keyof typeof MouleScalarFieldEnum]


  export const MesureMouleScalarFieldEnum: {
    id: 'id',
    quota: 'quota',
    margeInf: 'margeInf',
    margeSup: 'margeSup',
    unite: 'unite',
    mesureId: 'mesureId',
    mouleId: 'mouleId'
  };

  export type MesureMouleScalarFieldEnum = (typeof MesureMouleScalarFieldEnum)[keyof typeof MesureMouleScalarFieldEnum]


  export const PieceScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    valeurPlateau1: 'valeurPlateau1',
    valeurPlateau2: 'valeurPlateau2',
    mesureMouleId: 'mesureMouleId'
  };

  export type PieceScalarFieldEnum = (typeof PieceScalarFieldEnum)[keyof typeof PieceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MesureWhereInput = {
    AND?: MesureWhereInput | MesureWhereInput[]
    OR?: MesureWhereInput[]
    NOT?: MesureWhereInput | MesureWhereInput[]
    id?: IntFilter<"Mesure"> | number
    reference?: StringFilter<"Mesure"> | string
    dateMesure?: DateTimeFilter<"Mesure"> | Date | string
    taille?: StringNullableFilter<"Mesure"> | string | null
    mesuresMoules?: MesureMouleListRelationFilter
  }

  export type MesureOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    dateMesure?: SortOrder
    taille?: SortOrderInput | SortOrder
    mesuresMoules?: MesureMouleOrderByRelationAggregateInput
  }

  export type MesureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MesureWhereInput | MesureWhereInput[]
    OR?: MesureWhereInput[]
    NOT?: MesureWhereInput | MesureWhereInput[]
    reference?: StringFilter<"Mesure"> | string
    dateMesure?: DateTimeFilter<"Mesure"> | Date | string
    taille?: StringNullableFilter<"Mesure"> | string | null
    mesuresMoules?: MesureMouleListRelationFilter
  }, "id">

  export type MesureOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    dateMesure?: SortOrder
    taille?: SortOrderInput | SortOrder
    _count?: MesureCountOrderByAggregateInput
    _avg?: MesureAvgOrderByAggregateInput
    _max?: MesureMaxOrderByAggregateInput
    _min?: MesureMinOrderByAggregateInput
    _sum?: MesureSumOrderByAggregateInput
  }

  export type MesureScalarWhereWithAggregatesInput = {
    AND?: MesureScalarWhereWithAggregatesInput | MesureScalarWhereWithAggregatesInput[]
    OR?: MesureScalarWhereWithAggregatesInput[]
    NOT?: MesureScalarWhereWithAggregatesInput | MesureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mesure"> | number
    reference?: StringWithAggregatesFilter<"Mesure"> | string
    dateMesure?: DateTimeWithAggregatesFilter<"Mesure"> | Date | string
    taille?: StringNullableWithAggregatesFilter<"Mesure"> | string | null
  }

  export type MouleWhereInput = {
    AND?: MouleWhereInput | MouleWhereInput[]
    OR?: MouleWhereInput[]
    NOT?: MouleWhereInput | MouleWhereInput[]
    id?: IntFilter<"Moule"> | number
    reference?: StringFilter<"Moule"> | string
    nbPlateaux?: IntFilter<"Moule"> | number
    mesuresMoules?: MesureMouleListRelationFilter
  }

  export type MouleOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    nbPlateaux?: SortOrder
    mesuresMoules?: MesureMouleOrderByRelationAggregateInput
  }

  export type MouleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MouleWhereInput | MouleWhereInput[]
    OR?: MouleWhereInput[]
    NOT?: MouleWhereInput | MouleWhereInput[]
    reference?: StringFilter<"Moule"> | string
    nbPlateaux?: IntFilter<"Moule"> | number
    mesuresMoules?: MesureMouleListRelationFilter
  }, "id">

  export type MouleOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    nbPlateaux?: SortOrder
    _count?: MouleCountOrderByAggregateInput
    _avg?: MouleAvgOrderByAggregateInput
    _max?: MouleMaxOrderByAggregateInput
    _min?: MouleMinOrderByAggregateInput
    _sum?: MouleSumOrderByAggregateInput
  }

  export type MouleScalarWhereWithAggregatesInput = {
    AND?: MouleScalarWhereWithAggregatesInput | MouleScalarWhereWithAggregatesInput[]
    OR?: MouleScalarWhereWithAggregatesInput[]
    NOT?: MouleScalarWhereWithAggregatesInput | MouleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Moule"> | number
    reference?: StringWithAggregatesFilter<"Moule"> | string
    nbPlateaux?: IntWithAggregatesFilter<"Moule"> | number
  }

  export type MesureMouleWhereInput = {
    AND?: MesureMouleWhereInput | MesureMouleWhereInput[]
    OR?: MesureMouleWhereInput[]
    NOT?: MesureMouleWhereInput | MesureMouleWhereInput[]
    id?: IntFilter<"MesureMoule"> | number
    quota?: FloatFilter<"MesureMoule"> | number
    margeInf?: FloatFilter<"MesureMoule"> | number
    margeSup?: FloatFilter<"MesureMoule"> | number
    unite?: StringFilter<"MesureMoule"> | string
    mesureId?: IntFilter<"MesureMoule"> | number
    mouleId?: IntFilter<"MesureMoule"> | number
    mesure?: XOR<MesureScalarRelationFilter, MesureWhereInput>
    moule?: XOR<MouleScalarRelationFilter, MouleWhereInput>
    pieces?: PieceListRelationFilter
  }

  export type MesureMouleOrderByWithRelationInput = {
    id?: SortOrder
    quota?: SortOrder
    margeInf?: SortOrder
    margeSup?: SortOrder
    unite?: SortOrder
    mesureId?: SortOrder
    mouleId?: SortOrder
    mesure?: MesureOrderByWithRelationInput
    moule?: MouleOrderByWithRelationInput
    pieces?: PieceOrderByRelationAggregateInput
  }

  export type MesureMouleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MesureMouleWhereInput | MesureMouleWhereInput[]
    OR?: MesureMouleWhereInput[]
    NOT?: MesureMouleWhereInput | MesureMouleWhereInput[]
    quota?: FloatFilter<"MesureMoule"> | number
    margeInf?: FloatFilter<"MesureMoule"> | number
    margeSup?: FloatFilter<"MesureMoule"> | number
    unite?: StringFilter<"MesureMoule"> | string
    mesureId?: IntFilter<"MesureMoule"> | number
    mouleId?: IntFilter<"MesureMoule"> | number
    mesure?: XOR<MesureScalarRelationFilter, MesureWhereInput>
    moule?: XOR<MouleScalarRelationFilter, MouleWhereInput>
    pieces?: PieceListRelationFilter
  }, "id">

  export type MesureMouleOrderByWithAggregationInput = {
    id?: SortOrder
    quota?: SortOrder
    margeInf?: SortOrder
    margeSup?: SortOrder
    unite?: SortOrder
    mesureId?: SortOrder
    mouleId?: SortOrder
    _count?: MesureMouleCountOrderByAggregateInput
    _avg?: MesureMouleAvgOrderByAggregateInput
    _max?: MesureMouleMaxOrderByAggregateInput
    _min?: MesureMouleMinOrderByAggregateInput
    _sum?: MesureMouleSumOrderByAggregateInput
  }

  export type MesureMouleScalarWhereWithAggregatesInput = {
    AND?: MesureMouleScalarWhereWithAggregatesInput | MesureMouleScalarWhereWithAggregatesInput[]
    OR?: MesureMouleScalarWhereWithAggregatesInput[]
    NOT?: MesureMouleScalarWhereWithAggregatesInput | MesureMouleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MesureMoule"> | number
    quota?: FloatWithAggregatesFilter<"MesureMoule"> | number
    margeInf?: FloatWithAggregatesFilter<"MesureMoule"> | number
    margeSup?: FloatWithAggregatesFilter<"MesureMoule"> | number
    unite?: StringWithAggregatesFilter<"MesureMoule"> | string
    mesureId?: IntWithAggregatesFilter<"MesureMoule"> | number
    mouleId?: IntWithAggregatesFilter<"MesureMoule"> | number
  }

  export type PieceWhereInput = {
    AND?: PieceWhereInput | PieceWhereInput[]
    OR?: PieceWhereInput[]
    NOT?: PieceWhereInput | PieceWhereInput[]
    id?: IntFilter<"Piece"> | number
    numero?: IntFilter<"Piece"> | number
    valeurPlateau1?: FloatFilter<"Piece"> | number
    valeurPlateau2?: FloatNullableFilter<"Piece"> | number | null
    mesureMouleId?: IntFilter<"Piece"> | number
    mesureMoule?: XOR<MesureMouleScalarRelationFilter, MesureMouleWhereInput>
  }

  export type PieceOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    valeurPlateau1?: SortOrder
    valeurPlateau2?: SortOrderInput | SortOrder
    mesureMouleId?: SortOrder
    mesureMoule?: MesureMouleOrderByWithRelationInput
  }

  export type PieceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PieceWhereInput | PieceWhereInput[]
    OR?: PieceWhereInput[]
    NOT?: PieceWhereInput | PieceWhereInput[]
    numero?: IntFilter<"Piece"> | number
    valeurPlateau1?: FloatFilter<"Piece"> | number
    valeurPlateau2?: FloatNullableFilter<"Piece"> | number | null
    mesureMouleId?: IntFilter<"Piece"> | number
    mesureMoule?: XOR<MesureMouleScalarRelationFilter, MesureMouleWhereInput>
  }, "id">

  export type PieceOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    valeurPlateau1?: SortOrder
    valeurPlateau2?: SortOrderInput | SortOrder
    mesureMouleId?: SortOrder
    _count?: PieceCountOrderByAggregateInput
    _avg?: PieceAvgOrderByAggregateInput
    _max?: PieceMaxOrderByAggregateInput
    _min?: PieceMinOrderByAggregateInput
    _sum?: PieceSumOrderByAggregateInput
  }

  export type PieceScalarWhereWithAggregatesInput = {
    AND?: PieceScalarWhereWithAggregatesInput | PieceScalarWhereWithAggregatesInput[]
    OR?: PieceScalarWhereWithAggregatesInput[]
    NOT?: PieceScalarWhereWithAggregatesInput | PieceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Piece"> | number
    numero?: IntWithAggregatesFilter<"Piece"> | number
    valeurPlateau1?: FloatWithAggregatesFilter<"Piece"> | number
    valeurPlateau2?: FloatNullableWithAggregatesFilter<"Piece"> | number | null
    mesureMouleId?: IntWithAggregatesFilter<"Piece"> | number
  }

  export type MesureCreateInput = {
    reference: string
    dateMesure: Date | string
    taille?: string | null
    mesuresMoules?: MesureMouleCreateNestedManyWithoutMesureInput
  }

  export type MesureUncheckedCreateInput = {
    id?: number
    reference: string
    dateMesure: Date | string
    taille?: string | null
    mesuresMoules?: MesureMouleUncheckedCreateNestedManyWithoutMesureInput
  }

  export type MesureUpdateInput = {
    reference?: StringFieldUpdateOperationsInput | string
    dateMesure?: DateTimeFieldUpdateOperationsInput | Date | string
    taille?: NullableStringFieldUpdateOperationsInput | string | null
    mesuresMoules?: MesureMouleUpdateManyWithoutMesureNestedInput
  }

  export type MesureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    dateMesure?: DateTimeFieldUpdateOperationsInput | Date | string
    taille?: NullableStringFieldUpdateOperationsInput | string | null
    mesuresMoules?: MesureMouleUncheckedUpdateManyWithoutMesureNestedInput
  }

  export type MesureCreateManyInput = {
    id?: number
    reference: string
    dateMesure: Date | string
    taille?: string | null
  }

  export type MesureUpdateManyMutationInput = {
    reference?: StringFieldUpdateOperationsInput | string
    dateMesure?: DateTimeFieldUpdateOperationsInput | Date | string
    taille?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MesureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    dateMesure?: DateTimeFieldUpdateOperationsInput | Date | string
    taille?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MouleCreateInput = {
    reference: string
    nbPlateaux: number
    mesuresMoules?: MesureMouleCreateNestedManyWithoutMouleInput
  }

  export type MouleUncheckedCreateInput = {
    id?: number
    reference: string
    nbPlateaux: number
    mesuresMoules?: MesureMouleUncheckedCreateNestedManyWithoutMouleInput
  }

  export type MouleUpdateInput = {
    reference?: StringFieldUpdateOperationsInput | string
    nbPlateaux?: IntFieldUpdateOperationsInput | number
    mesuresMoules?: MesureMouleUpdateManyWithoutMouleNestedInput
  }

  export type MouleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    nbPlateaux?: IntFieldUpdateOperationsInput | number
    mesuresMoules?: MesureMouleUncheckedUpdateManyWithoutMouleNestedInput
  }

  export type MouleCreateManyInput = {
    id?: number
    reference: string
    nbPlateaux: number
  }

  export type MouleUpdateManyMutationInput = {
    reference?: StringFieldUpdateOperationsInput | string
    nbPlateaux?: IntFieldUpdateOperationsInput | number
  }

  export type MouleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    nbPlateaux?: IntFieldUpdateOperationsInput | number
  }

  export type MesureMouleCreateInput = {
    quota: number
    margeInf: number
    margeSup: number
    unite: string
    mesure: MesureCreateNestedOneWithoutMesuresMoulesInput
    moule: MouleCreateNestedOneWithoutMesuresMoulesInput
    pieces?: PieceCreateNestedManyWithoutMesureMouleInput
  }

  export type MesureMouleUncheckedCreateInput = {
    id?: number
    quota: number
    margeInf: number
    margeSup: number
    unite: string
    mesureId: number
    mouleId: number
    pieces?: PieceUncheckedCreateNestedManyWithoutMesureMouleInput
  }

  export type MesureMouleUpdateInput = {
    quota?: FloatFieldUpdateOperationsInput | number
    margeInf?: FloatFieldUpdateOperationsInput | number
    margeSup?: FloatFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    mesure?: MesureUpdateOneRequiredWithoutMesuresMoulesNestedInput
    moule?: MouleUpdateOneRequiredWithoutMesuresMoulesNestedInput
    pieces?: PieceUpdateManyWithoutMesureMouleNestedInput
  }

  export type MesureMouleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quota?: FloatFieldUpdateOperationsInput | number
    margeInf?: FloatFieldUpdateOperationsInput | number
    margeSup?: FloatFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    mesureId?: IntFieldUpdateOperationsInput | number
    mouleId?: IntFieldUpdateOperationsInput | number
    pieces?: PieceUncheckedUpdateManyWithoutMesureMouleNestedInput
  }

  export type MesureMouleCreateManyInput = {
    id?: number
    quota: number
    margeInf: number
    margeSup: number
    unite: string
    mesureId: number
    mouleId: number
  }

  export type MesureMouleUpdateManyMutationInput = {
    quota?: FloatFieldUpdateOperationsInput | number
    margeInf?: FloatFieldUpdateOperationsInput | number
    margeSup?: FloatFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
  }

  export type MesureMouleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quota?: FloatFieldUpdateOperationsInput | number
    margeInf?: FloatFieldUpdateOperationsInput | number
    margeSup?: FloatFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    mesureId?: IntFieldUpdateOperationsInput | number
    mouleId?: IntFieldUpdateOperationsInput | number
  }

  export type PieceCreateInput = {
    numero: number
    valeurPlateau1: number
    valeurPlateau2?: number | null
    mesureMoule: MesureMouleCreateNestedOneWithoutPiecesInput
  }

  export type PieceUncheckedCreateInput = {
    id?: number
    numero: number
    valeurPlateau1: number
    valeurPlateau2?: number | null
    mesureMouleId: number
  }

  export type PieceUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    valeurPlateau1?: FloatFieldUpdateOperationsInput | number
    valeurPlateau2?: NullableFloatFieldUpdateOperationsInput | number | null
    mesureMoule?: MesureMouleUpdateOneRequiredWithoutPiecesNestedInput
  }

  export type PieceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    valeurPlateau1?: FloatFieldUpdateOperationsInput | number
    valeurPlateau2?: NullableFloatFieldUpdateOperationsInput | number | null
    mesureMouleId?: IntFieldUpdateOperationsInput | number
  }

  export type PieceCreateManyInput = {
    id?: number
    numero: number
    valeurPlateau1: number
    valeurPlateau2?: number | null
    mesureMouleId: number
  }

  export type PieceUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    valeurPlateau1?: FloatFieldUpdateOperationsInput | number
    valeurPlateau2?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PieceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    valeurPlateau1?: FloatFieldUpdateOperationsInput | number
    valeurPlateau2?: NullableFloatFieldUpdateOperationsInput | number | null
    mesureMouleId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MesureMouleListRelationFilter = {
    every?: MesureMouleWhereInput
    some?: MesureMouleWhereInput
    none?: MesureMouleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MesureMouleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MesureCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    dateMesure?: SortOrder
    taille?: SortOrder
  }

  export type MesureAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MesureMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    dateMesure?: SortOrder
    taille?: SortOrder
  }

  export type MesureMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    dateMesure?: SortOrder
    taille?: SortOrder
  }

  export type MesureSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MouleCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    nbPlateaux?: SortOrder
  }

  export type MouleAvgOrderByAggregateInput = {
    id?: SortOrder
    nbPlateaux?: SortOrder
  }

  export type MouleMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    nbPlateaux?: SortOrder
  }

  export type MouleMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    nbPlateaux?: SortOrder
  }

  export type MouleSumOrderByAggregateInput = {
    id?: SortOrder
    nbPlateaux?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MesureScalarRelationFilter = {
    is?: MesureWhereInput
    isNot?: MesureWhereInput
  }

  export type MouleScalarRelationFilter = {
    is?: MouleWhereInput
    isNot?: MouleWhereInput
  }

  export type PieceListRelationFilter = {
    every?: PieceWhereInput
    some?: PieceWhereInput
    none?: PieceWhereInput
  }

  export type PieceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MesureMouleCountOrderByAggregateInput = {
    id?: SortOrder
    quota?: SortOrder
    margeInf?: SortOrder
    margeSup?: SortOrder
    unite?: SortOrder
    mesureId?: SortOrder
    mouleId?: SortOrder
  }

  export type MesureMouleAvgOrderByAggregateInput = {
    id?: SortOrder
    quota?: SortOrder
    margeInf?: SortOrder
    margeSup?: SortOrder
    mesureId?: SortOrder
    mouleId?: SortOrder
  }

  export type MesureMouleMaxOrderByAggregateInput = {
    id?: SortOrder
    quota?: SortOrder
    margeInf?: SortOrder
    margeSup?: SortOrder
    unite?: SortOrder
    mesureId?: SortOrder
    mouleId?: SortOrder
  }

  export type MesureMouleMinOrderByAggregateInput = {
    id?: SortOrder
    quota?: SortOrder
    margeInf?: SortOrder
    margeSup?: SortOrder
    unite?: SortOrder
    mesureId?: SortOrder
    mouleId?: SortOrder
  }

  export type MesureMouleSumOrderByAggregateInput = {
    id?: SortOrder
    quota?: SortOrder
    margeInf?: SortOrder
    margeSup?: SortOrder
    mesureId?: SortOrder
    mouleId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MesureMouleScalarRelationFilter = {
    is?: MesureMouleWhereInput
    isNot?: MesureMouleWhereInput
  }

  export type PieceCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    valeurPlateau1?: SortOrder
    valeurPlateau2?: SortOrder
    mesureMouleId?: SortOrder
  }

  export type PieceAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    valeurPlateau1?: SortOrder
    valeurPlateau2?: SortOrder
    mesureMouleId?: SortOrder
  }

  export type PieceMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    valeurPlateau1?: SortOrder
    valeurPlateau2?: SortOrder
    mesureMouleId?: SortOrder
  }

  export type PieceMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    valeurPlateau1?: SortOrder
    valeurPlateau2?: SortOrder
    mesureMouleId?: SortOrder
  }

  export type PieceSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    valeurPlateau1?: SortOrder
    valeurPlateau2?: SortOrder
    mesureMouleId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MesureMouleCreateNestedManyWithoutMesureInput = {
    create?: XOR<MesureMouleCreateWithoutMesureInput, MesureMouleUncheckedCreateWithoutMesureInput> | MesureMouleCreateWithoutMesureInput[] | MesureMouleUncheckedCreateWithoutMesureInput[]
    connectOrCreate?: MesureMouleCreateOrConnectWithoutMesureInput | MesureMouleCreateOrConnectWithoutMesureInput[]
    createMany?: MesureMouleCreateManyMesureInputEnvelope
    connect?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
  }

  export type MesureMouleUncheckedCreateNestedManyWithoutMesureInput = {
    create?: XOR<MesureMouleCreateWithoutMesureInput, MesureMouleUncheckedCreateWithoutMesureInput> | MesureMouleCreateWithoutMesureInput[] | MesureMouleUncheckedCreateWithoutMesureInput[]
    connectOrCreate?: MesureMouleCreateOrConnectWithoutMesureInput | MesureMouleCreateOrConnectWithoutMesureInput[]
    createMany?: MesureMouleCreateManyMesureInputEnvelope
    connect?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MesureMouleUpdateManyWithoutMesureNestedInput = {
    create?: XOR<MesureMouleCreateWithoutMesureInput, MesureMouleUncheckedCreateWithoutMesureInput> | MesureMouleCreateWithoutMesureInput[] | MesureMouleUncheckedCreateWithoutMesureInput[]
    connectOrCreate?: MesureMouleCreateOrConnectWithoutMesureInput | MesureMouleCreateOrConnectWithoutMesureInput[]
    upsert?: MesureMouleUpsertWithWhereUniqueWithoutMesureInput | MesureMouleUpsertWithWhereUniqueWithoutMesureInput[]
    createMany?: MesureMouleCreateManyMesureInputEnvelope
    set?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    disconnect?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    delete?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    connect?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    update?: MesureMouleUpdateWithWhereUniqueWithoutMesureInput | MesureMouleUpdateWithWhereUniqueWithoutMesureInput[]
    updateMany?: MesureMouleUpdateManyWithWhereWithoutMesureInput | MesureMouleUpdateManyWithWhereWithoutMesureInput[]
    deleteMany?: MesureMouleScalarWhereInput | MesureMouleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MesureMouleUncheckedUpdateManyWithoutMesureNestedInput = {
    create?: XOR<MesureMouleCreateWithoutMesureInput, MesureMouleUncheckedCreateWithoutMesureInput> | MesureMouleCreateWithoutMesureInput[] | MesureMouleUncheckedCreateWithoutMesureInput[]
    connectOrCreate?: MesureMouleCreateOrConnectWithoutMesureInput | MesureMouleCreateOrConnectWithoutMesureInput[]
    upsert?: MesureMouleUpsertWithWhereUniqueWithoutMesureInput | MesureMouleUpsertWithWhereUniqueWithoutMesureInput[]
    createMany?: MesureMouleCreateManyMesureInputEnvelope
    set?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    disconnect?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    delete?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    connect?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    update?: MesureMouleUpdateWithWhereUniqueWithoutMesureInput | MesureMouleUpdateWithWhereUniqueWithoutMesureInput[]
    updateMany?: MesureMouleUpdateManyWithWhereWithoutMesureInput | MesureMouleUpdateManyWithWhereWithoutMesureInput[]
    deleteMany?: MesureMouleScalarWhereInput | MesureMouleScalarWhereInput[]
  }

  export type MesureMouleCreateNestedManyWithoutMouleInput = {
    create?: XOR<MesureMouleCreateWithoutMouleInput, MesureMouleUncheckedCreateWithoutMouleInput> | MesureMouleCreateWithoutMouleInput[] | MesureMouleUncheckedCreateWithoutMouleInput[]
    connectOrCreate?: MesureMouleCreateOrConnectWithoutMouleInput | MesureMouleCreateOrConnectWithoutMouleInput[]
    createMany?: MesureMouleCreateManyMouleInputEnvelope
    connect?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
  }

  export type MesureMouleUncheckedCreateNestedManyWithoutMouleInput = {
    create?: XOR<MesureMouleCreateWithoutMouleInput, MesureMouleUncheckedCreateWithoutMouleInput> | MesureMouleCreateWithoutMouleInput[] | MesureMouleUncheckedCreateWithoutMouleInput[]
    connectOrCreate?: MesureMouleCreateOrConnectWithoutMouleInput | MesureMouleCreateOrConnectWithoutMouleInput[]
    createMany?: MesureMouleCreateManyMouleInputEnvelope
    connect?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
  }

  export type MesureMouleUpdateManyWithoutMouleNestedInput = {
    create?: XOR<MesureMouleCreateWithoutMouleInput, MesureMouleUncheckedCreateWithoutMouleInput> | MesureMouleCreateWithoutMouleInput[] | MesureMouleUncheckedCreateWithoutMouleInput[]
    connectOrCreate?: MesureMouleCreateOrConnectWithoutMouleInput | MesureMouleCreateOrConnectWithoutMouleInput[]
    upsert?: MesureMouleUpsertWithWhereUniqueWithoutMouleInput | MesureMouleUpsertWithWhereUniqueWithoutMouleInput[]
    createMany?: MesureMouleCreateManyMouleInputEnvelope
    set?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    disconnect?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    delete?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    connect?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    update?: MesureMouleUpdateWithWhereUniqueWithoutMouleInput | MesureMouleUpdateWithWhereUniqueWithoutMouleInput[]
    updateMany?: MesureMouleUpdateManyWithWhereWithoutMouleInput | MesureMouleUpdateManyWithWhereWithoutMouleInput[]
    deleteMany?: MesureMouleScalarWhereInput | MesureMouleScalarWhereInput[]
  }

  export type MesureMouleUncheckedUpdateManyWithoutMouleNestedInput = {
    create?: XOR<MesureMouleCreateWithoutMouleInput, MesureMouleUncheckedCreateWithoutMouleInput> | MesureMouleCreateWithoutMouleInput[] | MesureMouleUncheckedCreateWithoutMouleInput[]
    connectOrCreate?: MesureMouleCreateOrConnectWithoutMouleInput | MesureMouleCreateOrConnectWithoutMouleInput[]
    upsert?: MesureMouleUpsertWithWhereUniqueWithoutMouleInput | MesureMouleUpsertWithWhereUniqueWithoutMouleInput[]
    createMany?: MesureMouleCreateManyMouleInputEnvelope
    set?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    disconnect?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    delete?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    connect?: MesureMouleWhereUniqueInput | MesureMouleWhereUniqueInput[]
    update?: MesureMouleUpdateWithWhereUniqueWithoutMouleInput | MesureMouleUpdateWithWhereUniqueWithoutMouleInput[]
    updateMany?: MesureMouleUpdateManyWithWhereWithoutMouleInput | MesureMouleUpdateManyWithWhereWithoutMouleInput[]
    deleteMany?: MesureMouleScalarWhereInput | MesureMouleScalarWhereInput[]
  }

  export type MesureCreateNestedOneWithoutMesuresMoulesInput = {
    create?: XOR<MesureCreateWithoutMesuresMoulesInput, MesureUncheckedCreateWithoutMesuresMoulesInput>
    connectOrCreate?: MesureCreateOrConnectWithoutMesuresMoulesInput
    connect?: MesureWhereUniqueInput
  }

  export type MouleCreateNestedOneWithoutMesuresMoulesInput = {
    create?: XOR<MouleCreateWithoutMesuresMoulesInput, MouleUncheckedCreateWithoutMesuresMoulesInput>
    connectOrCreate?: MouleCreateOrConnectWithoutMesuresMoulesInput
    connect?: MouleWhereUniqueInput
  }

  export type PieceCreateNestedManyWithoutMesureMouleInput = {
    create?: XOR<PieceCreateWithoutMesureMouleInput, PieceUncheckedCreateWithoutMesureMouleInput> | PieceCreateWithoutMesureMouleInput[] | PieceUncheckedCreateWithoutMesureMouleInput[]
    connectOrCreate?: PieceCreateOrConnectWithoutMesureMouleInput | PieceCreateOrConnectWithoutMesureMouleInput[]
    createMany?: PieceCreateManyMesureMouleInputEnvelope
    connect?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
  }

  export type PieceUncheckedCreateNestedManyWithoutMesureMouleInput = {
    create?: XOR<PieceCreateWithoutMesureMouleInput, PieceUncheckedCreateWithoutMesureMouleInput> | PieceCreateWithoutMesureMouleInput[] | PieceUncheckedCreateWithoutMesureMouleInput[]
    connectOrCreate?: PieceCreateOrConnectWithoutMesureMouleInput | PieceCreateOrConnectWithoutMesureMouleInput[]
    createMany?: PieceCreateManyMesureMouleInputEnvelope
    connect?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MesureUpdateOneRequiredWithoutMesuresMoulesNestedInput = {
    create?: XOR<MesureCreateWithoutMesuresMoulesInput, MesureUncheckedCreateWithoutMesuresMoulesInput>
    connectOrCreate?: MesureCreateOrConnectWithoutMesuresMoulesInput
    upsert?: MesureUpsertWithoutMesuresMoulesInput
    connect?: MesureWhereUniqueInput
    update?: XOR<XOR<MesureUpdateToOneWithWhereWithoutMesuresMoulesInput, MesureUpdateWithoutMesuresMoulesInput>, MesureUncheckedUpdateWithoutMesuresMoulesInput>
  }

  export type MouleUpdateOneRequiredWithoutMesuresMoulesNestedInput = {
    create?: XOR<MouleCreateWithoutMesuresMoulesInput, MouleUncheckedCreateWithoutMesuresMoulesInput>
    connectOrCreate?: MouleCreateOrConnectWithoutMesuresMoulesInput
    upsert?: MouleUpsertWithoutMesuresMoulesInput
    connect?: MouleWhereUniqueInput
    update?: XOR<XOR<MouleUpdateToOneWithWhereWithoutMesuresMoulesInput, MouleUpdateWithoutMesuresMoulesInput>, MouleUncheckedUpdateWithoutMesuresMoulesInput>
  }

  export type PieceUpdateManyWithoutMesureMouleNestedInput = {
    create?: XOR<PieceCreateWithoutMesureMouleInput, PieceUncheckedCreateWithoutMesureMouleInput> | PieceCreateWithoutMesureMouleInput[] | PieceUncheckedCreateWithoutMesureMouleInput[]
    connectOrCreate?: PieceCreateOrConnectWithoutMesureMouleInput | PieceCreateOrConnectWithoutMesureMouleInput[]
    upsert?: PieceUpsertWithWhereUniqueWithoutMesureMouleInput | PieceUpsertWithWhereUniqueWithoutMesureMouleInput[]
    createMany?: PieceCreateManyMesureMouleInputEnvelope
    set?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    disconnect?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    delete?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    connect?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    update?: PieceUpdateWithWhereUniqueWithoutMesureMouleInput | PieceUpdateWithWhereUniqueWithoutMesureMouleInput[]
    updateMany?: PieceUpdateManyWithWhereWithoutMesureMouleInput | PieceUpdateManyWithWhereWithoutMesureMouleInput[]
    deleteMany?: PieceScalarWhereInput | PieceScalarWhereInput[]
  }

  export type PieceUncheckedUpdateManyWithoutMesureMouleNestedInput = {
    create?: XOR<PieceCreateWithoutMesureMouleInput, PieceUncheckedCreateWithoutMesureMouleInput> | PieceCreateWithoutMesureMouleInput[] | PieceUncheckedCreateWithoutMesureMouleInput[]
    connectOrCreate?: PieceCreateOrConnectWithoutMesureMouleInput | PieceCreateOrConnectWithoutMesureMouleInput[]
    upsert?: PieceUpsertWithWhereUniqueWithoutMesureMouleInput | PieceUpsertWithWhereUniqueWithoutMesureMouleInput[]
    createMany?: PieceCreateManyMesureMouleInputEnvelope
    set?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    disconnect?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    delete?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    connect?: PieceWhereUniqueInput | PieceWhereUniqueInput[]
    update?: PieceUpdateWithWhereUniqueWithoutMesureMouleInput | PieceUpdateWithWhereUniqueWithoutMesureMouleInput[]
    updateMany?: PieceUpdateManyWithWhereWithoutMesureMouleInput | PieceUpdateManyWithWhereWithoutMesureMouleInput[]
    deleteMany?: PieceScalarWhereInput | PieceScalarWhereInput[]
  }

  export type MesureMouleCreateNestedOneWithoutPiecesInput = {
    create?: XOR<MesureMouleCreateWithoutPiecesInput, MesureMouleUncheckedCreateWithoutPiecesInput>
    connectOrCreate?: MesureMouleCreateOrConnectWithoutPiecesInput
    connect?: MesureMouleWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MesureMouleUpdateOneRequiredWithoutPiecesNestedInput = {
    create?: XOR<MesureMouleCreateWithoutPiecesInput, MesureMouleUncheckedCreateWithoutPiecesInput>
    connectOrCreate?: MesureMouleCreateOrConnectWithoutPiecesInput
    upsert?: MesureMouleUpsertWithoutPiecesInput
    connect?: MesureMouleWhereUniqueInput
    update?: XOR<XOR<MesureMouleUpdateToOneWithWhereWithoutPiecesInput, MesureMouleUpdateWithoutPiecesInput>, MesureMouleUncheckedUpdateWithoutPiecesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MesureMouleCreateWithoutMesureInput = {
    quota: number
    margeInf: number
    margeSup: number
    unite: string
    moule: MouleCreateNestedOneWithoutMesuresMoulesInput
    pieces?: PieceCreateNestedManyWithoutMesureMouleInput
  }

  export type MesureMouleUncheckedCreateWithoutMesureInput = {
    id?: number
    quota: number
    margeInf: number
    margeSup: number
    unite: string
    mouleId: number
    pieces?: PieceUncheckedCreateNestedManyWithoutMesureMouleInput
  }

  export type MesureMouleCreateOrConnectWithoutMesureInput = {
    where: MesureMouleWhereUniqueInput
    create: XOR<MesureMouleCreateWithoutMesureInput, MesureMouleUncheckedCreateWithoutMesureInput>
  }

  export type MesureMouleCreateManyMesureInputEnvelope = {
    data: MesureMouleCreateManyMesureInput | MesureMouleCreateManyMesureInput[]
    skipDuplicates?: boolean
  }

  export type MesureMouleUpsertWithWhereUniqueWithoutMesureInput = {
    where: MesureMouleWhereUniqueInput
    update: XOR<MesureMouleUpdateWithoutMesureInput, MesureMouleUncheckedUpdateWithoutMesureInput>
    create: XOR<MesureMouleCreateWithoutMesureInput, MesureMouleUncheckedCreateWithoutMesureInput>
  }

  export type MesureMouleUpdateWithWhereUniqueWithoutMesureInput = {
    where: MesureMouleWhereUniqueInput
    data: XOR<MesureMouleUpdateWithoutMesureInput, MesureMouleUncheckedUpdateWithoutMesureInput>
  }

  export type MesureMouleUpdateManyWithWhereWithoutMesureInput = {
    where: MesureMouleScalarWhereInput
    data: XOR<MesureMouleUpdateManyMutationInput, MesureMouleUncheckedUpdateManyWithoutMesureInput>
  }

  export type MesureMouleScalarWhereInput = {
    AND?: MesureMouleScalarWhereInput | MesureMouleScalarWhereInput[]
    OR?: MesureMouleScalarWhereInput[]
    NOT?: MesureMouleScalarWhereInput | MesureMouleScalarWhereInput[]
    id?: IntFilter<"MesureMoule"> | number
    quota?: FloatFilter<"MesureMoule"> | number
    margeInf?: FloatFilter<"MesureMoule"> | number
    margeSup?: FloatFilter<"MesureMoule"> | number
    unite?: StringFilter<"MesureMoule"> | string
    mesureId?: IntFilter<"MesureMoule"> | number
    mouleId?: IntFilter<"MesureMoule"> | number
  }

  export type MesureMouleCreateWithoutMouleInput = {
    quota: number
    margeInf: number
    margeSup: number
    unite: string
    mesure: MesureCreateNestedOneWithoutMesuresMoulesInput
    pieces?: PieceCreateNestedManyWithoutMesureMouleInput
  }

  export type MesureMouleUncheckedCreateWithoutMouleInput = {
    id?: number
    quota: number
    margeInf: number
    margeSup: number
    unite: string
    mesureId: number
    pieces?: PieceUncheckedCreateNestedManyWithoutMesureMouleInput
  }

  export type MesureMouleCreateOrConnectWithoutMouleInput = {
    where: MesureMouleWhereUniqueInput
    create: XOR<MesureMouleCreateWithoutMouleInput, MesureMouleUncheckedCreateWithoutMouleInput>
  }

  export type MesureMouleCreateManyMouleInputEnvelope = {
    data: MesureMouleCreateManyMouleInput | MesureMouleCreateManyMouleInput[]
    skipDuplicates?: boolean
  }

  export type MesureMouleUpsertWithWhereUniqueWithoutMouleInput = {
    where: MesureMouleWhereUniqueInput
    update: XOR<MesureMouleUpdateWithoutMouleInput, MesureMouleUncheckedUpdateWithoutMouleInput>
    create: XOR<MesureMouleCreateWithoutMouleInput, MesureMouleUncheckedCreateWithoutMouleInput>
  }

  export type MesureMouleUpdateWithWhereUniqueWithoutMouleInput = {
    where: MesureMouleWhereUniqueInput
    data: XOR<MesureMouleUpdateWithoutMouleInput, MesureMouleUncheckedUpdateWithoutMouleInput>
  }

  export type MesureMouleUpdateManyWithWhereWithoutMouleInput = {
    where: MesureMouleScalarWhereInput
    data: XOR<MesureMouleUpdateManyMutationInput, MesureMouleUncheckedUpdateManyWithoutMouleInput>
  }

  export type MesureCreateWithoutMesuresMoulesInput = {
    reference: string
    dateMesure: Date | string
    taille?: string | null
  }

  export type MesureUncheckedCreateWithoutMesuresMoulesInput = {
    id?: number
    reference: string
    dateMesure: Date | string
    taille?: string | null
  }

  export type MesureCreateOrConnectWithoutMesuresMoulesInput = {
    where: MesureWhereUniqueInput
    create: XOR<MesureCreateWithoutMesuresMoulesInput, MesureUncheckedCreateWithoutMesuresMoulesInput>
  }

  export type MouleCreateWithoutMesuresMoulesInput = {
    reference: string
    nbPlateaux: number
  }

  export type MouleUncheckedCreateWithoutMesuresMoulesInput = {
    id?: number
    reference: string
    nbPlateaux: number
  }

  export type MouleCreateOrConnectWithoutMesuresMoulesInput = {
    where: MouleWhereUniqueInput
    create: XOR<MouleCreateWithoutMesuresMoulesInput, MouleUncheckedCreateWithoutMesuresMoulesInput>
  }

  export type PieceCreateWithoutMesureMouleInput = {
    numero: number
    valeurPlateau1: number
    valeurPlateau2?: number | null
  }

  export type PieceUncheckedCreateWithoutMesureMouleInput = {
    id?: number
    numero: number
    valeurPlateau1: number
    valeurPlateau2?: number | null
  }

  export type PieceCreateOrConnectWithoutMesureMouleInput = {
    where: PieceWhereUniqueInput
    create: XOR<PieceCreateWithoutMesureMouleInput, PieceUncheckedCreateWithoutMesureMouleInput>
  }

  export type PieceCreateManyMesureMouleInputEnvelope = {
    data: PieceCreateManyMesureMouleInput | PieceCreateManyMesureMouleInput[]
    skipDuplicates?: boolean
  }

  export type MesureUpsertWithoutMesuresMoulesInput = {
    update: XOR<MesureUpdateWithoutMesuresMoulesInput, MesureUncheckedUpdateWithoutMesuresMoulesInput>
    create: XOR<MesureCreateWithoutMesuresMoulesInput, MesureUncheckedCreateWithoutMesuresMoulesInput>
    where?: MesureWhereInput
  }

  export type MesureUpdateToOneWithWhereWithoutMesuresMoulesInput = {
    where?: MesureWhereInput
    data: XOR<MesureUpdateWithoutMesuresMoulesInput, MesureUncheckedUpdateWithoutMesuresMoulesInput>
  }

  export type MesureUpdateWithoutMesuresMoulesInput = {
    reference?: StringFieldUpdateOperationsInput | string
    dateMesure?: DateTimeFieldUpdateOperationsInput | Date | string
    taille?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MesureUncheckedUpdateWithoutMesuresMoulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    dateMesure?: DateTimeFieldUpdateOperationsInput | Date | string
    taille?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MouleUpsertWithoutMesuresMoulesInput = {
    update: XOR<MouleUpdateWithoutMesuresMoulesInput, MouleUncheckedUpdateWithoutMesuresMoulesInput>
    create: XOR<MouleCreateWithoutMesuresMoulesInput, MouleUncheckedCreateWithoutMesuresMoulesInput>
    where?: MouleWhereInput
  }

  export type MouleUpdateToOneWithWhereWithoutMesuresMoulesInput = {
    where?: MouleWhereInput
    data: XOR<MouleUpdateWithoutMesuresMoulesInput, MouleUncheckedUpdateWithoutMesuresMoulesInput>
  }

  export type MouleUpdateWithoutMesuresMoulesInput = {
    reference?: StringFieldUpdateOperationsInput | string
    nbPlateaux?: IntFieldUpdateOperationsInput | number
  }

  export type MouleUncheckedUpdateWithoutMesuresMoulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    nbPlateaux?: IntFieldUpdateOperationsInput | number
  }

  export type PieceUpsertWithWhereUniqueWithoutMesureMouleInput = {
    where: PieceWhereUniqueInput
    update: XOR<PieceUpdateWithoutMesureMouleInput, PieceUncheckedUpdateWithoutMesureMouleInput>
    create: XOR<PieceCreateWithoutMesureMouleInput, PieceUncheckedCreateWithoutMesureMouleInput>
  }

  export type PieceUpdateWithWhereUniqueWithoutMesureMouleInput = {
    where: PieceWhereUniqueInput
    data: XOR<PieceUpdateWithoutMesureMouleInput, PieceUncheckedUpdateWithoutMesureMouleInput>
  }

  export type PieceUpdateManyWithWhereWithoutMesureMouleInput = {
    where: PieceScalarWhereInput
    data: XOR<PieceUpdateManyMutationInput, PieceUncheckedUpdateManyWithoutMesureMouleInput>
  }

  export type PieceScalarWhereInput = {
    AND?: PieceScalarWhereInput | PieceScalarWhereInput[]
    OR?: PieceScalarWhereInput[]
    NOT?: PieceScalarWhereInput | PieceScalarWhereInput[]
    id?: IntFilter<"Piece"> | number
    numero?: IntFilter<"Piece"> | number
    valeurPlateau1?: FloatFilter<"Piece"> | number
    valeurPlateau2?: FloatNullableFilter<"Piece"> | number | null
    mesureMouleId?: IntFilter<"Piece"> | number
  }

  export type MesureMouleCreateWithoutPiecesInput = {
    quota: number
    margeInf: number
    margeSup: number
    unite: string
    mesure: MesureCreateNestedOneWithoutMesuresMoulesInput
    moule: MouleCreateNestedOneWithoutMesuresMoulesInput
  }

  export type MesureMouleUncheckedCreateWithoutPiecesInput = {
    id?: number
    quota: number
    margeInf: number
    margeSup: number
    unite: string
    mesureId: number
    mouleId: number
  }

  export type MesureMouleCreateOrConnectWithoutPiecesInput = {
    where: MesureMouleWhereUniqueInput
    create: XOR<MesureMouleCreateWithoutPiecesInput, MesureMouleUncheckedCreateWithoutPiecesInput>
  }

  export type MesureMouleUpsertWithoutPiecesInput = {
    update: XOR<MesureMouleUpdateWithoutPiecesInput, MesureMouleUncheckedUpdateWithoutPiecesInput>
    create: XOR<MesureMouleCreateWithoutPiecesInput, MesureMouleUncheckedCreateWithoutPiecesInput>
    where?: MesureMouleWhereInput
  }

  export type MesureMouleUpdateToOneWithWhereWithoutPiecesInput = {
    where?: MesureMouleWhereInput
    data: XOR<MesureMouleUpdateWithoutPiecesInput, MesureMouleUncheckedUpdateWithoutPiecesInput>
  }

  export type MesureMouleUpdateWithoutPiecesInput = {
    quota?: FloatFieldUpdateOperationsInput | number
    margeInf?: FloatFieldUpdateOperationsInput | number
    margeSup?: FloatFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    mesure?: MesureUpdateOneRequiredWithoutMesuresMoulesNestedInput
    moule?: MouleUpdateOneRequiredWithoutMesuresMoulesNestedInput
  }

  export type MesureMouleUncheckedUpdateWithoutPiecesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quota?: FloatFieldUpdateOperationsInput | number
    margeInf?: FloatFieldUpdateOperationsInput | number
    margeSup?: FloatFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    mesureId?: IntFieldUpdateOperationsInput | number
    mouleId?: IntFieldUpdateOperationsInput | number
  }

  export type MesureMouleCreateManyMesureInput = {
    id?: number
    quota: number
    margeInf: number
    margeSup: number
    unite: string
    mouleId: number
  }

  export type MesureMouleUpdateWithoutMesureInput = {
    quota?: FloatFieldUpdateOperationsInput | number
    margeInf?: FloatFieldUpdateOperationsInput | number
    margeSup?: FloatFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    moule?: MouleUpdateOneRequiredWithoutMesuresMoulesNestedInput
    pieces?: PieceUpdateManyWithoutMesureMouleNestedInput
  }

  export type MesureMouleUncheckedUpdateWithoutMesureInput = {
    id?: IntFieldUpdateOperationsInput | number
    quota?: FloatFieldUpdateOperationsInput | number
    margeInf?: FloatFieldUpdateOperationsInput | number
    margeSup?: FloatFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    mouleId?: IntFieldUpdateOperationsInput | number
    pieces?: PieceUncheckedUpdateManyWithoutMesureMouleNestedInput
  }

  export type MesureMouleUncheckedUpdateManyWithoutMesureInput = {
    id?: IntFieldUpdateOperationsInput | number
    quota?: FloatFieldUpdateOperationsInput | number
    margeInf?: FloatFieldUpdateOperationsInput | number
    margeSup?: FloatFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    mouleId?: IntFieldUpdateOperationsInput | number
  }

  export type MesureMouleCreateManyMouleInput = {
    id?: number
    quota: number
    margeInf: number
    margeSup: number
    unite: string
    mesureId: number
  }

  export type MesureMouleUpdateWithoutMouleInput = {
    quota?: FloatFieldUpdateOperationsInput | number
    margeInf?: FloatFieldUpdateOperationsInput | number
    margeSup?: FloatFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    mesure?: MesureUpdateOneRequiredWithoutMesuresMoulesNestedInput
    pieces?: PieceUpdateManyWithoutMesureMouleNestedInput
  }

  export type MesureMouleUncheckedUpdateWithoutMouleInput = {
    id?: IntFieldUpdateOperationsInput | number
    quota?: FloatFieldUpdateOperationsInput | number
    margeInf?: FloatFieldUpdateOperationsInput | number
    margeSup?: FloatFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    mesureId?: IntFieldUpdateOperationsInput | number
    pieces?: PieceUncheckedUpdateManyWithoutMesureMouleNestedInput
  }

  export type MesureMouleUncheckedUpdateManyWithoutMouleInput = {
    id?: IntFieldUpdateOperationsInput | number
    quota?: FloatFieldUpdateOperationsInput | number
    margeInf?: FloatFieldUpdateOperationsInput | number
    margeSup?: FloatFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    mesureId?: IntFieldUpdateOperationsInput | number
  }

  export type PieceCreateManyMesureMouleInput = {
    id?: number
    numero: number
    valeurPlateau1: number
    valeurPlateau2?: number | null
  }

  export type PieceUpdateWithoutMesureMouleInput = {
    numero?: IntFieldUpdateOperationsInput | number
    valeurPlateau1?: FloatFieldUpdateOperationsInput | number
    valeurPlateau2?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PieceUncheckedUpdateWithoutMesureMouleInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    valeurPlateau1?: FloatFieldUpdateOperationsInput | number
    valeurPlateau2?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PieceUncheckedUpdateManyWithoutMesureMouleInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    valeurPlateau1?: FloatFieldUpdateOperationsInput | number
    valeurPlateau2?: NullableFloatFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}