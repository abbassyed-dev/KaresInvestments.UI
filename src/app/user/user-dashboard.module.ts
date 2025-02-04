import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard.component';

import { UserDashboardsRoutingModule } from './user-dashboard-routing.module';
import { PrimeNgModule } from '../shared/prime-ng.module';
import { UserDashboardService } from './user-dashboard.service';

import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

// Apply a custom theme globally using `Highcharts.setOptions()`
Highcharts.setOptions({
    chart: {
        backgroundColor: '#2a323d', // Dark background color
    },
    title: {
        style: {
            color: '#ffffff' // White color for title
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark tooltip background
        style: {
            color: '#fff' // Tooltip text color in white
        }
    },
    xAxis: {
        gridLineColor: '#555', // Darker grid lines
        labels: {
            style: {
                color: '#aaa' // Lighter color for axis labels
            }
        }
    },
    yAxis: {
        gridLineColor: '#555', // Darker grid lines
        labels: {
            style: {
                color: '#aaa' // Lighter color for axis labels
            }
        }
    },
    legend: {
        itemStyle: {
            color: '#ffffff' // White color for legend items
        }
    }
});

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PrimeNgModule,
        UserDashboardsRoutingModule,
        HighchartsChartModule
    ],
    declarations: [UserDashboardComponent],
    providers: [UserDashboardService, DatePipe,]
})
export class UserDashboardModule { }
