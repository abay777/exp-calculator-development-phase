import { GlobalContext } from "../context/Globalstate"
import { useContext } from "react"
const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const amount = transactions.map(transaction => transaction.amount)
  const total = amount.reduce((acc,item)=>{
    return acc += item
  },0).toFixed(2)
  return (
    <>
    <h4>Your Balance</h4>
    <h1 >	&#8377;{total}</h1>
    </>
  )
}

export default Balance