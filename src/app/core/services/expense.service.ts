import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IExpense } from '../models/expense.model';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  // Mock data for dashboard stats
  getDashboardStats(): Observable<any> {
    return of({
      ReimbursementData: {
        pendingReimbursements: {
          count: 75,
          trend: 35,
          icon: "assets/images/utility/TimerIcon.svg"
        },

        approvedReimbursements: {
          count: 478,
          trend: 15,
          icon: "assets/images/utility/ReimbursementIcon.svg"
        },
        advancesRequests: {
          count: 62,
          trend: -9,
          icon: "assets/images/utility/WalletIcon.svg",
        },
      },
      ExpenseData: [
        {
          title: "Total Expenses",
          value: 4352328,
          icon: "assets/images/utility/ExpensesIcon.svg"
        },
        {
          title: "Total Advances",
          value: 1295698,
          icon: "assets/images/utility/WalletIcon.svg"
        },
        {
          title: "Total Reimbursements",
          value: 2232510,
          icon: "assets/images/utility/ReimbursementIcon.svg"
        }
      ]
    });
  }

  // Get top spenders
  getTopSpendingUsers(): Observable<IUser[]> {
    return of([
      { id: '1', name: 'Karan Kapoor', position: 'Medical Assistant', email: 'karankapoor@email.com', avatar: 'assets/images/avatars/user1.jpg', totalExpenses: 99122 },
      { id: '2', name: 'Rupa Chandrasekhar', position: 'Medical Assistant', email: 'Rupa@email.com', avatar: 'assets/images/avatars/user2.jpg', totalExpenses: 89922 },
      { id: '3', name: 'Aarush Mishra', position: 'Marketing Coordinator', email: 'Aarush@email.com', avatar: 'assets/images/avatars/user3.jpg', totalExpenses: 72873 },
      { id: '4', name: 'Aarav Saxena', position: 'Web Designer', email: 'Aarav@email.com', avatar: 'assets/images/avatars/user4.jpg', totalExpenses: 62970 },
      { id: '5', name: 'Samesh Nanda', position: 'Medical Assistant', email: 'Samesh@email.com', avatar: 'assets/images/avatars/user5.jpg', totalExpenses: 54812 },
      { id: '6', name: 'Rohit Sharma', position: 'Nursing Assistant', email: 'Rohit@email.com', avatar: 'assets/images/avatars/user6.jpg', totalExpenses: 27637 },
      { id: '7', name: 'Bhargavi Mehta', position: 'President of Sales', email: 'Bhargavi@email.com', avatar: 'assets/images/avatars/user7.jpg', totalExpenses: 6956 },
      { id: '8', name: 'Divya Shah', position: 'Medical Assistant', email: 'Divya@email.com', avatar: 'assets/images/avatars/user8.jpg', totalExpenses: 3670 }
    ]);
  }

  // Get top policy violators
  getTopViolators(): Observable<IUser[]> {
    return of([
      { id: '6', name: 'Rohit Sharma', position: 'Nursing Assistant', email: 'Rohit@email.com', avatar: 'assets/images/avatars/user6.jpg', totalExpenses: 27637, expenseCount: 18 },
      { id: '7', name: 'Bhargavi Mehta', position: 'President of Sales', email: 'Bhargavi@email.com', avatar: 'assets/images/avatars/user7.jpg', totalExpenses: 6956, expenseCount: 16 },
      { id: '8', name: 'Divya Shah', position: 'Medical Assistant', email: 'Divya@email.com', avatar: 'assets/images/avatars/user8.jpg', totalExpenses: 3670, expenseCount: 13 },
      { id: '9', name: 'Kindasenkar Rajveer', position: 'Project Manager', email: 'Kindasenkar@email.com', avatar: 'assets/images/avatars/user9.jpg', totalExpenses: 2063, expenseCount: 12 }
    ]);
  }
}