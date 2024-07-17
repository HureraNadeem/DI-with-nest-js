import { Module } from '@nestjs/common';
import { PowerCableService } from './power-cable.service';
import { PowerCableController } from './power-cable.controller';

@Module({
  providers: [PowerCableService],
  controllers: [PowerCableController],
  exports: [PowerCableService]
})
export class PowerCableModule {}
