import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("dashboard");

  const [transactions, setTransactions] = useState([
    { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
    { id: 2, date: "2026-04-02", amount: 2000, category: "Food", type: "expense" },
  ]);

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const addTransaction = (e) => {
    e.preventDefault();
    if (!form.amount || !form.category || !form.date) return;

    setTransactions([
      ...transactions,
      { ...form, id: Date.now(), amount: Number(form.amount) },
    ]);

    setForm({ date: "", amount: "", category: "", type: "expense" });
  };

  const income = transactions.filter(t => t.type === "income").reduce((a,b)=>a+b.amount,0);
  const expense = transactions.filter(t => t.type === "expense").reduce((a,b)=>a+b.amount,0);

  const maxExpense = transactions
    .filter(t => t.type === "expense")
    .sort((a,b)=>b.amount-a.amount)[0];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-[#0f172a] text-white p-5 flex flex-col">
        <h1 className="text-xl font-bold mb-6">💰 FinTrack</h1>

        <button onClick={()=>setPage("dashboard")} className="mb-2 hover:bg-gray-700 p-2 rounded">Dashboard</button>
        <button onClick={()=>setPage("transactions")} className="mb-2 hover:bg-gray-700 p-2 rounded">Transactions</button>
        <button onClick={()=>setPage("insights")} className="hover:bg-gray-700 p-2 rounded">Insights</button>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-6">

        {/* DASHBOARD */}
        {page === "dashboard" && (
          <>
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

            {/* CARDS */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded shadow">Balance: ₹{income - expense}</div>
              <div className="bg-white p-4 rounded shadow text-green-600">Income: ₹{income}</div>
              <div className="bg-white p-4 rounded shadow text-red-500">Expense: ₹{expense}</div>
            </div>

            {/* SIMPLE CHART (VISUAL STYLE) */}
            <div className="bg-white p-6 rounded shadow">
              <h3 className="mb-4 font-semibold">Spending Overview</h3>
              <div className="h-40 flex items-end gap-4">
                {transactions.map((t) => (
                  <div
                    key={t.id}
                    className="bg-blue-500 w-10"
                    style={{ height: `${t.amount / 50}px` }}
                  ></div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* TRANSACTIONS */}
        {page === "transactions" && (
          <>
            <h2 className="text-2xl font-bold mb-6">Transactions</h2>

            {/* FORM */}
            <form onSubmit={addTransaction} className="bg-white p-4 rounded shadow mb-6 grid grid-cols-4 gap-4">
              <input type="date" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} className="border p-2"/>
              <input type="number" placeholder="Amount" value={form.amount} onChange={e=>setForm({...form, amount:e.target.value})} className="border p-2"/>
              <input type="text" placeholder="Category" value={form.category} onChange={e=>setForm({...form, category:e.target.value})} className="border p-2"/>
              <select value={form.type} onChange={e=>setForm({...form, type:e.target.value})} className="border p-2">
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>

              <button className="col-span-4 bg-blue-600 text-white p-2 rounded">
                Add Transaction
              </button>
            </form>

            {/* TABLE */}
            <div className="bg-white rounded shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-2">Date</th>
                    <th className="p-2">Amount</th>
                    <th className="p-2">Category</th>
                    <th className="p-2">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map(t => (
                    <tr key={t.id} className="border-t text-center">
                      <td className="p-2">{t.date}</td>
                      <td className={`p-2 ${t.type==="income"?"text-green-600":"text-red-500"}`}>₹{t.amount}</td>
                      <td className="p-2">{t.category}</td>
                      <td className="p-2">{t.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* INSIGHTS */}
        {page === "insights" && (
          <>
            <h2 className="text-2xl font-bold mb-6">Insights</h2>

            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600">Highest Expense Category:</p>
              <h3 className="text-xl font-bold text-red-500">
                {maxExpense ? `${maxExpense.category} (₹${maxExpense.amount})` : "No Data"}
              </h3>
            </div>
          </>
        )}

      </div>
    </div>
  );
}