import { Link } from "react-router-dom";
import type { Expense } from "../types/Expense";

type ExpenseListItemProps = {
  expense: Expense;
};

const ExpenseListItem = ({ expense }: ExpenseListItemProps) => {
  return (
    <Link className="list-item" to={`/edit/${expense.id}`}>
      <div>
        <h3 className="list-item__title">{expense.description}</h3>
        <span className="list-item__sub-title">
          {expense.createdAt
            ? new Date(expense.createdAt).toLocaleDateString()
            : ""}
        </span>
      </div>
      <h3 className="list-item__data">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(expense.amount / 100)}
      </h3>
    </Link>
  );
};

export default ExpenseListItem;
