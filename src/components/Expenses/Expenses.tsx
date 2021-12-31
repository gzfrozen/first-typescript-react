import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { ExpenseItemProps } from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

type ExpensesProps = {
  expenses: ExpenseItemProps[];
};

const Expense = ({ expenses }: ExpensesProps) => {
  const [year, setYear] = useState('2022');

  const onFilterByYearHandler = (year: string) => {
    console.log('From Expenses.tsx');
    console.log(year);
    setYear(year);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          year={year}
          onFilterByYearHandler={onFilterByYearHandler}
        />
        <ExpensesChart filteredExpenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
