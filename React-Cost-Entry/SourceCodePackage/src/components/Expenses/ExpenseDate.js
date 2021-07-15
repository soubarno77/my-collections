import './ExpenseDate.css'

const ExpenseDate = (expenseData) => {
    const month = expenseData.date.toLocaleString('en-US',{month: 'long'})
    const day = expenseData.date.toLocaleString('en-US',{day: '2-digit'})
    const year = expenseData.date.getFullYear()

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate