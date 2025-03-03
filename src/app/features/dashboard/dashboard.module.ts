import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { TopSpendersComponent } from './components/top-spenders/top-spenders.component';
import { TopViolatorsComponent } from './components/top-violators/top-violators.component';
import { OverallSummaryComponent } from './components/overall-summary/overall-summary.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    StatsCardComponent,
    TopSpendersComponent,
    TopViolatorsComponent,
    OverallSummaryComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
