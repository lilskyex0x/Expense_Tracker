import { useState, useEffect } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseItem from "./components/ExpenseItem"

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      const parseJSON = JSON.parse(savedExpenses);
      return parseJSON
    } else {
      return []
    };
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses])
  };

  console.log(localStorage)

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
