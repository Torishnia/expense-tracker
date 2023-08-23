import ExpenseItem from '../ExpenseItem/index';

import styles from './index.module.scss';

const ExpensesList = ({ items }) => {
  return (
    <ul className={styles.expenses_list}>
      {items.length === 0 ? (
        <h2 className={styles.expenses_list__fallback}>
          Found no expenses
        </h2>
      ) : (
        items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </ul>
  )
}

export default ExpensesList;
