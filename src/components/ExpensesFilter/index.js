import React from 'react';

import styles from './index.module.scss';

const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  }

  return (
    <div className={styles.expenses_filter}>
      <div className={styles.expenses_filter__control}>
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value='2026'>2026</option>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
