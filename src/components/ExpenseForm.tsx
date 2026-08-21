import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import type { ExpenseInput } from "../types/Expense";

type ExpenseFormProps = {
  onSubmit: (expense: ExpenseInput) => void;
  expense?: ExpenseInput;
};

const ExpenseForm = ({ onSubmit, expense }: ExpenseFormProps) => {
  const [description, setDescription] = useState(
    expense ? expense.description : "",
  );
  const [amount, setAmount] = useState(
    expense ? (expense.amount / 100).toFixed(2) : "",
  );
  const [note, setNote] = useState(expense ? expense.note : "");
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    expense && expense.createdAt ? new Date(expense.createdAt) : new Date(),
  );
  const [error, setError] = useState("");

  const onSubmitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!description || !amount) {
      setError("Please provide description and amount.");
    } else {
      setError("");
      onSubmit({
        description,
        amount: Math.round(parseFloat(amount) * 100),
        note,
        createdAt: selectedDate ? selectedDate.getTime() : null,
      });
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='form'>
      {error && <p className='form__error'>{error}</p>}
      <input
        type='text'
        placeholder='Description'
        autoFocus
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type='text'
        placeholder='Amount'
        inputMode='decimal'
        value={amount}
        onChange={(e) => {
          const value = e.target.value;
          if (value === '' || /^\d+\.?\d{0,2}$/.test(value)) {
            setAmount(value);
          }
        }}
      />
      <textarea
        placeholder='Add a note for your expense (optional)'
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <DatePicker
        showIcon
        toggleCalendarOnIconClick
        selected={selectedDate}
        onChange={setSelectedDate}
        popperPlacement='bottom-start'
      />
      <button>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
