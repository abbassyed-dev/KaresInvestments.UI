import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../../shared/services/auth-state.service';
import { AdminHomeService } from './admin-home.service';
import { DashboardStats } from '../../models/dashboard-stats.model';
import * as Highcharts from 'highcharts';
import { GraphData } from '../../models/graph-data.model';
import { mergeMap, tap } from 'rxjs';
import { UserStats } from '../../models/user-stats.model';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  Highcharts = Highcharts;
  updateColumnChartFlag = false;
  chartOptions: any;
  dashboardStats: DashboardStats = {} as DashboardStats;
  errorMessage: string | null = null;
  transactionsGraphData: GraphData[] = [];
  usersGraphData: GraphData[] = [];
  userStats = {} as UserStats;

  constructor(
    private authStateService: AuthStateService,
    private dataService: AdminHomeService
  ) {}

  userName = `${this.authStateService.getLoggedInUserProperty(
    'lastName'
  )} ${this.authStateService.getLoggedInUserProperty('firstName')}`;

  ngOnInit() {
    this.loadDashboardDataSequentially();

    this.chartOptions = {
      chart: {
        type: 'column',
        style: {
          fontFamily: 'inherit',
        },
        spacing: [10, 10, 15, 10],
      },
      title: {
        text: null,
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar'],
        lineColor: 'var(--border-color)',
        tickColor: 'var(--border-color)',
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
        gridLineColor: 'var(--border-color)',
        gridLineDashStyle: 'Dash',
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
        backgroundColor: 'var(--surface-overlay)',
        borderColor: 'var(--border-color)',
        borderRadius: 8,
        style: {
          color: 'var(--text-color)',
        },
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
          borderRadius: 4,
        },
        series: {
          color: 'var(--primary-color)',
        },
      },
      series: [
        {
          name: 'Transactions',
          type: 'column',
          data: [5, 10, 15],
        },
      ],
    };
  }

  loadDashboardDataSequentially(): void {
    this.dataService
      .getAdminDashboardStats()
      .pipe(
        tap((data) => this.handleDashboardStats(data)),
        mergeMap(() =>
          this.dataService
            .getAdminDashboardGraphData()
            .pipe(tap((data) => this.handleGraphData(data)))
        ),
        mergeMap(() =>
          this.dataService
            .getOverAllInvestmentStats(null)
            .pipe(tap((data) => this.showOverAllInvestmentStats(data)))
        )
      )
      .subscribe({
        next: () => console.log('All dashboard data loaded successfully'),
        error: (error) => {
          console.error('Error during dashboard data loading:', error);
        },
      });
  }

  handleDashboardStats(data: any) {
    this.dashboardStats = data;
    this.errorMessage = null;
  }

  handleGraphData(data: any) {
    const categories = data.transactionsGraphData.map(
      (item: any) => item.xAxis
    );
    const transactionsData = data.transactionsGraphData.map(
      (item: any) => item.yAxisValue
    );

    this.chartOptions.xAxis.categories = categories;
    this.chartOptions.series[0].data = transactionsData;
    this.updateColumnChartFlag = true;
  }

  showOverAllInvestmentStats(data: any) {
    if (data) this.userStats = data;
  }

  // Helper method to calculate progress bar width
  getProgressWidth(part: number, total: number): number {
    if (!part || !total) return 0;
    const percentage = (part / total) * 100;
    return Math.min(percentage, 100); // Cap at 100%
  }
}
