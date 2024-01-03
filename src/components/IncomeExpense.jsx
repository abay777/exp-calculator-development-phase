import { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";

const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext);

  const amount = transactions.map(transaction => transaction.amount);
  
  const income = amount.filter(item => item>0)
  .reduce((acc,item)=> acc+=item ,0)
  .toFixed(2)
  
  const expense = amount.filter(item => item<0)
  .reduce((acc,item)=>acc += item,0)
  .toFixed(2)

  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p  className="money plus">+ &#8377;{income}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p  className="money minus">- &#8377;{Math.abs(expense)}</p>
    </div>
  </div>
  )
}

export default IncomeExpense