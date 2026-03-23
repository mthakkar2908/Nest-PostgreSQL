import { TenateService } from './tenate.service.js';
import { CreateTenantDto } from './dto/tenate.dto.js';
import { UpdateTenantDto } from './dto/update-tenant.dto.js';
export declare class TenateController {
    private readonly tenateService;
    constructor(tenateService: TenateService);
    create(dto: CreateTenantDto): Promise<{
        name: string;
        type: string;
        odsCode: string | null;
        addressLine1: string | null;
        addressLine2: string | null;
        city: string | null;
        postcode: string | null;
        isActive: boolean;
        aiSummarisationEnabled: boolean;
        humanReviewRequired: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateTenantDto): Promise<{
        name: string;
        type: string;
        odsCode: string | null;
        addressLine1: string | null;
        addressLine2: string | null;
        city: string | null;
        postcode: string | null;
        isActive: boolean;
        aiSummarisationEnabled: boolean;
        humanReviewRequired: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        name: string;
        type: string;
        odsCode: string | null;
        addressLine1: string | null;
        addressLine2: string | null;
        city: string | null;
        postcode: string | null;
        isActive: boolean;
        aiSummarisationEnabled: boolean;
        humanReviewRequired: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    delete(id: string): Promise<{
        name: string;
        type: string;
        odsCode: string | null;
        addressLine1: string | null;
        addressLine2: string | null;
        city: string | null;
        postcode: string | null;
        isActive: boolean;
        aiSummarisationEnabled: boolean;
        humanReviewRequired: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
