import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateTenantDto } from './dto/tenate.dto.js';
import { UpdateTenantDto } from './dto/update-tenant.dto.js';
@Injectable()
export class TenateService {
  constructor(private prisma: PrismaService) {}
  async create(dto: CreateTenantDto) {
    try {
      const result = await this.prisma.tenant.create({
        data: dto,
      });

      return result;
    } catch (error) {
      console.error('ERROR:', error);
      throw error;
    }
  }

  async update(id: string, dto: UpdateTenantDto) {
    try {
      return await this.prisma.tenant.update({
        where: { id },
        data: dto,
      });
    } catch (error) {
      console.error('UPDATE ERROR:', error);
      throw error;
    }
  }
  async findAll() {
    return this.prisma?.tenant.findMany();
  }

  async delete(id: string) {
    return this.prisma?.tenant.delete({
      where: {
        id,
      },
    });
  }
}
