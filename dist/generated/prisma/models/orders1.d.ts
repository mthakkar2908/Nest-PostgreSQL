import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type orders1Model = runtime.Types.Result.DefaultSelection<Prisma.$orders1Payload>;
export type AggregateOrders1 = {
    _count: Orders1CountAggregateOutputType | null;
    _avg: Orders1AvgAggregateOutputType | null;
    _sum: Orders1SumAggregateOutputType | null;
    _min: Orders1MinAggregateOutputType | null;
    _max: Orders1MaxAggregateOutputType | null;
};
export type Orders1AvgAggregateOutputType = {
    id: number | null;
    customer_id: number | null;
};
export type Orders1SumAggregateOutputType = {
    id: number | null;
    customer_id: number | null;
};
export type Orders1MinAggregateOutputType = {
    id: number | null;
    customer_id: number | null;
    order_date: Date | null;
};
export type Orders1MaxAggregateOutputType = {
    id: number | null;
    customer_id: number | null;
    order_date: Date | null;
};
export type Orders1CountAggregateOutputType = {
    id: number;
    customer_id: number;
    order_date: number;
    _all: number;
};
export type Orders1AvgAggregateInputType = {
    id?: true;
    customer_id?: true;
};
export type Orders1SumAggregateInputType = {
    id?: true;
    customer_id?: true;
};
export type Orders1MinAggregateInputType = {
    id?: true;
    customer_id?: true;
    order_date?: true;
};
export type Orders1MaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    order_date?: true;
};
export type Orders1CountAggregateInputType = {
    id?: true;
    customer_id?: true;
    order_date?: true;
    _all?: true;
};
export type Orders1AggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.orders1WhereInput;
    orderBy?: Prisma.orders1OrderByWithRelationInput | Prisma.orders1OrderByWithRelationInput[];
    cursor?: Prisma.orders1WhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Orders1CountAggregateInputType;
    _avg?: Orders1AvgAggregateInputType;
    _sum?: Orders1SumAggregateInputType;
    _min?: Orders1MinAggregateInputType;
    _max?: Orders1MaxAggregateInputType;
};
export type GetOrders1AggregateType<T extends Orders1AggregateArgs> = {
    [P in keyof T & keyof AggregateOrders1]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrders1[P]> : Prisma.GetScalarType<T[P], AggregateOrders1[P]>;
};
export type orders1GroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.orders1WhereInput;
    orderBy?: Prisma.orders1OrderByWithAggregationInput | Prisma.orders1OrderByWithAggregationInput[];
    by: Prisma.Orders1ScalarFieldEnum[] | Prisma.Orders1ScalarFieldEnum;
    having?: Prisma.orders1ScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Orders1CountAggregateInputType | true;
    _avg?: Orders1AvgAggregateInputType;
    _sum?: Orders1SumAggregateInputType;
    _min?: Orders1MinAggregateInputType;
    _max?: Orders1MaxAggregateInputType;
};
export type Orders1GroupByOutputType = {
    id: number;
    customer_id: number | null;
    order_date: Date | null;
    _count: Orders1CountAggregateOutputType | null;
    _avg: Orders1AvgAggregateOutputType | null;
    _sum: Orders1SumAggregateOutputType | null;
    _min: Orders1MinAggregateOutputType | null;
    _max: Orders1MaxAggregateOutputType | null;
};
type GetOrders1GroupByPayload<T extends orders1GroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Orders1GroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Orders1GroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Orders1GroupByOutputType[P]> : Prisma.GetScalarType<T[P], Orders1GroupByOutputType[P]>;
}>>;
export type orders1WhereInput = {
    AND?: Prisma.orders1WhereInput | Prisma.orders1WhereInput[];
    OR?: Prisma.orders1WhereInput[];
    NOT?: Prisma.orders1WhereInput | Prisma.orders1WhereInput[];
    id?: Prisma.IntFilter<"orders1"> | number;
    customer_id?: Prisma.IntNullableFilter<"orders1"> | number | null;
    order_date?: Prisma.DateTimeNullableFilter<"orders1"> | Date | string | null;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
};
export type orders1OrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    customers?: Prisma.customersOrderByWithRelationInput;
};
export type orders1WhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.orders1WhereInput | Prisma.orders1WhereInput[];
    OR?: Prisma.orders1WhereInput[];
    NOT?: Prisma.orders1WhereInput | Prisma.orders1WhereInput[];
    customer_id?: Prisma.IntNullableFilter<"orders1"> | number | null;
    order_date?: Prisma.DateTimeNullableFilter<"orders1"> | Date | string | null;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
}, "id">;
export type orders1OrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.orders1CountOrderByAggregateInput;
    _avg?: Prisma.orders1AvgOrderByAggregateInput;
    _max?: Prisma.orders1MaxOrderByAggregateInput;
    _min?: Prisma.orders1MinOrderByAggregateInput;
    _sum?: Prisma.orders1SumOrderByAggregateInput;
};
export type orders1ScalarWhereWithAggregatesInput = {
    AND?: Prisma.orders1ScalarWhereWithAggregatesInput | Prisma.orders1ScalarWhereWithAggregatesInput[];
    OR?: Prisma.orders1ScalarWhereWithAggregatesInput[];
    NOT?: Prisma.orders1ScalarWhereWithAggregatesInput | Prisma.orders1ScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"orders1"> | number;
    customer_id?: Prisma.IntNullableWithAggregatesFilter<"orders1"> | number | null;
    order_date?: Prisma.DateTimeNullableWithAggregatesFilter<"orders1"> | Date | string | null;
};
export type orders1CreateInput = {
    order_date?: Date | string | null;
    customers?: Prisma.customersCreateNestedOneWithoutOrders1Input;
};
export type orders1UncheckedCreateInput = {
    id?: number;
    customer_id?: number | null;
    order_date?: Date | string | null;
};
export type orders1UpdateInput = {
    order_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customers?: Prisma.customersUpdateOneWithoutOrders1NestedInput;
};
export type orders1UncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type orders1CreateManyInput = {
    id?: number;
    customer_id?: number | null;
    order_date?: Date | string | null;
};
export type orders1UpdateManyMutationInput = {
    order_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type orders1UncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Orders1ListRelationFilter = {
    every?: Prisma.orders1WhereInput;
    some?: Prisma.orders1WhereInput;
    none?: Prisma.orders1WhereInput;
};
export type orders1OrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type orders1CountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    order_date?: Prisma.SortOrder;
};
export type orders1AvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
};
export type orders1MaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    order_date?: Prisma.SortOrder;
};
export type orders1MinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    order_date?: Prisma.SortOrder;
};
export type orders1SumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
};
export type orders1CreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.orders1CreateWithoutCustomersInput, Prisma.orders1UncheckedCreateWithoutCustomersInput> | Prisma.orders1CreateWithoutCustomersInput[] | Prisma.orders1UncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.orders1CreateOrConnectWithoutCustomersInput | Prisma.orders1CreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.orders1CreateManyCustomersInputEnvelope;
    connect?: Prisma.orders1WhereUniqueInput | Prisma.orders1WhereUniqueInput[];
};
export type orders1UncheckedCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.orders1CreateWithoutCustomersInput, Prisma.orders1UncheckedCreateWithoutCustomersInput> | Prisma.orders1CreateWithoutCustomersInput[] | Prisma.orders1UncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.orders1CreateOrConnectWithoutCustomersInput | Prisma.orders1CreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.orders1CreateManyCustomersInputEnvelope;
    connect?: Prisma.orders1WhereUniqueInput | Prisma.orders1WhereUniqueInput[];
};
export type orders1UpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.orders1CreateWithoutCustomersInput, Prisma.orders1UncheckedCreateWithoutCustomersInput> | Prisma.orders1CreateWithoutCustomersInput[] | Prisma.orders1UncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.orders1CreateOrConnectWithoutCustomersInput | Prisma.orders1CreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.orders1UpsertWithWhereUniqueWithoutCustomersInput | Prisma.orders1UpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.orders1CreateManyCustomersInputEnvelope;
    set?: Prisma.orders1WhereUniqueInput | Prisma.orders1WhereUniqueInput[];
    disconnect?: Prisma.orders1WhereUniqueInput | Prisma.orders1WhereUniqueInput[];
    delete?: Prisma.orders1WhereUniqueInput | Prisma.orders1WhereUniqueInput[];
    connect?: Prisma.orders1WhereUniqueInput | Prisma.orders1WhereUniqueInput[];
    update?: Prisma.orders1UpdateWithWhereUniqueWithoutCustomersInput | Prisma.orders1UpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.orders1UpdateManyWithWhereWithoutCustomersInput | Prisma.orders1UpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.orders1ScalarWhereInput | Prisma.orders1ScalarWhereInput[];
};
export type orders1UncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.orders1CreateWithoutCustomersInput, Prisma.orders1UncheckedCreateWithoutCustomersInput> | Prisma.orders1CreateWithoutCustomersInput[] | Prisma.orders1UncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.orders1CreateOrConnectWithoutCustomersInput | Prisma.orders1CreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.orders1UpsertWithWhereUniqueWithoutCustomersInput | Prisma.orders1UpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.orders1CreateManyCustomersInputEnvelope;
    set?: Prisma.orders1WhereUniqueInput | Prisma.orders1WhereUniqueInput[];
    disconnect?: Prisma.orders1WhereUniqueInput | Prisma.orders1WhereUniqueInput[];
    delete?: Prisma.orders1WhereUniqueInput | Prisma.orders1WhereUniqueInput[];
    connect?: Prisma.orders1WhereUniqueInput | Prisma.orders1WhereUniqueInput[];
    update?: Prisma.orders1UpdateWithWhereUniqueWithoutCustomersInput | Prisma.orders1UpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.orders1UpdateManyWithWhereWithoutCustomersInput | Prisma.orders1UpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.orders1ScalarWhereInput | Prisma.orders1ScalarWhereInput[];
};
export type orders1CreateWithoutCustomersInput = {
    order_date?: Date | string | null;
};
export type orders1UncheckedCreateWithoutCustomersInput = {
    id?: number;
    order_date?: Date | string | null;
};
export type orders1CreateOrConnectWithoutCustomersInput = {
    where: Prisma.orders1WhereUniqueInput;
    create: Prisma.XOR<Prisma.orders1CreateWithoutCustomersInput, Prisma.orders1UncheckedCreateWithoutCustomersInput>;
};
export type orders1CreateManyCustomersInputEnvelope = {
    data: Prisma.orders1CreateManyCustomersInput | Prisma.orders1CreateManyCustomersInput[];
    skipDuplicates?: boolean;
};
export type orders1UpsertWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.orders1WhereUniqueInput;
    update: Prisma.XOR<Prisma.orders1UpdateWithoutCustomersInput, Prisma.orders1UncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.orders1CreateWithoutCustomersInput, Prisma.orders1UncheckedCreateWithoutCustomersInput>;
};
export type orders1UpdateWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.orders1WhereUniqueInput;
    data: Prisma.XOR<Prisma.orders1UpdateWithoutCustomersInput, Prisma.orders1UncheckedUpdateWithoutCustomersInput>;
};
export type orders1UpdateManyWithWhereWithoutCustomersInput = {
    where: Prisma.orders1ScalarWhereInput;
    data: Prisma.XOR<Prisma.orders1UpdateManyMutationInput, Prisma.orders1UncheckedUpdateManyWithoutCustomersInput>;
};
export type orders1ScalarWhereInput = {
    AND?: Prisma.orders1ScalarWhereInput | Prisma.orders1ScalarWhereInput[];
    OR?: Prisma.orders1ScalarWhereInput[];
    NOT?: Prisma.orders1ScalarWhereInput | Prisma.orders1ScalarWhereInput[];
    id?: Prisma.IntFilter<"orders1"> | number;
    customer_id?: Prisma.IntNullableFilter<"orders1"> | number | null;
    order_date?: Prisma.DateTimeNullableFilter<"orders1"> | Date | string | null;
};
export type orders1CreateManyCustomersInput = {
    id?: number;
    order_date?: Date | string | null;
};
export type orders1UpdateWithoutCustomersInput = {
    order_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type orders1UncheckedUpdateWithoutCustomersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type orders1UncheckedUpdateManyWithoutCustomersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type orders1Select<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    order_date?: boolean;
    customers?: boolean | Prisma.orders1$customersArgs<ExtArgs>;
}, ExtArgs["result"]["orders1"]>;
export type orders1SelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    order_date?: boolean;
    customers?: boolean | Prisma.orders1$customersArgs<ExtArgs>;
}, ExtArgs["result"]["orders1"]>;
export type orders1SelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    order_date?: boolean;
    customers?: boolean | Prisma.orders1$customersArgs<ExtArgs>;
}, ExtArgs["result"]["orders1"]>;
export type orders1SelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    order_date?: boolean;
};
export type orders1Omit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_id" | "order_date", ExtArgs["result"]["orders1"]>;
export type orders1Include<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | Prisma.orders1$customersArgs<ExtArgs>;
};
export type orders1IncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | Prisma.orders1$customersArgs<ExtArgs>;
};
export type orders1IncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | Prisma.orders1$customersArgs<ExtArgs>;
};
export type $orders1Payload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "orders1";
    objects: {
        customers: Prisma.$customersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        customer_id: number | null;
        order_date: Date | null;
    }, ExtArgs["result"]["orders1"]>;
    composites: {};
};
export type orders1GetPayload<S extends boolean | null | undefined | orders1DefaultArgs> = runtime.Types.Result.GetResult<Prisma.$orders1Payload, S>;
export type orders1CountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<orders1FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Orders1CountAggregateInputType | true;
};
export interface orders1Delegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['orders1'];
        meta: {
            name: 'orders1';
        };
    };
    findUnique<T extends orders1FindUniqueArgs>(args: Prisma.SelectSubset<T, orders1FindUniqueArgs<ExtArgs>>): Prisma.Prisma__orders1Client<runtime.Types.Result.GetResult<Prisma.$orders1Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends orders1FindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, orders1FindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__orders1Client<runtime.Types.Result.GetResult<Prisma.$orders1Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends orders1FindFirstArgs>(args?: Prisma.SelectSubset<T, orders1FindFirstArgs<ExtArgs>>): Prisma.Prisma__orders1Client<runtime.Types.Result.GetResult<Prisma.$orders1Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends orders1FindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, orders1FindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__orders1Client<runtime.Types.Result.GetResult<Prisma.$orders1Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends orders1FindManyArgs>(args?: Prisma.SelectSubset<T, orders1FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$orders1Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends orders1CreateArgs>(args: Prisma.SelectSubset<T, orders1CreateArgs<ExtArgs>>): Prisma.Prisma__orders1Client<runtime.Types.Result.GetResult<Prisma.$orders1Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends orders1CreateManyArgs>(args?: Prisma.SelectSubset<T, orders1CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends orders1CreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, orders1CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$orders1Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends orders1DeleteArgs>(args: Prisma.SelectSubset<T, orders1DeleteArgs<ExtArgs>>): Prisma.Prisma__orders1Client<runtime.Types.Result.GetResult<Prisma.$orders1Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends orders1UpdateArgs>(args: Prisma.SelectSubset<T, orders1UpdateArgs<ExtArgs>>): Prisma.Prisma__orders1Client<runtime.Types.Result.GetResult<Prisma.$orders1Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends orders1DeleteManyArgs>(args?: Prisma.SelectSubset<T, orders1DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends orders1UpdateManyArgs>(args: Prisma.SelectSubset<T, orders1UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends orders1UpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, orders1UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$orders1Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends orders1UpsertArgs>(args: Prisma.SelectSubset<T, orders1UpsertArgs<ExtArgs>>): Prisma.Prisma__orders1Client<runtime.Types.Result.GetResult<Prisma.$orders1Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends orders1CountArgs>(args?: Prisma.Subset<T, orders1CountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Orders1CountAggregateOutputType> : number>;
    aggregate<T extends Orders1AggregateArgs>(args: Prisma.Subset<T, Orders1AggregateArgs>): Prisma.PrismaPromise<GetOrders1AggregateType<T>>;
    groupBy<T extends orders1GroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: orders1GroupByArgs['orderBy'];
    } : {
        orderBy?: orders1GroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, orders1GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrders1GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: orders1FieldRefs;
}
export interface Prisma__orders1Client<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customers<T extends Prisma.orders1$customersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders1$customersArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface orders1FieldRefs {
    readonly id: Prisma.FieldRef<"orders1", 'Int'>;
    readonly customer_id: Prisma.FieldRef<"orders1", 'Int'>;
    readonly order_date: Prisma.FieldRef<"orders1", 'DateTime'>;
}
export type orders1FindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orders1Select<ExtArgs> | null;
    omit?: Prisma.orders1Omit<ExtArgs> | null;
    include?: Prisma.orders1Include<ExtArgs> | null;
    where: Prisma.orders1WhereUniqueInput;
};
export type orders1FindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orders1Select<ExtArgs> | null;
    omit?: Prisma.orders1Omit<ExtArgs> | null;
    include?: Prisma.orders1Include<ExtArgs> | null;
    where: Prisma.orders1WhereUniqueInput;
};
export type orders1FindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orders1Select<ExtArgs> | null;
    omit?: Prisma.orders1Omit<ExtArgs> | null;
    include?: Prisma.orders1Include<ExtArgs> | null;
    where?: Prisma.orders1WhereInput;
    orderBy?: Prisma.orders1OrderByWithRelationInput | Prisma.orders1OrderByWithRelationInput[];
    cursor?: Prisma.orders1WhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Orders1ScalarFieldEnum | Prisma.Orders1ScalarFieldEnum[];
};
export type orders1FindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orders1Select<ExtArgs> | null;
    omit?: Prisma.orders1Omit<ExtArgs> | null;
    include?: Prisma.orders1Include<ExtArgs> | null;
    where?: Prisma.orders1WhereInput;
    orderBy?: Prisma.orders1OrderByWithRelationInput | Prisma.orders1OrderByWithRelationInput[];
    cursor?: Prisma.orders1WhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Orders1ScalarFieldEnum | Prisma.Orders1ScalarFieldEnum[];
};
export type orders1FindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orders1Select<ExtArgs> | null;
    omit?: Prisma.orders1Omit<ExtArgs> | null;
    include?: Prisma.orders1Include<ExtArgs> | null;
    where?: Prisma.orders1WhereInput;
    orderBy?: Prisma.orders1OrderByWithRelationInput | Prisma.orders1OrderByWithRelationInput[];
    cursor?: Prisma.orders1WhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Orders1ScalarFieldEnum | Prisma.Orders1ScalarFieldEnum[];
};
export type orders1CreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orders1Select<ExtArgs> | null;
    omit?: Prisma.orders1Omit<ExtArgs> | null;
    include?: Prisma.orders1Include<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.orders1CreateInput, Prisma.orders1UncheckedCreateInput>;
};
export type orders1CreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.orders1CreateManyInput | Prisma.orders1CreateManyInput[];
    skipDuplicates?: boolean;
};
export type orders1CreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orders1SelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.orders1Omit<ExtArgs> | null;
    data: Prisma.orders1CreateManyInput | Prisma.orders1CreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.orders1IncludeCreateManyAndReturn<ExtArgs> | null;
};
export type orders1UpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orders1Select<ExtArgs> | null;
    omit?: Prisma.orders1Omit<ExtArgs> | null;
    include?: Prisma.orders1Include<ExtArgs> | null;
    data: Prisma.XOR<Prisma.orders1UpdateInput, Prisma.orders1UncheckedUpdateInput>;
    where: Prisma.orders1WhereUniqueInput;
};
export type orders1UpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.orders1UpdateManyMutationInput, Prisma.orders1UncheckedUpdateManyInput>;
    where?: Prisma.orders1WhereInput;
    limit?: number;
};
export type orders1UpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orders1SelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.orders1Omit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.orders1UpdateManyMutationInput, Prisma.orders1UncheckedUpdateManyInput>;
    where?: Prisma.orders1WhereInput;
    limit?: number;
    include?: Prisma.orders1IncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type orders1UpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orders1Select<ExtArgs> | null;
    omit?: Prisma.orders1Omit<ExtArgs> | null;
    include?: Prisma.orders1Include<ExtArgs> | null;
    where: Prisma.orders1WhereUniqueInput;
    create: Prisma.XOR<Prisma.orders1CreateInput, Prisma.orders1UncheckedCreateInput>;
    update: Prisma.XOR<Prisma.orders1UpdateInput, Prisma.orders1UncheckedUpdateInput>;
};
export type orders1DeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orders1Select<ExtArgs> | null;
    omit?: Prisma.orders1Omit<ExtArgs> | null;
    include?: Prisma.orders1Include<ExtArgs> | null;
    where: Prisma.orders1WhereUniqueInput;
};
export type orders1DeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.orders1WhereInput;
    limit?: number;
};
export type orders1$customersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
};
export type orders1DefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orders1Select<ExtArgs> | null;
    omit?: Prisma.orders1Omit<ExtArgs> | null;
    include?: Prisma.orders1Include<ExtArgs> | null;
};
export {};
