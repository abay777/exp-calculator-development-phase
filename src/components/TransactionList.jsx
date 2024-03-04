import { Transaction } from './Transaction';
import { GlobalContext } from "../context/Globalstate" 
import { useContext } from "react";

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);  
      return (
     <>
      <h3>History</h3>
    <ul className="list">
      {transactions.map(transaction => {
        return(
        <Transaction key={transaction.id} transaction={transaction}   />

      )})} 
    </ul>
     </>
  )
}

export default TransactionList