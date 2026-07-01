import ExpenseForm from "../components/ExpenseForm";

type EditExpenseProps = {
  expense: {
    description: string;
    amount: number;
    note: string;
    createdAt: number | null;
  };
}

type Expense = {
  description: string;
  amount: number;
  note: string;
  createdAt: number | null;
};

const EditExpense = (props: EditExpenseProps) => {
  const onSubmit = (expense: Expense) => {
    console.log("EditExpense -> onSubmit -> expense", expense);
  };

  const onRemove = () => {
    console.log("EditExpense -> onRemove");
  };

  return (
    <>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Edit Expense</h1>
        </div>
      </div>
      <div className='content-container'>
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
