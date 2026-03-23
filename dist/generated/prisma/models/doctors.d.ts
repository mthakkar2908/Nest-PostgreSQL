import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type doctorsModel = runtime.Types.Result.DefaultSelection<Prisma.$doctorsPayload>;
export type AggregateDoctors = {
    _count: DoctorsCountAggregateOutputType | null;
    _avg: DoctorsAvgAggregateOutputType | null;
    _sum: DoctorsSumAggregateOutputType | null;
    _min: DoctorsMinAggregateOutputType | null;
    _max: DoctorsMaxAggregateOutputType | null;
};
export type DoctorsAvgAggregateOutputType = {
    id: number | null;
};
export type DoctorsSumAggregateOutputType = {
    id: number | null;
};
export type DoctorsMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    specialization: string | null;
};
export type DoctorsMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    specialization: string | null;
};
export type DoctorsCountAggregateOutputType = {
    id: number;
    name: number;
    specialization: number;
    _all: number;
};
export type DoctorsAvgAggregateInputType = {
    id?: true;
};
export type DoctorsSumAggregateInputType = {
    id?: true;
};
export type DoctorsMinAggregateInputType = {
    id?: true;
    name?: true;
    specialization?: true;
};
export type DoctorsMaxAggregateInputType = {
    id?: true;
    name?: true;
    specialization?: true;
};
export type DoctorsCountAggregateInputType = {
    id?: true;
    name?: true;
    specialization?: true;
    _all?: true;
};
export type DoctorsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.doctorsWhereInput;
    orderBy?: Prisma.doctorsOrderByWithRelationInput | Prisma.doctorsOrderByWithRelationInput[];
    cursor?: Prisma.doctorsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DoctorsCountAggregateInputType;
    _avg?: DoctorsAvgAggregateInputType;
    _sum?: DoctorsSumAggregateInputType;
    _min?: DoctorsMinAggregateInputType;
    _max?: DoctorsMaxAggregateInputType;
};
export type GetDoctorsAggregateType<T extends DoctorsAggregateArgs> = {
    [P in keyof T & keyof AggregateDoctors]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDoctors[P]> : Prisma.GetScalarType<T[P], AggregateDoctors[P]>;
};
export type doctorsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.doctorsWhereInput;
    orderBy?: Prisma.doctorsOrderByWithAggregationInput | Prisma.doctorsOrderByWithAggregationInput[];
    by: Prisma.DoctorsScalarFieldEnum[] | Prisma.DoctorsScalarFieldEnum;
    having?: Prisma.doctorsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DoctorsCountAggregateInputType | true;
    _avg?: DoctorsAvgAggregateInputType;
    _sum?: DoctorsSumAggregateInputType;
    _min?: DoctorsMinAggregateInputType;
    _max?: DoctorsMaxAggregateInputType;
};
export type DoctorsGroupByOutputType = {
    id: number;
    name: string | null;
    specialization: string | null;
    _count: DoctorsCountAggregateOutputType | null;
    _avg: DoctorsAvgAggregateOutputType | null;
    _sum: DoctorsSumAggregateOutputType | null;
    _min: DoctorsMinAggregateOutputType | null;
    _max: DoctorsMaxAggregateOutputType | null;
};
type GetDoctorsGroupByPayload<T extends doctorsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DoctorsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DoctorsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DoctorsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DoctorsGroupByOutputType[P]>;
}>>;
export type doctorsWhereInput = {
    AND?: Prisma.doctorsWhereInput | Prisma.doctorsWhereInput[];
    OR?: Prisma.doctorsWhereInput[];
    NOT?: Prisma.doctorsWhereInput | Prisma.doctorsWhereInput[];
    id?: Prisma.IntFilter<"doctors"> | number;
    name?: Prisma.StringNullableFilter<"doctors"> | string | null;
    specialization?: Prisma.StringNullableFilter<"doctors"> | string | null;
    appointments?: Prisma.AppointmentsListRelationFilter;
};
export type doctorsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    specialization?: Prisma.SortOrderInput | Prisma.SortOrder;
    appointments?: Prisma.appointmentsOrderByRelationAggregateInput;
};
export type doctorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.doctorsWhereInput | Prisma.doctorsWhereInput[];
    OR?: Prisma.doctorsWhereInput[];
    NOT?: Prisma.doctorsWhereInput | Prisma.doctorsWhereInput[];
    name?: Prisma.StringNullableFilter<"doctors"> | string | null;
    specialization?: Prisma.StringNullableFilter<"doctors"> | string | null;
    appointments?: Prisma.AppointmentsListRelationFilter;
}, "id">;
export type doctorsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    specialization?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.doctorsCountOrderByAggregateInput;
    _avg?: Prisma.doctorsAvgOrderByAggregateInput;
    _max?: Prisma.doctorsMaxOrderByAggregateInput;
    _min?: Prisma.doctorsMinOrderByAggregateInput;
    _sum?: Prisma.doctorsSumOrderByAggregateInput;
};
export type doctorsScalarWhereWithAggregatesInput = {
    AND?: Prisma.doctorsScalarWhereWithAggregatesInput | Prisma.doctorsScalarWhereWithAggregatesInput[];
    OR?: Prisma.doctorsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.doctorsScalarWhereWithAggregatesInput | Prisma.doctorsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"doctors"> | number;
    name?: Prisma.StringNullableWithAggregatesFilter<"doctors"> | string | null;
    specialization?: Prisma.StringNullableWithAggregatesFilter<"doctors"> | string | null;
};
export type doctorsCreateInput = {
    name?: string | null;
    specialization?: string | null;
    appointments?: Prisma.appointmentsCreateNestedManyWithoutDoctorsInput;
};
export type doctorsUncheckedCreateInput = {
    id?: number;
    name?: string | null;
    specialization?: string | null;
    appointments?: Prisma.appointmentsUncheckedCreateNestedManyWithoutDoctorsInput;
};
export type doctorsUpdateInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appointments?: Prisma.appointmentsUpdateManyWithoutDoctorsNestedInput;
};
export type doctorsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appointments?: Prisma.appointmentsUncheckedUpdateManyWithoutDoctorsNestedInput;
};
export type doctorsCreateManyInput = {
    id?: number;
    name?: string | null;
    specialization?: string | null;
};
export type doctorsUpdateManyMutationInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type doctorsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DoctorsNullableScalarRelationFilter = {
    is?: Prisma.doctorsWhereInput | null;
    isNot?: Prisma.doctorsWhereInput | null;
};
export type doctorsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    specialization?: Prisma.SortOrder;
};
export type doctorsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type doctorsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    specialization?: Prisma.SortOrder;
};
export type doctorsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    specialization?: Prisma.SortOrder;
};
export type doctorsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type doctorsCreateNestedOneWithoutAppointmentsInput = {
    create?: Prisma.XOR<Prisma.doctorsCreateWithoutAppointmentsInput, Prisma.doctorsUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.doctorsCreateOrConnectWithoutAppointmentsInput;
    connect?: Prisma.doctorsWhereUniqueInput;
};
export type doctorsUpdateOneWithoutAppointmentsNestedInput = {
    create?: Prisma.XOR<Prisma.doctorsCreateWithoutAppointmentsInput, Prisma.doctorsUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.doctorsCreateOrConnectWithoutAppointmentsInput;
    upsert?: Prisma.doctorsUpsertWithoutAppointmentsInput;
    disconnect?: Prisma.doctorsWhereInput | boolean;
    delete?: Prisma.doctorsWhereInput | boolean;
    connect?: Prisma.doctorsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.doctorsUpdateToOneWithWhereWithoutAppointmentsInput, Prisma.doctorsUpdateWithoutAppointmentsInput>, Prisma.doctorsUncheckedUpdateWithoutAppointmentsInput>;
};
export type doctorsCreateWithoutAppointmentsInput = {
    name?: string | null;
    specialization?: string | null;
};
export type doctorsUncheckedCreateWithoutAppointmentsInput = {
    id?: number;
    name?: string | null;
    specialization?: string | null;
};
export type doctorsCreateOrConnectWithoutAppointmentsInput = {
    where: Prisma.doctorsWhereUniqueInput;
    create: Prisma.XOR<Prisma.doctorsCreateWithoutAppointmentsInput, Prisma.doctorsUncheckedCreateWithoutAppointmentsInput>;
};
export type doctorsUpsertWithoutAppointmentsInput = {
    update: Prisma.XOR<Prisma.doctorsUpdateWithoutAppointmentsInput, Prisma.doctorsUncheckedUpdateWithoutAppointmentsInput>;
    create: Prisma.XOR<Prisma.doctorsCreateWithoutAppointmentsInput, Prisma.doctorsUncheckedCreateWithoutAppointmentsInput>;
    where?: Prisma.doctorsWhereInput;
};
export type doctorsUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: Prisma.doctorsWhereInput;
    data: Prisma.XOR<Prisma.doctorsUpdateWithoutAppointmentsInput, Prisma.doctorsUncheckedUpdateWithoutAppointmentsInput>;
};
export type doctorsUpdateWithoutAppointmentsInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type doctorsUncheckedUpdateWithoutAppointmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DoctorsCountOutputType = {
    appointments: number;
};
export type DoctorsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appointments?: boolean | DoctorsCountOutputTypeCountAppointmentsArgs;
};
export type DoctorsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorsCountOutputTypeSelect<ExtArgs> | null;
};
export type DoctorsCountOutputTypeCountAppointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.appointmentsWhereInput;
};
export type doctorsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    specialization?: boolean;
    appointments?: boolean | Prisma.doctors$appointmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.DoctorsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["doctors"]>;
export type doctorsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    specialization?: boolean;
}, ExtArgs["result"]["doctors"]>;
export type doctorsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    specialization?: boolean;
}, ExtArgs["result"]["doctors"]>;
export type doctorsSelectScalar = {
    id?: boolean;
    name?: boolean;
    specialization?: boolean;
};
export type doctorsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "specialization", ExtArgs["result"]["doctors"]>;
export type doctorsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appointments?: boolean | Prisma.doctors$appointmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.DoctorsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type doctorsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type doctorsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $doctorsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "doctors";
    objects: {
        appointments: Prisma.$appointmentsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string | null;
        specialization: string | null;
    }, ExtArgs["result"]["doctors"]>;
    composites: {};
};
export type doctorsGetPayload<S extends boolean | null | undefined | doctorsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$doctorsPayload, S>;
export type doctorsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<doctorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DoctorsCountAggregateInputType | true;
};
export interface doctorsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['doctors'];
        meta: {
            name: 'doctors';
        };
    };
    findUnique<T extends doctorsFindUniqueArgs>(args: Prisma.SelectSubset<T, doctorsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__doctorsClient<runtime.Types.Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends doctorsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, doctorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__doctorsClient<runtime.Types.Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends doctorsFindFirstArgs>(args?: Prisma.SelectSubset<T, doctorsFindFirstArgs<ExtArgs>>): Prisma.Prisma__doctorsClient<runtime.Types.Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends doctorsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, doctorsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__doctorsClient<runtime.Types.Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends doctorsFindManyArgs>(args?: Prisma.SelectSubset<T, doctorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends doctorsCreateArgs>(args: Prisma.SelectSubset<T, doctorsCreateArgs<ExtArgs>>): Prisma.Prisma__doctorsClient<runtime.Types.Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends doctorsCreateManyArgs>(args?: Prisma.SelectSubset<T, doctorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends doctorsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, doctorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends doctorsDeleteArgs>(args: Prisma.SelectSubset<T, doctorsDeleteArgs<ExtArgs>>): Prisma.Prisma__doctorsClient<runtime.Types.Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends doctorsUpdateArgs>(args: Prisma.SelectSubset<T, doctorsUpdateArgs<ExtArgs>>): Prisma.Prisma__doctorsClient<runtime.Types.Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends doctorsDeleteManyArgs>(args?: Prisma.SelectSubset<T, doctorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends doctorsUpdateManyArgs>(args: Prisma.SelectSubset<T, doctorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends doctorsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, doctorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends doctorsUpsertArgs>(args: Prisma.SelectSubset<T, doctorsUpsertArgs<ExtArgs>>): Prisma.Prisma__doctorsClient<runtime.Types.Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends doctorsCountArgs>(args?: Prisma.Subset<T, doctorsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DoctorsCountAggregateOutputType> : number>;
    aggregate<T extends DoctorsAggregateArgs>(args: Prisma.Subset<T, DoctorsAggregateArgs>): Prisma.PrismaPromise<GetDoctorsAggregateType<T>>;
    groupBy<T extends doctorsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: doctorsGroupByArgs['orderBy'];
    } : {
        orderBy?: doctorsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, doctorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: doctorsFieldRefs;
}
export interface Prisma__doctorsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    appointments<T extends Prisma.doctors$appointmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.doctors$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface doctorsFieldRefs {
    readonly id: Prisma.FieldRef<"doctors", 'Int'>;
    readonly name: Prisma.FieldRef<"doctors", 'String'>;
    readonly specialization: Prisma.FieldRef<"doctors", 'String'>;
}
export type doctorsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctorsSelect<ExtArgs> | null;
    omit?: Prisma.doctorsOmit<ExtArgs> | null;
    include?: Prisma.doctorsInclude<ExtArgs> | null;
    where: Prisma.doctorsWhereUniqueInput;
};
export type doctorsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctorsSelect<ExtArgs> | null;
    omit?: Prisma.doctorsOmit<ExtArgs> | null;
    include?: Prisma.doctorsInclude<ExtArgs> | null;
    where: Prisma.doctorsWhereUniqueInput;
};
export type doctorsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctorsSelect<ExtArgs> | null;
    omit?: Prisma.doctorsOmit<ExtArgs> | null;
    include?: Prisma.doctorsInclude<ExtArgs> | null;
    where?: Prisma.doctorsWhereInput;
    orderBy?: Prisma.doctorsOrderByWithRelationInput | Prisma.doctorsOrderByWithRelationInput[];
    cursor?: Prisma.doctorsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DoctorsScalarFieldEnum | Prisma.DoctorsScalarFieldEnum[];
};
export type doctorsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctorsSelect<ExtArgs> | null;
    omit?: Prisma.doctorsOmit<ExtArgs> | null;
    include?: Prisma.doctorsInclude<ExtArgs> | null;
    where?: Prisma.doctorsWhereInput;
    orderBy?: Prisma.doctorsOrderByWithRelationInput | Prisma.doctorsOrderByWithRelationInput[];
    cursor?: Prisma.doctorsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DoctorsScalarFieldEnum | Prisma.DoctorsScalarFieldEnum[];
};
export type doctorsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctorsSelect<ExtArgs> | null;
    omit?: Prisma.doctorsOmit<ExtArgs> | null;
    include?: Prisma.doctorsInclude<ExtArgs> | null;
    where?: Prisma.doctorsWhereInput;
    orderBy?: Prisma.doctorsOrderByWithRelationInput | Prisma.doctorsOrderByWithRelationInput[];
    cursor?: Prisma.doctorsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DoctorsScalarFieldEnum | Prisma.DoctorsScalarFieldEnum[];
};
export type doctorsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctorsSelect<ExtArgs> | null;
    omit?: Prisma.doctorsOmit<ExtArgs> | null;
    include?: Prisma.doctorsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.doctorsCreateInput, Prisma.doctorsUncheckedCreateInput>;
};
export type doctorsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.doctorsCreateManyInput | Prisma.doctorsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type doctorsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctorsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.doctorsOmit<ExtArgs> | null;
    data: Prisma.doctorsCreateManyInput | Prisma.doctorsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type doctorsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctorsSelect<ExtArgs> | null;
    omit?: Prisma.doctorsOmit<ExtArgs> | null;
    include?: Prisma.doctorsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.doctorsUpdateInput, Prisma.doctorsUncheckedUpdateInput>;
    where: Prisma.doctorsWhereUniqueInput;
};
export type doctorsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.doctorsUpdateManyMutationInput, Prisma.doctorsUncheckedUpdateManyInput>;
    where?: Prisma.doctorsWhereInput;
    limit?: number;
};
export type doctorsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctorsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.doctorsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.doctorsUpdateManyMutationInput, Prisma.doctorsUncheckedUpdateManyInput>;
    where?: Prisma.doctorsWhereInput;
    limit?: number;
};
export type doctorsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctorsSelect<ExtArgs> | null;
    omit?: Prisma.doctorsOmit<ExtArgs> | null;
    include?: Prisma.doctorsInclude<ExtArgs> | null;
    where: Prisma.doctorsWhereUniqueInput;
    create: Prisma.XOR<Prisma.doctorsCreateInput, Prisma.doctorsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.doctorsUpdateInput, Prisma.doctorsUncheckedUpdateInput>;
};
export type doctorsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctorsSelect<ExtArgs> | null;
    omit?: Prisma.doctorsOmit<ExtArgs> | null;
    include?: Prisma.doctorsInclude<ExtArgs> | null;
    where: Prisma.doctorsWhereUniqueInput;
};
export type doctorsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.doctorsWhereInput;
    limit?: number;
};
export type doctors$appointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type doctorsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctorsSelect<ExtArgs> | null;
    omit?: Prisma.doctorsOmit<ExtArgs> | null;
    include?: Prisma.doctorsInclude<ExtArgs> | null;
};
export {};
