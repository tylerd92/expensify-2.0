import ExpenseForm from "../components/ExpenseForm";
import type { ExpenseInput } from "../types/Expense";

const AddExpense = () => {
  const onSubmit = (expense: ExpenseInput) => {
    console.log("AddExpense -> onSubmit -> expense", expense);
  };

  return (
    <>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Add Expense</h1>
        </div>
      </div>
      <div className='content-container'>
        <ExpenseForm onSubmit={onSubmit} />
      </div>
    </>
  );
};

export default AddExpense;
