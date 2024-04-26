import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  });

  const [value, setValue] = useState("income");
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleFormSubmit = (data) => {
    if (!data.description || !data.amount) return;

    setTransactions([...transactions, { ...data, id: Date.now() }]);
  };

  console.log(transactions);

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        value,
        setValue,
        totalIncome,
        setTotalIncome,
        totalExpense,
        setTotalExpense,
        transactions,
        setTransactions,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
