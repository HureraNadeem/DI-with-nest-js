import { Injectable } from '@nestjs/common';
import { PowerCableService } from 'src/power-cable/power-cable.service';

@Injectable()
export class DiskService {
    private powerServices: PowerCableService;
    constructor(power: PowerCableService){
        this.powerServices = power;
    }
    getDisk(){
        this.powerServices.getPower();
        console.log("from the disk service");
    }
}
