import { Test, TestingModule } from '@nestjs/testing';
import { PowerCableController } from './power-cable.controller';

describe('PowerCableController', () => {
  let controller: PowerCableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PowerCableController],
    }).compile();

    controller = module.get<PowerCableController>(PowerCableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
