import React, { useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate  from './ExpenseDate';
import Card from '../GenericUI/Card'
import ExpenseItemDesc from './ExpenseItemDesc';

const ExpenseItem = (expenseData) => {
    return (   
        <li>                    
            <Card className='expense-item'>
                <ExpenseDate date={expenseData.date}/>
                <ExpenseItemDesc className='expense-item__description'>
                    <h2>{expenseData.title}</h2>
                    <div className='expense-item__price'>
                        {`$${expenseData.amount}`}
                    </div>
                </ExpenseItemDesc>
            </Card>
        </li> 

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