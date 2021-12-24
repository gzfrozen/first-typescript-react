import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';

type ExpensesProps = {
  expenses: { id: string; title: string; amount: number; date: Date }[];
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
        <ExpenseItem
          id={expenses[0].id}
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          id={expenses[1].id}
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          id={expenses[2].id}
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          id={expenses[3].id}
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expense;
