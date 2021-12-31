import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { ExpenseItemProps } from '../Expenses/ExpenseItem';

type NewExpenseProps = {
  onAddExpenseHandler: (expense: ExpenseItemProps) => void;
};

const NewExpense = ({ onAddExpenseHandler }: NewExpenseProps) => {
  const onSaveExpenseDataHandler = (enteredExpenseData: ExpenseItemProps) => {
    const expenseData = {
      ...enteredExpenseData,
      key: Math.random().toString(),
    };

    console.log('From NewExpense.txt');
    console.log(expenseData);
    onAddExpenseHandler(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDataHandler={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
