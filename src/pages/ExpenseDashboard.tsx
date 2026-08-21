import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { useExpenseStore } from "../store/expenseStore";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "../components/ExpenseList";

const formatCurrency = (amount: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount / 100);

const ExpenseDashboard = () => {
  const user = useAuthStore((state) => state.user);
  const { expenses, isLoading, subscribe } = useExpenseStore();

  useEffect(() => {
    if (!user?.uid) return;
    const unsubscribe = subscribe(user.uid);
    return unsubscribe;
  }, [user?.uid, subscribe]);

  if (isLoading) {
    return (
      <div className="content-container">
        <p>Loading expenses...</p>
      </div>
    );
  }

  const expenseCount = expenses.length;
  const expensesTotal = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <>
      <ExpenseSummary
        expenseCount={expenseCount}
        expensesTotal={formatCurrency(expensesTotal)}
      />
      <ExpenseList expenses={expenses} />
    </>
  );
};

export default ExpenseDashboard;
