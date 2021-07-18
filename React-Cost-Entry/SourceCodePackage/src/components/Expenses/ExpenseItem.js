import React, { useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate  from './ExpenseDate';
import Card from '../GenericUI/Card'
import ExpenseItemDesc from './ExpenseItemDesc';

const ExpenseItem = (expenseData) => {
    const [title, setTitle] = useState(expenseData.title)
    
    const postClickEvent = () => {
        setTitle('updated!')
    }

    return (                        // writing more complex JSX code(JSX - Javascript XML(HTML code inside a JS code))
        <Card className='expense-item'>
            <ExpenseDate date={expenseData.date}/>
            <ExpenseItemDesc className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>
                    {`$${expenseData.amount}`}
                </div>
            </ExpenseItemDesc>
            <button onClick={postClickEvent}>Click Me!</button>
        </Card>

        /* Below code was written in the olden days when Reatc projects were built*/
        /* It is equivalent to the JSX code we write today */

        // React.createElement(Card,{className : 'expense-item'},
        //             React.createElement(ExpenseDate,{date: expenseData.date}),
        //             React.createElement(ExpenseItemDesc,{className: 'expense-item__description'},
        //                     React.createElement('h2',{},expenseData.title)
        //             ),
        //             React.createElement('div',{className: 'expense-item__price'},'$' + expenseData.amount)
        // )
    );
}

export default ExpenseItem;