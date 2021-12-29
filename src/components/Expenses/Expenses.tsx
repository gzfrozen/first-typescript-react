import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem, { ExpenseItemProps } from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';

type ExpensesProps = {
  expenses: ExpenseItemProps[];
};

const Expense = ({ expenses }: ExpensesProps) => {
  const [year, setYear] = useState('');

  const onFilterByYearHandler = (year: string) => {
    console.log('From Expenses.tsx');
    console.log(year);
    setYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          year={year}
          onFilterByYearHandler={onFilterByYearHandler}
        />
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.key}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expense;
