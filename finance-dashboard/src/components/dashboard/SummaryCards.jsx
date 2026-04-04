import Card from "../common/Card";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function SummaryCards() {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a,b)=>a+b.amount,0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a,b)=>a+b.amount,0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white p-5 rounded-xl shadow border">
        <p className="text-gray-500 text-sm">Total Balance</p>
        <h2 className="text-2xl font-bold mt-2">₹{balance}</h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow border">
        <p className="text-gray-500 text-sm">Income</p>
        <h2 className="text-2xl font-bold mt-2 text-green-600">₹{income}</h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow border">
        <p className="text-gray-500 text-sm">Expenses</p>
        <h2 className="text-2xl font-bold mt-2 text-red-500">₹{expense}</h2>
      </div>

    </div>
  );
}   