import ExpenseForm from "../components/ExpenseForm";

const AddExpense = () => {
  const onSubmit = (expense: any) => {
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
