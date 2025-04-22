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

  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth();

  const monthlyExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return (
      expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear
    )
  });

  const monthlyTotal = monthlyExpenses.reduce((sum, exp) => sum + exp.amount, 0);


  const today = new Date().toISOString().split("T")[0]; const todaysExpenses = expenses.filter(expense => expense.date === today);
  const todayTotal = todaysExpenses.reduce((acc, e) => acc + e.amount, 0);


  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses])
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  };

  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  console.log(localStorage)

  return (
    <>
      <h1>Expense Tracker</h1>
      <h2>Today's Total: ${todayTotal.toFixed(2)}</h2>
      <h3>Total: ${total.toFixed(2)}</h3>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <ExpenseItem
              onDelete={handleDeleteExpense}
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              category={expense.category}
              date={expense.date} />
          </li>
        ))}
      </ul>
      <h2>This Month's Total: ${monthlyTotal.toFixed(2)}</h2>
    </>
  )
}

export default App
