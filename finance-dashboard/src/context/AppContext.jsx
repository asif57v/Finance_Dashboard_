import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
    { id: 2, date: "2026-04-02", amount: 2000, category: "Food", type: "expense" },
  ]);

  return (
    <AppContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </AppContext.Provider>
  );
};