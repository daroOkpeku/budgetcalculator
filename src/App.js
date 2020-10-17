import React, { useState, useEffect } from 'react';
import './App.css';
import ExpenseList from "./components/ExpenseList";
import Expense from "./components/Expense";
import Alert from "./components/Alert";
import { uuid } from 'uuidv4';
/** const Amount = [
  { id: uuid(), film: 'joker', price: 3000 },
  { id: uuid(), film: 'mission impossible', price: 4000 },
  { id: uuid(), film: 'enola', price: 5000 },
  { id: uuid(), film: 'flash', price: 6000 }

]
*/

let Amount = localStorage.getItem('Amount') ? JSON.parse(localStorage.getItem('Amount')) : []


function App() {
  /**i used hook here expense in the array contains all the item of amount and setexpense is a function */
  const [expense, setexpense] = useState(Amount);

  /**********************single expense******************************/
  const [charge, setCharge] = useState('');

  /**********************single amount******************************/
  const [amount, setAmount] = useState('');
  //alert
  const [alert, setAlert] = useState({ show: false });

  //edit
  const [edit, setEdit] = useState(false);
  //edit item
  const [id, setId] = useState(0)
  /**********************state values******************************/
  useEffect(() => {
    console.log('useEffect');
    localStorage.setItem("Amount", JSON.stringify(expense));
  }, [expense]);

  /**********************use Effect******************************/

  /**********************functionality******************************/
  const handleCharge = (e) => {
    setCharge(e.target.value)
    // console.log(`charge: ${e.target.value}`)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
    // console.log(`amount: ${e.target.value}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {

      if (edit) {
        let editItem = expense.map((item) => {
          return item.id === id ? { ...item, film: charge, price: amount } : item
        });
        setexpense(editItem);
        setEdit(false);
        handleAlert({ type: "success", text: "item edited" })
      } else {
        let input = { id: uuid(), film: charge, price: amount }
        setexpense([...expense, input]);
        handleAlert({ type: "success", text: "item added" })
      }


      setAmount("");
      setCharge("");
    } else {
      handleAlert({ type: "danger", text: `please insert a value` })
    }

  }
  //handleAlert to display alert success or danger
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false })
    }, 4500)
  }

  //clear all
  const clearAll = () => {
    console.log("all items has been removed");
    setexpense([]);
    handleAlert({ type: "danger", text: "all item removed" })
  }
  const deleteItems = (id) => {
    /// console.log(`this item has been removed ${id}`)
    const tempItems = expense.filter((item) => item.id !== id);
    setexpense([...tempItems])
    handleAlert({ type: "danger", text: "item removed" })
    console.log(tempItems)
  }
  const editItem = (id) => {
    let editOne = expense.find((item) => item.id === id);

    let { film, price } = editOne

    setAmount(price);
    setCharge(film);
    setEdit(true);
    setId(id);
  }
  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <h1>Budget Calculator</h1>
      <main className="App">
        <Expense charge={charge} amount={amount} handleAmount={handleAmount} handleCharge={handleCharge} handleSubmit={handleSubmit} edit={edit} />
        <ExpenseList expense={expense} clearAll={clearAll} deleteItems={deleteItems} editItem={editItem} />
      </main>

      <h1>
        Total spending:{""}<span className="total">
          ${expense.reduce((total, single) => {
        return (total += parseInt(single.price))
      }, 0)}
        </span>
      </h1>

    </div>
  );
}

export default App;
