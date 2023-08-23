import { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 0,
    title: 'Car Insurance',
    amount: 228.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 1,
    title: 'Billing',
    amount: 400,
    date: new Date(2023, 7, 14),
  },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
   setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
   })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
