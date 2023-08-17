import ExpenseItem from '../ExpenseItem/index';

import styles from './index.module.scss';

function Expenses ({ items }) {
  return (
    <div className={styles.expenses}>
      <ExpenseItem 
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem 
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
    </div>
  )
}

export default Expenses;
