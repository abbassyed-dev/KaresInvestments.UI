import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { IdleTimeoutService } from './shared/services/idle-timeout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'KaresInvestments.UI';

  constructor(private primengConfig: PrimeNGConfig, private idleService: IdleTimeoutService) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.idleService.startWatching();
  }

  ngOnDestroy(): void {
    this.idleService.stopWatching();
  }
}
