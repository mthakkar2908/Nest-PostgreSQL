import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ordersModel = runtime.Types.Result.DefaultSelection<Prisma.$ordersPayload>;
export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null;
    _avg: OrdersAvgAggregateOutputType | null;
    _sum: OrdersSumAggregateOutputType | null;
    _min: OrdersMinAggregateOutputType | null;
    _max: OrdersMaxAggregateOutputType | null;
};
export type OrdersAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    amount: number | null;
};
export type OrdersSumAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    amount: number | null;
};
export type OrdersMinAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    product_name: string | null;
    amount: number | null;
};
export type OrdersMaxAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    product_name: string | null;
    amount: number | null;
};
export type OrdersCountAggregateOutputType = {
    id: number;
    user_id: number;
    product_name: number;
    amount: number;
    _all: number;
};
export type OrdersAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    amount?: true;
};
export type OrdersSumAggregateInputType = {
    id?: true;
    user_id?: true;
    amount?: true;
};
export type OrdersMinAggregateInputType = {
    id?: true;
    user_id?: true;
    product_name?: true;
    amount?: true;
};
export type OrdersMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    product_name?: true;
    amount?: true;
};
export type OrdersCountAggregateInputType = {
    id?: true;
    user_id?: true;
    product_name?: true;
    amount?: true;
    _all?: true;
};
export type OrdersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrdersCountAggregateInputType;
    _avg?: OrdersAvgAggregateInputType;
    _sum?: OrdersSumAggregateInputType;
    _min?: OrdersMinAggregateInputType;
    _max?: OrdersMaxAggregateInputType;
};
export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
    [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrders[P]> : Prisma.GetScalarType<T[P], AggregateOrders[P]>;
};
export type ordersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithAggregationInput | Prisma.ordersOrderByWithAggregationInput[];
    by: Prisma.OrdersScalarFieldEnum[] | Prisma.OrdersScalarFieldEnum;
    having?: Prisma.ordersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrdersCountAggregateInputType | true;
    _avg?: OrdersAvgAggregateInputType;
    _sum?: OrdersSumAggregateInputType;
    _min?: OrdersMinAggregateInputType;
    _max?: OrdersMaxAggregateInputType;
};
export type OrdersGroupByOutputType = {
    id: number;
    user_id: number | null;
    product_name: string | null;
    amount: number | null;
    _count: OrdersCountAggregateOutputType | null;
    _avg: OrdersAvgAggregateOutputType | null;
    _sum: OrdersSumAggregateOutputType | null;
    _min: OrdersMinAggregateOutputType | null;
    _max: OrdersMaxAggregateOutputType | null;
};
type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrdersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrdersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrdersGroupByOutputType[P]>;
}>>;
export type ordersWhereInput = {
    AND?: Prisma.ordersWhereInput | Prisma.ordersWhereInput[];
    OR?: Prisma.ordersWhereInput[];
    NOT?: Prisma.ordersWhereInput | Prisma.ordersWhereInput[];
    id?: Prisma.IntFilter<"orders"> | number;
    user_id?: Prisma.IntNullableFilter<"orders"> | number | null;
    product_name?: Prisma.StringNullableFilter<"orders"> | string | null;
    amount?: Prisma.IntNullableFilter<"orders"> | number | null;
    order_items?: Prisma.Order_itemsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type ordersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    product_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_items?: Prisma.order_itemsOrderByRelationAggregateInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ordersWhereInput | Prisma.ordersWhereInput[];
    OR?: Prisma.ordersWhereInput[];
    NOT?: Prisma.ordersWhereInput | Prisma.ordersWhereInput[];
    user_id?: Prisma.IntNullableFilter<"orders"> | number | null;
    product_name?: Prisma.StringNullableFilter<"orders"> | string | null;
    amount?: Prisma.IntNullableFilter<"orders"> | number | null;
    order_items?: Prisma.Order_itemsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "id">;
export type ordersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    product_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ordersCountOrderByAggregateInput;
    _avg?: Prisma.ordersAvgOrderByAggregateInput;
    _max?: Prisma.ordersMaxOrderByAggregateInput;
    _min?: Prisma.ordersMinOrderByAggregateInput;
    _sum?: Prisma.ordersSumOrderByAggregateInput;
};
export type ordersScalarWhereWithAggregatesInput = {
    AND?: Prisma.ordersScalarWhereWithAggregatesInput | Prisma.ordersScalarWhereWithAggregatesInput[];
    OR?: Prisma.ordersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ordersScalarWhereWithAggregatesInput | Prisma.ordersScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"orders"> | number;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"orders"> | number | null;
    product_name?: Prisma.StringNullableWithAggregatesFilter<"orders"> | string | null;
    amount?: Prisma.IntNullableWithAggregatesFilter<"orders"> | number | null;
};
export type ordersCreateInput = {
    product_name?: string | null;
    amount?: number | null;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    users?: Prisma.usersCreateNestedOneWithoutOrdersInput;
};
export type ordersUncheckedCreateInput = {
    id?: number;
    user_id?: number | null;
    product_name?: string | null;
    amount?: number | null;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersUpdateInput = {
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    users?: Prisma.usersUpdateOneWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateManyInput = {
    id?: number;
    user_id?: number | null;
    product_name?: string | null;
    amount?: number | null;
};
export type ordersUpdateManyMutationInput = {
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type ordersUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type OrdersNullableScalarRelationFilter = {
    is?: Prisma.ordersWhereInput | null;
    isNot?: Prisma.ordersWhereInput | null;
};
export type ordersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    product_name?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type ordersAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type ordersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    product_name?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type ordersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    product_name?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type ordersSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type OrdersListRelationFilter = {
    every?: Prisma.ordersWhereInput;
    some?: Prisma.ordersWhereInput;
    none?: Prisma.ordersWhereInput;
};
export type ordersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutOrder_itemsInput, Prisma.ordersUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutOrder_itemsInput;
    connect?: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateOneWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutOrder_itemsInput, Prisma.ordersUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutOrder_itemsInput;
    upsert?: Prisma.ordersUpsertWithoutOrder_itemsInput;
    disconnect?: Prisma.ordersWhereInput | boolean;
    delete?: Prisma.ordersWhereInput | boolean;
    connect?: Prisma.ordersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ordersUpdateToOneWithWhereWithoutOrder_itemsInput, Prisma.ordersUpdateWithoutOrder_itemsInput>, Prisma.ordersUncheckedUpdateWithoutOrder_itemsInput>;
};
export type ordersCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutUsersInput, Prisma.ordersUncheckedCreateWithoutUsersInput> | Prisma.ordersCreateWithoutUsersInput[] | Prisma.ordersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutUsersInput | Prisma.ordersCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.ordersCreateManyUsersInputEnvelope;
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
};
export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutUsersInput, Prisma.ordersUncheckedCreateWithoutUsersInput> | Prisma.ordersCreateWithoutUsersInput[] | Prisma.ordersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutUsersInput | Prisma.ordersCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.ordersCreateManyUsersInputEnvelope;
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
};
export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutUsersInput, Prisma.ordersUncheckedCreateWithoutUsersInput> | Prisma.ordersCreateWithoutUsersInput[] | Prisma.ordersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutUsersInput | Prisma.ordersCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.ordersUpsertWithWhereUniqueWithoutUsersInput | Prisma.ordersUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.ordersCreateManyUsersInputEnvelope;
    set?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    disconnect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    delete?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    update?: Prisma.ordersUpdateWithWhereUniqueWithoutUsersInput | Prisma.ordersUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.ordersUpdateManyWithWhereWithoutUsersInput | Prisma.ordersUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
};
export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutUsersInput, Prisma.ordersUncheckedCreateWithoutUsersInput> | Prisma.ordersCreateWithoutUsersInput[] | Prisma.ordersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutUsersInput | Prisma.ordersCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.ordersUpsertWithWhereUniqueWithoutUsersInput | Prisma.ordersUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.ordersCreateManyUsersInputEnvelope;
    set?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    disconnect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    delete?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    update?: Prisma.ordersUpdateWithWhereUniqueWithoutUsersInput | Prisma.ordersUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.ordersUpdateManyWithWhereWithoutUsersInput | Prisma.ordersUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
};
export type ordersCreateWithoutOrder_itemsInput = {
    product_name?: string | null;
    amount?: number | null;
    users?: Prisma.usersCreateNestedOneWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    id?: number;
    user_id?: number | null;
    product_name?: string | null;
    amount?: number | null;
};
export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutOrder_itemsInput, Prisma.ordersUncheckedCreateWithoutOrder_itemsInput>;
};
export type ordersUpsertWithoutOrder_itemsInput = {
    update: Prisma.XOR<Prisma.ordersUpdateWithoutOrder_itemsInput, Prisma.ordersUncheckedUpdateWithoutOrder_itemsInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutOrder_itemsInput, Prisma.ordersUncheckedCreateWithoutOrder_itemsInput>;
    where?: Prisma.ordersWhereInput;
};
export type ordersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: Prisma.ordersWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutOrder_itemsInput, Prisma.ordersUncheckedUpdateWithoutOrder_itemsInput>;
};
export type ordersUpdateWithoutOrder_itemsInput = {
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    users?: Prisma.usersUpdateOneWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type ordersCreateWithoutUsersInput = {
    product_name?: string | null;
    amount?: number | null;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutUsersInput = {
    id?: number;
    product_name?: string | null;
    amount?: number | null;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutUsersInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutUsersInput, Prisma.ordersUncheckedCreateWithoutUsersInput>;
};
export type ordersCreateManyUsersInputEnvelope = {
    data: Prisma.ordersCreateManyUsersInput | Prisma.ordersCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.ordersWhereUniqueInput;
    update: Prisma.XOR<Prisma.ordersUpdateWithoutUsersInput, Prisma.ordersUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutUsersInput, Prisma.ordersUncheckedCreateWithoutUsersInput>;
};
export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.ordersWhereUniqueInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutUsersInput, Prisma.ordersUncheckedUpdateWithoutUsersInput>;
};
export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.ordersScalarWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateManyMutationInput, Prisma.ordersUncheckedUpdateManyWithoutUsersInput>;
};
export type ordersScalarWhereInput = {
    AND?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
    OR?: Prisma.ordersScalarWhereInput[];
    NOT?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
    id?: Prisma.IntFilter<"orders"> | number;
    user_id?: Prisma.IntNullableFilter<"orders"> | number | null;
    product_name?: Prisma.StringNullableFilter<"orders"> | string | null;
    amount?: Prisma.IntNullableFilter<"orders"> | number | null;
};
export type ordersCreateManyUsersInput = {
    id?: number;
    product_name?: string | null;
    amount?: number | null;
};
export type ordersUpdateWithoutUsersInput = {
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type OrdersCountOutputType = {
    order_items: number;
};
export type OrdersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs;
};
export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdersCountOutputTypeSelect<ExtArgs> | null;
};
export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
};
export type ordersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    product_name?: boolean;
    amount?: boolean;
    order_items?: boolean | Prisma.orders$order_itemsArgs<ExtArgs>;
    users?: boolean | Prisma.orders$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.OrdersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orders"]>;
export type ordersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    product_name?: boolean;
    amount?: boolean;
    users?: boolean | Prisma.orders$usersArgs<ExtArgs>;
}, ExtArgs["result"]["orders"]>;
export type ordersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    product_name?: boolean;
    amount?: boolean;
    users?: boolean | Prisma.orders$usersArgs<ExtArgs>;
}, ExtArgs["result"]["orders"]>;
export type ordersSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    product_name?: boolean;
    amount?: boolean;
};
export type ordersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "product_name" | "amount", ExtArgs["result"]["orders"]>;
export type ordersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_items?: boolean | Prisma.orders$order_itemsArgs<ExtArgs>;
    users?: boolean | Prisma.orders$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.OrdersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ordersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.orders$usersArgs<ExtArgs>;
};
export type ordersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.orders$usersArgs<ExtArgs>;
};
export type $ordersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "orders";
    objects: {
        order_items: Prisma.$order_itemsPayload<ExtArgs>[];
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        user_id: number | null;
        product_name: string | null;
        amount: number | null;
    }, ExtArgs["result"]["orders"]>;
    composites: {};
};
export type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ordersPayload, S>;
export type ordersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrdersCountAggregateInputType | true;
};
export interface ordersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['orders'];
        meta: {
            name: 'orders';
        };
    };
    findUnique<T extends ordersFindUniqueArgs>(args: Prisma.SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ordersFindFirstArgs>(args?: Prisma.SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ordersFindManyArgs>(args?: Prisma.SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ordersCreateArgs>(args: Prisma.SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ordersCreateManyArgs>(args?: Prisma.SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ordersDeleteArgs>(args: Prisma.SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ordersUpdateArgs>(args: Prisma.SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ordersDeleteManyArgs>(args?: Prisma.SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ordersUpdateManyArgs>(args: Prisma.SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ordersUpsertArgs>(args: Prisma.SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ordersCountArgs>(args?: Prisma.Subset<T, ordersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrdersCountAggregateOutputType> : number>;
    aggregate<T extends OrdersAggregateArgs>(args: Prisma.Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>;
    groupBy<T extends ordersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ordersGroupByArgs['orderBy'];
    } : {
        orderBy?: ordersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ordersFieldRefs;
}
export interface Prisma__ordersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order_items<T extends Prisma.orders$order_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    users<T extends Prisma.orders$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ordersFieldRefs {
    readonly id: Prisma.FieldRef<"orders", 'Int'>;
    readonly user_id: Prisma.FieldRef<"orders", 'Int'>;
    readonly product_name: Prisma.FieldRef<"orders", 'String'>;
    readonly amount: Prisma.FieldRef<"orders", 'Int'>;
}
export type ordersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where: Prisma.ordersWhereUniqueInput;
};
export type ordersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where: Prisma.ordersWhereUniqueInput;
};
export type ordersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdersScalarFieldEnum | Prisma.OrdersScalarFieldEnum[];
};
export type ordersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdersScalarFieldEnum | Prisma.OrdersScalarFieldEnum[];
};
export type ordersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdersScalarFieldEnum | Prisma.OrdersScalarFieldEnum[];
};
export type ordersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.ordersCreateInput, Prisma.ordersUncheckedCreateInput>;
};
export type ordersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ordersCreateManyInput | Prisma.ordersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ordersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    data: Prisma.ordersCreateManyInput | Prisma.ordersCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ordersIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ordersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ordersUpdateInput, Prisma.ordersUncheckedUpdateInput>;
    where: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ordersUpdateManyMutationInput, Prisma.ordersUncheckedUpdateManyInput>;
    where?: Prisma.ordersWhereInput;
    limit?: number;
};
export type ordersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ordersUpdateManyMutationInput, Prisma.ordersUncheckedUpdateManyInput>;
    where?: Prisma.ordersWhereInput;
    limit?: number;
    include?: Prisma.ordersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ordersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateInput, Prisma.ordersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ordersUpdateInput, Prisma.ordersUncheckedUpdateInput>;
};
export type ordersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where: Prisma.ordersWhereUniqueInput;
};
export type ordersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
    limit?: number;
};
export type orders$order_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type orders$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type ordersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
};
export {};
