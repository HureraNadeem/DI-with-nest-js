import { Controller, Get } from '@nestjs/common';
import { ComputerService } from './computer.service';

@Controller()
export class ComputerController {
    private compServices: ComputerService;

    constructor(comp: ComputerService) {
        this.compServices  = comp
    }

    @Get()
    getCompController(){
        console.log("this from comp controller");
        this.compServices.getComp();
        return ["this worked"];
    }

}
