import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { ExpenseItemProps } from '../Expenses/ExpenseItem';
import { useState } from 'react';

type NewExpenseProps = {
  onAddExpenseHandler: (expense: ExpenseItemProps) => void;
};

const NewExpense = ({ onAddExpenseHandler }: NewExpenseProps) => {
  const [showForm, setShowForm] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData: ExpenseItemProps) => {
    const expenseData = {
      ...enteredExpenseData,
      key: Math.random().toString(),
    };

    console.log('From NewExpense.tsx');
    console.log(expenseData);
    onAddExpenseHandler(expenseData);
    onCancelHandler();
  };

  const onShowFormHandler = () => {
    setShowForm(true);
    console.log('Show.');
  };

  const onCancelHandler = () => {
    setShowForm(false);
    console.log('Canceled.');
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button type="button" onClick={onShowFormHandler}>
          Add New Expense
        </button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseDataHandler={onSaveExpenseDataHandler}
          onCancelHandler={onCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
