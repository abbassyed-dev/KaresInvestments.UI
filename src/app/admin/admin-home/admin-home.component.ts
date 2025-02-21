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
    styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent implements OnInit {
    Highcharts = Highcharts;
    updateColumnChartFlag = false;
    // updatePieChartFlag = false;
    chartOptions: any;
    // pieChartOptions: any;
    dashboardStats: DashboardStats | null = null;
    errorMessage: string | null = null;
    transactionsGraphData: GraphData[] = [];
    usersGraphData: GraphData[] = [];
    userStats = {} as UserStats;


    constructor(private authStateService: AuthStateService, private dataService: AdminHomeService
    ) { }

    userName = `${this.authStateService.getLoggedInUserProperty('lastName')} ${this.authStateService.getLoggedInUserProperty('firstName')}`;

    ngOnInit() {
        this.loadDashboardDataSequentially();
        // this.getAdminDashboardData();
        // this.getAdminDashboardGraphData();
        // this.getAdminDashboardPieChartData();

        this.chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Transactions Trend'
            },
            xAxis: {
                categories: ['as', 'bc', 'de']
            },
            yAxis: [
                {
                    min: 0,
                    title: { text: '' },
                    // opposite: false
                },
                // {
                //     title: { text: 'Transactions' },
                //     opposite: true,
                //     min: 0
                // }
            ],
            series: [
                // {
                //     name: 'Users',
                //     type: 'column',
                // },
                {
                    name: 'Transactions',
                    type: 'column',
                    // data: [1, 2, 3],
                    // yAxis: 1
                }
            ],
            tooltip: {
                shared: true
            }
        };

        // Define Highcharts options
        // this.pieChartOptions = {
        //     chart: {
        //         type: 'pie'
        //     },
        //     title: {
        //         text: 'Investment Distribution by Portfolio'
        //     },
        //     tooltip: {
        //         pointFormat: '<b>{point.name}</b>: {point.y} ({point.percentage:.1f}%)'
        //     },
        //     plotOptions: {
        //         pie: {
        //             allowPointSelect: true,
        //             cursor: 'pointer',
        //             dataLabels: {
        //                 enabled: false,
        //                 format: '{point.name}: {point.y}'
        //             }
        //         }
        //     },
        //     series: [
        //         {
        //             type: 'pie',
        //             name: 'Investments',
        //             data: []
        //         }
        //     ]
        // };
    }

    loadDashboardDataSequentially(): void {
        this.dataService.getAdminDashboardStats()
            .pipe(
                tap((data) => this.handleDashboardStats(data)),
                mergeMap(() => this.dataService.getAdminDashboardGraphData().pipe(
                    tap((data) => this.handleGraphData(data))
                )),
                // mergeMap(() => this.dataService.getAdminDashboardPieChartData().pipe(
                //     tap((data) => this.handlePieChartData(data))
                // ))
                mergeMap(() => this.dataService.getOverAllInvestmentStats(null).pipe(
                    tap((data) => this.showOverAllInvestmentStats(data))
                ))
            )
            .subscribe({
                next: () => console.log('All dashboard data loaded successfully'),
                error: (error) => {
                    console.error('Error during dashboard data loading:', error);
                    // No need for specific handling here since it's done in the interceptor
                },
            });
    }

    handleDashboardStats(data: any) {
        this.dashboardStats = data;
        this.errorMessage = null;
    }

    handleGraphData(data: any) {
        const categories = data.transactionsGraphData.map((item: any) => item.xAxis);
        // const usersData = data.usersGraphData.map((item: any) => item.yAxisValue);
        const transactionsData = data.transactionsGraphData.map((item: any) => item.yAxisValue);

        this.chartOptions.xAxis.categories = categories;
        // this.chartOptions.series[0].data = usersData;
        this.chartOptions.series[0].data = transactionsData;
        this.updateColumnChartFlag = true;
    }

    // handlePieChartData(data: any) {
    //     const chartData = data.map((item: any) => ({
    //         name: item.portfolioName,
    //         y: item.amount,
    //     }));
    //     this.pieChartOptions.series[0].data = chartData;
    //     this.updatePieChartFlag = true;
    // }

    showOverAllInvestmentStats(data: any) {
        if (data)
            this.userStats = data;
    }
}