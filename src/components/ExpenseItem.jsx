const ExpenseItem = ({ title, amount, date, category, id, onDelete }) => {
    const deleteExpense = () => {
        onDelete(id);
    }
    return (
        <div className="expense-item">
            <div>
                <strong>{title}</strong> <span>({category})
                </span>
            </div>
            <div>${amount}</div>
            <div>{date}</div>
            <button onClick={deleteExpense}>Delete</button>
        </div>

    );
};

export default ExpenseItem;