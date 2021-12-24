import { ChangeEventHandler, useState } from 'react';
import './ExpensesFilter.css';

type ExpensesFilterProps = {
  onFilterByYearHandler: (year: string) => void;
};

const ExpensesFilter = ({ onFilterByYearHandler }: ExpensesFilterProps) => {
  const [year, setYear] = useState('');

  const selectYearHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setYear(event.target.value);
    console.log('From ExpensesFilter.tsx');
    console.log(year);
    onFilterByYearHandler(year);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={year} onChange={selectYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
