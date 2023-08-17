import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
    </div>
  );
}

export default App;
