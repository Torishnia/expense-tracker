import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

function App() {
  const expenses = [
    {
      id: 0,
      title: 'Car Insurance',
      amount: 228.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 1,
      title: 'Billing',
      amount: 400,
      date: new Date(2020, 7, 14),
    },
  ]

  const addExpenseHandler = (expense) => {
    console.log('In a App');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
