import { Injectable } from '@nestjs/common';
import { PowerCableService } from 'src/power-cable/power-cable.service';

@Injectable()
export class RamService {
    private powerService: PowerCableService;

    constructor(power: PowerCableService){
        this.powerService = power;
    }

    getRam(){
        this.powerService.getPower()
        console.log("From the ram service");
    }
}
