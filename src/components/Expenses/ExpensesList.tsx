import './ExpensesList.css';
import ExpenseItem, { ExpenseItemProps } from './ExpenseItem';

type ExpensesListProps = {
  filteredExpenses: ExpenseItemProps[];
};

const ExpensesList = ({ filteredExpenses }: ExpensesListProps) => {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.key}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
