import React,{useState,useContext} from 'react'

import { GlobalContext } from '../Context/GlobalState';

const AddTransaction = () => {
  const [text,setText]= useState('');
  const [amount,setAccount]= useState(0);
  
  const  {addTransaction} = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction ={
      id:Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
   
  return (
    <>
      <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
           <div className="Text">
          <label htmlFor="text">Text</label>
          <input type="text" id="Text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
           </div>

        <div className="amount">
            <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>
             <input type="number" id="amount"  value={amount} onChange={(e) => setAccount(e.target.value)} placeholder="Enter amount..." />
        </div>

        <button className="btn">Add transaction</button>
      </form>
      
    </>
  )
}

export default AddTransaction
