var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Delete, Get, Param, Patch, Post, } from '@nestjs/common';
import { TenateService } from './tenate.service.js';
import { CreateTenantDto } from './dto/tenate.dto.js';
import { UpdateTenantDto } from './dto/update-tenant.dto.js';
let TenateController = class TenateController {
    tenateService;
    constructor(tenateService) {
        this.tenateService = tenateService;
    }
    create(dto) {
        return this.tenateService.create(dto);
    }
    update(id, dto) {
        return this.tenateService.update(id, dto);
    }
    findAll() {
        return this.tenateService.findAll();
    }
    delete(id) {
        return this.tenateService.delete(id);
    }
};
__decorate([
    Post('create'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTenantDto]),
    __metadata("design:returntype", void 0)
], TenateController.prototype, "create", null);
__decorate([
    Patch('update/:id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateTenantDto]),
    __metadata("design:returntype", void 0)
], TenateController.prototype, "update", null);
__decorate([
    Get('getAlltenates'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TenateController.prototype, "findAll", null);
__decorate([
    Delete('delete/:id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TenateController.prototype, "delete", null);
TenateController = __decorate([
    Controller('tenate'),
    __metadata("design:paramtypes", [TenateService])
], TenateController);
export { TenateController };
//# sourceMappingURL=tenate.controller.js.map