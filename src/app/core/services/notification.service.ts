import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INotification } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private mockNotifications: INotification[] = [
    {
      id: '1',
      type: 'expense',
      status: 'submitted',
      message: 'An expense report Job has been submitted by Karen kapoor for approval.',
      timestamp: new Date('2022-06-14T05:54:00'),
      submittedBy: 'Karen Kapoor'
    },
    {
      id: '2',
      type: 'expense',
      status: 'approved',
      message: 'Your claim for reimbursement for the expense report Job has been approved.',
      timestamp: new Date('2022-06-14T05:54:00')
    },
    {
      id: '3',
      type: 'expense',
      status: 'approved',
      message: 'Your claim for reimbursement for the expense report June to July has been approved.',
      timestamp: new Date('2022-06-14T05:54:00')
    },
    {
      id: '4',
      type: 'expense',
      status: 'rejected',
      message: 'Your claim for reimbursement for the expense report June to July has been rejected.',
      timestamp: new Date('2022-06-14T05:54:00')
    },
    {
      id: '5',
      type: 'expense',
      status: 'submitted',
      message: 'An expense report Job has been submitted by Karen kapoor for approval.',
      timestamp: new Date('2022-06-14T05:54:00'),
      submittedBy: 'Karen Kapoor'
    },
    {
      id: '6',
      type: 'expense',
      status: 'approved',
      message: 'Your claim for reimbursement for the expense report Job has been approved.',
      timestamp: new Date('2022-06-14T05:54:00')
    },
    {
      id: '7',
      type: 'expense',
      status: 'approved',
      message: 'Your claim for reimbursement for the expense report June to July has been approved.',
      timestamp: new Date('2022-06-14T05:54:00')
    },
    {
      id: '8',
      type: 'expense',
      status: 'rejected',
      message: 'Your claim for reimbursement for the expense report June to July has been rejected.',
      timestamp: new Date('2022-06-14T05:54:00')
    },
    // Add more mock notifications here
  ];

  getNotifications(): Observable<INotification[]> {
    return of(this.mockNotifications);
  }
  
  getUnreadCount(): Observable<number> {
    return of(5); // Mock value
  }
}