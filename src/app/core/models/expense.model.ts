export interface IExpense {
    id: string;
    userId: string;
    amount: number;
    status: 'pending' | 'approved' | 'rejected';
    type: 'expense' | 'advance';
    date: Date;
    description?: string;
  }