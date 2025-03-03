import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../../../core/services/expense.service';

@Component({
  selector: 'app-overall-summary',
  templateUrl: './overall-summary.component.html',
  styleUrls: ['./overall-summary.component.scss']
})
export class OverallSummaryComponent implements OnInit {
  summaryData: any = {};
  timeOptions: any[] = [{label : 'this year'}, { label: 'month' }, { label: 'year' }]
  timeFrame: string = "month";
  
  constructor(private expenseService: ExpenseService) {}
  
  ngOnInit(): void {
    this.loadSummaryData();
  }
  
  loadSummaryData(): void {
    this.expenseService.getDashboardStats().subscribe(stats => {
      this.summaryData = stats.ExpenseData
    });
  }
  
  onOptionSelect(selectedValue: string) {
    this.timeFrame = selectedValue;
  }
}