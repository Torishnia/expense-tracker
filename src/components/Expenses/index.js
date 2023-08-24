import { useState } from 'react';
import Card from '../Card';
import ExpensesFilter from '../ExpensesFilter';
import ExpensesList from '../ExpensesList';

import styles from './index.module.scss';
import ExpensesChart from '../ExpensesChart';


function Expenses ({ items }) {
  const [filteredYear, setFilteredYear] = useState('2023');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className={styles.expenses}>
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler} 
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses;
