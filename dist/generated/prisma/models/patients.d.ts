import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type patientsModel = runtime.Types.Result.DefaultSelection<Prisma.$patientsPayload>;
export type AggregatePatients = {
    _count: PatientsCountAggregateOutputType | null;
    _avg: PatientsAvgAggregateOutputType | null;
    _sum: PatientsSumAggregateOutputType | null;
    _min: PatientsMinAggregateOutputType | null;
    _max: PatientsMaxAggregateOutputType | null;
};
export type PatientsAvgAggregateOutputType = {
    id: number | null;
};
export type PatientsSumAggregateOutputType = {
    id: number | null;
};
export type PatientsMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    city: string | null;
};
export type PatientsMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    city: string | null;
};
export type PatientsCountAggregateOutputType = {
    id: number;
    name: number;
    city: number;
    _all: number;
};
export type PatientsAvgAggregateInputType = {
    id?: true;
};
export type PatientsSumAggregateInputType = {
    id?: true;
};
export type PatientsMinAggregateInputType = {
    id?: true;
    name?: true;
    city?: true;
};
export type PatientsMaxAggregateInputType = {
    id?: true;
    name?: true;
    city?: true;
};
export type PatientsCountAggregateInputType = {
    id?: true;
    name?: true;
    city?: true;
    _all?: true;
};
export type PatientsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.patientsWhereInput;
    orderBy?: Prisma.patientsOrderByWithRelationInput | Prisma.patientsOrderByWithRelationInput[];
    cursor?: Prisma.patientsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatientsCountAggregateInputType;
    _avg?: PatientsAvgAggregateInputType;
    _sum?: PatientsSumAggregateInputType;
    _min?: PatientsMinAggregateInputType;
    _max?: PatientsMaxAggregateInputType;
};
export type GetPatientsAggregateType<T extends PatientsAggregateArgs> = {
    [P in keyof T & keyof AggregatePatients]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatients[P]> : Prisma.GetScalarType<T[P], AggregatePatients[P]>;
};
export type patientsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.patientsWhereInput;
    orderBy?: Prisma.patientsOrderByWithAggregationInput | Prisma.patientsOrderByWithAggregationInput[];
    by: Prisma.PatientsScalarFieldEnum[] | Prisma.PatientsScalarFieldEnum;
    having?: Prisma.patientsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientsCountAggregateInputType | true;
    _avg?: PatientsAvgAggregateInputType;
    _sum?: PatientsSumAggregateInputType;
    _min?: PatientsMinAggregateInputType;
    _max?: PatientsMaxAggregateInputType;
};
export type PatientsGroupByOutputType = {
    id: number;
    name: string | null;
    city: string | null;
    _count: PatientsCountAggregateOutputType | null;
    _avg: PatientsAvgAggregateOutputType | null;
    _sum: PatientsSumAggregateOutputType | null;
    _min: PatientsMinAggregateOutputType | null;
    _max: PatientsMaxAggregateOutputType | null;
};
type GetPatientsGroupByPayload<T extends patientsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatientsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatientsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatientsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatientsGroupByOutputType[P]>;
}>>;
export type patientsWhereInput = {
    AND?: Prisma.patientsWhereInput | Prisma.patientsWhereInput[];
    OR?: Prisma.patientsWhereInput[];
    NOT?: Prisma.patientsWhereInput | Prisma.patientsWhereInput[];
    id?: Prisma.IntFilter<"patients"> | number;
    name?: Prisma.StringNullableFilter<"patients"> | string | null;
    city?: Prisma.StringNullableFilter<"patients"> | string | null;
    appointments?: Prisma.AppointmentsListRelationFilter;
};
export type patientsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    appointments?: Prisma.appointmentsOrderByRelationAggregateInput;
};
export type patientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.patientsWhereInput | Prisma.patientsWhereInput[];
    OR?: Prisma.patientsWhereInput[];
    NOT?: Prisma.patientsWhereInput | Prisma.patientsWhereInput[];
    name?: Prisma.StringNullableFilter<"patients"> | string | null;
    city?: Prisma.StringNullableFilter<"patients"> | string | null;
    appointments?: Prisma.AppointmentsListRelationFilter;
}, "id">;
export type patientsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.patientsCountOrderByAggregateInput;
    _avg?: Prisma.patientsAvgOrderByAggregateInput;
    _max?: Prisma.patientsMaxOrderByAggregateInput;
    _min?: Prisma.patientsMinOrderByAggregateInput;
    _sum?: Prisma.patientsSumOrderByAggregateInput;
};
export type patientsScalarWhereWithAggregatesInput = {
    AND?: Prisma.patientsScalarWhereWithAggregatesInput | Prisma.patientsScalarWhereWithAggregatesInput[];
    OR?: Prisma.patientsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.patientsScalarWhereWithAggregatesInput | Prisma.patientsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"patients"> | number;
    name?: Prisma.StringNullableWithAggregatesFilter<"patients"> | string | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"patients"> | string | null;
};
export type patientsCreateInput = {
    name?: string | null;
    city?: string | null;
    appointments?: Prisma.appointmentsCreateNestedManyWithoutPatientsInput;
};
export type patientsUncheckedCreateInput = {
    id?: number;
    name?: string | null;
    city?: string | null;
    appointments?: Prisma.appointmentsUncheckedCreateNestedManyWithoutPatientsInput;
};
export type patientsUpdateInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appointments?: Prisma.appointmentsUpdateManyWithoutPatientsNestedInput;
};
export type patientsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appointments?: Prisma.appointmentsUncheckedUpdateManyWithoutPatientsNestedInput;
};
export type patientsCreateManyInput = {
    id?: number;
    name?: string | null;
    city?: string | null;
};
export type patientsUpdateManyMutationInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type patientsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PatientsNullableScalarRelationFilter = {
    is?: Prisma.patientsWhereInput | null;
    isNot?: Prisma.patientsWhereInput | null;
};
export type patientsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
};
export type patientsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type patientsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
};
export type patientsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
};
export type patientsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type patientsCreateNestedOneWithoutAppointmentsInput = {
    create?: Prisma.XOR<Prisma.patientsCreateWithoutAppointmentsInput, Prisma.patientsUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.patientsCreateOrConnectWithoutAppointmentsInput;
    connect?: Prisma.patientsWhereUniqueInput;
};
export type patientsUpdateOneWithoutAppointmentsNestedInput = {
    create?: Prisma.XOR<Prisma.patientsCreateWithoutAppointmentsInput, Prisma.patientsUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.patientsCreateOrConnectWithoutAppointmentsInput;
    upsert?: Prisma.patientsUpsertWithoutAppointmentsInput;
    disconnect?: Prisma.patientsWhereInput | boolean;
    delete?: Prisma.patientsWhereInput | boolean;
    connect?: Prisma.patientsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.patientsUpdateToOneWithWhereWithoutAppointmentsInput, Prisma.patientsUpdateWithoutAppointmentsInput>, Prisma.patientsUncheckedUpdateWithoutAppointmentsInput>;
};
export type patientsCreateWithoutAppointmentsInput = {
    name?: string | null;
    city?: string | null;
};
export type patientsUncheckedCreateWithoutAppointmentsInput = {
    id?: number;
    name?: string | null;
    city?: string | null;
};
export type patientsCreateOrConnectWithoutAppointmentsInput = {
    where: Prisma.patientsWhereUniqueInput;
    create: Prisma.XOR<Prisma.patientsCreateWithoutAppointmentsInput, Prisma.patientsUncheckedCreateWithoutAppointmentsInput>;
};
export type patientsUpsertWithoutAppointmentsInput = {
    update: Prisma.XOR<Prisma.patientsUpdateWithoutAppointmentsInput, Prisma.patientsUncheckedUpdateWithoutAppointmentsInput>;
    create: Prisma.XOR<Prisma.patientsCreateWithoutAppointmentsInput, Prisma.patientsUncheckedCreateWithoutAppointmentsInput>;
    where?: Prisma.patientsWhereInput;
};
export type patientsUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: Prisma.patientsWhereInput;
    data: Prisma.XOR<Prisma.patientsUpdateWithoutAppointmentsInput, Prisma.patientsUncheckedUpdateWithoutAppointmentsInput>;
};
export type patientsUpdateWithoutAppointmentsInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type patientsUncheckedUpdateWithoutAppointmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PatientsCountOutputType = {
    appointments: number;
};
export type PatientsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appointments?: boolean | PatientsCountOutputTypeCountAppointmentsArgs;
};
export type PatientsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientsCountOutputTypeSelect<ExtArgs> | null;
};
export type PatientsCountOutputTypeCountAppointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.appointmentsWhereInput;
};
export type patientsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    city?: boolean;
    appointments?: boolean | Prisma.patients$appointmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patients"]>;
export type patientsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    city?: boolean;
}, ExtArgs["result"]["patients"]>;
export type patientsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    city?: boolean;
}, ExtArgs["result"]["patients"]>;
export type patientsSelectScalar = {
    id?: boolean;
    name?: boolean;
    city?: boolean;
};
export type patientsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "city", ExtArgs["result"]["patients"]>;
export type patientsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appointments?: boolean | Prisma.patients$appointmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type patientsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type patientsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $patientsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "patients";
    objects: {
        appointments: Prisma.$appointmentsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string | null;
        city: string | null;
    }, ExtArgs["result"]["patients"]>;
    composites: {};
};
export type patientsGetPayload<S extends boolean | null | undefined | patientsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$patientsPayload, S>;
export type patientsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<patientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatientsCountAggregateInputType | true;
};
export interface patientsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['patients'];
        meta: {
            name: 'patients';
        };
    };
    findUnique<T extends patientsFindUniqueArgs>(args: Prisma.SelectSubset<T, patientsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__patientsClient<runtime.Types.Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends patientsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, patientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__patientsClient<runtime.Types.Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends patientsFindFirstArgs>(args?: Prisma.SelectSubset<T, patientsFindFirstArgs<ExtArgs>>): Prisma.Prisma__patientsClient<runtime.Types.Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends patientsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, patientsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__patientsClient<runtime.Types.Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends patientsFindManyArgs>(args?: Prisma.SelectSubset<T, patientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends patientsCreateArgs>(args: Prisma.SelectSubset<T, patientsCreateArgs<ExtArgs>>): Prisma.Prisma__patientsClient<runtime.Types.Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends patientsCreateManyArgs>(args?: Prisma.SelectSubset<T, patientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends patientsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, patientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends patientsDeleteArgs>(args: Prisma.SelectSubset<T, patientsDeleteArgs<ExtArgs>>): Prisma.Prisma__patientsClient<runtime.Types.Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends patientsUpdateArgs>(args: Prisma.SelectSubset<T, patientsUpdateArgs<ExtArgs>>): Prisma.Prisma__patientsClient<runtime.Types.Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends patientsDeleteManyArgs>(args?: Prisma.SelectSubset<T, patientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends patientsUpdateManyArgs>(args: Prisma.SelectSubset<T, patientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends patientsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, patientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends patientsUpsertArgs>(args: Prisma.SelectSubset<T, patientsUpsertArgs<ExtArgs>>): Prisma.Prisma__patientsClient<runtime.Types.Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends patientsCountArgs>(args?: Prisma.Subset<T, patientsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatientsCountAggregateOutputType> : number>;
    aggregate<T extends PatientsAggregateArgs>(args: Prisma.Subset<T, PatientsAggregateArgs>): Prisma.PrismaPromise<GetPatientsAggregateType<T>>;
    groupBy<T extends patientsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: patientsGroupByArgs['orderBy'];
    } : {
        orderBy?: patientsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, patientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: patientsFieldRefs;
}
export interface Prisma__patientsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    appointments<T extends Prisma.patients$appointmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.patients$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface patientsFieldRefs {
    readonly id: Prisma.FieldRef<"patients", 'Int'>;
    readonly name: Prisma.FieldRef<"patients", 'String'>;
    readonly city: Prisma.FieldRef<"patients", 'String'>;
}
export type patientsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.patientsSelect<ExtArgs> | null;
    omit?: Prisma.patientsOmit<ExtArgs> | null;
    include?: Prisma.patientsInclude<ExtArgs> | null;
    where: Prisma.patientsWhereUniqueInput;
};
export type patientsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.patientsSelect<ExtArgs> | null;
    omit?: Prisma.patientsOmit<ExtArgs> | null;
    include?: Prisma.patientsInclude<ExtArgs> | null;
    where: Prisma.patientsWhereUniqueInput;
};
export type patientsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.patientsSelect<ExtArgs> | null;
    omit?: Prisma.patientsOmit<ExtArgs> | null;
    include?: Prisma.patientsInclude<ExtArgs> | null;
    where?: Prisma.patientsWhereInput;
    orderBy?: Prisma.patientsOrderByWithRelationInput | Prisma.patientsOrderByWithRelationInput[];
    cursor?: Prisma.patientsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientsScalarFieldEnum | Prisma.PatientsScalarFieldEnum[];
};
export type patientsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.patientsSelect<ExtArgs> | null;
    omit?: Prisma.patientsOmit<ExtArgs> | null;
    include?: Prisma.patientsInclude<ExtArgs> | null;
    where?: Prisma.patientsWhereInput;
    orderBy?: Prisma.patientsOrderByWithRelationInput | Prisma.patientsOrderByWithRelationInput[];
    cursor?: Prisma.patientsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientsScalarFieldEnum | Prisma.PatientsScalarFieldEnum[];
};
export type patientsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.patientsSelect<ExtArgs> | null;
    omit?: Prisma.patientsOmit<ExtArgs> | null;
    include?: Prisma.patientsInclude<ExtArgs> | null;
    where?: Prisma.patientsWhereInput;
    orderBy?: Prisma.patientsOrderByWithRelationInput | Prisma.patientsOrderByWithRelationInput[];
    cursor?: Prisma.patientsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientsScalarFieldEnum | Prisma.PatientsScalarFieldEnum[];
};
export type patientsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.patientsSelect<ExtArgs> | null;
    omit?: Prisma.patientsOmit<ExtArgs> | null;
    include?: Prisma.patientsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.patientsCreateInput, Prisma.patientsUncheckedCreateInput>;
};
export type patientsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.patientsCreateManyInput | Prisma.patientsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type patientsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.patientsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.patientsOmit<ExtArgs> | null;
    data: Prisma.patientsCreateManyInput | Prisma.patientsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type patientsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.patientsSelect<ExtArgs> | null;
    omit?: Prisma.patientsOmit<ExtArgs> | null;
    include?: Prisma.patientsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.patientsUpdateInput, Prisma.patientsUncheckedUpdateInput>;
    where: Prisma.patientsWhereUniqueInput;
};
export type patientsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.patientsUpdateManyMutationInput, Prisma.patientsUncheckedUpdateManyInput>;
    where?: Prisma.patientsWhereInput;
    limit?: number;
};
export type patientsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.patientsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.patientsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.patientsUpdateManyMutationInput, Prisma.patientsUncheckedUpdateManyInput>;
    where?: Prisma.patientsWhereInput;
    limit?: number;
};
export type patientsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.patientsSelect<ExtArgs> | null;
    omit?: Prisma.patientsOmit<ExtArgs> | null;
    include?: Prisma.patientsInclude<ExtArgs> | null;
    where: Prisma.patientsWhereUniqueInput;
    create: Prisma.XOR<Prisma.patientsCreateInput, Prisma.patientsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.patientsUpdateInput, Prisma.patientsUncheckedUpdateInput>;
};
export type patientsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.patientsSelect<ExtArgs> | null;
    omit?: Prisma.patientsOmit<ExtArgs> | null;
    include?: Prisma.patientsInclude<ExtArgs> | null;
    where: Prisma.patientsWhereUniqueInput;
};
export type patientsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.patientsWhereInput;
    limit?: number;
};
export type patients$appointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.appointmentsSelect<ExtArgs> | null;
    omit?: Prisma.appointmentsOmit<ExtArgs> | null;
    include?: Prisma.appointmentsInclude<ExtArgs> | null;
    where?: Prisma.appointmentsWhereInput;
    orderBy?: Prisma.appointmentsOrderByWithRelationInput | Prisma.appointmentsOrderByWithRelationInput[];
    cursor?: Prisma.appointmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppointmentsScalarFieldEnum | Prisma.AppointmentsScalarFieldEnum[];
};
export type patientsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.patientsSelect<ExtArgs> | null;
    omit?: Prisma.patientsOmit<ExtArgs> | null;
    include?: Prisma.patientsInclude<ExtArgs> | null;
};
export {};
