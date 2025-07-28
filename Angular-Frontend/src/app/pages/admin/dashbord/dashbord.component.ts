import { Component, signal, computed } from '@angular/core';
import { VerticalBarChartComponent } from '../../../components/admin/charts/vertical-bar-chart/vertical-bar-chart.component';
import { EventChartComponent } from '../../../components/admin/charts/event-chart/event-chart.component';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [VerticalBarChartComponent, EventChartComponent],
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  refreshCharts = signal(false);

  triggerChartResize() {
    this.refreshCharts.update(v => !v); 
  }
}
