import { Component, Input } from '@angular/core';
import { INotification } from '../../../core/models/notification.model';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss']
})
export class NotificationComponent {
  @Input() notification!: INotification;
  
  getStatusIconClass(): string {
    switch (this.notification.status) {
      case 'approved':
        return 'text-primary bg-primary-light';
      case 'rejected':
        return 'text-danger bg-danger-light';
      case 'submitted':
        return 'text-info bg-info-light';
      case 'reimbursed':
        return 'text-success bg-success-light';
      default:
        return 'text-secondary bg-secondary-light';
    }
  }

  getStatusIcon(): string {
    switch (this.notification.status) {
      case 'approved':
        return 'check-circle';
      case 'rejected':
        return 'x-circle';
      case 'submitted':
        return 'file-text';
      case 'reimbursed':
        return 'dollar-sign';
      default:
        return 'info';
    }
  }
}