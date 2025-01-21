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

        this.chartOptions = {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Users vs Transactions'
            },
            xAxis: {
                categories: ['as', 'bc', 'de']
            },
            yAxis: [
                {
                    title: { text: 'Users' },
                    opposite: false
                },
                {
                    title: { text: 'Transactions' },
                    opposite: true,
                    min: 0
                }
            ],
            series: [
                {
                    name: 'Users',
                    type: 'line',
                    // data: [1, 2, 3],
                    yAxis: 0
                },
                {
                    name: 'Transactions',
                    type: 'column',
                    // data: [1, 2, 3],
                    yAxis: 1
                }
            ],
            tooltip: {
                shared: true
            }
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
                this.transactionsGraphData = data.transactions; // Data for transactions
                this.usersGraphData = data.users; // Data for users
                const categories = this.transactionsGraphData.map(item => item.xAxis);
                const usersData = this.usersGraphData.map(item => item.yAxisValue);
                const transactionsData = this.transactionsGraphData.map(item => item.yAxisValue);
                console.log(usersData);
                console.log(categories);
                console.log(transactionsData);
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
}