import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateTenantDto } from './dto/tenate.dto.js';
import { UpdateTenantDto } from './dto/update-tenant.dto.js';
export declare class TenateService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateTenantDto): Promise<{
        id: string;
        name: string;
        city: string | null;
        type: string;
        odsCode: string | null;
        addressLine1: string | null;
        addressLine2: string | null;
        postcode: string | null;
        isActive: boolean;
        aiSummarisationEnabled: boolean;
        humanReviewRequired: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateTenantDto): Promise<{
        id: string;
        name: string;
        city: string | null;
        type: string;
        odsCode: string | null;
        addressLine1: string | null;
        addressLine2: string | null;
        postcode: string | null;
        isActive: boolean;
        aiSummarisationEnabled: boolean;
        humanReviewRequired: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        city: string | null;
        type: string;
        odsCode: string | null;
        addressLine1: string | null;
        addressLine2: string | null;
        postcode: string | null;
        isActive: boolean;
        aiSummarisationEnabled: boolean;
        humanReviewRequired: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    delete(id: string): Promise<{
        id: string;
        name: string;
        city: string | null;
        type: string;
        odsCode: string | null;
        addressLine1: string | null;
        addressLine2: string | null;
        postcode: string | null;
        isActive: boolean;
        aiSummarisationEnabled: boolean;
        humanReviewRequired: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
