import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function InsightsCard() {
  const { transactions } = useContext(AppContext);

  const expenses = transactions.filter(t=>t.type==="expense");
  const max = expenses.reduce((p,c)=>p.amount>c.amount?p:c,{});

  return (
    <div className="bg-white p-4 shadow">
      <h2>Top Expense: {max.category}</h2>
      <p>₹{max.amount}</p>
    </div>
  );
}