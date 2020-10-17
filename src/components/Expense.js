import React from 'react'
import { MdSend } from "react-icons/md"
const Expense = (props) => {
    const { amount, charge, handleAmount, handleCharge, handleSubmit, edit } = props
    return (
        <form onSubmit={handleSubmit} >
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">charge</label>
                    <input type="text" className="form-control" id="charge" name="charge" placeholder="e.g. Phcn bill" value={charge} onChange={handleCharge} />
                </div>


                <div className="form-group">
                    <label htmlFor="amount">charge</label>
                    <input type="number" className="form-control" id="amount" name="amount" placeholder="e.g. 300" value={amount} onChange={handleAmount} />
                </div>
            </div>
            <button type="submit" className="btn">{edit ? 'edit' : 'submit'} <MdSend className="btn-icon" /></button>
        </form>
    )
}

export default Expense