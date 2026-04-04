import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import TransactionTable from "../components/transactions/TransactionTable";
import TransactionForm from "../components/transactions/TransactionForm";

export default function Transactions() {
  const { transactions, role } = useContext(AppContext);
  const [search, setSearch] = useState("");

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    
      <input
        placeholder="Search..."
        className="mb-4 p-2"
        onChange={(e)=>setSearch(e.target.value)}
      />

      {role === "admin" && <TransactionForm />}

      <TransactionTable data={filtered} />
    </>
  );
}