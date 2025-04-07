import { useState } from "react";

const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
};

function ExpenseForm() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newExpense = {
            id: generateId(),
            title,
            amount: parseFloat(amount),
            category,
            date,
        };

        console.log(newExpense);

        setTitle('');
        setAmount('');
        setDate('');
        setCategory('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title" />
            <input
                type="number"
                name="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} />
            <input
                type="date"
                name="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)} />
            <select
                value={category}
                name="Category"
                onChange={(e) => setCategory(e.target.value)} >
                <option value="" disabled>Select Category</option>
                <option value="food">Food</option>
                <option value="grocery">Grocery</option>
                <option value="transport">Transport</option>
                <option value="entertainment">Entertainment</option>
                <option value="other">Other</option>
            </select>
            <button type="submit">Add Expense</button>
        </form>
    )

}

export default ExpenseForm;