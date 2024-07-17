import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { ComputerService } from './computer.service';
import { DiskModule } from 'src/disk/disk.module';
import { RamModule } from 'src/ram/ram.module';

@Module({
  controllers: [ComputerController],
  providers: [ComputerService],
  imports: [DiskModule, RamModule]
})
export class ComputerModule {}
