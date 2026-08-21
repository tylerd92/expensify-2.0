import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";
import { useAuthStore } from "../store/authStore";
import { useExpenseStore } from "../store/expenseStore";
import type { Expense, ExpenseInput } from "../types/Expense";

type EditExpenseProps = {
  expense: Expense;
};

const EditExpense = (props: EditExpenseProps) => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const editExpense = useExpenseStore((state) => state.editExpense);
  const removeExpense = useExpenseStore((state) => state.removeExpense);
  const [error, setError] = useState("");

  const onSubmit = async (expense: ExpenseInput) => {
    if (!user?.uid) return;

    try {
      await editExpense(user.uid, props.expense.id, expense);
      navigate("/");
    } catch (e) {
      const message =
        e instanceof Error ? e.message : "Failed to update expense. Please try again.";
      setError(message);
    }
  };

  const onRemove = async () => {
    if (!user?.uid) return;

    const confirmed = window.confirm("Are you sure you want to remove this expense?");
    if (!confirmed) return;

    try {
      await removeExpense(user.uid, props.expense.id);
      navigate("/");
    } catch (e) {
      const message =
        e instanceof Error ? e.message : "Failed to remove expense. Please try again.";
      setError(message);
    }
  };

  return (
    <>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Edit Expense</h1>
        </div>
      </div>
      <div className='content-container'>
        {error && <p className='form__error'>{error}</p>}
        <ExpenseForm expense={props.expense} onSubmit={onSubmit} />
        <div>
          <button className='button button--secondary' onClick={onRemove}>
            Remove Expense
          </button>
        </div>
      </div>
    </>
  );
};

export default EditExpense;
