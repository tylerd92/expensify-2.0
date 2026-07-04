import { useState } from "react";
import ExpenseSummary from "./ExpenseSummary";

const ExpenseDashboard = () => {
  const [expenseCount, setExpenseCount] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);

  return (
    <>
      <ExpenseSummary
        expenseCount={expenseCount}
        expensesTotal={expensesTotal}
      />
    </>
  );
};

export default ExpenseDashboard;
