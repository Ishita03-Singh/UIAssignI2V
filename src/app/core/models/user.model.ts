export interface IUser {
    id: string;
    name: string;
    position: string;
    email: string;
    avatar: string;
    department?: string;
    totalExpenses?: number;
    expenseCount?: number;
  }