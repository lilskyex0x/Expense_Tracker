import { useState } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseItem from "./components/ExpenseItem"

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses])
  };

  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              category={expense.category}
              date={expense.date} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
