import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly appointments: "appointments";
    readonly customers: "customers";
    readonly doctors: "doctors";
    readonly order_items: "order_items";
    readonly orders: "orders";
    readonly orders1: "orders1";
    readonly patients: "patients";
    readonly product: "product";
    readonly products: "products";
    readonly treatments: "treatments";
    readonly users: "users";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "appointments" | "customers" | "doctors" | "order_items" | "orders" | "orders1" | "patients" | "product" | "products" | "treatments" | "users";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        appointments: {
            payload: Prisma.$appointmentsPayload<ExtArgs>;
            fields: Prisma.appointmentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.appointmentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$appointmentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.appointmentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$appointmentsPayload>;
                };
                findFirst: {
                    args: Prisma.appointmentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$appointmentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.appointmentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$appointmentsPayload>;
                };
                findMany: {
                    args: Prisma.appointmentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$appointmentsPayload>[];
                };
                create: {
                    args: Prisma.appointmentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$appointmentsPayload>;
                };
                createMany: {
                    args: Prisma.appointmentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.appointmentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$appointmentsPayload>[];
                };
                delete: {
                    args: Prisma.appointmentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$appointmentsPayload>;
                };
                update: {
                    args: Prisma.appointmentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$appointmentsPayload>;
                };
                deleteMany: {
                    args: Prisma.appointmentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.appointmentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.appointmentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$appointmentsPayload>[];
                };
                upsert: {
                    args: Prisma.appointmentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$appointmentsPayload>;
                };
                aggregate: {
                    args: Prisma.AppointmentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAppointments>;
                };
                groupBy: {
                    args: Prisma.appointmentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AppointmentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.appointmentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AppointmentsCountAggregateOutputType> | number;
                };
            };
        };
        customers: {
            payload: Prisma.$customersPayload<ExtArgs>;
            fields: Prisma.customersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.customersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                findFirst: {
                    args: Prisma.customersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                findMany: {
                    args: Prisma.customersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>[];
                };
                create: {
                    args: Prisma.customersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                createMany: {
                    args: Prisma.customersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>[];
                };
                delete: {
                    args: Prisma.customersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                update: {
                    args: Prisma.customersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                deleteMany: {
                    args: Prisma.customersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.customersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>[];
                };
                upsert: {
                    args: Prisma.customersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                aggregate: {
                    args: Prisma.CustomersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomers>;
                };
                groupBy: {
                    args: Prisma.customersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.customersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomersCountAggregateOutputType> | number;
                };
            };
        };
        doctors: {
            payload: Prisma.$doctorsPayload<ExtArgs>;
            fields: Prisma.doctorsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.doctorsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctorsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.doctorsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctorsPayload>;
                };
                findFirst: {
                    args: Prisma.doctorsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctorsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.doctorsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctorsPayload>;
                };
                findMany: {
                    args: Prisma.doctorsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctorsPayload>[];
                };
                create: {
                    args: Prisma.doctorsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctorsPayload>;
                };
                createMany: {
                    args: Prisma.doctorsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.doctorsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctorsPayload>[];
                };
                delete: {
                    args: Prisma.doctorsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctorsPayload>;
                };
                update: {
                    args: Prisma.doctorsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctorsPayload>;
                };
                deleteMany: {
                    args: Prisma.doctorsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.doctorsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.doctorsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctorsPayload>[];
                };
                upsert: {
                    args: Prisma.doctorsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$doctorsPayload>;
                };
                aggregate: {
                    args: Prisma.DoctorsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDoctors>;
                };
                groupBy: {
                    args: Prisma.doctorsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.doctorsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorsCountAggregateOutputType> | number;
                };
            };
        };
        order_items: {
            payload: Prisma.$order_itemsPayload<ExtArgs>;
            fields: Prisma.order_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.order_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.order_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                findMany: {
                    args: Prisma.order_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>[];
                };
                create: {
                    args: Prisma.order_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                createMany: {
                    args: Prisma.order_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.order_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>[];
                };
                delete: {
                    args: Prisma.order_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                update: {
                    args: Prisma.order_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.order_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.order_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.order_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.order_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Order_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder_items>;
                };
                groupBy: {
                    args: Prisma.order_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.order_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_itemsCountAggregateOutputType> | number;
                };
            };
        };
        orders: {
            payload: Prisma.$ordersPayload<ExtArgs>;
            fields: Prisma.ordersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ordersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                findFirst: {
                    args: Prisma.ordersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                findMany: {
                    args: Prisma.ordersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>[];
                };
                create: {
                    args: Prisma.ordersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                createMany: {
                    args: Prisma.ordersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>[];
                };
                delete: {
                    args: Prisma.ordersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                update: {
                    args: Prisma.ordersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                deleteMany: {
                    args: Prisma.ordersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ordersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>[];
                };
                upsert: {
                    args: Prisma.ordersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                aggregate: {
                    args: Prisma.OrdersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrders>;
                };
                groupBy: {
                    args: Prisma.ordersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ordersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdersCountAggregateOutputType> | number;
                };
            };
        };
        orders1: {
            payload: Prisma.$orders1Payload<ExtArgs>;
            fields: Prisma.orders1FieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.orders1FindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orders1Payload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.orders1FindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orders1Payload>;
                };
                findFirst: {
                    args: Prisma.orders1FindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orders1Payload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.orders1FindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orders1Payload>;
                };
                findMany: {
                    args: Prisma.orders1FindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orders1Payload>[];
                };
                create: {
                    args: Prisma.orders1CreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orders1Payload>;
                };
                createMany: {
                    args: Prisma.orders1CreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.orders1CreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orders1Payload>[];
                };
                delete: {
                    args: Prisma.orders1DeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orders1Payload>;
                };
                update: {
                    args: Prisma.orders1UpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orders1Payload>;
                };
                deleteMany: {
                    args: Prisma.orders1DeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.orders1UpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.orders1UpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orders1Payload>[];
                };
                upsert: {
                    args: Prisma.orders1UpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orders1Payload>;
                };
                aggregate: {
                    args: Prisma.Orders1AggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrders1>;
                };
                groupBy: {
                    args: Prisma.orders1GroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Orders1GroupByOutputType>[];
                };
                count: {
                    args: Prisma.orders1CountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Orders1CountAggregateOutputType> | number;
                };
            };
        };
        patients: {
            payload: Prisma.$patientsPayload<ExtArgs>;
            fields: Prisma.patientsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.patientsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.patientsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientsPayload>;
                };
                findFirst: {
                    args: Prisma.patientsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.patientsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientsPayload>;
                };
                findMany: {
                    args: Prisma.patientsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientsPayload>[];
                };
                create: {
                    args: Prisma.patientsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientsPayload>;
                };
                createMany: {
                    args: Prisma.patientsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.patientsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientsPayload>[];
                };
                delete: {
                    args: Prisma.patientsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientsPayload>;
                };
                update: {
                    args: Prisma.patientsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientsPayload>;
                };
                deleteMany: {
                    args: Prisma.patientsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.patientsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.patientsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientsPayload>[];
                };
                upsert: {
                    args: Prisma.patientsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientsPayload>;
                };
                aggregate: {
                    args: Prisma.PatientsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePatients>;
                };
                groupBy: {
                    args: Prisma.patientsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.patientsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientsCountAggregateOutputType> | number;
                };
            };
        };
        product: {
            payload: Prisma.$productPayload<ExtArgs>;
            fields: Prisma.productFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.productFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productPayload>;
                };
                findFirst: {
                    args: Prisma.productFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.productFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productPayload>;
                };
                findMany: {
                    args: Prisma.productFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productPayload>[];
                };
                create: {
                    args: Prisma.productCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productPayload>;
                };
                createMany: {
                    args: Prisma.productCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.productCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productPayload>[];
                };
                delete: {
                    args: Prisma.productDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productPayload>;
                };
                update: {
                    args: Prisma.productUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productPayload>;
                };
                deleteMany: {
                    args: Prisma.productDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.productUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.productUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productPayload>[];
                };
                upsert: {
                    args: Prisma.productUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productPayload>;
                };
                aggregate: {
                    args: Prisma.ProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct>;
                };
                groupBy: {
                    args: Prisma.productGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.productCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCountAggregateOutputType> | number;
                };
            };
        };
        products: {
            payload: Prisma.$productsPayload<ExtArgs>;
            fields: Prisma.productsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.productsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                findFirst: {
                    args: Prisma.productsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                findMany: {
                    args: Prisma.productsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>[];
                };
                create: {
                    args: Prisma.productsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                createMany: {
                    args: Prisma.productsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>[];
                };
                delete: {
                    args: Prisma.productsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                update: {
                    args: Prisma.productsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                deleteMany: {
                    args: Prisma.productsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.productsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>[];
                };
                upsert: {
                    args: Prisma.productsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                aggregate: {
                    args: Prisma.ProductsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProducts>;
                };
                groupBy: {
                    args: Prisma.productsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.productsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductsCountAggregateOutputType> | number;
                };
            };
        };
        treatments: {
            payload: Prisma.$treatmentsPayload<ExtArgs>;
            fields: Prisma.treatmentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.treatmentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatmentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.treatmentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatmentsPayload>;
                };
                findFirst: {
                    args: Prisma.treatmentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatmentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.treatmentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatmentsPayload>;
                };
                findMany: {
                    args: Prisma.treatmentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatmentsPayload>[];
                };
                create: {
                    args: Prisma.treatmentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatmentsPayload>;
                };
                createMany: {
                    args: Prisma.treatmentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.treatmentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatmentsPayload>[];
                };
                delete: {
                    args: Prisma.treatmentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatmentsPayload>;
                };
                update: {
                    args: Prisma.treatmentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatmentsPayload>;
                };
                deleteMany: {
                    args: Prisma.treatmentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.treatmentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.treatmentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatmentsPayload>[];
                };
                upsert: {
                    args: Prisma.treatmentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$treatmentsPayload>;
                };
                aggregate: {
                    args: Prisma.TreatmentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTreatments>;
                };
                groupBy: {
                    args: Prisma.treatmentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TreatmentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.treatmentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TreatmentsCountAggregateOutputType> | number;
                };
            };
        };
        users: {
            payload: Prisma.$usersPayload<ExtArgs>;
            fields: Prisma.usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findFirst: {
                    args: Prisma.usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findMany: {
                    args: Prisma.usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                create: {
                    args: Prisma.usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                createMany: {
                    args: Prisma.usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                delete: {
                    args: Prisma.usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                update: {
                    args: Prisma.usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                deleteMany: {
                    args: Prisma.usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                upsert: {
                    args: Prisma.usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                aggregate: {
                    args: Prisma.UsersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsers>;
                };
                groupBy: {
                    args: Prisma.usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AppointmentsScalarFieldEnum: {
    readonly id: "id";
    readonly doctor_id: "doctor_id";
    readonly patient_id: "patient_id";
    readonly appointment_date: "appointment_date";
    readonly fee: "fee";
};
export type AppointmentsScalarFieldEnum = (typeof AppointmentsScalarFieldEnum)[keyof typeof AppointmentsScalarFieldEnum];
export declare const CustomersScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly city: "city";
};
export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum];
export declare const DoctorsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly specialization: "specialization";
};
export type DoctorsScalarFieldEnum = (typeof DoctorsScalarFieldEnum)[keyof typeof DoctorsScalarFieldEnum];
export declare const Order_itemsScalarFieldEnum: {
    readonly id: "id";
    readonly order_id: "order_id";
    readonly product_id: "product_id";
    readonly quantity: "quantity";
};
export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum];
export declare const OrdersScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly product_name: "product_name";
    readonly amount: "amount";
};
export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum];
export declare const Orders1ScalarFieldEnum: {
    readonly id: "id";
    readonly customer_id: "customer_id";
    readonly order_date: "order_date";
};
export type Orders1ScalarFieldEnum = (typeof Orders1ScalarFieldEnum)[keyof typeof Orders1ScalarFieldEnum];
export declare const PatientsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly city: "city";
};
export type PatientsScalarFieldEnum = (typeof PatientsScalarFieldEnum)[keyof typeof PatientsScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly price: "price";
    readonly description: "description";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const ProductsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly price: "price";
};
export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum];
export declare const TreatmentsScalarFieldEnum: {
    readonly id: "id";
    readonly appointment_id: "appointment_id";
    readonly treatment_name: "treatment_name";
    readonly cost: "cost";
};
export type TreatmentsScalarFieldEnum = (typeof TreatmentsScalarFieldEnum)[keyof typeof TreatmentsScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly age: "age";
    readonly created_at: "created_at";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    appointments?: Prisma.appointmentsOmit;
    customers?: Prisma.customersOmit;
    doctors?: Prisma.doctorsOmit;
    order_items?: Prisma.order_itemsOmit;
    orders?: Prisma.ordersOmit;
    orders1?: Prisma.orders1Omit;
    patients?: Prisma.patientsOmit;
    product?: Prisma.productOmit;
    products?: Prisma.productsOmit;
    treatments?: Prisma.treatmentsOmit;
    users?: Prisma.usersOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
