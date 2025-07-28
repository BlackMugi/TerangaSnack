import {   Component, ElementRef, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-vertical-bar-chart',
  imports: [],
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css']
})
export class VerticalBarChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartRef!: ElementRef;
  chart: any;

  config: any = {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fév', 'Mar', 'Avr',],
      datasets: [
        {
          label: 'Plats (m)',
          data: [0.5, 1, 1.5, 2],
          backgroundColor: 'blue'
        },
        {
          label: 'Boissons (m)',
          data: [0.4, 0.6, 0.6, 0.7],
          backgroundColor: 'red'
        }
      ]
    },
    options: {
      responsive: true,
      aspectRatio: 1,
      plugins: {
        title: {
          display: true,
          text: 'Revenue par mois en millions'
        }
      }
    }
  };

  ngAfterViewInit(): void {
    this.chart = new Chart(this.chartRef.nativeElement, this.config);
  }

  ngOnDestroy(): void {
    if (this.chart) this.chart.destroy();
  }
}