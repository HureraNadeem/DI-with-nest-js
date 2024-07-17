import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerCableService {
    getPower(){
        console.log("From power service")
    }
}
