import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { expenseDataType } from './ExpenseForm';

type NewExpenseProps = {
  onAddExpenseHandler: (expense: expenseDataType) => void;
};

const NewExpense = ({ onAddExpenseHandler }: NewExpenseProps) => {
  const onSaveExpenseDataHandler = (enteredExpenseData: expenseDataType) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
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
