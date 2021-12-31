import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { ExpenseItemProps } from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

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

  // let expensesContent = [<p>No expenses found.</p>];

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.key}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          year={year}
          onFilterByYearHandler={onFilterByYearHandler}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
