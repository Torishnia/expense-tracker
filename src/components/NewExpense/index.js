import ExpenseForm from '../ExpenseForm';
import styles from './index.module.scss';

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    onAddExpense(expenseData);
  }

  return (
    <div className={styles.new_expense}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense;