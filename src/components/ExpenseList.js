import React from 'react'
import ExpenseItem from "./ExpenseItem"
import { MdDelete } from "react-icons/md"
const ExpenseList = ({ expense, clearAll, deleteItems, editItem }) => {


    return (
        <>
            <ul className="list">
                {expense.map((item) => { return <ExpenseItem key={item.id} item={item} deleteItems={deleteItems} editItem={editItem} /> })}
            </ul>
            {expense.length > 0 && <button className="btn" onClick={clearAll}> clear all <MdDelete className="btn-icon" /></button>}
        </>
    )
}

export default ExpenseList
