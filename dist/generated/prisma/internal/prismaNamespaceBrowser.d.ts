import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
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
