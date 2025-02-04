import { Component, OnInit } from '@angular/core';
import { UserTransaction } from '../models/user-transaction.model';
import { AuthStateService } from '../shared/services/auth-state.service';
import { ToastrService } from 'ngx-toastr';
import { UserDashboardService } from './user-dashboard.service';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent implements OnInit {

  Highcharts = Highcharts;
  pieChartOptions: any;
  updatePieChartFlag = false;

  userTransactions: UserTransaction[];
  userName = '';
  userId: string | undefined = '';

  constructor(private authStateService: AuthStateService, private toastr: ToastrService,
    private dataService: UserDashboardService) {
    // Define Highcharts options
    this.pieChartOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Investment Distribution By Portfolio'
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
          data: [10, 20, 30]
        }
      ]
    };
  }

  ngOnInit() {
    this.userName = `${this.authStateService.getLoggedInUserProperty('lastName')} ${this.authStateService.getLoggedInUserProperty('firstName')}`;
    this.userId = this.authStateService.getLoggedInUserProperty('userId');
    if (this.userId) {
      this.dataService.getUserTransactions(this.userId).subscribe((res: any) => {
        this.userTransactions = res;
      });
    }

  }

}
