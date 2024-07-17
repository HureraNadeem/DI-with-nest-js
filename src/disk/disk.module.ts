import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { DiskController } from './disk.controller';
import { PowerCableModule } from 'src/power-cable/power-cable.module';

@Module({
  providers: [DiskService],
  controllers: [DiskController],
  imports: [PowerCableModule],
  exports: [DiskService]
})
export class DiskModule {}
