"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.QueryMode = exports.NullsOrder = exports.SortOrder = exports.UsersScalarFieldEnum = exports.TreatmentsScalarFieldEnum = exports.ProductsScalarFieldEnum = exports.ProductScalarFieldEnum = exports.PatientsScalarFieldEnum = exports.Orders1ScalarFieldEnum = exports.OrdersScalarFieldEnum = exports.Order_itemsScalarFieldEnum = exports.DoctorsScalarFieldEnum = exports.CustomersScalarFieldEnum = exports.AppointmentsScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.5.0",
    engine: "280c870be64f457428992c43c1f6d557fab6e29e"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    appointments: 'appointments',
    customers: 'customers',
    doctors: 'doctors',
    order_items: 'order_items',
    orders: 'orders',
    orders1: 'orders1',
    patients: 'patients',
    product: 'product',
    products: 'products',
    treatments: 'treatments',
    users: 'users'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.AppointmentsScalarFieldEnum = {
    id: 'id',
    doctor_id: 'doctor_id',
    patient_id: 'patient_id',
    appointment_date: 'appointment_date',
    fee: 'fee'
};
exports.CustomersScalarFieldEnum = {
    id: 'id',
    name: 'name',
    city: 'city'
};
exports.DoctorsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    specialization: 'specialization'
};
exports.Order_itemsScalarFieldEnum = {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    quantity: 'quantity'
};
exports.OrdersScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    product_name: 'product_name',
    amount: 'amount'
};
exports.Orders1ScalarFieldEnum = {
    id: 'id',
    customer_id: 'customer_id',
    order_date: 'order_date'
};
exports.PatientsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    city: 'city'
};
exports.ProductScalarFieldEnum = {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description'
};
exports.ProductsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    price: 'price'
};
exports.TreatmentsScalarFieldEnum = {
    id: 'id',
    appointment_id: 'appointment_id',
    treatment_name: 'treatment_name',
    cost: 'cost'
};
exports.UsersScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    age: 'age',
    created_at: 'created_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map