import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../../shared/services/auth-state.service';
import { AdminHomeService } from './admin-home.service';
import { DashboardStats } from '../../models/dashboard-stats.model';
import * as Highcharts from 'highcharts';
import { GraphData } from '../../models/graph-data.model';

@Component({
    selector: 'app-admin-home',
    templateUrl: './admin-home.component.html',
    styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent implements OnInit {
    Highcharts = Highcharts;
    updateFlag = false;
    chartOptions: any;
    pieChartOptions: any;
    dashboardStats: DashboardStats | null = null;
    errorMessage: string | null = null;
    transactionsGraphData: GraphData[] = [];
    usersGraphData: GraphData[] = [];


    constructor(private authStateService: AuthStateService, private dataService: AdminHomeService
    ) { }

    userName = `${this.authStateService.getLoggedInUserProperty('lastName')} ${this.authStateService.getLoggedInUserProperty('firstName')}`;

    ngOnInit() {
        this.getAdminDashboardData();
        this.getAdminDashboardGraphData();
        this.getAdminDashboardPieChartData();

        this.chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Users & Transactions Trend'
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
                {
                    name: 'Users',
                    type: 'column',
                    // data: [1, 2, 3],
                    // yAxis: 0
                },
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
        this.pieChartOptions = {
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Investment Distribution by Portfolio'
            },
            tooltip: {
                pointFormat: '<b>{point.name}</b>: {point.y} ({point.percentage:.1f}%)'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                        format: '{point.name}: {point.y}'
                    }
                }
            },
            series: [
                {
                    type: 'pie',
                    name: 'Investments',
                    data: []
                }
            ]
        };
    }

    getAdminDashboardData() {
        this.dataService.getAdminDashboardStats().subscribe({
            next: (data) => {
                this.dashboardStats = data;
                this.errorMessage = null;
            },
            error: (err) => {
                console.error('Error fetching user statistics', err);
                this.errorMessage = 'Failed to load dashboard statistics';
            },
        });
    }

    getAdminDashboardGraphData(): void {
        this.dataService.getAdminDashboardGraphData().subscribe({
            next: (data: any) => {
                this.transactionsGraphData = data.transactionsGraphData; // Data for transactions
                this.usersGraphData = data.usersGraphData; // Data for users
                const categories = this.transactionsGraphData.map(item => item.xAxis);
                const usersData = this.usersGraphData.map(item => item.yAxisValue);
                const transactionsData = this.transactionsGraphData.map(item => item.yAxisValue);
                // Update chart options
                this.chartOptions.xAxis.categories = categories;
                this.chartOptions.series[0].data = usersData;
                this.chartOptions.series[1].data = transactionsData;
                this.updateFlag = true;
            },
            error: (error) => {
                console.error('Error fetching data:', error);
            },
        });
    }

    getAdminDashboardPieChartData(): void {
        this.dataService.getAdminDashboardPieChartData().subscribe({
            next: (data: any) => {
                console.log(data);
                const chartData = data.map((item: any) => ({
                    name: item.portfolioName,
                    y: item.amount
                }));
                console.log('chartData', chartData);
                // Update chart options
                this.pieChartOptions.series[0].data = chartData;
                this.updateFlag = true;
            },
            error: (error) => {
                console.error('Error fetching data:', error);
            },
        });
    }
}