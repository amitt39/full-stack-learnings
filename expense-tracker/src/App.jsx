import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TransactionDetails from "./components/TransactionDetails";
import { useState } from "react";

function App() {
  function getIncome(amount) {
    setIncome(amount);
    console.log(`From Component ${amount}`);
  }
  function getExpense(amount) {
    setExpense(amount);
  }
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  return (
    <>
      <div className="bg-slate-50 h-screen max-w-6xl mx-auto flex flex-col items-center">
        <Navbar />
        <Dashboard income={income} expense={expense} />
        <TransactionDetails getIncome={getIncome} getExpense={getExpense} />
      </div>
    </>
  );
}

export default App;
