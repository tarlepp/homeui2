import { Component, OnInit } from '@angular/core';
import { Temperature } from '../../temperature';
import { TemperatureService } from '../../service/temperature.service';

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
    temperatures: Temperature[];

    constructor(private temperatureService: TemperatureService) { }
    ngOnInit() {
        this.temperatureService.getTemperatures().then(temperatures => this.temperatures = temperatures);
    }

}
