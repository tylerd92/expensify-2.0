import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";
import { useAuthStore } from "../store/authStore";
import { useExpenseStore } from "../store/expenseStore";
import type { ExpenseInput } from "../types/Expense";

const AddExpense = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const addExpense = useExpenseStore((state) => state.addExpense);
  const [error, setError] = useState("");

  const onSubmit = async (expense: ExpenseInput) => {
    if (!user?.uid) return;

    try {
      await addExpense(user.uid, expense);
      navigate("/");
    } catch (e) {
      const message =
        e instanceof Error ? e.message : "Failed to add expense. Please try again.";
      setError(message);
    }
  };

  return (
    <>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Add Expense</h1>
        </div>
      </div>
      <div className='content-container'>
        {error && <p className='form__error'>{error}</p>}
        <ExpenseForm onSubmit={onSubmit} />
      </div>
    </>
  );
};

export default AddExpense;
