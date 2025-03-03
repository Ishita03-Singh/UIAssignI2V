import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../../../core/services/expense.service';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit {
  dashboardStats: any = {};
  
  constructor(private expenseService: ExpenseService) {}
  
  ngOnInit(): void {
    this.expenseService.getDashboardStats().subscribe(stats => {
      this.dashboardStats = stats.ReimbursementData;
    });
  }
}