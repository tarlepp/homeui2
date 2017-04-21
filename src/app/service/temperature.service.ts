import { Injectable } from '@angular/core';
import { Temperature } from '../temperature';
import { TEMPERATURES } from '../mock-temperatures';

@Injectable()
export class TemperatureService {

  getTemperatures(): Promise<Temperature[]> {
    return Promise.resolve(TEMPERATURES);
  }

}
