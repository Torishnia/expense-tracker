import ExpenseDate from '../ExpenseDate';

import styles from './index.module.scss';

function ExpenseItem ({ title, date, amount }) {
  return (
    <div className={styles.expense_item}>
      <ExpenseDate date={date}/>
      <div className={styles.expense_item__description}>
        <h2>{title}</h2>
        <div className={styles.expense_item__price}>${amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;
