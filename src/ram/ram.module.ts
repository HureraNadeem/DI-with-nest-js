import { Module } from '@nestjs/common';
import { RamController } from './ram.controller';
import { RamService } from './ram.service';
import { PowerCableModule } from 'src/power-cable/power-cable.module';

@Module({
  controllers: [RamController],
  providers: [RamService],
  imports: [PowerCableModule],
  exports: [RamService]
})
export class RamModule {}
