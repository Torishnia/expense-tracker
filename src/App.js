import Expenses from './components/Expenses';

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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
