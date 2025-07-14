
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model NotificationSettings
 * 
 */
export type NotificationSettings = $Result.DefaultSelection<Prisma.$NotificationSettingsPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model Song
 * 
 */
export type Song = $Result.DefaultSelection<Prisma.$SongPayload>
/**
 * Model Listening
 * 
 */
export type Listening = $Result.DefaultSelection<Prisma.$ListeningPayload>
/**
 * Model Recommendation
 * 
 */
export type Recommendation = $Result.DefaultSelection<Prisma.$RecommendationPayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model RecommendationPlaylist
 * 
 */
export type RecommendationPlaylist = $Result.DefaultSelection<Prisma.$RecommendationPlaylistPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PlaylistType: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

export type PlaylistType = (typeof PlaylistType)[keyof typeof PlaylistType]


export const TokenType: {
  EMAIL_VERIFY: 'EMAIL_VERIFY',
  PASSWORD_RESET: 'PASSWORD_RESET',
  DEACTIVATE_ACCOUNT: 'DEACTIVATE_ACCOUNT'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]


export const SongStatus: {
  IN_COMPLETED: 'IN_COMPLETED',
  MODERATION: 'MODERATION',
  ON_COMPLETED: 'ON_COMPLETED'
};

export type SongStatus = (typeof SongStatus)[keyof typeof SongStatus]

}

export type PlaylistType = $Enums.PlaylistType

export const PlaylistType: typeof $Enums.PlaylistType

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

export type SongStatus = $Enums.SongStatus

export const SongStatus: typeof $Enums.SongStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationSettings`: Exposes CRUD operations for the **NotificationSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationSettings
    * const notificationSettings = await prisma.notificationSettings.findMany()
    * ```
    */
  get notificationSettings(): Prisma.NotificationSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.song`: Exposes CRUD operations for the **Song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.SongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listening`: Exposes CRUD operations for the **Listening** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listenings
    * const listenings = await prisma.listening.findMany()
    * ```
    */
  get listening(): Prisma.ListeningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommendation`: Exposes CRUD operations for the **Recommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommendations
    * const recommendations = await prisma.recommendation.findMany()
    * ```
    */
  get recommendation(): Prisma.RecommendationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommendationPlaylist`: Exposes CRUD operations for the **RecommendationPlaylist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecommendationPlaylists
    * const recommendationPlaylists = await prisma.recommendationPlaylist.findMany()
    * ```
    */
  get recommendationPlaylist(): Prisma.RecommendationPlaylistDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    User: 'User',
    Notification: 'Notification',
    NotificationSettings: 'NotificationSettings',
    Token: 'Token',
    Song: 'Song',
    Listening: 'Listening',
    Recommendation: 'Recommendation',
    Artist: 'Artist',
    Album: 'Album',
    Playlist: 'Playlist',
    RecommendationPlaylist: 'RecommendationPlaylist'
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
      modelProps: "user" | "notification" | "notificationSettings" | "token" | "song" | "listening" | "recommendation" | "artist" | "album" | "playlist" | "recommendationPlaylist"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      NotificationSettings: {
        payload: Prisma.$NotificationSettingsPayload<ExtArgs>
        fields: Prisma.NotificationSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          findFirst: {
            args: Prisma.NotificationSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          findMany: {
            args: Prisma.NotificationSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>[]
          }
          create: {
            args: Prisma.NotificationSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          createMany: {
            args: Prisma.NotificationSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>[]
          }
          delete: {
            args: Prisma.NotificationSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          update: {
            args: Prisma.NotificationSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>[]
          }
          upsert: {
            args: Prisma.NotificationSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          aggregate: {
            args: Prisma.NotificationSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationSettings>
          }
          groupBy: {
            args: Prisma.NotificationSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationSettingsCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      Song: {
        payload: Prisma.$SongPayload<ExtArgs>
        fields: Prisma.SongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findFirst: {
            args: Prisma.SongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findMany: {
            args: Prisma.SongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          create: {
            args: Prisma.SongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          createMany: {
            args: Prisma.SongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          delete: {
            args: Prisma.SongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          update: {
            args: Prisma.SongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          deleteMany: {
            args: Prisma.SongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          upsert: {
            args: Prisma.SongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          aggregate: {
            args: Prisma.SongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSong>
          }
          groupBy: {
            args: Prisma.SongGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongCountArgs<ExtArgs>
            result: $Utils.Optional<SongCountAggregateOutputType> | number
          }
        }
      }
      Listening: {
        payload: Prisma.$ListeningPayload<ExtArgs>
        fields: Prisma.ListeningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListeningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListeningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningPayload>
          }
          findFirst: {
            args: Prisma.ListeningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListeningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningPayload>
          }
          findMany: {
            args: Prisma.ListeningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningPayload>[]
          }
          create: {
            args: Prisma.ListeningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningPayload>
          }
          createMany: {
            args: Prisma.ListeningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListeningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningPayload>[]
          }
          delete: {
            args: Prisma.ListeningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningPayload>
          }
          update: {
            args: Prisma.ListeningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningPayload>
          }
          deleteMany: {
            args: Prisma.ListeningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListeningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListeningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningPayload>[]
          }
          upsert: {
            args: Prisma.ListeningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListeningPayload>
          }
          aggregate: {
            args: Prisma.ListeningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListening>
          }
          groupBy: {
            args: Prisma.ListeningGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListeningGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListeningCountArgs<ExtArgs>
            result: $Utils.Optional<ListeningCountAggregateOutputType> | number
          }
        }
      }
      Recommendation: {
        payload: Prisma.$RecommendationPayload<ExtArgs>
        fields: Prisma.RecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findFirst: {
            args: Prisma.RecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findMany: {
            args: Prisma.RecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          create: {
            args: Prisma.RecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          createMany: {
            args: Prisma.RecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          delete: {
            args: Prisma.RecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          update: {
            args: Prisma.RecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecommendationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          upsert: {
            args: Prisma.RecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          aggregate: {
            args: Prisma.RecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendation>
          }
          groupBy: {
            args: Prisma.RecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationCountAggregateOutputType> | number
          }
        }
      }
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      RecommendationPlaylist: {
        payload: Prisma.$RecommendationPlaylistPayload<ExtArgs>
        fields: Prisma.RecommendationPlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationPlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationPlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPlaylistPayload>
          }
          findFirst: {
            args: Prisma.RecommendationPlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationPlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPlaylistPayload>
          }
          findMany: {
            args: Prisma.RecommendationPlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPlaylistPayload>[]
          }
          create: {
            args: Prisma.RecommendationPlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPlaylistPayload>
          }
          createMany: {
            args: Prisma.RecommendationPlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationPlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPlaylistPayload>[]
          }
          delete: {
            args: Prisma.RecommendationPlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPlaylistPayload>
          }
          update: {
            args: Prisma.RecommendationPlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPlaylistPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationPlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationPlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecommendationPlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPlaylistPayload>[]
          }
          upsert: {
            args: Prisma.RecommendationPlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPlaylistPayload>
          }
          aggregate: {
            args: Prisma.RecommendationPlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendationPlaylist>
          }
          groupBy: {
            args: Prisma.RecommendationPlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationPlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationPlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationPlaylistCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    notification?: NotificationOmit
    notificationSettings?: NotificationSettingsOmit
    token?: TokenOmit
    song?: SongOmit
    listening?: ListeningOmit
    recommendation?: RecommendationOmit
    artist?: ArtistOmit
    album?: AlbumOmit
    playlist?: PlaylistOmit
    recommendationPlaylist?: RecommendationPlaylistOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tokens: number
    notifications: number
    favoriteMusic: number
    ownMusic: number
    favoriteArtists: number
    listenings: number
    recommendations: number
    mixes: number
    myPlaylists: number
    favoritePlaylists: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    favoriteMusic?: boolean | UserCountOutputTypeCountFavoriteMusicArgs
    ownMusic?: boolean | UserCountOutputTypeCountOwnMusicArgs
    favoriteArtists?: boolean | UserCountOutputTypeCountFavoriteArtistsArgs
    listenings?: boolean | UserCountOutputTypeCountListeningsArgs
    recommendations?: boolean | UserCountOutputTypeCountRecommendationsArgs
    mixes?: boolean | UserCountOutputTypeCountMixesArgs
    myPlaylists?: boolean | UserCountOutputTypeCountMyPlaylistsArgs
    favoritePlaylists?: boolean | UserCountOutputTypeCountFavoritePlaylistsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteMusicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnMusicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListeningWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMixesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationPlaylistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMyPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritePlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }


  /**
   * Count Type SongCountOutputType
   */

  export type SongCountOutputType = {
    artists: number
    users: number
    playlists: number
    listenings: number
    recommendations: number
  }

  export type SongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artists?: boolean | SongCountOutputTypeCountArtistsArgs
    users?: boolean | SongCountOutputTypeCountUsersArgs
    playlists?: boolean | SongCountOutputTypeCountPlaylistsArgs
    listenings?: boolean | SongCountOutputTypeCountListeningsArgs
    recommendations?: boolean | SongCountOutputTypeCountRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCountOutputType
     */
    select?: SongCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountListeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListeningWhereInput
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }


  /**
   * Count Type RecommendationCountOutputType
   */

  export type RecommendationCountOutputType = {
    playlists: number
  }

  export type RecommendationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlists?: boolean | RecommendationCountOutputTypeCountPlaylistsArgs
  }

  // Custom InputTypes
  /**
   * RecommendationCountOutputType without action
   */
  export type RecommendationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationCountOutputType
     */
    select?: RecommendationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecommendationCountOutputType without action
   */
  export type RecommendationCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationPlaylistWhereInput
  }


  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    songs: number
    albums: number
    followers: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | ArtistCountOutputTypeCountSongsArgs
    albums?: boolean | ArtistCountOutputTypeCountAlbumsArgs
    followers?: boolean | ArtistCountOutputTypeCountFollowersArgs
  }

  // Custom InputTypes
  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    songs: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | AlbumCountOutputTypeCountSongsArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    songs: number
    users: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | PlaylistCountOutputTypeCountSongsArgs
    users?: boolean | PlaylistCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type RecommendationPlaylistCountOutputType
   */

  export type RecommendationPlaylistCountOutputType = {
    recommendations: number
  }

  export type RecommendationPlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommendations?: boolean | RecommendationPlaylistCountOutputTypeCountRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * RecommendationPlaylistCountOutputType without action
   */
  export type RecommendationPlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationPlaylistCountOutputType
     */
    select?: RecommendationPlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecommendationPlaylistCountOutputType without action
   */
  export type RecommendationPlaylistCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    bio: string | null
    dateOfBirth: Date | null
    avatar: string | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    bio: string | null
    dateOfBirth: Date | null
    avatar: string | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    username: number
    firstName: number
    lastName: number
    bio: number
    dateOfBirth: number
    avatar: number
    isEmailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    firstName?: true
    lastName?: true
    bio?: true
    dateOfBirth?: true
    avatar?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    firstName?: true
    lastName?: true
    bio?: true
    dateOfBirth?: true
    avatar?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    firstName?: true
    lastName?: true
    bio?: true
    dateOfBirth?: true
    avatar?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio: string | null
    dateOfBirth: Date | null
    avatar: string | null
    isEmailVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    bio?: boolean
    dateOfBirth?: boolean
    avatar?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tokens?: boolean | User$tokensArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    notificationSettings?: boolean | User$notificationSettingsArgs<ExtArgs>
    favoriteMusic?: boolean | User$favoriteMusicArgs<ExtArgs>
    ownMusic?: boolean | User$ownMusicArgs<ExtArgs>
    favoriteArtists?: boolean | User$favoriteArtistsArgs<ExtArgs>
    listenings?: boolean | User$listeningsArgs<ExtArgs>
    recommendations?: boolean | User$recommendationsArgs<ExtArgs>
    mixes?: boolean | User$mixesArgs<ExtArgs>
    myPlaylists?: boolean | User$myPlaylistsArgs<ExtArgs>
    favoritePlaylists?: boolean | User$favoritePlaylistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    bio?: boolean
    dateOfBirth?: boolean
    avatar?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    bio?: boolean
    dateOfBirth?: boolean
    avatar?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    bio?: boolean
    dateOfBirth?: boolean
    avatar?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "username" | "firstName" | "lastName" | "bio" | "dateOfBirth" | "avatar" | "isEmailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | User$tokensArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    notificationSettings?: boolean | User$notificationSettingsArgs<ExtArgs>
    favoriteMusic?: boolean | User$favoriteMusicArgs<ExtArgs>
    ownMusic?: boolean | User$ownMusicArgs<ExtArgs>
    favoriteArtists?: boolean | User$favoriteArtistsArgs<ExtArgs>
    listenings?: boolean | User$listeningsArgs<ExtArgs>
    recommendations?: boolean | User$recommendationsArgs<ExtArgs>
    mixes?: boolean | User$mixesArgs<ExtArgs>
    myPlaylists?: boolean | User$myPlaylistsArgs<ExtArgs>
    favoritePlaylists?: boolean | User$favoritePlaylistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tokens: Prisma.$TokenPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      notificationSettings: Prisma.$NotificationSettingsPayload<ExtArgs> | null
      favoriteMusic: Prisma.$SongPayload<ExtArgs>[]
      ownMusic: Prisma.$SongPayload<ExtArgs>[]
      favoriteArtists: Prisma.$ArtistPayload<ExtArgs>[]
      listenings: Prisma.$ListeningPayload<ExtArgs>[]
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
      mixes: Prisma.$RecommendationPlaylistPayload<ExtArgs>[]
      myPlaylists: Prisma.$PlaylistPayload<ExtArgs>[]
      favoritePlaylists: Prisma.$PlaylistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      username: string
      firstName: string
      lastName: string
      bio: string | null
      dateOfBirth: Date | null
      avatar: string | null
      isEmailVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificationSettings<T extends User$notificationSettingsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationSettingsArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    favoriteMusic<T extends User$favoriteMusicArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteMusicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownMusic<T extends User$ownMusicArgs<ExtArgs> = {}>(args?: Subset<T, User$ownMusicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoriteArtists<T extends User$favoriteArtistsArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteArtistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listenings<T extends User$listeningsArgs<ExtArgs> = {}>(args?: Subset<T, User$listeningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommendations<T extends User$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, User$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mixes<T extends User$mixesArgs<ExtArgs> = {}>(args?: Subset<T, User$mixesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    myPlaylists<T extends User$myPlaylistsArgs<ExtArgs> = {}>(args?: Subset<T, User$myPlaylistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritePlaylists<T extends User$favoritePlaylistsArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritePlaylistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.notificationSettings
   */
  export type User$notificationSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    where?: NotificationSettingsWhereInput
  }

  /**
   * User.favoriteMusic
   */
  export type User$favoriteMusicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * User.ownMusic
   */
  export type User$ownMusicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * User.favoriteArtists
   */
  export type User$favoriteArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    cursor?: ArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * User.listenings
   */
  export type User$listeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listening
     */
    select?: ListeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listening
     */
    omit?: ListeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningInclude<ExtArgs> | null
    where?: ListeningWhereInput
    orderBy?: ListeningOrderByWithRelationInput | ListeningOrderByWithRelationInput[]
    cursor?: ListeningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListeningScalarFieldEnum | ListeningScalarFieldEnum[]
  }

  /**
   * User.recommendations
   */
  export type User$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * User.mixes
   */
  export type User$mixesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationPlaylist
     */
    select?: RecommendationPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationPlaylist
     */
    omit?: RecommendationPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationPlaylistInclude<ExtArgs> | null
    where?: RecommendationPlaylistWhereInput
    orderBy?: RecommendationPlaylistOrderByWithRelationInput | RecommendationPlaylistOrderByWithRelationInput[]
    cursor?: RecommendationPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationPlaylistScalarFieldEnum | RecommendationPlaylistScalarFieldEnum[]
  }

  /**
   * User.myPlaylists
   */
  export type User$myPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * User.favoritePlaylists
   */
  export type User$favoritePlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    message: string | null
    isRead: boolean | null
    userAvatar: string | null
    userId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    message: string | null
    isRead: boolean | null
    userAvatar: string | null
    userId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    message: number
    isRead: number
    userAvatar: number
    userId: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    message?: true
    isRead?: true
    userAvatar?: true
    userId?: true
    createAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    message?: true
    isRead?: true
    userAvatar?: true
    userId?: true
    createAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    message?: true
    isRead?: true
    userAvatar?: true
    userId?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    message: string
    isRead: boolean
    userAvatar: string | null
    userId: string
    createAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    isRead?: boolean
    userAvatar?: boolean
    userId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    isRead?: boolean
    userAvatar?: boolean
    userId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    isRead?: boolean
    userAvatar?: boolean
    userId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    message?: boolean
    isRead?: boolean
    userAvatar?: boolean
    userId?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "isRead" | "userAvatar" | "userId" | "createAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      isRead: boolean
      userAvatar: string | null
      userId: string
      createAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly userAvatar: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly createAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model NotificationSettings
   */

  export type AggregateNotificationSettings = {
    _count: NotificationSettingsCountAggregateOutputType | null
    _min: NotificationSettingsMinAggregateOutputType | null
    _max: NotificationSettingsMaxAggregateOutputType | null
  }

  export type NotificationSettingsMinAggregateOutputType = {
    id: string | null
    webNotifications: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationSettingsMaxAggregateOutputType = {
    id: string | null
    webNotifications: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationSettingsCountAggregateOutputType = {
    id: number
    webNotifications: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationSettingsMinAggregateInputType = {
    id?: true
    webNotifications?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationSettingsMaxAggregateInputType = {
    id?: true
    webNotifications?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationSettingsCountAggregateInputType = {
    id?: true
    webNotifications?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationSettings to aggregate.
     */
    where?: NotificationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingsOrderByWithRelationInput | NotificationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationSettings
    **/
    _count?: true | NotificationSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationSettingsMaxAggregateInputType
  }

  export type GetNotificationSettingsAggregateType<T extends NotificationSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationSettings[P]>
      : GetScalarType<T[P], AggregateNotificationSettings[P]>
  }




  export type NotificationSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationSettingsWhereInput
    orderBy?: NotificationSettingsOrderByWithAggregationInput | NotificationSettingsOrderByWithAggregationInput[]
    by: NotificationSettingsScalarFieldEnum[] | NotificationSettingsScalarFieldEnum
    having?: NotificationSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationSettingsCountAggregateInputType | true
    _min?: NotificationSettingsMinAggregateInputType
    _max?: NotificationSettingsMaxAggregateInputType
  }

  export type NotificationSettingsGroupByOutputType = {
    id: string
    webNotifications: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: NotificationSettingsCountAggregateOutputType | null
    _min: NotificationSettingsMinAggregateOutputType | null
    _max: NotificationSettingsMaxAggregateOutputType | null
  }

  type GetNotificationSettingsGroupByPayload<T extends NotificationSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationSettingsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webNotifications?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationSettings"]>

  export type NotificationSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webNotifications?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationSettings"]>

  export type NotificationSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webNotifications?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationSettings"]>

  export type NotificationSettingsSelectScalar = {
    id?: boolean
    webNotifications?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "webNotifications" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["notificationSettings"]>
  export type NotificationSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      webNotifications: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notificationSettings"]>
    composites: {}
  }

  type NotificationSettingsGetPayload<S extends boolean | null | undefined | NotificationSettingsDefaultArgs> = $Result.GetResult<Prisma.$NotificationSettingsPayload, S>

  type NotificationSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationSettingsCountAggregateInputType | true
    }

  export interface NotificationSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationSettings'], meta: { name: 'NotificationSettings' } }
    /**
     * Find zero or one NotificationSettings that matches the filter.
     * @param {NotificationSettingsFindUniqueArgs} args - Arguments to find a NotificationSettings
     * @example
     * // Get one NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationSettingsFindUniqueArgs>(args: SelectSubset<T, NotificationSettingsFindUniqueArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationSettingsFindUniqueOrThrowArgs} args - Arguments to find a NotificationSettings
     * @example
     * // Get one NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsFindFirstArgs} args - Arguments to find a NotificationSettings
     * @example
     * // Get one NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationSettingsFindFirstArgs>(args?: SelectSubset<T, NotificationSettingsFindFirstArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsFindFirstOrThrowArgs} args - Arguments to find a NotificationSettings
     * @example
     * // Get one NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findMany()
     * 
     * // Get first 10 NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationSettingsWithIdOnly = await prisma.notificationSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationSettingsFindManyArgs>(args?: SelectSubset<T, NotificationSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationSettings.
     * @param {NotificationSettingsCreateArgs} args - Arguments to create a NotificationSettings.
     * @example
     * // Create one NotificationSettings
     * const NotificationSettings = await prisma.notificationSettings.create({
     *   data: {
     *     // ... data to create a NotificationSettings
     *   }
     * })
     * 
     */
    create<T extends NotificationSettingsCreateArgs>(args: SelectSubset<T, NotificationSettingsCreateArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationSettings.
     * @param {NotificationSettingsCreateManyArgs} args - Arguments to create many NotificationSettings.
     * @example
     * // Create many NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationSettingsCreateManyArgs>(args?: SelectSubset<T, NotificationSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationSettings and returns the data saved in the database.
     * @param {NotificationSettingsCreateManyAndReturnArgs} args - Arguments to create many NotificationSettings.
     * @example
     * // Create many NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationSettings and only return the `id`
     * const notificationSettingsWithIdOnly = await prisma.notificationSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationSettings.
     * @param {NotificationSettingsDeleteArgs} args - Arguments to delete one NotificationSettings.
     * @example
     * // Delete one NotificationSettings
     * const NotificationSettings = await prisma.notificationSettings.delete({
     *   where: {
     *     // ... filter to delete one NotificationSettings
     *   }
     * })
     * 
     */
    delete<T extends NotificationSettingsDeleteArgs>(args: SelectSubset<T, NotificationSettingsDeleteArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationSettings.
     * @param {NotificationSettingsUpdateArgs} args - Arguments to update one NotificationSettings.
     * @example
     * // Update one NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationSettingsUpdateArgs>(args: SelectSubset<T, NotificationSettingsUpdateArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationSettings.
     * @param {NotificationSettingsDeleteManyArgs} args - Arguments to filter NotificationSettings to delete.
     * @example
     * // Delete a few NotificationSettings
     * const { count } = await prisma.notificationSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationSettingsDeleteManyArgs>(args?: SelectSubset<T, NotificationSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationSettingsUpdateManyArgs>(args: SelectSubset<T, NotificationSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationSettings and returns the data updated in the database.
     * @param {NotificationSettingsUpdateManyAndReturnArgs} args - Arguments to update many NotificationSettings.
     * @example
     * // Update many NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationSettings and only return the `id`
     * const notificationSettingsWithIdOnly = await prisma.notificationSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationSettings.
     * @param {NotificationSettingsUpsertArgs} args - Arguments to update or create a NotificationSettings.
     * @example
     * // Update or create a NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.upsert({
     *   create: {
     *     // ... data to create a NotificationSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationSettings we want to update
     *   }
     * })
     */
    upsert<T extends NotificationSettingsUpsertArgs>(args: SelectSubset<T, NotificationSettingsUpsertArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsCountArgs} args - Arguments to filter NotificationSettings to count.
     * @example
     * // Count the number of NotificationSettings
     * const count = await prisma.notificationSettings.count({
     *   where: {
     *     // ... the filter for the NotificationSettings we want to count
     *   }
     * })
    **/
    count<T extends NotificationSettingsCountArgs>(
      args?: Subset<T, NotificationSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationSettingsAggregateArgs>(args: Subset<T, NotificationSettingsAggregateArgs>): Prisma.PrismaPromise<GetNotificationSettingsAggregateType<T>>

    /**
     * Group by NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsGroupByArgs} args - Group by arguments.
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
      T extends NotificationSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationSettingsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationSettings model
   */
  readonly fields: NotificationSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NotificationSettings model
   */
  interface NotificationSettingsFieldRefs {
    readonly id: FieldRef<"NotificationSettings", 'String'>
    readonly webNotifications: FieldRef<"NotificationSettings", 'Boolean'>
    readonly userId: FieldRef<"NotificationSettings", 'String'>
    readonly createdAt: FieldRef<"NotificationSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"NotificationSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationSettings findUnique
   */
  export type NotificationSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where: NotificationSettingsWhereUniqueInput
  }

  /**
   * NotificationSettings findUniqueOrThrow
   */
  export type NotificationSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where: NotificationSettingsWhereUniqueInput
  }

  /**
   * NotificationSettings findFirst
   */
  export type NotificationSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where?: NotificationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingsOrderByWithRelationInput | NotificationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSettings.
     */
    cursor?: NotificationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSettings.
     */
    distinct?: NotificationSettingsScalarFieldEnum | NotificationSettingsScalarFieldEnum[]
  }

  /**
   * NotificationSettings findFirstOrThrow
   */
  export type NotificationSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where?: NotificationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingsOrderByWithRelationInput | NotificationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSettings.
     */
    cursor?: NotificationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSettings.
     */
    distinct?: NotificationSettingsScalarFieldEnum | NotificationSettingsScalarFieldEnum[]
  }

  /**
   * NotificationSettings findMany
   */
  export type NotificationSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where?: NotificationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingsOrderByWithRelationInput | NotificationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationSettings.
     */
    cursor?: NotificationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    distinct?: NotificationSettingsScalarFieldEnum | NotificationSettingsScalarFieldEnum[]
  }

  /**
   * NotificationSettings create
   */
  export type NotificationSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationSettings.
     */
    data: XOR<NotificationSettingsCreateInput, NotificationSettingsUncheckedCreateInput>
  }

  /**
   * NotificationSettings createMany
   */
  export type NotificationSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationSettings.
     */
    data: NotificationSettingsCreateManyInput | NotificationSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationSettings createManyAndReturn
   */
  export type NotificationSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationSettings.
     */
    data: NotificationSettingsCreateManyInput | NotificationSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationSettings update
   */
  export type NotificationSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationSettings.
     */
    data: XOR<NotificationSettingsUpdateInput, NotificationSettingsUncheckedUpdateInput>
    /**
     * Choose, which NotificationSettings to update.
     */
    where: NotificationSettingsWhereUniqueInput
  }

  /**
   * NotificationSettings updateMany
   */
  export type NotificationSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationSettings.
     */
    data: XOR<NotificationSettingsUpdateManyMutationInput, NotificationSettingsUncheckedUpdateManyInput>
    /**
     * Filter which NotificationSettings to update
     */
    where?: NotificationSettingsWhereInput
    /**
     * Limit how many NotificationSettings to update.
     */
    limit?: number
  }

  /**
   * NotificationSettings updateManyAndReturn
   */
  export type NotificationSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * The data used to update NotificationSettings.
     */
    data: XOR<NotificationSettingsUpdateManyMutationInput, NotificationSettingsUncheckedUpdateManyInput>
    /**
     * Filter which NotificationSettings to update
     */
    where?: NotificationSettingsWhereInput
    /**
     * Limit how many NotificationSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationSettings upsert
   */
  export type NotificationSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationSettings to update in case it exists.
     */
    where: NotificationSettingsWhereUniqueInput
    /**
     * In case the NotificationSettings found by the `where` argument doesn't exist, create a new NotificationSettings with this data.
     */
    create: XOR<NotificationSettingsCreateInput, NotificationSettingsUncheckedCreateInput>
    /**
     * In case the NotificationSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationSettingsUpdateInput, NotificationSettingsUncheckedUpdateInput>
  }

  /**
   * NotificationSettings delete
   */
  export type NotificationSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
    /**
     * Filter which NotificationSettings to delete.
     */
    where: NotificationSettingsWhereUniqueInput
  }

  /**
   * NotificationSettings deleteMany
   */
  export type NotificationSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationSettings to delete
     */
    where?: NotificationSettingsWhereInput
    /**
     * Limit how many NotificationSettings to delete.
     */
    limit?: number
  }

  /**
   * NotificationSettings without action
   */
  export type NotificationSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingsInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    type: $Enums.TokenType | null
    expiresIn: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    type: $Enums.TokenType | null
    expiresIn: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    token: number
    type: number
    expiresIn: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expiresIn?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expiresIn?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expiresIn?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "type" | "expiresIn" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      type: $Enums.TokenType
      expiresIn: Date
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
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
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly token: FieldRef<"Token", 'String'>
    readonly type: FieldRef<"Token", 'TokenType'>
    readonly expiresIn: FieldRef<"Token", 'DateTime'>
    readonly userId: FieldRef<"Token", 'String'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly updatedAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model Song
   */

  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongAvgAggregateOutputType = {
    duration: number | null
  }

  export type SongSumAggregateOutputType = {
    duration: number | null
  }

  export type SongMinAggregateOutputType = {
    id: string | null
    title: string | null
    albumId: string | null
    duration: number | null
    audioUrl: string | null
    status: $Enums.SongStatus | null
    coverUrl: string | null
    uploaderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SongMaxAggregateOutputType = {
    id: string | null
    title: string | null
    albumId: string | null
    duration: number | null
    audioUrl: string | null
    status: $Enums.SongStatus | null
    coverUrl: string | null
    uploaderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    title: number
    albumId: number
    duration: number
    audioUrl: number
    status: number
    genres: number
    lyrics: number
    coverUrl: number
    uploaderId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SongAvgAggregateInputType = {
    duration?: true
  }

  export type SongSumAggregateInputType = {
    duration?: true
  }

  export type SongMinAggregateInputType = {
    id?: true
    title?: true
    albumId?: true
    duration?: true
    audioUrl?: true
    status?: true
    coverUrl?: true
    uploaderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    title?: true
    albumId?: true
    duration?: true
    audioUrl?: true
    status?: true
    coverUrl?: true
    uploaderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    title?: true
    albumId?: true
    duration?: true
    audioUrl?: true
    status?: true
    genres?: true
    lyrics?: true
    coverUrl?: true
    uploaderId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Song to aggregate.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type SongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
    orderBy?: SongOrderByWithAggregationInput | SongOrderByWithAggregationInput[]
    by: SongScalarFieldEnum[] | SongScalarFieldEnum
    having?: SongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _avg?: SongAvgAggregateInputType
    _sum?: SongSumAggregateInputType
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }

  export type SongGroupByOutputType = {
    id: string
    title: string
    albumId: string | null
    duration: number
    audioUrl: string
    status: $Enums.SongStatus
    genres: string[]
    lyrics: JsonValue | null
    coverUrl: string | null
    uploaderId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type SongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    albumId?: boolean
    duration?: boolean
    audioUrl?: boolean
    status?: boolean
    genres?: boolean
    lyrics?: boolean
    coverUrl?: boolean
    uploaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artists?: boolean | Song$artistsArgs<ExtArgs>
    album?: boolean | Song$albumArgs<ExtArgs>
    users?: boolean | Song$usersArgs<ExtArgs>
    uploader?: boolean | Song$uploaderArgs<ExtArgs>
    playlists?: boolean | Song$playlistsArgs<ExtArgs>
    listenings?: boolean | Song$listeningsArgs<ExtArgs>
    recommendations?: boolean | Song$recommendationsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    albumId?: boolean
    duration?: boolean
    audioUrl?: boolean
    status?: boolean
    genres?: boolean
    lyrics?: boolean
    coverUrl?: boolean
    uploaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    album?: boolean | Song$albumArgs<ExtArgs>
    uploader?: boolean | Song$uploaderArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    albumId?: boolean
    duration?: boolean
    audioUrl?: boolean
    status?: boolean
    genres?: boolean
    lyrics?: boolean
    coverUrl?: boolean
    uploaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    album?: boolean | Song$albumArgs<ExtArgs>
    uploader?: boolean | Song$uploaderArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectScalar = {
    id?: boolean
    title?: boolean
    albumId?: boolean
    duration?: boolean
    audioUrl?: boolean
    status?: boolean
    genres?: boolean
    lyrics?: boolean
    coverUrl?: boolean
    uploaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "albumId" | "duration" | "audioUrl" | "status" | "genres" | "lyrics" | "coverUrl" | "uploaderId" | "createdAt" | "updatedAt", ExtArgs["result"]["song"]>
  export type SongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artists?: boolean | Song$artistsArgs<ExtArgs>
    album?: boolean | Song$albumArgs<ExtArgs>
    users?: boolean | Song$usersArgs<ExtArgs>
    uploader?: boolean | Song$uploaderArgs<ExtArgs>
    playlists?: boolean | Song$playlistsArgs<ExtArgs>
    listenings?: boolean | Song$listeningsArgs<ExtArgs>
    recommendations?: boolean | Song$recommendationsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | Song$albumArgs<ExtArgs>
    uploader?: boolean | Song$uploaderArgs<ExtArgs>
  }
  export type SongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | Song$albumArgs<ExtArgs>
    uploader?: boolean | Song$uploaderArgs<ExtArgs>
  }

  export type $SongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Song"
    objects: {
      artists: Prisma.$ArtistPayload<ExtArgs>[]
      album: Prisma.$AlbumPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
      uploader: Prisma.$UserPayload<ExtArgs> | null
      playlists: Prisma.$PlaylistPayload<ExtArgs>[]
      listenings: Prisma.$ListeningPayload<ExtArgs>[]
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      albumId: string | null
      duration: number
      audioUrl: string
      status: $Enums.SongStatus
      genres: string[]
      lyrics: Prisma.JsonValue | null
      coverUrl: string | null
      uploaderId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["song"]>
    composites: {}
  }

  type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = $Result.GetResult<Prisma.$SongPayload, S>

  type SongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SongCountAggregateInputType | true
    }

  export interface SongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Song'], meta: { name: 'Song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {SongFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongFindUniqueArgs>(args: SelectSubset<T, SongFindUniqueArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Song that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SongFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs>(args: SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongFindFirstArgs>(args?: SelectSubset<T, SongFindFirstArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs>(args?: SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SongFindManyArgs>(args?: SelectSubset<T, SongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Song.
     * @param {SongCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
     */
    create<T extends SongCreateArgs>(args: SelectSubset<T, SongCreateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Songs.
     * @param {SongCreateManyArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SongCreateManyArgs>(args?: SelectSubset<T, SongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Songs and returns the data saved in the database.
     * @param {SongCreateManyAndReturnArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SongCreateManyAndReturnArgs>(args?: SelectSubset<T, SongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Song.
     * @param {SongDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
     */
    delete<T extends SongDeleteArgs>(args: SelectSubset<T, SongDeleteArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Song.
     * @param {SongUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SongUpdateArgs>(args: SelectSubset<T, SongUpdateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Songs.
     * @param {SongDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SongDeleteManyArgs>(args?: SelectSubset<T, SongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SongUpdateManyArgs>(args: SelectSubset<T, SongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs and returns the data updated in the database.
     * @param {SongUpdateManyAndReturnArgs} args - Arguments to update many Songs.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.updateManyAndReturn({
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
    updateManyAndReturn<T extends SongUpdateManyAndReturnArgs>(args: SelectSubset<T, SongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Song.
     * @param {SongUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
     */
    upsert<T extends SongUpsertArgs>(args: SelectSubset<T, SongUpsertArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongCountArgs>(
      args?: Subset<T, SongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGroupByArgs} args - Group by arguments.
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
      T extends SongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongGroupByArgs['orderBy'] }
        : { orderBy?: SongGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Song model
   */
  readonly fields: SongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artists<T extends Song$artistsArgs<ExtArgs> = {}>(args?: Subset<T, Song$artistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    album<T extends Song$albumArgs<ExtArgs> = {}>(args?: Subset<T, Song$albumArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends Song$usersArgs<ExtArgs> = {}>(args?: Subset<T, Song$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uploader<T extends Song$uploaderArgs<ExtArgs> = {}>(args?: Subset<T, Song$uploaderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    playlists<T extends Song$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, Song$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listenings<T extends Song$listeningsArgs<ExtArgs> = {}>(args?: Subset<T, Song$listeningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommendations<T extends Song$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Song$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Song model
   */
  interface SongFieldRefs {
    readonly id: FieldRef<"Song", 'String'>
    readonly title: FieldRef<"Song", 'String'>
    readonly albumId: FieldRef<"Song", 'String'>
    readonly duration: FieldRef<"Song", 'Float'>
    readonly audioUrl: FieldRef<"Song", 'String'>
    readonly status: FieldRef<"Song", 'SongStatus'>
    readonly genres: FieldRef<"Song", 'String[]'>
    readonly lyrics: FieldRef<"Song", 'Json'>
    readonly coverUrl: FieldRef<"Song", 'String'>
    readonly uploaderId: FieldRef<"Song", 'String'>
    readonly createdAt: FieldRef<"Song", 'DateTime'>
    readonly updatedAt: FieldRef<"Song", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Song findUnique
   */
  export type SongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findUniqueOrThrow
   */
  export type SongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findFirst
   */
  export type SongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findFirstOrThrow
   */
  export type SongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findMany
   */
  export type SongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song create
   */
  export type SongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to create a Song.
     */
    data: XOR<SongCreateInput, SongUncheckedCreateInput>
  }

  /**
   * Song createMany
   */
  export type SongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Song createManyAndReturn
   */
  export type SongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Song update
   */
  export type SongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to update a Song.
     */
    data: XOR<SongUpdateInput, SongUncheckedUpdateInput>
    /**
     * Choose, which Song to update.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song updateMany
   */
  export type SongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to update.
     */
    limit?: number
  }

  /**
   * Song updateManyAndReturn
   */
  export type SongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Song upsert
   */
  export type SongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The filter to search for the Song to update in case it exists.
     */
    where: SongWhereUniqueInput
    /**
     * In case the Song found by the `where` argument doesn't exist, create a new Song with this data.
     */
    create: XOR<SongCreateInput, SongUncheckedCreateInput>
    /**
     * In case the Song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongUpdateInput, SongUncheckedUpdateInput>
  }

  /**
   * Song delete
   */
  export type SongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter which Song to delete.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song deleteMany
   */
  export type SongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to delete.
     */
    limit?: number
  }

  /**
   * Song.artists
   */
  export type Song$artistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    cursor?: ArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Song.album
   */
  export type Song$albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
  }

  /**
   * Song.users
   */
  export type Song$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Song.uploader
   */
  export type Song$uploaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Song.playlists
   */
  export type Song$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Song.listenings
   */
  export type Song$listeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listening
     */
    select?: ListeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listening
     */
    omit?: ListeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningInclude<ExtArgs> | null
    where?: ListeningWhereInput
    orderBy?: ListeningOrderByWithRelationInput | ListeningOrderByWithRelationInput[]
    cursor?: ListeningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListeningScalarFieldEnum | ListeningScalarFieldEnum[]
  }

  /**
   * Song.recommendations
   */
  export type Song$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Song without action
   */
  export type SongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
  }


  /**
   * Model Listening
   */

  export type AggregateListening = {
    _count: ListeningCountAggregateOutputType | null
    _min: ListeningMinAggregateOutputType | null
    _max: ListeningMaxAggregateOutputType | null
  }

  export type ListeningMinAggregateOutputType = {
    id: string | null
    userId: string | null
    songId: string | null
    timestamp: Date | null
  }

  export type ListeningMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    songId: string | null
    timestamp: Date | null
  }

  export type ListeningCountAggregateOutputType = {
    id: number
    userId: number
    songId: number
    timestamp: number
    _all: number
  }


  export type ListeningMinAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    timestamp?: true
  }

  export type ListeningMaxAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    timestamp?: true
  }

  export type ListeningCountAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    timestamp?: true
    _all?: true
  }

  export type ListeningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listening to aggregate.
     */
    where?: ListeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listenings to fetch.
     */
    orderBy?: ListeningOrderByWithRelationInput | ListeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listenings
    **/
    _count?: true | ListeningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListeningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListeningMaxAggregateInputType
  }

  export type GetListeningAggregateType<T extends ListeningAggregateArgs> = {
        [P in keyof T & keyof AggregateListening]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListening[P]>
      : GetScalarType<T[P], AggregateListening[P]>
  }




  export type ListeningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListeningWhereInput
    orderBy?: ListeningOrderByWithAggregationInput | ListeningOrderByWithAggregationInput[]
    by: ListeningScalarFieldEnum[] | ListeningScalarFieldEnum
    having?: ListeningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListeningCountAggregateInputType | true
    _min?: ListeningMinAggregateInputType
    _max?: ListeningMaxAggregateInputType
  }

  export type ListeningGroupByOutputType = {
    id: string
    userId: string
    songId: string
    timestamp: Date
    _count: ListeningCountAggregateOutputType | null
    _min: ListeningMinAggregateOutputType | null
    _max: ListeningMaxAggregateOutputType | null
  }

  type GetListeningGroupByPayload<T extends ListeningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListeningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListeningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListeningGroupByOutputType[P]>
            : GetScalarType<T[P], ListeningGroupByOutputType[P]>
        }
      >
    >


  export type ListeningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listening"]>

  export type ListeningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listening"]>

  export type ListeningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listening"]>

  export type ListeningSelectScalar = {
    id?: boolean
    userId?: boolean
    songId?: boolean
    timestamp?: boolean
  }

  export type ListeningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "songId" | "timestamp", ExtArgs["result"]["listening"]>
  export type ListeningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type ListeningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type ListeningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }

  export type $ListeningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listening"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      song: Prisma.$SongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      songId: string
      timestamp: Date
    }, ExtArgs["result"]["listening"]>
    composites: {}
  }

  type ListeningGetPayload<S extends boolean | null | undefined | ListeningDefaultArgs> = $Result.GetResult<Prisma.$ListeningPayload, S>

  type ListeningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListeningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListeningCountAggregateInputType | true
    }

  export interface ListeningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listening'], meta: { name: 'Listening' } }
    /**
     * Find zero or one Listening that matches the filter.
     * @param {ListeningFindUniqueArgs} args - Arguments to find a Listening
     * @example
     * // Get one Listening
     * const listening = await prisma.listening.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListeningFindUniqueArgs>(args: SelectSubset<T, ListeningFindUniqueArgs<ExtArgs>>): Prisma__ListeningClient<$Result.GetResult<Prisma.$ListeningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listening that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListeningFindUniqueOrThrowArgs} args - Arguments to find a Listening
     * @example
     * // Get one Listening
     * const listening = await prisma.listening.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListeningFindUniqueOrThrowArgs>(args: SelectSubset<T, ListeningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListeningClient<$Result.GetResult<Prisma.$ListeningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listening that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningFindFirstArgs} args - Arguments to find a Listening
     * @example
     * // Get one Listening
     * const listening = await prisma.listening.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListeningFindFirstArgs>(args?: SelectSubset<T, ListeningFindFirstArgs<ExtArgs>>): Prisma__ListeningClient<$Result.GetResult<Prisma.$ListeningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listening that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningFindFirstOrThrowArgs} args - Arguments to find a Listening
     * @example
     * // Get one Listening
     * const listening = await prisma.listening.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListeningFindFirstOrThrowArgs>(args?: SelectSubset<T, ListeningFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListeningClient<$Result.GetResult<Prisma.$ListeningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listenings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listenings
     * const listenings = await prisma.listening.findMany()
     * 
     * // Get first 10 Listenings
     * const listenings = await prisma.listening.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listeningWithIdOnly = await prisma.listening.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListeningFindManyArgs>(args?: SelectSubset<T, ListeningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listening.
     * @param {ListeningCreateArgs} args - Arguments to create a Listening.
     * @example
     * // Create one Listening
     * const Listening = await prisma.listening.create({
     *   data: {
     *     // ... data to create a Listening
     *   }
     * })
     * 
     */
    create<T extends ListeningCreateArgs>(args: SelectSubset<T, ListeningCreateArgs<ExtArgs>>): Prisma__ListeningClient<$Result.GetResult<Prisma.$ListeningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listenings.
     * @param {ListeningCreateManyArgs} args - Arguments to create many Listenings.
     * @example
     * // Create many Listenings
     * const listening = await prisma.listening.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListeningCreateManyArgs>(args?: SelectSubset<T, ListeningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listenings and returns the data saved in the database.
     * @param {ListeningCreateManyAndReturnArgs} args - Arguments to create many Listenings.
     * @example
     * // Create many Listenings
     * const listening = await prisma.listening.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listenings and only return the `id`
     * const listeningWithIdOnly = await prisma.listening.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListeningCreateManyAndReturnArgs>(args?: SelectSubset<T, ListeningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListeningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Listening.
     * @param {ListeningDeleteArgs} args - Arguments to delete one Listening.
     * @example
     * // Delete one Listening
     * const Listening = await prisma.listening.delete({
     *   where: {
     *     // ... filter to delete one Listening
     *   }
     * })
     * 
     */
    delete<T extends ListeningDeleteArgs>(args: SelectSubset<T, ListeningDeleteArgs<ExtArgs>>): Prisma__ListeningClient<$Result.GetResult<Prisma.$ListeningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listening.
     * @param {ListeningUpdateArgs} args - Arguments to update one Listening.
     * @example
     * // Update one Listening
     * const listening = await prisma.listening.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListeningUpdateArgs>(args: SelectSubset<T, ListeningUpdateArgs<ExtArgs>>): Prisma__ListeningClient<$Result.GetResult<Prisma.$ListeningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listenings.
     * @param {ListeningDeleteManyArgs} args - Arguments to filter Listenings to delete.
     * @example
     * // Delete a few Listenings
     * const { count } = await prisma.listening.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListeningDeleteManyArgs>(args?: SelectSubset<T, ListeningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listenings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listenings
     * const listening = await prisma.listening.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListeningUpdateManyArgs>(args: SelectSubset<T, ListeningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listenings and returns the data updated in the database.
     * @param {ListeningUpdateManyAndReturnArgs} args - Arguments to update many Listenings.
     * @example
     * // Update many Listenings
     * const listening = await prisma.listening.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Listenings and only return the `id`
     * const listeningWithIdOnly = await prisma.listening.updateManyAndReturn({
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
    updateManyAndReturn<T extends ListeningUpdateManyAndReturnArgs>(args: SelectSubset<T, ListeningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListeningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Listening.
     * @param {ListeningUpsertArgs} args - Arguments to update or create a Listening.
     * @example
     * // Update or create a Listening
     * const listening = await prisma.listening.upsert({
     *   create: {
     *     // ... data to create a Listening
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listening we want to update
     *   }
     * })
     */
    upsert<T extends ListeningUpsertArgs>(args: SelectSubset<T, ListeningUpsertArgs<ExtArgs>>): Prisma__ListeningClient<$Result.GetResult<Prisma.$ListeningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listenings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningCountArgs} args - Arguments to filter Listenings to count.
     * @example
     * // Count the number of Listenings
     * const count = await prisma.listening.count({
     *   where: {
     *     // ... the filter for the Listenings we want to count
     *   }
     * })
    **/
    count<T extends ListeningCountArgs>(
      args?: Subset<T, ListeningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListeningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListeningAggregateArgs>(args: Subset<T, ListeningAggregateArgs>): Prisma.PrismaPromise<GetListeningAggregateType<T>>

    /**
     * Group by Listening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListeningGroupByArgs} args - Group by arguments.
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
      T extends ListeningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListeningGroupByArgs['orderBy'] }
        : { orderBy?: ListeningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListeningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListeningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listening model
   */
  readonly fields: ListeningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listening.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListeningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Listening model
   */
  interface ListeningFieldRefs {
    readonly id: FieldRef<"Listening", 'String'>
    readonly userId: FieldRef<"Listening", 'String'>
    readonly songId: FieldRef<"Listening", 'String'>
    readonly timestamp: FieldRef<"Listening", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Listening findUnique
   */
  export type ListeningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listening
     */
    select?: ListeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listening
     */
    omit?: ListeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningInclude<ExtArgs> | null
    /**
     * Filter, which Listening to fetch.
     */
    where: ListeningWhereUniqueInput
  }

  /**
   * Listening findUniqueOrThrow
   */
  export type ListeningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listening
     */
    select?: ListeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listening
     */
    omit?: ListeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningInclude<ExtArgs> | null
    /**
     * Filter, which Listening to fetch.
     */
    where: ListeningWhereUniqueInput
  }

  /**
   * Listening findFirst
   */
  export type ListeningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listening
     */
    select?: ListeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listening
     */
    omit?: ListeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningInclude<ExtArgs> | null
    /**
     * Filter, which Listening to fetch.
     */
    where?: ListeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listenings to fetch.
     */
    orderBy?: ListeningOrderByWithRelationInput | ListeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listenings.
     */
    cursor?: ListeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listenings.
     */
    distinct?: ListeningScalarFieldEnum | ListeningScalarFieldEnum[]
  }

  /**
   * Listening findFirstOrThrow
   */
  export type ListeningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listening
     */
    select?: ListeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listening
     */
    omit?: ListeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningInclude<ExtArgs> | null
    /**
     * Filter, which Listening to fetch.
     */
    where?: ListeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listenings to fetch.
     */
    orderBy?: ListeningOrderByWithRelationInput | ListeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listenings.
     */
    cursor?: ListeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listenings.
     */
    distinct?: ListeningScalarFieldEnum | ListeningScalarFieldEnum[]
  }

  /**
   * Listening findMany
   */
  export type ListeningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listening
     */
    select?: ListeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listening
     */
    omit?: ListeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningInclude<ExtArgs> | null
    /**
     * Filter, which Listenings to fetch.
     */
    where?: ListeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listenings to fetch.
     */
    orderBy?: ListeningOrderByWithRelationInput | ListeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listenings.
     */
    cursor?: ListeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listenings.
     */
    skip?: number
    distinct?: ListeningScalarFieldEnum | ListeningScalarFieldEnum[]
  }

  /**
   * Listening create
   */
  export type ListeningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listening
     */
    select?: ListeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listening
     */
    omit?: ListeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningInclude<ExtArgs> | null
    /**
     * The data needed to create a Listening.
     */
    data: XOR<ListeningCreateInput, ListeningUncheckedCreateInput>
  }

  /**
   * Listening createMany
   */
  export type ListeningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listenings.
     */
    data: ListeningCreateManyInput | ListeningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listening createManyAndReturn
   */
  export type ListeningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listening
     */
    select?: ListeningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listening
     */
    omit?: ListeningOmit<ExtArgs> | null
    /**
     * The data used to create many Listenings.
     */
    data: ListeningCreateManyInput | ListeningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listening update
   */
  export type ListeningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listening
     */
    select?: ListeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listening
     */
    omit?: ListeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningInclude<ExtArgs> | null
    /**
     * The data needed to update a Listening.
     */
    data: XOR<ListeningUpdateInput, ListeningUncheckedUpdateInput>
    /**
     * Choose, which Listening to update.
     */
    where: ListeningWhereUniqueInput
  }

  /**
   * Listening updateMany
   */
  export type ListeningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listenings.
     */
    data: XOR<ListeningUpdateManyMutationInput, ListeningUncheckedUpdateManyInput>
    /**
     * Filter which Listenings to update
     */
    where?: ListeningWhereInput
    /**
     * Limit how many Listenings to update.
     */
    limit?: number
  }

  /**
   * Listening updateManyAndReturn
   */
  export type ListeningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listening
     */
    select?: ListeningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listening
     */
    omit?: ListeningOmit<ExtArgs> | null
    /**
     * The data used to update Listenings.
     */
    data: XOR<ListeningUpdateManyMutationInput, ListeningUncheckedUpdateManyInput>
    /**
     * Filter which Listenings to update
     */
    where?: ListeningWhereInput
    /**
     * Limit how many Listenings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listening upsert
   */
  export type ListeningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listening
     */
    select?: ListeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listening
     */
    omit?: ListeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningInclude<ExtArgs> | null
    /**
     * The filter to search for the Listening to update in case it exists.
     */
    where: ListeningWhereUniqueInput
    /**
     * In case the Listening found by the `where` argument doesn't exist, create a new Listening with this data.
     */
    create: XOR<ListeningCreateInput, ListeningUncheckedCreateInput>
    /**
     * In case the Listening was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListeningUpdateInput, ListeningUncheckedUpdateInput>
  }

  /**
   * Listening delete
   */
  export type ListeningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listening
     */
    select?: ListeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listening
     */
    omit?: ListeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningInclude<ExtArgs> | null
    /**
     * Filter which Listening to delete.
     */
    where: ListeningWhereUniqueInput
  }

  /**
   * Listening deleteMany
   */
  export type ListeningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listenings to delete
     */
    where?: ListeningWhereInput
    /**
     * Limit how many Listenings to delete.
     */
    limit?: number
  }

  /**
   * Listening without action
   */
  export type ListeningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listening
     */
    select?: ListeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listening
     */
    omit?: ListeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListeningInclude<ExtArgs> | null
  }


  /**
   * Model Recommendation
   */

  export type AggregateRecommendation = {
    _count: RecommendationCountAggregateOutputType | null
    _avg: RecommendationAvgAggregateOutputType | null
    _sum: RecommendationSumAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  export type RecommendationAvgAggregateOutputType = {
    score: number | null
  }

  export type RecommendationSumAggregateOutputType = {
    score: number | null
  }

  export type RecommendationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    songId: string | null
    score: number | null
    createdAt: Date | null
  }

  export type RecommendationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    songId: string | null
    score: number | null
    createdAt: Date | null
  }

  export type RecommendationCountAggregateOutputType = {
    id: number
    userId: number
    songId: number
    score: number
    createdAt: number
    _all: number
  }


  export type RecommendationAvgAggregateInputType = {
    score?: true
  }

  export type RecommendationSumAggregateInputType = {
    score?: true
  }

  export type RecommendationMinAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    score?: true
    createdAt?: true
  }

  export type RecommendationMaxAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    score?: true
    createdAt?: true
  }

  export type RecommendationCountAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    score?: true
    createdAt?: true
    _all?: true
  }

  export type RecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendation to aggregate.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recommendations
    **/
    _count?: true | RecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecommendationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecommendationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationMaxAggregateInputType
  }

  export type GetRecommendationAggregateType<T extends RecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendation[P]>
      : GetScalarType<T[P], AggregateRecommendation[P]>
  }




  export type RecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithAggregationInput | RecommendationOrderByWithAggregationInput[]
    by: RecommendationScalarFieldEnum[] | RecommendationScalarFieldEnum
    having?: RecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationCountAggregateInputType | true
    _avg?: RecommendationAvgAggregateInputType
    _sum?: RecommendationSumAggregateInputType
    _min?: RecommendationMinAggregateInputType
    _max?: RecommendationMaxAggregateInputType
  }

  export type RecommendationGroupByOutputType = {
    id: string
    userId: string
    songId: string
    score: number
    createdAt: Date
    _count: RecommendationCountAggregateOutputType | null
    _avg: RecommendationAvgAggregateOutputType | null
    _sum: RecommendationSumAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  type GetRecommendationGroupByPayload<T extends RecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    score?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
    playlists?: boolean | Recommendation$playlistsArgs<ExtArgs>
    _count?: boolean | RecommendationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    score?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    score?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectScalar = {
    id?: boolean
    userId?: boolean
    songId?: boolean
    score?: boolean
    createdAt?: boolean
  }

  export type RecommendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "songId" | "score" | "createdAt", ExtArgs["result"]["recommendation"]>
  export type RecommendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
    playlists?: boolean | Recommendation$playlistsArgs<ExtArgs>
    _count?: boolean | RecommendationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecommendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type RecommendationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }

  export type $RecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recommendation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      song: Prisma.$SongPayload<ExtArgs>
      playlists: Prisma.$RecommendationPlaylistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      songId: string
      score: number
      createdAt: Date
    }, ExtArgs["result"]["recommendation"]>
    composites: {}
  }

  type RecommendationGetPayload<S extends boolean | null | undefined | RecommendationDefaultArgs> = $Result.GetResult<Prisma.$RecommendationPayload, S>

  type RecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecommendationCountAggregateInputType | true
    }

  export interface RecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recommendation'], meta: { name: 'Recommendation' } }
    /**
     * Find zero or one Recommendation that matches the filter.
     * @param {RecommendationFindUniqueArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationFindUniqueArgs>(args: SelectSubset<T, RecommendationFindUniqueArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecommendationFindUniqueOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationFindFirstArgs>(args?: SelectSubset<T, RecommendationFindFirstArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommendations
     * const recommendations = await prisma.recommendation.findMany()
     * 
     * // Get first 10 Recommendations
     * const recommendations = await prisma.recommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendationFindManyArgs>(args?: SelectSubset<T, RecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recommendation.
     * @param {RecommendationCreateArgs} args - Arguments to create a Recommendation.
     * @example
     * // Create one Recommendation
     * const Recommendation = await prisma.recommendation.create({
     *   data: {
     *     // ... data to create a Recommendation
     *   }
     * })
     * 
     */
    create<T extends RecommendationCreateArgs>(args: SelectSubset<T, RecommendationCreateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recommendations.
     * @param {RecommendationCreateManyArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationCreateManyArgs>(args?: SelectSubset<T, RecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recommendations and returns the data saved in the database.
     * @param {RecommendationCreateManyAndReturnArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recommendations and only return the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recommendation.
     * @param {RecommendationDeleteArgs} args - Arguments to delete one Recommendation.
     * @example
     * // Delete one Recommendation
     * const Recommendation = await prisma.recommendation.delete({
     *   where: {
     *     // ... filter to delete one Recommendation
     *   }
     * })
     * 
     */
    delete<T extends RecommendationDeleteArgs>(args: SelectSubset<T, RecommendationDeleteArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recommendation.
     * @param {RecommendationUpdateArgs} args - Arguments to update one Recommendation.
     * @example
     * // Update one Recommendation
     * const recommendation = await prisma.recommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationUpdateArgs>(args: SelectSubset<T, RecommendationUpdateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recommendations.
     * @param {RecommendationDeleteManyArgs} args - Arguments to filter Recommendations to delete.
     * @example
     * // Delete a few Recommendations
     * const { count } = await prisma.recommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationDeleteManyArgs>(args?: SelectSubset<T, RecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationUpdateManyArgs>(args: SelectSubset<T, RecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations and returns the data updated in the database.
     * @param {RecommendationUpdateManyAndReturnArgs} args - Arguments to update many Recommendations.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recommendations and only return the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecommendationUpdateManyAndReturnArgs>(args: SelectSubset<T, RecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recommendation.
     * @param {RecommendationUpsertArgs} args - Arguments to update or create a Recommendation.
     * @example
     * // Update or create a Recommendation
     * const recommendation = await prisma.recommendation.upsert({
     *   create: {
     *     // ... data to create a Recommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommendation we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationUpsertArgs>(args: SelectSubset<T, RecommendationUpsertArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationCountArgs} args - Arguments to filter Recommendations to count.
     * @example
     * // Count the number of Recommendations
     * const count = await prisma.recommendation.count({
     *   where: {
     *     // ... the filter for the Recommendations we want to count
     *   }
     * })
    **/
    count<T extends RecommendationCountArgs>(
      args?: Subset<T, RecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecommendationAggregateArgs>(args: Subset<T, RecommendationAggregateArgs>): Prisma.PrismaPromise<GetRecommendationAggregateType<T>>

    /**
     * Group by Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationGroupByArgs} args - Group by arguments.
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
      T extends RecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recommendation model
   */
  readonly fields: RecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    playlists<T extends Recommendation$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, Recommendation$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Recommendation model
   */
  interface RecommendationFieldRefs {
    readonly id: FieldRef<"Recommendation", 'String'>
    readonly userId: FieldRef<"Recommendation", 'String'>
    readonly songId: FieldRef<"Recommendation", 'String'>
    readonly score: FieldRef<"Recommendation", 'Float'>
    readonly createdAt: FieldRef<"Recommendation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recommendation findUnique
   */
  export type RecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findUniqueOrThrow
   */
  export type RecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findFirst
   */
  export type RecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findFirstOrThrow
   */
  export type RecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findMany
   */
  export type RecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation create
   */
  export type RecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to create a Recommendation.
     */
    data: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
  }

  /**
   * Recommendation createMany
   */
  export type RecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recommendation createManyAndReturn
   */
  export type RecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendation update
   */
  export type RecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to update a Recommendation.
     */
    data: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
    /**
     * Choose, which Recommendation to update.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation updateMany
   */
  export type RecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to update.
     */
    limit?: number
  }

  /**
   * Recommendation updateManyAndReturn
   */
  export type RecommendationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendation upsert
   */
  export type RecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The filter to search for the Recommendation to update in case it exists.
     */
    where: RecommendationWhereUniqueInput
    /**
     * In case the Recommendation found by the `where` argument doesn't exist, create a new Recommendation with this data.
     */
    create: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
    /**
     * In case the Recommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
  }

  /**
   * Recommendation delete
   */
  export type RecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter which Recommendation to delete.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation deleteMany
   */
  export type RecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendations to delete
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to delete.
     */
    limit?: number
  }

  /**
   * Recommendation.playlists
   */
  export type Recommendation$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationPlaylist
     */
    select?: RecommendationPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationPlaylist
     */
    omit?: RecommendationPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationPlaylistInclude<ExtArgs> | null
    where?: RecommendationPlaylistWhereInput
    orderBy?: RecommendationPlaylistOrderByWithRelationInput | RecommendationPlaylistOrderByWithRelationInput[]
    cursor?: RecommendationPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationPlaylistScalarFieldEnum | RecommendationPlaylistScalarFieldEnum[]
  }

  /**
   * Recommendation without action
   */
  export type RecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
  }


  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: string
    name: string
    slug: string
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    songs?: boolean | Artist$songsArgs<ExtArgs>
    albums?: boolean | Artist$albumsArgs<ExtArgs>
    followers?: boolean | Artist$followersArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["artist"]>
  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | Artist$songsArgs<ExtArgs>
    albums?: boolean | Artist$albumsArgs<ExtArgs>
    followers?: boolean | Artist$followersArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      songs: Prisma.$SongPayload<ExtArgs>[]
      albums: Prisma.$AlbumPayload<ExtArgs>[]
      followers: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists and returns the data updated in the database.
     * @param {ArtistUpdateManyAndReturnArgs} args - Arguments to update many Artists.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArtistUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
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
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songs<T extends Artist$songsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    albums<T extends Artist$albumsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends Artist$followersArgs<ExtArgs> = {}>(args?: Subset<T, Artist$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Artist model
   */
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'String'>
    readonly name: FieldRef<"Artist", 'String'>
    readonly slug: FieldRef<"Artist", 'String'>
    readonly avatarUrl: FieldRef<"Artist", 'String'>
    readonly createdAt: FieldRef<"Artist", 'DateTime'>
    readonly updatedAt: FieldRef<"Artist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist createManyAndReturn
   */
  export type ArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist updateManyAndReturn
   */
  export type ArtistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artist.songs
   */
  export type Artist$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Artist.albums
   */
  export type Artist$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Artist.followers
   */
  export type Artist$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
  }


  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumMinAggregateOutputType = {
    id: string | null
    title: string | null
    coverUrl: string | null
    artistId: string | null
    releaseDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: string | null
    title: string | null
    coverUrl: string | null
    artistId: string | null
    releaseDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    title: number
    coverUrl: number
    artistId: number
    releaseDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlbumMinAggregateInputType = {
    id?: true
    title?: true
    coverUrl?: true
    artistId?: true
    releaseDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    title?: true
    coverUrl?: true
    artistId?: true
    releaseDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    title?: true
    coverUrl?: true
    artistId?: true
    releaseDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: string
    title: string
    coverUrl: string | null
    artistId: string
    releaseDate: Date
    createdAt: Date
    updatedAt: Date
    _count: AlbumCountAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    coverUrl?: boolean
    artistId?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    songs?: boolean | Album$songsArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    coverUrl?: boolean
    artistId?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    coverUrl?: boolean
    artistId?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    id?: boolean
    title?: boolean
    coverUrl?: boolean
    artistId?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "coverUrl" | "artistId" | "releaseDate" | "createdAt" | "updatedAt", ExtArgs["result"]["album"]>
  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | Album$songsArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }

  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      songs: Prisma.$SongPayload<ExtArgs>[]
      artist: Prisma.$ArtistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      coverUrl: string | null
      artistId: string
      releaseDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["album"]>
    composites: {}
  }

  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumFindUniqueArgs>(args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumFindFirstArgs>(args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumFindManyArgs>(args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
     */
    create<T extends AlbumCreateArgs>(args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Albums.
     * @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumCreateManyArgs>(args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Albums and returns the data saved in the database.
     * @param {AlbumCreateManyAndReturnArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
     */
    delete<T extends AlbumDeleteArgs>(args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumUpdateArgs>(args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumDeleteManyArgs>(args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumUpdateManyArgs>(args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums and returns the data updated in the database.
     * @param {AlbumUpdateManyAndReturnArgs} args - Arguments to update many Albums.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlbumUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends AlbumUpsertArgs>(args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
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
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songs<T extends Album$songsArgs<ExtArgs> = {}>(args?: Subset<T, Album$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Album model
   */
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", 'String'>
    readonly title: FieldRef<"Album", 'String'>
    readonly coverUrl: FieldRef<"Album", 'String'>
    readonly artistId: FieldRef<"Album", 'String'>
    readonly releaseDate: FieldRef<"Album", 'DateTime'>
    readonly createdAt: FieldRef<"Album", 'DateTime'>
    readonly updatedAt: FieldRef<"Album", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }

  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Album createManyAndReturn
   */
  export type AlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album updateManyAndReturn
   */
  export type AlbumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }

  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to delete.
     */
    limit?: number
  }

  /**
   * Album.songs
   */
  export type Album$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.PlaylistType | null
    coverUrl: string | null
    creatorId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.PlaylistType | null
    coverUrl: string | null
    creatorId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    coverUrl: number
    creatorId: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type PlaylistMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    coverUrl?: true
    creatorId?: true
    createAt?: true
    updatedAt?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    coverUrl?: true
    creatorId?: true
    createAt?: true
    updatedAt?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    coverUrl?: true
    creatorId?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: string
    title: string
    description: string | null
    type: $Enums.PlaylistType
    coverUrl: string | null
    creatorId: string
    createAt: Date
    updatedAt: Date
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    coverUrl?: boolean
    creatorId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    songs?: boolean | Playlist$songsArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    users?: boolean | Playlist$usersArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    coverUrl?: boolean
    creatorId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    coverUrl?: boolean
    creatorId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    coverUrl?: boolean
    creatorId?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }

  export type PlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "coverUrl" | "creatorId" | "createAt" | "updatedAt", ExtArgs["result"]["playlist"]>
  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | Playlist$songsArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    users?: boolean | Playlist$usersArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      songs: Prisma.$SongPayload<ExtArgs>[]
      creator: Prisma.$UserPayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      type: $Enums.PlaylistType
      coverUrl: string | null
      creatorId: string
      createAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {PlaylistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
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
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songs<T extends Playlist$songsArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Playlist$usersArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'String'>
    readonly title: FieldRef<"Playlist", 'String'>
    readonly description: FieldRef<"Playlist", 'String'>
    readonly type: FieldRef<"Playlist", 'PlaylistType'>
    readonly coverUrl: FieldRef<"Playlist", 'String'>
    readonly creatorId: FieldRef<"Playlist", 'String'>
    readonly createAt: FieldRef<"Playlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Playlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist updateManyAndReturn
   */
  export type PlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number
  }

  /**
   * Playlist.songs
   */
  export type Playlist$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Playlist.users
   */
  export type Playlist$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model RecommendationPlaylist
   */

  export type AggregateRecommendationPlaylist = {
    _count: RecommendationPlaylistCountAggregateOutputType | null
    _min: RecommendationPlaylistMinAggregateOutputType | null
    _max: RecommendationPlaylistMaxAggregateOutputType | null
  }

  export type RecommendationPlaylistMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    userId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type RecommendationPlaylistMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    userId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type RecommendationPlaylistCountAggregateOutputType = {
    id: number
    title: number
    description: number
    userId: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type RecommendationPlaylistMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    createAt?: true
    updatedAt?: true
  }

  export type RecommendationPlaylistMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    createAt?: true
    updatedAt?: true
  }

  export type RecommendationPlaylistCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecommendationPlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecommendationPlaylist to aggregate.
     */
    where?: RecommendationPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationPlaylists to fetch.
     */
    orderBy?: RecommendationPlaylistOrderByWithRelationInput | RecommendationPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecommendationPlaylists
    **/
    _count?: true | RecommendationPlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationPlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationPlaylistMaxAggregateInputType
  }

  export type GetRecommendationPlaylistAggregateType<T extends RecommendationPlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendationPlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendationPlaylist[P]>
      : GetScalarType<T[P], AggregateRecommendationPlaylist[P]>
  }




  export type RecommendationPlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationPlaylistWhereInput
    orderBy?: RecommendationPlaylistOrderByWithAggregationInput | RecommendationPlaylistOrderByWithAggregationInput[]
    by: RecommendationPlaylistScalarFieldEnum[] | RecommendationPlaylistScalarFieldEnum
    having?: RecommendationPlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationPlaylistCountAggregateInputType | true
    _min?: RecommendationPlaylistMinAggregateInputType
    _max?: RecommendationPlaylistMaxAggregateInputType
  }

  export type RecommendationPlaylistGroupByOutputType = {
    id: string
    title: string
    description: string
    userId: string
    createAt: Date
    updatedAt: Date
    _count: RecommendationPlaylistCountAggregateOutputType | null
    _min: RecommendationPlaylistMinAggregateOutputType | null
    _max: RecommendationPlaylistMaxAggregateOutputType | null
  }

  type GetRecommendationPlaylistGroupByPayload<T extends RecommendationPlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationPlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationPlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationPlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationPlaylistGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationPlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    recommendations?: boolean | RecommendationPlaylist$recommendationsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | RecommendationPlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendationPlaylist"]>

  export type RecommendationPlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendationPlaylist"]>

  export type RecommendationPlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendationPlaylist"]>

  export type RecommendationPlaylistSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }

  export type RecommendationPlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "userId" | "createAt" | "updatedAt", ExtArgs["result"]["recommendationPlaylist"]>
  export type RecommendationPlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommendations?: boolean | RecommendationPlaylist$recommendationsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | RecommendationPlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecommendationPlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecommendationPlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecommendationPlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecommendationPlaylist"
    objects: {
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      userId: string
      createAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recommendationPlaylist"]>
    composites: {}
  }

  type RecommendationPlaylistGetPayload<S extends boolean | null | undefined | RecommendationPlaylistDefaultArgs> = $Result.GetResult<Prisma.$RecommendationPlaylistPayload, S>

  type RecommendationPlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecommendationPlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecommendationPlaylistCountAggregateInputType | true
    }

  export interface RecommendationPlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecommendationPlaylist'], meta: { name: 'RecommendationPlaylist' } }
    /**
     * Find zero or one RecommendationPlaylist that matches the filter.
     * @param {RecommendationPlaylistFindUniqueArgs} args - Arguments to find a RecommendationPlaylist
     * @example
     * // Get one RecommendationPlaylist
     * const recommendationPlaylist = await prisma.recommendationPlaylist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationPlaylistFindUniqueArgs>(args: SelectSubset<T, RecommendationPlaylistFindUniqueArgs<ExtArgs>>): Prisma__RecommendationPlaylistClient<$Result.GetResult<Prisma.$RecommendationPlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecommendationPlaylist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecommendationPlaylistFindUniqueOrThrowArgs} args - Arguments to find a RecommendationPlaylist
     * @example
     * // Get one RecommendationPlaylist
     * const recommendationPlaylist = await prisma.recommendationPlaylist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationPlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationPlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationPlaylistClient<$Result.GetResult<Prisma.$RecommendationPlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecommendationPlaylist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationPlaylistFindFirstArgs} args - Arguments to find a RecommendationPlaylist
     * @example
     * // Get one RecommendationPlaylist
     * const recommendationPlaylist = await prisma.recommendationPlaylist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationPlaylistFindFirstArgs>(args?: SelectSubset<T, RecommendationPlaylistFindFirstArgs<ExtArgs>>): Prisma__RecommendationPlaylistClient<$Result.GetResult<Prisma.$RecommendationPlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecommendationPlaylist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationPlaylistFindFirstOrThrowArgs} args - Arguments to find a RecommendationPlaylist
     * @example
     * // Get one RecommendationPlaylist
     * const recommendationPlaylist = await prisma.recommendationPlaylist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationPlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationPlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationPlaylistClient<$Result.GetResult<Prisma.$RecommendationPlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecommendationPlaylists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationPlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecommendationPlaylists
     * const recommendationPlaylists = await prisma.recommendationPlaylist.findMany()
     * 
     * // Get first 10 RecommendationPlaylists
     * const recommendationPlaylists = await prisma.recommendationPlaylist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendationPlaylistWithIdOnly = await prisma.recommendationPlaylist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendationPlaylistFindManyArgs>(args?: SelectSubset<T, RecommendationPlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecommendationPlaylist.
     * @param {RecommendationPlaylistCreateArgs} args - Arguments to create a RecommendationPlaylist.
     * @example
     * // Create one RecommendationPlaylist
     * const RecommendationPlaylist = await prisma.recommendationPlaylist.create({
     *   data: {
     *     // ... data to create a RecommendationPlaylist
     *   }
     * })
     * 
     */
    create<T extends RecommendationPlaylistCreateArgs>(args: SelectSubset<T, RecommendationPlaylistCreateArgs<ExtArgs>>): Prisma__RecommendationPlaylistClient<$Result.GetResult<Prisma.$RecommendationPlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecommendationPlaylists.
     * @param {RecommendationPlaylistCreateManyArgs} args - Arguments to create many RecommendationPlaylists.
     * @example
     * // Create many RecommendationPlaylists
     * const recommendationPlaylist = await prisma.recommendationPlaylist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationPlaylistCreateManyArgs>(args?: SelectSubset<T, RecommendationPlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecommendationPlaylists and returns the data saved in the database.
     * @param {RecommendationPlaylistCreateManyAndReturnArgs} args - Arguments to create many RecommendationPlaylists.
     * @example
     * // Create many RecommendationPlaylists
     * const recommendationPlaylist = await prisma.recommendationPlaylist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecommendationPlaylists and only return the `id`
     * const recommendationPlaylistWithIdOnly = await prisma.recommendationPlaylist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationPlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationPlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecommendationPlaylist.
     * @param {RecommendationPlaylistDeleteArgs} args - Arguments to delete one RecommendationPlaylist.
     * @example
     * // Delete one RecommendationPlaylist
     * const RecommendationPlaylist = await prisma.recommendationPlaylist.delete({
     *   where: {
     *     // ... filter to delete one RecommendationPlaylist
     *   }
     * })
     * 
     */
    delete<T extends RecommendationPlaylistDeleteArgs>(args: SelectSubset<T, RecommendationPlaylistDeleteArgs<ExtArgs>>): Prisma__RecommendationPlaylistClient<$Result.GetResult<Prisma.$RecommendationPlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecommendationPlaylist.
     * @param {RecommendationPlaylistUpdateArgs} args - Arguments to update one RecommendationPlaylist.
     * @example
     * // Update one RecommendationPlaylist
     * const recommendationPlaylist = await prisma.recommendationPlaylist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationPlaylistUpdateArgs>(args: SelectSubset<T, RecommendationPlaylistUpdateArgs<ExtArgs>>): Prisma__RecommendationPlaylistClient<$Result.GetResult<Prisma.$RecommendationPlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecommendationPlaylists.
     * @param {RecommendationPlaylistDeleteManyArgs} args - Arguments to filter RecommendationPlaylists to delete.
     * @example
     * // Delete a few RecommendationPlaylists
     * const { count } = await prisma.recommendationPlaylist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationPlaylistDeleteManyArgs>(args?: SelectSubset<T, RecommendationPlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecommendationPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationPlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecommendationPlaylists
     * const recommendationPlaylist = await prisma.recommendationPlaylist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationPlaylistUpdateManyArgs>(args: SelectSubset<T, RecommendationPlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecommendationPlaylists and returns the data updated in the database.
     * @param {RecommendationPlaylistUpdateManyAndReturnArgs} args - Arguments to update many RecommendationPlaylists.
     * @example
     * // Update many RecommendationPlaylists
     * const recommendationPlaylist = await prisma.recommendationPlaylist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecommendationPlaylists and only return the `id`
     * const recommendationPlaylistWithIdOnly = await prisma.recommendationPlaylist.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecommendationPlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, RecommendationPlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecommendationPlaylist.
     * @param {RecommendationPlaylistUpsertArgs} args - Arguments to update or create a RecommendationPlaylist.
     * @example
     * // Update or create a RecommendationPlaylist
     * const recommendationPlaylist = await prisma.recommendationPlaylist.upsert({
     *   create: {
     *     // ... data to create a RecommendationPlaylist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecommendationPlaylist we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationPlaylistUpsertArgs>(args: SelectSubset<T, RecommendationPlaylistUpsertArgs<ExtArgs>>): Prisma__RecommendationPlaylistClient<$Result.GetResult<Prisma.$RecommendationPlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecommendationPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationPlaylistCountArgs} args - Arguments to filter RecommendationPlaylists to count.
     * @example
     * // Count the number of RecommendationPlaylists
     * const count = await prisma.recommendationPlaylist.count({
     *   where: {
     *     // ... the filter for the RecommendationPlaylists we want to count
     *   }
     * })
    **/
    count<T extends RecommendationPlaylistCountArgs>(
      args?: Subset<T, RecommendationPlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationPlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecommendationPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationPlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecommendationPlaylistAggregateArgs>(args: Subset<T, RecommendationPlaylistAggregateArgs>): Prisma.PrismaPromise<GetRecommendationPlaylistAggregateType<T>>

    /**
     * Group by RecommendationPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationPlaylistGroupByArgs} args - Group by arguments.
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
      T extends RecommendationPlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationPlaylistGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationPlaylistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecommendationPlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecommendationPlaylist model
   */
  readonly fields: RecommendationPlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecommendationPlaylist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationPlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recommendations<T extends RecommendationPlaylist$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, RecommendationPlaylist$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecommendationPlaylist model
   */
  interface RecommendationPlaylistFieldRefs {
    readonly id: FieldRef<"RecommendationPlaylist", 'String'>
    readonly title: FieldRef<"RecommendationPlaylist", 'String'>
    readonly description: FieldRef<"RecommendationPlaylist", 'String'>
    readonly userId: FieldRef<"RecommendationPlaylist", 'String'>
    readonly createAt: FieldRef<"RecommendationPlaylist", 'DateTime'>
    readonly updatedAt: FieldRef<"RecommendationPlaylist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecommendationPlaylist findUnique
   */
  export type RecommendationPlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationPlaylist
     */
    select?: RecommendationPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationPlaylist
     */
    omit?: RecommendationPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationPlaylist to fetch.
     */
    where: RecommendationPlaylistWhereUniqueInput
  }

  /**
   * RecommendationPlaylist findUniqueOrThrow
   */
  export type RecommendationPlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationPlaylist
     */
    select?: RecommendationPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationPlaylist
     */
    omit?: RecommendationPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationPlaylist to fetch.
     */
    where: RecommendationPlaylistWhereUniqueInput
  }

  /**
   * RecommendationPlaylist findFirst
   */
  export type RecommendationPlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationPlaylist
     */
    select?: RecommendationPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationPlaylist
     */
    omit?: RecommendationPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationPlaylist to fetch.
     */
    where?: RecommendationPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationPlaylists to fetch.
     */
    orderBy?: RecommendationPlaylistOrderByWithRelationInput | RecommendationPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecommendationPlaylists.
     */
    cursor?: RecommendationPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecommendationPlaylists.
     */
    distinct?: RecommendationPlaylistScalarFieldEnum | RecommendationPlaylistScalarFieldEnum[]
  }

  /**
   * RecommendationPlaylist findFirstOrThrow
   */
  export type RecommendationPlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationPlaylist
     */
    select?: RecommendationPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationPlaylist
     */
    omit?: RecommendationPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationPlaylist to fetch.
     */
    where?: RecommendationPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationPlaylists to fetch.
     */
    orderBy?: RecommendationPlaylistOrderByWithRelationInput | RecommendationPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecommendationPlaylists.
     */
    cursor?: RecommendationPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecommendationPlaylists.
     */
    distinct?: RecommendationPlaylistScalarFieldEnum | RecommendationPlaylistScalarFieldEnum[]
  }

  /**
   * RecommendationPlaylist findMany
   */
  export type RecommendationPlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationPlaylist
     */
    select?: RecommendationPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationPlaylist
     */
    omit?: RecommendationPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationPlaylists to fetch.
     */
    where?: RecommendationPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationPlaylists to fetch.
     */
    orderBy?: RecommendationPlaylistOrderByWithRelationInput | RecommendationPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecommendationPlaylists.
     */
    cursor?: RecommendationPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationPlaylists.
     */
    skip?: number
    distinct?: RecommendationPlaylistScalarFieldEnum | RecommendationPlaylistScalarFieldEnum[]
  }

  /**
   * RecommendationPlaylist create
   */
  export type RecommendationPlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationPlaylist
     */
    select?: RecommendationPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationPlaylist
     */
    omit?: RecommendationPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a RecommendationPlaylist.
     */
    data: XOR<RecommendationPlaylistCreateInput, RecommendationPlaylistUncheckedCreateInput>
  }

  /**
   * RecommendationPlaylist createMany
   */
  export type RecommendationPlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecommendationPlaylists.
     */
    data: RecommendationPlaylistCreateManyInput | RecommendationPlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecommendationPlaylist createManyAndReturn
   */
  export type RecommendationPlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationPlaylist
     */
    select?: RecommendationPlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationPlaylist
     */
    omit?: RecommendationPlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many RecommendationPlaylists.
     */
    data: RecommendationPlaylistCreateManyInput | RecommendationPlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationPlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecommendationPlaylist update
   */
  export type RecommendationPlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationPlaylist
     */
    select?: RecommendationPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationPlaylist
     */
    omit?: RecommendationPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a RecommendationPlaylist.
     */
    data: XOR<RecommendationPlaylistUpdateInput, RecommendationPlaylistUncheckedUpdateInput>
    /**
     * Choose, which RecommendationPlaylist to update.
     */
    where: RecommendationPlaylistWhereUniqueInput
  }

  /**
   * RecommendationPlaylist updateMany
   */
  export type RecommendationPlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecommendationPlaylists.
     */
    data: XOR<RecommendationPlaylistUpdateManyMutationInput, RecommendationPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which RecommendationPlaylists to update
     */
    where?: RecommendationPlaylistWhereInput
    /**
     * Limit how many RecommendationPlaylists to update.
     */
    limit?: number
  }

  /**
   * RecommendationPlaylist updateManyAndReturn
   */
  export type RecommendationPlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationPlaylist
     */
    select?: RecommendationPlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationPlaylist
     */
    omit?: RecommendationPlaylistOmit<ExtArgs> | null
    /**
     * The data used to update RecommendationPlaylists.
     */
    data: XOR<RecommendationPlaylistUpdateManyMutationInput, RecommendationPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which RecommendationPlaylists to update
     */
    where?: RecommendationPlaylistWhereInput
    /**
     * Limit how many RecommendationPlaylists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationPlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecommendationPlaylist upsert
   */
  export type RecommendationPlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationPlaylist
     */
    select?: RecommendationPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationPlaylist
     */
    omit?: RecommendationPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationPlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the RecommendationPlaylist to update in case it exists.
     */
    where: RecommendationPlaylistWhereUniqueInput
    /**
     * In case the RecommendationPlaylist found by the `where` argument doesn't exist, create a new RecommendationPlaylist with this data.
     */
    create: XOR<RecommendationPlaylistCreateInput, RecommendationPlaylistUncheckedCreateInput>
    /**
     * In case the RecommendationPlaylist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationPlaylistUpdateInput, RecommendationPlaylistUncheckedUpdateInput>
  }

  /**
   * RecommendationPlaylist delete
   */
  export type RecommendationPlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationPlaylist
     */
    select?: RecommendationPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationPlaylist
     */
    omit?: RecommendationPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationPlaylistInclude<ExtArgs> | null
    /**
     * Filter which RecommendationPlaylist to delete.
     */
    where: RecommendationPlaylistWhereUniqueInput
  }

  /**
   * RecommendationPlaylist deleteMany
   */
  export type RecommendationPlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecommendationPlaylists to delete
     */
    where?: RecommendationPlaylistWhereInput
    /**
     * Limit how many RecommendationPlaylists to delete.
     */
    limit?: number
  }

  /**
   * RecommendationPlaylist.recommendations
   */
  export type RecommendationPlaylist$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * RecommendationPlaylist without action
   */
  export type RecommendationPlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationPlaylist
     */
    select?: RecommendationPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecommendationPlaylist
     */
    omit?: RecommendationPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationPlaylistInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    bio: 'bio',
    dateOfBirth: 'dateOfBirth',
    avatar: 'avatar',
    isEmailVerified: 'isEmailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    message: 'message',
    isRead: 'isRead',
    userAvatar: 'userAvatar',
    userId: 'userId',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const NotificationSettingsScalarFieldEnum: {
    id: 'id',
    webNotifications: 'webNotifications',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationSettingsScalarFieldEnum = (typeof NotificationSettingsScalarFieldEnum)[keyof typeof NotificationSettingsScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    type: 'type',
    expiresIn: 'expiresIn',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const SongScalarFieldEnum: {
    id: 'id',
    title: 'title',
    albumId: 'albumId',
    duration: 'duration',
    audioUrl: 'audioUrl',
    status: 'status',
    genres: 'genres',
    lyrics: 'lyrics',
    coverUrl: 'coverUrl',
    uploaderId: 'uploaderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const ListeningScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    songId: 'songId',
    timestamp: 'timestamp'
  };

  export type ListeningScalarFieldEnum = (typeof ListeningScalarFieldEnum)[keyof typeof ListeningScalarFieldEnum]


  export const RecommendationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    songId: 'songId',
    score: 'score',
    createdAt: 'createdAt'
  };

  export type RecommendationScalarFieldEnum = (typeof RecommendationScalarFieldEnum)[keyof typeof RecommendationScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    title: 'title',
    coverUrl: 'coverUrl',
    artistId: 'artistId',
    releaseDate: 'releaseDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    coverUrl: 'coverUrl',
    creatorId: 'creatorId',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const RecommendationPlaylistScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    userId: 'userId',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type RecommendationPlaylistScalarFieldEnum = (typeof RecommendationPlaylistScalarFieldEnum)[keyof typeof RecommendationPlaylistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SongStatus'
   */
  export type EnumSongStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SongStatus'>
    


  /**
   * Reference to a field of type 'SongStatus[]'
   */
  export type ListEnumSongStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SongStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PlaylistType'
   */
  export type EnumPlaylistTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlaylistType'>
    


  /**
   * Reference to a field of type 'PlaylistType[]'
   */
  export type ListEnumPlaylistTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlaylistType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tokens?: TokenListRelationFilter
    notifications?: NotificationListRelationFilter
    notificationSettings?: XOR<NotificationSettingsNullableScalarRelationFilter, NotificationSettingsWhereInput> | null
    favoriteMusic?: SongListRelationFilter
    ownMusic?: SongListRelationFilter
    favoriteArtists?: ArtistListRelationFilter
    listenings?: ListeningListRelationFilter
    recommendations?: RecommendationListRelationFilter
    mixes?: RecommendationPlaylistListRelationFilter
    myPlaylists?: PlaylistListRelationFilter
    favoritePlaylists?: PlaylistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bio?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tokens?: TokenOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    notificationSettings?: NotificationSettingsOrderByWithRelationInput
    favoriteMusic?: SongOrderByRelationAggregateInput
    ownMusic?: SongOrderByRelationAggregateInput
    favoriteArtists?: ArtistOrderByRelationAggregateInput
    listenings?: ListeningOrderByRelationAggregateInput
    recommendations?: RecommendationOrderByRelationAggregateInput
    mixes?: RecommendationPlaylistOrderByRelationAggregateInput
    myPlaylists?: PlaylistOrderByRelationAggregateInput
    favoritePlaylists?: PlaylistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tokens?: TokenListRelationFilter
    notifications?: NotificationListRelationFilter
    notificationSettings?: XOR<NotificationSettingsNullableScalarRelationFilter, NotificationSettingsWhereInput> | null
    favoriteMusic?: SongListRelationFilter
    ownMusic?: SongListRelationFilter
    favoriteArtists?: ArtistListRelationFilter
    listenings?: ListeningListRelationFilter
    recommendations?: RecommendationListRelationFilter
    mixes?: RecommendationPlaylistListRelationFilter
    myPlaylists?: PlaylistListRelationFilter
    favoritePlaylists?: PlaylistListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bio?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    userAvatar?: StringNullableFilter<"Notification"> | string | null
    userId?: StringFilter<"Notification"> | string
    createAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    userAvatar?: SortOrderInput | SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    userAvatar?: StringNullableFilter<"Notification"> | string | null
    userId?: StringFilter<"Notification"> | string
    createAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    userAvatar?: SortOrderInput | SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    userAvatar?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    userId?: StringWithAggregatesFilter<"Notification"> | string
    createAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type NotificationSettingsWhereInput = {
    AND?: NotificationSettingsWhereInput | NotificationSettingsWhereInput[]
    OR?: NotificationSettingsWhereInput[]
    NOT?: NotificationSettingsWhereInput | NotificationSettingsWhereInput[]
    id?: StringFilter<"NotificationSettings"> | string
    webNotifications?: BoolFilter<"NotificationSettings"> | boolean
    userId?: StringFilter<"NotificationSettings"> | string
    createdAt?: DateTimeFilter<"NotificationSettings"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationSettingsOrderByWithRelationInput = {
    id?: SortOrder
    webNotifications?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: NotificationSettingsWhereInput | NotificationSettingsWhereInput[]
    OR?: NotificationSettingsWhereInput[]
    NOT?: NotificationSettingsWhereInput | NotificationSettingsWhereInput[]
    webNotifications?: BoolFilter<"NotificationSettings"> | boolean
    createdAt?: DateTimeFilter<"NotificationSettings"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type NotificationSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    webNotifications?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationSettingsCountOrderByAggregateInput
    _max?: NotificationSettingsMaxOrderByAggregateInput
    _min?: NotificationSettingsMinOrderByAggregateInput
  }

  export type NotificationSettingsScalarWhereWithAggregatesInput = {
    AND?: NotificationSettingsScalarWhereWithAggregatesInput | NotificationSettingsScalarWhereWithAggregatesInput[]
    OR?: NotificationSettingsScalarWhereWithAggregatesInput[]
    NOT?: NotificationSettingsScalarWhereWithAggregatesInput | NotificationSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationSettings"> | string
    webNotifications?: BoolWithAggregatesFilter<"NotificationSettings"> | boolean
    userId?: StringWithAggregatesFilter<"NotificationSettings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NotificationSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NotificationSettings"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expiresIn?: DateTimeFilter<"Token"> | Date | string
    userId?: StringFilter<"Token"> | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expiresIn?: DateTimeFilter<"Token"> | Date | string
    userId?: StringFilter<"Token"> | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    token?: StringWithAggregatesFilter<"Token"> | string
    type?: EnumTokenTypeWithAggregatesFilter<"Token"> | $Enums.TokenType
    expiresIn?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    userId?: StringWithAggregatesFilter<"Token"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type SongWhereInput = {
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    id?: StringFilter<"Song"> | string
    title?: StringFilter<"Song"> | string
    albumId?: StringNullableFilter<"Song"> | string | null
    duration?: FloatFilter<"Song"> | number
    audioUrl?: StringFilter<"Song"> | string
    status?: EnumSongStatusFilter<"Song"> | $Enums.SongStatus
    genres?: StringNullableListFilter<"Song">
    lyrics?: JsonNullableFilter<"Song">
    coverUrl?: StringNullableFilter<"Song"> | string | null
    uploaderId?: StringNullableFilter<"Song"> | string | null
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
    artists?: ArtistListRelationFilter
    album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
    users?: UserListRelationFilter
    uploader?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    playlists?: PlaylistListRelationFilter
    listenings?: ListeningListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }

  export type SongOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    albumId?: SortOrderInput | SortOrder
    duration?: SortOrder
    audioUrl?: SortOrder
    status?: SortOrder
    genres?: SortOrder
    lyrics?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    uploaderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    artists?: ArtistOrderByRelationAggregateInput
    album?: AlbumOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    uploader?: UserOrderByWithRelationInput
    playlists?: PlaylistOrderByRelationAggregateInput
    listenings?: ListeningOrderByRelationAggregateInput
    recommendations?: RecommendationOrderByRelationAggregateInput
  }

  export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    title?: StringFilter<"Song"> | string
    albumId?: StringNullableFilter<"Song"> | string | null
    duration?: FloatFilter<"Song"> | number
    audioUrl?: StringFilter<"Song"> | string
    status?: EnumSongStatusFilter<"Song"> | $Enums.SongStatus
    genres?: StringNullableListFilter<"Song">
    lyrics?: JsonNullableFilter<"Song">
    coverUrl?: StringNullableFilter<"Song"> | string | null
    uploaderId?: StringNullableFilter<"Song"> | string | null
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
    artists?: ArtistListRelationFilter
    album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
    users?: UserListRelationFilter
    uploader?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    playlists?: PlaylistListRelationFilter
    listenings?: ListeningListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }, "id">

  export type SongOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    albumId?: SortOrderInput | SortOrder
    duration?: SortOrder
    audioUrl?: SortOrder
    status?: SortOrder
    genres?: SortOrder
    lyrics?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    uploaderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SongCountOrderByAggregateInput
    _avg?: SongAvgOrderByAggregateInput
    _max?: SongMaxOrderByAggregateInput
    _min?: SongMinOrderByAggregateInput
    _sum?: SongSumOrderByAggregateInput
  }

  export type SongScalarWhereWithAggregatesInput = {
    AND?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    OR?: SongScalarWhereWithAggregatesInput[]
    NOT?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Song"> | string
    title?: StringWithAggregatesFilter<"Song"> | string
    albumId?: StringNullableWithAggregatesFilter<"Song"> | string | null
    duration?: FloatWithAggregatesFilter<"Song"> | number
    audioUrl?: StringWithAggregatesFilter<"Song"> | string
    status?: EnumSongStatusWithAggregatesFilter<"Song"> | $Enums.SongStatus
    genres?: StringNullableListFilter<"Song">
    lyrics?: JsonNullableWithAggregatesFilter<"Song">
    coverUrl?: StringNullableWithAggregatesFilter<"Song"> | string | null
    uploaderId?: StringNullableWithAggregatesFilter<"Song"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
  }

  export type ListeningWhereInput = {
    AND?: ListeningWhereInput | ListeningWhereInput[]
    OR?: ListeningWhereInput[]
    NOT?: ListeningWhereInput | ListeningWhereInput[]
    id?: StringFilter<"Listening"> | string
    userId?: StringFilter<"Listening"> | string
    songId?: StringFilter<"Listening"> | string
    timestamp?: DateTimeFilter<"Listening"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }

  export type ListeningOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
    song?: SongOrderByWithRelationInput
  }

  export type ListeningWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_songId?: ListeningUserIdSongIdCompoundUniqueInput
    AND?: ListeningWhereInput | ListeningWhereInput[]
    OR?: ListeningWhereInput[]
    NOT?: ListeningWhereInput | ListeningWhereInput[]
    userId?: StringFilter<"Listening"> | string
    songId?: StringFilter<"Listening"> | string
    timestamp?: DateTimeFilter<"Listening"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }, "id" | "userId_songId">

  export type ListeningOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    timestamp?: SortOrder
    _count?: ListeningCountOrderByAggregateInput
    _max?: ListeningMaxOrderByAggregateInput
    _min?: ListeningMinOrderByAggregateInput
  }

  export type ListeningScalarWhereWithAggregatesInput = {
    AND?: ListeningScalarWhereWithAggregatesInput | ListeningScalarWhereWithAggregatesInput[]
    OR?: ListeningScalarWhereWithAggregatesInput[]
    NOT?: ListeningScalarWhereWithAggregatesInput | ListeningScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Listening"> | string
    userId?: StringWithAggregatesFilter<"Listening"> | string
    songId?: StringWithAggregatesFilter<"Listening"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Listening"> | Date | string
  }

  export type RecommendationWhereInput = {
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    id?: StringFilter<"Recommendation"> | string
    userId?: StringFilter<"Recommendation"> | string
    songId?: StringFilter<"Recommendation"> | string
    score?: FloatFilter<"Recommendation"> | number
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
    playlists?: RecommendationPlaylistListRelationFilter
  }

  export type RecommendationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    song?: SongOrderByWithRelationInput
    playlists?: RecommendationPlaylistOrderByRelationAggregateInput
  }

  export type RecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_songId?: RecommendationUserIdSongIdCompoundUniqueInput
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    userId?: StringFilter<"Recommendation"> | string
    songId?: StringFilter<"Recommendation"> | string
    score?: FloatFilter<"Recommendation"> | number
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
    playlists?: RecommendationPlaylistListRelationFilter
  }, "id" | "userId_songId">

  export type RecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    _count?: RecommendationCountOrderByAggregateInput
    _avg?: RecommendationAvgOrderByAggregateInput
    _max?: RecommendationMaxOrderByAggregateInput
    _min?: RecommendationMinOrderByAggregateInput
    _sum?: RecommendationSumOrderByAggregateInput
  }

  export type RecommendationScalarWhereWithAggregatesInput = {
    AND?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    OR?: RecommendationScalarWhereWithAggregatesInput[]
    NOT?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recommendation"> | string
    userId?: StringWithAggregatesFilter<"Recommendation"> | string
    songId?: StringWithAggregatesFilter<"Recommendation"> | string
    score?: FloatWithAggregatesFilter<"Recommendation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Recommendation"> | Date | string
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: StringFilter<"Artist"> | string
    name?: StringFilter<"Artist"> | string
    slug?: StringFilter<"Artist"> | string
    avatarUrl?: StringNullableFilter<"Artist"> | string | null
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    songs?: SongListRelationFilter
    albums?: AlbumListRelationFilter
    followers?: UserListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    songs?: SongOrderByRelationAggregateInput
    albums?: AlbumOrderByRelationAggregateInput
    followers?: UserOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    name?: StringFilter<"Artist"> | string
    avatarUrl?: StringNullableFilter<"Artist"> | string | null
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    songs?: SongListRelationFilter
    albums?: AlbumListRelationFilter
    followers?: UserListRelationFilter
  }, "id" | "slug">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artist"> | string
    name?: StringWithAggregatesFilter<"Artist"> | string
    slug?: StringWithAggregatesFilter<"Artist"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
  }

  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: StringFilter<"Album"> | string
    title?: StringFilter<"Album"> | string
    coverUrl?: StringNullableFilter<"Album"> | string | null
    artistId?: StringFilter<"Album"> | string
    releaseDate?: DateTimeFilter<"Album"> | Date | string
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    songs?: SongListRelationFilter
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    coverUrl?: SortOrderInput | SortOrder
    artistId?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    songs?: SongOrderByRelationAggregateInput
    artist?: ArtistOrderByWithRelationInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    title?: StringFilter<"Album"> | string
    coverUrl?: StringNullableFilter<"Album"> | string | null
    artistId?: StringFilter<"Album"> | string
    releaseDate?: DateTimeFilter<"Album"> | Date | string
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    songs?: SongListRelationFilter
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
  }, "id">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    coverUrl?: SortOrderInput | SortOrder
    artistId?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Album"> | string
    title?: StringWithAggregatesFilter<"Album"> | string
    coverUrl?: StringNullableWithAggregatesFilter<"Album"> | string | null
    artistId?: StringWithAggregatesFilter<"Album"> | string
    releaseDate?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: StringFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    type?: EnumPlaylistTypeFilter<"Playlist"> | $Enums.PlaylistType
    coverUrl?: StringNullableFilter<"Playlist"> | string | null
    creatorId?: StringFilter<"Playlist"> | string
    createAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    songs?: SongListRelationFilter
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    users?: UserListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    coverUrl?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    songs?: SongOrderByRelationAggregateInput
    creator?: UserOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    title?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    type?: EnumPlaylistTypeFilter<"Playlist"> | $Enums.PlaylistType
    coverUrl?: StringNullableFilter<"Playlist"> | string | null
    creatorId?: StringFilter<"Playlist"> | string
    createAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    songs?: SongListRelationFilter
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    users?: UserListRelationFilter
  }, "id">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    coverUrl?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Playlist"> | string
    title?: StringWithAggregatesFilter<"Playlist"> | string
    description?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
    type?: EnumPlaylistTypeWithAggregatesFilter<"Playlist"> | $Enums.PlaylistType
    coverUrl?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
    creatorId?: StringWithAggregatesFilter<"Playlist"> | string
    createAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
  }

  export type RecommendationPlaylistWhereInput = {
    AND?: RecommendationPlaylistWhereInput | RecommendationPlaylistWhereInput[]
    OR?: RecommendationPlaylistWhereInput[]
    NOT?: RecommendationPlaylistWhereInput | RecommendationPlaylistWhereInput[]
    id?: StringFilter<"RecommendationPlaylist"> | string
    title?: StringFilter<"RecommendationPlaylist"> | string
    description?: StringFilter<"RecommendationPlaylist"> | string
    userId?: StringFilter<"RecommendationPlaylist"> | string
    createAt?: DateTimeFilter<"RecommendationPlaylist"> | Date | string
    updatedAt?: DateTimeFilter<"RecommendationPlaylist"> | Date | string
    recommendations?: RecommendationListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RecommendationPlaylistOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    recommendations?: RecommendationOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type RecommendationPlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecommendationPlaylistWhereInput | RecommendationPlaylistWhereInput[]
    OR?: RecommendationPlaylistWhereInput[]
    NOT?: RecommendationPlaylistWhereInput | RecommendationPlaylistWhereInput[]
    title?: StringFilter<"RecommendationPlaylist"> | string
    description?: StringFilter<"RecommendationPlaylist"> | string
    userId?: StringFilter<"RecommendationPlaylist"> | string
    createAt?: DateTimeFilter<"RecommendationPlaylist"> | Date | string
    updatedAt?: DateTimeFilter<"RecommendationPlaylist"> | Date | string
    recommendations?: RecommendationListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RecommendationPlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecommendationPlaylistCountOrderByAggregateInput
    _max?: RecommendationPlaylistMaxOrderByAggregateInput
    _min?: RecommendationPlaylistMinOrderByAggregateInput
  }

  export type RecommendationPlaylistScalarWhereWithAggregatesInput = {
    AND?: RecommendationPlaylistScalarWhereWithAggregatesInput | RecommendationPlaylistScalarWhereWithAggregatesInput[]
    OR?: RecommendationPlaylistScalarWhereWithAggregatesInput[]
    NOT?: RecommendationPlaylistScalarWhereWithAggregatesInput | RecommendationPlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecommendationPlaylist"> | string
    title?: StringWithAggregatesFilter<"RecommendationPlaylist"> | string
    description?: StringWithAggregatesFilter<"RecommendationPlaylist"> | string
    userId?: StringWithAggregatesFilter<"RecommendationPlaylist"> | string
    createAt?: DateTimeWithAggregatesFilter<"RecommendationPlaylist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RecommendationPlaylist"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    favoriteMusic?: SongCreateNestedManyWithoutUsersInput
    ownMusic?: SongCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistCreateNestedManyWithoutFollowersInput
    listenings?: ListeningCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    favoriteMusic?: SongUncheckedCreateNestedManyWithoutUsersInput
    ownMusic?: SongUncheckedCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistUncheckedCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUncheckedUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUncheckedUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUncheckedUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    message: string
    isRead: boolean
    userAvatar?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    message: string
    isRead: boolean
    userAvatar?: string | null
    userId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    message: string
    isRead: boolean
    userAvatar?: string | null
    userId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingsCreateInput = {
    id?: string
    webNotifications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationSettingsInput
  }

  export type NotificationSettingsUncheckedCreateInput = {
    id?: string
    webNotifications?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    webNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationSettingsNestedInput
  }

  export type NotificationSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    webNotifications?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingsCreateManyInput = {
    id?: string
    webNotifications?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    webNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    webNotifications?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCreateInput = {
    id?: string
    title: string
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistCreateNestedManyWithoutSongsInput
    album?: AlbumCreateNestedOneWithoutSongsInput
    users?: UserCreateNestedManyWithoutFavoriteMusicInput
    uploader?: UserCreateNestedOneWithoutOwnMusicInput
    playlists?: PlaylistCreateNestedManyWithoutSongsInput
    listenings?: ListeningCreateNestedManyWithoutSongInput
    recommendations?: RecommendationCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateInput = {
    id?: string
    title: string
    albumId?: string | null
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    uploaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistUncheckedCreateNestedManyWithoutSongsInput
    users?: UserUncheckedCreateNestedManyWithoutFavoriteMusicInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutSongsInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutSongInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUpdateManyWithoutSongsNestedInput
    album?: AlbumUpdateOneWithoutSongsNestedInput
    users?: UserUpdateManyWithoutFavoriteMusicNestedInput
    uploader?: UserUpdateOneWithoutOwnMusicNestedInput
    playlists?: PlaylistUpdateManyWithoutSongsNestedInput
    listenings?: ListeningUpdateManyWithoutSongNestedInput
    recommendations?: RecommendationUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUncheckedUpdateManyWithoutSongsNestedInput
    users?: UserUncheckedUpdateManyWithoutFavoriteMusicNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutSongsNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutSongNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongCreateManyInput = {
    id?: string
    title: string
    albumId?: string | null
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    uploaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SongUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningCreateInput = {
    id?: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutListeningsInput
    song: SongCreateNestedOneWithoutListeningsInput
  }

  export type ListeningUncheckedCreateInput = {
    id?: string
    userId: string
    songId: string
    timestamp?: Date | string
  }

  export type ListeningUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutListeningsNestedInput
    song?: SongUpdateOneRequiredWithoutListeningsNestedInput
  }

  export type ListeningUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningCreateManyInput = {
    id?: string
    userId: string
    songId: string
    timestamp?: Date | string
  }

  export type ListeningUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationCreateInput = {
    id?: string
    score: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRecommendationsInput
    song: SongCreateNestedOneWithoutRecommendationsInput
    playlists?: RecommendationPlaylistCreateNestedManyWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateInput = {
    id?: string
    userId: string
    songId: string
    score: number
    createdAt?: Date | string
    playlists?: RecommendationPlaylistUncheckedCreateNestedManyWithoutRecommendationsInput
  }

  export type RecommendationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecommendationsNestedInput
    song?: SongUpdateOneRequiredWithoutRecommendationsNestedInput
    playlists?: RecommendationPlaylistUpdateManyWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: RecommendationPlaylistUncheckedUpdateManyWithoutRecommendationsNestedInput
  }

  export type RecommendationCreateManyInput = {
    id?: string
    userId: string
    songId: string
    score: number
    createdAt?: Date | string
  }

  export type RecommendationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistCreateInput = {
    id?: string
    name: string
    slug: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutArtistsInput
    albums?: AlbumCreateNestedManyWithoutArtistInput
    followers?: UserCreateNestedManyWithoutFavoriteArtistsInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutArtistsInput
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistInput
    followers?: UserUncheckedCreateNestedManyWithoutFavoriteArtistsInput
  }

  export type ArtistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutArtistsNestedInput
    albums?: AlbumUpdateManyWithoutArtistNestedInput
    followers?: UserUpdateManyWithoutFavoriteArtistsNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutArtistsNestedInput
    albums?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
    followers?: UserUncheckedUpdateManyWithoutFavoriteArtistsNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: string
    name: string
    slug: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateInput = {
    id?: string
    title: string
    coverUrl?: string | null
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutAlbumInput
    artist: ArtistCreateNestedOneWithoutAlbumsInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: string
    title: string
    coverUrl?: string | null
    artistId: string
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutAlbumNestedInput
    artist?: ArtistUpdateOneRequiredWithoutAlbumsNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: string
    title: string
    coverUrl?: string | null
    artistId: string
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistCreateInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.PlaylistType
    coverUrl?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutPlaylistsInput
    creator: UserCreateNestedOneWithoutMyPlaylistsInput
    users?: UserCreateNestedManyWithoutFavoritePlaylistsInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.PlaylistType
    coverUrl?: string | null
    creatorId: string
    createAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutPlaylistsInput
    users?: UserUncheckedCreateNestedManyWithoutFavoritePlaylistsInput
  }

  export type PlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutPlaylistsNestedInput
    creator?: UserUpdateOneRequiredWithoutMyPlaylistsNestedInput
    users?: UserUpdateManyWithoutFavoritePlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutPlaylistsNestedInput
    users?: UserUncheckedUpdateManyWithoutFavoritePlaylistsNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.PlaylistType
    coverUrl?: string | null
    creatorId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationPlaylistCreateInput = {
    id?: string
    title: string
    description: string
    createAt?: Date | string
    updatedAt?: Date | string
    recommendations?: RecommendationCreateNestedManyWithoutPlaylistsInput
    user: UserCreateNestedOneWithoutMixesInput
  }

  export type RecommendationPlaylistUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    userId: string
    createAt?: Date | string
    updatedAt?: Date | string
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutPlaylistsInput
  }

  export type RecommendationPlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: RecommendationUpdateManyWithoutPlaylistsNestedInput
    user?: UserUpdateOneRequiredWithoutMixesNestedInput
  }

  export type RecommendationPlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: RecommendationUncheckedUpdateManyWithoutPlaylistsNestedInput
  }

  export type RecommendationPlaylistCreateManyInput = {
    id?: string
    title: string
    description: string
    userId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationPlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationPlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type NotificationSettingsNullableScalarRelationFilter = {
    is?: NotificationSettingsWhereInput | null
    isNot?: NotificationSettingsWhereInput | null
  }

  export type SongListRelationFilter = {
    every?: SongWhereInput
    some?: SongWhereInput
    none?: SongWhereInput
  }

  export type ArtistListRelationFilter = {
    every?: ArtistWhereInput
    some?: ArtistWhereInput
    none?: ArtistWhereInput
  }

  export type ListeningListRelationFilter = {
    every?: ListeningWhereInput
    some?: ListeningWhereInput
    none?: ListeningWhereInput
  }

  export type RecommendationListRelationFilter = {
    every?: RecommendationWhereInput
    some?: RecommendationWhereInput
    none?: RecommendationWhereInput
  }

  export type RecommendationPlaylistListRelationFilter = {
    every?: RecommendationPlaylistWhereInput
    some?: RecommendationPlaylistWhereInput
    none?: RecommendationPlaylistWhereInput
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListeningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecommendationPlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bio?: SortOrder
    dateOfBirth?: SortOrder
    avatar?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bio?: SortOrder
    dateOfBirth?: SortOrder
    avatar?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bio?: SortOrder
    dateOfBirth?: SortOrder
    avatar?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    userAvatar?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    userAvatar?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    userAvatar?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    webNotifications?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    webNotifications?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    webNotifications?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
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

  export type EnumSongStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SongStatus | EnumSongStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SongStatus[] | ListEnumSongStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SongStatus[] | ListEnumSongStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSongStatusFilter<$PrismaModel> | $Enums.SongStatus
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AlbumNullableScalarRelationFilter = {
    is?: AlbumWhereInput | null
    isNot?: AlbumWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    albumId?: SortOrder
    duration?: SortOrder
    audioUrl?: SortOrder
    status?: SortOrder
    genres?: SortOrder
    lyrics?: SortOrder
    coverUrl?: SortOrder
    uploaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type SongMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    albumId?: SortOrder
    duration?: SortOrder
    audioUrl?: SortOrder
    status?: SortOrder
    coverUrl?: SortOrder
    uploaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    albumId?: SortOrder
    duration?: SortOrder
    audioUrl?: SortOrder
    status?: SortOrder
    coverUrl?: SortOrder
    uploaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongSumOrderByAggregateInput = {
    duration?: SortOrder
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

  export type EnumSongStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SongStatus | EnumSongStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SongStatus[] | ListEnumSongStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SongStatus[] | ListEnumSongStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSongStatusWithAggregatesFilter<$PrismaModel> | $Enums.SongStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSongStatusFilter<$PrismaModel>
    _max?: NestedEnumSongStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SongScalarRelationFilter = {
    is?: SongWhereInput
    isNot?: SongWhereInput
  }

  export type ListeningUserIdSongIdCompoundUniqueInput = {
    userId: string
    songId: string
  }

  export type ListeningCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    timestamp?: SortOrder
  }

  export type ListeningMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    timestamp?: SortOrder
  }

  export type ListeningMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    timestamp?: SortOrder
  }

  export type RecommendationUserIdSongIdCompoundUniqueInput = {
    userId: string
    songId: string
  }

  export type RecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type RecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistScalarRelationFilter = {
    is?: ArtistWhereInput
    isNot?: ArtistWhereInput
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    coverUrl?: SortOrder
    artistId?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    coverUrl?: SortOrder
    artistId?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    coverUrl?: SortOrder
    artistId?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPlaylistTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaylistType | EnumPlaylistTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaylistTypeFilter<$PrismaModel> | $Enums.PlaylistType
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    coverUrl?: SortOrder
    creatorId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    coverUrl?: SortOrder
    creatorId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    coverUrl?: SortOrder
    creatorId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPlaylistTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaylistType | EnumPlaylistTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaylistTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlaylistType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlaylistTypeFilter<$PrismaModel>
    _max?: NestedEnumPlaylistTypeFilter<$PrismaModel>
  }

  export type RecommendationPlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecommendationPlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecommendationPlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<NotificationSettingsCreateWithoutUserInput, NotificationSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationSettingsCreateOrConnectWithoutUserInput
    connect?: NotificationSettingsWhereUniqueInput
  }

  export type SongCreateNestedManyWithoutUsersInput = {
    create?: XOR<SongCreateWithoutUsersInput, SongUncheckedCreateWithoutUsersInput> | SongCreateWithoutUsersInput[] | SongUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUsersInput | SongCreateOrConnectWithoutUsersInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type SongCreateNestedManyWithoutUploaderInput = {
    create?: XOR<SongCreateWithoutUploaderInput, SongUncheckedCreateWithoutUploaderInput> | SongCreateWithoutUploaderInput[] | SongUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUploaderInput | SongCreateOrConnectWithoutUploaderInput[]
    createMany?: SongCreateManyUploaderInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type ArtistCreateNestedManyWithoutFollowersInput = {
    create?: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput> | ArtistCreateWithoutFollowersInput[] | ArtistUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowersInput | ArtistCreateOrConnectWithoutFollowersInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type ListeningCreateNestedManyWithoutUserInput = {
    create?: XOR<ListeningCreateWithoutUserInput, ListeningUncheckedCreateWithoutUserInput> | ListeningCreateWithoutUserInput[] | ListeningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListeningCreateOrConnectWithoutUserInput | ListeningCreateOrConnectWithoutUserInput[]
    createMany?: ListeningCreateManyUserInputEnvelope
    connect?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
  }

  export type RecommendationCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type RecommendationPlaylistCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendationPlaylistCreateWithoutUserInput, RecommendationPlaylistUncheckedCreateWithoutUserInput> | RecommendationPlaylistCreateWithoutUserInput[] | RecommendationPlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationPlaylistCreateOrConnectWithoutUserInput | RecommendationPlaylistCreateOrConnectWithoutUserInput[]
    createMany?: RecommendationPlaylistCreateManyUserInputEnvelope
    connect?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PlaylistCreateWithoutCreatorInput, PlaylistUncheckedCreateWithoutCreatorInput> | PlaylistCreateWithoutCreatorInput[] | PlaylistUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutCreatorInput | PlaylistCreateOrConnectWithoutCreatorInput[]
    createMany?: PlaylistCreateManyCreatorInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutUsersInput = {
    create?: XOR<PlaylistCreateWithoutUsersInput, PlaylistUncheckedCreateWithoutUsersInput> | PlaylistCreateWithoutUsersInput[] | PlaylistUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUsersInput | PlaylistCreateOrConnectWithoutUsersInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<NotificationSettingsCreateWithoutUserInput, NotificationSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationSettingsCreateOrConnectWithoutUserInput
    connect?: NotificationSettingsWhereUniqueInput
  }

  export type SongUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<SongCreateWithoutUsersInput, SongUncheckedCreateWithoutUsersInput> | SongCreateWithoutUsersInput[] | SongUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUsersInput | SongCreateOrConnectWithoutUsersInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: XOR<SongCreateWithoutUploaderInput, SongUncheckedCreateWithoutUploaderInput> | SongCreateWithoutUploaderInput[] | SongUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUploaderInput | SongCreateOrConnectWithoutUploaderInput[]
    createMany?: SongCreateManyUploaderInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type ArtistUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput> | ArtistCreateWithoutFollowersInput[] | ArtistUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowersInput | ArtistCreateOrConnectWithoutFollowersInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type ListeningUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ListeningCreateWithoutUserInput, ListeningUncheckedCreateWithoutUserInput> | ListeningCreateWithoutUserInput[] | ListeningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListeningCreateOrConnectWithoutUserInput | ListeningCreateOrConnectWithoutUserInput[]
    createMany?: ListeningCreateManyUserInputEnvelope
    connect?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
  }

  export type RecommendationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type RecommendationPlaylistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendationPlaylistCreateWithoutUserInput, RecommendationPlaylistUncheckedCreateWithoutUserInput> | RecommendationPlaylistCreateWithoutUserInput[] | RecommendationPlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationPlaylistCreateOrConnectWithoutUserInput | RecommendationPlaylistCreateOrConnectWithoutUserInput[]
    createMany?: RecommendationPlaylistCreateManyUserInputEnvelope
    connect?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PlaylistCreateWithoutCreatorInput, PlaylistUncheckedCreateWithoutCreatorInput> | PlaylistCreateWithoutCreatorInput[] | PlaylistUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutCreatorInput | PlaylistCreateOrConnectWithoutCreatorInput[]
    createMany?: PlaylistCreateManyCreatorInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<PlaylistCreateWithoutUsersInput, PlaylistUncheckedCreateWithoutUsersInput> | PlaylistCreateWithoutUsersInput[] | PlaylistUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUsersInput | PlaylistCreateOrConnectWithoutUsersInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<NotificationSettingsCreateWithoutUserInput, NotificationSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationSettingsCreateOrConnectWithoutUserInput
    upsert?: NotificationSettingsUpsertWithoutUserInput
    disconnect?: NotificationSettingsWhereInput | boolean
    delete?: NotificationSettingsWhereInput | boolean
    connect?: NotificationSettingsWhereUniqueInput
    update?: XOR<XOR<NotificationSettingsUpdateToOneWithWhereWithoutUserInput, NotificationSettingsUpdateWithoutUserInput>, NotificationSettingsUncheckedUpdateWithoutUserInput>
  }

  export type SongUpdateManyWithoutUsersNestedInput = {
    create?: XOR<SongCreateWithoutUsersInput, SongUncheckedCreateWithoutUsersInput> | SongCreateWithoutUsersInput[] | SongUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUsersInput | SongCreateOrConnectWithoutUsersInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutUsersInput | SongUpsertWithWhereUniqueWithoutUsersInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutUsersInput | SongUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: SongUpdateManyWithWhereWithoutUsersInput | SongUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type SongUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<SongCreateWithoutUploaderInput, SongUncheckedCreateWithoutUploaderInput> | SongCreateWithoutUploaderInput[] | SongUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUploaderInput | SongCreateOrConnectWithoutUploaderInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutUploaderInput | SongUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: SongCreateManyUploaderInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutUploaderInput | SongUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: SongUpdateManyWithWhereWithoutUploaderInput | SongUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type ArtistUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput> | ArtistCreateWithoutFollowersInput[] | ArtistUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowersInput | ArtistCreateOrConnectWithoutFollowersInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutFollowersInput | ArtistUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutFollowersInput | ArtistUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutFollowersInput | ArtistUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type ListeningUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListeningCreateWithoutUserInput, ListeningUncheckedCreateWithoutUserInput> | ListeningCreateWithoutUserInput[] | ListeningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListeningCreateOrConnectWithoutUserInput | ListeningCreateOrConnectWithoutUserInput[]
    upsert?: ListeningUpsertWithWhereUniqueWithoutUserInput | ListeningUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListeningCreateManyUserInputEnvelope
    set?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    disconnect?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    delete?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    connect?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    update?: ListeningUpdateWithWhereUniqueWithoutUserInput | ListeningUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListeningUpdateManyWithWhereWithoutUserInput | ListeningUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListeningScalarWhereInput | ListeningScalarWhereInput[]
  }

  export type RecommendationUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutUserInput | RecommendationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutUserInput | RecommendationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutUserInput | RecommendationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type RecommendationPlaylistUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendationPlaylistCreateWithoutUserInput, RecommendationPlaylistUncheckedCreateWithoutUserInput> | RecommendationPlaylistCreateWithoutUserInput[] | RecommendationPlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationPlaylistCreateOrConnectWithoutUserInput | RecommendationPlaylistCreateOrConnectWithoutUserInput[]
    upsert?: RecommendationPlaylistUpsertWithWhereUniqueWithoutUserInput | RecommendationPlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendationPlaylistCreateManyUserInputEnvelope
    set?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    disconnect?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    delete?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    connect?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    update?: RecommendationPlaylistUpdateWithWhereUniqueWithoutUserInput | RecommendationPlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendationPlaylistUpdateManyWithWhereWithoutUserInput | RecommendationPlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendationPlaylistScalarWhereInput | RecommendationPlaylistScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PlaylistCreateWithoutCreatorInput, PlaylistUncheckedCreateWithoutCreatorInput> | PlaylistCreateWithoutCreatorInput[] | PlaylistUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutCreatorInput | PlaylistCreateOrConnectWithoutCreatorInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutCreatorInput | PlaylistUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PlaylistCreateManyCreatorInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutCreatorInput | PlaylistUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutCreatorInput | PlaylistUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PlaylistCreateWithoutUsersInput, PlaylistUncheckedCreateWithoutUsersInput> | PlaylistCreateWithoutUsersInput[] | PlaylistUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUsersInput | PlaylistCreateOrConnectWithoutUsersInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUsersInput | PlaylistUpsertWithWhereUniqueWithoutUsersInput[]
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUsersInput | PlaylistUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUsersInput | PlaylistUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<NotificationSettingsCreateWithoutUserInput, NotificationSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationSettingsCreateOrConnectWithoutUserInput
    upsert?: NotificationSettingsUpsertWithoutUserInput
    disconnect?: NotificationSettingsWhereInput | boolean
    delete?: NotificationSettingsWhereInput | boolean
    connect?: NotificationSettingsWhereUniqueInput
    update?: XOR<XOR<NotificationSettingsUpdateToOneWithWhereWithoutUserInput, NotificationSettingsUpdateWithoutUserInput>, NotificationSettingsUncheckedUpdateWithoutUserInput>
  }

  export type SongUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<SongCreateWithoutUsersInput, SongUncheckedCreateWithoutUsersInput> | SongCreateWithoutUsersInput[] | SongUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUsersInput | SongCreateOrConnectWithoutUsersInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutUsersInput | SongUpsertWithWhereUniqueWithoutUsersInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutUsersInput | SongUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: SongUpdateManyWithWhereWithoutUsersInput | SongUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<SongCreateWithoutUploaderInput, SongUncheckedCreateWithoutUploaderInput> | SongCreateWithoutUploaderInput[] | SongUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUploaderInput | SongCreateOrConnectWithoutUploaderInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutUploaderInput | SongUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: SongCreateManyUploaderInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutUploaderInput | SongUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: SongUpdateManyWithWhereWithoutUploaderInput | SongUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type ArtistUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput> | ArtistCreateWithoutFollowersInput[] | ArtistUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowersInput | ArtistCreateOrConnectWithoutFollowersInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutFollowersInput | ArtistUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutFollowersInput | ArtistUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutFollowersInput | ArtistUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type ListeningUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListeningCreateWithoutUserInput, ListeningUncheckedCreateWithoutUserInput> | ListeningCreateWithoutUserInput[] | ListeningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListeningCreateOrConnectWithoutUserInput | ListeningCreateOrConnectWithoutUserInput[]
    upsert?: ListeningUpsertWithWhereUniqueWithoutUserInput | ListeningUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListeningCreateManyUserInputEnvelope
    set?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    disconnect?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    delete?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    connect?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    update?: ListeningUpdateWithWhereUniqueWithoutUserInput | ListeningUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListeningUpdateManyWithWhereWithoutUserInput | ListeningUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListeningScalarWhereInput | ListeningScalarWhereInput[]
  }

  export type RecommendationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutUserInput | RecommendationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutUserInput | RecommendationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutUserInput | RecommendationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type RecommendationPlaylistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendationPlaylistCreateWithoutUserInput, RecommendationPlaylistUncheckedCreateWithoutUserInput> | RecommendationPlaylistCreateWithoutUserInput[] | RecommendationPlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationPlaylistCreateOrConnectWithoutUserInput | RecommendationPlaylistCreateOrConnectWithoutUserInput[]
    upsert?: RecommendationPlaylistUpsertWithWhereUniqueWithoutUserInput | RecommendationPlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendationPlaylistCreateManyUserInputEnvelope
    set?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    disconnect?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    delete?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    connect?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    update?: RecommendationPlaylistUpdateWithWhereUniqueWithoutUserInput | RecommendationPlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendationPlaylistUpdateManyWithWhereWithoutUserInput | RecommendationPlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendationPlaylistScalarWhereInput | RecommendationPlaylistScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PlaylistCreateWithoutCreatorInput, PlaylistUncheckedCreateWithoutCreatorInput> | PlaylistCreateWithoutCreatorInput[] | PlaylistUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutCreatorInput | PlaylistCreateOrConnectWithoutCreatorInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutCreatorInput | PlaylistUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PlaylistCreateManyCreatorInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutCreatorInput | PlaylistUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutCreatorInput | PlaylistUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PlaylistCreateWithoutUsersInput, PlaylistUncheckedCreateWithoutUsersInput> | PlaylistCreateWithoutUsersInput[] | PlaylistUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUsersInput | PlaylistCreateOrConnectWithoutUsersInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUsersInput | PlaylistUpsertWithWhereUniqueWithoutUsersInput[]
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUsersInput | PlaylistUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUsersInput | PlaylistUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutNotificationSettingsInput = {
    create?: XOR<UserCreateWithoutNotificationSettingsInput, UserUncheckedCreateWithoutNotificationSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationSettingsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationSettingsInput, UserUncheckedCreateWithoutNotificationSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationSettingsInput
    upsert?: UserUpsertWithoutNotificationSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationSettingsInput, UserUpdateWithoutNotificationSettingsInput>, UserUncheckedUpdateWithoutNotificationSettingsInput>
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type SongCreategenresInput = {
    set: string[]
  }

  export type ArtistCreateNestedManyWithoutSongsInput = {
    create?: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput> | ArtistCreateWithoutSongsInput[] | ArtistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongsInput | ArtistCreateOrConnectWithoutSongsInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type AlbumCreateNestedOneWithoutSongsInput = {
    create?: XOR<AlbumCreateWithoutSongsInput, AlbumUncheckedCreateWithoutSongsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutSongsInput
    connect?: AlbumWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutFavoriteMusicInput = {
    create?: XOR<UserCreateWithoutFavoriteMusicInput, UserUncheckedCreateWithoutFavoriteMusicInput> | UserCreateWithoutFavoriteMusicInput[] | UserUncheckedCreateWithoutFavoriteMusicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteMusicInput | UserCreateOrConnectWithoutFavoriteMusicInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutOwnMusicInput = {
    create?: XOR<UserCreateWithoutOwnMusicInput, UserUncheckedCreateWithoutOwnMusicInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnMusicInput
    connect?: UserWhereUniqueInput
  }

  export type PlaylistCreateNestedManyWithoutSongsInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput> | PlaylistCreateWithoutSongsInput[] | PlaylistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput | PlaylistCreateOrConnectWithoutSongsInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type ListeningCreateNestedManyWithoutSongInput = {
    create?: XOR<ListeningCreateWithoutSongInput, ListeningUncheckedCreateWithoutSongInput> | ListeningCreateWithoutSongInput[] | ListeningUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ListeningCreateOrConnectWithoutSongInput | ListeningCreateOrConnectWithoutSongInput[]
    createMany?: ListeningCreateManySongInputEnvelope
    connect?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
  }

  export type RecommendationCreateNestedManyWithoutSongInput = {
    create?: XOR<RecommendationCreateWithoutSongInput, RecommendationUncheckedCreateWithoutSongInput> | RecommendationCreateWithoutSongInput[] | RecommendationUncheckedCreateWithoutSongInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutSongInput | RecommendationCreateOrConnectWithoutSongInput[]
    createMany?: RecommendationCreateManySongInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type ArtistUncheckedCreateNestedManyWithoutSongsInput = {
    create?: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput> | ArtistCreateWithoutSongsInput[] | ArtistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongsInput | ArtistCreateOrConnectWithoutSongsInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFavoriteMusicInput = {
    create?: XOR<UserCreateWithoutFavoriteMusicInput, UserUncheckedCreateWithoutFavoriteMusicInput> | UserCreateWithoutFavoriteMusicInput[] | UserUncheckedCreateWithoutFavoriteMusicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteMusicInput | UserCreateOrConnectWithoutFavoriteMusicInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutSongsInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput> | PlaylistCreateWithoutSongsInput[] | PlaylistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput | PlaylistCreateOrConnectWithoutSongsInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type ListeningUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<ListeningCreateWithoutSongInput, ListeningUncheckedCreateWithoutSongInput> | ListeningCreateWithoutSongInput[] | ListeningUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ListeningCreateOrConnectWithoutSongInput | ListeningCreateOrConnectWithoutSongInput[]
    createMany?: ListeningCreateManySongInputEnvelope
    connect?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
  }

  export type RecommendationUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<RecommendationCreateWithoutSongInput, RecommendationUncheckedCreateWithoutSongInput> | RecommendationCreateWithoutSongInput[] | RecommendationUncheckedCreateWithoutSongInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutSongInput | RecommendationCreateOrConnectWithoutSongInput[]
    createMany?: RecommendationCreateManySongInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSongStatusFieldUpdateOperationsInput = {
    set?: $Enums.SongStatus
  }

  export type SongUpdategenresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArtistUpdateManyWithoutSongsNestedInput = {
    create?: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput> | ArtistCreateWithoutSongsInput[] | ArtistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongsInput | ArtistCreateOrConnectWithoutSongsInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutSongsInput | ArtistUpsertWithWhereUniqueWithoutSongsInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutSongsInput | ArtistUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutSongsInput | ArtistUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type AlbumUpdateOneWithoutSongsNestedInput = {
    create?: XOR<AlbumCreateWithoutSongsInput, AlbumUncheckedCreateWithoutSongsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutSongsInput
    upsert?: AlbumUpsertWithoutSongsInput
    disconnect?: AlbumWhereInput | boolean
    delete?: AlbumWhereInput | boolean
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutSongsInput, AlbumUpdateWithoutSongsInput>, AlbumUncheckedUpdateWithoutSongsInput>
  }

  export type UserUpdateManyWithoutFavoriteMusicNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteMusicInput, UserUncheckedCreateWithoutFavoriteMusicInput> | UserCreateWithoutFavoriteMusicInput[] | UserUncheckedCreateWithoutFavoriteMusicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteMusicInput | UserCreateOrConnectWithoutFavoriteMusicInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavoriteMusicInput | UserUpsertWithWhereUniqueWithoutFavoriteMusicInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavoriteMusicInput | UserUpdateWithWhereUniqueWithoutFavoriteMusicInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavoriteMusicInput | UserUpdateManyWithWhereWithoutFavoriteMusicInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneWithoutOwnMusicNestedInput = {
    create?: XOR<UserCreateWithoutOwnMusicInput, UserUncheckedCreateWithoutOwnMusicInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnMusicInput
    upsert?: UserUpsertWithoutOwnMusicInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnMusicInput, UserUpdateWithoutOwnMusicInput>, UserUncheckedUpdateWithoutOwnMusicInput>
  }

  export type PlaylistUpdateManyWithoutSongsNestedInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput> | PlaylistCreateWithoutSongsInput[] | PlaylistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput | PlaylistCreateOrConnectWithoutSongsInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutSongsInput | PlaylistUpsertWithWhereUniqueWithoutSongsInput[]
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutSongsInput | PlaylistUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutSongsInput | PlaylistUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type ListeningUpdateManyWithoutSongNestedInput = {
    create?: XOR<ListeningCreateWithoutSongInput, ListeningUncheckedCreateWithoutSongInput> | ListeningCreateWithoutSongInput[] | ListeningUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ListeningCreateOrConnectWithoutSongInput | ListeningCreateOrConnectWithoutSongInput[]
    upsert?: ListeningUpsertWithWhereUniqueWithoutSongInput | ListeningUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: ListeningCreateManySongInputEnvelope
    set?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    disconnect?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    delete?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    connect?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    update?: ListeningUpdateWithWhereUniqueWithoutSongInput | ListeningUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: ListeningUpdateManyWithWhereWithoutSongInput | ListeningUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: ListeningScalarWhereInput | ListeningScalarWhereInput[]
  }

  export type RecommendationUpdateManyWithoutSongNestedInput = {
    create?: XOR<RecommendationCreateWithoutSongInput, RecommendationUncheckedCreateWithoutSongInput> | RecommendationCreateWithoutSongInput[] | RecommendationUncheckedCreateWithoutSongInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutSongInput | RecommendationCreateOrConnectWithoutSongInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutSongInput | RecommendationUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: RecommendationCreateManySongInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutSongInput | RecommendationUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutSongInput | RecommendationUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type ArtistUncheckedUpdateManyWithoutSongsNestedInput = {
    create?: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput> | ArtistCreateWithoutSongsInput[] | ArtistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongsInput | ArtistCreateOrConnectWithoutSongsInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutSongsInput | ArtistUpsertWithWhereUniqueWithoutSongsInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutSongsInput | ArtistUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutSongsInput | ArtistUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFavoriteMusicNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteMusicInput, UserUncheckedCreateWithoutFavoriteMusicInput> | UserCreateWithoutFavoriteMusicInput[] | UserUncheckedCreateWithoutFavoriteMusicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteMusicInput | UserCreateOrConnectWithoutFavoriteMusicInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavoriteMusicInput | UserUpsertWithWhereUniqueWithoutFavoriteMusicInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavoriteMusicInput | UserUpdateWithWhereUniqueWithoutFavoriteMusicInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavoriteMusicInput | UserUpdateManyWithWhereWithoutFavoriteMusicInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutSongsNestedInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput> | PlaylistCreateWithoutSongsInput[] | PlaylistUncheckedCreateWithoutSongsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput | PlaylistCreateOrConnectWithoutSongsInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutSongsInput | PlaylistUpsertWithWhereUniqueWithoutSongsInput[]
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutSongsInput | PlaylistUpdateWithWhereUniqueWithoutSongsInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutSongsInput | PlaylistUpdateManyWithWhereWithoutSongsInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type ListeningUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<ListeningCreateWithoutSongInput, ListeningUncheckedCreateWithoutSongInput> | ListeningCreateWithoutSongInput[] | ListeningUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ListeningCreateOrConnectWithoutSongInput | ListeningCreateOrConnectWithoutSongInput[]
    upsert?: ListeningUpsertWithWhereUniqueWithoutSongInput | ListeningUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: ListeningCreateManySongInputEnvelope
    set?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    disconnect?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    delete?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    connect?: ListeningWhereUniqueInput | ListeningWhereUniqueInput[]
    update?: ListeningUpdateWithWhereUniqueWithoutSongInput | ListeningUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: ListeningUpdateManyWithWhereWithoutSongInput | ListeningUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: ListeningScalarWhereInput | ListeningScalarWhereInput[]
  }

  export type RecommendationUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<RecommendationCreateWithoutSongInput, RecommendationUncheckedCreateWithoutSongInput> | RecommendationCreateWithoutSongInput[] | RecommendationUncheckedCreateWithoutSongInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutSongInput | RecommendationCreateOrConnectWithoutSongInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutSongInput | RecommendationUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: RecommendationCreateManySongInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutSongInput | RecommendationUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutSongInput | RecommendationUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutListeningsInput = {
    create?: XOR<UserCreateWithoutListeningsInput, UserUncheckedCreateWithoutListeningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListeningsInput
    connect?: UserWhereUniqueInput
  }

  export type SongCreateNestedOneWithoutListeningsInput = {
    create?: XOR<SongCreateWithoutListeningsInput, SongUncheckedCreateWithoutListeningsInput>
    connectOrCreate?: SongCreateOrConnectWithoutListeningsInput
    connect?: SongWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutListeningsNestedInput = {
    create?: XOR<UserCreateWithoutListeningsInput, UserUncheckedCreateWithoutListeningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListeningsInput
    upsert?: UserUpsertWithoutListeningsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListeningsInput, UserUpdateWithoutListeningsInput>, UserUncheckedUpdateWithoutListeningsInput>
  }

  export type SongUpdateOneRequiredWithoutListeningsNestedInput = {
    create?: XOR<SongCreateWithoutListeningsInput, SongUncheckedCreateWithoutListeningsInput>
    connectOrCreate?: SongCreateOrConnectWithoutListeningsInput
    upsert?: SongUpsertWithoutListeningsInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutListeningsInput, SongUpdateWithoutListeningsInput>, SongUncheckedUpdateWithoutListeningsInput>
  }

  export type UserCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecommendationsInput
    connect?: UserWhereUniqueInput
  }

  export type SongCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<SongCreateWithoutRecommendationsInput, SongUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: SongCreateOrConnectWithoutRecommendationsInput
    connect?: SongWhereUniqueInput
  }

  export type RecommendationPlaylistCreateNestedManyWithoutRecommendationsInput = {
    create?: XOR<RecommendationPlaylistCreateWithoutRecommendationsInput, RecommendationPlaylistUncheckedCreateWithoutRecommendationsInput> | RecommendationPlaylistCreateWithoutRecommendationsInput[] | RecommendationPlaylistUncheckedCreateWithoutRecommendationsInput[]
    connectOrCreate?: RecommendationPlaylistCreateOrConnectWithoutRecommendationsInput | RecommendationPlaylistCreateOrConnectWithoutRecommendationsInput[]
    connect?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
  }

  export type RecommendationPlaylistUncheckedCreateNestedManyWithoutRecommendationsInput = {
    create?: XOR<RecommendationPlaylistCreateWithoutRecommendationsInput, RecommendationPlaylistUncheckedCreateWithoutRecommendationsInput> | RecommendationPlaylistCreateWithoutRecommendationsInput[] | RecommendationPlaylistUncheckedCreateWithoutRecommendationsInput[]
    connectOrCreate?: RecommendationPlaylistCreateOrConnectWithoutRecommendationsInput | RecommendationPlaylistCreateOrConnectWithoutRecommendationsInput[]
    connect?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecommendationsInput
    upsert?: UserUpsertWithoutRecommendationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecommendationsInput, UserUpdateWithoutRecommendationsInput>, UserUncheckedUpdateWithoutRecommendationsInput>
  }

  export type SongUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<SongCreateWithoutRecommendationsInput, SongUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: SongCreateOrConnectWithoutRecommendationsInput
    upsert?: SongUpsertWithoutRecommendationsInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutRecommendationsInput, SongUpdateWithoutRecommendationsInput>, SongUncheckedUpdateWithoutRecommendationsInput>
  }

  export type RecommendationPlaylistUpdateManyWithoutRecommendationsNestedInput = {
    create?: XOR<RecommendationPlaylistCreateWithoutRecommendationsInput, RecommendationPlaylistUncheckedCreateWithoutRecommendationsInput> | RecommendationPlaylistCreateWithoutRecommendationsInput[] | RecommendationPlaylistUncheckedCreateWithoutRecommendationsInput[]
    connectOrCreate?: RecommendationPlaylistCreateOrConnectWithoutRecommendationsInput | RecommendationPlaylistCreateOrConnectWithoutRecommendationsInput[]
    upsert?: RecommendationPlaylistUpsertWithWhereUniqueWithoutRecommendationsInput | RecommendationPlaylistUpsertWithWhereUniqueWithoutRecommendationsInput[]
    set?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    disconnect?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    delete?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    connect?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    update?: RecommendationPlaylistUpdateWithWhereUniqueWithoutRecommendationsInput | RecommendationPlaylistUpdateWithWhereUniqueWithoutRecommendationsInput[]
    updateMany?: RecommendationPlaylistUpdateManyWithWhereWithoutRecommendationsInput | RecommendationPlaylistUpdateManyWithWhereWithoutRecommendationsInput[]
    deleteMany?: RecommendationPlaylistScalarWhereInput | RecommendationPlaylistScalarWhereInput[]
  }

  export type RecommendationPlaylistUncheckedUpdateManyWithoutRecommendationsNestedInput = {
    create?: XOR<RecommendationPlaylistCreateWithoutRecommendationsInput, RecommendationPlaylistUncheckedCreateWithoutRecommendationsInput> | RecommendationPlaylistCreateWithoutRecommendationsInput[] | RecommendationPlaylistUncheckedCreateWithoutRecommendationsInput[]
    connectOrCreate?: RecommendationPlaylistCreateOrConnectWithoutRecommendationsInput | RecommendationPlaylistCreateOrConnectWithoutRecommendationsInput[]
    upsert?: RecommendationPlaylistUpsertWithWhereUniqueWithoutRecommendationsInput | RecommendationPlaylistUpsertWithWhereUniqueWithoutRecommendationsInput[]
    set?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    disconnect?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    delete?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    connect?: RecommendationPlaylistWhereUniqueInput | RecommendationPlaylistWhereUniqueInput[]
    update?: RecommendationPlaylistUpdateWithWhereUniqueWithoutRecommendationsInput | RecommendationPlaylistUpdateWithWhereUniqueWithoutRecommendationsInput[]
    updateMany?: RecommendationPlaylistUpdateManyWithWhereWithoutRecommendationsInput | RecommendationPlaylistUpdateManyWithWhereWithoutRecommendationsInput[]
    deleteMany?: RecommendationPlaylistScalarWhereInput | RecommendationPlaylistScalarWhereInput[]
  }

  export type SongCreateNestedManyWithoutArtistsInput = {
    create?: XOR<SongCreateWithoutArtistsInput, SongUncheckedCreateWithoutArtistsInput> | SongCreateWithoutArtistsInput[] | SongUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistsInput | SongCreateOrConnectWithoutArtistsInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type AlbumCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutFavoriteArtistsInput = {
    create?: XOR<UserCreateWithoutFavoriteArtistsInput, UserUncheckedCreateWithoutFavoriteArtistsInput> | UserCreateWithoutFavoriteArtistsInput[] | UserUncheckedCreateWithoutFavoriteArtistsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteArtistsInput | UserCreateOrConnectWithoutFavoriteArtistsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutArtistsInput = {
    create?: XOR<SongCreateWithoutArtistsInput, SongUncheckedCreateWithoutArtistsInput> | SongCreateWithoutArtistsInput[] | SongUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistsInput | SongCreateOrConnectWithoutArtistsInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFavoriteArtistsInput = {
    create?: XOR<UserCreateWithoutFavoriteArtistsInput, UserUncheckedCreateWithoutFavoriteArtistsInput> | UserCreateWithoutFavoriteArtistsInput[] | UserUncheckedCreateWithoutFavoriteArtistsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteArtistsInput | UserCreateOrConnectWithoutFavoriteArtistsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SongUpdateManyWithoutArtistsNestedInput = {
    create?: XOR<SongCreateWithoutArtistsInput, SongUncheckedCreateWithoutArtistsInput> | SongCreateWithoutArtistsInput[] | SongUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistsInput | SongCreateOrConnectWithoutArtistsInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutArtistsInput | SongUpsertWithWhereUniqueWithoutArtistsInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutArtistsInput | SongUpdateWithWhereUniqueWithoutArtistsInput[]
    updateMany?: SongUpdateManyWithWhereWithoutArtistsInput | SongUpdateManyWithWhereWithoutArtistsInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type AlbumUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type UserUpdateManyWithoutFavoriteArtistsNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteArtistsInput, UserUncheckedCreateWithoutFavoriteArtistsInput> | UserCreateWithoutFavoriteArtistsInput[] | UserUncheckedCreateWithoutFavoriteArtistsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteArtistsInput | UserCreateOrConnectWithoutFavoriteArtistsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavoriteArtistsInput | UserUpsertWithWhereUniqueWithoutFavoriteArtistsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavoriteArtistsInput | UserUpdateWithWhereUniqueWithoutFavoriteArtistsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavoriteArtistsInput | UserUpdateManyWithWhereWithoutFavoriteArtistsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutArtistsNestedInput = {
    create?: XOR<SongCreateWithoutArtistsInput, SongUncheckedCreateWithoutArtistsInput> | SongCreateWithoutArtistsInput[] | SongUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistsInput | SongCreateOrConnectWithoutArtistsInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutArtistsInput | SongUpsertWithWhereUniqueWithoutArtistsInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutArtistsInput | SongUpdateWithWhereUniqueWithoutArtistsInput[]
    updateMany?: SongUpdateManyWithWhereWithoutArtistsInput | SongUpdateManyWithWhereWithoutArtistsInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFavoriteArtistsNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteArtistsInput, UserUncheckedCreateWithoutFavoriteArtistsInput> | UserCreateWithoutFavoriteArtistsInput[] | UserUncheckedCreateWithoutFavoriteArtistsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteArtistsInput | UserCreateOrConnectWithoutFavoriteArtistsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavoriteArtistsInput | UserUpsertWithWhereUniqueWithoutFavoriteArtistsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavoriteArtistsInput | UserUpdateWithWhereUniqueWithoutFavoriteArtistsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavoriteArtistsInput | UserUpdateManyWithWhereWithoutFavoriteArtistsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SongCreateNestedManyWithoutAlbumInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type ArtistCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumsInput
    connect?: ArtistWhereUniqueInput
  }

  export type SongUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type SongUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutAlbumInput | SongUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutAlbumInput | SongUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: SongUpdateManyWithWhereWithoutAlbumInput | SongUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type ArtistUpdateOneRequiredWithoutAlbumsNestedInput = {
    create?: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumsInput
    upsert?: ArtistUpsertWithoutAlbumsInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutAlbumsInput, ArtistUpdateWithoutAlbumsInput>, ArtistUncheckedUpdateWithoutAlbumsInput>
  }

  export type SongUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutAlbumInput | SongUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: SongCreateManyAlbumInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutAlbumInput | SongUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: SongUpdateManyWithWhereWithoutAlbumInput | SongUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type SongCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput> | SongCreateWithoutPlaylistsInput[] | SongUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistsInput | SongCreateOrConnectWithoutPlaylistsInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutMyPlaylistsInput = {
    create?: XOR<UserCreateWithoutMyPlaylistsInput, UserUncheckedCreateWithoutMyPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMyPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutFavoritePlaylistsInput = {
    create?: XOR<UserCreateWithoutFavoritePlaylistsInput, UserUncheckedCreateWithoutFavoritePlaylistsInput> | UserCreateWithoutFavoritePlaylistsInput[] | UserUncheckedCreateWithoutFavoritePlaylistsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoritePlaylistsInput | UserCreateOrConnectWithoutFavoritePlaylistsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput> | SongCreateWithoutPlaylistsInput[] | SongUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistsInput | SongCreateOrConnectWithoutPlaylistsInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFavoritePlaylistsInput = {
    create?: XOR<UserCreateWithoutFavoritePlaylistsInput, UserUncheckedCreateWithoutFavoritePlaylistsInput> | UserCreateWithoutFavoritePlaylistsInput[] | UserUncheckedCreateWithoutFavoritePlaylistsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoritePlaylistsInput | UserCreateOrConnectWithoutFavoritePlaylistsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumPlaylistTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlaylistType
  }

  export type SongUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput> | SongCreateWithoutPlaylistsInput[] | SongUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistsInput | SongCreateOrConnectWithoutPlaylistsInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutPlaylistsInput | SongUpsertWithWhereUniqueWithoutPlaylistsInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutPlaylistsInput | SongUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: SongUpdateManyWithWhereWithoutPlaylistsInput | SongUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutMyPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutMyPlaylistsInput, UserUncheckedCreateWithoutMyPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMyPlaylistsInput
    upsert?: UserUpsertWithoutMyPlaylistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMyPlaylistsInput, UserUpdateWithoutMyPlaylistsInput>, UserUncheckedUpdateWithoutMyPlaylistsInput>
  }

  export type UserUpdateManyWithoutFavoritePlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutFavoritePlaylistsInput, UserUncheckedCreateWithoutFavoritePlaylistsInput> | UserCreateWithoutFavoritePlaylistsInput[] | UserUncheckedCreateWithoutFavoritePlaylistsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoritePlaylistsInput | UserCreateOrConnectWithoutFavoritePlaylistsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavoritePlaylistsInput | UserUpsertWithWhereUniqueWithoutFavoritePlaylistsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavoritePlaylistsInput | UserUpdateWithWhereUniqueWithoutFavoritePlaylistsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavoritePlaylistsInput | UserUpdateManyWithWhereWithoutFavoritePlaylistsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput> | SongCreateWithoutPlaylistsInput[] | SongUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistsInput | SongCreateOrConnectWithoutPlaylistsInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutPlaylistsInput | SongUpsertWithWhereUniqueWithoutPlaylistsInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutPlaylistsInput | SongUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: SongUpdateManyWithWhereWithoutPlaylistsInput | SongUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFavoritePlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutFavoritePlaylistsInput, UserUncheckedCreateWithoutFavoritePlaylistsInput> | UserCreateWithoutFavoritePlaylistsInput[] | UserUncheckedCreateWithoutFavoritePlaylistsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoritePlaylistsInput | UserCreateOrConnectWithoutFavoritePlaylistsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavoritePlaylistsInput | UserUpsertWithWhereUniqueWithoutFavoritePlaylistsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavoritePlaylistsInput | UserUpdateWithWhereUniqueWithoutFavoritePlaylistsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavoritePlaylistsInput | UserUpdateManyWithWhereWithoutFavoritePlaylistsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RecommendationCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<RecommendationCreateWithoutPlaylistsInput, RecommendationUncheckedCreateWithoutPlaylistsInput> | RecommendationCreateWithoutPlaylistsInput[] | RecommendationUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutPlaylistsInput | RecommendationCreateOrConnectWithoutPlaylistsInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutMixesInput = {
    create?: XOR<UserCreateWithoutMixesInput, UserUncheckedCreateWithoutMixesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMixesInput
    connect?: UserWhereUniqueInput
  }

  export type RecommendationUncheckedCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<RecommendationCreateWithoutPlaylistsInput, RecommendationUncheckedCreateWithoutPlaylistsInput> | RecommendationCreateWithoutPlaylistsInput[] | RecommendationUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutPlaylistsInput | RecommendationCreateOrConnectWithoutPlaylistsInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type RecommendationUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<RecommendationCreateWithoutPlaylistsInput, RecommendationUncheckedCreateWithoutPlaylistsInput> | RecommendationCreateWithoutPlaylistsInput[] | RecommendationUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutPlaylistsInput | RecommendationCreateOrConnectWithoutPlaylistsInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutPlaylistsInput | RecommendationUpsertWithWhereUniqueWithoutPlaylistsInput[]
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutPlaylistsInput | RecommendationUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutPlaylistsInput | RecommendationUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutMixesNestedInput = {
    create?: XOR<UserCreateWithoutMixesInput, UserUncheckedCreateWithoutMixesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMixesInput
    upsert?: UserUpsertWithoutMixesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMixesInput, UserUpdateWithoutMixesInput>, UserUncheckedUpdateWithoutMixesInput>
  }

  export type RecommendationUncheckedUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<RecommendationCreateWithoutPlaylistsInput, RecommendationUncheckedCreateWithoutPlaylistsInput> | RecommendationCreateWithoutPlaylistsInput[] | RecommendationUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutPlaylistsInput | RecommendationCreateOrConnectWithoutPlaylistsInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutPlaylistsInput | RecommendationUpsertWithWhereUniqueWithoutPlaylistsInput[]
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutPlaylistsInput | RecommendationUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutPlaylistsInput | RecommendationUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
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

  export type NestedEnumSongStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SongStatus | EnumSongStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SongStatus[] | ListEnumSongStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SongStatus[] | ListEnumSongStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSongStatusFilter<$PrismaModel> | $Enums.SongStatus
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

  export type NestedEnumSongStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SongStatus | EnumSongStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SongStatus[] | ListEnumSongStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SongStatus[] | ListEnumSongStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSongStatusWithAggregatesFilter<$PrismaModel> | $Enums.SongStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSongStatusFilter<$PrismaModel>
    _max?: NestedEnumSongStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPlaylistTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaylistType | EnumPlaylistTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaylistTypeFilter<$PrismaModel> | $Enums.PlaylistType
  }

  export type NestedEnumPlaylistTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlaylistType | EnumPlaylistTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlaylistType[] | ListEnumPlaylistTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlaylistTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlaylistType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlaylistTypeFilter<$PrismaModel>
    _max?: NestedEnumPlaylistTypeFilter<$PrismaModel>
  }

  export type TokenCreateWithoutUserInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    message: string
    isRead: boolean
    userAvatar?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    message: string
    isRead: boolean
    userAvatar?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationSettingsCreateWithoutUserInput = {
    id?: string
    webNotifications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSettingsUncheckedCreateWithoutUserInput = {
    id?: string
    webNotifications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSettingsCreateOrConnectWithoutUserInput = {
    where: NotificationSettingsWhereUniqueInput
    create: XOR<NotificationSettingsCreateWithoutUserInput, NotificationSettingsUncheckedCreateWithoutUserInput>
  }

  export type SongCreateWithoutUsersInput = {
    id?: string
    title: string
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistCreateNestedManyWithoutSongsInput
    album?: AlbumCreateNestedOneWithoutSongsInput
    uploader?: UserCreateNestedOneWithoutOwnMusicInput
    playlists?: PlaylistCreateNestedManyWithoutSongsInput
    listenings?: ListeningCreateNestedManyWithoutSongInput
    recommendations?: RecommendationCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutUsersInput = {
    id?: string
    title: string
    albumId?: string | null
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    uploaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistUncheckedCreateNestedManyWithoutSongsInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutSongsInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutSongInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutUsersInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutUsersInput, SongUncheckedCreateWithoutUsersInput>
  }

  export type SongCreateWithoutUploaderInput = {
    id?: string
    title: string
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistCreateNestedManyWithoutSongsInput
    album?: AlbumCreateNestedOneWithoutSongsInput
    users?: UserCreateNestedManyWithoutFavoriteMusicInput
    playlists?: PlaylistCreateNestedManyWithoutSongsInput
    listenings?: ListeningCreateNestedManyWithoutSongInput
    recommendations?: RecommendationCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutUploaderInput = {
    id?: string
    title: string
    albumId?: string | null
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistUncheckedCreateNestedManyWithoutSongsInput
    users?: UserUncheckedCreateNestedManyWithoutFavoriteMusicInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutSongsInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutSongInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutUploaderInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutUploaderInput, SongUncheckedCreateWithoutUploaderInput>
  }

  export type SongCreateManyUploaderInputEnvelope = {
    data: SongCreateManyUploaderInput | SongCreateManyUploaderInput[]
    skipDuplicates?: boolean
  }

  export type ArtistCreateWithoutFollowersInput = {
    id?: string
    name: string
    slug: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutArtistsInput
    albums?: AlbumCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutFollowersInput = {
    id?: string
    name: string
    slug: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutArtistsInput
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutFollowersInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
  }

  export type ListeningCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    song: SongCreateNestedOneWithoutListeningsInput
  }

  export type ListeningUncheckedCreateWithoutUserInput = {
    id?: string
    songId: string
    timestamp?: Date | string
  }

  export type ListeningCreateOrConnectWithoutUserInput = {
    where: ListeningWhereUniqueInput
    create: XOR<ListeningCreateWithoutUserInput, ListeningUncheckedCreateWithoutUserInput>
  }

  export type ListeningCreateManyUserInputEnvelope = {
    data: ListeningCreateManyUserInput | ListeningCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationCreateWithoutUserInput = {
    id?: string
    score: number
    createdAt?: Date | string
    song: SongCreateNestedOneWithoutRecommendationsInput
    playlists?: RecommendationPlaylistCreateNestedManyWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateWithoutUserInput = {
    id?: string
    songId: string
    score: number
    createdAt?: Date | string
    playlists?: RecommendationPlaylistUncheckedCreateNestedManyWithoutRecommendationsInput
  }

  export type RecommendationCreateOrConnectWithoutUserInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput>
  }

  export type RecommendationCreateManyUserInputEnvelope = {
    data: RecommendationCreateManyUserInput | RecommendationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationPlaylistCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    createAt?: Date | string
    updatedAt?: Date | string
    recommendations?: RecommendationCreateNestedManyWithoutPlaylistsInput
  }

  export type RecommendationPlaylistUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    createAt?: Date | string
    updatedAt?: Date | string
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutPlaylistsInput
  }

  export type RecommendationPlaylistCreateOrConnectWithoutUserInput = {
    where: RecommendationPlaylistWhereUniqueInput
    create: XOR<RecommendationPlaylistCreateWithoutUserInput, RecommendationPlaylistUncheckedCreateWithoutUserInput>
  }

  export type RecommendationPlaylistCreateManyUserInputEnvelope = {
    data: RecommendationPlaylistCreateManyUserInput | RecommendationPlaylistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.PlaylistType
    coverUrl?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutPlaylistsInput
    users?: UserCreateNestedManyWithoutFavoritePlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.PlaylistType
    coverUrl?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutPlaylistsInput
    users?: UserUncheckedCreateNestedManyWithoutFavoritePlaylistsInput
  }

  export type PlaylistCreateOrConnectWithoutCreatorInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutCreatorInput, PlaylistUncheckedCreateWithoutCreatorInput>
  }

  export type PlaylistCreateManyCreatorInputEnvelope = {
    data: PlaylistCreateManyCreatorInput | PlaylistCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistCreateWithoutUsersInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.PlaylistType
    coverUrl?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutPlaylistsInput
    creator: UserCreateNestedOneWithoutMyPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutUsersInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.PlaylistType
    coverUrl?: string | null
    creatorId: string
    createAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutPlaylistsInput
  }

  export type PlaylistCreateOrConnectWithoutUsersInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutUsersInput, PlaylistUncheckedCreateWithoutUsersInput>
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expiresIn?: DateTimeFilter<"Token"> | Date | string
    userId?: StringFilter<"Token"> | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    userAvatar?: StringNullableFilter<"Notification"> | string | null
    userId?: StringFilter<"Notification"> | string
    createAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationSettingsUpsertWithoutUserInput = {
    update: XOR<NotificationSettingsUpdateWithoutUserInput, NotificationSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationSettingsCreateWithoutUserInput, NotificationSettingsUncheckedCreateWithoutUserInput>
    where?: NotificationSettingsWhereInput
  }

  export type NotificationSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: NotificationSettingsWhereInput
    data: XOR<NotificationSettingsUpdateWithoutUserInput, NotificationSettingsUncheckedUpdateWithoutUserInput>
  }

  export type NotificationSettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    webNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    webNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUpsertWithWhereUniqueWithoutUsersInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutUsersInput, SongUncheckedUpdateWithoutUsersInput>
    create: XOR<SongCreateWithoutUsersInput, SongUncheckedCreateWithoutUsersInput>
  }

  export type SongUpdateWithWhereUniqueWithoutUsersInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutUsersInput, SongUncheckedUpdateWithoutUsersInput>
  }

  export type SongUpdateManyWithWhereWithoutUsersInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutUsersInput>
  }

  export type SongScalarWhereInput = {
    AND?: SongScalarWhereInput | SongScalarWhereInput[]
    OR?: SongScalarWhereInput[]
    NOT?: SongScalarWhereInput | SongScalarWhereInput[]
    id?: StringFilter<"Song"> | string
    title?: StringFilter<"Song"> | string
    albumId?: StringNullableFilter<"Song"> | string | null
    duration?: FloatFilter<"Song"> | number
    audioUrl?: StringFilter<"Song"> | string
    status?: EnumSongStatusFilter<"Song"> | $Enums.SongStatus
    genres?: StringNullableListFilter<"Song">
    lyrics?: JsonNullableFilter<"Song">
    coverUrl?: StringNullableFilter<"Song"> | string | null
    uploaderId?: StringNullableFilter<"Song"> | string | null
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updatedAt?: DateTimeFilter<"Song"> | Date | string
  }

  export type SongUpsertWithWhereUniqueWithoutUploaderInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutUploaderInput, SongUncheckedUpdateWithoutUploaderInput>
    create: XOR<SongCreateWithoutUploaderInput, SongUncheckedCreateWithoutUploaderInput>
  }

  export type SongUpdateWithWhereUniqueWithoutUploaderInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutUploaderInput, SongUncheckedUpdateWithoutUploaderInput>
  }

  export type SongUpdateManyWithWhereWithoutUploaderInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutUploaderInput>
  }

  export type ArtistUpsertWithWhereUniqueWithoutFollowersInput = {
    where: ArtistWhereUniqueInput
    update: XOR<ArtistUpdateWithoutFollowersInput, ArtistUncheckedUpdateWithoutFollowersInput>
    create: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
  }

  export type ArtistUpdateWithWhereUniqueWithoutFollowersInput = {
    where: ArtistWhereUniqueInput
    data: XOR<ArtistUpdateWithoutFollowersInput, ArtistUncheckedUpdateWithoutFollowersInput>
  }

  export type ArtistUpdateManyWithWhereWithoutFollowersInput = {
    where: ArtistScalarWhereInput
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyWithoutFollowersInput>
  }

  export type ArtistScalarWhereInput = {
    AND?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
    OR?: ArtistScalarWhereInput[]
    NOT?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
    id?: StringFilter<"Artist"> | string
    name?: StringFilter<"Artist"> | string
    slug?: StringFilter<"Artist"> | string
    avatarUrl?: StringNullableFilter<"Artist"> | string | null
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
  }

  export type ListeningUpsertWithWhereUniqueWithoutUserInput = {
    where: ListeningWhereUniqueInput
    update: XOR<ListeningUpdateWithoutUserInput, ListeningUncheckedUpdateWithoutUserInput>
    create: XOR<ListeningCreateWithoutUserInput, ListeningUncheckedCreateWithoutUserInput>
  }

  export type ListeningUpdateWithWhereUniqueWithoutUserInput = {
    where: ListeningWhereUniqueInput
    data: XOR<ListeningUpdateWithoutUserInput, ListeningUncheckedUpdateWithoutUserInput>
  }

  export type ListeningUpdateManyWithWhereWithoutUserInput = {
    where: ListeningScalarWhereInput
    data: XOR<ListeningUpdateManyMutationInput, ListeningUncheckedUpdateManyWithoutUserInput>
  }

  export type ListeningScalarWhereInput = {
    AND?: ListeningScalarWhereInput | ListeningScalarWhereInput[]
    OR?: ListeningScalarWhereInput[]
    NOT?: ListeningScalarWhereInput | ListeningScalarWhereInput[]
    id?: StringFilter<"Listening"> | string
    userId?: StringFilter<"Listening"> | string
    songId?: StringFilter<"Listening"> | string
    timestamp?: DateTimeFilter<"Listening"> | Date | string
  }

  export type RecommendationUpsertWithWhereUniqueWithoutUserInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutUserInput, RecommendationUncheckedUpdateWithoutUserInput>
    create: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutUserInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutUserInput, RecommendationUncheckedUpdateWithoutUserInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutUserInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutUserInput>
  }

  export type RecommendationScalarWhereInput = {
    AND?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    OR?: RecommendationScalarWhereInput[]
    NOT?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    id?: StringFilter<"Recommendation"> | string
    userId?: StringFilter<"Recommendation"> | string
    songId?: StringFilter<"Recommendation"> | string
    score?: FloatFilter<"Recommendation"> | number
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
  }

  export type RecommendationPlaylistUpsertWithWhereUniqueWithoutUserInput = {
    where: RecommendationPlaylistWhereUniqueInput
    update: XOR<RecommendationPlaylistUpdateWithoutUserInput, RecommendationPlaylistUncheckedUpdateWithoutUserInput>
    create: XOR<RecommendationPlaylistCreateWithoutUserInput, RecommendationPlaylistUncheckedCreateWithoutUserInput>
  }

  export type RecommendationPlaylistUpdateWithWhereUniqueWithoutUserInput = {
    where: RecommendationPlaylistWhereUniqueInput
    data: XOR<RecommendationPlaylistUpdateWithoutUserInput, RecommendationPlaylistUncheckedUpdateWithoutUserInput>
  }

  export type RecommendationPlaylistUpdateManyWithWhereWithoutUserInput = {
    where: RecommendationPlaylistScalarWhereInput
    data: XOR<RecommendationPlaylistUpdateManyMutationInput, RecommendationPlaylistUncheckedUpdateManyWithoutUserInput>
  }

  export type RecommendationPlaylistScalarWhereInput = {
    AND?: RecommendationPlaylistScalarWhereInput | RecommendationPlaylistScalarWhereInput[]
    OR?: RecommendationPlaylistScalarWhereInput[]
    NOT?: RecommendationPlaylistScalarWhereInput | RecommendationPlaylistScalarWhereInput[]
    id?: StringFilter<"RecommendationPlaylist"> | string
    title?: StringFilter<"RecommendationPlaylist"> | string
    description?: StringFilter<"RecommendationPlaylist"> | string
    userId?: StringFilter<"RecommendationPlaylist"> | string
    createAt?: DateTimeFilter<"RecommendationPlaylist"> | Date | string
    updatedAt?: DateTimeFilter<"RecommendationPlaylist"> | Date | string
  }

  export type PlaylistUpsertWithWhereUniqueWithoutCreatorInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutCreatorInput, PlaylistUncheckedUpdateWithoutCreatorInput>
    create: XOR<PlaylistCreateWithoutCreatorInput, PlaylistUncheckedCreateWithoutCreatorInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutCreatorInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutCreatorInput, PlaylistUncheckedUpdateWithoutCreatorInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutCreatorInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutCreatorInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: StringFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    type?: EnumPlaylistTypeFilter<"Playlist"> | $Enums.PlaylistType
    coverUrl?: StringNullableFilter<"Playlist"> | string | null
    creatorId?: StringFilter<"Playlist"> | string
    createAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
  }

  export type PlaylistUpsertWithWhereUniqueWithoutUsersInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutUsersInput, PlaylistUncheckedUpdateWithoutUsersInput>
    create: XOR<PlaylistCreateWithoutUsersInput, PlaylistUncheckedCreateWithoutUsersInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutUsersInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutUsersInput, PlaylistUncheckedUpdateWithoutUsersInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutUsersInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    favoriteMusic?: SongCreateNestedManyWithoutUsersInput
    ownMusic?: SongCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistCreateNestedManyWithoutFollowersInput
    listenings?: ListeningCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    favoriteMusic?: SongUncheckedCreateNestedManyWithoutUsersInput
    ownMusic?: SongUncheckedCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistUncheckedCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUncheckedUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUncheckedUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUncheckedUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateWithoutNotificationSettingsInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    favoriteMusic?: SongCreateNestedManyWithoutUsersInput
    ownMusic?: SongCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistCreateNestedManyWithoutFollowersInput
    listenings?: ListeningCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutNotificationSettingsInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    favoriteMusic?: SongUncheckedCreateNestedManyWithoutUsersInput
    ownMusic?: SongUncheckedCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistUncheckedCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutNotificationSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationSettingsInput, UserUncheckedCreateWithoutNotificationSettingsInput>
  }

  export type UserUpsertWithoutNotificationSettingsInput = {
    update: XOR<UserUpdateWithoutNotificationSettingsInput, UserUncheckedUpdateWithoutNotificationSettingsInput>
    create: XOR<UserCreateWithoutNotificationSettingsInput, UserUncheckedCreateWithoutNotificationSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationSettingsInput, UserUncheckedUpdateWithoutNotificationSettingsInput>
  }

  export type UserUpdateWithoutNotificationSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    favoriteMusic?: SongUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    favoriteMusic?: SongUncheckedUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUncheckedUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUncheckedUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateWithoutTokensInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    favoriteMusic?: SongCreateNestedManyWithoutUsersInput
    ownMusic?: SongCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistCreateNestedManyWithoutFollowersInput
    listenings?: ListeningCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    favoriteMusic?: SongUncheckedCreateNestedManyWithoutUsersInput
    ownMusic?: SongUncheckedCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistUncheckedCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUncheckedUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUncheckedUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUncheckedUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ArtistCreateWithoutSongsInput = {
    id?: string
    name: string
    slug: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    albums?: AlbumCreateNestedManyWithoutArtistInput
    followers?: UserCreateNestedManyWithoutFavoriteArtistsInput
  }

  export type ArtistUncheckedCreateWithoutSongsInput = {
    id?: string
    name: string
    slug: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistInput
    followers?: UserUncheckedCreateNestedManyWithoutFavoriteArtistsInput
  }

  export type ArtistCreateOrConnectWithoutSongsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput>
  }

  export type AlbumCreateWithoutSongsInput = {
    id?: string
    title: string
    coverUrl?: string | null
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    artist: ArtistCreateNestedOneWithoutAlbumsInput
  }

  export type AlbumUncheckedCreateWithoutSongsInput = {
    id?: string
    title: string
    coverUrl?: string | null
    artistId: string
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumCreateOrConnectWithoutSongsInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutSongsInput, AlbumUncheckedCreateWithoutSongsInput>
  }

  export type UserCreateWithoutFavoriteMusicInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    ownMusic?: SongCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistCreateNestedManyWithoutFollowersInput
    listenings?: ListeningCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutFavoriteMusicInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    ownMusic?: SongUncheckedCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistUncheckedCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutFavoriteMusicInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteMusicInput, UserUncheckedCreateWithoutFavoriteMusicInput>
  }

  export type UserCreateWithoutOwnMusicInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    favoriteMusic?: SongCreateNestedManyWithoutUsersInput
    favoriteArtists?: ArtistCreateNestedManyWithoutFollowersInput
    listenings?: ListeningCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutOwnMusicInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    favoriteMusic?: SongUncheckedCreateNestedManyWithoutUsersInput
    favoriteArtists?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistUncheckedCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutOwnMusicInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnMusicInput, UserUncheckedCreateWithoutOwnMusicInput>
  }

  export type PlaylistCreateWithoutSongsInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.PlaylistType
    coverUrl?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutMyPlaylistsInput
    users?: UserCreateNestedManyWithoutFavoritePlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutSongsInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.PlaylistType
    coverUrl?: string | null
    creatorId: string
    createAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutFavoritePlaylistsInput
  }

  export type PlaylistCreateOrConnectWithoutSongsInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput>
  }

  export type ListeningCreateWithoutSongInput = {
    id?: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutListeningsInput
  }

  export type ListeningUncheckedCreateWithoutSongInput = {
    id?: string
    userId: string
    timestamp?: Date | string
  }

  export type ListeningCreateOrConnectWithoutSongInput = {
    where: ListeningWhereUniqueInput
    create: XOR<ListeningCreateWithoutSongInput, ListeningUncheckedCreateWithoutSongInput>
  }

  export type ListeningCreateManySongInputEnvelope = {
    data: ListeningCreateManySongInput | ListeningCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationCreateWithoutSongInput = {
    id?: string
    score: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRecommendationsInput
    playlists?: RecommendationPlaylistCreateNestedManyWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateWithoutSongInput = {
    id?: string
    userId: string
    score: number
    createdAt?: Date | string
    playlists?: RecommendationPlaylistUncheckedCreateNestedManyWithoutRecommendationsInput
  }

  export type RecommendationCreateOrConnectWithoutSongInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutSongInput, RecommendationUncheckedCreateWithoutSongInput>
  }

  export type RecommendationCreateManySongInputEnvelope = {
    data: RecommendationCreateManySongInput | RecommendationCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type ArtistUpsertWithWhereUniqueWithoutSongsInput = {
    where: ArtistWhereUniqueInput
    update: XOR<ArtistUpdateWithoutSongsInput, ArtistUncheckedUpdateWithoutSongsInput>
    create: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput>
  }

  export type ArtistUpdateWithWhereUniqueWithoutSongsInput = {
    where: ArtistWhereUniqueInput
    data: XOR<ArtistUpdateWithoutSongsInput, ArtistUncheckedUpdateWithoutSongsInput>
  }

  export type ArtistUpdateManyWithWhereWithoutSongsInput = {
    where: ArtistScalarWhereInput
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyWithoutSongsInput>
  }

  export type AlbumUpsertWithoutSongsInput = {
    update: XOR<AlbumUpdateWithoutSongsInput, AlbumUncheckedUpdateWithoutSongsInput>
    create: XOR<AlbumCreateWithoutSongsInput, AlbumUncheckedCreateWithoutSongsInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutSongsInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutSongsInput, AlbumUncheckedUpdateWithoutSongsInput>
  }

  export type AlbumUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistUpdateOneRequiredWithoutAlbumsNestedInput
  }

  export type AlbumUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutFavoriteMusicInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFavoriteMusicInput, UserUncheckedUpdateWithoutFavoriteMusicInput>
    create: XOR<UserCreateWithoutFavoriteMusicInput, UserUncheckedCreateWithoutFavoriteMusicInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFavoriteMusicInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFavoriteMusicInput, UserUncheckedUpdateWithoutFavoriteMusicInput>
  }

  export type UserUpdateManyWithWhereWithoutFavoriteMusicInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFavoriteMusicInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserUpsertWithoutOwnMusicInput = {
    update: XOR<UserUpdateWithoutOwnMusicInput, UserUncheckedUpdateWithoutOwnMusicInput>
    create: XOR<UserCreateWithoutOwnMusicInput, UserUncheckedCreateWithoutOwnMusicInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnMusicInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnMusicInput, UserUncheckedUpdateWithoutOwnMusicInput>
  }

  export type UserUpdateWithoutOwnMusicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUpdateManyWithoutUsersNestedInput
    favoriteArtists?: ArtistUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnMusicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUncheckedUpdateManyWithoutUsersNestedInput
    favoriteArtists?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUncheckedUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type PlaylistUpsertWithWhereUniqueWithoutSongsInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutSongsInput, PlaylistUncheckedUpdateWithoutSongsInput>
    create: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutSongsInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutSongsInput, PlaylistUncheckedUpdateWithoutSongsInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutSongsInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutSongsInput>
  }

  export type ListeningUpsertWithWhereUniqueWithoutSongInput = {
    where: ListeningWhereUniqueInput
    update: XOR<ListeningUpdateWithoutSongInput, ListeningUncheckedUpdateWithoutSongInput>
    create: XOR<ListeningCreateWithoutSongInput, ListeningUncheckedCreateWithoutSongInput>
  }

  export type ListeningUpdateWithWhereUniqueWithoutSongInput = {
    where: ListeningWhereUniqueInput
    data: XOR<ListeningUpdateWithoutSongInput, ListeningUncheckedUpdateWithoutSongInput>
  }

  export type ListeningUpdateManyWithWhereWithoutSongInput = {
    where: ListeningScalarWhereInput
    data: XOR<ListeningUpdateManyMutationInput, ListeningUncheckedUpdateManyWithoutSongInput>
  }

  export type RecommendationUpsertWithWhereUniqueWithoutSongInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutSongInput, RecommendationUncheckedUpdateWithoutSongInput>
    create: XOR<RecommendationCreateWithoutSongInput, RecommendationUncheckedCreateWithoutSongInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutSongInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutSongInput, RecommendationUncheckedUpdateWithoutSongInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutSongInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutSongInput>
  }

  export type UserCreateWithoutListeningsInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    favoriteMusic?: SongCreateNestedManyWithoutUsersInput
    ownMusic?: SongCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistCreateNestedManyWithoutFollowersInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutListeningsInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    favoriteMusic?: SongUncheckedCreateNestedManyWithoutUsersInput
    ownMusic?: SongUncheckedCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistUncheckedCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutListeningsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListeningsInput, UserUncheckedCreateWithoutListeningsInput>
  }

  export type SongCreateWithoutListeningsInput = {
    id?: string
    title: string
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistCreateNestedManyWithoutSongsInput
    album?: AlbumCreateNestedOneWithoutSongsInput
    users?: UserCreateNestedManyWithoutFavoriteMusicInput
    uploader?: UserCreateNestedOneWithoutOwnMusicInput
    playlists?: PlaylistCreateNestedManyWithoutSongsInput
    recommendations?: RecommendationCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutListeningsInput = {
    id?: string
    title: string
    albumId?: string | null
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    uploaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistUncheckedCreateNestedManyWithoutSongsInput
    users?: UserUncheckedCreateNestedManyWithoutFavoriteMusicInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutSongsInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutListeningsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutListeningsInput, SongUncheckedCreateWithoutListeningsInput>
  }

  export type UserUpsertWithoutListeningsInput = {
    update: XOR<UserUpdateWithoutListeningsInput, UserUncheckedUpdateWithoutListeningsInput>
    create: XOR<UserCreateWithoutListeningsInput, UserUncheckedCreateWithoutListeningsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListeningsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListeningsInput, UserUncheckedUpdateWithoutListeningsInput>
  }

  export type UserUpdateWithoutListeningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUpdateManyWithoutFollowersNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutListeningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUncheckedUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUncheckedUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUncheckedUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type SongUpsertWithoutListeningsInput = {
    update: XOR<SongUpdateWithoutListeningsInput, SongUncheckedUpdateWithoutListeningsInput>
    create: XOR<SongCreateWithoutListeningsInput, SongUncheckedCreateWithoutListeningsInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutListeningsInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutListeningsInput, SongUncheckedUpdateWithoutListeningsInput>
  }

  export type SongUpdateWithoutListeningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUpdateManyWithoutSongsNestedInput
    album?: AlbumUpdateOneWithoutSongsNestedInput
    users?: UserUpdateManyWithoutFavoriteMusicNestedInput
    uploader?: UserUpdateOneWithoutOwnMusicNestedInput
    playlists?: PlaylistUpdateManyWithoutSongsNestedInput
    recommendations?: RecommendationUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutListeningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUncheckedUpdateManyWithoutSongsNestedInput
    users?: UserUncheckedUpdateManyWithoutFavoriteMusicNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutSongsNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutSongNestedInput
  }

  export type UserCreateWithoutRecommendationsInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    favoriteMusic?: SongCreateNestedManyWithoutUsersInput
    ownMusic?: SongCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistCreateNestedManyWithoutFollowersInput
    listenings?: ListeningCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutRecommendationsInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    favoriteMusic?: SongUncheckedCreateNestedManyWithoutUsersInput
    ownMusic?: SongUncheckedCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistUncheckedCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutRecommendationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
  }

  export type SongCreateWithoutRecommendationsInput = {
    id?: string
    title: string
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistCreateNestedManyWithoutSongsInput
    album?: AlbumCreateNestedOneWithoutSongsInput
    users?: UserCreateNestedManyWithoutFavoriteMusicInput
    uploader?: UserCreateNestedOneWithoutOwnMusicInput
    playlists?: PlaylistCreateNestedManyWithoutSongsInput
    listenings?: ListeningCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutRecommendationsInput = {
    id?: string
    title: string
    albumId?: string | null
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    uploaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistUncheckedCreateNestedManyWithoutSongsInput
    users?: UserUncheckedCreateNestedManyWithoutFavoriteMusicInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutSongsInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutRecommendationsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutRecommendationsInput, SongUncheckedCreateWithoutRecommendationsInput>
  }

  export type RecommendationPlaylistCreateWithoutRecommendationsInput = {
    id?: string
    title: string
    description: string
    createAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMixesInput
  }

  export type RecommendationPlaylistUncheckedCreateWithoutRecommendationsInput = {
    id?: string
    title: string
    description: string
    userId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationPlaylistCreateOrConnectWithoutRecommendationsInput = {
    where: RecommendationPlaylistWhereUniqueInput
    create: XOR<RecommendationPlaylistCreateWithoutRecommendationsInput, RecommendationPlaylistUncheckedCreateWithoutRecommendationsInput>
  }

  export type UserUpsertWithoutRecommendationsInput = {
    update: XOR<UserUpdateWithoutRecommendationsInput, UserUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecommendationsInput, UserUncheckedUpdateWithoutRecommendationsInput>
  }

  export type UserUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUncheckedUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUncheckedUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUncheckedUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type SongUpsertWithoutRecommendationsInput = {
    update: XOR<SongUpdateWithoutRecommendationsInput, SongUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<SongCreateWithoutRecommendationsInput, SongUncheckedCreateWithoutRecommendationsInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutRecommendationsInput, SongUncheckedUpdateWithoutRecommendationsInput>
  }

  export type SongUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUpdateManyWithoutSongsNestedInput
    album?: AlbumUpdateOneWithoutSongsNestedInput
    users?: UserUpdateManyWithoutFavoriteMusicNestedInput
    uploader?: UserUpdateOneWithoutOwnMusicNestedInput
    playlists?: PlaylistUpdateManyWithoutSongsNestedInput
    listenings?: ListeningUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUncheckedUpdateManyWithoutSongsNestedInput
    users?: UserUncheckedUpdateManyWithoutFavoriteMusicNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutSongsNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutSongNestedInput
  }

  export type RecommendationPlaylistUpsertWithWhereUniqueWithoutRecommendationsInput = {
    where: RecommendationPlaylistWhereUniqueInput
    update: XOR<RecommendationPlaylistUpdateWithoutRecommendationsInput, RecommendationPlaylistUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<RecommendationPlaylistCreateWithoutRecommendationsInput, RecommendationPlaylistUncheckedCreateWithoutRecommendationsInput>
  }

  export type RecommendationPlaylistUpdateWithWhereUniqueWithoutRecommendationsInput = {
    where: RecommendationPlaylistWhereUniqueInput
    data: XOR<RecommendationPlaylistUpdateWithoutRecommendationsInput, RecommendationPlaylistUncheckedUpdateWithoutRecommendationsInput>
  }

  export type RecommendationPlaylistUpdateManyWithWhereWithoutRecommendationsInput = {
    where: RecommendationPlaylistScalarWhereInput
    data: XOR<RecommendationPlaylistUpdateManyMutationInput, RecommendationPlaylistUncheckedUpdateManyWithoutRecommendationsInput>
  }

  export type SongCreateWithoutArtistsInput = {
    id?: string
    title: string
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    album?: AlbumCreateNestedOneWithoutSongsInput
    users?: UserCreateNestedManyWithoutFavoriteMusicInput
    uploader?: UserCreateNestedOneWithoutOwnMusicInput
    playlists?: PlaylistCreateNestedManyWithoutSongsInput
    listenings?: ListeningCreateNestedManyWithoutSongInput
    recommendations?: RecommendationCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutArtistsInput = {
    id?: string
    title: string
    albumId?: string | null
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    uploaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutFavoriteMusicInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutSongsInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutSongInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutArtistsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutArtistsInput, SongUncheckedCreateWithoutArtistsInput>
  }

  export type AlbumCreateWithoutArtistInput = {
    id?: string
    title: string
    coverUrl?: string | null
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutArtistInput = {
    id?: string
    title: string
    coverUrl?: string | null
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumCreateManyArtistInputEnvelope = {
    data: AlbumCreateManyArtistInput | AlbumCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutFavoriteArtistsInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    favoriteMusic?: SongCreateNestedManyWithoutUsersInput
    ownMusic?: SongCreateNestedManyWithoutUploaderInput
    listenings?: ListeningCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutFavoriteArtistsInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    favoriteMusic?: SongUncheckedCreateNestedManyWithoutUsersInput
    ownMusic?: SongUncheckedCreateNestedManyWithoutUploaderInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistUncheckedCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutFavoriteArtistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteArtistsInput, UserUncheckedCreateWithoutFavoriteArtistsInput>
  }

  export type SongUpsertWithWhereUniqueWithoutArtistsInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutArtistsInput, SongUncheckedUpdateWithoutArtistsInput>
    create: XOR<SongCreateWithoutArtistsInput, SongUncheckedCreateWithoutArtistsInput>
  }

  export type SongUpdateWithWhereUniqueWithoutArtistsInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutArtistsInput, SongUncheckedUpdateWithoutArtistsInput>
  }

  export type SongUpdateManyWithWhereWithoutArtistsInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutArtistsInput>
  }

  export type AlbumUpsertWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
  }

  export type AlbumUpdateManyWithWhereWithoutArtistInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutArtistInput>
  }

  export type AlbumScalarWhereInput = {
    AND?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    OR?: AlbumScalarWhereInput[]
    NOT?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    id?: StringFilter<"Album"> | string
    title?: StringFilter<"Album"> | string
    coverUrl?: StringNullableFilter<"Album"> | string | null
    artistId?: StringFilter<"Album"> | string
    releaseDate?: DateTimeFilter<"Album"> | Date | string
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutFavoriteArtistsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFavoriteArtistsInput, UserUncheckedUpdateWithoutFavoriteArtistsInput>
    create: XOR<UserCreateWithoutFavoriteArtistsInput, UserUncheckedCreateWithoutFavoriteArtistsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFavoriteArtistsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFavoriteArtistsInput, UserUncheckedUpdateWithoutFavoriteArtistsInput>
  }

  export type UserUpdateManyWithWhereWithoutFavoriteArtistsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFavoriteArtistsInput>
  }

  export type SongCreateWithoutAlbumInput = {
    id?: string
    title: string
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistCreateNestedManyWithoutSongsInput
    users?: UserCreateNestedManyWithoutFavoriteMusicInput
    uploader?: UserCreateNestedOneWithoutOwnMusicInput
    playlists?: PlaylistCreateNestedManyWithoutSongsInput
    listenings?: ListeningCreateNestedManyWithoutSongInput
    recommendations?: RecommendationCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutAlbumInput = {
    id?: string
    title: string
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    uploaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistUncheckedCreateNestedManyWithoutSongsInput
    users?: UserUncheckedCreateNestedManyWithoutFavoriteMusicInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutSongsInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutSongInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutAlbumInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput>
  }

  export type SongCreateManyAlbumInputEnvelope = {
    data: SongCreateManyAlbumInput | SongCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type ArtistCreateWithoutAlbumsInput = {
    id?: string
    name: string
    slug: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongCreateNestedManyWithoutArtistsInput
    followers?: UserCreateNestedManyWithoutFavoriteArtistsInput
  }

  export type ArtistUncheckedCreateWithoutAlbumsInput = {
    id?: string
    name: string
    slug: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    songs?: SongUncheckedCreateNestedManyWithoutArtistsInput
    followers?: UserUncheckedCreateNestedManyWithoutFavoriteArtistsInput
  }

  export type ArtistCreateOrConnectWithoutAlbumsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
  }

  export type SongUpsertWithWhereUniqueWithoutAlbumInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutAlbumInput, SongUncheckedUpdateWithoutAlbumInput>
    create: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput>
  }

  export type SongUpdateWithWhereUniqueWithoutAlbumInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutAlbumInput, SongUncheckedUpdateWithoutAlbumInput>
  }

  export type SongUpdateManyWithWhereWithoutAlbumInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutAlbumInput>
  }

  export type ArtistUpsertWithoutAlbumsInput = {
    update: XOR<ArtistUpdateWithoutAlbumsInput, ArtistUncheckedUpdateWithoutAlbumsInput>
    create: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutAlbumsInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutAlbumsInput, ArtistUncheckedUpdateWithoutAlbumsInput>
  }

  export type ArtistUpdateWithoutAlbumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutArtistsNestedInput
    followers?: UserUpdateManyWithoutFavoriteArtistsNestedInput
  }

  export type ArtistUncheckedUpdateWithoutAlbumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutArtistsNestedInput
    followers?: UserUncheckedUpdateManyWithoutFavoriteArtistsNestedInput
  }

  export type SongCreateWithoutPlaylistsInput = {
    id?: string
    title: string
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistCreateNestedManyWithoutSongsInput
    album?: AlbumCreateNestedOneWithoutSongsInput
    users?: UserCreateNestedManyWithoutFavoriteMusicInput
    uploader?: UserCreateNestedOneWithoutOwnMusicInput
    listenings?: ListeningCreateNestedManyWithoutSongInput
    recommendations?: RecommendationCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    title: string
    albumId?: string | null
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    uploaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ArtistUncheckedCreateNestedManyWithoutSongsInput
    users?: UserUncheckedCreateNestedManyWithoutFavoriteMusicInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutSongInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutPlaylistsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput>
  }

  export type UserCreateWithoutMyPlaylistsInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    favoriteMusic?: SongCreateNestedManyWithoutUsersInput
    ownMusic?: SongCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistCreateNestedManyWithoutFollowersInput
    listenings?: ListeningCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistCreateNestedManyWithoutUserInput
    favoritePlaylists?: PlaylistCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutMyPlaylistsInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    favoriteMusic?: SongUncheckedCreateNestedManyWithoutUsersInput
    ownMusic?: SongUncheckedCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistUncheckedCreateNestedManyWithoutUserInput
    favoritePlaylists?: PlaylistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutMyPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMyPlaylistsInput, UserUncheckedCreateWithoutMyPlaylistsInput>
  }

  export type UserCreateWithoutFavoritePlaylistsInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    favoriteMusic?: SongCreateNestedManyWithoutUsersInput
    ownMusic?: SongCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistCreateNestedManyWithoutFollowersInput
    listenings?: ListeningCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutFavoritePlaylistsInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    favoriteMusic?: SongUncheckedCreateNestedManyWithoutUsersInput
    ownMusic?: SongUncheckedCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
    mixes?: RecommendationPlaylistUncheckedCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutFavoritePlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritePlaylistsInput, UserUncheckedCreateWithoutFavoritePlaylistsInput>
  }

  export type SongUpsertWithWhereUniqueWithoutPlaylistsInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutPlaylistsInput, SongUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<SongCreateWithoutPlaylistsInput, SongUncheckedCreateWithoutPlaylistsInput>
  }

  export type SongUpdateWithWhereUniqueWithoutPlaylistsInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutPlaylistsInput, SongUncheckedUpdateWithoutPlaylistsInput>
  }

  export type SongUpdateManyWithWhereWithoutPlaylistsInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutPlaylistsInput>
  }

  export type UserUpsertWithoutMyPlaylistsInput = {
    update: XOR<UserUpdateWithoutMyPlaylistsInput, UserUncheckedUpdateWithoutMyPlaylistsInput>
    create: XOR<UserCreateWithoutMyPlaylistsInput, UserUncheckedCreateWithoutMyPlaylistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMyPlaylistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMyPlaylistsInput, UserUncheckedUpdateWithoutMyPlaylistsInput>
  }

  export type UserUpdateWithoutMyPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUpdateManyWithoutUserNestedInput
    favoritePlaylists?: PlaylistUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutMyPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUncheckedUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUncheckedUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUncheckedUpdateManyWithoutUserNestedInput
    favoritePlaylists?: PlaylistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutFavoritePlaylistsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFavoritePlaylistsInput, UserUncheckedUpdateWithoutFavoritePlaylistsInput>
    create: XOR<UserCreateWithoutFavoritePlaylistsInput, UserUncheckedCreateWithoutFavoritePlaylistsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFavoritePlaylistsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFavoritePlaylistsInput, UserUncheckedUpdateWithoutFavoritePlaylistsInput>
  }

  export type UserUpdateManyWithWhereWithoutFavoritePlaylistsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFavoritePlaylistsInput>
  }

  export type RecommendationCreateWithoutPlaylistsInput = {
    id?: string
    score: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRecommendationsInput
    song: SongCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    userId: string
    songId: string
    score: number
    createdAt?: Date | string
  }

  export type RecommendationCreateOrConnectWithoutPlaylistsInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutPlaylistsInput, RecommendationUncheckedCreateWithoutPlaylistsInput>
  }

  export type UserCreateWithoutMixesInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsCreateNestedOneWithoutUserInput
    favoriteMusic?: SongCreateNestedManyWithoutUsersInput
    ownMusic?: SongCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistCreateNestedManyWithoutFollowersInput
    listenings?: ListeningCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutMixesInput = {
    id?: string
    email: string
    password: string
    username: string
    firstName: string
    lastName: string
    bio?: string | null
    dateOfBirth?: Date | string | null
    avatar?: string | null
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationSettings?: NotificationSettingsUncheckedCreateNestedOneWithoutUserInput
    favoriteMusic?: SongUncheckedCreateNestedManyWithoutUsersInput
    ownMusic?: SongUncheckedCreateNestedManyWithoutUploaderInput
    favoriteArtists?: ArtistUncheckedCreateNestedManyWithoutFollowersInput
    listenings?: ListeningUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
    myPlaylists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
    favoritePlaylists?: PlaylistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutMixesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMixesInput, UserUncheckedCreateWithoutMixesInput>
  }

  export type RecommendationUpsertWithWhereUniqueWithoutPlaylistsInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutPlaylistsInput, RecommendationUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<RecommendationCreateWithoutPlaylistsInput, RecommendationUncheckedCreateWithoutPlaylistsInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutPlaylistsInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutPlaylistsInput, RecommendationUncheckedUpdateWithoutPlaylistsInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutPlaylistsInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutPlaylistsInput>
  }

  export type UserUpsertWithoutMixesInput = {
    update: XOR<UserUpdateWithoutMixesInput, UserUncheckedUpdateWithoutMixesInput>
    create: XOR<UserCreateWithoutMixesInput, UserUncheckedCreateWithoutMixesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMixesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMixesInput, UserUncheckedUpdateWithoutMixesInput>
  }

  export type UserUpdateWithoutMixesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutMixesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUncheckedUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUncheckedUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type TokenCreateManyUserInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    message: string
    isRead: boolean
    userAvatar?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type SongCreateManyUploaderInput = {
    id?: string
    title: string
    albumId?: string | null
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListeningCreateManyUserInput = {
    id?: string
    songId: string
    timestamp?: Date | string
  }

  export type RecommendationCreateManyUserInput = {
    id?: string
    songId: string
    score: number
    createdAt?: Date | string
  }

  export type RecommendationPlaylistCreateManyUserInput = {
    id?: string
    title: string
    description: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistCreateManyCreatorInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.PlaylistType
    coverUrl?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUpdateManyWithoutSongsNestedInput
    album?: AlbumUpdateOneWithoutSongsNestedInput
    uploader?: UserUpdateOneWithoutOwnMusicNestedInput
    playlists?: PlaylistUpdateManyWithoutSongsNestedInput
    listenings?: ListeningUpdateManyWithoutSongNestedInput
    recommendations?: RecommendationUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUncheckedUpdateManyWithoutSongsNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutSongsNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutSongNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUpdateManyWithoutSongsNestedInput
    album?: AlbumUpdateOneWithoutSongsNestedInput
    users?: UserUpdateManyWithoutFavoriteMusicNestedInput
    playlists?: PlaylistUpdateManyWithoutSongsNestedInput
    listenings?: ListeningUpdateManyWithoutSongNestedInput
    recommendations?: RecommendationUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUncheckedUpdateManyWithoutSongsNestedInput
    users?: UserUncheckedUpdateManyWithoutFavoriteMusicNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutSongsNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutSongNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutArtistsNestedInput
    albums?: AlbumUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutArtistsNestedInput
    albums?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateManyWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutListeningsNestedInput
  }

  export type ListeningUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutRecommendationsNestedInput
    playlists?: RecommendationPlaylistUpdateManyWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: RecommendationPlaylistUncheckedUpdateManyWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationPlaylistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: RecommendationUpdateManyWithoutPlaylistsNestedInput
  }

  export type RecommendationPlaylistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: RecommendationUncheckedUpdateManyWithoutPlaylistsNestedInput
  }

  export type RecommendationPlaylistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutPlaylistsNestedInput
    users?: UserUpdateManyWithoutFavoritePlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutPlaylistsNestedInput
    users?: UserUncheckedUpdateManyWithoutFavoritePlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutPlaylistsNestedInput
    creator?: UserUpdateOneRequiredWithoutMyPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningCreateManySongInput = {
    id?: string
    userId: string
    timestamp?: Date | string
  }

  export type RecommendationCreateManySongInput = {
    id?: string
    userId: string
    score: number
    createdAt?: Date | string
  }

  export type ArtistUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albums?: AlbumUpdateManyWithoutArtistNestedInput
    followers?: UserUpdateManyWithoutFavoriteArtistsNestedInput
  }

  export type ArtistUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albums?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
    followers?: UserUncheckedUpdateManyWithoutFavoriteArtistsNestedInput
  }

  export type ArtistUncheckedUpdateManyWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutFavoriteMusicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    ownMusic?: SongUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteMusicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    ownMusic?: SongUncheckedUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUncheckedUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFavoriteMusicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutMyPlaylistsNestedInput
    users?: UserUpdateManyWithoutFavoritePlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutFavoritePlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPlaylistTypeFieldUpdateOperationsInput | $Enums.PlaylistType
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutListeningsNestedInput
  }

  export type ListeningUncheckedUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListeningUncheckedUpdateManyWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecommendationsNestedInput
    playlists?: RecommendationPlaylistUpdateManyWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: RecommendationPlaylistUncheckedUpdateManyWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateManyWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationPlaylistUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMixesNestedInput
  }

  export type RecommendationPlaylistUncheckedUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationPlaylistUncheckedUpdateManyWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateManyArtistInput = {
    id?: string
    title: string
    coverUrl?: string | null
    releaseDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SongUpdateWithoutArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneWithoutSongsNestedInput
    users?: UserUpdateManyWithoutFavoriteMusicNestedInput
    uploader?: UserUpdateOneWithoutOwnMusicNestedInput
    playlists?: PlaylistUpdateManyWithoutSongsNestedInput
    listenings?: ListeningUpdateManyWithoutSongNestedInput
    recommendations?: RecommendationUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutFavoriteMusicNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutSongsNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutSongNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUpdateWithoutArtistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutArtistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songs?: SongUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutArtistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutFavoriteArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUpdateManyWithoutUploaderNestedInput
    listenings?: ListeningUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUncheckedUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUncheckedUpdateManyWithoutUploaderNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUncheckedUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
    favoritePlaylists?: PlaylistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFavoriteArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCreateManyAlbumInput = {
    id?: string
    title: string
    duration: number
    audioUrl: string
    status?: $Enums.SongStatus
    genres?: SongCreategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: string | null
    uploaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SongUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUpdateManyWithoutSongsNestedInput
    users?: UserUpdateManyWithoutFavoriteMusicNestedInput
    uploader?: UserUpdateOneWithoutOwnMusicNestedInput
    playlists?: PlaylistUpdateManyWithoutSongsNestedInput
    listenings?: ListeningUpdateManyWithoutSongNestedInput
    recommendations?: RecommendationUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUncheckedUpdateManyWithoutSongsNestedInput
    users?: UserUncheckedUpdateManyWithoutFavoriteMusicNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutSongsNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutSongNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUpdateManyWithoutSongsNestedInput
    album?: AlbumUpdateOneWithoutSongsNestedInput
    users?: UserUpdateManyWithoutFavoriteMusicNestedInput
    uploader?: UserUpdateOneWithoutOwnMusicNestedInput
    listenings?: ListeningUpdateManyWithoutSongNestedInput
    recommendations?: RecommendationUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistUncheckedUpdateManyWithoutSongsNestedInput
    users?: UserUncheckedUpdateManyWithoutFavoriteMusicNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutSongNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: FloatFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumSongStatusFieldUpdateOperationsInput | $Enums.SongStatus
    genres?: SongUpdategenresInput | string[]
    lyrics?: NullableJsonNullValueInput | InputJsonValue
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutFavoritePlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritePlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationSettings?: NotificationSettingsUncheckedUpdateOneWithoutUserNestedInput
    favoriteMusic?: SongUncheckedUpdateManyWithoutUsersNestedInput
    ownMusic?: SongUncheckedUpdateManyWithoutUploaderNestedInput
    favoriteArtists?: ArtistUncheckedUpdateManyWithoutFollowersNestedInput
    listenings?: ListeningUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
    mixes?: RecommendationPlaylistUncheckedUpdateManyWithoutUserNestedInput
    myPlaylists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFavoritePlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecommendationsNestedInput
    song?: SongUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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