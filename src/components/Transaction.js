import React,{useContext} from 'react'
import Transac from './Transac';
import { GlobalContext } from '../Context/GlobalState'

const Transaction = () => {
  const {transactions} = useContext(GlobalContext);
  
  return (
    <>
      <ul className="list">
        {transactions.map(transaction =>( <Transac key ={transaction.id} transaction={transaction} /> ))}
      </ul>
 
    </>
  )
}

export default Transaction
