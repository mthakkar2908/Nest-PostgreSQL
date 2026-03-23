var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
let TenateService = class TenateService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        try {
            const result = await this.prisma.tenant.create({
                data: dto,
            });
            return result;
        }
        catch (error) {
            console.error('ERROR:', error);
            throw error;
        }
    }
    async update(id, dto) {
        try {
            return await this.prisma.tenant.update({
                where: { id },
                data: dto,
            });
        }
        catch (error) {
            console.error('UPDATE ERROR:', error);
            throw error;
        }
    }
    async findAll() {
        return this.prisma?.tenant.findMany();
    }
    async delete(id) {
        return this.prisma?.tenant.delete({
            where: {
                id,
            },
        });
    }
};
TenateService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], TenateService);
export { TenateService };
//# sourceMappingURL=tenate.service.js.map