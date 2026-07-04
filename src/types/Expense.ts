type ExpenseInput = {
  description: string;
  amount: number;
  note: string;
  createdAt: number | null;
};

type Expense = ExpenseInput & {
  id: string;
};

export type { Expense, ExpenseInput };
