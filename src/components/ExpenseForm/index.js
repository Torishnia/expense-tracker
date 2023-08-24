import { useState } from 'react';
import styles from './index.module.scss';

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title') {
      setEnteredTitle(value);
    } if (identifier === 'amount') {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.new_expense__controls}>
        <div className={styles.new_expense__control}>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={(event) =>
              inputChangeHandler('title', event.target.value)
            }
          />
        </div>
        <div className={styles.new_expense__control}>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={(event) =>
              inputChangeHandler('amount', event.target.value)
            }
          />
        </div>
        <div className={styles.new_expense__control}>
          <label>Date</label>
          <input
            type='date'
            min='2023-01-01'
            max='2026-12-31'
            value={enteredDate}
            onChange={(event) =>
              inputChangeHandler('date', event.target.value)
            }
          />
        </div>
      </div>
      <div className={styles.new_expense__actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
