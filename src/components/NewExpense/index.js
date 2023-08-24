import { useState } from 'react';
import ExpenseForm from '../ExpenseForm';
import styles from './index.module.scss';

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);

  const addExpensesHandler = () => {
    setShowForm(true);
  }

  const stopAddExpensesHandler = () => {
    setShowForm(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    onAddExpense(expenseData);
    setShowForm(false);
  }

  return (
    <div className={styles.new_expense}>
      {showForm && 
        <ExpenseForm 
          onSaveExpenseData={saveExpenseDataHandler} 
          onCancel={stopAddExpensesHandler} 
        />
      }
      {!showForm && 
        <button onClick={addExpensesHandler}>
          Add New Expense
        </button>
      }
    </div>
  )
}

export default NewExpense;