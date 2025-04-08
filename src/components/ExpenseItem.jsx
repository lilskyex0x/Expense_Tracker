const ExpenseItem = ({ title, amount, date, category }) => {
    return (
        <div className="expense-item">
            <div>
                <strong>{title}</strong> <span>({category})
                </span>
            </div>
            <div>${amount}</div>
            <div>{date}</div>
        </div>
    );
};

export default ExpenseItem;