import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TenateService } from './tenate.service.js';
import { CreateTenantDto } from './dto/tenate.dto.js';
import { UpdateTenantDto } from './dto/update-tenant.dto.js';

@Controller('tenate')
export class TenateController {
  constructor(private readonly tenateService: TenateService) {}
  @Post('create')
  create(@Body() dto: CreateTenantDto) {
    return this.tenateService.create(dto);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() dto: UpdateTenantDto) {
    return this.tenateService.update(id, dto);
  }

  @Get('getAlltenates')
  findAll() {
    return this.tenateService.findAll();
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.tenateService.delete(id);
  }
}
