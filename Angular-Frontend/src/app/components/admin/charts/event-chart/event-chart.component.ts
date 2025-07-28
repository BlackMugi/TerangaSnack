import {   Component, ElementRef, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-event-chart',
  imports: [],
  templateUrl: './event-chart.component.html',
  styleUrls: ['./event-chart.component.css']
})

export class EventChartComponent implements AfterViewInit, OnDestroy{
  @ViewChild('eventChart') chartRef!: ElementRef;
  chart: any;

  config: any = {
    type: 'pie',
    data: {
      labels:  ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      datasets: [{
        label: 'Ventes',
        data: [12, 9, 6, 7, 6, 15, 14],
        borderWidth: 1,
        backgroundColor: ['#CB4335', '#1F618D', '#952424', '#27AE60', '#884EA0', '#d63384','#F1C40F' ],
      }
    ]
    },
    options: {
      responsive: true,
      aspectRatio: 1,
      plugins: {
        title: {
          display: true,
          text: 'Vente de le semaine'
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