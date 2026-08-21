import { Link } from "react-router-dom";

type ExpenseSummaryProps = {
  expenseCount: number;
  expensesTotal: string;
};

const ExpenseSummary = ({
  expenseCount,
  expensesTotal,
}: ExpenseSummaryProps) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totalling{" "}
          <span>{expensesTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;
