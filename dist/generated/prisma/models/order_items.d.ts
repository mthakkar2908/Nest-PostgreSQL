import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type order_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$order_itemsPayload>;
export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null;
    _avg: Order_itemsAvgAggregateOutputType | null;
    _sum: Order_itemsSumAggregateOutputType | null;
    _min: Order_itemsMinAggregateOutputType | null;
    _max: Order_itemsMaxAggregateOutputType | null;
};
export type Order_itemsAvgAggregateOutputType = {
    id: number | null;
    order_id: number | null;
    product_id: number | null;
    quantity: number | null;
};
export type Order_itemsSumAggregateOutputType = {
    id: number | null;
    order_id: number | null;
    product_id: number | null;
    quantity: number | null;
};
export type Order_itemsMinAggregateOutputType = {
    id: number | null;
    order_id: number | null;
    product_id: number | null;
    quantity: number | null;
};
export type Order_itemsMaxAggregateOutputType = {
    id: number | null;
    order_id: number | null;
    product_id: number | null;
    quantity: number | null;
};
export type Order_itemsCountAggregateOutputType = {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    _all: number;
};
export type Order_itemsAvgAggregateInputType = {
    id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
};
export type Order_itemsSumAggregateInputType = {
    id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
};
export type Order_itemsMinAggregateInputType = {
    id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
};
export type Order_itemsMaxAggregateInputType = {
    id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
};
export type Order_itemsCountAggregateInputType = {
    id?: true;
    order_id?: true;
    product_id?: true;
    quantity?: true;
    _all?: true;
};
export type Order_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
    orderBy?: Prisma.order_itemsOrderByWithRelationInput | Prisma.order_itemsOrderByWithRelationInput[];
    cursor?: Prisma.order_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Order_itemsCountAggregateInputType;
    _avg?: Order_itemsAvgAggregateInputType;
    _sum?: Order_itemsSumAggregateInputType;
    _min?: Order_itemsMinAggregateInputType;
    _max?: Order_itemsMaxAggregateInputType;
};
export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder_items[P]> : Prisma.GetScalarType<T[P], AggregateOrder_items[P]>;
};
export type order_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
    orderBy?: Prisma.order_itemsOrderByWithAggregationInput | Prisma.order_itemsOrderByWithAggregationInput[];
    by: Prisma.Order_itemsScalarFieldEnum[] | Prisma.Order_itemsScalarFieldEnum;
    having?: Prisma.order_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Order_itemsCountAggregateInputType | true;
    _avg?: Order_itemsAvgAggregateInputType;
    _sum?: Order_itemsSumAggregateInputType;
    _min?: Order_itemsMinAggregateInputType;
    _max?: Order_itemsMaxAggregateInputType;
};
export type Order_itemsGroupByOutputType = {
    id: number;
    order_id: number | null;
    product_id: number | null;
    quantity: number | null;
    _count: Order_itemsCountAggregateOutputType | null;
    _avg: Order_itemsAvgAggregateOutputType | null;
    _sum: Order_itemsSumAggregateOutputType | null;
    _min: Order_itemsMinAggregateOutputType | null;
    _max: Order_itemsMaxAggregateOutputType | null;
};
type GetOrder_itemsGroupByPayload<T extends order_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Order_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Order_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Order_itemsGroupByOutputType[P]>;
}>>;
export type order_itemsWhereInput = {
    AND?: Prisma.order_itemsWhereInput | Prisma.order_itemsWhereInput[];
    OR?: Prisma.order_itemsWhereInput[];
    NOT?: Prisma.order_itemsWhereInput | Prisma.order_itemsWhereInput[];
    id?: Prisma.IntFilter<"order_items"> | number;
    order_id?: Prisma.IntNullableFilter<"order_items"> | number | null;
    product_id?: Prisma.IntNullableFilter<"order_items"> | number | null;
    quantity?: Prisma.IntNullableFilter<"order_items"> | number | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
    products?: Prisma.XOR<Prisma.ProductsNullableScalarRelationFilter, Prisma.productsWhereInput> | null;
};
export type order_itemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    product_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders?: Prisma.ordersOrderByWithRelationInput;
    products?: Prisma.productsOrderByWithRelationInput;
};
export type order_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.order_itemsWhereInput | Prisma.order_itemsWhereInput[];
    OR?: Prisma.order_itemsWhereInput[];
    NOT?: Prisma.order_itemsWhereInput | Prisma.order_itemsWhereInput[];
    order_id?: Prisma.IntNullableFilter<"order_items"> | number | null;
    product_id?: Prisma.IntNullableFilter<"order_items"> | number | null;
    quantity?: Prisma.IntNullableFilter<"order_items"> | number | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
    products?: Prisma.XOR<Prisma.ProductsNullableScalarRelationFilter, Prisma.productsWhereInput> | null;
}, "id">;
export type order_itemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    product_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.order_itemsCountOrderByAggregateInput;
    _avg?: Prisma.order_itemsAvgOrderByAggregateInput;
    _max?: Prisma.order_itemsMaxOrderByAggregateInput;
    _min?: Prisma.order_itemsMinOrderByAggregateInput;
    _sum?: Prisma.order_itemsSumOrderByAggregateInput;
};
export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.order_itemsScalarWhereWithAggregatesInput | Prisma.order_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.order_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.order_itemsScalarWhereWithAggregatesInput | Prisma.order_itemsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"order_items"> | number;
    order_id?: Prisma.IntNullableWithAggregatesFilter<"order_items"> | number | null;
    product_id?: Prisma.IntNullableWithAggregatesFilter<"order_items"> | number | null;
    quantity?: Prisma.IntNullableWithAggregatesFilter<"order_items"> | number | null;
};
export type order_itemsCreateInput = {
    quantity?: number | null;
    orders?: Prisma.ordersCreateNestedOneWithoutOrder_itemsInput;
    products?: Prisma.productsCreateNestedOneWithoutOrder_itemsInput;
};
export type order_itemsUncheckedCreateInput = {
    id?: number;
    order_id?: number | null;
    product_id?: number | null;
    quantity?: number | null;
};
export type order_itemsUpdateInput = {
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    orders?: Prisma.ordersUpdateOneWithoutOrder_itemsNestedInput;
    products?: Prisma.productsUpdateOneWithoutOrder_itemsNestedInput;
};
export type order_itemsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type order_itemsCreateManyInput = {
    id?: number;
    order_id?: number | null;
    product_id?: number | null;
    quantity?: number | null;
};
export type order_itemsUpdateManyMutationInput = {
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type order_itemsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type order_itemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type order_itemsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type order_itemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type order_itemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type order_itemsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type Order_itemsListRelationFilter = {
    every?: Prisma.order_itemsWhereInput;
    some?: Prisma.order_itemsWhereInput;
    none?: Prisma.order_itemsWhereInput;
};
export type order_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type order_itemsCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput> | Prisma.order_itemsCreateWithoutOrdersInput[] | Prisma.order_itemsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutOrdersInput | Prisma.order_itemsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.order_itemsCreateManyOrdersInputEnvelope;
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
};
export type order_itemsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput> | Prisma.order_itemsCreateWithoutOrdersInput[] | Prisma.order_itemsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutOrdersInput | Prisma.order_itemsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.order_itemsCreateManyOrdersInputEnvelope;
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
};
export type order_itemsUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput> | Prisma.order_itemsCreateWithoutOrdersInput[] | Prisma.order_itemsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutOrdersInput | Prisma.order_itemsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.order_itemsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.order_itemsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.order_itemsCreateManyOrdersInputEnvelope;
    set?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    disconnect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    delete?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    update?: Prisma.order_itemsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.order_itemsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.order_itemsUpdateManyWithWhereWithoutOrdersInput | Prisma.order_itemsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
};
export type order_itemsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput> | Prisma.order_itemsCreateWithoutOrdersInput[] | Prisma.order_itemsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutOrdersInput | Prisma.order_itemsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.order_itemsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.order_itemsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.order_itemsCreateManyOrdersInputEnvelope;
    set?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    disconnect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    delete?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    update?: Prisma.order_itemsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.order_itemsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.order_itemsUpdateManyWithWhereWithoutOrdersInput | Prisma.order_itemsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
};
export type order_itemsCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutProductsInput, Prisma.order_itemsUncheckedCreateWithoutProductsInput> | Prisma.order_itemsCreateWithoutProductsInput[] | Prisma.order_itemsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutProductsInput | Prisma.order_itemsCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.order_itemsCreateManyProductsInputEnvelope;
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
};
export type order_itemsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutProductsInput, Prisma.order_itemsUncheckedCreateWithoutProductsInput> | Prisma.order_itemsCreateWithoutProductsInput[] | Prisma.order_itemsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutProductsInput | Prisma.order_itemsCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.order_itemsCreateManyProductsInputEnvelope;
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
};
export type order_itemsUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutProductsInput, Prisma.order_itemsUncheckedCreateWithoutProductsInput> | Prisma.order_itemsCreateWithoutProductsInput[] | Prisma.order_itemsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutProductsInput | Prisma.order_itemsCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.order_itemsUpsertWithWhereUniqueWithoutProductsInput | Prisma.order_itemsUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.order_itemsCreateManyProductsInputEnvelope;
    set?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    disconnect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    delete?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    update?: Prisma.order_itemsUpdateWithWhereUniqueWithoutProductsInput | Prisma.order_itemsUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.order_itemsUpdateManyWithWhereWithoutProductsInput | Prisma.order_itemsUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
};
export type order_itemsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutProductsInput, Prisma.order_itemsUncheckedCreateWithoutProductsInput> | Prisma.order_itemsCreateWithoutProductsInput[] | Prisma.order_itemsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutProductsInput | Prisma.order_itemsCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.order_itemsUpsertWithWhereUniqueWithoutProductsInput | Prisma.order_itemsUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.order_itemsCreateManyProductsInputEnvelope;
    set?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    disconnect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    delete?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    update?: Prisma.order_itemsUpdateWithWhereUniqueWithoutProductsInput | Prisma.order_itemsUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.order_itemsUpdateManyWithWhereWithoutProductsInput | Prisma.order_itemsUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
};
export type order_itemsCreateWithoutOrdersInput = {
    quantity?: number | null;
    products?: Prisma.productsCreateNestedOneWithoutOrder_itemsInput;
};
export type order_itemsUncheckedCreateWithoutOrdersInput = {
    id?: number;
    product_id?: number | null;
    quantity?: number | null;
};
export type order_itemsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput>;
};
export type order_itemsCreateManyOrdersInputEnvelope = {
    data: Prisma.order_itemsCreateManyOrdersInput | Prisma.order_itemsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type order_itemsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.order_itemsUpdateWithoutOrdersInput, Prisma.order_itemsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput>;
};
export type order_itemsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.order_itemsUpdateWithoutOrdersInput, Prisma.order_itemsUncheckedUpdateWithoutOrdersInput>;
};
export type order_itemsUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.order_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.order_itemsUpdateManyMutationInput, Prisma.order_itemsUncheckedUpdateManyWithoutOrdersInput>;
};
export type order_itemsScalarWhereInput = {
    AND?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
    OR?: Prisma.order_itemsScalarWhereInput[];
    NOT?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
    id?: Prisma.IntFilter<"order_items"> | number;
    order_id?: Prisma.IntNullableFilter<"order_items"> | number | null;
    product_id?: Prisma.IntNullableFilter<"order_items"> | number | null;
    quantity?: Prisma.IntNullableFilter<"order_items"> | number | null;
};
export type order_itemsCreateWithoutProductsInput = {
    quantity?: number | null;
    orders?: Prisma.ordersCreateNestedOneWithoutOrder_itemsInput;
};
export type order_itemsUncheckedCreateWithoutProductsInput = {
    id?: number;
    order_id?: number | null;
    quantity?: number | null;
};
export type order_itemsCreateOrConnectWithoutProductsInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_itemsCreateWithoutProductsInput, Prisma.order_itemsUncheckedCreateWithoutProductsInput>;
};
export type order_itemsCreateManyProductsInputEnvelope = {
    data: Prisma.order_itemsCreateManyProductsInput | Prisma.order_itemsCreateManyProductsInput[];
    skipDuplicates?: boolean;
};
export type order_itemsUpsertWithWhereUniqueWithoutProductsInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.order_itemsUpdateWithoutProductsInput, Prisma.order_itemsUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.order_itemsCreateWithoutProductsInput, Prisma.order_itemsUncheckedCreateWithoutProductsInput>;
};
export type order_itemsUpdateWithWhereUniqueWithoutProductsInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.order_itemsUpdateWithoutProductsInput, Prisma.order_itemsUncheckedUpdateWithoutProductsInput>;
};
export type order_itemsUpdateManyWithWhereWithoutProductsInput = {
    where: Prisma.order_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.order_itemsUpdateManyMutationInput, Prisma.order_itemsUncheckedUpdateManyWithoutProductsInput>;
};
export type order_itemsCreateManyOrdersInput = {
    id?: number;
    product_id?: number | null;
    quantity?: number | null;
};
export type order_itemsUpdateWithoutOrdersInput = {
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    products?: Prisma.productsUpdateOneWithoutOrder_itemsNestedInput;
};
export type order_itemsUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type order_itemsUncheckedUpdateManyWithoutOrdersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type order_itemsCreateManyProductsInput = {
    id?: number;
    order_id?: number | null;
    quantity?: number | null;
};
export type order_itemsUpdateWithoutProductsInput = {
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    orders?: Prisma.ordersUpdateOneWithoutOrder_itemsNestedInput;
};
export type order_itemsUncheckedUpdateWithoutProductsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type order_itemsUncheckedUpdateManyWithoutProductsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type order_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    orders?: boolean | Prisma.order_items$ordersArgs<ExtArgs>;
    products?: boolean | Prisma.order_items$productsArgs<ExtArgs>;
}, ExtArgs["result"]["order_items"]>;
export type order_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    orders?: boolean | Prisma.order_items$ordersArgs<ExtArgs>;
    products?: boolean | Prisma.order_items$productsArgs<ExtArgs>;
}, ExtArgs["result"]["order_items"]>;
export type order_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    orders?: boolean | Prisma.order_items$ordersArgs<ExtArgs>;
    products?: boolean | Prisma.order_items$productsArgs<ExtArgs>;
}, ExtArgs["result"]["order_items"]>;
export type order_itemsSelectScalar = {
    id?: boolean;
    order_id?: boolean;
    product_id?: boolean;
    quantity?: boolean;
};
export type order_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "order_id" | "product_id" | "quantity", ExtArgs["result"]["order_items"]>;
export type order_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.order_items$ordersArgs<ExtArgs>;
    products?: boolean | Prisma.order_items$productsArgs<ExtArgs>;
};
export type order_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.order_items$ordersArgs<ExtArgs>;
    products?: boolean | Prisma.order_items$productsArgs<ExtArgs>;
};
export type order_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.order_items$ordersArgs<ExtArgs>;
    products?: boolean | Prisma.order_items$productsArgs<ExtArgs>;
};
export type $order_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "order_items";
    objects: {
        orders: Prisma.$ordersPayload<ExtArgs> | null;
        products: Prisma.$productsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        order_id: number | null;
        product_id: number | null;
        quantity: number | null;
    }, ExtArgs["result"]["order_items"]>;
    composites: {};
};
export type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$order_itemsPayload, S>;
export type order_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<order_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Order_itemsCountAggregateInputType | true;
};
export interface order_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['order_items'];
        meta: {
            name: 'order_items';
        };
    };
    findUnique<T extends order_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, order_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, order_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends order_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, order_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, order_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends order_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, order_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends order_itemsCreateArgs>(args: Prisma.SelectSubset<T, order_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends order_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, order_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends order_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, order_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends order_itemsDeleteArgs>(args: Prisma.SelectSubset<T, order_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends order_itemsUpdateArgs>(args: Prisma.SelectSubset<T, order_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends order_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, order_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends order_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, order_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends order_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, order_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends order_itemsUpsertArgs>(args: Prisma.SelectSubset<T, order_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends order_itemsCountArgs>(args?: Prisma.Subset<T, order_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Order_itemsCountAggregateOutputType> : number>;
    aggregate<T extends Order_itemsAggregateArgs>(args: Prisma.Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>;
    groupBy<T extends order_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: order_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: order_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: order_itemsFieldRefs;
}
export interface Prisma__order_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.order_items$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.order_items$ordersArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    products<T extends Prisma.order_items$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.order_items$productsArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface order_itemsFieldRefs {
    readonly id: Prisma.FieldRef<"order_items", 'Int'>;
    readonly order_id: Prisma.FieldRef<"order_items", 'Int'>;
    readonly product_id: Prisma.FieldRef<"order_items", 'Int'>;
    readonly quantity: Prisma.FieldRef<"order_items", 'Int'>;
}
export type order_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where: Prisma.order_itemsWhereUniqueInput;
};
export type order_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where: Prisma.order_itemsWhereUniqueInput;
};
export type order_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type order_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type order_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type order_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.order_itemsCreateInput, Prisma.order_itemsUncheckedCreateInput>;
};
export type order_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.order_itemsCreateManyInput | Prisma.order_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type order_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    data: Prisma.order_itemsCreateManyInput | Prisma.order_itemsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.order_itemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type order_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_itemsUpdateInput, Prisma.order_itemsUncheckedUpdateInput>;
    where: Prisma.order_itemsWhereUniqueInput;
};
export type order_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.order_itemsUpdateManyMutationInput, Prisma.order_itemsUncheckedUpdateManyInput>;
    where?: Prisma.order_itemsWhereInput;
    limit?: number;
};
export type order_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_itemsUpdateManyMutationInput, Prisma.order_itemsUncheckedUpdateManyInput>;
    where?: Prisma.order_itemsWhereInput;
    limit?: number;
    include?: Prisma.order_itemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type order_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where: Prisma.order_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_itemsCreateInput, Prisma.order_itemsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.order_itemsUpdateInput, Prisma.order_itemsUncheckedUpdateInput>;
};
export type order_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where: Prisma.order_itemsWhereUniqueInput;
};
export type order_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
    limit?: number;
};
export type order_items$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
};
export type order_items$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where?: Prisma.productsWhereInput;
};
export type order_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
};
export {};
