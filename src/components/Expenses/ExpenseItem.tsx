import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

type ExpenseItemProps = {
  id: String;
  title: String;
  amount: Number;
  date: Date;
};

const ExpenseItem = ({ title, amount, date }: ExpenseItemProps) => {
  const [itemTitle, setItemTitle] = useState(title);

  const clickHandler = () => {
    setItemTitle('Updated!');
    console.log(itemTitle);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
