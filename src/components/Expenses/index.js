import { useState } from 'react';
import Card from '../Card';
import ExpensesFilter from '../ExpensesFilter';
import ExpenseItem from '../ExpenseItem/index';

import styles from './index.module.scss';

function Expenses ({ items }) {
  const [filteredYear, setFilteredYear] = useState(2023);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className={styles.expenses}>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses;
