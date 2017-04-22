import { Component, OnInit } from '@angular/core';
import { Temperature } from '../../models/temperature';
import { TemperatureService } from '../../services/temperature.service';
import {timestamp} from "rxjs/operator/timestamp";

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
})

export class GraphComponent implements OnInit {
    public temperatures: Temperature[];

    private datasets;
    private labels;
    private options;
    public lineChartType = 'line';

    public lineChartData;
    public lineChartLabels;


    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    public constructor(private temperatureService: TemperatureService) { }

    public ngOnInit(): void {
        this.temperatureService
            .getTemperatures()
            .then(temperatures => {
                this.temperatures = temperatures;

                this.lineChartData = [temperatures.map(temp => temp.temperature)];
                this.lineChartLabels = [temperatures.map(temp => temp.timestamp)];
                console.log(this.temperatures, this.lineChartData, this.lineChartLabels);

            });
    }
}
