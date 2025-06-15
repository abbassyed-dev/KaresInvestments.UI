import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout/service/app.layout.service';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  activeTabIndex = 0;
  userContext: User = {} as User;

  constructor(public layoutService: LayoutService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Admin Dashboard');
    this.route.queryParams.subscribe(params => {
      const tab = +params['tab'];
      if (!isNaN(tab)) {
        this.activeTabIndex = tab;
      }
    });
  }

  updateUserContext(user: User) {
    if (user) {
      this.userContext = user;
      console.log(this.userContext.userId, this.userContext.firstName);
      this.activeTabIndex = 2;
    }
  }

  handleChange(e: any) {
    const tabIndex = e.index;
    console.log('Index is :', e.index);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: tabIndex },
      queryParamsHandling: 'merge',
    });
    this.userContext = {} as User;
  }
}
