import { ChangeEventHandler } from 'react';
import './ExpensesFilter.css';

type ExpensesFilterProps = {
  year: string;
  onFilterByYearHandler: (year: string) => void;
};

const ExpensesFilter = ({
  year,
  onFilterByYearHandler,
}: ExpensesFilterProps) => {
  const selectYearHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    console.log('From ExpensesFilter.tsx');
    console.log(event.target.value);
    onFilterByYearHandler(event.target.value);
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
