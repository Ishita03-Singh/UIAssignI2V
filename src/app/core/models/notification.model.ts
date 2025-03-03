export interface INotification {
    id: string;
    type: 'expense' | 'trip' | 'advance' | 'reimbursement';
    status: 'submitted' | 'approved' | 'rejected' | 'reimbursed';
    message: string;
    timestamp: Date;
    submittedBy?: string;
    amount?: number;
    icon?: string;
  }
  