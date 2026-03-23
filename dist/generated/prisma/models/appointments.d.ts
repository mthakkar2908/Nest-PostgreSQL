import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type appointmentsModel = runtime.Types.Result.DefaultSelection<Prisma.$appointmentsPayload>;
export type AggregateAppointments = {
    _count: AppointmentsCountAggregateOutputType | null;
    _avg: AppointmentsAvgAggregateOutputType | null;
    _sum: AppointmentsSumAggregateOutputType | null;
    _min: AppointmentsMinAggregateOutputType | null;
    _max: AppointmentsMaxAggregateOutputType | null;
};
export type AppointmentsAvgAggregateOutputType = {
    id: number | null;
    doctor_id: number | null;
    patient_id: number | null;
    fee: number | null;
};
export type AppointmentsSumAggregateOutputType = {
    id: number | null;
    doctor_id: number | null;
    patient_id: number | null;
    fee: number | null;
};
export type AppointmentsMinAggregateOutputType = {
    id: number | null;
    doctor_id: number | null;
    patient_id: number | null;
    appointment_date: Date | null;
    fee: number | null;
};
export type AppointmentsMaxAggregateOutputType = {
    id: number | null;
    doctor_id: number | null;
    patient_id: number | null;
    appointment_date: Date | null;
    fee: number | null;
};
export type AppointmentsCountAggregateOutputType = {
    id: number;
    doctor_id: number;
    patient_id: number;
    appointment_date: number;
    fee: number;
    _all: number;
};
export type AppointmentsAvgAggregateInputType = {
    id?: true;
    doctor_id?: true;
    patient_id?: true;
    fee?: true;
};
export type AppointmentsSumAggregateInputType = {
    id?: true;
    doctor_id?: true;
    patient_id?: true;
    fee?: true;
};
export type AppointmentsMinAggregateInputType = {
    id?: true;
    doctor_id?: true;
    patient_id?: true;
    appointment_date?: true;
    fee?: true;
};
export type AppointmentsMaxAggregateInputType = {
    id?: true;
    doctor_id?: true;
    patient_id?: true;
    appointment_date?: true;
    fee?: true;
};
export type AppointmentsCountAggregateInputType = {
    id?: true;
    doctor_id?: true;
    patient_id?: true;
    appointment_date?: true;
    fee?: true;
    _all?: true;
};
export type AppointmentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.appointmentsWhereInput;
    orderBy?: Prisma.appointmentsOrderByWithRelationInput | Prisma.appointmentsOrderByWithRelationInput[];
    cursor?: Prisma.appointmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AppointmentsCountAggregateInputType;
    _avg?: AppointmentsAvgAggregateInputType;
    _sum?: AppointmentsSumAggregateInputType;
    _min?: AppointmentsMinAggregateInputType;
    _max?: AppointmentsMaxAggregateInputType;
};
export type GetAppointmentsAggregateType<T extends AppointmentsAggregateArgs> = {
    [P in keyof T & keyof AggregateAppointments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAppointments[P]> : Prisma.GetScalarType<T[P], AggregateAppointments[P]>;
};
export type appointmentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.appointmentsWhereInput;
    orderBy?: Prisma.appointmentsOrderByWithAggregationInput | Prisma.appointmentsOrderByWithAggregationInput[];
    by: Prisma.AppointmentsScalarFieldEnum[] | Prisma.AppointmentsScalarFieldEnum;
    having?: Prisma.appointmentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppointmentsCountAggregateInputType | true;
    _avg?: AppointmentsAvgAggregateInputType;
    _sum?: AppointmentsSumAggregateInputType;
    _min?: AppointmentsMinAggregateInputType;
    _max?: AppointmentsMaxAggregateInputType;
};
export type AppointmentsGroupByOutputType = {
    id: number;
    doctor_id: number | null;
    patient_id: number | null;
    appointment_date: Date | null;
    fee: number | null;
    _count: AppointmentsCountAggregateOutputType | null;
    _avg: AppointmentsAvgAggregateOutputType | null;
    _sum: AppointmentsSumAggregateOutputType | null;
    _min: AppointmentsMinAggregateOutputType | null;
    _max: AppointmentsMaxAggregateOutputType | null;
};
type GetAppointmentsGroupByPayload<T extends appointmentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AppointmentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AppointmentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AppointmentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AppointmentsGroupByOutputType[P]>;
}>>;
export type appointmentsWhereInput = {
    AND?: Prisma.appointmentsWhereInput | Prisma.appointmentsWhereInput[];
    OR?: Prisma.appointmentsWhereInput[];
    NOT?: Prisma.appointmentsWhereInput | Prisma.appointmentsWhereInput[];
    id?: Prisma.IntFilter<"appointments"> | number;
    doctor_id?: Prisma.IntNullableFilter<"appointments"> | number | null;
    patient_id?: Prisma.IntNullableFilter<"appointments"> | number | null;
    appointment_date?: Prisma.DateTimeNullableFilter<"appointments"> | Date | string | null;
    fee?: Prisma.IntNullableFilter<"appointments"> | number | null;
    doctors?: Prisma.XOR<Prisma.DoctorsNullableScalarRelationFilter, Prisma.doctorsWhereInput> | null;
    patients?: Prisma.XOR<Prisma.PatientsNullableScalarRelationFilter, Prisma.patientsWhereInput> | null;
    treatments?: Prisma.TreatmentsListRelationFilter;
};
export type appointmentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    doctor_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    patient_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    appointment_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    fee?: Prisma.SortOrderInput | Prisma.SortOrder;
    doctors?: Prisma.doctorsOrderByWithRelationInput;
    patients?: Prisma.patientsOrderByWithRelationInput;
    treatments?: Prisma.treatmentsOrderByRelationAggregateInput;
};
export type appointmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.appointmentsWhereInput | Prisma.appointmentsWhereInput[];
    OR?: Prisma.appointmentsWhereInput[];
    NOT?: Prisma.appointmentsWhereInput | Prisma.appointmentsWhereInput[];
    doctor_id?: Prisma.IntNullableFilter<"appointments"> | number | null;
    patient_id?: Prisma.IntNullableFilter<"appointments"> | number | null;
    appointment_date?: Prisma.DateTimeNullableFilter<"appointments"> | Date | string | null;
    fee?: Prisma.IntNullableFilter<"appointments"> | number | null;
    doctors?: Prisma.XOR<Prisma.DoctorsNullableScalarRelationFilter, Prisma.doctorsWhereInput> | null;
    patients?: Prisma.XOR<Prisma.PatientsNullableScalarRelationFilter, Prisma.patientsWhereInput> | null;
    treatments?: Prisma.TreatmentsListRelationFilter;
}, "id">;
export type appointmentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    doctor_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    patient_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    appointment_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    fee?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.appointmentsCountOrderByAggregateInput;
    _avg?: Prisma.appointmentsAvgOrderByAggregateInput;
    _max?: Prisma.appointmentsMaxOrderByAggregateInput;
    _min?: Prisma.appointmentsMinOrderByAggregateInput;
    _sum?: Prisma.appointmentsSumOrderByAggregateInput;
};
export type appointmentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.appointmentsScalarWhereWithAggregatesInput | Prisma.appointmentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.appointmentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.appointmentsScalarWhereWithAggregatesInput | Prisma.appointmentsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"appointments"> | number;
    doctor_id?: Prisma.IntNullableWithAggregatesFilter<"appointments"> | number | null;
    patient_id?: Prisma.IntNullableWithAggregatesFilter<"appointments"> | number | null;
    appointment_date?: Prisma.DateTimeNullableWithAggregatesFilter<"appointments"> | Date | string | null;
    fee?: Prisma.IntNullableWithAggregatesFilter<"appointments"> | number | null;
};
export type appointmentsCreateInput = {
    appointment_date?: Date | string | null;
    fee?: number | null;
    doctors?: Prisma.doctorsCreateNestedOneWithoutAppointmentsInput;
    patients?: Prisma.patientsCreateNestedOneWithoutAppointmentsInput;
    treatments?: Prisma.treatmentsCreateNestedManyWithoutAppointmentsInput;
};
export type appointmentsUncheckedCreateInput = {
    id?: number;
    doctor_id?: number | null;
    patient_id?: number | null;
    appointment_date?: Date | string | null;
    fee?: number | null;
    treatments?: Prisma.treatmentsUncheckedCreateNestedManyWithoutAppointmentsInput;
};
export type appointmentsUpdateInput = {
    appointment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fee?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    doctors?: Prisma.doctorsUpdateOneWithoutAppointmentsNestedInput;
    patients?: Prisma.patientsUpdateOneWithoutAppointmentsNestedInput;
    treatments?: Prisma.treatmentsUpdateManyWithoutAppointmentsNestedInput;
};
export type appointmentsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctor_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    patient_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    appointment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fee?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    treatments?: Prisma.treatmentsUncheckedUpdateManyWithoutAppointmentsNestedInput;
};
export type appointmentsCreateManyInput = {
    id?: number;
    doctor_id?: number | null;
    patient_id?: number | null;
    appointment_date?: Date | string | null;
    fee?: number | null;
};
export type appointmentsUpdateManyMutationInput = {
    appointment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fee?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type appointmentsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctor_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    patient_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    appointment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fee?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type appointmentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctor_id?: Prisma.SortOrder;
    patient_id?: Prisma.SortOrder;
    appointment_date?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
};
export type appointmentsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctor_id?: Prisma.SortOrder;
    patient_id?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
};
export type appointmentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctor_id?: Prisma.SortOrder;
    patient_id?: Prisma.SortOrder;
    appointment_date?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
};
export type appointmentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctor_id?: Prisma.SortOrder;
    patient_id?: Prisma.SortOrder;
    appointment_date?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
};
export type appointmentsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    doctor_id?: Prisma.SortOrder;
    patient_id?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
};
export type AppointmentsListRelationFilter = {
    every?: Prisma.appointmentsWhereInput;
    some?: Prisma.appointmentsWhereInput;
    none?: Prisma.appointmentsWhereInput;
};
export type appointmentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AppointmentsNullableScalarRelationFilter = {
    is?: Prisma.appointmentsWhereInput | null;
    isNot?: Prisma.appointmentsWhereInput | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type appointmentsCreateNestedManyWithoutDoctorsInput = {
    create?: Prisma.XOR<Prisma.appointmentsCreateWithoutDoctorsInput, Prisma.appointmentsUncheckedCreateWithoutDoctorsInput> | Prisma.appointmentsCreateWithoutDoctorsInput[] | Prisma.appointmentsUncheckedCreateWithoutDoctorsInput[];
    connectOrCreate?: Prisma.appointmentsCreateOrConnectWithoutDoctorsInput | Prisma.appointmentsCreateOrConnectWithoutDoctorsInput[];
    createMany?: Prisma.appointmentsCreateManyDoctorsInputEnvelope;
    connect?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
};
export type appointmentsUncheckedCreateNestedManyWithoutDoctorsInput = {
    create?: Prisma.XOR<Prisma.appointmentsCreateWithoutDoctorsInput, Prisma.appointmentsUncheckedCreateWithoutDoctorsInput> | Prisma.appointmentsCreateWithoutDoctorsInput[] | Prisma.appointmentsUncheckedCreateWithoutDoctorsInput[];
    connectOrCreate?: Prisma.appointmentsCreateOrConnectWithoutDoctorsInput | Prisma.appointmentsCreateOrConnectWithoutDoctorsInput[];
    createMany?: Prisma.appointmentsCreateManyDoctorsInputEnvelope;
    connect?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
};
export type appointmentsUpdateManyWithoutDoctorsNestedInput = {
    create?: Prisma.XOR<Prisma.appointmentsCreateWithoutDoctorsInput, Prisma.appointmentsUncheckedCreateWithoutDoctorsInput> | Prisma.appointmentsCreateWithoutDoctorsInput[] | Prisma.appointmentsUncheckedCreateWithoutDoctorsInput[];
    connectOrCreate?: Prisma.appointmentsCreateOrConnectWithoutDoctorsInput | Prisma.appointmentsCreateOrConnectWithoutDoctorsInput[];
    upsert?: Prisma.appointmentsUpsertWithWhereUniqueWithoutDoctorsInput | Prisma.appointmentsUpsertWithWhereUniqueWithoutDoctorsInput[];
    createMany?: Prisma.appointmentsCreateManyDoctorsInputEnvelope;
    set?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    disconnect?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    delete?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    connect?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    update?: Prisma.appointmentsUpdateWithWhereUniqueWithoutDoctorsInput | Prisma.appointmentsUpdateWithWhereUniqueWithoutDoctorsInput[];
    updateMany?: Prisma.appointmentsUpdateManyWithWhereWithoutDoctorsInput | Prisma.appointmentsUpdateManyWithWhereWithoutDoctorsInput[];
    deleteMany?: Prisma.appointmentsScalarWhereInput | Prisma.appointmentsScalarWhereInput[];
};
export type appointmentsUncheckedUpdateManyWithoutDoctorsNestedInput = {
    create?: Prisma.XOR<Prisma.appointmentsCreateWithoutDoctorsInput, Prisma.appointmentsUncheckedCreateWithoutDoctorsInput> | Prisma.appointmentsCreateWithoutDoctorsInput[] | Prisma.appointmentsUncheckedCreateWithoutDoctorsInput[];
    connectOrCreate?: Prisma.appointmentsCreateOrConnectWithoutDoctorsInput | Prisma.appointmentsCreateOrConnectWithoutDoctorsInput[];
    upsert?: Prisma.appointmentsUpsertWithWhereUniqueWithoutDoctorsInput | Prisma.appointmentsUpsertWithWhereUniqueWithoutDoctorsInput[];
    createMany?: Prisma.appointmentsCreateManyDoctorsInputEnvelope;
    set?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    disconnect?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    delete?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    connect?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    update?: Prisma.appointmentsUpdateWithWhereUniqueWithoutDoctorsInput | Prisma.appointmentsUpdateWithWhereUniqueWithoutDoctorsInput[];
    updateMany?: Prisma.appointmentsUpdateManyWithWhereWithoutDoctorsInput | Prisma.appointmentsUpdateManyWithWhereWithoutDoctorsInput[];
    deleteMany?: Prisma.appointmentsScalarWhereInput | Prisma.appointmentsScalarWhereInput[];
};
export type appointmentsCreateNestedManyWithoutPatientsInput = {
    create?: Prisma.XOR<Prisma.appointmentsCreateWithoutPatientsInput, Prisma.appointmentsUncheckedCreateWithoutPatientsInput> | Prisma.appointmentsCreateWithoutPatientsInput[] | Prisma.appointmentsUncheckedCreateWithoutPatientsInput[];
    connectOrCreate?: Prisma.appointmentsCreateOrConnectWithoutPatientsInput | Prisma.appointmentsCreateOrConnectWithoutPatientsInput[];
    createMany?: Prisma.appointmentsCreateManyPatientsInputEnvelope;
    connect?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
};
export type appointmentsUncheckedCreateNestedManyWithoutPatientsInput = {
    create?: Prisma.XOR<Prisma.appointmentsCreateWithoutPatientsInput, Prisma.appointmentsUncheckedCreateWithoutPatientsInput> | Prisma.appointmentsCreateWithoutPatientsInput[] | Prisma.appointmentsUncheckedCreateWithoutPatientsInput[];
    connectOrCreate?: Prisma.appointmentsCreateOrConnectWithoutPatientsInput | Prisma.appointmentsCreateOrConnectWithoutPatientsInput[];
    createMany?: Prisma.appointmentsCreateManyPatientsInputEnvelope;
    connect?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
};
export type appointmentsUpdateManyWithoutPatientsNestedInput = {
    create?: Prisma.XOR<Prisma.appointmentsCreateWithoutPatientsInput, Prisma.appointmentsUncheckedCreateWithoutPatientsInput> | Prisma.appointmentsCreateWithoutPatientsInput[] | Prisma.appointmentsUncheckedCreateWithoutPatientsInput[];
    connectOrCreate?: Prisma.appointmentsCreateOrConnectWithoutPatientsInput | Prisma.appointmentsCreateOrConnectWithoutPatientsInput[];
    upsert?: Prisma.appointmentsUpsertWithWhereUniqueWithoutPatientsInput | Prisma.appointmentsUpsertWithWhereUniqueWithoutPatientsInput[];
    createMany?: Prisma.appointmentsCreateManyPatientsInputEnvelope;
    set?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    disconnect?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    delete?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    connect?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    update?: Prisma.appointmentsUpdateWithWhereUniqueWithoutPatientsInput | Prisma.appointmentsUpdateWithWhereUniqueWithoutPatientsInput[];
    updateMany?: Prisma.appointmentsUpdateManyWithWhereWithoutPatientsInput | Prisma.appointmentsUpdateManyWithWhereWithoutPatientsInput[];
    deleteMany?: Prisma.appointmentsScalarWhereInput | Prisma.appointmentsScalarWhereInput[];
};
export type appointmentsUncheckedUpdateManyWithoutPatientsNestedInput = {
    create?: Prisma.XOR<Prisma.appointmentsCreateWithoutPatientsInput, Prisma.appointmentsUncheckedCreateWithoutPatientsInput> | Prisma.appointmentsCreateWithoutPatientsInput[] | Prisma.appointmentsUncheckedCreateWithoutPatientsInput[];
    connectOrCreate?: Prisma.appointmentsCreateOrConnectWithoutPatientsInput | Prisma.appointmentsCreateOrConnectWithoutPatientsInput[];
    upsert?: Prisma.appointmentsUpsertWithWhereUniqueWithoutPatientsInput | Prisma.appointmentsUpsertWithWhereUniqueWithoutPatientsInput[];
    createMany?: Prisma.appointmentsCreateManyPatientsInputEnvelope;
    set?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    disconnect?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    delete?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    connect?: Prisma.appointmentsWhereUniqueInput | Prisma.appointmentsWhereUniqueInput[];
    update?: Prisma.appointmentsUpdateWithWhereUniqueWithoutPatientsInput | Prisma.appointmentsUpdateWithWhereUniqueWithoutPatientsInput[];
    updateMany?: Prisma.appointmentsUpdateManyWithWhereWithoutPatientsInput | Prisma.appointmentsUpdateManyWithWhereWithoutPatientsInput[];
    deleteMany?: Prisma.appointmentsScalarWhereInput | Prisma.appointmentsScalarWhereInput[];
};
export type appointmentsCreateNestedOneWithoutTreatmentsInput = {
    create?: Prisma.XOR<Prisma.appointmentsCreateWithoutTreatmentsInput, Prisma.appointmentsUncheckedCreateWithoutTreatmentsInput>;
    connectOrCreate?: Prisma.appointmentsCreateOrConnectWithoutTreatmentsInput;
    connect?: Prisma.appointmentsWhereUniqueInput;
};
export type appointmentsUpdateOneWithoutTreatmentsNestedInput = {
    create?: Prisma.XOR<Prisma.appointmentsCreateWithoutTreatmentsInput, Prisma.appointmentsUncheckedCreateWithoutTreatmentsInput>;
    connectOrCreate?: Prisma.appointmentsCreateOrConnectWithoutTreatmentsInput;
    upsert?: Prisma.appointmentsUpsertWithoutTreatmentsInput;
    disconnect?: Prisma.appointmentsWhereInput | boolean;
    delete?: Prisma.appointmentsWhereInput | boolean;
    connect?: Prisma.appointmentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.appointmentsUpdateToOneWithWhereWithoutTreatmentsInput, Prisma.appointmentsUpdateWithoutTreatmentsInput>, Prisma.appointmentsUncheckedUpdateWithoutTreatmentsInput>;
};
export type appointmentsCreateWithoutDoctorsInput = {
    appointment_date?: Date | string | null;
    fee?: number | null;
    patients?: Prisma.patientsCreateNestedOneWithoutAppointmentsInput;
    treatments?: Prisma.treatmentsCreateNestedManyWithoutAppointmentsInput;
};
export type appointmentsUncheckedCreateWithoutDoctorsInput = {
    id?: number;
    patient_id?: number | null;
    appointment_date?: Date | string | null;
    fee?: number | null;
    treatments?: Prisma.treatmentsUncheckedCreateNestedManyWithoutAppointmentsInput;
};
export type appointmentsCreateOrConnectWithoutDoctorsInput = {
    where: Prisma.appointmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.appointmentsCreateWithoutDoctorsInput, Prisma.appointmentsUncheckedCreateWithoutDoctorsInput>;
};
export type appointmentsCreateManyDoctorsInputEnvelope = {
    data: Prisma.appointmentsCreateManyDoctorsInput | Prisma.appointmentsCreateManyDoctorsInput[];
    skipDuplicates?: boolean;
};
export type appointmentsUpsertWithWhereUniqueWithoutDoctorsInput = {
    where: Prisma.appointmentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.appointmentsUpdateWithoutDoctorsInput, Prisma.appointmentsUncheckedUpdateWithoutDoctorsInput>;
    create: Prisma.XOR<Prisma.appointmentsCreateWithoutDoctorsInput, Prisma.appointmentsUncheckedCreateWithoutDoctorsInput>;
};
export type appointmentsUpdateWithWhereUniqueWithoutDoctorsInput = {
    where: Prisma.appointmentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.appointmentsUpdateWithoutDoctorsInput, Prisma.appointmentsUncheckedUpdateWithoutDoctorsInput>;
};
export type appointmentsUpdateManyWithWhereWithoutDoctorsInput = {
    where: Prisma.appointmentsScalarWhereInput;
    data: Prisma.XOR<Prisma.appointmentsUpdateManyMutationInput, Prisma.appointmentsUncheckedUpdateManyWithoutDoctorsInput>;
};
export type appointmentsScalarWhereInput = {
    AND?: Prisma.appointmentsScalarWhereInput | Prisma.appointmentsScalarWhereInput[];
    OR?: Prisma.appointmentsScalarWhereInput[];
    NOT?: Prisma.appointmentsScalarWhereInput | Prisma.appointmentsScalarWhereInput[];
    id?: Prisma.IntFilter<"appointments"> | number;
    doctor_id?: Prisma.IntNullableFilter<"appointments"> | number | null;
    patient_id?: Prisma.IntNullableFilter<"appointments"> | number | null;
    appointment_date?: Prisma.DateTimeNullableFilter<"appointments"> | Date | string | null;
    fee?: Prisma.IntNullableFilter<"appointments"> | number | null;
};
export type appointmentsCreateWithoutPatientsInput = {
    appointment_date?: Date | string | null;
    fee?: number | null;
    doctors?: Prisma.doctorsCreateNestedOneWithoutAppointmentsInput;
    treatments?: Prisma.treatmentsCreateNestedManyWithoutAppointmentsInput;
};
export type appointmentsUncheckedCreateWithoutPatientsInput = {
    id?: number;
    doctor_id?: number | null;
    appointment_date?: Date | string | null;
    fee?: number | null;
    treatments?: Prisma.treatmentsUncheckedCreateNestedManyWithoutAppointmentsInput;
};
export type appointmentsCreateOrConnectWithoutPatientsInput = {
    where: Prisma.appointmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.appointmentsCreateWithoutPatientsInput, Prisma.appointmentsUncheckedCreateWithoutPatientsInput>;
};
export type appointmentsCreateManyPatientsInputEnvelope = {
    data: Prisma.appointmentsCreateManyPatientsInput | Prisma.appointmentsCreateManyPatientsInput[];
    skipDuplicates?: boolean;
};
export type appointmentsUpsertWithWhereUniqueWithoutPatientsInput = {
    where: Prisma.appointmentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.appointmentsUpdateWithoutPatientsInput, Prisma.appointmentsUncheckedUpdateWithoutPatientsInput>;
    create: Prisma.XOR<Prisma.appointmentsCreateWithoutPatientsInput, Prisma.appointmentsUncheckedCreateWithoutPatientsInput>;
};
export type appointmentsUpdateWithWhereUniqueWithoutPatientsInput = {
    where: Prisma.appointmentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.appointmentsUpdateWithoutPatientsInput, Prisma.appointmentsUncheckedUpdateWithoutPatientsInput>;
};
export type appointmentsUpdateManyWithWhereWithoutPatientsInput = {
    where: Prisma.appointmentsScalarWhereInput;
    data: Prisma.XOR<Prisma.appointmentsUpdateManyMutationInput, Prisma.appointmentsUncheckedUpdateManyWithoutPatientsInput>;
};
export type appointmentsCreateWithoutTreatmentsInput = {
    appointment_date?: Date | string | null;
    fee?: number | null;
    doctors?: Prisma.doctorsCreateNestedOneWithoutAppointmentsInput;
    patients?: Prisma.patientsCreateNestedOneWithoutAppointmentsInput;
};
export type appointmentsUncheckedCreateWithoutTreatmentsInput = {
    id?: number;
    doctor_id?: number | null;
    patient_id?: number | null;
    appointment_date?: Date | string | null;
    fee?: number | null;
};
export type appointmentsCreateOrConnectWithoutTreatmentsInput = {
    where: Prisma.appointmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.appointmentsCreateWithoutTreatmentsInput, Prisma.appointmentsUncheckedCreateWithoutTreatmentsInput>;
};
export type appointmentsUpsertWithoutTreatmentsInput = {
    update: Prisma.XOR<Prisma.appointmentsUpdateWithoutTreatmentsInput, Prisma.appointmentsUncheckedUpdateWithoutTreatmentsInput>;
    create: Prisma.XOR<Prisma.appointmentsCreateWithoutTreatmentsInput, Prisma.appointmentsUncheckedCreateWithoutTreatmentsInput>;
    where?: Prisma.appointmentsWhereInput;
};
export type appointmentsUpdateToOneWithWhereWithoutTreatmentsInput = {
    where?: Prisma.appointmentsWhereInput;
    data: Prisma.XOR<Prisma.appointmentsUpdateWithoutTreatmentsInput, Prisma.appointmentsUncheckedUpdateWithoutTreatmentsInput>;
};
export type appointmentsUpdateWithoutTreatmentsInput = {
    appointment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fee?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    doctors?: Prisma.doctorsUpdateOneWithoutAppointmentsNestedInput;
    patients?: Prisma.patientsUpdateOneWithoutAppointmentsNestedInput;
};
export type appointmentsUncheckedUpdateWithoutTreatmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctor_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    patient_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    appointment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fee?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type appointmentsCreateManyDoctorsInput = {
    id?: number;
    patient_id?: number | null;
    appointment_date?: Date | string | null;
    fee?: number | null;
};
export type appointmentsUpdateWithoutDoctorsInput = {
    appointment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fee?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    patients?: Prisma.patientsUpdateOneWithoutAppointmentsNestedInput;
    treatments?: Prisma.treatmentsUpdateManyWithoutAppointmentsNestedInput;
};
export type appointmentsUncheckedUpdateWithoutDoctorsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    appointment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fee?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    treatments?: Prisma.treatmentsUncheckedUpdateManyWithoutAppointmentsNestedInput;
};
export type appointmentsUncheckedUpdateManyWithoutDoctorsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    appointment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fee?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type appointmentsCreateManyPatientsInput = {
    id?: number;
    doctor_id?: number | null;
    appointment_date?: Date | string | null;
    fee?: number | null;
};
export type appointmentsUpdateWithoutPatientsInput = {
    appointment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fee?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    doctors?: Prisma.doctorsUpdateOneWithoutAppointmentsNestedInput;
    treatments?: Prisma.treatmentsUpdateManyWithoutAppointmentsNestedInput;
};
export type appointmentsUncheckedUpdateWithoutPatientsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctor_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    appointment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fee?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    treatments?: Prisma.treatmentsUncheckedUpdateManyWithoutAppointmentsNestedInput;
};
export type appointmentsUncheckedUpdateManyWithoutPatientsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    doctor_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    appointment_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fee?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type AppointmentsCountOutputType = {
    treatments: number;
};
export type AppointmentsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    treatments?: boolean | AppointmentsCountOutputTypeCountTreatmentsArgs;
};
export type AppointmentsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentsCountOutputTypeSelect<ExtArgs> | null;
};
export type AppointmentsCountOutputTypeCountTreatmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.treatmentsWhereInput;
};
export type appointmentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    doctor_id?: boolean;
    patient_id?: boolean;
    appointment_date?: boolean;
    fee?: boolean;
    doctors?: boolean | Prisma.appointments$doctorsArgs<ExtArgs>;
    patients?: boolean | Prisma.appointments$patientsArgs<ExtArgs>;
    treatments?: boolean | Prisma.appointments$treatmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.AppointmentsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["appointments"]>;
export type appointmentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    doctor_id?: boolean;
    patient_id?: boolean;
    appointment_date?: boolean;
    fee?: boolean;
    doctors?: boolean | Prisma.appointments$doctorsArgs<ExtArgs>;
    patients?: boolean | Prisma.appointments$patientsArgs<ExtArgs>;
}, ExtArgs["result"]["appointments"]>;
export type appointmentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    doctor_id?: boolean;
    patient_id?: boolean;
    appointment_date?: boolean;
    fee?: boolean;
    doctors?: boolean | Prisma.appointments$doctorsArgs<ExtArgs>;
    patients?: boolean | Prisma.appointments$patientsArgs<ExtArgs>;
}, ExtArgs["result"]["appointments"]>;
export type appointmentsSelectScalar = {
    id?: boolean;
    doctor_id?: boolean;
    patient_id?: boolean;
    appointment_date?: boolean;
    fee?: boolean;
};
export type appointmentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "doctor_id" | "patient_id" | "appointment_date" | "fee", ExtArgs["result"]["appointments"]>;
export type appointmentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doctors?: boolean | Prisma.appointments$doctorsArgs<ExtArgs>;
    patients?: boolean | Prisma.appointments$patientsArgs<ExtArgs>;
    treatments?: boolean | Prisma.appointments$treatmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.AppointmentsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type appointmentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doctors?: boolean | Prisma.appointments$doctorsArgs<ExtArgs>;
    patients?: boolean | Prisma.appointments$patientsArgs<ExtArgs>;
};
export type appointmentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    doctors?: boolean | Prisma.appointments$doctorsArgs<ExtArgs>;
    patients?: boolean | Prisma.appointments$patientsArgs<ExtArgs>;
};
export type $appointmentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "appointments";
    objects: {
        doctors: Prisma.$doctorsPayload<ExtArgs> | null;
        patients: Prisma.$patientsPayload<ExtArgs> | null;
        treatments: Prisma.$treatmentsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        doctor_id: number | null;
        patient_id: number | null;
        appointment_date: Date | null;
        fee: number | null;
    }, ExtArgs["result"]["appointments"]>;
    composites: {};
};
export type appointmentsGetPayload<S extends boolean | null | undefined | appointmentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$appointmentsPayload, S>;
export type appointmentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<appointmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AppointmentsCountAggregateInputType | true;
};
export interface appointmentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['appointments'];
        meta: {
            name: 'appointments';
        };
    };
    findUnique<T extends appointmentsFindUniqueArgs>(args: Prisma.SelectSubset<T, appointmentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__appointmentsClient<runtime.Types.Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends appointmentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, appointmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__appointmentsClient<runtime.Types.Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends appointmentsFindFirstArgs>(args?: Prisma.SelectSubset<T, appointmentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__appointmentsClient<runtime.Types.Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends appointmentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, appointmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__appointmentsClient<runtime.Types.Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends appointmentsFindManyArgs>(args?: Prisma.SelectSubset<T, appointmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends appointmentsCreateArgs>(args: Prisma.SelectSubset<T, appointmentsCreateArgs<ExtArgs>>): Prisma.Prisma__appointmentsClient<runtime.Types.Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends appointmentsCreateManyArgs>(args?: Prisma.SelectSubset<T, appointmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends appointmentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, appointmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends appointmentsDeleteArgs>(args: Prisma.SelectSubset<T, appointmentsDeleteArgs<ExtArgs>>): Prisma.Prisma__appointmentsClient<runtime.Types.Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends appointmentsUpdateArgs>(args: Prisma.SelectSubset<T, appointmentsUpdateArgs<ExtArgs>>): Prisma.Prisma__appointmentsClient<runtime.Types.Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends appointmentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, appointmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends appointmentsUpdateManyArgs>(args: Prisma.SelectSubset<T, appointmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends appointmentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, appointmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends appointmentsUpsertArgs>(args: Prisma.SelectSubset<T, appointmentsUpsertArgs<ExtArgs>>): Prisma.Prisma__appointmentsClient<runtime.Types.Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends appointmentsCountArgs>(args?: Prisma.Subset<T, appointmentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AppointmentsCountAggregateOutputType> : number>;
    aggregate<T extends AppointmentsAggregateArgs>(args: Prisma.Subset<T, AppointmentsAggregateArgs>): Prisma.PrismaPromise<GetAppointmentsAggregateType<T>>;
    groupBy<T extends appointmentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: appointmentsGroupByArgs['orderBy'];
    } : {
        orderBy?: appointmentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, appointmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: appointmentsFieldRefs;
}
export interface Prisma__appointmentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    doctors<T extends Prisma.appointments$doctorsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.appointments$doctorsArgs<ExtArgs>>): Prisma.Prisma__doctorsClient<runtime.Types.Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    patients<T extends Prisma.appointments$patientsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.appointments$patientsArgs<ExtArgs>>): Prisma.Prisma__patientsClient<runtime.Types.Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    treatments<T extends Prisma.appointments$treatmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.appointments$treatmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$treatmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface appointmentsFieldRefs {
    readonly id: Prisma.FieldRef<"appointments", 'Int'>;
    readonly doctor_id: Prisma.FieldRef<"appointments", 'Int'>;
    readonly patient_id: Prisma.FieldRef<"appointments", 'Int'>;
    readonly appointment_date: Prisma.FieldRef<"appointments", 'DateTime'>;
    readonly fee: Prisma.FieldRef<"appointments", 'Int'>;
}
export type appointmentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.appointmentsSelect<ExtArgs> | null;
    omit?: Prisma.appointmentsOmit<ExtArgs> | null;
    include?: Prisma.appointmentsInclude<ExtArgs> | null;
    where: Prisma.appointmentsWhereUniqueInput;
};
export type appointmentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.appointmentsSelect<ExtArgs> | null;
    omit?: Prisma.appointmentsOmit<ExtArgs> | null;
    include?: Prisma.appointmentsInclude<ExtArgs> | null;
    where: Prisma.appointmentsWhereUniqueInput;
};
export type appointmentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type appointmentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type appointmentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type appointmentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.appointmentsSelect<ExtArgs> | null;
    omit?: Prisma.appointmentsOmit<ExtArgs> | null;
    include?: Prisma.appointmentsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.appointmentsCreateInput, Prisma.appointmentsUncheckedCreateInput>;
};
export type appointmentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.appointmentsCreateManyInput | Prisma.appointmentsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type appointmentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.appointmentsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.appointmentsOmit<ExtArgs> | null;
    data: Prisma.appointmentsCreateManyInput | Prisma.appointmentsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.appointmentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type appointmentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.appointmentsSelect<ExtArgs> | null;
    omit?: Prisma.appointmentsOmit<ExtArgs> | null;
    include?: Prisma.appointmentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.appointmentsUpdateInput, Prisma.appointmentsUncheckedUpdateInput>;
    where: Prisma.appointmentsWhereUniqueInput;
};
export type appointmentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.appointmentsUpdateManyMutationInput, Prisma.appointmentsUncheckedUpdateManyInput>;
    where?: Prisma.appointmentsWhereInput;
    limit?: number;
};
export type appointmentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.appointmentsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.appointmentsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.appointmentsUpdateManyMutationInput, Prisma.appointmentsUncheckedUpdateManyInput>;
    where?: Prisma.appointmentsWhereInput;
    limit?: number;
    include?: Prisma.appointmentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type appointmentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.appointmentsSelect<ExtArgs> | null;
    omit?: Prisma.appointmentsOmit<ExtArgs> | null;
    include?: Prisma.appointmentsInclude<ExtArgs> | null;
    where: Prisma.appointmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.appointmentsCreateInput, Prisma.appointmentsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.appointmentsUpdateInput, Prisma.appointmentsUncheckedUpdateInput>;
};
export type appointmentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.appointmentsSelect<ExtArgs> | null;
    omit?: Prisma.appointmentsOmit<ExtArgs> | null;
    include?: Prisma.appointmentsInclude<ExtArgs> | null;
    where: Prisma.appointmentsWhereUniqueInput;
};
export type appointmentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.appointmentsWhereInput;
    limit?: number;
};
export type appointments$doctorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.doctorsSelect<ExtArgs> | null;
    omit?: Prisma.doctorsOmit<ExtArgs> | null;
    include?: Prisma.doctorsInclude<ExtArgs> | null;
    where?: Prisma.doctorsWhereInput;
};
export type appointments$patientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.patientsSelect<ExtArgs> | null;
    omit?: Prisma.patientsOmit<ExtArgs> | null;
    include?: Prisma.patientsInclude<ExtArgs> | null;
    where?: Prisma.patientsWhereInput;
};
export type appointments$treatmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type appointmentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.appointmentsSelect<ExtArgs> | null;
    omit?: Prisma.appointmentsOmit<ExtArgs> | null;
    include?: Prisma.appointmentsInclude<ExtArgs> | null;
};
export {};
