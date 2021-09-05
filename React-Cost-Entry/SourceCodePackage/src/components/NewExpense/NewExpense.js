import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import './ExpenseForm.css'

const NewExpense = (prop) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpDataHandler = expData => {
        prop.onAddNewExp(expData)
        setIsEditing(false)
    }

    const cancelForm = _ => {
        setIsEditing(false)
    }

    const editFormHandler = _ => {
        setIsEditing(true)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button type="button" onClick={editFormHandler}>Add Expense</button>}
            { isEditing && <ExpenseForm onSaveExpData={saveExpDataHandler} onCancel = {cancelForm}/> }
        </div>
    )
}

export default NewExpense