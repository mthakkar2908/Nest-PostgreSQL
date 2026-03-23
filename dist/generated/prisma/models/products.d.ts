import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type productsModel = runtime.Types.Result.DefaultSelection<Prisma.$productsPayload>;
export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null;
    _avg: ProductsAvgAggregateOutputType | null;
    _sum: ProductsSumAggregateOutputType | null;
    _min: ProductsMinAggregateOutputType | null;
    _max: ProductsMaxAggregateOutputType | null;
};
export type ProductsAvgAggregateOutputType = {
    id: number | null;
    price: number | null;
};
export type ProductsSumAggregateOutputType = {
    id: number | null;
    price: number | null;
};
export type ProductsMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    price: number | null;
};
export type ProductsMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    price: number | null;
};
export type ProductsCountAggregateOutputType = {
    id: number;
    name: number;
    price: number;
    _all: number;
};
export type ProductsAvgAggregateInputType = {
    id?: true;
    price?: true;
};
export type ProductsSumAggregateInputType = {
    id?: true;
    price?: true;
};
export type ProductsMinAggregateInputType = {
    id?: true;
    name?: true;
    price?: true;
};
export type ProductsMaxAggregateInputType = {
    id?: true;
    name?: true;
    price?: true;
};
export type ProductsCountAggregateInputType = {
    id?: true;
    name?: true;
    price?: true;
    _all?: true;
};
export type ProductsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput | Prisma.productsOrderByWithRelationInput[];
    cursor?: Prisma.productsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductsCountAggregateInputType;
    _avg?: ProductsAvgAggregateInputType;
    _sum?: ProductsSumAggregateInputType;
    _min?: ProductsMinAggregateInputType;
    _max?: ProductsMaxAggregateInputType;
};
export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
    [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProducts[P]> : Prisma.GetScalarType<T[P], AggregateProducts[P]>;
};
export type productsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithAggregationInput | Prisma.productsOrderByWithAggregationInput[];
    by: Prisma.ProductsScalarFieldEnum[] | Prisma.ProductsScalarFieldEnum;
    having?: Prisma.productsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductsCountAggregateInputType | true;
    _avg?: ProductsAvgAggregateInputType;
    _sum?: ProductsSumAggregateInputType;
    _min?: ProductsMinAggregateInputType;
    _max?: ProductsMaxAggregateInputType;
};
export type ProductsGroupByOutputType = {
    id: number;
    name: string | null;
    price: number | null;
    _count: ProductsCountAggregateOutputType | null;
    _avg: ProductsAvgAggregateOutputType | null;
    _sum: ProductsSumAggregateOutputType | null;
    _min: ProductsMinAggregateOutputType | null;
    _max: ProductsMaxAggregateOutputType | null;
};
type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductsGroupByOutputType[P]>;
}>>;
export type productsWhereInput = {
    AND?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    OR?: Prisma.productsWhereInput[];
    NOT?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    id?: Prisma.IntFilter<"products"> | number;
    name?: Prisma.StringNullableFilter<"products"> | string | null;
    price?: Prisma.IntNullableFilter<"products"> | number | null;
    order_items?: Prisma.Order_itemsListRelationFilter;
};
export type productsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_items?: Prisma.order_itemsOrderByRelationAggregateInput;
};
export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    OR?: Prisma.productsWhereInput[];
    NOT?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    name?: Prisma.StringNullableFilter<"products"> | string | null;
    price?: Prisma.IntNullableFilter<"products"> | number | null;
    order_items?: Prisma.Order_itemsListRelationFilter;
}, "id">;
export type productsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.productsCountOrderByAggregateInput;
    _avg?: Prisma.productsAvgOrderByAggregateInput;
    _max?: Prisma.productsMaxOrderByAggregateInput;
    _min?: Prisma.productsMinOrderByAggregateInput;
    _sum?: Prisma.productsSumOrderByAggregateInput;
};
export type productsScalarWhereWithAggregatesInput = {
    AND?: Prisma.productsScalarWhereWithAggregatesInput | Prisma.productsScalarWhereWithAggregatesInput[];
    OR?: Prisma.productsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.productsScalarWhereWithAggregatesInput | Prisma.productsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"products"> | number;
    name?: Prisma.StringNullableWithAggregatesFilter<"products"> | string | null;
    price?: Prisma.IntNullableWithAggregatesFilter<"products"> | number | null;
};
export type productsCreateInput = {
    name?: string | null;
    price?: number | null;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateInput = {
    id?: number;
    name?: string | null;
    price?: number | null;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsUpdateInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_items?: Prisma.order_itemsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsCreateManyInput = {
    id?: number;
    name?: string | null;
    price?: number | null;
};
export type productsUpdateManyMutationInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type productsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type ProductsNullableScalarRelationFilter = {
    is?: Prisma.productsWhereInput | null;
    isNot?: Prisma.productsWhereInput | null;
};
export type productsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type productsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type productsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type productsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type productsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type productsCreateNestedOneWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutOrder_itemsInput, Prisma.productsUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutOrder_itemsInput;
    connect?: Prisma.productsWhereUniqueInput;
};
export type productsUpdateOneWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutOrder_itemsInput, Prisma.productsUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutOrder_itemsInput;
    upsert?: Prisma.productsUpsertWithoutOrder_itemsInput;
    disconnect?: Prisma.productsWhereInput | boolean;
    delete?: Prisma.productsWhereInput | boolean;
    connect?: Prisma.productsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.productsUpdateToOneWithWhereWithoutOrder_itemsInput, Prisma.productsUpdateWithoutOrder_itemsInput>, Prisma.productsUncheckedUpdateWithoutOrder_itemsInput>;
};
export type productsCreateWithoutOrder_itemsInput = {
    name?: string | null;
    price?: number | null;
};
export type productsUncheckedCreateWithoutOrder_itemsInput = {
    id?: number;
    name?: string | null;
    price?: number | null;
};
export type productsCreateOrConnectWithoutOrder_itemsInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutOrder_itemsInput, Prisma.productsUncheckedCreateWithoutOrder_itemsInput>;
};
export type productsUpsertWithoutOrder_itemsInput = {
    update: Prisma.XOR<Prisma.productsUpdateWithoutOrder_itemsInput, Prisma.productsUncheckedUpdateWithoutOrder_itemsInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutOrder_itemsInput, Prisma.productsUncheckedCreateWithoutOrder_itemsInput>;
    where?: Prisma.productsWhereInput;
};
export type productsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: Prisma.productsWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutOrder_itemsInput, Prisma.productsUncheckedUpdateWithoutOrder_itemsInput>;
};
export type productsUpdateWithoutOrder_itemsInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type productsUncheckedUpdateWithoutOrder_itemsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type ProductsCountOutputType = {
    order_items: number;
};
export type ProductsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_items?: boolean | ProductsCountOutputTypeCountOrder_itemsArgs;
};
export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductsCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
};
export type productsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    price?: boolean;
    order_items?: boolean | Prisma.products$order_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["products"]>;
export type productsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    price?: boolean;
}, ExtArgs["result"]["products"]>;
export type productsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    price?: boolean;
}, ExtArgs["result"]["products"]>;
export type productsSelectScalar = {
    id?: boolean;
    name?: boolean;
    price?: boolean;
};
export type productsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "price", ExtArgs["result"]["products"]>;
export type productsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_items?: boolean | Prisma.products$order_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type productsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type productsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $productsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "products";
    objects: {
        order_items: Prisma.$order_itemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string | null;
        price: number | null;
    }, ExtArgs["result"]["products"]>;
    composites: {};
};
export type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$productsPayload, S>;
export type productsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductsCountAggregateInputType | true;
};
export interface productsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['products'];
        meta: {
            name: 'products';
        };
    };
    findUnique<T extends productsFindUniqueArgs>(args: Prisma.SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends productsFindFirstArgs>(args?: Prisma.SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends productsFindManyArgs>(args?: Prisma.SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends productsCreateArgs>(args: Prisma.SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends productsCreateManyArgs>(args?: Prisma.SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends productsDeleteArgs>(args: Prisma.SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends productsUpdateArgs>(args: Prisma.SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends productsDeleteManyArgs>(args?: Prisma.SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends productsUpdateManyArgs>(args: Prisma.SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends productsUpsertArgs>(args: Prisma.SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends productsCountArgs>(args?: Prisma.Subset<T, productsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductsCountAggregateOutputType> : number>;
    aggregate<T extends ProductsAggregateArgs>(args: Prisma.Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>;
    groupBy<T extends productsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: productsGroupByArgs['orderBy'];
    } : {
        orderBy?: productsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: productsFieldRefs;
}
export interface Prisma__productsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order_items<T extends Prisma.products$order_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface productsFieldRefs {
    readonly id: Prisma.FieldRef<"products", 'Int'>;
    readonly name: Prisma.FieldRef<"products", 'String'>;
    readonly price: Prisma.FieldRef<"products", 'Int'>;
}
export type productsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
};
export type productsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
};
export type productsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput | Prisma.productsOrderByWithRelationInput[];
    cursor?: Prisma.productsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductsScalarFieldEnum | Prisma.ProductsScalarFieldEnum[];
};
export type productsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput | Prisma.productsOrderByWithRelationInput[];
    cursor?: Prisma.productsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductsScalarFieldEnum | Prisma.ProductsScalarFieldEnum[];
};
export type productsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput | Prisma.productsOrderByWithRelationInput[];
    cursor?: Prisma.productsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductsScalarFieldEnum | Prisma.ProductsScalarFieldEnum[];
};
export type productsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.productsCreateInput, Prisma.productsUncheckedCreateInput>;
};
export type productsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.productsCreateManyInput | Prisma.productsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type productsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    data: Prisma.productsCreateManyInput | Prisma.productsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type productsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.productsUpdateInput, Prisma.productsUncheckedUpdateInput>;
    where: Prisma.productsWhereUniqueInput;
};
export type productsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.productsUpdateManyMutationInput, Prisma.productsUncheckedUpdateManyInput>;
    where?: Prisma.productsWhereInput;
    limit?: number;
};
export type productsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.productsUpdateManyMutationInput, Prisma.productsUncheckedUpdateManyInput>;
    where?: Prisma.productsWhereInput;
    limit?: number;
};
export type productsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateInput, Prisma.productsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.productsUpdateInput, Prisma.productsUncheckedUpdateInput>;
};
export type productsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
};
export type productsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productsWhereInput;
    limit?: number;
};
export type products$order_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where?: Prisma.order_itemsWhereInput;
    orderBy?: Prisma.order_itemsOrderByWithRelationInput | Prisma.order_itemsOrderByWithRelationInput[];
    cursor?: Prisma.order_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_itemsScalarFieldEnum | Prisma.Order_itemsScalarFieldEnum[];
};
export type productsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
};
export {};
