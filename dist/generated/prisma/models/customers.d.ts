import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type customersModel = runtime.Types.Result.DefaultSelection<Prisma.$customersPayload>;
export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null;
    _avg: CustomersAvgAggregateOutputType | null;
    _sum: CustomersSumAggregateOutputType | null;
    _min: CustomersMinAggregateOutputType | null;
    _max: CustomersMaxAggregateOutputType | null;
};
export type CustomersAvgAggregateOutputType = {
    id: number | null;
};
export type CustomersSumAggregateOutputType = {
    id: number | null;
};
export type CustomersMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    city: string | null;
};
export type CustomersMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    city: string | null;
};
export type CustomersCountAggregateOutputType = {
    id: number;
    name: number;
    city: number;
    _all: number;
};
export type CustomersAvgAggregateInputType = {
    id?: true;
};
export type CustomersSumAggregateInputType = {
    id?: true;
};
export type CustomersMinAggregateInputType = {
    id?: true;
    name?: true;
    city?: true;
};
export type CustomersMaxAggregateInputType = {
    id?: true;
    name?: true;
    city?: true;
};
export type CustomersCountAggregateInputType = {
    id?: true;
    name?: true;
    city?: true;
    _all?: true;
};
export type CustomersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customersWhereInput;
    orderBy?: Prisma.customersOrderByWithRelationInput | Prisma.customersOrderByWithRelationInput[];
    cursor?: Prisma.customersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomersCountAggregateInputType;
    _avg?: CustomersAvgAggregateInputType;
    _sum?: CustomersSumAggregateInputType;
    _min?: CustomersMinAggregateInputType;
    _max?: CustomersMaxAggregateInputType;
};
export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomers[P]> : Prisma.GetScalarType<T[P], AggregateCustomers[P]>;
};
export type customersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customersWhereInput;
    orderBy?: Prisma.customersOrderByWithAggregationInput | Prisma.customersOrderByWithAggregationInput[];
    by: Prisma.CustomersScalarFieldEnum[] | Prisma.CustomersScalarFieldEnum;
    having?: Prisma.customersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomersCountAggregateInputType | true;
    _avg?: CustomersAvgAggregateInputType;
    _sum?: CustomersSumAggregateInputType;
    _min?: CustomersMinAggregateInputType;
    _max?: CustomersMaxAggregateInputType;
};
export type CustomersGroupByOutputType = {
    id: number;
    name: string | null;
    city: string | null;
    _count: CustomersCountAggregateOutputType | null;
    _avg: CustomersAvgAggregateOutputType | null;
    _sum: CustomersSumAggregateOutputType | null;
    _min: CustomersMinAggregateOutputType | null;
    _max: CustomersMaxAggregateOutputType | null;
};
type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomersGroupByOutputType[P]>;
}>>;
export type customersWhereInput = {
    AND?: Prisma.customersWhereInput | Prisma.customersWhereInput[];
    OR?: Prisma.customersWhereInput[];
    NOT?: Prisma.customersWhereInput | Prisma.customersWhereInput[];
    id?: Prisma.IntFilter<"customers"> | number;
    name?: Prisma.StringNullableFilter<"customers"> | string | null;
    city?: Prisma.StringNullableFilter<"customers"> | string | null;
    orders1?: Prisma.Orders1ListRelationFilter;
};
export type customersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders1?: Prisma.orders1OrderByRelationAggregateInput;
};
export type customersWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.customersWhereInput | Prisma.customersWhereInput[];
    OR?: Prisma.customersWhereInput[];
    NOT?: Prisma.customersWhereInput | Prisma.customersWhereInput[];
    name?: Prisma.StringNullableFilter<"customers"> | string | null;
    city?: Prisma.StringNullableFilter<"customers"> | string | null;
    orders1?: Prisma.Orders1ListRelationFilter;
}, "id">;
export type customersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.customersCountOrderByAggregateInput;
    _avg?: Prisma.customersAvgOrderByAggregateInput;
    _max?: Prisma.customersMaxOrderByAggregateInput;
    _min?: Prisma.customersMinOrderByAggregateInput;
    _sum?: Prisma.customersSumOrderByAggregateInput;
};
export type customersScalarWhereWithAggregatesInput = {
    AND?: Prisma.customersScalarWhereWithAggregatesInput | Prisma.customersScalarWhereWithAggregatesInput[];
    OR?: Prisma.customersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.customersScalarWhereWithAggregatesInput | Prisma.customersScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"customers"> | number;
    name?: Prisma.StringNullableWithAggregatesFilter<"customers"> | string | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"customers"> | string | null;
};
export type customersCreateInput = {
    name?: string | null;
    city?: string | null;
    orders1?: Prisma.orders1CreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateInput = {
    id?: number;
    name?: string | null;
    city?: string | null;
    orders1?: Prisma.orders1UncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersUpdateInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orders1?: Prisma.orders1UpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orders1?: Prisma.orders1UncheckedUpdateManyWithoutCustomersNestedInput;
};
export type customersCreateManyInput = {
    id?: number;
    name?: string | null;
    city?: string | null;
};
export type customersUpdateManyMutationInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type customersUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type customersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
};
export type customersAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type customersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
};
export type customersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
};
export type customersSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CustomersNullableScalarRelationFilter = {
    is?: Prisma.customersWhereInput | null;
    isNot?: Prisma.customersWhereInput | null;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type customersCreateNestedOneWithoutOrders1Input = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutOrders1Input, Prisma.customersUncheckedCreateWithoutOrders1Input>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutOrders1Input;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUpdateOneWithoutOrders1NestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutOrders1Input, Prisma.customersUncheckedCreateWithoutOrders1Input>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutOrders1Input;
    upsert?: Prisma.customersUpsertWithoutOrders1Input;
    disconnect?: Prisma.customersWhereInput | boolean;
    delete?: Prisma.customersWhereInput | boolean;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutOrders1Input, Prisma.customersUpdateWithoutOrders1Input>, Prisma.customersUncheckedUpdateWithoutOrders1Input>;
};
export type customersCreateWithoutOrders1Input = {
    name?: string | null;
    city?: string | null;
};
export type customersUncheckedCreateWithoutOrders1Input = {
    id?: number;
    name?: string | null;
    city?: string | null;
};
export type customersCreateOrConnectWithoutOrders1Input = {
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateWithoutOrders1Input, Prisma.customersUncheckedCreateWithoutOrders1Input>;
};
export type customersUpsertWithoutOrders1Input = {
    update: Prisma.XOR<Prisma.customersUpdateWithoutOrders1Input, Prisma.customersUncheckedUpdateWithoutOrders1Input>;
    create: Prisma.XOR<Prisma.customersCreateWithoutOrders1Input, Prisma.customersUncheckedCreateWithoutOrders1Input>;
    where?: Prisma.customersWhereInput;
};
export type customersUpdateToOneWithWhereWithoutOrders1Input = {
    where?: Prisma.customersWhereInput;
    data: Prisma.XOR<Prisma.customersUpdateWithoutOrders1Input, Prisma.customersUncheckedUpdateWithoutOrders1Input>;
};
export type customersUpdateWithoutOrders1Input = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type customersUncheckedUpdateWithoutOrders1Input = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CustomersCountOutputType = {
    orders1: number;
};
export type CustomersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders1?: boolean | CustomersCountOutputTypeCountOrders1Args;
};
export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomersCountOutputTypeSelect<ExtArgs> | null;
};
export type CustomersCountOutputTypeCountOrders1Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.orders1WhereInput;
};
export type customersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    city?: boolean;
    orders1?: boolean | Prisma.customers$orders1Args<ExtArgs>;
    _count?: boolean | Prisma.CustomersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customers"]>;
export type customersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    city?: boolean;
}, ExtArgs["result"]["customers"]>;
export type customersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    city?: boolean;
}, ExtArgs["result"]["customers"]>;
export type customersSelectScalar = {
    id?: boolean;
    name?: boolean;
    city?: boolean;
};
export type customersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "city", ExtArgs["result"]["customers"]>;
export type customersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders1?: boolean | Prisma.customers$orders1Args<ExtArgs>;
    _count?: boolean | Prisma.CustomersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type customersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type customersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $customersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "customers";
    objects: {
        orders1: Prisma.$orders1Payload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string | null;
        city: string | null;
    }, ExtArgs["result"]["customers"]>;
    composites: {};
};
export type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$customersPayload, S>;
export type customersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomersCountAggregateInputType | true;
};
export interface customersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['customers'];
        meta: {
            name: 'customers';
        };
    };
    findUnique<T extends customersFindUniqueArgs>(args: Prisma.SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends customersFindFirstArgs>(args?: Prisma.SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends customersFindManyArgs>(args?: Prisma.SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends customersCreateArgs>(args: Prisma.SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends customersCreateManyArgs>(args?: Prisma.SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends customersDeleteArgs>(args: Prisma.SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends customersUpdateArgs>(args: Prisma.SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends customersDeleteManyArgs>(args?: Prisma.SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends customersUpdateManyArgs>(args: Prisma.SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends customersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, customersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends customersUpsertArgs>(args: Prisma.SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends customersCountArgs>(args?: Prisma.Subset<T, customersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomersCountAggregateOutputType> : number>;
    aggregate<T extends CustomersAggregateArgs>(args: Prisma.Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>;
    groupBy<T extends customersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: customersGroupByArgs['orderBy'];
    } : {
        orderBy?: customersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: customersFieldRefs;
}
export interface Prisma__customersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders1<T extends Prisma.customers$orders1Args<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customers$orders1Args<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$orders1Payload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface customersFieldRefs {
    readonly id: Prisma.FieldRef<"customers", 'Int'>;
    readonly name: Prisma.FieldRef<"customers", 'String'>;
    readonly city: Prisma.FieldRef<"customers", 'String'>;
}
export type customersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where: Prisma.customersWhereUniqueInput;
};
export type customersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where: Prisma.customersWhereUniqueInput;
};
export type customersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
    orderBy?: Prisma.customersOrderByWithRelationInput | Prisma.customersOrderByWithRelationInput[];
    cursor?: Prisma.customersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomersScalarFieldEnum | Prisma.CustomersScalarFieldEnum[];
};
export type customersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
    orderBy?: Prisma.customersOrderByWithRelationInput | Prisma.customersOrderByWithRelationInput[];
    cursor?: Prisma.customersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomersScalarFieldEnum | Prisma.CustomersScalarFieldEnum[];
};
export type customersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
    orderBy?: Prisma.customersOrderByWithRelationInput | Prisma.customersOrderByWithRelationInput[];
    cursor?: Prisma.customersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomersScalarFieldEnum | Prisma.CustomersScalarFieldEnum[];
};
export type customersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.customersCreateInput, Prisma.customersUncheckedCreateInput>;
};
export type customersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.customersCreateManyInput | Prisma.customersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type customersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    data: Prisma.customersCreateManyInput | Prisma.customersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type customersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customersUpdateInput, Prisma.customersUncheckedUpdateInput>;
    where: Prisma.customersWhereUniqueInput;
};
export type customersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.customersUpdateManyMutationInput, Prisma.customersUncheckedUpdateManyInput>;
    where?: Prisma.customersWhereInput;
    limit?: number;
};
export type customersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customersUpdateManyMutationInput, Prisma.customersUncheckedUpdateManyInput>;
    where?: Prisma.customersWhereInput;
    limit?: number;
};
export type customersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateInput, Prisma.customersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.customersUpdateInput, Prisma.customersUncheckedUpdateInput>;
};
export type customersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where: Prisma.customersWhereUniqueInput;
};
export type customersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customersWhereInput;
    limit?: number;
};
export type customers$orders1Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
};
export {};
