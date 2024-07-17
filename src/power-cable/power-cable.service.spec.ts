import { Test, TestingModule } from '@nestjs/testing';
import { PowerCableService } from './power-cable.service';

describe('PowerCableService', () => {
  let service: PowerCableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PowerCableService],
    }).compile();

    service = module.get<PowerCableService>(PowerCableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
