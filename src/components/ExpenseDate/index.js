import styles from './index.module.scss';

function ExpenseDate ({ date }) {
  const month = date.toLocaleString('en-Us', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleString('en-Us', { day: '2-digit' });

  return (
    <div className={styles.expense_date}>
      <div className={styles.expense_date__month}>{month}</div>
      <div className={styles.expense_date__year}>{year}</div>
      <div className={styles.expense_date__day}>{day}</div>
    </div>
  )
}

export default ExpenseDate;
