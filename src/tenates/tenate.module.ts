import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module.js';
import { TenateController } from './tenate.controller.js';
import { TenateService } from './tenate.service.js';

@Module({
  imports: [PrismaModule],
  providers: [TenateService],
  controllers: [TenateController],
})
export class TenateModule {}
