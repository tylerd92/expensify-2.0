import { useParams, Navigate } from "react-router-dom";
import { useExpenseStore } from "../store/expenseStore";
import EditExpense from "./EditExpense";

const EditExpensePage = () => {
  const { id } = useParams<{ id: string }>();
  const expenses = useExpenseStore((state) => state.expenses);
  const expense = expenses.find((e) => e.id === id);

  if (!expense) {
    return <Navigate to="/not-found" replace />;
  }

  return <EditExpense expense={expense} />;
};

export default EditExpensePage;
