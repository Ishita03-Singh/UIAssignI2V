import { Component, Input } from '@angular/core';
import { IUser } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user!: IUser;
  @Input() showExpenseCount: boolean = false;
}
