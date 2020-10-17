import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md"
const ExpenseItem = ({ item, deleteItems, editItem }) => {
    const { id, film, price } = item
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{film}</span>
                <span className="amount">${price}</span>
            </div>
            <div>
                <button className="edit-btn" aria-label="edit-button" onClick={() => editItem(id)}><MdEdit /></button>
                <button className="clear-btn" aria-label="delete-button" onClick={() => deleteItems(id)}><MdDelete /></button>
            </div>
        </li>
    )
}
export default ExpenseItem