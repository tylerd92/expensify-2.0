import type { Expense } from "../types/Expense";

type ExpenseListItemProps = {
  expense: Expense;
};

const ExpenseListItem = ({ expense }: ExpenseListItemProps) => {
  return (
    <>
      <div>
        <h3 className='list-item__title'>{expense.description}</h3>
        <span className='list-item__sub-title'>{expense.createdAt}</span>
      </div>
      <h3 className='list-item__data'>{expense.amount}</h3>
    </>
  );
};

export default ExpenseListItem;
