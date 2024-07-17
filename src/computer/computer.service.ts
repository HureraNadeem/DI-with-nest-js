import { Injectable } from '@nestjs/common';
import { DiskService } from 'src/disk/disk.service';
import { RamService } from 'src/ram/ram.service';

@Injectable()
export class ComputerService {
    private diskServices: DiskService;
    private ramServices: RamService;

    constructor(diskServices: DiskService, ramServices: RamService){
        this.diskServices= diskServices;
        this.ramServices = ramServices;
    }

    getComp(){
        console.log("from the comp service");

        console.log("------------------------------");
        this.diskServices.getDisk();
        console.log("------------------------------");
        
        console.log("------------------------------");
        this.ramServices.getRam();
        console.log("------------------------------");
    }
}
