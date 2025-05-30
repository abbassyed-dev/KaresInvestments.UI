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
  investmentChartOptions!: any;
  dividendChartOptions!: any;
  dashboardStats: DashboardStats = {} as DashboardStats;
  errorMessage: string | null = null;
  transactionsGraphData: GraphData[] = [];
  usersGraphData: GraphData[] = [];
  userStats = {} as UserStats;

  constructor(
    private authStateService: AuthStateService,
    private dataService: AdminHomeService
  ) { }

  userName = `${this.authStateService.getLoggedInUserProperty(
    'lastName'
  )} ${this.authStateService.getLoggedInUserProperty('firstName')}`;

  ngOnInit() {
    this.loadDashboardDataSequentially();

    this.investmentChartOptions = {
      chart: { type: 'column' },
      title: { text: 'Investments Trend' },
      xAxis: {},
      yAxis: [{
        title: { text: 'Investment Amount' },
      }],
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        valueDecimals: 2
      },
      series: [
        {
          name: 'Investment',
          type: 'column',
          color: '#90ed7d',
          tooltip: {
            valuePrefix: '$'
          }
        },
      ]
    };

    this.dividendChartOptions = {
      chart: { type: 'column' },
      title: { text: 'Dividends Distribution Trend' },
      xAxis: {},
      yAxis: [{
        title: { text: 'Dividends Amount' },
      }],
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        valueDecimals: 2
      },
      series: [
        {
          name: 'Dividends',
          type: 'column',
          color: '#f7a35c',
          tooltip: {
            valuePrefix: '$'
          }
        },
      ]
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

    const categories = data.transactionsGraphData.map((d: any) => d.xAxis);
    const transactionCounts = data.transactionsGraphData.map((d: any) => d.transactionCount);
    const investmentAmounts = data.transactionsGraphData.map((d: any) => d.investmentAmount);
    const dividendAmounts = data.transactionsGraphData.map((d: any) => d.dividendAmount);

    console.log('Categories:', categories);
    console.log('Investment Amounts:', investmentAmounts);
    console.log('Dividend Amounts:', dividendAmounts);

    this.investmentChartOptions.xAxis.categories = categories;
    this.dividendChartOptions.xAxis.categories = categories;
    // this.chartOptions.series[0].data = transactionCounts;
    this.investmentChartOptions.series[0].data = investmentAmounts;
    this.dividendChartOptions.series[0].data = dividendAmounts;
    setTimeout(() => {
      this.updateColumnChartFlag = true;
    }, 0);
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
