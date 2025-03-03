import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../../../core/services/expense.service';
import { IUser } from '../../../../core/models/user.model';

@Component({
  selector: 'app-top-violators',
  templateUrl: './top-violators.component.html',
  styleUrls: ['./top-violators.component.scss']
})
export class TopViolatorsComponent implements OnInit {
  topViolators: IUser[] = [];
  timeOptions: any[] = [{label : 'this year'}, { label: 'month' }, { label: 'year' }]
  timeFrame: string = "month";

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.loadTopViolators();
  }

  loadTopViolators(): void {
    this.expenseService.getTopViolators().subscribe(users => {
      this.topViolators = users;
    });
  }

  onOptionSelect(selectedValue: string) {
    this.timeFrame = selectedValue;
  }
}