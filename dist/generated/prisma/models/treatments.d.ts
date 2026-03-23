import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type treatmentsModel = runtime.Types.Result.DefaultSelection<Prisma.$treatmentsPayload>;
export type AggregateTreatments = {
    _count: TreatmentsCountAggregateOutputType | null;
    _avg: TreatmentsAvgAggregateOutputType | null;
    _sum: TreatmentsSumAggregateOutputType | null;
    _min: TreatmentsMinAggregateOutputType | null;
    _max: TreatmentsMaxAggregateOutputType | null;
};
export type TreatmentsAvgAggregateOutputType = {
    id: number | null;
    appointment_id: number | null;
    cost: number | null;
};
export type TreatmentsSumAggregateOutputType = {
    id: number | null;
    appointment_id: number | null;
    cost: number | null;
};
export type TreatmentsMinAggregateOutputType = {
    id: number | null;
    appointment_id: number | null;
    treatment_name: string | null;
    cost: number | null;
};
export type TreatmentsMaxAggregateOutputType = {
    id: number | null;
    appointment_id: number | null;
    treatment_name: string | null;
    cost: number | null;
};
export type TreatmentsCountAggregateOutputType = {
    id: number;
    appointment_id: number;
    treatment_name: number;
    cost: number;
    _all: number;
};
export type TreatmentsAvgAggregateInputType = {
    id?: true;
    appointment_id?: true;
    cost?: true;
};
export type TreatmentsSumAggregateInputType = {
    id?: true;
    appointment_id?: true;
    cost?: true;
};
export type TreatmentsMinAggregateInputType = {
    id?: true;
    appointment_id?: true;
    treatment_name?: true;
    cost?: true;
};
export type TreatmentsMaxAggregateInputType = {
    id?: true;
    appointment_id?: true;
    treatment_name?: true;
    cost?: true;
};
export type TreatmentsCountAggregateInputType = {
    id?: true;
    appointment_id?: true;
    treatment_name?: true;
    cost?: true;
    _all?: true;
};
export type TreatmentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.treatmentsWhereInput;
    orderBy?: Prisma.treatmentsOrderByWithRelationInput | Prisma.treatmentsOrderByWithRelationInput[];
    cursor?: Prisma.treatmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TreatmentsCountAggregateInputType;
    _avg?: TreatmentsAvgAggregateInputType;
    _sum?: TreatmentsSumAggregateInputType;
    _min?: TreatmentsMinAggregateInputType;
    _max?: TreatmentsMaxAggregateInputType;
};
export type GetTreatmentsAggregateType<T extends TreatmentsAggregateArgs> = {
    [P in keyof T & keyof AggregateTreatments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTreatments[P]> : Prisma.GetScalarType<T[P], AggregateTreatments[P]>;
};
export type treatmentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.treatmentsWhereInput;
    orderBy?: Prisma.treatmentsOrderByWithAggregationInput | Prisma.treatmentsOrderByWithAggregationInput[];
    by: Prisma.TreatmentsScalarFieldEnum[] | Prisma.TreatmentsScalarFieldEnum;
    having?: Prisma.treatmentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TreatmentsCountAggregateInputType | true;
    _avg?: TreatmentsAvgAggregateInputType;
    _sum?: TreatmentsSumAggregateInputType;
    _min?: TreatmentsMinAggregateInputType;
    _max?: TreatmentsMaxAggregateInputType;
};
export type TreatmentsGroupByOutputType = {
    id: number;
    appointment_id: number | null;
    treatment_name: string | null;
    cost: number | null;
    _count: TreatmentsCountAggregateOutputType | null;
    _avg: TreatmentsAvgAggregateOutputType | null;
    _sum: TreatmentsSumAggregateOutputType | null;
    _min: TreatmentsMinAggregateOutputType | null;
    _max: TreatmentsMaxAggregateOutputType | null;
};
type GetTreatmentsGroupByPayload<T extends treatmentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TreatmentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TreatmentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TreatmentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TreatmentsGroupByOutputType[P]>;
}>>;
export type treatmentsWhereInput = {
    AND?: Prisma.treatmentsWhereInput | Prisma.treatmentsWhereInput[];
    OR?: Prisma.treatmentsWhereInput[];
    NOT?: Prisma.treatmentsWhereInput | Prisma.treatmentsWhereInput[];
    id?: Prisma.IntFilter<"treatments"> | number;
    appointment_id?: Prisma.IntNullableFilter<"treatments"> | number | null;
    treatment_name?: Prisma.StringNullableFilter<"treatments"> | string | null;
    cost?: Prisma.IntNullableFilter<"treatments"> | number | null;
    appointments?: Prisma.XOR<Prisma.AppointmentsNullableScalarRelationFilter, Prisma.appointmentsWhereInput> | null;
};
export type treatmentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    appointment_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    treatment_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    cost?: Prisma.SortOrderInput | Prisma.SortOrder;
    appointments?: Prisma.appointmentsOrderByWithRelationInput;
};
export type treatmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.treatmentsWhereInput | Prisma.treatmentsWhereInput[];
    OR?: Prisma.treatmentsWhereInput[];
    NOT?: Prisma.treatmentsWhereInput | Prisma.treatmentsWhereInput[];
    appointment_id?: Prisma.IntNullableFilter<"treatments"> | number | null;
    treatment_name?: Prisma.StringNullableFilter<"treatments"> | string | null;
    cost?: Prisma.IntNullableFilter<"treatments"> | number | null;
    appointments?: Prisma.XOR<Prisma.AppointmentsNullableScalarRelationFilter, Prisma.appointmentsWhereInput> | null;
}, "id">;
export type treatmentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    appointment_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    treatment_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    cost?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.treatmentsCountOrderByAggregateInput;
    _avg?: Prisma.treatmentsAvgOrderByAggregateInput;
    _max?: Prisma.treatmentsMaxOrderByAggregateInput;
    _min?: Prisma.treatmentsMinOrderByAggregateInput;
    _sum?: Prisma.treatmentsSumOrderByAggregateInput;
};
export type treatmentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.treatmentsScalarWhereWithAggregatesInput | Prisma.treatmentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.treatmentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.treatmentsScalarWhereWithAggregatesInput | Prisma.treatmentsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"treatments"> | number;
    appointment_id?: Prisma.IntNullableWithAggregatesFilter<"treatments"> | number | null;
    treatment_name?: Prisma.StringNullableWithAggregatesFilter<"treatments"> | string | null;
    cost?: Prisma.IntNullableWithAggregatesFilter<"treatments"> | number | null;
};
export type treatmentsCreateInput = {
    treatment_name?: string | null;
    cost?: number | null;
    appointments?: Prisma.appointmentsCreateNestedOneWithoutTreatmentsInput;
};
export type treatmentsUncheckedCreateInput = {
    id?: number;
    appointment_id?: number | null;
    treatment_name?: string | null;
    cost?: number | null;
};
export type treatmentsUpdateInput = {
    treatment_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    appointments?: Prisma.appointmentsUpdateOneWithoutTreatmentsNestedInput;
};
export type treatmentsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    appointment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    treatment_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type treatmentsCreateManyInput = {
    id?: number;
    appointment_id?: number | null;
    treatment_name?: string | null;
    cost?: number | null;
};
export type treatmentsUpdateManyMutationInput = {
    treatment_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type treatmentsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    appointment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    treatment_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type TreatmentsListRelationFilter = {
    every?: Prisma.treatmentsWhereInput;
    some?: Prisma.treatmentsWhereInput;
    none?: Prisma.treatmentsWhereInput;
};
export type treatmentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type treatmentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appointment_id?: Prisma.SortOrder;
    treatment_name?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
};
export type treatmentsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appointment_id?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
};
export type treatmentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appointment_id?: Prisma.SortOrder;
    treatment_name?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
};
export type treatmentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appointment_id?: Prisma.SortOrder;
    treatment_name?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
};
export type treatmentsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appointment_id?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
};
export type treatmentsCreateNestedManyWithoutAppointmentsInput = {
    create?: Prisma.XOR<Prisma.treatmentsCreateWithoutAppointmentsInput, Prisma.treatmentsUncheckedCreateWithoutAppointmentsInput> | Prisma.treatmentsCreateWithoutAppointmentsInput[] | Prisma.treatmentsUncheckedCreateWithoutAppointmentsInput[];
    connectOrCreate?: Prisma.treatmentsCreateOrConnectWithoutAppointmentsInput | Prisma.treatmentsCreateOrConnectWithoutAppointmentsInput[];
    createMany?: Prisma.treatmentsCreateManyAppointmentsInputEnvelope;
    connect?: Prisma.treatmentsWhereUniqueInput | Prisma.treatmentsWhereUniqueInput[];
};
export type treatmentsUncheckedCreateNestedManyWithoutAppointmentsInput = {
    create?: Prisma.XOR<Prisma.treatmentsCreateWithoutAppointmentsInput, Prisma.treatmentsUncheckedCreateWithoutAppointmentsInput> | Prisma.treatmentsCreateWithoutAppointmentsInput[] | Prisma.treatmentsUncheckedCreateWithoutAppointmentsInput[];
    connectOrCreate?: Prisma.treatmentsCreateOrConnectWithoutAppointmentsInput | Prisma.treatmentsCreateOrConnectWithoutAppointmentsInput[];
    createMany?: Prisma.treatmentsCreateManyAppointmentsInputEnvelope;
    connect?: Prisma.treatmentsWhereUniqueInput | Prisma.treatmentsWhereUniqueInput[];
};
export type treatmentsUpdateManyWithoutAppointmentsNestedInput = {
    create?: Prisma.XOR<Prisma.treatmentsCreateWithoutAppointmentsInput, Prisma.treatmentsUncheckedCreateWithoutAppointmentsInput> | Prisma.treatmentsCreateWithoutAppointmentsInput[] | Prisma.treatmentsUncheckedCreateWithoutAppointmentsInput[];
    connectOrCreate?: Prisma.treatmentsCreateOrConnectWithoutAppointmentsInput | Prisma.treatmentsCreateOrConnectWithoutAppointmentsInput[];
    upsert?: Prisma.treatmentsUpsertWithWhereUniqueWithoutAppointmentsInput | Prisma.treatmentsUpsertWithWhereUniqueWithoutAppointmentsInput[];
    createMany?: Prisma.treatmentsCreateManyAppointmentsInputEnvelope;
    set?: Prisma.treatmentsWhereUniqueInput | Prisma.treatmentsWhereUniqueInput[];
    disconnect?: Prisma.treatmentsWhereUniqueInput | Prisma.treatmentsWhereUniqueInput[];
    delete?: Prisma.treatmentsWhereUniqueInput | Prisma.treatmentsWhereUniqueInput[];
    connect?: Prisma.treatmentsWhereUniqueInput | Prisma.treatmentsWhereUniqueInput[];
    update?: Prisma.treatmentsUpdateWithWhereUniqueWithoutAppointmentsInput | Prisma.treatmentsUpdateWithWhereUniqueWithoutAppointmentsInput[];
    updateMany?: Prisma.treatmentsUpdateManyWithWhereWithoutAppointmentsInput | Prisma.treatmentsUpdateManyWithWhereWithoutAppointmentsInput[];
    deleteMany?: Prisma.treatmentsScalarWhereInput | Prisma.treatmentsScalarWhereInput[];
};
export type treatmentsUncheckedUpdateManyWithoutAppointmentsNestedInput = {
    create?: Prisma.XOR<Prisma.treatmentsCreateWithoutAppointmentsInput, Prisma.treatmentsUncheckedCreateWithoutAppointmentsInput> | Prisma.treatmentsCreateWithoutAppointmentsInput[] | Prisma.treatmentsUncheckedCreateWithoutAppointmentsInput[];
    connectOrCreate?: Prisma.treatmentsCreateOrConnectWithoutAppointmentsInput | Prisma.treatmentsCreateOrConnectWithoutAppointmentsInput[];
    upsert?: Prisma.treatmentsUpsertWithWhereUniqueWithoutAppointmentsInput | Prisma.treatmentsUpsertWithWhereUniqueWithoutAppointmentsInput[];
    createMany?: Prisma.treatmentsCreateManyAppointmentsInputEnvelope;
    set?: Prisma.treatmentsWhereUniqueInput | Prisma.treatmentsWhereUniqueInput[];
    disconnect?: Prisma.treatmentsWhereUniqueInput | Prisma.treatmentsWhereUniqueInput[];
    delete?: Prisma.treatmentsWhereUniqueInput | Prisma.treatmentsWhereUniqueInput[];
    connect?: Prisma.treatmentsWhereUniqueInput | Prisma.treatmentsWhereUniqueInput[];
    update?: Prisma.treatmentsUpdateWithWhereUniqueWithoutAppointmentsInput | Prisma.treatmentsUpdateWithWhereUniqueWithoutAppointmentsInput[];
    updateMany?: Prisma.treatmentsUpdateManyWithWhereWithoutAppointmentsInput | Prisma.treatmentsUpdateManyWithWhereWithoutAppointmentsInput[];
    deleteMany?: Prisma.treatmentsScalarWhereInput | Prisma.treatmentsScalarWhereInput[];
};
export type treatmentsCreateWithoutAppointmentsInput = {
    treatment_name?: string | null;
    cost?: number | null;
};
export type treatmentsUncheckedCreateWithoutAppointmentsInput = {
    id?: number;
    treatment_name?: string | null;
    cost?: number | null;
};
export type treatmentsCreateOrConnectWithoutAppointmentsInput = {
    where: Prisma.treatmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.treatmentsCreateWithoutAppointmentsInput, Prisma.treatmentsUncheckedCreateWithoutAppointmentsInput>;
};
export type treatmentsCreateManyAppointmentsInputEnvelope = {
    data: Prisma.treatmentsCreateManyAppointmentsInput | Prisma.treatmentsCreateManyAppointmentsInput[];
    skipDuplicates?: boolean;
};
export type treatmentsUpsertWithWhereUniqueWithoutAppointmentsInput = {
    where: Prisma.treatmentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.treatmentsUpdateWithoutAppointmentsInput, Prisma.treatmentsUncheckedUpdateWithoutAppointmentsInput>;
    create: Prisma.XOR<Prisma.treatmentsCreateWithoutAppointmentsInput, Prisma.treatmentsUncheckedCreateWithoutAppointmentsInput>;
};
export type treatmentsUpdateWithWhereUniqueWithoutAppointmentsInput = {
    where: Prisma.treatmentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.treatmentsUpdateWithoutAppointmentsInput, Prisma.treatmentsUncheckedUpdateWithoutAppointmentsInput>;
};
export type treatmentsUpdateManyWithWhereWithoutAppointmentsInput = {
    where: Prisma.treatmentsScalarWhereInput;
    data: Prisma.XOR<Prisma.treatmentsUpdateManyMutationInput, Prisma.treatmentsUncheckedUpdateManyWithoutAppointmentsInput>;
};
export type treatmentsScalarWhereInput = {
    AND?: Prisma.treatmentsScalarWhereInput | Prisma.treatmentsScalarWhereInput[];
    OR?: Prisma.treatmentsScalarWhereInput[];
    NOT?: Prisma.treatmentsScalarWhereInput | Prisma.treatmentsScalarWhereInput[];
    id?: Prisma.IntFilter<"treatments"> | number;
    appointment_id?: Prisma.IntNullableFilter<"treatments"> | number | null;
    treatment_name?: Prisma.StringNullableFilter<"treatments"> | string | null;
    cost?: Prisma.IntNullableFilter<"treatments"> | number | null;
};
export type treatmentsCreateManyAppointmentsInput = {
    id?: number;
    treatment_name?: string | null;
    cost?: number | null;
};
export type treatmentsUpdateWithoutAppointmentsInput = {
    treatment_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type treatmentsUncheckedUpdateWithoutAppointmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    treatment_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type treatmentsUncheckedUpdateManyWithoutAppointmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    treatment_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type treatmentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appointment_id?: boolean;
    treatment_name?: boolean;
    cost?: boolean;
    appointments?: boolean | Prisma.treatments$appointmentsArgs<ExtArgs>;
}, ExtArgs["result"]["treatments"]>;
export type treatmentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appointment_id?: boolean;
    treatment_name?: boolean;
    cost?: boolean;
    appointments?: boolean | Prisma.treatments$appointmentsArgs<ExtArgs>;
}, ExtArgs["result"]["treatments"]>;
export type treatmentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appointment_id?: boolean;
    treatment_name?: boolean;
    cost?: boolean;
    appointments?: boolean | Prisma.treatments$appointmentsArgs<ExtArgs>;
}, ExtArgs["result"]["treatments"]>;
export type treatmentsSelectScalar = {
    id?: boolean;
    appointment_id?: boolean;
    treatment_name?: boolean;
    cost?: boolean;
};
export type treatmentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "appointment_id" | "treatment_name" | "cost", ExtArgs["result"]["treatments"]>;
export type treatmentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appointments?: boolean | Prisma.treatments$appointmentsArgs<ExtArgs>;
};
export type treatmentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appointments?: boolean | Prisma.treatments$appointmentsArgs<ExtArgs>;
};
export type treatmentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appointments?: boolean | Prisma.treatments$appointmentsArgs<ExtArgs>;
};
export type $treatmentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "treatments";
    objects: {
        appointments: Prisma.$appointmentsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        appointment_id: number | null;
        treatment_name: string | null;
        cost: number | null;
    }, ExtArgs["result"]["treatments"]>;
    composites: {};
};
export type treatmentsGetPayload<S extends boolean | null | undefined | treatmentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$treatmentsPayload, S>;
export type treatmentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<treatmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TreatmentsCountAggregateInputType | true;
};
export interface treatmentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['treatments'];
        meta: {
            name: 'treatments';
        };
    };
    findUnique<T extends treatmentsFindUniqueArgs>(args: Prisma.SelectSubset<T, treatmentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__treatmentsClient<runtime.Types.Result.GetResult<Prisma.$treatmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends treatmentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, treatmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__treatmentsClient<runtime.Types.Result.GetResult<Prisma.$treatmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends treatmentsFindFirstArgs>(args?: Prisma.SelectSubset<T, treatmentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__treatmentsClient<runtime.Types.Result.GetResult<Prisma.$treatmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends treatmentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, treatmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__treatmentsClient<runtime.Types.Result.GetResult<Prisma.$treatmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends treatmentsFindManyArgs>(args?: Prisma.SelectSubset<T, treatmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$treatmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends treatmentsCreateArgs>(args: Prisma.SelectSubset<T, treatmentsCreateArgs<ExtArgs>>): Prisma.Prisma__treatmentsClient<runtime.Types.Result.GetResult<Prisma.$treatmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends treatmentsCreateManyArgs>(args?: Prisma.SelectSubset<T, treatmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends treatmentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, treatmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$treatmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends treatmentsDeleteArgs>(args: Prisma.SelectSubset<T, treatmentsDeleteArgs<ExtArgs>>): Prisma.Prisma__treatmentsClient<runtime.Types.Result.GetResult<Prisma.$treatmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends treatmentsUpdateArgs>(args: Prisma.SelectSubset<T, treatmentsUpdateArgs<ExtArgs>>): Prisma.Prisma__treatmentsClient<runtime.Types.Result.GetResult<Prisma.$treatmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends treatmentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, treatmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends treatmentsUpdateManyArgs>(args: Prisma.SelectSubset<T, treatmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends treatmentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, treatmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$treatmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends treatmentsUpsertArgs>(args: Prisma.SelectSubset<T, treatmentsUpsertArgs<ExtArgs>>): Prisma.Prisma__treatmentsClient<runtime.Types.Result.GetResult<Prisma.$treatmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends treatmentsCountArgs>(args?: Prisma.Subset<T, treatmentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TreatmentsCountAggregateOutputType> : number>;
    aggregate<T extends TreatmentsAggregateArgs>(args: Prisma.Subset<T, TreatmentsAggregateArgs>): Prisma.PrismaPromise<GetTreatmentsAggregateType<T>>;
    groupBy<T extends treatmentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: treatmentsGroupByArgs['orderBy'];
    } : {
        orderBy?: treatmentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, treatmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreatmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: treatmentsFieldRefs;
}
export interface Prisma__treatmentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    appointments<T extends Prisma.treatments$appointmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.treatments$appointmentsArgs<ExtArgs>>): Prisma.Prisma__appointmentsClient<runtime.Types.Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface treatmentsFieldRefs {
    readonly id: Prisma.FieldRef<"treatments", 'Int'>;
    readonly appointment_id: Prisma.FieldRef<"treatments", 'Int'>;
    readonly treatment_name: Prisma.FieldRef<"treatments", 'String'>;
    readonly cost: Prisma.FieldRef<"treatments", 'Int'>;
}
export type treatmentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.treatmentsSelect<ExtArgs> | null;
    omit?: Prisma.treatmentsOmit<ExtArgs> | null;
    include?: Prisma.treatmentsInclude<ExtArgs> | null;
    where: Prisma.treatmentsWhereUniqueInput;
};
export type treatmentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.treatmentsSelect<ExtArgs> | null;
    omit?: Prisma.treatmentsOmit<ExtArgs> | null;
    include?: Prisma.treatmentsInclude<ExtArgs> | null;
    where: Prisma.treatmentsWhereUniqueInput;
};
export type treatmentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.treatmentsSelect<ExtArgs> | null;
    omit?: Prisma.treatmentsOmit<ExtArgs> | null;
    include?: Prisma.treatmentsInclude<ExtArgs> | null;
    where?: Prisma.treatmentsWhereInput;
    orderBy?: Prisma.treatmentsOrderByWithRelationInput | Prisma.treatmentsOrderByWithRelationInput[];
    cursor?: Prisma.treatmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TreatmentsScalarFieldEnum | Prisma.TreatmentsScalarFieldEnum[];
};
export type treatmentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.treatmentsSelect<ExtArgs> | null;
    omit?: Prisma.treatmentsOmit<ExtArgs> | null;
    include?: Prisma.treatmentsInclude<ExtArgs> | null;
    where?: Prisma.treatmentsWhereInput;
    orderBy?: Prisma.treatmentsOrderByWithRelationInput | Prisma.treatmentsOrderByWithRelationInput[];
    cursor?: Prisma.treatmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TreatmentsScalarFieldEnum | Prisma.TreatmentsScalarFieldEnum[];
};
export type treatmentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.treatmentsSelect<ExtArgs> | null;
    omit?: Prisma.treatmentsOmit<ExtArgs> | null;
    include?: Prisma.treatmentsInclude<ExtArgs> | null;
    where?: Prisma.treatmentsWhereInput;
    orderBy?: Prisma.treatmentsOrderByWithRelationInput | Prisma.treatmentsOrderByWithRelationInput[];
    cursor?: Prisma.treatmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TreatmentsScalarFieldEnum | Prisma.TreatmentsScalarFieldEnum[];
};
export type treatmentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.treatmentsSelect<ExtArgs> | null;
    omit?: Prisma.treatmentsOmit<ExtArgs> | null;
    include?: Prisma.treatmentsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.treatmentsCreateInput, Prisma.treatmentsUncheckedCreateInput>;
};
export type treatmentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.treatmentsCreateManyInput | Prisma.treatmentsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type treatmentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.treatmentsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.treatmentsOmit<ExtArgs> | null;
    data: Prisma.treatmentsCreateManyInput | Prisma.treatmentsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.treatmentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type treatmentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.treatmentsSelect<ExtArgs> | null;
    omit?: Prisma.treatmentsOmit<ExtArgs> | null;
    include?: Prisma.treatmentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.treatmentsUpdateInput, Prisma.treatmentsUncheckedUpdateInput>;
    where: Prisma.treatmentsWhereUniqueInput;
};
export type treatmentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.treatmentsUpdateManyMutationInput, Prisma.treatmentsUncheckedUpdateManyInput>;
    where?: Prisma.treatmentsWhereInput;
    limit?: number;
};
export type treatmentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.treatmentsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.treatmentsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.treatmentsUpdateManyMutationInput, Prisma.treatmentsUncheckedUpdateManyInput>;
    where?: Prisma.treatmentsWhereInput;
    limit?: number;
    include?: Prisma.treatmentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type treatmentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.treatmentsSelect<ExtArgs> | null;
    omit?: Prisma.treatmentsOmit<ExtArgs> | null;
    include?: Prisma.treatmentsInclude<ExtArgs> | null;
    where: Prisma.treatmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.treatmentsCreateInput, Prisma.treatmentsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.treatmentsUpdateInput, Prisma.treatmentsUncheckedUpdateInput>;
};
export type treatmentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.treatmentsSelect<ExtArgs> | null;
    omit?: Prisma.treatmentsOmit<ExtArgs> | null;
    include?: Prisma.treatmentsInclude<ExtArgs> | null;
    where: Prisma.treatmentsWhereUniqueInput;
};
export type treatmentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.treatmentsWhereInput;
    limit?: number;
};
export type treatments$appointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.appointmentsSelect<ExtArgs> | null;
    omit?: Prisma.appointmentsOmit<ExtArgs> | null;
    include?: Prisma.appointmentsInclude<ExtArgs> | null;
    where?: Prisma.appointmentsWhereInput;
};
export type treatmentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.treatmentsSelect<ExtArgs> | null;
    omit?: Prisma.treatmentsOmit<ExtArgs> | null;
    include?: Prisma.treatmentsInclude<ExtArgs> | null;
};
export {};
